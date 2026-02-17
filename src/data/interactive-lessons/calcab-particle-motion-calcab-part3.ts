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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Speed = |v(t)| — always non-negative" refer to in calculus?',
            options: [
              'Maximum speed occurs at the largest |v(t)| value',
              'Speed = |v(t)| — always non-negative',
              'moving in negative direction (left/down)',
              'moving in positive direction (right/up)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Speed = |v(t)| — always non-negative. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes If v(t) < 0:',
            options: [
              'moving in positive direction (right/up)',
              'moving in negative direction (left/down)',
              'Maximum speed occurs at the largest |v(t)| value',
              'Speed = |v(t)| — always non-negative'
            ],
            correctAnswer: 1,
            explanation: 'Correct — If v(t) < 0: moving in negative direction (left/down). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Maximum speed occurs at the largest… is correct?',
            options: [
              'moving in positive direction (right/up)',
              'moving in negative direction (left/down)',
              'Speed = |v(t)| — always non-negative',
              'Maximum speed occurs at the largest |v(t)| value'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Maximum speed occurs at the largest |v(t)| value. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'parti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If v(t) > 0',
            options: ['Speed = |v(t)| — always non-negative', 'Maximum speed occurs at the largest |v(t)| value', 'moving in positive direction (right/up)', 'moving in negative direction (left/down)']
          },
          {
            label: 'If v(t) < 0',
            options: ['moving in positive direction (right/up)', 'Maximum speed occurs at the largest |v(t)| value', 'Speed = |v(t)| — always non-negative', 'moving in negative direction (left/down)']
          }
        ],
        correctAnswers: ['moving in positive direction (right/up)', 'moving in negative direction (left/down)'],
        hint1: 'Think about what each concept specifically describes in Speed & Direction.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Speed & Direction describes a specific idea. If v(t) > 0: moving in positive direction (right/up). If v(t) < 0: moving in negative direction (left/down).'
      }
    }
  ]
}
