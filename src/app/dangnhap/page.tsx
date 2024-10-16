import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full bg-[#1e1d1d] text-white py-8 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Log In</h1>
        <nav className="text-sm sm:text-base">
          <span className="mr-2">Home</span>
          <span className="mx-2">:</span>
          <span className="ml-2">Log In</span>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="max-w-4xl mx-auto bg-[#f6f2ec] rounded-lg overflow-hidden shadow-lg">
            <div className="md:flex">
              {/* Left Side - Image */}
              <div className="md:w-1/2 relative h-64 md:h-auto">
                <Image
                  src="/image1.png"
                  alt="Login background"
                  layout="fill"
                  objectFit="cover"
                />
              </div>

              {/* Right Side - Login Form */}
              <div className="md:w-1/2 p-8">
                <h2 className="text-2xl sm:text-3xl font-bold mb-6">Welcome</h2>
                <p className="text-sm mb-8">Sign in to your Boskery account</p>

                <form>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                      Your Email
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="email"
                      type="email"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                      Password
                    </label>
                    <input
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                      id="password"
                      type="password"
                      placeholder="******************"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                      <FontAwesomeIcon icon={faEye} className="text-gray-700" />
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <input id="remember_me" type="checkbox" className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                      <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                        Remember me
                      </label>
                    </div>
                    <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="button"
                    >
                      Log In
                    </button>
                  </div>
                </form>

                <div className="mt-8 pt-8 border-t border-gray-300 text-center">
                  <p className="text-sm mb-4">{`Don't have an account? `}
                    <a href="#" className="font-bold text-blue-500 hover:text-blue-800">Register</a>
                  </p>
                  <p className="text-sm mb-4">Or sign in with</p>
                  <div className="flex justify-center space-x-4">
                    {['image2.png', 'image3.png', 'image4.png'].map((src, index) => (
                      <div key={index} className="bg-white p-2 rounded-full shadow">
                        <Image
                          src={`/${src}`}
                          alt={`Social login ${index + 1}`}
                          width={24}
                          height={24}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
