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
        title: "E-commerce Platform",
        description: "A full-stack e-commerce application with user authentication, product management, and payment integration.",
        short_description: "Modern e-commerce solution",
        demo_url: "#",
        github_url: "#",
        tech_stack: "React, Next.js, Python, FastAPI, PostgreSQL",
        featured: true
      },
      {
        id: 2,
        title: "Task Management App",
        description: "A collaborative task management application with real-time updates and team collaboration features.",
        short_description: "Collaborative productivity tool",
        demo_url: "#",
        github_url: "#",
        tech_stack: "React, TypeScript, Node.js, MongoDB",
        featured: true
      },
      {
        id: 3,
        title: "Weather Dashboard",
        description: "A responsive weather application with location-based forecasts and interactive charts.",
        short_description: "Interactive weather forecasting",
        demo_url: "#",
        github_url: "#",
        tech_stack: "React, Chart.js, Weather API, Tailwind CSS",
        featured: false
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
            Here are some of the projects I've worked on recently
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