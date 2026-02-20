export const calcbcAlternatingPart3Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'alt3-intro',
      type: 'text' as const,
      content: `# Alternating Series

**Part 3 of 7 — Absolute vs Conditional Convergence**

### Absolute Convergence

$\sum a_n$ converges **absolutely** if $\sum |a_n|$ converges.

### Conditional Convergence

$\sum a_n$ converges **conditionally** if $\sum a_n$ converges but $\sum |a_n|$ diverges.

### Key Fact

Absolute convergence → convergence (but NOT vice versa!)

### Example

$\sum \frac{(-1)^{n+1}}{n}$: converges (AST) but $\sum 1/n$ diverges → **conditional convergence**

$\sum \frac{(-1)^n}{n^2}$: $\sum 1/n^2$ converges → **absolute convergence**`
    },
    {
      id: 'alt3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute vs Conditional** 🎯',
      exercise: {
        questions: [
          {
            question: '$\\sum \\frac{(-1)^n}{n^{3/2}}$ converges:',
            options: ['Absolutely', 'Conditionally', 'Diverges', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$\\sum 1/n^{3/2}$ converges ($p = 3/2 > 1$). So the alternating series converges absolutely.'
          },
          {
            question: '$\\sum \\frac{(-1)^n}{\\sqrt{n}}$ converges:',
            options: ['Conditionally', 'Absolutely', 'Diverges', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'AST: converges. But $\\sum 1/\\sqrt{n}$ diverges ($p = 1/2 < 1$). Conditional convergence.'
          }
        ]
      }
    },
    {
      id: 'alt3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3
Absolute: $\\sum |a_n|$ converges. Conditional: series converges but absolute version doesn't.`
    }
  ]
};
