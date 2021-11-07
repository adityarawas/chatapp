import mongoose from "mongoose";
import dotenv from 'dotenv'  
dotenv.config()

const Connection = async () => {
    const connectionString =process.env.CONNECTIONSTRING
    try {
       await mongoose.connect(connectionString,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
        })
        console.log('Database connected successfully')
    }catch(error){
            console.log(`Error while connecting to database ${error}`)
    }
}

export default Connection;