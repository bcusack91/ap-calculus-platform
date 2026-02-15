export const calcBCParametricPart1Data = {
  topicSlug: 'parametric-curves-calculus-calcbc',
  sections: [
    {
      id: 'param1-intro',
      type: 'text' as const,
      content: `
# ∮ Parametric Curves Calculus

**Part 1 of 7 — Parametric Equations Review**

### 1. Parametric curve

x = f(t), y = g(t) for t in some interval

### 2. The parameter t traces the curve as it varies

The parameter t traces the curve as it varies

### 3. Direction of motion determined by increasing t

Direction of motion determined by increasing t

### 4. Eliminate t to find the rectangular equation (when useful)

Eliminate t to find the rectangular equation (when useful)
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
            question: 'Which best describes a key concept of parametric equations review?',
            options: [
              'Parametric curve',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Parametric curve: x = f(t), y = g(t) for t in some interval'
          },
          {
            question: 'In the context of parametric equations review, which is accurate?',
            options: [
              'Direction of motion determined by increasing t',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Direction of motion determined by increasing t'
          }
        ]
      }
    },
    {
      id: 'param1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Parametric curve**: x = f(t), y = g(t) for t in some interval
- **The parameter t traces the curve as it varies**
- **Direction of motion determined by increasing t**
- **Eliminate t to find the rectangular equation (when useful)**
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
            question: 'Which concept relates directly to parametric equations review?',
            options: [
              'Eliminate t to find the rectangular equation (when useful)',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Eliminate t to find the rectangular equation (when useful)'
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
            label: 'Parametric curve',
            options: ['x = f(t), y = g(t) for t in some interval', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The parameter t traces the curve as it varies',
            options: ['The parameter t traces the curve as it varies', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Direction of motion determined by increasing t',
            options: ['Direction of motion determined by increasing t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['x = f(t), y = g(t) for t in some interval', 'The parameter t traces the curve as it varies', 'Direction of motion determined by increasing t'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Parametric Equations Review.'
      }
    }
  ]
}
