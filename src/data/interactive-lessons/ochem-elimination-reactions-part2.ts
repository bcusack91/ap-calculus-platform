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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes E2?',
            options: [
              'Requires anti-periplanar geometry (H and LG 180° apart)',
              'Strong, bulky bases favor E2 (t-BuOK, DBU)',
              'one-step, concerted (bimolecular)',
              'Rate = k[substrate][base]'
            ],
            correctAnswer: 2,
            explanation: 'Correct — E2: one-step, concerted (bimolecular). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of E2 Mechanism, which explains Requires anti-periplanar geometry (H…?',
            options: [
              'one-step, concerted (bimolecular)',
              'Rate = k[substrate][base]',
              'Strong, bulky bases favor E2 (t-BuOK, DBU)',
              'Requires anti-periplanar geometry (H and LG 180° apart)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Requires anti-periplanar geometry (H and LG 180° apart). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'E2',
            options: ['one-step, concerted (bimolecular)', 'Requires anti-periplanar geometry (H and LG 180° apart)', 'Rate = k[substrate][base]', 'Strong, bulky bases favor E2 (t-BuOK, DBU)']
          },
          {
            label: 'Rate = k[substrate][base]',
            options: ['Rate = k[substrate][base]', 'Strong, bulky bases favor E2 (t-BuOK, DBU)', 'Requires anti-periplanar geometry (H and LG 180° apart)', 'one-step, concerted (bimolecular)']
          },
          {
            label: 'Requires anti-periplanar geometry (H…',
            options: ['Rate = k[substrate][base]', 'Requires anti-periplanar geometry (H and LG 180° apart)', 'Strong, bulky bases favor E2 (t-BuOK, DBU)', 'one-step, concerted (bimolecular)']
          }
        ],
        correctAnswers: ['one-step, concerted (bimolecular)', 'Rate = k[substrate][base]', 'Requires anti-periplanar geometry (H and LG 180° apart)'],
        hint1: 'Think about what each concept specifically describes in E2 Mechanism.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in E2 Mechanism describes a specific idea. E2: one-step, concerted (bimolecular). Rate = k[substrate][base]. Requires anti-periplanar geometry (H and LG 180° apart).'
      }
    }
  ]
}
