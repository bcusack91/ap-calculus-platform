export const physics1UniversalGravitationPart3Data = {
  topicSlug: 'universal-gravitation',
  sections: [
    {
      id: 'ug3-intro',
      type: 'text' as const,
      content: `
# 🛰️ Orbital Motion: Gravity as Centripetal Force

**Part 3 of 7 — Universal Gravitation**

The most beautiful connection in physics: the gravitational force provides the centripetal force for orbital motion. This insight unifies terrestrial and celestial physics.

**In this lesson you will learn:**
- How gravity acts as centripetal force for orbiting objects
- Derive orbital velocity: $v = \\sqrt{GM/r}$
- Why orbital speed is independent of satellite mass
- The relationship between orbital radius and speed
      `
    },
    {
      id: 'ug3-derivation',
      type: 'text' as const,
      content: `
## Gravity = Centripetal Force

For a satellite of mass $m$ orbiting a planet of mass $M$ at radius $r$:

$$F_{gravity} = F_{centripetal}$$

$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

### Solving for Orbital Velocity

Cancel $m$ (satellite mass doesn't matter!):

$$\\frac{GM}{r} = v^2$$

$$v = \\sqrt{\\frac{GM}{r}}$$

### Key Insights

1. **Mass of satellite doesn't matter**: A feather and a bowling ball orbit at the same speed at the same radius!

2. **Higher orbit = slower speed**: $v \\propto 1/\\sqrt{r}$
   - Doubling orbital radius → speed decreases by factor $\\sqrt{2}$

3. **Only one speed works for each radius**: You can\'t orbit at any speed you want — the speed is determined by $r$ and $M$

### Orbital Period

$$T = \\frac{2\\pi r}{v} = \\frac{2\\pi r}{\\sqrt{GM/r}} = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$

### Energy in Orbit

$$KE = \\frac{1}{2}mv^2 = \\frac{GMm}{2r}$$

$$PE = -\\frac{GMm}{r}$$

$$E_{total} = KE + PE = -\\frac{GMm}{2r}$$

Total energy is **negative** (bound orbit) and equals half the PE.
      `
    },
    {
      id: 'ug3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Orbital Motion Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A satellite\'s orbital speed does not depend on:',
            options: [
              'The mass of the planet it orbits',
              'The orbital radius',
              'The mass of the satellite itself',
              'The gravitational constant $G$'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{GM/r}$. The satellite\'s mass $m$ canceled out! Only the planet\'s mass $M$ and orbital radius $r$ matter.'
          },
          {
            question: 'If a satellite moves to a higher orbit, its orbital speed:',
            options: [
              'Increases',
              'Decreases',
              'Stays the same',
              'Depends on the satellite\'s mass'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{GM/r}$. Larger $r$ → smaller $v$. Higher orbits are slower. This is why the Moon orbits much more slowly than the ISS.'
          },
          {
            question: 'A satellite is in circular orbit. If its speed were suddenly doubled (by a rocket), it would:',
            options: [
              'Stay in the same circular orbit',
              'Move to a higher circular orbit',
              'Escape the planet\'s gravity',
              'Crash into the planet'
            ],
            correctAnswer: 2,
            explanation: 'Escape velocity is $v_{esc} = \\sqrt{2}v_{orbit}$. Doubling the orbital speed gives $2v_{orbit} > \\sqrt{2}v_{orbit}$, so the satellite exceeds escape velocity and leaves.'
          }
        ]
      }
    },
    {
      id: 'ug3-calculations',
      type: 'input-boxes' as const,
      content: `
**Orbital Calculations** 🧮

Use $G = 6.67 \\times 10^{-11}$ N·m²/kg², $M_E = 5.97 \\times 10^{24}$ kg, $R_E = 6.37 \\times 10^6$ m.

1) What is the orbital speed of the ISS at altitude 400 km above Earth's surface (in m/s, round to nearest 100)? Hint: $r = R_E + h$.

2) What is the orbital period of the ISS (in minutes, round to nearest whole number)?

3) What orbital radius gives a period of exactly 24 hours (geosynchronous orbit)? Express as a multiple of $R_E$ (round to 3 significant figures).
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7700', '92', '6.6'],
        hint1: '$r = 6.37 \\times 10^6 + 0.4 \\times 10^6 = 6.77 \\times 10^6$ m. $v = \\sqrt{GM/r}$.',
        hint2: '$T = 2\\pi r/v$. Convert to minutes.',
        hint3: 'From $T = 2\\pi\\sqrt{r^3/(GM)}$, solve for $r$. $T = 86400$ s.',
        explanation: '1) $r = 6.77 \\times 10^6$ m. $v = \\sqrt{6.67 \\times 10^{-11} \\times 5.97 \\times 10^{24}/6.77 \\times 10^6} = \\sqrt{3.98 \\times 10^{14}/6.77 \\times 10^6} = \\sqrt{5.88 \\times 10^7} = 7668 \\approx 7700$ m/s. 2) $T = 2\\pi(6.77 \\times 10^6)/7668 = 4.254 \\times 10^7/7668 = 5547$ s $= 92.5 \\approx 92$ min. 3) $r^3 = GMT^2/(4\\pi^2) = 3.98 \\times 10^{14}(86400)^2/(39.48) = 3.98 \\times 10^{14} \\times 7.46 \\times 10^9/39.48 = 7.52 \\times 10^{22}$. $r = (7.52 \\times 10^{22})^{1/3} = 4.22 \\times 10^7$ m. $r/R_E = 4.22 \\times 10^7/6.37 \\times 10^6 = 6.63 \\approx 6.6$.'
      }
    },
    {
      id: 'ug3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Orbital Relationships** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A geosynchronous satellite appears to hover over one spot because:',
            options: ['It has zero orbital velocity', 'Its orbital period equals Earth\'s rotation period (24 h)', 'It is outside Earth\'s gravitational field', 'It is held up by atmospheric pressure'],
            correctIndex: 1,
            explanation: 'A geosynchronous satellite orbits with $T = 24$ hours, matching Earth\'s rotation. It appears stationary from the ground.'
          },
          {
            label: 'Two satellites orbit the same planet. Satellite A has orbital radius $r$ and Satellite B has radius $4r$. The ratio $v_A/v_B$ is:',
            options: ['1/2', '1', '2', '4'],
            correctIndex: 2,
            explanation: '$v \\propto 1/\\sqrt{r}$. $v_A/v_B = \\sqrt{4r/r} = \\sqrt{4} = 2$. The inner satellite is twice as fast.'
          },
          {
            label: 'An astronaut throws a wrench while in orbit. The wrench will:',
            options: ['Fall to Earth', 'Float away into space', 'Also orbit (at nearly the same orbital parameters)', 'Stop moving immediately'],
            correctIndex: 2,
            explanation: 'The wrench is already in orbit at the right speed for that radius. A gentle throw barely changes its velocity, so it continues orbiting alongside the station.'
          }
        ]
      }
    },
    {
      id: 'ug3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Orbital Motion** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Mercury orbits closer to the Sun than Earth does. Compared to Earth, Mercury\'s orbital speed is:',
            options: [
              'Slower',
              'The same',
              'Faster',
              'Cannot determine'
            ],
            correctAnswer: 2,
            explanation: '$v = \\sqrt{GM_{Sun}/r}$. Mercury has smaller $r$, so it has larger $v$. Closer planets orbit faster.'
          },
          {
            question: 'If the Sun\'s mass suddenly doubled (hypothetically), Earth\'s required orbital speed to maintain the same orbit would:',
            options: [
              'Stay the same',
              'Increase by factor $\\sqrt{2}$',
              'Double',
              'Decrease'
            ],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{GM/r}$. Doubling $M$: $v\' = \\sqrt{2GM/r} = \\sqrt{2} \\cdot v$. Speed increases by $\\sqrt{2} \\approx 1.41$.'
          }
        ]
      }
    }
  ]
}
