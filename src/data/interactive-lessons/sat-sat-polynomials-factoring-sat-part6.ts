export const satPolynomialsPart6Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf6-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 6 of 7 — Polynomial Graphs and Transformations**

### Reading Polynomial Graphs

From a graph, you can determine:
- **Zeros**: where the curve crosses/touches the x-axis
- **y-intercept**: where the curve crosses the y-axis (the constant term)
- **Degree**: count the number of turns + 1 (approximately)
- **Leading coefficient sign**: from end behavior

### Transformations

For $f(x) = x^3$:

| Transformation | Equation | Effect |
|---------------|----------|--------|
| Vertical shift up $k$ | $f(x) + k$ | Graph moves up |
| Horizontal shift right $h$ | $f(x - h)$ | Graph moves right |
| Vertical stretch by $a$ | $af(x)$ | Taller/narrower |
| Reflection over x-axis | $-f(x)$ | Flip upside down |
| Reflection over y-axis | $f(-x)$ | Flip left-right |

### SAT Graph Reading Strategy

When the SAT shows a polynomial graph and asks for the equation:
1. Read the x-intercepts → write factors
2. Check end behavior → determine sign of leading coefficient
3. Check one more point (often the y-intercept) → determine the leading coefficient

---

### Worked Example 1 — From Graph to Equation

**A graph crosses at $x = -1$ and $x = 4$, bounces at $x = 2$, and passes through $(0, -16)$. Find the equation.**

| Step | Work |
|------|------|
| Write factors | $a(x + 1)(x - 4)(x - 2)^2$ |
| Use $(0, -16)$ | $a(1)(-4)(4) = -16a = -16$ |
| Solve | $a = 1$ |
| Answer | $f(x) = (x+1)(x-4)(x-2)^2$ |

### Worked Example 2 — Transformation Chain

**If $f(x) = x^3$, describe the graph of $g(x) = -2(x + 1)^3 + 5$.**

| Transformation | Rule | Effect |
|---------------|------|--------|
| $(x + 1)^3$ | $f(x - h)$ with $h = -1$ | Shift left 1 |
| $2(\\cdots)$ | $af(x)$ with $a = 2$ | Vertical stretch by 2 |
| $-(\\cdots)$ | $-f(x)$ | Reflect over x-axis |
| $+ 5$ | $f(x) + k$ | Shift up 5 |

The inflection point moves from $(0, 0)$ to $(-1, 5)$.`
    },
    {
      id: 'pf6-quiz1',
      type: 'multiple-choice' as const,
      content: '**Polynomial Graphs** 🎯',
      exercise: {
        questions: [
          {
            question: 'A polynomial graph crosses the x-axis at $-2, 1,$ and $3$, and the y-intercept is $-12$. Which could be the equation?',
            options: ['$y = -2(x+2)(x-1)(x-3)$', '$y = (x+2)(x-1)(x-3)$', '$y = 2(x+2)(x-1)(x-3)$', '$y = -(x+2)(x-1)(x-3)$'],
            correctAnswer: 0,
            explanation: '$f(x) = a(x+2)(x-1)(x-3)$. At $x=0$: $a(2)(-1)(-3) = 6a = -12$ → $a = -2$.'
          },
          {
            question: 'If $g(x) = f(x - 3) + 2$, and $f$ has a minimum at $(1, -4)$, then $g$ has a minimum at:',
            options: ['$(4, -2)$', '$(1, -2)$', '$(-2, -2)$', '$(4, -4)$'],
            correctAnswer: 0,
            explanation: '$f(x-3)$ shifts right 3: $(1,\\,-4) \\to (4,\\,-4)$. Then $+2$ shifts up 2: $(4,\\,-4) \\to (4,\\,-2)$.'
          },
          {
            question: 'A degree-4 polynomial with a positive leading coefficient has how many possible shapes for its end behavior?',
            options: ['Both ends go up (↑↑)', 'Left down, right up (↓↑)', 'Both ends go down (↓↓)', 'Left up, right down (↑↓)'],
            correctAnswer: 0,
            explanation: 'Even degree + positive leading coefficient: both ends of the graph go up. Think of $x^4$.'
          }
        ]
      }
    },
    {
      id: 'pf6-text2',
      type: 'text' as const,
      content: `### Matching Equations to Graphs — Decision Framework

On the SAT, you'll often see four equation choices and one graph (or vice versa). Here's how to eliminate quickly:

| Check | What it tells you | How to read it |
|-------|------------------|----------------|
| End behavior | Degree (even/odd) + sign | Both ends same = even; opposite = odd |
| x-intercepts | Factors and their multiplicity | Crosses = odd mult.; bounces = even |
| y-intercept | Constant term | Plug $x = 0$ into each answer choice |
| Number of turns | Approximate degree | Turns ≤ degree − 1 |

