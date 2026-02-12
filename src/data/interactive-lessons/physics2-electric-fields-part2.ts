export const physics2ElectricFieldsPart2Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'ef2-intro',
      type: 'text' as const,
      content: `
# 🧲 Field Superposition & Multiple Charges

**Part 2 of 7 — Adding Fields as Vectors**

One charge creates a field. But real problems have *multiple* charges. How do their fields combine?

The answer: the **superposition principle** — exactly like we did for forces, but now with fields.
      `
    },
    {
      id: 'ef2-superposition-principle',
      type: 'text' as const,
      content: `
## The Superposition Principle for Fields

The total electric field at any point is the **vector sum** of the fields created by each individual charge:

$$\\vec{E}_{\\text{net}} = \\vec{E}_1 + \\vec{E}_2 + \\vec{E}_3 + \\cdots$$

### Important Notes

- Each $\\vec{E}_i = kq_i/r_i^2$ is computed independently
- **Direction matters** — fields are vectors, so you must account for direction
- The sign of the source charge determines the direction of its field (away from + / toward −)
- Magnitudes do NOT simply add unless the fields point in the same direction
      `
    },
    {
      id: 'ef2-1d-examples',
      type: 'text' as const,
      content: `
## 1D Example: Two Charges on a Line

**Setup:** $q_1 = +4\\ \\mu\\text{C}$ at $x = 0$ and $q_2 = -2\\ \\mu\\text{C}$ at $x = 0.6$ m.

Find $\\vec{E}$ at point P located at $x = 0.3$ m (midpoint).

### Solution

**From $q_1$ (positive, at x = 0):**
- Distance to P: $r_1 = 0.3$ m
- $E_1 = (9 \\times 10^9)(4 \\times 10^{-6})/(0.3)^2 = 400{,}000$ N/C
- Direction: **→** (away from positive charge, toward +x)

**From $q_2$ (negative, at x = 0.6):**
- Distance to P: $r_2 = 0.3$ m
- $E_2 = (9 \\times 10^9)(2 \\times 10^{-6})/(0.3)^2 = 200{,}000$ N/C
- Direction: **→** (toward negative charge, toward +x)

**Net field:**

Both fields point in the +x direction!

$$E_{\\text{net}} = 400{,}000 + 200{,}000 = 600{,}000 \\text{ N/C, in the +x direction}$$

Notice: the fields from opposite-sign charges can *reinforce* each other between the charges.
      `
    },
    {
      id: 'ef2-where-zero',
      type: 'text' as const,
      content: `
## Where Is E = 0? (The Null Point)

For the field to be zero, two field contributions must be **equal and opposite**.

**Rule of thumb:**
- Same-sign charges → null point is **between** them (closer to the smaller charge)
- Opposite-sign charges → null point is **outside** them, on the side of the smaller charge

### Example: $q_1 = +4Q$ at $x = 0$ and $q_2 = +Q$ at $x = d$

At the null point (distance $x$ from $q_2$, so $(d + x)$ from $q_1$... wait, the null is between them):

Let null point be at distance $a$ from $q_2$ (between them), so distance $(d - a)$ from $q_1$:

$$\\frac{k(4Q)}{(d-a)^2} = \\frac{kQ}{a^2}$$

$$4a^2 = (d-a)^2 \\implies 2a = d - a \\implies a = d/3$$

The null point is at $d/3$ from the smaller charge — exactly the same result as the force equilibrium!
      `
    },
    {
      id: 'ef2-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Superposition reasoning
      `,
      exercise: {
        questions: [
          {
            question: 'Two equal positive charges are separated by distance d. At the exact midpoint, the net electric field is:',
            options: [
              'Double the field from one charge',
              'Zero',
              'Equal to the field from one charge',
              'Depends on the magnitude of the charges'
            ],
            correctAnswer: 1,
            explanation: 'By symmetry: the field from the left charge points right (+x), the field from the right charge points left (−x). Equal magnitudes, opposite directions → they cancel to zero.'
          },
          {
            question: 'Two charges: $+3Q$ at origin and $-Q$ at $x = d$. Where is $E = 0$?',
            options: [
              'Between the charges, closer to $-Q$',
              'To the left of $+3Q$',
              'To the right of $-Q$',
              'At the midpoint'
            ],
            correctAnswer: 2,
            explanation: 'Opposite-sign charges: null point is outside, on the side of the smaller charge ($-Q$). To the right of $-Q$, both fields point in opposite directions and can cancel.'
          },
          {
            question: 'At a point where $E_x = +300$ N/C from charge 1 and $E_x = -500$ N/C from charge 2, the net field is:',
            options: [
              '800 N/C in the +x direction',
              '200 N/C in the −x direction',
              '200 N/C in the +x direction',
              '800 N/C in the −x direction'
            ],
            correctAnswer: 1,
            explanation: '$E_{net} = +300 + (-500) = -200$ N/C. The magnitude is 200 N/C in the −x direction.'
          }
        ]
      }
    },
    {
      id: 'ef2-2d-intro',
      type: 'text' as const,
      content: `
## 2D Superposition: Using Components

When charges aren't on a line, we must break fields into components.

**Strategy:**
1. Find $E_i = kq_i/r_i^2$ for each charge
2. Determine the direction of each field vector
3. Resolve into x- and y-components: $E_x = E\\cos\\theta$, $E_y = E\\sin\\theta$
4. Add components: $E_{x,\\text{net}} = \\sum E_{x,i}$, $E_{y,\\text{net}} = \\sum E_{y,i}$
5. Recombine: $E_{\\text{net}} = \\sqrt{E_x^2 + E_y^2}$

### Symmetric Cases (AP Favorites)

If charges are arranged symmetrically (e.g., equal charges at corners of an equilateral triangle), one component often cancels:

- Two equal charges on the y-axis → $E_y$ cancels at points on the x-axis
- Square of charges → use symmetry to simplify before computing
      `
    },
    {
      id: 'ef2-drill',
      type: 'input-boxes' as const,
      content: `
**Superposition Drill (1D)**

$q_1 = +5\\ \\mu\\text{C}$ at $x = 0$, $q_2 = +5\\ \\mu\\text{C}$ at $x = 1.0$ m.

1) Field from $q_1$ at $x = 0.25$ m (in N/C)
2) Field from $q_2$ at $x = 0.25$ m (in N/C, just magnitude)
3) Net field at $x = 0.25$ m (in N/C, give magnitude only)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['720000', '80000', '640000'],
        hint1: '$E_1 = (9 \\times 10^9)(5 \\times 10^{-6})/(0.25)^2 = 45000/0.0625$.',
        hint2: '$E_2 = (9 \\times 10^9)(5 \\times 10^{-6})/(0.75)^2 = 45000/0.5625 = 80{,}000$ N/C, pointing in −x direction.',
        hint3: '$E_1$ points in +x (away from $q_1$), $E_2$ points in −x (away from $q_2$). Net = $720{,}000 - 80{,}000 = 640{,}000$ N/C.',
        explanation: '$E_1 = 720{,}000$ N/C (+x direction), $E_2 = 80{,}000$ N/C (−x direction). Net = $720{,}000 - 80{,}000 = 640{,}000$ N/C in +x direction. The field is dominated by the closer charge.'
      }
    },
    {
      id: 'ef2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Three equal positive charges sit at the corners of an equilateral triangle. The net electric field at the center of the triangle is:',
            options: [
              'Pointing toward the nearest charge',
              'Pointing away from all charges equally',
              'Zero (by symmetry)',
              'Cannot be determined without knowing the charge'
            ],
            correctAnswer: 2,
            explanation: 'By three-fold symmetry, the three field vectors at 120° apart cancel exactly. $\\vec{E}_{\\text{net}} = 0$ at the center.'
          },
          {
            question: 'If the top charge in the previous problem is removed, the field at the center now points:',
            options: [
              'Toward the top (where the charge was)',
              'Away from the top (downward)',
              'To the left',
              'It\'s still zero'
            ],
            correctAnswer: 1,
            explanation: 'Removing the top charge removes the field that pointed downward (away from the top charge). The remaining two bottom charges create upward-pointing fields that add to give a net field pointing *toward* where the top charge was.'
          }
        ]
      }
    }
  ]
}
