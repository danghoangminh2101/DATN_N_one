'use client'
import React, { useState } from 'react'

function ToggleAdress() {
    const [isChecked, setIsChecked] = useState(false); // Trạng thái checkbox (được chọn hay không)

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked); // Toggle trạng thái checkbox
    };
  
  return (
    <div className="py-4">
      {/* Checkbox */}
      <label className="flex gap-2 items-center">
        <input
          type="checkbox"
          className="form-checkbox h-4 w-4 text-blue-600"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span className="text-gray-700 text-sm sm:text-base">Ship to a different address?</span>
      </label>

      {/* Form xổ xuống khi checkbox được chọn */}
      <div
        className={`overflow-hidden transition-[max-height] duration-500 ease-in-out mt-4 ${
          isChecked ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className="w-full">
          <div className="flex flex-wrap sm:flex-nowrap w-full justify-between gap-4">
            <div className="w-full sm:w-[49%]">
              <div className="billing-info mb-4">
                <label className="block text-black">First Name</label>
                <input
                  className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full sm:w-[49%]">
              <div className="billing-info mb-4">
                <label className="block text-black">Last Name</label>
                <input
                  className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="billing-info mb-4">
              <label className="block text-black">Company Name</label>
              <input
                className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                type="text"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="billing-select mb-4">
              <label className="block text-black">Country</label>
              <select className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-none">
                <option>Select a country</option>
                <option>Azerbaijan</option>
                <option>Bahamas</option>
                <option>Bahrain</option>
                <option>Bangladesh</option>
                <option>Barbados</option>
              </select>
            </div>
          </div>

          <div className="w-full">
            <div className="billing-info mb-4">
              <label className="block text-black">Street Address</label>
              <input
                className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9] mb-4"
                placeholder="House number and street name"
                type="text"
              />
              <input
                className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                placeholder="Apartment, suite, unit etc."
                type="text"
              />
            </div>
          </div>

          <div className="w-full">
            <div className="billing-info mb-4">
              <label className="block text-black">Town / City</label>
              <input
                className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap w-full justify-between gap-4">
            <div className="w-full sm:w-[49%]">
              <div className="billing-info mb-4">
                <label className="block text-black">State / County</label>
                <input
                  className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full sm:w-[49%]">
              <div className="billing-info mb-4">
                <label className="block text-black">Postcode / ZIP</label>
                <input
                  className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                  type="text"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap sm:flex-nowrap w-full justify-between gap-4">
            <div className="w-full sm:w-[49%]">
              <div className="billing-info mb-4">
                <label className="block text-black">Phone</label>
                <input
                  className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                  type="text"
                />
              </div>
            </div>
            <div className="w-full sm:w-[49%]">
              <div className="billing-info mb-4">
                <label className="block text-black">Email Address</label>
                <input
                  className="h-[45px] w-full border border-gray-200 text-sm sm:text-base px-4 focus:outline-[#266bf9]"
                  type="text"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ToggleAdress
