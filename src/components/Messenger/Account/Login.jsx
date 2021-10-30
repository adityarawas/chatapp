import { Dialog, withStyles, Box, Typography, makeStyles, List, ListItem, Button } from "@material-ui/core"
import {GoogleLogin} from 'react-google-login'



const useStyles = makeStyles({
    component:{
        display:"flex",
        alignItems:"center",
        justifyContent:"space-around"
    },
    leftComponent:{
        padding:"56px 0 56px 56px"
    },
    title:{
        fontSize:26,
        marginBottom:50,
        color:'#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight:300
    },
    list:{
        '& > *':{
            fontSize:18,
            padding:0,
            marginTop:15,
            lineheight:"28px",
            color:"#4a4a4a"
        }
    }
})

const styles = {
    dialogPaper:{
        height:"90%",
        width:"60%",
        marginTop:"12%",
        boxShadow:'none',
        borderRadius:"0px",
        maxHeight:"100%",
        maxWidth:"100%"
    }
}

const onLoginSuccess = (res) =>{
    console.log(res.profileObj)
    console.log("Login Successful")
}

const onLoginFailure = () =>{
    console.log("Login Unsuccessful")
    
}

const Login = ({classes}) => {
    const className = useStyles();
    const clientId = "150730818658-c56m1tu1vphvitu5js98mh45fjg0178a.apps.googleusercontent.com"
    return (
     <Dialog 
     open={true}
     classes={{paper:classes.dialogPaper}}
     BackdropProps={{style:{backgroundColor:"unset"}}}
     >
         <Box className={className.component}>
             <Box className={className.leftComponent}>
                 <Typography className={className.title}>To use BroChat on your computer:</Typography>
                 <List className={className.list}>
                     <ListItem>1. Click on Login with Google</ListItem>
                     <ListItem>2. Select Google account of your choice</ListItem>
                 </List>
             </Box>
             <Box>
               <GoogleLogin 
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    clientId={clientId}
               />
             </Box>
         </Box>
     </Dialog>
    )
}

export default withStyles(styles)(Login)
