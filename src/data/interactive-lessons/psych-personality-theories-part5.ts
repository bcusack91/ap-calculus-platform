export const psychPersonalityPart5Data = {
  topicSlug: 'personality-theories',
  sections: [
    {
      id: 'perso5-intro',
      type: 'text' as const,
      content: `
# ## Personality Assessment

**Part 5 of 7 — Personality Assessment**

### 1. Projective tests

Rorschach inkblot, TAT (reveal unconscious)

### 2. Self-report inventories

MMPI, Big Five questionnaire (objective)

### 3. Projective tests

low reliability and validity

### 4. Self-report

vulnerable to social desirability bias
      `
    },
    {
      id: 'perso5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of personality assessment?',
            options: [
              'Projective tests',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Projective tests: Rorschach inkblot, TAT (reveal unconscious)'
          },
          {
            question: 'In the context of personality assessment, which is accurate?',
            options: [
              'low reliability and validity',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Projective tests: low reliability and validity'
          }
        ]
      }
    },
    {
      id: 'perso5-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Projective tests**: Rorschach inkblot, TAT (reveal unconscious)
- **Self-report inventories**: MMPI, Big Five questionnaire (objective)
- **Projective tests**: low reliability and validity
- **Self-report**: vulnerable to social desirability bias
      `
    },
    {
      id: 'perso5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to personality assessment?',
            options: [
              'vulnerable to social desirability bias',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Self-report: vulnerable to social desirability bias'
          }
        ]
      }
    },
    {
      id: 'perso5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Projective tests',
            options: ['Rorschach inkblot, TAT (reveal unconscious)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Self-report inventories',
            options: ['MMPI, Big Five questionnaire (objective)', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Projective tests',
            options: ['low reliability and validity', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['Rorschach inkblot, TAT (reveal unconscious)', 'MMPI, Big Five questionnaire (objective)', 'low reliability and validity'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Personality Assessment.'
      }
    }
  ]
}
