import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./css/cart.css"
import { faClose } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
    return <div className="w-[80%] mx-auto py-4">
      <h1 className="text-[1.4rem] font-semibold py-3">Your cart items</h1>
    <table className="w-[100%] table-cart">
  <thead className="w-[100%] bg-white text-black h-[3rem] text-center">
    <tr>
      <th>Image</th>
      <th>Product Name</th>
      <th>Until Price</th>
      <th>Qty</th>
      <th>Subtotal</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody className="">
    <tr className="">
      <td className="product-thumbnail w-[150px]">
        <a href="#"><img className="p-[1rem] max-w-[100%] ml-15px" src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/product-image/1.webp" alt /></a>
      </td>
      <td className="product-name"><a href="#">Modern Smart Phone</a></td>
      <td className="product-price-cart"><span className="amount">$60.00</span></td>
      <td className="product-quantity flex justify-center items-center h-[150px]">
      <div className='text-[1rem] border border-white flex items-center w-[5.5rem] justify-between'>
        <div className='border  text-[1rem] px-1 border-r-[white] py-1 cursor-pointer'>
          -
          </div>
        <input type="text" value={1} className="text-center focus:outline-none bg-transparent w-[100%] px-[.8rem] text-[.9rem]" min={1} max={100}/>
        <div className='border text-[1rem] px-1 border-l-[white] py-1 cursor-pointer'>+</div>
      </div>
  
      </td>
      <td className="product-subtotal">$70.00</td>
      <td className="product-remove cursor-pointer ">
     <FontAwesomeIcon icon={faClose} className="w-4 h-4 m-auto"/>
      </td>
    </tr>
 
  </tbody>
</table>
<div className="flex justify-between py-[1rem]">
  <button className="py-[.4rem] px-[1.3rem] bg-white text-black text-[1rem] flex justify-center items-center transition-all hover:bg-[#266bf9] hover:text-white">Continue Shopping</button>
  <div className="flex gap-[1rem]">
    <button className="py-[.4rem] px-[1.3rem] bg-white text-black text-[1rem] flex justify-center items-center transition-all hover:bg-[#266bf9] hover:text-white">Update Shopping Cart</button>
    <button className="py-[.4rem] px-[1.3rem] bg-[#266bf9] text-white text-[1rem] flex justify-center items-center transition-all hover:bg-[#0055ff] hover:text-white">Clear Shopping Cart</button>
  </div>
</div>
<div className="flex justify-between">
<div className="cart-tax w-[30%] bg-white px-[1rem] py-[2rem] text-black">
  <div className="title-wrap">
    <h4 className="font-semibold mb-[1rem] text-[1rem]">Estimate Shipping And Tax</h4>
  </div>
  <div className="tax-wrapper">
    <p className="mb-[.8rem] text-[.9rem] text-gray-400">Enter your destination to get a shipping estimate.</p>
    <div className="tax-select-wrapper">
      <div className="tax-select pb-[.5rem]">
        <label className="block mb-[.5rem]">
          * Country
        </label>
        <select className="w-[100%] border border-black py-[.4rem] px-3">
          <option>Bangladesh</option>
          <option>Albania</option>
          <option>Åland Islands</option>
          <option>Afghanistan</option>
          <option>Belgium</option>
        </select>
      </div>
      <div className="tax-select">
        <label className="block mt-[.5rem] mb-[.5rem]">
          * Region / State
        </label>
        <select className="w-[100%] border border-black py-[.4rem] px-3">
          <option>Bangladesh</option>
          <option>Albania</option>
          <option>Åland Islands</option>
          <option>Afghanistan</option>
          <option>Belgium</option>
        </select>
      </div>
      <div className="tax-select mb-25px">
      <label className="block mt-[.5rem] mb-[.5rem]">
      * Zip/Postal Code
        </label>
        <input type="text" className="w-[100%] border border-black py-[.3rem] px-3"/>
      </div>
      <button className="cart-btn-2 mt-[1rem]" type="submit">Get A Quote</button>
    </div>
  </div>
</div>
<div className="cart-tax w-[30%] h-[100%] bg-white px-[1rem] py-[2rem] text-black">
  <div className="discount-code-wrapper">
    <div className="title-wrap">
    <h4 className="font-semibold mb-[1rem] text-[1rem]">Use Coupon Code
    </h4>
    </div>
    <div className="discount-code">
    <p className="mb-[.8rem] text-[.9rem] text-gray-400">Enter your coupon code if you have one.

</p>
      <form>
      <input type="text" className="w-[100%] border border-black py-[.3rem] px-3" placeholder="name"/>
      <button className="cart-btn-2 mt-[1rem]" type="submit">Apply Coupon</button>
      </form>
    </div>
  </div>
</div>
<div className="cart-tax w-[30%] h-[100%] bg-white px-[1rem] py-[2rem] text-black">
  <div className="title-wrap">
    <h4 className="font-semibold  text-[1rem]">Cart Total</h4>
  </div>
  <h5 className="flex py-[1rem] justify-between">Total products <span className="font-semibold">$260.00</span></h5>
  <div className="total-shipping">
    <h5>Total shipping</h5>
    <ul>
      <li className="flex justify-between"><div>
      <input type="checkbox" /> Standard
        </div> <span className="text-gray-500">$20.00</span></li>
      <li className="flex justify-between">
        <div>
        <input type="checkbox" /> Express</div> <span className="text-gray-500">$30.00</span></li>
    </ul>
  </div>
  <h4 className="grand-totall-title flex justify-between text-[1.1rem] py-[2rem] font-semibold text-[#266bf9]">Grand Total <span>$260.00</span></h4>
  <a href="checkout.html" className="block text-center bg-[#266bf9] text-white py-2 text-[.9rem]">Proceed to Checkout</a>
</div>
</div>
    </div>
    ;
  }
  