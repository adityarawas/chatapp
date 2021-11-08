import {Box, makeStyles} from '@material-ui/core'
import bg from './bg.png'
import Footer from './Footer'

const useStyles = makeStyles({
    messageWrapper:{
        background:`url(${bg})`,
        backgroundSize:'30%',
        position:'relative'
    },
    component:{
        height:"77vh"
    }
})
const Messages = () => {
    const classes = useStyles()
    return (
        <Box className={classes.messageWrapper}>
            <Box className={classes.component}>
            message
            </Box>
            <Footer />
        </Box>
    )
}

export default Messages
