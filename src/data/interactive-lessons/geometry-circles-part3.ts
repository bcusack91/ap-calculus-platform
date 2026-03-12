export const geoCirclesPart3Data = {
  topicSlug: "circles-geometry",
  sections: [
    {
      id: 'geometry-circles-p3-intro',
      type: 'text' as const,
      content: `
# 🔢 Arc Length & Sector Area

**Part 3 of 7 — Arc Length & Sector Area**

Welcome to **Arc Length & Sector Area** — Part 3 of 7 in the Geometry Circles series.

This lesson covers key concepts and practice problems.
      `
    },
    {
      id: 'geometry-circles-p3-worked',
      type: 'text' as const,
      content: `
## Worked Example

See the detailed steps in the practice sections below.
      `
    },
    {
      id: 'geometry-circles-p3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Quick Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which best describes arc length & sector area?",
            options: ["A fundamental concept","An advanced topic","Not part of this course","An optional topic"],
            correctAnswer: 0,
            explanation: "Arc Length & Sector Area is a core concept in Geometry."
          }
        ]
      }
    },
    {
      id: 'geometry-circles-p3-input',
      type: 'input-boxes' as const,
      content: `
**Practice** 🧮

Answer the following about arc length & sector area.
      `,
      exercise: {
        boxes: 1,
        correctAnswers: ["correct"],
        hint1: "Think about the definition.",
        explanation: "Review the concepts of arc length & sector area."
      }
    },
    {
      id: 'geometry-circles-p3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Concept Check** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: "Arc Length & Sector Area is important because:",
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
        explanation: "Arc Length & Sector Area builds on prior concepts and is frequently tested. Regular practice is the best study strategy."
      }
    },
    {
      id: 'geometry-circles-p3-practice',
      type: 'text' as const,
      content: `
## Practice

| # | Concept | Key Idea |
|---|---------|----------|
| 1 | Arc Length & Sector Area | Core arc length & sector area principles |
| 2 | Application | Real-world problems |
| 3 | Extension | Advanced connections |
      `
    },
    {
      id: 'geometry-circles-p3-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: "What is the most important skill in arc length & sector area?",
            options: ["Memorization","Understanding concepts","Speed","Calculator use"],
            correctAnswer: 1,
            explanation: "Understanding the underlying concepts is always most important."
          }
        ]
      }
    }
  ]
};
