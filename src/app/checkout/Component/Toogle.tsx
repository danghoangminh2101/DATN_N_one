'use client'
import { useState } from 'react';

export default function Toogle() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenToggle, setIsOpenToggle] = useState(false);

  // Function to toggle the login form
  const toggleForm = () => {
    setIsOpen(!isOpen);
  };

  // Function to toggle the discount form
  const toggleDiscount = () => {
    setIsOpenToggle(!isOpenToggle);
  };

  return (
    <div className="py-4">
      {/* Button to toggle the login form */}
      <button
        className="bg-gray-100 text-gray-700 w-full py-2 px-4 text-sm sm:text-base rounded flex justify-start"
        onClick={toggleForm}
      >
        {isOpen ? 'Returning customer? Click here to login' : 'Returning customer? Click here to login'}
      </button>

      {/* The login form with sliding effect */}
      <div
        className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <form className="mt-4 w-full max-w-lg p-6 rounded-lg border border-gray-100">
          <h3 className="text-sm sm:text-base">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</h3>
          <div className="checkout-account-toggle mt-4">
            <input
              className="h-[45px] w-full border border-gray-200 px-4 text-sm sm:text-base focus:outline-[#266bf9] mb-4"
              placeholder="Email address"
              type="email"
            />
            <input
              className="h-[45px] w-full border border-gray-200 px-4 text-sm sm:text-base focus:outline-[#266bf9] mb-4"
              placeholder="Password"
              type="password"
            />
            <button
              className="bg-[#266bf9] text-white h-[45px] w-full sm:w-auto px-4 mt-2 sm:mt-0 text-sm sm:text-base"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>

      {/* Button and form to toggle the discount */}
      <div className="mt-6">
        <button
          className="bg-gray-100 text-gray-700 w-full py-2 px-4 text-sm sm:text-base rounded flex justify-start"
          onClick={toggleDiscount}
        >
          {isOpenToggle ? 'Have a discount code? Click here to enter' : 'Have a discount code? Click here to enter'}
        </button>

        <div
          className={`overflow-hidden transition-[max-height] duration-1000 ease-in-out ${
            isOpenToggle ? 'max-h-screen' : 'max-h-0'
          }`}
        >
          <form className="mt-4 w-full max-w-lg p-6 rounded-lg border border-gray-100">
            <h3 className="text-sm sm:text-base">Quisque gravida turpis sit amet nulla posuere lacinia. Cras sed est sit amet ipsum luctus.</h3>
            <div className="flex flex-wrap gap-4 mt-4">
              <input
                className="h-[45px] flex-grow border border-gray-200 px-4 text-sm sm:text-base focus:outline-[#266bf9]"
                placeholder="Discount code"
                type="text"
              />
              <button
                className="bg-[#266bf9] text-white text-sm sm:text-base px-4 h-[45px]"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
