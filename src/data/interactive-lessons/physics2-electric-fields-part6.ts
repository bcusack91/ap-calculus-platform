export const physics2ElectricFieldsPart6Data = {
  topicSlug: 'electric-fields-potential',
  sections: [
    {
      id: 'ef6-intro',
      type: 'text' as const,
      content: `
# 🗺️ Equipotentials & the E–V Relationship

**Part 6 of 7 — Connecting Field and Potential**

Electric field and electric potential are two views of the same physics. This part connects them — and introduces the powerful concept of equipotential surfaces.
      `
    },
    {
      id: 'ef6-equipotentials',
      type: 'text' as const,
      content: `
## Equipotential Surfaces

An **equipotential surface** is a surface where every point has the same potential $V$.

### Key Properties

1. **No work to move along an equipotential** — $W = q\\Delta V = 0$ when $\\Delta V = 0$
2. **Field lines are perpendicular to equipotentials** — always, everywhere
3. **Conductors at equilibrium are equipotentials** — the entire surface (and interior) is at one potential
4. **Closer spacing = stronger field** — just like contour lines on a topographic map

### Analogy: Topographic Maps

| Topographic Map | Equipotential Map |
|:---:|:---:|
| Contour lines = constant elevation | Equipotential lines = constant voltage |
| Closely spaced = steep slope | Closely spaced = strong field |
| Water flows perpendicular to contours | Field lines perpendicular to equipotentials |
| Water flows downhill | Positive charges move toward lower $V$ |
      `
    },
    {
      id: 'ef6-e-v-relationship',
      type: 'text' as const,
      content: `
## The E–V Relationship

The electric field points in the direction of **decreasing** potential:

$$E = -\\frac{dV}{dr}$$

For a **uniform field** (like between parallel plates):

$$E = \\frac{\\Delta V}{d}$$

Where $d$ is the distance between the plates and $\\Delta V$ is the potential difference.

### What This Means

- $\\vec{E}$ points from **high V to low V** (like rolling downhill)
- The magnitude of $E$ equals the rate at which $V$ changes with distance
- In regions where $V$ is constant (equipotential), $E = 0$
- Where equipotential surfaces are close together, $E$ is large

### Units Check

$$\\frac{\\Delta V}{d} = \\frac{\\text{V}}{\\text{m}} = \\frac{\\text{J/C}}{\\text{m}} = \\frac{\\text{N}\\cdot\\text{m/C}}{\\text{m}} = \\frac{\\text{N}}{\\text{C}}$$

So V/m = N/C ✓ — both are valid units for electric field.
      `
    },
    {
      id: 'ef6-parallel-plates',
      type: 'text' as const,
      content: `
## Parallel Plates: The Uniform Field

Two large parallel conducting plates with charge $+Q$ and $-Q$:

- **Between the plates:** $E = \\Delta V / d$ (uniform, pointing from + to −)
- **Equipotentials:** Equally-spaced planes parallel to the plates
- **Outside the plates:** $E \\approx 0$ (fields from each plate cancel)

### Example

A capacitor has plates separated by $d = 0.02$ m with $\\Delta V = 100$ V across them.

$$E = \\frac{100}{0.02} = 5000\\ \\text{V/m}$$

The field is 5000 V/m everywhere between the plates, directed from the positive plate toward the negative plate.

This is the simplest and most important field configuration in AP Physics 2.
      `
    },
    {
      id: 'ef6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** — Equipotentials & E–V Connection
      `,
      exercise: {
        questions: [
          {
            question: 'A charge moves along an equipotential surface. The work done by the electric force is:',
            options: [
              'Positive (field does work)',
              'Negative (work done against field)',
              'Zero',
              'Depends on the path taken'
            ],
            correctAnswer: 2,
            explanation: '$W = q\\Delta V = q(0) = 0$. No potential difference along an equipotential → no work done. The force is perpendicular to the motion.'
          },
          {
            question: 'Equipotential lines are packed closely on the left side of a diagram and spread out on the right. The field is:',
            options: [
              'Stronger on the left',
              'Stronger on the right',
              'Uniform throughout',
              'Zero on the right'
            ],
            correctAnswer: 0,
            explanation: 'Closely-spaced equipotentials = large $dV/dr$ = strong field. Widely-spaced = weak field. Just like steep vs. gentle slopes on a topographic map.'
          },
          {
            question: 'The potential at point A is +400 V and at point B (2 cm away) is +100 V. If the field is uniform, its magnitude is:',
            options: [
              '200 V/m',
              '15,000 V/m',
              '500 V/m',
              '300 V/m'
            ],
            correctAnswer: 1,
            explanation: '$E = |\\Delta V|/d = |100 - 400|/0.02 = 300/0.02 = 15{,}000$ V/m, directed from A toward B (high V to low V).'
          }
        ]
      }
    },
    {
      id: 'ef6-drill',
      type: 'input-boxes' as const,
      content: `
**Parallel Plate Drill**

Two parallel plates are separated by $d = 5.0$ mm. The top plate is at $+600$ V and the bottom plate is at $0$ V.

1) Electric field between the plates (in V/m)
2) Potential at the exact midpoint between the plates (in V)
3) Force on a proton ($q = 1.6 \\times 10^{-19}$ C) between the plates (in N, use scientific notation: e.g., 1.92e-14)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['120000', '300', '1.92e-14'],
        hint1: '$E = \\Delta V / d = 600 / 0.005$.',
        hint2: 'In a uniform field, potential varies linearly. Midpoint = average: $(600 + 0)/2$.',
        hint3: '$F = qE = (1.6 \\times 10^{-19})(120{,}000)$.',
        explanation: '$E = 600/0.005 = 120{,}000$ V/m. Midpoint potential = 300 V (linear interpolation). $F = (1.6 \\times 10^{-19})(1.2 \\times 10^5) = 1.92 \\times 10^{-14}$ N, directed from + to − plate (downward).'
      }
    },
    {
      id: 'ef6-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz**
      `,
      exercise: {
        questions: [
          {
            question: 'Inside a hollow conducting sphere at equilibrium, which is true?',
            options: [
              '$E = 0$ and $V = 0$',
              '$E = 0$ and $V = $ constant (equal to the surface potential)',
              '$E \\neq 0$ and $V = 0$',
              '$E = 0$ and $V$ varies with position'
            ],
            correctAnswer: 1,
            explanation: 'Inside a conductor at equilibrium: $E = 0$ everywhere. Since $E = -dV/dr = 0$, the potential must be constant throughout — equal to the value at the surface.'
          },
          {
            question: 'An electron is placed between parallel plates and released from rest near the negative plate. It will:',
            options: [
              'Accelerate toward the positive plate',
              'Accelerate toward the negative plate',
              'Stay in place',
              'Oscillate between the plates'
            ],
            correctAnswer: 1,
            explanation: 'The electric field points from + to − plate. The electron (negative charge) feels a force *opposite* to E → toward the positive plate. It accelerates uniformly (like gravity for a dropped ball).'
          }
        ]
      }
    }
  ]
}
