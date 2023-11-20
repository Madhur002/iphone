import React from 'react'
import { IoBatteryHalfOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { BiSignal4 } from "react-icons/bi";
const NotificationPanel = () => {
  return (
    <div className='flex text-xs justify-between font-semibold px-3 items-center text-white h-4 w-full z-50'>
      <p className='font-bold ml-2'>2:08</p>
      <div className='text-sm flex items-center justify-center gap-2 font-semibold'>
      <div className='flex gap-[1px] h-[9px] w-4 items-end'>
        <div className='h-[25%] w-[3px] bg-white'></div>
        <div className='h-[50%] w-[3px] bg-white'></div>
        <div className='h-[75%] w-[3px] bg-[#ffffff8c]'></div>
        <div className='h-full w-[3px] bg-[#ffffff8c]'></div>
      </div>
      <FaWifi />
      <div className='h-[9px] flex gap-[1px] items-center'>
      <div className='flex gap-[1px] h-[9px] border p-[1px] border-[#ffffff8c] rounded-[2px] w-4 items-end'>
        <div className='h-full w-[7px] bg-white rounded-[1px]'>
      </div>
      </div>
      <div className='h-[3px] bg-[#ffffff8c] w-[1px]'></div>
      </div>
      </div>
    </div>
  )
}

export default NotificationPanel
