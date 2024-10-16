import ToggleAdress from "./Component/ToggleAdress"
import Toogle from "./Component/Toogle"
import TooglePay from "./Component/TooglePay"

export default function CheckOut(){
  return (
      <div className="w-[95%] sm:w-[80%] mx-auto py-4">
          <Toogle />
          <div className="flex flex-col lg:flex-row justify-between gap-4">
              
              {/* Billing Info Section */}
              <div className="billing-info-wrap lg:w-[55%] border border-gray-200 text-[.8rem] text-black p-[1rem] sm:p-[2rem]">
                  <h3 className="text-[1.3rem] font-semibold text-black">Billing Details</h3>
                  <div className="w-full">
                      
                      <div className="flex flex-wrap sm:flex-nowrap w-full justify-between gap-4">
                          <div className="w-full sm:w-[49%]">
                              <div className="billing-info mb-4">
                                  <label className="block text-black">First Name</label>
                                  <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                              </div>
                          </div>
                          <div className="w-full sm:w-[49%]">
                              <div className="billing-info mb-4">
                                  <label className="block text-black">Last Name</label>
                                  <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                              </div>
                          </div>
                      </div>

                      <div className="w-full">
                          <div className="billing-info mb-4">
                              <label className="block text-black">Company Name</label>
                              <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                          </div>
                      </div>

                      <div className="w-full">
                          <div className="billing-select mb-4">
                              <label className="block text-black">Country</label>
                              <select className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-none">
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
                              <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9] mb-[1rem]" placeholder="House number and street name" type="text" />
                              <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" placeholder="Apartment, suite, unit etc." type="text" />
                          </div>
                      </div>

                      <div className="w-full">
                          <div className="billing-info mb-4">
                              <label className="block text-black">Town / City</label>
                              <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                          </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap w-full justify-between gap-4">
                          <div className="w-full sm:w-[49%]">
                              <div className="billing-info mb-4">
                                  <label className="block text-black">State / County</label>
                                  <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                              </div>
                          </div>
                          <div className="w-full sm:w-[49%]">
                              <div className="billing-info mb-4">
                                  <label className="block text-black">Postcode / ZIP</label>
                                  <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                              </div>
                          </div>
                      </div>

                      <div className="flex flex-wrap sm:flex-nowrap w-full justify-between gap-4">
                          <div className="w-full sm:w-[49%]">
                              <div className="billing-info mb-4">
                                  <label className="block text-black">Phone</label>
                                  <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                              </div>
                          </div>
                          <div className="w-full sm:w-[49%]">
                              <div className="billing-info mb-4">
                                  <label className="block text-black">Email Address</label>
                                  <input className="h-[45px] w-full border border-gray-200 text-[.8rem] px-4 focus:outline-[#266bf9]" type="text" />
                              </div>
                          </div>
                      </div>

                      <ToggleAdress />

                      <div className="additional-info-wrap">
                          <h4>Additional information</h4>
                          <div className="additional-info">
                              <label className="block text-black">Order notes</label>
                              <textarea className="w-full focus:outline-[#266bf9] border border-gray-200 text-[.8rem] px-4 py-2 h-[5.5rem]" placeholder="Notes about your order, e.g. special notes for delivery." name="message" defaultValue={""} />
                          </div>
                      </div>
                  </div>
              </div>

              {/* Order Summary Section */}
              <div className="your-order-area lg:w-[40%] h-full border border-gray-200 text-[.8rem] p-[1rem] sm:p-[2rem]">
                  <h3 className="text-[1.3rem] font-semibold text-black">Your order</h3>
                  <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                          <div className="your-order-top">
                              <ul className="flex justify-between py-4 border-b border-gray-200">
                                  <li>Product</li>
                                  <li>Total</li>
                              </ul>
                          </div>
                          <div className="your-order-middle py-4 border-b border-gray-200">
                              <ul>
                                  <li className="flex justify-between">
                                      <span className="order-middle-left">Product Name X 1</span>
                                      <span className="order-price">$100</span>
                                  </li>
                                  <li className="flex justify-between">
                                      <span className="order-middle-left">Product Name X 1</span>
                                      <span className="order-price">$100</span>
                                  </li>
                              </ul>
                          </div>
                          <div className="your-order-bottom py-4 border-b border-gray-200">
                              <ul className="flex justify-between">
                                  <li className="your-order-shipping">Shipping</li>
                                  <li>Free shipping</li>
                              </ul>
                          </div>
                          <div className="your-order-total font-semibold py-4 border-b border-gray-200">
                              <ul className="flex justify-between">
                                  <li className="order-total">Total</li>
                                  <li className="text-[#266bf9]">$100</li>
                              </ul>
                          </div>
                      </div>
                      <div className="payment-method py-4">
                          <TooglePay />
                      </div>
                  </div>
                  <div className="place-order mt-6">
                      <a className="block text-center bg-[#266bf9] text-white py-2 text-[.9rem]" href="#">
                          Place Order
                      </a>
                  </div>
              </div>
          </div>
      </div>
  );
}
