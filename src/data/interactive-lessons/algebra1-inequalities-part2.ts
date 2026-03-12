export const alg1InequalitiesPart2Data = {
  topicSlug: "inequalities-algebra1",
  sections: [
    {
      id: 'algebra1-inequalities-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Solving One-Step Inequalities

**Part 2 of 7 — Solving One-Step Inequalities**

Solving one-step inequalities uses the same operations as equations.

**Key Rule:** When you multiply or divide by a **negative** number, **flip** the inequality sign.

$$-3x > 12 \\implies x < -4$$
      `
    },
    {
      id: 'algebra1-inequalities-p2-worked',
      type: 'text' as const,
      content: `
$-5x \\leq 20 \\implies x \\geq -4$. Flip because we divided by $-5$.
      `
    },
    {
      id: 'algebra1-inequalities-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Solve: $-4x < 20$",
            options: ["$x < -5$","$x > -5$","$x < 5$","$x > 5$"],
            correctAnswer: 1,
            explanation: "Divide by $-4$ and flip: $x > -5$."
          }
        ]
      }
    },
    {
      id: 'algebra1-inequalities-p2-input',
      type: 'input-boxes' as const,
      content: `
**Solve** 🧮

1) $x + 7 > 10$: $x > ?$
2) $-2x \\geq 8$: $x \\leq ?$
3) $\\frac{x}{3} < -4$: $x < ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","-4","-12"],
        hint1: "Subtract 7.",
        hint2: "Divide by $-2$, flip.",
        hint3: "Multiply by 3.",
        explanation: "1) $x > 3$. 2) $x \\\\leq -4$. 3) $x < -12$."
      }
    },
    {
      id: 'algebra1-inequalities-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Solving One-Step Inequalities is important because:",
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
        explanation: "Solving One-Step Inequalities builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-inequalities-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Solving One-Step Inequalities | Core solving one-step inequalities principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-inequalities-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in solving one-step inequalities?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
