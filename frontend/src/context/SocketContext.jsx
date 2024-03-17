import { createContext, useContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from "socket.io-client"

export const SocketContext = createContext();

export const  useSocket=()=>{
    return useContext(SocketContext);
}



export const SocketContextProvider = ({children})=>{
    const[socket ,setSocket]= useState(null);
    const [online, setOnline] = useState([]);
    const {auth} =useAuthContext();

    useEffect(()=>{
        if (auth){
            const socket = io ("https://chat-app-odse.onrender.com/",{
                query:{
                    userId:auth._id,
                },
            });

            setSocket(socket);
            socket.on( "getOnlineUsers", (u)=>{
                setOnline(u);
            })
            return ()=> socket.close();
        }else{
            if (socket){
                socket.close();
                setSocket(null);
            }
        }
    },[auth])


    return <SocketContext.Provider value={{socket,online}}>{children}</SocketContext.Provider>
}