export const physics1ElasticPotentialEnergyPart2Data = {
  topicSlug: 'elastic-potential-energy',
  sections: [
    {
      id: 'ep2-intro',
      type: 'text' as const,
      content: `
# 🌀 Elastic PE: $PE_s = \\frac{1}{2}kx^2$

**Part 2 of 7 — Elastic Potential Energy**

A compressed or stretched spring stores energy — energy that can be released to launch a projectile, close a door, or bounce a ball. This stored energy is **elastic potential energy**, and it depends on the spring constant and the displacement.
      `
    },
    {
      id: 'ep2-definition',
      type: 'text' as const,
      content: `
## Defining Elastic PE

The **elastic potential energy** stored in a spring displaced by $x$ from equilibrium:

$$PE_s = \\frac{1}{2}kx^2$$

where:
- $k$ = spring constant (N/m)
- $x$ = displacement from equilibrium (m)
- $PE_s$ = elastic PE (Joules)

### Properties

| Property | Detail |
|----------|--------|
| **Units** | Joules (J) |
| **Sign** | Always $\\geq 0$ (because $x^2 \\geq 0$) |
| **Maximum when** | $x$ is at maximum stretch or compression |
| **Zero when** | $x = 0$ (spring at natural length) |
| **Depends on** | $x^2$ — quadratic! |
      `
    },
    {
      id: 'ep2-quadratic',
      type: 'text' as const,
      content: `
## The $x^2$ Dependence

Because PE depends on $x^2$:

| Displacement | PE |
|-------------|-----|
| $x$ | $\\frac{1}{2}kx^2$ |
| $2x$ | $\\frac{1}{2}k(2x)^2 = 4 \\times \\frac{1}{2}kx^2$ |
| $3x$ | $\\frac{1}{2}k(3x)^2 = 9 \\times \\frac{1}{2}kx^2$ |

**Doubling the displacement quadruples the stored energy!**

### Same PE for Stretch and Compression

Since $PE_s = \\frac{1}{2}kx^2$ and $x^2 = (-x)^2$:

A spring stretched by 5 cm has the **same PE** as a spring compressed by 5 cm.

### Graphical Connection

On a $F$ vs. $x$ graph (for the applied force $F = kx$):

The area under the curve from $0$ to $x$ = work done = energy stored:

$$\\text{Area} = \\frac{1}{2}(\\text{base})(\\text{height}) = \\frac{1}{2}(x)(kx) = \\frac{1}{2}kx^2$$

This is a **triangle** — the PE formula comes from the area of a triangle!
      `
    },
    {
      id: 'ep2-compared-to-gravity',
      type: 'text' as const,
      content: `
## Elastic vs. Gravitational PE

| Feature | Gravitational PE | Elastic PE |
|---------|-----------------|------------|
| Formula | $mgh$ | $\\frac{1}{2}kx^2$ |
| Depends on | Height ($h$) — linear | Displacement ($x$) — quadratic |
| Reference | Chosen by you | Always $x = 0$ (equilibrium) |
| Can be negative? | Yes | No |
| Force type | Constant ($mg$) | Variable ($kx$) |
| Associated force | Gravity | Spring force |
| Conservative? | Yes | Yes |
      `
    },
    {
      id: 'ep2-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Elastic PE Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A spring with $k = 200$ N/m is compressed by 0.1 m. The elastic PE stored is:',
            options: [
              '0.1 J',
              '1 J',
              '10 J',
              '20 J'
            ],
            correctAnswer: 1,
            explanation: '$PE_s = \\frac{1}{2}kx^2 = \\frac{1}{2}(200)(0.1)^2 = \\frac{1}{2}(200)(0.01) = 1$ J.'
          },
          {
            question: 'If you triple the compression of a spring, the elastic PE becomes:',
            options: [
              '3 times as much',
              '6 times as much',
              '9 times as much',
              '27 times as much'
            ],
            correctAnswer: 2,
            explanation: '$PE_s \\propto x^2$. Tripling $x$: $PE_{\\text{new}} = \\frac{1}{2}k(3x)^2 = 9 \\times \\frac{1}{2}kx^2$. PE increases by a factor of 9.'
          },
          {
            question: 'A spring is stretched 4 cm. The same spring is compressed 4 cm. Which configuration stores more PE?',
            options: [
              'Stretched stores more',
              'Compressed stores more',
              'Both store the same PE',
              'Cannot be determined'
            ],
            correctAnswer: 2,
            explanation: '$PE_s = \\frac{1}{2}kx^2$. Since $x^2 = (-x)^2$, stretching and compressing by the same amount store identical PE.'
          }
        ]
      }
    },
    {
      id: 'ep2-calculations',
      type: 'input-boxes' as const,
      content: `
**Elastic PE Calculations** 🧮

1) A spring ($k = 500$ N/m) is stretched 0.08 m. What PE is stored (in J)?

2) A spring stores 18 J when compressed 0.3 m. What is the spring constant (in N/m)?

3) A spring ($k = 800$ N/m) stores 4 J of PE. What is the displacement from equilibrium (in m)?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.6', '400', '0.1'],
        hint1: '$PE_s = \\frac{1}{2}(500)(0.08)^2 = \\frac{1}{2}(500)(0.0064)$.',
        hint2: '$k = 2 \\cdot PE_s / x^2 = 2(18)/(0.3)^2 = 36/0.09$.',
        hint3: '$x = \\sqrt{2 \\cdot PE_s / k} = \\sqrt{2(4)/800} = \\sqrt{0.01}$.',
        explanation: '1) $PE_s = 250(0.0064) = 1.6$ J. 2) $k = 36/0.09 = 400$ N/m. 3) $x = \\sqrt{0.01} = 0.1$ m.'
      }
    },
    {
      id: 'ep2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Elastic PE Analysis** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Elastic PE is always non-negative because:',
            options: ['Springs always push', '$k$ is always positive', '$x^2$ is always non-negative', 'Energy is conserved'],
            correctIndex: 2,
            explanation: '$PE_s = \\frac{1}{2}kx^2$. Both $k > 0$ and $x^2 \\geq 0$, so $PE_s \\geq 0$. The $x^2$ term ensures this.'
          },
          {
            label: 'The PE of a spring compressed 5 cm vs. stretched 10 cm (same spring). The stretched one stores:',
            options: ['The same PE', 'Twice the PE', 'Four times the PE', 'Half the PE'],
            correctIndex: 2,
            explanation: '$PE \\propto x^2$. $(10)^2/(5)^2 = 100/25 = 4$. Four times the PE.'
          },
          {
            label: 'On a $F$ vs. $x$ graph for a spring, the elastic PE equals:',
            options: ['The slope', 'The y-intercept', 'The area under the curve', 'The maximum force'],
            correctIndex: 2,
            explanation: 'PE = work done = area under the $F$ vs. $x$ curve = $\\frac{1}{2}(x)(kx) = \\frac{1}{2}kx^2$.'
          },
          {
            label: 'Two springs: Spring A ($k = 100$ N/m, $x = 0.2$ m) and Spring B ($k = 400$ N/m, $x = 0.1$ m). Which stores more PE?',
            options: ['Spring A', 'Spring B', 'Same PE', 'Cannot determine'],
            correctIndex: 2,
            explanation: '$PE_A = \\frac{1}{2}(100)(0.04) = 2$ J. $PE_B = \\frac{1}{2}(400)(0.01) = 2$ J. They\'re equal!'
          }
        ]
      }
    },
    {
      id: 'ep2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Elastic PE** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A spring ($k = 1000$ N/m) is compressed by 0.05 m and then released, launching a 0.1 kg ball. If all PE converts to KE, the ball\'s speed is:',
            options: [
              '2.5 m/s',
              '5 m/s',
              '10 m/s',
              '25 m/s'
            ],
            correctAnswer: 1,
            explanation: '$PE_s = \\frac{1}{2}(1000)(0.05)^2 = \\frac{1}{2}(1000)(0.0025) = 1.25$ J. $1.25 = \\frac{1}{2}(0.1)v^2 \\Rightarrow v^2 = 25 \\Rightarrow v = 5$ m/s.'
          },
          {
            question: 'A spring stores 8 J at $x = 0.2$ m. How much energy does it store at $x = 0.6$ m?',
            options: [
              '24 J',
              '48 J',
              '72 J',
              '216 J'
            ],
            correctAnswer: 2,
            explanation: '$PE \\propto x^2$. Ratio: $(0.6/0.2)^2 = 9$. $PE = 9 \\times 8 = 72$ J.'
          }
        ]
      }
    }
  ]
}
