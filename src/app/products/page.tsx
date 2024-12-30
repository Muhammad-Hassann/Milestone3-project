'use client'

import { useState } from 'react'
import { useProductContext } from '@/context/ProductContext'
import ProductCard from '@/components/ProductCard'
import FilterOptions from '@/components/FilterOptions'
import OverlaySection from './OverlaySection'

export default function ProductsPage() {
  const { products } = useProductContext()
  const [filteredProducts, setFilteredProducts] = useState(products)

  const handleFilter = (filters: { search: string; category: string }) => {
    const filtered = products.filter((product) => {
      const matchesSearch = product.title.toLowerCase().includes(filters.search.toLowerCase())
      const matchesCategory = filters.category === '' || product.category === filters.category
      return matchesSearch && matchesCategory
    })
    setFilteredProducts(filtered)
  }

  return (
    <>
      <OverlaySection title="Our Products" subtitle="Explore our wide range of beauty products" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            {/* <FilterOptions onFilter={handleFilter} /> */}
          </div>
          <div className="w-full md:w-3/4 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

