import { ThemeProvider, createTheme  } from "@material-ui/core/styles"
import React, {createContext} from "react"

const TemplateContext = createContext(null)

const TemplateProvider = ({children}) => {

    const theme = createTheme ({

            overrides:{
     
                MuiDrawer:{
                    paperAnchorLeft:{
                        height:"90%",
                        top:'5%',
                        width:"24.8%",
                        left:'5%'
                    },
             
                },
                
            }
    })

    return (
        <TemplateContext.Provider>
            <ThemeProvider theme={theme}>
                    {children}
            </ThemeProvider>    
        </TemplateContext.Provider>
    )
}

export default TemplateProvider
