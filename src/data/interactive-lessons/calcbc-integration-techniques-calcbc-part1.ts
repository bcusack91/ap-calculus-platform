export const calcbcIntTechPart1Data = {
  topicSlug: 'integration-techniques-calcbc',
  sections: [
    {
      id: 'it1-intro',
      type: 'text' as const,
      content: `# Advanced Integration Techniques

**Part 1 of 7 \u2014 Trigonometric Integrals**

AP Calculus BC requires mastery of integrals involving products and powers of trigonometric functions. This part covers the strategies for $\\sin^m x \\cos^n x$ integrals.`
    },
    {
      id: 'it1-oddpower',
      type: 'text' as const,
      content: `### Strategy: One Odd Power

If either $m$ or $n$ is odd, peel off one factor and use a Pythagorean identity.

**Case 1: $n$ is odd** (odd power of $\\cos$)
$$\\int \\sin^m x \\cos^{2k+1} x\\,dx = \\int \\sin^m x (1-\\sin^2 x)^k \\cos x\\,dx$$
Then substitute $u = \\sin x$.

**Case 2: $m$ is odd** (odd power of $\\sin$)
$$\\int \\sin^{2k+1} x \\cos^n x\\,dx = \\int (1-\\cos^2 x)^k \\cos^n x \\sin x\\,dx$$
Then substitute $u = \\cos x$.

> **Key Fact:** The odd-powered trig function \u201cdonates\u201d one factor to $du$, then the rest converts via $\\sin^2 x + \\cos^2 x = 1$.`
    },
    {
      id: 'it1-example1',
      type: 'text' as const,
      content: `### Worked Example: $\\int \\sin^3 x \\cos^2 x\\,dx$

$m = 3$ (odd), so peel off $\\sin x$ and convert:

| Step | Work |
|------|------|
| Rewrite | $\\int \\sin^2 x \\cos^2 x \\sin x\\,dx$ |
| Identity | $\\int (1-\\cos^2 x) \\cos^2 x \\sin x\\,dx$ |
| Let $u = \\cos x$ | $du = -\\sin x\\,dx$ |
| Substitute | $-\\int (1-u^2)u^2\\,du$ |
| Expand | $-\\int (u^2 - u^4)\\,du$ |
| Integrate | $-\\frac{u^3}{3} + \\frac{u^5}{5} + C$ |
| Back-substitute | $-\\frac{\\cos^3 x}{3} + \\frac{\\cos^5 x}{5} + C$ |

$$\\boxed{\\int \\sin^3 x \\cos^2 x\\,dx = -\\frac{\\cos^3 x}{3} + \\frac{\\cos^5 x}{5} + C}$$`
    },
    {
      id: 'it1-evenpower',
      type: 'text' as const,
      content: `### Strategy: Both Powers Even

When both $m$ and $n$ are even, use half-angle identities:

$$\\boxed{\\sin^2 x = \\frac{1 - \\cos 2x}{2} \\qquad \\cos^2 x = \\frac{1 + \\cos 2x}{2}}$$

### Example: $\\int \\sin^2 x \\cos^2 x\\,dx$

$$= \\int \\frac{1-\\cos 2x}{2} \\cdot \\frac{1+\\cos 2x}{2}\\,dx = \\frac{1}{4}\\int (1 - \\cos^2 2x)\\,dx$$

$$= \\frac{1}{4}\\int \\sin^2 2x\\,dx = \\frac{1}{4} \\cdot \\frac{1}{2}\\int (1-\\cos 4x)\\,dx = \\frac{x}{8} - \\frac{\\sin 4x}{32} + C$$

$$\\boxed{\\int \\sin^2 x \\cos^2 x\\,dx = \\frac{x}{8} - \\frac{\\sin 4x}{32} + C}$$`
    },
    {
      id: 'it1-mc1',
      type: 'multiple-choice' as const,
      content: '**Strategy Selection**',
      exercise: {
        questions: [
          {
            question: 'For $\\int \\sin^4 x \\cos^3 x\\,dx$, the correct strategy is:',
            options: [
              'Peel off $\\cos x$, substitute $u = \\sin x$',
              'Peel off $\\sin x$, substitute $u = \\cos x$',
              'Use half-angle identities',
              'Use integration by parts'
            ],
            correctAnswer: 0,
            explanation: '$\\cos$ has an odd power ($n=3$). Peel off $\\cos x$ as $du$, convert remaining $\\cos^2 x = 1 - \\sin^2 x$, then $u = \\sin x$.'
          },
          {
            question: 'For $\\int \\sin^2 x \\cos^4 x\\,dx$, the correct strategy is:',
            options: [
              'Half-angle identities (both powers even)',
              'Peel off $\\sin x$, substitute $u = \\cos x$',
              'Peel off $\\cos x$, substitute $u = \\sin x$',
              'Integration by parts'
            ],
            correctAnswer: 0,
            explanation: 'Both $m=2$ and $n=4$ are even. You must use half-angle identities repeatedly.'
          }
        ]
      }
    },
    {
      id: 'it1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the Substitution**',
      exercise: {
        dropdowns: [
          {
            label: '$\\int \\sin^5 x\\,dx$: What substitution?',
            options: ['$u = \\cos x$ (odd power of $\\sin$)', '$u = \\sin x$', 'Half-angle', 'No substitution needed'],
            correctAnswers: ['$u = \\cos x$ (odd power of $\\sin$)'],
            hints: ['$\\sin^5 x = \\sin^4 x \\cdot \\sin x = (1-\\cos^2 x)^2 \\sin x$.'],
            explanation: 'Odd power of $\\sin$: peel off $\\sin x$ for $du = -\\sin x\\,dx$, convert $\\sin^4 x = (1-\\cos^2 x)^2$, let $u = \\cos x$.'
          },
          {
            label: '$\\int \\cos^6 x\\,dx$: What strategy?',
            options: ['Half-angle (even power only)', '$u = \\sin x$', '$u = \\cos x$', 'Tabular method'],
            correctAnswers: ['Half-angle (even power only)'],
            hints: ['$\\cos^6 x = (\\cos^2 x)^3 = (\\frac{1+\\cos 2x}{2})^3$.'],
            explanation: 'Even power with no $\\sin$ factor: use $\\cos^2 x = \\frac{1+\\cos 2x}{2}$ and expand.'
          }
        ]
      }
    },
    {
      id: 'it1-input',
      type: 'input-box' as const,
      content: '**Computation Practice**',
      exercise: {
        question: 'Evaluate $\\int_0^{\\pi/2} \\sin^3 x\\,dx$. Using $u = \\cos x$: $-\\int_1^0 (1-u^2)\\,du = \\int_0^1 (1-u^2)\\,du$. What is the exact value? Express as a fraction $a/b$.',
        correctAnswer: '2/3',
        acceptableAnswers: ['2/3'],
        hints: ['$\\int_0^1 (1-u^2)\\,du = [u - u^3/3]_0^1 = 1 - 1/3$.', '$= 2/3$.'],
        explanation: '$\\int_0^1 (1-u^2)\\,du = 1 - \\frac{1}{3} = \\frac{2}{3}$.'
      }
    },
    {
      id: 'it1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

| Situation | Strategy |
|-----------|----------|
| One odd power | Peel off, Pythagorean identity, $u$-sub |
| Both even | Half-angle identities |
| $\\sin^m x$ only | Same rules (treat as $\\sin^m x \\cos^0 x$) |

> **Coming Up:** Part 2 covers **trigonometric substitution** \u2014 eliminating square roots by substituting trig functions.`
    }
  ]
};
