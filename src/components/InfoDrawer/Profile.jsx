import { Box, makeStyles, Typography } from "@material-ui/core"
import { useContext } from "react"
import { AccountContext } from "../../context/AccountProvider"

const useStyles =  makeStyles({
    imageContainer:{
        display:"flex",
        justifyContent:"center",
    },
    displayPicture:{
        width:200,
        height:200,
        borderRadius:"100%",
        padding:"10% 0"
    },
    nameContainer:{
        background:"#ffff",
        padding:'12px 30px 2px',
        boxShadow:'0 1px 3px rgba(0,0,0,0.4)',
        '& :first-child':{
            fontSize:14,
            color:"#009688"
        },
        '& :last-child':{
            color: '#4A4A4A',
            margin: '14px 0'
        }
    },
    description:{
        padding: '10px 20px 28px 30px',
        '& > *':{
            fontSize: 12,
            color: 'rgba(0,0,0,0.45)'
        }
    }
})

const Profile = () => {

    const {account} = useContext(AccountContext)
    const classes = useStyles()
    return (
        <>
        <Box className={classes.imageContainer}>
            <img src={account.imageUrl} alt="dp" className={classes.displayPicture} />
        </Box>
        <Box className={classes.nameContainer}>
            <Typography>Your Name</Typography>
            <Typography>{account.name}</Typography>
        </Box>
        <Box className={classes.description}>
            <Typography>
                This is not your username or pin. This name will be visible to your contacts
            </Typography>
        </Box>
        <Box className={classes.nameContainer}>
            <Typography>About</Typography>
            <Typography>Can I get a HUH-YEAH!</Typography>
        </Box>

        </>
    )
}

export default Profile
