export const oChemSNPart3Data = {
  topicSlug: 'nucleophilic-substitution',
  sections: [
    {
      id: 'nucle3-intro',
      type: 'text' as const,
      content: `
# SN1 Mechanism

**Part 3 of 7 — SN1 Mechanism**

### 1. SN1

two-step mechanism via carbocation intermediate

### 2. Step 1

leaving group departs (rate-determining)

### 3. Step 2

nucleophile attacks carbocation

### 4. Rate = k[substrate] (unimolecular); racemization at stereocenter

Rate = k[substrate] (unimolecular); racemization at stereocenter
      `
    },
    {
      id: 'nucle3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of sn1 mechanism?',
            options: [
              'SN1',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'SN1: two-step mechanism via carbocation intermediate'
          },
          {
            question: 'In the context of sn1 mechanism, which is accurate?',
            options: [
              'nucleophile attacks carbocation',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Step 2: nucleophile attacks carbocation'
          }
        ]
      }
    },
    {
      id: 'nucle3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **SN1**: two-step mechanism via carbocation intermediate
- **Step 1**: leaving group departs (rate-determining)
- **Step 2**: nucleophile attacks carbocation
- **Rate = k[substrate] (unimolecular); racemization at stereocenter**
      `
    },
    {
      id: 'nucle3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to sn1 mechanism?',
            options: [
              'Rate = k[substrate] (unimolecular); racemization at stereocenter',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Rate = k[substrate] (unimolecular); racemization at stereocenter'
          }
        ]
      }
    },
    {
      id: 'nucle3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SN1',
            options: ['two-step mechanism via carbocation intermediate', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 1',
            options: ['leaving group departs (rate-determining)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Step 2',
            options: ['nucleophile attacks carbocation', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['two-step mechanism via carbocation intermediate', 'leaving group departs (rate-determining)', 'nucleophile attacks carbocation'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding SN1 Mechanism.'
      }
    }
  ]
}
