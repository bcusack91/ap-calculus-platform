export const calcabDerivativeDefPart3Data = {
  topicSlug: 'definition-of-derivative-calcab',
  sections: [
    {
      id: 'derdef3-intro',
      type: 'text' as const,
      content: `
# ∫ Graphical Interpretation of Derivatives

**Part 3 of 7 — Reading Derivatives from Graphs**

### 1. Derivative = Slope of Tangent Line

At any point, $f'(a)$ equals the slope of the tangent line to $f$ at $x = a$.
- $f'(a) > 0$: $f$ is **increasing** at $a$
- $f'(a) < 0$: $f$ is **decreasing** at $a$
- $f'(a) = 0$: $f$ has a **horizontal tangent** at $a$ (possible max, min, or inflection)

### 2. From Graph of $f$ to Graph of $f'$

| Feature of $f$ | Corresponding feature of $f'$ |
|---------------|-------------------------------|
| $f$ increasing | $f' > 0$ (above $x$-axis) |
| $f$ decreasing | $f' < 0$ (below $x$-axis) |
| Local max of $f$ | $f' = 0$ (crosses from $+$ to $-$) |
| Local min of $f$ | $f' = 0$ (crosses from $-$ to $+$) |
| Inflection point of $f$ | Local max or min of $f'$ |
| $f$ concave up | $f'$ increasing |
| $f$ concave down | $f'$ decreasing |

### 3. Estimating Derivatives from Data

From a table of values, approximate $f'(a)$ using the **symmetric difference quotient**:

$$f'(a) \\approx \\frac{f(a+h) - f(a-h)}{2h}$$

This is more accurate than the one-sided difference quotient.

### 4. Reading $f$ from $f'$

Given the graph of $f'$:
- Where $f' > 0$, $f$ is increasing
- Where $f' < 0$, $f$ is decreasing
- Where $f'$ changes sign, $f$ has a local extremum
      `
    },
    {
      id: 'derdef3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Given data: $f(1) = 3$, $f(3) = 7$. Approximate $f\'(2)$.',
            options: ['$2$', '$4$', '$5$', '$10$'],
            correctAnswer: 0,
            explanation: 'Using the difference quotient: $f\'(2) \\approx \\frac{f(3)-f(1)}{3-1} = \\frac{7-3}{2} = 2$.'
          },
          {
            question: 'If $f\'(x) > 0$ for all $x$ in $(2, 5)$ and $f\'(2) = f\'(5) = 0$, what can you conclude?',
            options: [
              '$f$ has a local max at $x = 2$ and min at $x = 5$',
              '$f$ has a local min at $x = 2$ and max at $x = 5$',
              '$f$ is constant on $(2, 5)$',
              '$f$ is increasing on $[2, 5]$'
            ],
            correctAnswer: 3,
            explanation: 'Since $f\'(x) > 0$ on $(2,5)$ and $f\' = 0$ at the endpoints, $f$ is increasing on the entire interval $[2,5]$. $x=2$ could be a local min and $x=5$ a local max, but we need more info about $f\'$ outside this interval.'
          }
        ]
      }
    },
    {
      id: 'derdef3-detail',
      type: 'text' as const,
      content: `
### AP Exam Graph-Reading Tips

When given the graph of $f'$ and asked about $f$:
1. **Zeros of $f'$** = horizontal tangent lines of $f$ (possible extrema)
2. **Sign changes of $f'$** = extrema of $f$
3. **Extrema of $f'$** = inflection points of $f$
4. **$f'$ positive** = $f$ rising, **$f'$ negative** = $f$ falling

**Common trap:** A zero of $f'$ is NOT always an extremum. If $f'$ doesn't change sign (like $f(x) = x^3$ at $x=0$), it's just an inflection point.
      `
    },
    {
      id: 'derdef3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'If $f\'(3) = 0$ and $f\'$ changes from negative to positive at $x = 3$, then $f$ has a:',
            options: ['Local maximum at $x = 3$', 'Local minimum at $x = 3$', 'Inflection point at $x = 3$', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'When $f\'$ changes from negative (decreasing) to positive (increasing), $f$ has a local minimum. This is the First Derivative Test.'
          }
        ]
      }
    },
    {
      id: 'derdef3-dropdown',
      type: 'dropdown-select' as const,
      content: `**From $f$ to $f'$** 🔍\n\nDetermine the sign of $f'$ at each point.`,
      exercise: {
        dropdowns: [
          { label: 'At a local maximum of $f$, $f\' = $', options: ['Positive', 'Zero', 'Negative', 'Undefined'] },
          { label: 'Where $f$ is increasing, $f\'$ is', options: ['Positive', 'Zero', 'Negative', 'Undefined'] },
          { label: 'At an inflection point of $f$, $f\'$ has a', options: ['Zero', 'Maximum or minimum', 'Discontinuity', 'Vertical tangent'] }
        ],
        correctAnswers: ['Zero', 'Positive', 'Maximum or minimum'],
        hint1: 'At a local max, the tangent line is horizontal.',
        hint2: 'If the function is going up, the slope is positive.',
        hint3: 'Inflection points of $f$ correspond to extrema of $f\'$ (where concavity changes).',
        explanation: 'Local max → horizontal tangent → $f\'=0$. Increasing → positive slope → $f\'>0$. Inflection point of $f$ → concavity changes → $f\'\'$ changes sign → $f\'$ has extremum.'
      }
    }
  ]
}
