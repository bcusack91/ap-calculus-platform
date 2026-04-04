export const physics2EmInductionPart1Data = {
  topicSlug: 'electromagnetic-induction',
  sections: [
    {
      id: 'ei1-intro',
      type: 'text' as const,
      content: `
# 🔄 Magnetic Flux

**Part 1 of 7 — Counting Field Lines Through a Surface**

In the 1830s, Michael Faraday discovered that **changing magnetic fields can produce electric currents**. To quantify this, we first need a way to measure "how much magnetic field passes through a surface." That quantity is **magnetic flux**.
      `
    },
    {
      id: 'ei1-flux-definition',
      type: 'text' as const,
      content: `
## Defining Magnetic Flux

**Magnetic flux** $\\Phi_B$ measures the total magnetic field passing through a given area. Think of it as counting "how many field lines thread through a loop."

### Formula

$$\\Phi_B = BA\\cos\\theta$$

where:
- $B$ = magnetic field strength (T)
- $A$ = area of the surface (m²)
- $\\theta$ = angle between $\\vec{B}$ and the **area normal** $\\hat{n}$ (the vector perpendicular to the surface)

### SI Unit

$$[\\Phi_B] = \\text{T} \\cdot \\text{m}^2 = \\text{Wb (Weber)}$$

### Visualizing Flux

Imagine rain falling on a hoop:
- **Hoop flat (face up)**: Maximum rain passes through → $\\theta = 0°$, $\\Phi = BA$
- **Hoop tilted**: Less rain passes through → $0° < \\theta < 90°$, $\\Phi = BA\\cos\\theta$
- **Hoop vertical (on edge)**: No rain passes through → $\\theta = 90°$, $\\Phi = 0$

The same logic applies to magnetic field lines passing through a loop of wire.
      `
    },
    {
      id: 'ei1-special-cases',
      type: 'text' as const,
      content: `
## Special Cases of Flux

### Case 1: $\\theta = 0°$ — Field perpendicular to surface (parallel to normal)

$$\\Phi_B = BA\\cos 0° = BA \\quad \\text{(maximum flux)}$$

The field lines pass straight through the loop.

### Case 2: $\\theta = 90°$ — Field parallel to surface (perpendicular to normal)

$$\\Phi_B = BA\\cos 90° = 0 \\quad \\text{(zero flux)}$$

The field lines skim along the surface without passing through.

### Case 3: $\\theta = 60°$ — Tilted surface

$$\\Phi_B = BA\\cos 60° = \\frac{1}{2}BA$$

Only half the maximum flux threads through the loop.

### Important Sign Convention

Flux can be **positive or negative** depending on which direction the field passes through the surface. If $\\vec{B}$ points in the same direction as $\\hat{n}$, the flux is positive. If opposite, it's negative. For a single loop, we usually choose $\\hat{n}$ so that flux is positive.

### Multiple Loops (Coil)

For a coil with $N$ turns, the total flux linkage is:

$$\\Phi_{\\text{total}} = N\\Phi_B = NBA\\cos\\theta$$

Each turn contributes the same flux, so we multiply by $N$.
      `
    },
    {
      id: 'ei1-flux-quiz',
      type: 'multiple-choice' as const,
      content: `
**Magnetic Flux Concept Check** 🧠
      `,
      exercise: {
        questions: [
          {
            question: 'What is the SI unit of magnetic flux?',
            options: [
              'Tesla (T)',
              'Weber (Wb)',
              'Henry (H)',
              'Volt (V)'
            ],
            correctAnswer: 1,
            explanation: 'Magnetic flux is measured in Webers: 1 Wb = 1 T·m².'
          },
          {
            question: 'A circular loop of area 0.05 m² is in a uniform field $B = 0.3$ T. The field is perpendicular to the plane of the loop. The magnetic flux through the loop is:',
            options: [
              '0 Wb',
              '0.015 Wb',
              '0.15 Wb',
              '6.0 Wb'
            ],
            correctAnswer: 1,
            explanation: 'Field perpendicular to the plane means $\\vec{B}$ is parallel to $\\hat{n}$, so $\\theta = 0°$. $\\Phi = BA\\cos 0° = (0.3)(0.05)(1) = 0.015$ Wb.'
          },
          {
            question: 'If you rotate the loop so that the magnetic field is parallel to the plane of the loop, the flux becomes:',
            options: [
              'Maximum ($BA$)',
              'Half maximum ($BA/2$)',
              'Zero',
              'Negative maximum ($-BA$)'
            ],
            correctAnswer: 2,
            explanation: 'Field parallel to the plane of the loop means $\\vec{B}$ is perpendicular to $\\hat{n}$, so $\\theta = 90°$. $\\Phi = BA\\cos 90° = 0$.'
          }
        ]
      }
    },
    {
      id: 'ei1-changing-flux',
      type: 'text' as const,
      content: `
## Ways to Change Magnetic Flux

Since $\\Phi_B = BA\\cos\\theta$, the flux changes if **any** of the three factors change:

### 1. Change $B$ (magnetic field strength)
- Slide a magnet toward or away from a loop
- Increase/decrease current in a nearby electromagnet

### 2. Change $A$ (area of the loop)
- Stretch or compress a flexible loop
- Pull a loop out of the field region

### 3. Change $\\theta$ (angle between $\\vec{B}$ and $\\hat{n}$)
- Rotate the loop in the field
- This is how **generators** work!

### Why This Matters

Faraday discovered that **changing flux induces an EMF** (voltage) in the loop. The faster the flux changes, the larger the induced EMF. This is the foundation of electromagnetic induction — the topic of this entire unit!
      `
    },
    {
      id: 'ei1-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Magnetic Flux Calculation Drill** 📐

A rectangular loop has dimensions 20 cm × 30 cm and sits in a uniform magnetic field of $B = 0.5$ T.

1) Area of the loop in m²
2) Maximum possible flux through the loop (in Wb)
3) Flux when the loop is tilted so $\\theta = 60°$ (in Wb)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.06', '0.03', '0.015'],
        hint1: '$A = (0.20)(0.30)$ m².',
        hint2: 'Maximum flux occurs at $\\theta = 0°$: $\\Phi = BA = (0.5)(0.06)$.',
        hint3: '$\\Phi = BA\\cos 60° = (0.03)(0.5) = 0.015$ Wb.',
        explanation: '$A = 0.20 \\times 0.30 = 0.06$ m². $\\Phi_{\\max} = (0.5)(0.06) = 0.03$ Wb. At $\\theta = 60°$: $\\Phi = 0.03 \\cos 60° = 0.03 \\times 0.5 = 0.015$ Wb.'
      }
    },
    {
      id: 'ei1-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Magnetic Flux** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'A coil has 200 turns, each with area 0.01 m², in a field of 0.4 T perpendicular to the coil. The total flux linkage is:',
            options: [
              '0.004 Wb',
              '0.8 Wb',
              '4 Wb',
              '80 Wb'
            ],
            correctAnswer: 1,
            explanation: '$\\Phi_{\\text{total}} = NBA\\cos\\theta = (200)(0.4)(0.01)(1) = 0.8$ Wb.'
          },
          {
            question: 'Which of the following will NOT change the magnetic flux through a loop?',
            options: [
              'Rotating the loop in the field',
              'Moving the loop parallel to a uniform field (without leaving it)',
              'Increasing the magnetic field strength',
              'Stretching the loop to increase its area'
            ],
            correctAnswer: 1,
            explanation: 'Moving a loop parallel to a uniform field does not change $B$, $A$, or $\\theta$, so the flux remains constant. You need to change at least one of these three quantities to change the flux.'
          }
        ]
      }
    }
  ]
}
