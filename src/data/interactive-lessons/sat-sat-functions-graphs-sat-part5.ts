export const satFunctionsPart5Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f5-intro',
      type: 'text' as const,
      content: `
# Function Composition

**Part 5 of 7 — Function Composition**

(f ∘ g)(x) = f(g(x)): apply g first, then f.

Find g(x) first, then use that result as input to f.
      `
    },
    {
      id: 'sat-f5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes (f ∘ g)(x) = f(g(x))?',
            options: [
              '(f ∘ g)(x) = f(g(x)) is a fundamental concept in SAT Math',
              'Find g(x) first, then use that result as input to f',
              'This concept is not tested on the SAT',
              'None of these apply to SAT preparation'
            ],
            correctAnswer: 0,
            explanation: '(f ∘ g)(x) = f(g(x)): apply g first, then f'
          }
        ]
      }
    },
    {
      id: 'sat-f5-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.

**SAT Tip:** Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².
      `
    },
    {
      id: 'sat-f5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What is a key strategy for function composition?',
            options: [
              'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f',
              'Skip these questions entirely on the SAT',
              'These are only in the no-calculator section',
              'This topic appears only on the PSAT'
            ],
            correctAnswer: 0,
            explanation: 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f'
          }
        ]
      }
    },
    {
      id: 'sat-f5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Key concept for Function Composition:',
            options: ['(f ∘ g)(x) = f(g(x)): apply g first, then f', 'Find g(x) first, then use that result as input to ', 'Not applicable', 'None of these']
          },
          {
            label: 'Strategy tip:',
            options: ['Domain of f ∘ g: x must be in domain of g, AND g(x', 'Guess randomly', 'Skip the question', 'Use a different test']
          }
        ],
        correctAnswers: ['(f ∘ g)(x) = f(g(x)): apply g first, then f', 'Domain of f ∘ g: x must be in domain of g, AND g(x'],
        hint1: 'Think about function composition',
        hint2: 'Consider the best SAT strategy',
        explanation: '(f ∘ g)(x) = f(g(x)): apply g first, then f. Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.'
      }
    }
  ]
}
