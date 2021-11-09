import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})

let users = []
const addUser = (userId, socketId) =>{
    !users.some(user => user.userId === userId) && users.push({userId, socketId})
}

const getUser = (userid) =>{
    return users.find(user=> user.userId == userid)
}

const removeUser = (socketid) =>{
    users = users.filter(user=> user.socketId != socketid)
}

io.on('connection',(socket)=>{
    console.log(`USER CONNECTED`);

    socket.on("addUser",userId=>{
        addUser(userId,socket.id)
        io.emit('getUsers', users)
        console.log(`TOTAL USRS`,users)

    });

    socket.on("sendMessage",({senderId,receiverId,text})=>{
        const user = getUser(receiverId)
        console.log(user)
        io.to(user.socketId).emit('getMessage',{
            senderId,
            text
        })
    })

    // on disconnect
    socket.on('disconnect', ()=>{
        console.log('User Disconnected')
        removeUser(socket.id)
        io.emit('getUsers',users)
        console.log(users)
    })
})

