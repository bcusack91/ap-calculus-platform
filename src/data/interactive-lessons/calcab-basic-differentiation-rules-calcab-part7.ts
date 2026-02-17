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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains d/dx[sin x] = cos x; d/dx[cos x] = -sin…?',
            options: [
              'These come from the limit definition and the identity sin(x)/x → 1',
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x'
            ],
            correctAnswer: 2,
            explanation: 'Correct — d/dx[sin x] = cos x; d/dx[cos x] = -sin x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains d/dx[sec x] = sec x tan x; d/dx[csc x]…?',
            options: [
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x',
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
              'These come from the limit definition and the identity sin(x)/x → 1'
            ],
            correctAnswer: 2,
            explanation: 'Correct — d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes These come from the limit definition…?',
            options: [
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'These come from the limit definition and the identity sin(x)/x → 1',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x'
            ],
            correctAnswer: 2,
            explanation: 'Correct — These come from the limit definition and the identity sin(x)/x → 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'basic7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[sin x] = cos x; d/dx[cos x] = -sin…',
            options: ['d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'These come from the limit definition and the identity sin(x)/x → 1']
          },
          {
            label: 'd/dx[tan x] = sec²x; d/dx[cot x] =…',
            options: ['d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'These come from the limit definition and the identity sin(x)/x → 1']
          },
          {
            label: 'd/dx[sec x] = sec x tan x; d/dx[csc x]…',
            options: ['These come from the limit definition and the identity sin(x)/x → 1', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x']
          }
        ],
        correctAnswers: ['d/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. d/dx[sin x] = cos x; d/dx[cos x] = -sin x. d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x. d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x.'
      }
    }
  ]
}
