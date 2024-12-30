'use client'

import { useProductContext } from '@/context/ProductContext'
import ProductCard from '@/components/ProductCard'
import FilterOptions from '@/components/FilterOptions'
import OverlaySection from './OverlaySection'

export default function ProductsPage() {
  const { products } = useProductContext()
 

  return (
    <>
      <OverlaySection title="Our Products" subtitle="Explore our wide range of beauty products" />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <FilterOptions />
          </div>
          <div className="w-full md:w-3/4 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

