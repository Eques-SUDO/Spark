import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 md:h-20 lg:h-24 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src={isScrolled ? "/img/sparkma.PNG" : "/img/sparklogowhite.png"}
              alt="Spark Morocco Logo" 
              className="h-14 sm:h-16 md:h-18 lg:h-24 object-contain cursor-pointer"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-6 py-2 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              Démarrer un projet
            </a>
          </nav>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href="#contact"
              className="bg-gradient-to-r from-yellow-500 to-amber-500 text-white px-3 py-1.5 rounded-full font-medium hover:opacity-90 transition-opacity text-xs whitespace-nowrap"
            >
              Démarrer un projet
            </a>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Header
