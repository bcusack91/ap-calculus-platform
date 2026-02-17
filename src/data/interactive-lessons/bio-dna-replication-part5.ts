export const bioDnaReplicationPart5Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-5-intro-p5',
      type: 'text' as const,
      content: `
# ## Telomeres & Telomerase

**Part 5 of 7 — Telomeres & Telomerase**

1. Telomeres: repetitive sequences at chromosome ends (TTAGGG)
2. Shorten with each replication (end replication problem)
3. Telomerase: enzyme that extends telomeres
4. Active in stem cells and cancer cells; inactive in most somatic cells
      `
    },
    {
      id: 'dna-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Telomeres" refer to in biology?',
            options: [
              'Shorten with each replication (end replication problem)',
              'repetitive sequences at chromosome ends (TTAGGG)',
              'Active in stem cells and cancer cells; inactive in most somatic cells',
              'enzyme that extends telomeres'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Telomeres: repetitive sequences at chromosome ends (TTAGGG). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Telomerase?',
            options: [
              'enzyme that extends telomeres',
              'Shorten with each replication (end replication problem)',
              'Active in stem cells and cancer cells; inactive in most somatic cells',
              'repetitive sequences at chromosome ends (TTAGGG)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Telomerase: enzyme that extends telomeres. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'dna-5-detail-p5',
      type: 'text' as const,
      content: `
# ### Key Details

- **Telomeres**: repetitive sequences at chromosome ends (TTAGGG)
- **Shorten with each replication (end replication problem)**
- **Telomerase**: enzyme that extends telomeres
- **Active in stem cells and cancer cells; inactive in most somatic cells**
      `
    },
    {
      id: 'dna-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Active in stem cells and cancer cells;…?',
            options: [
              'Shorten with each replication (end replication problem)',
              'Active in stem cells and cancer cells; inactive in most somatic cells',
              'repetitive sequences at chromosome ends (TTAGGG)',
              'enzyme that extends telomeres'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Active in stem cells and cancer cells; inactive in most somatic cells. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'dna-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Telomeres',
            options: ['Shorten with each replication (end replication problem)', 'enzyme that extends telomeres', 'Active in stem cells and cancer cells; inactive in most somatic cells', 'repetitive sequences at chromosome ends (TTAGGG)']
          },
          {
            label: 'Telomerase',
            options: ['Shorten with each replication (end replication problem)', 'repetitive sequences at chromosome ends (TTAGGG)', 'enzyme that extends telomeres', 'Active in stem cells and cancer cells; inactive in most somatic cells']
          }
        ],
        correctAnswers: ['repetitive sequences at chromosome ends (TTAGGG)', 'enzyme that extends telomeres'],
        hint1: 'Think about what each concept specifically describes in Telomeres & Telomerase.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Telomeres & Telomerase describes a specific idea. Telomeres: repetitive sequences at chromosome ends (TTAGGG). Telomerase: enzyme that extends telomeres.'
      }
    }
  ]
}
