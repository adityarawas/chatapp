import { useState, useContext, useEffect } from "react";
import { Box, Typography, makeStyles } from "@material-ui/core"
import { AccountContext } from "../../../context/AccountProvider";

const useStyles = makeStyles({
    wrapper:{
        background:'#fff',
        padding:5,
        maxWidth:"60%",
        display:"flex",
        borderRadius:10,
        width:"fit-content",
    },
    text:{
        fontSize:14,
        padding:'0 25px 0 5px',
        wordBreak:'break-word'

    },
    time:{
        fontSize:10,
        marginTop:'auto',
        color:"#9999"
    },
    owner:{
        background:"#dcf8c6",
        padding:5,
        maxWidth:"60%",
        display:"flex",
        borderRadius:10,
        width:"fit-content",
        marginLeft:"auto"
    }
})

const Message = ({message}) => {
    const { account } = useContext(AccountContext);
    const classes = useStyles()
    const formatDate = (date) =>{
        return date < 10 ? '0' +date:date;
    }
    return (
        <Box className={account.googleId === message.sender ? classes.owner : classes.wrapper}>
            <Typography className={classes.text}>{message.message}</Typography>
            <Typography className={classes.time}>{formatDate(new Date(message.createdAt).getHours())}:{formatDate(new Date(message.createdAt).getMinutes())}</Typography>
        </Box>
    )
}

export default Message
