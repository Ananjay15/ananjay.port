export default function AnimatedCodeSVG() {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto mb-8">
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#8B5CF6" />
        </linearGradient>
      </defs>
      <circle cx="100" cy="100" r="90" fill="none" stroke="url(#codeGradient)" strokeWidth="2" strokeDasharray="10 5" className="animate-spin" style={{ animationDuration: '20s' }} />
      <g className="animate-pulse" style={{ animationDuration: '2s' }}>
        <rect x="70" y="70" width="60" height="8" rx="4" fill="url(#codeGradient)" opacity="0.8" />
        <rect x="70" y="85" width="40" height="8" rx="4" fill="url(#codeGradient)" opacity="0.6" />
        <rect x="70" y="100" width="50" height="8" rx="4" fill="url(#codeGradient)" opacity="0.7" />
        <rect x="70" y="115" width="35" height="8" rx="4" fill="url(#codeGradient)" opacity="0.5" />
      </g>
      <circle cx="130" cy="60" r="3" fill="#3B82F6" className="animate-bounce" style={{ animationDelay: '0s' }} />
      <circle cx="150" cy="140" r="3" fill="#8B5CF6" className="animate-bounce" style={{ animationDelay: '0.5s' }} />
      <circle cx="50" cy="120" r="3" fill="#06D6A0" className="animate-bounce" style={{ animationDelay: '1s' }} />
    </svg>
  )
}
