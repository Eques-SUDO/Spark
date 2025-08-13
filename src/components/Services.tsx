import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { 
  Target, 
  Share2, 
  PenTool, 
  Video, 
  Newspaper, 
  TrendingUp, 
  BarChart3 
} from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Stratégie marketing & communication',
      description: 'Audit, positionnement, feuille de route 360°, planning éditorial',
      color: 'from-yellow-500 to-amber-500',
      bgPattern: 'from-yellow-50 via-amber-50 to-orange-50',
      shadowColor: 'shadow-yellow-200'
    },
    {
      icon: Share2,
      title: 'Gestion des réseaux sociaux',
      description: 'Facebook, Instagram, LinkedIn, TikTok, X – community management & modération',
      color: 'from-amber-500 to-yellow-600',
      bgPattern: 'from-amber-50 via-yellow-50 to-orange-50',
      shadowColor: 'shadow-amber-200'
    },
    {
      icon: PenTool,
      title: 'Création de contenu',
      description: 'Rédaction, design, motion, newsletters',
      color: 'from-yellow-600 to-amber-600',
      bgPattern: 'from-orange-50 via-amber-50 to-yellow-50',
      shadowColor: 'shadow-orange-200'
    },
    {
      icon: Video,
      title: 'Production audiovisuelle',
      description: 'Spots TV & web, interviews, after‑movies, reels',
      color: 'from-amber-600 to-yellow-700',
      bgPattern: 'from-yellow-50 via-orange-50 to-amber-50',
      shadowColor: 'shadow-amber-200'
    },
    {
      icon: Newspaper,
      title: 'Couverture médiatique & RP',
      description: 'Relations presse, influence, live events coverage',
      color: 'from-yellow-500 to-orange-500',
      bgPattern: 'from-amber-50 via-yellow-50 to-orange-50',
      shadowColor: 'shadow-yellow-200'
    },
    {
      icon: TrendingUp,
      title: 'Ads & acquisition',
      description: 'SEA, Social Ads, programmatique, optimisation ROI',
      color: 'from-orange-500 to-amber-500',
      bgPattern: 'from-orange-50 via-amber-50 to-yellow-50',
      shadowColor: 'shadow-orange-200'
    },
    {
      icon: BarChart3,
      title: 'Data & Reporting',
      description: 'Dashboards temps réel, insights & recommandations',
      color: 'from-amber-500 to-yellow-500',
      bgPattern: 'from-yellow-50 via-amber-50 to-orange-50',
      shadowColor: 'shadow-amber-200'
    }
  ]

  return (
    <section id="services" className="section-padding bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-8 md:mb-16 px-4">
          <span className="text-xs sm:text-sm font-semibold text-amber-600 uppercase tracking-wider">Services</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 md:mb-6 mt-2">
            Nos expertises clés
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Des solutions complètes pour propulser votre marque vers de nouveaux sommets
          </p>
        </div>

        <Swiper
          spaceBetween={16}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Navigation, Pagination, Autoplay]}
          breakpoints={{
            320: { 
              slidesPerView: 1,
              spaceBetween: 16
            },
            640: { 
              slidesPerView: 2,
              spaceBetween: 20
            },
            1024: { 
              slidesPerView: 3,
              spaceBetween: 30
            },
          }}
          className="!pb-12 px-4 sm:px-0"
        >
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <SwiperSlide key={index}>
                <div className="h-full">
                  <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                    <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {service.description}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>

        <div className="mt-12 p-6 bg-gradient-to-r from-yellow-50 to-amber-50 rounded-2xl border-l-4 border-yellow-400 animate-fade-in">
          <p className="text-center text-lg font-semibold text-gray-700">
            Une approche <span className="text-yellow-600">360°</span> pour maximiser votre impact
          </p>
        </div>

        <style jsx>{`
          :global(.swiper-button-next),
          :global(.swiper-button-prev) {
            color: #eab308 !important;
            background: white;
            width: 48px !important;
            height: 48px !important;
            border-radius: 50%;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          
          :global(.swiper-button-next:after),
          :global(.swiper-button-prev:after) {
            font-size: 20px !important;
          }
          
          :global(.swiper-pagination-bullet) {
            background: #eab308 !important;
            opacity: 0.3;
          }
          
          :global(.swiper-pagination-bullet-active) {
            opacity: 1;
            width: 24px !important;
            border-radius: 12px !important;
          }
        `}</style>
      </div>
    </section>
  )
}

export default Services