export const calcBCLogisticPart2Data = {
  topicSlug: 'logistic-models-calcbc',
  sections: [
    {
      id: 'logis2-intro',
      type: 'text' as const,
      content: `
# Solving the Logistic Equation

**Part 2 of 7 — Solving the Logistic Equation**

### 1. Separate variables

∫dP/[P(1-P/L)] = ∫k dt

### 2. Use partial fractions

1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)

### 3. Solution

P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀

### 4. Initial condition P(0) = P₀ determines A

Initial condition P(0) = P₀ determines A
      `
    },
    {
      id: 'logis2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Separate variables" refer to in calculus?',
            options: [
              '1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)',
              'Initial condition P(0) = P₀ determines A',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀',
              '∫dP/[P(1-P/L)] = ∫k dt'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Separate variables: ∫dP/[P(1-P/L)] = ∫k dt. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Solution:',
            options: [
              '∫dP/[P(1-P/L)] = ∫k dt',
              '1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)',
              'Initial condition P(0) = P₀ determines A',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'logis2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Separate variables**: ∫dP/[P(1-P/L)] = ∫k dt
- **Use partial fractions**: 1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)
- **Solution**: P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀
- **Initial condition P(0) = P₀ determines A**
      `
    },
    {
      id: 'logis2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Initial condition P(0) = P₀ determines A is correct?',
            options: [
              '1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)',
              'Initial condition P(0) = P₀ determines A',
              '∫dP/[P(1-P/L)] = ∫k dt',
              'P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Initial condition P(0) = P₀ determines A. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'logis2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Separate variables',
            options: ['P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀', '1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)', '∫dP/[P(1-P/L)] = ∫k dt', 'Initial condition P(0) = P₀ determines A']
          },
          {
            label: 'Use partial fractions',
            options: ['P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀', 'Initial condition P(0) = P₀ determines A', '∫dP/[P(1-P/L)] = ∫k dt', '1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)']
          },
          {
            label: 'Solution',
            options: ['1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)', 'Initial condition P(0) = P₀ determines A', 'P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀', '∫dP/[P(1-P/L)] = ∫k dt']
          }
        ],
        correctAnswers: ['∫dP/[P(1-P/L)] = ∫k dt', '1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)', 'P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀'],
        hint1: 'Think about what each concept specifically describes in Solving the Logistic Equation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Solving the Logistic Equation describes a specific idea. Separate variables: ∫dP/[P(1-P/L)] = ∫k dt. Use partial fractions: 1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L). Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀.'
      }
    }
  ]
}
