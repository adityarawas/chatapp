import { AppBar, Toolbar, makeStyles, Box } from "@material-ui/core";
import Login from "./Account/Login";

const useStyles = makeStyles({
  loginHeader: {
    height: 200,
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
  return (
    <Box className={classes.componenet}>
      <AppBar className={classes.loginHeader}>
        <Toolbar></Toolbar>
      </AppBar>
      <Login />
    </Box>
  );
};

export default Messenger;
