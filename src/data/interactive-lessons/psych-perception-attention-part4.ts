export const psychPerceptionPart4Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce4-intro',
      type: 'text' as const,
      content: `
# ## Attention

**Part 4 of 7 — Attention**

### 1. Selective attention

focusing on one stimulus while ignoring others

### 2. Cocktail party effect

hearing your name in a noisy room

### 3. Inattentional blindness

failing to notice obvious stimuli

### 4. Change blindness

failing to detect changes in scenes
      `
    },
    {
      id: 'perce4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of attention?',
            options: [
              'Selective attention',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Selective attention: focusing on one stimulus while ignoring others'
          },
          {
            question: 'In the context of attention, which is accurate?',
            options: [
              'failing to notice obvious stimuli',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Inattentional blindness: failing to notice obvious stimuli'
          }
        ]
      }
    },
    {
      id: 'perce4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Selective attention**: focusing on one stimulus while ignoring others
- **Cocktail party effect**: hearing your name in a noisy room
- **Inattentional blindness**: failing to notice obvious stimuli
- **Change blindness**: failing to detect changes in scenes
      `
    },
    {
      id: 'perce4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to attention?',
            options: [
              'failing to detect changes in scenes',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Change blindness: failing to detect changes in scenes'
          }
        ]
      }
    },
    {
      id: 'perce4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Selective attention',
            options: ['focusing on one stimulus while ignoring others', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Cocktail party effect',
            options: ['hearing your name in a noisy room', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Inattentional blindness',
            options: ['failing to notice obvious stimuli', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['focusing on one stimulus while ignoring others', 'hearing your name in a noisy room', 'failing to notice obvious stimuli'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Attention.'
      }
    }
  ]
}
