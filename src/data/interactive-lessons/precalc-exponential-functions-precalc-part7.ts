export const precalcExponentialPart7Data = {
  topicSlug: 'exponential-functions-precalc',
  sections: [
    {
      id: 'expon7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'expon7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Population growth?',
            options: [
              'time for quantity to reduce to half; t₁/₂ = ln(2)/|k|',
              'A(t) = A₀ · e^(kt) where k < 0',
              'P(t) = P₀ · e^(kt) where k > 0',
              't_d = ln(2)/k for growth'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Population growth: P(t) = P₀ · e^(kt) where k > 0. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Half-life:',
            options: [
              'A(t) = A₀ · e^(kt) where k < 0',
              'time for quantity to reduce to half; t₁/₂ = ln(2)/|k|',
              't_d = ln(2)/k for growth',
              'P(t) = P₀ · e^(kt) where k > 0'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Half-life: time for quantity to reduce to half; t₁/₂ = ln(2)/|k|. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'expon7-detail',
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
      id: 'expon7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
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
      id: 'expon7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Population growth',
            options: ['A(t) = A₀ · e^(kt) where k < 0', 't_d = ln(2)/k for growth', 'time for quantity to reduce to half; t₁/₂ = ln(2)/|k|', 'P(t) = P₀ · e^(kt) where k > 0']
          },
          {
            label: 'Radioactive decay',
            options: ['time for quantity to reduce to half; t₁/₂ = ln(2)/|k|', 'P(t) = P₀ · e^(kt) where k > 0', 'A(t) = A₀ · e^(kt) where k < 0', 't_d = ln(2)/k for growth']
          },
          {
            label: 'Half-life',
            options: ['time for quantity to reduce to half; t₁/₂ = ln(2)/|k|', 'A(t) = A₀ · e^(kt) where k < 0', 'P(t) = P₀ · e^(kt) where k > 0', 't_d = ln(2)/k for growth']
          }
        ],
        correctAnswers: ['P(t) = P₀ · e^(kt) where k > 0', 'A(t) = A₀ · e^(kt) where k < 0', 'time for quantity to reduce to half; t₁/₂ = ln(2)/|k|'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Population growth: P(t) = P₀ · e^(kt) where k > 0. Radioactive decay: A(t) = A₀ · e^(kt) where k < 0. Half-life: time for quantity to reduce to half; t₁/₂ = ln(2)/|k|.'
      }
    }
  ]
}
