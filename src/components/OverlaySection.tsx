import Link from 'next/link'

const OverlaySection = () => {
  return (
    <section className="relative py-24 bg-cover bg-center" style={{ backgroundImage: "url('/hero2.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-4xl font-bold text-white mb-4">Summer Collection</h2>
        <p className="text-xl text-white mb-8">Discover our new range of products perfect for the summer season</p>
        <Link
          href="/products"
          className="bg-white text-pink-500 px-6 py-3 rounded-full text-lg font-semibold hover:bg-pink-100 transition duration-300"
        >
          Shop the Collection
        </Link>
      </div>
    </section>
  )
}

export default OverlaySection

