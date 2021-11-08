import { Box } from "@material-ui/core"
import ChatHeader from "./ChatHeader"
import Messages from "./Messages"

const Chat = () => {
    return (
        <Box>
            <ChatHeader />
            <Messages/>
        </Box>
    )
}

export default Chat
