"use client";
import { useEffect, useState } from "react";
import { IoBatteryHalfOutline } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { BiSignal4 } from "react-icons/bi";

const NotificationPanel = ({ color }: any) => {
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
    hour12: true,
  });

  return (
    <div
      className={`z-[45] flex text-xs justify-between ${
        color === "white" ? "text-white" : "text-white"
      }  select-none font-semibold px-3 items-center h-4 w-full z-[40]`}
    >
      <p
        className={`${
          color === "white" ? "font-bold ml-2" : "text-transparent"
        } select-none `}
      >
        {formattedTime}
      </p>
      <div className="text-sm flex items-center justify-center gap-2 font-semibold select-none ">
        <div className="flex gap-[1px] h-[7px] w-[14px] items-end select-none ">
          <div
            className={`h-[25%] w-[3px] ${
              color === "white" ? "bg-white" : "bg-white"
            } select-none `}
          ></div>
          <div
            className={`h-[50%] w-[3px] ${
              color === "white" ? "bg-white" : "bg-white"
            } select-none `}
          ></div>
          <div
            className={`h-[75%] w-[3px] ${
              color === "white" ? "bg-[#ffffff8c]" : "bg-[#ffffff8c]"
            } select-none `}
          ></div>
          <div
            className={`h-full w-[3px] ${
              color === "white" ? "bg-[#ffffff8c]" : "bg-[#ffffff8c]"
            } select-none `}
          ></div>
        </div>
        <FaWifi className="text-[12px]" />
        <div className="h-[8px] flex gap-[1px] items-center">
          <div
            className={`flex gap-[1px] h-[8px] border p-[1px] select-none  ${
              color === "white" ? "border-[#ffffff8c]" : "border-[#ffffff8c]"
            } rounded-[2px] w-4 items-end`}
          >
            <div
              className={`h-full w-[10px]  ${
                color === "white" ? "bg-white" : "bg-white"
              } rounded-[1px] select-none `}
            ></div>
          </div>
          <div
            className={`h-[2px] bg-[#ffffff8c] ${
              color === "white" ? "bg-[#ffffff8c]" : "bg-[#ffffff8c]"
            } select-none  w-[1px]`}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel;
