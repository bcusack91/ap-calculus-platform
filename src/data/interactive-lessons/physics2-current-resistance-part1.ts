export const physics2CurrentResistancePart1Data = {
  topicSlug: 'current-resistance-ohms-law',
  sections: [
    {
      id: 'cr1-intro',
      type: 'text' as const,
      content: `
# ⚡ Electric Current

**Part 1 of 7 — Charges in Motion**

So far in electrostatics, charges have been sitting still. Now we let them **move** — and that moving charge is called **electric current**.

In this part you'll learn:
- What electric current is and how it's measured
- The difference between conventional current and electron flow
- What the charges are doing when the current is zero
- How to calculate current from charge and time
      `
    },
    {
      id: 'cr1-current-defined',
      type: 'text' as const,
      content: `
## What Is Electric Current?

**Electric current** is the rate at which electric charge flows past a point in a circuit.

$$I = \\frac{\\Delta Q}{\\Delta t}$$

| Symbol | Meaning | SI Unit |
|--------|---------|---------|
| $I$ | Current | Ampere (A) |
| $\\Delta Q$ | Charge | Coulomb (C) |
| $\\Delta t$ | Time | Second (s) |

### The Ampere

$$1 \\text{ A} = 1 \\text{ C/s}$$

One ampere means **one coulomb of charge passes a point every second**.

### Charge Carriers

In **metals**, the charge carriers are **free electrons** (conduction electrons). Each carries charge $e = 1.6 \\times 10^{-19}$ C.

In **electrolytes** (salt water, batteries), both positive and negative ions can carry current.
      `
    },
    {
      id: 'cr1-conventional-flow',
      type: 'text' as const,
      content: `
## Conventional Current vs. Electron Flow

### The Historical Convention

Benjamin Franklin guessed (incorrectly) that positive charges flow through wires. We still use his convention:

> **Conventional current** flows from **high potential (+)** to **low potential (−)**.

### The Reality

In a metal wire, **electrons** actually flow from **− to +** (opposite to conventional current).

### Why Keep the Convention?

- All circuit equations work perfectly with conventional current
- The math doesn't care which sign you pick — as long as you're consistent
- AP Physics uses conventional current unless stated otherwise

### Current Has a Direction, but It Is Not a Vector

Current is drawn with an arrow along the wire, but it does not point in a direction in space the way a force does. At a junction, currents add as plain numbers (in = out), no matter what angles the wires make. If a wire bends around a corner, the current in it does not change.

### Zero Current Does Not Mean Motionless Charges

Even in a wire with no current, the free electrons move rapidly in random directions. Equal numbers cross any cross section in each direction, so the **net** motion of charge is zero and $I = 0$. A potential difference across the wire adds a small net motion in one direction on top of this random motion, and that net flow is the current.
      `
    },
    {
      id: 'cr1-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Current Concepts Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'If 3.0 C of charge passes a point in a wire every 0.50 s, the current is:',
            options: [
              '0.17 A',
              '1.5 A',
              '3.0 A',
              '6.0 A'
            ],
            correctAnswer: 3,
            explanation: '$I = \\Delta Q / \\Delta t = 3.0 / 0.50 = 6.0$ A. Multiplying instead gives 1.5 A, and dividing time by charge gives 0.17 A.'
          },
          {
            question: 'In a metal wire carrying current, the charge carriers are:',
            options: [
              'Protons moving from + to −',
              'Electrons moving from + to −',
              'Electrons moving from − to +',
              'Positive ions moving from + to −'
            ],
            correctAnswer: 2,
            explanation: 'In metals, free electrons are the charge carriers. They move from the negative terminal toward the positive terminal — opposite to conventional current direction.'
          },
          {
            question: 'A copper wire is not connected to anything, so it carries no current. Which statement best describes its free electrons?',
            options: [
              'They are at rest because no potential difference exists',
              'They drift steadily toward one end of the wire',
              'They move randomly with no net flow',
              'They are bound tightly to individual copper atoms'
            ],
            correctAnswer: 2,
            explanation: 'Zero current means zero net motion of charge, not motionless charges: free electrons keep moving randomly, and equal numbers cross each cross section in both directions. A steady drift toward one end would be a current, and electrons bound to atoms would make copper an insulator.'
          }
        ]
      }
    },
    {
      id: 'cr1-current-drill',
      type: 'input-boxes' as const,
      content: `
**Current Calculation Drill** ⚡

1) A phone charger delivers 2.0 A for 1 hour. How many coulombs of charge are transferred? (in C)

2) A lightning bolt transfers 5.0 C of charge in $2.0 \\times 10^{-3}$ s. What is the average current? (in A)

3) A wire carries 0.80 A for 2.0 minutes. How many electrons pass a point in the wire? (use scientific notation like 1.5e20)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7200', '2500', '6.0e20'],
        hint1: '$Q = I \\cdot t$. Convert 1 hour to seconds: $1 \\times 3600 = 3600$ s.',
        hint2: '$I = Q / t = 5.0 / (2.0 \\times 10^{-3})$.',
        hint3: 'First find the charge, $Q = It = (0.80)(120)$, then divide by $e = 1.6 \\times 10^{-19}$ C per electron.',
        explanation: '1) $Q = 2.0 \\times 3600 = 7200$ C. 2) $I = 5.0 / 0.002 = 2500$ A. 3) $Q = 0.80 \\times 120 = 96$ C, so $N = 96 / (1.6 \\times 10^{-19}) = 6.0 \\times 10^{20}$ electrons.'
      }
    },
    {
      id: 'cr1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'A wire carries a steady current of 4.0 A. How many electrons pass a point in the wire each second?',
            options: [
              '$6.4 \\times 10^{-19}$',
              '$1.6 \\times 10^{19}$',
              '$2.5 \\times 10^{19}$',
              '$4.0 \\times 10^{19}$'
            ],
            correctAnswer: 2,
            explanation: '$I = Q/t$ so $Q = It = 4.0 \\times 1 = 4.0$ C per second. Number of electrons = $Q/e = 4.0 / (1.6 \\times 10^{-19}) = 2.5 \\times 10^{19}$.'
          },
          {
            question: 'A wire carries 2.0 A for 3.0 s and then 1.0 A for the next 2.0 s. How much charge passes a point in the wire during the full 5.0 s?',
            options: [
              '3.0 C',
              '6.0 C',
              '8.0 C',
              '15 C'
            ],
            correctAnswer: 2,
            explanation: 'Charge is current times time for each interval: $(2.0)(3.0) + (1.0)(2.0) = 8.0$ C, the area under the current-time graph. 6.0 C leaves out the second interval, 3.0 C adds the currents and ignores time, and 15 C multiplies the summed currents by the total time.'
          }
        ]
      }
    }
  ]
}
