import Head from 'next/head';
import { FC } from 'react';

const Register: FC = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="w-full relative bg-white min-h-screen overflow-y-auto text-center text-white font-roboto-condensed">
        <div className="absolute top-0 left-0 w-full h-auto lg:h-[1872px] overflow-hidden">
          {/* Header Section */}
          <div className="relative w-full h-[452px] bg-gray-200">
            <div
              className="absolute w-full h-full bg-cover bg-no-repeat"
              style={{ backgroundImage: "url('/background1@3x.png')" }}
            >
              <div className="absolute h-full w-full bg-gray-300" />
            </div>
            <div className="absolute w-full top-[107px] h-[97.4px]">
              <b className="absolute top-1 left-1/2 transform -translate-x-1/2 tracking-[-1.1px] uppercase flex items-center justify-center w-[229px] h-[62px] text-4xl">
                REGISTER
              </b>
              <div className="absolute w-full top-[75px] h-[22.4px] text-base">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 flex space-x-2 items-center">
                  <b className="text-sm uppercase">Home</b>
                  <span className="text-sm">:</span>
                  <b className="text-sm uppercase">REGISTER</b>
                </div>
              </div>
            </div>
          </div>
          {/* Main Content */}
          <div className="relative mt-10 px-4 lg:mt-[579px] lg:flex lg:justify-center lg:space-x-10">
            <img
              className="w-full max-w-xs mx-auto lg:max-w-md lg:w-[802.5px] lg:h-auto object-contain lg:absolute lg:-top-28 lg:left-0"
              src="/image@2x.png"
              alt=""
            />
            <div className="bg-seashell p-6 rounded-lg shadow-lg lg:w-[51.78%] lg:relative lg:left-[41.86%] lg:h-auto lg:flex lg:items-center">
              <div className="w-full lg:max-w-[570px]">
                <div className="border-b border-linen pb-4 mb-4">
                  <b className="text-3xl uppercase">NEW?</b>
                  <div className="flex justify-between mt-4">
                    <button className="bg-white text-blue px-6 py-2 border border-linen">
                      Log In
                    </button>
                    <button className="bg-blue text-white px-6 py-2">
                      Register
                    </button>
                  </div>
                  <div className="text-gray-500 text-sm mt-2">
                    Sign in your Boskery account
                  </div>
                </div>
                {/* Form */}
                <div className="space-y-4">
                  <div className="bg-white border border-linen px-4 py-3">
                    <label className="block text-gray-700 text-sm">Your Email</label>
                  </div>
                  <div className="bg-white border border-linen px-4 py-3">
                    <label className="block text-gray-700 text-sm">Name</label>
                  </div>
                  <div className="bg-white border border-linen px-4 py-3">
                    <label className="block text-gray-700 text-sm">Password</label>
                  </div>
                  <button className="w-full bg-blue text-white py-3 uppercase">
                    REGISTER
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Section */}
          <div className="mt-10 lg:mt-16 lg:relative lg:left-[41.86%] lg:w-[51.78%]">
            <div className="border-t border-linen py-6">
              <div className="text-gray-500 text-center">
                <span className="uppercase">Have an account?</span>
                <span className="ml-2 text-blue uppercase">LOGIN</span>
              </div>
              <div className="text-center mt-6 text-gray-500 capitalize">
                Or sign in with
              </div>
              <div className="flex justify-center space-x-4 mt-4">
                <div className="bg-white p-4 rounded-full">
                  <img className="w-6 h-6" src="/image2@2x.png" alt="Google" />
                </div>
                <div className="bg-white p-4 rounded-full">
                  <img className="w-6 h-6" src="/image3@2x.png" alt="Facebook" />
                </div>
                <div className="bg-white p-4 rounded-full">
                  <img className="w-6 h-6" src="/image4@2x.png" alt="Apple" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
