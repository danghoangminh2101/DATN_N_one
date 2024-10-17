const Navbar = () => {
  return (
    <nav className="bg-blue-600 py-3">
      <div className="container mx-auto flex justify-center">
        <ul className="flex space-x-6 text-white uppercase text-sm font-medium">
          <li className="relative group">
            <a href="#" className="hover:underline flex items-center">
              Pages
              <svg className="ml-1 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </a>
            <div className="absolute w-[1000px] left-0 mt-1 p-6 bg-white shadow-lg text-black opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-8 group-hover:translate-y-0 z-10">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <h4 className="font-bold mb-2">Inner Pages</h4>
                  <ul>
                    <li><a href="#" className="block py-1">404 Page</a></li>
                    <li><a href="#" className="block py-1">Order Tracking</a></li>
                    <li><a href="#" className="block py-1">Faq Page</a></li>
                    <li><a href="#" className="block py-1">Coming Soon Page</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Other Shop Pages</h4>
                  <ul>
                    <li><a href="#" className="block py-1">Cart Page</a></li>
                    <li><a href="#" className="block py-1">Checkout Page</a></li>
                    <li><a href="#" className="block py-1">Compare Page</a></li>
                    <li><a href="#" className="block py-1">Wishlist Page</a></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Related Shop Pages</h4>
                  <ul>
                    <li><a href="#" className="block py-1">Account Page</a></li>
                    <li><a href="#" className="block py-1">Login & Register</a></li>
                    <li><a href="#" className="block py-1">Empty Cart Page</a></li>
                    <li><a href="#" className="block py-1">Thank You Page</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Shop</a></li>
          <li><a href="#" className="hover:underline">Blog</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
