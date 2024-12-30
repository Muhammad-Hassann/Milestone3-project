'use client'

import Link from 'next/link'
import { PiShoppingCart, PiUser,  } from 'react-icons/pi'
import { BiMenu } from 'react-icons/bi'
import { useProductContext } from '@/context/ProductContext'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useState } from 'react'

const Header = () => {
  const { cart, emptyCart } = useProductContext()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0)
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-pink-500">
          Glow Beauty
        </Link>
        <button
          className="md:hidden text-gray-700 hover:text-pink-500"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <BiMenu size={24} />
        </button>
        <nav className={`${isMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 right-0 bg-white md:bg-transparent z-50 md:z-auto`}>
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center p-4 md:p-0">
            <li><Link href="/" className="text-gray-700 hover:text-pink-500">Home</Link></li>
            <li><Link href="/products" className="text-gray-700 hover:text-pink-500">Products</Link></li>
            <li><Link href="/about" className="text-gray-700 hover:text-pink-500">About</Link></li>
            <li><Link href="/contact" className="text-gray-700 hover:text-pink-500">Contact</Link></li>
            <li>
              <Sheet>
                <SheetTrigger asChild>
                  <button className="text-gray-700 hover:text-pink-500 relative">
                    <PiShoppingCart size={24} />
                    {cartItemsCount > 0 && (
                      <span className="absolute -top-2 -right-2 bg-pink-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                        {cartItemsCount}
                      </span>
                    )}
                  </button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Shopping Cart</SheetTitle>
                    <SheetDescription>
                      {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                      ) : (
                        <>
                          {cart.map((item) => (
                            <div key={item.id} className="flex justify-between items-center mb-2">
                              <span>{item.title}</span>
                              <span>
                                {item.quantity} x ${item.price.toFixed(2)}
                              </span>
                            </div>
                          ))}
                          <div className="border-t pt-2 mt-2">
                            <div className="flex justify-between font-semibold">
                              <span>Total:</span>
                              <span>${totalPrice.toFixed(2)}</span>
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
                        </>
                      )}
                    </SheetDescription>
                  </SheetHeader>
                </SheetContent>
              </Sheet>
            </li>
            <li>
              <Link href="/account" className="text-gray-700 hover:text-pink-500">
                <PiUser size={24} />
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header

