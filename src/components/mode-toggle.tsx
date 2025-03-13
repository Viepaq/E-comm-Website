"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="relative flex items-center gap-2 p-3 font-semibold rounded-full hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9] hover:shadow-inner focus:bg-gradient-to-r focus:from-[#D1D3D9] focus:to-[#A5A7AD] focus:text-white text-gray-700 transition-all ease-linear group">
          <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-focus:stroke-white" />
          <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-focus:stroke-white" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-white dark:bg-gray-800">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9]">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9]">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-gradient-to-r hover:from-[#E8E9ED] hover:to-[#C0C2C9]">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 