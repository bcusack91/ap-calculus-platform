export const bioCellCommPart4Data = {
  topicSlug: 'cell-communication-signaling',
  sections: [
    {
      id: 'cell4-intro-p4',
      type: 'text' as const,
      content: `
## Signal Transduction Pathways

**Part 4 of 7 — Signal Transduction Pathways**

1. Phosphorylation cascades: kinases add phosphate groups
2. Second messengers: cAMP, $Ca^{2+}$, $IP_{3}$
3. Signal amplification: one signal → many responses
4. G-protein linked: α subunit activates adenylyl cyclase → cAMP
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
            question: 'Which of the following correctly describes Phosphorylation cascades?',
            options: [
              'cAMP, $Ca^{2+}$, $IP_{3}$',
              'one signal → many responses',
              'kinases add phosphate groups',
              'α subunit activates adenylyl cyclase → cAMP'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Phosphorylation cascades: kinases add phosphate groups. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Signal amplification:',
            options: [
              'cAMP, $Ca^{2+}$, $IP_{3}$',
              'α subunit activates adenylyl cyclase → cAMP',
              'one signal → many responses',
              'kinases add phosphate groups'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Signal amplification: one signal → many responses. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell4-detail-p4',
      type: 'text' as const,
      content: `
### Key Details

- **Phosphorylation cascades**: kinases add phosphate groups
- **Second messengers**: cAMP, $Ca^{2+}$, $IP_{3}$
- **Signal amplification**: one signal → many responses
- **G-protein linked**: α subunit activates adenylyl cyclase → cAMP
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
            question: 'Which of these accurately represents G-protein linked?',
            options: [
              'cAMP, $Ca^{2+}$, $IP_{3}$',
              'α subunit activates adenylyl cyclase → cAMP',
              'kinases add phosphate groups',
              'one signal → many responses'
            ],
            correctAnswer: 1,
            explanation: 'Correct — G-protein linked: α subunit activates adenylyl cyclase → cAMP. Each option describes a real concept from this topic, so pay attention to the specific details.'
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
            label: 'Phosphorylation cascades',
            options: ['α subunit activates adenylyl cyclase → cAMP', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'kinases add phosphate groups', 'one signal → many responses']
          },
          {
            label: 'Second messengers',
            options: ['one signal → many responses', 'α subunit activates adenylyl cyclase → cAMP', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'kinases add phosphate groups']
          },
          {
            label: 'Signal amplification',
            options: ['one signal → many responses', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'kinases add phosphate groups', 'α subunit activates adenylyl cyclase → cAMP']
          }
        ],
        correctAnswers: ['kinases add phosphate groups', 'cAMP, $Ca^{2+}$, $IP_{3}$', 'one signal → many responses'],
        hint1: 'Think about what each concept specifically describes in Signal Transduction Pathways.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Signal Transduction Pathways describes a specific idea. Phosphorylation cascades: kinases add phosphate groups. Second messengers: cAMP, $Ca^{2+}$, $IP_{3}$. Signal amplification: one signal → many responses.'
      }
    }
  ]
}
