"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div>
      <header className="bg-gray-800">
        <div className="border-b border-gray-600">
          <div className="mx-auto flex flex-col md:flex-row items-start md:items-center justify-between py-2 px-4 max-w-7xl">
            <div className="flex items-start justify-center w-full md:w-auto">
              <p className="text-gray-300 text-sm leading-9 md:leading-10 text-center">
                World Wide Completely Free Returns and Shipping
              </p>
            </div>
            <nav className="flex items-end flex-col w-full md:w-auto">
              <ul className="flex items-end justify-center space-x-4">
                <li>
                  <Link href="/" className="text-gray-300 text-sm hover:text-blue-500">HOME</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-300 text-sm hover:text-blue-500">ABOUT</Link>
                </li>
                <li>
                  <Link href="/pages" className="text-gray-300 text-sm hover:text-blue-500">PAGES</Link>
                </li>
                <li>
                  <Link href="/shops" className="text-gray-300 text-sm hover:text-blue-500">SHOPS</Link>
                </li>
                <li className="relative group">
                  <div className="flex flex-col">
                    <span className="text-gray-300 text-sm hover:text-blue-500 cursor-pointer">BLOG</span>
                    <ul className="absolute left-0 hidden group-hover:block bg-gray-800 border border-gray-600 mt-5 z-20 transition-opacity duration-200 ease-in-out">
                      <li>
                        <Link href="/components/blog/grid" className="block px-4 py-2 text-gray-300 hover:text-blue-500">Blog Grid</Link>
                      </li>
                      <li>
                        <Link href="/components/blog/list" className="block px-4 py-2 text-gray-300 hover:text-blue-500">Blog List</Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 text-sm hover:text-blue-500">CONTACT</Link>
                </li>
              </ul>
            </nav>
            <div className="flex items-center justify-center mt-4 md:mt-0">
              <ul className="flex items-center space-x-4">
                <li className="mr-4 pr-4 border-r border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FontAwesomeIcon icon={faPhone} className="mr-1 w-4 h-4" />
                    +012 3456 789
                  </a>
                </li>
                <li className="mr-4 pr-4 border-r border-gray-600">
                  <a href="#" className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                    <FontAwesomeIcon icon={faPhone} className="mr-1 w-4 h-4" />
                    demo@example.com
                  </a>
                </li>
                <li className="mr-4 pr-4 border-gray-600">
                  <Link href="/account" legacyBehavior>
                    <a className="text-gray-300 text-sm flex items-center hover:text-blue-500">
                      <FontAwesomeIcon icon={faPhone} className="mr-1 w-4 h-4" />
                      Tài khoản
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
