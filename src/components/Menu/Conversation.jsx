import {useContext} from 'react'
import { Box, Typography, makeStyles } from "@material-ui/core"
import { AccountContext } from "../../context/AccountProvider";
import { UserContext } from '../../context/UserProvider';

import {setConversation} from '../../service/api'
const useStyles = makeStyles({
    displayPicture:{
        width:50,
        height:50,
        borderRadius:"50%",
        padding: "0 14px",
    },
    component:{
        display:'flex',
        alignItems:"center",
        height:40,
        padding: "13px 0",
        cursor:"pointer"
    },
    userName:{
        borderBottom:"1px solid #f2f2f2",
        height:"100%",
        width:"100%"
    }
})

const Conversation = ({user}) => {
    const {account} = useContext(AccountContext);
    const {setPerson} = useContext(UserContext);

    const url = user.imageUrl;
    const classes = useStyles();
    const setUser = ()=>{
        setPerson(user)
      setConversation({senderId:account.googleId, reciverId:user.googleId})
    }
    return (
        <Box className={classes.component}
            onClick={()=> setUser()}
        
        >
            <Box>
                <img src={url} alt={user.name} className={classes.displayPicture}/>
            </Box>
            <Box className={classes.userName}>
                <Box>
                    <Typography>{user.name}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Conversation
