export const calcabFRQPart4Data = {
  topicSlug: 'free-response-strategies-calcab',
  sections: [
    {
      id: 'frq4-intro',
      type: 'text' as const,
      content: `# Free-Response Strategies \u2014 Graph-Based FRQs

**Part 4 of 7**

---

### Graph-Based FRQ Overview

These FRQs give you the graph of $f$, $f'$, or $f''$ and ask you to extract information.

### What You Can Read from Each Graph

| Given Graph of | You Can Determine |
|:---|:---|
| $f$ | Values $f(a)$, zeros, positive/negative regions |
| $f'$ | Where $f$ is increasing/decreasing, local extrema |
| $f''$ | Concavity and inflection points of $f$ |
| $f'$ | $\\int_a^b f'(x)\\,dx = f(b)-f(a)$ (area under $f'$) |

### Reading $f'$ Graph \u2194 Properties of $f$

| Feature of $f'$ Graph | Meaning for $f$ |
|:---|:---|
| $f'(x) > 0$ | $f$ is increasing |
| $f'(x) < 0$ | $f$ is decreasing |
| $f'$ crosses $x$-axis from $+$ to $-$ | $f$ has local maximum |
| $f'$ crosses $x$-axis from $-$ to $+$ | $f$ has local minimum |
| $f'$ is increasing | $f$ is concave up |
| $f'$ is decreasing | $f$ is concave down |
| $f'$ has a local extremum | $f$ has inflection point |

> **Key Fact:** When given graph of $f'$, compute $\\int f'\\,dx$ to find net change of $f$. Use geometric area formulas (triangles, semicircles).

---

### Worked Example \u2014 Graph of $f'$

Suppose $f'$ is piecewise linear on $[0, 8]$:
- $f'(0) = 2$, $f'(2) = 0$, $f'(5) = -3$, $f'(8) = 0$

**(a)** On what intervals is $f$ increasing?

$f' > 0$ on $(0, 2)$ \u2192 $f$ increasing on $[0, 2]$.

**(b)** Local max of $f$ at $x = ?$

$f'$ changes from $+$ to $-$ at $x = 2$ \u2192 local max.

**(c)** $f(0) = 5$. Find $f(2)$.

$f(2) = f(0) + \\int_0^2 f'(x)\\,dx = 5 +$ area of triangle $= 5 + \\frac{1}{2}(2)(2) = 7$.

**(d)** Inflection point of $f$?

$f'$ has a local min at $x = 5$ \u2192 $f''$ changes sign \u2192 inflection point at $x = 5$.`
    },
    {
      id: 'frq4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Graph-Based FRQ Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If the graph of $f\'$ is above the $x$-axis on $(1, 4)$, then $f$ is:',
            options: ['Increasing on $(1, 4)$', 'Concave up on $(1, 4)$', 'Positive on $(1, 4)$', 'Has a max at some point in $(1, 4)$'],
            correctAnswer: 0,
            explanation: '$f\'>0$ means $f$ is increasing. We cannot determine $f$\u2019s sign or concavity from $f\'>0$ alone.'
          },
          {
            question: 'The graph of $f\'$ has a local maximum at $x = 3$. For $f$, $x = 3$ is:',
            options: ['An inflection point', 'A local maximum', 'A local minimum', 'A zero'],
            correctAnswer: 0,
            explanation: '$f\'$ has a local max at $x=3$ means $f\'\' = 0$ and $f\'\'$ changes sign \u2192 inflection point of $f$.'
          },
          {
            question: 'Given graph of $f\'$, to find $f(5) - f(1)$ you compute:',
            options: ['The area under $f\'$ from $1$ to $5$', '$f\'(5) - f\'(1)$', 'The slope of $f\'$ at $x = 3$', '$f\'(3) \\cdot 4$'],
            correctAnswer: 0,
            explanation: 'FTC: $\\int_1^5 f\'(x)\\,dx = f(5)-f(1)$. Use geometric areas from the graph.'
          }
        ]
      }
    },
    {
      id: 'frq4-areas',
      type: 'text' as const,
      content: `### Geometric Area Formulas for Graphs

| Shape | Formula |
|:---|:---|
| Rectangle | $\\text{base} \\times \\text{height}$ |
| Triangle | $\\frac{1}{2} \\times \\text{base} \\times \\text{height}$ |
| Semicircle | $\\frac{1}{2}\\pi r^2$ |
| Trapezoid | $\\frac{1}{2}(b_1 + b_2) \\times h$ |

> **AP Tip:** Areas below the $x$-axis count as NEGATIVE when computing $\\int f'\\,dx$.`
    },
    {
      id: 'frq4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze the graph of $f\'$.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$f\'(x) = 0$ at $x = 2$ and $f\'$ changes sign. At $x = 2$, $f$ has:',
            options: ['A local extremum', 'An inflection point', 'A zero', 'A vertical tangent'],
            correctAnswers: ['A local extremum'],
            hints: ['$f\' = 0$ and sign change \u2192 first derivative test.'],
            explanation: '$f\' = 0$ with sign change means local max (if $+$ to $-$) or local min (if $-$ to $+$).'
          },
          {
            label: 'Graph of $f\'$ is a triangle with base $[0,4]$ and height $6$. Then $\\int_0^4 f\'(x)\\,dx =$',
            options: ['$12$', '$24$', '$6$', '$4$'],
            correctAnswers: ['$12$'],
            hints: ['Area of triangle = $\\frac{1}{2}(4)(6)$.'],
            explanation: '$\\frac{1}{2}(4)(6) = 12$. So $f(4)-f(0) = 12$.'
          },
          {
            label: 'Graph of $f\'$ is a semicircle of radius 3 below the $x$-axis:',
            options: ['$\\int = -\\frac{9\\pi}{2}$', '$\\int = \\frac{9\\pi}{2}$', '$\\int = -9\\pi$', '$\\int = 9\\pi$'],
            correctAnswers: ['$\\int = -\\frac{9\\pi}{2}$'],
            hints: ['Below $x$-axis means negative. Semicircle area = $\\frac{1}{2}\\pi r^2$.'],
            explanation: 'Area $= \\frac{1}{2}\\pi(9) = \\frac{9\\pi}{2}$. Below axis \u2192 negative: $-\\frac{9\\pi}{2}$.'
          }
        ]
      }
    },
    {
      id: 'frq4-input',
      type: 'input-box' as const,
      content: '**Compute from the graph.** \u270d\ufe0f',
      exercise: {
        question: 'The graph of $f\'$ is a line from $(0, 4)$ to $(6, -2)$. If $f(0) = 3$, find $f(6)$.',
        correctAnswer: '9',
        acceptableAnswers: ['9'],
        hints: [
          '$\\int_0^6 f\'(x)\\,dx = $ area of trapezoid (partly above, partly below $x$-axis).',
          '$f\' = 0$ at $x=4$ (line from 4 to $-2$ crosses zero at $x=4$). Triangle above: $\\frac{1}{2}(4)(4) = 8$. Triangle below: $\\frac{1}{2}(2)(2) = 2$.',
          'Net area $= 8 - 2 = 6$. $f(6) = 3 + 6 = 9$.'
        ],
        explanation: '$\\int_0^6 f\' = 8 - 2 = 6$. $f(6) = f(0) + 6 = 9$.'
      }
    },
    {
      id: 'frq4-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 4

- Graph of $f'$: above $x$-axis \u2192 $f$ increasing; below \u2192 $f$ decreasing
- $f'$ sign change at zero \u2192 local extremum of $f$
- $f'$ local extremum \u2192 inflection point of $f$
- Use geometric area formulas; below-axis area is negative`
    }
  ]
};
