import React from 'react'
import { FacebookOutlined, TwitterOutlined, InstagramOutlined } from '@ant-design/icons'

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700">
      <div className="container mx-auto px-4 py-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <div>
              <a href="#" className="text-3xl font-bold text-blue-500">H</a>
              <span className="text-gray-900 text-3xl">mart</span>
            </div>
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore
            </p>
            <div className="flex gap-2 mt-4">
              <a href="#" className="bg-gray-600 p-2 rounded-sm hover:bg-blue-500 transition-colors">
                <FacebookOutlined className="text-white text-sm" />
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded-sm hover:bg-blue-500 transition-colors">
                <TwitterOutlined className="text-white text-sm" />
              </a>
              <a href="#" className="bg-gray-600 p-2 rounded-sm hover:bg-blue-500 transition-colors">
                <InstagramOutlined className="text-white text-sm" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Services</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">My Account</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">Shopping Cart</a></li>
              <li><a href="#" className="hover:text-blue-500">Shop</a></li>
              <li><a href="#" className="hover:text-blue-500">Services Login</a></li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h3 className="font-semibold text-lg mb-3">My Account</h3>
            <ul className="space-y-2 text-gray-600">
              <li><a href="#" className="hover:text-blue-500">My Account</a></li>
              <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              <li><a href="#" className="hover:text-blue-500">Shopping Cart</a></li>
              <li><a href="#" className="hover:text-blue-500">Shop</a></li>
              <li><a href="#" className="hover:text-blue-500">Services Login</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-3">Contact Info</h3>
            <ul className="space-y-2 text-gray-600">
              <li>Address: Your Address Goes Here.</li>
              <li>Phone/Fax: 0123456789</li>
              <li>Email: demo@example.com</li>
              <li>demo@example.com</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-blue-50 py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-center md:text-left">
            © 2022 <span className="text-blue-500">Hmart</span> Made With <span className="text-blue-500">♥</span> By Codecarnival.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <img src="path-to/american-express.png" alt="American Express" className="h-6" />
            <img src="path-to/paypal.png" alt="PayPal" className="h-6" />
            <img src="path-to/mastercard.png" alt="Mastercard" className="h-6" />
            <img src="path-to/visa.png" alt="Visa" className="h-6" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer