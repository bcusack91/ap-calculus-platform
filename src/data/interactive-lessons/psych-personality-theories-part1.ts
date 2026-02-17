export const psychPersonalityPart1Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso1-intro',
      type: 'text' as const,
      content: `
# 🧠 Personality Theories

**Part 1 of 7 — Psychodynamic Perspective**

### 1. Freud

id (pleasure), ego (reality), superego (morality)

### 2. Defense mechanisms

repression, projection, rationalization, displacement

### 3. Psychosexual stages

oral, anal, phallic, latency, genital

### 4. Unconscious mind influences behavior

Unconscious mind influences behavior
      `
    },
    {
      id: 'perso1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Freud" refer to in psychology?',
            options: [
              'oral, anal, phallic, latency, genital',
              'Unconscious mind influences behavior',
              'repression, projection, rationalization, displacement',
              'id (pleasure), ego (reality), superego (morality)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Freud: id (pleasure), ego (reality), superego (morality). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Psychosexual stages:',
            options: [
              'Unconscious mind influences behavior',
              'oral, anal, phallic, latency, genital',
              'repression, projection, rationalization, displacement',
              'id (pleasure), ego (reality), superego (morality)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Psychosexual stages: oral, anal, phallic, latency, genital. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'perso1-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Freud**: id (pleasure), ego (reality), superego (morality)
- **Defense mechanisms**: repression, projection, rationalization, displacement
- **Psychosexual stages**: oral, anal, phallic, latency, genital
- **Unconscious mind influences behavior**
      `
    },
    {
      id: 'perso1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to psychodynamic perspective?',
            options: [
              'Unconscious mind influences behavior',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Unconscious mind influences behavior'
          }
        ]
      }
    },
    {
      id: 'perso1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Freud',
            options: ['oral, anal, phallic, latency, genital', 'repression, projection, rationalization, displacement', 'Unconscious mind influences behavior', 'id (pleasure), ego (reality), superego (morality)']
          },
          {
            label: 'Defense mechanisms',
            options: ['Unconscious mind influences behavior', 'oral, anal, phallic, latency, genital', 'id (pleasure), ego (reality), superego (morality)', 'repression, projection, rationalization, displacement']
          },
          {
            label: 'Psychosexual stages',
            options: ['oral, anal, phallic, latency, genital', 'id (pleasure), ego (reality), superego (morality)', 'repression, projection, rationalization, displacement', 'Unconscious mind influences behavior']
          }
        ],
        correctAnswers: ['id (pleasure), ego (reality), superego (morality)', 'repression, projection, rationalization, displacement', 'oral, anal, phallic, latency, genital'],
        hint1: 'Think about what each concept specifically describes in Personality Theories.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Personality Theories describes a specific idea. Freud: id (pleasure), ego (reality), superego (morality). Defense mechanisms: repression, projection, rationalization, displacement. Psychosexual stages: oral, anal, phallic, latency, genital.'
      }
    }
  ]
}
