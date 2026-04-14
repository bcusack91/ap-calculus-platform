export const calcbcLagrangePart4Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'le4-intro',
      type: 'text' as const,
      content: `# Lagrange vs. AST Error Bounds

**Part 4 of 7 — Choosing the Right Error Bound**

### Two Error Bound Tools

| Feature | Lagrange Error Bound | AST Error Bound |
|---------|---------------------|-----------------|
| Formula | $M|x-c|^{n+1}/(n+1)!$ | $|a_{n+1}|$ |
| Requires | Bound on $(n+1)$st derivative | Alternating, decreasing, $\\to 0$ |
| Applies to | **Any** Taylor polynomial | **Alternating** series only |
| Tightness | Often overestimates | Usually tighter |
| AP usage | Required when NOT alternating | Simpler when applicable |

### When to Use Each

$$\\boxed{\\text{Alternating series} \\Rightarrow \\text{AST bound (simpler)}}$$
$$\\boxed{\\text{Non-alternating or "Use Lagrange"} \\Rightarrow \\text{Lagrange bound}}$$

> **Key Fact:** Even when a series alternates, the AP may say "Use the Lagrange error bound" — then you MUST use Lagrange, not AST.`
    },
    {
      id: 'le4-comparison',
      type: 'text' as const,
      content: `### Side-by-Side Comparison

**Approximate $\\cos(0.5)$ using $T_4(0.5)$ centered at $0$.**

$\\cos x = 1 - x^2/2 + x^4/24 - x^6/720 + \\cdots$

**AST Bound:**
First omitted term: $|a_5| = (0.5)^6/720 \\approx 2.17 \\times 10^{-5}$

Actually, $T_4$ includes terms through $x^4$. The next nonzero term is $-x^6/720$:
$$|\\text{error}| \\le (0.5)^6/720 = 1/46080 \\approx 2.17 \\times 10^{-5}$$

**Lagrange Bound:**
$|R_4(0.5)| \\le M(0.5)^5/5! = 1 \\cdot (0.5)^5/120 = 1/3840 \\approx 2.60 \\times 10^{-4}$

**Comparison:** AST gives $2.17 \\times 10^{-5}$; Lagrange gives $2.60 \\times 10^{-4}$.

The AST bound is about **12× tighter** because it accounts for the fact that the $x^5$ coefficient is $0$ in the cosine series, while Lagrange does not.

> **AP Tip:** When both apply, the AST bound is usually better — but read the problem carefully. "Use Lagrange" means Lagrange, even if AST is tighter.`
    },
    {
      id: 'le4-mc1',
      type: 'multiple-choice' as const,
      content: '**Choosing the Right Bound**',
      exercise: {
        questions: [
          {
            question: 'The Maclaurin series for $e^x = 1 + x + x^2/2! + \\cdots$ is NOT alternating (for $x > 0$). Which bound must you use?',
            options: ['Lagrange (series does not alternate)', 'AST (terms decrease)', 'Either works', 'Neither — $e^x$ has no error bound'],
            correctAnswer: 0,
            explanation: 'For $x > 0$, all terms of $e^x$ series are positive — it does not alternate. Must use Lagrange.'
          },
          {
            question: 'The series for $e^{-x}$ at $x = 1$ gives $1 - 1 + 1/2 - 1/6 + \\cdots$ which alternates. Which bound can you use?',
            options: ['Either AST or Lagrange (both valid; AST simpler)', 'Only Lagrange', 'Only AST', 'Neither'],
            correctAnswer: 0,
            explanation: 'It alternates with decreasing terms, so AST applies. Lagrange always applies. Use AST for simplicity unless told otherwise.'
          },
          {
            question: 'A FRQ says "Use the Lagrange error bound to show..." but the series alternates. What should you do?',
            options: ['Use Lagrange as instructed; find $M$ and apply the formula', 'Use AST since it is tighter', 'Use whichever gives a smaller bound', 'State that AST is better and use it'],
            correctAnswer: 0,
            explanation: 'When the problem specifies "Lagrange error bound," you MUST use it. Using AST will not receive credit.'
          }
        ]
      }
    },
    {
      id: 'le4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Bound Selection Practice**',
      exercise: {
        dropdowns: [
          {
            label: '$\\ln(1.5) = 0.5 - 0.5^2/2 + 0.5^3/3 - \\cdots$ (alternating). Using $3$ terms, the better bound is:',
            options: ['AST: $|a_4| = (0.5)^4/4 = 1/64 \\approx 0.0156$', 'Lagrange: $M(0.5)^4/4!$ with $M = 6$', 'Both give exactly the same result', 'Cannot determine without more info'],
            correctAnswers: ['AST: $|a_4| = (0.5)^4/4 = 1/64 \\approx 0.0156$'],
            hints: ['Series alternates with decreasing terms. AST = next term magnitude.'],
            explanation: 'AST: $|a_4| = (0.5)^4/4 = 0.015625$. Lagrange: $6(0.5)^4/4! = 6/384 = 0.015625$. They happen to agree here because $M = n!/1^{n+1}$ for $\\ln(1+x)$, but AST is simpler to compute.'
          },
          {
            label: 'For $e^2$ using $T_5(2)$ at $c = 0$: the bound to use is:',
            options: ['Lagrange ($e^x$ at $x = 2 > 0$ does NOT alternate)', 'AST (terms decrease)', 'Either works', 'No bound exists'],
            correctAnswers: ['Lagrange ($e^x$ at $x = 2 > 0$ does NOT alternate)'],
            hints: ['$e^x = 1 + x + x^2/2! + \\cdots$ — all terms positive for $x > 0$.'],
            explanation: 'All terms positive when $x = 2$: no alternation, no AST. Lagrange is the only option.'
          }
        ]
      }
    },
    {
      id: 'le4-input',
      type: 'input-box' as const,
      content: '**Bound Comparison**',
      exercise: {
        question: 'For $\\sin(0.5)$ using $T_5(0.5)$ at $c = 0$: compute the Lagrange bound $|R_5|$. Express as a fraction.',
        correctAnswer: '1/46080',
        acceptableAnswers: ['1/46080', '0.0000217', '2.17e-5'],
        hints: ['$M = 1$, $|R_5| \\le 1 \\cdot (0.5)^6/6!$.', '$(0.5)^6 = 1/64$, $6! = 720$.'],
        explanation: '$|R_5| \\le (0.5)^6/6! = (1/64)/720 = 1/46080 \\approx 2.17 \\times 10^{-5}$.'
      }
    },
    {
      id: 'le4-summary',
      type: 'text' as const,
      content: `### Summary

- AST bound: simpler, tighter, only for alternating series
- Lagrange bound: universal, requires $M$
- AP exam: use whichever is specified; default to AST when series alternates
- When both apply, AST ≤ Lagrange (AST never overestimates worse)

> **Next:** Part 5 — AP Exam FRQ Strategies.`
    }
  ]
};
