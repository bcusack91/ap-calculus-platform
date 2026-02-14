export const psychClassicalPart2Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class2-intro',
      type: 'text' as const,
      content: `
# ## Key Concepts

**Part 2 of 7 — Key Concepts**

### 1. UCS (unconditioned stimulus)

naturally triggers response (food)

### 2. UCR (unconditioned response)

natural response to UCS (salivation)

### 3. CS (conditioned stimulus)

neutral stimulus paired with UCS (bell)

### 4. CR (conditioned response)

learned response to CS (salivation to bell)
      `
    },
    {
      id: 'class2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of key concepts?',
            options: [
              'UCS (unconditioned stimulus)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'UCS (unconditioned stimulus): naturally triggers response (food)'
          },
          {
            question: 'In the context of key concepts, which is accurate?',
            options: [
              'neutral stimulus paired with UCS (bell)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'CS (conditioned stimulus): neutral stimulus paired with UCS (bell)'
          }
        ]
      }
    },
    {
      id: 'class2-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **UCS (unconditioned stimulus)**: naturally triggers response (food)
- **UCR (unconditioned response)**: natural response to UCS (salivation)
- **CS (conditioned stimulus)**: neutral stimulus paired with UCS (bell)
- **CR (conditioned response)**: learned response to CS (salivation to bell)
      `
    },
    {
      id: 'class2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to key concepts?',
            options: [
              'learned response to CS (salivation to bell)',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'CR (conditioned response): learned response to CS (salivation to bell)'
          }
        ]
      }
    },
    {
      id: 'class2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'UCS (unconditioned stimulus)',
            options: ['naturally triggers response (food)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'UCR (unconditioned response)',
            options: ['natural response to UCS (salivation)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'CS (conditioned stimulus)',
            options: ['neutral stimulus paired with UCS (bell)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['naturally triggers response (food)', 'natural response to UCS (salivation)', 'neutral stimulus paired with UCS (bell)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Key Concepts.'
      }
    }
  ]
}
