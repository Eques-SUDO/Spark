import React from 'react'
import { Bot, Glasses, GraduationCap, Award } from 'lucide-react'

const Innovations = () => {
  const innovations = [
    {
      icon: Bot,
      title: 'Labs IA-Marketing',
      items: [
        'Chatbots multilingues GPT-4o',
        'Assistants conversationnels',
        'Automatisation interaction client'
      ]
    },
    {
      icon: Glasses,
      title: 'AR/VR Brand Experiences',
      items: [
        'Showrooms en réalité augmentée',
        'Visites guidées 360°',
        'Filtres personnalisés réseaux sociaux'
      ]
    },
    {
      icon: GraduationCap,
      title: 'Formations & coaching C-level',
      items: [
        'Bootcamps branding  intensifs',
        'Media training dirigeants',
        'Architecture digitale de marque'
      ]
    },
    {
      icon: Award,
      title: 'Sponsoring & licensing culturel',
      items: [
        'Monétisation événements culturels',
        'Placements produit intelligents',
        'Activations co-brandées à impact social'
      ]
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom px-4">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            Innovations & services additionnels 2025
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 mb-8 md:mb-12">
          {innovations.map((innovation, index) => (
            <div 
              key={index}
              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-3 md:mb-4">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mr-2 sm:mr-3">
                  <innovation.icon className="w-4 h-4 sm:w-4.5 sm:h-4.5 md:w-5 md:h-5 text-white" />
                </div>
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 leading-tight">
                  {innovation.title}
                </h3>
              </div>
              <ul className="space-y-1.5 md:space-y-2">
                {innovation.items.map((item, idx) => (
                  <li key={idx} className="text-sm sm:text-base text-gray-600 flex items-start leading-relaxed">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-500 rounded-full mr-2 sm:mr-3 mt-1.5 sm:mt-2 flex-shrink-0"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="p-4 sm:p-5 md:p-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl md:rounded-2xl text-center animate-fade-in">
          <p className="text-sm sm:text-base md:text-lg font-semibold">
            Anticipons ensemble les mutations du marché de demain
          </p>
        </div>
      </div>
    </section>
  )
}

export default Innovations