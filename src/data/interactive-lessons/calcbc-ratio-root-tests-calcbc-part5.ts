export const calcbcRatioRootPart5Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'ratioroottests-p5-intro',
      type: 'text' as const,
      content: `# ⚖️ Integrating All Convergence Tests

**Part 5 of 7 — Comprehensive Comparison**

---

### All Convergence Tests Summary

| Test | Applies To | Conclusion |
|------|-----------|------------|
| Divergence | All series | Diverges if $\\\\lim a_n \\\\neq 0$ |
| Geometric | $\\\\sum ar^n$ | Converges iff $|r| < 1$ |
| p-series | $\\\\sum 1/n^p$ | Converges iff $p > 1$ |
| Integral | $f(n) = a_n$, positive decreasing | Same conclusion as $\\\\int_1^\\\\infty f(x)dx$ |
| Direct Comparison | Positive series | Compare with known series |
| Limit Comparison | Positive series | $\\\\lim a_n/b_n = c > 0$ → same behavior |
| Alternating Series | $\\\\sum (-1)^n b_n$ | Converges if $b_n$ decreasing → 0 |
| Ratio | Series with $n!$, $r^n$ | $L < 1$: converges; $L > 1$: diverges |
| Root | Series with $f(n)^n$ | $L < 1$: converges; $L > 1$: diverges |

---

### AP Exam Tips
- Always start with Divergence Test
- Show your work when computing limits
- State which test you’re using
- For Ratio/Root: clearly identify $L$ and state the conclusion`
    },    {
      id: 'ratioroottests-p5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: '$\\\\sum \\\\frac{1}{n(n+1)}$: best approach?',
            options: ['Ratio Test', 'Partial fractions → telescoping', 'Root Test', 'AST'],
            correctAnswer: 1,
            explanation: 'This is a telescoping series: $\\\\frac{1}{n(n+1)} = \\\\frac{1}{n} - \\\\frac{1}{n+1}$. Sum = 1.'
          },
          {
            question: '$\\\\sum \\\\frac{n}{e^n}$: the Ratio Test gives $L = ?$',
            options: ['$1/e$', '$e$', '1', '0'],
            correctAnswer: 0,
            explanation: '$L = \\\\lim \\\\frac{n+1}{en} = 1/e < 1$. Converges.'
          },
          {
            question: 'The Integral Test requires the function to be:',
            options: ['Increasing', 'Positive, continuous, and decreasing', 'Alternating', 'Polynomial'],
            correctAnswer: 1,
            explanation: 'Integral Test conditions: positive, continuous, and decreasing on $[1, \\\\infty)$.'
          }
        ]
      }
    },    {
      id: 'ratioroottests-p5-input',
      type: 'input-boxes' as const,
      content: `
**Test Application** 🧮

**1)** $\\\\sum_{n=1}^{\\\\infty} \\\\frac{1}{n!}$: Apply Ratio Test. $L = ?$

**2)** $\\\\sum_{n=1}^{\\\\infty} \\\\frac{n^2}{2^n}$: Apply Ratio Test. $L = ?$ (as a fraction)

**3)** Does $\\\\sum_{n=2}^{\\\\infty} \\\\frac{1}{n \\\\ln n}$ converge or diverge? (use Integral Test)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0', '1/2', 'diverges'],
        hint1: '$L = \\\\lim 1/(n+1)$',
        hint2: '$L = \\\\lim \\\\frac{(n+1)^2}{2n^2}$',
        hint3: '$\\\\int_2^\\\\infty \\\\frac{1}{x\\\\ln x}dx = \\\\ln(\\\\ln x) \\\\to \\\\infty$',
        explanation: '1) $L = 0$. 2) $L = 1/2$. 3) $\\\\int \\\\frac{dx}{x\\\\ln x} = \\\\ln(\\\\ln x) \\\\to \\\\infty$ → diverges.'
      }
    }
  ]
};
