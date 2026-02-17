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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains ∫sin x dx = -cos x + C; ∫cos x dx = sin…?',
            options: [
              '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C',
              'integration reverses the sign patterns from differentiation',
              '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C',
              '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫sin x dx = -cos x + C; ∫cos x dx = sin x + C. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Integrating Trig Functions, which explains ∫sec x tan x dx = sec x + C; ∫csc x cot…?',
            options: [
              '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C',
              '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C',
              'integration reverses the sign patterns from differentiation',
              '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Remember is correct?',
            options: [
              '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C',
              '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C',
              '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C',
              'integration reverses the sign patterns from differentiation'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Remember: integration reverses the sign patterns from differentiation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'antid3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '∫sin x dx = -cos x + C; ∫cos x dx = sin…',
            options: ['∫sin x dx = -cos x + C; ∫cos x dx = sin x + C', '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C', 'integration reverses the sign patterns from differentiation', '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C']
          },
          {
            label: '∫sec²x dx = tan x + C; ∫csc²x dx = -cot…',
            options: ['integration reverses the sign patterns from differentiation', '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C', '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C', '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C']
          },
          {
            label: '∫sec x tan x dx = sec x + C; ∫csc x cot…',
            options: ['∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C', '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C', '∫sin x dx = -cos x + C; ∫cos x dx = sin x + C', 'integration reverses the sign patterns from differentiation']
          }
        ],
        correctAnswers: ['∫sin x dx = -cos x + C; ∫cos x dx = sin x + C', '∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C', '∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C'],
        hint1: 'Think about what each concept specifically describes in Integrating Trig Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Integrating Trig Functions describes a specific idea. ∫sin x dx = -cos x + C; ∫cos x dx = sin x + C. ∫sec²x dx = tan x + C; ∫csc²x dx = -cot x + C. ∫sec x tan x dx = sec x + C; ∫csc x cot x dx = -csc x + C.'
      }
    }
  ]
}
