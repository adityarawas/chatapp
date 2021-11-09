import {createContext,useEffect, useState, useRef} from  'react';
import { io } from 'socket.io-client';
export const AccountContext = createContext(null);

const AccountProvider = ({children}) => {
    const [account, setAccount] = useState(null)
    const [activeUsers, setactiveUsers] = useState([])
    const [newMessageFlag, setnewMessageFlag] = useState(false)


    const socket = useRef();

    useEffect(() => {
        console.log(activeUsers)
    }, [activeUsers])

    useEffect(() => {
           socket.current = io('ws://localhost:9000');
    }, [])
    
    return (
        <>
        <AccountContext.Provider value={{account,setAccount,socket,setactiveUsers,activeUsers, newMessageFlag,  setnewMessageFlag}}>
            {children}
        </AccountContext.Provider>
        </>
        
    )
}

export default AccountProvider
