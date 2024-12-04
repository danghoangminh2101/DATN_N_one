// src/app/chitietsanpham/[id]/page.tsx

import React from "react";
import BannerDetailProduct from "../components/BannerDetailProduct/page";
import InfoProduct from "../components/InfoProduct/page";
import RelatedProduct from "../components/RelatedProduct/page";
import { getProductDetailApi } from "../api/productDetail.api";
import sampleProduct from "../sampleProduct"; // Import sample data

// Đây là Server Component
const ProductDetail = async ({ params }: { params: { id } }) => {
  // try {
  //   // Gọi API để lấy dữ liệu sản phẩm
  //   const response = await getProductDetailApi(params.id);
  //   const product = response?.data?.data;

  //   if (!product) {
  //     return <div>Không tìm thấy sản phẩm</div>;
  //   }
  return (
    <div>
      <BannerDetailProduct />
      <div className="container mx-auto max-w-[1170px] px-4 py-10">
        <InfoProduct product={sampleProduct} />
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
