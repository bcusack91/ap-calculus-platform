export const calcabDefiniteIntegralsPart1Data = {
  topicSlug: 'definite-integrals-calcab',
  sections: [
    {
      id: 'int1-intro',
      type: 'text' as const,
      content: `# ∫ Definite Integrals

**Part 1 of 7 — Riemann Sums**

| Part | Topic |
|:---:|:---:|
| **1** | **Riemann Sums** |
| 2 | Definite Integral Definition |
| 3 | Properties of Integrals |
| 4 | FTC Part 1 |
| 5 | FTC Part 2 & Net Change |
| 6 | Problem-Solving Workshop |
| 7 | Comprehensive Review |

### The Area Problem

How do we find the exact area under a curve? Approximate with rectangles, then take $n \\to \\infty$.

$$\\boxed{\\Delta x = \\frac{b - a}{n}}$$

### Left, Right, and Midpoint Sums

| Type | Sample Point | Formula |
|:---:|:---:|:---:|
| Left ($L_n$) | Left endpoint $x_i$ | $\\sum_{i=0}^{n-1} f(x_i) \\Delta x$ |
| Right ($R_n$) | Right endpoint $x_{i+1}$ | $\\sum_{i=1}^{n} f(x_i) \\Delta x$ |
| Midpoint ($M_n$) | Midpoint $\\bar{x}_i$ | $\\sum_{i=1}^{n} f\\left(\\frac{x_{i-1}+x_i}{2}\\right) \\Delta x$ |

### Worked Example

**Approximate** $\\int_0^4 x^2\\,dx$ **with** $n = 4$ **using Left Riemann Sum.**

$\\Delta x = 1$. Left endpoints: $0, 1, 2, 3$.

$$L_4 = f(0) + f(1) + f(2) + f(3) = 0 + 1 + 4 + 9 = 14$$

The exact answer is $\\frac{64}{3} \\approx 21.33$, so $L_4 = 14$ is an **underestimate**.`
    },
    {
      id: 'int1-overunder',
      type: 'text' as const,
      content: `### Over- and Underestimates — Essential AP Skill

$$\\boxed{\\text{The relationship between the function's behavior and the estimate type determines over/under.}}$$

| Function Behavior | Left Sum | Right Sum | Midpoint | Trapezoidal |
|:---:|:---:|:---:|:---:|:---:|
| Increasing | Under | Over | — | Over |
| Decreasing | Over | Under | — | Under |
| Concave Up | — | — | Under | Over |
| Concave Down | — | — | Over | Under |

> **Key Concept:** For **increasing** functions, left rectangles miss the top-right corner (under), while right rectangles include extra area (over). The reverse for **decreasing**.

> **AP Tip:** The AP Exam loves asking "Is this an over- or underestimate?" You MUST justify by citing whether $f$ is increasing/decreasing (for L/R) or concave up/down (for M/T).`
    },
    {
      id: 'int1-quiz1',
      type: 'multiple-choice' as const,
      content: '**Riemann Sum Computations** 🎯',
      exercise: {
        questions: [
          {
            question: 'Approximate $\\int_0^4 x^2\\,dx$ using a Right Riemann Sum with $n = 4$.',
            options: ['$14$', '$30$', '$21.33$', '$20$'],
            correctAnswer: 1,
            explanation: 'Right endpoints: $1, 2, 3, 4$. $R_4 = 1 + 4 + 9 + 16 = 30$.'
          },
          {
            question: 'If $f$ is increasing on $[a,b]$, which Riemann sum overestimates $\\int_a^b f(x)\\,dx$?',
            options: ['Left', 'Right', 'Both Left and Right', 'Neither'],
            correctAnswer: 1,
            explanation: 'For an increasing function, the right endpoint is the highest on each subinterval, so the Right sum overestimates.'
          },
          {
            question: 'For $f$ increasing and concave up, the Midpoint sum is:',
            options: ['An overestimate', 'An underestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'For concave up functions, the midpoint rectangle sits below the curve (the curve bows above the midpoint value), so Midpoint underestimates.'
          }
        ]
      }
    },
    {
      id: 'int1-trap',
      type: 'text' as const,
      content: `### Trapezoidal Rule

The Trapezoidal Rule averages the Left and Right sums:

$$\\boxed{T_n = \\frac{\\Delta x}{2}\\left[f(x_0) + 2f(x_1) + 2f(x_2) + \\cdots + 2f(x_{n-1}) + f(x_n)\\right]}$$

**Pattern:** First and last values appear ONCE; all middle values are DOUBLED.

### Equal vs. Unequal Subintervals

With **unequal** subintervals (common on AP tables), apply the trapezoid formula to each pair:

$$T = \\frac{\\Delta x_1}{2}[f(x_0) + f(x_1)] + \\frac{\\Delta x_2}{2}[f(x_1) + f(x_2)] + \\cdots$$

### Worked Example

**Trapezoidal approximation of** $\\int_0^4 x^2\\,dx$ **with** $n = 4$:

$$T_4 = \\frac{L_4 + R_4}{2} = \\frac{14 + 30}{2} = 22$$

Exact: $64/3 \\approx 21.33$. Since $x^2$ is concave up, the Trapezoidal sum overestimates. ✓

> **AP Tip:** The trapezoidal rule with table data is one of the most common AP FRQ questions. Practice with unequal subintervals!`
    },
    {
      id: 'int1-quiz2',
      type: 'multiple-choice' as const,
      content: '**Trapezoidal Rule from a Table** 🎯\n\nGiven the table:\n\n| $x$ | 0 | 2 | 5 | 8 | 10 |\n|-----|---|---|---|---|----|\n| $f(x)$ | 3 | 7 | 11 | 6 | 4 |',
      exercise: {
        questions: [
          {
            question: 'Use the trapezoidal rule to approximate $\\int_0^{10} f(x)\\,dx$.',
            options: ['$62$', '$72.5$', '$67$', '$82$'],
            correctAnswer: 1,
            explanation: 'Unequal subintervals: $\\frac{2}{2}(3+7) + \\frac{3}{2}(7+11) + \\frac{3}{2}(11+6) + \\frac{2}{2}(6+4) = 10 + 27 + 25.5 + 10 = 72.5$.'
          },
          {
            question: 'If $f$ is concave down on $[0,10]$, is the trapezoidal approximation an over- or underestimate?',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswer: 1,
            explanation: 'For concave down functions, the trapezoids sit below the curve, so the Trapezoidal sum underestimates.'
          }
        ]
      }
    },
    {
      id: 'int1-dropdown',
      type: 'dropdown-select' as const,
      content: '**Classify each approximation.** 🔍\n\nLet $f$ be a positive, increasing, concave-up function on $[a,b]$.',
      exercise: {
        dropdowns: [
          {
            label: 'Left Riemann Sum is:',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['Underestimate'],
            hints: ['$f$ is increasing — does the left endpoint give too much or too little on each subinterval?'],
            explanation: 'Increasing ⇒ left endpoint is the smallest value on each subinterval ⇒ underestimate.'
          },
          {
            label: 'Trapezoidal Sum is:',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['Overestimate'],
            hints: ['Think about concavity. Concave up means the curve bows below the trapezoid.'],
            explanation: 'Concave up ⇒ the straight-line top of trapezoids lies above the curve ⇒ overestimate.'
          },
          {
            label: 'Midpoint Sum is:',
            options: ['Overestimate', 'Underestimate', 'Exact', 'Cannot determine'],
            correctAnswers: ['Underestimate'],
            hints: ['For concave up, the tangent line at the midpoint sits below the curve at the endpoints of the subinterval.'],
            explanation: 'Concave up ⇒ midpoint rectangle undershoots the curve ⇒ underestimate.'
          }
        ]
      }
    },
    {
      id: 'int1-input',
      type: 'input-box' as const,
      content: '**Compute a Riemann Sum.** ✍️',
      exercise: {
        question: 'Using a Right Riemann Sum with $n = 3$ equal subintervals, approximate $\\int_0^6 (x^2 + 1)\\,dx$.\n\n(Enter a whole number.)',
        correctAnswer: '118',
        acceptableAnswers: ['118', '118.0'],
        hints: [
          '$\\Delta x = \\frac{6-0}{3} = 2$.',
          'Right endpoints: $x = 2, 4, 6$.',
          '$R_3 = f(2) \\cdot 2 + f(4) \\cdot 2 + f(6) \\cdot 2 = 5(2) + 17(2) + 37(2)$.'
        ],
        explanation: '$\\Delta x = 2$. Right endpoints: $2, 4, 6$. $f(2) = 5$, $f(4) = 17$, $f(6) = 37$. $R_3 = 2(5 + 17 + 37) = 2(59) = 118$.'
      }
    },
    {
      id: 'int1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

| Concept | Key Formula |
|:---:|:---:|
| Subinterval width | $\\Delta x = (b-a)/n$ |
| Left Sum | Use left endpoints |
| Right Sum | Use right endpoints |
| Midpoint Sum | Use midpoint of each subinterval |
| Trapezoidal | $\\frac{\\Delta x}{2}[f(x_0) + 2f(x_1) + \\cdots + f(x_n)]$ |
| Over/Under (L/R) | Depends on increasing/decreasing |
| Over/Under (M/T) | Depends on concavity |

> **Up Next:** Part 2 — The Definite Integral.`
    }
  ]
};
