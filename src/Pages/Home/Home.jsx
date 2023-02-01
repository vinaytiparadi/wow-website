import React from "react";
import "./home.css";
import GDSC from "../../assets/GDSC.png";
import Wow from "../../assets/wow.svg";
import Calender from "../../assets/Calender.svg";
import Map from "../../assets/Map.svg";

export default function Home() {
  return (
    <div
      id="home"
      className="pt-12 h-[100vh] flex flex-col items-center justify-center relative bg-[rgba(0,0,0,0.0)]"
    >
      <div className="w-full max-w-lg">
        <div className="absolute left-15 top-0 w-72 h-72 bg-gblue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-5 w-72 h-72 bg-gyellow rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2s"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-ggreen rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2s"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-gred rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4s"></div>
      </div>
      <div className="text-center">
        <div className="flex w-[100%] items-center justify-center p-6">
          <div className="w-[25%] lg:w-[5%]">
            <img src={GDSC} alt="Google Developer Student Clubs Pune" />
          </div>
          <div>
            <h1 className="text-xl lg:text-3xl whitespace-nowrap">
              Google Developer Student Clubs
            </h1>
            <p className="text-[18px] lg:text-2xl text-start">Pune</p>
          </div>
        </div>
        <p className="text-center text-xl lg:text-2xl">Presents</p>
        <div className="flex items-center justify-center">
          <img
            src={Wow}
            alt="WOW Pune 2023"
            className="w-[50%] lg:w-[500px] inline-block"
          />
          <span className="font-googleBold text-2xl lg:text-8xl ml-2 whitespace-nowrap">
            | Pune
          </span>
        </div>
        <div className="lg:text-4xl">
          <h2>Pune's most awaited developer conference</h2>
          <div className="flex items-center justify-center text-[14px] lg:text-2xl">
            <img src={Calender} alt="date" className="w-[30px] lg:w-[50px]" />
            <p>TBA</p>
            <span className="w-[20px] aspect-square bg-[rgb(128,128,128)] m-2 mx-4 rounded-xl"></span>
            <p>TBA</p>
          </div>

          <a
            href="https://goo.gl/maps/YfNRv8if2RX164Uh6"
            target="_blank"
            className="flex justify-center items-center text-[14px] lg:text-2xl text-inherit"
          >
            <img src={Map} alt="location" className="w-[30px] lg:w-[50px]" />
            <p>TBA</p>
          </a>

          <a className="text-white" href="#register">
            <button className="bg-gyellow mr-3 transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1">
              Register Now
            </button>
          </a>

          <button className="bg-ggreen text-white transition-all ease-in-out duration-500 px-4 py-2 text-lg hover:translate-y-1">
            CFP TBA
          </button>
        </div>
      </div>
    </div>
  );
}