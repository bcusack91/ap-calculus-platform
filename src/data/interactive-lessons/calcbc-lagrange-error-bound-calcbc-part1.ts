export const calcbcLagrangePart1Data = {
  topicSlug: 'lagrange-error-bound-calcbc',
  sections: [
    {
      id: 'le1-intro',
      type: 'text' as const,
      content: `# Lagrange Error Bound — The Formula

**Part 1 of 7 — Understanding the Remainder**

### Taylor's Theorem with Remainder

If $f$ has $(n+1)$ continuous derivatives on an interval containing $c$ and $x$, then:

$$f(x) = T_n(x) + R_n(x)$$

where the **Lagrange remainder** (error) satisfies:

$$\\boxed{|R_n(x)| = |f(x) - T_n(x)| \\le \\frac{M \\cdot |x - c|^{n+1}}{(n+1)!}}$$

and $M = \\max_{t \\in I} |f^{(n+1)}(t)|$ on the interval $I$ between $c$ and $x$.

### Breaking Down Each Piece

| Symbol | Meaning | How to Find It |
|--------|---------|---------------|
| $n$ | Degree of Taylor polynomial | Given in the problem |
| $c$ | Center of expansion | Given |
| $x$ | Point of evaluation | Given |
| $M$ | Max of $\\lvert f^{(n+1)}\\rvert$ on $[c, x]$ | **This is the hard part** |
| $(n+1)!$ | Factorial in denominator | Compute directly |

> **AP Tip:** Finding $M$ is where most students struggle. You need to bound $|f^{(n+1)}(t)|$ for all $t$ between $c$ and $x$ — not just at the endpoints.`
    },
    {
      id: 'le1-finding-m',
      type: 'text' as const,
      content: `### Finding $M$: The Critical Step

**Strategy 1: Direct bound (trig functions)**

For $\\sin x$ and $\\cos x$: ALL derivatives are $\\pm \\sin$ or $\\pm \\cos$, so $|f^{(n+1)}(t)| \\le 1$ for all $t$.

$$M = 1 \\text{ for sine and cosine — always!}$$

**Strategy 2: Monotone bound ($e^x$)**

$f^{(n+1)}(x) = e^x$ is increasing, so $M = e^{x_0}$ where $x_0$ is the endpoint farther from center.

For crude bounds: $e < 3$, so use $M = 3$ when $x \\le 1$.

**Strategy 3: Given information**

AP problems often state: "Let $|f^{(n+1)}(t)| \\le K$ on $[a, b]$..."

### Example

Bound the error of $T_4(x)$ for $\\cos x$ at $x = 0.5$:

$|R_4(0.5)| \\le \\frac{1 \\cdot (0.5)^5}{5!} = \\frac{1/32}{120} = \\frac{1}{3840} \\approx 0.000260$`
    },
    {
      id: 'le1-mc1',
      type: 'multiple-choice' as const,
      content: '**Lagrange Basics**',
      exercise: {
        questions: [
          {
            question: 'In the Lagrange error bound, $M$ represents:',
            options: ['The maximum of $|f^{(n+1)}|$ on the interval', 'The value of $f^{(n+1)}$ at the center $c$ only', 'The maximum of $|f^{(n)}|$, the $n$th derivative, on the interval', 'The maximum of $|f|$ itself on the interval from $c$ to $x$'],
            correctAnswer: 0,
            explanation: '$M$ bounds the $(n+1)$st derivative over the entire interval between $c$ and $x$ — not just its value at $c$, and not the $n$th derivative or $f$ itself.'
          },
          {
            question: 'For $\\sin(0.3) \\approx T_5(0.3)$ (centered at $0$), the error bound is:',
            options: ['$(0.3)^6/6! \\approx 1.01 \\times 10^{-6}$', '$(0.3)^5/5! \\approx 2.0 \\times 10^{-5}$', '$(0.3)^6/5! \\approx 6.1 \\times 10^{-6}$', '$(0.3)^6/6 \\approx 1.22 \\times 10^{-4}$'],
            correctAnswer: 0,
            explanation: '$M = 1$ (for sin/cos). $|R_5| \\le (0.3)^6/6! = 0.000729/720 \\approx 1.01 \\times 10^{-6}$. Using $n$ instead of $n+1$ in the power and factorial gives about $2.0 \\times 10^{-5}$; mixing them gives about $6.1 \\times 10^{-6}$; dropping the factorial gives $1.22 \\times 10^{-4}$.'
          },
          {
            question: 'Why can we always use $M = 1$ for $\\sin x$ error bounds?',
            options: ['Every derivative of $\\sin x$ is bounded by $1$', '$\\sin x$ itself never exceeds $1$, so its error never does', 'The series alternates, so each term is at most $1$ in size', 'The radius of convergence of the $\\sin x$ series is $\\infty$'],
            correctAnswer: 0,
            explanation: 'All derivatives of $\\sin x$ are $\\pm \\sin x$ or $\\pm \\cos x$, all bounded by $1$ in absolute value. $M$ is about the $(n+1)$st derivative — not $\\sin x$ itself, the sizes of the series terms, or the radius of convergence.'
          }
        ]
      }
    },
    {
      id: 'le1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Finding M Practice**',
      exercise: {
        dropdowns: [
          {
            label: 'For $e^x$ at $c = 0$, $x = 1$, using $T_3$: $M$ should be:',
            options: ['$e^1 \\approx 2.718$', '$e^0 = 1$', '$e^{0.5} \\approx 1.649$', '$e^{1}/4! \\approx 0.113$'],
            correctAnswers: ['$e^1 \\approx 2.718$'],
            hints: ['$f^{(4)}(t) = e^t$, increasing on $[0, 1]$. Max at $t = 1$.'],
            explanation: '$f^{(4)}(t) = e^t$. On $[0,1]$, max is $e^1$. Using $M = e \\approx 2.718$ (or the cruder $M = 3$) is correct. $e^0$ is the minimum, $e^{0.5}$ is only the midpoint value, and the $4!$ belongs in the bound\'s denominator, not in $M$.'
          },
          {
            label: 'For $\\ln(1+x)$ at $c = 0$, $x = 0.5$, using $T_3$: $f^{(4)}(t) = -6/(1+t)^4$. $M = $',
            options: ['$6$', '$6/(1.5)^4 \\approx 1.19$', '$24$', '$6/16 = 0.375$'],
            correctAnswers: ['$6$'],
            hints: ['$|f^{(4)}(t)| = 6/(1+t)^4$ is decreasing. Max at $t = 0$.'],
            explanation: '$|f^{(4)}(t)| = 6/(1+t)^4$, decreasing on $[0, 0.5]$. Max at $t=0$: $M = 6$. Plugging in $t = 0.5$ gives the minimum $6/(1.5)^4$, and $6/16$ uses $t = 1$, which is outside the interval.'
          }
        ]
      }
    },
    {
      id: 'le1-input',
      type: 'input-box' as const,
      content: '**Error Bound Computation**',
      exercise: {
        question: '$|R_2(0.1)|$ for $e^x$ at $c = 0$ with $M = 3$. Compute the bound. Enter as a decimal.',
        correctAnswer: '0.0005',
        acceptableAnswers: ['0.0005', '0.00050', '5e-4'],
        hints: ['$|R_2| \\le 3 \\cdot (0.1)^3/3! = 3 \\cdot 0.001/6 = 0.0005$.'],
        explanation: '$|R_2(0.1)| \\le 3(0.1)^3/3! = 3(0.001)/6 = 0.003/6 = 0.0005$.'
      }
    },
    {
      id: 'le1-summary',
      type: 'text' as const,
      content: `### Summary

- Lagrange Error: $|R_n(x)| \\le M|x-c|^{n+1}/(n+1)!$
- $M$ = max of $|f^{(n+1)}|$ on the interval between $c$ and $x$
- For $\\sin/\\cos$: $M = 1$ always
- For $e^x$: $M = e^{\\max|x|}$ (or crude bound like $3$)

> **Next:** Part 2 — Finding $n$ for a Given Accuracy.`
    }
  ]
};
