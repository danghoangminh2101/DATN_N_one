'use client'
import React, { useState } from "react";
import "../../globals.css";
import Slider from "react-slick";
import { CiHeart } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import Swal from "sweetalert2";
import { IoEyeOutline } from "react-icons/io5";
// Import Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRecoilState } from "recoil";
import { addCart } from "../../cart/cartState";
import { cartState } from "../../cart/cartState";
// Custom next arrow component
// const SampleNextArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute mr-8 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer`}
//       onClick={onClick}
//     >
//       <button className="bg-white w-12 h-12 text-black p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"></button>
//     </div>
//   );
// };

// const SamplePrevArrow = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div
//       className={`${className} absolute transform -translate-y-1/2 z-10 cursor-pointer`}
//       onClick={onClick}
//     >
//       <button className="bg-white w-12 h-12 text-black p-2 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"></button>
//     </div>
//   );
// };

export default function ProductDetail() {
  const handleAddToWishlist = () => {
    Swal.fire({
      title: "Added to Wishlist successfully!",
      text: "",
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
      <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        // Thêm sự kiện cho nút đóng
        const closeButton = document.querySelector(".swal2-close");
        closeButton.addEventListener("click", () => {
          Swal.close();
        });
      },
    });
  };
  const handleAddToCompare = () => {
    Swal.fire({
      title: "Added to Compare successfully!",
      text: "", // Có thể thêm mô tả nếu cần
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
               <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        const closeButton = document.querySelector(".swal2-close");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            Swal.close();
          });
        }
      },
    });
  };
  const handleAddToCart = () => {
    Swal.fire({
      title: "Added to Cart successfully!",
      text: "", // Có thể thêm mô tả nếu cần
      showConfirmButton: false,
      backdrop: "rgba(0,0,0,0.8)", // Nền tối phía sau
      html: `
        <div style="position: relative; text-align: center;">
               <img src="${product.images[0]}" alt="${product.name}" style="width: 150px; height: auto; display: block; margin: 0 auto;" />
          <h2 style="font-size:16px">${product.name}</h2>
        </div>
      `,
      onOpen: () => {
        const closeButton = document.querySelector(".swal2-close");
        if (closeButton) {
          closeButton.addEventListener("click", () => {
            Swal.close();
          });
        }
      },
    });
  (addToCart({ item: product, quantity }));
  };

 

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
  const products = [
    {
      id: 1,
      image: "https://via.placeholder.com/257x261",
      name: "Modern Smart Phone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "New",
      category: "Accessories",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/257x261",
      name: "Bluetooth Headphone",
      price: "$38.50",
      sale: "Sale 10%",
      status: "Sale",
      category: "Accessories",
    },
    {
      id: 3,
      image: "https://via.placeholder.com/257x261",
      name: "Smart Music Box",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
    {
      id: 4,
      image: "https://via.placeholder.com/257x261",
      name: "Air Pods 256K Black",
      price: "$38.50",
      sale: "Sale",
      status: "New",
      category: "Accessories",
    },
  ];
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
  const [activeTab, setActiveTab] = useState("information");

 
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const [cart, setCart] = useRecoilState(cartState); 
  const [quantity, setQuantity] = useState(1); 

  // Hàm tăng số lượng
  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  // Hàm giảm số lượng (không cho phép giảm dưới 1)
  const decrement = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = () => {
    const newCart = addCart(cart, { ...product, quantity });
    setCart(newCart); // Cập nhật giỏ hàng trong Recoil
  };
  
  // const [cart, setCart] = useRecoilState(cartState);

  // const addToCart = () => {
  //   const newCart = addCart(cart, product);
  //   setCart(newCart);
  // };
  return (
    <div>
      <div className="breadcrumb-area relative h-[406px] md:h-[300px] sm:h-[260px]">
        <img
          src={product.images[0]}
          alt="Single Product"
          className="w-full h-full object-cover rounded-[10px]"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <h1 className="text-3xl font-bold text-white">Single Product</h1>
          <p className="text-lg text-white">Home / Product</p>
        </div>
      </div>

      <div className="container mx-auto max-w-[1170px] px-4 py-10">
        <div className="flex flex-wrap mt-4">
          <div className="w-full md:w-1/2 p-4">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-auto rounded-[10px]"
            />
            <div className="flex justify-center space-x-2 mt-4">
              {product.images.slice(1).map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-1/4 h-auto cursor-pointer rounded-[10px]"
                />
              ))}
            </div>
          </div>

          {/* Chi tiết sản phẩm */}
          <div className="w-full md:w-1/2 p-4 mb-4">
            <h1 className="text-[36px] text-black capitalize leading-none font-normal mb-5">
              {product.name}
            </h1>
            <p className="text-[36px] text-black leading-[30px] font-semibold">
              ${product.price.toFixed(2)}
            </p>
            <div className="flex items-center mt-2 mb-4">
              <span className="text-yellow-500">{"★".repeat(4)}☆</span>
              <span className="ml-2 text-gray-500 text-[18px]">
                ({product.reviews} Customer Reviews)
              </span>
            </div>
            <hr />
            <p className="text-[#181818] text-[16px] leading-[30px] mb-[20px] text-justify mt-4">
              {product.description}
            </p>

            <div className="mt-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">SKU:</span>
              <span> {product.id}</span>
            </div>
            <div className="mt-2 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Categories:</span>
              <span> {product.category}</span>
            </div>
            <div className="mt-2 mb-4 text-[16px]">
              <span className="font-semibold text-[#266bf9]">Tags:</span>
              <span> {product.tags}</span>
            </div>

            {/* review, feedback */}
            <div className="flex items-center">
              <div className="flex items-center w-[90px] rounded-sm h-[40px] bg-[#454545] mr-1">
                <button
                  onClick={decrement}
                  className="px-3 py-1 text-[14px] rounded focus:outline-none text-white pr-4"
                >
                  -
                </button>
                <span className="text-lg text-[14px] text-white">
                  {quantity}
                </span>
                <button
                  onClick={increment}
                  className="px-3 py-1 text-[14px] rounded focus:outline-none text-white"
                >
                  +
                </button>
              </div>
              <button
                className="bg-blue-500 hover:bg-black w-[189px] h-[40px] text-white text-[16px] font-semibold rounded custom-small-text "
                onClick={() => addToCart(product)}
              >
                Add to cart
              </button>

              <div className="flex items-center gap-2 ml-1 text-text font-normal">
                <button
                  className="bg-gray-300 rounded-sm  h-[40px] w-[40px]  flex items-center justify-center"
                  style={{ backgroundColor: "#454545" }}
                >
                  <CiHeart className="w-6 h-6 text-white" />
                </button>
                <button
                  className="bg-gray-300 rounded-sm  h-[40px] w-[40px] flex items-center justify-center"
                  style={{ backgroundColor: "#454545" }}
                >
                  <HiArrowPathRoundedSquare className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

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
                          <h4 className="text-[18px] font-medium">
                            {comment.name}
                          </h4>
                          <div className="text-yellow-500 flex">
                            {"★".repeat(comment.rating)}
                            {"☆".repeat(5 - comment.rating)}
                          </div>
                        </div>
                        <p className="ml-auto cursor-pointer text-[16px]">
                          Reply
                        </p>
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
                                <h4 className="text-[18px] font-medium">
                                  Ignis
                                </h4>
                                <div className="text-yellow-500 flex">
                                  {"★".repeat(5)}
                                </div>
                              </div>
                              <p className="ml-auto cursor-pointer text-[16px]">
                                Reply
                              </p>
                            </div>
                            <p className="text-text text-[14px] leading-normal mt-2">
                              Vestibulum ante ipsum primis aucibus orci
                              luctustrices posuere cubilia Curae Suspendisse
                              viverra ed viverra. Mauris ullarper euismod
                              vehicula. Phasellus quam nisi, congue id nulla.
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
                      <span className="text-[18px] font-medium">
                        Your rating:
                      </span>
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
        </div>

        {/* Sản phẩm liên quan */}
        <div className="mt-10 ">
          <h2 className="text-[48px] text-center font-semibold mb-5 ">
            Related Products
          </h2>
          <p className="text-[18px] text-center text-gray-500 mb-7">
            There are many variations of passages of Lorem Ipsum available
          </p>

          <Slider {...settings} className="ml-4">

            {products.map((product) => (
              <div
              className="border p-1 relative group transition-all duration-500 w-[270px] h-[382px] hover:h-[450px]"
              key={product.id}
            >
            
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-auto mb-2"
                />
                {/* Tags */}
                <div className="absolute top-2 left-2 flex space-x-2">
                  <span className="bg-blue-500 text-white text-xs px-2 py-1 rounded">
                    Sale 10%
                  </span>
                  <span className="bg-black text-white text-xs px-2 py-1 rounded">
                    New
                  </span>
                </div>
                <h5 className="text-[14px] text-gray-500 font-thin text-center">
                  Accessories
                </h5>
                <h3 className="text-[16px] font-normal text-center">
                  {product.name}
                </h3>
                <p className="text-gray-700 text-center text-[18px]">
                  <del className="font-light">{product.price}</del> -{" "}
                  {product.price}
                </p>

                {/* Hover Effect for Buttons */}
                <div className="flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  <button
                    className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1"
                    onClick={handleAddToCart}
                  >
                    <MdOutlineShoppingBag className="w-6 h-6" />
                  </button>
                  <button
                    className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1"
                    onClick={handleAddToWishlist}
                  >
                    <CiHeart className="w-6 h-6" />
                  </button>
                  <button className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1">
                    <IoEyeOutline className="w-6 h-6" />
                  </button>
                  <button
                    className="text-white bg-[#454545] hover:bg-blue-500 rounded-sm p-2 mx-1"
                    onClick={handleAddToCompare}
                  >
                    <HiArrowPathRoundedSquare className="w-6 h-6" />
                  </button>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
