export const precalcRatesOfChangePart6Data = {
  topicSlug: 'rates-of-change-precalc',
  sections: [
    {
      id: 'p6-intro',
      type: 'text' as const,
      content: `
# ⛰️ Extrema and Points of Inflection

**Part 6 of 7 — Extrema & Inflection Points**

### Where a Function Turns

Where a polynomial switches between **increasing** and **decreasing**, it has a **local (relative) extremum**:

| Switch | Result | Rate of change |
|:-------|:-------|:---------------|
| increasing → decreasing | local maximum | positive → negative |
| decreasing → increasing | local minimum | negative → positive |

An **included endpoint** of a polynomial on a restricted domain also gives a local maximum or minimum.

### Local vs. Global

- A **global (absolute) maximum** is a local maximum that is greater than every other output value.
- A **global (absolute) minimum** is a local minimum that is less than every other output value.

### Three Facts About Polynomials

1. Between every two distinct real zeros there is **at least one** local maximum or minimum.
2. An **even-degree** polynomial has either a global maximum or a global minimum.
3. For a **quadratic**, the global maximum or minimum is at the **vertex**.
      `
    },
    {
      id: 'p6-mcq',
      type: 'multiple-choice' as const,
      content: `
**Extrema Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A polynomial $f$ increases for $x < 2$ and decreases for $x > 2$. Then $f(2)$ is:',
            options: ['A local maximum', 'A local minimum', 'A zero of $f$', 'A point of inflection'],
            correctAnswer: 0,
            explanation: 'Switching from increasing to decreasing produces a local maximum: the rate of change goes from positive to negative. Nothing here says the output at $x = 2$ is zero.'
          },
          {
            question: 'A degree-$4$ polynomial has a positive leading coefficient. Which must be true?',
            options: [
              'It has a global minimum but no global maximum',
              'It has a global maximum but no global minimum',
              'It has both a global maximum and a global minimum',
              'It has neither a global maximum nor a global minimum'
            ],
            correctAnswer: 0,
            explanation: 'Even degree with a positive leading coefficient means both ends rise without bound, so there is no global maximum. An even-degree polynomial has a global maximum or a global minimum, so here it is a global minimum.'
          },
          {
            question: 'A polynomial has real zeros at $x = -2$ and $x = 5$ and no zeros between them. What must it have?',
            options: [
              'A local maximum or minimum between $-2$ and $5$',
              'A point of inflection at exactly $x = 1.5$',
              'A global maximum between $-2$ and $5$',
              'No other real zeros anywhere'
            ],
            correctAnswer: 0,
            explanation: 'Between two distinct real zeros a nonconstant polynomial must turn around at least once, giving a local maximum or minimum. Nothing forces that extremum to be global, an inflection point to sit at the midpoint, or the zeros to be the only ones.'
          }
        ]
      }
    },
    {
      id: 'p6-table',
      type: 'text' as const,
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="190" x2="312" y2="190"/><line x1="40" y1="205" x2="40" y2="10"/></g><text x="306" y="206" font-size="12" fill="currentColor">x</text><text x="46" y="16" font-size="12" fill="currentColor">y</text><text x="92" y="206" font-size="11" fill="currentColor" text-anchor="middle">1</text><text x="144" y="206" font-size="11" fill="currentColor" text-anchor="middle">2</text><text x="196" y="206" font-size="11" fill="currentColor" text-anchor="middle">3</text><text x="248" y="206" font-size="11" fill="currentColor" text-anchor="middle">4</text><text x="300" y="206" font-size="11" fill="currentColor" text-anchor="middle">5</text><g class="fig-accent"><path d="M 40.0 182.0 L 53.0 166.9 L 66.0 157.0 L 79.0 151.6 L 92.0 150.0 L 105.0 151.4 L 118.0 155.0 L 131.0 160.1 L 144.0 166.0 L 157.0 171.9 L 170.0 177.0 L 183.0 180.6 L 196.0 182.0 L 209.0 180.4 L 222.0 175.0 L 235.0 165.1 L 248.0 150.0 L 261.0 128.9 L 274.0 101.0 L 287.0 65.6 L 300.0 22.0" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="92" cy="150" r="4.5" fill="currentColor"/><circle cx="196" cy="182" r="4.5" fill="currentColor"/></g><g class="fig-accent-2"><circle cx="144" cy="166" r="4.5" fill="currentColor"/></g><text x="92" y="140" font-size="11" fill="currentColor" text-anchor="middle">local max (1, 5)</text><text x="196" y="198" font-size="11" fill="currentColor" text-anchor="middle">local min (3, 1)</text><text x="152" y="170" font-size="11" fill="currentColor">inflection (2, 3)</text></svg>',
        alt: 'Graph of p(x) = x^3 - 6x^2 + 9x + 1 for x from 0 to 5. It rises to a local maximum at (1, 5), falls through the point of inflection (2, 3) to a local minimum at (3, 1), then rises steeply through (4, 5) toward (5, 21).',
        caption: 'Figure 1. $p(x) = x^3 - 6x^2 + 9x + 1$: the rates switch sign at the extrema and switch from decreasing to increasing at the point of inflection.',
      },
      content: `
## Reading Extrema and Inflection from a Table

$p(x) = x^3 - 6x^2 + 9x + 1$:

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:--|:--|:--|:--|:--|:--|:--|
| $p(x)$ | $1$ | $5$ | $3$ | $1$ | $5$ | $21$ |

Unit-interval average rates: $4, -2, -2, 4, 16$.

- **Local maximum** at $x = 1$: the outputs rise to $5$ and then fall. The rates switch from positive to negative.
- **Local minimum** at $x = 3$: the outputs fall to $1$ and then rise. The rates switch from negative to positive.
- **Point of inflection** at $x = 2$: the rates decrease until about $x = 2$ and then increase, so the graph changes from concave down to concave up. The rate of change is most negative near there.
- **No global extrema:** $p$ has odd degree, so its outputs eventually exceed $5$ and drop below $1$.

### Restricted Domains

On $[0, 4]$, the quadratic $f(x) = x^2 - 2x$ has its global minimum $-1$ at the vertex $x = 1$. Its global maximum is $f(4) = 8$, at the included endpoint $x = 4$.
      `
    },
    {
      id: 'p6-input',
      type: 'input-boxes' as const,
      content: `
**Use the Table for $p(x) = x^3 - 6x^2 + 9x + 1$** 🧮

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ | $5$ |
|:--|:--|:--|:--|:--|:--|:--|
| $p(x)$ | $1$ | $5$ | $3$ | $1$ | $5$ | $21$ |

**1)** The local maximum value of $p$:

**2)** The $x$-value of the local minimum:

**3)** The average rate of change of $p$ on $[1, 3]$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '-2'],
        hint1: 'Find where the outputs rise and then fall.',
        hint2: 'Find where the outputs fall and then rise.',
        hint3: '$\\frac{p(3) - p(1)}{3 - 1} = \\frac{1 - 5}{2}$.',
        explanation: '(1) The outputs rise to $5$ at $x = 1$ and then fall, so the local maximum value is $5$. (2) They fall to $1$ at $x = 3$ and then rise. (3) $\\frac{1 - 5}{2} = -2$.'
      }
    },
    {
      id: 'p6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Extrema Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Where a polynomial switches from decreasing to increasing, it has a:',
            options: ['Local maximum', 'Local minimum', 'Point of inflection', 'Zero'],
            correctAnswer: 1
          },
          {
            label: 'For $y = -2(x - 1)^2 + 7$, the global maximum is:',
            options: ['$-7$ at $x = 1$', '$-2$ at $x = 1$', '$7$ at $x = 1$', '$7$ at $x = -1$'],
            correctAnswer: 2
          },
          {
            label: 'A cubic with a positive leading coefficient has:',
            options: ['A global minimum only', 'No global extrema', 'A global maximum only', 'Both global extrema'],
            correctAnswer: 1
          },
          {
            label: 'For $p$ in the table, the rate of change is most negative near:',
            options: ['$x = 1$', '$x = 3$', '$x = 2$', '$x = 0$'],
            correctAnswer: 2
          }
        ],
        correctAnswers: ['Local minimum', '$7$ at $x = 1$', 'No global extrema', '$x = 2$'],
        hint1: 'Falling then rising makes a valley.',
        hint2: 'A downward parabola peaks at its vertex $(h, k)$.',
        hint3: 'Odd degree: one end falls without bound and the other rises without bound.',
        explanation: 'Decreasing then increasing gives a local minimum. The vertex $(1, 7)$ of a downward parabola is its global maximum. A cubic has no global extrema. The rates of $p$ are smallest near the inflection point $x = 2$.'
      }
    },
    {
      id: 'p6-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'On the restricted domain $[0, 4]$, where does $f(x) = x^2 - 2x$ reach its global maximum?',
            options: ['$x = 4$', '$x = 1$', '$x = 0$', '$x = 2$'],
            correctAnswer: 0,
            explanation: '$f(0) = 0$, $f(1) = -1$ and $f(4) = 8$. The vertex $x = 1$ gives the global minimum, and the included endpoint $x = 4$ gives the global maximum.'
          },
          {
            question: 'At a point of inflection of a polynomial, which of these switches?',
            options: [
              'Whether the rate of change is increasing or decreasing',
              'Whether the function is increasing or decreasing',
              'Whether the output values are positive or negative',
              'Whether the input values are positive or negative'
            ],
            correctAnswer: 0,
            explanation: 'Points of inflection occur where the rate of change switches between increasing and decreasing, which is where concavity changes. A switch in whether the function itself increases marks a local extremum.'
          }
        ]
      }
    }
  ]
};
