export const precalcConicsPart1Data = {
  topicSlug: 'conic-sections-precalc',
  sections: [
    {
      id: 'conic1-intro',
      type: 'text' as const,
      content: `
# 📈 Conic Sections

**Part 1 of 7 — Parabolas**

### 1. Parabola

set of points equidistant from focus and directrix

### 2. Standard form (vertical)

(x-h)² = 4p(y-k); opens up if p > 0

### 3. Standard form (horizontal)

(y-k)² = 4p(x-h); opens right if p > 0

### 4. Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite

Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite
      `
    },
    {
      id: 'conic1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which best describes a key concept of parabolas?',
            options: [
              'Parabola',
              'An unrelated concept',
              'This is not covered in Precalculus',
              'A concept from a different course'
            ],
            correctAnswer: 0,
            explanation: 'Parabola: set of points equidistant from focus and directrix'
          },
          {
            question: 'In the context of parabolas, which is accurate?',
            options: [
              '(y-k)² = 4p(x-h); opens right if p > 0',
              'The opposite is true',
              'This concept is obsolete',
              'None of these are correct'
            ],
            correctAnswer: 0,
            explanation: 'Standard form (horizontal): (y-k)² = 4p(x-h); opens right if p > 0'
          }
        ]
      }
    },
    {
      id: 'conic1-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Parabola**: set of points equidistant from focus and directrix
- **Standard form (vertical)**: (x-h)² = 4p(y-k); opens up if p > 0
- **Standard form (horizontal)**: (y-k)² = 4p(x-h); opens right if p > 0
- **Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite**
      `
    },
    {
      id: 'conic1-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which concept relates directly to parabolas?',
            options: [
              'Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| op',
              'Only complex analysis',
              'Exclusively abstract algebra',
              'This applies only to statistics'
            ],
            correctAnswer: 0,
            explanation: 'Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite'
          }
        ]
      }
    },
    {
      id: 'conic1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parabola',
            options: ['set of points equidistant from focus and directrix', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Standard form (vertical)',
            options: ['(x-h)² = 4p(y-k); opens up if p > 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          },
          {
            label: 'Standard form (horizontal)',
            options: ['(y-k)² = 4p(x-h); opens right if p > 0', 'Not applicable', 'Unrelated to precalculus', 'Only in higher math']
          }
        ],
        correctAnswers: ['set of points equidistant from focus and directrix', '(x-h)² = 4p(y-k); opens up if p > 0', '(y-k)² = 4p(x-h); opens right if p > 0'],
        hint1: 'Review key concept 1.',
        hint2: 'Review key concept 2.',
        hint3: 'Review key concept 3.',
        explanation: 'These concepts are fundamental to understanding Parabolas.'
      }
    }
  ]
}
