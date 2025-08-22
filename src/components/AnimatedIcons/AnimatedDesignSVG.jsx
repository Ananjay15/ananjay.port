export default function AnimatedDesignSVG() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
      <defs>
        <linearGradient id="designGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="50%" stopColor="#EF4444" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <ellipse cx="60" cy="60" rx="45" ry="35" fill="none" stroke="url(#designGradient)" strokeWidth="2" />
      <g className="animate-pulse" style={{ animationDuration: '2s' }}>
        <circle cx="35" cy="45" r="6" fill="#3B82F6" />
        <circle cx="55" cy="35" r="6" fill="#EF4444" />
        <circle cx="75" cy="45" r="6" fill="#10B981" />
        <circle cx="85" cy="65" r="6" fill="#F59E0B" />
        <circle cx="75" cy="80" r="6" fill="#8B5CF6" />
        <circle cx="55" cy="85" r="6" fill="#EC4899" />
        <circle cx="35" cy="75" r="6" fill="#06D6A0" />
      </g>
      <g className="animate-bounce" style={{ animationDuration: '3s' }}>
        <line x1="85" y1="25" x2="95" y2="15" stroke="url(#designGradient)" strokeWidth="3" strokeLinecap="round" />
        <circle cx="88" cy="22" r="3" fill="url(#designGradient)" />
      </g>
    </svg>
  )
}
