import React from "react";
import menuIcon from "./../assets/menu-icon.svg";
import avatar from "./../assets/avatar-icon.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-end shadow-sm px-[7px] py-[5px] bg-white">
      <div className="flex cursor-pointer justify-between items-center px-[10px] py-3 user_border rounded-[9px] w-[289px] border">
        <div className="inline-flex h-[50px] w-[50px] bg-white rounded-full shadow_sm items-center justify-center">
          <img
            src={menuIcon}
            className="bg-[#f3f4f6] w-[26px] h-[26px] rounded-full"
            alt=""
          />
        </div>
        <p className="text-[18px] leading-[18px] font-[600] text-[#4d5154]">
          My Corner
        </p>
        <div className="inline-flex h-[50px] w-[50px] bg-white rounded-full shadow_sm items-center justify-center ">
          <img
            src={avatar}
            className="bg-[#f3f4f6] w-[26px] h-[26px] rounded-full"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
