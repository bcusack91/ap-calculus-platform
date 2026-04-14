export const alg1InequalitiesPart4Data = {
  topicSlug: "inequalities-algebra1",
  sections: [
    {
      id: 'algebra1-inequalities-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Compound Inequalities

**Part 4 of 7 — Compound Inequalities**

Compound inequalities combine two inequalities.

**AND:** $-3 \\leq x \\leq 5$ (between two values)
**OR:** $x < -2$ or $x > 4$ (outside an interval)
      `
    },
    {
      id: 'algebra1-inequalities-p4-worked',
      type: 'text' as const,
      content: `
$-1 < 2x + 3 \\leq 9 \\implies -4 < 2x \\leq 6 \\implies -2 < x \\leq 3$
      `
    },
    {
      id: 'algebra1-inequalities-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "$-3 < x \\\\leq 5$ in interval notation:",
            options: ["$[-3, 5]$","$(-3, 5]$","$(-3, 5)$","$[-3, 5)$"],
            correctAnswer: 1,
            explanation: "Open at $-3$ (strict), closed at $5$ (inclusive)."
          }
        ]
      }
    },
    {
      id: 'algebra1-inequalities-p4-input',
      type: 'input-boxes' as const,
      content: `
**Compound** 🧮

1) $1 < x+2 < 6$: lower bound of $x$?

2) $-4 \\leq 2x \\leq 10$: upper bound of $x$?

3) $x < -3$ or $x > 3$: is $x=0$ a solution? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["-1","5","no"],
        hint1: "Subtract 2.",
        hint2: "Divide by 2.",
        hint3: "$0$ is between $-3$ and $3$.",
        explanation: "1) $-1 < x < 4$. 2) $-2 \\\\leq x \\\\leq 5$. 3) No."
      }
    },
    {
      id: 'algebra1-inequalities-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Compound Inequalities is important because:",
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
        explanation: "Compound Inequalities builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-inequalities-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Compound Inequalities | Core compound inequalities principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-inequalities-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in compound inequalities?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
