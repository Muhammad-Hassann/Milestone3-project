import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-pink-500">
              Glow Beauty
            </Link>
            <p className="mt-2 text-gray-600">Discover your natural beauty</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-600 hover:text-pink-500">Home</Link></li>
              <li><Link href="/products" className="text-gray-600 hover:text-pink-500">Products</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500">About Us</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Customer Service</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-gray-600 hover:text-pink-500">FAQ</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500">Shipping</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500">Returns</Link></li>
              <li><Link href="#" className="text-gray-600 hover:text-pink-500">Privacy Policy</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Newsletter</h3>
            <p className="text-gray-600 mb-2">Stay updated with our latest offers</p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-r-md hover:bg-pink-600 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">&copy; 2023 Glow Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

