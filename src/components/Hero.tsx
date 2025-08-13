import React from 'react'
import { ArrowRight, Sparkles, Users, Info, Briefcase, FolderOpen, Phone, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/20">
        <img 
          src="img/spark-ba.jpg"
          alt="Creative workspace"
          className="w-full h-full object-cover opacity-30"
        />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-yellow-500/10 rounded-full animate-float"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-amber-500/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-yellow-400/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-amber-400/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-1/4 left-1/4 w-14 h-14 bg-yellow-300/10 rounded-full animate-float" style={{ animationDelay: '3s' }}></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center mb-6">
            <Sparkles className="w-6 h-6 text-yellow-400 mr-3" />
            <span className="text-yellow-400 font-medium text-lg">Powered by Marnova</span>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Votre Agence de Communication Créative au Maroc
          </p>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            <span className="text-yellow-400">Spark</span> Morocco
          </h1>
          
          <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
            Nous Combinons Créativité, Technologie et Intelligence de Marché pour faire Rayonner votre Marque
          </p>

          {/* Navigation Sections */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            <a 
              href="#about"
              className="group text-center animate-slide-up"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <Info className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                À Propos
              </span>
            </a>

            <a 
              href="#services"
              className="group text-center animate-slide-up"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Services
              </span>
            </a>

            <Link 
              to="/clients"
              className="group text-center animate-slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <Users className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Nos Clients
              </span>
            </Link>

            <a 
              href="#projects"
              className="group text-center animate-slide-up"
              style={{ animationDelay: '0.6s' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <FolderOpen className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Projets
              </span>
            </a>

            <a 
              href="#case-studies"
              className="group text-center animate-slide-up"
              style={{ animationDelay: '0.7s' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                KPIs
              </span>
            </a>

            <a 
              href="#contact"
              className="group text-center animate-slide-up"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110 border border-white/20">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="text-sm font-medium text-white/90 group-hover:text-white transition-colors">
                Contact
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/30 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero