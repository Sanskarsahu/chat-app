import React from 'react';
import useProfile from '../store/useProfile';
import { useSocket } from '../context/SocketContext';
const Profiles = (profile) => {
    const {selectedprofile,setSelectedprofile}= useProfile();
    const {online}= useSocket();
    const isOnline= online.includes(profile.profile._id);
    const ring= isOnline? "ring ring-primary ring-offset-base-100 ring-offset-2": " ";
    const status= isOnline? "active now" : " ";
    const isSelected = selectedprofile?._id === profile.profile._id;
    return (
        <div className={`md:w-48 w-60 h-16 bg-white rounded-2xl flex items-center justify-center drop-shadow-xl cursor-pointer hover:bg-slate-300 ${isSelected? "bg-gray-400" : ""}`} onClick={()=> setSelectedprofile(profile.profile)}>
            <div className="avatar absolute left-3">
                <div className={`w-8  rounded-full ${ring}`}>
                    <img src={profile.profile.profilePic} alt=''/>
                </div>
            </div>
            <div className='flex flex-col relative left-2'>
                <h5 className='text-lg font-bold'>
                    {profile.profile.fullname}
                </h5>
                <span className='text-sm'>
                    {status}
                </span>

            </div>
        </div>
    );
}

export default Profiles;
