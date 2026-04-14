export const alg1InequalitiesPart1Data = {
  topicSlug: "inequalities-algebra1",
  sections: [
    {
      id: 'algebra1-inequalities-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Graphing on Number Line

**Part 1 of 7 — Graphing on Number Line**

An inequality compares expressions using $<$, $>$, $\\leq$, $\\geq$.

Open circle ○ for $<$ and $>$. Closed circle ● for $\\leq$ and $\\geq$.

| Symbol | Meaning | Circle |
|--------|---------|--------|
| $<$ | Less than | ○ |
| $\\leq$ | Less than or equal | ● |
| $>$ | Greater than | ○ |
| $\\geq$ | Greater than or equal | ● |
      `
    },
    {
      id: 'algebra1-inequalities-p1-worked',
      type: 'text' as const,
      content: `
$x + 3 > 7 \\implies x > 4$. Graph with open circle at 4, arrow right.
      `
    },
    {
      id: 'algebra1-inequalities-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Graph $x \\\\geq 3$ uses:",
            options: ["Open circle at 3","Closed circle at 3","Open circle at -3","Closed circle at -3"],
            correctAnswer: 1,
            explanation: "$\\\\geq$ means include 3, so closed circle."
          }
        ]
      }
    },
    {
      id: 'algebra1-inequalities-p1-input',
      type: 'input-boxes' as const,
      content: `
**Graph descriptions** 🧮

1) $x > 5$: open or closed circle?

2) $x \\leq -2$: arrow left or right?

3) $x \\geq 0$: circle at what number?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ["open","left","0"],
        hint1: "Strict inequality.",
        hint2: "Less than goes left.",
        hint3: "$\\\\geq 0$.",
        explanation: "1) Open. 2) Left. 3) At 0."
      }
    },
    {
      id: 'algebra1-inequalities-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Graphing on Number Line is important because:",
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
        explanation: "Graphing on Number Line builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'algebra1-inequalities-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Graphing on Number Line | Core graphing on number line principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'algebra1-inequalities-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in graphing on number line?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
