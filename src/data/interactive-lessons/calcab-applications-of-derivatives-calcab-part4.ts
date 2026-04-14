export const calcabAppsDerivativesPart4Data = {
  topicSlug: 'applications-of-derivatives-calcab',
  sections: [
    {
      id: 'apps4-intro',
      type: 'text' as const,
      content: `# 📈 Applications of Derivatives

**Part 4 of 7 — Curve Sketching**

### The 7-Step Procedure

$$\\boxed{\\text{Domain} \\to \\text{Intercepts} \\to \\text{Symmetry} \\to f' \\to f'' \\to \\text{End behavior} \\to \\text{Sketch}}$$

| Step | What to Find | How |
|:---:|:---:|:---:|
| 1 | **Domain** | Where is $f$ defined? |
| 2 | **Intercepts** | $y$-int: set $x=0$. $x$-int: set $f(x)=0$ |
| 3 | **Symmetry** | Even: $f(-x)=f(x)$. Odd: $f(-x)=-f(x)$ |
| 4 | **$f'$ analysis** | Critical points, inc/dec, local extrema |
| 5 | **$f''$ analysis** | Concavity, inflection points |
| 6 | **End behavior** | $\\lim_{x \\to \\pm\\infty} f(x)$ or asymptotes |
| 7 | **Sketch** | Combine all info into a graph |

> **AP Tip:** On the AP exam, you rarely sketch from scratch. Instead, you're given a graph of $f'$ and must deduce properties of $f$. Master reading $f'$ graphs!`
    },
    {
      id: 'apps4-worked',
      type: 'text' as const,
      content: `### Complete Worked Example

$f(x) = x^4 - 4x^3$

**Step 1 — Domain:** All real numbers.

**Step 2 — Intercepts:** $f(0) = 0$, $f(x) = x^3(x-4) = 0$ at $x = 0, 4$.

**Step 3 — Symmetry:** Neither even nor odd.

**Step 4 — First Derivative:**
$$f'(x) = 4x^3 - 12x^2 = 4x^2(x-3)$$

| Interval | Sign of $f'$ | $f$ behavior |
|:---:|:---:|:---:|
| $(-\\infty, 0)$ | $(+)(-)= -$ | Decreasing |
| $(0, 3)$ | $(+)(-) = -$ | Decreasing |
| $(3, \\infty)$ | $(+)(+) = +$ | Increasing |

Local min at $x = 3$: $f(3) = 81 - 108 = -27$. No extremum at $x = 0$ (no sign change!).

**Step 5 — Second Derivative:**
$$f''(x) = 12x^2 - 24x = 12x(x-2)$$

| Interval | Sign of $f''$ | Concavity |
|:---:|:---:|:---:|
| $(-\\infty, 0)$ | $(-)(-) = +$ | Up |
| $(0, 2)$ | $(+)(-) = -$ | Down |
| $(2, \\infty)$ | $(+)(+) = +$ | Up |

Inflection points at $x = 0$ and $x = 2$.

**Step 6 — End behavior:** $\\lim_{x \\to \\pm\\infty} f(x) = +\\infty$.

> **Key Concept:** $x = 0$ gives $f'(0) = 0$ but NO extremum — it's a "flat spot" where $f$ still decreases. This happens when a factor in $f'$ has EVEN multiplicity.`
    },
    {
      id: 'apps4-reading',
      type: 'text' as const,
      content: `### Reading $f'$ Graphs — AP Essential Skill

Given a GRAPH of $f'(x)$, determine features of $f(x)$:

| Feature of $f'$ graph | Conclusion about $f$ |
|:---:|:---:|
| $f'$ crosses $x$-axis ($+ \\to -$) | $f$ has local MAX |
| $f'$ crosses $x$-axis ($- \\to +$) | $f$ has local MIN |
| $f'$ touches $x$-axis (no sign change) | No extremum (flat spot) |
| $f' > 0$ | $f$ is increasing |
| $f' < 0$ | $f$ is decreasing |
| $f'$ is increasing | $f$ is concave UP |
| $f'$ is decreasing | $f$ is concave DOWN |
| $f'$ has a local extremum | $f$ has an inflection point |

> **Key Fact:** A local max of $f'$ corresponds to an inflection point of $f$ where concavity changes from UP to DOWN. A local min of $f'$ corresponds to an inflection point where concavity changes from DOWN to UP.`
    },
    {
      id: 'apps4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Curve Sketching from Derivatives** 🎯\n\nGiven $f\'(x) = (x-1)^2(x-4)$:',
      exercise: {
        questions: [
          {
            question: 'Where does $f$ have a local minimum?',
            options: ['$x = 1$', '$x = 4$', '$x = 1$ and $x = 4$', 'No local minimum'],
            correctAnswer: 1,
            explanation: 'At $x = 1$: $(x-1)^2 \\geq 0$ always, and $(x-4) < 0$ on both sides. No sign change: NOT an extremum. At $x = 4$: $f\'$ changes from $-$ to $+$: local min.'
          },
          {
            question: 'How many inflection points does $f$ have?',
            options: ['$0$', '$1$', '$2$', '$3$'],
            correctAnswer: 2,
            explanation: '$f\'(x) = x^3 - 6x^2 + 9x - 4$, so $f\'\'(x) = 3x^2 - 12x + 9 = 3(x-1)(x-3)$. $f\'\'$ changes sign at $x = 1$ and $x = 3$: two inflection points.'
          },
          {
            question: 'If $f\'(x) > 0$ for $x < 1$ and $1 < x < 4$, what is true at $x = 1$?',
            options: ['Local max', 'Local min', 'Inflection point', 'Neither extremum nor inflection'],
            correctAnswer: 3,
            explanation: 'Wait — $f\'(x) = (x-1)^2(x-4)$. For $x < 1$, $(x-1)^2 > 0$ and $(x-4) < 0$: $f\' < 0$. For $1 < x < 4$, $(x-1)^2 > 0$ and $(x-4) < 0$: $f\' < 0$. No sign change at $x = 1$, so no extremum. But $f\'\'(1) = 0$ with sign change, so inflection point.'
          }
        ]
      }
    },
    {
      id: 'apps4-polynomial',
      type: 'text' as const,
      content: `### Polynomial Curve Sketching Shortcuts

| Degree | End Behavior | Max Turning Points | Max Inflection Points |
|:---:|:---:|:---:|:---:|
| 2 (quadratic) | Same direction both ends | 1 | 0 |
| 3 (cubic) | Opposite directions | 2 | 1 |
| 4 (quartic) | Same direction both ends | 3 | 2 |
| $n$ | Depends on leading coeff. | $n-1$ | $n-2$ |

### Multiplicity and Behavior at Roots of $f'$

| Multiplicity of root in $f'$ | Sign change? | Feature of $f$ |
|:---:|:---:|:---:|
| Odd (1, 3, 5, ...) | Yes | Local extremum |
| Even (2, 4, 6, ...) | No | Flat spot (no extremum) |`
    },
    {
      id: 'apps4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Reading Derivative Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'If $f\'$ has a local maximum at $x = 3$, what is true about $f$ at $x = 3$?',
            options: ['$f$ has a local max', '$f$ has a local min', '$f$ has an inflection point', '$f$ is undefined'],
            correctAnswer: 2,
            explanation: 'A local max of $f\'$ means $f\'$ changes from increasing to decreasing. That means $f\'\'$ changes from positive to negative: inflection point of $f$.'
          },
          {
            question: 'If $f\'(x) < 0$ and $f\'\'(x) > 0$ at $x = a$, then $f$ is:',
            options: ['Increasing and concave up', 'Decreasing and concave up', 'Decreasing and concave down', 'Increasing and concave down'],
            correctAnswer: 1,
            explanation: '$f\' < 0$: decreasing. $f\'\' > 0$: concave up. The graph is falling but curving upward (like the bottom of a bowl).'
          }
        ]
      }
    },
    {
      id: 'apps4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Analyze $f(x) = x^3 - 3x^2 - 9x + 5$** 🔍\n\n$f\'(x) = 3x^2 - 6x - 9 = 3(x-3)(x+1)$\n\n$f\'\'(x) = 6x - 6 = 6(x-1)$',
      exercise: {
        dropdowns: [
          {
            label: 'On $(-\\infty, -1)$, $f$ is:',
            options: ['Increasing', 'Decreasing'],
            correctAnswers: ['Increasing'],
            hints: ['Check the sign of $f\'(x)$ for $x < -1$.'],
            explanation: 'For $x < -1$: both $(x-3) < 0$ and $(x+1) < 0$, so $f\' = 3(-)(-) > 0$: increasing.'
          },
          {
            label: '$x = -1$ is a:',
            options: ['Local max', 'Local min', 'Inflection point', 'Neither'],
            correctAnswers: ['Local max'],
            hints: ['$f\'$ changes from $+$ to $-$ at $x = -1$.'],
            explanation: '$f\'$ goes from positive to negative: local maximum. (Or: $f\'\'(-1) = -12 < 0$: concave down = max.)'
          },
          {
            label: '$x = 1$ is a:',
            options: ['Local max', 'Local min', 'Inflection point', 'Neither'],
            correctAnswers: ['Inflection point'],
            hints: ['$f\'\'(1) = 0$ and $f\'\'$ changes sign at $x = 1$.'],
            explanation: '$f\'\'$ changes from negative (concave down) to positive (concave up) at $x = 1$: inflection point.'
          },
          {
            label: '$x = 3$ is a:',
            options: ['Local max', 'Local min', 'Inflection point', 'Neither'],
            correctAnswers: ['Local min'],
            hints: ['$f\'$ changes from $-$ to $+$ at $x = 3$.'],
            explanation: '$f\'$ goes from negative to positive: local minimum. ($f\'\'(3) = 12 > 0$: concave up = min.)'
          }
        ]
      }
    },
    {
      id: 'apps4-input',
      type: 'input-box' as const,
      content: '**Find the $y$-coordinate of the inflection point.** ✍️',
      exercise: {
        question: 'For $f(x) = x^3 - 3x^2 - 9x + 5$, find $f(1)$ (the $y$-value of the inflection point).',
        correctAnswer: '-6',
        acceptableAnswers: ['-6', '-6.0'],
        hints: [
          'The inflection point is at $x = 1$ (where $f\'\'$ changes sign).',
          'Substitute $x = 1$ into $f(x) = x^3 - 3x^2 - 9x + 5$.',
          '$f(1) = 1 - 3 - 9 + 5$.'
        ],
        explanation: '$f(1) = 1 - 3 - 9 + 5 = -6$.\\n\\nThe inflection point is at $(1, -6)$.'
      }
    },
    {
      id: 'apps4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Concept | Key Insight |
|:---:|:---:|
| 7-step procedure | Systematic: domain → intercepts → symmetry → $f'$ → $f''$ → ends → sketch |
| Reading $f'$ graphs | $f'$ sign → inc/dec; $f'$ zero with sign change → extremum |
| $f'$ increasing/decreasing | Tells you concavity of $f$ |
| Local extrema of $f'$ | = inflection points of $f$ |
| Even multiplicity in $f'$ | Flat spot, no extremum |

$$\\boxed{f' > 0: \\text{ inc} \\quad f' < 0: \\text{ dec} \\quad f'' > 0: \\text{ CU} \\quad f'' < 0: \\text{ CD}}$$

> **Up Next:** Part 5 — Mean Value Theorem.`
    }
  ]
};
