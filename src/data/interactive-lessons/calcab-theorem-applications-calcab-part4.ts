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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of existence theorems summary?',
            options: [
              'All three theorems (EVT, MVT, IVT) are existence theorems',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'All three theorems (EVT, MVT, IVT) are existence theorems'
          },
          {
            question: 'In the context of existence theorems summary, which is accurate?',
            options: [
              'continuity (and differentiability for MVT) is essential',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Common thread: continuity (and differentiability for MVT) is essential'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to existence theorems summary?',
            options: [
              'Know when to apply each theorem based on what you need to prove',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Know when to apply each theorem based on what you need to prove'
          }
        ]
      }
    },
    {
      id: 'theor4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'All three theorems (EVT, MVT, IVT) are existence theorems',
            options: ['All three theorems (EVT, MVT, IVT) are existence t', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'They guarantee SOMETHING EXISTS but don\'t give a formula to find it',
            options: ['They guarantee SOMETHING EXISTS but don\'t give a f', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Common thread',
            options: ['continuity (and differentiability for MVT) is esse', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['All three theorems (EVT, MVT, IVT) are existence t', 'They guarantee SOMETHING EXISTS but don\'t give a f', 'continuity (and differentiability for MVT) is esse'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Existence Theorems Summary.'
      }
    }
  ]
}
