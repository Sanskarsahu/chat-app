import React from 'react';
import useLogout from '../hooks/useLogout';
import { useAuthContext } from '../context/AuthContext';

const Navbar = () => {
    const { logout } = useLogout()
    const { auth } = useAuthContext()
    return (

        <div className="navbar bg-transparent sticky ">
            <div className="flex-1">
                <div className=' md:p-5 text-4xl text-black gap-x-3 font-bold drop-shadow-xl'>
                    <h5>chat app</h5>
                </div>
            </div>
            <div className="flex-none gap-2">

                <div className="dropdown dropdown-end z-10">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src={auth.profilePic} />
                        </div>
                    </div>
                    <div tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content  bg-base-100 rounded-box w-52">

                        <h1 className="">
                            {auth.fullname}
                            
                        </h1>

                        
                    </div>
                </div>
                <button className=' cursor-pointer' onClick={logout}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                        </svg>
             </button>
            </div>
        </div>
    );
}

export default Navbar;
