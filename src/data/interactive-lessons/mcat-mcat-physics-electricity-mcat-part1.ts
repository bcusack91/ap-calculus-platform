export const mcatPhysElecPart1Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe1-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 1 of 7 — Electrostatics**

### Coulomb's Law

$F = k\\frac{q_1 q_2}{r^2}$ where $k = 8.99 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$

- Like charges repel, opposite charges attract
- Force is proportional to $1/r^2$ (inverse square law)
- The elementary charge is $e = 1.6 \\times 10^{-19}\\;\\text{C}$

### Electric Field

$\\vec{E} = \\frac{F}{q} = k\\frac{Q}{r^2}$

- Points AWAY from positive charges, TOWARD negative charges
- Units: N/C or V/m
- Force on a charge placed in a field: $F = qE$

### Electric Potential (Voltage)

$V = k\\frac{Q}{r}$ — a scalar, so contributions from multiple charges simply add

### Electric Potential Energy

$U = k\\frac{q_1 q_2}{r} = qV$

- Positive charges move from high $V$ to low $V$ spontaneously
- Negative charges move from low $V$ to high $V$ spontaneously

### Equipotential Insight

Moving along an equipotential surface requires no work by the electric field because $\\Delta V = 0$.`
    },
    {
      id: 'pe1-worked',
      type: 'text' as const,
      content: `### Worked Example — Coulomb's Law in a Membrane

Two ions carrying charges $q_1 = +2e$ and $q_2 = -e$ sit $r = 2.0 \\times 10^{-9}\\;\\text{m}$ apart across a cell membrane. What is the magnitude of the electrostatic force between them?

**Step 1 — Convert charges to coulombs.**

$q_1 = 2(1.6 \\times 10^{-19}) = 3.2 \\times 10^{-19}\\;\\text{C}$ and $q_2 = 1.6 \\times 10^{-19}\\;\\text{C}$ (use magnitudes for force size).

**Step 2 — Apply Coulomb's law.**

$F = k\\frac{q_1 q_2}{r^2} = (8.99 \\times 10^9)\\frac{(3.2 \\times 10^{-19})(1.6 \\times 10^{-19})}{(2.0 \\times 10^{-9})^2}$

**Step 3 — Evaluate the pieces.** The numerator product of charges is $5.12 \\times 10^{-38}$ and $r^2 = 4.0 \\times 10^{-18}\\;\\text{m}^2$, so

$F = (8.99 \\times 10^9)\\frac{5.12 \\times 10^{-38}}{4.0 \\times 10^{-18}} \\approx 1.2 \\times 10^{-10}\\;\\text{N}$

The force is attractive (opposite signs). On the MCAT, notice you rarely need an exact decimal — estimating powers of ten and confirming the **direction** (attractive vs. repulsive) is usually enough.`
    },
    {
      id: 'pe1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Electrostatics** 🎯`,
      exercise: {
        questions: [
          {
            question: `If the distance between two charges is tripled, the electrostatic force becomes:`,
            options: [`1/9 of the original (inverse square law)`, `1/3 of the original`, `3 times the original`, `9 times the original`],
            correctAnswer: 0,
            explanation: `Coulomb's law: $F \\propto 1/r^2$. If $r \\to 3r$ then $F \\to F/(3^2) = F/9$.`
          },
          {
            question: `The electric field between two large parallel plates (capacitor) is:`,
            options: [`Uniform (same magnitude everywhere between plates)`, `Stronger near the positive plate`, `Zero`, `Inversely proportional to distance`],
            correctAnswer: 0,
            explanation: `Between parallel plates, $E = V/d$ is uniform. This is why parallel-plate capacitors appear in many MCAT problems — the uniform field simplifies calculations.`
          },
          {
            question: `Electric field lines around a positive point charge point:`,
            options: [`Toward the charge`, `Away from the charge`, `Clockwise`, `In circles`],
            correctAnswer: 1,
            explanation: `By convention, field direction is the force on a positive test charge, so lines radiate outward from positive charges.`
          },
          {
            question: `Moving a charge along an equipotential surface changes electric potential energy by:`,
            options: [`A positive amount`, `A negative amount`, `Zero`, `An amount depending only on distance`],
            correctAnswer: 2,
            explanation: `No potential difference means no electrical work: $\\Delta U = q\\Delta V = 0$.`
          },
          {
            question: `A charge of $+3\\;\\mu\\text{C}$ is placed at a point where the electric field is $400\\;\\text{N/C}$. The force on it is:`,
            options: [`$1.2 \\times 10^{-3}\\;\\text{N}$`, `$1.2 \\times 10^{3}\\;\\text{N}$`, `$133\\;\\text{N}$`, `$0\\;\\text{N}$`],
            correctAnswer: 0,
            explanation: `$F = qE = (3 \\times 10^{-6})(400) = 1.2 \\times 10^{-3}\\;\\text{N}$, directed along the field since the charge is positive.`
          },
          {
            question: `Two identical point charges are separated by distance $r$. If you move them closer so the separation is halved, the potential energy of the pair:`,
            options: [`Doubles`, `Halves`, `Quadruples`, `Is unchanged`],
            correctAnswer: 0,
            explanation: `$U = kq_1q_2/r$, so $U \\propto 1/r$. Halving $r$ doubles $U$ (note this differs from force, which goes as $1/r^2$ and would quadruple).`
          }
        ]
      }
    },
    {
      id: 'pe1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Coulomb's law: $F \\propto q_1 q_2/r^2$, same inverse-square form as gravity
- E-field points away from $+$, toward $-$; force on a charge is $F = qE$
- $V = kQ/r$ is a scalar (not a vector) — easier to add than fields
- Potential energy: $U = kq_1q_2/r = qV$, and $U \\propto 1/r$ (force $\\propto 1/r^2$)`
    }
  ]
};
