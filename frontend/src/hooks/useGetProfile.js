import  { useEffect, useState } from "react"
import toast from 'react-hot-toast';
export default function useGetProfile() {
  const [loding,setLoding]=useState(false);
  const [profile,setProfile]= useState([]);

  useEffect(()=>
  {
    const getProfile= async ()=>{
        setLoding(true)
       try {
        
        const res =await fetch("/api/user")
        const data= await res.json();

        if(data.error){
            throw new Error(data.error)
        }
        setProfile(data);
       } catch (error) {
        toast.error(error.message)
       }
       finally{
        setLoding(false)
       }
    };
    getProfile();
  },[]);
  return {loding,profile};
}
