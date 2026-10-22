export const calcabTablesDataPart5Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td5-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 5 of 7 \u2014 Interpreting $f'$ and $f''$ from Data**

### Reading $f'$ from a Table of $f$

| Observation from Table | Conclusion |
|:---|:---|
| $f$ values increase between entries | $f' > 0$ on that interval |
| $f$ values decrease between entries | $f' < 0$ on that interval |
| $f$ values change rapidly | $\\lvert f'\\rvert$ is large |
| $f$ values change slowly | $\\lvert f'\\rvert$ is small |

### Concavity from First Differences

Compute first differences $\\Delta f_i = f(x_{i+1}) - f(x_i)$:

$$\\boxed{\\text{Equal spacing, } \\Delta f \\text{ increasing} \\Rightarrow \\text{the data suggest concave up}}$$
$$\\boxed{\\text{Equal spacing, } \\Delta f \\text{ decreasing} \\Rightarrow \\text{the data suggest concave down}}$$

A table only shows values at the data points, so it can **suggest** concavity but cannot prove what $f$ does between them. When an AP question needs concavity (for example, to decide whether a trapezoidal sum over- or underestimates), it states it, such as "$f''(x) > 0$". With unequal spacing, compare slopes $\\frac{\\Delta f}{\\Delta x}$, not raw differences.

### Worked Example

| $x$ | 0 | 1 | 2 | 3 | 4 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | 2 | 5 | 9 | 14 | 20 |

First differences: $\\Delta f = 3, 4, 5, 6$ (increasing)

The data suggest $f' > 0$ (increasing) and $f'' > 0$ (concave up).

### Second Derivative from a Table of $f'$

If you have $f'$ values, estimate $f''$ the same way you estimate $f'$ from $f$:

$$f''(a) \\approx \\frac{f'(b) - f'(c)}{b - c}$$

