import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./Account/Login";
import { AccountContext } from "../../context/AccountProvider";
import { useContext } from "react";
import Chatbox from "../chat/Chatbox";
const useStyles = makeStyles({
  loginHeader: {
    height: 200,
    background: "#00bfa5",
    boxShadow: "none",
  },
  header: {
    height: 115,
    background: "#00bfa5",
    boxShadow: "none",
  },
  componenet:{
    background:"#DCDCDc",
    height:"100vh"
  }
});

const Messenger = () => {
  const classes = useStyles();
  const {account} = useContext(AccountContext)
  return (
    <Box className={classes.componenet}>
      <AppBar className={ account ? classes.header : classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      {
        account  ? <Chatbox />  :  <Login />
      }
      
    </Box>
  );
};

export default Messenger;
