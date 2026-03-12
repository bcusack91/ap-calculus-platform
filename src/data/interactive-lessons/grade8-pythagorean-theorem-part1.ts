export const g8PythagoreanPart1Data = {
  topicSlug: "pythagorean-theorem-grade8",
  sections: [
    {
      id: 'grade8-pythagorean-theorem-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Understanding the Theorem

**Part 1 of 7 — Understanding the Theorem**

Welcome to **Understanding the Theorem** — Part 1 of 7 in the Grade 8 Math Pythagorean Theorem series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'grade8-pythagorean-theorem-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'grade8-pythagorean-theorem-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes understanding the theorem?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Understanding the Theorem is a core concept in Grade 8 Math."
          }
        ]
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about understanding the theorem.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of understanding the theorem."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Understanding the Theorem is important because:",
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
        explanation: "Understanding the Theorem builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'grade8-pythagorean-theorem-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Understanding the Theorem | Core understanding the theorem principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'grade8-pythagorean-theorem-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in understanding the theorem?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
