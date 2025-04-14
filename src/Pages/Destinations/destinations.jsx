import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBar from "../../Components/Navbar/navbar";
import { Destinationtext } from "../../Constants/Destinationtext";
import { motion, AnimatePresence } from "framer-motion";
import "./destination.css";
import {
  planetAnimationSettings,
  textAnimationSettings,
} from "../../Animations/Destination";
import { PYD } from "../../static/Destination";
export default function Destinations() {
  const [Planet, setPlanet] = useState("Moon");

  const formRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, duration: 0.7, ease: "power1.out", y: 0 }
    );
  });

  const currentPlanetData = Destinationtext.find(
    (dest) => dest.title.toLowerCase() === Planet.toLowerCase()
  );

  return (
    <div className="bg-img2 h-auto overflow-hidden">
      <NavBar />
      <div className="flex flex-1 gap-2 items-center self-stretch flex-col px-10 py-12">
        <div
          className="flex flex-col flex-1 self-stretch text-white container mx-auto items-start gap-6"
          ref={formRef}
        >
          <div className="flex gap-3 uppercase items-center justify-start font-barlow-condensed">
            <span className="opacity-25 text-lg">{PYD.count}</span>
            <h2 className="text-lg tracking-wider">{PYD.text}</h2>
          </div>
          <div className="flex self-stretch flex-wrap max-md:flex-col gap-12 flex-1 items-center">
            <div className="flex-1 self-stretch justify-center items-center flex">
              <AnimatePresence mode="wait">
                <motion.img
                  key={Planet}
                  src={currentPlanetData.image}
                  alt={Planet}
                  className=" object-contain sm:size-full max-h-[500px]"
                  loading="lazy"
                  {...planetAnimationSettings}
                />
              </AnimatePresence>
            </div>
            <div className="flex-1 min-w-[250px] self-stretch flex-col flex items-center gap-6 justify-center">
              <div className="flex gap-5 mb-6">
                {Destinationtext.map((dest) => (
                  <button
                    key={dest.id}
                    className={`text-white border-b-3 uppercase duration-700 tracking-wider font-barlow-condensed opacity-50 transition-all ${
                      Planet.toLowerCase() === dest.title.toLowerCase()
                        ? "opacity-100  border-white"
                        : "border-b-transparent hover:border-gray-500 "
                    }`}
                    onClick={() => setPlanet(dest.title)}
                  >
                    {dest.title}
                  </button>
                ))}
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={Planet}
                  className="flex flex-col gap-6 justify-center max-md:items-center items-start self-stretch"
                  {...textAnimationSettings}
                >
                  <motion.h1
                    className="text-white text-5xl font-bellefair  uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                  >
                    {currentPlanetData.title}
                  </motion.h1>
                  <motion.p
                    className="text-[#D0D6F9] text-base w-full max-w-xl font-barlow max-md:text-center min-h-[120px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    {currentPlanetData.about}
                  </motion.p>
                  <div className="w-full border-t border-white/20 my-4 " />
                  <div className="flex justify-around w-full">
                    {currentPlanetData.data.map((stat, index) => (
                      <motion.div
                        key={index}
                        className="px-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      >
                        <p className="text-white text-sm uppercase opacity-70 font-barlow-condensed tracking-wider">
                          {stat.text}
                        </p>
                        <p className="text-white text-2xl font-bellefair uppercase">
                          {stat.value}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
