import React from "react";
import { NavLink } from "react-router-dom";
import { menu } from "../assets/json/json";
import crowdCargoLogo from "./../assets/crowd-cargo-logo.svg";

const Sidebar = () => {
  return (
    <div>
      <div className="pb-[20px] border-b px-6">
        <img src={crowdCargoLogo} alt="" className="" />
      </div>
      <div className="px-6 ">
        {menu.map(({ link, text, staleIcon, activeIcon }, index) => {
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `text-[#7EB2FF] bg-[#EDF3FF] rounded-[40px] flex items-center px-6 py-[14px] mt-3 first:mt-[23px]`
                  : `text-[rgba(16, 10, 44, 0.80)] flex items-center px-6 py-[14px] mt-3 first:mt-[23px]`
              }
              key={index}
              to={link}
            >
              <img src={activeIcon} alt="" />
              <span className="pl-4">{text}</span>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
