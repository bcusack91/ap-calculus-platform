export const calcbcRatioRootPart3Data = {
  topicSlug: 'ratio-root-tests-calcbc',
  sections: [
    {
      id: 'ratioroottests-p3-intro',
      type: 'text' as const,
      content: `# 🔍 Choosing the Right Convergence Test

**Part 3 of 7 — Decision Framework**

---

### Convergence Test Flowchart

1. **Divergence Test first:** Does $\\\\lim a_n \\\\neq 0$? → Diverges
2. **Geometric?** $\\\\sum ar^n$ → converges iff $|r| < 1$
3. **p-series?** $\\\\sum 1/n^p$ → converges iff $p > 1$
4. **Alternating?** Try Alternating Series Test
5. **Factorials/exponentials?** Try **Ratio Test**
6. **$n$-th powers?** Try **Root Test**
7. **Rational function of $n$?** Try **Limit Comparison** with p-series
8. **Decreasing positive?** Try **Integral Test**
9. **Smaller than known convergent?** Try **Direct Comparison**

---

### The Ratio and Root Tests’ Weakness

Both are **inconclusive** ($L = 1$) for:
- $\\\\sum 1/n^p$ (p-series)
- $\\\\sum 1/(n \\\\ln n)$
- Most series where terms decrease polynomially`
    },    {
      id: 'ratioroottests-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'Which test should you use first on any series?',
            options: ['Ratio Test', 'Root Test', 'Divergence Test', 'Integral Test'],
            correctAnswer: 2,
            explanation: 'Always check if $\\\\lim a_n \\\\neq 0$ first. If so, the series diverges immediately.'
          },
          {
            question: '$\\\\sum \\\\frac{n^2}{2^n}$: best test?',
            options: ['Integral Test', 'Ratio Test', 'p-series', 'Alternating Series Test'],
            correctAnswer: 1,
            explanation: 'Exponential $2^n$ in denominator → Ratio Test works well.'
          },
          {
            question: '$\\\\sum \\\\frac{1}{n^2 + 3}$: best test?',
            options: ['Ratio Test', 'Root Test', 'Limit Comparison with $1/n^2$', 'Divergence Test'],
            correctAnswer: 2,
            explanation: 'Rational function of $n$ → compare with corresponding p-series.'
          }
        ]
      }
    },    {
      id: 'ratioroottests-p3-input',
      type: 'input-boxes' as const,
      content: `
**Test Selection** 🧮

Name the best convergence test for each series:

**1)** $\\\\sum \\\\frac{(-1)^n}{n^3}$ (alternating/ratio/root/comparison)

**2)** $\\\\sum \\\\frac{n!}{5^n}$ (alternating/ratio/root/comparison)

**3)** $\\\\sum \\\\frac{1}{\\\\sqrt{n}}$ (series type and does it converge or diverge?)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['alternating', 'ratio', 'diverges'],
        hint1: '$(-1)^n$ pattern',
        hint2: 'Factorial in numerator',
        hint3: 'p-series with $p = 1/2$',
        explanation: '1) Alternating Series Test (and it converges). 2) Ratio Test ($L = \\\\infty$, diverges). 3) p-series $p = 1/2 < 1$, diverges.'
      }
    }
  ]
};
