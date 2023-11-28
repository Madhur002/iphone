"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "animate.css";
import { FaFilePowerpoint, FaPowerOff } from "react-icons/fa";
import Homescreen from "./Homescreen/Homescreen";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
import { IoLockClosed } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";
import { BsFillUnlockFill } from "react-icons/bs";
import { IoIosFlashlight } from "react-icons/io";
import { HiCamera } from "react-icons/hi2";
import 'animate.css';

export default function Home() {
  const pillBarRef = useRef(null);
  const followPillRef = useRef(null);
  const controlCenterRef = useRef(null);
  const NotificationRef = useRef(null);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [showControlCenter, setShowControlCenter] = useState(false);
  const [showNotificationCenter, setShowNotificationCenter] = useState(false);
  const [powerOn, setPowerOn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isControlerCenterDragging, setIsControlerCenterDragging] =
    useState(false);
  const [isNotificationCenterDragging, setIsNotificationCenterDragging] =
    useState(false);
  const [unlock, setUnlock] = useState(false);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [
    touchControlerCenterStartPosition,
    setTouchControlerCenterStartPosition,
  ] = useState(0);
  const [
    touchNotificationCenterStartPosition,
    setTouchNotificationCenterStartPosition,
  ] = useState(0);
  const [focus, setFocus] = useState(0);
  const [offset, setOffset] = useState(0);
  const [newFocus, setNewFocus] = useState("");

  useEffect(() => {
    if (!showHomeScreen) {
      const pillBar: any = pillBarRef.current;
      const followPill: any = followPillRef.current;
      console.log("pillBar");
      console.log(pillBar);
      console.log("followPill");
      console.log(followPill);

      const handleDragStart = (e: any) => {
        setIsDragging(true);
        setTouchStartPosition(
          e.clientY || (e.touches && e.touches[0].clientY) || 0
        );
        setUnlock(true);
      };
      const handleDragEnd = () => {
        setIsDragging(false);
        setTouchStartPosition(0);
      };

      const handleDrag = (e: any) => {
        if (isDragging) {
          const rect = pillBar.getBoundingClientRect();
          let offsetY: any;

          if (e.clientY) {
            // Mouse event
            offsetY = e.clientY - rect.top;
          } else if (e.touches && e.touches[0]) {
            // Touch event
            offsetY = e.touches[0].clientY - rect.top;
          }

          const touchMoveDistance = offsetY - touchStartPosition;

          // Update the position of the follow pill
          followPill.style.bottom = `${rect.height - offsetY}px`;
          setFocus(followPill.style.bottom);
          setNewFocus(`${rect.height - offsetY + 80}px`);

          if (offsetY <= 200 || touchMoveDistance >= 50) {
            setShowHomeScreen(true);
          }
          if (offsetY <= 50 || touchMoveDistance >= 25) {
            setUnlock(true);
          }
        }
      };

      pillBar.addEventListener("mousedown", handleDragStart);
      pillBar.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("mousemove", handleDrag);

      pillBar.addEventListener("touchstart", handleDragStart);
      pillBar.addEventListener("touchend", handleDragEnd);
      document.addEventListener("touchmove", handleDrag);

      return () => {
        pillBar.removeEventListener("mousedown", handleDragStart);
        pillBar.removeEventListener("mouseup", handleDragEnd);
        document.removeEventListener("mousemove", handleDrag);

        pillBar.removeEventListener("touchstart", handleDragStart);
        pillBar.removeEventListener("touchend", handleDragEnd);
        document.removeEventListener("touchmove", handleDrag);
      };
    }
  }, [isDragging, showHomeScreen, touchStartPosition]);

  useEffect(() => {
    const controlCenter: any = controlCenterRef.current;
    if (showHomeScreen && controlCenter) {
      console.log("controlCenter");
      console.log(controlCenter);

      const handleDragStart = (e: any) => {
        setIsControlerCenterDragging(true);
        setTouchControlerCenterStartPosition(
          e.clientY || (e.touches && e.touches[0].clientY) || 0
        );
        setUnlock(true);
      };
      const handleDragEnd = () => {
        setIsControlerCenterDragging(false);
        setTouchControlerCenterStartPosition(0);
      };

      const handleDrag = (e: any) => {
        if (isControlerCenterDragging) {
          const rect = controlCenter.getBoundingClientRect();
          let offsetY: any;
          console.log("rect");
          console.log(rect);

          if (e.clientY) {
            // Mouse event
            offsetY = e.clientY - rect.top;
          } else if (e.touches && e.touches[0]) {
            // Touch event
            offsetY = e.touches[0].clientY - rect.top;
          }

          const touchMoveDistance = offsetY - touchControlerCenterStartPosition;
          console.log("offsetY");
          console.log(offsetY);
          setOffset(offsetY);
          // Update the position of the follow pill
          // controlCenter.style.top = `${rect.height - offsetY}px`;
          // setFocus(controlCenter.style.top);
          // setNewFocus(`${rect.height - offsetY + 80}px`)

          if ((offsetY >= 30) && (offsetY <= 300) || touchMoveDistance >= 50) {
            setShowControlCenter(true);
            setIsControlerCenterDragging(false);
          }
        }
      };

      controlCenter.addEventListener("mousedown", handleDragStart);
      controlCenter.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("mousemove", handleDrag);

      controlCenter.addEventListener("touchstart", handleDragStart);
      controlCenter.addEventListener("touchend", handleDragEnd);
      document.addEventListener("touchmove", handleDrag);

      return () => {
        controlCenter.removeEventListener("mousedown", handleDragStart);
        controlCenter.removeEventListener("mouseup", handleDragEnd);
        document.removeEventListener("mousemove", handleDrag);

        controlCenter.removeEventListener("touchstart", handleDragStart);
        controlCenter.removeEventListener("touchend", handleDragEnd);
        document.removeEventListener("touchmove", handleDrag);
      };
    }
  }, [
    isControlerCenterDragging,
    showHomeScreen,
    touchControlerCenterStartPosition,
  ]);

  useEffect(() => {
    const NotificationCenter: any = NotificationRef.current;
    if (showHomeScreen && NotificationCenter) {
      console.log("NotificationCenter");
      console.log(NotificationCenter);

      const handleDragStart = (e: any) => {
        setIsNotificationCenterDragging(true);
        setTouchNotificationCenterStartPosition(
          e.clientY || (e.touches && e.touches[0].clientY) || 0
        );
        setUnlock(true);
      };
      const handleDragEnd = () => {
        setIsNotificationCenterDragging(false);
        setTouchNotificationCenterStartPosition(0);
      };

      const handleDrag = (e: any) => {
        if (isNotificationCenterDragging) {
          const rect = NotificationCenter.getBoundingClientRect();
          let offsetY: any;
          console.log("rect");
          console.log(rect);

          if (e.clientY) {
            // Mouse event
            offsetY = e.clientY - rect.top;
          } else if (e.touches && e.touches[0]) {
            // Touch event
            offsetY = e.touches[0].clientY - rect.top;
          }

          const touchMoveDistance = offsetY - touchNotificationCenterStartPosition;
          console.log("offsetY");
          console.log(offsetY);
          setOffset(offsetY);
          // Update the position of the follow pill
          // controlCenter.style.top = `${rect.height - offsetY}px`;
          // setFocus(controlCenter.style.top);
          // setNewFocus(`${rect.height - offsetY + 80}px`)

          if ((offsetY >= 30) && (offsetY <= 300) || touchMoveDistance >= 50) {
            setShowNotificationCenter(true);
            setIsNotificationCenterDragging(false);
          }
        }
      };

      NotificationCenter.addEventListener("mousedown", handleDragStart);
      NotificationCenter.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("mousemove", handleDrag);

      NotificationCenter.addEventListener("touchstart", handleDragStart);
      NotificationCenter.addEventListener("touchend", handleDragEnd);
      document.addEventListener("touchmove", handleDrag);

      return () => {
        NotificationCenter.removeEventListener("mousedown", handleDragStart);
        NotificationCenter.removeEventListener("mouseup", handleDragEnd);
        document.removeEventListener("mousemove", handleDrag);

        NotificationCenter.removeEventListener("touchstart", handleDragStart);
        NotificationCenter.removeEventListener("touchend", handleDragEnd);
        document.removeEventListener("touchmove", handleDrag);
      };
    }
  }, [
    isNotificationCenterDragging,
    showHomeScreen,
    touchNotificationCenterStartPosition,
  ]);

  const handlePowerOn = () => {
    setPowerOn(!powerOn);
    setShowHomeScreen(false);
    setFocus(0);
    setNewFocus("");
    setUnlock(false);
  };

  const handleControlCenter = () => {
    setShowControlCenter(false);
    setIsControlerCenterDragging(false);
    setShowNotificationCenter(false);
    setIsNotificationCenterDragging(false);
  };

  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    // Update the currentDateTime every second
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const formattedDate = currentDateTime.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  const formattedTime = currentDateTime.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: false,
  });

  if (showNotificationCenter) {
    setTimeout(removeAnimateClass, 800); // 200 milliseconds delay
  }
  if (showControlCenter) {
    setTimeout(removeAnimateClass, 800); // 200 milliseconds delay
  }
  // Define a function to remove the animate_animated class
