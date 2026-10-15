export const physics2EmInductionPart5Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei5-intro',
      type: 'text' as const,
      content: `
# 🔲 Loops Crossing a Field Boundary

**Part 5 of 7 — Loops Entering and Leaving a Field: Flux and EMF Graphs**

One of the most common AP Physics 2 induction setups is a conducting loop that moves at constant speed into a region of magnetic field, through it, and back out. It combines everything so far: flux, Faraday's law, Lenz's law, and motional EMF. It is also the classic place where the exam asks you to **sketch graphs** of flux, EMF, and current versus time.
      `
    },
    {
      id: 'ei5-three-stages',
      type: 'text' as const,
      content: `
## The Setup and the Three Stages

A square loop of side $s$ and resistance $R$ moves to the right at constant speed $v$. Ahead of it is a region of uniform field $B$ pointing **into the page**, wider than the loop. Outside the region, $B = 0$.

### Stage 1 — Entering

Only part of the loop is in the field, and that part **grows** at a steady rate: each second, an area $s \\cdot v$ enters the field.

$$|\\varepsilon| = \\frac{\\Delta\\Phi}{\\Delta t} = \\frac{B(s\\,v\\,\\Delta t)}{\\Delta t} = Bsv$$

This is the same as the rod-on-rails result $\\varepsilon = B\\ell v$: the leading edge is the "rod." Into-page flux is **increasing**, so the induced current makes an out-of-page field inside the loop → **counterclockwise** current.

### Stage 2 — Fully Inside

The whole loop is in the uniform field. As it moves, $B$, $A$, and the angle all stay the same, so the flux is **constant**:

$$\\varepsilon = 0, \\qquad I = 0$$

Moving through a field is not enough — the flux has to **change**.

### Stage 3 — Leaving

The area still in the field **shrinks** at the same rate $s \\cdot v$, so $|\\varepsilon| = Bsv$ again. Now the into-page flux is **decreasing**, so the induced current adds into-page field inside the loop → **clockwise** current, opposite to Stage 1.
      `
    },
    {
      id: 'ei5-graphs',
      type: 'text' as const,
      content: `
## Graphing Flux, EMF, and Current

Call into-page flux positive and counterclockwise current positive.

| Stage | Flux $\\Phi$ | EMF and current |
|-------|--------------|-----------------|
| Before entering | 0 | 0 |
| Entering | Rises in a straight line from 0 to $Bs^2$ | Constant, $Bsv$; counterclockwise |
| Fully inside | Flat at $Bs^2$ | 0 |
| Leaving | Falls in a straight line from $Bs^2$ to 0 | Constant, $Bsv$; clockwise |
| After leaving | 0 | 0 |

### The Rule That Connects the Graphs

The EMF at any instant is set by the **slope** of the flux-versus-time graph ($\\varepsilon = -\\Delta\\Phi/\\Delta t$):

- **Steady rise in flux** → constant EMF of one sign
- **Flat flux** (even if it is large) → zero EMF
- **Steady fall in flux** → constant EMF of the opposite sign

So the EMF graph is a set of **flat steps**: a step on one side of zero, a gap at zero, and an equal step on the other side. The current graph has the same shape, scaled by $1/R$.

### What Changes the Picture

- **Faster loop** → each step is taller (larger $v$) and narrower (less time to enter), but the total flux change is the same
- **Stronger field** → taller steps and a higher flux plateau
- **Field region narrower than the loop** (width $w < s$) → the loop is never fully inside; the leading edge leaves the region before the trailing edge reaches it, so the flux levels off at $Bws$ and the EMF is zero while the loop straddles the region
      `
    },
    {
      id: 'ei5-graph-quiz',
      type: 'multiple-choice' as const,
      content: `
**Stages and Graphs Check** 📈
      `,
      exercise: {
        questions: [
          {
            question: 'A square loop moves at constant speed into, through, and out of a region of uniform field that is wider than the loop. During which stage is there no induced current?',
            options: [
              'While the loop is entering the field',
              'While the loop is fully inside the field',
              'While the loop is leaving the field',
              'At no stage; current flows the whole time'
            ],
            correctAnswer: 1,
            explanation: 'Fully inside a uniform field, the flux through the loop stays constant, so there is no EMF and no current. Entering and leaving both change the flux, so current flows in those stages.'
          },
          {
            question: 'For that loop, the flux-versus-time graph rises in a straight line, stays flat, then falls in a straight line. Which describes the EMF-versus-time graph?',
            options: [
              'A straight rising line, then flat, then a falling line',
              'Constant, then zero, then constant with the opposite sign',
              'Constant with the same sign through all three stages',
              'Zero, then a constant value, then zero again'
            ],
            correctAnswer: 1,
            explanation: 'EMF follows the slope of the flux graph: a steady positive slope, then zero slope, then a steady negative slope. Copying the shape of the flux graph confuses the flux with its rate of change.'
          },
          {
            question: 'The same loop is pushed through the field twice as fast. While it is entering, the induced EMF:',
            options: [
              'Doubles, since the flux changes in half the time',
              'Stays the same, since the total flux change is the same',
              'Halves, since the loop spends half as long entering',
              'Quadruples, since the speed and the area both double'
            ],
            correctAnswer: 0,
            explanation: '$\\varepsilon = Bsv$, so doubling $v$ doubles the EMF; the same flux change now happens in half the time. The area of the loop does not change, and a shorter entry time makes the EMF larger, not smaller.'
          }
        ]
      }
    },
    {
      id: 'ei5-forces-energy',
      type: 'text' as const,
      content: `
## Forces and Energy on the Loop

### Worked Example

The loop has side $s = 0.10$ m and resistance $R = 0.50\\;\\Omega$. It moves at $v = 2.0$ m/s into a field of $B = 0.40$ T (into the page).

**EMF while entering:**
$$\\varepsilon = Bsv = (0.40)(0.10)(2.0) = 0.080 \\text{ V}$$

**Current:**
$$I = \\frac{\\varepsilon}{R} = \\frac{0.080}{0.50} = 0.16 \\text{ A (counterclockwise)}$$

**Force on the leading edge** (the only side fully crossing the field lines; the forces on the top and bottom edges are equal and opposite and cancel):
$$F = IsB = (0.16)(0.10)(0.40) = 6.4 \\times 10^{-3} \\text{ N}$$

With counterclockwise current, the leading (right) edge carries current **up** the page; up × into the page gives a force to the **left** — opposite the velocity, as Lenz's law requires.

**Power:** to keep the speed constant, an outside force must supply
$$P = Fv = (6.4 \\times 10^{-3})(2.0) = 0.0128 \\text{ W}$$
which matches the power dissipated in the loop: $I^2R = (0.16)^2(0.50) = 0.0128$ W. ✓

### The Whole Trip

- **Entering:** braking force opposite $\\vec{v}$; work done by the outside force becomes thermal energy in the loop
- **Fully inside:** no current, no magnetic force — the loop coasts with no push needed
- **Leaving:** the current reverses, but now the **trailing** edge is in the field, so the force **still** points opposite $\\vec{v}$

If nothing pushes the loop, it **slows down** while entering and while leaving, and its lost kinetic energy shows up as thermal energy.
      `
    },
    {
      id: 'ei5-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Loop-Entering Calculation Drill** 📐

A square loop 0.20 m on a side, with resistance 2.0 Ω, moves at a constant 5.0 m/s into a region where $B = 0.50$ T is perpendicular to the loop.

1) Induced EMF while the loop is entering (in V)

