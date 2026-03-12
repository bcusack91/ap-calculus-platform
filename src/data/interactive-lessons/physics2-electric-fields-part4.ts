export const physics2ElectricFieldsPart4Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'ef4-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Potential (Voltage)

**Part 4 of 7 — Energy in Electric Fields**

Force and field tell us *how charges push*. But many problems are easier to solve with **energy** instead. Enter: electric potential.
      `
    },
    {
      id: 'ef4-what-is-potential',
      type: 'text' as const,
      content: `
## What Is Electric Potential?

Just as the electric field is *force per unit charge*, electric potential is **energy per unit charge**:

$$V = \\frac{U}{q_0}$$

Where:
- $V$ = electric potential at a point (in **volts**, V)
- $U$ = electric potential energy (in joules)
- $q_0$ = the test charge

### Key Properties

| Property | Value |
|:---:|:---:|
| **Units** | Volts (V) = J/C |
| **Type** | **Scalar** — no direction! |
| **Sign** | Can be positive, negative, or zero |
| **Reference** | Usually $V = 0$ at infinity |

The huge advantage of potential over fields: **scalars are easier than vectors.** No component decomposition needed!
      `
    },
    {
      id: 'ef4-point-charge-potential',
      type: 'text' as const,
      content: `
## Potential from a Point Charge

$$V = \\frac{kq}{r}$$

Notice the differences from the electric field $E = kq/r^2$:

| Feature | Electric Field $E$ | Potential $V$ |
|:---:|:---:|:---:|
| **Formula** | $kq/r^2$ | $kq/r$ |
| **Type** | Vector | Scalar |
| **Distance dependence** | $1/r^2$ (inverse square) | $1/r$ (inverse) |
| **Sign of $q$ in formula** | Magnitude only; direction separate | Sign of $q$ is included |
| **+ charge** | $E > 0$, points away | $V > 0$ |
| **− charge** | $E > 0$, points toward | $V < 0$ |

### Superposition of Potential

