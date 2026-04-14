export const calcbcAlternatingPart5Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'as5-intro',
      type: 'text' as const,
      content: `# Alternating Series — AP Exam Strategies

**Part 5 of 7 — FRQ & MC Techniques**

### Common AP Question Types

| Type | What They Ask | Key Steps |
|------|-------------|-----------|
| AST verification | "Show the series converges" | State and verify all 3 conditions |
| Error bound | "Approximate with error < ε" | Find $N$ where $b_{N+1} < \\epsilon$ |
| Classification | "Absolutely, conditionally, or diverges?" | Test $\\sum |a_n|$, then $\\sum a_n$ |
| Endpoint analysis | "Find interval of convergence" | Test each endpoint separately |
| Taylor connection | "Use AST error bound for $P_n(x)$" | Identify alternating structure |

### FRQ Template: AST Verification

When the AP exam says "show the series converges using the Alternating Series Test":

1. Identify: "This is an alternating series with $b_n = \\ldots$"
2. **Positive:** "$b_n > 0$ for all $n \\ge 1$" ✓
3. **Decreasing:** "$b_{n+1} \\le b_n$ because $f'(x) = \\ldots < 0$" ✓
4. **Limit:** "$\\lim_{n\\to\\infty} b_n = \\ldots = 0$" ✓
5. Conclude: "Therefore, $\\sum (-1)^{n+1} b_n$ converges by the AST." ✓

> **AP Tip:** Omitting any of the three verifications costs points. Even if one seems "obvious," state it explicitly.`
    },
    {
      id: 'as5-pitfalls',
      type: 'text' as const,
      content: `### Common AP Mistakes to Avoid

**Mistake 1: Forgetting to check $b_n \\to 0$**

$\\sum (-1)^n \\frac{n}{n+1}$: Students assume AST applies because it alternates. But $b_n = n/(n+1) \\to 1 \\neq 0$. Diverges!

**Mistake 2: Using $a_n$ instead of $b_n$**

$b_n$ is the POSITIVE part. Don't check if $(-1)^n b_n \\to 0$ — check if $b_n \\to 0$.

**Mistake 3: Not showing "decreasing"**

Must show $b_{n+1} < b_n$ or use $f'(x) < 0$. Don't just assert it.

**Mistake 4: Confusing AST error bound with Lagrange**

| Alternating Error | Lagrange Error |
|------------------|---------------|
| $|R| \\le b_{N+1}$ | $|R_n(x)| \\le \\frac{M|x-c|^{n+1}}{(n+1)!}$ |
| No $M$ needed | Must bound $f^{(n+1)}$ |
| Only for alternating series | For any Taylor remainder |`
    },
    {
      id: 'as5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Problems**',
      exercise: {
        questions: [
          {
            question: 'On a BC FRQ, a student writes: "The series $\\sum (-1)^n/\\sqrt{n}$ converges by AST because $1/\\sqrt{n} \\to 0$." What score does this justification earn?',
            options: ['Partial credit — missing positivity and decreasing checks', 'Full credit — the key condition is stated', 'No credit — conclusion is wrong', 'Full credit — AST is named'],
            correctAnswer: 0,
            explanation: 'The student verified $b_n \\to 0$ but didn\'t explicitly state $b_n > 0$ or $b_n$ is decreasing. This earns partial credit — typically 1 out of 2 or 3 points.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{2n+1}$ is approximated by $S_3 = 1/3 - 1/5 + 1/7$. The error is at most:',
            options: ['$1/9$', '$1/7$', '$1/11$', '$1/5$'],
            correctAnswer: 0,
            explanation: '$S_3$ uses $n=1,2,3$. The first omitted term is $n=4$: $b_4 = 1/(2(4)+1) = 1/9$. Error $\\le 1/9$.'
          },
          {
            question: 'For the power series $\\sum (-1)^n x^n/(n+1)$, at $x = 1$ the series:',
            options: ['Converges conditionally', 'Converges absolutely', 'Diverges', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'At $x=1$: $\\sum (-1)^n/(n+1)$ — alternating, $b_n = 1/(n+1) \\to 0$, decreasing. Converges by AST. But $\\sum 1/(n+1)$ diverges (harmonic). Conditional convergence.'
          }
        ]
      }
    },
    {
      id: 'as5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Exam Strategy Decisions**',
      exercise: {
        dropdowns: [
          {
            label: 'Given $S = \\sum_{n=1}^\\infty (-1)^{n+1}/n^4$ and $S_3 \\approx 0.9459$, is $S_3$ an overestimate or underestimate?',
            options: ['Overestimate (3 terms, odd number, first term positive)', 'Underestimate', 'Exact', 'Cannot tell'],
            correctAnswers: ['Overestimate (3 terms, odd number, first term positive)'],
            hints: ['When the first term is positive and you stop after an odd number of terms, you\'ve added more than subtracted.'],
            explanation: '$S_3 = 1 - 1/16 + 1/81$. With an odd number of terms and positive first term, $S_3$ overshoots: $S_3 > S$.'
          },
          {
            label: 'The best strategy for "find the minimum number of terms for error < 0.0001" is:',
            options: ['Solve $b_{N+1} < 0.0001$ for $N$', 'Compute partial sums until they stabilize', 'Use the Ratio Test', 'Use Lagrange Error Bound'],
            correctAnswers: ['Solve $b_{N+1} < 0.0001$ for $N$'],
            hints: ['AST error bound: error ≤ first omitted term.'],
            explanation: 'Set $b_{N+1} < 0.0001$ and solve for $N$. This directly uses the AST error bound.'
          }
        ]
      }
    },
    {
      id: 'as5-input',
      type: 'input-box' as const,
      content: '**AP FRQ Practice**',
      exercise: {
        question: '$S_{100}$ approximates $\\sum_{n=1}^\\infty (-1)^{n+1}/n^2$. Is $S_{100}$ an overestimate or underestimate? (Enter "over" or "under")',
        correctAnswer: 'under',
        acceptableAnswers: ['under', 'underestimate', 'Under', 'Underestimate'],
        hints: ['100 is even. The series starts positive. After an even number of terms, the last operation was subtraction.'],
        explanation: '$S_{100}$: even number of terms, first term positive. The last term subtracted was $-1/100^2$, so $S_{100}$ undershoots: $S_{100} < S$ (underestimate).'
      }
    },
    {
      id: 'as5-summary',
      type: 'text' as const,
      content: `### Exam Strategy Summary

- Always verify ALL three AST conditions explicitly
- Error bound: $|S - S_N| \\le b_{N+1}$
- Overestimate vs. underestimate: depends on parity of $N$ and sign of first term
- Odd $N$ + positive first term → overestimate
- Even $N$ + positive first term → underestimate

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
