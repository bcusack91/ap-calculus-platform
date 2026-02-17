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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Parabola?',
            options: [
              '(x-h)² = 4p(y-k); opens up if p > 0',
              '(y-k)² = 4p(x-h); opens right if p > 0',
              'Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite',
              'set of points equidistant from focus and directrix'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Parabola: set of points equidistant from focus and directrix. The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Standard form (horizontal)?',
            options: [
              '(x-h)² = 4p(y-k); opens up if p > 0',
              'Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite',
              'set of points equidistant from focus and directrix',
              '(y-k)² = 4p(x-h); opens right if p > 0'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Standard form (horizontal): (y-k)² = 4p(x-h); opens right if p > 0. Be careful to distinguish between the different concepts in this topic.'
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
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Parabola',
            options: ['Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite', 'set of points equidistant from focus and directrix', '(x-h)² = 4p(y-k); opens up if p > 0', '(y-k)² = 4p(x-h); opens right if p > 0']
          },
          {
            label: 'Standard form (vertical)',
            options: ['set of points equidistant from focus and directrix', 'Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite', '(y-k)² = 4p(x-h); opens right if p > 0', '(x-h)² = 4p(y-k); opens up if p > 0']
          },
          {
            label: 'Standard form (horizontal)',
            options: ['(x-h)² = 4p(y-k); opens up if p > 0', 'set of points equidistant from focus and directrix', 'Vertex at (h,k); focus at distance |p| from vertex; directrix at distance |p| opposite', '(y-k)² = 4p(x-h); opens right if p > 0']
          }
        ],
        correctAnswers: ['set of points equidistant from focus and directrix', '(x-h)² = 4p(y-k); opens up if p > 0', '(y-k)² = 4p(x-h); opens right if p > 0'],
        hint1: 'Think about what each concept specifically describes in Conic Sections.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Conic Sections describes a specific idea. Parabola: set of points equidistant from focus and directrix. Standard form (vertical): (x-h)² = 4p(y-k); opens up if p > 0. Standard form (horizontal): (y-k)² = 4p(x-h); opens right if p > 0.'
      }
    }
  ]
}
