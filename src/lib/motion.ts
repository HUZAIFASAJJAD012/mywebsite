export const motionTokens = {
  duration: { instant: .12, fast: .18, normal: .32, slow: .55, cinematic: .9 },
  ease: { standard: [0.22, 1, 0.36, 1], enter: [0.16, 1, 0.3, 1], exit: [0.4, 0, 1, 1] },
  spring: {
    responsive: { stiffness: 420, damping: 34, mass: .7 },
    gentle: { stiffness: 180, damping: 24, mass: .9 },
    pointer: { stiffness: 150, damping: 26, mass: .45 },
  },
  distance: { xs: 6, sm: 12, md: 20, lg: 32 },
} as const;
