import React, { useState } from 'react';
import {Link }from 'react-router-dom'
import useSignup from '../hooks/useSignup';

const Signup = () => {
    const [userdata,setUserdata]= useState({
        fullname:'',
        username:'',
        password:'',
        profilePic:'',
        confirmPassword:'',
        gender:'',

    });
      const {signup}=useSignup();
     const handleSubmit = async(e)=>{
        e.preventDefault();
        
        await signup( userdata);
 
     }


    return (
        <div className="h-full w-full flex justify-center items-center">
            <div className=' overflow-hidden w-96 flex flex-col items-center justify-center bg-blue-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100'>
                <div className=' p-3 text-5xl text-black gap-x-3 font-extrabold drop-shadow-xl'>
                    <h1>Signup </h1>
                </div>
                <form  className="flex flex-col gap-6 ">
                    <label class="input input-bordered flex items-center gap-2">
                        <input type="text"  className="grow" placeholder="full name" value={userdata.fullname} onChange={(e)=>setUserdata({...userdata, fullname: e.target.value})}/>
                    </label>
                    
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
                        <input type="text" className="grow" placeholder="Username" value={userdata.username} onChange={(e)=>setUserdata({...userdata, username: e.target.value})} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" placeholder='password' value={userdata.password} onChange={(e)=>setUserdata({...userdata, password: e.target.value})} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
                        <input type="password" className="grow" placeholder='confirm password' value={userdata.confirmPassword} onChange={(e)=>setUserdata({...userdata, confirmPassword: e.target.value})}/>
                    </label>
                    <select className="select select-bordered w-full max-w-xs" value={userdata.gender} onChange={(e)=>setUserdata({...userdata, gender: e.target.value})}>
                        <option disabled selected value={''}>chose your gender</option>
                        <option value="male">male</option>
                        <option value="female">female</option>
                    </select>
                    <span className=' text-black cursor-pointer text-lg'>already have an account? <Link className='text-red-500  hover:text-red-600' to='/login' >login</Link></span>
                    <div className="pb-5 flex items-center justify-center"><button onClick={handleSubmit} className="btn glass" >Signup</button></div>
                </form>
            </div>
        </div>
    );
}

export default Signup;
