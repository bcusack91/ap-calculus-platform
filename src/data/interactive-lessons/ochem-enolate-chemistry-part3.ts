export const oChemEnolatePart3Data = {
  topicSlug: 'enolate-chemistry',
  sections: [
    {
      id: 'enola3-intro',
      type: 'text' as const,
      content: `
# Aldol Reaction

**Part 3 of 7 — Aldol Reaction**

### 1. Aldol reaction

enolate + carbonyl → β-hydroxy carbonyl

### 2. Aldol condensation

heat eliminates water → α,β-unsaturated carbonyl

### 3. Crossed aldol

two different carbonyls (use LDA for control)

### 4. Intramolecular aldol

forms 5- or 6-membered rings
      `
    },
    {
      id: 'enola3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of aldol reaction?',
            options: [
              'Aldol reaction',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Aldol reaction: enolate + carbonyl → β-hydroxy carbonyl'
          },
          {
            question: 'In the context of aldol reaction, which is accurate?',
            options: [
              'two different carbonyls (use LDA for control)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Crossed aldol: two different carbonyls (use LDA for control)'
          }
        ]
      }
    },
    {
      id: 'enola3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Aldol reaction**: enolate + carbonyl → β-hydroxy carbonyl
- **Aldol condensation**: heat eliminates water → α,β-unsaturated carbonyl
- **Crossed aldol**: two different carbonyls (use LDA for control)
- **Intramolecular aldol**: forms 5- or 6-membered rings
      `
    },
    {
      id: 'enola3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to aldol reaction?',
            options: [
              'forms 5- or 6-membered rings',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Intramolecular aldol: forms 5- or 6-membered rings'
          }
        ]
      }
    },
    {
      id: 'enola3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Aldol reaction',
            options: ['enolate + carbonyl → β-hydroxy carbonyl', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Aldol condensation',
            options: ['heat eliminates water → α,β-unsaturated carbonyl', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Crossed aldol',
            options: ['two different carbonyls (use LDA for control)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['enolate + carbonyl → β-hydroxy carbonyl', 'heat eliminates water → α,β-unsaturated carbonyl', 'two different carbonyls (use LDA for control)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Aldol Reaction.'
      }
    }
  ]
}
