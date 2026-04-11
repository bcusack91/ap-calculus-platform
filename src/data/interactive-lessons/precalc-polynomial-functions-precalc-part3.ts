export const precalcPolynomialPart3Data = {
  topicSlug: 'polynomial-functions-precalc',
  sections: [
    {
      id: 'p3-intro',
      type: 'text' as const,
      content: `
# 📐 Multiplicity and Graph Behavior at Zeros

**Part 3 of 7 — Crossing, Bouncing & Flattening**

Not all zeros look the same on a graph. Some create clean crossings, others produce "bounces," and still others create flat, S-shaped passes through the axis. The secret? **Multiplicity** — how many times a factor repeats.
      `
    },
    {
      id: 'p3-multiplicity-defined',
      type: 'text' as const,
      content: `
## 📖 What Is Multiplicity?

The **multiplicity** of a zero $r$ is the exponent on its corresponding factor $(x - r)$ in the fully factored polynomial.

For example, in $p(x) = 2(x + 1)^3(x - 4)^2(x - 7)$:

| Zero | Factor | Multiplicity |
|:----:|:------:|:------------:|
| $x = -1$ | $(x + 1)^3$ | 3 |
| $x = 4$ | $(x - 4)^2$ | 2 |
| $x = 7$ | $(x - 7)^1$ | 1 |

> 🔑 **Key idea:** The sum of all multiplicities equals the degree of the polynomial. Here: $3 + 2 + 1 = 6$, so $p(x)$ is degree 6.
      `
    },
    {
      id: 'p3-graph-behavior',
      type: 'text' as const,
      content: `
## 📈 Multiplicity and Graph Behavior

The multiplicity determines exactly how the graph interacts with the $x$-axis at each zero:

| Multiplicity | Behavior at the zero | Visual |
|:------------:|---------------------|:------:|
| **1** (odd) | Graph **crosses** the axis cleanly | ╱ or ╲ |
| **2** (even) | Graph **bounces** off the axis (touches but doesn't cross) | ∪ or ∩ |
| **3** (odd) | Graph **crosses** with an S-shaped flattening | ∼ |
| **4** (even) | Graph **bounces** with extra flattening | ⌒ |

> 🔑 **The rule:** **Odd** multiplicity → crosses. **Even** multiplicity → bounces.

The higher the multiplicity, the more the graph **flattens out** near the zero before crossing or bouncing.


---

### Worked Example

> **Describe the graph behavior at each zero of $f(x) = -3(x + 2)^2(x)(x - 5)^3$.**

| Zero | Multiplicity | Odd/Even | Graph behavior |
|:----:|:--:|:--:|-----------|
| $x = -2$ | 2 | Even | **Bounces** off the $x$-axis |
| $x = 0$ | 1 | Odd | **Crosses** the $x$-axis cleanly |
| $x = 5$ | 3 | Odd | **Crosses** with S-shaped flattening |

The degree is $2 + 1 + 3 = 6$ (even), and the leading coefficient is $-3$ (negative), so both ends point **down**.
      `
    },
    {
      id: 'p3-sign-chart',
      type: 'text' as const,
      content: `
## 📊 Sign Analysis Between Zeros

Between consecutive zeros, the polynomial is either entirely positive or entirely negative. The sign **changes** at crossings (odd multiplicity) but **stays the same** at bounces (even multiplicity).

### Example: $f(x) = (x + 3)(x - 1)^2(x - 4)$

**Zeros:** $x = -3$ (mult 1), $x = 1$ (mult 2), $x = 4$ (mult 1)

**Test a point in each interval:**

| Interval | Test point | Sign of $f$ | Reason |
|----------|:---------:|:----------:|--------|
| $(-\\infty, -3)$ | $x = -4$ | $+$ | All factors' net sign is positive |
| $(-3, 1)$ | $x = 0$ | $-$ | Crossed at $x = -3$, sign changed |
| $(1, 4)$ | $x = 2$ | $-$ | Bounced at $x = 1$, sign stayed same |
| $(4, +\\infty)$ | $x = 5$ | $+$ | Crossed at $x = 4$, sign changed |

> ⚠️ **Common mistake:** Forgetting that even-multiplicity zeros don't change the sign. The graph touches the axis but comes right back.
      `
    },
    {
      id: 'p3-concept-quiz',
      type: 'multiple-choice' as const,
      content: `
**Multiplicity Quiz** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The polynomial $g(x) = (x - 3)^4(x + 1)$ has what behavior at $x = 3$?',
            options: [
              'Crosses the $x$-axis cleanly',
              'Bounces off the $x$-axis',
              'Crosses with S-shaped flattening',
              'Does not touch the $x$-axis'
            ],
            correctAnswer: 1,
            explanation: 'At $x = 3$, the multiplicity is 4 (even). Even multiplicity means the graph **bounces** — it touches the axis and turns around without crossing.'
          },
          {
            question: 'If a polynomial has zeros at $x = -1$ (multiplicity 2), $x = 0$ (multiplicity 1), and $x = 3$ (multiplicity 3), what is the minimum possible degree?',
            options: [
              '3',
              '5',
              '6',
              '7'
            ],
            correctAnswer: 2,
            explanation: 'The degree must be at least the sum of multiplicities: $2 + 1 + 3 = 6$.'
          },
          {
            question: 'At a zero with multiplicity 3, the graph:',
            options: [
              'Bounces off the axis',
              'Crosses the axis cleanly like a line',
              'Crosses the axis with a flat, S-shaped curve',
              'Has a vertical tangent'
            ],
            correctAnswer: 2,
            explanation: 'Multiplicity 3 is odd (so it crosses), but the cube power creates a flat, S-shaped transition through the axis — similar to the shape of $y = x^3$ near the origin.'
          }
        ]
      }
    },
    {
      id: 'p3-calculation-drill',
      type: 'input-boxes' as const,
      content: `
**Multiplicity Drill** 🧮

**1)** What is the multiplicity of $x = 2$ in $p(x) = (x - 2)^3(x + 5)$? (e.g., for $(x-1)^4(x+2)$, the multiplicity of $x = 1$ is $4$)

**2)** What is the degree of $f(x) = 5(x + 1)^2(x - 3)^2(x - 6)$? (e.g., add all the multiplicities)

**3)** How many zeros of $g(x) = x^2(x - 4)^3(x + 7)^2$ cause the graph to **cross** the axis? (e.g., only odd-multiplicity zeros cross)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '5', '1'],
        hint1: 'The exponent on $(x - 2)$ tells you the multiplicity directly.',
        hint2: 'Add the exponents: $2 + 2 + 1$.',
        hint3: 'Identify which zeros have odd multiplicity: $x = 0$ (mult 2, even), $x = 4$ (mult 3, odd), $x = -7$ (mult 2, even). Only odd ones cross.',
        explanation: '1) The exponent on $(x-2)$ is 3. 2) Degree $= 2 + 2 + 1 = 5$. 3) Only $x = 4$ has odd multiplicity (3), so exactly 1 zero causes a crossing.'
      }
    },
    {
      id: 'p3-dropdown-practice',
      type: 'dropdown-select' as const,
      content: `
**Multiplicity Concepts — Fill in the Blanks** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Even multiplicity causes the graph to ______ at the zero',
            options: ['cross', 'bounce', 'have a vertical asymptote', 'be undefined']
          },
          {
            label: 'Odd multiplicity causes the graph to ______ at the zero',
            options: ['bounce', 'cross', 'approach infinity', 'have a hole']
          },
          {
            label: 'The sign of the polynomial ______ at an even-multiplicity zero',
            options: ['changes', 'stays the same', 'becomes zero permanently', 'is undefined']
          },
          {
            label: 'Higher multiplicity causes more ______ near the zero',
            options: ['oscillation', 'steepness', 'flattening', 'asymptotic behavior']
          }
        ],
        correctAnswers: ['bounce', 'cross', 'stays the same', 'flattening'],
        hint1: 'Even multiplicity means the graph touches the axis and turns around.',
        hint2: 'Odd multiplicity means the graph passes through to the other side.',
        hint3: 'If the graph bounces, the sign on both sides is the same.',
        explanation: 'Even multiplicity → bounce (no sign change). Odd multiplicity → cross (sign changes). Higher multiplicity creates more flattening near the axis.'
      }
    },
    {
      id: 'p3-exit-quiz',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz — Multiplicity** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'Which polynomial\'s graph bounces at $x = -2$ and crosses at $x = 5$?',
            options: [
              '$f(x) = (x + 2)(x - 5)^2$',
              '$f(x) = (x + 2)^2(x - 5)$',
              '$f(x) = (x - 2)^2(x + 5)$',
              '$f(x) = (x + 2)^3(x - 5)^2$'
            ],
            correctAnswer: 1,
            explanation: 'Bounce at $x = -2$ requires even multiplicity on $(x + 2)$, and crossing at $x = 5$ requires odd multiplicity on $(x - 5)$. $(x+2)^2(x-5)$ fits: multiplicity 2 at $-2$ (bounce), multiplicity 1 at $5$ (cross).'
          },
          {
            question: 'A degree-5 polynomial has a zero at $x = 1$ with multiplicity 2 and a zero at $x = -3$ with multiplicity 3. How does the graph behave at these two zeros?',
            options: [
              'Crosses at both',
              'Bounces at both',
              'Bounces at $x = 1$, crosses at $x = -3$',
              'Crosses at $x = 1$, bounces at $x = -3$'
            ],
            correctAnswer: 2,
            explanation: 'Multiplicity 2 (even) at $x = 1$ → bounce. Multiplicity 3 (odd) at $x = -3$ → cross (with S-shaped flattening).'
          }
        ]
      }
    }
  ]
};
