import React, { useRef } from "react";
import NavBar from "../../Components/Navbar/navbar";
import './tech.css';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
export default function Technology() {
  const formRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, duration: 0.7, ease: "power1.out", y: 0 }
    );
  });
  return (
    <div className="bg-img4 h-auto overflow-hidden transition-all">
      <NavBar />
      <div ref={formRef}>

      </div>
    </div>
  );
}
