export const calcBCPolarPart6Data = {
  topicSlug: 'polar-calculus-calcbc',
  sections: [
    {
      id: 'polar6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

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
      id: 'polar6-quiz1',
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
              'set dr/dθ = 0 (farthest from origin)',
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'where r = 0 (curve passes through origin)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Find zeros: where r = 0 (curve passes through origin). The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Problem-Solving Workshop, which explains Symmetry?',
            options: [
              'where r = 0 (curve passes through origin)',
              'set dr/dθ = 0 (farthest from origin)',
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'solve r₁(θ) = r₂(θ) AND check origin separately'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'polar6-detail',
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
      id: 'polar6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Intersections?',
            options: [
              'set dr/dθ = 0 (farthest from origin)',
              'solve r₁(θ) = r₂(θ) AND check origin separately',
              'test r(θ) = r(-θ), r(π-θ), r(θ+π)',
              'where r = 0 (curve passes through origin)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Intersections: solve r₁(θ) = r₂(θ) AND check origin separately. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'polar6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find zeros',
            options: ['where r = 0 (curve passes through origin)', 'solve r₁(θ) = r₂(θ) AND check origin separately', 'set dr/dθ = 0 (farthest from origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)']
          },
          {
            label: 'Maximum r',
            options: ['solve r₁(θ) = r₂(θ) AND check origin separately', 'set dr/dθ = 0 (farthest from origin)', 'where r = 0 (curve passes through origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)']
          },
          {
            label: 'Symmetry',
            options: ['set dr/dθ = 0 (farthest from origin)', 'where r = 0 (curve passes through origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)', 'solve r₁(θ) = r₂(θ) AND check origin separately']
          }
        ],
        correctAnswers: ['where r = 0 (curve passes through origin)', 'set dr/dθ = 0 (farthest from origin)', 'test r(θ) = r(-θ), r(π-θ), r(θ+π)'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Find zeros: where r = 0 (curve passes through origin). Maximum r: set dr/dθ = 0 (farthest from origin). Symmetry: test r(θ) = r(-θ), r(π-θ), r(θ+π).'
      }
    }
  ]
}
