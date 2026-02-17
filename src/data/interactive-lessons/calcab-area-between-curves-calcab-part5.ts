export const calcABAreaCurvesPart5Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-5-intro',
      type: 'text' as const,
      content: `
# Multiple Intersection Points

**Part 5 of 7 — Multiple Intersection Points**

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
      id: 'area-5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Find all intersection points by setting…" refer to in calculus?',
            options: [
              'Watch for functions that intersect more than twice',
              'Find all intersection points by setting f(x) = g(x)',
              'Sum the areas of all regions (each area is positive)',
              'Create separate integrals for each region between consecutive intersection points'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Find all intersection points by setting f(x) = g(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Sum the areas of all regions (each area…:',
            options: [
              'Sum the areas of all regions (each area is positive)',
              'Find all intersection points by setting f(x) = g(x)',
              'Create separate integrals for each region between consecutive intersection points',
              'Watch for functions that intersect more than twice'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Sum the areas of all regions (each area is positive). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'area-5-detail',
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
      id: 'area-5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents Watch for functions that intersect more…?',
            options: [
              'Find all intersection points by setting f(x) = g(x)',
              'Sum the areas of all regions (each area is positive)',
              'Watch for functions that intersect more than twice',
              'Create separate integrals for each region between consecutive intersection points'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Watch for functions that intersect more than twice. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'area-5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find all intersection points by setting…',
            options: ['Create separate integrals for each region between consecutive intersection points', 'Find all intersection points by setting f(x) = g(x)', 'Sum the areas of all regions (each area is positive)', 'Watch for functions that intersect more than twice']
          },
          {
            label: 'Create separate integrals for each…',
            options: ['Find all intersection points by setting f(x) = g(x)', 'Create separate integrals for each region between consecutive intersection points', 'Watch for functions that intersect more than twice', 'Sum the areas of all regions (each area is positive)']
          },
          {
            label: 'Sum the areas of all regions (each area…',
            options: ['Sum the areas of all regions (each area is positive)', 'Watch for functions that intersect more than twice', 'Create separate integrals for each region between consecutive intersection points', 'Find all intersection points by setting f(x) = g(x)']
          }
        ],
        correctAnswers: ['Find all intersection points by setting f(x) = g(x)', 'Create separate integrals for each region between consecutive intersection points', 'Sum the areas of all regions (each area is positive)'],
        hint1: 'Think about what each concept specifically describes in Multiple Intersection Points.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Multiple Intersection Points describes a specific idea. Find all intersection points by setting f(x) = g(x). Create separate integrals for each region between consecutive intersection points. Sum the areas of all regions (each area is positive).'
      }
    }
  ]
}
