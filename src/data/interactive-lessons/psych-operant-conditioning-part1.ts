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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Thorndike\'s Law of Effect?',
            options: [
              'rewarded behaviors are repeated',
              'learning through consequences',
              'operant conditioning chamber (Skinner box)',
              'Behavior followed by reinforcement increases; by punishment decreases'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Thorndike\'s Law of Effect: rewarded behaviors are repeated. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Operant conditioning?',
            options: [
              'rewarded behaviors are repeated',
              'learning through consequences',
              'operant conditioning chamber (Skinner box)',
              'Behavior followed by reinforcement increases; by punishment decreases'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Operant conditioning: learning through consequences. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Thorndike\'s Law of Effect',
            options: ['learning through consequences', 'operant conditioning chamber (Skinner box)', 'rewarded behaviors are repeated', 'Behavior followed by reinforcement increases; by punishment decreases']
          },
          {
            label: 'B.F. Skinner',
            options: ['operant conditioning chamber (Skinner box)', 'Behavior followed by reinforcement increases; by punishment decreases', 'rewarded behaviors are repeated', 'learning through consequences']
          },
          {
            label: 'Operant conditioning',
            options: ['operant conditioning chamber (Skinner box)', 'learning through consequences', 'rewarded behaviors are repeated', 'Behavior followed by reinforcement increases; by punishment decreases']
          }
        ],
        correctAnswers: ['rewarded behaviors are repeated', 'operant conditioning chamber (Skinner box)', 'learning through consequences'],
        hint1: 'Think about what each concept specifically describes in Operant Conditioning.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Operant Conditioning describes a specific idea. Thorndike\'s Law of Effect: rewarded behaviors are repeated. B.F. Skinner: operant conditioning chamber (Skinner box). Operant conditioning: learning through consequences.'
      }
    }
  ]
}
