export const alg1SystemsPart6Data = {
  topicSlug: "systems-of-equations-algebra1",
  sections: [
    {
      id: 'algebra1-systems-of-equations-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Mixed practice combining all methods.

| Method | Best When |
|--------|----------|
| Graphing | Visualization needed |
| Substitution | One variable isolated |
| Elimination | Coefficients align |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p6-worked',
      type: 'text' as const,
      content: `
Choose the best method:
- $y = 3x + 1$, $2x + y = 11$ → Substitution (y isolated)
- $3x + 2y = 7$, $3x - 2y = 1$ → Elimination (add to eliminate y)
      `
    },
    {
      id: 'algebra1-systems-of-equations-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Best method for $x = 2y + 1$, $3x - y = 8$?",
            options: ["Graphing","Substitution","Elimination","Guess and check"],
            correctAnswer: 1,
            explanation: "$x$ is already isolated, so substitution is most efficient."
          }
        ]
      }
    },
    {
      id: 'algebra1-systems-of-equations-p6-input',
      type: 'input-boxes' as const,
      content: `
**Solve any method** 🧮

1) $y=x-1$, $x+y=5$: $x=?$
2) $2x+3y=13$, $2x-y=5$: $y=?$
3) $x+y=8$, $2x+3y=21$: $x=?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","2","3"],
        hint1: "Substitution.",
        hint2: "Subtract.",
        hint3: "$x = 8-y$, substitute.",
        explanation: "1) $x=3, y=2$. 2) $4y=8, y=2$. 3) $x=3, y=5$."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Problem-Solving Workshop is important because:",
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
        explanation: "Problem-Solving Workshop builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p6-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Problem-Solving Workshop | Core problem-solving workshop principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p6-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in problem-solving workshop?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
