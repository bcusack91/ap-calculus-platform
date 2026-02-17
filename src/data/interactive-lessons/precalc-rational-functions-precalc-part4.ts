export const precalcRationalPart4Data = {
  topicSlug: 'rational-functions-precalc',
  sections: [
    {
      id: 'ratio4-intro',
      type: 'text' as const,
      content: `
# Graphing Rational Functions

**Part 4 of 7 — Graphing Rational Functions**

### 1. Find domain, intercepts, asymptotes, and holes

Find domain, intercepts, asymptotes, and holes

### 2. Plot key points and asymptotes on the coordinate plane

Plot key points and asymptotes on the coordinate plane

### 3. Determine sign of function in each interval between critical points

Determine sign of function in each interval between critical points

### 4. Connect with smooth curves approaching asymptotes

Connect with smooth curves approaching asymptotes
      `
    },
    {
      id: 'ratio4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Find domain, intercepts, asymptotes,…?',
            options: [
              'Plot key points and asymptotes on the coordinate plane',
              'Determine sign of function in each interval between critical points',
              'Connect with smooth curves approaching asymptotes',
              'Find domain, intercepts, asymptotes, and holes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Find domain, intercepts, asymptotes, and holes. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Determine sign of function in each…?',
            options: [
              'Plot key points and asymptotes on the coordinate plane',
              'Determine sign of function in each interval between critical points',
              'Connect with smooth curves approaching asymptotes',
              'Find domain, intercepts, asymptotes, and holes'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Determine sign of function in each interval between critical points. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'ratio4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Find domain, intercepts, asymptotes, and holes**
- **Plot key points and asymptotes on the coordinate plane**
- **Determine sign of function in each interval between critical points**
- **Connect with smooth curves approaching asymptotes**
      `
    },
    {
      id: 'ratio4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to graphing rational functions?',
            options: [
              'Connect with smooth curves approaching asymptotes',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Connect with smooth curves approaching asymptotes'
          }
        ]
      }
    },
    {
      id: 'ratio4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find domain, intercepts, asymptotes,…',
            options: ['Plot key points and asymptotes on the coordinate plane', 'Determine sign of function in each interval between critical points', 'Find domain, intercepts, asymptotes, and holes', 'Connect with smooth curves approaching asymptotes']
          },
          {
            label: 'Plot key points and asymptotes on the…',
            options: ['Determine sign of function in each interval between critical points', 'Plot key points and asymptotes on the coordinate plane', 'Connect with smooth curves approaching asymptotes', 'Find domain, intercepts, asymptotes, and holes']
          },
          {
            label: 'Determine sign of function in each…',
            options: ['Plot key points and asymptotes on the coordinate plane', 'Find domain, intercepts, asymptotes, and holes', 'Determine sign of function in each interval between critical points', 'Connect with smooth curves approaching asymptotes']
          }
        ],
        correctAnswers: ['Find domain, intercepts, asymptotes, and holes', 'Plot key points and asymptotes on the coordinate plane', 'Determine sign of function in each interval between critical points'],
        hint1: 'Think about what each concept specifically describes in Graphing Rational Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Graphing Rational Functions describes a specific idea. Find domain, intercepts, asymptotes, and holes. Plot key points and asymptotes on the coordinate plane. Determine sign of function in each interval between critical points.'
      }
    }
  ]
}
