import User from '../model/User.js';

export const addUsers = (req,res) =>{
    const data = {...req.body}
    
    User.findOne({email:data.email})
    .then(async user =>{
        if(user?._id){
            return res.json({message:"Logged in successfully"}).status(200)
        }else{
            const newuser = await new User(data)
            newuser.save().then(data=>{
                return res.json({"success":"User Created"}).status(200)
            })
            .catch(err=>{
                if(err.code === 11000){
                    return res.status(400).json({message:"User you are trying to create already has an account"})
                }
                return res.status(400).json({message:err.message})
            })
        }
        

    })


}   

export const getUsers = (req,res) =>{
 try{
    User.find({})
    .then(users=>{
        if(users?.length){
            res.status(200).json({users})
        }else{
            res.status(404).json({message:'Users not found'})
        }   
    })                                                                                               
 }catch(err){
    return res.status(500).json({message:err.message})
 }
}   

 