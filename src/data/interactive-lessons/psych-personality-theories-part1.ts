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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of psychodynamic perspective?',
            options: [
              'Freud',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Freud: id (pleasure), ego (reality), superego (morality)'
          },
          {
            question: 'In the context of psychodynamic perspective, which is accurate?',
            options: [
              'oral, anal, phallic, latency, genital',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Psychosexual stages: oral, anal, phallic, latency, genital'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Freud',
            options: ['id (pleasure), ego (reality), superego (morality)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Defense mechanisms',
            options: ['repression, projection, rationalization, displacem', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Psychosexual stages',
            options: ['oral, anal, phallic, latency, genital', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['id (pleasure), ego (reality), superego (morality)', 'repression, projection, rationalization, displacem', 'oral, anal, phallic, latency, genital'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Psychodynamic Perspective.'
      }
    }
  ]
}
