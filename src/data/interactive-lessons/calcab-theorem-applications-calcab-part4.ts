export const calcABTheoremsPart4Data = {
  topicSlug: 'theorem-applications-calcab',
  sections: [
    {
      id: 'theor4-intro',
      type: 'text' as const,
      content: `
# Existence Theorems Summary

**Part 4 of 7 — Existence Theorems Summary**

### 1. All three theorems (EVT, MVT, IVT) are existence theorems

All three theorems (EVT, MVT, IVT) are existence theorems

### 2. They guarantee SOMETHING EXISTS but don't give a formula to find it

They guarantee SOMETHING EXISTS but don't give a formula to find it

### 3. Common thread

continuity (and differentiability for MVT) is essential

### 4. Know when to apply each theorem based on what you need to prove

Know when to apply each theorem based on what you need to prove
      `
    },
    {
      id: 'theor4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes All three theorems (EVT, MVT, IVT) are…?',
            options: [
              'They guarantee SOMETHING EXISTS but don\'t give a formula to find it',
              'All three theorems (EVT, MVT, IVT) are existence theorems',
              'continuity (and differentiability for MVT) is essential',
              'Know when to apply each theorem based on what you need to prove'
            ],
            correctAnswer: 1,
            explanation: 'Correct — All three theorems (EVT, MVT, IVT) are existence theorems. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Common thread:',
            options: [
              'Know when to apply each theorem based on what you need to prove',
              'continuity (and differentiability for MVT) is essential',
              'All three theorems (EVT, MVT, IVT) are existence theorems',
              'They guarantee SOMETHING EXISTS but don\'t give a formula to find it'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Common thread: continuity (and differentiability for MVT) is essential. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'theor4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **All three theorems (EVT, MVT, IVT) are existence theorems**
- **They guarantee SOMETHING EXISTS but don't give a formula to find it**
- **Common thread**: continuity (and differentiability for MVT) is essential
- **Know when to apply each theorem based on what you need to prove**
      `
    },
    {
      id: 'theor4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Know when to apply each theorem based…?',
            options: [
              'Know when to apply each theorem based on what you need to prove',
              'They guarantee SOMETHING EXISTS but don\'t give a formula to find it',
              'continuity (and differentiability for MVT) is essential',
              'All three theorems (EVT, MVT, IVT) are existence theorems'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Know when to apply each theorem based on what you need to prove. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'theor4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'All three theorems (EVT, MVT, IVT) are…',
            options: ['They guarantee SOMETHING EXISTS but don\'t give a formula to find it', 'continuity (and differentiability for MVT) is essential', 'All three theorems (EVT, MVT, IVT) are existence theorems', 'Know when to apply each theorem based on what you need to prove']
          },
          {
            label: 'They guarantee SOMETHING EXISTS but…',
            options: ['They guarantee SOMETHING EXISTS but don\'t give a formula to find it', 'continuity (and differentiability for MVT) is essential', 'All three theorems (EVT, MVT, IVT) are existence theorems', 'Know when to apply each theorem based on what you need to prove']
          },
          {
            label: 'Common thread',
            options: ['They guarantee SOMETHING EXISTS but don\'t give a formula to find it', 'Know when to apply each theorem based on what you need to prove', 'All three theorems (EVT, MVT, IVT) are existence theorems', 'continuity (and differentiability for MVT) is essential']
          }
        ],
        correctAnswers: ['All three theorems (EVT, MVT, IVT) are existence theorems', 'They guarantee SOMETHING EXISTS but don\'t give a formula to find it', 'continuity (and differentiability for MVT) is essential'],
        hint1: 'Think about what each concept specifically describes in Existence Theorems Summary.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Existence Theorems Summary describes a specific idea. All three theorems (EVT, MVT, IVT) are existence theorems. They guarantee SOMETHING EXISTS but don\'t give a formula to find it. Common thread: continuity (and differentiability for MVT) is essential.'
      }
    }
  ]
}
