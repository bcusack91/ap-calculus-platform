export const precalcInverseTrigPart1Data = {
  topicSlug: 'inverse-trig-functions-precalc',
  sections: [
    {
      id: 'inver1-intro',
      type: 'text' as const,
      content: `
# 📈 Inverse Trig Functions

**Part 1 of 7 — Inverse Sine (arcsin)**

### 1. arcsin(x) = sin⁻¹(x)

finds the angle whose sine is x

### 2. Domain

[-1, 1]; Range: [-π/2, π/2]

### 3. sin(sin⁻¹(x)) = x for x in [-1, 1]

sin(sin⁻¹(x)) = x for x in [-1, 1]

### 4. sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]

sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]
      `
    },
    {
      id: 'inver1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "arcsin(x) = sin⁻¹(x)" refer to in precalculus?',
            options: [
              'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]',
              'sin(sin⁻¹(x)) = x for x in [-1, 1]',
              'finds the angle whose sine is x',
              '[-1, 1]; Range: [-π/2, π/2]'
            ],
            correctAnswer: 2,
            explanation: 'Correct — arcsin(x) = sin⁻¹(x): finds the angle whose sine is x. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Inverse Trig Functions, which explains sin(sin⁻¹(x)) = x for x in [-1, 1]?',
            options: [
              'sin(sin⁻¹(x)) = x for x in [-1, 1]',
              'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]',
              '[-1, 1]; Range: [-π/2, π/2]',
              'finds the angle whose sine is x'
            ],
            correctAnswer: 0,
            explanation: 'Correct — sin(sin⁻¹(x)) = x for x in [-1, 1]. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'inver1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **arcsin(x) = sin⁻¹(x)**: finds the angle whose sine is x
- **Domain**: [-1, 1]; Range: [-π/2, π/2]
- **sin(sin⁻¹(x)) = x for x in [-1, 1]**
- **sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]**
      `
    },
    {
      id: 'inver1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to inverse sine (arcsin)?',
            options: [
              'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]'
          }
        ]
      }
    },
    {
      id: 'inver1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'arcsin(x) = sin⁻¹(x)',
            options: ['sin(sin⁻¹(x)) = x for x in [-1, 1]', 'finds the angle whose sine is x', 'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]', '[-1, 1]; Range: [-π/2, π/2]']
          },
          {
            label: 'Domain',
            options: ['sin(sin⁻¹(x)) = x for x in [-1, 1]', '[-1, 1]; Range: [-π/2, π/2]', 'sin⁻¹(sin(x)) = x only for x in [-π/2, π/2]', 'finds the angle whose sine is x']
          }
        ],
        correctAnswers: ['finds the angle whose sine is x', '[-1, 1]; Range: [-π/2, π/2]'],
        hint1: 'Think about what each concept specifically describes in Inverse Trig Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Inverse Trig Functions describes a specific idea. arcsin(x) = sin⁻¹(x): finds the angle whose sine is x. Domain: [-1, 1]; Range: [-π/2, π/2].'
      }
    }
  ]
}
