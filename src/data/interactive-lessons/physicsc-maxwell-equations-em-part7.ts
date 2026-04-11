export const physCEMMaxwellPart7Data = {
  topicSlug: 'maxwell-equations-physics-c-em',
  sections: [
    {
      id: 'physicsc-maxwell-equations-em-p7-intro',
      type: 'text' as const,
      content: `# 📋 Maxwell’s Equations Review

**Part 7 of 7 — Final Summary**

---

### The Big Picture

Maxwell’s four equations describe ALL of classical electromagnetism:

1. **Gauss (E):** Charges → E fields
2. **Gauss (B):** No magnetic monopoles
3. **Faraday:** Changing B → E
4. **Ampere-Maxwell:** Currents + changing E → B

Together they predict EM waves traveling at $c = 1/\\sqrt{\\mu_0\\epsilon_0}$.

> 🔑 "Maxwell’s equations are the most beautiful equations in physics." — Richard Feynman`
    },
    {
      id: 'physicsc-maxwell-equations-em-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How many Maxwell’s equations are there?',
            options: ['2', '3', '4', '5'],
            correctAnswer: 2,
            explanation: 'There are exactly four Maxwell’s equations, covering all of classical electromagnetism.'
          }
        ]
      }
    }
  ]
};