> **AP Tip:** When asked "is there a value $c$ where $f''(c) = k$?", use MVT applied to $f'$.`
    },
    {
      id: 'td5-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Interpreting Data** \ud83c\udfaf\n\n| $x$ | 0 | 2 | 4 | 6 | 8 |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 10 | 18 | 24 | 28 | 30 |',
      exercise: {
        questions: [
          {
            question: 'The first differences are $8, 6, 4, 2$. What does this tell us about concavity?',
            options: ['They suggest concave down: slopes decrease', 'They suggest concave up: $f$ is increasing', 'They prove concave down: $f$ is decreasing', 'Nothing: all differences are positive'],
            correctAnswer: 0,
            explanation: 'The spacing is equal (2), so the slopes $4, 3, 2, 1$ decrease: the data suggest $f\'$ is decreasing, so $f$ is concave down. A table cannot prove it, because it says nothing about $f$ between the points. $f$ itself appears to be increasing (all differences are positive), but that is about $f\'$, not $f\'\'$.'
          },
          {
            question: 'Estimate $f\'(4)$ using symmetric differences.',
            options: ['$\\frac{28 - 18}{6 - 2} = 2.5$', '$\\frac{24 - 18}{4 - 2} = 3$', '$\\frac{30 - 18}{8 - 2} = 2$', '$\\frac{28 - 18}{2} = 5$'],
            correctAnswer: 0,
            explanation: '$f\'(4) \\approx \\frac{f(6) - f(2)}{6 - 2} = \\frac{28 - 18}{4} = \\frac{10}{4} = 2.5$. $\\frac{24 - 18}{4 - 2}$ is a one-sided (backward) estimate; $\\frac{30 - 18}{8 - 2}$ skips the nearest neighbors $x = 2$ and $x = 6$ for wider ones; dividing by $2$ instead of $6 - 2 = 4$ gives $5$.'
          },
          {
            question: 'Is $f$ increasing or decreasing on $[0,8]$?',
            options: ['Increasing \u2014 all first differences are positive', 'Decreasing \u2014 differences are getting smaller', 'Decreasing — the table shows that $f\'\' < 0$', 'Neither — $f$ peaks and levels off near $x = 8$'],
            correctAnswer: 0,
            explanation: 'All differences ($8,6,4,2$) are positive, so the data indicate $f$ is increasing (assuming it does not turn around between table points), though more slowly as $x$ grows. Shrinking differences and $f\'\' < 0$ describe concavity, not direction.'
          }
        ]
      }
    },
    {
      id: 'td5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze a table of $f\'$ values.** \ud83d\udd0d\n\n| $x$ | 1 | 3 | 5 | 7 |\n|:---:|:---:|:---:|:---:|:---:|\n| $f\'(x)$ | 4 | 1 | -2 | -5 |',
      exercise: {
        dropdowns: [
          {
            label: 'Suppose $f\'$ is decreasing on $[1, 7]$. Then $f$ must be increasing on:',
            options: ['$(1, 3)$ where $f\' > 0$', '$(5, 7)$ where $f\' < 0$', 'All of $[1, 7]$', 'Nowhere'],
            correctAnswers: ['$(1, 3)$ where $f\' > 0$'],
            hints: ['$f$ is increasing where $f\' > 0$.'],
            explanation: 'Because $f\'$ is decreasing, $f\'(x) \\ge f\'(3) = 1 > 0$ on $[1, 3]$, so $f$ is increasing there. On $(5, 7)$, $f\' \\le f\'(5) = -2 < 0$, so $f$ is decreasing; $f\'$ crosses zero somewhere between 3 and 5.'
          },
          {
            label: 'Estimate $f\'\'(3)$:',
            options: ['$-3/2$', '$-1$', '$1$', '$3/2$'],
            correctAnswers: ['$-3/2$'],
            hints: ['$f\'\'(3) \\approx \\frac{f\'(5) - f\'(1)}{5 - 1}$.'],
            explanation: '$f\'\'(3) \\approx \\frac{-2 - 4}{4} = \\frac{-6}{4} = -\\frac{3}{2}$.'
          },
          {
            label: 'Since $f\'\'(3) < 0$, $f$ is:',
            options: ['Concave down at $x = 3$', 'Concave up at $x = 3$', 'Linear at $x = 3$', 'Undefined at $x = 3$'],
            correctAnswers: ['Concave down at $x = 3$'],
            hints: ['$f\'\' < 0 \\Rightarrow$ concave down.'],
            explanation: '$f\'\'(3) < 0$ means $f$ is concave down at $x = 3$.'
          }
        ]
      }
    },
    {
      id: 'td5-input',
      type: 'input-box' as const,
      content: '**Apply MVT to $f\'$.** \u270d\ufe0f\n\n$f$ is twice-differentiable.\n\n| $x$ | 2 | 5 | 9 |\n|:---:|:---:|:---:|:---:|\n| $f\'(x)$ | 8 | 2 | -6 |',
      exercise: {
        question: 'By MVT applied to $f\'$ on $[2, 9]$, there is a $c$ in $(2, 9)$ where $f\'\'(c)$ equals what value?',
        correctAnswer: '-2',
        acceptableAnswers: ['-2', '−2', '-14/7'],
        hints: [
          '$f\'\'(c) = \\frac{f\'(9) - f\'(2)}{9 - 2}$.',
          '$= \\frac{-6 - 8}{7} = \\frac{-14}{7} = -2$.',
          'MVT needs $f\'$ continuous on $[2, 9]$ and differentiable on $(2, 9)$: true, because $f$ is twice-differentiable.'
        ],
        explanation: '$f$ is twice-differentiable, so $f\'$ is differentiable (and continuous). By MVT on $[2, 9]$: $f\'\'(c) = \\frac{-6 - 8}{9 - 2} = \\frac{-14}{7} = -2$ for some $c$ in $(2, 9)$.'
      }
    },
    {
      id: 'td5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- Equally spaced, increasing first differences suggest concave up; decreasing ones suggest concave down
- A table cannot prove concavity: AP states it (e.g. "$f'' > 0$") when a question depends on it
- Estimate $f''$ from $f'$ values using the same techniques
- MVT on $f'$ guarantees a specific $f''(c)$ value`
    }
  ]
};
