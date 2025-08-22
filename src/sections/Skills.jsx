import { useSelector } from 'react-redux'
import SkillBar from '../components/SkillBar'

export default function Skills() {
  const skills = useSelector((s) => s.data.skills)
  const isDarkMode = useSelector((s) => s.theme.isDarkMode)
  return (
    <section id="skills" className={`py-20 px-4 ${isDarkMode ? 'bg-gray-900/20' : 'bg-gray-50'}`}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => <SkillBar key={index} skill={skill} />)}
        </div>
      </div>
    </section>
  )
}
