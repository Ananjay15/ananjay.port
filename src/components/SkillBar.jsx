import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export default function SkillBar({ skill }) {
  const [animated, setAnimated] = useState(false)
  const isDarkMode = useSelector((s) => s.theme.isDarkMode)

  useEffect(() => {
    const timer = setTimeout(() => setAnimated(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-gray-400">{skill.level}%</span>
      </div>
      <div className={`w-full ${isDarkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full h-2`}>
        <div
          className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
          style={{ width: animated ? `${skill.level}%` : '0%' }}
        />
      </div>
    </div>
  )
}
