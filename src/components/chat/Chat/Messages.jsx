import { useState, useContext, useEffect } from "react";
import { Box, makeStyles } from "@material-ui/core";
import { AccountContext } from "../../../context/AccountProvider";
import { newmessage, getMessage, setConversation } from "../../../service/api";

import bg from "./bg.png";
import Footer from "./Footer";
import Message from "./Message";
const useStyles = makeStyles({
  messageWrapper: {
    background: `url(${bg})`,
    backgroundSize: "30%",
    position: "relative",
  },
  component: {
    height: "77vh",
    overflowY: "auto",
  },
  container: {
    padding: "1px 18px",
  },
});
const Messages = ({ convesation }) => {
  const { account } = useContext(AccountContext);
  const [convMessages, setconvMessages] = useState([]);
  useEffect(() => {
    const getMessageDetails = async () => {
      const resp = await getMessage(convesation?.data?.conversationid);
      setconvMessages(resp.data.messages);
    };
    getMessageDetails();
  }, [convesation?.data?.conversationid]);

  const classes = useStyles();
  const [message, setMessage] = useState("");
  const sendMsg = async (e) => {
    const code = e.keyCode || e.which;
    if (code === 13) {
      if (message?.length) {
        let msgDetails = {
          convesationId: convesation?.data?.conversationid,
          message,
          sender: account.googleId,
        };
        const resp = await newmessage(msgDetails);
        if (resp.status == 200) {
          setMessage("");
        }
      }
    }
  };
  const sendText = async () => {
    if (message?.length) {
      let msgDetails = {
        convesationId: convesation?.data?.conversationid,
        message,
        sender: account.googleId,
      };
      const resp = await newmessage(msgDetails);
      if (resp.status == 200) {
        setMessage("");
      }
    }
  };
  return (
    <Box className={classes.messageWrapper}>
      <Box className={classes.component}>
        {convMessages &&
          convMessages.map((i) => {
            return (
              <Box className={classes.container}>
                <Message message={i} />
              </Box>
            );
          })}
      </Box>
      <Footer
        message={message}
        setMessage={setMessage}
        sendMsg={sendMsg}
        sendText={sendText}
      />
    </Box>
  );
};

export default Messages;
