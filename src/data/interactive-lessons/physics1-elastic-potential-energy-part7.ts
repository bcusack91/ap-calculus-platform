export const physics1ElasticPotentialEnergyPart7Data = {
  topicSlug: 'elastic-potential-energy',
  sections: [
    {
      id: 'ep7-intro',
      type: 'text' as const,
      content: `
# 🎓 Synthesis & AP Review

**Part 7 of 7 — Elastic Potential Energy**

This final lesson integrates Hooke\'s Law, elastic PE, spring work, spring-mass systems, and energy in oscillations. These AP-level questions will test your mastery of the entire unit.
      `
    },
    {
      id: 'ep7-summary',
      type: 'text' as const,
      content: `
## Key Equations Summary

| Concept | Equation | Key Point |
|---------|----------|-----------|
| Hooke\'s Law | $F_s = -kx$ | Restoring force; linear |
| Spring constant | $k = F/x$ | Units: N/m |
| Elastic PE | $PE_s = \\frac{1}{2}kx^2$ | Always $\\geq 0$; quadratic |
| Work by spring | $W_s = -\\Delta PE_s$ | Conservative force |
| Total energy | $E = \\frac{1}{2}kA^2$ | Constant (no friction) |
| Max speed | $v_{\\max} = A\\sqrt{k/m}$ | At equilibrium |
| Max acceleration | $a_{\\max} = kA/m$ | At maximum displacement |
| Speed at $x$ | $v = \\sqrt{\\frac{k}{m}(A^2 - x^2)}$ | Energy conservation |

### Big Ideas

- Spring force is **conservative** → PE can be defined
- PE is **quadratic** in $x$ → doubling $x$ quadruples PE
- Energy oscillates between KE and PE (no friction)
- The spring force provides **variable acceleration** ($a \\propto x$)
      `
    },
    {
      id: 'ep7-ap-conceptual',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Conceptual Questions** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A block oscillates on a spring. If the amplitude is halved, the maximum speed:',
            options: [
              'Is halved',
              'Is quartered',
              'Is unchanged',
              'Is reduced by $\\sqrt{2}$'
            ],
            correctAnswer: 0,
            explanation: '$v_{\\max} = A\\sqrt{k/m}$. Halving $A$ halves $v_{\\max}$. Maximum speed is proportional to amplitude.'
          },
          {
            question: 'A block on a frictionless surface is attached to two identical springs in parallel (side by side). Compared to a single spring, the effective spring constant is:',
            options: [
              'Half',
              'The same',
              'Double',
              'Quadruple'
            ],
            correctAnswer: 2,
            explanation: 'Springs in parallel: $k_{\\text{eff}} = k_1 + k_2 = 2k$. Each spring provides its own restoring force, and they add up.'
          },
          {
            question: 'A ball is launched by a compressed spring. If you want the ball to go twice as fast, you must compress the spring:',
            options: [
              'Twice as much',
              'Four times as much',
              '$\\sqrt{2}$ times as much',
              'Eight times as much'
            ],
            correctAnswer: 0,
            explanation: '$\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2 \\Rightarrow v \\propto x$. To double $v$, double $x$. (Speed is proportional to compression for spring launchers.)'
          }
        ]
      }
    },
    {
      id: 'ep7-ap-calculations',
      type: 'input-boxes' as const,
      content: `
**AP-Style Calculations** 🧮

Use $g = 10$ $m/s^{2}$.

1) A 0.25 kg ball is launched by a spring ($k = 400$ N/m) compressed 0.1 m on a frictionless surface. What is the ball\'s speed (in m/s)?

2) A 2 kg block oscillates with $k = 800$ N/m and amplitude 0.05 m. What is the speed when $x = 0.03$ m (in m/s)?

3) A block is attached to a spring ($k = 300$ N/m). The block oscillates with maximum speed 6 m/s and maximum acceleration 120 $m/s^{2}$. What is the mass (in kg)?

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '0.8', '0.75'],
        hint1: 'Use energy conservation: $\\frac{1}{2}kx^2 = \\frac{1}{2}mv^2$. Solve for $v$.',
        hint2: 'Use $v = \\sqrt{\\frac{k}{m}(A^2 - x^2)}$. Plug in $A$, $x$, $k$, and $m$.',
        hint3: 'You have two equations: $v_{\\max} = A\\sqrt{k/m}$ and $a_{\\max} = kA/m$. Divide them to eliminate $A$, then solve for $m$.',
        explanation: '1) $v = 0.1\\sqrt{1600} = 0.1(40) = 4$ m/s. 2) $v = \\sqrt{400(0.0016)} = \\sqrt{0.64} = 0.8$ m/s. 3) $a_{\\max}/v_{\\max} = \\sqrt{k/m}$. $120/6 = 20 = \\sqrt{300/m}$. $400 = 300/m$. $m = 0.75$ kg.'
      }
    },
    {
      id: 'ep7-ap-dropdown',
      type: 'dropdown-select' as const,
      content: `
**AP Review — True/False** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A spring compressed 3 cm stores 9 times the energy of one compressed 1 cm.',
            options: ['True', 'False'],
            correctIndex: 0,
            explanation: '$PE \\propto x^2$. $(3)^2/(1)^2 = 9$. True!'
          },
          {
            label: 'The spring force provides constant acceleration.',
            options: ['True', 'False'],
            correctIndex: 1,
            explanation: '$F = -kx$ varies with position, so $a = -kx/m$ also varies. Acceleration is NOT constant.'
          },
          {
            label: 'In a spring-mass oscillation (no friction), the total energy changes with time.',
            options: ['True', 'False'],
            correctIndex: 1,
            explanation: 'Without friction, total energy $E = \\frac{1}{2}kA^2$ is constant. Energy transforms between KE and PE but total is conserved.'
          },
          {
            label: 'A stiffer spring (larger $k$) with the same amplitude stores more energy.',
            options: ['True', 'False'],
            correctIndex: 0,
            explanation: '$E = \\frac{1}{2}kA^2$. Larger $k$ with same $A$ → more energy. True.'
          }
        ]
      }
    },
    {
      id: 'ep7-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Final AP Exit Quiz — Elastic PE** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A spring ($k = 500$ N/m) is compressed 0.1 m and launches a 0.25 kg ball straight up. The ball rises to a height of ($g = 10$ $m/s^{2}$):',
            options: [
              '0.5 m',
              '1.0 m',
              '2.0 m',
              '5.0 m'
            ],
            correctAnswer: 1,
            explanation: '$\\frac{1}{2}kx^2 = mgh$. $\\frac{1}{2}(500)(0.01) = 0.25(10)h$. $2.5 = 2.5h$. $h = 1.0$ m.'
          },
          {
            question: 'A 1 kg block slides at 4 m/s into a spring ($k = 200$ N/m) on a surface with $\\mu_k = 0.5$. The maximum compression is closest to ($g = 10$ $m/s^{2}$):',
            options: [
              '0.2 m',
              '0.24 m',
              '0.28 m',
              '0.32 m'
            ],
            correctAnswer: 2,
            explanation: '$\\frac{1}{2}mv^2 = \\frac{1}{2}kx^2 + \\mu_k mgx$. $8 = 100x^2 + 5x$. $100x^2 + 5x - 8 = 0$. Using the quadratic formula: $x = \\frac{-5 + \\sqrt{25 + 3200}}{200} = \\frac{-5 + 56.8}{200} \\approx 0.259$ m, closest to 0.28 m among the choices.'
          }
        ]
      }
    }
  ]
}
