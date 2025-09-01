import React from 'react'
import { Users, Calendar, Target, Zap } from 'lucide-react'
import VideoCarousel from './VideoCarousel'

const About = () => {
  const stats = [
    {
      icon: Calendar,
      label: 'Fondée',
      value: '2023, Casablanca',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      label: 'Équipe',
      value: '22 talents',
      description: 'stratèges, créatifs, producteurs, data‑analystes',
      color: 'text-amber-500'
    },
    {
      icon: Target,
      label: 'Projets menés',
      value: '+50 campagnes',
      description: 'multi‑canales',
      color: 'text-yellow-600'
    },
    {
      icon: Zap,
      label: 'Secteurs',
      value: '9 secteurs',
      description: "d'activité",
      color: 'text-amber-600'
    }
  ]

  const images = [
    '/img/_DSF3019.png',
    '/img/_DSF3279.png',
    '/img/_DSF3472.png',
    '/img/_DSF3500.png',
    '/img/_DSF3506.jpg'
  ]

  const videoUrls = [
    'https://www.youtube.com/shorts/3Kog7ozW2ko',
    'https://www.youtube.com/shorts/kwlxi2GqEis',
    'https://www.youtube.com/shorts/OS18CH7wbCI',
    'https://www.youtube.com/shorts/mQNYIamF8cI'
  ]

  return (
    <section id="about" className="section-padding bg-gray-50">
      <div className="container-custom px-4">
        {/* Main Info Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
              Qui sommes‑nous ?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 md:mb-8 leading-relaxed">
              <strong className="text-blue-600">Spark</strong> <strong className="text-yellow-500">Morocco</strong> est l'entité Marketing & Communication 360° de{' '}
              <strong className="text-amber-600">Marnova Holding</strong>, un écosystème marocain dédié à l'innovation, 
              à l'événementiel et au conseil stratégique.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-start space-x-3 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className={`w-3 h-3 rounded-full ${stat.color.replace('text-', 'bg-')} mt-2 flex-shrink-0`}></div>
                  <div>
                    <span className="font-semibold text-gray-900">{stat.label}:</span>
                    <span className="ml-2 text-gray-700">{stat.value}</span>
                    {stat.description && (
                      <p className="text-sm text-gray-500 mt-1">{stat.description}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="bg-gradient-to-br from-yellow-50 to-amber-50 p-8 rounded-2xl border border-yellow-200">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 md:mb-4">Notre spécificité</h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                Synergie interne avec les pôles <strong className="text-yellow-600">tech</strong>,{' '}
                <strong className="text-amber-600">production audiovisuelle</strong> et{' '}
                <strong className="text-yellow-700">événementiel</strong> du Groupe Marnova.
              </p>
            </div>
            <img 
              src="/img/_DSF3572.png"
              alt="Team collaboration"
              className="rounded-2xl mt-6 shadow-xl w-full h-96 object-cover"
            />
          </div>
        </div>

        {/* Image Gallery Section - Shows 3 at once */}
        <div className="mt-16">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 md:mb-6 text-center">Nos moments en image</h3>
          <div className="relative">
            <div className="flex gap-4 overflow-x-auto px-1 pb-2 scroll-smooth scrollbar-hide">
              {images.map((img, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-[200px] md:w-[240px] lg:w-[280px] rounded-2xl overflow-hidden shadow-md"
                >
                  <img
                    src={img}
                    alt={`Spark ${index + 1}`}
                    className="w-full h-72 md:h-80 lg:h-96 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Video Carousel Section */}
        {videoUrls.length > 0 && (
          <div className="mt-20 relative">
            {/* Decorative gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50 rounded-3xl -z-10 transform scale-105 blur-3xl opacity-70"></div>
            
            {/* Section header with enhanced styling */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center mb-4">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-amber-400"></div>
                <span className="mx-4 text-sm font-semibold text-amber-600 uppercase tracking-wider">Découvrez</span>
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-amber-400"></div>
              </div>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-600 to-amber-600 bg-clip-text text-transparent mb-3">
                Notre Univers Créatif
              </h3>
              <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                Plongez dans nos dernières réalisations et découvrez comment nous transformons les idées en expériences visuelles captivantes
              </p>
            </div>
            
            {/* Video carousel with enhanced container */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-amber-100">
              <VideoCarousel videos={videoUrls} vertical={true} />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default About
