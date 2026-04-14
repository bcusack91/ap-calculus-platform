export const physics2ModernPart2Data = {
  topicSlug: 'photons-atomic-nuclear',
  sections: [
    {
      id: 'mp2-intro',
      type: 'text' as const,
      content: `
# 🌊 Wave-Particle Duality

**Part 2 of 7 — Matter Waves**

Light acts as both a wave and a particle. In 1924, Louis de Broglie proposed that **matter also has wave properties**. Every moving particle has an associated wavelength — the **de Broglie wavelength**.
      `
    },
    {
      id: 'mp2-de-broglie',
      type: 'text' as const,
      content: `
## The de Broglie Wavelength

Any particle with momentum $p$ has an associated wavelength:

$$\\lambda = \\frac{h}{p} = \\frac{h}{mv}$$

where:
- $\\lambda$ = de Broglie wavelength (m)
- $h = 6.63 \\times 10^{-34}$ J·s
- $p = mv$ = momentum of the particle
- $m$ = mass of the particle (kg)
- $v$ = speed of the particle (m/s)

### Why Don't We See Waves for Everyday Objects?

For a 0.15 kg baseball at 40 m/s:

$$\\lambda = \\frac{6.63 \\times 10^{-34}}{(0.15)(40)} = 1.1 \\times 10^{-34} \\text{ m}$$

This is $10^{19}$ times smaller than a proton — completely undetectable!

For an electron ($m = 9.11 \\times 10^{-31}$ kg) at $10^6$ m/s:

$$\\lambda = \\frac{6.63 \\times 10^{-34}}{(9.11 \\times 10^{-31})(10^6)} = 7.3 \\times 10^{-10} \\text{ m} = 0.73 \\text{ nm}$$

This is comparable to atomic spacings — electron waves are **observable**!
      `
    },
    {
      id: 'mp2-duality-quiz',
      type: 'multiple-choice' as const,
      content: `
**de Broglie Wavelength Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'An electron and a proton have the same kinetic energy. Which has the longer de Broglie wavelength?',
            options: [
              'The proton',
              'The electron',
              'They have the same wavelength',
              'Cannot determine without knowing the energy'
            ],
            correctAnswer: 1,
            explanation: '$KE = p^2/(2m)$, so $p = \\sqrt{2mKE}$. At the same KE, the lighter electron has smaller momentum, so $\\lambda = h/p$ is larger for the electron.'
          },
          {
            question: 'If you double the speed of a particle, its de Broglie wavelength:',
            options: [
              'Doubles',
              'Halves',
              'Quadruples',
              'Stays the same'
            ],
            correctAnswer: 1,
            explanation: '$\\lambda = h/(mv)$. Doubling $v$ doubles the denominator, so $\\lambda$ is halved.'
          }
        ]
      }
    },
    {
      id: 'mp2-electron-diffraction',
      type: 'text' as const,
      content: `
## Evidence for Matter Waves

### Electron Diffraction

In 1927, Davisson and Germer fired electrons at a nickel crystal and observed a **diffraction pattern** — the same behavior expected of waves scattering off a periodic structure.

The electrons' de Broglie wavelength matched the wavelength predicted by the diffraction pattern, confirming de Broglie's hypothesis.

### Double-Slit Experiment with Particles

When electrons (or even larger particles like neutrons and molecules) pass through a double slit:

- **Many particles**: An interference pattern builds up on the detector
- **One particle at a time**: Each particle lands at a single point, but after many particles, the interference pattern still emerges
- **Observation**: If you detect which slit the particle goes through, the interference pattern disappears

This demonstrates that each particle interferes **with itself** — it passes through both slits as a wave!

### Compton Scattering

When X-ray photons collide with electrons, the scattered photon has a **longer wavelength** (lower energy). The wavelength shift depends on the scattering angle:

$$\\Delta\\lambda = \\frac{h}{m_e c}(1 - \\cos\\theta)$$

This proved that photons carry momentum: $p = h/\\lambda = E/c$.
      `
    },
    {
      id: 'mp2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Wave-Particle Duality Concepts**
      `,
      exercise: {
        questions: [
          {
            question: 'In the double-slit experiment with electrons sent one at a time, what builds up on the screen?',
            options: [
              'Two bright bands (one per slit)',
              'A uniform distribution',
              'An interference pattern of bright and dark fringes',
              'A single bright spot in the center'
            ],
            correctAnswer: 2,
            explanation: 'Even when sent one at a time, electrons build up an interference pattern over many detections. Each individual electron lands at a single point, but the probability distribution follows wave interference.'
          },
          {
            question: 'Compton scattering demonstrates that photons have:',
            options: [
              'Mass',
              'Charge',
              'Momentum',
              'A fixed wavelength that never changes'
            ],
            correctAnswer: 2,
            explanation: 'In Compton scattering, a photon transfers momentum to an electron, proving photons carry momentum $p = h/\\lambda$ despite having zero rest mass.'
          }
        ]
      }
    },
    {
      id: 'mp2-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**de Broglie Wavelength Calculation Drill**

Use $h = 6.63 \\times 10^{-34}$ J·s, $m_e = 9.11 \\times 10^{-31}$ kg, $1 \\text{ eV} = 1.60 \\times 10^{-19}$ J.

An electron is accelerated from rest through a potential difference of 100 V.

1) Kinetic energy gained by the electron ($\\times 10^{-17}$ J, 3 significant figures)

2) Speed of the electron ($\\times 10^{6}$ m/s, 3 significant figures)

3) de Broglie wavelength ($\\times 10^{-10}$ m, 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.60', '5.93', '1.23'],
        hint1: '$KE = eV = (1.60 \\times 10^{-19})(100) = 1.60 \\times 10^{-17}$ J.',
        hint2: '$KE = \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{2KE/m} = \\sqrt{2(1.60 \\times 10^{-17})/(9.11 \\times 10^{-31})}$.',
        hint3: '$\\lambda = h/(mv) = 6.63 \\times 10^{-34}/[(9.11 \\times 10^{-31})(5.93 \\times 10^6)]$.',
        explanation: '$KE = 1.60 \\times 10^{-17}$ J. $v = \\sqrt{2(1.60 \\times 10^{-17})/(9.11 \\times 10^{-31})} = \\sqrt{3.51 \\times 10^{13}} = 5.93 \\times 10^6$ m/s. $\\lambda = 6.63 \\times 10^{-34}/[(9.11 \\times 10^{-31})(5.93 \\times 10^6)] = 1.23 \\times 10^{-10}$ m.'
      }
    },
    {
      id: 'mp2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Wave-Particle Duality**
      `,
      exercise: {
        questions: [
          {
            question: 'A neutron ($m = 1.67 \\times 10^{-27}$ kg) has a de Broglie wavelength of $1.0 \\times 10^{-10}$ m. Its speed is closest to:',
            options: [
              '$4.0 \\times 10^3$ m/s',
              '$4.0 \\times 10^6$ m/s',
              '$4.0 \\times 10^{-3}$ m/s',
              '$4.0 \\times 10^{9}$ m/s'
            ],
            correctAnswer: 0,
            explanation: '$v = h/(m\\lambda) = 6.63 \\times 10^{-34}/[(1.67 \\times 10^{-27})(1.0 \\times 10^{-10})] = 6.63 \\times 10^{-34}/(1.67 \\times 10^{-37}) \\approx 3.97 \\times 10^3 \\approx 4.0 \\times 10^3$ m/s.'
          },
          {
            question: 'Which statement best describes wave-particle duality?',
            options: [
              'Light is a wave and matter is a particle — they are fundamentally different',
              'All entities exhibit both wave and particle properties; which is observed depends on the experiment',
              'Wave-particle duality only applies to photons',
              'De Broglie waves are only theoretical and have never been observed'
            ],
            correctAnswer: 1,
            explanation: 'Wave-particle duality is universal. Photons show particle behavior (photoelectric effect) and wave behavior (interference). Electrons show particle behavior (tracks in detectors) and wave behavior (diffraction patterns).'
          }
        ]
      }
    }
  ]
}