### Worked Example 3 — Elimination by y-intercept

**Which polynomial has y-intercept $-6$ and zeros at $x = 1, 2, 3$?**

| Option | y-int (plug $x = 0$) | Match? |
|--------|---------------------|--------|
| $(x-1)(x-2)(x-3)$ | $(-1)(-2)(-3) = -6$ | ✅ |
| $2(x-1)(x-2)(x-3)$ | $2(-6) = -12$ | ❌ |
| $-(x-1)(x-2)(x-3)$ | $-(-6) = 6$ | ❌ |

Answer: $(x-1)(x-2)(x-3)$ — no extra coefficient needed.

### Inside vs. Outside — Transformation Direction

A common SAT trap: shifts **inside** the function go the **opposite** direction.

| Written | Direction |
|---------|-----------|
| $f(x - 3)$ | Right 3 |
| $f(x + 3)$ | Left 3 |
| $f(x) - 3$ | Down 3 |
| $f(x) + 3$ | Up 3 |

**Memory trick:** Inside is "opposite" — outside is "obvious."`
    },
    {
      id: 'pf6-quiz2',
      type: 'multiple-choice' as const,
      content: '**Graphs & Transformations** 🎯',
      exercise: {
        questions: [
          {
            question: 'If a polynomial graph bounces at $x = -1$ and crosses at $x = 3$, what is the minimum degree?',
            options: ['$3$', '$2$', '$4$', '$5$'],
            correctAnswer: 0,
            explanation: 'Bounce → minimum multiplicity 2. Cross → minimum multiplicity 1. Total: $2 + 1 = 3$.'
          },
          {
            question: 'The graph of $f(x) = x^2$ is shifted left 4 and down 7. The new vertex is at:',
            options: ['$(-4, -7)$', '$(4, -7)$', '$(-4, 7)$', '$(4, 7)$'],
            correctAnswer: 0,
            explanation: 'Original vertex $(0, 0)$. Left 4 → $(-4, 0)$. Down 7 → $(-4, -7)$. Equation: $(x+4)^2 - 7$.'
          },
          {
            question: 'A polynomial has y-intercept $12$ and factors $(x+1)$, $(x-2)$, and $(x-k)$. What is $k$?',
            options: ['$6$', '$-6$', '$3$', '$-3$'],
            correctAnswer: 0,
            explanation: 'At $x = 0$: $(0+1)(0-2)(0-k) = (1)(-2)(-k) = 2k = 12$, so $k = 6$.'
          }
        ]
      }
    },
    {
      id: 'pf6-dropdown',
      type: 'dropdown-select' as const,
      content: '**Transformation Identifier** 🔍\n\nWhat transformation does each change represent?',
      exercise: {
        dropdowns: [
          { label: '$f(x) → f(x) + 4$', options: ['Shift up 4', 'Shift right 4', 'Stretch by 4', 'Shift left 4'] },
          { label: '$f(x) → f(x - 5)$', options: ['Shift right 5', 'Shift left 5', 'Shift down 5', 'Stretch by 5'] },
          { label: '$f(x) → -f(x)$', options: ['Reflect over x-axis', 'Reflect over y-axis', 'Shift down 1', 'No change'] },
          { label: '$f(x) → 3f(x)$', options: ['Vertical stretch by 3', 'Shift up 3', 'Horizontal stretch by 3', 'Shift right 3'] }
        ],
        correctAnswers: ['Shift up 4', 'Shift right 5', 'Reflect over x-axis', 'Vertical stretch by 3'],
        hint1: 'Adding outside the function → vertical shift.',
        hint2: 'Subtracting inside: $f(x - 5)$ → opposite direction → shift right.',
        hint3: 'A negative sign outside reflects vertically. A multiplier outside is a vertical stretch.',
        explanation: '$+4$ outside = up 4. $x - 5$ inside = right 5 (opposite sign). Negative flips vertically. Multiplier $3$ outside = vertical stretch by factor 3.'
      }
    },
    {
      id: 'pf6-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 6

| Skill | Strategy |
|-------|----------|
| Graph → Equation | Read zeros, end behavior, y-intercept |
| Equation → Graph | Plot zeros, check multiplicity, draw end behavior |
| Transformations | Inside = horizontal (opposite); outside = vertical |
| Elimination | Plug $x = 0$ into choices to match y-intercept |

| Transformation | Direction Rule |
|---------------|----------------|
| $f(x - h)$ | Right $h$ (opposite sign) |
| $f(x + h)$ | Left $h$ (opposite sign) |
| $f(x) + k$ | Up $k$ (same sign) |
| $af(x)$, $a > 1$ | Vertical stretch |
| $-f(x)$ | Reflect over x-axis |

- On the SAT, always check the y-intercept — it's the fastest way to narrow four answer choices down to one`
    }
  ]
};
