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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ratio Test" refer to in calculus?',
            options: [
              'L = lim|aₙ|^(1/n); same rules',
              'check if Σ|aₙ| converges or just Σaₙ',
              'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive',
              'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Ratio Test: L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes AST:',
            options: [
              'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive',
              'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0',
              'L = lim|aₙ|^(1/n); same rules',
              'check if Σ|aₙ| converges or just Σaₙ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — AST: Σ(-1)ⁿbₙ converges if bₙ decreasing → 0. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Absolute vs conditional is correct?',
            options: [
              'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive',
              'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0',
              'check if Σ|aₙ| converges or just Σaₙ',
              'L = lim|aₙ|^(1/n); same rules'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Absolute vs conditional: check if Σ|aₙ| converges or just Σaₙ. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'conve7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio Test',
            options: ['check if Σ|aₙ| converges or just Σaₙ', 'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0', 'L = lim|aₙ|^(1/n); same rules']
          },
          {
            label: 'Root Test',
            options: ['check if Σ|aₙ| converges or just Σaₙ', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0', 'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive', 'L = lim|aₙ|^(1/n); same rules']
          },
          {
            label: 'AST',
            options: ['check if Σ|aₙ| converges or just Σaₙ', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0', 'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive', 'L = lim|aₙ|^(1/n); same rules']
          }
        ],
        correctAnswers: ['L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive', 'L = lim|aₙ|^(1/n); same rules', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Ratio Test: L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive. Root Test: L = lim|aₙ|^(1/n); same rules. AST: Σ(-1)ⁿbₙ converges if bₙ decreasing → 0.'
      }
    }
  ]
}
