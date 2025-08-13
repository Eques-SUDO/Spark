import React, { useState, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

interface Client {
  name: string
  description: string
  image: string
  services: string[]
}

interface Sector {
  icon: React.ComponentType<any>
  name: string
  color: string
  bgColor: string
  clients: Client[]
}

interface ClientModalProps {
  sector: Sector
  onClose: () => void
}

const ClientModal: React.FC<ClientModalProps> = ({ sector, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [onClose])

  const nextClient = () => {
    setCurrentIndex((prev) => (prev + 1) % sector.clients.length)
  }

  const prevClient = () => {
    setCurrentIndex((prev) => (prev - 1 + sector.clients.length) % sector.clients.length)
  }

  const currentClient = sector.clients[currentIndex]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fade-in">
        {/* Header */}
        <div className={`bg-gradient-to-r ${sector.color} p-6 text-white relative`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center">
            <div className={`w-12 h-12 ${sector.bgColor} rounded-full flex items-center justify-center mr-4`}>
              <sector.icon className={`w-6 h-6 bg-gradient-to-r ${sector.color} bg-clip-text text-transparent`} />
            </div>
            <div>
              <h2 className="text-2xl font-bold">{sector.name}</h2>
              <p className="text-white/80">Nos clients et réalisations</p>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
          {sector.clients.length > 1 && (
            <>
              <button
                onClick={prevClient}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextClient}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </>
          )}

          {/* Client Content */}
          <div className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img
                  src={currentClient.image}
                  alt={currentClient.name}
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {currentClient.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {currentClient.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Services fournis :</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentClient.services.map((service, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1 bg-gradient-to-r ${sector.color} text-white text-sm rounded-full`}
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          {sector.clients.length > 1 && (
            <div className="flex justify-center pb-6 space-x-2">
              {sector.clients.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    idx === currentIndex 
                      ? `bg-gradient-to-r ${sector.color}` 
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-8 py-4 text-center">
          <p className="text-sm text-gray-500">
            {currentIndex + 1} sur {sector.clients.length} clients
          </p>
        </div>
      </div>
    </div>
  )
}

export default ClientModal