export const calcbcSeriesAppsPart4Data = {
  topicSlug: 'series-applications-calcbc',
  sections: [
    {
      id: 'sapp4-intro',
      type: 'text' as const,
      content: `# Series Applications

**Part 4 of 7 — Finding Coefficients from Derivatives**

### Connecting Taylor Coefficients and Derivatives

$$\frac{f^{(n)}(a)}{n!} = c_n$$

So: $f^{(n)}(a) = n! \cdot c_n$

This lets you find **specific derivatives** from a known series without differentiating!`
    },
    {
      id: 'sapp4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Coefficient-Derivative Connection** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\sum_{n=0}^{\\infty} \\frac{(2x)^n}{n!}$, find $f^{(5)}(0)$.',
            options: ['$32$', '$2^5 = 32$... same! The coefficient of $x^5$ is $2^5/5!$, so $f^{(5)}(0) = 5! \\cdot 2^5/5! = 32$', '$120$', '$2$'],
            correctAnswer: 0,
            explanation: 'Coefficient of $x^5$: $2^5/5! = 32/120$. $f^{(5)}(0) = 5! \\cdot (32/120) = 32$.'
          }
        ]
      }
    },
    {
      id: 'sapp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
$f^{(n)}(a) = n! \\cdot$ (coefficient of $(x-a)^n$).`
    }
  ]
};
