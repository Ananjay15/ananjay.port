import { Github, ExternalLink } from 'lucide-react'
import { useSelector } from 'react-redux'


export default function ProjectCard({ project }) {
  const isDarkMode = useSelector((s) => s.theme.isDarkMode)
  return (
    <div className={`${isDarkMode ? 'bg-gray-900/50' : 'bg-white/80'} rounded-xl overflow-hidden border ${isDarkMode ? 'border-gray-800' : 'border-gray-200'} transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm`}>
      <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech, i) => (
            <span key={i} className={`px-3 py-1 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} rounded-full text-xs`}>
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <a href={project.github} className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <Github size={16} /><span className="text-sm">Code</span>
          </a>
          <a href={project.demo} className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-300">
            <ExternalLink size={16} /><span className="text-sm">Demo</span>
          </a>
        </div>
      </div>
    </div>
  )
}
