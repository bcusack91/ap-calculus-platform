export const calcABAreaCurvesPart7Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

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
      id: 'area-7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains Find all intersection points by setting…?',
            options: [
              'Create separate integrals for each region between consecutive intersection points',
              'Watch for functions that intersect more than twice',
              'Find all intersection points by setting f(x) = g(x)',
              'Sum the areas of all regions (each area is positive)'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Find all intersection points by setting f(x) = g(x). The other options describe different concepts from this topic.'
          },
          {
            question: 'Which of the following is true about Sum the areas of all regions (each area…?',
            options: [
              'Find all intersection points by setting f(x) = g(x)',
              'Sum the areas of all regions (each area is positive)',
              'Create separate integrals for each region between consecutive intersection points',
              'Watch for functions that intersect more than twice'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Sum the areas of all regions (each area is positive). Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'area-7-detail',
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
      id: 'area-7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Review & Applications, which correctly describes Watch for functions that intersect more…?',
            options: [
              'Create separate integrals for each region between consecutive intersection points',
              'Sum the areas of all regions (each area is positive)',
              'Find all intersection points by setting f(x) = g(x)',
              'Watch for functions that intersect more than twice'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Watch for functions that intersect more than twice. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'area-7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Find all intersection points by setting…',
            options: ['Create separate integrals for each region between consecutive intersection points', 'Watch for functions that intersect more than twice', 'Sum the areas of all regions (each area is positive)', 'Find all intersection points by setting f(x) = g(x)']
          },
          {
            label: 'Create separate integrals for each…',
            options: ['Watch for functions that intersect more than twice', 'Find all intersection points by setting f(x) = g(x)', 'Create separate integrals for each region between consecutive intersection points', 'Sum the areas of all regions (each area is positive)']
          },
          {
            label: 'Sum the areas of all regions (each area…',
            options: ['Create separate integrals for each region between consecutive intersection points', 'Find all intersection points by setting f(x) = g(x)', 'Sum the areas of all regions (each area is positive)', 'Watch for functions that intersect more than twice']
          }
        ],
        correctAnswers: ['Find all intersection points by setting f(x) = g(x)', 'Create separate integrals for each region between consecutive intersection points', 'Sum the areas of all regions (each area is positive)'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. Find all intersection points by setting f(x) = g(x). Create separate integrals for each region between consecutive intersection points. Sum the areas of all regions (each area is positive).'
      }
    }
  ]
}
