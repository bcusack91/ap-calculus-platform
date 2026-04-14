export const calcabAccumulationPart1Data = {
  topicSlug: 'accumulation-functions-calcab',
  sections: [
    {
      id: 'acc1-intro',
      type: 'text' as const,
      content: `# Accumulation Functions

**Part 1 of 7 — The Accumulation Concept**

### Table of Contents
1. The Accumulation Concept
2. Reading Graphs of $f$ to Analyze $F$
3. FTC Part 1 with Chain Rule
4. Net Change Applications
5. Average Value
6. Practice Workshop
7. Comprehensive Assessment

---

### What is an Accumulation Function?

$$\\boxed{F(x) = \\int_a^x f(t)\\,dt}$$

$F(x)$ measures **how much $f$ has accumulated** from $a$ to $x$.

### Key Properties at a Glance

| Property | Formula | Interpretation |
|:---:|:---:|:---:|
| Value at start | $F(a) = 0$ | Nothing accumulated yet |
| Derivative | $F'(x) = f(x)$ | Rate of accumulation = integrand |
| $F$ increasing | $f(x) > 0$ | Positive rate → accumulating |
| $F$ decreasing | $f(x) < 0$ | Negative rate → depleting |
| $F$ has local max | $f$ changes $+ \\to -$ | Rate switches from growth to decline |
| $F$ has local min | $f$ changes $- \\to +$ | Rate switches from decline to growth |
| $F$ concave up | $f'(x) > 0$ ($f$ increasing) | Rate is accelerating |
| $F$ concave down | $f'(x) < 0$ ($f$ decreasing) | Rate is decelerating |

> **Key Fact:** The accumulation function connects the three layers: $F$, $F' = f$, and $F'' = f'$.`
    },
    {
      id: 'acc1-worked',
      type: 'text' as const,
      content: `### Worked Example

Let $F(x) = \\int_0^x (2t - 4)\\,dt$.

| Quantity | Computation | Result |
|:---:|:---:|:---:|
| $F(0)$ | $\\int_0^0 = 0$ | $0$ |
| $F(2)$ | $[t^2-4t]_0^2 = 4-8$ | $-4$ |
| $F(3)$ | $[t^2-4t]_0^3 = 9-12$ | $-3$ |
| $F(4)$ | $[t^2-4t]_0^4 = 16-16$ | $0$ |
| $F'(3)$ | $f(3) = 2(3)-4$ | $2$ |

**Interpretation:** At $x = 2$, the function $f(t) = 2t-4$ crosses zero (changes from negative to positive). So $F$ has a local **minimum** at $x = 2$.

$$\\text{Local min at } x = 2: \\quad f(2) = 0, \\quad f \\text{ changes } - \\to +$$

> **AP Tip:** On the exam, you must justify extrema by showing $f$ changes sign, not just that $f = 0$.`
    },
    {
      id: 'acc1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Accumulation Functions** 🎯\n\nLet $g(x) = \\int_1^x f(t)\\,dt$ where $f$ is continuous.',
      exercise: {
        questions: [
          {
            question: 'What is $g(1)$?',
            options: ['$0$', '$f(1)$', '$1$', 'Cannot determine'],
            correctAnswer: 0,
            explanation: '$g(1) = \\int_1^1 f(t)\\,dt = 0$. The integral from a number to itself is always $0$.'
          },
          {
            question: 'If $f(x) > 0$ for all $x$ in $(1, 5)$, then on $(1, 5)$, $g$ is:',
            options: ['Positive', 'Increasing', 'Concave up', 'Decreasing'],
            correctAnswer: 1,
            explanation: '$g\'(x) = f(x) > 0$, so $g$ is increasing on $(1, 5)$.'
          },
          {
            question: 'If $f(3) = 0$ and $f$ changes from positive to negative at $x = 3$, then $g$ has:',
            options: ['A local minimum at $x=3$', 'A local maximum at $x=3$', 'An inflection point at $x=3$', 'No special feature at $x=3$'],
            correctAnswer: 1,
            explanation: '$g\'(3) = f(3) = 0$ and $g\'$ changes from $+$ to $-$: local maximum.'
          }
        ]
      }
    },
    {
      id: 'acc1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Connect $f$ and $F$.** 🔍',
      exercise: {
        dropdowns: [
          {
            label: 'If $f$ is positive and increasing, then $F$ is:',
            options: ['Increasing, concave up', 'Increasing, concave down', 'Decreasing, concave up', 'Decreasing, concave down'],
            correctAnswers: ['Increasing, concave up'],
            hints: ['$F\' = f > 0$: increasing. $F\'\' = f\' > 0$: concave up.'],
            explanation: '$f > 0$ → increasing. $f$ increasing → $f\' > 0$ → concave up.'
          },
          {
            label: 'If $f$ is negative and increasing, then $F$ is:',
            options: ['Increasing, concave up', 'Increasing, concave down', 'Decreasing, concave up', 'Decreasing, concave down'],
            correctAnswers: ['Decreasing, concave up'],
            hints: ['$f < 0$: $F$ decreasing. $f$ increasing: $F\'\' = f\' > 0$: concave up.'],
            explanation: '$f < 0$ → $F$ decreasing. $f$ increasing → concave up. Think of a parabola opening up but currently below the axis of symmetry.'
          },
          {
            label: 'An inflection point of $F$ occurs where:',
            options: ['$f = 0$', '$f$ has a local extremum', '$f$ changes sign', '$F = 0$'],
            correctAnswers: ['$f$ has a local extremum'],
            hints: ['$F\'\' = f\'$. Inflection when $F\'\'$ changes sign, i.e., $f\'$ changes sign.'],
            explanation: '$F\'\' = f\'$ changes sign where $f$ has a local max or min.'
          }
        ]
      }
    },
    {
      id: 'acc1-input',
      type: 'input-box' as const,
      content: '**Compute an accumulation value.** ✍️',
      exercise: {
        question: 'Let $F(x) = \\int_0^x (3t^2 - 6t)\\,dt$. Find $F(4)$.\n\n(Enter an integer.)',
        correctAnswer: '16',
        acceptableAnswers: ['16'],
        hints: [
          '$\\int (3t^2 - 6t)\\,dt = t^3 - 3t^2 + C$.',
          '$F(4) = [t^3 - 3t^2]_0^4 = 64 - 48$.'
        ],
        explanation: '$F(4) = [t^3-3t^2]_0^4 = (64-48) - 0 = 16$.'
      }
    },
    {
      id: 'acc1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Key Point |
|:---:|:---:|
| $F(x) = \\int_a^x f(t)\\,dt$ | Accumulates from $a$ to $x$ |
| $F(a) = 0$ | Always starts at zero |
| $F\' = f$ | Rate of accumulation = integrand |
| $F\'\' = f\'$ | Concavity of $F$ = slope of $f$ |
| Extrema of $F$ | Where $f$ changes sign |

> **Up Next:** Part 2 — Reading Graphs of $f$ to Analyze $F$.`
    }
  ]
};
