import { useContext } from "react";
import { Dialog, withStyles, Box, makeStyles } from "@material-ui/core";
import { UserContext } from "../../context/UserProvider";
import Menu from "../Menu/Menu";
import Chat from './Chat/Chat'
import EmptyChat from "./EmptyChat";
const useStyles = makeStyles({
    component:{
        display:"flex"
    },
    leftComponent:{
        minWidth: 380
    },
    rightComponent:{
        borderLeft:"1px solid rgba(0,0,0,0.14)",
        width:"100%"
    }
})

const styles = {
  dialogPaper: {
    height: "90%",
    width: "90%",
    boxShadow: "none",
    borderRadius: "0px",
    maxHeight: "100%",
    maxWidth: "100%",
  },
};

const Chatbox = ({ classes }) => {
    const classname = useStyles()
  const { person } = useContext(UserContext);
  console.log(`----------->${person}`)
  return (
    <Dialog classes={{ paper: classes.dialogPaper }} 
    open={true}
    BackdropProps={{style: {backgroundColor:"unset"}}}
    >
      <Box className={classname.component}>
        <Box className={classname.leftComponent}>
          <Menu />
        </Box>
        <Box className={classname.rightComponent}>
          {
           Object.keys(person)?.length ? <Chat /> : <EmptyChat />
          }
          
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(styles)(Chatbox);
