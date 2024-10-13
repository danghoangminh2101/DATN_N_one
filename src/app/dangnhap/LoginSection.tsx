import React from "react";

export default function LoginSection() {
  return (
    <div className="flex flex-col items-center pt-px bg-white pb-[575px] max-md:py-24">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center self-stretch px-20 py-40 mt-0 -mb-1 w-full text-center whitespace-nowrap bg-slate-300 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[149px] max-md:mb-2.5">
          <div className="text-6xl leading-tight text-black max-md:text-4xl">Login</div>
          <div className="flex gap-5 justify-between mt-4 text-lg leading-none uppercase max-md:mr-1.5">
            <div className="text-black">Home</div>
            <div className="text-blue-  600">Login</div>
          </div>
        </div>
      </div>

      {/* Login / Register Section */}
      <div className="flex gap-5 mt-28 max-w-full text-2xl font-medium leading-tight whitespace-nowrap w-[207px] max-md:mt-10">
        <div className="grow text-blue-600">Login</div>
        <div className="flex shrink-0 my-auto w-px bg-black h-[18px]"></div>
        <div className="grow shrink text-black w-[100px]">Register</div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col p-20 mt-10 max-w-full bg-white bg-opacity-0 shadow-[0px_0px_6px_rgba(0,0,0,0.1)] text-neutral-500 w-[670px] max-md:px-5">
        {/* Username Input */}
        <div className="overflow-hidden px-4 py-5 text-sm whitespace-nowrap border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full">
          Username
        </div>

        {/* Password Input */}
        <div className="overflow-hidden px-4 py-5 mt-8 text-sm whitespace-nowrap border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full">
          Password
        </div>

        {/* Remember me and Forgot Password Section */}
        <div className="flex flex-wrap gap-10 mt-12 text-black max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
          <div className="flex flex-col flex-1">
            <div className="flex gap-1.5 text-base leading-loose">
              <div className="flex shrink-0 bg-white rounded border border-solid border-neutral-500 h-[15px] w-[15px]"></div>
              <div className="grow shrink -mt-0.5 w-[108px]">Remember me</div>
            </div>
            <div className="self-start px-8 py-3.5 mt-7 text-sm font-medium leading-none text-center uppercase whitespace-nowrap bg-zinc-100 max-md:px-5">
              Login
            </div>
          </div>
          <div className="self-start text-base leading-loose">Forgot Password?</div>
        </div>
      </div>
    </div>
  );
}
