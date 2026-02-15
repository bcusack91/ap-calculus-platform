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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of common & natural logs?',
            options: [
              'Common log',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Common log: log(x) = log₁₀(x), used for pH, decibels, Richter scale'
          },
          {
            question: 'In the context of common & natural logs, which is accurate?',
            options: [
              'ln(e) = 1 and log(10) = 1',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'ln(e) = 1 and log(10) = 1'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Common log',
            options: ['log(x) = log₁₀(x), used for pH, decibels, Richter ', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Natural log',
            options: ['ln(x) = logₑ(x), used in calculus and natural phen', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'ln(e) = 1 and log(10) = 1',
            options: ['ln(e) = 1 and log(10) = 1', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['log(x) = log₁₀(x), used for pH, decibels, Richter ', 'ln(x) = logₑ(x), used in calculus and natural phen', 'ln(e) = 1 and log(10) = 1'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Common & Natural Logs.'
      }
    }
  ]
}
