import { useSelector } from 'react-redux'

export default function Footer() {
  const isDarkMode = useSelector((s) => s.theme.isDarkMode)
  return (
    <footer className={`py-8 px-4 border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <p>&copy; 2025 Frontend Developer Portfolio. Built with React, Redux Toolkit & Tailwind CSS.</p>
      </div>
    </footer>
  )
}
