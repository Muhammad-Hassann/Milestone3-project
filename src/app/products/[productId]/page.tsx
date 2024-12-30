'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useProductContext } from '@/context/ProductContext'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Star, ShoppingCart } from 'lucide-react'
import { notFound } from 'next/navigation'

export default function ProductPage({ params }: { params: { productId: string } }) {
  const { products, addToCart, cart, emptyCart } = useProductContext()
  const [quantity, setQuantity] = useState(1)

  const product = products.find((p) => p.id === parseInt(params.productId))

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addToCart(product, quantity)
  }

  const similarProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4)

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row mb-12">
        <div className="w-full md:w-1/2 mb-8 md:mb-0">
          <Image
            src={product.images[0]}
            alt={product.title}
            width={600}
            height={600}
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </div>
        <div className="w-full md:w-1/2 md:pl-8">
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl text-pink-500 font-semibold mb-4">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 ${
                  i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                }`}
                fill="currentColor"
              />
            ))}
            <span className="ml-2 text-gray-600">({product.rating.toFixed(1)})</span>
          </div>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <div className="flex items-center mb-6">
            <label htmlFor="quantity" className="mr-4 font-semibold">
              Quantity:
            </label>
            <input
              type="number"
              id="quantity"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
              className="w-16 px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <Sheet>
            <SheetTrigger asChild>
              <Button onClick={handleAddToCart} className="bg-pink-500 hover:bg-pink-600">
                Add to Cart
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Added to Cart:</h3>
                    <p>{product.title}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Price: ${(product.price * quantity).toFixed(2)}</p>
                  </div>
                  <div className="mt-4">
                    <h3 className="font-semibold mb-2">Cart Summary:</h3>
                    {cart.map((item) => (
                      <div key={item.id} className="flex justify-between mb-2">
                        <span>{item.title}</span>
                        <span>${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span>${totalPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full mt-4 bg-pink-500 hover:bg-pink-600">Checkout</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Order Placed</DialogTitle>
                        <DialogDescription>
                          Your order has been successfully placed. Thank you for shopping with us!
                        </DialogDescription>
                      </DialogHeader>
                      <Button onClick={() => {
                        emptyCart()
                        // Close the sheet after emptying the cart
                        document.body.click() // This will close the sheet
                      }} className="mt-4 bg-pink-500 hover:bg-pink-600">
                        Close
                      </Button>
                    </DialogContent>
                  </Dialog>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div>
        <h2 className="text-2xl font-bold mb-4">Similar Products</h2>
        <div className="flex flex-wrap -mx-4">
          {similarProducts.map((product) => (
            <div key={product.id} className="w-full sm:w-1/2 md:w-1/4 px-4 mb-8">
              <Link href={`/products/${product.id}`}>
                <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
                  <Image
                    src={product.thumbnail}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                    <p className="text-pink-500 font-bold mt-auto">${product.price.toFixed(2)}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

