import axios from 'axios'
const client = axios.create({
    baseURL: "http://localhost:3500" 
  });

export const addUser = async (data) =>{
    try{    
        await client.post('/add',data)
       
    }catch(error){
        console.log(`Error while calling addUser ${error}`)
    }
}