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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Projective tests?',
            options: [
              'MMPI, Big Five questionnaire (objective)',
              'This is a common misconception about the topic',
              'Rorschach inkblot, TAT (reveal unconscious)',
              'vulnerable to social desirability bias'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Projective tests: Rorschach inkblot, TAT (reveal unconscious). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Projective tests?',
            options: [
              'low reliability and validity',
              'vulnerable to social desirability bias',
              'This is a common misconception about the topic',
              'MMPI, Big Five questionnaire (objective)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Projective tests: low reliability and validity. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Projective tests',
            options: ['vulnerable to social desirability bias', 'low reliability and validity', 'MMPI, Big Five questionnaire (objective)', 'Rorschach inkblot, TAT (reveal unconscious)']
          },
          {
            label: 'Self-report inventories',
            options: ['Rorschach inkblot, TAT (reveal unconscious)', 'low reliability and validity', 'MMPI, Big Five questionnaire (objective)', 'vulnerable to social desirability bias']
          },
          {
            label: 'Projective tests',
            options: ['vulnerable to social desirability bias', 'Rorschach inkblot, TAT (reveal unconscious)', 'MMPI, Big Five questionnaire (objective)', 'low reliability and validity']
          }
        ],
        correctAnswers: ['Rorschach inkblot, TAT (reveal unconscious)', 'MMPI, Big Five questionnaire (objective)', 'low reliability and validity'],
        hint1: 'Think about what each concept specifically describes in Personality Assessment.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Personality Assessment describes a specific idea. Projective tests: Rorschach inkblot, TAT (reveal unconscious). Self-report inventories: MMPI, Big Five questionnaire (objective). Projective tests: low reliability and validity.'
      }
    }
  ]
}
