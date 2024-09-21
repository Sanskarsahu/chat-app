import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

export default function useLogin() {
    const [loding, setLoading] = useState(false);
    const {setAuth}= useAuthContext();
    const login = async (username, password) => {
       
        const success = handleInputError(username, password)
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/login",{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({username, password})
            })
            const data = await res.json();
            if (data.error){
                throw new Error(data.error)
            }
            localStorage.setItem("chat-user",JSON.stringify(data));
            
            setAuth(data);


        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false)
        }
    }
    return ({loding,login})
}
function handleInputError(username, password) {
    if (!username || !password) {
        toast.error("please fill all the fields")
        return false;
    }
    return true;
}