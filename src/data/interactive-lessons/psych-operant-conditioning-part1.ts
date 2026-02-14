export const psychOperantPart1Data = {
  topicSlug: 'operant-conditioning',
  sections: [
    {
      id: 'opera1-intro',
      type: 'text' as const,
      content: `
# 🧠 Operant Conditioning

**Part 1 of 7 — Thorndike & Skinner**

### 1. Thorndike's Law of Effect

rewarded behaviors are repeated

### 2. B.F. Skinner

operant conditioning chamber (Skinner box)

### 3. Operant conditioning

learning through consequences

### 4. Behavior followed by reinforcement increases; by punishment decreases

Behavior followed by reinforcement increases; by punishment decreases
      `
    },
    {
      id: 'opera1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of thorndike & skinner?',
            options: [
              'Thorndike\'s Law of Effect',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Thorndike\'s Law of Effect: rewarded behaviors are repeated'
          },
          {
            question: 'In the context of thorndike & skinner, which is accurate?',
            options: [
              'learning through consequences',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Operant conditioning: learning through consequences'
          }
        ]
      }
    },
    {
      id: 'opera1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Thorndike's Law of Effect**: rewarded behaviors are repeated
- **B.F. Skinner**: operant conditioning chamber (Skinner box)
- **Operant conditioning**: learning through consequences
- **Behavior followed by reinforcement increases; by punishment decreases**
      `
    },
    {
      id: 'opera1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to thorndike & skinner?',
            options: [
              'Behavior followed by reinforcement increases; by punishment decreases',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Behavior followed by reinforcement increases; by punishment decreases'
          }
        ]
      }
    },
    {
      id: 'opera1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Thorndike\'s Law of Effect',
            options: ['rewarded behaviors are repeated', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'B.F. Skinner',
            options: ['operant conditioning chamber (Skinner box)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Operant conditioning',
            options: ['learning through consequences', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['rewarded behaviors are repeated', 'operant conditioning chamber (Skinner box)', 'learning through consequences'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Thorndike & Skinner.'
      }
    }
  ]
}
