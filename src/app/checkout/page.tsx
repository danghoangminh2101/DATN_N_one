"use client";
import { useRecoilValue } from "recoil";
import { cartState } from "../cart/cartState";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { postOrderApi } from "./api/order.api";
import Link from "next/link";
import ToggleAdress from "./Component/ToggleAdress";
import Toogle from "./Component/Toogle";
import TooglePay from "./Component/TooglePay";
import ToogleSignUp from "./Component/ToggleSignUp";
import { shippingState } from "../cart/shippingState";
import { useFormikContext } from "formik";
import { useRouter } from "next/router";
export default function CheckOut() {
  const cart = useRecoilValue(cartState); // Lấy danh sách sản phẩm từ Recoil state
  const [shippingCost, setShippingCost] = useState(0);
  const shipping = useRecoilValue(shippingState);
  const calculateProductTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const calculateTotal = () => {
    const productTotal = parseFloat(calculateProductTotal());
    return (productTotal + shipping).toFixed(2);
  };
  const validationSchema = Yup.object({
    fullname: Yup.string().required("Name is required"),
    country: Yup.string().required("Country is required"),
    streetAddress: Yup.string().required("Street Address is required"),
    townCity: Yup.string().required("Town/City is required"),
    phone: Yup.string()
      .required("Phone is required")
      .matches(/^\d{10}$/, "Phone number is not valid"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });
  const initialValues = {
    fullname: "",
    country: "",
    streetAddress: "",
    townCity: "",
    phone: "",
    email: "",
    companyName: "", // Không cần validate
    stateCounty: "", // Không cần validate
    postcode: "", // Không cần validate
  };

  const handlePlaceOrder = async (values: any) => {
    Swal.fire({
      icon: "success",
      title: "Đặt hàng thành công!",
      text: "Cảm ơn bạn đã đặt hàng. Chúng tôi sẽ xử lý đơn hàng của bạn sớm nhất.",
      confirmButtonText: "OK",
      confirmButtonColor: "#266bf9",
    }).then(() => {
      window.location.href = "/";
    });
  };

  return (
    <div className="w-[80%] mx-auto py-4">
      <Toogle />
      <div className="flex justify-between">
        <div className="billing-info-wrap w-[55%] text-[.8rem]  text-black p-[2rem]">
          <h3 className="text-[24px] font-semibold text-black mb-6">
            Billing Details
          </h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              console.log("Submitted data:", values);
            }}
          >
            {({ handleSubmit }) => (
              <Form onSubmit={handleSubmit} className="w-[100%]">
                <div className="flex w-[100%] justify-between">
                  <div className="w-[49%]">
                    <label className="block text-black">First Name</label>
                    <Field
                      name="fullname"
                      className="h-[45px] w-[100%] border border-gray-200 text-[.8rem] px-[1rem] focus:outline-[#266bf9]"
                    />
                    <ErrorMessage
                      name="fullname"
                      component="div"
                      className="text-red-500"
                    />
                  </div>
                  <div className="w-[49%]">
                    <label className="block text-black">Last Name</label>
                    <input
                      name="lastName" // Không có trong validationSchema
                      className="h-[45px] w-[100%] border border-gray-200 text-[.8rem] px-[1rem] focus:outline-[#266bf9]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="w-[100%]">
                  <div className="billing-info mb-4">
                    <label className="block text-black">Company Name</label>
                    <input
                      className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="billing-info mb-4">
                  <label className="block text-black">Country</label>
                  <Field
                    as="select"
                    name="country"
                    className="h-[45px] w-[100%] border border-gray-200 text-[.8rem] px-[1rem] focus:outline-none"
                  >
                    <option>Select a country</option>
                    <option>Azerbaijan</option>
                    <option>Bahamas</option>
                    <option>Bahrain</option>
                    <option>Bangladesh</option>
                    <option>Barbados</option>
                  </Field>
                  <ErrorMessage
                    name="country"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="billing-info mb-4">
                  <label className="block text-black">Street Address</label>
                  <Field
                    name="streetAddress"
                    className="h-[45px] w-[100%] border border-gray-200 text-[.8rem] px-[1rem] focus:outline-[#266bf9] mb-2"
                  />
                  <input
                    className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9]"
                    placeholder="Apartment, suite, unit etc."
                    type="text"
                  />

                  <ErrorMessage
                    name="streetAddress"
                    component="div"
                    className="text-red-500"
                  />
                </div>
                <div className="w-[100%]">
                  <div className="billing-info mb-4">
                    <label className="block text-black">Town / City</label>
                    <input
                      className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9]"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex w-[100%] justify-between">
                  <div className="w-[49%]">
                    <div className="billing-info mb-4">
                      <label className="block text-black">State / County</label>
                      <input
                        className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9]"
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="w-[49%]">
                    <div className="billing-info mb-4">
                      <label className="block text-black">Postcode / ZIP</label>
                      <input
                        className="h-[45px] w-[100%] border border-gray-200  text-[.8rem]  px-[1rem] focus:outline-[#266bf9]"
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                {/* Các trường khác */}
                <div className="flex w-[100%] justify-between">
                  <div className="w-[49%]">
                    <div className="billing-info mb-4">
                      <label className="block text-black">Phone</label>
                      <Field
                        className="h-[45px] w-[100%] border border-gray-200 text-[.8rem] px-[1rem] focus:outline-[#266bf9]"
                        type="text"
                        name="phone"
                      />
                      <ErrorMessage
                        name="phone"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                  <div className="w-[49%]">
                    <div className="billing-info mb-4">
                      <label className="block text-black">Email Address</label>
                      <Field
                        className="h-[45px] w-[100%] border border-gray-200 text-[.8rem] px-[1rem] focus:outline-[#266bf9]"
                        type="text"
                        name="email"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-xs"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  Submit
                </button>
              </Form>
            )}
          </Formik>

          <ToogleSignUp />

          <div className="additional-info-wrap">
            <h4 className="font-semibold mb-2">Additional information</h4>
            <div className="additional-info">
              <label className="block text-black mb-4">Order notes</label>
              <textarea
                className="w-[100%] focus:outline-[#266bf9] border border-gray-200  text-[.8rem]  px-[1rem] py-[.5rem] h-[5.5rem]"
                placeholder="Notes about your order, e.g. special notes for delivery. "
                name="message"
                defaultValue={""}
              />
            </div>
          </div>

          <ToggleAdress />
        </div>

        <div className="your-order-area w-[40%] h-[100%] border border-gray-200 bg-[#ebebeb] text-[.8rem]  p-[2rem]">
          <h3 className="text-[24px] font-semibold text-black">Your order</h3>
          <div className="your-order-wrap gray-bg-4">
            <div className="your-order-product-info ">
              <div className="your-order-top">
                <ul className="flex justify-between py-[1.5rem] border border-b-gray-200 border-transparent">
                  <li className="font-semibold">Product</li>
                  <li className="font-semibold">Total</li>
                </ul>
              </div>
              <div className="your-order-middle py-[1.5rem] border border-b-gray-200 border-transparent">
                <ul>
                  {cart.length > 0 ? (
                    cart.map((item) => (
                      <li className="flex justify-between" key={item.id}>
                        <span className="order-middle-left">
                          {item.name} x {item.quantity}
                        </span>
                        <span className="order-price">
                          ${item.price * item.quantity}
                        </span>
                      </li>
                    ))
                  ) : (
                    <li className="text-center">Your cart is empty.</li>
                  )}
                </ul>
              </div>
              <div className="your-order-bottom  py-[1.5rem] border border-b-gray-200 border-transparent">
                <ul className="flex justify-between">
                  <li className="your-order-shipping font-semibold">
                    Shipping
                  </li>
                  <li>
                    {shipping === 0
                      ? "Free shipping"
                      : `$${shipping.toFixed(2)}`}
                  </li>
                </ul>
              </div>
              <div className="your-order-total font-semibold  py-[1.5rem] border border-b-gray-200 border-transparent">
                <ul className="flex justify-between">
                  <li className="order-total">Total</li>
                  <li className="text-[#266bf9]">${calculateTotal()}</li>
                </ul>
              </div>
            </div>
            <div className="payment-method  py-[1.5rem]">
              <TooglePay />
            </div>
          </div>
          <div className="Place-order mt-25">
            <a
              className="block text-center bg-[#266bf9] text-white py-2 text-[14px] font-semibold"
              href="#"
              onClick={handlePlaceOrder}
            >
              PLACE ORDER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
