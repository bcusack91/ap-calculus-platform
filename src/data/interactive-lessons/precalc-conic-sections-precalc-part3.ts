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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Ellipse?',
            options: [
              '(x-h)²/a² + (y-k)²/b² = 1 where a > b',
              'Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)',
              'set of points where sum of distances to two foci is constant',
              'c² = a² - b²; c = distance from center to each focus'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Ellipse: set of points where sum of distances to two foci is constant. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Ellipses, which explains c² = a² - b²; c = distance from center…?',
            options: [
              '(x-h)²/a² + (y-k)²/b² = 1 where a > b',
              'set of points where sum of distances to two foci is constant',
              'c² = a² - b²; c = distance from center to each focus',
              'Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — c² = a² - b²; c = distance from center to each focus. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Ellipse',
            options: ['c² = a² - b²; c = distance from center to each focus', '(x-h)²/a² + (y-k)²/b² = 1 where a > b', 'Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)', 'set of points where sum of distances to two foci is constant']
          },
          {
            label: 'Standard form',
            options: ['set of points where sum of distances to two foci is constant', 'Eccentricity e = c/a, where 0 < e < 1 (closer to 0 = more circular)', '(x-h)²/a² + (y-k)²/b² = 1 where a > b', 'c² = a² - b²; c = distance from center to each focus']
          }
        ],
        correctAnswers: ['set of points where sum of distances to two foci is constant', '(x-h)²/a² + (y-k)²/b² = 1 where a > b'],
        hint1: 'Think about what each concept specifically describes in Ellipses.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Ellipses describes a specific idea. Ellipse: set of points where sum of distances to two foci is constant. Standard form: (x-h)²/a² + (y-k)²/b² = 1 where a > b.'
      }
    }
  ]
}
