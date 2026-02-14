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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of pavlov\'s discovery?',
            options: [
              'Ivan Pavlov',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Ivan Pavlov: Russian physiologist studying digestion'
          },
          {
            question: 'In the context of pavlov\'s discovery, which is accurate?',
            options: [
              'relatively permanent change in behavior due to experience',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Learning: relatively permanent change in behavior due to experience'
          }
        ]
      }
    },
    {
      id: 'class1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ivan Pavlov',
            options: ['Russian physiologist studying digestion', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Dogs salivated to bell after pairing with food',
            options: ['Dogs salivated to bell after pairing with food', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Learning',
            options: ['relatively permanent change in behavior due to exp', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Russian physiologist studying digestion', 'Dogs salivated to bell after pairing with food', 'relatively permanent change in behavior due to exp'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Pavlov\'s Discovery.'
      }
    }
  ]
}
