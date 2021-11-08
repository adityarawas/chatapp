import { Dialog, withStyles, Box, makeStyles } from "@material-ui/core";
import Menu from "../Menu/Menu";
import Chat from './Chat/Chat'

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
          <Chat />
        </Box>
      </Box>
    </Dialog>
  );
};

export default withStyles(styles)(Chatbox);
