export const calcBCArcLengthPart1Data = {
  topicSlug: 'arc-length-surface-area-calcbc',
  sections: [
    {
      id: 'arc-l1-intro',
      type: 'text' as const,
      content: `
# ∮ Arc Length Surface Area

**Part 1 of 7 — Arc Length for y = f(x)**

### 1. Arc length

L = ∫ₐᵇ √(1 + [f'(x)]²) dx

### 2. Derived from the Pythagorean theorem on infinitesimal segments

Derived from the Pythagorean theorem on infinitesimal segments

### 3. The integrand √(1 + [f'(x)]²) gives the "speed" along the curve

The integrand √(1 + [f'(x)]²) gives the "speed" along the curve

### 4. Often leads to integrals that are difficult to evaluate by hand

Often leads to integrals that are difficult to evaluate by hand
      `
    },
    {
      id: 'arc-l1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Arc length" refer to in calculus?',
            options: [
              'L = ∫ₐᵇ √(1 + [f\'(x)]²) dx',
              'Derived from the Pythagorean theorem on infinitesimal segments',
              'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve',
              'Often leads to integrals that are difficult to evaluate by hand'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Arc length: L = ∫ₐᵇ √(1 + [f\'(x)]²) dx. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes The integrand √(1 + [f\'(x)]²) gives the…:',
            options: [
              'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve',
              'L = ∫ₐᵇ √(1 + [f\'(x)]²) dx',
              'Derived from the Pythagorean theorem on infinitesimal segments',
              'Often leads to integrals that are difficult to evaluate by hand'
            ],
            correctAnswer: 0,
            explanation: 'Correct — The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'arc-l1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Arc length**: L = ∫ₐᵇ √(1 + [f'(x)]²) dx
- **Derived from the Pythagorean theorem on infinitesimal segments**
- **The integrand √(1 + [f'(x)]²) gives the "speed" along the curve**
- **Often leads to integrals that are difficult to evaluate by hand**
      `
    },
    {
      id: 'arc-l1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Often leads to integrals that are… is correct?',
            options: [
              'Often leads to integrals that are difficult to evaluate by hand',
              'L = ∫ₐᵇ √(1 + [f\'(x)]²) dx',
              'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve',
              'Derived from the Pythagorean theorem on infinitesimal segments'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Often leads to integrals that are difficult to evaluate by hand. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'arc-l1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length',
            options: ['L = ∫ₐᵇ √(1 + [f\'(x)]²) dx', 'Derived from the Pythagorean theorem on infinitesimal segments', 'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve', 'Often leads to integrals that are difficult to evaluate by hand']
          },
          {
            label: 'Derived from the Pythagorean theorem on…',
            options: ['L = ∫ₐᵇ √(1 + [f\'(x)]²) dx', 'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve', 'Derived from the Pythagorean theorem on infinitesimal segments', 'Often leads to integrals that are difficult to evaluate by hand']
          },
          {
            label: 'The integrand √(1 + [f\'(x)]²) gives the…',
            options: ['The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve', 'Derived from the Pythagorean theorem on infinitesimal segments', 'L = ∫ₐᵇ √(1 + [f\'(x)]²) dx', 'Often leads to integrals that are difficult to evaluate by hand']
          }
        ],
        correctAnswers: ['L = ∫ₐᵇ √(1 + [f\'(x)]²) dx', 'Derived from the Pythagorean theorem on infinitesimal segments', 'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve'],
        hint1: 'Think about what each concept specifically describes in ∮ Arc Length Surface Area.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in ∮ Arc Length Surface Area describes a specific idea. Arc length: L = ∫ₐᵇ √(1 + [f\'(x)]²) dx. Derived from the Pythagorean theorem on infinitesimal segments. The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve.'
      }
    }
  ]
}
