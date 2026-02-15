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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of solving the logistic equation?',
            options: [
              'Separate variables',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Separate variables: ∫dP/[P(1-P/L)] = ∫k dt'
          },
          {
            question: 'In the context of solving the logistic equation, which is accurate?',
            options: [
              'P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to solving the logistic equation?',
            options: [
              'Initial condition P(0) = P₀ determines A',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Initial condition P(0) = P₀ determines A'
          }
        ]
      }
    },
    {
      id: 'logis2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Separate variables',
            options: ['∫dP/[P(1-P/L)] = ∫k dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Use partial fractions',
            options: ['1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Solution',
            options: ['P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫dP/[P(1-P/L)] = ∫k dt', '1/[P(1-P/L)] = (1/P + 1/(L-P)) · (1/L)', 'P(t) = L/(1 + Ae^(-kt)) where A = (L - P₀)/P₀'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Solving the Logistic Equation.'
      }
    }
  ]
}
