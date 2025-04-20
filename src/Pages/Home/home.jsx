import React, { useRef } from "react";
import "./home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Sphere from "../../Components/Sphere/sphere";
import NavBar from "../../Components/Navbar/navbar";
import { HomeData } from "../../static/HomeText";
export default function Home() {
  const formRef = useRef(null);
  const sphereRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, duration: 0.7, ease: "power1.out", y: 0 }
    ),
      gsap.fromTo(
        sphereRef.current,
        { opacity: 0, y: 70 },
        { opacity: 1, duration: 0.7, delay: 0.4, ease: "power1.out", y: 0 }
      );
  });
  return (
    <div className="min-h-screen bg-img1 overflow-hidden" loading="lazy">
      <NavBar />
      <div className="flex flex-1 items-center justify-center">
        <div className="container mx-auto flex flex-col  px-4 sm:px-6 lg:px-10 text-white">
          <div
            ref={formRef}
            className="flex w-full bg-red-500 flex-1 flex-col items-center justify-between gap-0 sm:mt-12 md:flex-row"
          >
            <div className="flex bg-red-400 flex-1 flex-col gap-6 text-center md:text-left">
              <h2 className="font-barlow-condensed text-[28px] uppercase tracking-wide text-[#D0D6F9]">
                {HomeData.subtitle}
              </h2>
              <h1 className="font-bellefair text-[80px] uppercase md:text-[100px]">
                {HomeData.title}
              </h1>
              <p className="font-barlow text-[15px] leading-[180%] text-[#D0D6F9]">
                {HomeData.p}
              </p>
            </div>
            <div
              ref={sphereRef}
              className="flex bg-red-700 flex-1 flex-col items-center justify-center md:items-end max-md:mt-4"
            >
              <Sphere />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
