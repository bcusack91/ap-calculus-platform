export const oChemLipidsPart7Data = {
  topicSlug: 'lipids-nucleic-acids',
  sections: [
    {
      id: 'lipid7-intro',
      type: 'text' as const,
      content: `
# Synthesis & Review

**Part 7 of 7 — Synthesis & Review**

### 1. Lipids and nucleic acids are essential biomolecules

Lipids and nucleic acids are essential biomolecules

### 2. Organic chemistry explains biological structure and function

Organic chemistry explains biological structure and function

### 3. Spectroscopy can identify these molecules

Spectroscopy can identify these molecules

### 4. Review

biochemistry through the organic lens
      `
    },
    {
      id: 'lipid7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of synthesis & review?',
            options: [
              'Lipids and nucleic acids are essential biomolecules',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'Lipids and nucleic acids are essential biomolecules'
          },
          {
            question: 'In the context of synthesis & review, which is accurate?',
            options: [
              'Spectroscopy can identify these molecules',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Spectroscopy can identify these molecules'
          }
        ]
      }
    },
    {
      id: 'lipid7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Lipids and nucleic acids are essential biomolecules**
- **Organic chemistry explains biological structure and function**
- **Spectroscopy can identify these molecules**
- **Review**: biochemistry through the organic lens
      `
    },
    {
      id: 'lipid7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to synthesis & review?',
            options: [
              'biochemistry through the organic lens',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Review: biochemistry through the organic lens'
          }
        ]
      }
    },
    {
      id: 'lipid7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lipids and nucleic acids are essential biomolecules',
            options: ['Lipids and nucleic acids are essential biomolecule', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Organic chemistry explains biological structure and function',
            options: ['Organic chemistry explains biological structure an', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Spectroscopy can identify these molecules',
            options: ['Spectroscopy can identify these molecules', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['Lipids and nucleic acids are essential biomolecule', 'Organic chemistry explains biological structure an', 'Spectroscopy can identify these molecules'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Synthesis & Review.'
      }
    }
  ]
}
