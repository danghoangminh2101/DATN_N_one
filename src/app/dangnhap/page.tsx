import React from "react";
import Image from 'next/image';

export default function LoginSection() {
  return (
    <div className="w-full bg-white h-auto min-h-screen overflow-y-auto text-center text-[55px] text-white font-['Roboto_Condensed']">
      {/* Background Section */}
      <div className="relative w-full bg-gray-200 h-[452px]">
        <div className="absolute inset-0 bg-[url('/background@3x.png')] bg-cover bg-no-repeat bg-top">
          <div className="absolute inset-0 bg-gray-300 w-full"></div>
        </div>
        <div className="absolute w-full top-[107px] h-[97.4px]">
          <b className="tracking-[-1.1px] uppercase flex items-center justify-center">
            Log In
          </b>
          <nav className="w-full text-base mt-4">
            <div className="flex justify-center gap-2">
              <b className="uppercase">Home</b>
              <span>:</span>
              <b className="uppercase">Log In</b>
            </div>
          </nav>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="relative mx-auto w-full max-w-4xl text-left text-sm text-gray-100">
        {/* Main Image */}
        <Image
          className="absolute -top-[74px] left-0 w-[60%] h-auto object-contain"
          alt="Main"
          src="/image@2x.png"
          width={800}
          height={789}
        />

        {/* Form Section */}
        <section className="relative w-full max-w-xl mx-auto mt-[579px] bg-[#f6f2ec] p-5 md:p-10 rounded-lg">
          <Image
            className="hidden md:block absolute inset-y-0 left-0 w-[50%] object-cover"
            alt="Side"
            src="/image1@2x.png"
            width={570}
            height={700}
          />

          <div className="relative w-full border-b border-[#ebe3d9] pb-5 text-[35px] text-gray-200">
            <b className="uppercase">Welcome</b>
            <div className="mt-4 flex gap-4">
              <button className="w-20 h-10 bg-blue-500 text-white uppercase text-sm">
                Log In
              </button>
              <button className="w-28 h-10 bg-white border border-blue-500 text-blue-500 uppercase text-sm">
                Register
              </button>
            </div>
          </div>
          <p className="mt-4 uppercase font-medium">Sign in your Boskery account</p>

          {/* Sign-in Form */}
          <form className="mt-5 space-y-4">
            <div className="relative">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-[#ebe3d9] rounded"
              />
              <img
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
                alt="email-icon"
                src="/icon.svg"
              />
            </div>

            <div className="relative">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 border border-[#ebe3d9] rounded"
              />
              <img
                className="absolute top-1/2 left-3 transform -translate-y-1/2 w-4 h-4"
                alt="password-icon"
                src="/icon1.svg"
              />
            </div>

            <div className="flex justify-between items-center">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                Remember me
              </label>
              <a href="#" className="text-blue-500">Forgot password?</a>
            </div>

            <button className="w-full p-3 bg-blue-500 text-white uppercase text-sm">
              Log In
            </button>
          </form>
        </section>

        {/* Footer */}
        <footer className="mt-10 border-t border-[#ebe3d9] pt-5 text-center">
          <p>
            Don’t have an account?{' '}
            <a href="#" className="text-blue-500">Register</a>
          </p>
          <p className="mt-4">Or sign in with</p>
          <div className="mt-4 flex justify-center gap-5">
            <div className="bg-white w-14 h-14 flex justify-center items-center">
              <img
                className="w-6 h-6 object-cover"
                alt="Google icon"
                src="/image2@2x.png"
              />
            </div>
            <div className="bg-white w-14 h-14 flex justify-center items-center">
              <img
                className="w-6 h-6 object-cover"
                alt="Facebook icon"
                src="/image3@2x.png"
              />
            </div>
            <div className="bg-white w-14 h-14 flex justify-center items-center">
              <img
                className="w-6 h-6 object-cover"
                alt="Twitter icon"
                src="/image4@2x.png"
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
