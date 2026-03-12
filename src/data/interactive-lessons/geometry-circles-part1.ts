export const geoCirclesPart1Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Parts of a Circle

**Part 1 of 7 — Parts of a Circle**

Welcome to **Parts of a Circle** — Part 1 of 7 in the Geometry Circles series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'geometry-circles-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'geometry-circles-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes parts of a circle?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Parts of a Circle is a core concept in Geometry."
          }
        ]
      }
    },
    {
      id: 'geometry-circles-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about parts of a circle.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of parts of a circle."
      }
    },
    {
      id: 'geometry-circles-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Parts of a Circle is important because:",
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
        explanation: "Parts of a Circle builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'geometry-circles-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Parts of a Circle | Core parts of a circle principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'geometry-circles-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in parts of a circle?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
