export const apStatsExpDesignPart2Data = {
  topicSlug: 'experimental-design-apstats',
  sections: [
    {
      id: 'experimentaldesign-p2-intro',
      type: 'text' as const,
      content: `# 🎲 Randomization Techniques

**Part 2 of 7 — Randomization Techniques**

---

### Why Randomize?

Randomization serves two purposes:
1. **Eliminates bias** in group assignment
2. **Balances confounding variables** (both known and unknown)

---

### Methods of Random Assignment

| Method | How It Works |
|--------|-------------|
| **Simple random assignment** | Each unit has equal chance of each treatment |
| **Random number table/generator** | Use digits to assign groups |
| **Coin flip / die roll** | Physical randomization device |

### Example: Using a Random Number Table

To assign 30 students to two groups:
1. Number students 01–30
2. Read two-digit numbers from the table
3. First 15 unique numbers → Group A
4. Remaining 15 → Group B

### Completely Randomized Design

All experimental units are randomly assigned to treatments with no grouping.

$$\\\\text{Random Assignment} \\\\to \\\\begin{cases} \\\\text{Treatment 1} \\\\\\\\ \\\\text{Treatment 2} \\\\end{cases} \\\\to \\\\text{Compare Results}$$`
    },    {
      id: 'experimentaldesign-p2-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'In a completely randomized design:',
            options: ['Subjects choose their own group', 'All subjects are assigned randomly to treatments', 'Subjects are first grouped, then randomized', 'No randomization is used'],
            correctAnswer: 1,
            explanation: 'A completely randomized design assigns all subjects randomly to treatment groups without any prior grouping.'
          },
          {
            question: 'Using a random number table ensures:',
            options: ['Perfect balance in every variable', 'Unbiased assignment to groups', 'Equal sample sizes', 'No confounding variables'],
            correctAnswer: 1,
            explanation: 'Random number tables provide unbiased assignment. They don’t guarantee perfect balance but eliminate systematic bias.'
          },
          {
            question: 'Why is flipping a coin an acceptable randomization method?',
            options: ['It’s fast', 'It gives each subject equal probability of each group', 'It always creates equal groups', 'It eliminates all confounders'],
            correctAnswer: 1,
            explanation: 'A fair coin gives 50/50 probability for each group, which is the core requirement of randomization.'
          }
        ]
      }
    },    {
      id: 'experimentaldesign-p2-input',
      type: 'input-boxes' as const,
      content: `
**Random Assignment** 🧮

You have 40 volunteers for a study with 2 treatments.

**1)** In a completely randomized design, how many subjects per group?

**2)** If you use a random number table with numbers 01-40, what range goes to Treatment A? (e.g., 01-20)

**3)** What is the purpose of randomization? (bias/replication/control)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '01-20', 'bias'],
        hint1: '40 total ÷ 2 groups',
        hint2: 'First 20 unique numbers',
        hint3: 'Randomization eliminates what?',
        explanation: '1) 20 per group. 2) Numbers 01-20 go to Treatment A (21-40 to B). 3) Purpose is to eliminate bias in assignment.'
      }
    }
  ]
};
