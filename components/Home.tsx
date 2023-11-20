"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "animate.css";
import { FaPowerOff } from "react-icons/fa";
import Homescreen from "./Homescreen/Homescreen";
import NotificationPanel from "./NotificationPanel/NotificationPanel";
import { IoLockClosed } from "react-icons/io5";
import { IoLockOpen } from "react-icons/io5";
import { BsFillUnlockFill } from "react-icons/bs";

export default function Home() {
  const pillBarRef = useRef(null);
  const followPillRef = useRef(null);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [powerOn, setPowerOn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [unlock, setUnlock] = useState(false);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [focus, setFocus] = useState(0);
  useEffect(() => {
    const pillBar: any = pillBarRef.current;
    const followPill: any = followPillRef.current;

    const handleDragStart = (e: any) => {
      setIsDragging(true);
      setTouchStartPosition(
        e.clientY || (e.touches && e.touches[0].clientY) || 0
      );
      setUnlock(true)
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

        if (offsetY <= 200 || touchMoveDistance >= 50) {
          setShowHomeScreen(true);
        }
        if (offsetY <= 10 || touchMoveDistance >= 10) {
          setUnlock(true)
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
  }, [isDragging, touchStartPosition]);

  const handlePowerOn = () => {
    setPowerOn(!powerOn);
    setShowHomeScreen(false);
    setFocus(0);
    setUnlock(false)
  };

  console.log("focus");
  console.log(focus);

  return (
    <main className="flex bg-white z-[50000] min-h-screen items-center justify-center p-24">
      <div className="h-[603px] w-[303px] bg-[#cdbabc] flex justify-center items-center rounded-[50px]">
        <div className="flex z-50 flex-col items-center justify-between h-[600px] w-[300px] bg-black border-4 border-[#f3dadd] rounded-[50px] p-[10px]">
          <div
            className="h-full overflow-hidden w-full z-10 rounded-[35px] bg-black flex flex-col items-center relative"
            ref={pillBarRef}
          >
            {powerOn && (
              <>
                <div className={`${showHomeScreen ? "bg-black rounded-full mt-2 w-20 h-[22px] z-10 absolute": "bg-black rounded-full text-white flex justify-start items-center mt-2 w-24 text-[11px] pl-[6px] h-[22px] z-10 absolute"}`}>{ unlock ? (<BsFillUnlockFill />):(<IoLockClosed />)}</div>
                <Image
                  className={`blur z-[1] zoom-out-animation ${
                    showHomeScreen
                      ? "hidden"
                      : "backdrop-blur-lg absolute rounded-[35px]"
                  }`}
                  src="/homescreen.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
                <div className={`${showHomeScreen ? "hidden" : "mt-3 z-[300] w-full"}`}>
                <NotificationPanel color={"black"}/>
                </div>
                <Image
                  className={` z-[2] ${
                    showHomeScreen ? "hidden" : "absolute rounded-[35px]"
                  }`}
                  style={{ marginTop: `-${focus}` }}
                  src="/wallpaper.jpg"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
                {showHomeScreen && (
                  <>
                  <Homescreen showHomeScreen={showHomeScreen}/>
                  <Image
                    className={`absolute zoom-out-animation rounded-[35px] ${
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
                {!showHomeScreen && (
                  <div
                    className="bg-white rounded-full h-1 w-28 mb-2 z-10 absolute bottom-0 cursor-pointer"
                    ref={followPillRef}
                  ></div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
      <div className="h-[603px]">
        <button
          onClick={() => {
            handlePowerOn();
          }}
          className="text-gray-400 font-semibold flex gap-2 mt-[150px] ml-4 items-center"
        >
          <FaPowerOff className="text-white bg-gray-300 p-2 text-3xl rounded-full" />
          <p className="pt-1"> Power on</p>
        </button>
      </div>
      <div className="flex z-50 flex-col items-center justify-between h-[600px] w-[300px] bg-black border-4 border-[#f3dadd] rounded-[50px] p-[10px]">
        <div className="h-full overflow-hidden w-full z-10 rounded-[35px] bg-black flex justify-center relative">
          <Image
            className={`absolute rounded-[35px]`}
            src="/lockscreen.png"
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

// "use client";
// import { useEffect, useRef, useState } from "react";
// import Image from "next/image";

// export default function Home() {
//   const pillBarRef = useRef(null);
//   const [showHomeScreen, setShowHomeScreen] = useState(false);
//   const [isDragging, setIsDragging] = useState(false);

//   useEffect(() => {
//     const pillBar: any = pillBarRef.current;
//     console.log("pillBar");
//     console.log(pillBar);
//     const handleDragStart = () => {
//       setIsDragging(true);
//     };

//     const handleDragEnd = () => {
//       setIsDragging(false);
//     };

//     const handleDrag = (e: any) => {
//       console.log()
//       if (isDragging) {
//         const rect = pillBar.getBoundingClientRect();
//         console.log("rect");
//         console.log(rect);
//         const offsetY = e.clientY - rect.top;
//         console.log("offsetY");
//         console.log(offsetY);
//         if (offsetY <= 200) {
//           setShowHomeScreen(true);
//         }
//       }
//     };

//     pillBar.addEventListener("mousedown", handleDragStart);
//     pillBar.addEventListener("mouseup", handleDragEnd);
//     document.addEventListener("mousemove", handleDrag);

//     return () => {
//       pillBar.removeEventListener("mousedown", handleDragStart);
//       pillBar.removeEventListener("mouseup", handleDragEnd);
//       document.removeEventListener("mousemove", handleDrag);
//     };
//   }, [isDragging]);

//   return (
//     <main className="flex min-h-screen flex-col items-center justify-center p-24">
//       <div className="h-[603px] w-[303px] bg-[#cdbabc] flex justify-center items-center rounded-[50px]">
//         <div className="flex flex-col items-center justify-between h-[600px] w-[300px] bg-black border-4 border-[#f3dadd] rounded-[50px] p-[10px]">
//           <div
//             className="h-full w-full rounded-[35px] bg-white flex justify-center relative"
//             ref={pillBarRef}
//           >
//             <div className="bg-black rounded-full mt-2 w-20 h-[22px] z-10 absolute"></div>
//             <Image
//               className="absolute rounded-[35px]"
//               src="/wallpaper.jpg"
//               layout="fill"
//               objectFit="cover"
//               objectPosition="center"
//               alt=""
//             />
//             {/* Below is the pill */}
//             <div className="bg-white rounded-full h-1 w-28 mb-1 z-10 absolute bottom-0 cursor-pointer"></div>
//           </div>
//         </div>
//       </div>

//       {showHomeScreen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-gray-900 opacity-80 flex items-center justify-center">
//           {/* Your homescreen content goes here */}
//           <div className="text-white">Home Screen</div>
//         </div>
//       )}
//     </main>
//   );
// }
