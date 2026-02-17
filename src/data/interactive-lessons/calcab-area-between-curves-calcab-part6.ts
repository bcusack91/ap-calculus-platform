export const calcABAreaCurvesPart6Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-6-intro',
      type: 'text' as const,
      content: `
# Problem-Solving Workshop

**Part 6 of 7 — Problem-Solving Workshop**

### 1. Find all intersection points by setting f(x) = g(x)

Find all intersection points by setting f(x) = g(x)

### 2. Create separate integrals for each region between consecutive intersection points

Create separate integrals for each region between consecutive intersection points

### 3. Sum the areas of all regions (each area is positive)

Sum the areas of all regions (each area is positive)

### 4. Watch for functions that intersect more than twice

Watch for functions that intersect more than twice
      `
    },
    {
      id: 'area-6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Find all intersection points by setting…" refer to in calculus?',
            options: [
              'Sum the areas of all regions (each area is positive)',
              'Create separate integrals for each region between consecutive intersection points',
              'Watch for functions that intersect more than twice',
              'Find all intersection points by setting f(x) = g(x)'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Find all intersection points by setting f(x) = g(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Sum the areas of all regions (each area…?',
            options: [
              'Watch for functions that intersect more than twice',
              'Find all intersection points by setting f(x) = g(x)',
              'Sum the areas of all regions (each area is positive)',
              'Create separate integrals for each region between consecutive intersection points'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Sum the areas of all regions (each area is positive). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'area-6-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Find all intersection points by setting f(x) = g(x)**
- **Create separate integrals for each region between consecutive intersection points**
- **Sum the areas of all regions (each area is positive)**
- **Watch for functions that intersect more than twice**
      `
    },
    {
      id: 'area-6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement about Watch for functions that intersect more… is correct?',
            options: [
              'Sum the areas of all regions (each area is positive)',
              'Watch for functions that intersect more than twice',
              'Create separate integrals for each region between consecutive intersection points',
              'Find all intersection points by setting f(x) = g(x)'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Watch for functions that intersect more than twice. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'area-6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find all intersection points by setting…',
            options: ['Create separate integrals for each region between consecutive intersection points', 'Watch for functions that intersect more than twice', 'Find all intersection points by setting f(x) = g(x)', 'Sum the areas of all regions (each area is positive)']
          },
          {
            label: 'Create separate integrals for each…',
            options: ['Find all intersection points by setting f(x) = g(x)', 'Watch for functions that intersect more than twice', 'Sum the areas of all regions (each area is positive)', 'Create separate integrals for each region between consecutive intersection points']
          },
          {
            label: 'Sum the areas of all regions (each area…',
            options: ['Watch for functions that intersect more than twice', 'Find all intersection points by setting f(x) = g(x)', 'Create separate integrals for each region between consecutive intersection points', 'Sum the areas of all regions (each area is positive)']
          }
        ],
        correctAnswers: ['Find all intersection points by setting f(x) = g(x)', 'Create separate integrals for each region between consecutive intersection points', 'Sum the areas of all regions (each area is positive)'],
        hint1: 'Think about what each concept specifically describes in Problem-Solving Workshop.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Problem-Solving Workshop describes a specific idea. Find all intersection points by setting f(x) = g(x). Create separate integrals for each region between consecutive intersection points. Sum the areas of all regions (each area is positive).'
      }
    }
  ]
}
