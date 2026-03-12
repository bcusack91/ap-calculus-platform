export const satCalcStrategyPart1Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs1-intro',
      type: 'text' as const,
      content: `# Calculator Strategy: When to Use It

**Part 1 of 7 — Knowing When the Calculator Helps (and Hurts)**

The Digital SAT provides a built-in **Desmos graphing calculator** for the entire Math section. But using it on every problem wastes time.

### The 30-Second Rule

If a problem takes longer than **30 seconds** by hand, use the calculator. Otherwise, mental math is faster.

### Problems Where Calculator HELPS
- Systems of equations (graph both, find intersection)
- Quadratics that don't factor cleanly
- Problems with ugly arithmetic (large numbers, decimals)
- Checking your algebraic work
- Finding zeros of complex functions

### Problems Where Mental Math is FASTER
- Simple arithmetic (2/3 × 15 = 10)
- Factoring clean quadratics ($x^2 - 5x + 6$)
- Single-variable equations ($3x + 7 = 22$)
- Percent problems (20% of 80 = 16)
- Unit conversions with clean numbers

### Desmos Tip: Intersection
Type both equations, then click the intersection point to get exact coordinates — no algebra needed.`
    },
    {
      id: 'cs1-q1',
      type: 'quiz' as const,
      question: 'Which problem would benefit MOST from using the Desmos calculator?',
      options: [
        'What is 3/4 of 120?',
        'Factor x² - 9',
        'Find where y = 2x² - 3x + 1 and y = x + 2 intersect',
        'Solve 5x = 35'
      ],
      correctAnswer: 2,
      explanation: 'The system with a quadratic and linear equation has non-integer solutions — graphing both in Desmos and clicking the intersection is much faster than solving algebraically.'
    },
    {
      id: 'cs1-q2',
      type: 'quiz' as const,
      question: 'A student uses the calculator for every problem. What is the likely consequence?',
      options: [
        'They will get more answers correct',
        'They will run out of time on harder problems',
        'They will avoid all careless errors',
        'The calculator will not work for some problems'
      ],
      correctAnswer: 1,
      explanation: 'Using the calculator for simple problems like 3x = 15 wastes 20-30 seconds each. Over 22 Math questions, that adds up to minutes lost on harder problems that actually need more time.'
    }
  ]
};
