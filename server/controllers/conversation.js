import Conversation from "../../server/model/Convesation.js"

export const newConversation = async (req,res) =>{
    try{
        const {senderId, reciverId} = req.body
        Conversation.findOne({senderId, reciverId})
        .then(async existingConversation =>{
            if(existingConversation === null){
                const newconversation = await new Conversation({
                    members : {$all :[senderId,reciverId]}
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