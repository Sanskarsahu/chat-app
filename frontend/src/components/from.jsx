import React from 'react'
import { extractTime } from '../util/time';
import useProfile from '../store/useProfile';
import useSend from '../hooks/useSend';
import Msg from "./skeloton/msg"
import {useAuthContext } from '../context/AuthContext'
export default function From(props) {
    const {loding} =useSend();
    
    const { auth } = useAuthContext();
    const fromme= props.messages.senderid === auth._id;
    const{selectedprofile}= useProfile();
    
    const chatclassname= fromme? "chat-end": "chat-start";
    const profilePic= fromme ? auth.profilePic : selectedprofile?.profilePic;
    const fullname = fromme ? auth.fullname : selectedprofile?.fullname;
    const formattedTime = extractTime(props.messages.createdAt);
    const footer = fromme ? "Delivered at" : "sent at ";
  return (
    <div>

       {loding? <Msg/>:<div className={`chat ${chatclassname}`}>
                <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS chat bubble component" src={profilePic}/>
                    </div>
                </div>
                <div className="chat-header">
                    {fullname}
                    
                </div>
                <div className="chat-bubble">{props.messages.message}</div>
                <div className="chat-footer opacity-50">
                    {footer}<time className="text-xs opacity-50">{formattedTime}</time>
                </div>
            </div>}
           
            
    </div>
  )
}
