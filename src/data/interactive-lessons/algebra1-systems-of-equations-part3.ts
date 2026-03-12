export const alg1SystemsPart3Data = {
  topicSlug: "systems-of-equations-algebra1",
  sections: [
    {
      id: 'algebra1-systems-of-equations-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Elimination Method

**Part 3 of 7 — Elimination Method**

Elimination adds or subtracts equations to eliminate one variable.

**Steps:**
1. Align like terms vertically
2. Multiply if needed so one variable has opposite coefficients
3. Add equations to eliminate that variable
4. Solve and back-substitute
      `
    },
    {
      id: 'algebra1-systems-of-equations-p3-worked',
      type: 'text' as const,
      content: `
Solve: $3x + 2y = 16$ and $x - 2y = 0$.

Add: $4x = 16 \\implies x = 4, y = 2$.
      `
    },
    {
      id: 'algebra1-systems-of-equations-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Solve: $x + y = 7$, $x - y = 3$",
            options: ["$(5, 2)$","$(4, 3)$","$(3, 4)$","$(7, 0)$"],
            correctAnswer: 0,
            explanation: "Add: $2x = 10, x = 5, y = 2$."
          }
        ]
      }
    },
    {
      id: 'algebra1-systems-of-equations-p3-input',
      type: 'input-boxes' as const,
      content: `
**Elimination** 🧮

1) $x+y=10$, $x-y=4$: $x=?$
2) $2x+3y=12$, $2x+y=8$: $y=?$
3) $3x+y=7$, $x+y=3$: $x=?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["7","2","2"],
        hint1: "Add equations.",
        hint2: "Subtract.",
        hint3: "Subtract.",
        explanation: "1) $2x=14, x=7$. 2) $2y=4, y=2$. 3) $2x=4, x=2$."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Elimination Method is important because:",
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
        explanation: "Elimination Method builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Elimination Method | Core elimination method principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in elimination method?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
