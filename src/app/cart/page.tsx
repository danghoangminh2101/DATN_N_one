'use client'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/cart.css";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, 
  updateCartItemQuantity,clearCart } from '@/redux/slices/cartslice';
import { useMemo } from 'react';

export default function Cart() {

  const cartItems = useSelector((state) => state.cart?.items) || [];
  const dispatch = useDispatch();

  const total = useMemo(
    () => cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems]
  );

  return (
    <div className="w-[80%] mx-auto py-4">
      <h1 className="text-[1.4rem] font-semibold py-3">Your cart items</h1>
      <table className="w-full table-cart">
        <thead className="bg-white text-black text-center">
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
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td className="product-thumbnail w-[150px]">
                <a href="#">
                  <img
                    className="p-[1rem] max-w-full"
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp"
                    alt={item.name}
                  />
                </a>
              </td>
              <td className="product-name">
                <a href="#">{item.name}</a>
              </td>
              <td className="product-price-cart">
                <span className="amount">{item.price.toLocaleString()}</span>
              </td>
              <td className="product-quantity flex justify-center items-center">
                <div className='flex items-center border'>
                  <button
                    className='border text-[1rem] px-1 py-1 cursor-pointer'
                    onClick={() => {
                      if (item.quantity > 1) {
                        dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity - 1 }));
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={item.quantity}
                    className="text-center focus:outline-none bg-transparent w-[50px]"
                    min="1"
                    onChange={(e) => dispatch(updateCartItemQuantity({ _id: item._id, quantity: parseInt(e.target.value) }))} 
                  />
                  <button
                    className='border text-[1rem] px-1 py-1 cursor-pointer'
                    onClick={() => dispatch(updateCartItemQuantity({ _id: item._id, quantity: item.quantity + 1 }))}
                  >
                    +
                  </button>
                </div>
              </td>
              <td className="product-subtotal">{(item.price * item.quantity).toLocaleString()}</td>
              <td className="product-remove cursor-pointer" onClick={() => dispatch(removeFromCart(item._id))}>
                <FontAwesomeIcon icon={faClose} className="w-4 h-4 m-auto" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between py-[1rem]">
        <button className="py-[.4rem] px-[1.3rem] bg-white text-black text-[1rem] flex justify-center items-center transition-all hover:bg-[#266bf9] hover:text-white">
          Continue Shopping
        </button>
        <div className="flex gap-[1rem]">
          <button className="py-[.4rem] px-[1.3rem] bg-white text-black text-[1rem] flex justify-center items-center transition-all hover:bg-[#266bf9] hover:text-white">
            Update Shopping Cart
          </button>
          <button className="py-[.4rem] px-[1.3rem] bg-[#266bf9] text-white text-[1rem] flex justify-center items-center transition-all hover:bg-[#0055ff]" onClick={() => dispatch(clearCart())}>
            Clear Shopping Cart
          </button>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="cart-tax w-[30%] bg-white px-[1rem] py-[2rem] text-black">
          <h4 className="font-semibold mb-[1rem] text-[1rem]">Estimate Shipping And Tax</h4>
          <p className="mb-[.8rem] text-[.9rem] text-gray-400">Enter your destination to get a shipping estimate.</p>
          <div className="tax-select-wrapper">
            <label className="block mb-[.5rem]">* Country</label>
            <select className="w-full border border-black py-[.4rem] px-3">
              <option>Bangladesh</option>
              <option>Albania</option>
              <option>Åland Islands</option>
              <option>Afghanistan</option>
              <option>Belgium</option>
            </select>
            <label className="block mt-[.5rem] mb-[.5rem]">* Region / State</label>
            <select className="w-full border border-black py-[.4rem] px-3">
              <option>Bangladesh</option>
              <option>Albania</option>
              <option>Åland Islands</option>
              <option>Afghanistan</option>
              <option>Belgium</option>
            </select>
            <label className="block mt-[.5rem] mb-[.5rem]">* Zip/Postal Code</label>
            <input type="text" className="w-full border border-black py-[.3rem] px-3" />
            <button className="cart-btn-2 mt-[1rem]" type="submit">Get A Quote</button>
          </div>
        </div>
        <div className="cart-tax w-[30%] bg-white px-[1rem] py-[2rem] text-black">
          <h4 className="font-semibold mb-[1rem] text-[1rem]">Use Coupon Code</h4>
          <p className="mb-[.8rem] text-[.9rem] text-gray-400">Enter your coupon code if you have one.</p>
          <form>
            <input type="text" className="w-full border border-black py-[.3rem] px-3" placeholder="Coupon Code" />
            <button className="cart-btn-2 mt-[1rem]" type="submit">Apply Coupon</button>
          </form>
        </div>
        <div className="cart-tax w-[30%] bg-white px-[1rem] py-[2rem] text-black">
          <h4 className="font-semibold text-[1rem]">Cart Total</h4>
          <h5 className="flex py-[1rem] justify-between">Total products <span className="font-semibold">${total.toLocaleString()}</span></h5>
          <h5>Total shipping</h5>
          <ul>
            <li className="flex justify-between"><div><input type="checkbox" /> Standard</div> <span className="text-gray-500">$20.00</span></li>
            <li className="flex justify-between"><div><input type="checkbox" /> Express</div> <span className="text-gray-500">$30.00</span></li>
          </ul>
          <h4 className="grand-total-title flex justify-between text-[1.1rem] py-[2rem] font-semibold text-[#266bf9]">
            Grand Total <span>{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
          </h4>
          <a href="checkout.html" className="block text-center bg-[#266bf9] text-white py-2 text-[.9rem]">Proceed to Checkout</a>
        </div>
      </div>
    </div>
  );
}
