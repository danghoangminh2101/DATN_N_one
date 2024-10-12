export default function CheckOut(){
    return <div className="w-[80%] mx-auto py-4">
        <div className="flex justify-between">
<div className="billing-info-wrap w-[55%] border border-white text-black p-[2rem]">
  <h3 className="text-[1.3rem] font-semibold text-white">Billing Details</h3>
  <div className="w-[100%]">
    <div className="flex w-[100%] justify-between">
     <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">First Name</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Last Name</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>   
    </div>
    
    <div className="w-[100%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Company Name</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[100%]">
      <div className="billing-select mb-4">
        <label className="block text-white">Country</label>
        <select className="h-[45px] w-[100%] px-[1rem] focus:outline-none">
          <option>Select a country</option>
          <option>Azerbaijan</option>
          <option>Bahamas</option>
          <option>Bahrain</option>
          <option>Bangladesh</option>
          <option>Barbados</option>
        </select>
      </div>
    </div>
    <div className="w-[100%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Street Address</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9] mb-[1rem]" placeholder="House number and street name" type="text" />
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]" placeholder="Apartment, suite, unit etc." type="text" />
      </div>
    </div>
    <div className="w-[100%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Town / City</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="flex w-[100%] justify-between">
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">State / County</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Postcode / ZIP</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    </div>
   <div className="flex w-[100%] justify-between">

   <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Phone</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Email Address</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
   </div>
  
  </div>
  <div className="checkout-account mb-30px">
    <input  className=" mr-[.5rem] px-[1rem] focus:outline-[#266bf9]"  type="checkbox" />
    <label className=" text-white">Create an account?</label>
  </div>
  <div className="checkout-account-toggle open-toggle2 mb-30 mt-[1rem]">
    <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9] mb-[1rem]"placeholder="Email address" type="email" />
    <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"placeholder="Password" type="password" />
    <button className="btn-hover checkout-btn text-white bg-[#266bf9] px-[2rem] py-[.5rem] mt-[1rem]" type="submit">register</button>
  </div>
  <div className="additional-info-wrap">
    <h4>Additional information</h4>
    <div className="additional-info">
      <label className="block text-white">Order notes</label>
      <textarea className="w-[100%] focus:outline-[#266bf9]  px-[1rem] py-[.5rem] h-[5.5rem]" placeholder="Notes about your order, e.g. special notes for delivery. " name="message" defaultValue={""} />
    </div>
  </div>
  <div className="checkout-account mt-25">
    <input  className="px-[1rem] focus:outline-[#266bf9] checkout-toggle w-auto h-auto mr-2" type="checkbox" />
    <label className="text-white">Ship to a different address?</label>
  </div>
  <div className="different-address open-toggle mt-30px">
  <div className="w-[100%]">
    <div className="flex w-[100%] justify-between">
     <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">First Name</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Last Name</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>   
    </div>
    
    <div className="w-[100%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Company Name</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[100%]">
      <div className="billing-select mb-4">
        <label className="block text-white">Country</label>
        <select className="h-[45px] w-[100%] px-[1rem] focus:outline-none">
          <option>Select a country</option>
          <option>Azerbaijan</option>
          <option>Bahamas</option>
          <option>Bahrain</option>
          <option>Bangladesh</option>
          <option>Barbados</option>
        </select>
      </div>
    </div>
    <div className="w-[100%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Street Address</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9] mb-[1rem]" placeholder="House number and street name" type="text" />
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]" placeholder="Apartment, suite, unit etc." type="text" />
      </div>
    </div>
    <div className="w-[100%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Town / City</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="flex w-[100%] justify-between">
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">State / County</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Postcode / ZIP</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    </div>
   <div className="flex w-[100%] justify-between">

   <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Phone</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
    <div className="w-[49%]">
      <div className="billing-info mb-4">
        <label className="block text-white">Email Address</label>
        <input  className="h-[45px] w-[100%] px-[1rem] focus:outline-[#266bf9]"type="text" />
      </div>
    </div>
   </div>
  
  </div>
  </div>
</div>
<div className="your-order-area w-[40%] h-[100%] border border-white p-[2rem]">
  <h3  className="text-[1.3rem] font-semibold text-white">Your order</h3>
  <div className="your-order-wrap gray-bg-4">
    <div className="your-order-product-info">
      <div className="your-order-top">
        <ul className="flex justify-between py-[1.5rem] border border-b-white border-transparent">
          <li>Product</li>
          <li>Total</li>
        </ul>
      </div>
      <div className="your-order-middle py-[1.5rem] border border-b-white border-transparent">
        <ul className="">
          <li className="flex justify-between">
            <span className="order-middle-left">Product Name X 1</span> 
            <span className="order-price">$100 </span></li>
          <li className="flex justify-between"><span className="order-middle-left">Product Name X 1</span> <span className="order-price">$100 </span></li>
        </ul>
      </div>
      <div className="your-order-bottom  py-[1.5rem] border border-b-white border-transparent">
        <ul className="flex justify-between">
          <li className="your-order-shipping">Shipping</li>
          <li>Free shipping</li>
        </ul>
      </div>
      <div className="your-order-total font-semibold  py-[1.5rem] border border-b-white border-transparent">
        <ul className="flex justify-between">
          <li className="order-total">Total</li>
          <li className="text-[#266bf9]">$100</li>
        </ul>
      </div>
    </div>
    <div className="payment-method  py-[1.5rem]">
      <div className="payment-accordion element-mrg">
        <div id="faq" className="panel-group">
          <div className="panel panel-default single-my-account m-0">
            <div className="panel-heading my-account-title">
              <h4 className="panel-title"><a data-bs-toggle="collapse" href="#my-account-1" className="collapsed" aria-expanded="true">Direct bank transfer</a>
              </h4>
            </div>
            <div id="my-account-1"  >
              <div className="panel-body px-[1rem] pt-[.5rem]">
                <p  className="text-[.8rem] text-white">Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.</p>
              </div>
            </div>
          </div>
          <div className="panel panel-default single-my-account m-0">
            <div className="panel-heading my-account-title">
              <h4 className="panel-title"><a data-bs-toggle="collapse" href="#my-account-2" aria-expanded="false" className="collapsed">Check payments</a></h4>
            </div>
            <div id="my-account-2" >
            <div className="panel-body px-[1rem] pt-[.5rem]">
            <p  className="text-[.8rem] text-white">Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.</p>
              </div>
            </div>
          </div>
          <div className="panel panel-default single-my-account m-0">
            <div className="panel-heading my-account-title">
              <h4 className="panel-title"><a data-bs-toggle="collapse" href="#my-account-3">Cash on delivery</a></h4>
            </div>
            <div id="my-account-3"  >
            <div className="panel-body px-[1rem] pt-[.5rem]">
            <p className="text-[.8rem] text-white">Please send a check to Store Name, Store Street, Store Town,
                  Store State / County, Store Postcode.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="Place-order mt-25">
    <a className="block text-center bg-[#266bf9] text-white py-2 text-[.9rem]" href="#">Place Order</a>
  </div>
</div>

        </div>
    </div>
}