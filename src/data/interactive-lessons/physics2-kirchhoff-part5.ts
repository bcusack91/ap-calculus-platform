export const physics2KirchhoffPart5Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl5-intro',
      type: 'text' as const,
      content: `
# 🗺️ Potential Maps, Meters, and Real Batteries

**Part 5 of 7 — Electric Potential at Points in a Circuit**

The loop rule tracks how electric potential rises and falls as you walk around a circuit. In this part you will assign a potential to every point, draw potential-versus-position graphs, place meters correctly, and see how a real battery's internal resistance shows up in the loop rule.
      `
    },
    {
      id: 'kl5-potential-points',
      type: 'text' as const,
      content: `
## Potential at Points in a Circuit

Only potential **differences** are physical, so you choose one point as the reference, usually the battery's negative terminal, and call it $0$ V. The potential anywhere else is the sum of the changes along any path from the reference:

- Crossing a battery from − to +: rise of $\\varepsilon$
- Crossing a resistor in the direction of the current: drop of $IR$
- Moving along an ideal wire: no change

The energy picture behind this is $\\Delta U_E = q\\Delta V$: a charge gains electric potential energy in the battery and loses it in each resistor.

### Worked Example: Two Branches

A $12$ V battery is connected across two parallel branches. The left branch has $2\\;\\Omega$ then $4\\;\\Omega$, with point X between them. The right branch has $4\\;\\Omega$ then $2\\;\\Omega$, with point Y between them. In each branch the current flows from the top (the + terminal side) down to the bottom.

Each branch has the full 12 V across $6\\;\\Omega$, so each carries $2$ A.

- Top wire: $V = 12$ V
- Point X: $12 - (2)(2) = 8$ V
- Point Y: $12 - (2)(4) = 4$ V
- Bottom wire: $0$ V ✓

An ideal voltmeter connected between X and Y reads $V_X - V_Y = 8 - 4 = 4$ V, even though X and Y are in different branches.
      `
    },
    {
      id: 'kl5-potential-graph',
      type: 'text' as const,
      content: `
## Graphs of Potential Versus Position

A graph of electric potential as a function of position around a loop is a map of the loop rule:

| Element | Shape on the graph |
|---------|-------------------|
| Ideal battery (− to +) | Sudden rise of $\\varepsilon$ |
| Ideal wire | Flat (constant potential) |
| Resistor (along the current) | Drop of $IR$; a steady decline across a uniform resistor |

### Example

A $12$ V battery drives $2$ A through $R_1 = 2\\;\\Omega$ and then $R_2 = 4\\;\\Omega$ in series. Starting at the negative terminal:

1. Battery: $0 \\to 12$ V
2. Wire: flat at $12$ V
3. Across $R_1$: $12 \\to 8$ V (drop of $4$ V)
4. Wire: flat at $8$ V
5. Across $R_2$: $8 \\to 0$ V (drop of $8$ V)
6. Wire back to the start: flat at $0$ V

The graph ends where it started, which is the loop rule in picture form. In a series loop, the larger resistor has the larger drop, because every element carries the same current.
      `
    },
    {
      id: 'kl5-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Potential Map Check**
      `,
      exercise: {
        questions: [
          {
            question: 'A $10$ V ideal battery drives current through $R_a = 1\\;\\Omega$ and then $R_b = 4\\;\\Omega$ in series. The negative terminal is at $0$ V, and $R_a$ connects to the positive terminal. What is the potential at the point between $R_a$ and $R_b$?',
            options: [
              '2 V',
              '5 V',
              '8 V',
              '10 V'
            ],
            correctAnswer: 2,
            explanation: 'The current is $10/5 = 2$ A, so the potential drops $2$ V across $R_a$, leaving $10 - 2 = 8$ V. 2 V is the drop itself rather than the potential after it, 10 V ignores the drop across $R_a$, and 5 V splits the emf evenly between unequal resistors.'
          },
          {
            question: 'On a graph of electric potential versus position around a loop with an ideal battery and resistors, a length of ideal wire appears as:',
            options: [
              'A segment that falls by an amount $IR$',
              'A sudden jump equal to the emf',
              'A segment that rises back toward zero',
              'A flat, horizontal segment'
            ],
            correctAnswer: 3,
            explanation: 'An ideal wire has no resistance, so there is no potential difference along it and the graph is flat. A fall of $IR$ belongs to a resistor, and a sudden jump of $\\varepsilon$ belongs to the battery.'
          },
          {
            question: 'In the two-branch example, the right branch is changed to $2\\;\\Omega$ then $4\\;\\Omega$, matching the left branch. What does the voltmeter between X and Y now read?',
            options: [
              '4 V',
              '0 V',
              '8 V',
              '12 V'
            ],
            correctAnswer: 1,
            explanation: 'Both points are now $4$ V below the top wire, so both sit at $8$ V and the potential difference between them is zero. 4 V keeps the old reading, 8 V is the potential of each point rather than their difference, and 12 V is the battery emf.'
          }
        ]
      }
    },
    {
      id: 'kl5-meters',
      type: 'text' as const,
      content: `
## Placing Meters

| Meter | Connection | Ideal resistance | Why |
|-------|-----------|------------------|-----|
| Ammeter | In **series** with the element | Zero | Adds no potential drop, so it does not change the current |
| Voltmeter | In **parallel** across the element | Infinite | Draws no current, so it does not change the circuit |

### Common Placement Errors
- **Ammeter in parallel** with a resistor: the near-zero-resistance meter provides a bypass around the resistor, so most of the current goes through the meter and the circuit changes drastically.
- **Voltmeter in series**: its huge resistance nearly stops the current, so the meter reads close to the full battery emf instead of the potential difference across one element.

### Real (Nonideal) Meters
AP Physics 2 asks for **qualitative** reasoning only:
- A real ammeter has a small resistance, so inserting it slightly **reduces** the current it is measuring.
- A real voltmeter has a large but finite resistance, so it draws a little current and lowers the effective resistance of the part it is connected across; its reading is slightly **lower** than the true value.
      `
    },
    {
      id: 'kl5-internal-resistance',
      type: 'text' as const,
      content: `
## Real Batteries in the Loop Rule

A real battery behaves like an ideal emf $\\varepsilon$ in series with a small **internal resistance** $r$. Walking a loop through the battery and an external resistor $R$:

$$\\varepsilon - Ir - IR = 0 \\quad \\Rightarrow \\quad I = \\frac{\\varepsilon}{R + r}$$

The potential difference measured across the terminals is

$$V_{\\text{terminal}} = \\varepsilon - Ir$$

### Example
$\\varepsilon = 9$ V, $r = 0.5\\;\\Omega$, $R = 4\\;\\Omega$:

$$I = \\frac{9}{4.5} = 2 \\text{ A}, \\qquad V_{\\text{terminal}} = 9 - (2)(0.5) = 8 \\text{ V}$$

On a potential-versus-position graph, the rise across this battery is only $8$ V, not $9$ V. With no current (an open circuit), $Ir = 0$, so the terminal voltage equals the emf.
      `
    },
    {
      id: 'kl5-drill',
      type: 'input-boxes' as const,
      content: `
**Potential Map Drill**

An ideal $18$ V battery is connected across two parallel branches; its negative terminal is at $0$ V. Current in each branch flows from the top wire (at $18$ V) to the bottom wire.
- Left branch: $3\\;\\Omega$ (top) then $6\\;\\Omega$ (bottom), with point X between them
- Right branch: $6\\;\\Omega$ (top) then $3\\;\\Omega$ (bottom), with point Y between them

1) Potential at point X (in V):

