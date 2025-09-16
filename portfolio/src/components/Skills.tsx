'use client'

import { useState, useEffect } from 'react'

interface Skill {
  id: number
  name: string
  category: string
  level: number
}

export default function Skills() {
  const [skills, setSkills] = useState<Skill[]>([])
  
  useEffect(() => {
    const sampleSkills: Skill[] = [
      { id: 1, name: 'React', category: 'frontend', level: 5 },
      { id: 2, name: 'Next.js', category: 'frontend', level: 4 },
      { id: 3, name: 'TypeScript', category: 'frontend', level: 4 },
      { id: 4, name: 'Tailwind CSS', category: 'frontend', level: 5 },
      { id: 5, name: 'Python', category: 'backend', level: 5 },
      { id: 6, name: 'FastAPI', category: 'backend', level: 4 },
      { id: 7, name: 'PostgreSQL', category: 'database', level: 4 },
      { id: 8, name: 'SQLite', category: 'database', level: 5 },
      { id: 9, name: 'Git', category: 'tools', level: 5 },
      { id: 10, name: 'Docker', category: 'tools', level: 3 }
    ]
    setSkills(sampleSkills)
  }, [])

  const categories = [
    { name: 'Frontend', key: 'frontend', color: 'bg-blue-500' },
    { name: 'Backend', key: 'backend', color: 'bg-green-500' },
    { name: 'Database', key: 'database', color: 'bg-purple-500' },
    { name: 'Tools', key: 'tools', color: 'bg-orange-500' }
  ]

  const renderSkillLevel = (level: number) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div
            key={dot}
            className={`w-2 h-2 rounded-full ${
              dot <= level ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-600'
            }`}
          />
        ))}
      </div>
    )
  }

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies I work with and my proficiency level
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category) => (
            <div key={category.key} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className={`w-3 h-3 rounded-full ${category.color} mr-3`}></div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>
              
              <div className="space-y-4">
                {skills
                  .filter(skill => skill.category === category.key)
                  .map((skill) => (
                    <div key={skill.id} className="flex items-center justify-between">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      {renderSkillLevel(skill.level)}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}