"use client"

import Image from "next/image"
import { useCart } from "@/context/cart-context"

type ProductCardProps = {
  id: string
  name: string
  description: string
  price: number
  image: string
  size: string
}

export function ProductCard({ id, name, description, price, image, size }: ProductCardProps) {
  const { addItem } = useCart()

  return (
    <div className="group cursor-pointer">
      <div className="aspect-square bg-neutral-100 dark:bg-neutral-900 relative rounded-lg overflow-hidden mb-4">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <h3 className="font-archivo text-lg font-medium mb-1">{name}</h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{description}</p>
      <div className="flex items-center justify-between">
        <p className="font-archivo">${price.toFixed(2)}</p>
        <button
          onClick={() => addItem({ id, name, price, image, size })}
          className="bg-[#D2B48C] hover:bg-[#BC8F8F] text-white font-archivo px-4 py-2 rounded-md text-sm transition-colors"
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
} 