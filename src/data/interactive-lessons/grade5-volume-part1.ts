export const g5VolumePart1Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Understanding Volume

**Part 1 of 7 — Understanding Volume**

Welcome to **Understanding Volume** — Part 1 of 7 in the Grade 5 Math Volume series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'grade5-volume-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'grade5-volume-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes understanding volume?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Understanding Volume is a core concept in Grade 5 Math."
          }
        ]
      }
    },
    {
      id: 'grade5-volume-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about understanding volume.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of understanding volume."
      }
    },
    {
      id: 'grade5-volume-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Understanding Volume is important because:",
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
        explanation: "Understanding Volume builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'grade5-volume-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Understanding Volume | Core understanding volume principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'grade5-volume-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in understanding volume?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
