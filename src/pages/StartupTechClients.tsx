import React from 'react'
import { Instagram, Rocket } from 'lucide-react'
import ClientPage from '../components/ClientPage'

const StartupTechClients = () => {
  const clients = [
    {
      name: 'Taxi Sahbi',
      logo: '/img/TAXI SAHBI LOGO FR.jpg',
      description: 'Application de taxi 100% marocaine. Projet complet : naming, branding, stratégie d\'acquisition digitale et app storytelling. Une référence nationale.',
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
      description: 'Plateforme de voyage exploitant l\'IA, repositionnée sur TikTok avec un branding tendance, des vidéos immersives et une ligne éditoriale génération Z.',
      image: '/img/SafarDream-logo.jpg',
      services: ['Repositionnement TikTok', 'Branding tendance', 'Vidéos immersives'],
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
    }
  ]

  return (
    <ClientPage
      sectorName="Start-up & Tech"
      sectorIcon={Rocket}
      sectorColor="from-amber-600 to-yellow-700"
      clients={clients}
    />
  )
}

export default StartupTechClients
