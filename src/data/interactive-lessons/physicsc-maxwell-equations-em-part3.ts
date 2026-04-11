export const physCEMMaxwellPart3Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p3-intro',
      type: 'text' as const,
      content: `# 🌊 Electromagnetic Waves

**Part 3 of 7 — Light as an EM Wave**

---

### EM Wave Properties

$$c = \\frac{1}{\\sqrt{\\mu_0 \\epsilon_0}} = 3.0 \\times 10^8 \\text{ m/s}$$

| Property | Value |
|----------|-------|
| Speed | $c = 3 \\times 10^8$ m/s (in vacuum) |
| $\\vec{E} \\perp \\vec{B}$ | E and B are perpendicular |
| $\\vec{E} \\perp \\vec{v}$ | Transverse wave |
| $E/B = c$ | Ratio of field amplitudes |

---

### Energy in EM Waves

Energy density: $u = \\epsilon_0 E^2 = B^2/\\mu_0$

Intensity: $I = \\frac{1}{2}c\\epsilon_0 E_0^2$

Poynting vector: $\\vec{S} = \\frac{1}{\\mu_0}\\vec{E} \\times \\vec{B}$

> 🔑 Light is an electromagnetic wave — predicted by Maxwell’s equations before experimentally confirmed by Hertz.`
    },
    {
      id: 'physicsc-maxwell-equations-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The speed of light in vacuum equals:',
            options: ['$\\sqrt{\\mu_0 \\epsilon_0}$', '$\\mu_0/\\epsilon_0$', '$1/\\sqrt{\\mu_0 \\epsilon_0}$', '$\\epsilon_0/\\mu_0$'],
            correctAnswer: 2,
            explanation: '$c = 1/\\sqrt{\\mu_0\\epsilon_0}$. This was Maxwell’s great prediction.'
          }
        ]
      }
    }
  ]
};
