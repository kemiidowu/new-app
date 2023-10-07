import React from "react";
import { Layout } from "../../components/Layout";
import chevronIcon from "./../../assets/chevron-right-icon.svg";
import TextInput from "../../components/TextInput";

import { Loader } from "@googlemaps/js-api-loader";
import { Card } from "../../components/Card";

export const Deliveries = () => {
  const loader = new Loader({
    apiKey: process.env.REACT_APP_APIKEY,
    version: "weekly",
  });

  loader.load().then(async () => {
    const { Map } = await window.google.maps.importLibrary("maps");

    new Map(document.getElementById("map"), {
      center: { lat: 10, lng: 8 },
      zoom: 8,
    });
  });
  return (
    <Layout>
      <div className="px-[30px]">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <h1 className="text-[30px] font-[600]">Deliveries</h1>
            <div className="flex items-center text-[16px] font-[500] mt-5">
              {" "}
              <span className="text-[#848193] pr-2 cursor-pointer">Users</span>
              <img src={chevronIcon} alt="" />
              <span className="text-[#848193] px-2 cursor-pointer">
                User Profile
              </span>
              <img src={chevronIcon} alt="" />
              <span className="text-[#100A2C] pl-2 cursor-pointer">
                Active Deliveries
              </span>
            </div>
          </div>
          <button className="rounded-full bg-[#100A2C] px-5 text-[16px] text-white font-[500] h-[51px] flex justify-between items-center">
            New deliveries
            <span className="inline-flex justify-center items-center ml-[18px] rounded-full bg-[#59546C] h-[36.8px] w-[36.8px]">
              50
            </span>
          </button>
        </div>
        <div className="mt-[50px]">
          <TextInput placeholder="Search for Deliveries..." />
        </div>
      </div>
      <div className="bg-white py-[23px] px-[30px] w-full mt-6 flex">
        <div className="w-[30%] border-r pr-2.5 h-full">
          <h6 className="text-[16px] font-[600] pb-[30px] ">Tuesday 12/9/22</h6>
          <div className="">
            <Card packageID="NGR-1108220008" status="Active" />
            <Card packageID="NGR-1108220008" status="Active" />
            <Card packageID="NGR-1108220008" status="Active" />
            <Card packageID="NGR-1108220008" status="Active" />
            <Card packageID="NGR-1108220008" status="Active" />
          </div>
        </div>
        <div className="mt-[53px] w-[70%] pl-2.5 ">
          <div className="h-[457px] w-[100%] rounded-lg" id="map"></div>
        </div>
      </div>
    </Layout>
  );
};
