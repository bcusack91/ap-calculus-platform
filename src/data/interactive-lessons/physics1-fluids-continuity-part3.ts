export const physics1FluidsContinuityPart3Data = {
  topicSlug: 'fluids-continuity',
  sections: [
    {
      id: 'fc3-intro',
      type: 'text' as const,
      content: `
# 🔻 Pipe Narrowing & Speed

**Part 3 of 7 — Fluids: Continuity**

When fluid is forced through a smaller cross-section, it speeds up — sometimes dramatically. Engineers use this in nozzles, fire hoses, and Venturi tubes. AP problems often combine narrowing with depth changes.

**In this lesson you will learn:**
- Speed scaling with area ratios for circular pipes
- Why a fire-hose nozzle creates such a fast jet
- Combining radius changes with continuity
- Common units pitfalls (cm vs m)
      `
    },
    {
      id: 'fc3-pipes',
      type: 'text' as const,
      content: `
## Speed Scaling

For incompressible flow:

$$\\frac{v_2}{v_1} = \\frac{A_1}{A_2}$$

For **circular** cross-sections ($A = \\pi r^2$):

$$\\frac{v_2}{v_1} = \\left(\\frac{r_1}{r_2}\\right)^2$$

So halving the radius **quadruples** the speed.

### Example: Fire Hose

A fire hose with internal radius 2.5 cm carries water at 3 m/s. The nozzle constricts to radius 0.5 cm:

$$v_{nozzle} = 3 \\times \\left(\\frac{2.5}{0.5}\\right)^2 = 3 \\times 25 = 75 \\text{ m/s}$$

A 25× speed boost from a 5× radius reduction. (We've ignored Bernoulli effects on pressure here — Part 5–7.)

### Common Pitfalls

1. **Diameter vs radius**: $A = \\pi r^2 = \\pi (d/2)^2 = \\pi d^2/4$. The ratio $r_1/r_2 = d_1/d_2$ — same.
2. **cm vs m**: Always convert to consistent units OR use ratios (which cancel units).
3. **Single pipe vs branching**: This part is single-pipe only. Branching is Part 4.
      `
    },
    {
      id: 'fc3-mc',
      type: 'multiple-choice' as const,
      content: `
**Pipe Narrowing Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A pipe\'s radius shrinks by half. The fluid speed:',
            options: ['Halves', 'Stays same', 'Doubles', 'Quadruples'],
            correctAnswer: 3,
            explanation: '$A \\propto r^2$ → halving $r$ quarters $A$ → speed × 4.'
          },
          {
            question: 'A pipe widens by 10×. Speed in the wider section:',
            options: [
              '× 100',
              '× 10',
              '÷ 10',
              '÷ 100'
            ],
            correctAnswer: 3,
            explanation: 'Diameter × 10 → area × 100 → speed ÷ 100.'
          },
          {
            question: 'Two cross-sections of the same pipe, both circular, with $r_2 = 3 r_1$. The speed ratio $v_1 / v_2$ is:',
            options: ['1/9', '1/3', '3', '9'],
            correctAnswer: 3,
            explanation: '$v_2/v_1 = (r_1/r_2)^2 = 1/9$ → $v_1/v_2 = 9$.'
          }
        ]
      }
    },
    {
      id: 'fc3-input',
      type: 'input-boxes' as const,
      content: `
**Pipe Narrowing Calculations** 🧮

1) A pipe of radius 0.10 m carries water at 0.5 m/s. Pipe narrows to radius 0.05 m. New speed (m/s)?

2) A garden hose of inner diameter 2.0 cm runs at 1.0 m/s. Nozzle diameter 0.50 cm. Speed at nozzle (m/s)?

3) A pipe with $A_1 = 6.0\\times10^{-3}$ $m^{2}$ and $v_1 = 4.0$ m/s narrows to $A_2 = 1.0\\times10^{-3}$ $m^{2}$. New speed (m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '16', '24'],
        hint1: '$v_2 = v_1 (r_1/r_2)^2$.',
        hint2: '$v_2 = v_1 (d_1/d_2)^2$.',
        hint3: '$v_2 = v_1 A_1/A_2$.',
        explanation: '1) $v_2 = 0.5 \\times (0.10/0.05)^2 = 0.5 \\times 4 = 2$ m/s. 2) $v_2 = 1.0 \\times (2.0/0.50)^2 = 16$ m/s. 3) $v_2 = 4.0 \\times 6 = 24$ m/s.'
      }
    },
    {
      id: 'fc3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Narrowing Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Radius reduced by factor of 4. Speed multiplied by:',
            options: ['1/16', '1/4', '4', '16'],
            correctIndex: 3,
            explanation: 'Area $\\propto r^2$ — radius/4 → area/16 → speed × 16.'
          },
          {
            label: 'A nozzle on a hose creates a fast jet because:',
            options: ['Pressure inside increases dramatically', 'Continuity: smaller $A$ → larger $v$', 'Hose pumps harder', 'Air is forced in'],
            correctIndex: 1,
            explanation: 'Volume flow rate is constant; reducing $A$ at the nozzle forces $v$ to grow.'
          },
          {
            label: 'For a faucet flowing freely, the cross-section of the falling stream:',
            options: ['Stays constant', 'Grows downward', 'Shrinks downward (gravity speeds it up)', 'Oscillates'],
            correctIndex: 2,
            explanation: 'Speed grows due to gravity → continuity demands smaller $A$.'
          },
          {
            label: 'A pipe doubles in radius. The flow speed in the wider region:',
            options: ['Doubles', 'Halves', 'Quarters', 'Quadruples'],
            correctIndex: 2,
            explanation: 'Radius × 2 → area × 4 → speed ÷ 4.'
          }
        ]
      }
    },
    {
      id: 'fc3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Pipe Narrowing** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A horizontal pipe of inner diameter 6.0 cm carries water at 1.5 m/s. Speed in a section where the diameter is 2.0 cm?',
            options: [
              '0.17 m/s',
              '4.5 m/s',
              '13.5 m/s',
              '40.5 m/s'
            ],
            correctAnswer: 2,
            explanation: 'Speed × $(d_1/d_2)^2 = 1.5 \\times 9 = 13.5$ m/s.'
          },
          {
            question: 'A pipe carries 0.030 $m^{3}/s$ of water. In a section of radius 5 cm, the speed is approximately:',
            options: [
              '0.038 m/s',
              '3.8 m/s',
              '38 m/s',
              '380 m/s'
            ],
            correctAnswer: 1,
            explanation: '$A = \\pi (0.05)^2 ≈ 7.85\\times10^{-3}$ $m^{2}$. $v = Q/A = 0.030/7.85\\times10^{-3} ≈ 3.8$ m/s.'
          }
        ]
      }
    }
  ]
}
