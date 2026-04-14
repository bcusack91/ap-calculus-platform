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
| $f$ values change rapidly | $|f'|$ is large |
| $f$ values change slowly | $|f'|$ is small |

### Concavity from First Differences

Compute first differences $\\Delta f_i = f(x_{i+1}) - f(x_i)$:

$$\\boxed{\\text{If } \\Delta f \\text{ is increasing} \\Rightarrow f'' > 0 \\text{ (concave up)}}$$
$$\\boxed{\\text{If } \\Delta f \\text{ is decreasing} \\Rightarrow f'' < 0 \\text{ (concave down)}}$$

### Worked Example

| $x$ | 0 | 1 | 2 | 3 | 4 |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | 2 | 5 | 9 | 14 | 20 |

First differences: $\\Delta f = 3, 4, 5, 6$ (increasing)

$\\Rightarrow f' > 0$ (increasing) and $f'' > 0$ (concave up).

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
            options: ['$f$ is concave down ($f\'\' < 0$)', '$f$ is concave up ($f\'\' > 0$)', '$f$ has an inflection point', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Differences $8, 6, 4, 2$ are decreasing, so $f\'$ is decreasing, meaning $f\'\' < 0$ (concave down).'
          },
          {
            question: 'Estimate $f\'(4)$ using symmetric differences.',
            options: ['$\\frac{28 - 18}{6 - 2} = 2.5$', '$\\frac{24 - 18}{4 - 2} = 3$', '$\\frac{30 - 10}{8} = 2.5$', '$\\frac{24}{4} = 6$'],
            correctAnswer: 0,
            explanation: '$f\'(4) \\approx \\frac{f(6) - f(2)}{6 - 2} = \\frac{28 - 18}{4} = \\frac{10}{4} = 2.5$.'
          },
          {
            question: 'Is $f$ increasing or decreasing on $[0,8]$?',
            options: ['Increasing \u2014 all first differences are positive', 'Decreasing \u2014 differences are getting smaller', 'Neither', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'All differences ($8,6,4,2$) are positive, so $f\' > 0$ everywhere. $f$ is increasing (but slowing down because it is concave down).'
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
            label: '$f$ is increasing on which interval(s)?',
            options: ['$(1, 3)$ where $f\' > 0$', '$(5, 7)$ where $f\' < 0$', 'All of $[1, 7]$', 'Nowhere'],
            correctAnswers: ['$(1, 3)$ where $f\' > 0$'],
            hints: ['$f$ is increasing where $f\' > 0$.'],
            explanation: '$f\'(1) = 4 > 0$ and $f\'(3) = 1 > 0$, so $f$ is increasing on at least $(1,3)$. Since $f\' = 0$ somewhere between $x=3$ and $x=5$, $f$ increases until that point.'
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
        question: 'By MVT applied to $f\'$ on $[2, 9]$, there exists $c$ where $f\'\'(c) = a/b$ in lowest terms (with $a < 0$). Enter **$|a| + b$**.',
        correctAnswer: '3',
        acceptableAnswers: ['3'],
        hints: [
          '$f\'\'(c) = \\frac{f\'(9) - f\'(2)}{9 - 2}$.',
          '$= \\frac{-6 - 8}{7} = \\frac{-14}{7} = -2$.',
          '$-2 = -2/1$. $|a| + b = 2 + 1 = 3$.'
        ],
        explanation: '$f\'\'(c) = \\frac{-14}{7} = -2$. As $-2/1$: $|a| + b = 3$.'
      }
    },
    {
      id: 'td5-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 5

- Increasing first differences $\\Rightarrow$ concave up ($f'' > 0$)
- Decreasing first differences $\\Rightarrow$ concave down ($f'' < 0$)
- Estimate $f''$ from $f'$ values using the same techniques
- MVT on $f'$ guarantees a specific $f''(c)$ value`
    }
  ]
};
