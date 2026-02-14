export const oChemElimPart2Data = {
  topicSlug: 'elimination-reactions',
  sections: [
    {
      id: 'elimi2-intro',
      type: 'text' as const,
      content: `
# E2 Mechanism

**Part 2 of 7 — E2 Mechanism**

### 1. E2

one-step, concerted (bimolecular)

### 2. Rate = k[substrate][base]

Rate = k[substrate][base]

### 3. Requires anti-periplanar geometry (H and LG 180° apart)

Requires anti-periplanar geometry (H and LG 180° apart)

### 4. Strong, bulky bases favor E2 (t-BuOK, DBU)

Strong, bulky bases favor E2 (t-BuOK, DBU)
      `
    },
    {
      id: 'elimi2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of e2 mechanism?',
            options: [
              'E2',
              'An unrelated concept',
              'This is not covered in Organic Chemistry',
              'A biological concept only'
            ],
            correctAnswer: 0,
            explanation: 'E2: one-step, concerted (bimolecular)'
          },
          {
            question: 'In the context of e2 mechanism, which is accurate?',
            options: [
              'Requires anti-periplanar geometry (H and LG 180° apart)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Requires anti-periplanar geometry (H and LG 180° apart)'
          }
        ]
      }
    },
    {
      id: 'elimi2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **E2**: one-step, concerted (bimolecular)
- **Rate = k[substrate][base]**
- **Requires anti-periplanar geometry (H and LG 180° apart)**
- **Strong, bulky bases favor E2 (t-BuOK, DBU)**
      `
    },
    {
      id: 'elimi2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to e2 mechanism?',
            options: [
              'Strong, bulky bases favor E2 (t-BuOK, DBU)',
              'Only inorganic compounds',
              'Exclusively gas-phase reactions',
              'This applies only to polymers'
            ],
            correctAnswer: 0,
            explanation: 'Strong, bulky bases favor E2 (t-BuOK, DBU)'
          }
        ]
      }
    },
    {
      id: 'elimi2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'E2',
            options: ['one-step, concerted (bimolecular)', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Rate = k[substrate][base]',
            options: ['Rate = k[substrate][base]', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          },
          {
            label: 'Requires anti-periplanar geometry (H and LG 180° apart)',
            options: ['Requires anti-periplanar geometry (H and LG 180° a', 'Not applicable', 'Unrelated to organic chemistry', 'Only in biochemistry']
          }
        ],
        correctAnswers: ['one-step, concerted (bimolecular)', 'Rate = k[substrate][base]', 'Requires anti-periplanar geometry (H and LG 180° a'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding E2 Mechanism.'
      }
    }
  ]
}
