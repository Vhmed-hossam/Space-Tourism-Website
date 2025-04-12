import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavElements } from "../../Constants/NavElements";
import Menu from "../../Icons/icons";
export default function NavBar() {
  const [Isnavsmall, setIsnavsmall] = useState(false);

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
  return (
    <header className="relative ">
      <nav className="flex justify-center w-full absolute">
        <div className="flex pt-10 items-center w-full  gap-[-30px]">
          <div className="flex gap-16 items-center ps-[60px] flex-1">
            <img src="/Logo/Logo.png" alt="Space Tourism" />
            <span className="p-[1px] bg-[#979797] min-h-1px w-full "></span>
          </div>
          <div className="w-full px-14 lg:flex-1  gap-12 backdrop-blur-2xl bg-[rgba(255, 255, 255, 0.05)] rounded-md flex justify-end pe-14 text-white items-center">
            {Isnavsmall ? (
              <div className="flex gap-12">
                <div  className="h-[96px] flex flex-col items-start gap-2 justify-center">
                <Menu/></div>
              </div>
            ) : (
              <div className="flex gap-12">
                {NavElements.map((nav) => (
                  <Link
                    to={nav.link}
                    key={nav.id}
                    className="h-[96px] flex flex-col items-start gap-2 justify-center"
                  >
                    <div>
                      <h2 className="font-barlow-condensed text-lg">
                        {nav.count} {nav.name}
                      </h2>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
