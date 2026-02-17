export const satFunctionsPart7Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-f7-intro',
      type: 'text' as const,
      content: `
# Review & Applications

**Part 7 of 7 — Review & Applications**

(f ∘ g)(x) = f(g(x)): apply g first, then f.

Find g(x) first, then use that result as input to f.
      `
    },
    {
      id: 'sat-f7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement accurately explains (f ∘ g)(x) = f(g(x))?',
            options: [
              'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².',
              'Find g(x) first, then use that result as input to f.',
              'apply g first, then f.',
              'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.'
            ],
            correctAnswer: 2,
            explanation: 'Correct — (f ∘ g)(x) = f(g(x)): apply g first, then f. The other options describe different concepts from this topic.'
          },
          {
            question: 'In the context of Review & Applications, which explains Key Insight?',
            options: [
              'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².',
              'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.',
              'Find g(x) first, then use that result as input to f.',
              'apply g first, then f.'
            ],
            correctAnswer: 1,
            explanation: 'Correct — Key Insight: Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f. Be careful to distinguish between the different concepts in this topic.'
          }
        ]
      }
    },
    {
      id: 'sat-f7-detail',
      type: 'text' as const,
      content: `
**Key Insight:** Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.

**SAT Tip:** Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².
      `
    },
    {
      id: 'sat-f7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of these accurately represents SAT Tip?',
            options: [
              'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².',
              'Find g(x) first, then use that result as input to f.',
              'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.',
              'apply g first, then f.'
            ],
            correctAnswer: 0,
            explanation: 'Correct — SAT Tip: Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)². Each option describes a real concept from this topic, so pay attention to the specific details.'
          }
        ]
      }
    },
    {
      id: 'sat-f7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '(f ∘ g)(x) = f(g(x))',
            options: ['apply g first, then f.', 'Find g(x) first, then use that result as input to f.', 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².']
          },
          {
            label: 'Key Insight',
            options: ['Find g(x) first, then use that result as input to f.', 'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².', 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'apply g first, then f.']
          },
          {
            label: 'SAT Tip',
            options: ['Find g(x) first, then use that result as input to f.', 'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².', 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'apply g first, then f.']
          }
        ],
        correctAnswers: ['apply g first, then f.', 'Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f.', 'Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².'],
        hint1: 'Think about what each concept specifically describes in Review & Applications.',
        hint2: 'Look for key terms that distinguish each concept from the others.',
        hint3: 'Remember the specific details — each concept has unique characteristics.',
        explanation: 'Each concept in Review & Applications describes a specific idea. (f ∘ g)(x) = f(g(x)): apply g first, then f. Key Insight: Domain of f ∘ g: x must be in domain of g, AND g(x) must be in domain of f. SAT Tip: Example: f(x) = x², g(x) = x + 1, then f(g(x)) = (x+1)².'
      }
    }
  ]
}
