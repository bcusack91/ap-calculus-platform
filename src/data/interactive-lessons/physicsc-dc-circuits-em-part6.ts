export const physCEMCircuitsPart6Data = {
  topicSlug: 'dc-circuits-physics-c-em',
  sections: [
    {
      id: 'physicsc-dc-circuits-em-p6-intro',
      type: 'text' as const,
      content: `# 🛠️ DC Circuits Workshop

**Part 6 of 7 — Strategies**

---

### Circuit Analysis Steps

1. **Simplify** — combine series/parallel resistors where possible
2. **Label** — assign current directions and loop directions
3. **Apply Kirchhoff’s rules** — write junction and loop equations
4. **Solve** — system of equations for unknowns
5. **Check** — verify signs and units

For RC circuits: identify charging vs. discharging, find $\\tau = RC$.`
    },
    {
      id: 'physicsc-dc-circuits-em-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a circuit with two loops and three unknowns, you need:',
            options: ['1 equation', '2 equations', '3 equations', '4 equations'],
            correctAnswer: 2,
            explanation: 'Three unknowns require three independent equations (combination of junction and loop rules).'
          }
        ]
      }
    }
  ]
};
