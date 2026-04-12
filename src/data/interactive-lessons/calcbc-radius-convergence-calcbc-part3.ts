export const calcbcRadConvPart3Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'radiusconvergence-p3-intro',
      type: 'text' as const,
      content: `# ✂️ Differentiation & Integration of Power Series

**Part 3 of 7 — Term-by-Term Operations**

---

### Theorem

Within its interval of convergence, a power series can be:
- **Differentiated** term by term
- **Integrated** term by term

The radius of convergence is **preserved** (but endpoints may change).

### Differentiation

$$f(x) = \\\\sum_{n=0}^{\\\\infty} c_n(x-a)^n \\\\implies f'(x) = \\\\sum_{n=1}^{\\\\infty} nc_n(x-a)^{n-1}$$

### Integration

$$\\\\int f(x)\\\\,dx = C + \\\\sum_{n=0}^{\\\\infty} \\\\frac{c_n(x-a)^{n+1}}{n+1}$$

---

### Example

$\\\\frac{1}{1-x} = \\\\sum_{n=0}^{\\\\infty} x^n$ for $|x| < 1$

Differentiate: $\\\\frac{1}{(1-x)^2} = \\\\sum_{n=1}^{\\\\infty} nx^{n-1}$

Integrate: $-\\\\ln(1-x) = \\\\sum_{n=0}^{\\\\infty} \\\\frac{x^{n+1}}{n+1} = \\\\sum_{n=1}^{\\\\infty} \\\\frac{x^n}{n}$`
    },    {
      id: 'radiusconvergence-p3-mcq',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** \U0001f3af
      `,
      exercise: {
        questions: [
          {
            question: 'When you differentiate a power series, $R$:',
            options: ['Increases', 'Decreases', 'Stays the same', 'Becomes 0'],
            correctAnswer: 2,
            explanation: 'The radius of convergence is preserved under differentiation and integration.'
          },
          {
            question: '$\\\\sum_{n=0}^{\\\\infty} x^n = 1/(1-x)$. Differentiating gives:',
            options: ['$\\\\sum nx^{n-1} = 1/(1-x)^2$', '$\\\\sum nx^n = x/(1-x)^2$', '$\\\\sum x^{n+1}/(n+1) = -\\\\ln(1-x)$', '$\\\\sum x^n/n$'],
            correctAnswer: 0,
            explanation: '$d/dx[1/(1-x)] = 1/(1-x)^2$, and $d/dx[\\\\sum x^n] = \\\\sum nx^{n-1}$.'
          },
          {
            question: 'Integrating $\\\\sum_{n=0}^{\\\\infty} x^n$ gives:',
            options: ['$\\\\sum x^{n+1}/(n+1)$', '$\\\\sum nx^{n-1}$', '$\\\\sum x^n/n$', '$\\\\sum (n+1)x^n$'],
            correctAnswer: 0,
            explanation: '$\\\\int x^n dx = x^{n+1}/(n+1)$, applied term by term.'
          }
        ]
      }
    },    {
      id: 'radiusconvergence-p3-input',
      type: 'input-boxes' as const,
      content: `
**Power Series Operations** 🧮

Given $\\\\ln(1+x) = \\\\sum_{n=1}^{\\\\infty} \\\\frac{(-1)^{n+1} x^n}{n}$ for $|x| \\\\leq 1$.

**1)** Differentiate to find a series for $\\\\frac{1}{1+x}$. What is the general term?

**2)** $R = ?$ (after differentiation)

**3)** $\\\\ln(2)$ equals what series sum? (substitute $x = ?$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['(-1)^(n+1)*x^(n-1)', '1', '1'],
        hint1: 'Differentiate each term: $d/dx[x^n/n] = x^{n-1}$',
        hint2: '$R$ is preserved',
        hint3: '$\\\\ln(1 + 1) = \\\\ln 2$',
        explanation: '1) $(-1)^{n+1}x^{n-1}$ (or equivalently $(-x)^{n-1}$). 2) $R = 1$ (preserved). 3) $x = 1$: $\\\\ln 2 = 1 - 1/2 + 1/3 - 1/4 + \\\\cdots$.'
      }
    }
  ]
};
