export const precalcLawSinesCosinesPart2Data = {
  topicSlug: 'law-of-sines-cosines-precalc',
  sections: [
    {
      id: 'law-o2-intro',
      type: 'text' as const,
      content: `
# Ambiguous Case (SSA)

**Part 2 of 7 — Ambiguous Case (SSA)**

### 1. SSA (Side-Side-Angle) can give 0, 1, or 2 solutions

SSA (Side-Side-Angle) can give 0, 1, or 2 solutions

### 2. Compare the given side opposite the known angle with the other known side

Compare the given side opposite the known angle with the other known side

### 3. If a < b sin A

no solution

### 4. If b sin A < a < b

two possible triangles (ambiguous)
      `
    },
    {
      id: 'law-o2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "SSA (Side-Side-Angle) can give 0, 1, or…" refer to in precalculus?',
            options: [
              'Compare the given side opposite the known angle with the other known side',
              'two possible triangles (ambiguous)',
              'no solution',
              'SSA (Side-Side-Angle) can give 0, 1, or 2 solutions'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SSA (Side-Side-Angle) can give 0, 1, or 2 solutions. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about If a < b sin A?',
            options: [
              'Compare the given side opposite the known angle with the other known side',
              'SSA (Side-Side-Angle) can give 0, 1, or 2 solutions',
              'no solution',
              'two possible triangles (ambiguous)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — If a < b sin A: no solution. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'law-o2-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **SSA (Side-Side-Angle) can give 0, 1, or 2 solutions**
- **Compare the given side opposite the known angle with the other known side**
- **If a < b sin A**: no solution
- **If b sin A < a < b**: two possible triangles (ambiguous)
      `
    },
    {
      id: 'law-o2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ambiguous case (ssa)?',
            options: [
              'two possible triangles (ambiguous)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'If b sin A < a < b: two possible triangles (ambiguous)'
          }
        ]
      }
    },
    {
      id: 'law-o2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If a < b sin A',
            options: ['two possible triangles (ambiguous)', 'no solution', 'SSA (Side-Side-Angle) can give 0, 1, or 2 solutions', 'Compare the given side opposite the known angle with the other known side']
          },
          {
            label: 'If b sin A < a < b',
            options: ['two possible triangles (ambiguous)', 'Compare the given side opposite the known angle with the other known side', 'SSA (Side-Side-Angle) can give 0, 1, or 2 solutions', 'no solution']
          }
        ],
        correctAnswers: ['no solution', 'two possible triangles (ambiguous)'],
        hint1: 'Think about what each concept specifically describes in Ambiguous Case (SSA).',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ambiguous Case (SSA) describes a specific idea. If a < b sin A: no solution. If b sin A < a < b: two possible triangles (ambiguous).'
      }
    }
  ]
}
