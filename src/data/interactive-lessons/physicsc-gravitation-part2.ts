export const physCGravitationPart2Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p2-intro',
      type: 'text' as const,
      content: `# 🛸 Gravitational Potential Energy & Orbits

**Part 2 of 7 — Energy in Gravitational Systems**

---

### Gravitational Potential Energy

$$U = -\\frac{GMm}{r}$$

Note the negative sign — $U = 0$ at $r = \\infty$.

---

### Circular Orbits

For a satellite in circular orbit:
$$\\frac{GMm}{r^2} = \\frac{mv^2}{r}$$

$$v_{\\text{orbit}} = \\sqrt{\\frac{GM}{r}}$$

$$T = 2\\pi\\sqrt{\\frac{r^3}{GM}}$$ (Kepler’s Third Law)

---

### Escape Velocity

$$v_{\\text{escape}} = \\sqrt{\\frac{2GM}{r}} = \\sqrt{2} \\cdot v_{\\text{orbit}}$$

> 🔑 Escape velocity is $\\sqrt{2}$ times orbital velocity at the same radius.`
    },
    {
      id: 'physicsc-gravitation-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'As a satellite moves to a higher orbit:',
            options: ['Speed increases', 'Speed decreases', 'Speed stays constant', 'Period decreases'],
            correctAnswer: 1,
            explanation: '$v = \\sqrt{GM/r}$. Larger $r$ → smaller $v$.'
          },
          {
            question: 'Escape velocity from Earth’s surface is approximately:',
            options: ['$7.9$ km/s', '$11.2$ km/s', '$3.0 \\times 10^8$ m/s', '$299$ m/s'],
            correctAnswer: 1,
            explanation: '$v_{esc} \\approx 11.2$ km/s for Earth.'
          }
        ]
      }
    }
  ]
};
