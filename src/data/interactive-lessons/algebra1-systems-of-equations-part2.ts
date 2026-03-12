export const alg1SystemsPart2Data = {
  topicSlug: "systems-of-equations-algebra1",
  sections: [
    {
      id: 'algebra1-systems-of-equations-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Substitution Method

**Part 2 of 7 — Substitution Method**

Substitution works best when one variable is already isolated.

**Steps:**
1. Solve one equation for one variable
2. Substitute into the other equation
3. Solve for the remaining variable
4. Back-substitute to find the other variable
      `
    },
    {
      id: 'algebra1-systems-of-equations-p2-worked',
      type: 'text' as const,
      content: `
Solve: $y = 3x - 1$ and $2x + y = 9$.

Substitute: $2x + (3x - 1) = 9 \\implies 5x = 10 \\implies x = 2, y = 5$.
      `
    },
    {
      id: 'algebra1-systems-of-equations-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Solve using substitution: $y = x+3$, $2x+y = 12$",
            options: ["$(3, 6)$","$(2, 5)$","$(4, 7)$","$(5, 8)$"],
            correctAnswer: 0,
            explanation: "$2x + (x+3) = 12 \\\\implies 3x = 9 \\\\implies x = 3, y = 6$."
          }
        ]
      }
    },
    {
      id: 'algebra1-systems-of-equations-p2-input',
      type: 'input-boxes' as const,
      content: `
**Substitution Practice** 🧮

1) $y = 2x$, $x + y = 9$: $x = ?$
2) $x = y - 4$, $3x + y = 8$: $y = ?$
3) $y = -x + 5$, $2x + y = 7$: $x = ?$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["3","5","2"],
        hint1: "$x + 2x = 9$.",
        hint2: "$3(y-4) + y = 8$.",
        hint3: "$2x + (-x+5) = 7$.",
        explanation: "1) $3x=9, x=3$. 2) $4y-12=8, y=5$. 3) $x+5=7, x=2$."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Substitution Method is important because:",
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
        explanation: "Substitution Method builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Substitution Method | Core substitution method principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in substitution method?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
