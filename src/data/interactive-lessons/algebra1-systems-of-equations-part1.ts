export const alg1SystemsPart1Data = {
  topicSlug: "systems-of-equations-algebra1",
  sections: [
    {
      id: 'algebra1-systems-of-equations-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Graphing Systems

**Part 1 of 7 — Graphing Systems**

A system of equations has two or more equations with the same variables. The solution is the point where the graphs intersect.

$$\\text{System: } \\begin{cases} y = 2x + 1 \\\\ y = -x + 7 \\end{cases}$$

Solve by graphing both lines and finding the intersection point.
      `
    },
    {
      id: 'algebra1-systems-of-equations-p1-worked',
      type: 'text' as const,
      content: `
$y = 2x+1$ and $y = -x+7$: At intersection $2x+1 = -x+7$, so $3x = 6$, $x = 2$, $y = 5$. Solution: $(2, 5)$.
      `
    },
    {
      id: 'algebra1-systems-of-equations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "How many solutions can a system of two linear equations have?",
            options: ["Only 1","0, 1, or infinitely many","Only 2","Always infinitely many"],
            correctAnswer: 1,
            explanation: "Parallel = 0, intersecting = 1, same line = infinitely many."
          }
        ]
      }
    },
    {
      id: 'algebra1-systems-of-equations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Solve by graphing** 🧮

1) $y=x+1$, $y=-x+3$, find $x$

2) $y=2x$, $y=x+2$, find $x$

3) $y=3x-1$, $y=3x+2$, are they parallel? (yes/no)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["1","2","yes"],
        hint1: "Set equal.",
        hint2: "$2x = x+2$.",
        hint3: "Same slope, different intercept.",
        explanation: "1) $x=1$. 2) $x=2$. 3) Yes, both have slope 3."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Graphing Systems is important because:",
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
        explanation: "Graphing Systems builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-systems-of-equations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Graphing Systems | Core graphing systems principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-systems-of-equations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in graphing systems?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
