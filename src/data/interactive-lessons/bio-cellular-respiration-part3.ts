export const bioCellRespirationPart3Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell3-intro-p3',
      type: 'text' as const,
      content: `
# ## Electron Transport Chain

**Part 3 of 7 — Electron Transport Chain**

1. Located in inner mitochondrial membrane
2. NADH and FADH₂ donate electrons
3. Electrons pass through complexes I-IV
4. O₂ is the final electron acceptor → H₂O
      `
    },
    {
      id: 'cell3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Located in inner mitochondrial membrane?',
            options: [
              'NADH and FADH₂ donate electrons',
              'O₂ is the final electron acceptor → H₂O',
              'Located in inner mitochondrial membrane',
              'Electrons pass through complexes I-IV'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Located in inner mitochondrial membrane. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Electrons pass through complexes I-IV?',
            options: [
              'NADH and FADH₂ donate electrons',
              'Located in inner mitochondrial membrane',
              'O₂ is the final electron acceptor → H₂O',
              'Electrons pass through complexes I-IV'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Electrons pass through complexes I-IV. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Located in inner mitochondrial membrane**
- **NADH and FADH₂ donate electrons**
- **Electrons pass through complexes I-IV**
- **O₂ is the final electron acceptor → H₂O**
      `
    },
    {
      id: 'cell3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents O₂ is the final electron acceptor → H₂O?',
            options: [
              'Electrons pass through complexes I-IV',
              'NADH and FADH₂ donate electrons',
              'Located in inner mitochondrial membrane',
              'O₂ is the final electron acceptor → H₂O'
            ],
            correctAnswer: 3,
            explanation: 'Correct — O₂ is the final electron acceptor → H₂O. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Located in inner mitochondrial membrane',
            options: ['NADH and FADH₂ donate electrons', 'Located in inner mitochondrial membrane', 'O₂ is the final electron acceptor → H₂O', 'Electrons pass through complexes I-IV']
          },
          {
            label: 'NADH and FADH₂ donate electrons',
            options: ['NADH and FADH₂ donate electrons', 'Located in inner mitochondrial membrane', 'Electrons pass through complexes I-IV', 'O₂ is the final electron acceptor → H₂O']
          },
          {
            label: 'Electrons pass through complexes I-IV',
            options: ['Electrons pass through complexes I-IV', 'Located in inner mitochondrial membrane', 'NADH and FADH₂ donate electrons', 'O₂ is the final electron acceptor → H₂O']
          }
        ],
        correctAnswers: ['Located in inner mitochondrial membrane', 'NADH and FADH₂ donate electrons', 'Electrons pass through complexes I-IV'],
        hint1: 'Think about what each concept specifically describes in Electron Transport Chain.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Electron Transport Chain describes a specific idea. Located in inner mitochondrial membrane. NADH and FADH₂ donate electrons. Electrons pass through complexes I-IV.'
      }
    }
  ]
}
