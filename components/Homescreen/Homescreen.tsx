import React from "react";
import Navbar from "../Navbar/Navbar";
import AppDrawer from "../AppDrawer/AppDrawer";
import NotificationPanel from "../NotificationPanel/NotificationPanel";
import SearchBar from "../SearchBar/SearchBar";

const Homescreen = ({ showHomeScreen }: any) => {
  return (
    <div
      className={`bg-transparent p-2 flex gap-3 flex-col justify-between items-center text-black h-full w-full z-50 zoom-out-animation ${
        showHomeScreen ? "normal-size" : ""
      }`}
    >
      <NotificationPanel color={"white"} />
      <AppDrawer />
      <SearchBar/>
      <Navbar />
    </div>
  );
};

export default Homescreen;
