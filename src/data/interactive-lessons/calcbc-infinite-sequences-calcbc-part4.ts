export const calcbcSequencesPart4Data = {
  topicSlug: 'infinite-sequences-calcbc',
  sections: [
    {
      id: 'seq4-intro',
      type: 'text' as const,
      content: `# Infinite Sequences

**Part 4 of 7 — Growth Rate Hierarchy**

### Dominance Hierarchy ($n \\to \infty$)

$$\ln n \ll n^p \ll a^n \ll n! \ll n^n$$

(for $p > 0$, $a > 1$)

This means: log grows **slowest**, then polynomial, exponential, factorial, $n^n$ grows **fastest**.

### Example

$\lim_{n \\to \infty} \\frac{n^{100}}{2^n} = 0$ because exponential beats any polynomial.`
    },
    {
      id: 'seq4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Growth Rates** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\lim_{n \\to \\infty} \\frac{e^n}{n!}$:',
            options: ['$0$', '$\\infty$', '$1$', '$e$'],
            correctAnswer: 0,
            explanation: 'Factorial grows faster than exponential. $n!$ dominates $e^n$, so the limit is $0$.'
          },
          {
            question: '$\\lim_{n \\to \\infty} \\frac{\\ln n}{\\sqrt{n}}$:',
            options: ['$0$', '$\\infty$', '$1$', 'DNE'],
            correctAnswer: 0,
            explanation: '$\\sqrt{n} = n^{1/2}$ (polynomial) dominates $\\ln n$. Limit is $0$.'
          }
        ]
      }
    },
    {
      id: 'seq4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4
$\\ln n \\ll n^p \\ll a^n \\ll n! \\ll n^n$`
    }
  ]
};
