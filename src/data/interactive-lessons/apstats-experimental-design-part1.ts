export const apStatsExpDesignPart1Data = {
  topicSlug: 'experimental-design-apstats',
  sections: [
    {
      id: 'experimentaldesign-p1-intro',
      type: 'text' as const,
      content: `# 🔬 Experimental Design

**Part 1 of 7 — Principles of Experimental Design**

---

### Three Principles of Experimental Design

| Principle | Description |
|-----------|------------|
| **Control** | Keep all variables the same except the one being tested |
| **Randomization** | Randomly assign subjects to treatment groups |
| **Replication** | Use enough subjects to detect a real effect |

---

### Vocabulary

- **Explanatory variable (factor):** The variable manipulated by the researcher
- **Response variable:** The outcome being measured
- **Treatments:** The specific conditions applied to subjects
- **Experimental units:** The individuals being studied (called **subjects** if human)

### Example

A pharmaceutical company tests a new drug. 200 patients are randomly assigned to receive the drug or a placebo. Blood pressure is measured after 8 weeks.

- **Factor:** Drug vs. placebo
- **Response:** Blood pressure change
- **Experimental units:** The 200 patients
- **Treatments:** Drug, placebo`
    },    {
      id: 'experimentaldesign-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which is NOT a principle of experimental design?',
            options: ['Control', 'Randomization', 'Correlation', 'Replication'],
            correctAnswer: 2,
            explanation: 'Correlation describes a relationship between two quantitative variables; it is not a design principle. The principles are control (comparison), random assignment and replication.'
          },
          {
            question: 'Random assignment helps to:',
            options: ['Increase the number of subjects in each group', 'Balance other variables across groups', 'Guarantee that the groups are identical', 'Eliminate the need for a control group'],
            correctAnswer: 1,
            explanation: 'Randomization tends to spread both known and unknown variables roughly evenly across the groups. It does not change the sample size, cannot make groups exactly identical, and does not replace a comparison group.'
          },
          {
            question: 'In an experiment testing fertilizer on plant growth, the response variable is:',
            options: ['Type of fertilizer', 'Amount of water', 'Plant growth', 'Number of plants'],
            correctAnswer: 2,
            explanation: 'The response variable is what you measure as the outcome — plant growth.'
          }
        ]
      }
    },    {
      id: 'experimentaldesign-p1-input',
      type: 'input-boxes' as const,
      content: `
**Design Identification** 🧮

A researcher wants to test whether a new teaching method improves test scores. She randomly assigns 60 students to either the new method or traditional method, then compares their exam results.

**1)** What is the explanatory variable?

**2)** What is the response variable?

**3)** How many treatments are there?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['teaching method', 'test scores', '2'],
        hint1: 'What is being manipulated?',
        hint2: 'What is being measured?',
        hint3: 'New method vs. traditional method',
        explanation: '1) Teaching method (new vs. traditional). 2) Test scores. 3) Two treatments: new method and traditional method.'
      }
    }
  ]
};
