export const calcBCReviewConnectionsPart3Data = {
  topicSlug: 'review-connections-calcbc',
  sections: [
    {
      id: 'revie3-intro',
      type: 'text' as const,
      content: `
# Parametric, Polar & Vector Unity

**Part 3 of 7 — Parametric, Polar & Vector Unity**

### 1. Parametric, polar, and vector functions all describe curves in the plane

Parametric, polar, and vector functions all describe curves in the plane

### 2. Each uses different coordinates but shares calculus operations (derivatives, integrals)

Each uses different coordinates but shares calculus operations (derivatives, integrals)

### 3. Arc length formula unifies all three

∫√[(dx)² + (dy)²]

### 4. Area formulas differ

rectangular, polar (½∫r²dθ), parametric
      `
    },
    {
      id: 'revie3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following correctly describes Parametric, polar, and vector functions…?',
            options: [
              '∫√[(dx)² + (dy)²]',
              'rectangular, polar (½∫r²dθ), parametric',
              'Each uses different coordinates but shares calculus operations (derivatives, integrals)',
              'Parametric, polar, and vector functions all describe curves in the plane'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Parametric, polar, and vector functions all describe curves in the plane. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Arc length formula unifies all three:',
            options: [
              'Each uses different coordinates but shares calculus operations (derivatives, integrals)',
              'Parametric, polar, and vector functions all describe curves in the plane',
              'rectangular, polar (½∫r²dθ), parametric',
              '∫√[(dx)² + (dy)²]'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Arc length formula unifies all three: ∫√[(dx)² + (dy)²]. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'revie3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Parametric, polar, and vector functions all describe curves in the plane**
- **Each uses different coordinates but shares calculus operations (derivatives, integrals)**
- **Arc length formula unifies all three**: ∫√[(dx)² + (dy)²]
- **Area formulas differ**: rectangular, polar (½∫r²dθ), parametric
      `
    },
    {
      id: 'revie3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Parametric, Polar & Vector Unity, which correctly describes Area formulas differ?',
            options: [
              'Each uses different coordinates but shares calculus operations (derivatives, integrals)',
              'Parametric, polar, and vector functions all describe curves in the plane',
              'rectangular, polar (½∫r²dθ), parametric',
              '∫√[(dx)² + (dy)²]'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Area formulas differ: rectangular, polar (½∫r²dθ), parametric. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'revie3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length formula unifies all three',
            options: ['Parametric, polar, and vector functions all describe curves in the plane', 'Each uses different coordinates but shares calculus operations (derivatives, integrals)', '∫√[(dx)² + (dy)²]', 'rectangular, polar (½∫r²dθ), parametric']
          },
          {
            label: 'Area formulas differ',
            options: ['rectangular, polar (½∫r²dθ), parametric', 'Parametric, polar, and vector functions all describe curves in the plane', '∫√[(dx)² + (dy)²]', 'Each uses different coordinates but shares calculus operations (derivatives, integrals)']
          }
        ],
        correctAnswers: ['∫√[(dx)² + (dy)²]', 'rectangular, polar (½∫r²dθ), parametric'],
        hint1: 'Think about what each concept specifically describes in Parametric, Polar & Vector Unity.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Parametric, Polar & Vector Unity describes a specific idea. Arc length formula unifies all three: ∫√[(dx)² + (dy)²]. Area formulas differ: rectangular, polar (½∫r²dθ), parametric.'
      }
    }
  ]
}
