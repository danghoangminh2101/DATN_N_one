"use client";
import * as React from "react";
import Link from "next/link";

export default function MyComponent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  return (
    <div className="flex flex-col pb-16 whitespace-nowrap bg-white w-full min-h-screen">
      <div className="flex flex-col justify-center items-center px-4 sm:px-20 py-20 sm:py-40 w-full text-center bg-slate-300">
        <div className="flex flex-col mb-0 w-full max-w-xs">
          <div className="text-4xl sm:text-6xl leading-tight text-black">
            REGISTER
          </div>
          <div className="flex gap-2 items-center justify-center mt-7 text-lg leading-none text-blue-600 uppercase">
            <div className="text-black">Home</div>
            <div className="self-stretch">//</div>
            <div className="self-stretch">REGISTER</div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center w-full px-4 sm:px-0 mt-10 sm:mt-28">
        <div className="flex gap-5 text-2xl font-medium leading-tight whitespace-nowrap">
          <Link href="/dangnhap" className="text-black hover:text-blue-600">
            Login
          </Link>
          <div className="flex shrink-0 self-start mt-1 w-px bg-black h-[25px]" />
          <div className="text-blue-600">Register</div>
        </div>

        <div className="flex flex-col p-6 sm:p-20 mt-10 w-full max-w-[900px] bg-white shadow-[0px_0px_6px_rgba(0,0,0,0.1)] text-neutral-500">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="overflow-hidden px-4 py-5 text-sm whitespace-nowrap border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="overflow-hidden px-4 py-5 mt-8 border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="overflow-hidden px-4 py-5 mt-5 border border-gray-200 border-solid max-md:pr-5 max-md:max-w-full"
          />
          <button className="self-start px-5 py-3.5 mt-5 font-medium leading-none text-center text-black uppercase bg-zinc-100">
            REGISTER
          </button>
        </div>

        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/55e4fbdde8ee4408a0c35da726195dfe/d061e66ddfaab3af46bc5e7e3fb4c361791bac8d820ab7696eaf5943366d5d8d?apiKey=55e4fbdde8ee4408a0c35da726195dfe&"
          className="w-[50px] h-[50px] object-contain mt-8 sm:mt-12 rounded-[50px]"
        />
      </div>
    </div>
  );
}