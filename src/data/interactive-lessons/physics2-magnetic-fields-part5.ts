export const physics2MagneticFieldsPart5Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf5-intro',
      type: 'text' as const,
      content: `
# 🔄 Magnetic Field from Currents

**Part 5 of 7 — Biot-Savart, Ampère's Law, and Solenoids**

So far we've studied the **force** that a magnetic field exerts on charges and wires. Now we turn to the **source** question: how do currents create magnetic fields? Two powerful laws — the Biot-Savart law and Ampère's law — give the answer.
      `
    },
    {
      id: 'mf5-long-wire',
      type: 'text' as const,
      content: `
## Magnetic Field of a Long Straight Wire

The most important result: a long straight wire carrying current $I$ creates a magnetic field at perpendicular distance $r$:

$$\\boxed{B = \\frac{\\mu_0 I}{2\\pi r}}$$

where $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.

### Direction: Right-Hand Rule for Wires

Point your **right thumb** in the direction of the current. Your **fingers curl** in the direction of $\\vec{B}$.

- Current flowing up → $\\vec{B}$ circles counterclockwise (viewed from above)
- Current flowing toward you → $\\vec{B}$ circles counterclockwise

### Key Features

- $B \\propto I$ — double the current, double the field
- $B \\propto 1/r$ — field decreases with distance (but only as $1/r$, not $1/r^2$)
- Field lines are **concentric circles** centered on the wire
- Field is **tangent** to these circles at every point
      `
    },
    {
      id: 'mf5-ampere-law',
      type: 'text' as const,
      content: `
## Ampère's Law

Ampère's law is the magnetic analog of Gauss's law — it relates the magnetic field around a closed loop to the current passing through the loop:

$$\\boxed{\\oint \\vec{B} \\cdot d\\vec{l} = \\mu_0 I_{\\text{enc}}}$$

where $I_{\\text{enc}}$ is the total current enclosed by the Amperian loop.

### When to Use Ampère's Law

Ampère's law is most useful when the geometry has high **symmetry**:

- **Long straight wire** — use a circular Amperian loop centered on the wire
- **Solenoid** — use a rectangular loop
- **Toroid** — use a circular loop inside the toroid

### Deriving the Wire Field

For a long straight wire, choose a circular Amperian loop of radius $r$:

$$\\oint B \\, dl = B(2\\pi r) = \\mu_0 I$$

$$B = \\frac{\\mu_0 I}{2\\pi r} \\checkmark$$

The same result we stated above — Ampère's law confirms it elegantly.
      `
    },
    {
      id: 'mf5-solenoid',
      type: 'text' as const,
      content: `
## Solenoids

A **solenoid** is a tightly wound coil of wire. It produces a nearly **uniform** magnetic field inside and nearly zero field outside.

### Field Inside an Ideal Solenoid

$$\\boxed{B = \\mu_0 n I}$$

where:
- $n = N/L$ is the number of turns per unit length
- $N$ = total number of turns
- $L$ = length of the solenoid
- $I$ = current

### Derivation (Ampère's Law)

Choose a rectangular Amperian loop with one side inside and one outside the solenoid:

- Inside side (length $l$): $B \\cdot l$ (field is uniform and parallel)
- Outside side: 0 (field is negligible)
- Two short sides: 0 (perpendicular to $\\vec{B}$)

Current enclosed: $I_{\\text{enc}} = nlI$ (there are $nl$ turns through the loop)

$$Bl = \\mu_0 nlI$$

$$B = \\mu_0 nI \\checkmark$$

### Key Properties

- Field inside is **uniform** (constant everywhere inside)
- Field outside is approximately **zero**
- Field strength depends on turns per length ($n$) and current ($I$), **not** the total length
- A solenoid is essentially a **magnetic dipole** — its field pattern outside resembles a bar magnet
      `
    },
    {
      id: 'mf5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Magnetic Field Calculation Drill** 🔢

Use $\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A.

1) A long wire carries 15 A. What is $B$ at a distance of 3.0 cm from the wire? (in T, use scientific notation like 1.0e-4)

