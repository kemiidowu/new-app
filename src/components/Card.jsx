import React from "react";
import routeIcon from "./../assets/route-icon.svg";

export const Card = ({
  packageID,
  status,
  deliveries,
  packageType,
  amount,
  source,
  destination,
}) => {
  return (
    <div className="px-2.5 py-[15px] rounded-lg bg-white shadow_sm border border-[#F2F3F5] first:mt-0 mt-[15px]">
      <div className="flex justify-between items-center mb-[20px]">
        <span className="text-[12px] font-[600] leading-[18px]">
          Package ID: {packageID}
        </span>
        <span className="text-[10px] font-[600] leading-[18px] text-[#24AD42]">
          {status}
        </span>
      </div>
      <div className="flex justify-between items-center mb-[20px]">
        <span className="text-[8px] font-[500]">3 deliveries</span>
        <span className="text-[8px] font-[500]">Thu, jun 16/22</span>
        <span className="text-[8px] font-[500]">2:00pm</span>
        <span className="text-[8px] font-[500] text-[#24AD42]">
          Express delivery
        </span>
      </div>
      <div className="flex items-start mb-[20px]">
        <span className="text-[8px] font-[500] pr-2">2:00</span>
        <img src={routeIcon} alt="" />
        <div className="flex flex-col text-[9px] font-[500]  pl-2">
          <span className="text-[#100A2C]">Sharon Str, Ketu.</span>
          <span className="text-[#B7B5C0] pt-[30px]">Sharon Str, Ketu.</span>
        </div>
      </div>
      <div className="flex items-baseline">
        <span className="text-[12px] font-[500] leading-[15px] text-[#B7B5C0]">
          {" "}
          Price:
        </span>
        <span className="text-[10px] font-[600] pl-1 leading-[15px]">
          12,000
        </span>
      </div>
    </div>
  );
};
