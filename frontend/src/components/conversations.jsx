import React, { useEffect, useRef, useState } from 'react'
import Conversation from './conversation'
import Placeholder from './placeholder'
import useProfile from '../store/useProfile';
import Header from './header';
import useSend from '../hooks/useSend';
import useMsglistner from '../hooks/useMsglistner';

export default function Conversations() {
    const { send } = useSend();
    const { selectedprofile } = useProfile();
    const lastMessageRef = useRef();
    const [message, setMessage] = useState("");
    useMsglistner();
    const sendmessage = async (e) => {
        if (!message) return;
        await send(message);
        setMessage("")
    }

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
        }, 100);
    }, [message]);

    return (

        <div className={`w-80 h-[89vh] md:w-auto rounded-2xl p-5 md:flex flex-col ${selectedprofile ? "bg-gray-100" : ""} ${!selectedprofile ? "hidden" : ""}`}>
            {!selectedprofile ? (<Placeholder />) : (<>
                    <Header />
            
                <div className="h-[75vh]">
                    <Conversation />
                </div>
                <div className=" relative h-[8vh] bg-gray-100  ">
                    <div className="flex items-center  rounded-lg ">
                        <input type="text" placeholder="Type your message here..." className="flex-1 px-4 py-2 border rounded-r-2xl border-blue-500 rounded-md focus:outline-none focus:border-blue-500" value={message} onChange={(e) => setMessage(e.target.value)} />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-2xl ml-3 absolute right-0" onClick={sendmessage}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M13.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L11.69 12 4.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M19.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06L17.69 12l-6.97-6.97a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </div>
                </div>
            </>
            )}
        </div>
    )
}
