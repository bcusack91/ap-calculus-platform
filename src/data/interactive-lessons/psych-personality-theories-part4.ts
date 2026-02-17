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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Bandura" refer to in psychology?',
            options: [
              'reciprocal determinism (behavior ↔ person ↔ environment)',
              'belief in one\'s ability to succeed',
              'internal vs external',
              'behavior varies by situation'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Bandura: reciprocal determinism (behavior ↔ person ↔ environment). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Social-Cognitive Perspective, which explains Locus of control (Rotter)?',
            options: [
              'behavior varies by situation',
              'internal vs external',
              'belief in one\'s ability to succeed',
              'reciprocal determinism (behavior ↔ person ↔ environment)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Locus of control (Rotter): internal vs external. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Bandura',
            options: ['internal vs external', 'belief in one\'s ability to succeed', 'behavior varies by situation', 'reciprocal determinism (behavior ↔ person ↔ environment)']
          },
          {
            label: 'Self-efficacy',
            options: ['belief in one\'s ability to succeed', 'behavior varies by situation', 'internal vs external', 'reciprocal determinism (behavior ↔ person ↔ environment)']
          },
          {
            label: 'Locus of control (Rotter)',
            options: ['behavior varies by situation', 'internal vs external', 'belief in one\'s ability to succeed', 'reciprocal determinism (behavior ↔ person ↔ environment)']
          }
        ],
        correctAnswers: ['reciprocal determinism (behavior ↔ person ↔ environment)', 'belief in one\'s ability to succeed', 'internal vs external'],
        hint1: 'Think about what each concept specifically describes in Social-Cognitive Perspective.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Social-Cognitive Perspective describes a specific idea. Bandura: reciprocal determinism (behavior ↔ person ↔ environment). Self-efficacy: belief in one\'s ability to succeed. Locus of control (Rotter): internal vs external.'
      }
    }
  ]
}