2) Potential at point Y (in V):

3) Reading of an ideal voltmeter connected between X and Y (in V):

4) Separate question: a battery with $\\varepsilon = 12$ V and $r = 0.5\\;\\Omega$ supplies $3$ A to an external circuit. Its terminal voltage (in V):
      `,
      exercise: {
        boxes: 4,
        correctAnswers: ['12', '6', '6', '10.5'],
        hint1: 'Each branch has 18 V across $9\\;\\Omega$, so each carries $2$ A.',
        hint2: '$V_X = 18 - (2)(3)$ and $V_Y = 18 - (2)(6)$. The voltmeter reads the difference.',
        hint3: '$V_{\\text{terminal}} = \\varepsilon - Ir = 12 - (3)(0.5)$.',
        explanation: 'Each branch carries $18/9 = 2$ A. $V_X = 18 - 6 = 12$ V and $V_Y = 18 - 12 = 6$ V, so the voltmeter reads $6$ V. The real battery has $V_{\\text{terminal}} = 12 - 1.5 = 10.5$ V.'
      }
    },
    {
      id: 'kl5-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A student wants to measure the current in resistor $R_2$ and the potential difference across it. How should the meters be connected?',
            options: [
              'Ammeter in parallel with $R_2$; voltmeter in series with $R_2$',
              'Both meters in series with $R_2$, one on each side of it',
              'Ammeter in series with $R_2$; voltmeter in parallel with $R_2$',
              'Both meters in parallel with $R_2$, side by side across it'
            ],
            correctAnswer: 2,
            explanation: 'An ammeter must carry the same current as $R_2$, so it goes in series; a voltmeter must share the same two endpoints, so it goes in parallel. Swapping them short-circuits $R_2$ through the ammeter and nearly stops the current through the voltmeter.'
          },
          {
            question: 'A real voltmeter with large but finite resistance is connected across one resistor in a series circuit. Compared with the true potential difference before the meter was attached, its reading is:',
            options: [
              'Slightly higher, because the meter adds resistance',
              'Slightly lower, because the meter draws some current',
              'Exactly equal, because voltmeters are in parallel',
              'Zero, because the meter blocks all of the current'
            ],
            correctAnswer: 1,
            explanation: 'The meter forms a parallel path that lowers the resistance of that section, so that section takes a smaller share of the emf. Adding a parallel path lowers resistance rather than raising it, and a parallel meter neither blocks the current nor leaves the circuit untouched.'
          },
          {
            question: 'A battery with $\\varepsilon = 6$ V and internal resistance $r = 1\\;\\Omega$ is connected to a $5\\;\\Omega$ resistor. The potential difference across the battery terminals is:',
            options: [
              '6 V',
              '5 V',
              '1 V',
              '7 V'
            ],
            correctAnswer: 1,
            explanation: '$I = 6/(5 + 1) = 1$ A, so $V_{\\text{terminal}} = 6 - (1)(1) = 5$ V. 6 V ignores the internal drop, 1 V is the internal drop itself, and 7 V adds the internal drop instead of subtracting it.'
          }
        ]
      }
    }
  ]
}
