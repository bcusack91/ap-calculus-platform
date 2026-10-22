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
| 7 | $(0.5)^8/40320 = 9.69 \\times 10^{-8}$ | **Yes** |

So $n = 7$ is enough: the bound for $T_7$ is below $10^{-6}$. For cosine the $x^7$ coefficient is $0$, so $T_7 = T_6 = 1 - \\frac{x^2}{2} + \\frac{x^4}{24} - \\frac{x^6}{720}$, which has only $4$ nonzero terms. (Checking only even $n$ would jump from $n = 6$ to $n = 8$ and ask for more terms than you need.)

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
            question: 'To approximate $\\sin(1)$ within $10^{-5}$ using Maclaurin polynomials, which is the smallest odd $n$ whose Lagrange bound $1^{n+1}/(n+1)!$ guarantees the accuracy? ($M = 1$)',
            options: ['$n = 9$', '$n = 7$', '$n = 5$', '$n = 11$'],
            correctAnswer: 0,
            explanation: 'Check: $n = 7$ gives $1^8/8! = 1/40320 \\approx 2.48 \\times 10^{-5}$, which is LARGER than $10^{-5}$, so $n = 7$ fails. $n = 9$ gives $1^{10}/10! = 1/3628800 \\approx 2.76 \\times 10^{-7} < 10^{-5}$, so $n = 9$ works. $n = 5$ gives $1/6! \\approx 1.4 \\times 10^{-3}$ (far too big), and $n = 11$ works but is not the smallest.'
          },
          {
            question: 'Why might the alternating series error bound require fewer terms than Lagrange?',
            options: ['AST uses the actual next term; Lagrange uses a worst-case $M$', 'AST always uses $M = 1$, which is smaller than Lagrange\'s $M$', 'Lagrange only applies to polynomials, not to infinite series', 'AST bounds the error by half the next term, not the whole term'],
            correctAnswer: 0,
            explanation: 'The AST bound $|a_{n+1}|$ is the exact magnitude of the next term, while Lagrange bounds the derivative crudely over the whole interval. AST has no $M$ at all, Lagrange is built for Taylor polynomials of any function, and the AST bound is the whole first omitted term, not half of it.'
          },
          {
            question: 'For $e^{-x}$ at $x = 0.5$, which $M$ is appropriate for Lagrange?',
            options: ['$M = e^{0} = 1$', '$M = e^{0.5} \\approx 1.65$', '$M = e^{-0.5} \\approx 0.61$', '$M = |x - c| = 0.5$'],
            correctAnswer: 0,
            explanation: '$f^{(n+1)}(t) = \\pm e^{-t}$. On $[0, 0.5]$, $|e^{-t}|$ is decreasing, so it achieves its max at $t = 0$: $M = e^0 = 1$. $e^{-0.5}$ is the minimum (the wrong endpoint), $e^{0.5}$ comes from dropping the minus sign, and $0.5$ is $|x - c|$, which is a different factor in the bound.'
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
            label: 'To approximate $\\cos(0.1)$ within $10^{-8}$, the smallest even $n$ whose Lagrange bound $(0.1)^{n+1}/(n+1)!$ is below $10^{-8}$ is:',
            options: ['$n = 6$', '$n = 4$', '$n = 2$', '$n = 8$'],
            correctAnswers: ['$n = 6$'],
            hints: ['$M = 1$. Compute $(0.1)^{n+1}/(n+1)!$ for various $n$.'],
            explanation: '$n=4$: $(0.1)^5/120 \\approx 8.33 \\times 10^{-8}$, which is NOT below $10^{-8}$. $n=6$: $(0.1)^7/5040 \\approx 1.98 \\times 10^{-11} < 10^{-8}$ ✓. So $n = 6$ ($n = 8$ also works but is not the smallest).'
          },
          {
            label: 'For $e^{0.5}$ within $10^{-3}$ (center $0$, $M = 2$): minimum $n$:',
            options: ['$n = 4$', '$n = 3$', '$n = 2$', '$n = 5$'],
            correctAnswers: ['$n = 4$'],
            hints: ['$(0.5)^{n+1}$ shrinks rapidly. Compute $2(0.5)^{n+1}/(n+1)!$.'],
            explanation: '$n=3$: $2(0.5)^4/4! = 2(1/16)/24 \\approx 0.00521 > 10^{-3}$, so $n = 3$ fails. $n=4$: $2(0.5)^5/5! = 2/3840 \\approx 5.2 \\times 10^{-4} < 10^{-3}$ ✓. (Writing $n!$ instead of $(n+1)!$ makes $n = 4$ look too big and pushes the answer to $5$.)'
          }
        ]
      }
    },
    {
      id: 'le2-input',
      type: 'input-box' as const,
      content: '**Finding n**',
      exercise: {
        question: 'For $\\sin(0.5)$ (at $c = 0$, $M = 1$), what is the smallest $n$ whose Lagrange bound $(0.5)^{n+1}/(n+1)!$ is below $10^{-8}$? Enter just the number.',
        correctAnswer: '8',
        acceptableAnswers: ['8'],
        hints: ['$M = 1$. Check $(0.5)^{n+1}/(n+1)!$ starting from small $n$.', '$n = 7$: $(0.5)^8/8! \\approx 9.69 \\times 10^{-8}$. Not quite. Try $n = 8$.'],
        explanation: '$n=7$: $(0.5)^8/8! \\approx 9.69 \\times 10^{-8} > 10^{-8}$. $n=8$: $(0.5)^9/9! = \\frac{1/512}{362880} \\approx 5.38 \\times 10^{-9} < 10^{-8}$. So $n = 8$. Because the $x^8$ coefficient of $\\sin x$ is $0$, $T_8 = T_7$: the degree-7 polynomial $x - \\frac{x^3}{6} + \\frac{x^5}{120} - \\frac{x^7}{5040}$ already has this accuracy.'
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
