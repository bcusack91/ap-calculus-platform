export const alg1SystemsPart4Data = {
  topicSlug: "systems-of-equations-algebra1",
  sections: [
    {
      id: 'algebra1-systems-of-equations-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Special Cases

**Part 4 of 7 — Special Cases**

Not all systems have exactly one solution.

| Case | Lines | Solutions |
|------|-------|-----------|
| One solution | Intersecting | $(x, y)$ |
| No solution | Parallel | $\\emptyset$ |
| Infinite | Same line | All points |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p4-worked',
      type: 'text' as const,
      content: `
Check: $y = 2x+1$ and $y = 2x+5$ → parallel (no solution). $y = 3x-2$ and $6x-2y = 4$ → same line (infinite).
      `
    },
    {
      id: 'algebra1-systems-of-equations-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "$2x+y=5$ and $4x+2y=10$ have:",
            options: ["No solution","One solution","Infinitely many","Two solutions"],
            correctAnswer: 2,
            explanation: "Second equation is 2× the first — same line."
          }
        ]
      }
    },
    {
      id: 'algebra1-systems-of-equations-p4-input',
      type: 'input-boxes' as const,
      content: `
**Classify** 🧮

1) $y=x+1$, $y=x+3$: solutions? (0/1/inf)
2) $y=2x$, $y=-x+3$: solutions?
3) $2y=4x+6$, $y=2x+3$: solutions?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["0","1","inf"],
        hint1: "Parallel (same slope).",
        hint2: "Different slopes.",
        hint3: "Divide first by 2.",
        explanation: "1) 0 (parallel). 2) 1 (intersect). 3) Infinite (same line)."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Special Cases is important because:",
            options: ["It builds on prior concepts","It is tested frequently","Both of these","Neither"]
          },
          {
            label: "The best study strategy is:",
            options: ["Memorize formulas only","Practice problems regularly","Skip to review","Guess on tests"]
          }
        ],
        correctAnswers: ["Both of these","Practice problems regularly"],
        hint1: "Think about why we study this.",
        hint2: "Active practice is key.",
        explanation: "Special Cases builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Special Cases | Core special cases principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in special cases?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
