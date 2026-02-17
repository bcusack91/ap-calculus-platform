export const calcABAreaCurvesPart4Data = {
  topicSlug: 'area-between-curves-calcab',
  sections: [
    {
      id: 'area-4-intro',
      type: 'text' as const,
      content: `
# Determining Top & Bottom Functions

**Part 4 of 7 — Determining Top & Bottom Functions**

### 1. Graph the functions or evaluate at test points to determine which is on top

Graph the functions or evaluate at test points to determine which is on top

### 2. The "top" and "bottom" functions can switch at intersection points

The "top" and "bottom" functions can switch at intersection points

### 3. Split the integral at each intersection where functions cross

Split the integral at each intersection where functions cross

### 4. Always subtract the lower function from the upper function in each sub-interval

Always subtract the lower function from the upper function in each sub-interval
      `
    },
    {
      id: 'area-4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What does "Graph the functions or evaluate at test…" refer to in calculus?',
            options: [
              'Graph the functions or evaluate at test points to determine which is on top',
              'Always subtract the lower function from the upper function in each sub-interval',
              'Split the integral at each intersection where functions cross',
              'The "top" and "bottom" functions can switch at intersection points'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Graph the functions or evaluate at test points to determine which is on top. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Split the integral at each intersection…:',
            options: [
              'Always subtract the lower function from the upper function in each sub-interval',
              'The "top" and "bottom" functions can switch at intersection points',
              'Split the integral at each intersection where functions cross',
              'Graph the functions or evaluate at test points to determine which is on top'
            ],
            correctAnswer: 2,
            explanation: 'Correct — Split the integral at each intersection where functions cross. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'area-4-detail',
      type: 'text' as const,
      content: `
### Key Concepts Summary

- **Graph the functions or evaluate at test points to determine which is on top**
- **The "top" and "bottom" functions can switch at intersection points**
- **Split the integral at each intersection where functions cross**
- **Always subtract the lower function from the upper function in each sub-interval**
      `
    },
    {
      id: 'area-4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Determining Top & Bottom Functions, which correctly describes Always subtract the lower function from…?',
            options: [
              'Split the integral at each intersection where functions cross',
              'Graph the functions or evaluate at test points to determine which is on top',
              'The "top" and "bottom" functions can switch at intersection points',
              'Always subtract the lower function from the upper function in each sub-interval'
            ],
            correctAnswer: 3,
            explanation: 'Correct — Always subtract the lower function from the upper function in each sub-interval. Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'area-4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Graph the functions or evaluate at test…',
            options: ['Graph the functions or evaluate at test points to determine which is on top', 'Always subtract the lower function from the upper function in each sub-interval', 'Split the integral at each intersection where functions cross', 'The "top" and "bottom" functions can switch at intersection points']
          },
          {
            label: 'The "top" and "bottom" functions can…',
            options: ['Graph the functions or evaluate at test points to determine which is on top', 'Split the integral at each intersection where functions cross', 'The "top" and "bottom" functions can switch at intersection points', 'Always subtract the lower function from the upper function in each sub-interval']
          },
          {
            label: 'Split the integral at each intersection…',
            options: ['The "top" and "bottom" functions can switch at intersection points', 'Graph the functions or evaluate at test points to determine which is on top', 'Split the integral at each intersection where functions cross', 'Always subtract the lower function from the upper function in each sub-interval']
          }
        ],
        correctAnswers: ['Graph the functions or evaluate at test points to determine which is on top', 'The "top" and "bottom" functions can switch at intersection points', 'Split the integral at each intersection where functions cross'],
        hint1: 'Think about what each concept specifically describes in Determining Top & Bottom Functions.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Determining Top & Bottom Functions describes a specific idea. Graph the functions or evaluate at test points to determine which is on top. The "top" and "bottom" functions can switch at intersection points. Split the integral at each intersection where functions cross.'
      }
    }
  ]
}
