"use client"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { products, type Product } from "@/data/products"

export default function ShopPage() {
  const { addItem } = useCart()
  const [animatingItems, setAnimatingItems] = useState<{ [key: string]: boolean }>({})
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})

  const setButtonRef = (el: HTMLButtonElement | null, id: string) => {
    if (buttonRefs.current) {
      buttonRefs.current[id] = el
    }
  }

  const handleAddToCart = async (product: Product) => {
    // Start animation
    setAnimatingItems(prev => ({ ...prev, [product.id]: true }))

    // Get cart icon position
    const cartIcon = document.querySelector('.cart-icon')
    const buttonRect = buttonRefs.current[product.id]?.getBoundingClientRect()
    const cartRect = cartIcon?.getBoundingClientRect()

    if (buttonRect && cartRect) {
      // Add item to cart after animation
      setTimeout(() => {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: product.size
        })
        // Reset animation state
        setAnimatingItems(prev => ({ ...prev, [product.id]: false }))
      }, 500)
    }
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-white dark:bg-background">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-archivo text-4xl font-medium tracking-wider mb-6">Shop Collection</h1>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl">
            Discover our premium collection of skincare products, carefully formulated for the modern man's grooming needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 md:px-8 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-16">
            {products.map((product) => (
              <div key={product.id} className="bg-white dark:bg-background rounded-lg overflow-hidden shadow-sm">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <Link href={`/shop/${product.id}`} className="aspect-square relative cursor-pointer">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={product.id === "1"}
                    />
                    <AnimatePresence>
                      {animatingItems[product.id] && (
                        <motion.div
                          initial={{ scale: 1, x: 0, y: 0, opacity: 1 }}
                          animate={{ 
                            scale: 0.5, 
                            x: "calc(100vw - 100%)", 
                            y: "calc(-100vh + 100px)",
                            opacity: 0 
                          }}
                          exit={{ scale: 0, opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                          className="absolute top-0 left-0 w-16 h-16 bg-neutral-100 dark:bg-neutral-900 rounded-lg overflow-hidden"
                        >
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Link>
                  <div className="p-8 flex flex-col">
                    <Link href={`/shop/${product.id}`} className="flex-1 cursor-pointer">
                      <h2 className="font-archivo text-2xl font-medium mb-4">{product.name}</h2>
                      <p className="font-archivo text-xl mb-4">${product.price.toFixed(2)}</p>
                      <p className="text-neutral-600 dark:text-neutral-400 mb-6 leading-relaxed">{product.description}</p>
                      <ul className="space-y-2 mb-8">
                        {product.details.map((detail, index) => (
                          <li key={index} className="text-sm text-neutral-600 dark:text-neutral-400">
                            • {detail}
                          </li>
                        ))}
                      </ul>
                    </Link>
                    <button
                      ref={(el) => setButtonRef(el, product.id)}
                      onClick={() => handleAddToCart(product)}
                      className="bg-[#F8F3EB] hover:bg-[#E8E3DB] text-white font-archivo px-6 py-3 rounded-md transition-colors w-full md:w-auto relative overflow-hidden"
                      disabled={animatingItems[product.id]}
                    >
                      {animatingItems[product.id] ? 'Adding...' : 'Add to Cart'}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
} 