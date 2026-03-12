export const precalcLimitsPart1Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit1-intro',
      type: 'text' as const,
      content: `
# 📈 Limits Introduction

**Part 1 of 7 — Intuitive Understanding of Limits**

### 1. Limit

the value f(x) approaches as x approaches a value c

### 2. Written as lim(x→c) f(x) = L

Written as lim(x→c) f(x) = L

### 3. The limit may exist even if f(c) is undefined

The limit may exist even if f(c) is undefined

### 4. Limits describe behavior near a point, not at the point

Limits describe behavior near a point, not at the point
      `
    },
    {
      id: 'limit1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Limit?',
            options: [
              'Written as lim(x→c) f(x) = L',
              'Limits describe behavior near a point, not at the point',
              'The limit may exist even if f(c) is undefined',
              'the value f(x) approaches as x approaches a value c'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Limit: the value f(x) approaches as x approaches a value c. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes The limit may exist even if f(c) is…:',
            options: [
              'the value f(x) approaches as x approaches a value c',
              'Limits describe behavior near a point, not at the point',
              'Written as lim(x→c) f(x) = L',
              'The limit may exist even if f(c) is undefined'
            ],
            correctAnswer: 3,
            explanation: 'Correct — The limit may exist even if f(c) is undefined. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'limit1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Limit**: the value f(x) approaches as x approaches a value c
- **Written as lim(x→c) f(x) = L**
- **The limit may exist even if f(c) is undefined**
- **Limits describe behavior near a point, not at the point**
      `
    },
    {
      id: 'limit1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to intuitive understanding of limits?',
            options: [
              'Limits describe behavior near a point, not at the point',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Limits describe behavior near a point, not at the point'
          }
        ]
      }
    },
    {
      id: 'limit1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Limit',
            options: ['Limits describe behavior near a point, not at the point', 'Written as lim(x→c) f(x) = L', 'the value f(x) approaches as x approaches a value c', 'The limit may exist even if f(c) is undefined']
          },
          {
            label: 'Written as lim(x→c) f(x) = L',
            options: ['Limits describe behavior near a point, not at the point', 'The limit may exist even if f(c) is undefined', 'the value f(x) approaches as x approaches a value c', 'Written as lim(x→c) f(x) = L']
          },
          {
            label: 'The limit may exist even if f(c) is…',
            options: ['the value f(x) approaches as x approaches a value c', 'Limits describe behavior near a point, not at the point', 'Written as lim(x→c) f(x) = L', 'The limit may exist even if f(c) is undefined']
          }
        ],
        correctAnswers: ['the value f(x) approaches as x approaches a value c', 'Written as lim(x→c) f(x) = L', 'The limit may exist even if f(c) is undefined'],
        hint1: 'Think about what each concept specifically describes in Limits Introduction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Limits Introduction describes a specific idea. Limit: the value f(x) approaches as x approaches a value c. Written as lim(x→c) f(x) = L. The limit may exist even if f(c) is undefined.'
      }
    }
  ]
}
