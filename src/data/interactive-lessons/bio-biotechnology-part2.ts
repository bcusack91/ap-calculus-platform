export const bioBiotechPart2Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot2-intro-p2',
      type: 'text' as const,
      content: `
# ## PCR & DNA Sequencing

**Part 2 of 7 — PCR & DNA Sequencing**

1. PCR amplifies specific DNA segments
2. Steps: denature (95°C), anneal primers (55°C), extend (72°C)
3. Taq polymerase: heat-stable DNA polymerase
4. Sanger sequencing uses ddNTPs to determine sequence
      `
    },
    {
      id: 'biot2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes PCR amplifies specific DNA segments?',
            options: [
              'heat-stable DNA polymerase',
              'Sanger sequencing uses ddNTPs to determine sequence',
              'PCR amplifies specific DNA segments',
              'denature (95°C), anneal primers (55°C), extend (72°C)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — PCR amplifies specific DNA segments. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Taq polymerase:',
            options: [
              'Sanger sequencing uses ddNTPs to determine sequence',
              'heat-stable DNA polymerase',
              'PCR amplifies specific DNA segments',
              'denature (95°C), anneal primers (55°C), extend (72°C)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Taq polymerase: heat-stable DNA polymerase. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biot2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **PCR amplifies specific DNA segments**
- **Steps**: denature (95°C), anneal primers (55°C), extend (72°C)
- **Taq polymerase**: heat-stable DNA polymerase
- **Sanger sequencing uses ddNTPs to determine sequence**
      `
    },
    {
      id: 'biot2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Sanger sequencing uses ddNTPs to…?',
            options: [
              'heat-stable DNA polymerase',
              'PCR amplifies specific DNA segments',
              'denature (95°C), anneal primers (55°C), extend (72°C)',
              'Sanger sequencing uses ddNTPs to determine sequence'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Sanger sequencing uses ddNTPs to determine sequence. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'biot2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Steps',
            options: ['denature (95°C), anneal primers (55°C), extend (72°C)', 'heat-stable DNA polymerase', 'Sanger sequencing uses ddNTPs to determine sequence', 'PCR amplifies specific DNA segments']
          },
          {
            label: 'Taq polymerase',
            options: ['Sanger sequencing uses ddNTPs to determine sequence', 'denature (95°C), anneal primers (55°C), extend (72°C)', 'PCR amplifies specific DNA segments', 'heat-stable DNA polymerase']
          }
        ],
        correctAnswers: ['denature (95°C), anneal primers (55°C), extend (72°C)', 'heat-stable DNA polymerase'],
        hint1: 'Think about what each concept specifically describes in PCR & DNA Sequencing.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in PCR & DNA Sequencing describes a specific idea. Steps: denature (95°C), anneal primers (55°C), extend (72°C). Taq polymerase: heat-stable DNA polymerase.'
      }
    }
  ]
}
