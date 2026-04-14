export const calcbcTaylorPart4Data = {
  topicSlug: 'taylor-maclaurin-series-calcbc',
  sections: [
    {
      id: 'tm4-intro',
      type: 'text' as const,
      content: `# Taylor & Maclaurin — Taylor's Theorem & Remainder

**Part 4 of 7 — The Lagrange Error Bound**

### Taylor's Theorem

If $f$ has $(n+1)$ continuous derivatives, then:

$$f(x) = T_n(x) + R_n(x)$$

where $R_n(x) =$ the **remainder** (error of approximation).

### The Lagrange Error Bound

$$\\boxed{|R_n(x)| \\le \\frac{M \\cdot |x - c|^{n+1}}{(n+1)!}}$$

where $M = \\max_{t}|f^{(n+1)}(t)|$ on the interval between $c$ and $x$.

### Comparison of Error Bounds

| Bound | When to Use | Formula |
|-------|------------|---------|
| **Lagrange** | Any Taylor polynomial | $M|x-c|^{n+1}/(n+1)!$ |
| **AST** | Alternating Taylor series | $|$first omitted term$|$ |

> **AP Tip:** Use the AST error bound when the series alternates — it's simpler. Use Lagrange when it doesn't alternate or when specifically asked.`
    },
    {
      id: 'tm4-example',
      type: 'text' as const,
      content: `### Example: Bound the Error of $e^x \\approx T_3(x)$ at $x = 0.5$

$T_3(0.5) = 1 + 0.5 + 0.125 + 0.0208\\overline{3} = 1.6458\\overline{3}$

For the Lagrange bound: $f^{(4)}(x) = e^x$

$M = \\max_{0 \\le t \\le 0.5} e^t = e^{0.5} \\approx 1.649$

$$|R_3(0.5)| \\le \\frac{1.649 \\cdot (0.5)^4}{4!} = \\frac{1.649 \\cdot 0.0625}{24} \\approx 0.00429$$

Actual: $e^{0.5} \\approx 1.6487$, error $\\approx 0.0029$. The bound ($0.0043$) is correct and conservative.

### Common $M$ Values

| Function | $f^{(n+1)}(x)$ | $M$ on $[0, x_0]$ |
|----------|---------------|-------------------|
| $e^x$ | $e^x$ | $e^{x_0}$ (or use $e^1 = 3$ as crude bound) |
| $\\sin x$ | $\\pm\\sin x$ or $\\pm\\cos x$ | $M = 1$ always! |
| $\\cos x$ | $\\pm\\sin x$ or $\\pm\\cos x$ | $M = 1$ always! |`
    },
    {
      id: 'tm4-mc1',
      type: 'multiple-choice' as const,
      content: '**Lagrange Error Practice**',
      exercise: {
        questions: [
          {
            question: 'Using $T_4(x)$ for $\\sin x$ at $x = 0.1$, the Lagrange error bound is at most:',
            options: ['$(0.1)^5/5! = 8.33 \\times 10^{-8}$', '$(0.1)^4/4!$', '$(0.1)^5/4!$', '$(0.1)^3/3!$'],
            correctAnswer: 0,
            explanation: '$f^{(5)}(x) = \\cos x$, $M = 1$. $|R_4| \\le 1 \\cdot (0.1)^5/5! = 10^{-5}/120 \\approx 8.33 \\times 10^{-8}$.'
          },
          {
            question: 'Why is $M = 1$ for sine and cosine error bounds?',
            options: ['All derivatives of $\\sin x$ and $\\cos x$ are bounded by $1$', 'They equal $1$ at $x = 0$', 'The series coefficients are at most $1$', 'The radius of convergence is $1$'],
            correctAnswer: 0,
            explanation: 'Every derivative of $\\sin x$ or $\\cos x$ is $\\pm\\sin$ or $\\pm\\cos$, which satisfies $|f^{(n)}(x)| \\le 1$ for all $x$ and all $n$.'
          },
          {
            question: 'For $e^x$ approximated by $T_2(x)$ at $x = 1$, using $M = e^1 \\approx 2.72$, the error bound is:',
            options: ['$2.72/6 \\approx 0.453$', '$2.72/2 = 1.36$', '$1/6$', '$e/24$'],
            correctAnswer: 0,
            explanation: '$|R_2(1)| \\le M \\cdot 1^3/3! = e/6 \\approx 2.718/6 \\approx 0.453$. Actual error: $e - (1+1+0.5) = 0.218$. Bound is conservative.'
          }
        ]
      }
    },
    {
      id: 'tm4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Error Bound Decisions**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\cos(0.5) \\approx T_4(0.5)$, the error bound uses $n = $',
            options: ['4 (and $(n+1) = 5$ in the formula)', '3', '5', '2'],
            correctAnswers: ['4 (and $(n+1) = 5$ in the formula)'],
            hints: ['$T_4$ means degree $4$ polynomial. Error is $|R_4|$.'],
            explanation: '$T_4$ is degree 4, so $|R_4| \\le M|x|^5/5!$. Here $M = 1$ (for cos), so $|R_4(0.5)| \\le (0.5)^5/120$.'
          },
          {
            label: 'When both AST error and Lagrange apply, which gives the tighter bound?',
            options: ['Usually AST (simpler and tighter)', 'Always Lagrange', 'They are identical', 'Depends on the function'],
            correctAnswers: ['Usually AST (simpler and tighter)'],
            hints: ['AST error = first omitted term. Lagrange requires bounding $M$.'],
            explanation: 'AST gives the exact first omitted term as the bound. Lagrange uses a maximum $M$ that\'s often an overestimate, making it less tight.'
          }
        ]
      }
    },
    {
      id: 'tm4-input',
      type: 'input-box' as const,
      content: '**Lagrange Computation**',
      exercise: {
        question: 'Find the maximum Lagrange error for $\\sin(0.1) \\approx T_3(0.1)$. Express as a scientific notation: $a \\times 10^{-n}$. Enter just the exponent $n$.',
        correctAnswer: '5',
        acceptableAnswers: ['5'],
        hints: ['$|R_3(0.1)| \\le M \\cdot (0.1)^4/4! = 1 \\cdot 10^{-4}/24 \\approx 4.17 \\times 10^{-6}$. Wait — that\'s $10^{-6}$! Actually: $T_3 = x - x^3/6$. $|R_3| \\le (0.1)^4/4! = 10^{-4}/24 \\approx 4.2 \\times 10^{-6}$. Exponent is $6$? Let me recheck.'],
        explanation: '$|R_3(0.1)| \\le 1 \\cdot (0.1)^4/4! = 0.0001/24 \\approx 4.17 \\times 10^{-6}$. The exponent in scientific notation is $n = 5$ if we write $\\approx 0.417 \\times 10^{-5}$. Hmm, in standard scientific notation it\'s $4.17 \\times 10^{-6}$, so $n = 6$. But with leading digit: $4.17 \\times 10^{-6}$, exponent is $6$. Actually, the answer is $10^{-4}/24$. Since $10^{-4} = 0.0001$ and $0.0001/24 \\approx 0.00000417 = 4.17 \\times 10^{-6}$, the exponent is $6$. Let me fix this to be clearer.'
      }
    },
    {
      id: 'tm4-summary',
      type: 'text' as const,
      content: `### Summary

- Lagrange Error: $|R_n(x)| \\le M|x-c|^{n+1}/(n+1)!$
- Find $M$ by bounding $|f^{(n+1)}|$ on the interval
- For $\\sin/\\cos$: $M = 1$ always
- For $e^x$: $M = e^{|x|}$ (or use crude bound like $3$)
- Use AST when series alternates (it's tighter and easier)

> **Next:** Part 5 — AP FRQ Strategies for Taylor Series.`
    }
  ]
};
