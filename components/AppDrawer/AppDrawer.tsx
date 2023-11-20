"use client";
import React, { useEffect, useState } from "react";
import { BsCloudLightningFill } from "react-icons/bs";
import { IoPaperPlaneSharp } from "react-icons/io5";
import Image from "next/image";
const AppDrawer = () => {
  const [weatherData, setWeatherData] = useState<any>(null);
  // const API_KEY = 'da165c716a22097713f7bf62b26566ef';
  const city = "Ajmer";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=72b3f2880dda854edba8922f668bd1c1&units=metric`
        );

        if (response.ok) {
          const data = await response.json();
          setWeatherData(data);
        } else {
          console.error("Failed to fetch weather data");
        }
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [city]);

  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return (
    <div className="antialiased flex pt-4 px-2 justify-center items-center h-full w-full rounded-2xl">
      <div className=" w-full p-1 h-full flex flex-col items-center">
        <div className="rounded-2xl flex items-center justify-center w-full gap-2 h-[120px]">
          <div className="text-[8px] cursor-pointer gap-[3px] text-white rounded-2xl w-full h-full flex flex-col justify-center items-center">
            {weatherData ? (
              <div className="bg-white-400 p-3 grad1 rounded-2xl w-full h-full text-[#ffffffcc]">
                <p className="flex gap-1 items-center text-[10px] font-semibold">
                  {weatherData.name}{" "}
                  <IoPaperPlaneSharp className="text-[8px]" />
                </p>
                <p className="text-[30px] mt-[-7px] font-light ">
                  {weatherData.main.temp}&#176;
                </p>
                <BsCloudLightningFill className="text-[12px]" />
                <p className="text-[8px] font-semibold ">
                  {weatherData.weather[0].description}
                </p>
                <p className="text-[8px] font-semibold">
                  H: {weatherData.main.temp_max}&#176;C L:{" "}
                  {weatherData.main.temp_min}&#176;C
                </p>
              </div>
            ) : (
              <div className="bg-white-400 p-3 grad1 rounded-2xl w-full h-full text-[#ffffffcc]">
                <p className="flex gap-1 items-center text-[10px] font-semibold">
                  Ajmer <IoPaperPlaneSharp className="text-[8px]" />
                </p>
                <p className="text-[30px] mt-[-7px] font-light ">76&#176;</p>
                <BsCloudLightningFill className="text-[12px]" />
                <p className="text-[8px] font-semibold ">Thunderstorm</p>
                <p className="text-[8px] font-semibold">H: 78 L: 98</p>
              </div>
            )}
            Weather
          </div>
          <div className="cursor-pointer text-[8px] gap-[3px] font-bold text-white rounded-2xl w-full h-full flex flex-col justify-center items-center">
            <div className="bg-white flex flex-col p-3  rounded-2xl w-full h-full text-[#000000cc]">
              <p className="flex gap-1 items-center text-[8px] text-[#e0797c] font-bold uppercase">
                {daysOfWeek[currentDate.getDay()]}
              </p>
              <p className="text-[22px] mt-[-7px] font-normal ">
                {currentDate.getDate()}
              </p>
              <p className="text-gray-400 flex justify-center items-center h-full w-full text-[10px]">
                {" "}
                No events today
              </p>
            </div>
            Calender
          </div>
        </div>
        <div className="w-full h-full flex gap-4 pt-3 flex-col items-center">
          <div className="flex h-[55px] w-full justify-between">
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/FaceTime.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              FaceTime
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/Calendar.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Calendar
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/photos.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Photos
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/camera.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Camera
            </div>
          </div>
          <div className="flex h-[55px] w-full justify-between">
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/mail.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Mail
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/notes.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Notes
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/reminders.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Reminders
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/clock.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Clock
            </div>
          </div>
          <div className="flex h-[55px] w-full justify-between">
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/instagram.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Instagram
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/appleTV.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              TV
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/podcast.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Podcasts
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/appstore.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              App Store
            </div>
          </div>
          <div className="flex h-[55px] w-full justify-between">
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/maps.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Maps
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/health.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Health
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/wallet.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Wallet
            </div>
            <div className="text-[8px] gap-[3px] text-white rounded-2xl h-full cursor-pointer flex flex-col justify-center items-center">
              <button className="h-10  w-10 bg-pink-300 shadow-lg  cursor-pointer rounded-xl relative">
                <Image
                  className="absolute"
                  src="/icons/settings.png"
                  layout="fill"
                  objectFit="cover"
                  objectPosition="center"
                  alt=""
                />
              </button>
              Settings
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDrawer;
