export const physics2GeomOpticsPart1Data = {
  topicSlug: 'geometric-optics-mirrors',
  sections: [
    {
      id: 'geometricopticsmirrors-p1-intro',
      type: 'text' as const,
      content: `# 🔭 Geometric Optics — Mirrors

**Part 1 of 7 — Reflection & Plane Mirrors**

---

### Law of Reflection

$$\\\\theta_i = \\\\theta_r$$

Both angles measured from the **normal** to the surface.

---

### Plane Mirrors

| Property | Description |
|----------|-------------|
| Image distance | Equal to object distance ($d_i = -d_o$) |
| Image type | Virtual, upright, same size |
| Magnification | $m = 1$ |
| Left-right reversal | Yes |

### Mirror Equation (for curved mirrors)

$$\\\\frac{1}{d_o} + \\\\frac{1}{d_i} = \\\\frac{1}{f} = \\\\frac{2}{R}$$

### Magnification

$$m = -\\\\frac{d_i}{d_o} = \\\\frac{h_i}{h_o}$$

| $m$ | Image |
|-----|-------|
| $m > 0$ | Upright (virtual) |
| $m < 0$ | Inverted (real) |
| $|m| > 1$ | Enlarged |
| $|m| < 1$ | Reduced |`
    },
    {
      id: 'geometricopticsmirrors-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes reflection & plane mirrors?',
            options: ['A core AP Physics 2 concept', 'Not tested on the AP exam', 'Only relevant for Physics C', 'A concept from chemistry'],
            correctAnswer: 0,
            explanation: 'Reflection & Plane Mirrors is a fundamental concept tested on the AP Physics 2 exam.'
          }
        ]
      }
    }
  ]
};
