export const bioCellRespirationPart4Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
# ## Oxidative Phosphorylation

**Part 4 of 7 — Oxidative Phosphorylation**

1. Chemiosmosis: H⁺ gradient drives ATP synthase
2. ETC creates proton gradient across inner membrane
3. ATP synthase: molecular turbine
4. ~30-32 ATP per glucose from oxidative phosphorylation
      `
    },
    {
      id: 'cell4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Chemiosmosis?',
            options: [
              'H⁺ gradient drives ATP synthase',
              '~30-32 ATP per glucose from oxidative phosphorylation',
              'molecular turbine',
              'ETC creates proton gradient across inner membrane'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Chemiosmosis: H⁺ gradient drives ATP synthase. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about ATP synthase?',
            options: [
              'ETC creates proton gradient across inner membrane',
              'H⁺ gradient drives ATP synthase',
              '~30-32 ATP per glucose from oxidative phosphorylation',
              'molecular turbine'
            ],
            correctAnswer: 3,
            explanation: 'Correct — ATP synthase: molecular turbine. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Chemiosmosis**: H⁺ gradient drives ATP synthase
- **ETC creates proton gradient across inner membrane**
- **ATP synthase**: molecular turbine
- **~30-32 ATP per glucose from oxidative phosphorylation**
      `
    },
    {
      id: 'cell4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about ~30-32 ATP per glucose from oxidative… is correct?',
            options: [
              'ETC creates proton gradient across inner membrane',
              '~30-32 ATP per glucose from oxidative phosphorylation',
              'H⁺ gradient drives ATP synthase',
              'molecular turbine'
            ],
            correctAnswer: 1,
            explanation: 'Correct — ~30-32 ATP per glucose from oxidative phosphorylation. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Chemiosmosis',
            options: ['ETC creates proton gradient across inner membrane', 'molecular turbine', 'H⁺ gradient drives ATP synthase', '~30-32 ATP per glucose from oxidative phosphorylation']
          },
          {
            label: 'ATP synthase',
            options: ['molecular turbine', 'H⁺ gradient drives ATP synthase', 'ETC creates proton gradient across inner membrane', '~30-32 ATP per glucose from oxidative phosphorylation']
          }
        ],
        correctAnswers: ['H⁺ gradient drives ATP synthase', 'molecular turbine'],
        hint1: 'Think about what each concept specifically describes in Oxidative Phosphorylation.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Oxidative Phosphorylation describes a specific idea. Chemiosmosis: H⁺ gradient drives ATP synthase. ATP synthase: molecular turbine.'
      }
    }
  ]
}
