export const precalcParametricPart1Data = {
  topicSlug: 'parametric-equations-precalc',
  sections: [
    {
      id: 'param1-intro',
      type: 'text' as const,
      content: `
# 📈 Parametric Equations

**Part 1 of 7 — Introduction to Parametric Equations**

### 1. Parametric equations

x = f(t) and y = g(t) define a curve

### 2. Parameter t often represents time

Parameter t often represents time

### 3. Each value of t gives a point (x, y) on the curve

Each value of t gives a point (x, y) on the curve

### 4. Direction of motion is determined by increasing t

Direction of motion is determined by increasing t
      `
    },
    {
      id: 'param1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of introduction to parametric equations?',
            options: [
              'Parametric equations',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Parametric equations: x = f(t) and y = g(t) define a curve'
          },
          {
            question: 'In the context of introduction to parametric equations, which is accurate?',
            options: [
              'Each value of t gives a point (x, y) on the curve',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Each value of t gives a point (x, y) on the curve'
          }
        ]
      }
    },
    {
      id: 'param1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Parametric equations**: x = f(t) and y = g(t) define a curve
- **Parameter t often represents time**
- **Each value of t gives a point (x, y) on the curve**
- **Direction of motion is determined by increasing t**
      `
    },
    {
      id: 'param1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to introduction to parametric equations?',
            options: [
              'Direction of motion is determined by increasing t',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Direction of motion is determined by increasing t'
          }
        ]
      }
    },
    {
      id: 'param1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parametric equations',
            options: ['x = f(t) and y = g(t) define a curve', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Parameter t often represents time',
            options: ['Parameter t often represents time', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Each value of t gives a point (x, y) on the curve',
            options: ['Each value of t gives a point (x, y) on the curve', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['x = f(t) and y = g(t) define a curve', 'Parameter t often represents time', 'Each value of t gives a point (x, y) on the curve'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Introduction to Parametric Equations.'
      }
    }
  ]
}
