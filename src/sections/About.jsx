import AnimatedWebSVG from '../components/AnimatedIcons/AnimatedWebSVG'
import AnimatedMobileSVG from '../components/AnimatedIcons/AnimatedMobileSVG'
import AnimatedDesignSVG from '../components/AnimatedIcons/AnimatedDesignSVG'
import { Code } from 'lucide-react'
import { useSelector } from 'react-redux'

export default function About() {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode)

  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
        About Me
      </h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">
            Passionate About Creating Amazing Web Experiences
          </h3>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
            I'm a frontend developer with 3+ years of experience building responsive, user-friendly web applications.
            I specialize in React, JavaScript, and modern CSS frameworks, with a keen eye for design and performance optimization.
          </p>
          <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6 leading-relaxed`}>
            My approach combines technical expertise with creative problem-solving to deliver solutions that not only
            look great but also provide exceptional user experiences. I'm passionate about staying current with the
            latest web technologies and best practices.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className={`text-center p-4 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-100 border-gray-300'} rounded-lg border backdrop-blur-sm`}>
              <div className="text-3xl font-bold text-blue-400 mb-2">50+</div>
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Projects Completed</div>
            </div>
            <div className={`text-center p-4 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-gray-100 border-gray-300'} rounded-lg border backdrop-blur-sm`}>
              <div className="text-3xl font-bold text-purple-400 mb-2">3+</div>
              <div className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Years Experience</div>
            </div>
          </div>
        </div>

        {/* Right Cards Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <div className={`p-6 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-300'} rounded-xl border transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
              <AnimatedWebSVG />
              <h4 className="font-semibold mb-2">Web Development</h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Modern, responsive websites</p>
            </div>
            <div className={`p-6 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-300'} rounded-xl border transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
              <AnimatedMobileSVG />
              <h4 className="font-semibold mb-2">Mobile First</h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Optimized for all devices</p>
            </div>
          </div>

          <div className="space-y-4 mt-8">
            <div className={`p-6 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-300'} rounded-xl border transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
              <div className="mx-auto mb-4 w-fit">
                <Code size={32} className="text-green-400 animate-pulse" />
              </div>
              <h4 className="font-semibold mb-2">Clean Code</h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Maintainable & scalable</p>
            </div>
            <div className={`p-6 ${isDarkMode ? 'bg-gray-900/50 border-gray-800' : 'bg-white border-gray-300'} rounded-xl border transform hover:scale-105 transition-all duration-300 backdrop-blur-sm`}>
              <AnimatedDesignSVG />
              <h4 className="font-semibold mb-2">UI/UX Design</h4>
              <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} text-sm`}>Beautiful interfaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
