import { useSelector } from 'react-redux'

export default function FloatingShapes() {
  const isDarkMode = useSelector((s) => s.theme.isDarkMode)
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 animate-float" style={{ animationDuration: '6s', animationDelay: '0s' }}>
        <svg width="60" height="60" viewBox="0 0 60 60">
          <circle cx="30" cy="30" r="25" fill="none" stroke={isDarkMode ? '#3B82F6' : '#6366F1'} strokeWidth="2" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDuration: '8s', animationDelay: '2s' }}>
        <svg width="40" height="40" viewBox="0 0 40 40">
          <rect x="10" y="10" width="20" height="20" fill="none" stroke={isDarkMode ? '#8B5CF6' : '#A855F7'} strokeWidth="2" opacity="0.3" transform="rotate(45 20 20)" />
        </svg>
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDuration: '7s', animationDelay: '1s' }}>
        <svg width="50" height="50" viewBox="0 0 50 50">
          <polygon points="25,5 45,40 5,40" fill="none" stroke={isDarkMode ? '#06D6A0' : '#10B981'} strokeWidth="2" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDuration: '9s', animationDelay: '3s' }}>
        <svg width="35" height="35" viewBox="0 0 35 35">
          <path d="M17.5 5 L30 30 L5 30 Z" fill="none" stroke={isDarkMode ? '#EC4899' : '#F472B6'} strokeWidth="2" opacity="0.3" />
        </svg>
      </div>
    </div>
  )
}
