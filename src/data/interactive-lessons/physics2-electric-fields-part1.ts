export const physics2ElectricFieldsPart1Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'ef1-intro',
      type: 'text' as const,
      content: `
# ⚡ What Is an Electric Field?

**Part 1 of 7 — From Force to Field**

Coulomb's Law describes the force between two charges. But what if we remove one charge? The remaining charge still *changes the space around it*.

That change is the **electric field**.
      `
    },
    {
      id: 'ef1-why-fields',
      type: 'text' as const,
      content: `
## Why Do We Need Fields?

Coulomb's Law has a problem: it implies **action at a distance** — one charge "knows" about another charge instantly. That bothered physicists.

The **field concept** solves this:

1. Charge $q_1$ **creates** an electric field $\\vec{E}$ in the surrounding space
2. Another charge $q_2$ placed in that field **feels** a force $\\vec{F} = q_2\\vec{E}$

The field exists whether or not a second charge is there to feel it.

### Definition

$$\\vec{E} = \\frac{\\vec{F}}{q_0}$$

The electric field at a point is the **force per unit positive test charge** placed at that point.

- **Units:** N/C (newtons per coulomb) or equivalently V/m (volts per meter)
- **Type:** Vector — has both magnitude and direction
- **Direction:** The direction a **positive** test charge would be pushed
      `
    },
    {
      id: 'ef1-point-charge-field',
      type: 'text' as const,
      content: `
## Electric Field of a Point Charge

Combining $\\vec{E} = \\vec{F}/q_0$ with Coulomb's Law $F = kq q_0/r^2$:

$$E = \\frac{kq}{r^2} = \\frac{q}{4\\pi\\epsilon_0 r^2}$$

Where:
- $k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$
- $q$ = the source charge creating the field
- $r$ = distance from the source charge
- The test charge $q_0$ **cancels out** — the field depends only on the source

### Direction Rules
| Source charge | Field direction |
|:---:|:---:|
| **Positive** (+) | Points **away** from the charge (radially outward) |
| **Negative** (−) | Points **toward** the charge (radially inward) |

Think: "positive charges push, negative charges pull" — from the perspective of a positive test charge.
      `
    },
    {
      id: 'ef1-scaling',
      type: 'text' as const,
      content: `
## Scaling — How the Field Changes

Since $E = kq/r^2$, the field obeys the same inverse-square law as Coulomb's force:

| Change | Effect on E |
|:---:|:---:|
| Double $q$ | $E$ doubles |
| Triple $r$ | $E$ drops to $1/9$ |
| Double $q$, halve $r$ | $E$ increases $2 \\times 4 = 8\\times$ |

The key insight: **the field is a property of the source charge**. It doesn't depend on whatever test charge we place in it.
      `
    },
    {
      id: 'ef1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Field fundamentals
      `,
      exercise: {
        questions: [
          {
            question: 'The electric field at a point is 500 N/C directed east. A charge of $-2\\ \\mu\\text{C}$ is placed there. What force does it experience?',
            options: [
              '0.001 N east',
              '0.001 N west',
              '250 N east',
              '1000 N west'
            ],
            correctAnswer: 1,
            explanation: '$F = qE = (2 \\times 10^{-6})(500) = 0.001$ N. Since the charge is *negative*, the force is *opposite* the field direction → west.'
          },
          {
            question: 'A positive charge Q creates a field E at distance r. At distance 2r, the field is:',
            options: [
              'E/2',
              'E/4',
              '2E',
              '4E'
            ],
            correctAnswer: 1,
            explanation: '$E \\propto 1/r^2$. Doubling the distance: $E_{new} = E/(2^2) = E/4$.'
          },
          {
            question: 'Which statement about the electric field is FALSE?',
            options: [
              'It has units of N/C',
              'It is a vector quantity',
              'It depends on the test charge used to measure it',
              'It points away from positive source charges'
            ],
            correctAnswer: 2,
            explanation: 'The test charge cancels out of the definition. The field is a property of the *source* charge and the location — not the test charge.'
          }
        ]
      }
    },
    {
      id: 'ef1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Calculation Drill**

A point charge $Q = +3\\ \\mu\\text{C}$ is at the origin. Use $k = 9 \\times 10^9\\ \\text{N}\\cdot\\text{m}^2/\\text{C}^2$.

1) Electric field magnitude at $r = 0.10$ m (in N/C)

2) Electric field magnitude at $r = 0.30$ m (in N/C)

3) Ratio $E_{0.10}/E_{0.30}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2700000', '300000', '9'],
        hint1: '$E = kq/r^2 = (9 \\times 10^9)(3 \\times 10^{-6})/(0.10)^2$.',
        hint2: 'At 0.30 m: $(9 \\times 10^9)(3 \\times 10^{-6})/(0.30)^2 = 27000/0.09$.',
        hint3: 'The ratio $(0.30/0.10)^2 = 9$. Distance tripled → field drops by 9×.',
        explanation: 'At 0.10 m: $E = 27000/0.01 = 2{,}700{,}000$ N/C. At 0.30 m: $E = 27000/0.09 = 300{,}000$ N/C. Ratio = 9, confirming inverse-square.'
      }
    },
    {
      id: 'ef1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** — Lock it in before Part 2.
      `,
      exercise: {
        questions: [
          {
            question: 'A negative charge creates an electric field that:',
            options: [
              'Points radially outward',
              'Points radially inward (toward the charge)',
              'Circulates around the charge',
              'Is zero everywhere'
            ],
            correctAnswer: 1,
            explanation: 'A positive test charge would be attracted *toward* the negative source charge, so the field points inward.'
          },
          {
            question: 'An electron ($q = -1.6 \\times 10^{-19}$ C) is in a uniform field $E = 1000$ N/C directed upward. The electron accelerates:',
            options: [
              'Upward',
              'Downward',
              'It doesn\'t accelerate — electrons aren\'t affected by fields',
              'To the right'
            ],
            correctAnswer: 1,
            explanation: '$\\vec{F} = q\\vec{E}$. Since the electron is negative, its force is *opposite* the field → downward. $F = (1.6 \\times 10^{-19})(1000) = 1.6 \\times 10^{-16}$ N downward.'
          }
        ]
      }
    }
  ]
}
