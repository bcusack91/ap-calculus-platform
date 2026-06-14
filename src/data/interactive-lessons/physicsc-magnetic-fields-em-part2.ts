export const physCEMMagFieldsPart2Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p2-intro',
      type: 'text' as const,
      content: `# 🔌 Force on Current-Carrying Wires

**Part 2 of 7 — Wires in Magnetic Fields**

---

### Force on a Wire

$$\\vec{F} = I\\vec{L} \\times \\vec{B}$$

Magnitude: $F = BIL\\sin\\theta$

where $L$ is the length of wire in the field.

---

### Torque on a Current Loop

$$\\vec{\\tau} = \\vec{\\mu} \\times \\vec{B}$$

where $\\vec{\\mu} = NIA\\hat{n}$ is the magnetic dipole moment.

$|\\tau| = NIAB\\sin\\theta$

> 🔑 This is the principle behind electric motors — a current loop in a magnetic field experiences a torque.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p2-motor',
      type: 'text' as const,
      content: `### Force on a Bent Wire, and the Motor Principle

For a wire of arbitrary shape, sum the force on each element: $\\vec{F} = I\\int d\\vec{l}\\times\\vec{B}$. In a **uniform** field, $\\vec{B}$ factors out and the integral reduces to the straight-line displacement between endpoints:

$\\vec{F} = I\\,\\vec{L}_{\\text{net}}\\times\\vec{B},$

where $\\vec{L}_{\\text{net}}$ points from start to finish. A semicircle of radius $R$ therefore feels the same force as a straight wire of length $2R$ joining its ends.

**Closed loop ⇒ zero net force.** For any closed loop $\\oint d\\vec{l} = 0$, so the net force vanishes in a uniform field — yet the loop still feels a **torque** $\\tau = \\mu B\\sin\\theta$ that twists it to align $\\vec{\\mu}$ with $\\vec{B}$.

**The motor.** A DC motor uses a commutator to flip the current direction every half-turn, so the torque always pushes the loop the same way around. The magnetic potential energy $U = -\\vec{\\mu}\\cdot\\vec{B} = -\\mu B\\cos\\theta$ is lowest when aligned — the loop "wants" to rotate toward that configuration.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p2-worked',
      type: 'text' as const,
      content: `### Worked Example — Torque on a Loop and Integrating Force

A rectangular coil of $N = 50$ turns, width $w = 0.10\\text{ m}$ and height $h = 0.20\\text{ m}$, carries $I = 2.0\\text{ A}$ in a uniform field $B = 0.30\\text{ T}$. The coil's normal makes $\\theta = 30^\\circ$ with $\\vec{B}$. Find the torque.

**Step 1 — Magnetic moment.** $\\mu = NIA = NI(wh) = (50)(2.0)(0.10\\times0.20) = (50)(2.0)(0.020) = 2.0\\ \\text{A}\\cdot\\text{m}^2$.

**Step 2 — Apply the torque law.** $\\tau = \\mu B\\sin\\theta = (2.0)(0.30)\\sin30^\\circ = (0.60)(0.50) = 0.30\\ \\text{N}\\cdot\\text{m}$.

**Why the cross product? (calculus view).** For a curved or angled wire, the total force is the line integral $\\vec{F} = I\\int d\\vec{l}\\times\\vec{B}$. In a *uniform* field $\\vec{B}$ can come outside the integral: $\\vec{F} = I\\left(\\int d\\vec{l}\\right)\\times\\vec{B}$. For a **closed loop**, $\\int d\\vec{l} = 0$, so the **net force is zero** — but the torque is generally nonzero, which is exactly what spins a motor. The two horizontal sides of our coil carry opposite-direction currents, producing forces that form a couple of magnitude $\\tau = \\mu B\\sin\\theta$.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 2 m wire carrying 3 A is perpendicular to a 0.5 T field. $F =$',
            options: ['$1$ N', '$3$ N', '$1.5$ N', '$6$ N'],
            correctAnswer: 1,
            explanation: '$F = BIL\\sin(90^\\circ) = 0.5(3)(2)(1) = 3$ N.'
          },
          {
            question: 'The net magnetic force on a closed current loop in a UNIFORM field is:',
            options: ['Always zero', 'Equal to $BIL$', 'Equal to $\\mu B$', 'Maximum when $\\theta = 0$'],
            correctAnswer: 0,
            explanation: 'Since $\\oint d\\vec{l} = 0$, $\\vec{F} = I(\\oint d\\vec{l})\\times\\vec{B} = 0$. The loop can still feel a net torque, however.'
          },
          {
            question: 'A current loop experiences MAXIMUM torque when its magnetic moment $\\vec{\\mu}$ is oriented:',
            options: ['Parallel to $\\vec{B}$', 'Antiparallel to $\\vec{B}$', 'Perpendicular to $\\vec{B}$', 'At 45° to $\\vec{B}$'],
            correctAnswer: 2,
            explanation: '$\\tau = \\mu B\\sin\\theta$ is maximum at $\\theta = 90^\\circ$ (moment perpendicular to the field) and zero when aligned.'
          },
          {
            question: 'The magnetic dipole moment of an $N$-turn loop of area $A$ carrying current $I$ is:',
            options: ['$IA$', '$NIA$', '$NI/A$', '$NA/I$'],
            correctAnswer: 1,
            explanation: '$\\mu = NIA$, directed along the loop normal by the right-hand rule.'
          },
          {
            question: 'A wire makes a 30° angle with a 0.40 T field and carries 5.0 A over a length of 0.50 m. The force on it is:',
            options: ['$0.50$ N', '$1.0$ N', '$0.87$ N', '$2.0$ N'],
            correctAnswer: 0,
            explanation: '$F = BIL\\sin\\theta = (0.40)(5.0)(0.50)\\sin30^\\circ = (1.0)(0.50) = 0.50$ N.'
          },
          {
            question: 'The potential energy of a magnetic dipole in a field is $U = -\\vec{\\mu}\\cdot\\vec{B}$. The orientation of lowest energy (most stable) is when $\\vec{\\mu}$ is:',
            options: ['Perpendicular to $\\vec{B}$', 'Parallel to $\\vec{B}$', 'Antiparallel to $\\vec{B}$', 'At 60° to $\\vec{B}$'],
            correctAnswer: 1,
            explanation: '$U = -\\mu B\\cos\\theta$ is minimized at $\\theta = 0$ (parallel), just as a compass needle settles aligned with the field.'
          }
        ]
      }
    }
  ]
};
