export const calcbcPowerSeriesPart5Data = {
  topicSlug: 'power-series-calcbc',
  sections: [
    {
      id: 'pow5-intro',
      type: 'text' as const,
      content: `# Power Series

**Part 5 of 7 — Non-Zero Centers**

### Power Series at $x = a$

$$\sum c_n(x-a)^n$$

$R$ found same way. Interval centered at $a$: $(a-R, a+R)$.

### Example

$\sum \frac{(x-3)^n}{2^n} = \sum \left(\frac{x-3}{2}\right)^n$

Geometric with ratio $\frac{x-3}{2}$. Converges when $|x-3| < 2$, i.e., $1 < x < 5$.`
    },
    {
      id: 'pow5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Non-Zero Centers** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum \\frac{(x-2)^n}{n \\cdot 3^n}$ has $R = $',
            options: ['$3$', '$1$', '$1/3$', '$2$'],
            correctAnswer: 0,
            explanation: 'Ratio: $\\lim \\frac{n}{n+1} \\cdot \\frac{|x-2|}{3} = \\frac{|x-2|}{3}$. Converges when $|x-2| < 3$. $R = 3$.'
          }
        ]
      }
    },
    {
      id: 'pow5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5
Center at $a$: interval is $(a-R, a+R)$ with endpoint checks.`
    }
  ]
};
