import mongoose from 'mongoose'

const messages = new mongoose.Schema({
    convesationId:{
        type:String,
        require:true
    },
    sender:{
        type:String,
        require:true
    },
    message:{
        type:String,
        require:true
    }
},{timestamps:true})

const Messages = mongoose.model('messages',messages)

export default Messages;