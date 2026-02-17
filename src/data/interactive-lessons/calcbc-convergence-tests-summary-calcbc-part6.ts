export const calcBCConvergenceTestsPart6Data = {
  topicSlug: 'convergence-tests-summary-calcbc',
  sections: [
    {
      id: 'conve6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'conve6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Ratio Test" refer to in calculus?',
            options: [
              'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0',
              'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive',
              'L = lim|aₙ|^(1/n); same rules',
              'check if Σ|aₙ| converges or just Σaₙ'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Ratio Test: L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes AST:',
            options: [
              'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive',
              'check if Σ|aₙ| converges or just Σaₙ',
              'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0',
              'L = lim|aₙ|^(1/n); same rules'
            ],
            correctAnswer: 2,
            explanation: 'Correct — AST: Σ(-1)ⁿbₙ converges if bₙ decreasing → 0. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'conve6-detail',
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
      id: 'conve6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Problem-Solving Workshop, which correctly describes Absolute vs conditional?',
            options: [
              'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive',
              'check if Σ|aₙ| converges or just Σaₙ',
              'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0',
              'L = lim|aₙ|^(1/n); same rules'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Absolute vs conditional: check if Σ|aₙ| converges or just Σaₙ. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'conve6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ratio Test',
            options: ['check if Σ|aₙ| converges or just Σaₙ', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0', 'L = lim|aₙ|^(1/n); same rules', 'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive']
          },
          {
            label: 'Root Test',
            options: ['L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive', 'check if Σ|aₙ| converges or just Σaₙ', 'L = lim|aₙ|^(1/n); same rules', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0']
          },
          {
            label: 'AST',
            options: ['check if Σ|aₙ| converges or just Σaₙ', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0', 'L = lim|aₙ|^(1/n); same rules', 'L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive']
          }
        ],
        correctAnswers: ['L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive', 'L = lim|aₙ|^(1/n); same rules', 'Σ(-1)ⁿbₙ converges if bₙ decreasing → 0'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Ratio Test: L = lim|aₙ₊₁/aₙ|; L<1 converges, L>1 diverges, L=1 inconclusive. Root Test: L = lim|aₙ|^(1/n); same rules. AST: Σ(-1)ⁿbₙ converges if bₙ decreasing → 0.'
      }
    }
  ]
}
