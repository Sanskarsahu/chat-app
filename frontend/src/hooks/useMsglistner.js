import { useEffect } from "react";
import { useSocket }from "../context/SocketContext"
import useProfile from "../store/useProfile"
import messagesound from "../assets/messageSound.mp3"
export default function useMsglistner() {
 const {socket} = useSocket()
 const {messages,setMessages}= useProfile();

 useEffect(()=>{
    socket?.on("newMessage",(newMessage)=>{
        const sound= new Audio(messagesound);
        sound.play();
        setMessages([...messages,newMessage]);
    });
    return ()=> socket?.off("newMessage");
 },[socket ,setMessages,messages])
}
