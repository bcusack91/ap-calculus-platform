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
$T_4$ includes terms through $x^4$, so the first omitted nonzero term is $-x^6/720$:
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
            options: ['Lagrange — the terms do not alternate', 'AST, since the terms eventually decrease', 'Either one, since both bounds apply to any series', 'Neither — $e^x$ grows too fast for an error bound'],
            correctAnswer: 0,
            explanation: 'For $x > 0$, all terms of the $e^x$ series are positive — it does not alternate, so AST does not apply no matter how the terms shrink. Lagrange applies to any Taylor polynomial of a smooth function.'
          },
          {
            question: 'The series for $e^{-x}$ at $x = 1$ gives $1 - 1 + 1/2 - 1/6 + \\cdots$ which alternates. Which bound can you use?',
            options: ['Either AST or Lagrange', 'Only Lagrange, since $e^{-x}$ is not a polynomial', 'Only AST, because the series alternates', 'Neither — the terms $1, 1$ do not decrease'],
            correctAnswer: 0,
            explanation: 'It alternates with terms whose sizes are non-increasing ($1, 1, 1/2, 1/6, \\ldots$) and go to $0$, so AST applies — equal first terms do not break it. Lagrange always applies. Both are valid; use AST for simplicity unless told otherwise.'
          },
          {
            question: 'A FRQ says "Use the Lagrange error bound to show..." but the series alternates. What should you do?',
            options: ['Use Lagrange as instructed; find $M$ and apply the formula', 'Use AST instead, since it gives a tighter bound', 'Use whichever of the two bounds gives the smaller value', 'State that AST is the better choice and use it'],
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
            label: '$\\ln(1.5) = 0.5 - 0.5^2/2 + 0.5^3/3 - \\cdots$ (alternating). Using $3$ terms, how do the AST and Lagrange ($M = 6$) bounds compare?',
            options: ['They agree: both equal $1/64 \\approx 0.0156$', 'AST gives $1/64$; Lagrange gives the smaller $1/384$', 'Lagrange gives $1/64$; AST gives the larger $1/24$', 'They cannot be compared without the true error'],
            correctAnswers: ['They agree: both equal $1/64 \\approx 0.0156$'],
            hints: ['Series alternates with decreasing terms. AST = next term magnitude.'],
            explanation: 'AST: $|a_4| = (0.5)^4/4 = 1/64 = 0.015625$. Lagrange: $6(0.5)^4/4! = 6/384 = 1/64$. They happen to agree here because $M = 3! = 6$ and $3!/4! = 1/4$; AST is still simpler to compute. $1/384$ forgets $M = 6$, and $1/24$ is the last included term, not the first omitted one.'
          },
          {
            label: 'For $e^2$ using $T_5(2)$ at $c = 0$: the bound to use is:',
            options: ['Lagrange — the terms do not alternate', 'AST, since the terms eventually decrease', 'Either one, since both apply to any series', 'Neither — $e^2$ is too large to bound'],
            correctAnswers: ['Lagrange — the terms do not alternate'],
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
