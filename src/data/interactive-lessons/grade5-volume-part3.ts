export const g5VolumePart3Data = {
  topicSlug: "volume-grade5",
  sections: [
    {
      id: 'grade5-volume-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Volume Formulas

**Part 3 of 7 — Volume Formulas**

Welcome to **Volume Formulas** — Part 3 of 7 in the Grade 5 Math Volume series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'grade5-volume-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'grade5-volume-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes volume formulas?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Volume Formulas is a core concept in Grade 5 Math."
          }
        ]
      }
    },
    {
      id: 'grade5-volume-p3-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about volume formulas.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of volume formulas."
      }
    },
    {
      id: 'grade5-volume-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Volume Formulas is important because:",
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
        explanation: "Volume Formulas builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'grade5-volume-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Volume Formulas | Core volume formulas principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'grade5-volume-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in volume formulas?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
