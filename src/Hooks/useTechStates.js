import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  { useRef, useState } from "react";

export default function useTechStates() {
  const [Techindex, setTechindex] = useState(0);
  const formRef = useRef(null);
  useGSAP(() => {
    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    );
  }, []);

  return {
    Techindex,
    setTechindex,
    formRef,
  };
}
