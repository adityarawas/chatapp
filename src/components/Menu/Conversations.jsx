import { useEffect, useState, useContext } from "react";
import { getUsers } from "../../service/api";
import { Box, makeStyles } from "@material-ui/core";
import Conversation from "./Conversation";
import { AccountContext } from "../../context/AccountProvider";

const useStyles = makeStyles({
  component: {
    height: "77.5vh",
    overflowY: "auto",
  },
  noUsers: {
    textAlign: "center",
    padding: "5px  0",
    color: "#746f6f",
  },
});
const Conversations = ({ text }) => {
  const classes = useStyles();
  const { account, socket, setactiveUsers } = useContext(AccountContext);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers()
      .then((data) => {
        if (data?.data?.users?.length) {
          const getusers = data?.data?.users;
          let newusers = getusers.filter((i) => i.email != account.email);
          if (text?.length) {
            console.log(text);
            newusers = newusers.filter((i) => i.name.includes(text));
          }

          setUsers(newusers);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [text]);

  useEffect(() => {
    socket.current.emit('addUser', account.googleId)
    socket.current.on('getUsers',users=>{
      setactiveUsers(users)
    })
  }, [account])


  return (
    <Box className={classes.component}
    >
      {users.length ? (
        users?.map((i) => {
          return <Conversation user={i} />;
        })
      ) : (
        <div className={classes.noUsers}>
          <span>No users found</span>
        </div>
      )}
    </Box>
  );
};

export default Conversations;