function removeAnimateClass() {
  // Select the div elements by their class names
  const notificationCenterDiv = document.querySelector('.notification-center');
  const controlCenterDiv = document.querySelector('.control-center');

  // Check if the div elements exist before trying to remove the class
  if (notificationCenterDiv) {
    notificationCenterDiv.classList.remove('animate_animated');
    notificationCenterDiv.classList.remove('bg-[#ffffff21]');
    notificationCenterDiv.classList.remove('animate__fadeInDown');
  }

  if (controlCenterDiv) {
    controlCenterDiv.classList.remove('animate_animated');
    controlCenterDiv.classList.remove('bg-[#ffffff21]');
    controlCenterDiv.classList.remove('animate__fadeInDown');
  }
}


  return (
    <main className="sm:flex-col md:flex-col sm:items-center md:items-center flex bg-white z-[50000] h-screen overflow-hidden items-center justify-center p-24">
      <div className="h-[603px] w-[303px] bg-[#cdbabc] flex justify-center items-center rounded-[50px]">
        <div className="flex z-50 flex-col items-center justify-between h-[600px] w-[300px] bg-black border-4 border-[#f3dadd] rounded-[50px] p-[10px]">
          <div
            className="h-full overflow-hidden w-full z-10 rounded-[35px] flex flex-col items-center relative"
            ref={pillBarRef}
          >
            {powerOn && (
              <>
                <div
                  className={`z-[999] draggable-none select-none ${
                    showHomeScreen
                      ? "bg-black rounded-full mt-[6px] w-20 h-[22px] z-10 absolute"
                      : "bg-black rounded-full text-white flex justify-start items-center mt-[6px] w-24 text-[11px] pl-[6px] h-[22px] z-10 absolute"
                  }`}
                >
                  {unlock ? <BsFillUnlockFill /> : <IoLockClosed />}
                </div>
                {/* <Image
                  className={`draggable-none blur z-[1] fixed select-none zoom-out-animation ${
                    showHomeScreen
                      ? "hidden"
                      : "backdrop-blur-lg scale-[5.5] absolute rounded-[35px]"
                  }`}
                  src="/homescreen.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                /> */}
                <div
                  className={`select-none ${
                    showHomeScreen ? "hidden" : "mt-3 z-[300] w-full"
                  }`}
                >
                  <NotificationPanel color={"black"} />
                </div>
                <Image
                  className={`draggable-none select-none z-[2] ${
                    showHomeScreen ? "hidden" : "absolute rounded-[35px]"
                  }`}
                  style={{ marginTop: `-${focus}` }}
                  src="/lockscreenWallpaper.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
                {showHomeScreen && (
                  <>
                  <div className="bg-transparent h-full w-full absolute flex justify-between"
                    style={{zIndex: "49"}}>
                    <div
                      className="bg-transparent h-full w-[50%] relative"
                      ref={NotificationRef}
                      style={{zIndex: "49"}}
                      >
                    </div>
                    <div
                      className="bg-transparent h-full w-[50%] relative"
                      ref={controlCenterRef}
                      style={{zIndex: "49"}}
                      >
                    </div>
                    </div>
                      <div
                        className={`backdrop-blur-xl bg-[#ffffff21] notification-center ${showNotificationCenter ? `animate__animated animate__fadeInDown w-full z-[99999999] h-full absolute`: `hidden`}`}
                        >
                        Notification center Div
                      </div>
                      <div
                        className={`backdrop-blur-xl bg-[#ffffff21] control-center ${showControlCenter ? `animate__animated animate__fadeInDown w-full z-[99999999] h-full absolute`: `hidden`}`}
                        >
                        Control center Div
                      </div>


                    <Homescreen showHomeScreen={showHomeScreen} />
                    <Image
                    style={{zIndex: "40"}}
                      className={`draggable-none absolute select-none rounded-[35px] ${
                        showHomeScreen ? "normal-size" : ""
                      }`}
                      src="/wallpaper1.jpg"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="center"
                      alt=""
                    />
                  </>
                )}
                {/* Below is the pill */}
                <div
                  style={{ marginTop: `-${newFocus}` }}
                  className={`select-none ${
                    showHomeScreen
                      ? "hidden"
                      : " mb-8 h-full mt-3 flex flex-col justify-between items-center z-[300] w-full text-[#201f1f] font-semibold tracking-wider text-[8px]"
                  }`}
                >
                  <div className="text-[#ffcacae5] mt-3 gap-1 w-full flex flex-col items-center justify-start">
                    <p className="text-sm">{formattedDate}</p>
                    <p className="text-6xl font-semibold flex items-center">
                      {formattedTime}
                    </p>
                  </div>
                  <div className="flex w-full justify-evenly items-center">
                    <div className="p-2 rounded-full bg-[#0000005e] text-white text-xl">
                      <IoIosFlashlight />
                    </div>
                    <p className=" text-[#ffffff] h-full flex justify-center items-end font-semibold tracking-wider text-[8px]">
                      Swipe up to unlock
                    </p>
                    <div className="p-2 rounded-full bg-[#0000005e] text-white text-xl">
                      <HiCamera />
                    </div>
                  </div>
                </div>
                {!showHomeScreen && (
                  <div
                    className="bg-white rounded-full h-1 w-28 mb-3 z-10 absolute bottom-0 cursor-pointer"
                    ref={followPillRef}
                  ></div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="h-[603px] sm:h-[150px] md:h-[150px]">
        <button
          onClick={() => {
            handlePowerOn();
          }}
          className="text-gray-400 font-semibold flex gap-2 mt-[150px] ml-4 items-center"
        >
          <FaPowerOff className="text-white bg-gray-300 select-none p-2 text-3xl rounded-full" />
          <p className="pt-1 select-none"> Power on</p>
        </button>
        <button
          onClick={() => {
            handleControlCenter();
          }}
          className="text-gray-400 font-semibold flex gap-2 mt-[150px] ml-4 items-center"
        >
          <FaFilePowerpoint className="text-white bg-gray-300 select-none p-2 text-3xl rounded-full" />
          <p className="pt-1 select-none"> Power on</p>
        </button>
      </div>
      <div className="sm:hidden md:hidden flex z-50 flex-col items-center justify-between h-[600px] w-[300px] bg-black border-4 border-[#f3dadd] rounded-[50px] p-[10px]">
        <div className="h-full  select-none overflow-hidden w-full z-10 rounded-[35px] bg-black flex justify-center relative">
          <Image
            className={`absolute select-none rounded-[35px]`}
            src="/ControlCentre.png"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            alt=""
          />
        </div>
      </div>
    </main>
  );
}
