import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';


export default function useLogout() {
    const [loding, setLoading] = useState(false);
    const {setAuth}= useAuthContext();
    const logout = async () => {
       
        setLoading(true);
        try {
            const res = await fetch("/api/auth/logout",{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                
            })
            const data = await res.json();
            if (data.error){
                throw new Error(data.error)
            }
            localStorage.removeItem("chat-user");
            setAuth(null);


        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }
    return ({loding,logout})
}