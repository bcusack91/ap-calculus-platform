export const apStatsExpDesignPart3Data = {
  topicSlug: 'experimental-design-apstats',
  sections: [
    {
      id: 'experimentaldesign-p3-intro',
      type: 'text' as const,
      content: `# 🧱 Blocking

**Part 3 of 7 — Blocking**

---

### What Is Blocking?

**Blocking** groups experimental units by a characteristic expected to affect the response, then randomizes within each block.

> 🔑 Purpose: Reduce variability and increase the precision of the experiment.

---

### Randomized Block Design

1. **Identify** a blocking variable (e.g., age, gender, baseline fitness)
2. **Group** subjects into blocks of similar units
3. **Randomly assign** treatments within each block
4. **Analyze** results

### Example

Testing a new diet’s effect on weight loss. Block by gender:

| Block | Treatment A (New Diet) | Treatment B (Control) |
|-------|----------------------|---------------------|
| Males | 15 randomly assigned | 15 randomly assigned |
| Females | 15 randomly assigned | 15 randomly assigned |

### Blocking vs. Confounding Variables

- **Blocking variable:** A variable you KNOW affects the response (you control for it)
- **Confounding variable:** A variable that is mixed up with the explanatory variable (uncontrolled)

### Matched Pairs Design

A special case of blocking where:
- Each block has exactly **2 units** (or same subject gets both treatments)
- Often: before/after measurements on the same person`
    },    {
      id: 'experimentaldesign-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Blocking is used to:',
            options: ['Increase sample size', 'Reduce variability within groups', 'Eliminate the need for randomization', 'Create bias'],
            correctAnswer: 1,
            explanation: 'Blocking reduces variability by grouping similar units together, making it easier to detect treatment effects.'
          },
          {
            question: 'In a matched pairs design:',
            options: ['Subjects are randomly selected from a population', 'Each block contains exactly 2 experimental units', 'No randomization is needed', 'The sample size must be even'],
            correctAnswer: 1,
            explanation: 'Matched pairs = blocks of size 2, either paired subjects or same subject under both conditions.'
          },
          {
            question: 'A good blocking variable is one that:',
            options: ['Is randomly assigned', 'Is known to affect the response variable', 'Has nothing to do with the response', 'Is the same as the explanatory variable'],
            correctAnswer: 1,
            explanation: 'Block on variables you believe influence the response to reduce unexplained variability.'
          }
        ]
      }
    },    {
      id: 'experimentaldesign-p3-input',
      type: 'input-boxes' as const,
      content: `
**Blocking Design** 🧮

A researcher tests whether a new fertilizer increases crop yield. Fields vary in sun exposure (high/low).

**1)** What is the blocking variable?

**2)** How many blocks are there?

**3)** Within each block, how do you assign fertilizer vs. control? (randomly/alphabetically/by size)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['sun exposure', '2', 'randomly'],
        hint1: 'What varies and affects yield?',
        hint2: 'High sun and low sun',
        hint3: 'Assignment within blocks should be...',
        explanation: '1) Sun exposure. 2) Two blocks (high and low sun). 3) Randomly assign within each block.'
      }
    }
  ]
};
