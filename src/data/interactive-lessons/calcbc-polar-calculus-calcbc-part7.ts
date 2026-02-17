export const calcBCPolarPart7Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'polar7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Find zeros?',
            options: [
              'solve r₁(θ) = r₂(θ) AND check origin separately',
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'where r = 0 (curve passes through origin)',
              'set dr/dθ = 0 (farthest from origin)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Find zeros: where r = 0 (curve passes through origin). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Symmetry?',
            options: [
              'where r = 0 (curve passes through origin)',
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'solve r₁(θ) = r₂(θ) AND check origin separately',
              'set dr/dθ = 0 (farthest from origin)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polar7-detail',
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
      id: 'polar7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Intersections is correct?',
            options: [
              'where r = 0 (curve passes through origin)',
              'set dr/dθ = 0 (farthest from origin)',
              'solve r₁(θ) = r₂(θ) AND check origin separately',
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Intersections: solve r₁(θ) = r₂(θ) AND check origin separately. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'polar7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find zeros',
            options: ['test r(θ) = r(-θ), r(π-θ), r(θ+π)', 'solve r₁(θ) = r₂(θ) AND check origin separately', 'set dr/dθ = 0 (farthest from origin)', 'where r = 0 (curve passes through origin)']
          },
          {
            label: 'Maximum r',
            options: ['where r = 0 (curve passes through origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)', 'solve r₁(θ) = r₂(θ) AND check origin separately', 'set dr/dθ = 0 (farthest from origin)']
          },
          {
            label: 'Symmetry',
            options: ['solve r₁(θ) = r₂(θ) AND check origin separately', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)', 'where r = 0 (curve passes through origin)', 'set dr/dθ = 0 (farthest from origin)']
          }
        ],
        correctAnswers: ['where r = 0 (curve passes through origin)', 'set dr/dθ = 0 (farthest from origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Find zeros: where r = 0 (curve passes through origin). Maximum r: set dr/dθ = 0 (farthest from origin). Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π).'
      }
    }
  ]
}
