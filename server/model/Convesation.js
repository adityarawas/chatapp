import mongoose from "mongoose";

const conversation = new mongoose.Schema({
    members:{
        type:Array
    }
},{ timestamps:true})

const Convesation = mongoose.model('conversation', conversation)

export default Convesation;