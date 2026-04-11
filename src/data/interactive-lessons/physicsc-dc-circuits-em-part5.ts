export const physCEMCircuitsPart5Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p5-intro',
      type: 'text' as const,
      content: `# 🔋 EMF and Internal Resistance

**Part 5 of 7 — Real Batteries**

---

### Electromotive Force (EMF)

EMF ($\\mathcal{E}$) is the voltage a battery provides with no current flowing.

With internal resistance $r$:

$$V_{\\text{terminal}} = \\mathcal{E} - Ir$$

---

### Power Delivered

$$P_{\\text{delivered}} = I^2 R_{\\text{external}}$$

$$P_{\\text{wasted}} = I^2 r$$

Maximum power transfer occurs when $R_{\\text{ext}} = r$.

> 🔑 Internal resistance means the terminal voltage drops under load.`
    },
    {
      id: 'physicsc-dc-circuits-em-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A battery with $\\mathcal{E} = 12$ V and $r = 2\\Omega$ drives $I = 2$ A. Terminal voltage:',
            options: ['$12$ V', '$8$ V', '$16$ V', '$4$ V'],
            correctAnswer: 1,
            explanation: '$V = \\mathcal{E} - Ir = 12 - 2(2) = 8$ V.'
          }
        ]
      }
    }
  ]
};
