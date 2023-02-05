import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const NavbarItem = ({ to, icon, title }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleWidth = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleWidth);
    return () => {
      window.removeEventListener("resize", handleWidth);
    };
  });

  return (
    <Link
      to={to}
      className="flex flex-row items-center decoration-0 hover:bg-[#f0def4] duration-[400ms] text-[20px] py-[15px] px-[20px] mx-[10px] sm:mx-0 sm:p-[5px] rounded-[20px] hover:shadow-[rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px]"
    >
      {icon}
      {width > 830 && (
        <span className="ml-[5px] " style={{ fontFamily: "cursive" }}>
          {title}
        </span>
      )}
    </Link>
  );
};
