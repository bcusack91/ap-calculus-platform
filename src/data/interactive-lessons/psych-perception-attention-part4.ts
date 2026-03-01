export const psychPerceptionPart4Data = {
  topicSlug: 'perception-attention',
  sections: [
    {
      id: 'perce4-intro',
      type: 'text' as const,
      content: `
## Attention

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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Selective attention?',
            options: [
              'focusing on one stimulus while ignoring others',
              'failing to notice obvious stimuli',
              'hearing your name in a noisy room',
              'failing to detect changes in scenes'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Selective attention: focusing on one stimulus while ignoring others. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Attention, which explains Inattentional blindness?',
            options: [
              'hearing your name in a noisy room',
              'failing to detect changes in scenes',
              'focusing on one stimulus while ignoring others',
              'failing to notice obvious stimuli'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Inattentional blindness: failing to notice obvious stimuli. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perce4-detail',
      type: 'text' as const,
      content: `
### Key Points

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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Selective attention',
            options: ['focusing on one stimulus while ignoring others', 'failing to notice obvious stimuli', 'hearing your name in a noisy room', 'failing to detect changes in scenes']
          },
          {
            label: 'Cocktail party effect',
            options: ['failing to detect changes in scenes', 'focusing on one stimulus while ignoring others', 'hearing your name in a noisy room', 'failing to notice obvious stimuli']
          },
          {
            label: 'Inattentional blindness',
            options: ['hearing your name in a noisy room', 'focusing on one stimulus while ignoring others', 'failing to notice obvious stimuli', 'failing to detect changes in scenes']
          }
        ],
        correctAnswers: ['focusing on one stimulus while ignoring others', 'hearing your name in a noisy room', 'failing to notice obvious stimuli'],
        hint1: 'Think about what each concept specifically describes in Attention.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Attention describes a specific idea. Selective attention: focusing on one stimulus while ignoring others. Cocktail party effect: hearing your name in a noisy room. Inattentional blindness: failing to notice obvious stimuli.'
      }
    }
  ]
}
