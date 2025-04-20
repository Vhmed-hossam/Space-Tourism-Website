import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function useHomeStates() {
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

   return { formRef, sphereRef };
}
