import React from 'react'
import { Calendar } from 'lucide-react'
import ClientPage from '../components/ClientPage'

const CultureEvenementielClients = () => {
  const clients = [
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
      logo: '/img/logo-Lunera.png',
      description: 'Projet culturel valorisant les métiers du fil et de la transmission artisanale. Capsules vidéos, storytelling multicouche et ligne éditoriale dédiée aux artisans marocains.',
      image: '/img/lunera.png',
      services: ['Capsules vidéos', 'Storytelling', 'Valorisation artisans'],
      socialMedia: {
        instagram: '#',
        website: '#'
      }
    },
    {
      name: 'ARCAMA',
      logo: '/img/logo-Lunera.png',
      description: 'Association spécialisée dans la préservation de la musique andalouse. Branding global, supports événementiels et valorisation visuelle des actions éducatives.',
      image: '/img/lunera.png',
      services: ['Branding global', 'Supports événementiels', 'Actions éducatives'],
      socialMedia: {
        facebook: '#',
        website: '#'
      }
    }
  ]

  return (
    <ClientPage
      sectorName="Culture & Événementiel"
      sectorIcon={Calendar}
      sectorColor="from-yellow-500 to-orange-500"
      clients={clients}
    />
  )
}

export default CultureEvenementielClients
