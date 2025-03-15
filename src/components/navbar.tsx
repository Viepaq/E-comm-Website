"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function Navbar() {
  const { getCartCount } = useCart()

  return (
    <header className="fixed top-0 z-50 w-full bg-transparent">
      <div className="flex h-20 items-center justify-between px-8">
        {/* Brand Name */}
        <Link href="/" className="font-archivo text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity text-white">
          BRUTUS
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-12">
          <Link href="/" className="font-archivo text-sm tracking-[0.15em] text-white hover:text-white/70 transition-all">
            HOME
          </Link>
          <Link href="/shop" className="font-archivo text-sm tracking-[0.15em] text-white hover:text-white/70 transition-all">
            SHOP
          </Link>
          <Link href="/about" className="font-archivo text-sm tracking-[0.15em] text-white hover:text-white/70 transition-all">
            ABOUT
          </Link>
          
          {/* Cart */}
          <Link 
            href="/checkout" 
            className="relative text-white hover:text-white/70 transition-all"
          >
            <ShoppingCart className="h-5 w-5 cart-icon" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-white text-[10px] font-medium text-black flex items-center justify-center">
              {getCartCount()}
            </span>
          </Link>

          {/* Theme Toggle */}
          <ModeToggle />
        </nav>
      </div>
    </header>
  )
} 