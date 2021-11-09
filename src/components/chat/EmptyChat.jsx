import { makeStyles, Typography } from "@material-ui/core"
import bg from './startconversation.svg'
const useStyles = makeStyles({
    wrapper:{
        background:"#f8f9fa",
        width:"100%",
        height:"100%",
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    img:{
        height:500,
        
    }
})
const EmptyChat = () => {
    const classes = useStyles()
    return (
        <div className={classes.wrapper}>
           <div>
           <img src={bg} className={classes.img}/>
           <Typography variant="h4" color="textSecondary" style={{textAlign:"center"}}>Start Conversation</Typography>
           </div>
        </div>
    )
}

export default EmptyChat
