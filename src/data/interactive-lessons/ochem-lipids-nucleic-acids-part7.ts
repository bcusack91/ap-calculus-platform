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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Lipids and nucleic acids are essential…?',
            options: [
              'Organic chemistry explains biological structure and function',
              'Lipids and nucleic acids are essential biomolecules',
              'Spectroscopy can identify these molecules',
              'biochemistry through the organic lens'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Lipids and nucleic acids are essential biomolecules. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Spectroscopy can identify these…?',
            options: [
              'biochemistry through the organic lens',
              'Organic chemistry explains biological structure and function',
              'Lipids and nucleic acids are essential biomolecules',
              'Spectroscopy can identify these molecules'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Spectroscopy can identify these molecules. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lipids and nucleic acids are essential…',
            options: ['biochemistry through the organic lens', 'Organic chemistry explains biological structure and function', 'Spectroscopy can identify these molecules', 'Lipids and nucleic acids are essential biomolecules']
          },
          {
            label: 'Organic chemistry explains biological…',
            options: ['Lipids and nucleic acids are essential biomolecules', 'biochemistry through the organic lens', 'Organic chemistry explains biological structure and function', 'Spectroscopy can identify these molecules']
          },
          {
            label: 'Spectroscopy can identify these…',
            options: ['Organic chemistry explains biological structure and function', 'Spectroscopy can identify these molecules', 'biochemistry through the organic lens', 'Lipids and nucleic acids are essential biomolecules']
          }
        ],
        correctAnswers: ['Lipids and nucleic acids are essential biomolecules', 'Organic chemistry explains biological structure and function', 'Spectroscopy can identify these molecules'],
        hint1: 'Think about what each concept specifically describes in Synthesis & Review.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Synthesis & Review describes a specific idea. Lipids and nucleic acids are essential biomolecules. Organic chemistry explains biological structure and function. Spectroscopy can identify these molecules.'
      }
    }
  ]
}
