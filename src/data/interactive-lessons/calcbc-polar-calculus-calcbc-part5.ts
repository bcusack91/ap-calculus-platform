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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Find zeros" refer to in calculus?',
            options: [
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'solve r₁(θ) = r₂(θ) AND check origin separately',
              'set dr/dθ = 0 (farthest from origin)',
              'where r = 0 (curve passes through origin)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Find zeros: where r = 0 (curve passes through origin). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Polar Curve Analysis, which explains Symmetry?',
            options: [
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'where r = 0 (curve passes through origin)',
              'set dr/dθ = 0 (farthest from origin)',
              'solve r₁(θ) = r₂(θ) AND check origin separately'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π). Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Polar Curve Analysis, which correctly describes Intersections?',
            options: [
              'solve r₁(θ) = r₂(θ) AND check origin separately',
              'where r = 0 (curve passes through origin)',
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'set dr/dθ = 0 (farthest from origin)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Intersections: solve r₁(θ) = r₂(θ) AND check origin separately. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'polar5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find zeros',
            options: ['solve r₁(θ) = r₂(θ) AND check origin separately', 'set dr/dθ = 0 (farthest from origin)', 'where r = 0 (curve passes through origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)']
          },
          {
            label: 'Maximum r',
            options: ['solve r₁(θ) = r₂(θ) AND check origin separately', 'set dr/dθ = 0 (farthest from origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)', 'where r = 0 (curve passes through origin)']
          },
          {
            label: 'Symmetry',
            options: ['set dr/dθ = 0 (farthest from origin)', 'solve r₁(θ) = r₂(θ) AND check origin separately', 'where r = 0 (curve passes through origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)']
          }
        ],
        correctAnswers: ['where r = 0 (curve passes through origin)', 'set dr/dθ = 0 (farthest from origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)'],
        hint1: 'Think about what each concept specifically describes in Polar Curve Analysis.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Polar Curve Analysis describes a specific idea. Find zeros: where r = 0 (curve passes through origin). Maximum r: set dr/dθ = 0 (farthest from origin). Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π).'
      }
    }
  ]
}
