import React from 'react'
import { Palette, Video, BarChart3, Users } from 'lucide-react'

const Difference = () => {
  const differences = [
    {
      icon: Palette,
      title: 'Créativité enracinée',
      description: 'Identité culturelle marocaine + standards internationaux',
      gradient: 'from-blue-50 to-purple-50'
    },
    {
      icon: Video,
      title: 'Production intégrée',
      description: 'Studio interne complet : photo, vidéo, motion, 3D',
      gradient: 'from-green-50 to-blue-50'
    },
    {
      icon: BarChart3,
      title: 'Pilotage data & IA',
      description: 'Optimisation temps réel + analyse comportementale',
      gradient: 'from-orange-50 to-red-50'
    },
    {
      icon: Users,
      title: 'Synergie Groupe Marnova',
      description: 'Écosystème global : tech, événements, innovations',
      gradient: 'from-purple-50 to-pink-50'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Notre différence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto">
          {differences.map((diff, index) => (
            <div 
              key={index}
              className={`p-4 sm:p-6 md:p-8 bg-gradient-to-br ${diff.gradient} rounded-xl md:rounded-2xl group hover:scale-105 transition-all duration-300 animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-white rounded-lg flex items-center justify-center mb-3 md:mb-4 shadow-md">
                <diff.icon className="w-5 h-5 sm:w-5.5 sm:h-5.5 md:w-6 md:h-6 text-gray-700" />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 leading-tight">
                {diff.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {diff.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Difference