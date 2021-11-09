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
const Messages = ({ person, convesation }) => {
  const { account, socket, newMessageFlag, setnewMessageFlag } =
    useContext(AccountContext);
  const [convMessages, setconvMessages] = useState([]);
  const [incoming, setincoming] = useState(null);
  useEffect(() => {
    socket.current.on("getMessage", (data) => {
      setincoming({
        sender: data.senderId,
        message: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    if (
      incoming &&
      convesation?.data?.members[0].$all.includes(incoming.sender)
    ) {
      setconvMessages((prev) => [...prev, incoming]);
    }
  }, [incoming, convesation]);

  useEffect(() => {
    const getMessageDetails = async () => {
      const resp = await getMessage(convesation?.data?.conversationid);
      setconvMessages(resp.data.messages);
    };
    getMessageDetails();
  }, [convesation?.data?.conversationid, person._id, newMessageFlag]);

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
        const receiverId = convesation?.data?.members[0].$all.find(
          (i) => i !== account.googleId
        );

        socket.current.emit("sendMessage", {
          senderId: account.googleId,
          receiverId,
          text: message,
        });

        const resp = await newmessage(msgDetails);
        if (resp.status == 200) {
          setMessage("");
          setnewMessageFlag((prev) => !prev);
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
      const receiverId = convesation?.data?.members[0].$all.find(
        (i) => i !== account.googleId
      );

      socket.current.emit("sendMessage", {
        senderId: account.googleId,
        receiverId,
        text: message,
      });

      const resp = await newmessage(msgDetails);
      if (resp.status == 200) {
        setMessage("");
        setnewMessageFlag((prev) => !prev);
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
