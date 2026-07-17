export const physics1FluidsBuoyancyPart2Data = {
  topicSlug: 'fluids-buoyancy',
  sections: [
    {
      id: 'fb2-intro',
      type: 'text' as const,
      content: `
# 🏛 Archimedes' Principle

**Part 2 of 7 — Fluids: Buoyancy**

Archimedes (~250 BC) realized that the buoyant force equals the weight of the fluid displaced. This single equation is the engine of every floating/sinking problem on the AP.

**In this lesson you will learn:**
- The exact statement of Archimedes' Principle
- The equation $F_b = \\rho_{fluid}\\, g\\, V_{disp}$
- How to identify $V_{disp}$ in three cases (fully submerged, floating, partial)
- Common pitfalls (substituting object density)
      `
    },
    {
      id: 'fb2-statement',
      type: 'text' as const,
      content: `
## Archimedes' Principle

> **The buoyant force on an object is equal in magnitude to the weight of the fluid the object displaces.**

$$\\boxed{F_b = \\rho_{fluid}\\, g\\, V_{disp}}$$

- $\\rho_{fluid}$: density of the SURROUNDING fluid $(kg/m^{3})$
- $V_{disp}$: volume of fluid displaced $(m^{3})$
- $g = 9.8$ $m/s^{2}$ (or 10 in many AP problems)

### The Three Scenarios

| Scenario | $V_{disp}$ |
|----------|-----------|
| Fully submerged | = total object volume $V_{obj}$ |
| Floating, partially submerged | = volume of object BELOW water |
| Floating with stuff on top | = whatever volume of water is pushed aside |

### Why "Displaced Volume" — Not Object Volume

If only half a block is underwater, only that half displaces water. The portion above the surface displaces **air**, which contributes nearly nothing to buoyancy (very small $\\rho_{air}$).

### Quick Numerical Anchor
- 1 $m^{3}$ of water weighs ~10,000 N (using $g \\approx 10$, $\\rho = 1000$).
- So 1 $m^{3}$ submerged in water → buoyant force ~10,000 N.
      `
    },
    {
      id: 'fb2-mc',
      type: 'multiple-choice' as const,
      content: `
**Archimedes' Principle Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Archimedes\' Principle states the buoyant force equals:',
            options: [
              'The weight of the object',
              'The weight of the displaced fluid',
              'The volume of the object',
              'Atmospheric pressure × cross-section'
            ],
            correctAnswer: 1,
            explanation: '$F_b = W_{displaced\\ fluid} = \\rho_{fluid} g V_{disp}$.'
          },
          {
            question: 'A block of volume 0.05 $m^{3}$ is fully submerged in water. Its $V_{disp}$ is:',
            options: [
              'Less than 0.05 $m^{3}$',
              '0.05 $m^{3}$',
              'More than 0.05 $m^{3}$',
              'Depends on weight'
            ],
            correctAnswer: 1,
            explanation: 'Fully submerged → $V_{disp} = V_{obj}$.'
          },
          {
            question: 'A wooden block of volume 0.10 $m^{3}$ floats with 30% submerged. $V_{disp}$ equals:',
            options: [
              '0.030 $m^{3}$',
              '0.070 $m^{3}$',
              '0.10 $m^{3}$',
              '0.13 $m^{3}$'
            ],
            correctAnswer: 0,
            explanation: 'Only the submerged 30% displaces water: $V_{disp} = 0.30 \\times 0.10 = 0.030$ $m^{3}$.'
          }
        ]
      }
    },
    {
      id: 'fb2-input',
      type: 'input-boxes' as const,
      content: `
**Archimedes Calculations** 🧮 (g = 10, $\\rho_w = 1000$, $\\rho_{sw} = 1030$)

1) A 0.30 $m^{3}$ object is fully submerged in fresh water. Buoyant force (N)?

2) Same object, this time fully submerged in seawater. Buoyant force (N)?

3) A boat displaces 8.0 $m^{3}$ of water when floating. Its weight (N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3000', '3090', '80000'],
        hint1: '$F_b = \\rho g V$.',
        hint2: 'Same V, denser fluid.',
        hint3: 'Floating ⇒ $W = F_b$.',
        explanation: '1) $F_b = 1000(10)(0.30) = 3000$ N. 2) $F_b = 1030(10)(0.30) = 3090$ N. 3) Floating: $W = F_b = \\rho_w g V_{disp} = 1000(10)(8.0) = 8.0\\times10^{4}$ N.'
      }
    },
    {
      id: 'fb2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Archimedes Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A block placed in oil ($\\rho = 800$) vs water ($\\rho = 1000$). The buoyant force in oil (compared to water) is:',
            options: ['Greater', 'Less', 'Same', 'Zero'],
            correctIndex: 1,
            explanation: 'Same $V_{disp}$, smaller $\\rho_{fluid}$ → smaller $F_b$.'
          },
          {
            label: 'Replacing fresh water with mercury ($\\rho ≈ 13600$) for the same submerged volume gives buoyancy:',
            options: ['Same', '13.6× less', '13.6× more', 'Negative'],
            correctIndex: 2,
            explanation: '$F_b$ is proportional to $\\rho_{fluid}$.'
          },
          {
            label: 'A submerged 1 kg lead ball and 1 kg cork ball (different volumes!) — buoyancy is:',
            options: ['Same on both', 'Greater on lead (denser)', 'Greater on cork (larger volume)', 'Zero on cork'],
            correctIndex: 2,
            explanation: 'Cork has much larger volume → much larger $V_{disp}$ → much larger $F_b$. Mass doesn\'t matter.'
          },
          {
            label: 'A floating object\'s buoyant force equals its:',
            options: ['Volume', 'Density', 'Weight', 'Surface area'],
            correctIndex: 2,
            explanation: 'Floating in equilibrium ⇒ $F_b = W_{obj}$.'
          }
        ]
      }
    },
    {
      id: 'fb2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Archimedes' Principle** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A fully submerged 5.0-kg object displaces $2.0\\times10^{-3}$ $m^{3}$ of water. Buoyant force on it (g = 10) is:',
            options: [
              '0.20 N',
              '20 N',
              '50 N',
              '200 N'
            ],
            correctAnswer: 1,
            explanation: '$F_b = 1000(10)(2.0\\times10^{-3}) = 20$ N. (Object weight = $50$ N — net 30 N down → it sinks.)'
          },
          {
            question: 'A floating boat with a total weight of 12,000 N displaces what volume of fresh water? (g = 10)',
            options: [
              '0.12 $m^{3}$',
              '1.2 $m^{3}$',
              '12 $m^{3}$',
              '120 $m^{3}$'
            ],
            correctAnswer: 1,
            explanation: 'Floating ⇒ $W = F_b = \\rho g V_{disp}$. $V_{disp} = 12000/(1000 \\cdot 10) = 1.2$ $m^{3}$.'
          }
        ]
      }
    }
  ]
}
