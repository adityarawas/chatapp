import express from 'express';
import {addUsers,getUsers} from '../controllers/controller.js'
import {newConversation, getConversation, newMessage, getmessages} from '../controllers/conversation.js'

const route = express.Router()


route.post('/addusers',addUsers)
route.get('/getusers',getUsers)
route.post('/conversation/add',newConversation)
route.post('/conversation/get',getConversation)
route.post('/conversation/new',newMessage)
route.get('/conversation/get/:id',getmessages)
export default route