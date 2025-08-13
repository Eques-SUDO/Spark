import React from 'react'

const Projects = () => {
  const projects = [
    {
      icon: '/img/TAXI SAHBI.jpg',
      title: 'Taxi Sahbi',
      description: 'App VTC 100% marocaine',
      color: 'from-yellow-400 to-amber-400',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: '/img/moussem-2024.jpeg',
      title: 'Moussem 2024',
      description: 'Plus grand moussem équestre d\'Afrique',
      color: 'from-amber-400 to-yellow-500',
      bgColor: 'bg-amber-100'
    },
    {
      icon: '/img/YELTECH.jpg',
      title: 'YelTech',
      description: 'Devéloppement des solutions BTP ',
      color: 'from-yellow-500 to-amber-500',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: '/img/SAFARDREAM.jpg',
      title: 'SafarDream',
      description: 'Voyages',
      color: 'from-yellow-600 to-amber-600',
      bgColor: 'bg-yellow-200'
    },

    {
      icon: '/img/rubicon.png',
      title: 'Rubicon',
      description: 'Marque internationale de boissons',
      color: 'from-yellow-600 to-amber-600',
      bgColor: 'bg-yellow-200'
    }
  ]

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Projets phares 2024‑2025
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="text-center group animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className={`w-20 h-20 mx-auto mb-6 ${project.bgColor} rounded-full flex items-center justify-center group-hover:scale-150 transition-transform duration-300`}
              >
                <img
                  src={project.icon}
                  alt={project.title}
                  className="w-20 h-20 object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
