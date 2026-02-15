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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of parametric, polar & vector unity?',
            options: [
              'Parametric, polar, and vector functions all describe curves in the plane',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Parametric, polar, and vector functions all describe curves in the plane'
          },
          {
            question: 'In the context of parametric, polar & vector unity, which is accurate?',
            options: [
              '∫√[(dx)² + (dy)²]',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Arc length formula unifies all three: ∫√[(dx)² + (dy)²]'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to parametric, polar & vector unity?',
            options: [
              'rectangular, polar (½∫r²dθ), parametric',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Area formulas differ: rectangular, polar (½∫r²dθ), parametric'
          }
        ]
      }
    },
    {
      id: 'revie3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parametric, polar, and vector functions all describe curves in the plane',
            options: ['Parametric, polar, and vector functions all descri', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Each uses different coordinates but shares calculus operations (derivatives, integrals)',
            options: ['Each uses different coordinates but shares calculu', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Arc length formula unifies all three',
            options: ['∫√[(dx)² + (dy)²]', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['Parametric, polar, and vector functions all descri', 'Each uses different coordinates but shares calculu', '∫√[(dx)² + (dy)²]'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Parametric, Polar & Vector Unity.'
      }
    }
  ]
}
