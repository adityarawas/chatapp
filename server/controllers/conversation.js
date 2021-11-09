import Conversation from "../../server/model/Convesation.js"
import Messages from "../../server/model/Messages.js"

export const newConversation = async (req,res) =>{
    try{
        const {senderId, receiverId} = req.body
        Conversation.findOne({senderId, receiverId})
        .then(async existingConversation =>{
            if(existingConversation === null){
                const newconversation = await new Conversation({
                    members : {$all :[senderId,receiverId]}
                })
                newconversation.save()
                .then(convo =>{
                    res.json({message:"New conversation added"}).status(200)
                })
            }else{
                res.json({message:"New already exist"}).status(200)

            }
        })
        .catch(err=>{
           
            return res.status(400).json({message:err.message})
        })

    }catch(err){
        return res.status(500).json({message:err.message})
     }
}


export const getConversation = (req, res) =>{
    try{    
        const {senderId, receiverId} = req.body
        Conversation.findOne({senderId, receiverId})
        .then(async existingConversation =>{
            if(existingConversation === null){
                const newconversation = await new Conversation({
                    members : {$all :[senderId,receiverId]}
                })
                newconversation.save()
                .then(convo =>{
                    res.json({message:"New conversation added",conversationid:convo._id}).status(200)
                })
            }else{
                res.json({message:"New already exist",conversationid:existingConversation._id}).status(200)

            }
        })
        .catch(err=>{
           
            return res.status(400).json({message:err.message})
        })
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}

export const newMessage = (req,res) =>{
    const newMessage = new Messages(req.body)

    try{
        newMessage.save()
        .then(message=>{
            return res.status(200).json({"message":"Message saved successfully",msg:message})
        })
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}

export const getmessages = async (req,res) =>{
    try{
           const messages = await Messages.find({convesationId:req.params.id})
           return res.status(200).json({messages})
    }catch(err){
        return res.status(500).json({message:err.message})
    }
}