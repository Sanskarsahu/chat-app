import React, { useEffect, useRef } from 'react'
import useProfile from '../store/useProfile';
import useGetMsg from '../hooks/useGetMsg';
import From from './from';
import MessageSk from "./skeloton/MessageSk"

export default function Conversation() {
    
    const{selectedprofile}=useProfile();
    const {messages,loding}= useGetMsg();
    const lastMessageRef = useRef();

    

    useEffect(() => {
		setTimeout(() => {
			lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
		}, 100);
	}, [messages]);
    return (
        <div className=' h-full pb-16  overflow-hidden overflow-y-scroll scroll-smooth relative top-10 '>
        {(messages.length === 0)? (
            <p>send messages to start the chat</p>
        ) :
           <>
           { messages.map((m) => (
           <>
             {loding? <MessageSk/>:<div key={m._id} ref={lastMessageRef}><From profile={selectedprofile}  messages={m}/></div>} 
           
           </>
           ))}
           
           </>
            }
        </div>
    )
}
