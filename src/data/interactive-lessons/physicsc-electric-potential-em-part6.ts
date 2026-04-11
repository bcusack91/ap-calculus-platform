export const physCEMPotentialPart6Data = {
  topicSlug: 'electric-potential-physics-c-em',
  sections: [
    {
      id: 'physicsc-electric-potential-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ Electric Potential Workshop

**Part 6 of 7 — Strategies and Practice**

---

### Problem-Solving Framework

1. **Identify** the charge configuration
2. **Choose** between $V$ from $E$ (integration) or $V$ from charges (superposition)
3. **Calculate** potential at points of interest
4. **Use** $\\Delta V$ to find work, KE changes, or $\\vec{E}$

### Key Relationships

$$W = q\\Delta V \quad | \quad KE = q(V_i - V_f) \quad | \quad E = -dV/dr$$`
    },
    {
      id: 'physicsc-electric-potential-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An electron moves from $V=100$ V to $V=50$ V. Its KE:',
            options: ['Decreases by 50 eV', 'Increases by 50 eV', 'Stays the same', 'Depends on path'],
            correctAnswer: 0,
            explanation: '$\\Delta KE = q\\Delta V = (-e)(50-100) = (-e)(-50) = 50$ eV increase... Wait: $q = -e$, $\\Delta V = -50$, so $W = q\\Delta V = (-e)(-50) = +50$ eV. KE increases by 50 eV.'
          }
        ]
      }
    }
  ]
};
