import React from 'react'
import { Building } from 'lucide-react'
import ClientPage from '../components/ClientPage'
import VideoCarousel from '../components/VideoCarousel'

const BtpImmobilierClients = () => {
  const clients = [
    {
      name: 'KT2A Travaux',
      logo: '/img/logo-ktaa.png',
      description: 'Entreprise spécialisée dans les travaux de gros œuvre et VRD. Accompagnement dans la structuration de leur image à travers une charte de communication institutionnelle et des vidéos corporate de chantier.',
      image: '/img/ktaa.jpg',
      services: ['Creation d’une Identité visuelle', 'Stratégie de Communication Personal Brandinge', 'Tournages Professionnels sur Chantiers'],
      socialMedia: {
        linkedin: 'https://ma.linkedin.com/company/kt2atravaux',
        website: 'https://ktaa.ma'
      }
    },
    {
      name: 'Sila Intérieur',
      logo: '/img/sila-logo.jpeg',
      description: 'Bureau de design et d\'aménagement intérieur repositionné avec une refonte totale de son univers visuel et une stratégie social media élégante, en accord avec son positionnement premium.',
      image: '/img/sila.jpg',
      services: ['Creation de l’identité Visuelle', 'Stratégie Social Media', 'Positionnement Premium'],
      socialMedia: {
        instagram: 'https://www.instagram.com/sila__interiors',
        
      }
    },
    {
      name: 'ELE Properties',
      logo: '/img/ele-logo.jpeg',
      description: 'Jeune promoteur immobilier ambitieux. Création de son identité de marque complète (naming, logo, charte graphique) ainsi que la production de contenu institutionnel.',
      image: '/img/elepro.jpeg',
      services: ['Creation d’une Identité visuelle', 'Stratégie de Communication Personal Brandinge', 'Tournages Professionnels sur Chantiers'],
      socialMedia: {
        instagram: 'https://www.instagram.com/ele_properties/?hl=en',
       
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
        sectorName="BTP & Immobilier"
        sectorIcon={Building}
        sectorColor="from-amber-500 to-yellow-600"
        clients={clients}
      />
      <VideoCarousel  videos={videoUrls} vertical />
    </>
  )
}

export default BtpImmobilierClients
