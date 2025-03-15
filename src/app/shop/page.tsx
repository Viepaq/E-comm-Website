"use client"

import { useCart } from "@/context/cart-context"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { products, type Product } from "@/data/products"

export default function ShopPage() {
  const { addItem } = useCart()
  const [animatingItems, setAnimatingItems] = useState<{ [key: string]: boolean }>({})
  const [cartAnimation, setCartAnimation] = useState(false)
  const buttonRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({})
  const cartRef = useRef<HTMLDivElement>(null)

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
        
        // Animate cart icon
        setCartAnimation(true)
        
        // Reset animation states
        setTimeout(() => {
          setCartAnimation(false)
          setAnimatingItems(prev => ({ ...prev, [product.id]: false }))
        }, 500)
      }, 500)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Cart animation reference */}
      <div ref={cartRef} className={`fixed top-0 right-0 z-50 ${cartAnimation ? 'cart-animation' : ''}`} />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="font-archivo text-4xl md:text-5xl font-bold tracking-wider mb-6">SHOP COLLECTION</h1>
          <p className="text-neutral-400 max-w-2xl mx-auto mb-12">
            Discover our premium collection of skincare products, carefully formulated for the modern man's grooming needs.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-neutral-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                <Link href={`/shop/${product.id}`} className="block aspect-square relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform hover:scale-105 duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
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
                        className="absolute top-0 left-0 w-16 h-16 bg-neutral-900 rounded-lg overflow-hidden"
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
                <div className="p-6">
                  <Link href={`/shop/${product.id}`}>
                    <h2 className="font-archivo text-xl font-medium mb-2">{product.name}</h2>
                  </Link>
                  <p className="font-archivo text-lg mb-3">${product.price.toFixed(2)}</p>
                  <p className="text-neutral-400 mb-4 line-clamp-2">{product.description}</p>
                  <div className="flex justify-center">
                    <button
                      ref={(el) => setButtonRef(el, product.id)}
                      onClick={() => handleAddToCart(product)}
                      className="add-to-cart-btn mt-2"
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