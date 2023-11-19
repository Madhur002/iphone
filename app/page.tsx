"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import "animate.css";
import { FaPowerOff } from "react-icons/fa";

export default function Home() {
  const pillBarRef = useRef(null);
  const followPillRef = useRef(null);
  const [showHomeScreen, setShowHomeScreen] = useState(false);
  const [powerOn, setPowerOn] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const pillBar: any = pillBarRef.current;
    const followPill: any = followPillRef.current;

    const handleDragStart = () => {
      setIsDragging(true);
    };

    const handleDragEnd = () => {
      setIsDragging(false);
    };

    const handleDrag = (e: any) => {
      if (isDragging) {
        const rect = pillBar.getBoundingClientRect();
        const offsetY = e.clientY - rect.top;

        // Update the position of the follow pill
        followPill.style.bottom = `${rect.height - offsetY}px`;

        if (offsetY <= 200) {
          setShowHomeScreen(true);
        }
        //  else {
        //   setShowHomeScreen(false);
        // }
      }
    };

    pillBar.addEventListener("mousedown", handleDragStart);
    pillBar.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("mousemove", handleDrag);

    return () => {
      pillBar.removeEventListener("mousedown", handleDragStart);
      pillBar.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("mousemove", handleDrag);
    };
  }, [isDragging]);

  const handlePowerOn = () => {
    setPowerOn(true);
  };

  return (
    <main className="flex bg-white z-[50000] min-h-screen items-center justify-center p-24">
      <div className="h-[603px] w-[303px] bg-[#cdbabc] flex justify-center items-center rounded-[50px]">
        <div className="flex z-50 flex-col items-center justify-between h-[600px] w-[300px] bg-black border-4 border-[#f3dadd] rounded-[50px] p-[10px]">
            <div
              className="h-full overflow-hidden w-full z-10 rounded-[35px] bg-black flex justify-center relative"
              ref={pillBarRef}
              >
              {powerOn && (<>
              <div className="bg-black rounded-full mt-2 w-20 h-[22px] z-10 absolute"></div>
              <Image
                className={`${
                  showHomeScreen ? "hidden" : "absolute rounded-[35px]"
                }`}
                src="/wallpaper.jpg"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                alt=""
              />
              {showHomeScreen && (
                <Image
                  className={`absolute zoom-out-animation rounded-[35px] ${
                    showHomeScreen ? "normal-size" : ""
                  }`}
                  src="/homescreen.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              )}
              {/* Below is the pill */}
              {!showHomeScreen && (
                <div
                  className="bg-white rounded-full h-1 w-28 mb-1 z-10 absolute bottom-0 cursor-pointer"
                  ref={followPillRef}
                ></div>
              )}
              </>)}
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
