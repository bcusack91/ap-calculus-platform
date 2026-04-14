export const calcbcRadConvPart3Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'rc3-intro',
      type: 'text' as const,
      content: `# Special Cases & Tricky Series

**Part 3 of 7 — Non-Standard Power Series**

### Series with Only Even or Odd Powers

$\\sum c_n x^{2n}$: substitute $u = x^2$ to get $\\sum c_n u^n$.

Find $R_u$ for the $u$-series, then $|x^2| < R_u \\Rightarrow |x| < \\sqrt{R_u}$.

**Example:** $\\cos x = \\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(2n)!}$

Ratio of consecutive terms: $\\frac{x^2}{(2n+2)(2n+1)} \\to 0$ for all $x$. $R = \\infty$.

### Series with $(x - a)^{kn}$

$\\sum c_n (x - a)^{3n}$: let $u = (x-a)^3$. Find $R_u$, then $|x - a| < R_u^{1/3}$.

### Non-Integer Center Issues

$\\sum_{n=0}^{\\infty} \\frac{(x - \\pi)^n}{n!}$: center $a = \\pi$, $R = \\infty$ (it's $e^{x - \\pi}$).

> **Key Fact:** The center $a$ only shifts the interval. It never changes $R$ — the radius depends solely on the coefficients $c_n$.`
    },
    {
      id: 'rc3-missing-terms',
      type: 'text' as const,
      content: `### Series with Missing Terms

**$\\sin x = x - x^3/3! + x^5/5! - \\cdots$**

The "missing" even terms have coefficient $0$. You can't directly use $|c_{n+1}/c_n|$ because of division by zero.

**Fix:** Use the Ratio Test on the actual (nonzero) terms:

$$\\left|\\frac{a_{n+1}}{a_n}\\right| = \\frac{x^2}{(2n+2)(2n+1)} \\to 0$$

$R = \\infty$.

### Bessel-Type Series

$$\\sum_{n=0}^{\\infty} \\frac{(-1)^n x^{2n}}{(n!)^2 \\cdot 4^n}$$

Ratio of consecutive terms (in $x^2$):

$$\\frac{|x|^2}{4(n+1)^2} \\to 0 \\quad \\Rightarrow \\quad R = \\infty$$

### Summary of Special Cases

| Type | Strategy |
|------|----------|
| Only even/odd powers | Substitute $u = x^k$ |
| Missing terms | Apply Ratio Test to nonzero terms |
| Shifted center | $R$ unchanged; interval shifts |
| $(c_n)$ with formula involving $(-1)^n$ | Take absolute value in Ratio Test |`
    },
    {
      id: 'rc3-mc1',
      type: 'multiple-choice' as const,
      content: '**Special Cases**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=0}^{\\infty} \\frac{x^{2n}}{9^n}$. The radius of convergence (in $x$) is:',
            options: ['$3$ (since $|x^2| < 9$ gives $|x| < 3$)', '$9$', '$1/9$', '$81$'],
            correctAnswer: 0,
            explanation: 'In $u = x^2$: $\\sum (u/9)^n$, geometric, $R_u = 9$. In $x$: $|x| < \\sqrt{9} = 3$.'
          },
          {
            question: 'For $\\sum n! (x-2)^n$, the IOC is:',
            options: ['$\\{2\\}$ only ($R = 0$)', '$(1, 3)$', '$(-\\infty, \\infty)$', '$[1, 3]$'],
            correctAnswer: 0,
            explanation: '$|c_{n+1}/c_n| = (n+1) \\to \\infty$. $R = 0$. Converges only at $x = 2$.'
          },
          {
            question: 'Two power series are centered at different points but have the same coefficients. Their radii of convergence are:',
            options: ['Equal ($R$ depends only on coefficients)', 'Different (center affects $R$)', 'Cannot determine', 'One is always larger'],
            correctAnswer: 0,
            explanation: '$R$ depends on $\\lim |c_{n+1}/c_n|$, which involves only the coefficients.'
          }
        ]
      }
    },
    {
      id: 'rc3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Non-Standard Series**',
      exercise: {
        dropdowns: [
          {
            label: '$\\sum_{n=0}^{\\infty} \\frac{(x+1)^{3n}}{8^n}$. Let $u = (x+1)^3$. $R_u = 8$, so $R_x =$',
            options: ['$2$ (since $|x+1| < 8^{1/3} = 2$)', '$8$', '$8^{1/3} = 2$', '$512$'],
            correctAnswers: ['$2$ (since $|x+1| < 8^{1/3} = 2$)'],
            hints: ['Geometric in $u$: $|u| < 8$. Then $|(x+1)^3| < 8 \\Rightarrow |x+1| < 2$.'],
            explanation: '$|x+1|^3 < 8 \\Rightarrow |x+1| < 2$. $R = 2$, IOC centered at $-1$: $(-3, 1)$ (check endpoints).'
          },
          {
            label: '$\\sum_{n=1}^{\\infty} \\frac{x^n}{n \\cdot (\\ln n)^2}$ ($n \\ge 2$). At $x = 1$: $\\sum 1/(n(\\ln n)^2)$. This:',
            options: ['Converges (Integral Test: $\\int 1/(x(\\ln x)^2)\\,dx$ converges)', 'Diverges', 'Inconclusive', 'Converges by AST'],
            correctAnswers: ['Converges (Integral Test: $\\int 1/(x(\\ln x)^2)\\,dx$ converges)'],
            hints: ['$\\int_2^{\\infty} 1/(x(\\ln x)^2)\\,dx$: let $u = \\ln x$, $du = dx/x$. Get $\\int 1/u^2\\,du$.'],
            explanation: '$\\int 1/u^2\\,du = -1/u$, which converges. So $\\sum 1/(n(\\ln n)^2)$ converges.'
          }
        ]
      }
    },
    {
      id: 'rc3-input',
      type: 'input-box' as const,
      content: '**Compute R**',
      exercise: {
        question: 'Find $R$ for $\\sum_{n=0}^{\\infty} \\frac{n! \\cdot x^{2n}}{(2n)!}$. Enter "infinity" if infinite.',
        correctAnswer: 'infinity',
        acceptableAnswers: ['infinity', 'inf', 'Infinity'],
        hints: ['In terms of $u = x^2$: ratio $= u(n+1)/((2n+2)(2n+1)) \\to 0$.'],
        explanation: 'Ratio $\\to 0$ for any $x$. $R = \\infty$.'
      }
    },
    {
      id: 'rc3-summary',
      type: 'text' as const,
      content: `### Summary

- Even/odd power series: substitute and adjust $R$ with a root
- Missing terms: apply Ratio Test to consecutive nonzero terms
- Center only shifts the interval, not $R$
- Endpoint tests may involve Integral Test for unusual series

> **Next:** Part 4 — Differentiation and Integration of Power Series.`
    }
  ]
};
