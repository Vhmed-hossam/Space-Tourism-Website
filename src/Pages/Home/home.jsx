import "./home.css";

import Sphere from "../../Components/Sphere/sphere";
import NavBar from "../../Components/Navbar/navbar";
import { HomeData } from "../../static/HomeText";
import useHomeStates from "../../Hooks/useHomeStates";
export default function Home() {
  const { formRef, sphereRef } = useHomeStates();
  return (
    <div className="min-h-screen bg-img1 overflow-hidden" loading="lazy">
      <NavBar />
      <div className="flex flex-1 items-center justify-center">
        <div className="container mx-auto flex flex-col  px-4 sm:px-6 lg:px-10 text-white">
          <div
            ref={formRef}
            className="flex w-full  flex-1 flex-col items-center justify-between gap-0 sm:mt-12 md:flex-row"
          >
            <div className="flex  flex-1 flex-col gap-6 text-center md:text-left">
              <h2 className="font-barlow-condensed text-[28px] uppercase tracking-wide text-[#D0D6F9]">
                {HomeData.subtitle}
              </h2>
              <h1 className="font-bellefair text-[80px] uppercase md:text-[110px]">
                {HomeData.title}
              </h1>
              <p className="font-barlow text-[15px] leading-[180%] text-[#D0D6F9]">
                {HomeData.p}
              </p>
            </div>
            <div
              ref={sphereRef}
              className="flex flex-1 flex-col items-center justify-center md:items-end max-md:mt-4"
            >
              <Sphere />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
