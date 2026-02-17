export const bioMendelianPart4Data = {
  topicSlug: 'mendelian-genetics',
  sections: [
    {
      id: 'mend4-intro-p4',
      type: 'text' as const,
      content: `
# ## Pedigree Analysis

**Part 4 of 7 — Pedigree Analysis**

1. Circles = females, squares = males
2. Filled = affected, open = unaffected
3. Autosomal dominant: affected in every generation
4. Autosomal recessive: can skip generations, carrier parents
      `
    },
    {
      id: 'mend4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Circles = females, squares = males" refer to in biology?',
            options: [
              'can skip generations, carrier parents',
              'affected in every generation',
              'Filled = affected, open = unaffected',
              'Circles = females, squares = males'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Circles = females, squares = males. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Autosomal dominant:',
            options: [
              'affected in every generation',
              'Circles = females, squares = males',
              'can skip generations, carrier parents',
              'Filled = affected, open = unaffected'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Autosomal dominant: affected in every generation. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'mend4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Circles = females, squares = males**
- **Filled = affected, open = unaffected**
- **Autosomal dominant**: affected in every generation
- **Autosomal recessive**: can skip generations, carrier parents
      `
    },
    {
      id: 'mend4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Autosomal recessive is correct?',
            options: [
              'can skip generations, carrier parents',
              'Circles = females, squares = males',
              'affected in every generation',
              'Filled = affected, open = unaffected'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Autosomal recessive: can skip generations, carrier parents. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'mend4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Autosomal dominant',
            options: ['can skip generations, carrier parents', 'Filled = affected, open = unaffected', 'affected in every generation', 'Circles = females, squares = males']
          },
          {
            label: 'Autosomal recessive',
            options: ['can skip generations, carrier parents', 'Circles = females, squares = males', 'affected in every generation', 'Filled = affected, open = unaffected']
          }
        ],
        correctAnswers: ['affected in every generation', 'can skip generations, carrier parents'],
        hint1: 'Think about what each concept specifically describes in Pedigree Analysis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Pedigree Analysis describes a specific idea. Autosomal dominant: affected in every generation. Autosomal recessive: can skip generations, carrier parents.'
      }
    }
  ]
}
