export const precalcConicsPart3Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'conic3-intro',
      type: 'text' as const,
      content: `
# Ellipses

**Part 3 of 7 — Ellipses**

### 1. Ellipse

set of points where sum of distances to two foci is constant

### 2. Standard form

(x-h)²/a² + (y-k)²/b² = 1 where a > b

### 3. c² = a² - b²; c = distance from center to each focus

c² = a² - b²; c = distance from center to each focus

### 4. Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)

Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)
      `
    },
    {
      id: 'conic3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of ellipses?',
            options: [
              'Ellipse',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Ellipse: set of points where sum of distances to two foci is constant'
          },
          {
            question: 'In the context of ellipses, which is accurate?',
            options: [
              'c² = a² - b²; c = distance from center to each focus',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'c² = a² - b²; c = distance from center to each focus'
          }
        ]
      }
    },
    {
      id: 'conic3-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Ellipse**: set of points where sum of distances to two foci is constant
- **Standard form**: (x-h)²/a² + (y-k)²/b² = 1 where a > b
- **c² = a² - b²; c = distance from center to each focus**
- **Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)**
      `
    },
    {
      id: 'conic3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to ellipses?',
            options: [
              'Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)'
          }
        ]
      }
    },
    {
      id: 'conic3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ellipse',
            options: ['set of points where sum of distances to two foci i', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Standard form',
            options: ['(x-h)²/a² + (y-k)²/b² = 1 where a > b', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'c² = a² - b²; c = distance from center to each focus',
            options: ['c² = a² - b²; c = distance from center to each foc', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['set of points where sum of distances to two foci i', '(x-h)²/a² + (y-k)²/b² = 1 where a > b', 'c² = a² - b²; c = distance from center to each foc'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Ellipses.'
      }
    }
  ]
}
