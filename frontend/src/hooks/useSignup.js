
import { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';


export default function useSignup() {
    const [loding, setLoading] = useState(false);
    const {setAuth}= useAuthContext();
    const signup = async ({ fullname, username, password, confirmPassword, gender,profilePic }) => {
       
        const success = handleInputError({ fullname, username, password, confirmPassword, gender,profilePic })
        if (!success) return;
        setLoading(true);
        try {
            const res = await fetch("/api/auth/signup",{
                method: "POST",
                headers:{"Content-Type":"application/json"},
                body: JSON.stringify({ fullname, username, password, confirmPassword, gender ,profilePic })
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
    return ({loding,signup})
}
function handleInputError({ fullname, username, password, confirmPassword, gender }) {
    if (!fullname || !username || !password || !confirmPassword || !gender) {
        toast.error("please fill all the fields")
        return false;
    }
    if (password !== confirmPassword) {
        toast.error("password dosent match")
        return false;
    }
   
    return true;

} 