export const bioBiotechPart4Data = {
  topicSlug: 'biotechnology',
  sections: [
    {
      id: 'biot4-intro-p4',
      type: 'text' as const,
      content: `
# ## CRISPR-Cas9

**Part 4 of 7 — CRISPR-Cas9**

1. Gene editing tool from bacterial immune system
2. Guide RNA directs Cas9 to target DNA sequence
3. Cas9 cuts both DNA strands at target site
4. Can knock out genes, insert new sequences, or make precise edits
      `
    },
    {
      id: 'biot4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Gene editing tool from bacterial immune…?',
            options: [
              'Gene editing tool from bacterial immune system',
              'Can knock out genes, insert new sequences, or make precise edits',
              'Guide RNA directs Cas9 to target DNA sequence',
              'Cas9 cuts both DNA strands at target site'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Gene editing tool from bacterial immune system. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Cas9 cuts both DNA strands at target…?',
            options: [
              'Cas9 cuts both DNA strands at target site',
              'Guide RNA directs Cas9 to target DNA sequence',
              'Gene editing tool from bacterial immune system',
              'Can knock out genes, insert new sequences, or make precise edits'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Cas9 cuts both DNA strands at target site. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'biot4-detail-p4',
      type: 'text' as const,
      content: `
# ### Key Details

- **Gene editing tool from bacterial immune system**
- **Guide RNA directs Cas9 to target DNA sequence**
- **Cas9 cuts both DNA strands at target site**
- **Can knock out genes, insert new sequences, or make precise edits**
      `
    },
    {
      id: 'biot4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding CRISPR-Cas9, which correctly describes Can knock out genes, insert new…?',
            options: [
              'Cas9 cuts both DNA strands at target site',
              'Can knock out genes, insert new sequences, or make precise edits',
              'Gene editing tool from bacterial immune system',
              'Guide RNA directs Cas9 to target DNA sequence'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Can knock out genes, insert new sequences, or make precise edits. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'biot4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Gene editing tool from bacterial immune…',
            options: ['Cas9 cuts both DNA strands at target site', 'Can knock out genes, insert new sequences, or make precise edits', 'Guide RNA directs Cas9 to target DNA sequence', 'Gene editing tool from bacterial immune system']
          },
          {
            label: 'Guide RNA directs Cas9 to target DNA…',
            options: ['Gene editing tool from bacterial immune system', 'Can knock out genes, insert new sequences, or make precise edits', 'Guide RNA directs Cas9 to target DNA sequence', 'Cas9 cuts both DNA strands at target site']
          },
          {
            label: 'Cas9 cuts both DNA strands at target…',
            options: ['Can knock out genes, insert new sequences, or make precise edits', 'Guide RNA directs Cas9 to target DNA sequence', 'Cas9 cuts both DNA strands at target site', 'Gene editing tool from bacterial immune system']
          }
        ],
        correctAnswers: ['Gene editing tool from bacterial immune system', 'Guide RNA directs Cas9 to target DNA sequence', 'Cas9 cuts both DNA strands at target site'],
        hint1: 'Think about what each concept specifically describes in CRISPR-Cas9.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in CRISPR-Cas9 describes a specific idea. Gene editing tool from bacterial immune system. Guide RNA directs Cas9 to target DNA sequence. Cas9 cuts both DNA strands at target site.'
      }
    }
  ]
}
