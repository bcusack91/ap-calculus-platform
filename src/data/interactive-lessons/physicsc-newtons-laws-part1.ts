export const physCNewtonPart1Data = {
  topicSlug: "newtons-laws-physics-c",
  sections: [
    {
      id: 'physicsc-newtons-laws-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Newton's First Law

**Part 1 of 7 — Newton's First Law**

Welcome to **Newton's First Law** — Part 1 of 7 in the AP Physics C Newton's Laws series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'physicsc-newtons-laws-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'physicsc-newtons-laws-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes newton's first law?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Newton's First Law is a core concept in AP Physics C."
          }
        ]
      }
    },
    {
      id: 'physicsc-newtons-laws-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about newton's first law.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of newton's first law."
      }
    },
    {
      id: 'physicsc-newtons-laws-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Newton's First Law is important because:",
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
        explanation: "Newton's First Law builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'physicsc-newtons-laws-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Newton's First Law | Core newton's first law principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'physicsc-newtons-laws-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in newton's first law?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
