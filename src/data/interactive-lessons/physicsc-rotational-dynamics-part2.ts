export const physCRotationPart2Data = {
  topicSlug: "rotational-dynamics-physics-c",
  sections: [
    {
      id: 'physicsc-rotational-dynamics-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Moment of Inertia

**Part 2 of 7 — Moment of Inertia**

Welcome to **Moment of Inertia** — Part 2 of 7 in the AP Physics C Rotational Dynamics series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'physicsc-rotational-dynamics-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'physicsc-rotational-dynamics-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes moment of inertia?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Moment of Inertia is a core concept in AP Physics C."
          }
        ]
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p2-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about moment of inertia.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of moment of inertia."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Moment of Inertia is important because:",
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
        explanation: "Moment of Inertia builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'physicsc-rotational-dynamics-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Moment of Inertia | Core moment of inertia principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'physicsc-rotational-dynamics-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in moment of inertia?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
