export const calcABAntiderivativesPart3Data = {
  topicSlug: 'antiderivatives-indefinite-integrals-calcab',
  sections: [
    {
      id: 'antid3-intro',
      type: 'text' as const,
      content: `
# Integrating Trig Functions

**Part 3 of 7 — Integrating Trig Functions**

### 1. ∫sin x dx = -cos x + C; ∫cos x dx = sin x + C

∫sin x dx = -cos x + C; ∫cos x dx = sin x + C

### 2. ∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C

∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C

### 3. ∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C

∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C

### 4. Remember

integration reverses the sign patterns from differentiation
      `
    },
    {
      id: 'antid3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of integrating trig functions?',
            options: [
              '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C'
          },
          {
            question: 'In the context of integrating trig functions, which is accurate?',
            options: [
              '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C'
          }
        ]
      }
    },
    {
      id: 'antid3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **∫sin x dx = -cos x + C; ∫cos x dx = sin x + C**
- **∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C**
- **∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C**
- **Remember**: integration reverses the sign patterns from differentiation
      `
    },
    {
      id: 'antid3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to integrating trig functions?',
            options: [
              'integration reverses the sign patterns from differentiation',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Remember: integration reverses the sign patterns from differentiation'
          }
        ]
      }
    },
    {
      id: 'antid3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C',
            options: ['∫sin x dx = -cos x + C; ∫cos x dx = sin x + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C',
            options: ['∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C',
            options: ['∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -cs', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['∫sin x dx = -cos x + C; ∫cos x dx = sin x + C', '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C', '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -cs'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Integrating Trig Functions.'
      }
    }
  ]
}
