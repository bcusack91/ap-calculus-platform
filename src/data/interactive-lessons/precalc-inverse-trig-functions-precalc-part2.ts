export const precalcInverseTrigPart2Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'inver2-intro',
      type: 'text' as const,
      content: `
# Inverse Cosine (arccos)

**Part 2 of 7 — Inverse Cosine (arccos)**

### 1. arccos(x) = cos⁻¹(x)

finds the angle whose cosine is x

### 2. Domain

[-1, 1]; Range: [0, π]

### 3. cos(cos⁻¹(x)) = x for x in [-1, 1]

cos(cos⁻¹(x)) = x for x in [-1, 1]

### 4. cos⁻¹(cos(x)) = x only for x in [0, π]

cos⁻¹(cos(x)) = x only for x in [0, π]
      `
    },
    {
      id: 'inver2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "arccos(x) = cos⁻¹(x)" refer to in precalculus?',
            options: [
              'cos(cos⁻¹(x)) = x for x in [-1, 1]',
              'cos⁻¹(cos(x)) = x only for x in [0, π]',
              '[-1, 1]; Range: [0, π]',
              'finds the angle whose cosine is x'
            ],
            correctAnswer: 3,
            explanation: 'Correct — arccos(x) = cos⁻¹(x): finds the angle whose cosine is x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Inverse Cosine (arccos), which explains cos(cos⁻¹(x)) = x for x in [-1, 1]?',
            options: [
              'finds the angle whose cosine is x',
              'cos⁻¹(cos(x)) = x only for x in [0, π]',
              'cos(cos⁻¹(x)) = x for x in [-1, 1]',
              '[-1, 1]; Range: [0, π]'
            ],
            correctAnswer: 2,
            explanation: 'Correct — cos(cos⁻¹(x)) = x for x in [-1, 1]. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'inver2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **arccos(x) = cos⁻¹(x)**: finds the angle whose cosine is x
- **Domain**: [-1, 1]; Range: [0, π]
- **cos(cos⁻¹(x)) = x for x in [-1, 1]**
- **cos⁻¹(cos(x)) = x only for x in [0, π]**
      `
    },
    {
      id: 'inver2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to inverse cosine (arccos)?',
            options: [
              'cos⁻¹(cos(x)) = x only for x in [0, π]',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'cos⁻¹(cos(x)) = x only for x in [0, π]'
          }
        ]
      }
    },
    {
      id: 'inver2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'arccos(x) = cos⁻¹(x)',
            options: ['cos⁻¹(cos(x)) = x only for x in [0, π]', '[-1, 1]; Range: [0, π]', 'cos(cos⁻¹(x)) = x for x in [-1, 1]', 'finds the angle whose cosine is x']
          },
          {
            label: 'Domain',
            options: ['finds the angle whose cosine is x', 'cos⁻¹(cos(x)) = x only for x in [0, π]', 'cos(cos⁻¹(x)) = x for x in [-1, 1]', '[-1, 1]; Range: [0, π]']
          }
        ],
        correctAnswers: ['finds the angle whose cosine is x', '[-1, 1]; Range: [0, π]'],
        hint1: 'Think about what each concept specifically describes in Inverse Cosine (arccos).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inverse Cosine (arccos) describes a specific idea. arccos(x) = cos⁻¹(x): finds the angle whose cosine is x. Domain: [-1, 1]; Range: [0, π].'
      }
    }
  ]
}
