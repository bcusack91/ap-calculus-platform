export const calcbcExamStrategyPart4Data = {
  topicSlug: 'bc-exam-strategies-calcbc',
  sections: [
    {
      id: 'str4-intro',
      type: 'text' as const,
      content: `# BC Exam Strategies

**Part 4 of 7 — Series FRQ Strategy**

### Common Series FRQ Parts

(a) Write the first 4 terms and general term of the Taylor series for $f$ centered at $a$.

(b) Find the radius of convergence.

(c) Use the series to approximate $f(c)$ and bound the error.

(d) Write a new series (derivative, integral, or composition of the original).

### Key: Show the Pattern

Write at least 3-4 nonzero terms AND the general term with summation notation.`
    },
    {
      id: 'str4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Series FRQ** 🎯',
      exercise: {
        questions: [
          {
            question: 'An FRQ asks: "Write the first four nonzero terms..." What is the most common mistake?',
            options: ['Writing terms of the wrong series or forgetting the general term', 'Not showing enough work', 'Using the wrong test', 'Calculator error'],
            correctAnswer: 0,
            explanation: 'Students often write terms of $e^x$ when asked for $e^{-x}$, or forget the general term.'
          }
        ]
      }
    },
    {
      id: 'str4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
Series FRQ: write terms clearly, include general term, state convergence.`
    }
  ]
};
