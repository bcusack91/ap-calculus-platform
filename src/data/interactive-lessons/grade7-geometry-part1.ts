export const g7GeometryPart1Data = {
  topicSlug: "geometry-grade7",
  sections: [
    {
      id: 'grade7-geometry-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Angle Relationships

**Part 1 of 7 — Angle Relationships**

Welcome to **Angle Relationships** — Part 1 of 7 in the Grade 7 Math Geometry series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'grade7-geometry-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'grade7-geometry-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes angle relationships?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Angle Relationships is a core concept in Grade 7 Math."
          }
        ]
      }
    },
    {
      id: 'grade7-geometry-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about angle relationships.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of angle relationships."
      }
    },
    {
      id: 'grade7-geometry-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Angle Relationships is important because:",
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
        explanation: "Angle Relationships builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'grade7-geometry-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Angle Relationships | Core angle relationships principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'grade7-geometry-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in angle relationships?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
