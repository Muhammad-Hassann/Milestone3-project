"use client";

import { useProductContext } from "@/context/ProductContext";
import ProductCard from "./ProductCard";

const FeaturedProducts = () => {
  const { featuredProducts } = useProductContext();

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Products
        </h2>
        <div className="flex flex-wrap justify-center items-center">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-1/2 md:w-1/3 flex flex-wrap justify-center mb-8"
            >
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
