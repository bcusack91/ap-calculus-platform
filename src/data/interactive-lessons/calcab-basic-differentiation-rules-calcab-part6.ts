export const calcABBasicDiffPart6Data = {
  topicSlug: 'basic-differentiation-rules-calcab',
  sections: [
    {
      id: 'basic6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'basic6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains d/dx[sin x] = cos x; d/dx[cos x] = -sin…?',
            options: [
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x',
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x',
              'These come from the limit definition and the identity sin(x)/x → 1'
            ],
            correctAnswer: 1,
            explanation: 'Correct — d/dx[sin x] = cos x; d/dx[cos x] = -sin x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains d/dx[sec x] = sec x tan x; d/dx[csc x]…?',
            options: [
              'These come from the limit definition and the identity sin(x)/x → 1',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x',
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x'
            ],
            correctAnswer: 3,
            explanation: 'Correct — d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'basic6-detail',
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
      id: 'basic6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents These come from the limit definition…?',
            options: [
              'These come from the limit definition and the identity sin(x)/x → 1',
              'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x',
              'd/dx[sin x] = cos x; d/dx[cos x] = -sin x',
              'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x'
            ],
            correctAnswer: 0,
            explanation: 'Correct — These come from the limit definition and the identity sin(x)/x → 1. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'basic6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'd/dx[sin x] = cos x; d/dx[cos x] = -sin…',
            options: ['These come from the limit definition and the identity sin(x)/x → 1', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x']
          },
          {
            label: 'd/dx[tan x] = sec²x; d/dx[cot x] =…',
            options: ['d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'These come from the limit definition and the identity sin(x)/x → 1', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x']
          },
          {
            label: 'd/dx[sec x] = sec x tan x; d/dx[csc x]…',
            options: ['d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x', 'd/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'These come from the limit definition and the identity sin(x)/x → 1']
          }
        ],
        correctAnswers: ['d/dx[sin x] = cos x; d/dx[cos x] = -sin x', 'd/dx[tan x] = sec²x; d/dx[cot x] = -csc²x', 'd/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. d/dx[sin x] = cos x; d/dx[cos x] = -sin x. d/dx[tan x] = sec²x; d/dx[cot x] = -csc²x. d/dx[sec x] = sec x tan x; d/dx[csc x] = -csc x cot x.'
      }
    }
  ]
}
