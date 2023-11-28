import React from "react";
import { FaWifi } from "react-icons/fa";
import { MdFlight } from "react-icons/md";
import { PiBluetoothBold } from "react-icons/pi";
import { FaTowerBroadcast } from "react-icons/fa6";
import { IoIosFlashlight } from "react-icons/io";
import { HiCamera } from "react-icons/hi";
import { FaCalculator } from "react-icons/fa6";
import { RxSpeakerLoud, RxTimer } from "react-icons/rx";
import { MdOutlineDesktopWindows } from "react-icons/md";
import { BsSunFill, BsHouseLock } from "react-icons/bs";
import { FaPlay } from "react-icons/fa";
import { IoPlayForward } from "react-icons/io5";
import { IoPlayBack } from "react-icons/io5";
import { IoMdMoon } from "react-icons/io";
const ControlCenter = ({
  setShowControlCenter,
  setIsControlerCenterDragging,
}: any) => {
  const color = "white";
  const handleControlCenter = () => {
    setShowControlCenter(false);
    setIsControlerCenterDragging(false);
  };
  return (
    <div className="h-full w-full px-6 flex flex-col gap-4 items-center justify-end">
      <div className="h-[5%] w-full"></div>
      <div className="h-[5%] w-full flex justify-between items-end">
        <div className="flex gap-1 px-2 items-center justify-start">
          <div className="flex gap-[1px] h-[7px] w-[14px] items-end select-none draggable-none  ">
            <div
              className={`h-[25%] w-[3px] ${
                color === "white" ? "bg-white" : "bg-white"
              } select-none draggable-none  `}
            ></div>
            <div
              className={`h-[50%] w-[3px] ${
                color === "white" ? "bg-white" : "bg-white"
              } select-none draggable-none  `}
            ></div>
            <div
              className={`h-[75%] w-[3px] ${
                color === "white" ? "bg-[#ffffff8c]" : "bg-[#ffffff8c]"
              } select-none draggable-none  `}
            ></div>
            <div
              className={`h-full w-[3px] ${
                color === "white" ? "bg-[#ffffff8c]" : "bg-[#ffffff8c]"
              } select-none draggable-none  `}
            ></div>
          </div>
          <FaWifi className="text-[12px] text-white" />
        </div>
        <div className="flex px-2 gap-1 items-center justify-end">
          {" "}
          <div className="h-[8px] flex gap-[1px] items-center">
            <div
              className={`flex gap-[1px] h-[8px] border p-[1px] select-none draggable-none   ${
                color === "white" ? "border-[#ffffff8c]" : "border-[#ffffff8c]"
              } rounded-[2px] w-4 items-end`}
            >
              <div
                className={`h-full w-[10px]  ${
                  color === "white" ? "bg-white" : "bg-white"
                } rounded-[1px] select-none draggable-none  `}
              ></div>
            </div>
            <div
              className={`h-[2px] bg-[#ffffff8c] ${
                color === "white" ? "bg-[#ffffff8c]" : "bg-[#ffffff8c]"
              } select-none draggable-none   w-[1px]`}
            ></div>
          </div>
        </div>
      </div>
      <div className="h-[55%] w-full flex flex-col items-center justify-start gap-3">
        <div className="w-full gap-3 flex justify-between items-center">
          <div className="bg-[#00000062] w-28 h-28 rounded-2xl flex flex-col justify-center gap-[10px] p-[10px] items-center">
            <div className="h-[50%] w-full flex justify-center items-center gap-2">
              <div className="h-full w-[50%] rounded-full bg-[#ffffff59] text-white text-xl flex justify-center rotate-90 items-center">
                <MdFlight />
              </div>
              <div className="h-full w-[50%] rounded-full bg-[#ffffff59] text-white text-xl flex justify-center items-center">
                <FaTowerBroadcast />
              </div>
            </div>
            <div className="h-[50%] w-full flex justify-center items-center gap-2">
              <div className="h-full w-[50%] rounded-full bg-[#ffffff59] text-white text-xl flex justify-center items-center">
                <FaWifi />
              </div>
              <div className="h-full w-[50%] rounded-full bg-[#ffffff59] text-white text-xl flex justify-center items-center">
                <PiBluetoothBold />
              </div>
            </div>
          </div>
          <div className="bg-[#00000062] w-28 h-28 rounded-2xl flex flex-col justify-center items-center">
            <div className="w-full h-[50%] flex justify-center items-center text-xs text-[#ffffffa4]">
              Not Playing
            </div>
            <div className="w-full h-[50%] flex justify-between items-center px-3">
              <IoPlayBack className="text-[#ffffffa4]" />
              <FaPlay className="text-[#ffffff]" />
              <IoPlayForward className="text-[#ffffffa4]" />
            </div>
          </div>
        </div>
        <div className="w-full gap-3 flex justify-between items-center">
          <div className="w-full h-full flex flex-col items-center justify-center gap-3">
            <div className="w-full flex justify-between items-center gap-2">
              <div className="bg-[#00000062] h-12 w-12 rounded-2xl flex justify-center items-center">
                <div className="h-full w-[50%] rounded-full text-white text-2xl flex justify-center items-center">
                  <BsHouseLock />
                </div>
              </div>
              <div className="bg-[#00000062] h-12 w-12 rounded-2xl flex justify-center items-center">
                <div className="h-full w-[50%] rounded-full text-white text-2xl flex justify-center items-center">
                  <MdOutlineDesktopWindows />
                </div>
              </div>
            </div>
            <div className="bg-[#00000062] h-12 w-full rounded-2xl flex justify-start items-center">
              <div className="h-full flex justify-center items-center p-2">
                <div className="p-2 rounded-full bg-[#ffffff59] text-white text-xl flex justify-center items-center">
                  <IoMdMoon />
                </div>
              </div>
              <div className="h-full flex justify-start items-center text-white text-xs">
                Focus
              </div>
            </div>
          </div>
          <div className="w-full h-full flex gap-2 justify-between items-center">
            <div className="bg-[#00000062] h-28 w-12 rounded-2xl flex flex-col items-center justify-end p-2 text-white pb-4">
              <BsSunFill />
            </div>
            <div className="bg-[#00000062] h-28 w-12 rounded-2xl flex flex-col items-center justify-end p-2 text-white pb-4">
              <RxSpeakerLoud />
            </div>
          </div>
        </div>
        <div className="w-full gap-3 flex justify-between items-center">
          <div className="w-full h-full flex justify-between items-center gap-2">
            <div className="bg-[#00000062] h-12 w-12 rounded-2xl flex justify-center items-center">
              <div className="h-full w-[50%] rounded-full text-white text-2xl flex justify-center items-center">
                <IoIosFlashlight />
              </div>
            </div>
            <div className="bg-[#00000062] h-12 w-12 rounded-2xl flex justify-center items-center">
              <div className="h-full w-[50%] rounded-full text-white text-2xl flex justify-center items-center">
                <RxTimer />
              </div>
            </div>
          </div>
          <div className=" w-full h-full flex justify-between items-center gap-2">
            <div className="bg-[#00000062] h-12 w-12 rounded-2xl flex justify-center items-center">
              <div className="h-full w-[50%] rounded-full text-white text-2xl flex justify-center items-center">
                <FaCalculator />
              </div>
            </div>
            <div className="bg-[#00000062] h-12 w-12 rounded-2xl flex justify-center items-center">
              <div className="h-full w-[50%] rounded-full text-white text-2xl flex justify-center items-center">
                <HiCamera />
              </div>
            </div>
          </div>
        </div>
      </div>
      <button
        onTouchStart={() => {
          handleControlCenter();
        }}
        onDragStart={() => {
            handleControlCenter();
          }}
        onClick={() => {
          handleControlCenter();
        }}
        className="h-[25%] w-full"
      ></button>
    </div>
  );
};

export default ControlCenter;