2) Induced current while the loop is entering (in A)

3) Magnitude of the magnetic force on the loop while it is entering (in N)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.50', '0.25', '0.025'],
        hint1: '$\\varepsilon = Bsv = (0.50)(0.20)(5.0)$.',
        hint2: '$I = \\varepsilon/R$.',
        hint3: 'Only the leading edge contributes a net force: $F = IsB$.',
        explanation: '$\\varepsilon = (0.50)(0.20)(5.0) = 0.50$ V. $I = 0.50/2.0 = 0.25$ A. $F = IsB = (0.25)(0.20)(0.50) = 0.025$ N, directed opposite the loop\'s velocity.'
      }
    },
    {
      id: 'ei5-exit-quiz',
      type: 'dropdown-select' as const,
      content: `
**Exit Check — Loops and Field Boundaries** ✅

A loop moves to the right at constant speed into, through, and out of a field region where $\\vec{B}$ points into the page.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'While entering, the induced current flows:',
            options: ['clockwise', 'counterclockwise', 'not at all']
          },
          {
            label: 'While fully inside, the induced current flows:',
            options: ['clockwise', 'counterclockwise', 'not at all']
          },
          {
            label: 'While leaving, the induced current flows:',
            options: ['clockwise', 'counterclockwise', 'not at all']
          },
          {
            label: 'While leaving, the magnetic force on the loop points:',
            options: ['to the left', 'to the right', 'into the page', 'nowhere (F = 0)']
          }
        ],
        correctAnswers: ['counterclockwise', 'not at all', 'clockwise', 'to the left'],
        hint1: 'Entering: into-page flux increases, so the induced field points out of the page inside the loop.',
        hint2: 'Fully inside a uniform field, the flux does not change.',
        hint3: 'Lenz\'s law: the magnetic force always opposes the motion that changes the flux.',
        explanation: 'Entering, the increasing into-page flux drives counterclockwise current; fully inside, the flux is constant and no current flows; leaving, the decreasing flux drives clockwise current. In both the entering and leaving stages the magnetic force points left, opposing the loop\'s motion.'
      }
    }
  ]
}
