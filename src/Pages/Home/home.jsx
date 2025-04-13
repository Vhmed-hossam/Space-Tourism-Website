import React, { useRef } from "react";
import "./home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Sphere from "../../Components/Sphere/sphere";
import NavBar from "../../Components/Navbar/navbar";
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
    <div className="min-h-screen bg-img1 overflow-hidden">
      <NavBar />
      <div className="flex flex-1 items-center justify-center text-white">
        <div className="container mx-auto flex flex-col gap-12 px-4 sm:px-6 lg:px-10">
          <div
            ref={formRef}
            className="flex w-full container mx-auto px-6 flex-1 flex-col items-center justify-between gap-6 sm:mt-12 md:flex-row"
          >
            <div className="flex flex-1 flex-col gap-6 text-center md:text-left">
              <h2 className="font-barlow-condensed text-[28px] uppercase tracking-wide">
                So, you want to travel to
              </h2>
              <h1 className="font-bellefair text-[80px] uppercase md:text-[100px]">
                Space
              </h1>
              <p className="font-barlow text-[15px] leading-[180%] md:max-w-[400px]">
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well, sit back, and relax because we’ll give you a truly out
                of this world experience!
              </p>
            </div>
            <div
              ref={sphereRef}
              className="flex flex-1 flex-col items-center justify-center md:items-end"
            >
              <Sphere />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
