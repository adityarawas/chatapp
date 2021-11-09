import { useState } from "react";
import { Box, makeStyles, InputBase } from "@material-ui/core";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import SendIcon from "@material-ui/icons/Send";
const useStyles = makeStyles({
  footer: {
    height: "6.8vh",
    width: "97.8%",
    background: "#ededed",
    display: "flex",
    alignItems: "center",
    padding: "0 15px 0 15px",
    "& > *": {
      margin: 5,
      color: "#919191",
    },
  },
  clip: {
    transform: "rotate(35deg)",
  },
  icons: {
    cursor: "pointer",
  },
  inputbase: {
    width: "100%",
    background: "#fff",
    borderRadius: "50px",
    padding: "3px 10px 3px 10px",
    height: 45,
  },
  inputbasecontainer: {
    width: "100%",
  },
});

const Footer = ({setMessage,message,sendMsg, sendText}) => {
  const classes = useStyles();



  return (
    <Box className={classes.footer}>
      <EmojiEmotionsIcon className={`${classes.icons}`} />
      <AttachFileIcon className={`${classes.clip} ${classes.icons}`} />
      <Box className={classes.inputbasecontainer}>
        <InputBase
          className={classes.inputbase}
          value={message}
          onChange={(e) =>setMessage(e.target.value)}
          onKeyPress={(e) =>sendMsg(e)}
          
          placeholder="Type a message"
        />
      </Box>
      {message?.length ? (
        <SendIcon className={`${classes.icons}`} onClick={sendText} />
      ) : (
        <MicIcon className={`${classes.icons}`} />
      )}
    </Box>
  );
};

export default Footer;
