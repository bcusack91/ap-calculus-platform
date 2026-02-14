export const psychPrenatalPart3Data = {
  topicSlug: 'prenatal-childhood-development',
  sections: [
    {
      id: 'prena3-intro',
      type: 'text' as const,
      content: `
# ## Cognitive Development (Piaget)

**Part 3 of 7 — Cognitive Development (Piaget)**

### 1. Sensorimotor (0-2)

object permanence

### 2. Preoperational (2-7)

egocentrism, symbolic thinking

### 3. Concrete operational (7-11)

conservation, logical thought

### 4. Formal operational (11+)

abstract thinking, hypothetical reasoning
      `
    },
    {
      id: 'prena3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of cognitive development (piaget)?',
            options: [
              'Sensorimotor (0-2)',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Sensorimotor (0-2): object permanence'
          },
          {
            question: 'In the context of cognitive development (piaget), which is accurate?',
            options: [
              'conservation, logical thought',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Concrete operational (7-11): conservation, logical thought'
          }
        ]
      }
    },
    {
      id: 'prena3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Sensorimotor (0-2)**: object permanence
- **Preoperational (2-7)**: egocentrism, symbolic thinking
- **Concrete operational (7-11)**: conservation, logical thought
- **Formal operational (11+)**: abstract thinking, hypothetical reasoning
      `
    },
    {
      id: 'prena3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to cognitive development (piaget)?',
            options: [
              'abstract thinking, hypothetical reasoning',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Formal operational (11+): abstract thinking, hypothetical reasoning'
          }
        ]
      }
    },
    {
      id: 'prena3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Sensorimotor (0-2)',
            options: ['object permanence', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Preoperational (2-7)',
            options: ['egocentrism, symbolic thinking', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Concrete operational (7-11)',
            options: ['conservation, logical thought', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['object permanence', 'egocentrism, symbolic thinking', 'conservation, logical thought'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Cognitive Development (Piaget).'
      }
    }
  ]
}
