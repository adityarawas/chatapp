import { useState, useContext } from "react" 
import { MoreVert } from "@material-ui/icons"
import {Menu, MenuItem, makeStyles} from '@material-ui/core'
import {GoogleLogout} from 'react-google-login'
import { googleapi } from "../../utils"
import { AccountContext } from "../../context/AccountProvider"

const useStyle = makeStyles({
    menuItem:{
        fontSize:14,
        padding:"15px 60px 5px 24px",
        color:"#4A4A4A"
    },
    logout:{
        border:"none !important",
        borderShadow:"none !imporant"
    }
})
const Headermenu = () => {
    
        const classes = useStyle()

    const {setAccount} = useContext(AccountContext)

    const onLogoutSuccess = () =>{
        setAccount(null)
        console.clear();
    }
 
    const [open, setOpen] = useState(false)
    const handleClose = () =>{
        setOpen(false)
    }
    const handelOpen = () =>{
        setOpen(!open)
    }
    return (
        <>
           <MoreVert onClick={handelOpen} /> 
            <Menu
            anchorEl={open}
            keepMounted
            open={Boolean(open)}
            onClose={handleClose}
            getContentAnchorEl={null}
            anchorOrigin={{
                vertical:"top",
                horizontal:"center"
            }}
            transformOrigin={{ vertical: "top", horizontal: "center" }}

            style={{
            top:"8%",
            left:"-30%"
        }}
            >
            <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
            <MenuItem className={classes.menuItem}  onClick={handleClose}>
                <GoogleLogout 
                    clientId={googleapi}
                    buttonText="Logout"
                    onLogoutSuccess={onLogoutSuccess}
                    className={classes.logout}
                />
            </MenuItem>
            </Menu>

        </>
    )
}

export default Headermenu
