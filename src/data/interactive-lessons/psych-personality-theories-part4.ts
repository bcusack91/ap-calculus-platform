export const psychPersonalityPart4Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso4-intro',
      type: 'text' as const,
      content: `
# ## Social-Cognitive Perspective

**Part 4 of 7 — Social-Cognitive Perspective**

### 1. Bandura

reciprocal determinism (behavior ↔ person ↔ environment)

### 2. Self-efficacy

belief in one's ability to succeed

### 3. Locus of control (Rotter)

internal vs external

### 4. Person-situation debate

behavior varies by situation
      `
    },
    {
      id: 'perso4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of social-cognitive perspective?',
            options: [
              'Bandura',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Bandura: reciprocal determinism (behavior ↔ person ↔ environment)'
          },
          {
            question: 'In the context of social-cognitive perspective, which is accurate?',
            options: [
              'internal vs external',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Locus of control (Rotter): internal vs external'
          }
        ]
      }
    },
    {
      id: 'perso4-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Bandura**: reciprocal determinism (behavior ↔ person ↔ environment)
- **Self-efficacy**: belief in one's ability to succeed
- **Locus of control (Rotter)**: internal vs external
- **Person-situation debate**: behavior varies by situation
      `
    },
    {
      id: 'perso4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to social-cognitive perspective?',
            options: [
              'behavior varies by situation',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Person-situation debate: behavior varies by situation'
          }
        ]
      }
    },
    {
      id: 'perso4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bandura',
            options: ['reciprocal determinism (behavior ↔ person ↔ enviro', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Self-efficacy',
            options: ['belief in one\'s ability to succeed', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Locus of control (Rotter)',
            options: ['internal vs external', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['reciprocal determinism (behavior ↔ person ↔ enviro', 'belief in one\'s ability to succeed', 'internal vs external'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Social-Cognitive Perspective.'
      }
    }
  ]
}
