export const physCGravitationPart3Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p3-intro',
      type: 'text' as const,
      content: `# 🪐 Kepler’s Laws

**Part 3 of 7 — Planetary Motion**

---

### Kepler’s Three Laws

| Law | Statement |
|-----|-----------|
| **First** | Orbits are ellipses with the Sun at one focus |
| **Second** | Equal areas are swept in equal times (conservation of angular momentum) |
| **Third** | $T^2 \\propto r^3$: $T^2 = \\frac{4\\pi^2}{GM} r^3$ |

---

### Kepler’s Third Law (Detailed)

$$\\frac{T_1^2}{T_2^2} = \\frac{r_1^3}{r_2^3}$$

**Example:** Earth orbits at 1 AU with $T = 1$ year. Mars at 1.52 AU:
$$T_{\\text{Mars}} = \\left(\\frac{1.52}{1}\\right)^{3/2} \\approx 1.87 \\text{ years}$$`
    },
    {
      id: 'physicsc-gravitation-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Kepler’s Second Law is a consequence of conservation of:',
            options: ['Energy', 'Momentum', 'Angular momentum', 'Mass'],
            correctAnswer: 2,
            explanation: 'Equal areas in equal times = constant areal velocity = conservation of angular momentum.'
          }
        ]
      }
    }
  ]
};
