import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";

export default function useCrewStates() {
    const [crewIndex, setCrewIndex] = useState(0);
    const formRef = useRef(null);
  
    useGSAP(() => {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, duration: 0.7, ease: "power1.out", y: 0 }
      );
    });
    return {
      crewIndex,
      setCrewIndex,
      formRef,
    };
}
