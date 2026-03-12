export const physics2MagneticFieldsPart6Data = {
  topicSlug: 'magnetic-fields-forces',
  sections: [
    {
      id: 'mf6-intro',
      type: 'text' as const,
      content: `
# ⚙️ Torque on Current Loops

**Part 6 of 7 — Magnetic Dipoles, Motors, and Galvanometers**

A current loop in a magnetic field doesn't just experience a net force — it experiences a **torque** that tends to rotate it. This is the operating principle behind electric motors, galvanometers, and many other devices.
      `
    },
    {
      id: 'mf6-torque-derivation',
      type: 'text' as const,
      content: `
## Torque on a Rectangular Current Loop

Consider a rectangular loop (sides $a$ and $b$) carrying current $I$ in a uniform field $\\vec{B}$.

### Forces on the Sides

- **Sides parallel to $\\vec{B}$**: No force ($\\theta = 0°$)
- **Sides perpendicular to $\\vec{B}$**: Force $F = BIa$ on each, but in **opposite directions**

These opposite forces create a **couple** — a net torque with zero net force.

### The Torque

The perpendicular distance between the two force lines (the lever arm) depends on the angle $\\phi$ between the loop's normal and $\\vec{B}$:

$$\\tau = F \\cdot b\\sin\\phi = BIa \\cdot b\\sin\\phi = BIA\\sin\\phi$$

where $A = ab$ is the area of the loop.

For a coil with $N$ turns:

$$\\boxed{\\tau = NIAB\\sin\\phi}$$

where $\\phi$ is the angle between the **magnetic dipole moment** $\\vec{\\mu}$ (normal to the loop) and $\\vec{B}$.
      `
    },
    {
      id: 'mf6-dipole-moment',
      type: 'text' as const,
      content: `
## Magnetic Dipole Moment

The **magnetic dipole moment** of a current loop is:

$$\\boxed{\\vec{\\mu} = NI\\vec{A}}$$

where:
- $N$ = number of turns
- $I$ = current
- $\\vec{A}$ = area vector (perpendicular to the loop, direction from right-hand rule: curl fingers in direction of current, thumb = $\\vec{A}$)

The magnitude is:

$$\\mu = NIA$$

### Torque in Terms of $\\vec{\\mu}$

$$\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$$

$$|\\tau| = \\mu B \\sin\\phi$$

### Equilibrium Positions

- **$\\phi = 0°$**: $\\vec{\\mu} \\parallel \\vec{B}$ → $\\tau = 0$ → **stable equilibrium** (lowest energy)
- **$\\phi = 180°$**: $\\vec{\\mu}$ antiparallel to $\\vec{B}$ → $\\tau = 0$ → **unstable equilibrium** (highest energy)
- **$\\phi = 90°$**: maximum torque

### Potential Energy

$$U = -\\vec{\\mu} \\cdot \\vec{B} = -\\mu B \\cos\\phi$$

- Minimum energy at $\\phi = 0°$: $U = -\\mu B$
- Maximum energy at $\\phi = 180°$: $U = +\\mu B$
      `
    },
    {
      id: 'mf6-motors',
      type: 'text' as const,
      content: `
## Applications

### Electric Motor

A motor uses the torque on a current loop to create continuous rotation:

1. Current flows through a coil in a magnetic field → torque rotates the coil
2. A **commutator** (split ring) reverses the current direction every half turn
3. This ensures the torque always acts in the same rotational direction
4. The coil spins continuously!

Without the commutator, the coil would just oscillate back and forth around the equilibrium position ($\\vec{\\mu} \\parallel \\vec{B}$).

### Galvanometer

A galvanometer measures small currents:

1. Current flows through a coil suspended in a magnetic field
2. The magnetic torque $\\tau = NIAB\\sin\\phi$ is opposed by a spring
3. The coil rotates until $\\tau_{\\text{magnetic}} = \\tau_{\\text{spring}}$
4. Greater current → greater deflection → read on a scale

The deflection angle is proportional to the current, making it a useful measuring device.

### Key Difference

- **Motor**: commutator allows continuous rotation
- **Galvanometer**: spring limits rotation to a measurable deflection
      `
    },
    {
      id: 'mf6-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Torque Concept Quiz** ⚙️
      `,
      exercise: {
        questions: [
          {
            question: 'The torque on a current loop in a magnetic field is maximum when the angle between $\\vec{\\mu}$ and $\\vec{B}$ is:',
            options: [
              '0°',
              '45°',
              '90°',
              '180°'
            ],
            correctAnswer: 2,
            explanation: '$\\tau = \\mu B \\sin\\phi$. Maximum when $\\sin\\phi = 1$, i.e., $\\phi = 90°$. At $0°$ and $180°$, the torque is zero.'
          },
          {
            question: 'A current loop is in stable equilibrium when:',
            options: [
              '$\\vec{\\mu}$ is perpendicular to $\\vec{B}$',
              '$\\vec{\\mu}$ is parallel to $\\vec{B}$ (same direction)',
              '$\\vec{\\mu}$ is antiparallel to $\\vec{B}$ (opposite direction)',
              'The current is zero'
            ],
            correctAnswer: 1,
            explanation: 'Stable equilibrium occurs at minimum potential energy: $U = -\\mu B \\cos\\phi$ is minimized when $\\phi = 0°$ ($\\vec{\\mu} \\parallel \\vec{B}$).'
          },
          {
            question: 'What is the function of the commutator in a DC motor?',
            options: [
              'It increases the current',
              'It creates the magnetic field',
              'It reverses the current direction every half turn to maintain rotation',
              'It converts AC to DC'
            ],
            correctAnswer: 2,
            explanation: 'The commutator reverses the current direction every half revolution, ensuring the torque always acts in the same rotational direction for continuous spinning.'
          }
        ]
      }
    },
    {
      id: 'mf6-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Torque Calculation Drill** 🔢

A rectangular coil has 50 turns, dimensions 8.0 cm × 5.0 cm, carries 2.0 A, and sits in a 0.30 T uniform magnetic field.

1) Magnetic dipole moment $\\mu$ (in A·m²)
2) Maximum torque on the coil (in N·m)
3) Torque when $\\vec{\\mu}$ makes a 30° angle with $\\vec{B}$ (in N·m)

*Round all answers to 3 significant figures.*
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.40', '0.12', '0.06', '0.400', '0.4', '0.120', '0.060'],
        hint1: '$\\mu = NIA = (50)(2.0)(0.08 \\times 0.05)$.',
        hint2: '$\\tau_{max} = \\mu B = (0.40)(0.30)$, occurring when $\\phi = 90°$.',
        hint3: '$\\tau = \\mu B \\sin 30° = (0.40)(0.30)(0.5)$.',
        explanation: '(1) $A = 0.08 \\times 0.05 = 0.004$ m². $\\mu = (50)(2.0)(0.004) = 0.40$ A·m². (2) $\\tau_{max} = \\mu B = (0.40)(0.30) = 0.12$ N·m. (3) $\\tau = (0.40)(0.30)\\sin 30° = 0.12 \\times 0.5 = 0.06$ N·m.'
      }
    },
    {
      id: 'mf6-exit-quiz',
      type: 'dropdown-select' as const,
      content: `
**Exit Check — Torque and Dipoles** ✅
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Magnetic dipole moment μ = NIA has units of:',
            options: ['T·m', 'A·m²', 'N/m', 'Wb']
          },
          {
            label: 'Torque is zero when μ and B are:',
            options: ['perpendicular', 'at 45°', 'parallel or antiparallel', 'never zero']
          },
          {
            label: 'A motor uses a _____ to reverse current each half-turn:',
            options: ['transformer', 'capacitor', 'commutator', 'resistor']
          },
          {
            label: 'Potential energy U = −μBcosφ is minimum when φ =',
            options: ['0°', '45°', '90°', '180°']
          }
        ],
        correctAnswers: ['A·m²', 'parallel or antiparallel', 'commutator', '0°'],
        hint1: '$\\mu = NIA$ → (turns)(amps)(m²) = A·m².',
        hint2: '$\\tau = \\mu B \\sin\\phi = 0$ when $\\phi = 0°$ or $180°$.',
        hint3: 'Minimum of $-\\cos\\phi$ occurs at $\\phi = 0°$.',
        explanation: 'μ has units A·m². Torque vanishes when μ ∥ B or μ antiparallel to B (sin = 0). A commutator reverses current for continuous rotation. Energy is minimum at φ = 0° (stable equilibrium).'
      }
    }
  ]
}
