import React from "react";

export default function RegisterSection() {
  return (
    <div className="flex flex-col items-center pt-px mt-0 whitespace-nowrap bg-white pb-[575px] max-md:py-24 max-sm:pt-1">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center self-stretch px-20 py-40 w-full text-center bg-slate-300 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[149px] max-md:mb-2.5">
          <div className="text-6xl leading-tight text-black max-md:text-4xl">Login</div>
          <div className="flex gap-5 justify-between mt-4 text-lg leading-none uppercase max-md:mr-1.5">
            <div className="text-black">Home</div>
            <div className="text-blue-600">Login</div>
          </div>
        </div>
      </div>

      {/* Login/Register Switch */}
      <div className="flex gap-5 mt-28 max-w-full text-2xl font-medium leading-tight w-[207px] max-md:mt-10">
        <div className="grow text-black">login</div>
        <div className="flex shrink-0 my-auto w-px bg-black h-[18px]"></div>
        <div className="grow shrink text-blue-600 w-[100px]">register</div>
      </div>

      {/* Form Section */}
      <div className="flex flex-col p-20 mt-10 max-w-full text-sm bg-white bg-opacity-0 shadow-[0px_0px_6px_rgba(0,0,0,0.1)] text-neutral-500 w-[670px] max-md:px-5">
        {/* Username Field */}
        <div className="overflow-hidden px-4 py-5 border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full">
          Username
        </div>
        {/* Password Field */}
        <div className="overflow-hidden px-4 py-5 mt-8 border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full">
          Password
        </div>
        {/* Email Field */}
        <div className="overflow-hidden px-4 py-5 mt-6 border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full">
          Email
        </div>
        {/* Register Button */}
        <div className="self-start px-5 py-3.5 mt-5 font-medium leading-none text-center text-black uppercase bg-zinc-100">
          Register
        </div>
      </div>
    </div>
  );
}
