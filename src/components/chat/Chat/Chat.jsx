import {useState, useEffect, useContext} from 'react'
import { Box } from "@material-ui/core"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"
import { UserContext } from '../../../context/UserProvider'
import { AccountContext } from '../../../context/AccountProvider'

import { getConversation } from '../../../service/api'
const Chat = () => {
    const {account} = useContext(AccountContext);
    const {person} = useContext(UserContext)
    const [convesation, setConvesation] = useState({})

    useEffect(()=>{
        const getConvesationDetails = async () =>{
            if(account.googleId && person.googleId){
                const data = await getConversation({sender:account.googleId, receiver:person.googleId});
                setConvesation(data)
            }

        }
        getConvesationDetails()
    },[person.googleId])

    return (
        <Box>
            <ChatHeader />
            <Messages convesation={convesation} />
        </Box>
    )
}

export default Chat
