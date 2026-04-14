export const calcbcRadConvPart7Data = {
  topicSlug: 'radius-convergence-calcbc',
  sections: [
    {
      id: 'rc7-intro',
      type: 'text' as const,
      content: `# Comprehensive Review

**Part 7 of 7 — Radius & Interval of Convergence Mastery**

### Complete Process

$$\\boxed{\\text{Ratio Test} \\to R \\to \\text{Check endpoints} \\to \\text{State IOC}}$$

### Quick Reference

| To find $R$ | Use |
|-------------|-----|
| Standard series | $R = 1/\\lim|c_{n+1}/c_n|$ |
| Even/odd powers $x^{2n}$ | Find $R_u$ in $u = x^2$, then $|x| < \\sqrt{R_u}$ |
| After differentiation/integration | $R$ unchanged, recheck endpoints |

### Endpoint Test Cheat Sheet

| Endpoint series | Convergence? |
|----------------|-------------|
| $\\sum 1/n^p$, $p > 1$ | Yes ($p$-Series) |
| $\\sum 1/n$ | No (harmonic) |
| $\\sum (-1)^n b_n$, $b_n \\downarrow 0$ | Yes (AST) |
| $\\sum c \\neq 0$ | No (Div Test) |
| $\\sum 1/(n(\\ln n)^p)$, $p > 1$ | Yes (Integral) |
| $\\sum 1/(n \\ln n)$ | No (Integral) |`
    },
    {
      id: 'rc7-mc1',
      type: 'multiple-choice' as const,
      content: '**Review — Conceptual**',
      exercise: {
        questions: [
          {
            question: 'A power series has $R = 7$ centered at $a = -2$. It definitely DIVERGES for $x =$',
            options: ['$x = 10$ (since $|10 - (-2)| = 12 > 7$)', '$x = 0$', '$x = 4$', '$x = -9$ (need to check: $|-9 - (-2)| = 7 = R$)'],
            correctAnswer: 0,
            explanation: '$|10 + 2| = 12 > 7$. Outside the interval of convergence → diverges.'
          },
          {
            question: 'True or false: if a power series converges at $x = 8$ and diverges at $x = 12$, then $R \\ge 8$.',
            options: ['False — $R \\ge |8 - a|$, which depends on center $a$', 'True', 'Cannot determine', 'True only if $a = 0$'],
            correctAnswer: 0,
            explanation: 'If center $a = 5$, convergence at $x = 8$ means $R \\ge 3$, not $R \\ge 8$. $R \\ge |8 - a|$.'
          },
          {
            question: 'Differentiation of a power series:',
            options: ['Preserves $R$ but may change endpoint behavior', 'Increases $R$', 'Decreases $R$', 'Has no effect on convergence'],
            correctAnswer: 0,
            explanation: '$R$ stays the same. But convergent endpoints may become divergent.'
          }
        ]
      }
    },
    {
      id: 'rc7-mc2',
      type: 'multiple-choice' as const,
      content: '**Review — Computation**',
      exercise: {
        questions: [
          {
            question: '$\\sum_{n=1}^{\\infty} \\frac{(-3)^n (x+1)^n}{n^2}$. $R =$',
            options: ['$1/3$', '$3$', '$1/9$', '$9$'],
            correctAnswer: 0,
            explanation: '$c_n = (-3)^n/n^2$. $|c_{n+1}/c_n| = 3(n/(n+1))^2 \\to 3$. $R = 1/3$.'
          },
          {
            question: 'Same series. IOC:',
            options: ['$[-4/3, -2/3]$', '$(-4/3, -2/3)$', '$[-4/3, -2/3)$', '$(-4/3, -2/3]$'],
            correctAnswer: 0,
            explanation: 'Center $-1$, $R = 1/3$. $x = -2/3$: $\\sum (-3)^n(1/3)^n/n^2 = \\sum (-1)^n/n^2$, converges. $x = -4/3$: $\\sum (-3)^n(-1/3)^n/n^2 = \\sum 1/n^2$, converges. IOC: $[-4/3, -2/3]$.'
          }
        ]
      }
    },
    {
      id: 'rc7-dropdown',
      type: 'dropdown-select' as const,
      content: '**Review — Error Identification**',
      exercise: {
        dropdowns: [
          {
            label: 'Student finds $R = 5$ for $\\sum c_n(x-3)^n$ and writes "IOC: $(-2, 8)$" without checking endpoints. This:',
            options: ['Is incomplete — must check $x = -2$ and $x = 8$ separately', 'Is correct — Ratio Test determines everything', 'Is wrong — IOC should be $(-5, 5)$', 'Is fine for MC but not FRQ'],
            correctAnswers: ['Is incomplete — must check $x = -2$ and $x = 8$ separately'],
            hints: ['The Ratio Test gives $L = 1$ at endpoints — inconclusive.'],
            explanation: 'Must check endpoints with appropriate tests. The open interval is just the starting point.'
          },
          {
            label: 'Student writes $R = 1/\\lim|c_n|^{1/n}$ instead of using the Ratio Test. This is:',
            options: ['Valid — this is the Root Test formula for $R$', 'Invalid', 'Only works for geometric series', 'Only works when $c_n > 0$'],
            correctAnswers: ['Valid — this is the Root Test formula for $R$'],
            hints: ['The Root Test gives $R = 1/\\limsup |c_n|^{1/n}$ (Cauchy-Hadamard formula).'],
            explanation: 'Both Ratio and Root Tests can find $R$. The Cauchy-Hadamard formula uses $1/\\limsup|c_n|^{1/n}$.'
          }
        ]
      }
    },
    {
      id: 'rc7-input',
      type: 'input-box' as const,
      content: '**Review — Final Challenge**',
      exercise: {
        question: '$\\sum_{n=1}^{\\infty} \\frac{(x-5)^n}{n \\cdot 3^n}$. State the full IOC. (Use brackets/parens.)',
        correctAnswer: '[2, 8)',
        acceptableAnswers: ['[2, 8)', '[2,8)'],
        hints: ['$R = 3$, center $5$: open interval $(2, 8)$.', '$x = 8$: $\\sum 3^n/(n \\cdot 3^n) = \\sum 1/n$ diverges. $x = 2$: $\\sum (-3)^n/(n \\cdot 3^n) = \\sum (-1)^n/n$ converges (AST).'],
        explanation: '$x = 8$: harmonic, diverges. $x = 2$: alternating harmonic, converges. IOC: $[2, 8)$.'
      }
    },
    {
      id: 'rc7-summary',
      type: 'text' as const,
      content: `### Topic Complete!

You've mastered Radius & Interval of Convergence:
- Computing $R$ via Ratio or Root Test
- Handling special cases (even powers, missing terms)
- Endpoint testing with named convergence tests
- How differentiation/integration affect the IOC
- FRQ template for full credit

> **Key Takeaway:** Finding $R$ is the easy part. Endpoints are where you earn (or lose) the points on the AP exam.`
    }
  ]
};
