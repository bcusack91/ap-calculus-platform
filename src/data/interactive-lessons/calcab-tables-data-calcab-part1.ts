export const calcabTablesDataPart1Data = {
  topicSlug: 'tables-data-calcab',
  sections: [
    {
      id: 'td1-intro',
      type: 'text' as const,
      content: `# Working with Tables & Data

**Part 1 of 7 \u2014 Approximating Derivatives from Tables**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Approximating Derivatives from Tables** |
| 2 | Riemann Sums from Tables |
| 3 | Trapezoidal Rule |
| 4 | MVT & IVT with Tables |
| 5 | Interpreting $f'$ and $f''$ from Data |
| 6 | AP-Style Free-Response Workshop |
| 7 | Comprehensive Assessment |

---

### Estimating $f'(a)$ from a Table

When no formula is given, estimate the derivative using nearby values:

$$\\boxed{f'(a) \\approx \\frac{f(b) - f(c)}{b - c}}$$

### Three Approaches

| Method | Formula | When to Use |
|:---|:---:|:---|
| Forward difference | $\\frac{f(a+h) - f(a)}{h}$ | At left endpoints |
| Backward difference | $\\frac{f(a) - f(a-h)}{h}$ | At right endpoints |
| Symmetric (central) | $\\frac{f(a+h) - f(a-h)}{2h}$ | Interior points (most accurate) |

> **Key Fact:** The symmetric difference quotient averages the forward and backward estimates and gives the best approximation for interior points.

### Worked Example

| $x$ | 1 | 3 | 5 | 8 |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | 2 | 7 | 10 | 20 |

**Estimate $f'(3)$:**

Symmetric: $f'(3) \\approx \\frac{f(5) - f(1)}{5 - 1} = \\frac{10 - 2}{4} = 2$

**Estimate $f'(1)$ (endpoint):**

Forward: $f'(1) \\approx \\frac{f(3) - f(1)}{3 - 1} = \\frac{7 - 2}{2} = 2.5$

**Estimate $f'(8)$ (right endpoint):**

Backward: $f'(8) \\approx \\frac{f(8) - f(5)}{8 - 5} = \\frac{20 - 10}{3} = \\frac{10}{3}$

> **AP Tip:** Always state units when they are given. If $x$ is in seconds and $f$ is in meters, then $f'$ is in meters/second.`
    },
    {
      id: 'td1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Practice \u2014 Derivative Estimation** \ud83c\udfaf\n\n| $x$ | 0 | 2 | 5 | 7 | 10 |\n|:---:|:---:|:---:|:---:|:---:|:---:|\n| $f(x)$ | 3 | 8 | 14 | 18 | 25 |',
      exercise: {
        questions: [
          {
            question: 'Estimate $f\'(5)$ using the symmetric difference quotient.',
            options: ['$2$', '$\\frac{4}{3}$', '$3$', '$\\frac{7}{3}$'],
            correctAnswer: 0,
            explanation: '$f\'(5) \\approx \\frac{f(7) - f(2)}{7 - 2} = \\frac{18 - 8}{5} = 2$.'
          },
          {
            question: 'Estimate $f\'(0)$ using the best available method.',
            options: ['$\\frac{5}{2}$', '$3$', '$8$', '$5$'],
            correctAnswer: 0,
            explanation: 'At the left endpoint, use forward difference: $f\'(0) \\approx \\frac{f(2) - f(0)}{2 - 0} = \\frac{8 - 3}{2} = \\frac{5}{2}$.'
          },
          {
            question: 'Estimate $f\'(10)$ using the best available method.',
            options: ['$\\frac{7}{3}$', '$\\frac{25}{10}$', '$7$', '$\\frac{11}{5}$'],
            correctAnswer: 0,
            explanation: 'At the right endpoint, use backward: $f\'(10) \\approx \\frac{f(10) - f(7)}{10 - 7} = \\frac{25 - 18}{3} = \\frac{7}{3}$.'
          }
        ]
      }
    },
    {
      id: 'td1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Build a derivative estimate step by step.** \ud83d\udd0d\n\n| $t$ (s) | 0 | 4 | 10 | 15 |\n|:---:|:---:|:---:|:---:|:---:|\n| $s(t)$ (m) | 0 | 12 | 30 | 50 |',
      exercise: {
        dropdowns: [
          {
            label: 'The best estimate for $s\'(4)$ uses which method?',
            options: ['Symmetric: $\\frac{s(10)-s(0)}{10-0}$', 'Forward: $\\frac{s(10)-s(4)}{6}$', 'Backward: $\\frac{s(4)-s(0)}{4}$', 'Cannot estimate'],
            correctAnswers: ['Symmetric: $\\frac{s(10)-s(0)}{10-0}$'],
            hints: ['$t = 4$ is an interior point with neighbors $t = 0$ and $t = 10$.'],
            explanation: 'Symmetric difference is best for interior points: $\\frac{30 - 0}{10} = 3$ m/s.'
          },
          {
            label: '$s\'(4) \\approx$',
            options: ['$3$ m/s', '$12$ m/s', '$4.5$ m/s', '$3.5$ m/s'],
            correctAnswers: ['$3$ m/s'],
            hints: ['$\\frac{s(10) - s(0)}{10 - 0}$.'],
            explanation: '$s\'(4) \\approx \\frac{30 - 0}{10} = 3$ m/s.'
          },
          {
            label: 'The units of $s\'(4)$ are:',
            options: ['Meters per second', 'Meters', 'Seconds per meter', 'No units'],
            correctAnswers: ['Meters per second'],
            hints: ['$s$ is in meters, $t$ is in seconds.'],
            explanation: '$s\'$ has units $\\frac{\\text{meters}}{\\text{seconds}}$ = meters per second.'
          }
        ]
      }
    },
    {
      id: 'td1-input',
      type: 'input-box' as const,
      content: '**Estimate the derivative.** \u270d\ufe0f\n\n| $x$ | 1 | 3 | 6 | 10 |\n|:---:|:---:|:---:|:---:|:---:|\n| $g(x)$ | 4 | 10 | 22 | 38 |',
      exercise: {
        question: 'Estimate $g\'(6)$ using the symmetric difference quotient with $x = 3$ and $x = 10$.\n\nEnter the integer value.',
        correctAnswer: '4',
        acceptableAnswers: ['4'],
        hints: [
          '$g\'(6) \\approx \\frac{g(10) - g(3)}{10 - 3}$.',
          '$= \\frac{38 - 10}{7} = \\frac{28}{7} = 4$.'
        ],
        explanation: '$g\'(6) \\approx \\frac{38 - 10}{7} = 4$.'
      }
    },
    {
      id: 'td1-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 1

- Use symmetric (central) differences for interior points
- Use forward/backward differences at endpoints
- Always include units in AP responses
- Symmetric difference: $\\frac{f(a+h) - f(a-h)}{2h}$ is the most accurate`
    }
  ]
};
