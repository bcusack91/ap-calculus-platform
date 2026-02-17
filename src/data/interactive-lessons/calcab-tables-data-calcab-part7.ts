export const calcABTablesDataPart7Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'table7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Always include units in your answer" refer to in calculus?',
            options: [
              'State what the computed quantity represents in context',
              'Always include units in your answer',
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'Explain whether an approximation is an over- or underestimate'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Always include units in your answer. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Explain whether an approximation is an…?',
            options: [
              'Always include units in your answer',
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'State what the computed quantity represents in context',
              'Explain whether an approximation is an over- or underestimate'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Explain whether an approximation is an over- or underestimate. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'table7-detail',
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
      id: 'table7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes "Since f is decreasing, the right…?',
            options: [
              'Explain whether an approximation is an over- or underestimate',
              'Always include units in your answer',
              'State what the computed quantity represents in context',
              '"Since f is decreasing, the right Riemann sum is an underestimate"'
            ],
            correctAnswer: 3,
            explanation: 'Correct — "Since f is decreasing, the right Riemann sum is an underestimate". Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'table7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Always include units in your answer',
            options: ['"Since f is decreasing, the right Riemann sum is an underestimate"', 'Explain whether an approximation is an over- or underestimate', 'Always include units in your answer', 'State what the computed quantity represents in context']
          },
          {
            label: 'State what the computed quantity…',
            options: ['Explain whether an approximation is an over- or underestimate', 'Always include units in your answer', 'State what the computed quantity represents in context', '"Since f is decreasing, the right Riemann sum is an underestimate"']
          },
          {
            label: 'Explain whether an approximation is an…',
            options: ['Always include units in your answer', '"Since f is decreasing, the right Riemann sum is an underestimate"', 'State what the computed quantity represents in context', 'Explain whether an approximation is an over- or underestimate']
          }
        ],
        correctAnswers: ['Always include units in your answer', 'State what the computed quantity represents in context', 'Explain whether an approximation is an over- or underestimate'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Always include units in your answer. State what the computed quantity represents in context. Explain whether an approximation is an over- or underestimate.'
      }
    }
  ]
}
