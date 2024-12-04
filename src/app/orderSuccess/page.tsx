import React from 'react';
import Link from 'next/link';

const OrderConfirmation = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16">
      {/* Check Icon Circle */}
      <div className="w-24 h-24">
        <svg viewBox="0 0 24 24" className="w-full h-full text-green-600">
          <path
            fill="currentColor"
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
          />
        </svg>
      </div>

      {/* Confirmation Message */}
      <p className="text-gray-700 text-xl mb-8 text-center">
        Thank you for ordering in our store. You will receive a confirmation email shortly.
      </p>

      {/* Continue Shopping Button */}
      <Link href="/">
        <button className="px-8 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors mb-16">
          Continue Shopping
        </button>
      </Link>

      {/* Quick Order Section */}
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">
          Call Us for Quick Order
        </h2>
        <a 
          href="tel:01234567890" 
          className="text-2xl text-red-500 hover:text-red-600 transition-colors font-medium"
        >
          01 234 567 890
        </a>
      </div>
    </div>
  );
};

export default OrderConfirmation;