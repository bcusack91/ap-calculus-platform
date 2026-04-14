export const calcabFRQPart3Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq3-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies \u2014 Table-Based FRQs

**Part 3 of 7**

---

### Table-Based FRQ Overview

Table FRQs give you selected values of a function (or its derivative) and ask you to:

| Task | Technique |
|:---|:---|
| Estimate $f'(a)$ | Difference quotient: $\\frac{f(b)-f(a)}{b-a}$ |
| Approximate $\\int_a^b f$ | Riemann sums or trapezoidal rule |
| Apply MVT | $\\frac{f(b)-f(a)}{b-a} = f'(c)$ for some $c$ |
| Apply IVT | Show $f$ is continuous + intermediate value exists |
| Determine if over/underestimate | Check concavity |

### Riemann Sum Formulas

$$\\boxed{\\text{Left: } \\sum f(x_i)\\Delta x_i \\qquad \\text{Right: } \\sum f(x_{i+1})\\Delta x_i}$$

$$\\boxed{\\text{Trapezoidal: } \\sum \\frac{f(x_i)+f(x_{i+1})}{2}\\Delta x_i}$$

> **Key Fact:** Subintervals may have **unequal widths** in table FRQs. Always check!

---

### Worked Example \u2014 Table FRQ

| $t$ (hours) | $0$ | $2$ | $5$ | $8$ | $10$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $R(t)$ (gal/hr) | $4$ | $7$ | $10$ | $6$ | $3$ |

$R(t)$ is the rate of water flow. $R$ is continuous on $[0,10]$.

**(a)** Left Riemann sum for $\\int_0^{10} R(t)\\,dt$:

$= R(0)(2) + R(2)(3) + R(5)(3) + R(8)(2)$

$= 4(2) + 7(3) + 10(3) + 6(2) = 8 + 21 + 30 + 12 = 71$ gallons

**(b)** Average rate of flow (using trapezoidal):

$$\\frac{4+7}{2}(2) + \\frac{7+10}{2}(3) + \\frac{10+6}{2}(3) + \\frac{6+3}{2}(2)$$
$$= 11 + 25.5 + 24 + 9 = 69.5 \\text{ gallons}$$

Average value $\\approx \\frac{69.5}{10} = 6.95$ gal/hr.

**(c)** By MVT, since $R$ is continuous on $[0, 10]$ and differentiable on $(0,10)$:

$R'(c) = \\frac{R(10)-R(0)}{10-0} = \\frac{3-4}{10} = -0.1$ gal/hr\u00b2 for some $c$ in $(0,10)$.`
    },
    {
      id: 'frq3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Table-Based FRQ Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'For a table with unequal subintervals, which is TRUE?',
            options: ['Each term uses its own $\\Delta x_i$', 'Use the average $\\Delta x$', 'Only midpoint sums work', 'All subintervals are equal'],
            correctAnswer: 0,
            explanation: 'Unequal subintervals mean each rectangle has a different width. Multiply each $f(x_i)$ by its own $\\Delta x_i$.'
          },
          {
            question: 'A left Riemann sum overestimates when $f$ is:',
            options: ['Decreasing', 'Increasing', 'Concave up', 'Concave down'],
            correctAnswer: 0,
            explanation: 'Decreasing: left endpoint is higher than right, so rectangles overshoot the curve.'
          },
          {
            question: 'The trapezoidal approximation underestimates when $f$ is:',
            options: ['Concave down', 'Concave up', 'Increasing', 'Decreasing'],
            correctAnswer: 0,
            explanation: 'Concave down: the curve bows above the trapezoid\u2019s straight top edge.'
          }
        ]
      }
    },
    {
      id: 'frq3-over-under',
      type: 'text' as const,
      content: `### Over/Underestimate Guide

| Method | Overestimate When | Underestimate When |
|:---|:---|:---|
| Left Riemann | $f$ decreasing | $f$ increasing |
| Right Riemann | $f$ increasing | $f$ decreasing |
| Trapezoidal | $f$ concave up | $f$ concave down |
| Midpoint | $f$ concave down | $f$ concave up |

> **AP Tip:** After computing a Riemann sum, the FRQ often asks \u201cIs this an overestimate or underestimate? Explain.\u201d You MUST state the reason (monotonicity or concavity).`
    },
    {
      id: 'frq3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze the table.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: 'Estimating $f\'(3)$ from a table with $f(2)=5$ and $f(4)=11$:',
            options: ['$\\frac{11-5}{4-2} = 3$', '$\\frac{5+11}{2} = 8$', '$11 - 5 = 6$', '$f\'(3) = 3$'],
            correctAnswers: ['$\\frac{11-5}{4-2} = 3$'],
            hints: ['Difference quotient using nearest values.'],
            explanation: '$f\'(3) \\approx \\frac{f(4)-f(2)}{4-2} = \\frac{6}{2} = 3$.'
          },
          {
            label: '$f$ is continuous, $f(1) = -2$, $f(4) = 5$. By IVT, $f(c) = 0$ for some $c$ in:',
            options: ['$(1, 4)$', '$(0, 1)$', '$(-2, 5)$', 'Cannot determine'],
            correctAnswers: ['$(1, 4)$'],
            hints: ['$0$ is between $-2$ and $5$. IVT applies on $[1,4]$.'],
            explanation: '$f(1)<0<f(4)$ and $f$ continuous \u2192 IVT guarantees $f(c)=0$ for some $c \\in (1,4)$.'
          },
          {
            label: 'A right Riemann sum with $f$ increasing will be:',
            options: ['An overestimate', 'An underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['An overestimate'],
            hints: ['Right endpoints of increasing function are higher than the curve.'],
            explanation: 'Increasing $f$: right endpoints are above the curve, so rectangles overshoot.'
          }
        ]
      }
    },
    {
      id: 'frq3-input',
      type: 'input-box' as const,
      content: '**Compute the trapezoidal sum.** \u270d\ufe0f',
      exercise: {
        question: 'Given: $f(0)=2$, $f(3)=8$, $f(5)=6$. Find the trapezoidal approximation of $\\int_0^5 f(x)\\,dx$.',
        correctAnswer: '29',
        acceptableAnswers: ['29'],
        hints: [
          'Two subintervals: $[0,3]$ (width 3) and $[3,5]$ (width 2).',
          '$\\frac{2+8}{2}(3) + \\frac{8+6}{2}(2) = 5(3) + 7(2)$.',
          '$= 15 + 14 = 29$.'
        ],
        explanation: '$\\frac{2+8}{2}(3) + \\frac{8+6}{2}(2) = 15+14 = 29$.'
      }
    },
    {
      id: 'frq3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- Table FRQs require Riemann sums, trapezoidal rule, and MVT/IVT
- Watch for unequal subintervals \u2014 use actual $\\Delta x_i$
- Over/underestimate depends on monotonicity (Riemann) or concavity (trapezoidal)
- Estimate derivatives with difference quotients from nearest table values`
    }
  ]
};
