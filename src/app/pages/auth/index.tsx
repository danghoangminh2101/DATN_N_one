'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { listUsers, register } from '../type/register.type';
// import abc from './api/users'

function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [listUser,setListUser]=useState([]);
  useEffect(() => {
    // Gọi API nội bộ Next.js mà ta vừa tạo
    const fetchUsers = async () => {
      try {
        
        const res = await fetch('/api/users'); // Gọi API nội bộ Next.js
        const data = await res.json();
        setListUser(data); // Lưu dữ liệu vào state
      } catch (error) {
        console.error('Error fetching data:', error);
      } 
    };

    fetchUsers();
  }, []);
  console.log(listUser);
  
  const handleRegister = async(e) => {
    e.preventDefault();
    try {
      const data={
        name: "Duy",
        nick_name: "john",
        email: "duy@example.com",
        address: "123 Street",
        phone: "0123456789",
        password: "1234567",
        password_confirmation: "1234567",
        customer_id: 1
      }
      await register(data);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  return (
    <div>
      <div className="bg-blue-600 absolute top-0 left-0 bg-gradient-to-b from-gray-900 via-gray-900 to-blue-600 bottom-0 leading-5 h-[50rem] w-full overflow-hidden"></div>
      
      <div className="relative py-9 sm:flex sm:flex-row justify-center">
        <div className="flex justify-center self-center z-10">
          <form onSubmit={handleRegister} className="p-12 bg-white mx-auto rounded-3xl w-[28rem] shadow-lg">
            <div className="mb-7">
              <h3 className="font-semibold text-2xl text-gray-800">Register</h3>
              <p className="text-gray-400">
                Don't have an account?{' '}
                <Link href="/dangnhap" className="text-sm text-blue-600 hover:text-blue-800">Login</Link>
              </p>
            </div>
            
            <div className="space-y-6">
              <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>
              <div>
                <input
                  className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  type="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="relative">
                <input
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                  required
                  aria-label="Password"
                />
                <div
                  className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <svg className="h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor">
                      <path d="..." />
                    </svg>
                  ) : (
                    <svg className="h-4 text-blue-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor">
                      <path d="..." />
                    </svg>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm ml-auto">
                  <a href="#" className="text-blue-600 hover:text-blue-500">Forgot your password?</a>
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-blue-600 hover:bg-blue-500 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                >
                  Register
                </button>
              </div>
              
              <div className="flex items-center justify-center space-x-2 my-5">
                <span className="h-px w-16 bg-gray-100"></span>
                <span className="text-gray-300 font-normal">or</span>
                <span className="h-px w-16 bg-gray-100"></span>
              </div>
              
              <div className="flex justify-center gap-5 w-full">
                <button
                  type="button"
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm hover:text-white text-blue-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
                  aria-label="Register with Google"
                >
                  <FaGoogle className="mr-2" />
                  <span>Google</span>
                </button>
                <button
                  type="button"
                  className="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-gray-900 hover:bg-gray-900 text-sm hover:text-white text-blue-500 p-3 rounded-lg tracking-wide font-medium cursor-pointer transition ease-in duration-500"
                  aria-label="Register with Facebook"
                >
                  <FaFacebookF className="mr-2" />
                  <span>Facebook</span>
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex-col flex self-center lg:px-14 sm:max-w-4xl xl:max-w-md z-10">
          <div className="self-start hidden lg:flex flex-col text-gray-300">
            <h1 className="my-3 font-semibold text-4xl">Welcome back</h1>
            <p className="pr-3 text-sm opacity-75">
              Lorem ipsum is placeholder text commonly used in the graphic, print,
              and publishing industries for previewing layouts and visual mockups.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
