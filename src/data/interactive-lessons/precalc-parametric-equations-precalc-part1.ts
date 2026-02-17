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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Parametric equations?',
            options: [
              'x = f(t) and y = g(t) define a curve',
              'Parameter t often represents time',
              'Each value of t gives a point (x, y) on the curve',
              'Direction of motion is determined by increasing t'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Parametric equations: x = f(t) and y = g(t) define a curve. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Each value of t gives a point (x, y) on…:',
            options: [
              'Direction of motion is determined by increasing t',
              'Each value of t gives a point (x, y) on the curve',
              'x = f(t) and y = g(t) define a curve',
              'Parameter t often represents time'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Each value of t gives a point (x, y) on the curve. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parametric equations',
            options: ['Each value of t gives a point (x, y) on the curve', 'x = f(t) and y = g(t) define a curve', 'Direction of motion is determined by increasing t', 'Parameter t often represents time']
          },
          {
            label: 'Parameter t often represents time',
            options: ['Parameter t often represents time', 'Each value of t gives a point (x, y) on the curve', 'Direction of motion is determined by increasing t', 'x = f(t) and y = g(t) define a curve']
          },
          {
            label: 'Each value of t gives a point (x, y) on…',
            options: ['x = f(t) and y = g(t) define a curve', 'Direction of motion is determined by increasing t', 'Each value of t gives a point (x, y) on the curve', 'Parameter t often represents time']
          }
        ],
        correctAnswers: ['x = f(t) and y = g(t) define a curve', 'Parameter t often represents time', 'Each value of t gives a point (x, y) on the curve'],
        hint1: 'Think about what each concept specifically describes in Parametric Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Parametric Equations describes a specific idea. Parametric equations: x = f(t) and y = g(t) define a curve. Parameter t often represents time. Each value of t gives a point (x, y) on the curve.'
      }
    }
  ]
}
