import Router from './routes/router.js';
import dotenv from 'dotenv'  
import express from 'express';
import Connection from './database/db.js';
import bodyParser from 'body-parser'
import cors from 'cors'
dotenv.config()

const app = express();

app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api/v1/',Router)

const PORT = process.env.PORT;

Connection()

app.listen(PORT,()=>{
    console.log(PORT)
})