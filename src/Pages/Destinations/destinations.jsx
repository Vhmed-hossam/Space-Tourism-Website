import React, { useRef } from "react";
import "./destination.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import NavBar from "../../Components/Navbar/navbar";
import { Destinationtext } from "../../Constants/Destinationtext";
export default function Destinations() {
  const formRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, duration: 0.7, ease: "power1.out", y: 0 }
    );
  });
  return (
    <div className="bg-img2 h-screen ">
      <NavBar />
      <div className="flex flex-1 gap-2 items-center self-stretch flex-col px-10 py-12">
        <div className="flex flex-col flex-1  self-stretch text-white container mx-auto align-start gap-6">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
