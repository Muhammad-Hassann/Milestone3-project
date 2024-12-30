import Image from 'next/image'
import Link from 'next/link'

const HeroSection = () => {
  return (
    <section className="bg-pink-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0 flex justify-center">
          <Image
            src="/hero3.jpg"
            alt="Cosmetics collection"
            width={400}
            height={400}
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Discover Your Natural Beauty
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-6">
            Explore our collection of premium cosmetics and skincare products designed to enhance your natural glow.
          </p>
          <Link
            href="/products"
            className="inline-block bg-pink-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-600 transition duration-300"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection

