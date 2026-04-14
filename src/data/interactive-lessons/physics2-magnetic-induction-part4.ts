export const physics2MagInductPart4Data = {
  topicSlug: 'magnetic-induction',
  sections: [
    {
      id: 'magneticinduction-p4-intro',
      type: 'text' as const,
      content: `# 🚂 Motional EMF

**Part 4 of 7 — EMF from Moving Conductors**

---

### Motional EMF

When a conductor of length $L$ moves with velocity $v$ perpendicular to a magnetic field $B$:

$$\\boxed{\\mathcal{E} = BLv}$$

### Derivation from Faraday's Law

A conducting rod slides on rails, forming a rectangular loop. The area changes as the rod moves:

$$\\Phi = BA = B(Lx) \\quad \\Rightarrow \\quad \\frac{d\\Phi}{dt} = BL\\frac{dx}{dt} = BLv$$

### Derivation from Forces on Charges

Free charges in the rod experience a magnetic force $\\vec{F} = q\\vec{v} \\times \\vec{B}$. This pushes positive charges to one end, creating a potential difference:

$$\\mathcal{E} = \\frac{W}{q} = \\frac{F \\cdot L}{q} = \\frac{qvBL}{q} = BLv$$

Both approaches give the same result — a beautiful consistency check.

### Induced Current and Power

| Quantity | Formula | Description |
|----------|---------|-------------|
| Current | $I = \\mathcal{E}/R = BLv/R$ | Ohm's law with induced EMF |
| Force on rod | $F = BIL = B^2L^2v/R$ | Magnetic force opposes motion (Lenz's law) |
| Power dissipated | $P = I^2R = B^2L^2v^2/R$ | Converts kinetic energy to heat |
| Power input | $P = Fv = B^2L^2v^2/R$ | Mechanical work required to maintain speed |

> 🔑 Power input = Power dissipated. This confirms energy conservation: all mechanical work goes to resistive heating.
      `
    },
    {
      id: 'magneticinduction-p4-applications',
      type: 'text' as const,
      content: `
## Applications of Motional EMF

### Magnetic Braking

When a conducting plate moves through a magnetic field, eddy currents are induced. By Lenz's law, these create forces that oppose the motion — a frictionless brake!

| Application | How It Works |
|------------|-------------|
| Roller coaster brakes | Conducting fins pass between magnets at end of ride |
| Train eddy current brakes | No contact = no wear, works at any speed |
| Electromagnetic damping | Balances and galvanometers use it for smooth settling |
| Metal sorting | Different conductivities → different braking → separation |

### Terminal Velocity of a Sliding Rod

A rod sliding down magnetic rails reaches terminal velocity when the magnetic braking force equals the gravitational component:

$$mg\\sin\\theta = \\frac{B^2L^2v_t}{R}$$
$$v_t = \\frac{mgR\\sin\\theta}{B^2L^2}$$

This is analogous to terminal velocity in air resistance, but the "drag" comes from electromagnetic forces.

### Worked Example

**A 0.5 m rod slides at 4 m/s on frictionless rails in a 0.8 T field. Resistance = 2 Ω.**

$$\\mathcal{E} = BLv = 0.8 \\times 0.5 \\times 4 = 1.6 \\text{ V}$$
$$I = \\mathcal{E}/R = 1.6/2 = 0.8 \\text{ A}$$
$$F = BIL = 0.8 \\times 0.8 \\times 0.5 = 0.32 \\text{ N (opposing motion)}$$
$$P = I^2R = 0.64 \\times 2 = 1.28 \\text{ W} = Fv = 0.32 \\times 4 \\text{ ✓}$$
      `
    },
    {
      id: 'magneticinduction-p4-check1',
      type: 'multiple-choice' as const,
      content: `
**Motional EMF Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 0.3 m rod moves at 5 m/s perpendicular to a 0.2 T field. EMF =',
            options: ['0.03 V', '0.3 V', '3.0 V', '0.006 V'],
            correctAnswer: 1,
            explanation: '$\\mathcal{E} = BLv = 0.2 \\times 0.3 \\times 5 = 0.3$ V.'
          },
          {
            question: 'If the rod speed doubles, the induced current:',
            options: ['Doubles', 'Quadruples', 'Halves', 'Stays the same'],
            correctAnswer: 0,
            explanation: '$\\mathcal{E} = BLv$ doubles → $I = \\mathcal{E}/R$ doubles. Current is directly proportional to velocity.'
          },
          {
            question: 'The magnetic braking force on a sliding rod is proportional to its:',
            options: ['Position', 'Velocity', 'Acceleration', 'Mass'],
            correctAnswer: 1,
            explanation: '$F = B^2L^2v/R$. The braking force is directly proportional to velocity — just like viscous drag in fluids. This is why faster rod → stronger braking → terminal velocity is reached.'
          },
          {
            question: 'A rod slides on rails and slows down due to magnetic braking. Where does the kinetic energy go?',
            options: [
              'Stored in the magnetic field',
              'Converted to thermal energy in the resistance',
              'Converted to gravitational PE',
              'Radiated as EM waves'
            ],
            correctAnswer: 1,
            explanation: 'The induced current flows through resistance $R$, dissipating power $P = I^2R$. The rod\'s kinetic energy is converted to thermal energy (Joule heating) in the resistor. Energy is conserved: $\\Delta KE = -Q_{\\text{thermal}}$.'
          }
        ]
      }
    },
    {
      id: 'magneticinduction-p4-input',
      type: 'input-boxes' as const,
      content: `
**Motional EMF Calculations** 🧮

A 0.4 m rod slides at 6 m/s on rails in a 0.5 T field. Total resistance = 3 Ω.

**1)** Induced EMF? (V)

**2)** Current? (A)

**3)** Power dissipated? (W)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.2', '0.4', '0.48'],
        hint1: '$\\mathcal{E} = BLv$',
        hint2: '$I = \\mathcal{E}/R$',
        hint3: '$P = I^2R$ or $P = \\mathcal{E}^2/R$',
        explanation: '1) $\\mathcal{E} = 0.5 \\times 0.4 \\times 6 = 1.2$ V. 2) $I = 1.2/3 = 0.4$ A. 3) $P = 0.4^2 \\times 3 = 0.48$ W. Verify: $P = Fv = BILv = 0.5 \\times 0.4 \\times 0.4 \\times 6 = 0.48$ W ✓.'
      }
    }
  ]
};
