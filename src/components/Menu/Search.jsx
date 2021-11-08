import {Box,  InputBase} from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons'
import { alpha, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    component:{
        background:"#eeeeee",
        width:"100%",
        paddingBottom:"5px"
    },
    search: {
        position: 'relative',
        borderRadius: 18,
        backgroundColor: "#FFFFFF",
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        alignItems:"center",
        display:"flex",
        marginLeft:"10px",
        marginRight:"10px",

        marginLeft: 0,

        width: '95%',
        [theme.breakpoints.up('sm')]: {
            marginLeft:"10px",
            marginRight:"10px",
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputRoot: {
        color: 'inherit',
        width:"100% !important"
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100% !important',
        fontSize:14,
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
      },
}))

const Search = ({setText}) => {
    const classes = useStyles()
    return (
        <Box className={classes.component}>
        <Box className={classes.search}>
            <Box className={classes.searchIcon}>
                <SearchOutlined />
            </Box>
            <InputBase
            placeholder="Search.."
            classes={{
                root:classes.inputRoot,
                input:classes.inputInput
            }} 
            inputProps={{'aria-label':'search'}}
            onChange={(e)=>{
              setText(e.target.value)
            }}
            />
        </Box>
        </Box>

            
    )
}

export default Search
