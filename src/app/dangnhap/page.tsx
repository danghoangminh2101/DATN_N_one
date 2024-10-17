import Image from 'next/image';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      className="w-full relative bg-white min-h-screen overflow-y-auto text-center text-[#fff] font-['Roboto_Condensed']"
    >
      {/* Background Header */}
      <div className="relative w-full bg-[#1e1d1d] h-[452px]">
        <div className="absolute inset-0 bg-cover bg-no-repeat bg-top" style={{ backgroundImage: `url('/public/background@3x.png')` }}>
          <div className="absolute inset-0 bg-[rgba(30,29,29,0.8)]"></div>
        </div>

        {/* Login Button */}
        <div className="relative w-full mt-[107px] text-center">
          <b className="text-4xl md:text-5xl uppercase">Log In</b>

          {/* Home & Login Navigation */}
          <div className="mt-6 text-sm md:text-base">
            <span className="uppercase">Home</span> <span className="mx-2">:</span> <span className="uppercase">Log In</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative mx-auto mt-8 max-w-6xl px-4 lg:px-0 flex flex-col lg:flex-row items-start">
        {/* Left Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            className="object-contain"
            alt="Background"
            src="/public/image@2x.png"
            width={802}
            height={790}
            layout="intrinsic"
          />
        </div>

        {/* Login Form Section */}
        <div className="w-full lg:w-1/2 bg-[#f4f4f4] border-[#9f9f9f] border-[1px] p-8 mt-8 lg:mt-0">
          <div className="border-b-[1px] border-[#ebe3d9] pb-8 text-center">
            <b className="text-xl md:text-3xl uppercase">Welcome</b>

            {/* Log In / Register Buttons */}
            <div className="mt-4 flex justify-center space-x-4">
              <button className="bg-[#0004fc] text-white py-2 px-4 uppercase">Log In</button>
              <button className="bg-white text-[#0004fc] py-2 px-4 uppercase border border-[#0004fc]">Register</button>
            </div>
          </div>

          {/* Form */}
          <div className="mt-8">
            <p className="uppercase font-medium text-center">Sign in your Boskery account</p>

            {/* Email Input */}
            <div className="mt-6">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border-[#ebe3d9] border-[1px] p-4 bg-white text-gray-700"
              />
            </div>

            {/* Password Input */}
            <div className="mt-6">
              <input
                type="password"
                placeholder="Password"
                className="w-full border-[#ebe3d9] border-[1px] p-4 bg-white text-gray-700"
              />
            </div>

            {/* Forgot Password */}
            <div className="text-right mt-4">
              <a href="#" className="text-sm text-[#7a7373]">Forgot password?</a>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center mt-4">
              <input type="checkbox" id="rememberMe" className="mr-2" />
              <label htmlFor="rememberMe" className="text-[#7a7373]">Remember me</label>
            </div>

            {/* Log In Button */}
            <button className="w-full bg-[#0004fc] text-white py-4 mt-8 uppercase">Log In</button>
          </div>

          {/* Register Section */}
          <div className="mt-12 border-t-[1px] border-[#ebe3d9] pt-8 text-center">
            <p className="uppercase">Don’t have an account? <a href="#" className="text-[#0004fc]">Register</a></p>
            <p className="mt-6">Or sign in with</p>

            {/* Social Media Login */}
            <div className="flex justify-center space-x-8 mt-6">
              <div className="bg-white w-[56px] h-[56px] flex items-center justify-center">
                <Image src="/public/image2@2x.png" alt="Social" width={24} height={24} />
              </div>
              <div className="bg-white w-[56px] h-[56px] flex items-center justify-center">
                <Image src="/public/image3@2x.png" alt="Social" width={24} height={24} />
              </div>
              <div className="bg-white w-[56px] h-[56px] flex items-center justify-center">
                <Image src="/public/image4@2x.png" alt="Social" width={24} height={24} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
