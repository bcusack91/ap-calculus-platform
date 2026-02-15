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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of arc length for y = f(x)?',
            options: [
              'Arc length',
              'An unrelated concept',
              'This is not covered in AP Calculus BC',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Arc length: L = ∫ₐᵇ √(1 + [f\'(x)]²) dx'
          },
          {
            question: 'In the context of arc length for y = f(x), which is accurate?',
            options: [
              'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve'
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
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to arc length for y = f(x)?',
            options: [
              'Often leads to integrals that are difficult to evaluate by hand',
              'Only in abstract algebra',
              'Exclusively in number theory',
              'This applies only to discrete math'
            ],
            correctAnswer: 0,
            explanation: 'Often leads to integrals that are difficult to evaluate by hand'
          }
        ]
      }
    },
    {
      id: 'arc-l1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Arc length',
            options: ['L = ∫ₐᵇ √(1 + [f\'(x)]²) dx', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'Derived from the Pythagorean theorem on infinitesimal segments',
            options: ['Derived from the Pythagorean theorem on infinitesi', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          },
          {
            label: 'The integrand √(1 + [f\'(x)]²) gives the "speed" along the curve',
            options: ['The integrand √(1 + [f\'(x)]²) gives the "speed" al', 'Not applicable', 'Unrelated to calculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['L = ∫ₐᵇ √(1 + [f\'(x)]²) dx', 'Derived from the Pythagorean theorem on infinitesi', 'The integrand √(1 + [f\'(x)]²) gives the "speed" al'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Arc Length for y = f(x).'
      }
    }
  ]
}
