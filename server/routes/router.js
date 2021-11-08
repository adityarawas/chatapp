import express from 'express';
import {addUsers,getUsers} from '../controllers/controller.js'
import {newConversation} from '../controllers/conversation.js'

const route = express.Router()


route.post('/addusers',addUsers)
route.get('/getusers',getUsers)
route.post('/conversation/add',newConversation)
export default route