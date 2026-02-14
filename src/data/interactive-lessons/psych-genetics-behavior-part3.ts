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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of twin & adoption studies?',
            options: [
              'Identical (MZ) twins',
              'An unrelated concept',
              'Something not covered in AP Psychology',
              'A physics principle'
            ],
            correctAnswer: 0,
            explanation: 'Identical (MZ) twins: 100% shared genes'
          },
          {
            question: 'In the context of twin & adoption studies, which is accurate?',
            options: [
              'Higher concordance in MZ twins → genetic influence',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Higher concordance in MZ twins → genetic influence'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Identical (MZ) twins',
            options: ['100% shared genes', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Fraternal (DZ) twins',
            options: ['~50% shared genes', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          },
          {
            label: 'Higher concordance in MZ twins → genetic influence',
            options: ['Higher concordance in MZ twins → genetic influence', 'Not applicable', 'Unrelated to psychology', 'Only in animals']
          }
        ],
        correctAnswers: ['100% shared genes', '~50% shared genes', 'Higher concordance in MZ twins → genetic influence'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Twin & Adoption Studies.'
      }
    }
  ]
}
