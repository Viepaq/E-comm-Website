"use client"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import { useParams } from "next/navigation"
import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { products } from "@/data/products"

export default function ProductPage() {
  const { id } = useParams()
  const { addItem } = useCart()
  const [isAdding, setIsAdding] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const product = products.find(p => p.id === id)

  if (!product) {
    return (
      <div className="min-h-screen pt-32 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-archivo text-3xl font-light tracking-wider mb-4">Product Not Found</h1>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/shop" className="inline-block bg-[#C6AC8E] hover:bg-[#B5A082] text-white font-archivo px-6 py-3 rounded-md transition-colors">
            Back to Shop
          </Link>
        </div>
      </div>
    )
  }

  const handleAddToCart = () => {
    setIsAdding(true)
    setTimeout(() => {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: product.size
        })
      }
      setIsAdding(false)
    }, 500)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 px-4 md:px-8 bg-white dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pb-24">
            {/* Product Image */}
            <div className="relative aspect-square rounded-lg overflow-hidden bg-neutral-100 dark:bg-neutral-900 sticky top-32">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              <div>
                <h1 className="font-archivo text-4xl font-medium mb-4">{product.name}</h1>
                <p className="font-archivo text-2xl mb-6">${product.price.toFixed(2)}</p>
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">{product.longDescription}</p>
              </div>

              {/* Quantity Selector */}
              <div className="space-y-4">
                <label className="block text-sm font-medium">Quantity</label>
                <div className="flex items-center gap-4 w-32">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="h-8 w-8 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    -
                  </button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="h-8 w-8 flex items-center justify-center rounded-md border border-neutral-200 dark:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full md:w-auto px-8 py-3 bg-[#F8F3EB] hover:bg-[#E8E3DB] text-white font-archivo rounded-md transition-colors relative overflow-hidden"
              >
                {isAdding ? 'Adding...' : 'Add to Cart'}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Section */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h2 className="font-archivo text-lg font-medium mb-4">Details</h2>
              <ul className="space-y-3">
                {product.details.map((detail, index) => (
                  <li key={index} className="text-sm text-neutral-600 dark:text-neutral-400">
                    • {detail}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-archivo text-lg font-medium mb-4">How to Use</h2>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{product.usage}</p>
            </div>

            <div>
              <h2 className="font-archivo text-lg font-medium mb-4">Key Benefits</h2>
              <ul className="space-y-3">
                {product.longDescription
                  .split('\n')
                  .filter(line => line.trim().startsWith('•'))
                  .map((benefit, index) => (
                    <li key={index} className="text-sm text-neutral-600 dark:text-neutral-400">
                      {benefit.trim()}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Section */}
      <section className="py-24 bg-white dark:bg-background">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <h2 className="font-archivo text-2xl font-medium mb-6 text-center">Ingredients</h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-2xl mx-auto text-center">
            {product.ingredients}
          </p>
        </div>
      </section>

      {/* Back to Shop */}
      <section className="py-24 bg-neutral-50 dark:bg-neutral-900/50 text-center">
        <Link href="/shop" className="inline-block bg-[#F8F3EB] hover:bg-[#E8E3DB] text-white font-archivo px-6 py-3 rounded-md transition-colors">
          Back to Shop
        </Link>
      </section>
    </div>
  )
} 