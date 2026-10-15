export const physics2MagneticFieldsPart5Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf5-intro',
      type: 'text' as const,
      content: `
# 🔄 Magnetic Field from Currents

**Part 5 of 7 — Magnetic Fields Made by Currents and Moving Charges**

So far we've studied the **force** that a magnetic field exerts on charges and wires. Now we turn to the **source** question: how do moving charges and currents create magnetic fields in the first place? We'll build from a single moving charge, to a long straight wire, to several wires at once, and finally to a loop of wire.
      `
    },
    {
      id: 'mf5-moving-charge',
      type: 'text' as const,
      content: `
## The Field of a Single Moving Charge

A charge at rest makes only an electric field. Set it moving, and it also makes a **magnetic field**.

### What the Field Depends On

- **Speed** — a faster charge makes a stronger field
- **Distance** — the field weakens as you move away from the charge
- **Direction to the point** — the field is **strongest** at points where the line from the charge to the point is perpendicular to $\\vec{v}$, and it is **zero** at points directly ahead of or behind the charge

### Direction

At any point, $\\vec{B}$ is **perpendicular to both** the velocity $\\vec{v}$ and the line from the charge to that point. Use the right-hand rule: point your right thumb along $\\vec{v}$ (for a positive charge); your fingers curl in the direction of $\\vec{B}$, wrapping in circles around the line of motion. For a negative charge, reverse the direction.

### From One Charge to a Current

A current is an enormous number of charges drifting along a wire. Each contributes a little circular field around the wire's line, and together they produce the steady field of a current-carrying wire.
      `
    },
    {
      id: 'mf5-long-wire',
      type: 'text' as const,
      content: `
## Magnetic Field of a Long Straight Wire

A long straight wire carrying current $I$ creates a magnetic field at perpendicular distance $r$:

$$\\boxed{B = \\frac{\\mu_0 I}{2\\pi r}}$$

where $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A. A handy shortcut: $\\dfrac{\\mu_0}{2\\pi} = 2 \\times 10^{-7}$ T·m/A, so $B = (2 \\times 10^{-7})\\,I/r$.

### Direction: Right-Hand Rule for Wires

Point your **right thumb** in the direction of the current. Your **fingers curl** in the direction of $\\vec{B}$.

- Current flowing toward you (out of the page) → $\\vec{B}$ circles **counterclockwise**
- Current flowing away from you (into the page) → $\\vec{B}$ circles **clockwise**
- Current flowing up the page → $\\vec{B}$ points **into the page** on the wire's right side and **out of the page** on its left side

### Key Features

- $B \\propto I$ — double the current, double the field
- $B \\propto 1/r$ — field decreases with distance (but only as $1/r$, not $1/r^2$)
- Field lines are **concentric circles** centered on the wire
- The field is **tangent** to these circles at every point — it has no component toward, away from, or along the wire
      `
    },
    {
      id: 'mf5-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Fields from Moving Charges and Wires**
      `,
      exercise: {
        questions: [
          {
            question: 'At twice the distance from a long straight wire, the magnetic field is:',
            options: [
              'Twice as strong',
              'Half as strong',
              'One-quarter as strong',
              'Four times as strong'
            ],
            correctAnswer: 1,
            explanation: '$B \\propto 1/r$, so doubling $r$ halves $B$. One-quarter as strong would follow a $1/r^2$ law like the field of a point charge, which does not apply to a long wire.'
          },
          {
            question: 'A long wire in the plane of the page carries current up the page. At a point just to the right of the wire, the magnetic field points:',
            options: [
              'Out of the page',
              'Into the page',
              'Toward the wire',
              'Up the page'
            ],
            correctAnswer: 1,
            explanation: 'With the right thumb pointing up the page, the fingers curl into the page on the right side of the wire. The field circles the wire, so it never points toward the wire or along the current.'
          },
          {
            question: 'A proton moves east. At which point is the magnetic field produced by the proton equal to zero?',
            options: [
              'A point directly north of it',
              'A point directly east of it',
              'A point directly above it',
              'A point directly south of it'
            ],
            correctAnswer: 1,
            explanation: 'A moving charge produces no magnetic field at points along its line of motion, so a point directly ahead (east) gets zero field. Points north, south, or above lie off that line, and the field there is strongest because they are perpendicular to the velocity.'
          }
        ]
      }
    },
    {
      id: 'mf5-superposition',
      type: 'text' as const,
      content: `
## Superposition: Several Wires at Once

Magnetic fields are vectors. Near two or more wires, find each wire's field separately and then **add them as vectors**.

### Worked Example

Wire A carries **6.0 A** and wire B carries **2.0 A**, both **out of the page**. They are 10 cm apart, with A on the left. Find the field at the midpoint.

**Step 1 — magnitudes.** Each wire is 0.050 m from the midpoint:

$$B_A = \\frac{(2 \\times 10^{-7})(6.0)}{0.050} = 2.4 \\times 10^{-5} \\text{ T}, \\qquad B_B = \\frac{(2 \\times 10^{-7})(2.0)}{0.050} = 8.0 \\times 10^{-6} \\text{ T}$$

**Step 2 — directions.** Both currents point out of the page, so both fields circle counterclockwise. The midpoint is to the right of A, where A's field points **up** the page; it is to the left of B, where B's field points **down** the page.

**Step 3 — add.** The fields oppose each other:

$$B_{\\text{net}} = 2.4 \\times 10^{-5} - 0.80 \\times 10^{-5} = 1.6 \\times 10^{-5} \\text{ T, up the page}$$

**What if B's current is reversed (into the page)?** B's field at the midpoint now points up as well, so the fields add: $B_{\\text{net}} = 3.2 \\times 10^{-5}$ T, up the page.

### Where Is the Field Zero?

For same-direction currents, the fields cancel somewhere **between** the wires, closer to the **smaller** current. Setting the magnitudes equal, with $x$ measured from A:

$$\\frac{6.0}{x} = \\frac{2.0}{0.10 - x} \\quad \\Rightarrow \\quad x = 0.075 \\text{ m}$$

The field is zero 7.5 cm from A (2.5 cm from B). For opposite currents, the fields between the wires always add, so there is no zero there.
      `
    },
    {
      id: 'mf5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Magnetic Field Calculation Drill** 🔢

Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.

1) A long wire carries 15 A. What is $B$ at a distance of 3.0 cm from the wire? (in T, use scientific notation like 1.0e-4)

2) Two long parallel wires 8.0 cm apart each carry 4.0 A, in **opposite** directions. What is the magnitude of $B$ at the midpoint? (in T, use scientific notation like 2.0e-5)

3) Two long parallel wires 12 cm apart carry 9.0 A and 3.0 A in the **same** direction. How far from the 9.0 A wire, between the wires, is the net field zero? (in cm)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.0e-4', '4.0e-5', '9.0'],
        hint1: '$B = \\mu_0 I/(2\\pi r) = (2 \\times 10^{-7})(15)/(0.030)$.',
        hint2: 'Each wire is 0.040 m from the midpoint. With opposite currents, the two fields at the midpoint point the same way, so add them.',
        hint3: 'Set $9.0/x = 3.0/(12 - x)$ with $x$ in cm and solve.',
        explanation: '(1) $B = (2 \\times 10^{-7})(15)/(0.030) = 1.0 \\times 10^{-4}$ T. (2) Each wire gives $(2 \\times 10^{-7})(4.0)/(0.040) = 2.0 \\times 10^{-5}$ T in the same direction, so $B = 4.0 \\times 10^{-5}$ T. (3) $9.0(12 - x) = 3.0x$ gives $108 = 12x$, so $x = 9.0$ cm from the 9.0 A wire.'
      }
    },
    {
      id: 'mf5-loop-center',
      type: 'text' as const,
      content: `
## The Field at the Center of a Current Loop

Bend a wire into a circular loop and every small piece of it makes a field that circles that piece. At the **center** of the loop, all of those contributions point the same way — **along the loop's axis**, perpendicular to the plane of the loop.

### Finding the Direction

Curl the fingers of your right hand in the direction of the current around the loop. Your **thumb** points in the direction of $\\vec{B}$ at the center.

- Loop in the page, current **counterclockwise** → $\\vec{B}$ at the center points **out of the page**
- Loop in the page, current **clockwise** → $\\vec{B}$ at the center points **into the page**

### A Loop Is a Small Magnet

Outside the loop, the field lines bend around and close on themselves, just like the field of a short bar magnet. The face the field lines leave acts as a **north pole**; the other face acts as a **south pole**. This is why circulating charges — including electrons in atoms — make magnetic dipoles (Part 6).

On the AP Physics 2 exam you only need the **direction** of the field at a loop's center; formulas for the field strength of loops and coils are not tested.
      `
    },
    {
      id: 'mf5-exit-quiz',
      type: 'dropdown-select' as const,
      content: `
**Exit Check — Fields from Currents** ✅
      `,
      exercise: {
        dropdowns: [
          {
            label: 'B field of a long wire varies with distance as:',
            options: ['$1/r^{2}$', '1/r', 'constant', 'r']
          },
          {
            label: 'Field lines around a long straight wire are:',
            options: ['radial lines', 'concentric circles', 'parallel lines', 'lines along the wire']
          },
          {
            label: 'Current runs counterclockwise around a loop in the page. B at its center points:',
            options: ['into the page', 'out of the page', 'toward the top', 'nowhere (B = 0)']
          },
          {
            label: 'Two parallel wires carry equal currents in the same direction. B at the midpoint is:',
            options: ['zero', 'twice one wire\'s field', 'equal to one wire\'s field', 'half of one wire\'s field']
          }
        ],
        correctAnswers: ['1/r', 'concentric circles', 'out of the page', 'zero'],
        hint1: '$B = \\mu_0 I/(2\\pi r)$ — inversely proportional to distance.',
        hint2: 'Curl your right fingers with the current around the loop; your thumb gives $\\vec{B}$ at the center.',
        hint3: 'Between two same-direction currents, the two fields point in opposite directions.',
        explanation: 'A long wire\'s field falls as $1/r$ and circles the wire in concentric circles. Counterclockwise current in a loop gives a field out of the page at the center. Equal same-direction currents produce equal and opposite fields at the midpoint, so they cancel to zero.'
      }
    }
  ]
}
