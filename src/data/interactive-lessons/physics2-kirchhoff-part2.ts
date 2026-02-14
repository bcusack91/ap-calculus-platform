export const physics2KirchhoffPart2Data = {
  topicSlug: 'kirchhoffs-laws',
  sections: [
    {
      id: 'kl2-intro',
      type: 'text' as const,
      content: `
# 🔄 Kirchhoff's Loop Rule (KVL)

**Part 2 of 7 — Conservation of Energy Around Loops**

The second of Kirchhoff's laws says that the total voltage change around any closed loop is zero. This is conservation of **energy** applied to circuits — a charge that travels around a complete loop returns to its starting potential.
      `
    },
    {
      id: 'kl2-statement',
      type: 'text' as const,
      content: `
## The Loop Rule

Around any closed loop in a circuit:

$$\\sum \\Delta V = 0$$

Or equivalently: the sum of all EMFs equals the sum of all voltage drops.

$$\\sum \\varepsilon = \\sum IR$$

### Why It Works

The loop rule is conservation of **energy**. Electric potential is like height — if you walk around a closed path and return to your starting point, your net change in height is zero. Similarly, a charge traversing a closed loop gains energy through batteries and loses it through resistors, but the net energy change is zero.

### Sign Conventions

When traversing a loop in a chosen direction:

| Element | Traversal Direction | Voltage Change |
|---------|-------------------|----------------|
| Battery | − to + (low to high) | $+\\varepsilon$ |
| Battery | + to − (high to low) | $-\\varepsilon$ |
| Resistor | In direction of current $I$ | $-IR$ |
| Resistor | Against direction of current $I$ | $+IR$ |

> 🔑 **Memory Aid**: Going through a battery from − to + is like climbing a hill (gain energy, $+\\varepsilon$). Going through a resistor in the current direction is like sliding down (lose energy, $-IR$).
      `
    },
    {
      id: 'kl2-simple-example',
      type: 'text' as const,
      content: `
## Example: Single-Battery Loop

A 12 V battery is connected to a 3 Ω and a 5 Ω resistor in series. Find the current.

**Step 1: Choose a loop direction** (clockwise).

**Step 2: Assign current direction** (clockwise, same as loop).

**Step 3: Apply KVL** starting from the battery's negative terminal:

$$+\\varepsilon - IR_1 - IR_2 = 0$$
$$+12 - I(3) - I(5) = 0$$
$$12 = 8I$$
$$I = 1.5 \\text{ A}$$

**Step 4: Verify** — Voltage drops: $V_1 = 1.5 \\times 3 = 4.5$ V, $V_2 = 1.5 \\times 5 = 7.5$ V. Total: $4.5 + 7.5 = 12$ V ✓

### Checking Voltage at Each Point

Starting at the battery's negative terminal (call it 0 V):
- After battery: $0 + 12 = 12$ V
- After $R_1$: $12 - 4.5 = 7.5$ V
- After $R_2$: $7.5 - 7.5 = 0$ V ✓

We return to 0 V — the loop rule is satisfied!
      `
    },
    {
      id: 'kl2-sign-quiz',
      type: 'multiple-choice' as const,
      content: `
**Sign Convention Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Kirchhoff\'s Loop Rule is a consequence of conservation of:',
            options: [
              'Charge',
              'Energy',
              'Momentum',
              'Mass'
            ],
            correctAnswer: 1,
            explanation: 'The loop rule says the total voltage change around a closed loop is zero. Voltage is energy per unit charge, so this is conservation of energy — a charge returning to its starting point has the same energy.'
          },
          {
            question: 'You traverse a 9 V battery from its positive terminal to its negative terminal. The voltage change is:',
            options: [
              '$+9$ V',
              '$-9$ V',
              '$0$ V',
              'Depends on the current'
            ],
            correctAnswer: 1,
            explanation: 'Going from + to − through a battery is a voltage DROP of $\\varepsilon$. The change is $-9$ V.'
          },
          {
            question: 'You traverse a 4 Ω resistor AGAINST the direction of the 2 A current. The voltage change is:',
            options: [
              '$-8$ V',
              '$+8$ V',
              '$-2$ V',
              '$+2$ V'
            ],
            correctAnswer: 1,
            explanation: 'Traversing a resistor against the current direction gives a voltage RISE: $+IR = +(2)(4) = +8$ V. You are going from low potential to high potential.'
          }
        ]
      }
    },
    {
      id: 'kl2-two-resistor',
      type: 'text' as const,
      content: `
## Systematic Approach

Follow these steps for every KVL problem:

### The 4-Step Method

1. **Label currents**: Assign a direction to each unknown current (guess if needed — a negative answer just means it flows the other way)

2. **Choose loops**: Identify independent loops that cover every branch

3. **Pick a traversal direction**: Usually clockwise for each loop

4. **Write KVL**: Walk around each loop, summing voltage changes using the sign conventions:
   - Battery − to +: $+\\varepsilon$
   - Battery + to −: $-\\varepsilon$
   - Resistor with current: $-IR$
   - Resistor against current: $+IR$

### How Many Loops?

For a circuit with $B$ branches and $N$ nodes:

$$\\text{Independent loops} = B - N + 1$$

This is the number of KVL equations you can write. Combined with $N - 1$ KCL equations, you get $B$ equations total — exactly enough to solve for all $B$ unknown currents!
      `
    },
    {
      id: 'kl2-practice-quiz',
      type: 'multiple-choice' as const,
      content: `
**Loop Rule Practice**
      `,
      exercise: {
        questions: [
          {
            question: 'A loop contains a 10 V battery and two resistors (4 Ω and 6 Ω) in series. The current in the loop is:',
            options: [
              '2.5 A',
              '1.0 A',
              '0.67 A',
              '10 A'
            ],
            correctAnswer: 1,
            explanation: 'KVL: $\\varepsilon - IR_1 - IR_2 = 0 \\Rightarrow 10 = I(4+6) = 10I \\Rightarrow I = 1.0$ A.'
          },
          {
            question: 'A circuit has 5 branches and 3 nodes. How many independent loop equations can you write?',
            options: [
              '2',
              '3',
              '4',
              '5'
            ],
            correctAnswer: 1,
            explanation: 'Independent loops $= B - N + 1 = 5 - 3 + 1 = 3$.'
          }
        ]
      }
    },
    {
      id: 'kl2-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'In a series circuit with a 6 V battery, a 2 Ω resistor, and a 4 Ω resistor, the voltage across the 4 Ω resistor is:',
            options: [
              '2 V',
              '4 V',
              '6 V',
              '3 V'
            ],
            correctAnswer: 1,
            explanation: '$I = 6/(2+4) = 1$ A. $V_{4\\Omega} = IR = (1)(4) = 4$ V.'
          },
          {
            question: 'Which statement is FALSE about Kirchhoff\'s Loop Rule?',
            options: [
              'It applies to any closed loop in a circuit',
              'It is based on conservation of energy',
              'The sum of voltages around a loop equals the battery EMF',
              'Voltage drops across resistors are negative when traversed in the current direction'
            ],
            correctAnswer: 2,
            explanation: 'The sum of ALL voltage changes (including batteries) around a closed loop equals ZERO, not the battery EMF. The correct statement is $\\sum \\Delta V = 0$.'
          }
        ]
      }
    }
  ]
}
