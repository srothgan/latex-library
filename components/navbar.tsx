"use client"

import { useState, useEffect } from 'react'
import Link from "next/link"
import { Menu, Sun, Moon } from "lucide-react"

import { useIsMobile } from "@/hooks/use-mobile"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Components", href: "/components" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  const isMobile = useIsMobile()

  return (
    <nav
      className={`bg-white dark:bg-gray-900 dark:text-white shadow `}
      role="navigation"
      aria-label="Main Navigation"
    >
      {!isMobile && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Company Name */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="text-xl font-bold dark:text-gray-200">
                The Latex Library 
              </Link>
            </div>
            {/* Desktop Navigation */}
            <div className="ml-6 flex space-x-8 items-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
                >
                  {item.name}
                </Link>
              ))}
              <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="ml-4"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            </div>
          </div>
        </div>
      )}
      {/* Mobile Navigation */}
      {isMobile && (
        <div className="px-2 pt-2 pb-3 space-y-1 flex flex-row items-center justify-between">
          <Link href="/" className="text-xl font-bold dark:text-gray-200">
            The Latex Library 
          </Link>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10"
                aria-label="Open main menu"
              >
                <Menu className="h-6 w-6 dark:text-gray-200" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="h-full bg-white dark:bg-gray-900 dark:text-white"
            >
              <div className="mt-3 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 text-base font-medium text-center text-gray-700 hover:text-gray-900 hover:bg-gray-50 dark:text-gray-300 dark:hover:text-gray-100 dark:hover:bg-gray-800"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleDarkMode}
                  className="w-full flex justify-center"
                >
                  {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              </div>
              
            </SheetContent>
          </Sheet>
        </div>
      )}
    </nav>
  )
}
