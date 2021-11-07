import dotenv from 'dotenv'  
import express from 'express';
import Connection from './database/db.js';
dotenv.config()

// components

const app = express();
const PORT = process.env.PORT;
Connection()
app.listen(PORT,()=>{
    console.log(PORT)
})