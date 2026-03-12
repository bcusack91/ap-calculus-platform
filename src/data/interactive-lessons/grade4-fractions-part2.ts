export const g4FractionsPart2Data = {
  topicSlug: "fractions-grade4",
  sections: [
    {
      id: 'grade4-fractions-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Comparing Fractions

**Part 2 of 7 — Comparing Fractions**

Welcome to **Comparing Fractions** — Part 2 of 7 in the Grade 4 Math Fractions series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'grade4-fractions-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'grade4-fractions-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes comparing fractions?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Comparing Fractions is a core concept in Grade 4 Math."
          }
        ]
      }
    },
    {
      id: 'grade4-fractions-p2-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about comparing fractions.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of comparing fractions."
      }
    },
    {
      id: 'grade4-fractions-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Comparing Fractions is important because:",
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
        explanation: "Comparing Fractions builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'grade4-fractions-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Comparing Fractions | Core comparing fractions principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'grade4-fractions-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in comparing fractions?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
