import {Drawer, Box, Typography, makeStyles} from '@material-ui/core'
import { ArrowBack } from '@material-ui/icons'
import Profile from './Profile' 
const useStyles = makeStyles({
    header:{
        background:"#00bfa5",
        height:"11.2%",
        color:"#fff",
        display:"flex",
        "& > *":{
            marginTop:'auto',
            padding: 15,
            fontWeight:600
        }
    },
    component:{
        background:"#ededed",
        height:"100%"
    }
})

const InfoDrawer = ({open,setOpen}) => {
    const handelClose = () => setOpen(!open)
    const classes = useStyles()
    return (
        <Drawer open={open} 
        BackdropProps={{ invisible: true }}
        PaperProps={{ elevation: 0 }}
        className={classes.drawer}
        >
                <Box className={classes.header}>
                        <ArrowBack onClick={handelClose}  style={{cursor:"pointer"}}/>
                        <Typography>Profile</Typography>
                </Box>
                <Box className={classes.component}>
                    <Profile />
                </Box>
        </Drawer>
    )
}

export default InfoDrawer
