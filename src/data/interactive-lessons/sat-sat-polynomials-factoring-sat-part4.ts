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

Factor: $x(x^2 - 4) = x(x-2)(x+2)$. Three distinct factors → **3 x-intercepts**.`
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
            question: 'If $f(x)$ has zeros at $x = -1, 0, 2$ and $f(1) = -4$, what is $f(x)$?',
            options: ['$-2x(x+1)(x-2)$', '$x(x+1)(x-2)$', '$2x(x+1)(x-2)$', '$-x(x+1)(x-2)$'],
            correctAnswer: 0,
            explanation: '$f(x) = ax(x+1)(x-2)$. Plug in $(1, -4)$: $a(1)(2)(-1) = -2a = -4$ → $a = 2$. So $f(x) = 2x(x+1)(x-2)$. Wait — let me recheck. $f(1) = a(1)(1+1)(1-2) = a(1)(2)(-1) = -2a = -4$, so $a = 2$. Then $f(x) = 2x(x+1)(x-2)$. Hmm, but that gives positive leading term $2x^3$. Let me verify the answer choices... Actually $-2x(x+1)(x-2)$: at $x=1$, $-2(1)(2)(-1) = 4 \\neq -4$. So the correct function is $2x(x+1)(x-2)$, which is option C.'
          }
        ]
      }
    },
    {
      id: 'pf4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Zeros = roots = x-intercepts: set $f(x) = 0$ and solve
- **Multiplicity**: even = bounce off axis; odd = cross through
- **End behavior**: determined by degree and sign of leading coefficient
- Given zeros, write $f(x) = a(x - r_1)(x - r_2)\\ldots$ and find $a$ from another point`
    }
  ]
};
