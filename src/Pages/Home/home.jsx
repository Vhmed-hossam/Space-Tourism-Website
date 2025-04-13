import React, { useRef } from "react";
import "./home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Sphere from "../../Components/Sphere/sphere";
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
    <div className="h-screen bg-cover bg-center bg-no-repeat bg-img text-white flex items-center justify-center">
      <div className=" flex items-center self-stretch flex-col gap-12 container mx-auto px-10">
        <div
          ref={formRef}
          className="pt-25 max-sm:pt-0 flex-1 flex max-md:flex-col max-md:items-center max-md:gap-6 sm:mt-12 justify-between align-center w-full"
        >
          <div className="flex flex-wrap flex-col gap-6 flex-1 max-md:text-center">
            <h2 className="uppercase text-[28px] font-barlow-condensed">
              So, you want to travel to
            </h2>
            <h1 className="text-[80px] font-bellefair uppercase">Space</h1>
            <p className="text-[15px]/[180%] font-barlow">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div
            className="flex-1 flex flex-col pt-20 justify-center self-stretch max-md:items-center items-end gap-6"
            ref={sphereRef}
          >
            <Sphere />
          </div>
        </div>
      </div>
    </div>
  );
}
