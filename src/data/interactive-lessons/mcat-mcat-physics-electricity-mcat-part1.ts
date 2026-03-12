export const mcatPhysElecPart1Data = {
  topicSlug: 'mcat-physics-electricity-mcat',
  sections: [
    {
      id: 'pe1-intro',
      type: 'text' as const,
      content: `# Physics: Electricity, Magnetism & Optics

**Part 1 of 7 — Electrostatics**

### Coulomb's Law

$$F = k\\frac{q_1 q_2}{r^2} \\qquad k = 8.99 \\times 10^9\\;\\text{N}\\cdot\\text{m}^2/\\text{C}^2$$

- Like charges repel, opposite charges attract
- Force is proportional to $1/r^2$ (inverse square law)

### Electric Field

$$\\vec{E} = \\frac{F}{q} = k\\frac{Q}{r^2}$$

- Points AWAY from positive charges, TOWARD negative charges
- Units: N/C or V/m

### Electric Potential (Voltage)

$$V = k\\frac{Q}{r} \\qquad \\Delta V = -\\int \\vec{E}\\cdot d\\vec{r}$$

### Electric Potential Energy

$$U = k\\frac{q_1 q_2}{r} = qV$$

- Positive charges move from high V to low V spontaneously
- Negative charges move from low V to high V spontaneously

### Equipotential Insight

Moving along an equipotential surface requires no work by the electric field because $\\Delta V = 0$.`
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
            explanation: `Coulomb\'s law: $F \\propto 1/r^2$. If $r \\to 3r$: $F \\to F/(3^2) = F/9$.`
          },
          {
            question: `The electric field between two large parallel plates (capacitor) is:`,
            options: [`Uniform (same magnitude everywhere between plates)`, `Stronger near the positive plate`, `Zero`, `Inversely proportional to distance`],
            correctAnswer: 0,
            explanation: `Between parallel plates, $E = V/d$ is uniform. This is why parallel plate capacitors are used in many MCAT problems — the uniform field simplifies calculations.`
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
            explanation: `No potential difference means no electrical work: $\\Delta U=q\\Delta V=0$.`
          }
        ]
      }
    },
    {
      id: 'pe1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Coulomb's law: $F \\propto q_1 q_2/r^2$, same form as gravity
- E-field points away from +, toward −
- $V = kQ/r$ (scalar, not vector — easier to calculate!)
- Potential energy: $U = kq_1q_2/r = qV$`
    }
  ]
};
