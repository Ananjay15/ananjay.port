import { Github, Linkedin, Mail } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function Contact() {
  const isDarkMode = useSelector((s) => s.theme.isDarkMode)
  return (
    <section id="contact" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900/20' : 'bg-gray-50'}`}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Let's Work Together
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Ready to bring your ideas to life? Let's discuss your next project.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className={`p-6 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white/80 border-gray-200'} rounded-xl border transition-all duration-300 backdrop-blur-sm`}>
            <Mail className="mx-auto mb-4 text-blue-400" size={32} />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-gray-400">hello@developer.com</p>
          </div>
          <div className={`p-6 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white/80 border-gray-200'} rounded-xl border transition-all duration-300 backdrop-blur-sm`}>
            <Linkedin className="mx-auto mb-4 text-blue-400" size={32} />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-gray-400">Connect with me</p>
          </div>
          <div className={`p-6 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white/80 border-gray-200'} rounded-xl border transition-all duration-300 backdrop-blur-sm`}>
            <Github className="mx-auto mb-4 text-blue-400" size={32} />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-gray-400">View my code</p>
          </div>
        </div>
        <a href="mailto:hello@developer.com" className="inline-block px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
          Start a Conversation
        </a>
      </div>
    </section>
  )
}
