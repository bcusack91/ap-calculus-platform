export const calcbcRadConvPart4Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'rc4-intro',
      type: 'text' as const,
      content: `# Differentiation & Integration Preserve $R$

**Part 4 of 7 — Operations and Convergence**

### The Preservation Theorem

If $f(x) = \\sum c_n(x-a)^n$ has radius of convergence $R$, then:

$$\\boxed{f'(x) = \\sum n c_n(x-a)^{n-1} \\quad \\text{also has radius } R}$$

$$\\boxed{\\int f(x)\\,dx = C + \\sum \\frac{c_n(x-a)^{n+1}}{n+1} \\quad \\text{also has radius } R}$$

**The radius stays the same, but endpoint behavior may change!**

### Example: $\\ln(1+x)$

Starting from $\\frac{1}{1+x} = \\sum_{n=0}^{\\infty} (-x)^n = \\sum (-1)^n x^n$, $R = 1$, IOC $(-1, 1)$.

Integrate: $\\ln(1+x) = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{n+1}}{n+1} = \\sum_{n=1}^{\\infty} \\frac{(-1)^{n-1} x^n}{n}$

Still $R = 1$, but now:
- $x = 1$: $\\sum (-1)^{n-1}/n = \\ln 2$ (converges by AST)
- $x = -1$: $\\sum -1/n$ (diverges)

**IOC changed from $(-1, 1)$ to $(-1, 1]$!**

> **Key Fact:** Integration can ADD endpoint convergence; differentiation can REMOVE it.`
    },
    {
      id: 'rc4-derivative',
      type: 'text' as const,
      content: `### Differentiation Can Remove Endpoints

$f(x) = \\sum_{n=1}^{\\infty} \\frac{x^n}{n^2}$, $R = 1$, IOC $[-1, 1]$ (both endpoints converge as $p$-series with $p = 2$).

$$f'(x) = \\sum_{n=1}^{\\infty} \\frac{x^{n-1}}{n} = \\sum_{n=1}^{\\infty} \\frac{x^{n-1}}{n}$$

Still $R = 1$, but at $x = 1$: $\\sum 1/n$ diverges! IOC becomes $[-1, 1)$.

$$f''(x) = \\sum_{n=2}^{\\infty} \\frac{(n-1)x^{n-2}}{n} \\approx \\sum x^{n-2}$$

At $x = \\pm 1$: both diverge. IOC becomes $(-1, 1)$.

### Summary of Effect on Endpoints

| Operation | $R$ | Endpoints |
|-----------|-----|-----------|
| Original | Same | As given |
| Differentiation | Same | May lose convergence |
| Integration | Same | May gain convergence |`
    },
    {
      id: 'rc4-mc1',
      type: 'multiple-choice' as const,
      content: '**Operations and R**',
      exercise: {
        questions: [
          {
            question: 'If $\\sum c_n x^n$ has $R = 5$, then $\\sum n c_n x^{n-1}$ (the derivative) has $R =$',
            options: ['$5$', '$4$', '$6$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Differentiation preserves the radius of convergence.'
          },
          {
            question: 'If a power series converges at both endpoints, its derivative:',
            options: ['May converge at fewer endpoints (differentiation can remove convergence)', 'Converges at both endpoints', 'Diverges everywhere', 'Has $R = 0$'],
            correctAnswer: 0,
            explanation: 'Differentiation can turn $\\sum 1/n^2$ (converges) into $\\sum 1/n$ (diverges) at an endpoint.'
          },
          {
            question: '$\\frac{1}{1-x} = \\sum x^n$ ($R = 1$, IOC $(-1,1)$). Integrating gives $-\\ln(1-x) = \\sum x^{n+1}/(n+1)$. The new IOC:',
            options: ['$[-1, 1)$ (gains left endpoint, right still diverges)', '$(-1, 1)$', '$[-1, 1]$', '$(-1, 1]$'],
            correctAnswer: 0,
            explanation: '$x = -1$: $\\sum (-1)^{n+1}/(n+1)$ converges (AST). $x = 1$: $\\sum 1/(n+1)$ diverges. IOC: $[-1, 1)$.'
          }
        ]
      }
    },
    {
      id: 'rc4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Predict the IOC**',
      exercise: {
        dropdowns: [
          {
            label: "$f(x) = \\sum_{n=1}^{\\infty} x^n/n^3$, IOC $[-1, 1]$. IOC of $f'(x) = \\sum x^{n-1}/n^2$:",
            options: ['$[-1, 1]$ (still $p$-series with $p = 2 > 1$ at endpoints)', '$[-1, 1)$', '$(-1, 1)$', '$(-1, 1]$'],
            correctAnswers: ['$[-1, 1]$ (still $p$-series with $p = 2 > 1$ at endpoints)'],
            hints: ['At $x = 1$: $\\sum 1/n^2$ converges. At $x = -1$: $\\sum (-1)^{n-1}/n^2$ converges.'],
            explanation: 'Both endpoints still give convergent $p$-series. IOC stays $[-1, 1]$.'
          },
          {
            label: 'Same $f(x)$. IOC of $\\int f(x)\\,dx = \\sum x^{n+1}/(n(n+1) \\cdot 3) \\approx \\sum x^{n+1}/n^4$:',
            options: ['$[-1, 1]$ (even stronger convergence at endpoints)', '$(-1, 1)$', '$[-1, 1)$', '$(-1, 1]$'],
            correctAnswers: ['$[-1, 1]$ (even stronger convergence at endpoints)'],
            hints: ['Integration adds a factor of $1/(n+1)$, making endpoint convergence stronger.'],
            explanation: 'Integration improves convergence at endpoints. $\\sum 1/n^4$ converges. IOC: $[-1, 1]$.'
          }
        ]
      }
    },
    {
      id: 'rc4-input',
      type: 'input-box' as const,
      content: '**Identify R After Operation**',
      exercise: {
        question: 'If $\\sum_{n=0}^{\\infty} c_n(x-3)^n$ has $R = 7$, what is $R$ for $\\sum_{n=1}^{\\infty} n(n-1)c_n(x-3)^{n-2}$ (the second derivative)?',
        correctAnswer: '7',
        acceptableAnswers: ['7'],
        hints: ['Differentiation preserves $R$. This applies to any number of derivatives.'],
        explanation: 'Repeated differentiation preserves $R$. $R = 7$.'
      }
    },
    {
      id: 'rc4-summary',
      type: 'text' as const,
      content: `### Summary

- $R$ is preserved under differentiation and integration
- Endpoints can CHANGE: differentiation may lose them, integration may gain them
- Always recheck endpoints after differentiating or integrating

> **Next:** Part 5 — AP Exam Strategies.`
    }
  ]
};
