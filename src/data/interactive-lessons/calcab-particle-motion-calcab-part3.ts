export const calcABParticleMotionPart3Data = {
  topicSlug: 'particle-motion-calcab',
  sections: [
    {
      id: 'parti3-intro',
      type: 'text' as const,
      content: `
# Speed & Direction

**Part 3 of 7 — Speed & Direction**

### 1. Speed = |v(t)| — always non-negative

Speed = |v(t)| — always non-negative

### 2. If v(t) > 0

moving in positive direction (right/up)

### 3. If v(t) < 0

moving in negative direction (left/down)

### 4. Maximum speed occurs at the largest |v(t)| value

Maximum speed occurs at the largest |v(t)| value
      `
    },
    {
      id: 'parti3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of speed & direction?',
            options: [
              'Speed = |v(t)| — always non-negative',
              'An unrelated concept',
              'This is not covered in AP Calculus AB',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Speed = |v(t)| — always non-negative'
          },
          {
            question: 'In the context of speed & direction, which is accurate?',
            options: [
              'moving in negative direction (left/down)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If v(t) < 0: moving in negative direction (left/down)'
          }
        ]
      }
    },
    {
      id: 'parti3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Speed = |v(t)| — always non-negative**
- **If v(t) > 0**: moving in positive direction (right/up)
- **If v(t) < 0**: moving in negative direction (left/down)
- **Maximum speed occurs at the largest |v(t)| value**
      `
    },
    {
      id: 'parti3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to speed & direction?',
            options: [
              'Maximum speed occurs at the largest |v(t)| value',
              'Only in linear algebra',
              'Exclusively in statistics',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Maximum speed occurs at the largest |v(t)| value'
          }
        ]
      }
    },
    {
      id: 'parti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Speed = |v(t)| — always non-negative',
            options: ['Speed = |v(t)| — always non-negative', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If v(t) > 0',
            options: ['moving in positive direction (right/up)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'If v(t) < 0',
            options: ['moving in negative direction (left/down)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Speed = |v(t)| — always non-negative', 'moving in positive direction (right/up)', 'moving in negative direction (left/down)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Speed & Direction.'
      }
    }
  ]
}
