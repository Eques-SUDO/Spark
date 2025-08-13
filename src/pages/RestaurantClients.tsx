import React from 'react'
import { Utensils } from 'lucide-react'
import ClientPage from '../components/ClientPage'
import VideoCarousel from '../components/VideoCarousel'
import PhotoCarousel from '../components/PhotoCarousel'

const RestaurantClients = () => {
  const clients = [
    {
      name: 'Big Mado',
      logo: '/img/logo-bigmado.jpeg',
      description:
        'Chaîne de restauration premium à Casablanca entièrement rebrandée (logo, packaging, charte visuelle, réseaux sociaux) pour harmoniser son image avec ses ambitions de croissance.',
      image: '/img/bigmado.png',
      services: ['Stratégie événementielle','Rebranding complet', 'Logo & packaging', 'Réseaux sociaux'],
      socialMedia: {
        instagram: 'https://www.instagram.com/mado.resto',
        website: 'https://bigmado.ma/',
      },
    },
    {
      name: 'Limon Y Sal',
      logo: '/img/logo-Limon.png',
      description:
        'Restaurant latino festif lancé avec succès grâce à une campagne digitale intégrée incluant shootings food, charte éditoriale dynamique et partenariats influenceurs.',
      image: '/img/limon.png',
      services: ['Campagne digitale', 'Shooting food', 'Partenariats influenceurs','Stratégie événementielle'],
      socialMedia: {
        instagram: 'https://www.instagram.com/limonysal.casablanca?igsh=MXdkMjIwd293MjhkNg==',
        website: 'https://www.limonysal.ma/',
      },
    },
    {
      name: 'Platinum',
      logo: '/img/logo-Platinum.png',
      description:
        'Lounge gastronomique et bar à cocktails. Image sublimée par des supports print haut de gamme, un shooting de marque et une stratégie événementielle ciblée.',
      image: '/img/platinum.png',
      services: ['Supports print premium', 'Shooting de marque', 'Stratégie événementielle'],
      socialMedia: {
        instagram: 'https://www.instagram.com/platinum_marrakech?igsh=emJ5ZmZjZHM4YXdy',
        website: 'https://platinumcasa.com',
      },
    },
    {
      name: 'Le Petit Bouillon',
      logo: '/img/logo-Petit.png',
      description:
        "Bistrot moderne d'inspiration française avec direction artistique complète et ligne visuelle élégante pensée pour les réseaux sociaux.",
      image: '/img/petit.jpeg',
      services: ['Direction artistique', 'Ligne visuelle', 'Stratégie réseaux sociaux','Stratégie événementielle'],
      socialMedia: {
        instagram: 'https://www.instagram.com/lepetitbouillon?igsh=emxhZjJjNDh2YTA4',
        
      },
    },
    {
      name: 'Tacos World',
      logo: '/img/logo-World.png',
      description:
        'Fast-food jeune et urbain dont la notoriété locale a été propulsée grâce à des campagnes digitales décalées, vidéos snacks et contenus visuels adaptés.',
      image: '/img/world.jpeg',
      services: ['Campagnes digitales', 'Vidéos créatives', 'Contenus visuels','Stratégie événementielle'],
      socialMedia: {
        instagram: 'https://www.instagram.com/tacosworld_maroc?igsh=bjNlOHg5dWFnZDlu',
        
      },
    },
    {
      name: 'Lunera',
      logo: '/img/logo-Lunera.png',
      description:
        'Brunch spot tendance à Marrakech avec direction artistique solaire, mêlant lifestyle marocain et univers brunch premium.',
      image: '/img/lunera.png',
      services: ['Direction artistique', 'Lifestyle marocain', 'Brunch premium','Stratégie événementielle'],
      socialMedia: {
        instagram: 'https://www.instagram.com/lunera9_marrakech_?igsh=cW1hb2JocDV3enU2h',
        website: 'https://lunera-marrakech.com',
      },
    },
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

  const photoImages = [
    { src: '/img/gallery1.jpg' },
    { src: '/img/gallery2.jpg' },
    { src: '/img/gallery3.jpg'},
    { src: '/img/gallery4.jpg' },
    { src: '/img/gallery5.jpg' },
    { src: '/img/gallery6.png' },
    { src: '/img/gallery7.png' },
    { src: '/img/gallery8.png'},
    { src: '/img/gallery9.png' },
    { src: '/img/gallery10.png' },
    { src: '/img/gallery11.png' },
    
  ]

  return (
    <>
      <ClientPage
        sectorName="Restauration"
        sectorIcon={Utensils}
        sectorColor="from-amber-500 to-yellow-600"
        clients={clients}
      />
      <VideoCarousel videos={videoUrls} vertical />
      <PhotoCarousel images={photoImages} vertical/>
    </>
  )
}

export default RestaurantClients
