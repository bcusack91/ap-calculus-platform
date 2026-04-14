export const alg1InequalitiesPart6Data = {
  topicSlug: "inequalities-algebra1",
  sections: [
    {
      id: 'algebra1-inequalities-p6-intro',
      type: 'text' as const,
      content: `
# 🛠️ Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

Mixed practice with all inequality types.
      `
    },
    {
      id: 'algebra1-inequalities-p6-worked',
      type: 'text' as const,
      content: `
Mixed: $3x + 1 > 7$ → $x > 2$. $|x - 4| \\leq 3$ → $1 \\leq x \\leq 7$. Intersection: $2 < x \\leq 7$.
      `
    },
    {
      id: 'algebra1-inequalities-p6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which inequality flips when solving?",
            options: ["$x + 3 > 7$","$2x < 10$","$-x \\\\geq 4$","$x - 1 \\\\leq 5$"],
            correctAnswer: 2,
            explanation: "Multiplying/dividing by negative flips the sign."
          }
        ]
      }
    },
    {
      id: 'algebra1-inequalities-p6-input',
      type: 'input-boxes' as const,
      content: `
**Mixed** 🧮

1) $4x + 1 > 13$: $x > ?$

2) $|x - 2| \\leq 5$: max $x$?

3) $-3 \\leq 2x - 1 < 7$: max $x$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","7","4"],
        hint1: "$4x > 12$.",
        hint2: "$x - 2 \\\\leq 5$.",
        hint3: "$2x < 8$.",
        explanation: "1) $x > 3$. 2) $x \\\\leq 7$. 3) $x < 4$."
      }
    },
    {
      id: 'algebra1-inequalities-p6-dropdown',
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
      id: 'algebra1-inequalities-p6-practice',
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
      id: 'algebra1-inequalities-p6-mcq2',
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
