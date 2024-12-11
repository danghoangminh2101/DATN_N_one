import React from "react";

const Gioithieu = () => {
  return (
    <div>
      {/* Meta tags */}
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <link rel="stylesheet" href="./global.css" />
      <link 
        rel="stylesheet" 
        href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&display=swap" 
      />

      {/* Main Container */}
      <div className="w-full [background:linear-gradient(#fff,_#fff),_#fff] min-h-screen text-center text-[24px] text-[#000] font-[Poppins]">
        
        {/* 1. Banner "About Us" */}
        <div className="w-full h-[406px] bg-[url('/public/background@3x.png')] bg-cover bg-no-repeat bg-[top] flex flex-col items-center justify-center">
          <div className="max-w-[1200px] w-full">
            <div className="text-[60px] leading-[72px] capitalize mb-4">
              About Us
            </div>
            <div className="flex items-center justify-center gap-4 text-[18px]">
              <div className="leading-[18px] uppercase">Home</div>
              <div className="text-[#266bf9] leading-[18px] uppercase">//</div>
              <div className="text-[#266bf9] leading-[18px] uppercase">About Us</div>
            </div>
          </div>
        </div>

        {/* 2. Smart Fashion Section */}
        <div className="w-full bg-[#f4f4f4] py-16">
          <div className="max-w-[890px] mx-auto">
            <div className="text-[48px] text-[#444141] mb-12">
              <div className="leading-[40px] font-light mb-4">Smart Fashion</div>
              <div className="text-[60px] leading-[40px] font-bold">With Smart Devices</div>
            </div>
            <div className="text-[16px] leading-[32px] text-[#3a3a3a]">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
              <p>magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comml</p>
              <p>consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              <p>Excepteur sint occaecat cupidatat non proident sunt in culpa</p>
            </div>
          </div>

          {/* Video Banner */}
          <div className="max-w-[1170px] mx-auto mt-16 relative">
            <img 
              className="rounded-[25px] w-full h-[468px] object-cover"
              alt="" 
              src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/about/promo-video-img.webp"
            />
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* 3. Team Member Section */}
        <div className="max-w-[1200px] mx-auto py-20">
          <div className="mb-16">
            <h2 className="text-[48px] leading-[34px] font-semibold mb-8">Team Member</h2>
            <p className="text-[18px] leading-[30px] text-[#595959]">
              There are many variations of passages of Lorem Ipsum available
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8">
            {[
              "Sara Koivisto",
              "Anaiah Whitten", 
              "Rachel Leonard"
            ].map((name, index) => (
              <div key={index} className="flex flex-col">
                <div className="relative h-[420px] overflow-hidden">
                  <img 
                    className="w-full h-full object-cover"
                    alt=""
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/team/1.webp"
                  />
                  <div className="bg-[#266bf9] w-[200px] h-[43px] absolute -bottom-[45px] left-1/2 transform -translate-x-1/2" />
                </div>
                <div className="bg-white p-4 text-center">
                  <div className="text-[24px] leading-[28.8px] font-medium mb-2">{name}</div>
                  <div className="text-[16px] leading-[16px] uppercase">Team Member</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Features Section */}
        <div className="max-w-[1200px] mx-auto py-20">
          <div className="border-[2px] border-[#e1e1e1] rounded-[20px] p-16">
            <div className="grid grid-cols-3 gap-8">
              {[
                {
                  icon: "1.png",
                  title: "Free Shipping",
                  desc: "Capped at $39 per order"
                },
                {
                  icon: "2.png",
                  title: "Card Payments",
                  desc: "12 Months Installments"
                },
                {
                  icon: "3.png",
                  title: "Easy Returns",
                  desc: "Shop With Confidence"
                }
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-8">
                  <div className="w-[70px] h-[70px] rounded-full bg-[#266bf9] flex items-center justify-center">
                    <img 
                      className="w-[46px] h-[34px] object-cover"
                      alt=""
                      src={`https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/icons/${feature.icon}`}
                    />
                  </div>
                  <div>
                    <div className="text-[24px] leading-[28.8px] font-semibold mb-2">
                      {feature.title}
                    </div>
                    <div className="text-[16px] leading-[32px]">{feature.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 5. Client Feedback Section */}
        <div className="w-full bg-[#f2f8fd] py-20">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[48px] leading-[34px] font-semibold mb-8">Client Feedback</h2>
            <p className="text-[18px] leading-[30px] text-[#595959] mb-16">
              There are many variations of passages of Lorem Ipsum available
            </p>

            <div className="grid grid-cols-2 gap-8">
              {[1, 2].map((_, index) => (
                <div key={index} className="flex flex-col text-left">
                  <i className="text-[20px] leading-[36px] text-[#000] mb-8">
                    <p>Lorem ipsum dolor sit amel adipiscing elit, sed do</p>
                    <p>eiusll tempor incididunt ut laborj et dolore magna</p>
                    <p>sed do eiusll tempor dolore.</p>
                  </i>
                  <div className="flex items-center gap-4">
                    <img 
                      className="w-[70px] h-[70px] object-cover"
                      alt=""
                      src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/testimonial/1.png"
                    />
                    <div>
                      <div className="text-[18px] leading-[18px] font-semibold text-[#266bf9]">
                        Regan Rosen
                      </div>
                      <div className="text-[16px] leading-[16px] text-[#444141]">Client</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 6. Latest Blog Section */}
        <div className="max-w-[1200px] mx-auto py-20">
          <h2 className="text-[48px] leading-[34px] font-semibold mb-8">Latest Blog</h2>
          <p className="text-[18px] leading-[30px] text-[#595959] mb-16">
            There are many variations of passages of Lorem Ipsum available
          </p>

          <div className="grid grid-cols-2 gap-8">
            {[1, 2].map((_, index) => (
              <div key={index} className="flex gap-8 text-left">
                <div className="rounded-[20px] overflow-hidden">
                  <img 
                    className="w-[255.8px] h-[348.6px] object-cover"
                    alt=""
                    src="https://template-intern.l5elb4sxvvqkvl.flashvps.xyz/Tech/hmart-electronics-ecommerce-html-template-2023-11-27-05-11-08-utc/hmart/assets/images/blog-image/1.webp"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center gap-4 text-[16px] mb-4">
                    <div className="font-medium">27,Jun 2030</div>
                    <div className="flex items-center gap-2">
                      <img className="w-3 h-4" alt="" src="/public/icon2.svg" />
                      <span className="font-medium">Oaklee Odom</span>
                    </div>
                  </div>
                  <h3 className="text-[24px] leading-[35px] font-semibold text-[#2b2b2b] mb-4">
                    Lorem ipsum dolor sit amet conse adip
                  </h3>
                  <p className="text-[16px] leading-[32px] text-[#3a3a3a] mb-8">
                    Lorem ipsum dolor sit amet consl adipisi elit, sed do eiusmod templ incididunt ut labore
                  </p>
                  <button className="w-[180px] h-[54px] rounded-[18px] bg-[#4e4e4e] text-white text-[18px] font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gioithieu;