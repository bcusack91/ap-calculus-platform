export const calcABDerivativeDefPart3Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'defin3-intro',
      type: 'text' as const,
      content: `
# Derivative as a Function

**Part 3 of 7 — Derivative as a Function**

### 1. f'(x) is itself a function — it has its own domain, range, and graph

f'(x) is itself a function — it has its own domain, range, and graph

### 2. f'(x) > 0 means f is increasing; f'(x) < 0 means f is decreasing

f'(x) > 0 means f is increasing; f'(x) < 0 means f is decreasing

### 3. f'(x) = 0 at horizontal tangent lines (potential extrema)

f'(x) = 0 at horizontal tangent lines (potential extrema)

### 4. The derivative of a polynomial of degree n has degree n-1

The derivative of a polynomial of degree n has degree n-1
      `
    },
    {
      id: 'defin3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes f\'(x) is itself a function — it has its…?',
            options: [
              'f\'(x) is itself a function — it has its own domain, range, and graph',
              'The derivative of a polynomial of degree n has degree n-1',
              'f\'(x) = 0 at horizontal tangent lines (potential extrema)',
              'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing'
            ],
            correctAnswer: 0,
            explanation: 'Correct — f\'(x) is itself a function — it has its own domain, range, and graph. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about f\'(x) = 0 at horizontal tangent lines…?',
            options: [
              'f\'(x) = 0 at horizontal tangent lines (potential extrema)',
              'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing',
              'f\'(x) is itself a function — it has its own domain, range, and graph',
              'The derivative of a polynomial of degree n has degree n-1'
            ],
            correctAnswer: 0,
            explanation: 'Correct — f\'(x) = 0 at horizontal tangent lines (potential extrema). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'defin3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **f'(x) is itself a function — it has its own domain, range, and graph**
- **f'(x) > 0 means f is increasing; f'(x) < 0 means f is decreasing**
- **f'(x) = 0 at horizontal tangent lines (potential extrema)**
- **The derivative of a polynomial of degree n has degree n-1**
      `
    },
    {
      id: 'defin3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about The derivative of a polynomial of… is correct?',
            options: [
              'The derivative of a polynomial of degree n has degree n-1',
              'f\'(x) = 0 at horizontal tangent lines (potential extrema)',
              'f\'(x) is itself a function — it has its own domain, range, and graph',
              'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The derivative of a polynomial of degree n has degree n-1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'defin3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'f\'(x) is itself a function — it has its…',
            options: ['The derivative of a polynomial of degree n has degree n-1', 'f\'(x) = 0 at horizontal tangent lines (potential extrema)', 'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing', 'f\'(x) is itself a function — it has its own domain, range, and graph']
          },
          {
            label: 'f\'(x) > 0 means f is increasing; f\'(x)…',
            options: ['f\'(x) is itself a function — it has its own domain, range, and graph', 'The derivative of a polynomial of degree n has degree n-1', 'f\'(x) = 0 at horizontal tangent lines (potential extrema)', 'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing']
          },
          {
            label: 'f\'(x) = 0 at horizontal tangent lines…',
            options: ['f\'(x) is itself a function — it has its own domain, range, and graph', 'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing', 'f\'(x) = 0 at horizontal tangent lines (potential extrema)', 'The derivative of a polynomial of degree n has degree n-1']
          }
        ],
        correctAnswers: ['f\'(x) is itself a function — it has its own domain, range, and graph', 'f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing', 'f\'(x) = 0 at horizontal tangent lines (potential extrema)'],
        hint1: 'Think about what each concept specifically describes in Derivative as a Function.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivative as a Function describes a specific idea. f\'(x) is itself a function — it has its own domain, range, and graph. f\'(x) > 0 means f is increasing; f\'(x) < 0 means f is decreasing. f\'(x) = 0 at horizontal tangent lines (potential extrema).'
      }
    }
  ]
}
