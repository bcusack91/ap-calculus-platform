export const calcBCEulerAdvPart3Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler3-intro',
      type: 'text' as const,
      content: `
# Logistic Differential Equations

**Part 3 of 7 — Logistic Differential Equations**

### 1. Logistic

dP/dt = kP(1 - P/L)

### 2. Separable

∫dP/[P(1-P/L)] = ∫k dt

### 3. Solution

P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀

### 4. Inflection point at P = L/2 (fastest growth); P → L as t → ∞

Inflection point at P = L/2 (fastest growth); P → L as t → ∞
      `
    },
    {
      id: 'euler3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Logistic?',
            options: [
              'Inflection point at P = L/2 (fastest growth); P → L as t → ∞',
              'dP/dt = kP(1 - P/L)',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀',
              '∫dP/[P(1-P/L)] = ∫k dt'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Logistic: dP/dt = kP(1 - P/L). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Solution:',
            options: [
              'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀',
              '∫dP/[P(1-P/L)] = ∫k dt',
              'Inflection point at P = L/2 (fastest growth); P → L as t → ∞',
              'dP/dt = kP(1 - P/L)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'euler3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Logistic**: dP/dt = kP(1 - P/L)
- **Separable**: ∫dP/[P(1-P/L)] = ∫k dt
- **Solution**: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀
- **Inflection point at P = L/2 (fastest growth); P → L as t → ∞**
      `
    },
    {
      id: 'euler3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Inflection point at P = L/2 (fastest… is correct?',
            options: [
              'dP/dt = kP(1 - P/L)',
              '∫dP/[P(1-P/L)] = ∫k dt',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀',
              'Inflection point at P = L/2 (fastest growth); P → L as t → ∞'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Inflection point at P = L/2 (fastest growth); P → L as t → ∞. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'euler3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Logistic',
            options: ['Inflection point at P = L/2 (fastest growth); P → L as t → ∞', 'dP/dt = kP(1 - P/L)', '∫dP/[P(1-P/L)] = ∫k dt', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀']
          },
          {
            label: 'Separable',
            options: ['dP/dt = kP(1 - P/L)', 'Inflection point at P = L/2 (fastest growth); P → L as t → ∞', '∫dP/[P(1-P/L)] = ∫k dt', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀']
          },
          {
            label: 'Solution',
            options: ['Inflection point at P = L/2 (fastest growth); P → L as t → ∞', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'dP/dt = kP(1 - P/L)', '∫dP/[P(1-P/L)] = ∫k dt']
          }
        ],
        correctAnswers: ['dP/dt = kP(1 - P/L)', '∫dP/[P(1-P/L)] = ∫k dt', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀'],
        hint1: 'Think about what each concept specifically describes in Logistic Differential Equations.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Logistic Differential Equations describes a specific idea. Logistic: dP/dt = kP(1 - P/L). Separable: ∫dP/[P(1-P/L)] = ∫k dt. Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀.'
      }
    }
  ]
}
