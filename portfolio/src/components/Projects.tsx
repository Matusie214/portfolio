'use client'

import { useState, useEffect } from 'react'

interface Project {
  id: number
  title: string
  description: string
  short_description: string
  image_url?: string
  demo_url?: string
  github_url?: string
  tech_stack: string
  featured: boolean
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  
  useEffect(() => {
    const sampleProjects: Project[] = [
      {
        id: 1,
        title: "Vue E-commerce Store",
        description: "Advanced e-commerce application with smart inventory management, product galleries, stock notifications, and real-time Supabase integration. Features conditional purchase flows and comprehensive admin panel.",
        short_description: "Advanced inventory management platform",
        demo_url: "https://vue-ecommerce-matusiak.netlify.app",
        github_url: "https://github.com/Matusie214/vue-ecommerce",
        tech_stack: "Vue 3, TypeScript, Supabase, Pinia, Tailwind CSS, PostgreSQL",
        featured: true
      },
      {
        id: 2,
        title: "Vue Task Manager",
        description: "Collaborative task management application with drag & drop functionality, real-time Socket.io updates, team collaboration features, project organization, and comprehensive progress tracking.",
        short_description: "Real-time team productivity platform",
        demo_url: "https://vue-taskmanager-matusiak.netlify.app",
        github_url: "https://github.com/Matusie214/vue-task-manager",
        tech_stack: "Vue 3, TypeScript, Socket.io, Vue Draggable, Pinia, Tailwind CSS",
        featured: true
      },
      {
        id: 3,
        title: "Vue Weather Dashboard",
        description: "Interactive weather application with location-based forecasts, Chart.js visualizations, weather maps, radar imagery, severe weather alerts, and comprehensive meteorological data display.",
        short_description: "Advanced weather tracking with charts",
        demo_url: "https://vue-weather-matusiak.netlify.app",
        github_url: "https://github.com/Matusie214/vue-weather-dashboard",
        tech_stack: "Vue 3, TypeScript, Chart.js, OpenWeatherMap API, Geolocation, Tailwind CSS",
        featured: true
      }
    ]
    setProjects(sampleProjects)
  }, [])

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">{project.title.charAt(0)}</span>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.short_description}
                </p>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {project.tech_stack}
                </p>
                
                <div className="flex space-x-4">
                  {project.demo_url && (
                    <a 
                      href={project.demo_url}
                      className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                  {project.github_url && (
                    <a 
                      href={project.github_url}
                      className="text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300 font-medium"
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}