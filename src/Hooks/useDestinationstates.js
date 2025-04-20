import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Destinationtext } from "../Constants/DestinationData";

export default function useDestinationstates() {
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
    return { Planet, setPlanet, formRef, currentPlanetData };
}
