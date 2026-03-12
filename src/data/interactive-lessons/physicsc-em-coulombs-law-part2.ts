export const physCEMCoulombPart2Data = {
  topicSlug: "coulombs-law-physics-c-em",
  sections: [
    {
      id: 'physicsc-em-coulombs-law-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Coulomb's Law

**Part 2 of 7 — Coulomb's Law**

Welcome to **Coulomb's Law** — Part 2 of 7 in the AP Physics C: E&M Coulomb's Law series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'physicsc-em-coulombs-law-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'physicsc-em-coulombs-law-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes coulomb's law?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Coulomb's Law is a core concept in AP Physics C: E&M."
          }
        ]
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p2-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about coulomb's law.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of coulomb's law."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Coulomb's Law is important because:",
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
        explanation: "Coulomb's Law builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'physicsc-em-coulombs-law-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Coulomb's Law | Core coulomb's law principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'physicsc-em-coulombs-law-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in coulomb's law?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
