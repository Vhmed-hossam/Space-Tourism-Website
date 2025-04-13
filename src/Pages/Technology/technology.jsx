import React, { useRef, useState } from "react";
import NavBar from "../../Components/Navbar/navbar";
import "./tech.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SL101, TechNumbers } from "../../static/technology";
import { TechnologyData } from "../../Constants/Texhnology";
export default function Technology() {
  const [Techindex, setTechindex] = useState(0);
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, duration: 0.7, ease: "power1.out", y: 0 }
    );
  });
  return (
    <div className="bg-img4 h-auto overflow-hidden">
      <NavBar />
      <div className="flex py-12 flex-col items-end gap-2 flex-1 self-stretch">
        <div
          ref={formRef}
          className="flex-1 flex gap-6 flex-col items-start max-md:ms-0 ms-[80px] text-white"
        >
          <div className="flex gap-3 uppercase items-center  justify-start font-barlow-condensed">
            <span className="opacity-25 text-lg">{SL101.count}</span>
            <h2 className="text-lg tracking-wider">{SL101.text}</h2>
          </div>
          <div className="self-stretch flex-1 max-md:flex-col-reverse flex gap-[32px]">
            <div className="flex flex-1 items-center gap-8">
              <div className="flex gap-8 items-start max-md:flex-col">
                <div className="flex flex-col gap-8 max-md:my-6 items-start max-md:flex-row max-md:mx-auto">
                  {TechNumbers.map((item, index) => (
                    <button
                      key={index}
                      className="bg-white border border-transparent flex size-20 rounded-full flex-col justify-center items-center text-black"
                    >
                      {item.number}
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-6 flex-1 justify-center items-start text-center  ">
                  <div className="flex flex-col items-start self-stretch gap-4">
                    <h2 className="text-[#8F9095] text-xl font-bellefair uppercase opacity-50 max-md:w-full">
                      The terminology...
                    </h2>
                    <h1 className="text-4xl font-bellefair uppercase w-full max-md:text-center text-start">
                      {TechnologyData[Techindex].title}
                    </h1>
                  </div>
                  <p className="font-barlow text-[#D0D6F9]">
                    {TechnologyData[Techindex].p}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-1 self-stretch items-center">
              <img
                src={TechnologyData[Techindex].image}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}