For multiple charges, just **add the potentials** (they're scalars!):

$$V_{\\text{net}} = V_1 + V_2 + V_3 + \\cdots = \\sum \\frac{kq_i}{r_i}$$

No vectors. No components. No angles. Just arithmetic.
      `
    },
    {
      id: 'ef4-potential-difference',
      type: 'text' as const,
      content: `
## Potential Difference (Voltage)

What really matters in physics is the **potential difference** between two points:

$$\\Delta V = V_B - V_A$$

This tells us the work done per unit charge to move a charge from A to B:

$$W = q\\Delta V$$

### Sign Conventions

- Moving a **positive** charge from low V to high V → work is done **on** the charge (energy increases)
- Moving a **positive** charge from high V to low V → charge does work (energy decreases, it speeds up)
- A **battery** maintains a constant $\\Delta V$ between its terminals

### "Voltage" in Everyday Language

When someone says "a 9-volt battery," they mean $\\Delta V = 9$ V between the terminals. The actual potential at each terminal is undefined — only the difference matters.
      `
    },
    {
      id: 'ef4-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Potential vs. Field
      `,
      exercise: {
        questions: [
          {
            question: 'Two charges $+Q$ and $-Q$ are separated by distance $d$. At the exact midpoint, the potential is:',
            options: [
              'Positive (dominated by +Q)',
              'Negative (dominated by -Q)',
              'Zero',
              'Depends on the value of Q'
            ],
            correctAnswer: 2,
            explanation: '$V = kQ/r + k(-Q)/r = 0$. The distances are equal and the charges have equal magnitudes but opposite signs. Note: $E \\neq 0$ at this point — field and potential can behave very differently!'
          },
          {
            question: 'The potential at point A is +200 V and at point B is +50 V. If a proton moves from A to B, it:',
            options: [
              'Gains 150 eV of kinetic energy',
              'Loses 150 eV of kinetic energy',
              'Gains 250 eV of kinetic energy',
              'Is unaffected because both potentials are positive'
            ],
            correctAnswer: 0,
            explanation: '$\\Delta V = V_B - V_A = 50 - 200 = -150$ V. Work = $q\\Delta V = (+e)(-150) = -150$ eV. The proton *loses* potential energy = *gains* kinetic energy = 150 eV.'
          },
          {
            question: 'Electric potential is a scalar. This means:',
            options: [
              'It\'s always positive',
              'It has no units',
              'We add potentials from multiple charges with simple arithmetic (no vector components)',
              'It doesn\'t change with distance'
            ],
            correctAnswer: 2,
            explanation: 'Scalar = no direction. We just add numbers: $V_{\\text{net}} = V_1 + V_2 + \\cdots$. This makes potential calculations MUCH simpler than field calculations in multi-charge problems.'
          }
        ]
      }
    },
    {
      id: 'ef4-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Potential Calculation Drill**

A charge $q_1 = +4\\ \\mu\\text{C}$ is at the origin. $q_2 = -2\\ \\mu\\text{C}$ is at $x = 0.6$ m.

Point P is at $x = 0.2$ m.

1) $V$ from $q_1$ at P (in volts)
2) $V$ from $q_2$ at P (in volts)
3) $V_{\\text{net}}$ at P (in volts)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['180000', '-45000', '135000'],
        hint1: '$V_1 = kq_1/r_1 = (9 \\times 10^9)(4 \\times 10^{-6})/(0.2)$.',
        hint2: '$V_2 = kq_2/r_2 = (9 \\times 10^9)(-2 \\times 10^{-6})/(0.4)$. Remember to include the negative sign!',
        hint3: '$V_{\\text{net}} = V_1 + V_2 = 180{,}000 + (-45{,}000)$.',
        explanation: '$V_1 = 36000/0.2 = 180{,}000$ V. $V_2 = -18000/0.4 = -45{,}000$ V. $V_{\\text{net}} = 180{,}000 - 45{,}000 = 135{,}000$ V. Notice: no vectors needed!'
      }
    },
    {
      id: 'ef4-v-vs-e',
      type: 'text' as const,
      content: `
## The E = 0 but V ≠ 0 Trap

**AP Exam Favorite:** Can the electric field be zero at a point where the potential is nonzero?

**Yes!** Consider a single positive charge:
- At any finite distance, $V = kq/r > 0$ and $E = kq/r^2 > 0$
- Neither is zero anywhere (except at infinity)

But consider **two equal positive charges** $+Q$ at $x = -d/2$ and $x = +d/2$:
- At the midpoint: $\\vec{E} = 0$ (fields cancel as vectors)
- At the midpoint: $V = 2kQ/(d/2) = 4kQ/d > 0$ (potentials *add* as scalars)

**Key insight:** $E = 0$ means the *vector sum* of fields is zero. $V = 0$ means the *scalar sum* of potentials is zero. These are completely different conditions!
      `
    },
    {
      id: 'ef4-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'At a point where $V = 0$, the electric field must be:',
            options: [
              'Also zero',
              'Pointing toward the nearest charge',
              'Not necessarily zero — V and E are independent',
              'Infinite'
            ],
            correctAnswer: 2,
            explanation: 'V = 0 just means the scalar sum of potentials is zero. The field (a vector) can still be nonzero. Example: the midpoint of a dipole has V = 0 but E ≠ 0.'
          },
          {
            question: 'An electron is released from rest at a point where $V = -300$ V and moves to a point where $V = -100$ V. Its kinetic energy:',
            options: [
              'Increases by 200 eV',
              'Decreases by 200 eV',
              'Increases by 400 eV',
              'Stays the same'
            ],
            correctAnswer: 0,
            explanation: '$\Delta V = -100 - (-300) = +200$ V. The electron moves toward higher potential, which is its natural direction. $\Delta U = q\Delta V = (-e)(+200) = -200$ eV (PE decreases). By energy conservation, $\Delta KE = -\Delta U = +200$ eV. The electron gains 200 eV of kinetic energy.'
          }
        ]
      }
    }
  ]
}
