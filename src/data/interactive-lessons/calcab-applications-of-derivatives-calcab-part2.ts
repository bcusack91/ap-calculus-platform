export const calcABDerivAppsPart2Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'appli2-intro',
      type: 'text' as const,
      content: `
# Local Extrema

**Part 2 of 7 — Local Extrema**

### 1. Local maximum

f(c) ≥ f(x) for all x near c

### 2. Local minimum

f(c) ≤ f(x) for all x near c

### 3. Critical points

where f'(c) = 0 or f'(c) is undefined

### 4. Extrema only occur at critical points (within the domain)

Extrema only occur at critical points (within the domain)
      `
    },
    {
      id: 'appli2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Local maximum?',
            options: [
              'Extrema only occur at critical points (within the domain)',
              'f(c) ≥ f(x) for all x near c',
              'f(c) ≤ f(x) for all x near c',
              'where f\'(c) = 0 or f\'(c) is undefined'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Local maximum: f(c) ≥ f(x) for all x near c. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Local Extrema, which explains Critical points?',
            options: [
              'f(c) ≥ f(x) for all x near c',
              'where f\'(c) = 0 or f\'(c) is undefined',
              'f(c) ≤ f(x) for all x near c',
              'Extrema only occur at critical points (within the domain)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Critical points: where f\'(c) = 0 or f\'(c) is undefined. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'appli2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Local maximum**: f(c) ≥ f(x) for all x near c
- **Local minimum**: f(c) ≤ f(x) for all x near c
- **Critical points**: where f'(c) = 0 or f'(c) is undefined
- **Extrema only occur at critical points (within the domain)**
      `
    },
    {
      id: 'appli2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Extrema only occur at critical points… is correct?',
            options: [
              'Extrema only occur at critical points (within the domain)',
              'f(c) ≤ f(x) for all x near c',
              'f(c) ≥ f(x) for all x near c',
              'where f\'(c) = 0 or f\'(c) is undefined'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Extrema only occur at critical points (within the domain). Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'appli2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Local maximum',
            options: ['Extrema only occur at critical points (within the domain)', 'f(c) ≤ f(x) for all x near c', 'where f\'(c) = 0 or f\'(c) is undefined', 'f(c) ≥ f(x) for all x near c']
          },
          {
            label: 'Local minimum',
            options: ['f(c) ≤ f(x) for all x near c', 'where f\'(c) = 0 or f\'(c) is undefined', 'f(c) ≥ f(x) for all x near c', 'Extrema only occur at critical points (within the domain)']
          },
          {
            label: 'Critical points',
            options: ['Extrema only occur at critical points (within the domain)', 'f(c) ≤ f(x) for all x near c', 'where f\'(c) = 0 or f\'(c) is undefined', 'f(c) ≥ f(x) for all x near c']
          }
        ],
        correctAnswers: ['f(c) ≥ f(x) for all x near c', 'f(c) ≤ f(x) for all x near c', 'where f\'(c) = 0 or f\'(c) is undefined'],
        hint1: 'Think about what each concept specifically describes in Local Extrema.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Local Extrema describes a specific idea. Local maximum: f(c) ≥ f(x) for all x near c. Local minimum: f(c) ≤ f(x) for all x near c. Critical points: where f\'(c) = 0 or f\'(c) is undefined.'
      }
    }
  ]
}
