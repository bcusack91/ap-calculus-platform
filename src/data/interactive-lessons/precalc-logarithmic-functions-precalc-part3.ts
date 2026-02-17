export const precalcLogarithmicPart3Data = {
  topicSlug: 'logarithmic-functions-precalc',
  sections: [
    {
      id: 'logar3-intro',
      type: 'text' as const,
      content: `
# Common & Natural Logs

**Part 3 of 7 — Common & Natural Logs**

### 1. Common log

log(x) = log₁₀(x), used for pH, decibels, Richter scale

### 2. Natural log

ln(x) = logₑ(x), used in calculus and natural phenomena

### 3. ln(e) = 1 and log(10) = 1

ln(e) = 1 and log(10) = 1

### 4. ln(eˣ) = x and e^(ln(x)) = x for x > 0

ln(eˣ) = x and e^(ln(x)) = x for x > 0
      `
    },
    {
      id: 'logar3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Common log?',
            options: [
              'ln(e) = 1 and log(10) = 1',
              'ln(x) = logₑ(x), used in calculus and natural phenomena',
              'ln(eˣ) = x and e^(ln(x)) = x for x > 0',
              'log(x) = log₁₀(x), used for pH, decibels, Richter scale'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Common log: log(x) = log₁₀(x), used for pH, decibels, Richter scale. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about ln(e) = 1 and log(10) = 1?',
            options: [
              'ln(x) = logₑ(x), used in calculus and natural phenomena',
              'ln(eˣ) = x and e^(ln(x)) = x for x > 0',
              'ln(e) = 1 and log(10) = 1',
              'log(x) = log₁₀(x), used for pH, decibels, Richter scale'
            ],
            correctAnswer: 2,
            explanation: 'Correct — ln(e) = 1 and log(10) = 1. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logar3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Common log**: log(x) = log₁₀(x), used for pH, decibels, Richter scale
- **Natural log**: ln(x) = logₑ(x), used in calculus and natural phenomena
- **ln(e) = 1 and log(10) = 1**
- **ln(eˣ) = x and e^(ln(x)) = x for x > 0**
      `
    },
    {
      id: 'logar3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to common & natural logs?',
            options: [
              'ln(eˣ) = x and e^(ln(x)) = x for x > 0',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'ln(eˣ) = x and e^(ln(x)) = x for x > 0'
          }
        ]
      }
    },
    {
      id: 'logar3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Common log',
            options: ['ln(eˣ) = x and e^(ln(x)) = x for x > 0', 'ln(e) = 1 and log(10) = 1', 'log(x) = log₁₀(x), used for pH, decibels, Richter scale', 'ln(x) = logₑ(x), used in calculus and natural phenomena']
          },
          {
            label: 'Natural log',
            options: ['ln(x) = logₑ(x), used in calculus and natural phenomena', 'ln(e) = 1 and log(10) = 1', 'log(x) = log₁₀(x), used for pH, decibels, Richter scale', 'ln(eˣ) = x and e^(ln(x)) = x for x > 0']
          }
        ],
        correctAnswers: ['log(x) = log₁₀(x), used for pH, decibels, Richter scale', 'ln(x) = logₑ(x), used in calculus and natural phenomena'],
        hint1: 'Think about what each concept specifically describes in Common & Natural Logs.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Common & Natural Logs describes a specific idea. Common log: log(x) = log₁₀(x), used for pH, decibels, Richter scale. Natural log: ln(x) = logₑ(x), used in calculus and natural phenomena.'
      }
    }
  ]
}
