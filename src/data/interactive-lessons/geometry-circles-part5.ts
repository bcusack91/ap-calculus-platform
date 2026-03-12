export const geoCirclesPart5Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p5-intro',
      type: 'text' as const,
      content: `
# 🧮 Chords & Secants

**Part 5 of 7 — Chords & Secants**

Welcome to **Chords & Secants** — Part 5 of 7 in the Geometry Circles series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'geometry-circles-p5-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'geometry-circles-p5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes chords & secants?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Chords & Secants is a core concept in Geometry."
          }
        ]
      }
    },
    {
      id: 'geometry-circles-p5-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about chords & secants.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of chords & secants."
      }
    },
    {
      id: 'geometry-circles-p5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Chords & Secants is important because:",
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
        explanation: "Chords & Secants builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'geometry-circles-p5-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Chords & Secants | Core chords & secants principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'geometry-circles-p5-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in chords & secants?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
