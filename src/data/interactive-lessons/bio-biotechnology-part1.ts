export const bioBiotechPart1Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot1-intro-p1',
      type: 'text' as const,
      content: `
# ## Restriction Enzymes & Gel Electrophoresis

**Part 1 of 7 — Restriction Enzymes & Gel Electrophoresis**

1. Restriction enzymes cut DNA at specific sequences
2. Produces fragments with sticky or blunt ends
3. Gel electrophoresis separates DNA by size
4. Smaller fragments migrate farther through the gel
      `
    },
    {
      id: 'biot1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Restriction enzymes cut DNA at specific…?',
            options: [
              'Restriction enzymes cut DNA at specific sequences',
              'Gel electrophoresis separates DNA by size',
              'Smaller fragments migrate farther through the gel',
              'Produces fragments with sticky or blunt ends'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Restriction enzymes cut DNA at specific sequences. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Gel electrophoresis separates DNA by…:',
            options: [
              'Restriction enzymes cut DNA at specific sequences',
              'Produces fragments with sticky or blunt ends',
              'Gel electrophoresis separates DNA by size',
              'Smaller fragments migrate farther through the gel'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Gel electrophoresis separates DNA by size. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biot1-detail-p1',
      type: 'text' as const,
      content: `
# ### Key Details

- **Restriction enzymes cut DNA at specific sequences**
- **Produces fragments with sticky or blunt ends**
- **Gel electrophoresis separates DNA by size**
- **Smaller fragments migrate farther through the gel**
      `
    },
    {
      id: 'biot1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Restriction Enzymes & Gel Electrophoresis, which correctly describes Smaller fragments migrate farther…?',
            options: [
              'Smaller fragments migrate farther through the gel',
              'Restriction enzymes cut DNA at specific sequences',
              'Produces fragments with sticky or blunt ends',
              'Gel electrophoresis separates DNA by size'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Smaller fragments migrate farther through the gel. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'biot1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Restriction enzymes cut DNA at specific…',
            options: ['Gel electrophoresis separates DNA by size', 'Smaller fragments migrate farther through the gel', 'Produces fragments with sticky or blunt ends', 'Restriction enzymes cut DNA at specific sequences']
          },
          {
            label: 'Produces fragments with sticky or blunt…',
            options: ['Smaller fragments migrate farther through the gel', 'Restriction enzymes cut DNA at specific sequences', 'Produces fragments with sticky or blunt ends', 'Gel electrophoresis separates DNA by size']
          },
          {
            label: 'Gel electrophoresis separates DNA by…',
            options: ['Smaller fragments migrate farther through the gel', 'Restriction enzymes cut DNA at specific sequences', 'Gel electrophoresis separates DNA by size', 'Produces fragments with sticky or blunt ends']
          }
        ],
        correctAnswers: ['Restriction enzymes cut DNA at specific sequences', 'Produces fragments with sticky or blunt ends', 'Gel electrophoresis separates DNA by size'],
        hint1: 'Think about what each concept specifically describes in Restriction Enzymes & Gel Electrophoresis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Restriction Enzymes & Gel Electrophoresis describes a specific idea. Restriction enzymes cut DNA at specific sequences. Produces fragments with sticky or blunt ends. Gel electrophoresis separates DNA by size.'
      }
    }
  ]
}