2) A solenoid is 0.40 m long, has 800 turns, and carries 2.0 A. What is $B$ inside? (in T, to 3 significant figures)

3) How far from a 20 A wire is the field equal to $1.0 \\times 10^{-4}$ T? (in m, to 3 significant figures)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.0e-4', '0.0050', '0.04'],
        hint1: '$B = \\mu_0 I/(2\\pi r) = (4\\pi \\times 10^{-7})(15)/(2\\pi \\times 0.03)$.',
        hint2: '$n = 800/0.40 = 2000$ turns/m. $B = \\mu_0 n I = (4\\pi \\times 10^{-7})(2000)(2.0)$.',
        hint3: 'Rearrange: $r = \\mu_0 I/(2\\pi B) = (4\\pi \\times 10^{-7})(20)/(2\\pi \\times 10^{-4})$.',
        explanation: '(1) $B = (4\\pi \\times 10^{-7})(15)/(2\\pi \\times 0.03) = (2 \\times 10^{-7})(15)/(0.03) = 1.0 \\times 10^{-4}$ T. (2) $n = 2000$, $B = (4\\pi \\times 10^{-7})(2000)(2) = 16\\pi \\times 10^{-4} \\approx 0.00503$ T ≈ 0.0050 T. (3) $r = (4\\pi \\times 10^{-7})(20)/(2\\pi \\times 10^{-4}) = (2 \\times 10^{-7})(20)/(10^{-4}) = 0.04$ m.'
      }
    },
    {
      id: 'mf5-concept-check',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Fields from Currents**
      `,
      exercise: {
        questions: [
          {
            question: 'The magnetic field inside a solenoid depends on:',
            options: [
              'The total number of turns only',
              'The length of the solenoid only',
              'The number of turns per unit length and the current',
              'The radius of the solenoid'
            ],
            correctAnswer: 2,
            explanation: '$B = \\mu_0 n I$ where $n = N/L$. The field depends on turns per unit length and current, not on the radius or the total length independently.'
          },
          {
            question: 'At twice the distance from a long straight wire, the magnetic field is:',
            options: [
              'Twice as strong',
              'Half as strong',
              'One-quarter as strong',
              'Four times as strong'
            ],
            correctAnswer: 1,
            explanation: '$B \\propto 1/r$. Doubling $r$ halves $B$. Note: this is $1/r$, not $1/r^2$ like Coulomb\'s law!'
          }
        ]
      }
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
            label: 'B field of a long wire varies as:',
            options: ['$1/r^{2}$', '1/r', 'constant', 'r']
          },
          {
            label: 'B field inside a solenoid is:',
            options: ['zero', 'uniform', 'varies as 1/r', 'varies as $r^{2}$']
          },
          {
            label: 'Ampère\'s law relates the line integral of B to:',
            options: ['total charge', 'enclosed current', 'electric flux', 'magnetic flux']
          },
          {
            label: 'Doubling both n and I in a solenoid makes B:',
            options: ['2× larger', '4× larger', '8× larger', 'unchanged']
          }
        ],
        correctAnswers: ['1/r', 'uniform', 'enclosed current', '4× larger'],
        hint1: '$B = \\mu_0 I/(2\\pi r)$ — inversely proportional to distance.',
        hint2: '$B = \\mu_0 n I$ inside a solenoid — constant throughout.',
        hint3: 'Doubling both $n$ and $I$: $B \\propto nI \\to (2n)(2I) = 4nI$.',
        explanation: 'Wire field falls as $1/r$. Solenoid field is uniform inside. Ampère\'s law: $\\oint B \\cdot dl = \\mu_0 I_{enc}$. Doubling both $n$ and $I$ gives $B_{new} = \\mu_0(2n)(2I) = 4\\mu_0 nI = 4B$.'
      }
    }
  ]
}
