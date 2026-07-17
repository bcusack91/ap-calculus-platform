export const physics1UniversalGravitationPart7Data = {
  topicSlug: 'universal-gravitation',
  sections: [
    {
      id: 'ug7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Universal Gravitation**

This final lesson brings together everything from universal gravitation for AP exam preparation. We'll cover the most tested question types, common mistakes, and strategies for both multiple choice and free response.

**In this lesson you will:**
- Tackle AP-style multiple choice questions
- Practice FRQ-style derivations
- Review the complete gravitation toolkit
- Master proportional reasoning — the #1 AP skill for gravitation
      `
    },
    {
      id: 'ug7-toolkit',
      type: 'text' as const,
      content: `
## Complete Gravitation Toolkit

### Essential Formulas

| Formula | Name |
|---------|------|
| $F = GMm/r^2$ | Universal gravitation |
| $g = GM/r^2$ | Gravitational field |
| $v = \\sqrt{GM/r}$ | Orbital velocity |
| $T = 2\\pi\\sqrt{r^3/(GM)}$ | Orbital period |
| $T_1^2/T_2^2 = r_1^3/r_2^3$ | Kepler's 3rd Law (ratio form) |
| $v_{esc} = \\sqrt{2GM/r}$ | Escape velocity |
| $E = -GMm/(2r)$ | Total orbital energy |
| $g_{surface} = GM/R^2$ | Surface gravity |

### The Power of Proportional Reasoning

On the AP exam, most gravitation questions test **proportional reasoning** — not plug-and-chug. Know these:

| If you change... | Force changes by... | $g$ changes by... | $v_{orbit}$ changes by... | $T$ changes by... |
|-----------------|---------------------|-------------------|--------------------------|-------------------|
| $r \\rightarrow 2r$ | $1/4$ | $1/4$ | $1/\\sqrt{2}$ | $2\\sqrt{2}$ |
| $M \\rightarrow 2M$ | $2$ | $2$ | $\\sqrt{2}$ | $1/\\sqrt{2}$ |
| $r \\rightarrow 3r$ | $1/9$ | $1/9$ | $1/\\sqrt{3}$ | $3\\sqrt{3}$ |
      `
    },
    {
      id: 'ug7-common-mistakes',
      type: 'text' as const,
      content: `
## Common AP Mistakes

### Mistake 1: Using altitude instead of orbital radius
- $r$ is measured from the **center** of the planet
- $r = R_{planet} + h_{altitude}$
- ALWAYS add the planet's radius!

### Mistake 2: Confusing $g$ and $G$
- $G = 6.67 \\times 10^{-11}$ — universal constant, same everywhere
- $g$ — local gravitational field strength, varies with location

### Mistake 3: Thinking astronauts are "outside gravity"
- The ISS at 400 km altitude: $g \\approx 8.7$ $m/s^{2}$ (only 11% less than surface!)
- Astronauts float because they\'re in **free fall**, not because gravity is absent

### Mistake 4: Wrong proportional reasoning with $v$ and $T$
- $v \\propto 1/\\sqrt{r}$ (NOT $1/r$)
- $T \\propto r^{3/2}$ (NOT $r$ or $r^2$)

### Mistake 5: Drawing centripetal force separately from gravity
- For orbiting objects, gravity IS the centripetal force
- Don't draw both on a free body diagram
      `
    },
    {
      id: 'ug7-ap-mc',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Multiple Choice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Planet X has 3 times Earth\'s mass and 3 times Earth\'s radius. The ratio $g_X/g_E$ is:',
            options: [
              '1/3',
              '1',
              '3',
              '9'
            ],
            correctAnswer: 0,
            explanation: '$g = GM/R^2$. $g_X/g_E = (3M_E/(3R_E)^2)/(M_E/R_E^2) = 3M_E/(9R_E^2) \\times R_E^2/M_E = 3/9 = 1/3$.'
          },
          {
            question: 'A satellite orbits Earth in 4 hours. If its orbital radius were doubled, its new period would be:',
            options: [
              '$4\\sqrt{2}$ hours',
              '$8$ hours',
              '$8\\sqrt{2}$ hours',
              '$16$ hours'
            ],
            correctAnswer: 2,
            explanation: '$T \\propto r^{3/2}$. $T\' = 4(2)^{3/2} = 4 \\times 2\\sqrt{2} = 8\\sqrt{2} \\approx 11.3$ hours.'
          },
          {
            question: 'The gravitational force between Earth and a 1 kg object at Earth\'s surface is about 10 N. The gravitational force between Earth and the Moon ($7.35 \\times 10^{22}$ kg, distance $3.84 \\times 10^8$ m) is about $2 \\times 10^{20}$ N. This means the gravitational field at the Moon\'s location is approximately:',
            options: [
              '$2 \\times 10^{20}$ N/kg',
              '$0.003$ N/kg',
              '$10$ N/kg',
              '$2.7 \\times 10^{-3}$ N/kg'
            ],
            correctAnswer: 3,
            explanation: '$g = F/m = 2 \\times 10^{20}/(7.35 \\times 10^{22}) = 2.72 \\times 10^{-3}$ N/kg. Earth\'s gravitational field at the Moon\'s distance is very weak.'
          }
        ]
      }
    },
    {
      id: 'ug7-frq-practice',
      type: 'text' as const,
      content: `
## FRQ Practice

### Sample FRQ: "Weighing Jupiter"

*Astronomers observe that Jupiter\'s moon Io orbits at radius $r$ with period $T$.*

**(a) Derive an expression for Jupiter\'s mass in terms of $r$, $T$, and fundamental constants.**

Gravity provides centripetal force:
$$\\frac{GM_J m}{r^2} = \\frac{4\\pi^2 m r}{T^2}$$

Cancel $m$:
$$\\frac{GM_J}{r^2} = \\frac{4\\pi^2 r}{T^2}$$

$$M_J = \\frac{4\\pi^2 r^3}{GT^2}$$

**(b) If Europa orbits at $r_E = 1.59r_{Io}$, find the ratio $T_E/T_{Io}$.**

$$\\frac{T_E^2}{T_{Io}^2} = \\frac{r_E^3}{r_{Io}^3} = (1.59)^3 = 4.02$$

$$T_E/T_{Io} = \\sqrt{4.02} = 2.00$$

**(c) Does the mass of the moon matter? Justify.**

No. The moon\'s mass cancels in the derivation (Step 2 above). Orbital properties depend only on the central body\'s mass and the orbital radius, not the orbiting body\'s mass. This is analogous to all objects falling with the same acceleration $g$ near Earth\'s surface.
      `
    },
    {
      id: 'ug7-ap-calculations',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 🧮

1) Saturn\'s moon Titan orbits at $r = 1.22 \\times 10^9$ m with $T = 15.95$ days. Calculate Saturn\'s mass (in kg, express as $X \\times 10^{26}$ — give $X$ to 3 significant figures). Use $G = 6.67 \\times 10^{-11}$.

2) A planet has mass $5M_E$ and radius $2R_E$. What is the escape velocity from this planet's surface as a multiple of Earth\'s escape velocity? (round to 3 significant figures)

3) Two satellites orbit Earth. Satellite A has period 6 hours and Satellite B has period 24 hours. What is the ratio $r_B/r_A$ (round to 3 significant figures)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.7', '1.58', '2.52'],
        hint1: 'Use $M = 4\\pi^2 r^3/(GT^2)$. Don\'t forget to convert $T$ from days to seconds first.',
        hint2: 'Escape velocity scales as $v_{esc} \\propto \\sqrt{M/R}$. Write the ratio $v_P/v_E$ in terms of $M_E$ and $R_E$.',
        hint3: 'Kepler\'s Third Law gives you the ratio of orbital radii from the ratio of periods: $r_B/r_A = (T_B/T_A)^{2/3}$.',
        explanation: '1) $T = 15.95 \\times 86400 = 1.378 \\times 10^6$ s. $M = 4\\pi^2(1.22 \\times 10^9)^3/(6.67 \\times 10^{-11}(1.378 \\times 10^6)^2) = 39.48 \\times 1.816 \\times 10^{27}/(6.67 \\times 10^{-11} \\times 1.899 \\times 10^{12}) = 7.17 \\times 10^{28}/1.267 \\times 10^{2} = 5.66 \\times 10^{26}$. $X = 5.7$. 2) $v_{esc} \\propto \\sqrt{M/R}$. $v_P/v_E = \\sqrt{5M_E/(2R_E) \\times R_E/M_E} = \\sqrt{5/2} = \\sqrt{2.5} = 1.581 \\approx 1.58$. 3) $r_B/r_A = (24/6)^{2/3} = 4^{2/3} = (2^2)^{2/3} = 2^{4/3} = 2.52$.'
      }
    },
    {
      id: 'ug7-conceptual-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Conceptual Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If Earth\'s mass were somehow doubled but its radius stayed the same, the orbital speed of the Moon would:',
            options: ['Double', 'Increase by $\\sqrt{2}$', 'Stay the same', 'Halve'],
            correctIndex: 1,
            explanation: '$v = \\sqrt{GM/r}$. Doubling $M$: $v\' = \\sqrt{2}v$.'
          },
          {
            label: 'An astronaut in orbit is "weightless" because:',
            options: ['There is no gravity in space', 'The astronaut and station are in free fall together', 'Centrifugal force cancels gravity', 'They are too far from Earth'],
            correctIndex: 1,
            explanation: 'Both the astronaut and station accelerate toward Earth at the same rate ($g$ at that altitude). There\'s no relative acceleration → no normal force → no sensation of weight.'
          },
          {
            label: 'Plotting $T^2$ vs $r^3$ for Jupiter\'s moons compared to Saturn\'s moons would give:',
            options: ['The same line', 'Two different straight lines through the origin', 'A single curve', 'Parallel lines'],
            correctIndex: 1,
            explanation: 'Both are linear ($T^2 = (4\\pi^2/GM)r^3$), but the slopes differ because Jupiter and Saturn have different masses. Jupiter\'s line has a shallower slope (larger $M$, so smaller $4\\pi^2/(GM)$).'
          }
        ]
      }
    },
    {
      id: 'ug7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final Exit Quiz — Universal Gravitation** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best summarizes the relationship between gravity and circular orbits?',
            options: [
              'Gravity pushes satellites into orbit',
              'Gravity provides the centripetal force that keeps satellites in circular orbits',
              'Satellites orbit because they are beyond Earth\'s gravitational field',
              'Gravity and centripetal force are two separate forces acting on a satellite'
            ],
            correctAnswer: 1,
            explanation: 'Gravity is the centripetal force for orbiting objects. It pulls the satellite toward the center of its orbit (toward the planet), providing the exact centripetal acceleration needed for circular motion.'
          },
          {
            question: 'A binary star system has two stars of equal mass orbiting their center of mass. If the distance between them decreases, the orbital period:',
            options: [
              'Increases',
              'Decreases',
              'Stays the same',
              'Becomes infinite'
            ],
            correctAnswer: 1,
            explanation: 'Closer together → stronger gravitational force → faster orbital speed → shorter period. From Kepler\'s Law: $T \\propto r^{3/2}$. Smaller $r$ → smaller $T$.'
          }
        ]
      }
    }
  ]
}
