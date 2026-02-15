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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of logistic differential equations?',
            options: [
              'Logistic',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Logistic: dP/dt = kP(1 - P/L)'
          },
          {
            question: 'In the context of logistic differential equations, which is accurate?',
            options: [
              'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Solution: P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to logistic differential equations?',
            options: [
              'Inflection point at P = L/2 (fastest growth); P → L as t → ∞',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Inflection point at P = L/2 (fastest growth); P → L as t → ∞'
          }
        ]
      }
    },
    {
      id: 'euler3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Logistic',
            options: ['dP/dt = kP(1 - P/L)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Separable',
            options: ['∫dP/[P(1-P/L)] = ∫k dt', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Solution',
            options: ['P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['dP/dt = kP(1 - P/L)', '∫dP/[P(1-P/L)] = ∫k dt', 'P(t) = L/(1 + Ae^(-kt)) where A = (L-P₀)/P₀'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Logistic Differential Equations.'
      }
    }
  ]
}
