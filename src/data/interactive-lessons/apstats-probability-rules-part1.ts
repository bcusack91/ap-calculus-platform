export const apStatsProbabilityPart1Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p1-intro',
      type: 'text' as const,
      content: `
# 📐 Basic Probability

**Part 1 of 7 — Basic Probability**

Welcome to **Basic Probability** — Part 1 of 7 in the AP Statistics Probability Rules series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'apstats-probability-rules-p1-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'apstats-probability-rules-p1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes basic probability?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Basic Probability is a core concept in AP Statistics."
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p1-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about basic probability.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of basic probability."
      }
    },
    {
      id: 'apstats-probability-rules-p1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Basic Probability is important because:",
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
        explanation: "Basic Probability builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'apstats-probability-rules-p1-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Basic Probability | Core basic probability principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'apstats-probability-rules-p1-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in basic probability?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
