import React from 'react'
import { Target, Rocket } from 'lucide-react'

const VisionMission = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
            Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto">
          <div className="group p-4 sm:p-6 md:p-8 bg-gradient-to-br from-yellow-500 to-amber-500 rounded-xl md:rounded-2xl text-white transform hover:scale-105 transition-all duration-300 animate-slide-up">
            <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
              <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Vision</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Faire rayonner les marques marocaines et internationales grâce à des{' '}
              <strong>expériences de communication</strong> à forte valeur émotionnelle et mesurable.
            </p>
          </div>

          <div className="group p-4 sm:p-6 md:p-8 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-xl md:rounded-2xl text-white transform hover:scale-105 transition-all duration-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="flex items-center mb-4 sm:mb-5 md:mb-6">
              <Rocket className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 mr-2 sm:mr-3" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold">Mission</h3>
            </div>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              Combiner <strong>créativité</strong>, <strong>technologie</strong> et{' '}
              <strong>intelligence de marché</strong> pour générer croissance, notoriété et engagement durable.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VisionMission