import { useEffect, useState } from "react";

export default function useNavResizing() {
  const [Isnavsmall, setIsnavsmall] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 707) {
        setIsnavsmall(true);
      } else {
        setIsnavsmall(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { Isnavsmall, isOpen, setIsOpen };
}
