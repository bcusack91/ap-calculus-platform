export const psychDisordersPart3Data = {
  topicSlug: 'psychological-disorders-overview',
  sections: [
    {
      id: 'psych3-intro',
      type: 'text' as const,
      content: `
# ## Perspectives on Disorders

**Part 3 of 7 — Perspectives on Disorders**

### 1. Biological

genetics, neurotransmitters, brain structure

### 2. Psychological

learning, cognition, personality

### 3. Sociocultural

culture, poverty, discrimination

### 4. Diathesis-stress model

vulnerability + stress → disorder
      `
    },
    {
      id: 'psych3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Biological" refer to in psychology?',
            options: [
              'vulnerability + stress → disorder',
              'learning, cognition, personality',
              'genetics, neurotransmitters, brain structure',
              'culture, poverty, discrimination'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Biological: genetics, neurotransmitters, brain structure. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Sociocultural:',
            options: [
              'culture, poverty, discrimination',
              'vulnerability + stress → disorder',
              'genetics, neurotransmitters, brain structure',
              'learning, cognition, personality'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Sociocultural: culture, poverty, discrimination. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'psych3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Biological**: genetics, neurotransmitters, brain structure
- **Psychological**: learning, cognition, personality
- **Sociocultural**: culture, poverty, discrimination
- **Diathesis-stress model**: vulnerability + stress → disorder
      `
    },
    {
      id: 'psych3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to perspectives on disorders?',
            options: [
              'vulnerability + stress → disorder',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Diathesis-stress model: vulnerability + stress → disorder'
          }
        ]
      }
    },
    {
      id: 'psych3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Biological',
            options: ['culture, poverty, discrimination', 'vulnerability + stress → disorder', 'learning, cognition, personality', 'genetics, neurotransmitters, brain structure']
          },
          {
            label: 'Psychological',
            options: ['vulnerability + stress → disorder', 'culture, poverty, discrimination', 'learning, cognition, personality', 'genetics, neurotransmitters, brain structure']
          },
          {
            label: 'Sociocultural',
            options: ['culture, poverty, discrimination', 'vulnerability + stress → disorder', 'genetics, neurotransmitters, brain structure', 'learning, cognition, personality']
          }
        ],
        correctAnswers: ['genetics, neurotransmitters, brain structure', 'learning, cognition, personality', 'culture, poverty, discrimination'],
        hint1: 'Think about what each concept specifically describes in Perspectives on Disorders.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Perspectives on Disorders describes a specific idea. Biological: genetics, neurotransmitters, brain structure. Psychological: learning, cognition, personality. Sociocultural: culture, poverty, discrimination.'
      }
    }
  ]
}
