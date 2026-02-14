export const physics1ElasticPotentialEnergyPart1Data = {
  topicSlug: 'elastic-potential-energy',
  sections: [
    {
      id: 'ep1-intro',
      type: 'text' as const,
      content: `
# 🔩 Hooke\'s Law: $F = -kx$

**Part 1 of 7 — Elastic Potential Energy**

Springs are everywhere — in car suspensions, trampolines, mattresses, and even at the atomic level. Understanding how springs store and release energy starts with **Hooke\'s Law**, which describes the force a spring exerts.
      `
    },
    {
      id: 'ep1-hookes-law',
      type: 'text' as const,
      content: `
## Hooke\'s Law

A spring that is stretched or compressed from its **natural length** (equilibrium position) exerts a restoring force:

$$F_s = -kx$$

where:
- $F_s$ = spring force (N)
- $k$ = **spring constant** (N/m) — stiffness of the spring
- $x$ = displacement from equilibrium (m)
- The negative sign means the force is **opposite** to the displacement

### What the Negative Sign Means

| Displacement | Spring Force |
|-------------|-------------|
| $x > 0$ (stretched right) | $F < 0$ (pulls left) |
| $x < 0$ (compressed left) | $F > 0$ (pushes right) |
| $x = 0$ (natural length) | $F = 0$ (no force) |

The spring always tries to return to its natural length — this is why we call it a **restoring force**.
      `
    },
    {
      id: 'ep1-spring-constant',
      type: 'text' as const,
      content: `
## The Spring Constant $k$

The spring constant measures how **stiff** a spring is:

- **Large $k$** → stiff spring → large force for a small stretch
- **Small $k$** → soft spring → small force for a large stretch

### Units

$$[k] = \\frac{\\text{N}}{\\text{m}} = \\frac{\\text{kg}}{\\text{s}^2}$$

### Typical Values

| Spring Type | $k$ (N/m) |
|-------------|-----------|
| Slinky | ~1 |
| Screen door spring | ~100 |
| Car suspension | ~30,000 |
| Atomic bond | ~100 |

### Finding $k$ Experimentally

Hang a mass $m$ from a vertical spring. At equilibrium, the spring stretches by $x$:

$$mg = kx \\Rightarrow k = \\frac{mg}{x}$$
      `
    },
    {
      id: 'ep1-force-vs-displacement',
      type: 'text' as const,
      content: `
## Force vs. Displacement Graph

The $F$ vs. $x$ graph for a spring is a **straight line** through the origin with slope $k$ (or $-k$ for the spring force):

### Applied Force to Stretch/Compress

To hold a spring stretched by $x$, you must apply:

$$F_{\\text{applied}} = kx$$

(positive — equal and opposite to spring force)

This graph is a line with slope $k$:
- At $x = 0$: $F = 0$
- At $x = 0.1$ m with $k = 200$ N/m: $F = 20$ N
- At $x = 0.2$ m: $F = 40$ N

### Important Note

Hooke\'s Law is valid only for **small displacements**. Beyond the **elastic limit**, the spring deforms permanently and the linear relationship breaks down.
      `
    },
    {
      id: 'ep1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Hooke\'s Law Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A spring with $k = 500$ N/m is compressed by 0.04 m. The magnitude of the spring force is:',
            options: [
              '10 N',
              '20 N',
              '50 N',
              '200 N'
            ],
            correctAnswer: 1,
            explanation: '$|F| = kx = 500 \\times 0.04 = 20$ N. The force pushes outward (away from compression).'
          },
          {
            question: 'Spring A has $k = 100$ N/m and Spring B has $k = 400$ N/m. Both are stretched by the same amount. Spring B\'s force is:',
            options: [
              'The same as A\'s',
              'Twice A\'s',
              'Four times A\'s',
              'Half of A\'s'
            ],
            correctAnswer: 2,
            explanation: '$F = kx$. Same $x$, but $k_B = 4k_A$, so $F_B = 4F_A$. The stiffer spring exerts four times the force.'
          },
          {
            question: 'The negative sign in $F = -kx$ indicates that the spring force:',
            options: [
              'Is always negative',
              'Always opposes the displacement',
              'Decreases with stretch',
              'Is less than the applied force'
            ],
            correctAnswer: 1,
            explanation: 'The negative sign means the force direction is opposite to the displacement direction. This is what makes it a restoring force.'
          }
        ]
      }
    },
    {
      id: 'ep1-calculations',
      type: 'input-boxes' as const,
      content: `
**Hooke\'s Law Calculations** 🧮

Use $g = 10$ m/s².

1) A spring stretches 0.05 m when a 2 kg mass hangs from it. What is the spring constant $k$ (in N/m)?

2) A spring with $k = 800$ N/m is compressed by 0.03 m. What force is needed to hold it compressed (in N)?

3) A spring with $k = 250$ N/m has a 5 kg mass resting on it vertically. By how much is the spring compressed (in m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['400', '24', '0.2'],
        hint1: '$k = mg/x = 2(10)/0.05$.',
        hint2: '$F = kx = 800 \\times 0.03$.',
        hint3: '$x = mg/k = 5(10)/250$.',
        explanation: '1) $k = 20/0.05 = 400$ N/m. 2) $F = 800(0.03) = 24$ N. 3) $x = 50/250 = 0.2$ m.'
      }
    },
    {
      id: 'ep1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Spring Force Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A spring is stretched to the right. The spring force points:',
            options: ['Right (same as stretch)', 'Left (opposite to stretch)', 'Upward', 'The force is zero'],
            correctIndex: 1,
            explanation: 'The spring force is a restoring force — it points opposite to displacement, pulling back toward equilibrium.'
          },
          {
            label: 'If you double the stretch of a spring, the force:',
            options: ['Stays the same', 'Doubles', 'Quadruples', 'Halves'],
            correctIndex: 1,
            explanation: '$F = kx$. Force is proportional to displacement. Double $x$ → double $F$.'
          },
          {
            label: 'Two springs with the same $k$ are stretched different amounts. The one stretched more:',
            options: ['Exerts less force', 'Exerts the same force', 'Exerts more force', 'Has a larger $k$'],
            correctIndex: 2,
            explanation: 'Same $k$, larger $x$ → larger $F = kx$.'
          },
          {
            label: 'At the natural (equilibrium) length of a spring:',
            options: ['Force is maximum', 'Force is zero', 'PE is maximum', 'KE is zero'],
            correctIndex: 1,
            explanation: 'At $x = 0$ (equilibrium), $F = -k(0) = 0$. The spring exerts no force at its natural length.'
          }
        ]
      }
    },
    {
      id: 'ep1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Hooke\'s Law** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.3 kg mass is hung from a spring and stretches it by 6 cm. The spring constant is ($g = 10$ m/s²):',
            options: [
              '5 N/m',
              '18 N/m',
              '50 N/m',
              '500 N/m'
            ],
            correctAnswer: 2,
            explanation: '$k = mg/x = 0.3(10)/0.06 = 3/0.06 = 50$ N/m.'
          },
          {
            question: 'A spring can safely support a maximum force of 100 N before exceeding its elastic limit. If $k = 2000$ N/m, the maximum safe stretch is:',
            options: [
              '0.02 m',
              '0.05 m',
              '0.5 m',
              '2 m'
            ],
            correctAnswer: 1,
            explanation: '$x_{\\max} = F_{\\max}/k = 100/2000 = 0.05$ m = 5 cm.'
          }
        ]
      }
    }
  ]
}
