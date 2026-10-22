export const calcbcImproperPart4Data = {
  topicSlug: 'improper-integrals-calcbc',
  sections: [
    {
      id: 'imp4-intro',
      type: 'text' as const,
      content: `# Improper Integrals

**Part 4 of 7 — Two-Sided Integrals and Substitution**

On the AP exam every improper integral is decided the same way: **replace the problem bound with a variable, evaluate the definite integral, and take the limit** (LIM-6.A.2). This part applies that method to two harder situations: integrals over the whole real line, and integrals that need a substitution first.

### Integrals over $(-\\infty, \\infty)$

Split at any convenient point $c$ (usually $0$):

$$\\boxed{\\int_{-\\infty}^{\\infty} f(x)\\,dx = \\int_{-\\infty}^{c} f(x)\\,dx + \\int_{c}^{\\infty} f(x)\\,dx}$$

The integral converges **only if both pieces converge**. If either piece diverges, the whole integral diverges.

> **Key Fact:** You may not take one symmetric limit $\\lim_{t \\to \\infty}\\int_{-t}^{t} f(x)\\,dx$. For $f(x) = x$ that limit is $0$, yet $\\int_{-\\infty}^{\\infty} x\\,dx$ diverges because each half is infinite.`
    },
    {
      id: 'imp4-examples',
      type: 'text' as const,
      content: `### Worked Example 1: $\\int_{-\\infty}^{\\infty} \\frac{1}{1+x^2}\\,dx$

Split at $0$. For the right half,

$$\\int_0^{\\infty} \\frac{dx}{1+x^2} = \\lim_{t \\to \\infty} \\left[\\arctan x\\right]_0^t = \\lim_{t \\to \\infty} \\arctan t = \\frac{\\pi}{2}$$

By symmetry the left half is also $\\frac{\\pi}{2}$, so the integral converges to $\\pi$.

### Worked Example 2 (substitution): $\\int_0^{\\infty} x e^{-x^2}\\,dx$

Let $u = x^2$, $du = 2x\\,dx$. Change the bounds with the limit: $x = 0 \\Rightarrow u = 0$ and $x = t \\Rightarrow u = t^2$.

$$\\lim_{t \\to \\infty} \\int_0^{t^2} \\frac{1}{2}e^{-u}\\,du = \\lim_{t \\to \\infty} \\frac{1}{2}\\left(1 - e^{-t^2}\\right) = \\frac{1}{2}$$

### Worked Example 3 (substitution, Type I): $\\int_e^{\\infty} \\frac{1}{x(\\ln x)^2}\\,dx$

Let $u = \\ln x$, so the bounds become $u = 1$ to $u \\to \\infty$:

$$\\int_1^{\\infty} u^{-2}\\,du = \\lim_{t \\to \\infty}\\left[-\\frac{1}{u}\\right]_1^t = 1$$

The new integral is a $p$-integral with $p = 2 > 1$, which is why it converges.`
    },
    {
      id: 'imp4-mc1',
      type: 'multiple-choice' as const,
      content: '**Evaluating by Limits**',
      exercise: {
        questions: [
          {
            question: 'What is true about $\\int_{-\\infty}^{\\infty} \\frac{x}{1+x^2}\\,dx$?',
            options: [
              'It converges to $0$, because the integrand is odd',
              'It diverges, since each half is infinite',
              'It converges to $\\ln 2$, from the substitution $u = 1 + x^2$',
              'It converges to $\\pi$, the same value as for $\\frac{1}{1+x^2}$'
            ],
            correctAnswer: 1,
            explanation: 'On $[0, t]$ the integral is $\\frac{1}{2}\\ln(1+t^2) \\to \\infty$, so the right half diverges and so does the whole integral. Odd symmetry cannot cancel two infinite halves, $\\ln 2$ drops the $\\frac{1}{2}$ and stops at $t = 1$ (that finite piece is $\\frac{1}{2}\\ln 2$), and $\\pi$ belongs to $\\frac{1}{1+x^2}$, a different integrand.'
          },
          {
            question: '$\\int_0^{\\infty} x e^{-x^2}\\,dx = $',
            options: ['$\\frac{1}{4}$', '$\\infty$', '$\\frac{1}{2}$', '$2$'],
            correctAnswer: 2,
            explanation: 'With $u = x^2$ the integral becomes $\\frac{1}{2}\\int_0^{\\infty} e^{-u}\\,du = \\frac{1}{2}$. Using $\\frac{1}{2}$ twice gives $\\frac{1}{4}$, multiplying by $2$ instead of $\\frac{1}{2}$ gives $2$, and the integrand decays fast enough that the integral does not diverge.'
          }
        ]
      }
    },
    {
      id: 'imp4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Set Up and Evaluate**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int_{-\\infty}^{0} e^{x}\\,dx$ equals',
            options: ['$e$', '$\\infty$', '$0$', '$1$'],
            correctAnswers: ['$1$'],
            hints: ['Write it as $\\lim_{t \\to -\\infty} \\int_t^0 e^x\\,dx$.'],
            explanation: '$\\lim_{t \\to -\\infty}\\left[e^x\\right]_t^0 = \\lim_{t \\to -\\infty}(1 - e^t) = 1$, because $e^t \\to 0$ as $t \\to -\\infty$. The value $e$ comes from evaluating at $x = 1$, $0$ forgets the upper limit, and the integrand shrinks toward $0$ on the left, so it does not diverge.'
          },
          {
            label: 'The correct first step for $\\int_{-\\infty}^{\\infty} f(x)\\,dx$ is to',
            options: ['take $\\lim_{t \\to \\infty}\\int_{-t}^{t} f(x)\\,dx$', 'split it into two integrals at a point', 'check whether $f$ is an odd function', 'evaluate $f(x)$ as $x \\to \\pm\\infty$'],
            correctAnswers: ['split it into two integrals at a point'],
            hints: ['Each infinite bound needs its own limit.'],
            explanation: 'Each infinite bound gets its own limit, so split at a point and require both halves to converge. A single symmetric limit can hide divergence, odd symmetry only helps after convergence is known, and $f \\to 0$ at the ends does not guarantee convergence.'
          }
        ]
      }
    },
    {
      id: 'imp4-input',
      type: 'input-box' as const,
      content: '**Computation**',
      exercise: {
        question: 'Evaluate $\\int_1^{\\infty} \\frac{6}{x^4}\\,dx$.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0'],
        hints: ['$\\int_1^t 6x^{-4}\\,dx = \\left[-2x^{-3}\\right]_1^t$.', 'Let $t \\to \\infty$.'],
        explanation: '$\\lim_{t \\to \\infty}\\left(-\\frac{2}{t^3} + 2\\right) = 2$. This matches the $p$-integral result $\\int_1^{\\infty} x^{-p}\\,dx = \\frac{1}{p-1}$ with $p = 4$: $6 \\cdot \\frac{1}{3} = 2$.'
      }
    },
    {
      id: 'imp4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Situation | Method |
|------|------------|
| $\\int_{-\\infty}^{\\infty}$ | Split at a point; both halves must converge |
| Substitution needed | Change the bounds, keeping the limit variable |
| New integral is $\\int_1^{\\infty} u^{-p}\\,du$ | Converges exactly when $p > 1$ |

Convergence on the AP exam is shown by **evaluating the limit**: if it is a finite number, the integral converges to that number; otherwise it diverges.

> **Coming Up:** Part 5 covers **special results** and the way improper integrals appear on the AP exam.`
    }
  ]
};
