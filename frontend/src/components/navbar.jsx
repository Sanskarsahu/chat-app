import React from 'react';
import useLogout from '../hooks/useLogout';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
    const{logout}=useLogout()
    const  {auth} =useAuthContext()
    return (

        <div className="navbar bg-transparent sticky">
            <div className="flex-1">
                <div className=' md:p-5 text-4xl bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 gap-x-3 font-extrabold drop-shadow-xl'>
                    <h5>chat app </h5>
                </div>
            </div>
            <div className="flex-none gap-2">
                
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={auth.profilePic} />
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                    
                            <h1 className="justify-between">
                                {auth.fullname}
                               
                            </h1>
                        
                        <button className='btn cursor-pointer' onClick={logout}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
