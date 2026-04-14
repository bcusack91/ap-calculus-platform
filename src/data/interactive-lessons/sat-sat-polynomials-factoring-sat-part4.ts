export const satPolynomialsPart4Data = {
  topicSlug: 'sat-polynomials-factoring-sat',
  sections: [
    {
      id: 'pf4-intro',
      type: 'text' as const,
      content: `# Polynomials & Factoring

**Part 4 of 7 — Zeros, Roots, and the Factor Theorem**

### Zeros = Roots = x-intercepts

These terms all mean the same thing: the values of $x$ where $f(x) = 0$.

If $f(x) = (x - 2)(x + 5)(x - 1)$, the zeros are $x = 2, -5, 1$.

### Multiplicity

The **multiplicity** of a zero is how many times its factor appears.

$f(x) = (x - 3)^2(x + 1)$:
- $x = 3$ has multiplicity 2 (graph touches x-axis and bounces)
- $x = -1$ has multiplicity 1 (graph crosses x-axis)

### End Behavior

| Degree | Leading Coeff. | Left End | Right End |
|--------|---------------|----------|-----------|
| Even | Positive | ↑ | ↑ |
| Even | Negative | ↓ | ↓ |
| Odd | Positive | ↓ | ↑ |
| Odd | Negative | ↑ | ↓ |

### SAT Connection

The SAT asks: "How many x-intercepts does the graph of $f(x) = x^3 - 4x$ have?"

Factor: $x(x^2 - 4) = x(x-2)(x+2)$. Three distinct factors → **3 x-intercepts**.

---

### Worked Example 1 — Building a Polynomial from Zeros

**Find a polynomial with zeros at $x = -1, 2, 5$ and leading coefficient $3$.**

| Step | Work |
|------|------|
| Write factors | $(x + 1)(x - 2)(x - 5)$ |
| Apply leading coeff. | $3(x + 1)(x - 2)(x - 5)$ |

### Worked Example 2 — Finding $a$ from a Point

**$f(x) = a(x - 1)(x + 3)$ passes through $(2, 10)$. Find $a$.**

| Step | Work |
|------|------|
| Substitute $(2, 10)$ | $10 = a(2 - 1)(2 + 3)$ |
| Simplify | $10 = a(1)(5) = 5a$ |
| Solve | $a = 2$ |
| Answer | $f(x) = 2(x - 1)(x + 3)$ |`
    },
    {
      id: 'pf4-quiz1',
      type: 'multiple-choice' as const,
      content: '**Zeros & End Behavior** 🎯',
      exercise: {
        questions: [
          {
            question: 'How many x-intercepts does $f(x) = (x-1)^2(x+3)(x-4)$ have?',
            options: ['$3$', '$4$', '$2$', '$1$'],
            correctAnswer: 0,
            explanation: 'The zeros are $x = 1, -3, 4$. Even though $x = 1$ has multiplicity 2, it is still just one x-intercept (the graph touches there). So 3 distinct x-intercepts.'
          },
          {
            question: 'As $x \\to \\infty$, $f(x) = -2x^3 + 5x$ approaches:',
            options: ['$-\\infty$', '$+\\infty$', '$0$', '$5$'],
            correctAnswer: 0,
            explanation: 'Odd degree, negative leading coefficient → right end goes down ($-\\infty$).'
          },
          {
            question: 'A polynomial has zeros at $x = 0, 3, -2$ and passes through $(1, 6)$. What is the leading coefficient $a$?',
            options: ['$-1$', '$1$', '$2$', '$-2$'],
            correctAnswer: 0,
            explanation: '$f(x) = ax(x-3)(x+2)$. At $(1, 6)$: $a(1)(1-3)(1+2) = a(1)(-2)(3) = -6a = 6$, so $a = -1$.'
          }
        ]
      }
    },
    {
      id: 'pf4-text2',
      type: 'text' as const,
      content: `### Multiplicity and Graph Behavior

| Multiplicity | Graph at that zero | Example |
|-------------|-------------------|---------|
| 1 (odd) | Crosses x-axis | $f(x) = x - 2$ at $x = 2$ |
| 2 (even) | Touches and bounces | $f(x) = (x - 2)^2$ at $x = 2$ |
| 3 (odd) | Crosses with inflection | $f(x) = (x - 2)^3$ at $x = 2$ |

### Worked Example 3 — Degree from Graph

**A graph crosses the x-axis at $x = -3$ and $x = 4$, and bounces at $x = 1$. Both ends point downward. What is the minimum degree?**

| Zero | Min. multiplicity |
|------|------------------|
| $x = -3$ (crosses) | 1 |
| $x = 1$ (bounces) | 2 |
| $x = 4$ (crosses) | 1 |
| Min. degree | $1 + 2 + 1 = 4$ |

Both ends down → even degree, negative leading coefficient ✓ (degree 4 is even).

### Worked Example 4 — Number of Real Zeros

**$f(x) = x^4 - 5x^2 + 4$. How many x-intercepts?**

| Step | Work |
|------|------|
| Let $u = x^2$ | $u^2 - 5u + 4 = (u-1)(u-4)$ |
| Back-substitute | $(x^2-1)(x^2-4) = (x+1)(x-1)(x+2)(x-2)$ |
| Count | 4 distinct x-intercepts |`
    },
    {
      id: 'pf4-quiz2',
      type: 'multiple-choice' as const,
      content: '**Graph Analysis** 🎯',
      exercise: {
        questions: [
          {
            question: 'A degree-5 polynomial with positive leading coefficient. What is the end behavior?',
            options: ['Left: $-\\infty$, Right: $+\\infty$', 'Both: $+\\infty$', 'Left: $+\\infty$, Right: $-\\infty$', 'Both: $-\\infty$'],
            correctAnswer: 0,
            explanation: 'Odd degree + positive leading coefficient → down on left, up on right. Think of $x^5$.'
          },
          {
            question: 'If $f(x) = (x+2)^3(x-1)^2$, at which zero does the graph cross the x-axis?',
            options: ['$x = -2$ only', '$x = 1$ only', 'Both', 'Neither'],
            correctAnswer: 0,
            explanation: 'Odd multiplicity (3) at $x = -2$ → crosses. Even multiplicity (2) at $x = 1$ → bounces. Only $x = -2$ crosses.'
          },
          {
            question: 'What is the maximum number of turning points for a degree-4 polynomial?',
            options: ['$3$', '$4$', '$2$', '$5$'],
            correctAnswer: 0,
            explanation: 'A degree-$n$ polynomial has at most $n - 1$ turning points. So degree 4: at most 3 turns.'
          }
        ]
      }
    },
    {
      id: 'pf4-dropdown',
      type: 'dropdown-select' as const,
      content: '**Match the Graph Feature** 🔍\n\nWhat does each piece of information tell you?',
      exercise: {
        dropdowns: [
          { label: 'Graph bounces off x-axis at $x = 4$', options: ['Even multiplicity at x = 4', 'Odd multiplicity at x = 4', 'x = 4 is not a zero', 'Degree is 4'] },
          { label: 'Both ends of graph point upward', options: ['Even degree, positive leading coeff.', 'Odd degree, positive leading coeff.', 'Even degree, negative leading coeff.', 'Odd degree, negative leading coeff.'] },
          { label: 'The polynomial has 5 x-intercepts', options: ['Degree is at least 5', 'Degree is exactly 5', 'Degree is at most 5', 'Leading coeff. is 5'] },
          { label: 'Graph crosses x-axis at $x = -1$ with an S-shape', options: ['Multiplicity 3 at x = −1', 'Multiplicity 1 at x = −1', 'Multiplicity 2 at x = −1', 'Not a zero'] }
        ],
        correctAnswers: ['Even multiplicity at x = 4', 'Even degree, positive leading coeff.', 'Degree is at least 5', 'Multiplicity 3 at x = −1'],
        hint1: 'Bounce = even multiplicity; cross = odd multiplicity.',
        hint2: 'Both ends same direction → even degree. Up → positive leading coefficient.',
        hint3: '5 x-intercepts means the degree is *at least* 5 (could be higher with repeated roots).',
        explanation: 'Bounce → even mult. Both ends up → even degree, positive lead. 5 zeros → degree ≥ 5. S-shaped crossing → multiplicity 3 (odd, with inflection).'
      }
    },
    {
      id: 'pf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

| Concept | Key Rule |
|---------|----------|
| Zeros from factors | $(x - r)$ → zero at $x = r$ |
| Even multiplicity | Graph bounces at zero |
| Odd multiplicity | Graph crosses at zero |
| End behavior | Degree (even/odd) + sign of leading coeff. |
| Max turning points | Degree minus 1 |
| Build polynomial | $f(x) = a(x - r_1)(x - r_2)\\cdots$ |

- Given zeros + one point → find $a$ by substitution
- Number of real zeros ≤ degree of polynomial
- The SAT often shows a graph and asks for the equation — read zeros + end behavior first`
    }
  ]
};
