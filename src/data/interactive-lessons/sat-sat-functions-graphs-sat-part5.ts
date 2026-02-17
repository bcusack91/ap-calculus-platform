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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains (f ∘ g)(x) = f(g(x))?',
            options: [
              'Find g(x) first, then use that result as input to f.',
              'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².',
              'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.',
              'apply g first, then f.'
            ],
            correctAnswer: 3,
            explanation: 'Correct — (f ∘ g)(x) = f(g(x)): apply g first, then f. The other options describe different concepts from this topic.'
          },
          {
            question: 'Select the statement that correctly describes Key Insight:',
            options: [
              'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.',
              'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².',
              'Find g(x) first, then use that result as input to f.',
              'apply g first, then f.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — Key Insight: Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f. Be careful to distinguish between the different concepts in this topic.'
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
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Regarding Function Composition, which correctly describes SAT Tip?',
            options: [
              'apply g first, then f.',
              'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.',
              'Find g(x) first, then use that result as input to f.',
              'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².'
            ],
            correctAnswer: 3,
            explanation: 'Correct — SAT Tip: Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)². Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-f5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '(f ∘ g)(x) = f(g(x))',
            options: ['Find g(x) first, then use that result as input to f.', 'apply g first, then f.', 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².']
          },
          {
            label: 'Key Insight',
            options: ['Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'Find g(x) first, then use that result as input to f.', 'apply g first, then f.', 'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².']
          },
          {
            label: 'SAT Tip',
            options: ['Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².', 'Find g(x) first, then use that result as input to f.', 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'apply g first, then f.']
          }
        ],
        correctAnswers: ['apply g first, then f.', 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².'],
        hint1: 'Think about what each concept specifically describes in Function Composition.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Function Composition describes a specific idea. (f ∘ g)(x) = f(g(x)): apply g first, then f. Key Insight: Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f. SAT Tip: Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².'
      }
    }
  ]
}
