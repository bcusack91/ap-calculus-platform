export const precalcLawSinesCosinesPart1Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'law-o1-intro',
      type: 'text' as const,
      content: `
# 📈 Law Of Sines Cosines

**Part 1 of 7 — Law of Sines**

### 1. Law of Sines

a/sin A = b/sin B = c/sin C

### 2. Use when you know

AAS, ASA, or SSA

### 3. Relates sides to opposite angles

Relates sides to opposite angles

### 4. Can solve for unknown sides or angles

Can solve for unknown sides or angles
      `
    },
    {
      id: 'law-o1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Law of Sines" refer to in precalculus?',
            options: [
              'Can solve for unknown sides or angles',
              'AAS, ASA, or SSA',
              'a/sin A = b/sin B = c/sin C',
              'Relates sides to opposite angles'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Law of Sines: a/sin A = b/sin B = c/sin C. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Relates sides to opposite angles?',
            options: [
              'Can solve for unknown sides or angles',
              'Relates sides to opposite angles',
              'AAS, ASA, or SSA',
              'a/sin A = b/sin B = c/sin C'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Relates sides to opposite angles. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'law-o1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Law of Sines**: a/sin A = b/sin B = c/sin C
- **Use when you know**: AAS, ASA, or SSA
- **Relates sides to opposite angles**
- **Can solve for unknown sides or angles**
      `
    },
    {
      id: 'law-o1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to law of sines?',
            options: [
              'Can solve for unknown sides or angles',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Can solve for unknown sides or angles'
          }
        ]
      }
    },
    {
      id: 'law-o1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Law of Sines',
            options: ['a/sin A = b/sin B = c/sin C', 'Relates sides to opposite angles', 'Can solve for unknown sides or angles', 'AAS, ASA, or SSA']
          },
          {
            label: 'Use when you know',
            options: ['a/sin A = b/sin B = c/sin C', 'Relates sides to opposite angles', 'AAS, ASA, or SSA', 'Can solve for unknown sides or angles']
          }
        ],
        correctAnswers: ['a/sin A = b/sin B = c/sin C', 'AAS, ASA, or SSA'],
        hint1: 'Think about what each concept specifically describes in Law Of Sines Cosines.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Law Of Sines Cosines describes a specific idea. Law of Sines: a/sin A = b/sin B = c/sin C. Use when you know: AAS, ASA, or SSA.'
      }
    }
  ]
}
