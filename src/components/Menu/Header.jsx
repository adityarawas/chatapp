import {useContext} from 'react';
import {AccountContext} from '../../context/AccountProvider'
import {Box, makeStyles} from '@material-ui/core';
import {Chat} from "@material-ui/icons"
import Headermenu from './Headermenu';

const useStyles = makeStyles({
    header:{
        height:35,
        backgroundColor:"#edededed",
        padding:"10px 16px",
        display:"flex",
        alignItems:"center"
    },
    avatar:{
        height: 37,
        width: 37,
        borderRadius:"50%"

    }
    ,icons:{
        marginLeft:"auto",
        "& > *":{
            marginLeft:2,
            padding:8,
            color:"#919191"
        },
        "& :first-child":{
            fontSize:22,
            marginRight:8,
            marginTop:3
        }
    }
})

const Header = () => {
    const {account} = useContext(AccountContext)
    const classes = useStyles()
    return (
        <Box className={classes.header}>
            <img src={account.imageUrl} className={classes.avatar} alt="Display picture" />
            <Box className={classes.icons}>
                <Chat />
                <Headermenu />
            </Box>
        </Box>
    )
}

export default Header
