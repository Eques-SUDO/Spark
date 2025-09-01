import React from 'react'
import { TrendingUp, Users, Star, CheckCircle, Target, Zap, Eye, UserPlus, MessageSquare } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      title: 'Taxi Sahbi',
      subtitle: 'Service de Taxi Marocain',
      context: 'Besoin d\'un positionnement unique face aux services de transport internationaux',
      solutions: [
        'Naming & identité visuelle',
        'UX storytelling',
        'Campagne UGC',
        'Partenariats influenceurs tech & lifestyle'
      ],
      metrics: [
        { label: 'Downloads', value: '+42k', icon: TrendingUp, detail: '3 mois' },
        { label: 'CAC', value: '÷2', icon: Target, detail: 'optimisé' },
        { label: 'Rating', value: '4.6/5', icon: Star, detail: 'app stores' }
      ],
      image: '/img/TAXI SAHBI LOGO FR.jpg',
      gradient: 'from-yellow-600 to-amber-600',
      bgGradient: 'from-yellow-50 to-amber-50',
      accentColor: 'text-yellow-700'
    },
    {
      title: 'Moussem 2024',
      subtitle: 'Festival Équestre',
      context: 'Moderniser l\'image du Moussem et attirer un public urbain',
      solutions: [
        'Brand guidelines patrimoniales',
        'Mini‑docs Instagram Reels',
        'Live TikTok multicam',
        'Collaboration presse & OTA'
      ],
      metrics: [
        { label: 'Vues cumulées', value: '18M', icon: Eye, detail: 'reach total' },
        { label: 'Engagement', value: '9.3%', icon: TrendingUp, detail: 'moyen' },
        { label: 'Affluence', value: '+15%', icon: Users, detail: 'visiteurs' }
      ],
      image: '/img/MoussemMoulayAbdellah.jpg',
      gradient: 'from-green-600 to-emerald-600',
      bgGradient: 'from-green-50 to-emerald-50',
      accentColor: 'text-green-700'
    }
  ]

  return (
    <section id="case-studies" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-12 md:mb-20 px-4">
          <span className="inline-block text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider mb-3 md:mb-4">
            Résultats prouvés
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6">
            KPIs
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des campagnes qui transforment les ambitions en succès mesurables
          </p>
        </div>

        <div className="space-y-12 md:space-y-16 lg:space-y-24 px-4">
          {caseStudies.map((study, index) => (
            <div key={index} className="relative">
              {/* Background decoration */}
              <div className={`absolute inset-0 bg-gradient-to-r ${study.bgGradient} rounded-2xl md:rounded-3xl opacity-20 blur-3xl`}></div>
              
              <div className={`relative bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl overflow-hidden ${
                index % 2 === 0 ? '' : 'lg:flex-row-reverse'
              } lg:flex`}>
                
                {/* Content side */}
                <div className="lg:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12">
                  {/* Badge */}
                  <div className="inline-flex items-center mb-6">
                    <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r ${study.gradient} text-white shadow-lg`}>
                      <Zap className="w-4 h-4 mr-2" />
                      Success Story
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">
                    {study.title}
                  </h3>
                  <p className={`text-lg ${study.accentColor} font-medium mb-6`}>
                    {study.subtitle}
                  </p>
                  
                  {/* Context */}
                  <div className="mb-8">
                    <div className="flex items-center mb-3">
                      <Target className="w-5 h-5 text-amber-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">Challenge</h4>
                    </div>
                    <p className="text-gray-600 leading-relaxed">
                      {study.context}
                    </p>
                  </div>
                  
                  {/* Solutions */}
                  <div>
                    <div className="flex items-center mb-4">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                      <h4 className="font-semibold text-gray-900">Solutions Spark</h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {study.solutions.map((solution, idx) => (
                        <div key={idx} className="flex items-start">
                          <div className={`w-2 h-2 bg-gradient-to-r ${study.gradient} rounded-full mr-3 mt-2 flex-shrink-0`}></div>
                          <span className="text-gray-600">{solution}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Metrics side */}
                <div className={`lg:w-1/2 bg-gradient-to-br ${study.bgGradient} p-8 lg:p-12`}>
                  {/* Image */}
                  <div className="mb-8">
                    <div className="bg-white rounded-2xl p-4 shadow-xl">
                      <img 
                        src={study.image}
                        alt={study.title}
                        className="w-full h-48 object-contain rounded-lg"
                      />
                    </div>
                  </div>
                  
                  {/* Metrics */}
                  <div className="bg-white/90 backdrop-blur rounded-2xl p-6 shadow-xl">
                    <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                      <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                      Impact Mesurable
                    </h4>
                    <div className="grid grid-cols-3 gap-4">
                      {study.metrics.map((metric, idx) => {
                        const Icon = metric.icon
                        return (
                          <div key={idx} className="text-center">
                            <div className={`w-12 h-12 mx-auto mb-3 bg-gradient-to-br ${study.gradient} rounded-xl flex items-center justify-center shadow-lg`}>
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-2xl font-bold bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">
                              {metric.value}
                            </div>
                            <div className="text-xs text-gray-600 mt-1">{metric.label}</div>
                            <div className="text-xs text-gray-500">{metric.detail}</div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CaseStudies