import React from 'react'
import { Gem } from 'lucide-react'
import ClientPage from '../components/ClientPage'
import VideoCarousel from '../components/VideoCarousel'

const BijouterieLuxeClients = () => {
  const clients = [
    {
      name: 'Maison Diazur',
      logo: '/img/Maison-Diazur.jpeg',
      description: 'Maison de haute joaillerie alliant élégance contemporaine et artisanat marocain. Plateforme visuelle complète : direction artistique, identité de marque et campagnes image.',
      image: '/img/Maison-Diazur2.jpeg',
      services: ['Direction artistique', 'Identité de marque', 'Campagnes image'],
      socialMedia: {
        instagram: 'https://www.instagram.com/diazur_jewelry/?hl=en',
        
      }
    },
    {
      name: 'Arts by Passion',
      logo: '/img/artsby.png',
      description: 'Créateur de bijoux faits main. Stratégie de contenu Instagram, production de visuels raffinés et développement d\'univers de marque à travers une narration authentique.',
      image: '/img/artsby.png',
      services: ['Stratégie Instagram', 'Visuels raffinés', 'Narration authentique'],
      socialMedia: {
        instagram: 'https://www.instagram.com/arts_bypassion/?hl=en',
        
      }
    }
  ]

  const videoUrls = [
     'https://www.youtube.com/shorts/1HgCpkJyaM8?t=10&feature=share',
    'https://www.youtube.com/shorts/teOBpuiGSw8?t=3&feature=share',
    'https://www.youtube.com/shorts/GMOUe4He3pA?feature=share',
    'https://www.youtube.com/shorts/_v9TE7cnrqY?t=1&feature=share',
    'https://www.youtube.com/shorts/60LB1hzECeU',
    'https://www.youtube.com/shorts/9UBe9_ZeoGE?feature=share',
    'https://www.youtube.com/shorts/6zQfBTAy50I?feature=share',
    'https://www.youtube.com/shorts/K_Bl-em-rSM?feature=share',
    'https://www.youtube.com/shorts/yH8UtOIsK1A?feature=share',
    'https://www.youtube.com/shorts/V3VRCyni6Cc?feature=share',

  ]

  return (
    <>
      <ClientPage
        sectorName="Bijouterie & Luxe"
        sectorIcon={Gem}
        sectorColor="from-yellow-600 to-amber-600"
        clients={clients}
      />
      <VideoCarousel videos={videoUrls} vertical />
    </>
  )
}

export default BijouterieLuxeClients
