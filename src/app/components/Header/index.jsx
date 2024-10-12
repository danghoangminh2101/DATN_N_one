'use client';  
import { FaPhone, FaEnvelope, FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const cartCount = cartItems.reduce((count, item) => count + Number(item.quantity), 0);
  
  return (
    <div>
      <header className="bg-gray-800 ">
        <div className="border-b border-gray-600">
          <div className="max-w-screen-xl flex flex-col md:flex-row items-start md:items-center justify-between px-4 w-[80%] mx-auto py-4">
            <div className="flex items-start justify-center">
              <p className="text-gray-300 text-sm leading-9 md:leading-10">
                World Wide Completely Free Returns and Shipping
              </p>
            </div> 
            <nav className="flex items-end flex-col ">
              <ul className="flex items-end">
                <li className="mr-4 pr-4 border-r border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FaPhone className="mr-1 w-4 h-4" />
                    +012 3456 789
                  </a>
                </li>
                <li className="mr-4 pr-4 border-r border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FaEnvelope className="mr-1 w-4 h-4" />
                    demo@example.com
                  </a>
                </li>
                <li className="mr-4 pr-4 border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FaUser className="mr-1 w-4 h-4" />
                    Account
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        {/* Main header section */}
        <div className="max-w-screen-xl mx-auto py-4 flex justify-between items-center w-[80%]">
          {/* Logo */}
          <div className="text-4xl font-bold text-blue-500">
          <img src="./images/logo/logo.png" alt="" />
          </div>

          {/* Search bar */}
          <div className="relative flex items-center w-[450px] h-[44px]">
         
  <input type="text" class="w-full pl-10 pr-4 py-2 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" placeholder="Search" />
  <button type="submit" class="absolute inset-y-0 right-0 flex items-center px-4 border-l-2 border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 bg-blue-500">
  <FaSearch className="text-white w-4 h-4 bg-blue-500" />
  </button>

          </div>

          {/* Icons */}
          <div className="flex space-x-4 items-center">
            <FaHeart className="text-gray-300 w-6 h-6 hover:text-blue-500" />
            <div className="relative">
              <Link href="/cart">
                <FaShoppingCart className="text-gray-300 w-6 h-6 hover:text-blue-500" aria-label="Cart" />
                <span className="absolute top-0 right-0 bg-blue-500 text-white text-xs rounded-full px-2">{cartCount}</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="bg-blue-600 text-white w-[80%] mx-auto py-4 h-[50px]">
  <ul className="flex justify-center items-center space-x-8 max-w-screen-xl mx-auto px-4 h-full">
    <li className="hover:underline text-[16px]"><Link href="/">HOME</Link></li>
    <li className="hover:underline text-[16px]"><Link href="/about">ABOUT</Link></li>
    <li className="hover:underline text-[16px]"><Link href="/pages">PAGES</Link></li>
    <li className="hover:underline text-[16px]"><Link href="/shop">SHOP</Link></li>
    <li className="hover:underline text-[16px]"><Link href="/blog">BLOG</Link></li>
    <li className="hover:underline text-[16px]"><Link href="/contact">CONTACT</Link></li>
  </ul>
</nav>

      </header>
    </div>
  );
};

export default Header;
