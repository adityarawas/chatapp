import {Box, makeStyles} from '@material-ui/core'

const useStyles = makeStyles({
    footer:{
        height:"5.6vh",
        width:"100%",
        background:"#ededed",
    }
})

const Footer = () => {
    const classes = useStyles()
    return (
        <Box className={classes.footer}>
            footer
        </Box>
    )
}

export default Footer
