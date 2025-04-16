import React from "react";
import { Link } from "react-router-dom";
import { HomeData } from "../../static/HomeText";

export default function Sphere() {
  return (
    <div className="group rounded-full relative">
      <span className="absolute w-[125%] h-[125%] z-[-1] rounded-full bg-white left-[-12.5%] top-[-12.5%] opacity-0 group-hover:opacity-20 transition-all duration-500 ease-in-out" />
      <Link to="/destination">
        {" "}
        <div className="flex items-center justify-center rounded-full max-sm:size-[144px] size-[272px] bg-white text-black">
          <h2 className="font-bellefair text-[32px] uppercase max-sm:text-[18px]">
            {HomeData.button}
          </h2>
        </div>
      </Link>
    </div>
  );
}
