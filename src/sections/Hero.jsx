import AnimatedCodeSVG from '../components/AnimatedIcons/AnimatedCodeSVG'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { useSelector } from 'react-redux'


export default function Hero({ mousePosition, currentTheme }) {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="text-center z-10 px-4">
        <AnimatedCodeSVG />
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Frontend Developer
          </span>
        </h1>
        <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 max-w-3xl mx-auto`}>
          Crafting exceptional digital experiences with modern web technologies
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
          <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-6 00 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
            Get In Touch
          </a>
          <a href="#projects" className="px-8 py-4 border border-gray-700 rounded-full font-semibold hover:border-blue-400 hover:text-blue-400 transition-all duration-300 transform hover:scale-105">
            View Projects
          </a>
        </div>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"><Github size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"><Linkedin size={24} /></a>
          <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 transform hover:scale-110"><Mail size={24} /></a>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={32} className="text-gray-400" />
      </div>
    </section>
  )
}
