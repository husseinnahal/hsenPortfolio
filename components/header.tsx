"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = ["Home", "About", "Skills", "Projects"]

  return (
    <header className="fixed top-0 left-0 right-0 z-50  border-b border-slate-800" style={{backgroundColor:'#161a2894'}}>
      <div className="container mx-auto px-5 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold">Hussein Nahal</div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`/#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="/images/husseinNahal.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="hidden md:block bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
              Check my Resume
            </Button>
          </a>
          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4  border-t border-slate-800 p-4" >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
                <a
                  href="/images/husseinNahal.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold w-fit">
                    Check my Resume
                  </Button>
                </a>      
              </div>
          </nav>
        )}
      </div>
    </header>
  )
}
