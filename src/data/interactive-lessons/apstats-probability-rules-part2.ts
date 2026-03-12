export const apStatsProbabilityPart2Data = {
  topicSlug: "probability-rules-apstats",
  sections: [
    {
      id: 'apstats-probability-rules-p2-intro',
      type: 'text' as const,
      content: `
# 📊 Addition Rule

**Part 2 of 7 — Addition Rule**

Welcome to **Addition Rule** — Part 2 of 7 in the AP Statistics Probability Rules series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'apstats-probability-rules-p2-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'apstats-probability-rules-p2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes addition rule?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Addition Rule is a core concept in AP Statistics."
          }
        ]
      }
    },
    {
      id: 'apstats-probability-rules-p2-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about addition rule.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of addition rule."
      }
    },
    {
      id: 'apstats-probability-rules-p2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Addition Rule is important because:",
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
        explanation: "Addition Rule builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'apstats-probability-rules-p2-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Addition Rule | Core addition rule principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'apstats-probability-rules-p2-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in addition rule?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
