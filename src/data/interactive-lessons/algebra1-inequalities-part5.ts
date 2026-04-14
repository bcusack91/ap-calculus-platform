export const alg1InequalitiesPart5Data = {
  topicSlug: "inequalities-algebra1",
  sections: [
    {
      id: 'algebra1-inequalities-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Absolute Value Inequalities

**Part 5 of 7 — Absolute Value Inequalities**

Absolute value inequalities:

| Form | Solution |
|------|----------|
| $|x| < a$ | $-a < x < a$ |
| $|x| > a$ | $x < -a$ or $x > a$ |
      `
    },
    {
      id: 'algebra1-inequalities-p5-worked',
      type: 'text' as const,
      content: `
$|2x - 1| \\leq 5: -5 \\leq 2x - 1 \\leq 5 \\implies -2 \\leq x \\leq 3$
      `
    },
    {
      id: 'algebra1-inequalities-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "$|x| > 7$ means:",
            options: ["$-7 < x < 7$","$x > 7$","$x < -7$ or $x > 7$","$x = \\\\pm 7$"],
            correctAnswer: 2,
            explanation: "Greater than splits into two pieces outside the interval."
          }
        ]
      }
    },
    {
      id: 'algebra1-inequalities-p5-input',
      type: 'input-boxes' as const,
      content: `
**Absolute value** 🧮

1) $|x| \\leq 3$: upper bound?

2) $|x+1| > 5$: two critical values?

3) $|3x| < 12$: $x$ range upper bound?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","6","4"],
        hint1: "$-3 \\\\leq x \\\\leq 3$.",
        hint2: "$x+1 = \\\\pm 5$.",
        hint3: "$-12 < 3x < 12$.",
        explanation: "1) $x \\\\leq 3$. 2) $x < -6$ or $x > 4$ (critical = 6). 3) $-4 < x < 4$."
      }
    },
    {
      id: 'algebra1-inequalities-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Absolute Value Inequalities is important because:",
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
        explanation: "Absolute Value Inequalities builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-inequalities-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Absolute Value Inequalities | Core absolute value inequalities principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-inequalities-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in absolute value inequalities?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
