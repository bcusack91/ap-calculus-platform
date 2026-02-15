export const precalcTransformationsPart2Data = {
  topicSlug: 'transformations-precalc',
  sections: [
    {
      id: 'trans2-intro',
      type: 'text' as const,
      content: `
# Reflections

**Part 2 of 7 — Reflections**

### 1. Reflection over x-axis

-f(x) flips the graph vertically

### 2. Reflection over y-axis

f(-x) flips the graph horizontally

### 3. Reflection over y = x gives the inverse function graph

Reflection over y = x gives the inverse function graph

### 4. Reflections preserve the shape but change orientation

Reflections preserve the shape but change orientation
      `
    },
    {
      id: 'trans2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of reflections?',
            options: [
              'Reflection over x-axis',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Reflection over x-axis: -f(x) flips the graph vertically'
          },
          {
            question: 'In the context of reflections, which is accurate?',
            options: [
              'Reflection over y = x gives the inverse function graph',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Reflection over y = x gives the inverse function graph'
          }
        ]
      }
    },
    {
      id: 'trans2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Reflection over x-axis**: -f(x) flips the graph vertically
- **Reflection over y-axis**: f(-x) flips the graph horizontally
- **Reflection over y = x gives the inverse function graph**
- **Reflections preserve the shape but change orientation**
      `
    },
    {
      id: 'trans2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to reflections?',
            options: [
              'Reflections preserve the shape but change orientation',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Reflections preserve the shape but change orientation'
          }
        ]
      }
    },
    {
      id: 'trans2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reflection over x-axis',
            options: ['-f(x) flips the graph vertically', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Reflection over y-axis',
            options: ['f(-x) flips the graph horizontally', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Reflection over y = x gives the inverse function graph',
            options: ['Reflection over y = x gives the inverse function g', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['-f(x) flips the graph vertically', 'f(-x) flips the graph horizontally', 'Reflection over y = x gives the inverse function g'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Reflections.'
      }
    }
  ]
}
