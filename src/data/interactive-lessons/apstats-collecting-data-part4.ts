export const apStatsCollectingDataPart4Data = {
  topicSlug: 'collecting-data-apstats',
  sections: [
    {
      id: 'apstats-collectingdata-p4-intro',
      type: 'text' as const,
      content: `# 🔬 Principles of Experimental Design

**Part 4 of 7 — Control, Randomize, Replicate, Block**

---

### Four Principles of Good Experiments

| Principle | What It Means | Why It Matters |
|-----------|--------------|----------------|
| **Control** | Hold extraneous variables constant or use a control group | Isolates the effect of the treatment |
| **Randomization** | Randomly assign subjects to treatment groups | Equalizes confounding variables across groups |
| **Replication** | Use enough subjects to detect real effects | Reduces chance variation |
| **Blocking** | Group similar subjects together, then randomize within blocks | Controls for known sources of variation |

> 🔑 **Random assignment** → reduces confounding → supports causal claims

---

### Completely Randomized Design

The simplest experimental design:
1. Pool all experimental units
2. Randomly assign each to a treatment group
3. Compare responses

**Example:** 60 patients randomly assigned to Drug A (30) vs. Placebo (30)

---

### Randomized Block Design

When you know a variable (like age or gender) might affect results:
1. **Block** subjects by that variable
2. **Randomly assign** treatments within each block

**Example:** Block by gender (male/female), then randomly assign drug/placebo within each gender block

---

### Matched Pairs Design

A special case of blocking where each block has exactly 2 units (or the same person gets both treatments):
- **Two matched subjects:** one gets treatment, one gets control
- **Same subject:** each person serves as their own control (crossover design)`
    },
    {
      id: 'apstats-collectingdata-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Design Principles** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The purpose of random assignment in experiments is to:',
            options: ['Ensure a large sample size', 'Reduce confounding variables', 'Eliminate the need for a control group', 'Make the study observational'],
            correctAnswer: 1,
            explanation: 'Random assignment distributes confounding variables evenly across treatment groups.'
          },
          {
            question: 'A study blocks subjects by age before randomizing treatment. This is a:',
            options: ['Completely randomized design', 'Randomized block design', 'Matched pairs design', 'Observational study'],
            correctAnswer: 1,
            explanation: 'Blocking by age, then randomizing within blocks = randomized block design.'
          },
          {
            question: 'In a matched pairs experiment, subjects are:',
            options: ['All given the same treatment', 'Paired by a similar characteristic', 'Randomly selected from different populations', 'Never given a placebo'],
            correctAnswer: 1,
            explanation: 'Matched pairs uses subjects paired by characteristics, or the same person gets both treatments.'
          }
        ]
      }
    },
    {
      id: 'apstats-collectingdata-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Design** 🔽
      `,
      exercise: {
        dropdowns: [
          { label: '100 mice randomly assigned to 4 diet groups', options: ['Completely randomized', 'Randomized block', 'Matched pairs'] },
          { label: 'Runners paired by speed, one gets caffeine, one placebo', options: ['Completely randomized', 'Randomized block', 'Matched pairs'] },
          { label: 'Students grouped by GPA, then randomly assigned tutoring methods', options: ['Completely randomized', 'Randomized block', 'Matched pairs'] },
          { label: 'Each patient tries both Drug A and Drug B in random order', options: ['Completely randomized', 'Randomized block', 'Matched pairs'] }
        ],
        correctAnswers: ['Completely randomized', 'Matched pairs', 'Randomized block', 'Matched pairs'],
        hint1: 'No blocking, just random assignment.',
        hint2: 'Pairs of similar subjects.',
        hint3: 'Blocks by GPA, then randomize within.',
        explanation: 'CRD: all random. Block: group then randomize. Matched pairs: pairs or crossover.'
      }
    }
  ]
};
