import React from 'react'
import Sidebar from '../components/sidebar'
import Navbar from '../components/navbar'
import Conversations from '../components/conversations'

export default function Dashbord() {
  return (
    <div className="back h-screen w-screen overflow-hidden">
      <div className='w-full z-10'>
        <Navbar />
      </div>
      <div className="flex flex-row gap-10 ">
        <div className='relative  left-5 '>
          <Sidebar />
        </div>
        <div className="w-full relative left:0 md:pr-2 md:pb-1 ">
        <Conversations />
        </div>
      </div>
    </div>


  )
}
