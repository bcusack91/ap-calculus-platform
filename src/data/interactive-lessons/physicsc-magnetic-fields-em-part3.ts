export const physCEMMagFieldsPart3Data = {
  topicSlug: 'magnetic-fields-physics-c-em',
  sections: [
    {
      id: 'physicsc-magnetic-fields-em-p3-intro',
      type: 'text' as const,
      content: `# 🔬 Biot-Savart Law

**Part 3 of 7 — Magnetic Field from Current**

---

### The Biot-Savart Law

$$d\\vec{B} = \\frac{\\mu_0}{4\\pi} \\frac{I \, d\\vec{l} \\times \\hat{r}}{r^2}$$

---

### Common Results

| Configuration | $B$ at Center/Point |
|--------------|-------------------|
| Long straight wire | $B = \\frac{\\mu_0 I}{2\\pi r}$ |
| Center of circular loop | $B = \\frac{\\mu_0 I}{2R}$ |
| On axis of loop | $B = \\frac{\\mu_0 IR^2}{2(R^2+x^2)^{3/2}}$ |

$\\mu_0 = 4\\pi \\times 10^{-7}$ T·m/A

> 🔑 Right-hand rule: curl fingers in direction of current → thumb points in direction of $\\vec{B}$.`
    },
    {
      id: 'physicsc-magnetic-fields-em-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The magnetic field of a long straight wire falls off as:',
            options: ['$1/r$', '$1/r^2$', '$1/r^3$', 'Constant'],
            correctAnswer: 0,
            explanation: '$B = \\mu_0 I/(2\\pi r)$. Field decreases as $1/r$.'
          }
        ]
      }
    }
  ]
};
