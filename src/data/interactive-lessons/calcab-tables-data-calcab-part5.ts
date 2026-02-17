export const calcABTablesDataPart5Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'table5-intro',
      type: 'text' as const,
      content: `
# Interpreting Results in Context

**Part 5 of 7 — Interpreting Results in Context**

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
      id: 'table5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Always include units in your answer" refer to in calculus?',
            options: [
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'Explain whether an approximation is an over- or underestimate',
              'State what the computed quantity represents in context',
              'Always include units in your answer'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Always include units in your answer. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Explain whether an approximation is an…:',
            options: [
              'Always include units in your answer',
              'Explain whether an approximation is an over- or underestimate',
              'State what the computed quantity represents in context',
              '"Since f is decreasing, the right Riemann sum is an underestimate"'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Explain whether an approximation is an over- or underestimate. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'table5-detail',
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
      id: 'table5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about "Since f is decreasing, the right… is correct?',
            options: [
              '"Since f is decreasing, the right Riemann sum is an underestimate"',
              'State what the computed quantity represents in context',
              'Explain whether an approximation is an over- or underestimate',
              'Always include units in your answer'
            ],
            correctAnswer: 0,
            explanation: 'Correct — "Since f is decreasing, the right Riemann sum is an underestimate". Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'table5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Always include units in your answer',
            options: ['"Since f is decreasing, the right Riemann sum is an underestimate"', 'Always include units in your answer', 'Explain whether an approximation is an over- or underestimate', 'State what the computed quantity represents in context']
          },
          {
            label: 'State what the computed quantity…',
            options: ['State what the computed quantity represents in context', 'Always include units in your answer', 'Explain whether an approximation is an over- or underestimate', '"Since f is decreasing, the right Riemann sum is an underestimate"']
          },
          {
            label: 'Explain whether an approximation is an…',
            options: ['"Since f is decreasing, the right Riemann sum is an underestimate"', 'Explain whether an approximation is an over- or underestimate', 'State what the computed quantity represents in context', 'Always include units in your answer']
          }
        ],
        correctAnswers: ['Always include units in your answer', 'State what the computed quantity represents in context', 'Explain whether an approximation is an over- or underestimate'],
        hint1: 'Think about what each concept specifically describes in Interpreting Results in Context.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Interpreting Results in Context describes a specific idea. Always include units in your answer. State what the computed quantity represents in context. Explain whether an approximation is an over- or underestimate.'
      }
    }
  ]
}
