'use client'

import React, { createContext, useState, useEffect, useContext } from 'react'

interface Product {
  id: number
  title: string
  description: string
  price: number
  thumbnail: string
  images: string[]
  category: string
  rating: number
}

interface CartItem extends Product {
  quantity: number
}

interface ProductContextType {
  products: Product[]
  featuredProducts: Product[]
  newArrivals: Product[]
  cart: CartItem[]
  addToCart: (product: Product, quantity: number) => void
  removeFromCart: (productId: number) => void
  updateCartItemQuantity: (productId: number, quantity: number) => void
  emptyCart: () => void
}

const ProductContext = createContext<ProductContextType | undefined>(undefined)

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([])
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([])
  const [newArrivals, setNewArrivals] = useState<Product[]>([])
  const [cart, setCart] = useState<CartItem[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://dummyjson.com/products?limit=30')
        const data = await response.json()
        const productsWithRatings = data.products.map((product: Product) => ({
          ...product,
          rating: product.rating || Math.random() * 4 + 1, // Use existing rating or generate a random one
        }))
        setProducts(productsWithRatings)
        setFeaturedProducts(productsWithRatings.slice(0, 3))
        setNewArrivals(productsWithRatings.slice(3, 6))
      } catch (error) {
        console.error('Error fetching products:', error)
      }
    }

    fetchProducts()
  }, [])

  const addToCart = (product: Product, quantity: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id)
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        )
      }
      return [...prevCart, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId))
  }

  const updateCartItemQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(0, quantity) } : item
      )
    )
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <ProductContext.Provider
      value={{
        products,
        featuredProducts,
        newArrivals,
        cart,
        addToCart,
        removeFromCart,
        updateCartItemQuantity,
        emptyCart,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProductContext = () => {
  const context = useContext(ProductContext)
  if (context === undefined) {
    throw new Error('useProductContext must be used within a ProductProvider')
  }
  return context
}

