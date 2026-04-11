export const physCEMPotentialPart4Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p4-intro',
      type: 'text' as const,
      content: `# 🔢 Potential of Charge Distributions

**Part 4 of 7 — Superposition of Potentials**

---

### Superposition Principle

For multiple point charges:
$$V = \\sum \\frac{kq_i}{r_i}$$

> 🔑 Unlike electric field, potential is a **scalar** — no vector addition needed!

---

### Continuous Distributions

$$V = \\int \\frac{k \, dq}{r}$$

Common results:
| Distribution | Potential |
|-------------|-----------|
| Point charge | $V = kQ/r$ |
| Conducting sphere | $V = kQ/R$ (surface), $V = kQ/r$ (outside) |
| Ring (on axis) | $V = kQ/\\sqrt{R^2 + x^2}$ |
| Disk (on axis) | $V = \\frac{\\sigma}{2\\epsilon_0}(\\sqrt{R^2+x^2} - x)$ |`
    },
    {
      id: 'physicsc-electric-potential-em-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The advantage of using potential (vs. field) for multiple charges is:',
            options: ['Potential is always positive', 'Potential is a scalar (no vectors)', 'Potential is always zero', 'No calculation needed'],
            correctAnswer: 1,
            explanation: 'Potential is a scalar — you add numbers, not vectors. Much simpler for complex configurations.'
          }
        ]
      }
    }
  ]
};
