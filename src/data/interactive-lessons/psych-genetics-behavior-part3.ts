export const psychGeneticsPart3Data = {
  topicSlug: 'genetics-behavior',
  sections: [
    {
      id: 'genet3-intro',
      type: 'text' as const,
      content: `
# ## Twin & Adoption Studies

**Part 3 of 7 — Twin & Adoption Studies**

### 1. Identical (MZ) twins

100% shared genes

### 2. Fraternal (DZ) twins

~50% shared genes

### 3. Higher concordance in MZ twins → genetic influence

Higher concordance in MZ twins → genetic influence

### 4. Adoption studies separate genetic and environmental effects

Adoption studies separate genetic and environmental effects
      `
    },
    {
      id: 'genet3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Identical (MZ) twins" refer to in psychology?',
            options: [
              'Higher concordance in MZ twins → genetic influence',
              'Adoption studies separate genetic and environmental effects',
              '~50% shared genes',
              '100% shared genes'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Identical (MZ) twins: 100% shared genes. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Higher concordance in MZ twins →…:',
            options: [
              'Adoption studies separate genetic and environmental effects',
              '100% shared genes',
              'Higher concordance in MZ twins → genetic influence',
              '~50% shared genes'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Higher concordance in MZ twins → genetic influence. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'genet3-detail',
      type: 'text' as const,
      content: `
# ### Key Points

- **Identical (MZ) twins**: 100% shared genes
- **Fraternal (DZ) twins**: ~50% shared genes
- **Higher concordance in MZ twins → genetic influence**
- **Adoption studies separate genetic and environmental effects**
      `
    },
    {
      id: 'genet3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to twin & adoption studies?',
            options: [
              'Adoption studies separate genetic and environmental effects',
              'Only biological factors',
              'Exclusively cognitive processes',
              'Mathematical formulas only'
            ],
            correctAnswer: 0,
            explanation: 'Adoption studies separate genetic and environmental effects'
          }
        ]
      }
    },
    {
      id: 'genet3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identical (MZ) twins',
            options: ['100% shared genes', 'Higher concordance in MZ twins → genetic influence', 'Adoption studies separate genetic and environmental effects', '~50% shared genes']
          },
          {
            label: 'Fraternal (DZ) twins',
            options: ['100% shared genes', 'Adoption studies separate genetic and environmental effects', '~50% shared genes', 'Higher concordance in MZ twins → genetic influence']
          }
        ],
        correctAnswers: ['100% shared genes', '~50% shared genes'],
        hint1: 'Think about what each concept specifically describes in Twin & Adoption Studies.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Twin & Adoption Studies describes a specific idea. Identical (MZ) twins: 100% shared genes. Fraternal (DZ) twins: ~50% shared genes.'
      }
    }
  ]
}
