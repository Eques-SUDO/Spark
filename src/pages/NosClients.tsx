import React from 'react'
import { Users } from 'lucide-react'
import ClientPage from '../components/ClientPage'

const NosClients = () => {
  const clients = [
    // Startup & Tech Clients
    {
      name: 'Taxi Sahbi',
      logo: '/img/TAXI SAHBI.jpg',
      description: 'Plateforme marocaine VTC. Projet complet : naming, branding, campagnes "Ana Ti9a", stratégie d\'acquisition et app storytelling. Une référence nationale.',
      image: '/img/taxisahbi.png',
      services: ['Naming & branding', 'Campagnes UGC', 'Stratégie acquisition'],
      socialMedia: {
        instagram: 'https://www.instagram.com/taxi_sahbi_app',
        website: 'https://taxisahbi.ma',
        tiktok: 'https://www.tiktok.com/@taxisahbi',
        youtube: 'https://www.youtube.com/@taxisahbi',
        facebook: 'https://www.facebook.com/profile.php?id=100089635604658',
        linkedin: 'https://www.linkedin.com/showcase/taxi-sahbi-app/posts/?feedView=all'
      }
    },
    {
      name: 'RentGooo',
      logo: '/img/Rentgooo.jpg',
      description: 'Start-up de location automobile 100% digitale. Stratégie omnicanale, activation internationale à GITEX Africa, et création de contenus pédagogiques innovants.',
      image: '/img/Rentgooo.jpg',
      services: ['Stratégie omnicanale', 'Activation GITEX', 'Contenus pédagogiques'],
      socialMedia: {
        website: 'https://rentgooo.com',
        instagram: 'https://www.instagram.com/rent_gooo/',
        linkedin: 'https://www.linkedin.com/company/rentgoo'
      }
    },
    {
      name: 'YelTech',
      logo: '/img/YELTECH.jpg', 
      description: 'Intégrateur Odoo pour le BTP. Définition de son image B2B, visuels techniques, stratégie de publication LinkedIn et discours commercial.',
      image: '/img/YELTECH.JPG',
      services: ['Image B2B', 'Visuels techniques', 'Stratégie LinkedIn'],
      socialMedia: {
        instagram:'https://www.instagram.com/yeltech_btp',
        website: 'https://yeltech.ma',
        linkedin: 'https://www.linkedin.com/company/yeltech-sarl'
      }
    },
    {
      name: 'SafarDream',
      logo: '/img/SafarDream-logo.jpg',
      description: 'Agence de voyage innovante où vos rêves rencontrent l\'innovation. Expériences personnalisées, voyage éthique et durable, rapprochant le monde à travers des aventures mémorables et responsables.',
      image: '/img/SafarDream-logo.jpg',
      services: ['Voyages personnalisés', 'Tourisme durable', 'Expériences exclusives'],
      socialMedia: {
        instagram: 'https://instagram.com/safardream',
        website: 'https://safardream.com',
        linkedin: 'https://www.linkedin.com/company/safardream/posts/?feedView=all',
        tiktok: 'https://www.tiktok.com/@safardream_',
        youtube: 'https://www.youtube.com/@SafarDream',
        facebook: 'https://www.facebook.com/safardream'
      }
    },
    {
      name: 'Global Travel',
      logo: '/img/global.png',
      description: 'Agence de voyage internationale offrant des solutions complètes pour les voyages d\'affaires et de loisirs, avec une expertise dans les destinations exotiques et les circuits personnalisés.',
      image: '/img/bahamas.jpg',
      services: ['Stratégie digitale', 'Branding voyage', 'Marketing de contenu'],
      socialMedia: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'Le Mario',
      logo: '/img/LEMARIO.JPG',
      description: 'Boutique de vape premium. Stratégie marketing complète pour se positionner comme référence dans le secteur, avec une identité visuelle distinctive et une approche commerciale adaptée.',
      image: '/img/LEMARIO.JPG',
      services: ['Branding premium', 'Stratégie marketing', 'Identité visuelle'],
      socialMedia: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'DakiTrack',
       logo: '/img/dakitrack-logo-1.svg',
      description: 'Start-up spécialisée en géolocalisation IoT. Accompagnement stratégique global incluant le naming, le branding produit et les contenus pré-campagne.',
      image: '/img/geolocalisation-en-temp-reel-dakitrack.com_.png',
      services: ['Naming', 'Branding produit', 'Contenus pré-campagne'],
      socialMedia: {
        linkedin: 'https://linkedin.com/company/dakitrack',
        website: 'https://dakitrack.com'
      }
    },
    {
      name: 'Omnixis',
      logo: '/img/omnixisai_logo.jpeg',
      description: 'Acteur des smart cities et de l\'IA opérationnelle. Développement visuel de son agent d\'appel IA, démonstrations vidéo 3D et activation événement tech.',
      image: '/img/omnixisai.jpeg',
      services: ['Agent IA visuel', 'Démonstrations 3D', 'Activation tech'],
      socialMedia: {
        linkedin: 'https://www.linkedin.com/company/omnixisai',
        website: 'https://www.omnixis.ai',
        instagram: 'https://www.instagram.com/omnixis.ai/?hl=en'
      }
    },
    // Culture & Événementiel Clients
    {
      name: 'Moussem Moulay Abdellah Amghar',
       logo: '/img/moussem-2024.jpeg',
      description: 'Plus grand festival équestre d\'Afrique. Refonte de communication visuelle, stratégie digitale, couverture photo/vidéo immersive, et valorisation de l\'héritage culturel.',
      image: '/img/moussemmoulayAbdellah.jpg',
      services: ['Communication visuelle', 'Stratégie digitale', 'Couverture immersive'],
      socialMedia: {
        website :'https://www.moussemmoulayabdellah.com/en',
        instagram: 'https://www.instagram.com/moussem_moulay_abdellah'
      }
    },
    {
      name: 'Filat',
      logo: '/img/filat-logo.png',
      description: 'Projet culturel valorisant les métiers du fil et de la transmission artisanale. Capsules vidéos, storytelling multicouche et ligne éditoriale dédiée aux artisans marocains.',
      image: '/img/filat-logo.png',
      services: ['Capsules vidéos', 'Storytelling', 'Valorisation artisans'],
      socialMedia: {
        instagram: 'https://www.instagram.com/filatdistribution',
        website: 'https://filatdistr.com',
        linkedin: 'https://www.linkedin.com/company/filat-distribution'
      }
    },
    {
      name: 'Rubicon',
      logo: '/img/rubicon.png',
      description: 'Marque de boissons internationale. Stratégie de communication complète, campagnes publicitaires innovantes et activation sur les réseaux sociaux pour le marché marocain.',
      image: '/img/rubiconb.jpg',
      services: ['Stratégie de communication', 'Campagnes publicitaires', 'Activation digitale'],
      socialMedia: {
        instagram: 'https://www.instagram.com/rubiconmaroc',
        website: 'https://www.rubicondrinks.com'
      }
    }
  ]

  return (
    <ClientPage
      sectorName="Nos Clients"
      sectorIcon={Users}
      sectorColor="from-amber-600 to-yellow-700"
      clients={clients}
    />
  )
}

export default NosClients