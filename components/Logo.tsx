import React from 'react'
import logo from "../app/assets/Logo2.jpg"

export const Logo = () => {
  return (
    <div className='hidden md:flex items-center gap-2 cursor-pointer hover:opacity-75'>
        <img src="/meistertask-app.png" className='size-12 object-cover'/>
        <p className='font-bold text-gray-900'>Taskify</p>
    </div>
  )
}
