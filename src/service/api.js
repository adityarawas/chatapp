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