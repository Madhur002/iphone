"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/scss";
import HomeScreen1 from "../Homescreen/HomeScreen1";
import HomeScreen2 from "../Homescreen/HomeScreen2";

const AppDrawer = () => {

  return (
    <div className="select-none antialiased flex pt-4 justify-center items-center h-full w-full rounded-2xl">
      <Swiper
        style={{ height: "100%", width: "100%" }}
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <div className="select-none p-1 h-full w-full flex flex-col items-center" style={{ height: "100%", width: "100%" }}>
            <HomeScreen1/>
          </div>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%", width: "100%" }}>
          <div className="select-none p-1 w-full h-full flex flex-col items-center" style={{ height: "100%", width: "100%" }}>
            <HomeScreen2/>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AppDrawer;
