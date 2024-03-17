import  { useEffect, useState } from 'react'
import useProfile from '../store/useProfile'
import toast from 'react-hot-toast';

export default function useGetMsg() {
  const [loding ,setLoding]=useState(false)
  const {messages,setMessages,selectedprofile}=useProfile();
  useEffect(()=>{
    const getMsg= async()=>
    {
      setLoding(true)
        try {
            const res =await fetch(`/api/messages/${selectedprofile?._id}`);
            const data= await res.json();
            if(data.error) throw new Error(data.error);
            setMessages(data);
        } catch (error) {
            toast.error(error.message)
        }
        finally{
          setLoding(false)
        }
    }
    if(selectedprofile?._id) getMsg();

  },[selectedprofile, setMessages]);
  return {messages,loding}
}
