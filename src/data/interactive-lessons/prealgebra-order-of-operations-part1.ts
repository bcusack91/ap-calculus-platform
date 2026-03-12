export const preAlgOrderOpsPart1Data = {
  topicSlug: "order-of-operations-prealgebra",
  sections: [
    {
      id: 'prealgebra-order-of-operations-p1-intro',
      type: 'text' as const,
      content: `
# 📐 PEMDAS Basics

**Part 1 of 7 — PEMDAS Basics**

Welcome to **PEMDAS Basics** — Part 1 of 7 in the Pre-Algebra Order of Operations series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'prealgebra-order-of-operations-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'prealgebra-order-of-operations-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes pemdas basics?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "PEMDAS Basics is a core concept in Pre-Algebra."
          }
        ]
      }
    },
    {
      id: 'prealgebra-order-of-operations-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about pemdas basics.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of pemdas basics."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "PEMDAS Basics is important because:",
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
        explanation: "PEMDAS Basics builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'prealgebra-order-of-operations-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | PEMDAS Basics | Core pemdas basics principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'prealgebra-order-of-operations-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in pemdas basics?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
