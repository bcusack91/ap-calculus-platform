export const precalcLimitsPart4Data = {
  topicSlug: 'limits-introduction-precalc',
  sections: [
    {
      id: 'limit4-intro',
      type: 'text' as const,
      content: `
# One-Sided Limits

**Part 4 of 7 — One-Sided Limits**

### 1. Left-hand limit

lim(x→c⁻) f(x) — approaching from the left

### 2. Right-hand limit

lim(x→c⁺) f(x) — approaching from the right

### 3. The two-sided limit exists iff both one-sided limits exist and are equal

The two-sided limit exists iff both one-sided limits exist and are equal

### 4. Jump discontinuity

one-sided limits exist but are not equal
      `
    },
    {
      id: 'limit4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Left-hand limit?',
            options: [
              'lim(x→c⁻) f(x) — approaching from the left',
              'one-sided limits exist but are not equal',
              'lim(x→c⁺) f(x) — approaching from the right',
              'The two-sided limit exists iff both one-sided limits exist and are equal'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Left-hand limit: lim(x→c⁻) f(x) — approaching from the left. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of One-Sided Limits, which explains The two-sided limit exists iff both…?',
            options: [
              'The two-sided limit exists iff both one-sided limits exist and are equal',
              'lim(x→c⁺) f(x) — approaching from the right',
              'lim(x→c⁻) f(x) — approaching from the left',
              'one-sided limits exist but are not equal'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The two-sided limit exists iff both one-sided limits exist and are equal. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'limit4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Left-hand limit**: lim(x→c⁻) f(x) — approaching from the left
- **Right-hand limit**: lim(x→c⁺) f(x) — approaching from the right
- **The two-sided limit exists iff both one-sided limits exist and are equal**
- **Jump discontinuity**: one-sided limits exist but are not equal
      `
    },
    {
      id: 'limit4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to one-sided limits?',
            options: [
              'one-sided limits exist but are not equal',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Jump discontinuity: one-sided limits exist but are not equal'
          }
        ]
      }
    },
    {
      id: 'limit4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Left-hand limit',
            options: ['lim(x→c⁺) f(x) — approaching from the right', 'The two-sided limit exists iff both one-sided limits exist and are equal', 'lim(x→c⁻) f(x) — approaching from the left', 'one-sided limits exist but are not equal']
          },
          {
            label: 'Right-hand limit',
            options: ['one-sided limits exist but are not equal', 'The two-sided limit exists iff both one-sided limits exist and are equal', 'lim(x→c⁻) f(x) — approaching from the left', 'lim(x→c⁺) f(x) — approaching from the right']
          },
          {
            label: 'Jump discontinuity',
            options: ['lim(x→c⁻) f(x) — approaching from the left', 'The two-sided limit exists iff both one-sided limits exist and are equal', 'one-sided limits exist but are not equal', 'lim(x→c⁺) f(x) — approaching from the right']
          }
        ],
        correctAnswers: ['lim(x→c⁻) f(x) — approaching from the left', 'lim(x→c⁺) f(x) — approaching from the right', 'one-sided limits exist but are not equal'],
        hint1: 'Think about what each concept specifically describes in One-Sided Limits.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in One-Sided Limits describes a specific idea. Left-hand limit: lim(x→c⁻) f(x) — approaching from the left. Right-hand limit: lim(x→c⁺) f(x) — approaching from the right. Jump discontinuity: one-sided limits exist but are not equal.'
      }
    }
  ]
}
