export const calcabExamReviewPart3Data = {
  topicSlug: 'ap-exam-review-calcab',
  sections: [
    {
      id: 'examrev3-intro',
      type: 'text' as const,
      content: `# AP Exam Review \u2014 Applications of Derivatives

**Part 3 of 7**

---

### Applications of Derivatives Overview

| Application | Key Idea |
|:---|:---|
| Related Rates | Differentiate an equation involving changing quantities with respect to time |
| Optimization | Find absolute max/min on a domain |
| Curve Sketching | Use $f'$ and $f''$ to determine behavior |
| Linearization | $L(x) = f(a) + f'(a)(x-a)$ approximates $f$ near $a$ |
| L\u2019H\u00f4pital\u2019s Rule | $\\frac{0}{0}$ or $\\frac{\\infty}{\\infty}$ \u2192 differentiate top and bottom |

### First & Second Derivative Analysis

| Sign of $f'$ | Sign of $f''$ | Behavior of $f$ |
|:---:|:---:|:---|
| $+$ | $+$ | Increasing, concave up |
| $+$ | $-$ | Increasing, concave down |
| $-$ | $+$ | Decreasing, concave up |
| $-$ | $-$ | Decreasing, concave down |
| $0$ | $+$ | Local minimum |
| $0$ | $-$ | Local maximum |

> **Key Fact:** The second derivative test fails when $f''(c) = 0$. Use the first derivative test instead.

---

### Related Rates Checklist

1. Draw a diagram and label variables
2. Write an equation relating the variables
3. Differentiate both sides with respect to $t$
4. Substitute known values and solve

### Worked Example \u2014 Related Rates

A balloon\u2019s radius increases at $\\frac{dr}{dt} = 2$ cm/s. Find $\\frac{dV}{dt}$ when $r = 5$.

$V = \\frac{4}{3}\\pi r^3 \\implies \\frac{dV}{dt} = 4\\pi r^2 \\frac{dr}{dt} = 4\\pi(25)(2) = 200\\pi$ cm\u00b3/s.`
    },
    {
      id: 'examrev3-quiz1',
      type: 'multiple-choice' as const,
      content: '**Applications Quiz** \ud83c\udfaf',
      exercise: {
        questions: [
          {
            question: 'If $f\'(x) > 0$ and $f\'\'(x) < 0$ on an interval, then $f$ is:',
            options: ['Increasing and concave down', 'Increasing and concave up', 'Decreasing and concave down', 'Decreasing and concave up'],
            correctAnswer: 0,
            explanation: '$f\'>0$ means increasing. $f\'\'<0$ means concave down.'
          },
          {
            question: '$f(x) = x^3 - 3x$ has a local minimum at:',
            options: ['$x = 1$', '$x = -1$', '$x = 0$', '$x = 3$'],
            correctAnswer: 0,
            explanation: '$f\'(x) = 3x^2-3 = 0 \\implies x = \\pm 1$. $f\'\'(x) = 6x$. $f\'\'(1)=6>0$ \u2192 local min.'
          },
          {
            question: 'To find the absolute maximum of $f$ on $[a,b]$, you must check:',
            options: ['Critical points and endpoints', 'Only critical points', 'Only endpoints', 'Inflection points'],
            correctAnswer: 0,
            explanation: 'EVT guarantees max/min exist on a closed interval. Check critical points AND endpoints.'
          }
        ]
      }
    },
    {
      id: 'examrev3-optimization',
      type: 'text' as const,
      content: `### Optimization Strategy

$$\\boxed{\\text{Absolute extrema on } [a,b]: \\text{ compare } f(\\text{critical pts}) \\text{ and } f(a), f(b)}$$

**Example:** Maximize $f(x) = -x^2 + 6x - 5$ on $[0, 5]$.

$f'(x) = -2x + 6 = 0 \\implies x = 3$ (critical point).

| $x$ | $f(x)$ |
|:---:|:---:|
| $0$ | $-5$ |
| $3$ | $4$ |
| $5$ | $0$ |

Absolute max = $4$ at $x=3$. Absolute min = $-5$ at $x=0$.`
    },
    {
      id: 'examrev3-dropdown',
      type: 'dropdown-select' as const,
      content: '**Identify the scenario.** \ud83d\udd0d',
      exercise: {
        dropdowns: [
          {
            label: '$f\'(c) = 0$ and $f\'$ changes from $-$ to $+$ at $c$:',
            options: ['Local minimum', 'Local maximum', 'Inflection point', 'Neither'],
            correctAnswers: ['Local minimum'],
            hints: ['$f$ goes from decreasing to increasing.'],
            explanation: 'First derivative test: $-$ to $+$ means a valley \u2014 local minimum.'
          },
          {
            label: '$f\'\'$ changes sign at $x = c$:',
            options: ['Inflection point', 'Local maximum', 'Local minimum', 'Endpoint'],
            correctAnswers: ['Inflection point'],
            hints: ['Concavity changes from up to down or vice versa.'],
            explanation: 'An inflection point is where concavity changes, which requires $f\'\'$ to change sign.'
          },
          {
            label: 'A 10 ft ladder slides down a wall. To find how fast the base moves, use:',
            options: ['Related rates', 'Optimization', 'Linearization', 'L\u2019H\u00f4pital\u2019s Rule'],
            correctAnswers: ['Related rates'],
            hints: ['Quantities are changing with respect to time.'],
            explanation: 'Related rates: differentiate $x^2+y^2=100$ with respect to $t$.'
          }
        ]
      }
    },
    {
      id: 'examrev3-input',
      type: 'input-box' as const,
      content: '**Solve the optimization problem.** \u270d\ufe0f',
      exercise: {
        question: 'Find the absolute maximum value of $f(x) = x^3 - 12x$ on $[-3, 4]$.',
        correctAnswer: '16',
        acceptableAnswers: ['16'],
        hints: [
          '$f\'(x) = 3x^2 - 12 = 0 \\implies x^2 = 4 \\implies x = \\pm 2$.',
          'Evaluate: $f(-3) = -27+36 = 9$, $f(-2) = -8+24 = 16$, $f(2)= 8-24 = -16$, $f(4) = 64-48 = 16$.',
          'Maximum value is $16$, occurring at $x=-2$ and $x=4$.'
        ],
        explanation: 'Critical points at $x = \\pm 2$. $f(-2) = 16$, $f(4) = 16$. Absolute max $= 16$.'
      }
    },
    {
      id: 'examrev3-summary',
      type: 'text' as const,
      content: `### Key Takeaways \u2014 Part 3

- Use $f'$ for increasing/decreasing and local extrema
- Use $f''$ for concavity and inflection points
- Related rates: differentiate an equation with respect to $t$
- Optimization on closed intervals: check critical points AND endpoints`
    }
  ]
};
