"use client"

import { Separator } from "@/components/ui/separator"
import { useCart } from "@/context/cart-context"
import { AnimatedCheckoutButton } from "@/components/animated-checkout-button"
import Image from "next/image"
import Link from "next/link"

export default function CheckoutPage() {
  const { items, updateQuantity, removeItem, getCartTotal } = useCart()

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-archivo text-3xl font-light tracking-wider mb-4">Your Cart is Empty</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">Add some products to your cart to continue shopping.</p>
          <Link href="/shop" className="inline-block bg-gradient-to-r from-[#E8E9ED] to-[#C0C2C9] hover:from-[#D1D3D9] hover:to-[#A5A7AD] text-neutral-800 font-archivo px-6 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
            Continue Shopping
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-32 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="font-archivo text-3xl font-light tracking-wider mb-8">Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {items.map((item) => (
              <div key={item.id} className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 relative rounded-md overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-archivo text-lg font-medium mb-1">{item.name}</h3>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400">{item.size}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                        >
                          +
                        </button>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-sm text-red-500 hover:text-red-600"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-archivo text-lg">${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-neutral-900 rounded-lg p-6 shadow-sm sticky top-32">
              <h2 className="font-archivo text-xl font-medium mb-6">Order Summary</h2>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-600 dark:text-neutral-400">Shipping</span>
                  <span>Free</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                <AnimatedCheckoutButton />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 