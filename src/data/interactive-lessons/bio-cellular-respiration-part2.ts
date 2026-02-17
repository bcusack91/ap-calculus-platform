export const bioCellRespirationPart2Data = {
  topicSlug: 'cellular-respiration',
  sections: [
    {
      id: 'cell2-intro-p2',
      type: 'text' as const,
      content: `
# ## Pyruvate Oxidation & Krebs Cycle

**Part 2 of 7 — Pyruvate Oxidation & Krebs Cycle**

1. Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)
2. Krebs cycle: acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP
3. Per glucose: cycle turns twice
4. Occurs in mitochondrial matrix
      `
    },
    {
      id: 'cell2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Pyruvate → acetyl-CoA + CO₂ + NADH (in…?',
            options: [
              'cycle turns twice',
              'acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP',
              'Occurs in mitochondrial matrix',
              'Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Per glucose?',
            options: [
              'Occurs in mitochondrial matrix',
              'Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)',
              'cycle turns twice',
              'acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Per glucose: cycle turns twice. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'cell2-detail-p2',
      type: 'text' as const,
      content: `
# ### Key Details

- **Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)**
- **Krebs cycle**: acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP
- **Per glucose**: cycle turns twice
- **Occurs in mitochondrial matrix**
      `
    },
    {
      id: 'cell2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Pyruvate Oxidation & Krebs Cycle, which correctly describes Occurs in mitochondrial matrix?',
            options: [
              'Occurs in mitochondrial matrix',
              'cycle turns twice',
              'acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP',
              'Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Occurs in mitochondrial matrix. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'cell2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Krebs cycle',
            options: ['Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)', 'cycle turns twice', 'Occurs in mitochondrial matrix', 'acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP']
          },
          {
            label: 'Per glucose',
            options: ['Pyruvate → acetyl-CoA + CO₂ + NADH (in mitochondrial matrix)', 'Occurs in mitochondrial matrix', 'acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP', 'cycle turns twice']
          }
        ],
        correctAnswers: ['acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP', 'cycle turns twice'],
        hint1: 'Think about what each concept specifically describes in Pyruvate Oxidation & Krebs Cycle.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Pyruvate Oxidation & Krebs Cycle describes a specific idea. Krebs cycle: acetyl-CoA → 2CO₂ + 3NADH + FADH₂ + ATP. Per glucose: cycle turns twice.'
      }
    }
  ]
}
