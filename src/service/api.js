import axios from 'axios'
const client = axios.create({
    baseURL: "http://localhost:3500/api/v1" 
  });


// login & signup
export const addUsers = async (data) =>{
    try{    
        await client.post('/addusers',data)
       
    }catch(error){
        console.log(`Error while calling addUser ${error}`)
    }
}

// get
export const getUsers = async (data) =>{
    try{    
        const resp = await client.get('/getusers')
        return resp
       
    }catch(error){
        return {data:{users:[]}}
    }
}

export const setConversation = async (data) =>{
    try{
        const resp = await client.post('/conversation/add',data)
    }catch(error){
        console.log(error)
    }
}

export const getConversation = async (data) =>{
    try{
        const resp = await client.post('/conversation/get',data)
        return resp
    }catch(error){
        console.log(`ERROR WHILE CALLING getConversation ${error}`)
    }
}

export const newmessage = async (data)=>{
    try{
        const resp = await client.post('/conversation/new',data)
        return resp
    }catch(error){
        console.log(`ERROR WHILE CALLING newmessage ${error}`)

    }
}


export const getMessage = async (data) =>{
    try{
        const resp = await client.get(`/conversation/get/${data}`)
        return resp
    }catch(err){
        console.log(`ERROR WHILE CALLING getMessage ${err}`)
    }
}