import { useEffect, useState } from "react"
import { getUsers } from "../../service/api";
import {Box} from '@material-ui/core'
import Conversation from "./Conversation";
const Conversations = () => {
    const [users,setUsers] = useState([])
    useEffect(() => {
        getUsers()
        .then(data=>{
            if(data?.data?.users?.length){
                setUsers(data?.data?.users)
            }
        })
        .catch(err=>{
            console.log(err)
        })
    }, [])
    return (
        <Box>
            {
                users?.map(i=>{
                  return  <Conversation user={i}/>
                })
            }
        </Box>
    )
}

export default Conversations
