import * as React from "react";

export default function MyComponent() {
  return (
    <div className="flex flex-col pb-16 bg-white">
      <div className="flex flex-col justify-center items-center px-20 py-40 w-full text-center whitespace-nowrap bg-slate-300 max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex flex-col mb-0 max-w-full w-[149px] max-md:mb-2.5">
          <div className="text-6xl leading-tight text-black max-md:text-4xl">
            Login
          </div>
          <div className="flex gap-3 items-center mt-3 text-lg leading-none text-blue-600 uppercase max-md:mr-1.5">
            <div className="grow self-stretch my-auto text-black">Home</div>
            <div className="self-stretch">//</div>
            <div className="self-stretch my-auto">Login</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start self-end mt-28 mr-44 max-w-full w-[1300px] max-md:mt-15 max-md:mr-2.6">
        <div className="flex gap-5 ml-56 text-2xl font-medium leading-tight whitespace-nowrap max-md:ml-2.5">
          <div className="grow text-blue-600">Login</div>
          <div className="flex shrink-0 self-start mt-1 w-px bg-black h-[25px]" />
          <div className="text-black basis-auto">Register</div>
        </div>
        <div className="flex flex-col p-20 mt-10 max-w-fullư bg-white bg-opacity- shadow-[0px_0px_6px_rgba(0,0,0,0.1)] text-neutral-500 w-[900px] max-md:px-5">
          <div className="overflow-hidden px-4 py-5 text-sm whitespace-nowrap border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full">
            Username
          </div>
          <div className="overflow-hidden px-4 py-5 mt-8 text-sm whitespace-nowrap border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full">
            Password
          </div>
          <div className="flex flex-wrap gap-10 mt-12 text-black max-md:mt-10 max-md:mr-0.5 max-md:max-w-full">
            <div className="flex flex-col flex-1">
              <div className="flex gap-1.5 text-base leading-loose">
                <div className="flex shrink-0 mt-2 bg-white rounded border border-solid border-neutral-500 h-[15px] w-[15px]" />
                <div className="grow shrink w-[108px]">Remember me</div>
              </div>
              <div className="self-start px-8 py-3.5 mt-7 text-sm font-medium leading-none text-center uppercase whitespace-nowrap bg-zinc-100 max-md:px-5">
                Login
              </div>
            </div>
            <div className="self-start text-base leading-loose">
              Forgot Password?
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/55e4fbdde8ee4408a0c35da726195dfe/d061e66ddfaab3af46bc5e7e3fb4c361791bac8d820ab7696eaf5943366d5d8d?apiKey=55e4fbdde8ee4408a0c35da726195dfe&"
          className="object-contain self-end mt-12 aspect-square rounded-[50px] w-[50px] max-md:mt-10"
        />
      </div>
    </div>
  );
} 