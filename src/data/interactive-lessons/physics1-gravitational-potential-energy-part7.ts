export const physics1GravitationalPotentialEnergyPart7Data = {
  topicSlug: 'gravitational-potential-energy',
  sections: [
    {
      id: 'gp7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Gravitational Potential Energy**

This final lesson integrates all gravitational PE concepts: reference levels, conservative forces, work-PE relationships, KE ↔ PE conversions, and energy bar charts. Get ready for AP-level questions!
      `
    },
    {
      id: 'gp7-summary',
      type: 'text' as const,
      content: `
## Key Equations & Concepts

| Concept | Equation | Key Point |
|---------|----------|-----------|
| Gravitational PE | $PE_g = mgh$ | $h$ measured from reference level |
| Change in PE | $\\Delta PE_g = mg\\Delta h$ | Independent of reference level |
| Work by gravity | $W_g = -\\Delta PE_g$ | Positive when falling |
| Free fall speed | $v = \\sqrt{2gh}$ | Mass independent |
| Max height | $h = v_i^2/(2g)$ | Mass independent |
| Energy conservation | $KE_i + PE_i = KE_f + PE_f$ | No friction |
| With friction | $KE_i + PE_i = KE_f + PE_f + E_{\\text{th}}$ | $E_{\\text{th}} = |W_f|$ |

### Big Ideas

- PE is energy stored due to position in a gravitational field
- Only **changes** in PE are physically meaningful
- Gravity is **conservative**: work is path-independent
- Energy transformations: KE ↔ PE (conservative) and KE → thermal (non-conservative)
      `
    },
    {
      id: 'gp7-ap-conceptual',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Conceptual Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two identical balls are released from the same height on two different frictionless tracks. Track A is steep, Track B is gradual. At the bottom, their speeds are:',
            options: [
              'Ball A is faster (steeper = more acceleration)',
              'Ball B is faster (more time to accelerate)',
              'Equal (same height change = same energy)',
              'Cannot be determined without track shapes'
            ],
            correctAnswer: 2,
            explanation: 'Energy conservation: $mgh = \\frac{1}{2}mv^2$. Both have the same $h$, so both have the same $v$. The shape of the track doesn\'t matter — only the height!'
          },
          {
            question: 'A ball is launched at angle $\\theta$ above horizontal. At the top of its trajectory:',
            options: [
              'KE = 0 and PE is maximum',
              'KE > 0 (horizontal component) and PE is maximum',
              'Both KE and PE are maximum',
              'KE is maximum and PE is minimum'
            ],
            correctAnswer: 1,
            explanation: 'At the peak, the vertical velocity is zero, but the horizontal velocity ($v\\cos\\theta$) remains. So KE $= \\frac{1}{2}m(v\\cos\\theta)^2 > 0$. PE is at its maximum because height is maximum.'
          },
          {
            question: 'A pendulum swings from angle $\\theta_0$. If released from $2\\theta_0$ instead, the speed at the bottom:',
            options: [
              'Doubles',
              'More than doubles',
              'Less than doubles',
              'Stays the same'
            ],
            correctAnswer: 2,
            explanation: 'Height: $h = L(1 - \\cos\\theta)$. Speed: $v = \\sqrt{2gL(1-\\cos\\theta)}$. Doubling $\\theta$ does NOT double $(1-\\cos\\theta)$, so the speed less than doubles. (Cosine is nonlinear.)'
          }
        ]
      }
    },
    {
      id: 'gp7-ap-calculations',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 🧮

Use $g = 10$ m/s².

1) A roller coaster starts at rest at height 25 m and passes over a 10 m hill. What is its speed at the top of the 10 m hill (in m/s, to 1 decimal)?

2) A 3 kg ball is thrown upward at 16 m/s from a 5 m balcony. What is its maximum height above the ground (in m)?

3) A pendulum bob ($m = 0.5$ kg) is released from a height 0.45 m above its lowest point. What is its speed at the lowest point (in m/s)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17.3', '17.8', '3'],
        hint1: '$v = \\sqrt{2g(h_i - h_f)} = \\sqrt{2(10)(25-10)} = \\sqrt{300}$.',
        hint2: '$h_{\\text{above launch}} = v^2/(2g) = 256/20 = 12.8$ m. Total: $12.8 + 5$.',
        hint3: '$v = \\sqrt{2gh} = \\sqrt{2(10)(0.45)} = \\sqrt{9}$.',
        explanation: '1) $v = \\sqrt{300} = 17.32 \\approx 17.3$ m/s. 2) $h_{\\max} = 5 + 12.8 = 17.8$ m above ground. 3) $v = \\sqrt{9} = 3$ m/s.'
      }
    },
    {
      id: 'gp7-ap-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Review — Conceptual Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An object\'s PE depends on the reference level. Its change in PE:',
            options: ['Also depends on reference level', 'Does NOT depend on reference level', 'Is always positive', 'Is always negative'],
            correctIndex: 1,
            explanation: '$\\Delta PE = mg(h_f - h_i)$. The reference level shifts both $h_f$ and $h_i$ by the same amount, so $\\Delta h$ (and $\\Delta PE$) is unchanged.'
          },
          {
            label: 'Energy bar charts must show the same total height when:',
            options: ['Only conservative forces act', 'Including all forms of energy', 'Mass is constant', 'Velocity is constant'],
            correctIndex: 1,
            explanation: 'Total energy is always conserved. The bars (KE + PE + thermal + ...) must sum to the same total at every instant.'
          },
          {
            label: 'A ball launched at 45° from a cliff has both initial KE and PE. At ground level:',
            options: ['KE = initial KE', 'KE = initial KE + initial PE', 'KE < initial KE', 'PE = KE'],
            correctIndex: 1,
            explanation: 'At ground level, PE = 0 (reference). All energy is kinetic: $KE_f = KE_i + PE_i$ (no friction).'
          },
          {
            label: 'For a freely falling object, the speed at height $h/3$ compared to speed at the ground is:',
            options: ['$1/3$ as much', '$2/3$ as much', '$\\sqrt{2/3}$ as much', '$1/\\sqrt{3}$ as much'],
            correctIndex: 2,
            explanation: 'At height $h/3$: $v^2 = 2g(h - h/3) = 2g(2h/3)$. At ground: $v_g^2 = 2gh$. Ratio: $v/v_g = \\sqrt{2/3}$.'
          }
        ]
      }
    },
    {
      id: 'gp7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final AP Exit Quiz — Gravitational PE** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.2 kg ball is dropped from 5 m onto a spring. Just before touching the spring, the ball\'s KE is ($g = 10$ m/s²):',
            options: [
              '1 J',
              '5 J',
              '10 J',
              '20 J'
            ],
            correctAnswer: 2,
            explanation: 'All PE converts to KE: $KE = mgh = 0.2(10)(5) = 10$ J.'
          },
          {
            question: 'A block slides down a 45° incline of length 4 m with friction ($\\mu_k = 0.3$). Its speed at the bottom, starting from rest, is closest to ($g = 10$ m/s²):',
            options: [
              '5.3 m/s',
              '6.0 m/s',
              '6.6 m/s',
              '7.5 m/s'
            ],
            correctAnswer: 2,
            explanation: '$h = 4\\sin(45°) = 2\\sqrt{2} \\approx 2.83$ m. $N = mg\\cos(45°)$. $W_g = mgh = m(10)(2.83)$. $W_f = -\\mu_k mg\\cos(45°)(4)$. Per unit mass: $v^2 = 2(10)(2.83) - 2(0.3)(10)(0.707)(4) = 56.6 - 17.0 = 39.6$. $v ≈ 6.3$ m/s, closest to 6.6 m/s. More precisely: $v^2 = 2g \\cdot 4(\\sin45° - \\mu_k\\cos45°) = 80(0.707 - 0.212) = 80(0.495) = 39.6$. $v = 6.29$ m/s.'
          }
        ]
      }
    }
  ]
}
