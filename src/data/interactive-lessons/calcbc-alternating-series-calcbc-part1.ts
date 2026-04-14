export const calcbcAlternatingPart1Data = {
  topicSlug: 'alternating-series-calcbc',
  sections: [
    {
      id: 'as1-intro',
      type: 'text' as const,
      content: `# Alternating Series — The Alternating Series Test

**Part 1 of 7 — Foundations**

### What Is an Alternating Series?

A series whose terms alternate in sign:

$$\\sum_{n=1}^\\infty (-1)^{n+1} b_n = b_1 - b_2 + b_3 - b_4 + \\cdots$$

or equivalently $\\sum (-1)^n b_n$ where $b_n > 0$.

### The Alternating Series Test (AST)

$$\\boxed{\\text{If } b_n > 0,\\ b_{n+1} \\le b_n \\text{ (decreasing), and } \\lim_{n\\to\\infty} b_n = 0, \\text{ then } \\sum (-1)^{n+1} b_n \\text{ converges.}}$$

### The Three Hypotheses

| # | Condition | Why It's Needed |
|---|----------|----------------|
| 1 | $b_n > 0$ | Terms truly alternate |
| 2 | $b_n$ eventually decreasing | Partial sums "squeeze" toward limit |
| 3 | $\\lim b_n = 0$ | Without this, Divergence Test kicks in |

> **AP Tip:** On the AP exam, you must explicitly verify ALL three conditions. Simply stating "by AST" is not sufficient for full credit.`
    },
    {
      id: 'as1-examples',
      type: 'text' as const,
      content: `### Classic Examples

**Alternating Harmonic Series:**

$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{n} = 1 - \\frac{1}{2} + \\frac{1}{3} - \\frac{1}{4} + \\cdots = \\ln 2$

Check: $b_n = 1/n > 0$ ✓, $1/(n+1) < 1/n$ ✓, $1/n \\to 0$ ✓ → Converges by AST.

**Non-Example:**

$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1} n}{n+1}$

$b_n = n/(n+1) \\to 1 \\neq 0$. The third condition FAILS. This series diverges by the Divergence Test.

### Why "Eventually Decreasing" Suffices

$b_n$ only needs to be decreasing for $n \\ge N$ (some fixed $N$). A finite number of "bad" terms don't affect convergence.

To show decreasing: verify $b_{n+1} < b_n$, or equivalently $b_{n+1}/b_n < 1$, or show $f'(x) < 0$ for the continuous version.`
    },
    {
      id: 'as1-mc1',
      type: 'multiple-choice' as const,
      content: '**Practice: Applying the AST**',
      exercise: {
        questions: [
          {
            question: 'Which condition is NOT required by the Alternating Series Test?',
            options: ['$b_n$ is differentiable', '$b_n > 0$', '$b_n$ is decreasing', '$\\lim b_n = 0$'],
            correctAnswer: 0,
            explanation: 'The AST requires positivity, (eventual) monotone decrease, and limit zero. Differentiability is not required — it\'s just a convenient way to check if $b_n$ is decreasing.'
          },
          {
            question: '$\\sum_{n=1}^\\infty \\frac{(-1)^n}{\\sqrt{n+3}}$. Does this converge by AST?',
            options: ['Yes — all three conditions met', 'No — $b_n$ not decreasing', 'No — $b_n \\not\\to 0$', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$b_n = 1/\\sqrt{n+3}$: positive ✓, decreasing ✓, $\\to 0$ ✓. Converges by AST.'
          },
          {
            question: '$\\sum_{n=1}^\\infty (-1)^n \\frac{n^2}{n^2+1}$. This series:',
            options: ['Diverges ($b_n \\to 1$)', 'Converges by AST', 'Converges absolutely', 'Inconclusive'],
            correctAnswer: 0,
            explanation: '$b_n = n^2/(n^2+1) \\to 1 \\neq 0$. Diverges by the Divergence Test (not even close to meeting AST conditions).'
          }
        ]
      }
    },
    {
      id: 'as1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Verify AST Conditions**',
      exercise: {
        dropdowns: [
          {
            label: 'For $\\sum (-1)^{n+1} \\frac{\\ln n}{n}$, is $b_n = \\ln n / n$ eventually decreasing?',
            options: ['Yes — $f\'(x) = (1-\\ln x)/x^2 < 0$ for $x > e$', 'No — $\\ln n$ increases', 'Cannot determine'],
            correctAnswers: ['Yes — $f\'(x) = (1-\\ln x)/x^2 < 0$ for $x > e$'],
            hints: ['Take $f(x) = \\ln x / x$ and find $f\'(x)$.'],
            explanation: '$f\'(x) = (1 - \\ln x)/x^2 < 0$ when $\\ln x > 1$, i.e., $x > e$. So $b_n$ is decreasing for $n \\ge 3$.'
          },
          {
            label: 'For the same series, does $b_n \\to 0$?',
            options: ['Yes — by L\'Hôpital\'s Rule, $\\ln n / n \\to 0$', 'No — $\\ln n \\to \\infty$', 'Depends on starting index'],
            correctAnswers: ['Yes — by L\'Hôpital\'s Rule, $\\ln n / n \\to 0$'],
            hints: ['Apply L\'Hôpital: $\\lim \\ln x / x = \\lim (1/x)/1 = 0$.'],
            explanation: '$\\lim_{n\\to\\infty} \\ln n / n = 0$ by L\'Hôpital. All three AST conditions met → converges.'
          }
        ]
      }
    },
    {
      id: 'as1-input',
      type: 'input-box' as const,
      content: '**Quick Check**',
      exercise: {
        question: 'For $\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{2n-1} = 1 - \\frac{1}{3} + \\frac{1}{5} - \\frac{1}{7} + \\cdots$, this famous series converges to $\\pi/k$. What is $k$?',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: ['This is the Leibniz formula: $\\arctan(1) = \\pi/4$.'],
        explanation: '$\\sum_{n=1}^\\infty \\frac{(-1)^{n+1}}{2n-1} = \\arctan(1) = \\pi/4$. So $k = 4$.'
      }
    },
    {
      id: 'as1-summary',
      type: 'text' as const,
      content: `### Summary

- Alternating Series Test: three conditions ($b_n > 0$, decreasing, $\\to 0$)
- Must verify ALL three explicitly on the AP exam
- "Eventually decreasing" is sufficient
- The AST tells you a series converges but does NOT give the sum

> **Next:** Part 2 — Alternating Series Error Bound (Remainder Estimation).`
    }
  ]
};
