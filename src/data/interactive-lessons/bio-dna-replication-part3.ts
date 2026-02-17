export const bioDnaReplicationPart3Data = {
  topicSlug: 'dna-replication',
  sections: [
    {
      id: 'dna-3-intro-p3',
      type: 'text' as const,
      content: `
# ## Leading & Lagging Strands

**Part 3 of 7 — Leading & Lagging Strands**

1. Leading strand: continuous synthesis toward replication fork
2. Lagging strand: discontinuous synthesis away from fork (Okazaki fragments)
3. Both strands synthesized 5'→3'
4. Primase must lay down primer for each Okazaki fragment
      `
    },
    {
      id: 'dna-3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Leading strand" refer to in biology?',
            options: [
              'continuous synthesis toward replication fork',
              'Primase must lay down primer for each Okazaki fragment',
              'Both strands synthesized 5\'→3\'',
              'discontinuous synthesis away from fork (Okazaki fragments)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Leading strand: continuous synthesis toward replication fork. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Leading & Lagging Strands, which explains Both strands synthesized 5\'→3\'?',
            options: [
              'discontinuous synthesis away from fork (Okazaki fragments)',
              'continuous synthesis toward replication fork',
              'Primase must lay down primer for each Okazaki fragment',
              'Both strands synthesized 5\'→3\''
            ],
            correctAnswer: 3,
            explanation: 'Correct — Both strands synthesized 5\'→3\'. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'dna-3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Leading strand**: continuous synthesis toward replication fork
- **Lagging strand**: discontinuous synthesis away from fork (Okazaki fragments)
- **Both strands synthesized 5'→3'**
- **Primase must lay down primer for each Okazaki fragment**
      `
    },
    {
      id: 'dna-3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Leading & Lagging Strands, which correctly describes Primase must lay down primer for each…?',
            options: [
              'continuous synthesis toward replication fork',
              'Both strands synthesized 5\'→3\'',
              'discontinuous synthesis away from fork (Okazaki fragments)',
              'Primase must lay down primer for each Okazaki fragment'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Primase must lay down primer for each Okazaki fragment. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'dna-3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Leading strand',
            options: ['continuous synthesis toward replication fork', 'discontinuous synthesis away from fork (Okazaki fragments)', 'Primase must lay down primer for each Okazaki fragment', 'Both strands synthesized 5\'→3\'']
          },
          {
            label: 'Lagging strand',
            options: ['continuous synthesis toward replication fork', 'discontinuous synthesis away from fork (Okazaki fragments)', 'Both strands synthesized 5\'→3\'', 'Primase must lay down primer for each Okazaki fragment']
          }
        ],
        correctAnswers: ['continuous synthesis toward replication fork', 'discontinuous synthesis away from fork (Okazaki fragments)'],
        hint1: 'Think about what each concept specifically describes in Leading & Lagging Strands.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Leading & Lagging Strands describes a specific idea. Leading strand: continuous synthesis toward replication fork. Lagging strand: discontinuous synthesis away from fork (Okazaki fragments).'
      }
    }
  ]
}
