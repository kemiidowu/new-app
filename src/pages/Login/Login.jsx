import React from "react";
import DeliveryImage from "../../assets/delivery-image.svg";
import TextInput from "../../components/TextInput";
import { ROUTES } from "../../helpers/routes";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="app w-full">
      <div className="hidden md:w-[40%] bg-[#FBFBF9] px-[72px] md:flex flex-col items-center justify-center">
        <img alt="" src={DeliveryImage} />
        <div className="max-w-[388px] text-justify">
          <h1 className="text-[20px] font-[600] text-[#100A2C] mt-[52px] text-center">
            Manage Lorem Ipsum Store
          </h1>
          <h6 className="text-[16px] font-[500] text-[#858292] pt-[16px] text-center">
            Take control of Lorem Ipsum with this<br></br> all-in-one solution
            for Ipsum.
          </h6>
          <div className="flex mt-[52px] items-center text-center justify-center">
            <div className="border border-[#1D1D7B] w-[66px] h-[3px] rounded bg-[#1D1D7B] mr-[4px]"></div>
            <div className="border border-[#CCDEF7] w-[66px] h-[3px] rounded bg-[#CCDEF7] mr-[4px]"></div>
            <div className="border border-[#CCDEF7] w-[66px] h-[3px] rounded bg-[#CCDEF7] mr-[4px]"></div>
          </div>
        </div>
      </div>

      <div className=" w-full md:w-[60%] bg-white px-[30px] md:px-[222px] flex flex-col items-start pt-[124px] text-left">
        <h1 className="text-[30px] font-[600] text-[#100A2C] leading-normal">
          Login
        </h1>
        <h6 className="text-[18px] font-[600] text-[#858292] pt-[17px] pb-[42px]">
          To Login, input the details you signed up with
        </h6>

        <TextInput label="Email address" placeholder="Enter your email" />
        <TextInput label="Password" placeholder="Enter your password" />

        <button
          className="rounded-full bg-[#100A2C] w-full text-[16px] text-white font-[500] h-[51px] mt-[69px]"
          onClick={() => navigate(ROUTES.DELIVERIES)}
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
