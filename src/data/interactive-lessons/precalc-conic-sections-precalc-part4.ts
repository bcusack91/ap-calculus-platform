export const precalcConicsPart4Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'conic4-intro',
      type: 'text' as const,
      content: `
# Hyperbolas

**Part 4 of 7 — Hyperbolas**

### 1. Hyperbola

set of points where difference of distances to foci is constant

### 2. Standard form

(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)

### 3. Asymptotes

y - k = ±(b/a)(x - h)

### 4. c² = a² + b²; eccentricity e = c/a, where e > 1

c² = a² + b²; eccentricity e = c/a, where e > 1
      `
    },
    {
      id: 'conic4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of hyperbolas?',
            options: [
              'Hyperbola',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Hyperbola: set of points where difference of distances to foci is constant'
          },
          {
            question: 'In the context of hyperbolas, which is accurate?',
            options: [
              'y - k = ±(b/a)(x - h)',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Asymptotes: y - k = ±(b/a)(x - h)'
          }
        ]
      }
    },
    {
      id: 'conic4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Hyperbola**: set of points where difference of distances to foci is constant
- **Standard form**: (x-h)²/a² - (y-k)²/b² = 1 (opens left-right)
- **Asymptotes**: y - k = ±(b/a)(x - h)
- **c² = a² + b²; eccentricity e = c/a, where e > 1**
      `
    },
    {
      id: 'conic4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to hyperbolas?',
            options: [
              'c² = a² + b²; eccentricity e = c/a, where e > 1',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'c² = a² + b²; eccentricity e = c/a, where e > 1'
          }
        ]
      }
    },
    {
      id: 'conic4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hyperbola',
            options: ['set of points where difference of distances to foc', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Standard form',
            options: ['(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Asymptotes',
            options: ['y - k = ±(b/a)(x - h)', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['set of points where difference of distances to foc', '(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)', 'y - k = ±(b/a)(x - h)'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Hyperbolas.'
      }
    }
  ]
}
