export const physCEMPotentialPart1Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p1-intro',
      type: 'text' as const,
      content: `# ⚡ Electric Potential Energy

**Part 1 of 7 — Work and Energy in Electric Fields**

---

### Potential Energy of Point Charges

$$U = k\\frac{q_1 q_2}{r} = \\frac{1}{4\\pi\\epsilon_0}\\frac{q_1 q_2}{r}$$

| Sign | Interpretation |
|------|---------------|
| $U > 0$ | Like charges (repulsive) — energy stored |
| $U < 0$ | Unlike charges (attractive) — energy released |

---

### Work-Energy Theorem

$$W_{\\text{electric}} = -\\Delta U = -(U_f - U_i)$$

The electric force is conservative, so we can define potential energy.

> 🔑 Work done by the electric field = decrease in PE. Positive charges naturally move from high PE to low PE.`
    },
    {
      id: 'physicsc-electric-potential-em-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two positive charges are brought closer together. The PE:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Becomes zero'],
            correctAnswer: 0,
            explanation: 'Like charges: $U = kq_1q_2/r > 0$. As $r$ decreases, $U$ increases (takes work).'
          },
          {
            question: 'Work done by the electric force on a charge moving in an electric field is:',
            options: ['$W = qEd$', '$W = -\\Delta U$', '$W = \\Delta KE$', 'All of the above can be correct'],
            correctAnswer: 3,
            explanation: 'All three expressions are valid ways to compute the work done by the electric force.'
          }
        ]
      }
    }
  ]
};
