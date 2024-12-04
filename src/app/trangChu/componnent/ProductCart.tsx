"use client";
import React, { useState, useEffect } from "react";
import { FaHeart, FaEye, FaShoppingCart, FaPhoneAlt } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { HiArrowPathRoundedSquare } from "react-icons/hi2";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import ProductItem from "@/app/components/ProductItem/ProductItem";
import { Product } from "../api/product";
import { getProductApi } from "../api/product.api";
import { log } from "console";
import axios from "axios";
import { useRecoilState } from "recoil";
import { productAtom } from "../../../atoms/productAtom";

const ProductCard = () => {
  const [products, setProducts] = useRecoilState(productAtom);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const res = await getProductApi();
        setProducts(res.data || []);
      } catch (err) {
        console.error("Error fetching products:", err);
        setError("Không thể tải sản phẩm. Vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };

    if (products.length === 0) {
      fetchProducts();
    }
  }, [setProducts]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="spinner border-4 border-blue-500 border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return <div className="text-center text-red-600 py-4">{error}</div>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-4">
        <p>Không có sản phẩm nào!</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-[1rem]">
        {products.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductCard;
