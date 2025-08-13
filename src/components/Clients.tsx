import React, { useState } from 'react'
import { Building, Utensils, Gem, Rocket, Calendar, X, ChevronLeft, ChevronRight } from 'lucide-react'
import ClientModal from './ClientModal'

const Clients = () => {
  const [selectedSector, setSelectedSector] = useState(null)

  const sectors = [
    {
      icon: Building,
      name: 'BTP & Immobilier',
      color: 'from-gray-500 to-gray-600',
      bgColor: 'bg-gray-100',
      clients: [
        {
          name: 'KT2A Travaux',
          description: 'Entreprise spécialisée dans les travaux de gros œuvre et VRD. Accompagnement dans la structuration de leur image à travers une charte de communication institutionnelle et des vidéos corporate de chantier.',
          image: 'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Charte communication', 'Vidéos corporate', 'Valorisation expertise terrain']
        },
        {
          name: 'Sila Intérieur',
          description: 'Bureau de design et d\'aménagement intérieur repositionné avec une refonte totale de son univers visuel et une stratégie social media élégante, en accord avec son positionnement premium.',
          image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Refonte visuelle', 'Stratégie social media', 'Positionnement premium']
        },
        {
          name: 'ELE Properties',
          description: 'Jeune promoteur immobilier ambitieux. Création de son identité de marque complète (naming, logo, charte graphique) ainsi que la production de contenu institutionnel.',
          image: 'https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Naming & logo', 'Charte graphique', 'Contenu institutionnel']
        }
      ]
    },
    {
      icon: Utensils,
      name: 'Restauration',
      color: 'from-orange-500 to-orange-600',
      bgColor: 'bg-orange-100',
      clients: [
        {
          name: 'Big Mado',
          description: 'Chaîne de restauration premium à Casablanca entièrement rebrandée (logo, packaging, charte visuelle, réseaux sociaux) pour harmoniser son image avec ses ambitions de croissance.',
          image: 'https://images.pexels.com/photos/1581384/pexels-photo-1581384.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Rebranding complet', 'Logo & packaging', 'Réseaux sociaux']
        },
        {
          name: 'Limon Y Sal',
          description: 'Restaurant latino festif lancé avec succès grâce à une campagne digitale intégrée incluant shootings food, charte éditoriale dynamique et partenariats influenceurs.',
          image: 'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Campagne digitale', 'Shooting food', 'Partenariats influenceurs']
        },
        {
          name: 'Platinum',
          description: 'Lounge gastronomique et bar à cocktails. Image sublimée par des supports print haut de gamme, un shooting de marque et une stratégie événementielle ciblée.',
          image: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Supports print premium', 'Shooting de marque', 'Stratégie événementielle']
        },
        {
          name: 'Le Petit Bouillons',
          description: 'Bistrot moderne d\'inspiration française avec direction artistique complète et ligne visuelle élégante pensée pour les réseaux sociaux.',
          image: 'https://images.pexels.com/photos/1307698/pexels-photo-1307698.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Direction artistique', 'Ligne visuelle', 'Stratégie réseaux sociaux']
        },
        {
          name: 'Tacos World',
          description: 'Fast-food jeune et urbain dont la notoriété locale a été propulsée grâce à des campagnes digitales décalées, vidéos snacks et contenus visuels adaptés.',
          image: 'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Campagnes digitales', 'Vidéos créatives', 'Contenus visuels']
        },
        {
          name: 'Lunera',
          description: 'Brunch spot tendance à Marrakech avec direction artistique solaire, mêlant lifestyle marocain et univers brunch premium.',
          image: 'https://images.pexels.com/photos/1833349/pexels-photo-1833349.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Direction artistique', 'Lifestyle marocain', 'Brunch premium']
        }
      ]
    },
    {
      icon: Gem,
      name: 'Bijouterie & Luxe',
      color: 'from-purple-500 to-purple-600',
      bgColor: 'bg-purple-100',
      clients: [
        {
          name: 'Maison Diazur',
          description: 'Maison de haute joaillerie alliant élégance contemporaine et artisanat marocain. Plateforme visuelle complète : direction artistique, identité de marque et campagnes image.',
          image: 'https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Direction artistique', 'Identité de marque', 'Campagnes image']
        },
        {
          name: 'Arts by Passion',
          description: 'Créateur de bijoux faits main. Stratégie de contenu Instagram, production de visuels raffinés et développement d\'univers de marque à travers une narration authentique.',
          image: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Stratégie Instagram', 'Visuels raffinés', 'Narration authentique']
        }
      ]
    },
    {
      icon: Rocket,
      name: 'Start-up & Tech',
      color: 'from-blue-500 to-blue-600',
      bgColor: 'bg-blue-100',
      clients: [
        {
          name: 'Taxi Sahbi',
          description: 'Plateforme marocaine VTC. Projet complet : naming, branding, campagnes "Ana Ti9a", stratégie d\'acquisition et app storytelling. Une référence nationale.',
          image: 'https://images.pexels.com/photos/4386321/pexels-photo-4386321.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Naming & branding', 'Campagnes UGC', 'Stratégie acquisition']
        },
        {
          name: 'RentGooo',
          description: 'Start-up de location automobile 100% digitale. Stratégie omnicanale, activation internationale à GITEX Africa, et création de contenus pédagogiques innovants.',
          image: 'https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Stratégie omnicanale', 'Activation GITEX', 'Contenus pédagogiques']
        },
        {
          name: 'YelTech',
          description: 'Intégrateur Odoo pour le BTP. Définition de son image B2B, visuels techniques, stratégie de publication LinkedIn et discours commercial.',
          image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Image B2B', 'Visuels techniques', 'Stratégie LinkedIn']
        },
        {
          name: 'SafarDream',
          description: 'Plateforme de voyage exploitant l\'IA, repositionnée sur TikTok avec un branding tendance, des vidéos immersives et une ligne éditoriale génération Z.',
          image: 'https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Repositionnement TikTok', 'Branding tendance', 'Vidéos immersives']
        },
        {
          name: 'DakiTrack',
          description: 'Start-up spécialisée en géolocalisation IoT. Accompagnement stratégique global incluant le naming, le branding produit et les contenus pré-campagne.',
          image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Naming', 'Branding produit', 'Contenus pré-campagne']
        },
        {
          name: 'Omnixis',
          description: 'Acteur des smart cities et de l\'IA opérationnelle. Développement visuel de son agent d\'appel IA, démonstrations vidéo 3D et activation événement tech.',
          image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Agent IA visuel', 'Démonstrations 3D', 'Activation tech']
        }
      ]
    },
    {
      icon: Calendar,
      name: 'Culture & Événementiel',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-100',
      clients: [
        {
          name: 'Moussem Moulay Abdellah Amghar',
          description: 'Plus grand festival équestre d\'Afrique. Refonte de communication visuelle, stratégie digitale, couverture photo/vidéo immersive, et valorisation de l\'héritage culturel.',
          image: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Communication visuelle', 'Stratégie digitale', 'Couverture immersive']
        },
        {
          name: 'Filat',
          description: 'Projet culturel valorisant les métiers du fil et de la transmission artisanale. Capsules vidéos, storytelling multicouche et ligne éditoriale dédiée aux artisans marocains.',
          image: 'https://images.pexels.com/photos/3618162/pexels-photo-3618162.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Capsules vidéos', 'Storytelling', 'Valorisation artisans']
        },
        {
          name: 'ARCAMA',
          description: 'Association spécialisée dans la préservation de la musique andalouse. Branding global, supports événementiels et valorisation visuelle des actions éducatives.',
          image: 'https://images.pexels.com/photos/3721941/pexels-photo-3721941.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop',
          services: ['Branding global', 'Supports événementiels', 'Actions éducatives']
        }
      ]
    },
    {
      icon: Building,
      name: 'Le Mario',
      color: 'from-red-500 to-red-600',
      bgColor: 'bg-red-100',
      clients: [
        {
          name: 'Le Mario Casablanca',
          description: 'Premier concept store de vape et snacks premium à Casablanca. Développement complet de l\'expérience de marque avec focus sur l\'innovation produit et l\'expérience client unique.',
          image: '/img/LEMARIO.JPG',
          services: ['Concept store design', 'Expérience client', 'Innovation produit']
        }
      ]
    }
  ]

  const handleSectorClick = (sector) => {
    setSelectedSector(sector)
  }

  const closeModal = () => {
    setSelectedSector(null)
  }

  return (
    <>
      <section id="clients" className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Nos clients & collaborations
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Nous avons la chance d'accompagner des marques variées et ambitieuses à travers des secteurs clés de l'économie marocaine. Cliquez sur chaque secteur pour découvrir nos réalisations.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {sectors.map((sector, index) => (
              <div 
                key={index}
                className="text-center group animate-slide-up cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => handleSectorClick(sector)}
              >
                <div className={`w-16 h-16 mx-auto mb-4 ${sector.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                  <sector.icon className={`w-6 h-6 bg-gradient-to-r ${sector.color} bg-clip-text text-transparent`} />
                </div>
                <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors">
                  {sector.name}
                </span>
                <p className="text-xs text-gray-500 mt-1">Cliquez pour voir nos clients</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedSector && (
        <ClientModal 
          sector={selectedSector}
          onClose={closeModal}
        />
      )}
    </>
  )
}

export default Clients