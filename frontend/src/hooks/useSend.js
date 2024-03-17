
import toast from 'react-hot-toast';
import useProfile from '../store/useProfile'
import { useState } from 'react';

export default function useSend() {
    const {messages,setMessages,selectedprofile}= useProfile();
    const [loding,setLoding]=useState(false);
    const send =async (message)=>{
        setLoding(true)
        try {
            const res =await fetch(`/api/messages/send/${selectedprofile?._id}`,{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body : JSON.stringify({message})
        })
        const data= await res.json()
        if(data.error) throw new Error(data.error);
        setMessages([...messages ,data])
        } catch (error) {
            toast.error(error.message)
        }
         finally{
            setLoding(false);
         }
    }
 return {loding,send}
}
