export const physCEMCircuitsPart7Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 DC Circuits Review

**Part 7 of 7 — Summary**

---

### Essential Formulas

| Formula | Use |
|---------|-----|
| $V = IR$ | Ohm’s law |
| $R_s = R_1 + R_2$ | Series resistance |
| $1/R_p = 1/R_1 + 1/R_2$ | Parallel resistance |
| $P = IV = I^2R = V^2/R$ | Power |
| $\\tau = RC$ | Time constant |
| $q(t) = Q_0 e^{-t/RC}$ | Discharge |
| $V_{term} = \\mathcal{E} - Ir$ | Real battery |`
    },
    {
      id: 'physicsc-dc-circuits-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which combination gives the smallest equivalent resistance?',
            options: ['$10\\Omega$ and $10\\Omega$ in series', '$10\\Omega$ and $10\\Omega$ in parallel', '$5\\Omega$ alone', 'All are equal'],
            correctAnswer: 1,
            explanation: 'Series: 20Ω. Parallel: 5Ω. Single 5Ω. The parallel combination gives 5Ω, same as the single resistor.'
          }
        ]
      }
    }
  ]
};
