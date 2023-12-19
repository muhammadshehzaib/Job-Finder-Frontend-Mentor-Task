import React from "react";
import Tools from "./Tools";

export default function Card({
  companyLogo,
  companyName,
  newcom,
  featured,
  designation,
  time,
  role,
  country,
  lanuages,
  tools,
}) {
  return (
    <div className="xl:max-w-[70%] lg:max-w-[80%] md:max-w-[90%]  mx-auto flex mt-6 gap-3 2xl:max-w-[60%]">
      <div>
        <img src={companyLogo} alt="" />
      </div>
      <div className="flex justify-between w-full">
        <div className="flex flex-col ">
          <div className="first-line flex gap-3 items-center">
            <div className="text-[#5ba4a4] ">{companyName}</div>
            <div className="flex flex-row gap-2">
              {newcom ? (
                <span className="uppercase py-0.5 px-1.5 text-xs text-white rounded-2xl bg-[#5ba4a4]">
                  New
                </span>
              ) : (
                ""
              )}
              <span className="uppercase py-0.5 px-1.5 text-xs text-white rounded-2xl bg-black">
                Featured
              </span>
            </div>
          </div>
          <div className="second-line ">
            <h1 className="text-[#2c3a3a] font-bold text-xl pointer ">
              {designation}
            </h1>
          </div>
          <div className="Third-line flex text-[#7b8e8e] gap-3">
            <p>{time}</p>
            <p>{role}</p>
            <p>{country}</p>
          </div>
        </div>
        <div className="">
          <Tools lanuages={lanuages} tools={tools} />
        </div>
      </div>
    </div>
  );
}
