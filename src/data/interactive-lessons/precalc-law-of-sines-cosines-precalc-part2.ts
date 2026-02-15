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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ambiguous case (ssa)?',
            options: [
              'SSA (Side-Side-Angle) can give 0, 1, or 2 solutions',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'SSA (Side-Side-Angle) can give 0, 1, or 2 solutions'
          },
          {
            question: 'In the context of ambiguous case (ssa), which is accurate?',
            options: [
              'no solution',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'If a < b sin A: no solution'
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
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'SSA (Side-Side-Angle) can give 0, 1, or 2 solutions',
            options: ['SSA (Side-Side-Angle) can give 0, 1, or 2 solution', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Compare the given side opposite the known angle with the other known side',
            options: ['Compare the given side opposite the known angle wi', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'If a < b sin A',
            options: ['no solution', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['SSA (Side-Side-Angle) can give 0, 1, or 2 solution', 'Compare the given side opposite the known angle wi', 'no solution'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Ambiguous Case (SSA).'
      }
    }
  ]
}
