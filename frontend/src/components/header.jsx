import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons"
import useProfile from '../store/useProfile'
export default function Header() {
    const {selectedprofile,setSelectedprofile}=useProfile();
  return (
    <>
      <div className='pt-2 h-[0.5vh]  flex gap-5 items-center  '>
        <button  onClick={()=>setSelectedprofile(null)}>
        <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <img src={selectedprofile.profilePic} alt="" className='h-9'/>
        <h1 className='font-bold text-blue-950'> {selectedprofile.fullname}</h1>
        
    </div>
    <div className="border border-b-2 border-gray-200 mt-7"></div>
    </>
  )
}
