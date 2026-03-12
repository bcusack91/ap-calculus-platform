export const psychClassicalPart1Data = {
  topicSlug: 'classical-conditioning',
  sections: [
    {
      id: 'class1-intro',
      type: 'text' as const,
      content: `
# 🧠 Classical Conditioning

**Part 1 of 7 — Pavlov's Discovery**

### 1. Ivan Pavlov

Russian physiologist studying digestion

### 2. Dogs salivated to bell after pairing with food

Dogs salivated to bell after pairing with food

### 3. Learning

relatively permanent change in behavior due to experience

### 4. Classical conditioning

learning by association
      `
    },
    {
      id: 'class1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Ivan Pavlov?',
            options: [
              'Russian physiologist studying digestion',
              'relatively permanent change in behavior due to experience',
              'learning by association',
              'Dogs salivated to bell after pairing with food'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Ivan Pavlov: Russian physiologist studying digestion. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Classical Conditioning, which explains Learning?',
            options: [
              'relatively permanent change in behavior due to experience',
              'learning by association',
              'Dogs salivated to bell after pairing with food',
              'Russian physiologist studying digestion'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Learning: relatively permanent change in behavior due to experience. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'class1-detail',
      type: 'text' as const,
      content: `
### Key Points

- **Ivan Pavlov**: Russian physiologist studying digestion
- **Dogs salivated to bell after pairing with food**
- **Learning**: relatively permanent change in behavior due to experience
- **Classical conditioning**: learning by association
      `
    },
    {
      id: 'class1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to pavlov\'s discovery?',
            options: [
              'learning by association',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Classical conditioning: learning by association'
          }
        ]
      }
    },
    {
      id: 'class1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ivan Pavlov',
            options: ['Dogs salivated to bell after pairing with food', 'relatively permanent change in behavior due to experience', 'learning by association', 'Russian physiologist studying digestion']
          },
          {
            label: 'Learning',
            options: ['Russian physiologist studying digestion', 'Dogs salivated to bell after pairing with food', 'relatively permanent change in behavior due to experience', 'learning by association']
          },
          {
            label: 'Classical conditioning',
            options: ['learning by association', 'Russian physiologist studying digestion', 'Dogs salivated to bell after pairing with food', 'relatively permanent change in behavior due to experience']
          }
        ],
        correctAnswers: ['Russian physiologist studying digestion', 'relatively permanent change in behavior due to experience', 'learning by association'],
        hint1: 'Think about what each concept specifically describes in Classical Conditioning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Classical Conditioning describes a specific idea. Ivan Pavlov: Russian physiologist studying digestion. Learning: relatively permanent change in behavior due to experience. Classical conditioning: learning by association.'
      }
    }
  ]
}
