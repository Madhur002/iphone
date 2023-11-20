import React from 'react'
import { IoBatteryHalfOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { BiSignal4 } from "react-icons/bi";
const NotificationPanel = ({color}: any) => {
  return (
    <div className={`flex text-xs justify-between ${color === "white" ? "text-white" : "text-black"} font-semibold px-3 items-center h-4 w-full z-[300]`}>
      <p className={`${color === "white" ? 'font-bold ml-2': "text-transparent"}`}>2:08</p>
      <div className='text-sm flex items-center justify-center gap-2 font-semibold'>
      <div className='flex gap-[1px] h-[9px] w-4 items-end'>
        <div className={`h-[25%] w-[3px] ${color === "white" ? "bg-white" : "bg-black"}`}></div>
        <div className={`h-[50%] w-[3px] ${color === "white" ? "bg-white" : "bg-black"}`}></div>
        <div className={`h-[75%] w-[3px] ${color === "white" ? "bg-[#ffffff8c]" : "bg-[#00000046]"}`}></div>
        <div className={`h-full w-[3px] ${color === "white" ? "bg-[#ffffff8c]" : "bg-[#00000046]"}`}></div>
      </div>
      <FaWifi />
      <div className='h-[9px] flex gap-[1px] items-center'>
      <div className={`flex gap-[1px] h-[9px] border p-[1px] ${color === "white" ? "border-[#ffffff8c]" : "border-[#00000046]"} rounded-[2px] w-4 items-end`}>
        <div className={`h-full w-[7px]  ${color === "white" ? "bg-white" : "bg-black"} rounded-[1px]`}>
      </div>
      </div>
      <div className={`h-[3px] bg-[#ffffff8c] ${color === "white" ? "bg-[#ffffff8c]" : "bg-[#00000046]"} w-[1px]`}></div>
      </div>
      </div>
    </div>
  )
}

export default NotificationPanel
