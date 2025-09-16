export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I&apos;m a passionate full-stack developer with experience in modern web technologies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="w-64 h-64 mx-auto lg:mx-0 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white text-6xl font-bold">YN</span>
            </div>
          </div>
          
          <div className="text-left lg:text-left">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Full Stack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I specialize in building modern web applications using React, Next.js, and Python. 
              I&apos;m passionate about creating user-friendly interfaces and robust backend systems.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              With experience in both frontend and backend development, I enjoy working on 
              full-stack projects that solve real-world problems.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Frontend</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>React & Next.js</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Backend</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>Python & FastAPI</li>
                  <li>SQL Databases</li>
                  <li>RESTful APIs</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}