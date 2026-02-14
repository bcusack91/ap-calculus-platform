export const oChemAminesPart7Data = {
  topicSlug: 'amines-nitrogen-compounds',
  sections: [
    {
      id: 'amine7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Amines are fundamental in biochemistry (amino acids, neurotransmitters)

Amines are fundamental in biochemistry (amino acids, neurotransmitters)

### 2. Basicity and nucleophilicity make amines versatile

Basicity and nucleophilicity make amines versatile

### 3. Diazonium chemistry enables aromatic substitutions

Diazonium chemistry enables aromatic substitutions

### 4. Review

amine properties and reactions
      `
    },
    {
      id: 'amine7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Amines are fundamental in biochemistry (amino acids, neurotransmitters)',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Amines are fundamental in biochemistry (amino acids, neurotransmitters)'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Diazonium chemistry enables aromatic substitutions',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Diazonium chemistry enables aromatic substitutions'
          }
        ]
      }
    },
    {
      id: 'amine7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Amines are fundamental in biochemistry (amino acids, neurotransmitters)**
- **Basicity and nucleophilicity make amines versatile**
- **Diazonium chemistry enables aromatic substitutions**
- **Review**: amine properties and reactions
      `
    },
    {
      id: 'amine7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'amine properties and reactions',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: amine properties and reactions'
          }
        ]
      }
    },
    {
      id: 'amine7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Amines are fundamental in biochemistry (amino acids, neurotransmitters)',
            options: ['Amines are fundamental in biochemistry (amino acid', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Basicity and nucleophilicity make amines versatile',
            options: ['Basicity and nucleophilicity make amines versatile', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Diazonium chemistry enables aromatic substitutions',
            options: ['Diazonium chemistry enables aromatic substitutions', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Amines are fundamental in biochemistry (amino acid', 'Basicity and nucleophilicity make amines versatile', 'Diazonium chemistry enables aromatic substitutions'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
