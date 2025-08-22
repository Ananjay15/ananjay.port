export default function AnimatedMobileSVG() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
      <defs>
        <linearGradient id="mobileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#EC4899" />
        </linearGradient>
      </defs>
      <rect x="35" y="20" width="50" height="80" rx="8" fill="none" stroke="url(#mobileGradient)" strokeWidth="2" />
      <rect x="40" y="30" width="40" height="55" rx="3" fill="url(#mobileGradient)" opacity="0.2" />
      <g className="animate-pulse" style={{ animationDuration: '2.5s' }}>
        <rect x="45" y="35" width="30" height="6" rx="3" fill="url(#mobileGradient)" opacity="0.6" />
        <rect x="45" y="45" width="20" height="4" rx="2" fill="url(#mobileGradient)" opacity="0.4" />
        <rect x="45" y="52" width="25" height="4" rx="2" fill="url(#mobileGradient)" opacity="0.5" />
      </g>
      <circle cx="60" cy="95" r="3" fill="url(#mobileGradient)" className="animate-bounce" />
      <g className="animate-pulse" style={{ animationDuration: '1.5s' }}>
        <path d="M 20 15 Q 30 10 40 15" fill="none" stroke="url(#mobileGradient)" strokeWidth="2" opacity="0.7" />
        <path d="M 80 15 Q 90 10 100 15" fill="none" stroke="url(#mobileGradient)" strokeWidth="2" opacity="0.7" />
      </g>
    </svg>
  )
}
