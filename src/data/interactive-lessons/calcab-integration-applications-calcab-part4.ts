export const calcabIntAppsPart4Data = {
  topicSlug: 'integration-applications-calcab',
  sections: [
    {
      id: 'ia4-intro',
      type: 'text' as const,
      content: `# Integration Applications

**Part 4 of 7 \u2014 Riemann Sums & Trapezoidal Rule**

### Riemann Sum Formulas

$$\\boxed{L_n = \\sum_{i=0}^{n-1} f(x_i)\\Delta x \\qquad R_n = \\sum_{i=1}^{n} f(x_i)\\Delta x \\qquad M_n = \\sum_{i=1}^{n} f(\\bar{x}_i)\\Delta x}$$

### Trapezoidal Rule

$$\\boxed{T_n = \\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)]}$$

### Over/Underestimate Guide

| Method | $f$ Increasing | $f$ Decreasing |
|:---:|:---:|:---:|
| **Left** | Under | Over |
| **Right** | Over | Under |
| **Midpoint** | Depends on concavity | Depends on concavity |

| Method | $f$ Concave Up | $f$ Concave Down |
|:---:|:---:|:---:|
| **Trapezoidal** | Over | Under |
| **Midpoint** | Under | Over |

> **Key Fact:** Trapezoidal = average of Left and Right: $T_n = \\frac{L_n + R_n}{2}$.`
    },
    {
      id: 'ia4-worked',
      type: 'text' as const,
      content: `### Worked Example from Table

| $x$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $f(x)$ | $1$ | $3$ | $2$ | $5$ |

$\\Delta x = 1$, $n = 3$.

| Method | Computation | Value |
|:---:|:---:|:---:|
| Left sum | $f(0)+f(1)+f(2) = 1+3+2$ | $6$ |
| Right sum | $f(1)+f(2)+f(3) = 3+2+5$ | $10$ |
| Trapezoidal | $\\frac{1}{2}(1+2(3)+2(2)+5) = \\frac{16}{2}$ | $8$ |

Check: $T = \\frac{L+R}{2} = \\frac{6+10}{2} = 8$ \u2714

### Unequal Subintervals

When $\\Delta x$ varies, use individual trapezoids:

$$T = \\frac{\\Delta x_1}{2}(f_0+f_1) + \\frac{\\Delta x_2}{2}(f_1+f_2) + \\cdots$$

> **AP Tip:** Table problems with unequal spacing appear frequently. Apply the trapezoidal formula to each subinterval separately.`
    },
    {
      id: 'ia4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Riemann Sums** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'Using the table above, the left Riemann sum approximation of $\\int_0^3 f(x)\\,dx$ is:',
            options: ['$6$', '$10$', '$8$', '$11$'],
            correctAnswer: 0,
            explanation: '$L_3 = f(0)(1)+f(1)(1)+f(2)(1) = 1+3+2 = 6$.'
          },
          {
            question: 'If $f$ is increasing and concave up, the trapezoidal rule gives:',
            options: ['An overestimate', 'An underestimate', 'The exact value', 'Cannot determine'],
            correctAnswer: 0,
            explanation: 'Concave up $\\Rightarrow$ secant lines are above the curve $\\Rightarrow$ trapezoidal overestimates.'
          },
          {
            question: '$f$ is decreasing on $[a,b]$. Right Riemann sum gives:',
            options: ['Underestimate', 'Overestimate', 'Exact', 'Cannot tell'],
            correctAnswer: 0,
            explanation: 'Decreasing $f$: right endpoints are the minimum on each subinterval $\\Rightarrow$ underestimate.'
          }
        ]
      }
    },
    {
      id: 'ia4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Over or under?** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$f$ is concave down and increasing. Left Riemann sum is:',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['Underestimate'],
            hints: ['Increasing $\\Rightarrow$ left sum is under.'],
            explanation: 'Increasing: left sum underestimates (regardless of concavity).'
          },
          {
            label: '$f$ is concave down. Midpoint rule is:',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['Overestimate'],
            hints: ['Midpoint and trapezoidal have opposite errors from concavity.'],
            explanation: 'Concave down: trapezoidal underestimates, midpoint overestimates.'
          },
          {
            label: 'Trapezoidal with unequal subintervals: $x = 0, 2, 5$ and $f = 3, 7, 4$:',
            options: ['$\\frac{2}{2}(3+7)+\\frac{3}{2}(7+4) = 10+16.5 = 26.5$', '$\\frac{5}{2}(3+2(7)+4) = 52.5$', '$3+7+4 = 14$', '$\\frac{1}{2}(3+7)+\\frac{1}{2}(7+4) = 10.5$'],
            correctAnswers: ['$\\frac{2}{2}(3+7)+\\frac{3}{2}(7+4) = 10+16.5 = 26.5$'],
            hints: ['$\\Delta x_1 = 2$, $\\Delta x_2 = 3$. Apply trapezoid to each separately.'],
            explanation: '$T = 1(10) + 1.5(11) = 10 + 16.5 = 26.5$.'
          }
        ]
      }
    },
    {
      id: 'ia4-input',
      type: 'input-box' as const,
      content: '**Compute from a table.** \u270d\ufe0f',
      exercise: {
        question: 'Given $f(0)=2, f(2)=6, f(4)=4, f(6)=8$ with equal subintervals. Find the trapezoidal approximation of $\\int_0^6 f(x)\\,dx$.\n\n(Enter an integer.)',
        correctAnswer: '30',
        acceptableAnswers: ['30'],
        hints: [
          '$\\Delta x = 2$, $n = 3$.',
          '$T = \\frac{2}{2}[f(0)+2f(2)+2f(4)+f(6)]$.',
          '$= 1[2+12+8+8] = 30$.'
        ],
        explanation: '$T = \\frac{2}{2}(2+12+8+8) = 30$.'
      }
    },
    {
      id: 'ia4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

| Method | Formula |
|:---:|:---:|
| Left | $\\sum f(x_i)\\Delta x$ (skip last) |
| Right | $\\sum f(x_i)\\Delta x$ (skip first) |
| Trapezoidal | $\\frac{\\Delta x}{2}[f_0+2f_1+\\cdots+2f_{n-1}+f_n]$ |
| Key relation | $T = (L+R)/2$ |

> **Up Next:** Part 5 \u2014 Rate Problems & Net Change.`
    }
  ]
};
