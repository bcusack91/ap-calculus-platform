export const alg1InequalitiesPart7Data = {
  topicSlug: "inequalities-algebra1",
  sections: [
    {
      id: 'algebra1-inequalities-p7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Applications

**Part 7 of 7 — Review & Applications**

Comprehensive review of inequalities.

| Type | Strategy |
|------|----------|
| One-step | Inverse operation |
| Multi-step | Distribute, combine, isolate |
| Compound | AND = intersection, OR = union |
| Absolute value | Split into two cases |
      `
    },
    {
      id: 'algebra1-inequalities-p7-worked',
      type: 'text' as const,
      content: `
$-2x + 5 > 11 \\implies x < -3$. $|x + 1| > 4 \\implies x < -5$ or $x > 3$.
      `
    },
    {
      id: 'algebra1-inequalities-p7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "$|2x-6| \\\\leq 4$ gives:",
            options: ["$1 \\\\leq x \\\\leq 5$","$x \\\\leq 1$ or $x \\\\geq 5$","$2 \\\\leq x \\\\leq 4$","$-5 \\\\leq x \\\\leq 5$"],
            correctAnswer: 0,
            explanation: "$-4 \\\\leq 2x - 6 \\\\leq 4 \\\\implies 2 \\\\leq 2x \\\\leq 10 \\\\implies 1 \\\\leq x \\\\leq 5$."
          }
        ]
      }
    },
    {
      id: 'algebra1-inequalities-p7-input',
      type: 'input-boxes' as const,
      content: `
**Review** 🧮

1) $-5x + 2 > -8$: $x < ?$

2) $|x| \\geq 6$: smaller critical value?

3) $2 \\leq 3x - 1 \\leq 8$: range of $x$? (lower bound)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["2","-6","1"],
        hint1: "$-5x > -10$.",
        hint2: "$x = \\\\pm 6$.",
        hint3: "$3 \\\\leq 3x \\\\leq 9$.",
        explanation: "1) $x < 2$. 2) $x \\\\leq -6$ or $x \\\\geq 6$. 3) $1 \\\\leq x \\\\leq 3$."
      }
    },
    {
      id: 'algebra1-inequalities-p7-dropdown',
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
      id: 'algebra1-inequalities-p7-practice',
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
      id: 'algebra1-inequalities-p7-mcq2',
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
