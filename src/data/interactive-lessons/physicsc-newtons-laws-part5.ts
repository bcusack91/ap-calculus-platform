export const physCNewtonPart5Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Circular Motion

**Part 5 of 7 — Circular Motion**

Welcome to **Circular Motion** — Part 5 of 7 in the AP Physics C Newton's Laws series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'physicsc-newtons-laws-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'physicsc-newtons-laws-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes circular motion?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Circular Motion is a core concept in AP Physics C."
          }
        ]
      }
    },
    {
      id: 'physicsc-newtons-laws-p5-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about circular motion.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of circular motion."
      }
    },
    {
      id: 'physicsc-newtons-laws-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Circular Motion is important because:",
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
        explanation: "Circular Motion builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'physicsc-newtons-laws-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Circular Motion | Core circular motion principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'physicsc-newtons-laws-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in circular motion?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
