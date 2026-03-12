export const preAlgVariablesPart2Data = {
  topicSlug: "intro-variables-prealgebra",
  sections: [
    {
      id: 'prealgebra-intro-variables-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Writing Expressions

**Part 2 of 7 — Writing Expressions**

Welcome to **Writing Expressions** — Part 2 of 7 in the Pre-Algebra Introduction to Variables series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'prealgebra-intro-variables-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'prealgebra-intro-variables-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes writing expressions?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Writing Expressions is a core concept in Pre-Algebra."
          }
        ]
      }
    },
    {
      id: 'prealgebra-intro-variables-p2-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about writing expressions.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of writing expressions."
      }
    },
    {
      id: 'prealgebra-intro-variables-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Writing Expressions is important because:",
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
        explanation: "Writing Expressions builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'prealgebra-intro-variables-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Writing Expressions | Core writing expressions principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'prealgebra-intro-variables-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in writing expressions?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
