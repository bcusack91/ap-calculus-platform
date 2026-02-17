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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "SN1" refer to in this topic?',
            options: [
              'nucleophile attacks carbocation',
              'leaving group departs (rate-determining)',
              'two-step mechanism via carbocation intermediate',
              'Rate = k[substrate] (unimolecular); racemization at stereocenter'
            ],
            correctAnswer: 2,
            explanation: 'Correct — SN1: two-step mechanism via carbocation intermediate. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Step 2?',
            options: [
              'Rate = k[substrate] (unimolecular); racemization at stereocenter',
              'leaving group departs (rate-determining)',
              'nucleophile attacks carbocation',
              'two-step mechanism via carbocation intermediate'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Step 2: nucleophile attacks carbocation. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SN1',
            options: ['leaving group departs (rate-determining)', 'two-step mechanism via carbocation intermediate', 'nucleophile attacks carbocation', 'Rate = k[substrate] (unimolecular); racemization at stereocenter']
          },
          {
            label: 'Step 1',
            options: ['Rate = k[substrate] (unimolecular); racemization at stereocenter', 'two-step mechanism via carbocation intermediate', 'nucleophile attacks carbocation', 'leaving group departs (rate-determining)']
          },
          {
            label: 'Step 2',
            options: ['leaving group departs (rate-determining)', 'two-step mechanism via carbocation intermediate', 'nucleophile attacks carbocation', 'Rate = k[substrate] (unimolecular); racemization at stereocenter']
          }
        ],
        correctAnswers: ['two-step mechanism via carbocation intermediate', 'leaving group departs (rate-determining)', 'nucleophile attacks carbocation'],
        hint1: 'Think about what each concept specifically describes in SN1 Mechanism.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in SN1 Mechanism describes a specific idea. SN1: two-step mechanism via carbocation intermediate. Step 1: leaving group departs (rate-determining). Step 2: nucleophile attacks carbocation.'
      }
    }
  ]
}
