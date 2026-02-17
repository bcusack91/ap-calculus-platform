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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Parametric curve?',
            options: [
              'The parameter t traces the curve as it varies',
              'Eliminate t to find the rectangular equation (when useful)',
              'Direction of motion determined by increasing t',
              'x = f(t), y = g(t) for t in some interval'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Parametric curve: x = f(t), y = g(t) for t in some interval. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of ∮ Parametric Curves Calculus, which explains Direction of motion determined by…?',
            options: [
              'The parameter t traces the curve as it varies',
              'x = f(t), y = g(t) for t in some interval',
              'Direction of motion determined by increasing t',
              'Eliminate t to find the rectangular equation (when useful)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Direction of motion determined by increasing t. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Eliminate t to find the rectangular… is correct?',
            options: [
              'x = f(t), y = g(t) for t in some interval',
              'Direction of motion determined by increasing t',
              'Eliminate t to find the rectangular equation (when useful)',
              'The parameter t traces the curve as it varies'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Eliminate t to find the rectangular equation (when useful). Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Parametric curve',
            options: ['Direction of motion determined by increasing t', 'The parameter t traces the curve as it varies', 'x = f(t), y = g(t) for t in some interval', 'Eliminate t to find the rectangular equation (when useful)']
          },
          {
            label: 'The parameter t traces the curve as it…',
            options: ['Direction of motion determined by increasing t', 'Eliminate t to find the rectangular equation (when useful)', 'x = f(t), y = g(t) for t in some interval', 'The parameter t traces the curve as it varies']
          },
          {
            label: 'Direction of motion determined by…',
            options: ['Eliminate t to find the rectangular equation (when useful)', 'Direction of motion determined by increasing t', 'x = f(t), y = g(t) for t in some interval', 'The parameter t traces the curve as it varies']
          }
        ],
        correctAnswers: ['x = f(t), y = g(t) for t in some interval', 'The parameter t traces the curve as it varies', 'Direction of motion determined by increasing t'],
        hint1: 'Think about what each concept specifically describes in ∮ Parametric Curves Calculus.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Parametric Curves Calculus describes a specific idea. Parametric curve: x = f(t), y = g(t) for t in some interval. The parameter t traces the curve as it varies. Direction of motion determined by increasing t.'
      }
    }
  ]
}
