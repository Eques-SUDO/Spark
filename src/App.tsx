import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import VisionMission from './components/VisionMission'
import Services from './components/Services'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import Difference from './components/Difference'
import Innovations from './components/Innovations'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

// Client Pages
import NosClients from './pages/NosClients'
import RestaurantClients from './pages/RestaurantClients'

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <VisionMission />
      <Services />
      <Projects />
      <CaseStudies />
      <Difference />
      <Innovations />
      <Contact />
    </>
  )
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          
          <Route path="/clients" element={<NosClients />} />
          <Route path="/clients/restaurant" element={<RestaurantClients />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  )
}

export default App