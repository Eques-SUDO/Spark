import React from 'react'
import { Mail, Phone, MapPin, ArrowRight, Instagram, Facebook, Linkedin } from 'lucide-react'

// Custom TikTok Icon Component
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
  </svg>
)

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-gradient-to-br from-yellow-600 to-amber-700 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-16 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12 md:mb-16 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Let's Spark Your Growth
          </h2>
        </div>

        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-12 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Mail className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Email</h3>
              <a href="mailto:hello@sparkagency.ma" className="text-sm sm:text-base md:text-lg hover:text-yellow-300 transition-colors break-words">
                sparkmorocco@marnovagroup.ma
              </a>
            </div>

            <div className="text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                <Phone className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8" />
              </div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">Téléphone</h3>
              <a href="tel:+212658890048" className="text-sm sm:text-base md:text-lg hover:text-yellow-300 transition-colors">
                +212 682-233612
              </a>
            </div>

          </div>

          <div className="w-full max-w-2xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <div className="rounded-2xl overflow-hidden bg-white/10 backdrop-blur-sm p-1">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1071.9999999999998!2d-7.6337009!3d33.5905346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7d3f9dd71dea3%3A0xf4b70fe97b437795!2sGroupe%20Marnova%20Holding!5e0!3m2!1sen!2sma!4v1707950000000!5m2!1sen!2sma"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full rounded-xl"
              ></iframe>
            </div>
          </div>

          <div className="text-center mb-8 md:mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center justify-center mb-4 md:mb-6">
              <span className="text-base md:text-lg">Suivez‑nous :</span>
            </div>
            <div className="flex items-center justify-center space-x-3 md:space-x-4">
              <a 
                href="https://www.instagram.com/spark_morocco" 
                className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="https://www.facebook.com/SparkMoroccoAgency" 
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/sparkmorocco/posts/?feedView=all" 
                className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.tiktok.com/@sparkmorocco" 
                className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TikTokIcon className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>

          <div className="text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="mailto:hello@sparkagency.ma"
              className="group inline-flex items-center bg-white text-yellow-600 px-4 sm:px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm sm:text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              <span className="hidden sm:inline">Discutons de vos projets et transformons‑les en succès !</span>
              <span className="sm:hidden">Démarrer un projet</span>
              <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact