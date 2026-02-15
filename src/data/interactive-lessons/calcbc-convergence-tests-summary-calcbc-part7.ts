export const calcBCConvergenceTestsPart7Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conve7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

### 1. Ratio Test

L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive

### 2. Root Test

L = lim|aₙ|^(1/n); same rules

### 3. AST

Σ(-1)ⁿbₙ converges if bₙ decreasing → 0

### 4. Absolute vs conditional

check if Σ|aₙ| converges or just Σaₙ
      `
    },
    {
      id: 'conve7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of review & applications?',
            options: [
              'Ratio Test',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Ratio Test: L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive'
          },
          {
            question: 'In the context of review & applications, which is accurate?',
            options: [
              'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'AST: Σ(-1)ⁿbₙ converges if bₙ decreasing → 0'
          }
        ]
      }
    },
    {
      id: 'conve7-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Ratio Test**: L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive
- **Root Test**: L = lim|aₙ|^(1/n); same rules
- **AST**: Σ(-1)ⁿbₙ converges if bₙ decreasing → 0
- **Absolute vs conditional**: check if Σ|aₙ| converges or just Σaₙ
      `
    },
    {
      id: 'conve7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to review & applications?',
            options: [
              'check if Σ|aₙ| converges or just Σaₙ',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Absolute vs conditional: check if Σ|aₙ| converges or just Σaₙ'
          }
        ]
      }
    },
    {
      id: 'conve7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio Test',
            options: ['L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Root Test',
            options: ['L = lim|aₙ|^(1/n); same rules', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'AST',
            options: ['Σ(-1)ⁿbₙ converges if bₙ decreasing → 0', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1', 'L = lim|aₙ|^(1/n); same rules', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Review & Applications.'
      }
    }
  ]
}
