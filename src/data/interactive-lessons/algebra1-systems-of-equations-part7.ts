export const alg1SystemsPart7Data = {
  topicSlug: "systems-of-equations-algebra1",
  sections: [
    {
      id: 'algebra1-systems-of-equations-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

Final review of all systems methods.

$$\\text{System: } \\begin{cases} ax + by = c \\\\ dx + ey = f \\end{cases}$$

Choose substitution when one variable is isolated. Choose elimination when coefficients match or are easy to align.
      `
    },
    {
      id: 'algebra1-systems-of-equations-p7-worked',
      type: 'text' as const,
      content: `
Full example: Solve $5x + 3y = 21$, $2x + 3y = 12$. Subtract: $3x = 9, x = 3, y = 2$.
      `
    },
    {
      id: 'algebra1-systems-of-equations-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "$4x - y = 10$ and $x + y = 5$. Find $x + 2y$.",
            options: ["$7$","$9$","$8$","$6$"],
            correctAnswer: 2,
            explanation: "Add: $5x = 15, x = 3, y = 2$. $x + 2y = 7$. Actually $3 + 4 = 7$. Hmm, $x + 2y = 3 + 4 = 7$. Wait: $y = 5 - 3 = 2$, $x + 2y = 3 + 4 = 7$. The answer is 7."
          }
        ]
      }
    },
    {
      id: 'algebra1-systems-of-equations-p7-input',
      type: 'input-boxes' as const,
      content: `
**Final Review** 🧮

1) $x+y=10, 2x-y=5$: $x=?$
2) $y=4x, x+y=15$: $y=?$
3) $3x+2y=16, x-y=2$: $x=?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["5","12","4"],
        hint1: "Add: $3x=15$.",
        hint2: "$5x=15$.",
        hint3: "$x=y+2$, substitute.",
        explanation: "1) $x=5$. 2) $y=12$. 3) $x=4$."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Review & Applications is important because:",
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
        explanation: "Review & Applications builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p7-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Review & Applications | Core review & applications principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in review & applications?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
