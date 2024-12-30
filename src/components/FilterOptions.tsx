import { useState, useEffect } from 'react'
import { useProductContext } from '@/context/ProductContext'

interface FilterOptionsProps {
  onFilter: (filters: { search: string; category: string }) => void
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ onFilter }) => {
  const { products } = useProductContext()
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('')

  const categories = Array.from(new Set(products.map((product) => product.category)))

  useEffect(() => {
    onFilter({ search, category })
  }, [search, category, onFilter])

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4">Filter Options</h3>
      <div className="mb-4">
        <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
          Search
        </label>
        <input
          type="text"
          id="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          placeholder="Search products..."
        />
      </div>
      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default FilterOptions

