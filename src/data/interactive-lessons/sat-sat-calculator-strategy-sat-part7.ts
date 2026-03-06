export const satCalcStrategyPart7Data = {
  topicSlug: 'sat-calculator-strategy-sat',
  sections: [
    {
      id: 'cs7-intro',
      type: 'text' as const,
      content: `# Calculator Strategy Review & Timed Practice

**Part 7 of 7 — Putting It All Together**

### Decision Flowchart
1. **Read the problem** — What is it asking?
2. **Can I solve this in < 30 seconds by hand?** → Do it mentally
3. **Does it involve a system, graph, or ugly numbers?** → Use Desmos
4. **Am I stuck after 1 minute?** → Try graphing the scenario or backsolving with answer choices

### Speed Benchmarks
| Task | Target Time |
|---|---|
| Simple equation (3x + 5 = 20) | 10-15 seconds, no calculator |
| System of equations (graph method) | 20-30 seconds with Desmos |
| Quadratic zeros | 15-20 seconds if factorable, 20-30 seconds with Desmos |
| Regression from data | 30-45 seconds with Desmos |
| Graph analysis (vertex, intercepts) | 15-25 seconds with Desmos |

### Common Calculator Mistakes
- **Parentheses errors**: `2/3x` ≠ `(2/3)x` in Desmos
- **Not zooming**: The intersection might be off-screen — zoom out!
- **Over-reliance**: Don't use Desmos for 2 + 3
- **Forgetting to verify**: Calculator gives numbers, but does the answer make sense in context?`
    },
    {
      id: 'cs7-q1',
      type: 'quiz' as const,
      question: 'A problem asks: "For what value of k does the system y = 3x + k and y = 3x - 5 have no solution?" The fastest approach is:',
      options: [
        'Graph both in Desmos and adjust the slider for k',
        'Recognize that both have slope 3, so they are parallel when k ≠ -5, meaning any k ≠ -5 gives no solution',
        'Set 3x + k = 3x - 5 and solve for k',
        'Substitute test values for k'
      ],
      correctAnswer: 1,
      explanation: 'Both lines have slope 3 (parallel). They only overlap when k = -5 (same line). For ANY other value of k, the lines are parallel with no intersection. This is conceptual — no calculator needed. The answer is "any value except -5."'
    },
    {
      id: 'cs7-q2',
      type: 'quiz' as const,
      question: 'Which of these SAT Math problems would take the LONGEST to solve without a calculator?',
      options: [
        'What is 15% of 200?',
        'Find the intersection of y = x² - 3x + 1 and y = 2x - 3',
        'Solve: 7x = 49',
        'What is the slope of the line through (0, 3) and (4, 11)?'
      ],
      correctAnswer: 1,
      explanation: 'Finding the intersection of a quadratic and a line requires setting x² - 3x + 1 = 2x - 3, solving x² - 5x + 4 = 0, factoring, and finding y-values. With Desmos, graph both and click — done in 10 seconds.'
    }
  ]
};
