// src/app/chitietsanpham/[id]/page.tsx

import React from "react";
import BannerDetailProduct from "../components/BannerDetailProduct/page";
import InfoProduct from "../components/InfoProduct/page";
import RelatedProduct from "../components/RelatedProduct/page";
import { getProductDetailApi } from "../api/productDetail.api";
import sampleProduct from "../sampleProduct"; // Import sample data
import { notFound } from "next/navigation";
const sampleProducts = [
  {
    id: "Ch-256xl",
    name: "Modern Smart Phone",
    price: 20.9,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    tags: "Smart Device, Phone",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 5,
    category: "Smartphones",
    sale: "Sale 10%",
    status: "Sale",
  },
  {
    id: "Ch-357zx",
    name: "Wireless Earbuds",
    price: 15.5,
    description:
      "Experience the freedom of wireless sound with these premium earbuds.",
    tags: "Audio, Earbuds",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 4,
    category: "Accessories",
    sale: "Sale 15%",
    status: "Sale",
  },
  {
    id: "Ch-458yt",
    name: "4K LED TV",
    price: 450.0,
    description: "Enjoy stunning visuals with our 4K Ultra HD LED TV.",
    tags: "Electronics, TV",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 10,
    category: "Home Appliances",
    sale: "Sale 20%",
    status: "Sale",
  },
  {
    id: "Ch-679sd",
    name: "Bluetooth Speaker",
    price: 35.0,
    description:
      "Portable Bluetooth speaker with clear sound and long battery life.",
    tags: "Audio, Speaker",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 8,
    category: "Accessories",
    sale: "Sale 5%",
    status: "Sale",
  },
  {
    id: "Ch-789rw",
    name: "Smart Watch",
    price: 99.0,
    description:
      "Track your health and stay connected with this stylish smartwatch.",
    tags: "Smart Device, Watch",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 7,
    category: "Wearables",
    sale: "Sale 12%",
    status: "Sale",
  },
  {
    id: "Ch-890qw",
    name: "Gaming Laptop",
    price: 1200.0,
    description:
      "High-performance gaming laptop with powerful specs and great graphics.",
    tags: "Electronics, Laptop",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 15,
    category: "Computers",
    sale: "Sale 10%",
    status: "Sale",
  },
  {
    id: "Ch-234as",
    name: "Smart Home Hub",
    price: 150.0,
    description:
      "Control all your smart devices from one hub with easy-to-use interface.",
    tags: "Smart Device, Home",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 6,
    category: "Smart Home",
    sale: "Sale 8%",
    status: "Sale",
  },
  {
    id: "Ch-567kl",
    name: "Portable Power Bank",
    price: 25.0,
    description:
      "Keep your devices charged on the go with this high-capacity power bank.",
    tags: "Accessories, Power Bank",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 4,
    category: "Accessories",
    sale: "Sale 10%",
    status: "Sale",
  },
  {
    id: "Ch-345dp",
    name: "Tablet with Stylus",
    price: 280.0,
    description:
      "A sleek tablet with a responsive stylus for precise drawing and note-taking.",
    tags: "Electronics, Tablet",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 9,
    category: "Tablets",
    sale: "Sale 18%",
    status: "Sale",
  },
  {
    id: "Ch-678gt",
    name: "Noise Cancelling Headphones",
    price: 120.0,
    description:
      "Block out the noise and enjoy your music with these noise-canceling headphones.",
    tags: "Audio, Headphones",
    images: ["https://via.placeholder.com/270x274"],
    reviews: 12,
    category: "Audio",
    sale: "Sale 15%",
    status: "Sale",
  },
];
// Đây là Server Component
const ProductDetail = async ({ params }: { params: { id } }) => {
  // try {
  //   // Gọi API để lấy dữ liệu sản phẩm
  //   const response = await getProductDetailApi(params.id);
  //   const product = response?.data?.data;

  //   if (!product) {
  //     return <div>Không tìm thấy sản phẩm</div>;
  //   }
  const product = sampleProducts.find((product) => product.id === params.id);
  if (!product) {
    return notFound();
  }
  return (
    <div>
      <BannerDetailProduct />
      <div className="container mx-auto max-w-[1170px] px-4 py-10">
        <InfoProduct product={product} />
        <div className="mt-10">
          <h2 className="text-[48px] text-center font-semibold mb-5">
            Related Products
          </h2>
          <p className="text-[18px] text-center text-gray-500 mb-7">
            There are many variations of passages of Lorem Ipsum available
          </p>
          <RelatedProduct />
        </div>
      </div>
    </div>
  );
  // } catch (error) {
  //   return <div>Không thể lấy thông tin sản phẩm</div>;
  // }
};
export default ProductDetail;
