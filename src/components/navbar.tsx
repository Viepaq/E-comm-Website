"use client"

import * as React from "react"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/context/cart-context"

export function Navbar() {
  const { getCartCount } = useCart()

  return (
    <header className="fixed top-0 z-50 w-full bg-white dark:bg-background/95 backdrop-blur-sm border-b border-neutral-100 dark:border-neutral-800">
      <div className="flex h-20 items-center justify-between">
        {/* Brand Name */}
        <Link href="/" className="font-archivo text-2xl font-bold tracking-tighter hover:opacity-80 transition-opacity pl-2">
          BRUTUS
        </Link>

        {/* Navigation */}
        <nav className="flex items-center space-x-12 pr-8">
          <Link href="/" className="font-archivo text-sm tracking-[0.15em] text-neutral-800 dark:text-neutral-200 hover:text-[#C0C2C9] hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9] hover:bg-clip-text hover:text-transparent transition-all">
            HOME
          </Link>
          <Link href="/shop" className="font-archivo text-sm tracking-[0.15em] text-neutral-800 dark:text-neutral-200 hover:text-[#C0C2C9] hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9] hover:bg-clip-text hover:text-transparent transition-all">
            SHOP
          </Link>
          <Link href="/about" className="font-archivo text-sm tracking-[0.15em] text-neutral-800 dark:text-neutral-200 hover:text-[#C0C2C9] hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9] hover:bg-clip-text hover:text-transparent transition-all">
            ABOUT
          </Link>
          
          {/* Cart */}
          <Link 
            href="/checkout" 
            className="relative text-neutral-800 dark:text-neutral-200 hover:text-[#C0C2C9] hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9] hover:bg-clip-text hover:text-transparent transition-all"
          >
            <ShoppingCart className="h-5 w-5 cart-icon" />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-gradient-to-r from-[#E8E9ED] to-[#C0C2C9] text-[10px] font-medium text-neutral-800 flex items-center justify-center">
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