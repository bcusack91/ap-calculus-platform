export const bioEvidencePart6Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'evid6-intro-p6',
      type: 'text' as const,
      content: `
# ## Evidence for Evolution: Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving**

1. Analyzing phylogenetic trees
2. Interpreting molecular data for relatedness
3. Evaluating evidence for common descent
4. Distinguishing homology from analogy
      `
    },
    {
      id: 'evid6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Analyzing phylogenetic trees" refer to in biology?',
            options: [
              'Evaluating evidence for common descent',
              'Distinguishing homology from analogy',
              'Interpreting molecular data for relatedness',
              'Analyzing phylogenetic trees'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Analyzing phylogenetic trees. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Evaluating evidence for common descent?',
            options: [
              'Analyzing phylogenetic trees',
              'Evaluating evidence for common descent',
              'Interpreting molecular data for relatedness',
              'Distinguishing homology from analogy'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Evaluating evidence for common descent. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'evid6-detail-p6',
      type: 'text' as const,
      content: `
# ### Key Details

- **Analyzing phylogenetic trees**
- **Interpreting molecular data for relatedness**
- **Evaluating evidence for common descent**
- **Distinguishing homology from analogy**
      `
    },
    {
      id: 'evid6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Distinguishing homology from analogy is correct?',
            options: [
              'Analyzing phylogenetic trees',
              'Evaluating evidence for common descent',
              'Interpreting molecular data for relatedness',
              'Distinguishing homology from analogy'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Distinguishing homology from analogy. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'evid6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Analyzing phylogenetic trees',
            options: ['Evaluating evidence for common descent', 'Interpreting molecular data for relatedness', 'Analyzing phylogenetic trees', 'Distinguishing homology from analogy']
          },
          {
            label: 'Interpreting molecular data for…',
            options: ['Evaluating evidence for common descent', 'Distinguishing homology from analogy', 'Analyzing phylogenetic trees', 'Interpreting molecular data for relatedness']
          },
          {
            label: 'Evaluating evidence for common descent',
            options: ['Evaluating evidence for common descent', 'Analyzing phylogenetic trees', 'Interpreting molecular data for relatedness', 'Distinguishing homology from analogy']
          }
        ],
        correctAnswers: ['Analyzing phylogenetic trees', 'Interpreting molecular data for relatedness', 'Evaluating evidence for common descent'],
        hint1: 'Think about what each concept specifically describes in Evidence for Evolution: Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Evidence for Evolution: Problem-Solving Workshop describes a specific idea. Analyzing phylogenetic trees. Interpreting molecular data for relatedness. Evaluating evidence for common descent.'
      }
    }
  ]
}
