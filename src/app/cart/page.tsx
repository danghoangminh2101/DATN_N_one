import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import "./css/cart.css";

export default function Cart() {
    const [quantity, setQuantity] = useState(1);

    const increment = () => setQuantity(prev => prev + 1);
    const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    return (
        <div className="w-full max-w-[1200px] mx-auto px-4 py-4">
            <h1 className="text-[1.4rem] font-semibold py-3">Your cart items</h1>
            
            {/* Desktop Table */}
            <div className="hidden md:block">
                <table className="w-full table-cart">
                    <thead className="bg-[#266bf9] text-white h-12 text-center">
                        <tr>
                            <th>Image</th>
                            <th>Product Name</th>
                            <th>Unit Price</th>
                            <th>Qty</th>
                            <th>Subtotal</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="product-thumbnail w-[100px] lg:w-[150px]">
                                <a href="#"><img className="p-2 max-w-full" src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp" alt="Product" /></a>
                            </td>
                            <td className="product-name"><a href="#">Modern Smart Phone</a></td>
                            <td className="product-price-cart"><span className="amount">$60.00</span></td>
                            <td className="product-quantity">
                                <div className='text-[1rem] border border-black flex items-center w-[5.5rem] mx-auto'>
                                    <button onClick={decrement} className='px-2 py-1 border-r border-black'>-</button>
                                    <input type="text" value={quantity} readOnly className="text-center focus:outline-none bg-transparent w-full px-2 text-[.9rem]" />
                                    <button onClick={increment} className='px-2 py-1 border-l border-black'>+</button>
                                </div>
                            </td>
                            <td className="product-subtotal text-red-500">$70.00</td>
                            <td className="product-remove cursor-pointer">
                                <FontAwesomeIcon icon={faClose} className="w-4 h-4 m-auto"/>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Mobile Card View */}
            <div className="md:hidden space-y-4">
                <div className="border border-[#266bf9] p-4 space-y-2">
                    <div className="flex items-center justify-between">
                        <img className="w-20 h-20 object-cover" src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp" alt="Product" />
                        <FontAwesomeIcon icon={faClose} className="w-4 h-4 cursor-pointer"/>
                    </div>
                    <h3 className="font-semibold">Modern Smart Phone</h3>
                    <p>Price: $60.00</p>
                    <div className='flex items-center justify-between'>
                        <div className='text-[1rem] border border-black flex items-center w-[5.5rem]'>
                            <button onClick={decrement} className='px-2 py-1 border-r border-black'>-</button>
                            <input type="text" value={quantity} readOnly className="text-center focus:outline-none bg-transparent w-full px-2 text-[.9rem]" />
                            <button onClick={increment} className='px-2 py-1 border-l border-black'>+</button>
                        </div>
                        <p className="text-red-500 font-semibold">Subtotal: $70.00</p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between py-4 space-y-4 sm:space-y-0">
                <button className="w-full sm:w-auto py-2 px-4 bg-white border border-[#266bf9] text-[#266bf9] text-sm transition-all hover:bg-[#266bf9] hover:text-white">Continue Shopping</button>
                <div className="flex flex-col sm:flex-row gap-4">
                    <button className="w-full sm:w-auto py-2 px-4 border border-[#266bf9] text-[#266bf9] text-sm transition-all hover:bg-[#266bf9] hover:text-white">Update Shopping Cart</button>
                    <button className="w-full sm:w-auto py-2 px-4 bg-[#266bf9] text-white text-sm transition-all hover:bg-[#0055ff]">Clear Shopping Cart</button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between space-y-4 lg:space-y-0 lg:space-x-4">
                <div className="w-full lg:w-1/3 border border-[#266bf9] shadow-sm bg-white p-4">
                    <h4 className="font-semibold mb-4 text-base">Estimate Shipping And Tax</h4>
                    <p className="mb-3 text-sm text-gray-400">Enter your destination to get a shipping estimate.</p>
                    <div className="space-y-3">
                        <div>
                            <label className="block mb-1 text-sm">* Country</label>
                            <select className="w-full border border-black py-2 px-3 text-sm">
                                <option>Bangladesh</option>
                                <option>Albania</option>
                                <option>Åland Islands</option>
                                <option>Afghanistan</option>
                                <option>Belgium</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">* Region / State</label>
                            <select className="w-full border border-black py-2 px-3 text-sm">
                                <option>Bangladesh</option>
                                <option>Albania</option>
                                <option>Åland Islands</option>
                                <option>Afghanistan</option>
                                <option>Belgium</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-sm">* Zip/Postal Code</label>
                            <input type="text" className="w-full border border-black py-2 px-3 text-sm"/>
                        </div>
                        <button className="cart-btn-2 w-full text-sm" type="submit">Get A Quote</button>
                    </div>
                </div>

                <div className="w-full lg:w-1/3 border border-[#266bf9] shadow-sm bg-white p-4">
                    <h4 className="font-semibold mb-4 text-base">Use Coupon Code</h4>
                    <p className="mb-3 text-sm text-gray-400">Enter your coupon code if you have one.</p>
                    <form className="space-y-3">
                        <input type="text" className="w-full border border-black py-2 px-3 text-sm" placeholder="Coupon code"/>
                        <button className="cart-btn-2 w-full text-sm" type="submit">Apply Coupon</button>
                    </form>
                </div>

                <div className="w-full lg:w-1/3 border border-[#266bf9] shadow-sm bg-white p-4">
                    <h4 className="font-semibold text-base mb-4">Cart Total</h4>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span>Total products</span>
                            <span className="font-semibold">$260.00</span>
                        </div>
                        <div>
                            <h5 className="mb-2">Total shipping</h5>
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <label><input type="checkbox" className="mr-2" />Standard</label>
                                    <span className="text-gray-500">$20.00</span>
                                </div>
                                <div className="flex justify-between">
                                    <label><input type="checkbox" className="mr-2" />Express</label>
                                    <span className="text-gray-500">$30.00</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between text-lg py-4 font-semibold text-[#266bf9]">
                            <span>Grand Total</span>
                            <span>$260.00</span>
                        </div>
                        <a href="checkout.html" className="block text-center bg-[#266bf9] text-white py-2 text-sm">Proceed to Checkout</a>
                    </div>
                </div>
            </div>
        </div>
    );
}