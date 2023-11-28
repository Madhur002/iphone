import React from "react";
import Navbar from "../Navbar/Navbar";
import AppDrawer from "../AppDrawer/AppDrawer";
import NotificationPanel from "../NotificationPanel/NotificationPanel";
import SearchBar from "../SearchBar/SearchBar";

const Homescreen = ({ showHomeScreen }: any) => {
  return (
    <>
    <div className="p-2 z-[45] w-full">
    <NotificationPanel color={"white"} />
    </div>
    <div
      className={`bg-transparent p-2 mt-[-15px] flex  flex-col justify-between items-center text-black h-full w-full zoom-out-animation ${
        showHomeScreen ? "normal-size" : ""
      }`}
      style={{zIndex: "55"}}
      >
      <AppDrawer />
      <SearchBar/>
      <Navbar />
    </div>
      </>
  );
};

export default Homescreen;
