export const physCEMGaussPart1Data = {
  topicSlug: "gauss-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-gauss-law-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Electric Flux

**Part 1 of 7 — Electric Flux**

Welcome to **Electric Flux** — Part 1 of 7 in the AP Physics C: E&M Gauss's Law series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'physicsc-em-gauss-law-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'physicsc-em-gauss-law-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes electric flux?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Electric Flux is a core concept in AP Physics C: E&M."
          }
        ]
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about electric flux.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of electric flux."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Electric Flux is important because:",
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
        explanation: "Electric Flux builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'physicsc-em-gauss-law-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Electric Flux | Core electric flux principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'physicsc-em-gauss-law-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in electric flux?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
