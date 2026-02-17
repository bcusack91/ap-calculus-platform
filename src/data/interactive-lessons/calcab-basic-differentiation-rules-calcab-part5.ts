export const calcABBasicDiffPart5Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic5-intro',
      type: 'text' as const,
      content: `
# Derivatives of Trig Functions

**Part 5 of 7 — Derivatives of Trig Functions**

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
      id: 'basic5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains d/dx[sin x] = cos x; d/dx[cos x] = -sin…?',
            options: [
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
              'These come from the limit definition and the identity sin(x)/x → 1',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x'
            ],
            correctAnswer: 0,
            explanation: 'Correct — d/dx[sin x] = cos x; d/dx[cos x] = -sin x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Derivatives of Trig Functions, which explains d/dx[sec x] = sec x tan x; d/dx[csc x]…?',
            options: [
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x',
              'These come from the limit definition and the identity sin(x)/x → 1',
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'basic5-detail',
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
      id: 'basic5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about These come from the limit definition… is correct?',
            options: [
              'These come from the limit definition and the identity sin(x)/x → 1',
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x'
            ],
            correctAnswer: 0,
            explanation: 'Correct — These come from the limit definition and the identity sin(x)/x → 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'basic5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[sin x] = cos x; d/dx[cos x] = -sin…',
            options: ['d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'These come from the limit definition and the identity sin(x)/x → 1', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x']
          },
          {
            label: 'd/dx[tan x] = sec²x; d/dx[cot x] =…',
            options: ['d/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'These come from the limit definition and the identity sin(x)/x → 1']
          },
          {
            label: 'd/dx[sec x] = sec x tan x; d/dx[csc x]…',
            options: ['d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'These come from the limit definition and the identity sin(x)/x → 1', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x']
          }
        ],
        correctAnswers: ['d/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x'],
        hint1: 'Think about what each concept specifically describes in Derivatives of Trig Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Derivatives of Trig Functions describes a specific idea. d/dx[sin x] = cos x; d/dx[cos x] = -sin x. d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x. d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x.'
      }
    }
  ]
}
