export default function AnimatedWebSVG() {
  return (
    <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto">
      <defs>
        <linearGradient id="webGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06D6A0" />
          <stop offset="100%" stopColor="#118AB2" />
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="50" fill="none" stroke="url(#webGradient)" strokeWidth="2" />
      <ellipse cx="60" cy="60" rx="50" ry="25" fill="none" stroke="url(#webGradient)" strokeWidth="1" opacity="0.7" />
      <ellipse cx="60" cy="60" rx="25" ry="50" fill="none" stroke="url(#webGradient)" strokeWidth="1" opacity="0.7" />
      <g className="animate-pulse" style={{ animationDuration: '3s' }}>
        <line x1="20" y1="40" x2="100" y2="80" stroke="url(#webGradient)" strokeWidth="1" opacity="0.5" />
        <line x1="30" y1="90" x2="90" y2="30" stroke="url(#webGradient)" strokeWidth="1" opacity="0.5" />
        <line x1="10" y1="60" x2="110" y2="60" stroke="url(#webGradient)" strokeWidth="1" opacity="0.5" />
      </g>
      <circle cx="60" cy="60" r="4" fill="url(#webGradient)" className="animate-ping" />
    </svg>
  )
}
