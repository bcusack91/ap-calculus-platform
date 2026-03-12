export const alg1InequalitiesPart3Data = {
  topicSlug: "inequalities-algebra1",
  sections: [
    {
      id: 'algebra1-inequalities-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Multi-Step Inequalities

**Part 3 of 7 — Multi-Step Inequalities**

Multi-step inequalities follow the same steps as multi-step equations.

$$3x + 7 \\leq 22 \\implies 3x \\leq 15 \\implies x \\leq 5$$

$$-2(x - 4) > 10 \\implies -2x + 8 > 10 \\implies x < -1$$
      `
    },
    {
      id: 'algebra1-inequalities-p3-worked',
      type: 'text' as const,
      content: `
$4(x-1) + 6 < 18 \\implies 4x - 4 + 6 < 18 \\implies 4x < 16 \\implies x < 4$
      `
    },
    {
      id: 'algebra1-inequalities-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Solve: $2(x+3) - 1 \\\\geq 11$",
            options: ["$x \\\\geq 3$","$x \\\\leq 3$","$x \\\\geq 6$","$x \\\\leq 6$"],
            correctAnswer: 0,
            explanation: "$2x + 6 - 1 \\\\geq 11 \\\\implies 2x \\\\geq 6 \\\\implies x \\\\geq 3$."
          }
        ]
      }
    },
    {
      id: 'algebra1-inequalities-p3-input',
      type: 'input-boxes' as const,
      content: `
**Multi-step** 🧮

1) $5x - 3 > 17$: $x > ?$
2) $-3x + 9 \\leq 0$: $x \\geq ?$
3) $2(x+4) < 14$: $x < ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["4","3","3"],
        hint1: "$5x > 20$.",
        hint2: "$-3x \\\\leq -9$.",
        hint3: "$2x + 8 < 14$.",
        explanation: "1) $x > 4$. 2) $x \\\\geq 3$. 3) $x < 3$."
      }
    },
    {
      id: 'algebra1-inequalities-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Multi-Step Inequalities is important because:",
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
        explanation: "Multi-Step Inequalities builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-inequalities-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Multi-Step Inequalities | Core multi-step inequalities principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-inequalities-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in multi-step inequalities?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
