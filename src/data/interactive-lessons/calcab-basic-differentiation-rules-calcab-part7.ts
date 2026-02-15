export const calcABBasicDiffPart7Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. d/dx[sin x] = cos x; d/dx[cos x] = -sin x

d/dx[sin x] = cos x; d/dx[cos x] = -sin x

### 2. d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x

d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x

### 3. d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x

d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x

### 4. These come from the limit definition and the identity sin(x)/x → 1

These come from the limit definition and the identity sin(x)/x → 1
      `
    },
    {
      id: 'basic7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x'
          }
        ]
      }
    },
    {
      id: 'basic7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **d/dx[sin x] = cos x; d/dx[cos x] = -sin x**
- **d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x**
- **d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x**
- **These come from the limit definition and the identity sin(x)/x → 1**
      `
    },
    {
      id: 'basic7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'These come from the limit definition and the identity sin(x)/x → 1',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'These come from the limit definition and the identity sin(x)/x → 1'
          }
        ]
      }
    },
    {
      id: 'basic7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
            options: ['d/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x',
            options: ['d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
            options: ['d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x co', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['d/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x co'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
