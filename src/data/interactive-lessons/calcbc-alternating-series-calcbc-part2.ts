export const calcbcAlternatingPart2Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt2-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 2 of 7 — Error Bound**

### Alternating Series Error Bound

If $S = \sum_{n=1}^{\infty}(-1)^{n+1}b_n$ and $S_n$ is the $n$th partial sum:

$$|S - S_n| \leq b_{n+1}$$

The error is **at most** the absolute value of **the first omitted term**.

### Example

$S = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2}$. After 4 terms:

$S_4 = 1 - 1/4 + 1/9 - 1/16$

Error $\leq b_5 = 1/25 = 0.04$`
    },
    {
      id: 'alt2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Error Bound** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $\\sum \\frac{(-1)^{n+1}}{n!}$, how many terms ensure error $< 0.01$?',
            options: ['$4$ terms ($b_5 = 1/120 < 0.01$)', '$3$ terms', '$5$ terms', '$10$ terms'],
            correctAnswer: 0,
            explanation: '$b_5 = 1/5! = 1/120 \\approx 0.0083 < 0.01$. $b_4 = 1/4! = 1/24 \\approx 0.042 > 0.01$. Need 4 terms.'
          }
        ]
      }
    },
    {
      id: 'alt2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2
Error $\\leq$ first omitted term. This is a very useful and simple bound!`
    }
  ]
};
