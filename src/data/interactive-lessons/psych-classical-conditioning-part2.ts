export const psychClassicalPart2Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class2-intro',
      type: 'text' as const,
      content: `
## Key Concepts

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes UCS (unconditioned stimulus)?',
            options: [
              'natural response to UCS (salivation)',
              'learned response to CS (salivation to bell)',
              'neutral stimulus paired with UCS (bell)',
              'naturally triggers response (food)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — UCS (unconditioned stimulus): naturally triggers response (food). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Key Concepts, which explains CS (conditioned stimulus)?',
            options: [
              'learned response to CS (salivation to bell)',
              'neutral stimulus paired with UCS (bell)',
              'naturally triggers response (food)',
              'natural response to UCS (salivation)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — CS (conditioned stimulus): neutral stimulus paired with UCS (bell). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'class2-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'UCS (unconditioned stimulus)',
            options: ['naturally triggers response (food)', 'natural response to UCS (salivation)', 'learned response to CS (salivation to bell)', 'neutral stimulus paired with UCS (bell)']
          },
          {
            label: 'UCR (unconditioned response)',
            options: ['natural response to UCS (salivation)', 'naturally triggers response (food)', 'neutral stimulus paired with UCS (bell)', 'learned response to CS (salivation to bell)']
          },
          {
            label: 'CS (conditioned stimulus)',
            options: ['naturally triggers response (food)', 'learned response to CS (salivation to bell)', 'neutral stimulus paired with UCS (bell)', 'natural response to UCS (salivation)']
          }
        ],
        correctAnswers: ['naturally triggers response (food)', 'natural response to UCS (salivation)', 'neutral stimulus paired with UCS (bell)'],
        hint1: 'Think about what each concept specifically describes in Key Concepts.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Key Concepts describes a specific idea. UCS (unconditioned stimulus): naturally triggers response (food). UCR (unconditioned response): natural response to UCS (salivation). CS (conditioned stimulus): neutral stimulus paired with UCS (bell).'
      }
    }
  ]
}
