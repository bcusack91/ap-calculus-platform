export const physCGravitationPart6Data = {
  topicSlug: 'gravitation-physics-c',
  sections: [
    {
      id: 'physicsc-gravitation-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Gravitation Workshop

**Part 6 of 7 — Strategies and Practice**

---

### Common Problem Types

| Type | Key Approach |
|------|-------------|
| Force between objects | $F = GMm/r^2$ |
| Orbital speed | $v = \\sqrt{GM/r}$ |
| Orbital period | $T = 2\\pi\\sqrt{r^3/(GM)}$ |
| Escape velocity | $v_{esc} = \\sqrt{2GM/r}$ |
| Energy to change orbit | $\\Delta E = -GMm/(2r_f) + GMm/(2r_i)$ |
| Kepler’s Third Law | $T^2/r^3 = \\text{const}$ |`
    },
    {
      id: 'physicsc-gravitation-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'To move a satellite to a higher orbit, you must:',
            options: ['Remove energy', 'Add energy', 'Add no energy (it moves naturally)', 'Reduce mass'],
            correctAnswer: 1,
            explanation: '$E = -GMm/(2r)$. Higher $r$ → less negative $E$ → must add energy (do work on satellite).'
          }
        ]
      }
    }
  ]
};
