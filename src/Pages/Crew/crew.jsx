import React, { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBar from "../../Components/Navbar/navbar";
import { motion, AnimatePresence } from "framer-motion";
import {
  CrewAnimationSettings,
  textAnimationSettings,
} from "../../Animations/CrewA";
import "./crew.css";
import { MYC } from "../../static/CrewText";
import { CrewText } from "../../Constants/CrewData";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function Crew() {
  const [crewIndex, setCrewIndex] = useState(0);
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, duration: 0.7, ease: "power1.out", y: 0 }
    );
  });
  return (
    <div className="bg-img3 h-auto overflow-hidden transition-all">
      <NavBar />
      <div className="flex flex-1 gap-2 items-center self-stretch flex-col px-10 py-12">
        <div
          className="flex flex-col flex-1 self-stretch text-white container mx-auto items-start gap-6"
          ref={formRef}
        >
          <div className="flex gap-3 uppercase items-center justify-start font-barlow-condensed">
            <span className="opacity-25 text-lg">{MYC.count}</span>
            <h2 className="text-lg tracking-wider">{MYC.text}</h2>
          </div>
          <div className="flex self-stretch  px-0.5 flex-wrap max-md:flex-col gap-12 flex-1 items-center">
            <div className="flex-1 max-md:ps-0 max-md:py-0 max-md:text-center ps-7 self-stretch flex flex-col items-start justify-center">
              <div className="flex-1 max-md:mt-6 self-stretch justify-start items-center flex">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={crewIndex}
                    className="flex flex-col gap-6 items-start max-md:items-center w-full"
                    {...textAnimationSettings}
                  >
                    <motion.div className="gap-1 max-md:text-center ">
                      {" "}
                      <motion.h3
                        className="text-[#8F9095] text-xl font-bellefair max-md:text-md uppercase opacity-50 w-full"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                      >
                        {CrewText[crewIndex].role}
                      </motion.h3>
                      <motion.h1
                        className="text-white w-full text-5xl max-md:text-center max-md:text-3xl font-bellefair uppercase"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        {CrewText[crewIndex].crew}
                      </motion.h1>
                    </motion.div>
                    <motion.p
                      className="text-[#D0D6F9] text-base max-sm:text-sm w-full font-barlow max-w-xl"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    >
                      {CrewText[crewIndex].about}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>
              <div className="flex self-stretch gap-2 flex-col items-start justify-center pb-12">
                <div className="flex w-full items-center gap-3 mt-8 max-md:justify-center">
                  <ChevronLeft
                    className="text-white w-6 h-6 cursor-pointer"
                    onClick={() => {
                      setCrewIndex(
                        crewIndex === 0 ? CrewText.length - 1 : crewIndex - 1
                      );
                    }}
                  />
                  {CrewText.map((_, index) => (
                    <span
                      key={index}
                      onClick={() => {
                        setCrewIndex(index);
                      }}
                      className={`w-[10px] h-[10px] bg-white rounded-full cursor-pointer transition-opacity ${
                        index === crewIndex ? "opacity-100" : "opacity-25"
                      }`}
                    />
                  ))}
                  <ChevronRight
                    className="text-white w-6 h-6 cursor-pointer"
                    onClick={() => {
                      setCrewIndex(
                        crewIndex === CrewText.length - 1 ? 0 : crewIndex + 1
                      );
                    }}
                  />
                </div>
              </div>
            </div>
            <div className="flex-1 self-stretch justify-center items-end flex min-h-[550px] max-h-[650px]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={crewIndex}
                  src={CrewText[crewIndex].image}
                  alt={CrewText[crewIndex].crew}
                  className="object-contain h-full max-h-[650px]"
                  loading="lazy"
                  {...CrewAnimationSettings}
                />
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
