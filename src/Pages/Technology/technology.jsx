import NavBar from "../../Components/Navbar/navbar";
import "./tech.css";
import { SL101, TechNumbers } from "../../static/TechnologyText";
import { TechnologyData } from "../../Constants/TechnologyData";
import { motion, AnimatePresence } from "framer-motion";
import {
  footageAnimationSettings,
  textAnimationSettings,
} from "../../Animations/TechnologyA";
import useTechStates from "../../Hooks/useTechStates";

export default function Technology() {
  const { Techindex, setTechindex, formRef } = useTechStates();
  return (
    <div className="bg-img4 h-auto overflow-hidden" loading="lazy">
      <NavBar />
      <div className="flex  py-12 flex-col items-center gap-2 flex-1 self-stretch">
        <div
          ref={formRef}
          className="flex-1  flex gap-6 flex-col items-start max-md:ms-0  ms-[80px] text-white"
        >
          <div className="flex gap-3  uppercase items-center justify-start font-barlow-condensed max-md:ms-8">
            <span className="opacity-25 text-lg">{SL101.count}</span>
            <h2 className="text-lg tracking-widest">{SL101.text}</h2>
          </div>
          <div className="self-stretch  min-h-[580px] flex-1 max-md:flex-col-reverse max-sm:min-h-[700px] flex gap-[32px]">
            <div className="flex flex-1  items-center gap-8">
              <div className="flex gap-8 items-start max-md:flex-col">
                <div className="flex flex-col gap-8 max-md:my-6 items-start max-md:flex-row max-md:mx-auto">
                  {TechNumbers.map((item, index) => (
                    <button
                      key={index}
                      className={`border  transition-all flex size-20 rounded-full flex-col justify-center items-center ${
                        index === Techindex
                          ? "bg-white text-black border-transparent"
                          : "border-[#383B4B] text-white hover:border-white duration-700 cursor-pointer"
                      }`}
                      onClick={() => setTechindex(index)}
                    >
                      {item.number}
                    </button>
                  ))}
                </div>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`text-${Techindex}`}
                    className="flex flex-col gap-6 flex-1 justify-center items-start"
                    {...textAnimationSettings}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <motion.div className="flex flex-col items-start self-stretch gap-4">
                      <motion.h2
                        className="text-[#8F9095] text-2xl font-bellefair uppercase opacity-50 max-md:w-full max-md:text-center"
                        {...textAnimationSettings}
                      >
                        {SL101.auto}
                      </motion.h2>
                      <motion.h1
                        className="text-4xl font-bellefair uppercase w-full max-md:text-center text-start"
                        {...textAnimationSettings}
                      >
                        {TechnologyData[Techindex].title}
                      </motion.h1>
                    </motion.div>
                    <motion.p
                      className="font-barlow text-[#D0D6F9] max-md:text-center max-md:px-6 max-md:min-h-[96px]"
                      {...textAnimationSettings}
                    >
                      {TechnologyData[Techindex].p}
                    </motion.p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={`image-${Techindex}`}
                className="flex flex-1 self-stretch items-center"
                {...footageAnimationSettings}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                <motion.img
                  src={TechnologyData[Techindex].image}
                  className="w-full h-full object-cover max-md:max-w-[100%] rounded-lg max-w-[600px] max-h-[600px]"
                  loading="lazy"
                  {...footageAnimationSettings}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
