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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "E1" refer to in this topic?',
            options: [
              'leaving group departs → carbocation',
              'base removes adjacent proton',
              'Rate = k[substrate]; favored by weak bases, polar protic solvents',
              'two-step via carbocation (unimolecular)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — E1: two-step via carbocation (unimolecular). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of E1 Mechanism, which explains Step 2?',
            options: [
              'Rate = k[substrate]; favored by weak bases, polar protic solvents',
              'base removes adjacent proton',
              'two-step via carbocation (unimolecular)',
              'leaving group departs → carbocation'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Step 2: base removes adjacent proton. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'E1',
            options: ['Rate = k[substrate]; favored by weak bases, polar protic solvents', 'two-step via carbocation (unimolecular)', 'leaving group departs → carbocation', 'base removes adjacent proton']
          },
          {
            label: 'Step 1',
            options: ['base removes adjacent proton', 'two-step via carbocation (unimolecular)', 'Rate = k[substrate]; favored by weak bases, polar protic solvents', 'leaving group departs → carbocation']
          },
          {
            label: 'Step 2',
            options: ['leaving group departs → carbocation', 'Rate = k[substrate]; favored by weak bases, polar protic solvents', 'base removes adjacent proton', 'two-step via carbocation (unimolecular)']
          }
        ],
        correctAnswers: ['two-step via carbocation (unimolecular)', 'leaving group departs → carbocation', 'base removes adjacent proton'],
        hint1: 'Think about what each concept specifically describes in E1 Mechanism.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in E1 Mechanism describes a specific idea. E1: two-step via carbocation (unimolecular). Step 1: leaving group departs → carbocation. Step 2: base removes adjacent proton.'
      }
    }
  ]
}
