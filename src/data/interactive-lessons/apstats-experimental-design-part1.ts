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
|-----------|-------------|
| **Control** | Compare treatment group to a control group |
| **Randomization** | Randomly assign subjects to treatments |
| **Replication** | Use enough subjects to reduce chance variation |

> 🔑 A well-designed experiment uses ALL three principles to establish causation.

---

### Completely Randomized Design (CRD)

All experimental units are randomly assigned to treatment groups with no grouping or blocking.

**Example:** 60 patients randomly assigned to Drug A (30) or Placebo (30).

### Randomized Block Design

Subjects are first grouped into **blocks** based on a characteristic, then randomly assigned within each block.

**Example:** Block by gender, then randomly assign within male and female groups.

---

### Why Randomize?

Randomization:
- Eliminates **systematic bias**
- Distributes **confounding variables** evenly across groups
- Allows us to make **causal conclusions**`
    },
    {
      id: 'experimentaldesign-p1-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best describes principles of experimental design?',
            options: ['A fundamental concept in this unit', 'Not covered on the AP exam', 'Only relevant for AP Calculus', 'A concept from physics'],
            correctAnswer: 0,
            explanation: 'Principles of Experimental Design is a core AP Statistics concept tested on the exam.'
          }
        ]
      }
    }
  ]
};
