export const physics1FluidsBuoyancyPart4Data = {
  topicSlug: 'fluids-buoyancy',
  sections: [
    {
      id: 'fb4-intro',
      type: 'text' as const,
      content: `
# 🪨 Submerged Object Calculations

**Part 4 of 7 — Fluids: Buoyancy**

Now we'll work problems where the object is FULLY submerged — held under, tied to a string, or sitting on the bottom. The key is balancing weight, buoyancy, and any other vertical forces (tension, normal, applied).

**In this lesson you will learn:**
- The free-body diagram for a submerged object
- Apparent weight: $W_{app} = W - F_b$
- How to find the tension in a rope holding a buoy under
- Submerged-mass scale problems
      `
    },
    {
      id: 'fb4-fbd',
      type: 'text' as const,
      content: `
## Submerged Free-Body Diagram

For an object hanging or held underwater, three vertical forces:

$$\\sum F_y = F_b - W + T = m a$$

where $T$ can be tension (up if rope pulls up, down if rope holds object down), normal force from a surface, or applied force.

### Apparent Weight

If you weigh a submerged object on a spring scale, the scale reads:

$$W_{app} = W - F_b = mg - \\rho_{fluid}\\, g\\, V$$

### Object Tied DOWN (more dense than fluid would float, but is held under)

$$T_{down} = F_b - W$$ (rope pulls down to keep it under)

### Object Tied UP (heavier than fluid; would sink, but is held)

$$T_{up} = W - F_b$$ (rope holds it up against gravity, helped by buoyancy)

### Object Resting on Bottom

$$N = W - F_b$$ (normal force from bottom)

If $W < F_b$ → impossible to rest (would float up).
      `
    },
    {
      id: 'fb4-mc',
      type: 'multiple-choice' as const,
      content: `
**Submerged Object Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 30 N rock is fully submerged. Buoyancy on it is 8 N. The reading on a spring scale holding it is:',
            options: ['38 N', '30 N', '22 N', '8 N'],
            correctAnswer: 2,
            explanation: 'Apparent weight = $W - F_b = 30 - 8 = 22$ N.'
          },
          {
            question: 'A buoy of density 200 $kg/m^{3}$ is tied to the bottom of a 10 m deep pool. The rope tension points:',
            options: ['Up (toward the buoy)', 'Down (toward the bottom)', 'Sideways', 'Zero'],
            correctAnswer: 1,
            explanation: 'The buoy wants to rise (low density). The rope pulls DOWN on the buoy (and up on the bottom anchor) to keep it submerged.'
          },
          {
            question: 'For a submerged stone resting on a pool bottom, the normal force from the floor is:',
            options: [
              '$W$ (just weight)',
              '$W + F_b$ (weight plus buoyancy)',
              '$W - F_b$ (weight minus buoyancy)',
              'Zero'
            ],
            correctAnswer: 2,
            explanation: 'Vertical equilibrium: $N + F_b = W \\Rightarrow N = W - F_b$.'
          }
        ]
      }
    },
    {
      id: 'fb4-input',
      type: 'input-boxes' as const,
      content: `
**Submerged Calculations** 🧮 (g = 10, $\\rho_w = 1000$)

1) A solid metal ball of mass 4.0 kg and volume $5.0\\times10^{-4}$ $m^{3}$ is fully submerged. Apparent weight on a spring scale (N)?

2) A foam buoy of mass 2.0 kg and volume 0.020 $m^{3}$ is held UNDER water by a rope. Tension in rope (N)?

3) A 50 N weight rests on a pool bottom. It displaces $2.0\\times10^{-3}$ $m^{3}$. Normal force from the pool bottom (N)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['35', '180', '30'],
        hint1: '$W_{app} = mg - \\rho g V$.',
        hint2: '$T = F_b - W$ (rope pulls down).',
        hint3: '$N = W - F_b$.',
        explanation: '1) $W_{app} = 4(10) - 1000(10)(5.0\\times10^{-4}) = 40 - 5 = 35$ N. 2) $F_b = 1000(10)(0.020) = 200$ N, $W = 20$ N, $T = 200 - 20 = 180$ N. 3) $F_b = 1000(10)(2.0\\times10^{-3}) = 20$ N, $N = 50 - 20 = 30$ N.'
      }
    },
    {
      id: 'fb4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Submerged Reasoning** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A scale reads 50 N for an object in air, 35 N when submerged in water. The buoyant force on it is:',
            options: ['15 N', '35 N', '50 N', '85 N'],
            correctIndex: 0,
            explanation: '$F_b = W_{air} - W_{app} = 50 - 35 = 15$ N. Classic Archimedes "lost weight" calculation.'
          },
          {
            label: 'Underwater, a steel anchor weighs APPARENTLY:',
            options: ['Same as in air', 'Slightly less than in air', 'Slightly more than in air', 'Zero'],
            correctIndex: 1,
            explanation: 'Buoyancy reduces apparent weight by $\\rho_w g V$ — a small but nonzero amount.'
          },
          {
            label: 'A balloon released underwater accelerates upward because:',
            options: ['Air is heavy', '$F_b > W$', '$W > F_b$', 'Tension pulls it'],
            correctIndex: 1,
            explanation: 'Air-filled balloon has very low avg density → $F_b \\gg W$ → strong net upward force.'
          },
          {
            label: 'A 1 kg block fully submerged with $V = 0.001$ $m^{3}$ in water — its apparent weight (g = 10):',
            options: ['Zero (neutral)', '5 N', '10 N', '20 N'],
            correctIndex: 0,
            explanation: '$W = 10$ N. $F_b = 1000(10)(0.001) = 10$ N. $W_{app} = 0$. Density matches water exactly → neutrally buoyant.'
          }
        ]
      }
    },
    {
      id: 'fb4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Submerged Objects** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 6.0-kg copper block ($V = 6.7\\times10^{-4}$ $m^{3}$) hangs from a string in water. Tension in the string (g = 10)?',
            options: [
              '60 N',
              '53.3 N',
              '6.7 N',
              '66.7 N'
            ],
            correctAnswer: 1,
            explanation: '$T = W - F_b = 60 - 1000(10)(6.7\\times10^{-4}) = 60 - 6.7 = 53.3$ N.'
          },
          {
            question: 'A 0.50-kg air-filled ball of volume $5.0\\times10^{-3}$ $m^{3}$ is HELD UNDER water by a string anchored to the bottom. Tension in the string (g = 10)?',
            options: [
              '5 N',
              '45 N',
              '50 N',
              '55 N'
            ],
            correctAnswer: 1,
            explanation: '$F_b = 1000(10)(5.0\\times10^{-3}) = 50$ N. $W = 5$ N. $T_{down} = F_b - W = 50 - 5 = 45$ N.'
          }
        ]
      }
    }
  ]
}
