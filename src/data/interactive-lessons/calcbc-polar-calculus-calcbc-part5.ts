export const calcBCPolarPart5Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar5-intro',
      type: 'text' as const,
      content: `
# Polar Curve Analysis

**Part 5 of 7 — Polar Curve Analysis**

### 1. Find zeros

where r = 0 (curve passes through origin)

### 2. Maximum r

set dr/dθ = 0 (farthest from origin)

### 3. Symmetry

test r(θ) = r(-θ), r(π-θ), r(θ+π)

### 4. Intersections

solve r₁(θ) = r₂(θ) AND check origin separately
      `
    },
    {
      id: 'polar5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of polar curve analysis?',
            options: [
              'Find zeros',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Find zeros: where r = 0 (curve passes through origin)'
          },
          {
            question: 'In the context of polar curve analysis, which is accurate?',
            options: [
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π)'
          }
        ]
      }
    },
    {
      id: 'polar5-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Find zeros**: where r = 0 (curve passes through origin)
- **Maximum r**: set dr/dθ = 0 (farthest from origin)
- **Symmetry**: test r(θ) = r(-θ), r(π-θ), r(θ+π)
- **Intersections**: solve r₁(θ) = r₂(θ) AND check origin separately
      `
    },
    {
      id: 'polar5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to polar curve analysis?',
            options: [
              'solve r₁(θ) = r₂(θ) AND check origin separately',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Intersections: solve r₁(θ) = r₂(θ) AND check origin separately'
          }
        ]
      }
    },
    {
      id: 'polar5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find zeros',
            options: ['where r = 0 (curve passes through origin)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Maximum r',
            options: ['set dr/dθ = 0 (farthest from origin)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Symmetry',
            options: ['test r(θ) = r(-θ), r(π-θ), r(θ+π)', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['where r = 0 (curve passes through origin)', 'set dr/dθ = 0 (farthest from origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Polar Curve Analysis.'
      }
    }
  ]
}
