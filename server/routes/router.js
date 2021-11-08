import express from 'express';
import {addUsers,getUsers} from '../controllers/controller.js'
const route = express.Router()


route.post('/addusers',addUsers)
route.get('/getusers',getUsers)
export default route