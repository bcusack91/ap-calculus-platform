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
| $M$ | Max of $|f^{(n+1)}|$ on $[c, x]$ | **This is the hard part** |
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
            options: ['The maximum of $|f^{(n+1)}|$ on the interval', 'The value of $f^{(n+1)}(c)$', 'The maximum of $|f|$ on the interval', 'The number of terms used'],
            correctAnswer: 0,
            explanation: '$M$ bounds the $(n+1)$st derivative over the entire interval between $c$ and $x$.'
          },
          {
            question: 'For $\\sin(0.3) \\approx T_5(0.3)$ (centered at $0$), the error bound is:',
            options: ['$(0.3)^6/6! = 7.29 \\times 10^{-4}/720 \\approx 1.01 \\times 10^{-6}$', '$(0.3)^5/5!$', '$(0.3)^6/5!$', '$\\sin(0.3)^6/6!$'],
            correctAnswer: 0,
            explanation: '$M = 1$ (for sin/cos). $|R_5| \\le (0.3)^6/6! = 0.000729/720 \\approx 1.01 \\times 10^{-6}$.'
          },
          {
            question: 'Why can we always use $M = 1$ for $\\sin x$ error bounds?',
            options: ['Every derivative of $\\sin x$ satisfies $|f^{(k)}(t)| \\le 1$', '$\\sin(0) = 0$ and $\\sin(\\pi/2) = 1$', 'The series alternates', 'The radius of convergence is $\\infty$'],
            correctAnswer: 0,
            explanation: 'All derivatives of $\\sin x$ are $\\pm \\sin x$ or $\\pm \\cos x$, all bounded by $1$ in absolute value.'
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
            options: ['$e^1 \\approx 2.718$ (or use $M = 3$ as crude bound)', '$e^0 = 1$', '$1$', '$e^{0.5}$'],
            correctAnswers: ['$e^1 \\approx 2.718$ (or use $M = 3$ as crude bound)'],
            hints: ['$f^{(4)}(t) = e^t$, increasing on $[0, 1]$. Max at $t = 1$.'],
            explanation: '$f^{(4)}(t) = e^t$. On $[0,1]$, max is $e^1$. Using $M = e \\approx 2.718$ (or $M = 3$).'
          },
          {
            label: 'For $\\ln(1+x)$ at $c = 0$, $x = 0.5$, using $T_3$: $f^{(4)}(t) = -6/(1+t)^4$. $M = $',
            options: ['$6$ (at $t = 0$: $|{-6}/(1+0)^4| = 6$)', '$6/(1.5)^4$', '$24$', '$6/16$'],
            correctAnswers: ['$6$ (at $t = 0$: $|{-6}/(1+0)^4| = 6$)'],
            hints: ['$|f^{(4)}(t)| = 6/(1+t)^4$ is decreasing. Max at $t = 0$.'],
            explanation: '$|f^{(4)}(t)| = 6/(1+t)^4$, decreasing on $[0, 0.5]$. Max at $t=0$: $M = 6$.'
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
