export const Spin = () => {
  return (
    <svg
      viewBox="0 0 100 100"
      style={{ width: 28, height: 28, margin: '0 auto' }}
    >
      <defs>
        <linearGradient id="Gradient" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#F2CB05">
            <animate
              attributeName="stop-color"
              values="#F2CB05; #04B2D9; #F2CB05"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>

          <stop offset="100%" stopColor="#04B2D9">
            <animate
              attributeName="stop-color"
              values="#04B2D9; #F2CB05; #04B2D9"
              dur="4s"
              repeatCount="indefinite"
            />
          </stop>
        </linearGradient>
      </defs>
      <circle className="circle" cx="50" cy="50" r="30" fill="none" />
    </svg>
  )
}
