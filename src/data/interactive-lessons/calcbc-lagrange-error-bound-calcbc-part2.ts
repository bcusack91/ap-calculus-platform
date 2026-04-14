export const calcbcLagrangePart2Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'le2-intro',
      type: 'text' as const,
      content: `# Finding n for Desired Accuracy

**Part 2 of 7 — How Many Terms Do You Need?**

### The Key Question

AP problems often ask: "How many terms of the Taylor series are needed to approximate $f(x)$ within $\\varepsilon$?"

**Method:** Solve $\\frac{M \\cdot |x - c|^{n+1}}{(n+1)!} < \\varepsilon$ for $n$.

### Worked Example: $\\cos(0.5)$ to Within $10^{-6}$

Using $T_n(0.5)$ centered at $c = 0$. Since $M = 1$ for cosine:

$$\\frac{(0.5)^{n+1}}{(n+1)!} < 10^{-6}$$

| $n$ | $(0.5)^{n+1}/(n+1)!$ | $< 10^{-6}$? |
|-----|----------------------|-----------|
| 2 | $(0.5)^3/6 = 0.0208$ | No |
| 4 | $(0.5)^5/120 = 2.60 \\times 10^{-4}$ | No |
| 6 | $(0.5)^7/5040 = 1.55 \\times 10^{-6}$ | No |
| 8 | $(0.5)^9/362880 = 5.38 \\times 10^{-9}$ | **Yes** |

So we need at least $T_8$ (though for cosine, only even-powered terms are nonzero, so effectively $5$ nonzero terms).

> **Key Fact:** For trig/exponential functions, the factorial in the denominator eventually dominates any fixed $|x - c|^{n+1}$, guaranteeing convergence.`
    },
    {
      id: 'le2-systematic',
      type: 'text' as const,
      content: `### Systematic Approach for $e^x$

**Approximate $e^1$ using $T_n(1)$ centered at $0$ to within $10^{-4}$.**

$M = e^1 < 3$, so: $\\frac{3 \\cdot 1^{n+1}}{(n+1)!} < 10^{-4}$, i.e., $(n+1)! > 30000$.

| $n$ | $(n+1)!$ | $> 30000$? |
|-----|----------|-----------|
| 6 | $7! = 5040$ | No |
| 7 | $8! = 40320$ | **Yes** |

So $T_7(1)$ approximates $e$ to within $10^{-4}$.

### Special Case: Alternating Series

If the series alternates and satisfies the conditions of the AST, the alternating series error bound is **tighter**:

$$|R_n| \\le |a_{n+1}| \\quad \\text{(first omitted term)}$$

> **AP Tip:** On the AP exam, if the series alternates, the AST error bound is usually simpler. Use Lagrange when the series does NOT alternate or when explicitly asked.`
    },
    {
      id: 'le2-mc1',
      type: 'multiple-choice' as const,
      content: '**Determining Sufficient n**',
      exercise: {
        questions: [
          {
            question: 'To approximate $\\sin(1)$ within $10^{-5}$ using Maclaurin polynomials, which is the smallest $n$ that guarantees the bound? ($M = 1$)',
            options: ['$n = 7$ since $(1)^8/8! \\approx 2.48 \\times 10^{-5}$ fails, but $n = 9$ gives $(1)^{10}/10! \\approx 2.76 \\times 10^{-7}$', '$n = 5$', '$n = 3$', '$n = 11$'],
            correctAnswer: 0,
            explanation: 'Check: $1^8/8! = 1/40320 \\approx 2.48 \\times 10^{-5} > 10^{-5}$. So $n=7$ fails. $1^{10}/10! = 1/3628800 \\approx 2.76 \\times 10^{-7} < 10^{-5}$. $n = 9$ works.'
          },
          {
            question: 'Why might the alternating series error bound require fewer terms than Lagrange?',
            options: ['AST uses the exact next term, while Lagrange uses a max bound on the derivative', 'AST has a smaller $M$', 'Lagrange only works for polynomials', 'AST applies to all series'],
            correctAnswer: 0,
            explanation: 'The AST bound $|a_{n+1}|$ is the exact magnitude of the next term, while Lagrange bounds the derivative crudely over the whole interval.'
          },
          {
            question: 'For $e^{-x}$ at $x = 0.5$, which $M$ is appropriate for Lagrange?',
            options: ['$M = e^0 = 1$ since $|e^{-t}|$ is max at $t = 0$', '$M = e^{0.5}$', '$M = e^{-0.5}$', '$M = 0.5$'],
            correctAnswer: 0,
            explanation: '$f^{(n+1)}(t) = \\pm e^{-t}$. On $[0, 0.5]$, $|e^{-t}|$ achieves its max at $t = 0$: $M = e^0 = 1$.'
          }
        ]
      }
    },
    {
      id: 'le2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Term Count Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'To approximate $\\cos(0.1)$ within $10^{-8}$, the minimum $n$ is:',
            options: ['$n = 4$ since $(0.1)^5/5! = 10^{-5}/120 \\approx 8.33 \\times 10^{-8}$; try $n = 6$: $(0.1)^7/7! \\approx 1.98 \\times 10^{-11}$', '$n = 2$', '$n = 8$', '$n = 10$'],
            correctAnswers: ['$n = 4$ since $(0.1)^5/5! = 10^{-5}/120 \\approx 8.33 \\times 10^{-8}$; try $n = 6$: $(0.1)^7/7! \\approx 1.98 \\times 10^{-11}$'],
            hints: ['$M = 1$. Compute $(0.1)^{n+1}/(n+1)!$ for various $n$.'],
            explanation: '$n=4$: $(0.1)^5/120 \\approx 8.33 \\times 10^{-8}$: not $< 10^{-8}$. $n=6$: $(0.1)^7/5040 \\approx 1.98 \\times 10^{-11} < 10^{-8}$. $n = 6$.'
          },
          {
            label: 'For $e^{0.5}$ within $10^{-3}$ (center $0$, $M = 2$): minimum $n$:',
            options: ['$n = 4$ since $2(0.5)^5/5! = 2(1/32)/120 \\approx 5.2 \\times 10^{-4}$', '$n = 2$', '$n = 3$', '$n = 6$'],
            correctAnswers: ['$n = 4$ since $2(0.5)^5/5! = 2(1/32)/120 \\approx 5.2 \\times 10^{-4}$'],
            hints: ['$(0.5)^{n+1}$ shrinks rapidly. Compute $2(0.5)^{n+1}/(n+1)!$.'],
            explanation: '$n=3$: $2(0.5)^4/4! = 2(1/16)/24 \\approx 0.00521 > 10^{-3}$. $n=4$: $2(0.5)^5/5! = 2/3840 \\approx 5.2 \\times 10^{-4} < 10^{-3}$.'
          }
        ]
      }
    },
    {
      id: 'le2-input',
      type: 'input-box' as const,
      content: '**Finding n**',
      exercise: {
        question: 'What is the minimum degree $n$ such that $T_n(x)$ for $\\sin(0.5)$ (at $c = 0$) is accurate to within $10^{-8}$? Enter just the number.',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hints: ['$M = 1$. Check $(0.5)^{n+1}/(n+1)!$ starting from small $n$.', 'Try $n = 7$: $(0.5)^8/8! = 1/256/40320 \\approx 9.54 \\times 10^{-8}$. Not quite. $n = 9$: $(0.5)^{10}/10!$.'],
        explanation: '$n=7$: $(0.5)^8/8! \\approx 9.54 \\times 10^{-8} > 10^{-8}$. $n=9$: $(0.5)^{10}/10! = 1/1024/3628800 \\approx 2.69 \\times 10^{-10} < 10^{-8}$. Minimum $n = 9$.'
      }
    },
    {
      id: 'le2-summary',
      type: 'text' as const,
      content: `### Summary

- To find $n$: solve $M|x-c|^{n+1}/(n+1)! < \\varepsilon$
- Build a table — try different $n$ until the bound is small enough
- For alternating series, the AST error bound may require fewer terms
- The factorial always eventually dominates, so the series converges

> **Next:** Part 3 — Bounding Derivatives Strategically.`
    }
  ]
};
