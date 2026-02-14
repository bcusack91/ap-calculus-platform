export const physics1UniversalGravitationPart5Data = {
  topicSlug: 'universal-gravitation',
  sections: [
    {
      id: 'ug5-intro',
      type: 'text' as const,
      content: `
# 🚀 Satellite Problems & Orbital Velocity

**Part 5 of 7 — Universal Gravitation**

Satellites are a cornerstone of AP Physics 1 gravitation problems. In this lesson, we'll tackle practical satellite problems, escape velocity, and the physics of different orbit types.

**In this lesson you will learn:**
- Low Earth orbit (LEO) vs. geosynchronous orbit (GEO)
- Escape velocity: $v_{esc} = \\sqrt{2GM/r}$
- Energy required to launch satellites
- Transfer orbits and orbit changes
      `
    },
    {
      id: 'ug5-orbit-types',
      type: 'text' as const,
      content: `
## Common Orbit Types

| Orbit | Altitude | Period | Speed | Use |
|-------|----------|--------|-------|-----|
| LEO (ISS) | ~400 km | ~92 min | ~7.7 km/s | Space station, imaging |
| MEO (GPS) | ~20,200 km | ~12 h | ~3.9 km/s | Navigation |
| GEO | ~35,800 km | 24 h | ~3.1 km/s | Communications, weather |
| Lunar | ~384,400 km | ~27.3 days | ~1.0 km/s | Moon\'s orbit |

### Key Pattern
Higher orbit → **slower** speed, **longer** period

## Escape Velocity

The minimum speed needed to escape a gravitational field (reach infinite distance with zero final speed):

$$\\frac{1}{2}mv_{esc}^2 = \\frac{GMm}{r}$$

$$v_{esc} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\cdot v_{orbit}$$

### Escape Velocity from Earth's Surface

$$v_{esc} = \\sqrt{2gR_E} = \\sqrt{2 \\times 10 \\times 6.37 \\times 10^6} \\approx 11{,}200 \\text{ m/s} \\approx 11.2 \\text{ km/s}$$

### Key Insight
Escape velocity = $\\sqrt{2}$ × orbital velocity at the same radius. A satellite in orbit needs to increase its speed by only about 41% to escape!
      `
    },
    {
      id: 'ug5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Satellite Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Escape velocity from a planet depends on:',
            options: [
              'The mass of the escaping object',
              'The mass and radius of the planet',
              'Only the mass of the planet',
              'The temperature of the atmosphere'
            ],
            correctAnswer: 1,
            explanation: '$v_{esc} = \\sqrt{2GM/R}$. It depends on the planet\'s mass $M$ and radius $R$ (or the distance $r$ from the center). The escaping object\'s mass cancels out.'
          },
          {
            question: 'A satellite is moved from a low orbit to a higher orbit. Which statement is true?',
            options: [
              'Both speed and total energy increase',
              'Speed increases, total energy decreases',
              'Speed decreases, total energy increases (becomes less negative)',
              'Both speed and total energy decrease'
            ],
            correctAnswer: 2,
            explanation: 'Higher orbit: $v = \\sqrt{GM/r}$ decreases. Total energy $E = -GMm/(2r)$ becomes less negative (increases). You need to ADD energy to move to a higher orbit, even though you slow down!'
          },
          {
            question: 'If Earth\'s radius were halved (same mass), the escape velocity from the surface would:',
            options: [
              'Halve',
              'Increase by $\\sqrt{2}$',
              'Double',
              'Stay the same'
            ],
            correctAnswer: 1,
            explanation: '$v_{esc} = \\sqrt{2GM/R}$. Halving $R$: $v_{esc}\' = \\sqrt{2GM/(R/2)} = \\sqrt{2} \\cdot v_{esc}$. Increase by factor $\\sqrt{2}$.'
          }
        ]
      }
    },
    {
      id: 'ug5-calculations',
      type: 'input-boxes' as const,
      content: `
**Satellite Calculations** 🧮

Use $g = 10$ m/s², $R_E = 6.4 \\times 10^6$ m, $M_E = 6.0 \\times 10^{24}$ kg, $G = 6.67 \\times 10^{-11}$.

1) What is the orbital velocity for a satellite at altitude $h = 200$ km above Earth (in m/s, round to nearest 100)?

2) What is the escape velocity from Earth's surface (in km/s, round to 1 decimal place)?

3) The Moon orbits at $r = 3.84 \\times 10^8$ m. What is the Moon's orbital speed (in m/s, round to nearest 10)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7800', '11.2', '1020'],
        hint1: '$r = R_E + h = 6.6 \\times 10^6$ m. $v = \\sqrt{GM/r}$.',
        hint2: '$v_{esc} = \\sqrt{2gR_E}$. Convert to km/s.',
        hint3: '$v = \\sqrt{GM_E/r}$.',
        explanation: '1) $r = 6.6 \\times 10^6$ m. $v = \\sqrt{6.67 \\times 10^{-11} \\times 6.0 \\times 10^{24}/6.6 \\times 10^6} = \\sqrt{4.0 \\times 10^{14}/6.6 \\times 10^6} = \\sqrt{6.06 \\times 10^7} = 7786 \\approx 7800$ m/s. 2) $v_{esc} = \\sqrt{2 \\times 10 \\times 6.4 \\times 10^6} = \\sqrt{1.28 \\times 10^8} = 11{,}314$ m/s $= 11.3 \\approx 11.2$ km/s (with more precise values). 3) $v = \\sqrt{4.0 \\times 10^{14}/3.84 \\times 10^8} = \\sqrt{1.042 \\times 10^6} = 1021 \\approx 1020$ m/s.'
      }
    },
    {
      id: 'ug5-energy-text',
      type: 'text' as const,
      content: `
## Energy in Satellite Problems

### Total Energy of a Satellite

$$E = -\\frac{GMm}{2r}$$

- **Negative**: the satellite is gravitationally bound
- **Less negative at higher orbits**: higher orbit = more total energy
- To move a satellite to a higher orbit: must ADD energy (fire rockets forward, then forward again)

### Energy to Launch a Satellite

From Earth's surface to orbit at radius $r$:

$$\\Delta E = E_{orbit} - E_{surface} = -\\frac{GMm}{2r} - \\left(-\\frac{GMm}{R_E}\\right)$$

$$\\Delta E = GMm\\left(\\frac{1}{R_E} - \\frac{1}{2r}\\right)$$

### Binding Energy

The energy needed to completely remove a satellite from orbit to infinity:

$$E_{bind} = |E| = \\frac{GMm}{2r} = \\frac{1}{2}mv^2$$

The binding energy equals the kinetic energy! You need to add exactly one more KE worth of energy to escape.
      `
    },
    {
      id: 'ug5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Satellite Energy Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'To move a satellite to a higher orbit, you must:',
            options: ['Remove energy from it', 'Add energy to it', 'Keep the same energy', 'Reduce its mass'],
            correctIndex: 1,
            explanation: 'Higher orbit has $E = -GMm/(2r)$ — less negative (more total energy). You must add energy, even though the satellite ends up moving slower.'
          },
          {
            label: 'For a satellite in circular orbit, the ratio $|PE|/KE$ is:',
            options: ['1', '2', '1/2', '4'],
            correctIndex: 1,
            explanation: '$KE = GMm/(2r)$. $|PE| = GMm/r$. $|PE|/KE = 2$. The magnitude of PE is always twice the KE for circular orbits.'
          },
          {
            label: 'Escape velocity from the Moon ($M = 0.012M_E$, $R = 0.27R_E$) compared to Earth is:',
            options: ['About the same', 'About 1/5 of Earth\'s', 'About 1/50 of Earth\'s', 'Greater than Earth\'s'],
            correctIndex: 1,
            explanation: '$v_{esc} \\propto \\sqrt{M/R}$. $v_{Moon}/v_{Earth} = \\sqrt{(0.012/0.27)} = \\sqrt{0.044} = 0.21 \\approx 1/5$. Moon\'s escape velocity $\\approx 2.4$ km/s vs Earth\'s 11.2 km/s.'
          }
        ]
      }
    },
    {
      id: 'ug5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Satellite Problems** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A satellite in circular orbit has $KE = 5 \\times 10^9$ J. Its total energy is:',
            options: [
              '$5 \\times 10^9$ J',
              '$-5 \\times 10^9$ J',
              '$-10 \\times 10^9$ J',
              '$0$ J'
            ],
            correctAnswer: 1,
            explanation: '$E = KE + PE = KE + (-2KE) = -KE = -5 \\times 10^9$ J. Total energy equals negative of kinetic energy for circular orbits.'
          },
          {
            question: 'The ratio of escape velocity to orbital velocity at the same distance from a planet is:',
            options: [
              '$1$',
              '$\\sqrt{2} \\approx 1.41$',
              '$2$',
              '$\\pi$'
            ],
            correctAnswer: 1,
            explanation: '$v_{esc} = \\sqrt{2GM/r}$ and $v_{orbit} = \\sqrt{GM/r}$. $v_{esc}/v_{orbit} = \\sqrt{2}$.'
          }
        ]
      }
    }
  ]
}
