export const bioGeneRegPart3Data = {
  topicSlug: 'gene-regulation',
  sections: [
    {
      id: 'gene3-intro-p3',
      type: 'text' as const,
      content: `
# ## Eukaryotic Transcription Factors

**Part 3 of 7 — Eukaryotic Transcription Factors**

1. Transcription factors bind to enhancers/promoters
2. Activators increase transcription
3. Repressors decrease transcription
4. Combinatorial control: multiple factors needed
      `
    },
    {
      id: 'gene3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Transcription factors bind to…" refer to in biology?',
            options: [
              'multiple factors needed',
              'Repressors decrease transcription',
              'Transcription factors bind to enhancers/promoters',
              'Activators increase transcription'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Transcription factors bind to enhancers/promoters. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Eukaryotic Transcription Factors, which explains Repressors decrease transcription?',
            options: [
              'Repressors decrease transcription',
              'Transcription factors bind to enhancers/promoters',
              'multiple factors needed',
              'Activators increase transcription'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Repressors decrease transcription. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'gene3-detail-p3',
      type: 'text' as const,
      content: `
# ### Key Details

- **Transcription factors bind to enhancers/promoters**
- **Activators increase transcription**
- **Repressors decrease transcription**
- **Combinatorial control**: multiple factors needed
      `
    },
    {
      id: 'gene3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Combinatorial control is correct?',
            options: [
              'Transcription factors bind to enhancers/promoters',
              'Activators increase transcription',
              'Repressors decrease transcription',
              'multiple factors needed'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Combinatorial control: multiple factors needed. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'gene3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Transcription factors bind to…',
            options: ['multiple factors needed', 'Repressors decrease transcription', 'Transcription factors bind to enhancers/promoters', 'Activators increase transcription']
          },
          {
            label: 'Activators increase transcription',
            options: ['Activators increase transcription', 'Transcription factors bind to enhancers/promoters', 'Repressors decrease transcription', 'multiple factors needed']
          },
          {
            label: 'Repressors decrease transcription',
            options: ['Repressors decrease transcription', 'Activators increase transcription', 'multiple factors needed', 'Transcription factors bind to enhancers/promoters']
          }
        ],
        correctAnswers: ['Transcription factors bind to enhancers/promoters', 'Activators increase transcription', 'Repressors decrease transcription'],
        hint1: 'Think about what each concept specifically describes in Eukaryotic Transcription Factors.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Eukaryotic Transcription Factors describes a specific idea. Transcription factors bind to enhancers/promoters. Activators increase transcription. Repressors decrease transcription.'
      }
    }
  ]
}
