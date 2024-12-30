import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  isNew?: boolean
}

const ProductCard: React.FC<ProductCardProps> = ({ id, title, description, price, thumbnail, isNew }) => {
  return (
    <div className="bg-white w-full max-w-[350px] rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img
          src={thumbnail}
          alt={title}
          width={300}
          height={400}
          className="w-full h-60 object-cover"
        />
        {isNew && (
          <span className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 text-xs font-bold rounded">
            New
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2 line-clamp-2">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-pink-500 font-bold">${price.toFixed(2)}</span>
          <Link
          onClick={() => console.log('clicked')}
            href={`/products/${id}`}
            className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600 transition duration-300"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProductCard

