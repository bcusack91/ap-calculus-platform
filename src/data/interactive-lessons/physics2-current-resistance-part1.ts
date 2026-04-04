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
- What drift velocity means (and why it's shockingly slow)
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

In **semiconductors**, both electrons and "holes" (missing electrons) carry current.
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

### Drift Velocity

When a voltage is applied, electrons don't race through the wire. They drift slowly, bumping into atoms along the way.

The **drift velocity** $v_d$ is typically $\\sim 10^{-4}$ m/s — about 0.1 mm/s!

So why does a light turn on instantly? The **electric field** propagates at nearly the speed of light. Every electron in the wire starts moving almost simultaneously.

### Current in Terms of Drift Velocity

$$I = nAv_d e$$

| Symbol | Meaning |
|--------|---------|
| $n$ | Number density of charge carriers (electrons/m³) |
| $A$ | Cross-sectional area of the wire |
| $v_d$ | Drift velocity |
| $e$ | Charge per carrier ($1.6 \\times 10^{-19}$ C) |

For copper: $n \\approx 8.5 \\times 10^{28}$ electrons/m³
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
              '0.6 A',
              '1.5 A',
              '3.0 A',
              '6.0 A'
            ],
            correctAnswer: 3,
            explanation: '$I = \\Delta Q / \\Delta t = 3.0 / 0.50 = 6.0$ A.'
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
            question: 'The drift velocity of electrons in a typical household wire is approximately:',
            options: [
              '$3 \\times 10^8$ m/s (speed of light)',
              '$340$ m/s (speed of sound)',
              '$10^{-4}$ m/s (fraction of a mm per second)',
              '$1$ m/s'
            ],
            correctAnswer: 2,
            explanation: 'Drift velocity is very slow — typically about $10^{-4}$ m/s. The electric field signal, however, propagates at nearly the speed of light, which is why the light turns on instantly.'
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

3) A copper wire (cross-section $1.0 \\times 10^{-6}$ m², $n = 8.5 \\times 10^{28}$ m⁻³) carries 2.0 A. What is the drift velocity? (in m/s, use scientific notation like 1.5e-4)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7200', '2500', '1.5e-4'],
        hint1: '$Q = I \\cdot t$. Convert 1 hour to seconds: $1 \\times 3600 = 3600$ s.',
        hint2: '$I = Q / t = 5.0 / (2.0 \\times 10^{-3})$.',
        hint3: '$v_d = I / (nAe) = 2.0 / (8.5 \\times 10^{28} \\times 1.0 \\times 10^{-6} \\times 1.6 \\times 10^{-19})$.',
        explanation: '1) $Q = 2.0 \\times 3600 = 7200$ C. 2) $I = 5.0 / 0.002 = 2500$ A. 3) $v_d = 2.0 / (8.5 \\times 10^{28} \\times 10^{-6} \\times 1.6 \\times 10^{-19}) = 2.0 / (1.36 \\times 10^{4}) \\approx 1.5 \\times 10^{-4}$ m/s.'
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
            question: 'If you double the cross-sectional area of a wire while keeping the current the same, the drift velocity:',
            options: [
              'Doubles',
              'Stays the same',
              'Halves',
              'Quadruples'
            ],
            correctAnswer: 2,
            explanation: '$I = nAv_d e$. If $A$ doubles and $I$ stays constant, then $v_d$ must halve to keep the product the same.'
          }
        ]
      }
    }
  ]
}
