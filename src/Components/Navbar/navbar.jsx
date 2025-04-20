import React, { useEffect, useState } from "react";
import { NavElements } from "../../Constants/NavElements";
import { NavLink } from "react-router-dom";
import { X } from "lucide-react";
import { Menu } from "lucide-react";
import useNavResizing from "../../Hooks/resizingstate";
export default function NavBar() {
const { Isnavsmall, isOpen, setIsOpen} = useNavResizing();
  return (
    <>
      <header className="relative select-none">
        <nav className="flex justify-center w-full">
          <div className="flex pt-10 items-center w-full -gap-8">
            <div className="flex gap-16 items-center ps-[60px] flex-1">
              <img src="/Logo/Logo.png" alt="Space Tourism" loading="lazy" />
              <span className="p-[1px] bg-[#4A4B55] min-h-1px w-full" />
            </div>
            <div className="w-full px-14 lg:flex-1  gap-12 backdrop-blur-2xl bg-[rgba(255, 255, 255, 0.05)] rounded-md flex justify-end pe-14 text-white items-center">
              {Isnavsmall ? (
                <div className="flex gap-12">
                  <div className="h-[96px] flex flex-col items-start gap-2 justify-center">
                    <button
                      onClick={() => setIsOpen(true)}
                      className="cursor-pointer"
                    >
                      <Menu />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex gap-12">
                  {NavElements.map((nav) => (
                    <NavLink
                      to={nav.link}
                      key={nav.id}
                      className={`h-[96px] flex duration-700 flex-col hover:border-gray-500 border-b-3 transition-all items-start gap-2 justify-center border-transparent`}
                    >
                      <div>
                        <h2 className="font-barlow-condensed text-lg">
                          {nav.count} {nav.name}
                        </h2>
                      </div>
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          </div>
        </nav>
      </header>
      <div
        className={`fixed top-0 right-0 h-screen w-full transition-transform duration-500 z-1 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div
          className={`absolute backdrop-blur-2xl bg-[rgba(11, 13, 23, 0.15)]  h-full w-[300px] right-0 transform transition-transform duration-500 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col justify-between gap-10">
            <div className="p-2.5 text-white pe-3 py-8 w-full flex items-center justify-end">
              <button
                onClick={() => {
                  setTimeout(() => {
                    setIsOpen(false);
                  }, 100);
                }}
                className="cursor-pointer"
              >
                <X className="size-8" />
              </button>
            </div>
            <div className="flex  flex-col gap-8 ps-12 pe-1 text-white">
              {NavElements.map((nav) => (
                <NavLink
                  to={nav.link}
                  key={nav.id}
                  className={({ isActive }) =>
                    `flex flex-row justify-start align-center hover:border-gray-500 transition-all border-r-3 border-transparent duration-700 ${
                      isActive ? "active-link" : "selected-link"
                    }`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  <div>
                    <h2 className="font-barlow-condensed text-lg">
                      {nav.count} {nav.name}
                    </h2>
                  </div>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
