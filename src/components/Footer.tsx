import React from 'react'
import { Sparkles } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8  to-amber-500 rounded-lg flex items-center justify-center">
              <img src="/img/Artboard5.png"/>
            </div>
           <span className="text-yellow-400 font-bold text-xl sm:text-2xl md:text-2xl uppercase">Spark</span>
           <span className="text-yellow-400 font-light text-lg sm:text-xl md:text-xl uppercase ml-2">Morocco</span>
          </div>

          <div className="flex items-center space-x-2 text-gray-400">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm">Powered by Marnova Holding</span>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Ouurtech. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer