'use client'
import React, { useState } from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';
import { register } from '../pages/register';
import { useRouter } from 'next/navigation';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    const data = {
      name: "John Doe",
      nick_name: "john",
      email: "duyp7454@gmail.com",
      address: "123 Street",
      phone: "0123456789",
      password: "password123",
      password_confirmation: "password123",
      customer_id: 1
    };

    console.log(data);
    
    try {
      const response = await register(data);
      if (response.message === 'User registered successfully!') {
        router.push('/dangnhap');
      }
      console.log('User registered:', response);
    } catch (error) {
      console.error('Error signing up:', error);
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
            </div>

            <div className="space-y-6">
              <div>
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  type="text"
                  placeholder="Name"
                  
                />
              </div>
              <div>
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full text-sm px-4 py-3 bg-transparent border border-gray-300 rounded-lg focus:outline-none focus:border-blue-600 transition-colors"
                  type="email"
                  placeholder="Email"
                  
                />
              </div>
              <div className="relative">
                <input
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  type={showPassword ? 'text' : 'password'}
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                  
                  aria-label="Password"
                />
                <div
                  className="flex items-center absolute inset-y-0 right-0 mr-3 text-sm leading-5 cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? 'Hide' : 'Show'}
                </div>
              </div>
              <div>
                <input
                  name="password_confirmation"
                  value={formData.password_confirmation}
                  onChange={handleChange}
                  placeholder="Confirm Password"
                  type="password"
                  className="text-sm text-black px-4 py-3 rounded-lg w-full bg-transparent border border-gray-300 focus:outline-none focus:border-blue-600 transition-colors"
                  
                  aria-label="Password Confirmation"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-blue-600 hover:bg-blue-500 text-gray-100 p-3 rounded-lg tracking-wide font-semibold cursor-pointer transition ease-in duration-500"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
