export const calcABTablesDataPart6Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Always include units in your answer

Always include units in your answer

### 2. State what the computed quantity represents in context

State what the computed quantity represents in context

### 3. Explain whether an approximation is an over- or underestimate

Explain whether an approximation is an over- or underestimate

### 4. "Since f is decreasing, the right Riemann sum is an underestimate"

"Since f is decreasing, the right Riemann sum is an underestimate"
      `
    },
    {
      id: 'table6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Always include units in your answer" refer to in calculus?',
            options: [
              'Always include units in your answer',
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'State what the computed quantity represents in context',
              'Explain whether an approximation is an over- or underestimate'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Always include units in your answer. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Explain whether an approximation is an…?',
            options: [
              'Always include units in your answer',
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'Explain whether an approximation is an over- or underestimate',
              'State what the computed quantity represents in context'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Explain whether an approximation is an over- or underestimate. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'table6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Always include units in your answer**
- **State what the computed quantity represents in context**
- **Explain whether an approximation is an over- or underestimate**
- **"Since f is decreasing, the right Riemann sum is an underestimate"**
      `
    },
    {
      id: 'table6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents "Since f is decreasing, the right…?',
            options: [
              'State what the computed quantity represents in context',
              'Always include units in your answer',
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'Explain whether an approximation is an over- or underestimate'
            ],
            correctAnswer: 2,
            explanation: 'Correct — "Since f is decreasing, the right Riemann sum is an underestimate". Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'table6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Always include units in your answer',
            options: ['Explain whether an approximation is an over- or underestimate', 'Always include units in your answer', '"Since f is decreasing, the right Riemann sum is an underestimate"', 'State what the computed quantity represents in context']
          },
          {
            label: 'State what the computed quantity…',
            options: ['Explain whether an approximation is an over- or underestimate', 'Always include units in your answer', '"Since f is decreasing, the right Riemann sum is an underestimate"', 'State what the computed quantity represents in context']
          },
          {
            label: 'Explain whether an approximation is an…',
            options: ['Always include units in your answer', 'State what the computed quantity represents in context', 'Explain whether an approximation is an over- or underestimate', '"Since f is decreasing, the right Riemann sum is an underestimate"']
          }
        ],
        correctAnswers: ['Always include units in your answer', 'State what the computed quantity represents in context', 'Explain whether an approximation is an over- or underestimate'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Always include units in your answer. State what the computed quantity represents in context. Explain whether an approximation is an over- or underestimate.'
      }
    }
  ]
}
