export const calcabAppsDerivativesPart5Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps5-intro',
      type: 'text' as const,
      content: `# 📈 Applications of Derivatives

**Part 5 of 7 — Mean Value Theorem**

### Statement (MVT)

$$\\boxed{f'(c) = \\frac{f(b) - f(a)}{b - a} \\quad \\text{for some } c \\in (a,b)}$$

**Hypotheses** (BOTH required):
1. $f$ is **continuous** on $[a,b]$
2. $f$ is **differentiable** on $(a,b)$

**Geometric meaning:** There is a point where the **tangent line** is parallel to the **secant line** through $(a, f(a))$ and $(b, f(b))$.

> **Key Fact:** MVT says instantaneous rate of change EQUALS average rate of change somewhere in the interval. This is one of the most tested theorems on the AP exam.

### MVT vs Rolle's Theorem

| Theorem | Extra Condition | Conclusion |
|:---:|:---:|:---:|
| MVT | None | $f'(c) = \\frac{f(b)-f(a)}{b-a}$ |
| Rolle's | $f(a) = f(b)$ | $f'(c) = 0$ |

Rolle's is just MVT when the secant line is horizontal!`
    },
    {
      id: 'apps5-worked',
      type: 'text' as const,
      content: `### Worked Example 1

$f(x) = x^3$ on $[0, 2]$.

**Step 1:** Average rate = $\\frac{f(2)-f(0)}{2-0} = \\frac{8-0}{2} = 4$.

**Step 2:** Set $f'(c) = 4$: $3c^2 = 4$ → $c = \\frac{2\\sqrt{3}}{3} \\approx 1.155$.

Since $c \\in (0, 2)$: MVT confirmed. ✓

### Worked Example 2 (Table Data — AP Style)

| $x$ | $0$ | $2$ | $5$ | $9$ | $12$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $1$ | $4$ | $7$ | $13$ | $19$ |

$f$ is continuous and differentiable on $[0, 12]$.

Average rate on $[0, 12]$: $\\frac{19-1}{12-0} = \\frac{18}{12} = \\frac{3}{2}$.

MVT guarantees $f'(c) = \\frac{3}{2}$ for some $c \\in (0, 12)$.

> **AP Tip:** On free-response with table data, you can also apply MVT to sub-intervals. On $[2, 5]$: $\\frac{7-4}{5-2} = 1$. On $[5, 9]$: $\\frac{13-7}{9-5} = \\frac{3}{2}$. Since $f'$ takes values $1$ and $\\frac{3}{2}$ at different points, by IVT applied to $f'$, $f'$ takes every value between.`
    },
    {
      id: 'apps5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Mean Value Theorem** 🎯',
      exercise: {
        questions: [
          {
            question: 'For $f(x) = \\sqrt{x}$ on $[1, 9]$, find the value of $c$ guaranteed by MVT.',
            options: ['$c = 4$', '$c = 5$', '$c = 3$', '$c = 2$'],
            correctAnswer: 0,
            explanation: 'Average rate = $\\frac{3-1}{9-1} = \\frac{1}{4}$. Set $f\'(c) = \\frac{1}{2\\sqrt{c}} = \\frac{1}{4}$. Then $2\\sqrt{c} = 4$, $\\sqrt{c} = 2$, $c = 4$.'
          },
          {
            question: 'If $f$ is differentiable, $f(2) = 3$, and $f(5) = 15$, what does MVT guarantee?',
            options: ['$f\'(c) = 4$ for some $c \\in (2,5)$', '$f\'(c) = 5$ for some $c \\in (2,5)$', '$f(c) = 9$ for some $c \\in (2,5)$', 'Both A and C'],
            correctAnswer: 0,
            explanation: 'MVT: $f\'(c) = \\frac{15-3}{5-2} = \\frac{12}{3} = 4$ for some $c \\in (2,5)$.'
          },
          {
            question: 'Which function does NOT satisfy the hypotheses of MVT on $[-1, 1]$?',
            options: ['$f(x) = x^2$', '$f(x) = |x|$', '$f(x) = \\sin(x)$', '$f(x) = e^x$'],
            correctAnswer: 1,
            explanation: '$|x|$ is continuous on $[-1,1]$ but NOT differentiable at $x = 0$ (sharp corner). MVT requires differentiability on $(-1,1)$.'
          }
        ]
      }
    },
    {
      id: 'apps5-consequences',
      type: 'text' as const,
      content: `### Important Consequences of MVT

| Consequence | Statement | Why It Matters |
|:---:|:---:|:---:|
| Speed analogy | If avg speed was 70 mph, you were going EXACTLY 70 at some moment | Real-world MVT interpretation |
| Bounding derivatives | If $|f'(x)| \\leq M$, then $|f(b)-f(a)| \\leq M|b-a|$ | Bounds function change |
| Zero derivative | If $f'(x) = 0$ for all $x$, then $f$ is constant | Proves constant functions |
| Equal derivatives | If $f'(x) = g'(x)$ for all $x$, then $f = g + C$ | Functions with same derivative differ by constant |

### Common MVT Justification Template (AP Free-Response)

"Since $f$ is continuous on $[a,b]$ and differentiable on $(a,b)$, by the Mean Value Theorem, there exists $c \\in (a,b)$ such that $f'(c) = \\frac{f(b)-f(a)}{b-a} = \\text{[value]}$."

> **Key Concept:** Always STATE the hypotheses (continuous, differentiable) before applying MVT. This is required for full credit on free-response.`
    },
    {
      id: 'apps5-quiz2',
      type: 'multiple-choice' as const,
      content: '**MVT Applications** 🎯',
      exercise: {
        questions: [
          {
            question: 'A car travels 120 miles in 2 hours. MVT guarantees the car was going exactly ___ mph at some moment.',
            options: ['50', '60', '70', '120'],
            correctAnswer: 1,
            explanation: 'Average speed = $\\frac{120}{2} = 60$ mph. MVT: instantaneous speed = average speed at some point.'
          },
          {
            question: 'If $f\'(x) > 0$ for all $x \\in (a,b)$, what does MVT tell you about $f(b)$ vs $f(a)$?',
            options: ['$f(b) > f(a)$', '$f(b) < f(a)$', '$f(b) = f(a)$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'MVT: $f\'(c) = \\frac{f(b)-f(a)}{b-a}$ for some $c$. Since $f\'(c) > 0$ and $b - a > 0$, we get $f(b) - f(a) > 0$.'
          }
        ]
      }
    },
    {
      id: 'apps5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Verify MVT for $f(x) = x^2 - 4x + 1$ on $[1, 5]$** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'Is $f$ continuous on $[1,5]$?',
            options: ['Yes — polynomial', 'No — has a discontinuity', 'Cannot determine'],
            correctAnswers: ['Yes — polynomial'],
            hints: ['Polynomials are continuous everywhere.'],
            explanation: 'All polynomials are continuous on any interval.'
          },
          {
            label: 'Average rate of change:',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswers: ['$2$'],
            hints: ['$f(1) = 1-4+1 = -2$, $f(5) = 25-20+1 = 6$.'],
            explanation: '$\\frac{f(5)-f(1)}{5-1} = \\frac{6-(-2)}{4} = \\frac{8}{4} = 2$.'
          },
          {
            label: 'The value of $c$ is:',
            options: ['$c = 2$', '$c = 3$', '$c = 4$', '$c = 5$'],
            correctAnswers: ['$c = 3$'],
            hints: ['Set $f\'(c) = 2$. Since $f\'(x) = 2x - 4$, solve $2c - 4 = 2$.'],
            explanation: '$f\'(c) = 2c - 4 = 2 \\Rightarrow c = 3$. And $3 \\in (1,5)$. ✓'
          }
        ]
      }
    },
    {
      id: 'apps5-input',
      type: 'input-box' as const,
      content: '**Apply MVT.** ✍️',
      exercise: {
        question: 'For $f(x) = \\ln(x)$ on $[1, e^2]$, MVT guarantees $f\'(c) = \\frac{f(e^2)-f(1)}{e^2-1}$.\n\nFind $c$ (express as a fraction: numerator is $e^2 - 1$, denominator is $2$).\n\nHint: $f\'(c) = \\frac{1}{c}$ and $f(e^2) = 2$.',
        correctAnswer: '(e^2-1)/2',
        acceptableAnswers: ['(e^2-1)/2', '(e^2 - 1)/2', '(e²-1)/2'],
        hints: [
          'Average rate: $\\frac{2-0}{e^2-1} = \\frac{2}{e^2-1}$.',
          'Set $\\frac{1}{c} = \\frac{2}{e^2-1}$.',
          'Solve: $c = \\frac{e^2-1}{2}$.'
        ],
        explanation: 'Average rate = $\\frac{\\ln(e^2)-\\ln(1)}{e^2-1} = \\frac{2}{e^2-1}$.\\n\\n$f\'(c) = \\frac{1}{c} = \\frac{2}{e^2-1}$, so $c = \\frac{e^2-1}{2} \\approx 3.19$.\\n\\nSince $1 < 3.19 < e^2 \\approx 7.39$: valid. ✓'
      }
    },
    {
      id: 'apps5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

$$\\boxed{f'(c) = \\frac{f(b)-f(a)}{b-a} \\quad \\text{(instantaneous = average somewhere)}}$$

| Concept | Key Rule |
|:---:|:---:|
| MVT hypotheses | Continuous on $[a,b]$, differentiable on $(a,b)$ |
| MVT conclusion | $f'(c) =$ average rate for some $c \\in (a,b)$ |
| Rolle's Theorem | MVT when $f(a) = f(b)$: then $f'(c) = 0$ |
| AP justification | MUST state both hypotheses before applying |
| Table data MVT | Compute average rate between table values |

> **Up Next:** Part 6 — L'Hôpital's Rule & Optimization.`
    }
  ]
};
