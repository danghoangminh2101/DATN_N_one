import React from 'react';
import Link from 'next/link';
import { BsBag } from 'react-icons/bs';

const EmptyCart = () => {
  return (
    <div>
      {/* Header phần */}
      <div className="relative h-[400px] bg-gray-200 flex items-center justify-center">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-[150px] text-gray-300 font-bold opacity-50">1920x406</h1>
        </div>
        <div className="z-10 text-center">
          <h2 className="text-3xl font-bold mb-4">Empty Cart</h2>
          <div className="flex items-center justify-center gap-2">
            <Link href="/" className="text-black hover:text-blue-500">HOME</Link>
            <span className="text-blue-500">/</span>
            <span className="text-blue-500">EMPTY CART</span>
          </div>
        </div>
      </div>

      {/* Cart content */}
      <div className="min-h-[400px] flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-semibold mb-8">Your cart item</h1>
        
        <div className="border-2 border-gray-300 p-4 rounded-lg mb-4">
          <BsBag className="w-8 h-8 text-gray-400" />
        </div>
        
        <p className="text-gray-600 mb-6">There are no more items in your cart</p>
        
        <Link href="/"> 
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-2 rounded-full transition-colors">
            CONTINUE SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
};

export default EmptyCart;