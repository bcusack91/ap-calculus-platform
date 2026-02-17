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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Reflection over x-axis" refer to in precalculus?',
            options: [
              '-f(x) flips the graph vertically',
              'Reflections preserve the shape but change orientation',
              'Reflection over y = x gives the inverse function graph',
              'f(-x) flips the graph horizontally'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Reflection over x-axis: -f(x) flips the graph vertically. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Reflection over y = x gives the inverse…?',
            options: [
              'f(-x) flips the graph horizontally',
              'Reflections preserve the shape but change orientation',
              'Reflection over y = x gives the inverse function graph',
              '-f(x) flips the graph vertically'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Reflection over y = x gives the inverse function graph. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Reflection over x-axis',
            options: ['Reflections preserve the shape but change orientation', 'f(-x) flips the graph horizontally', '-f(x) flips the graph vertically', 'Reflection over y = x gives the inverse function graph']
          },
          {
            label: 'Reflection over y-axis',
            options: ['f(-x) flips the graph horizontally', '-f(x) flips the graph vertically', 'Reflections preserve the shape but change orientation', 'Reflection over y = x gives the inverse function graph']
          }
        ],
        correctAnswers: ['-f(x) flips the graph vertically', 'f(-x) flips the graph horizontally'],
        hint1: 'Think about what each concept specifically describes in Reflections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Reflections describes a specific idea. Reflection over x-axis: -f(x) flips the graph vertically. Reflection over y-axis: f(-x) flips the graph horizontally.'
      }
    }
  ]
}
