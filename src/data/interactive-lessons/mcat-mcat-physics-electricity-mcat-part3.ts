export const mcatPhysElecPart3Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe3-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 3 of 7 — Magnetism**

### Magnetic Force on a Moving Charge

$F = qvB\\sin\\theta$

- Direction: Right-hand rule (fingers point from $\\vec{v}$ to $\\vec{B}$, thumb gives $\\vec{F}$ for a positive charge)
- Force is PERPENDICULAR to both velocity and field
- Stationary charges feel NO magnetic force ($v = 0$)
- Magnetic force does NO work, because it is always perpendicular to velocity

### Circular Motion in a Magnetic Field

A charge moving perpendicular to $\\vec{B}$ follows a circle. Setting magnetic force equal to centripetal force:

$qvB = \\frac{mv^2}{r}$ which rearranges to $r = \\frac{mv}{qB}$

### Force on a Current-Carrying Wire

$F = ILB\\sin\\theta$ where $L$ is the length of wire in the field

### Electromagnetic Induction (Faraday's Law)

$\\varepsilon = -\\frac{\\Delta\\Phi_B}{\\Delta t}$ where magnetic flux $\\Phi_B = BA\\cos\\theta$

- A changing magnetic flux induces an EMF (voltage)
- **Lenz's Law**: the induced current opposes the change that caused it

Flux can change because the field strength, the loop area, or the orientation relative to the field changes.`
    },
    {
      id: 'pe3-worked',
      type: 'text' as const,
      content: `### Worked Example — Radius in a Mass Spectrometer

A proton ($m = 1.67 \\times 10^{-27}\\;\\text{kg}$, $q = 1.6 \\times 10^{-19}\\;\\text{C}$) enters a $0.50\\;\\text{T}$ field perpendicular to its velocity at $v = 2.0 \\times 10^{6}\\;\\text{m/s}$. What is the radius of its circular path?

**Step 1 — Use the circular-motion result.**

$r = \\frac{mv}{qB}$

**Step 2 — Substitute the values.**

$r = \\frac{(1.67 \\times 10^{-27})(2.0 \\times 10^{6})}{(1.6 \\times 10^{-19})(0.50)}$

**Step 3 — Evaluate.** Numerator $= 3.34 \\times 10^{-21}$; denominator $= 8.0 \\times 10^{-20}$.

$r = \\frac{3.34 \\times 10^{-21}}{8.0 \\times 10^{-20}} \\approx 0.042\\;\\text{m} \\approx 4.2\\;\\text{cm}$

This is exactly how a mass spectrometer separates ions: heavier or faster ions curve with a larger radius, while a stronger field $B$ tightens the curve.`
    },
    {
      id: 'pe3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Magnetism** 🎯`,
      exercise: {
        questions: [
          {
            question: `A proton moves parallel to a magnetic field. The magnetic force on it is:`,
            options: [`Zero ($\\sin 0° = 0$)`, `Maximum`, `Equal to $qvB$`, `Depends on speed only`],
            correctAnswer: 0,
            explanation: `$F = qvB\\sin\\theta$. When $\\vec{v}$ is parallel to $\\vec{B}$, $\\theta = 0°$ and $\\sin 0° = 0$. The charge needs a velocity component PERPENDICULAR to $\\vec{B}$ to feel a force.`
          },
          {
            question: `A loop is rotated in a uniform magnetic field at constant angular speed. The induced EMF is caused by changing:`,
            options: [`Charge on the wire`, `Magnetic flux through the loop`, `Wire resistance only`, `Electric field strength only`],
            correctAnswer: 1,
            explanation: `Faraday's law: the induced EMF is proportional to the rate of change of magnetic flux through the loop. Rotating the loop changes $\\cos\\theta$ in $\\Phi_B = BA\\cos\\theta$.`
          },
          {
            question: `An electron moves at $v$ perpendicular to a field $B$, feeling force $F = qvB$. If $v$ doubles, the force:`,
            options: [`Doubles`, `Halves`, `Quadruples`, `Stays the same`],
            correctAnswer: 0,
            explanation: `$F = qvB\\sin\\theta$ is linear in $v$ (with $\\theta = 90°$). Doubling $v$ doubles $F$.`
          },
          {
            question: `Why does the magnetic force on a moving charge do no work on it?`,
            options: [`Because the charge is too small`, `Because the force is always perpendicular to the velocity`, `Because magnetic fields store no energy`, `Because the charge is neutral`],
            correctAnswer: 1,
            explanation: `Work is $W = \\vec{F}\\cdot\\vec{d}$. Since the magnetic force is always perpendicular to the velocity (hence the displacement), the dot product is zero, so it changes direction but not speed.`
          },
          {
            question: `By Lenz's law, when the north pole of a magnet is pushed toward a conducting loop, the induced current in the loop:`,
            options: [`Creates a north pole facing the magnet to oppose it`, `Creates a south pole facing the magnet to attract it`, `Flows only if the magnet stops`, `Is always zero`],
            correctAnswer: 0,
            explanation: `Lenz's law says the induced current opposes the change in flux. The loop faces the incoming north pole with its own induced north pole, repelling the approaching magnet.`
          },
          {
            question: `A $2\\;\\text{m}$ wire carrying $3\\;\\text{A}$ lies perpendicular to a $0.4\\;\\text{T}$ field. The force on it is:`,
            options: [`$2.4\\;\\text{N}$`, `$0.24\\;\\text{N}$`, `$24\\;\\text{N}$`, `$1.2\\;\\text{N}$`],
            correctAnswer: 0,
            explanation: `$F = ILB\\sin\\theta = (3)(2)(0.4)\\sin 90° = 2.4\\;\\text{N}$.`
          }
        ]
      }
    },
    {
      id: 'pe3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Magnetic force: $F = qvB\\sin\\theta$ (zero when $\\vec{v}$ is parallel to $\\vec{B}$)
- Magnetic force does NO work (always perpendicular to velocity)
- Right-hand rule for direction: point fingers from $\\vec{v}$ to $\\vec{B}$, thumb gives $\\vec{F}$
- Circular path radius: $r = mv/(qB)$ — the basis of the mass spectrometer
- Faraday: changing flux induces EMF; Lenz: the induced current opposes the change`
    }
  ]
};
