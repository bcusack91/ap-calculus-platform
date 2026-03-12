export const calcabAccumulationPart2Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc2-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 2 of 7 \u2014 Reading Graphs of $f$ to Analyze $F$**

### Graph-Based Analysis

Given the **graph of $f$**, you can determine everything about $F(x) = \\int_a^x f(t)\\,dt$:

- **Values of $F$**: computed as signed areas under $f$
- **Where $F$ increases/decreases**: where $f$ is positive/negative
- **Max/min of $F$**: where $f$ changes sign
- **Concavity of $F$**: $F'' = f'$, so look at whether $f$ is increasing/decreasing

> **AP Tip:** This is one of the most commonly tested skills on the AP exam!`
    },
    {
      id: 'acc2-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis** \ud83c\udfaf\n\nSuppose $f$ is a piecewise linear function on $[0, 6]$: $f(0) = 2$, $f(2) = 2$, $f(4) = -2$, $f(6) = 0$. Let $g(x) = \\int_0^x f(t)\\,dt$.',
      exercise: {
        questions: [
          {
            question: 'What is $g(2)$?',
            options: ['$2$', '$4$', '$0$', '$1$'],
            correctAnswer: 1,
            explanation: '$g(2)$ = area under $f$ from $0$ to $2$. Since $f = 2$ (constant) on $[0,2]$, the area is $2 \\times 2 = 4$.'
          },
          {
            question: 'At what $x$ value does $g$ reach its absolute maximum on $[0, 6]$?',
            options: ['$x = 2$', '$x = 3$', '$x = 4$', '$x = 6$'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x)$. $f$ changes from positive to negative at $x = 3$ (linear from $2$ to $-2$ crosses zero at $x = 3$). So $g$ has its maximum at $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'acc2-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 2
1. Read the graph of $f$ to determine the behavior of $g = \\int f$
2. Signed area under $f$ gives the value of $g$
3. This skill is tested on nearly every AP exam`
    }
  ]
};
