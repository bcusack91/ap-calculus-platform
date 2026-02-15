export const precalcExponentialPart5Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon5-intro',
      type: 'text' as const,
      content: `
# Exponential Modeling

**Part 5 of 7 — Exponential Modeling**

### 1. Population growth

P(t) = P₀ · e^(kt) where k > 0

### 2. Radioactive decay

A(t) = A₀ · e^(kt) where k < 0

### 3. Half-life

time for quantity to reduce to half; t₁/₂ = ln(2)/|k|

### 4. Doubling time

t_d = ln(2)/k for growth
      `
    },
    {
      id: 'expon5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of exponential modeling?',
            options: [
              'Population growth',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Population growth: P(t) = P₀ · e^(kt) where k > 0'
          },
          {
            question: 'In the context of exponential modeling, which is accurate?',
            options: [
              'time for quantity to reduce to half; t₁/₂ = ln(2)/|k|',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Half-life: time for quantity to reduce to half; t₁/₂ = ln(2)/|k|'
          }
        ]
      }
    },
    {
      id: 'expon5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Population growth**: P(t) = P₀ · e^(kt) where k > 0
- **Radioactive decay**: A(t) = A₀ · e^(kt) where k < 0
- **Half-life**: time for quantity to reduce to half; t₁/₂ = ln(2)/|k|
- **Doubling time**: t_d = ln(2)/k for growth
      `
    },
    {
      id: 'expon5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to exponential modeling?',
            options: [
              't_d = ln(2)/k for growth',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Doubling time: t_d = ln(2)/k for growth'
          }
        ]
      }
    },
    {
      id: 'expon5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population growth',
            options: ['P(t) = P₀ · e^(kt) where k > 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Radioactive decay',
            options: ['A(t) = A₀ · e^(kt) where k < 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Half-life',
            options: ['time for quantity to reduce to half; t₁/₂ = ln(2)/', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['P(t) = P₀ · e^(kt) where k > 0', 'A(t) = A₀ · e^(kt) where k < 0', 'time for quantity to reduce to half; t₁/₂ = ln(2)/'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Exponential Modeling.'
      }
    }
  ]
}
