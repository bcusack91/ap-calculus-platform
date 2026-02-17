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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Hyperbola?',
            options: [
              'set of points where difference of distances to foci is constant',
              'y - k = ±(b/a)(x - h)',
              '(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)',
              'c² = a² + b²; eccentricity e = c/a, where e > 1'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Hyperbola: set of points where difference of distances to foci is constant. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Hyperbolas, which explains Asymptotes?',
            options: [
              'y - k = ±(b/a)(x - h)',
              'c² = a² + b²; eccentricity e = c/a, where e > 1',
              'set of points where difference of distances to foci is constant',
              '(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Asymptotes: y - k = ±(b/a)(x - h). Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hyperbola',
            options: ['y - k = ±(b/a)(x - h)', 'set of points where difference of distances to foci is constant', 'c² = a² + b²; eccentricity e = c/a, where e > 1', '(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)']
          },
          {
            label: 'Standard form',
            options: ['(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)', 'c² = a² + b²; eccentricity e = c/a, where e > 1', 'y - k = ±(b/a)(x - h)', 'set of points where difference of distances to foci is constant']
          },
          {
            label: 'Asymptotes',
            options: ['y - k = ±(b/a)(x - h)', '(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)', 'set of points where difference of distances to foci is constant', 'c² = a² + b²; eccentricity e = c/a, where e > 1']
          }
        ],
        correctAnswers: ['set of points where difference of distances to foci is constant', '(x-h)²/a² - (y-k)²/b² = 1 (opens left-right)', 'y - k = ±(b/a)(x - h)'],
        hint1: 'Think about what each concept specifically describes in Hyperbolas.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Hyperbolas describes a specific idea. Hyperbola: set of points where difference of distances to foci is constant. Standard form: (x-h)²/a² - (y-k)²/b² = 1 (opens left-right). Asymptotes: y - k = ±(b/a)(x - h).'
      }
    }
  ]
}
