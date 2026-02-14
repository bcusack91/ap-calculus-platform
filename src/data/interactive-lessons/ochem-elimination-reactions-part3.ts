export const oChemElimPart3Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi3-intro',
      type: 'text' as const,
      content: `
# E1 Mechanism

**Part 3 of 7 — E1 Mechanism**

### 1. E1

two-step via carbocation (unimolecular)

### 2. Step 1

leaving group departs → carbocation

### 3. Step 2

base removes adjacent proton

### 4. Rate = k[substrate]; favored by weak bases, polar protic solvents

Rate = k[substrate]; favored by weak bases, polar protic solvents
      `
    },
    {
      id: 'elimi3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of e1 mechanism?',
            options: [
              'E1',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'E1: two-step via carbocation (unimolecular)'
          },
          {
            question: 'In the context of e1 mechanism, which is accurate?',
            options: [
              'base removes adjacent proton',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Step 2: base removes adjacent proton'
          }
        ]
      }
    },
    {
      id: 'elimi3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **E1**: two-step via carbocation (unimolecular)
- **Step 1**: leaving group departs → carbocation
- **Step 2**: base removes adjacent proton
- **Rate = k[substrate]; favored by weak bases, polar protic solvents**
      `
    },
    {
      id: 'elimi3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to e1 mechanism?',
            options: [
              'Rate = k[substrate]; favored by weak bases, polar protic solvents',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Rate = k[substrate]; favored by weak bases, polar protic solvents'
          }
        ]
      }
    },
    {
      id: 'elimi3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'E1',
            options: ['two-step via carbocation (unimolecular)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 1',
            options: ['leaving group departs → carbocation', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 2',
            options: ['base removes adjacent proton', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['two-step via carbocation (unimolecular)', 'leaving group departs → carbocation', 'base removes adjacent proton'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding E1 Mechanism.'
      }
    }
  ]
}
