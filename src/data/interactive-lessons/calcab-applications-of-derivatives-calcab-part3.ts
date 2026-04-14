export const calcabAppsDerivativesPart3Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps3-intro',
      type: 'text' as const,
      content: `# 📈 Applications of Derivatives

**Part 3 of 7 — Absolute (Global) Extrema**

### Extreme Value Theorem (EVT)

$$\\boxed{\\text{If } f \\text{ is continuous on } [a,b], \\text{ then } f \\text{ attains an absolute max and absolute min on } [a,b].}$$

> **Key Fact:** The EVT has TWO hypotheses: (1) $f$ is continuous, (2) the interval is CLOSED $[a,b]$. If either fails, the conclusion is NOT guaranteed.

| Hypothesis Fails | Example | What Goes Wrong |
|:---:|:---:|:---:|
| Not continuous | $f(x) = \\frac{1}{x}$ on $[-1,1]$ | Blows up at $x = 0$ |
| Not closed | $f(x) = x$ on $(0,1)$ | Can get arbitrarily close to 0 and 1 but never reach them |
| Both fail | $f(x) = \\tan(x)$ on $(-\\frac{\\pi}{2}, \\frac{\\pi}{2})$ | Unbounded, open interval |`
    },
    {
      id: 'apps3-method',
      type: 'text' as const,
      content: `### Candidates Test (Closed Interval Method)

$$\\boxed{\\text{Abs. extrema on } [a,b]: \\text{ compare } f \\text{ at all critical points AND endpoints}}$$

| Step | Action | Detail |
|:---:|:---:|:---:|
| 1 | Find $f'(x)$ | Differentiate |
| 2 | Find critical points | Where $f'(x) = 0$ or $f'(x)$ is undefined |
| 3 | Filter | Keep only critical points in $(a,b)$ |
| 4 | Evaluate | Compute $f$ at each critical point and at $a$ and $b$ |
| 5 | Compare | Largest = absolute max, Smallest = absolute min |

### Worked Example

Find the absolute extrema of $f(x) = x^3 - 3x + 1$ on $[-2, 2]$.

$f'(x) = 3x^2 - 3 = 3(x-1)(x+1) = 0$ → $x = \\pm 1$ (both in the interval).

| $x$ | $f(x)$ | Candidate Type |
|:---:|:---:|:---:|
| $-2$ | $-8+6+1 = -1$ | Endpoint |
| $-1$ | $-1+3+1 = 3$ | Critical point |
| $1$ | $1-3+1 = -1$ | Critical point |
| $2$ | $8-6+1 = 3$ | Endpoint |

$$\\boxed{\\text{Absolute max} = 3 \\text{ at } x = -1 \\text{ and } x = 2}$$
$$\\boxed{\\text{Absolute min} = -1 \\text{ at } x = -2 \\text{ and } x = 1}$$

> **AP Tip:** On free-response, you MUST evaluate at EVERY critical point AND both endpoints. Missing even one candidate can cost you points.`
    },
    {
      id: 'apps3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Absolute Extrema** 🎯',
      exercise: {
        questions: [
          {
            question: 'Find the absolute maximum of $f(x) = -x^2 + 4x - 1$ on $[0, 5]$.',
            options: ['$3$', '$4$', '$-1$', '$-6$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = -2x + 4 = 0$ at $x = 2$. Candidates: $f(0) = -1$, $f(2) = -4+8-1 = 3$, $f(5) = -25+20-1 = -6$. Absolute max = $3$.'
          },
          {
            question: 'Find the absolute minimum of $g(x) = x + \\frac{4}{x}$ on $[1, 8]$.',
            options: ['$4$', '$5$', '$8.5$', '$3$'],
            correctAnswer: 0,
            explanation: '$g\'(x) = 1 - \\frac{4}{x^2} = 0$ at $x = 2$. $g(1) = 5$, $g(2) = 4$, $g(8) = 8.5$. Absolute min = $4$.'
          },
          {
            question: 'Which function does NOT satisfy EVT on $[0, 2]$?',
            options: ['$f(x) = x^2$', '$f(x) = \\sin(x)$', '$f(x) = \\frac{1}{x-1}$', '$f(x) = |x-1|$'],
            correctAnswer: 2,
            explanation: '$f(x) = \\frac{1}{x-1}$ is discontinuous at $x = 1 \\in [0,2]$, so EVT does not apply.'
          }
        ]
      }
    },
    {
      id: 'apps3-open',
      type: 'text' as const,
      content: `### Absolute Extrema on Open or Infinite Intervals

The Candidates Test only works on **closed** intervals. For open intervals or $(-\\infty, \\infty)$:

| Interval Type | Strategy |
|:---:|:---:|
| Open $(a,b)$ | Find critical points, check limits as $x \\to a^+$ and $x \\to b^-$ |
| Half-open $[a, b)$ | Include endpoint $a$, check limit as $x \\to b^-$ |
| $(-\\infty, \\infty)$ | Only one critical point? Use 2nd Derivative Test |

> **Key Concept:** If $f$ has exactly ONE critical point on $(-\\infty,\\infty)$ and it's a local min, then it's also the **absolute min**. Same for max. This is extremely useful for optimization!

### Example: One Critical Point

$f(x) = e^x + e^{-x}$ on $(-\\infty, \\infty)$.

$f'(x) = e^x - e^{-x} = 0$ → $e^{2x} = 1$ → $x = 0$.

$f''(0) = e^0 + e^0 = 2 > 0$: local min. Only one critical point → **absolute min** $f(0) = 2$.`
    },
    {
      id: 'apps3-quiz2',
      type: 'multiple-choice' as const,
      content: '**EVT & Open Intervals** 🎯',
      exercise: {
        questions: [
          {
            question: '$f(x) = x^2 - 4x + 7$ on $(-\\infty, \\infty)$. Find the absolute minimum.',
            options: ['$3$', '$7$', '$0$', 'Does not exist'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 2x - 4 = 0$ at $x = 2$. $f\'\'(2) = 2 > 0$: local min. Only one critical point: $f(2) = 4 - 8 + 7 = 3$. Absolute min = $3$.'
          },
          {
            question: 'If $f$ is continuous on $[1, 5]$ and $f(1) = 3$, $f(3) = 7$, $f(5) = 2$, and $x = 3$ is the only critical point, what is the absolute max?',
            options: ['$7$', '$3$', '$2$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'By the Candidates Test, evaluate at endpoints and critical point: $f(1) = 3$, $f(3) = 7$, $f(5) = 2$. Absolute max = $7$.'
          }
        ]
      }
    },
    {
      id: 'apps3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify the extrema of $f(x) = 2x^3 - 9x^2 + 12x$ on $[0, 4]$** 🔍\n\n$f\'(x) = 6x^2 - 18x + 12 = 6(x-1)(x-2)$\n\nCandidates: $f(0) = 0$, $f(1) = 5$, $f(2) = 4$, $f(4) = 128 - 144 + 48 = 32$',
      exercise: {
        dropdowns: [
          {
            label: 'The absolute maximum is:',
            options: ['$f(0) = 0$', '$f(1) = 5$', '$f(2) = 4$', '$f(4) = 32$'],
            correctAnswers: ['$f(4) = 32$'],
            hints: ['Compare all four candidate values.'],
            explanation: 'The largest value is $f(4) = 32$.'
          },
          {
            label: 'The absolute minimum is:',
            options: ['$f(0) = 0$', '$f(1) = 5$', '$f(2) = 4$', '$f(4) = 32$'],
            correctAnswers: ['$f(0) = 0$'],
            hints: ['Compare all four candidate values.'],
            explanation: 'The smallest value is $f(0) = 0$.'
          },
          {
            label: '$x = 1$ is a:',
            options: ['Absolute max', 'Absolute min', 'Local max only', 'Local min only'],
            correctAnswers: ['Local max only'],
            hints: ['$f(1) = 5$ is not the largest overall, but $f\'$ changes from $+$ to $-$ at $x = 1$.'],
            explanation: '$f\'$ changes from positive to negative at $x = 1$: local max. But $f(4) = 32 > 5$, so it is not the absolute max.'
          }
        ]
      }
    },
    {
      id: 'apps3-input',
      type: 'input-box' as const,
      content: '**Find the absolute minimum.** ✍️',
      exercise: {
        question: 'Find the absolute minimum value of $f(x) = x^3 - 3x^2 - 9x + 5$ on $[-2, 4]$.\n\nHint: $f\'(x) = 3x^2 - 6x - 9 = 3(x-3)(x+1)$.',
        correctAnswer: '-22',
        acceptableAnswers: ['-22', '-22.0'],
        hints: [
          'Critical points: $x = -1$ and $x = 3$. Both are in $[-2, 4]$.',
          'Evaluate $f$ at $x = -2, -1, 3, 4$.',
          '$f(-2) = -8 - 12 + 18 + 5 = 3$, $f(-1) = -1 - 3 + 9 + 5 = 10$, $f(3) = 27 - 27 - 27 + 5 = -22$, $f(4) = 64 - 48 - 36 + 5 = -15$.'
        ],
        explanation: 'Candidates: $f(-2) = 3$, $f(-1) = 10$, $f(3) = -22$, $f(4) = -15$.\\n\\nThe smallest value is $f(3) = -22$.'
      }
    },
    {
      id: 'apps3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

$$\\boxed{\\text{Candidates Test: compare } f \\text{ at critical points + endpoints}}$$

| Concept | Key Rule |
|:---:|:---:|
| EVT | Continuous on $[a,b]$ → abs max and min exist |
| Candidates Test | Evaluate at CPs + endpoints; compare |
| Open intervals | No Candidates Test; use limits and single-CP shortcuts |
| One critical point | If only local min $\\Rightarrow$ absolute min (and vice versa) |
| AP justification | Must list ALL candidates and state why largest/smallest |

> **Up Next:** Part 4 — Curve Sketching.`
    }
  ]
};
