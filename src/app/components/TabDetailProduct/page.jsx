"use client";
import React, { useState } from "react";
import "../../globals.css";
import "../../globals.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const comments = [
  {
    id: 1,
    name: "Tulen",
    image: "https://via.placeholder.com/90x90",
    rating: 4, // Số sao
    content:
      "Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.",
  },
];
  // Dữ liệu sản phẩm có sẵn
  const product = {
    id: "Ch-256xl",
    name: "Modern Smart Phone",
    price: 20.9,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: "Smart Device, Phone",
    images: [
      "https://via.placeholder.com/570x675",
      "https://via.placeholder.com/127x127",
      "https://via.placeholder.com/127x127",
      "https://via.placeholder.com/127x127",
    ],
    reviews: 5,
    category: "Smartphones",
  };

const TabDetailProduct = () => {
    const [activeTab, setActiveTab] = useState("information");
  return (
    <div>
      {/* Các Tab */}
      <div className="mt-4 flex flex-col text-[16px]">
        {/* Tabs container */}
        <div className="flex flex-wrap space-x-4 font-bold items-center">
          <button
            className={`px-4 py-2 text-black transition duration-300 ${
              activeTab === "information"
                ? "text-[#266bf9] border-b-2 border-[#266bf9]"
                : "hover:text-[#266bf9]"
            }`}
            onClick={() => setActiveTab("information")}
          >
            Information
          </button>

          <button
            className={`px-4 py-2 text-black transition duration-300 ${
              activeTab === "description"
                ? "text-[#266bf9] border-b-2 border-[#266bf9]"
                : "hover:text-[#266bf9]"
            }`}
            onClick={() => setActiveTab("description")}
          >
            Description
          </button>

          {/* Reviews button */}
          <div className="w-full sm:w-auto mt-2 sm:mt-0">
            <button
              className={`w-full sm:w-auto text-left px-4 py-2 text-black transition duration-300 ${
                activeTab === "reviews"
                  ? "text-[#266bf9] border-b-2 border-[#266bf9]"
                  : "hover:text-[#266bf9]"
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Reviews ({product.reviews})
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr
          className={`border-b-2 mt-2 ${
            ["information", "description", "reviews"].includes(activeTab)
              ? "text-gray-500"
              : "border-gray-300"
          }`}
        />
      </div>

      {/* Nội dung của các Tab */}
      {activeTab === "information" && (
        <div className="mt-7 grid grid-cols-2 gap-2">
          <div>
            <div className="text-text font-medium leading-normal text-[16px] text-gray-500">
              <p>Weight</p>
            </div>
          </div>
          <div>
            <p className="text-text font-normal leading-normal  text-[16px]">
              400 g
            </p>
          </div>
          <div>
            <div className="text-text font-medium leading-normal  text-[16px] text-gray-500">
              <p>Dimensions</p>
            </div>
          </div>
          <div>
            <p className="text-text font-normal leading-normal  text-[16px]">
              10 x 10 x 15 cm
            </p>
          </div>
          <div>
            <div className="text-text font-medium leading-normal  text-[16px] text-gray-500">
              <p>Materials</p>
            </div>
          </div>
          <div>
            <p className="text-text font-normal leading-normal  text-[16px]">
              60% cotton, 40% polyester
            </p>
          </div>
          <div>
            <div className="text-text font-medium leading-normal text-[16px] text-gray-500">
              <p>Other Info</p>
            </div>
          </div>
          <div>
            <p className="text-text font-normal leading-normal  text-[16px]">
              American heirloom jean shorts pug seitan letterpress
            </p>
          </div>
        </div>
      )}

      {activeTab === "description" && (
        <div className="mt-7">
          <p className="text-text font-light leading-normal text-[16px]">
            {product.description}
          </p>
        </div>
      )}
      {activeTab === "reviews" && (
        <div className="mt-7">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="flex flex-col md:flex-row mt-10 mb-10"
            >
              {" "}
              {/* Thay đổi thành flex-col cho kích thước nhỏ */}
              <img
                src={comment.image}
                alt="User"
                className="w-[90px] h-[90px] mb-4 md:mr-4 md:mb-0" // Thêm mb-4 cho kích thước nhỏ
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <h4 className="text-[18px] font-medium">{comment.name}</h4>
                    <div className="text-yellow-500 flex">
                      {"★".repeat(comment.rating)}
                      {"☆".repeat(5 - comment.rating)}
                    </div>
                  </div>
                  <p className="ml-auto cursor-pointer text-[16px]">Reply</p>
                </div>
                <p className="text-text text-[14px] leading-normal mt-2 ">
                  {comment.content}
                </p>

                {/* Bình luận trả lời */}
                <div className="mt-12">
                  <div className="flex flex-col md:flex-row">
                    {" "}
                    {/* Thay đổi thành flex-col cho kích thước nhỏ */}
                    <img
                      src="https://via.placeholder.com/120"
                      alt="User Reply"
                      className="w-[90px] h-[90px] mb-4 md:mr-4 md:mb-0" // Thêm mb-4 cho kích thước nhỏ
                    />
                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <h4 className="text-[18px] font-medium">Ignis</h4>
                          <div className="text-yellow-500 flex">
                            {"★".repeat(5)}
                          </div>
                        </div>
                        <p className="ml-auto cursor-pointer text-[16px]">
                          Reply
                        </p>
                      </div>
                      <p className="text-text text-[14px] leading-normal mt-2">
                        Vestibulum ante ipsum primis aucibus orci luctustrices
                        posuere cubilia Curae Suspendisse viverra ed viverra.
                        Mauris ullarper euismod vehicula. Phasellus quam nisi,
                        congue id nulla.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bảng đánh giá */}
          <div className="mt-10">
            <h3 className="text-[18px] font-medium">Add a Review</h3>
            <div className="mt-2">
              <div className="flex items-center mb-4">
                <span className="text-[18px] font-medium">Your rating:</span>
                <div className="flex ml-2 text-yellow-500">
                  {"★".repeat(5)} {/* Mã đánh giá giả */}
                </div>
              </div>

              {/* Thêm trường nhập cho Name và Email */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block">
                    <input
                      type="text"
                      className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                      placeholder="Name"
                    />
                  </label>
                </div>
                <div>
                  <label className="block">
                    <input
                      type="email"
                      className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                      placeholder="Email"
                    />
                  </label>
                </div>
              </div>

              {/* Trường nhập cho Message */}
              <div className="mt-4">
                <label className="block">
                  <textarea
                    className="mt-1 p-2 border border-gray-300 w-full placeholder:text-[16px]"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </label>
              </div>

              <button className="mt-4 bg-black text-white px-4 py-2 w-[170px] h-[50px] text-[18px] rounded-2xl">
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TabDetailProduct;
