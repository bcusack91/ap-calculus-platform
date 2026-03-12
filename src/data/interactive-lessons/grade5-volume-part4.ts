export const g5VolumePart4Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p4-intro',
      type: 'text' as const,
      content: `
# 📈 Irregular Shapes

**Part 4 of 7 — Irregular Shapes**

Welcome to **Irregular Shapes** — Part 4 of 7 in the Grade 5 Math Volume series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'grade5-volume-p4-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'grade5-volume-p4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes irregular shapes?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Irregular Shapes is a core concept in Grade 5 Math."
          }
        ]
      }
    },
    {
      id: 'grade5-volume-p4-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about irregular shapes.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of irregular shapes."
      }
    },
    {
      id: 'grade5-volume-p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Irregular Shapes is important because:",
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
        explanation: "Irregular Shapes builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'grade5-volume-p4-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Irregular Shapes | Core irregular shapes principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'grade5-volume-p4-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in irregular shapes?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
