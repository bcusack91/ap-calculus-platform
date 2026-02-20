export const calcabLimitsPart1Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit1-intro',
      type: 'text' as const,
      content: `
# ∫ Understanding Limits

**Part 1 of 7 — The Foundation of Calculus**

### 1. What Is a Limit?

A **limit** describes the value a function **approaches** as $x$ gets closer and closer to a particular value $c$. We write:

$$\\lim_{x \\to c} f(x) = L$$

This means: as $x$ approaches $c$ (from both sides), $f(x)$ gets arbitrarily close to $L$.

**Crucial insight:** The limit is about where the function is *heading*, not where it actually *is*. The function doesn't need to be defined at $x = c$ for the limit to exist.

### 2. Evaluating Limits by Direct Substitution

The simplest method: just plug in the value. If $f(c)$ produces a real number, then:

$$\\lim_{x \\to c} f(x) = f(c)$$

**Example:** $\\lim_{x \\to 3} (2x + 1) = 2(3) + 1 = 7$

This works for polynomials, exponentials, and other **continuous** functions.

### 3. The Indeterminate Form $\\frac{0}{0}$

When direct substitution gives $\\frac{0}{0}$, you have an **indeterminate form**. The limit may still exist — apply algebraic techniques.

**Factoring:** $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2}(x+2) = 4$

**Rationalizing:** $\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$

Multiply by conjugate: $\\frac{(x+4)-4}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2} \\to \\frac{1}{4}$

### 4. When Limits Do Not Exist

A limit **DNE** when:
- Left-hand and right-hand limits differ
- The function grows without bound
- The function oscillates (e.g., $\\sin(1/x)$ near $x = 0$)
      `
    },
    {
      id: 'limit1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$.',
            options: ['$0$', '$6$', '$3$', 'Does not exist'],
            correctAnswer: 1,
            explanation: 'Factor: $\\frac{x^2-9}{x-3} = \\frac{(x-3)(x+3)}{x-3} = x+3$. At $x=3$: $3+3=6$.'
          },
          {
            question: 'If $\\lim_{x \\to 5} f(x) = 12$, which of the following MUST be true?',
            options: ['$f(5) = 12$', 'As $x$ approaches 5, $f(x)$ approaches 12', 'The function is defined at $x = 5$', '$f(x) = 12$ for all $x$ near 5'],
            correctAnswer: 1,
            explanation: 'A limit statement only tells us about behavior *approaching* the point. The function might not be defined at $x=5$, or $f(5)$ might differ from 12 (hole in the graph).'
          }
        ]
      }
    },
    {
      id: 'limit1-detail',
      type: 'text' as const,
      content: `
### Key Techniques Summary

| Situation | Method | Example |
|-----------|--------|---------|
| Direct sub works | Plug in $c$ | $\\lim_{x \\to 2} x^3 = 8$ |
| $\\frac{0}{0}$ with polynomial | Factor & cancel | $\\frac{x^2-4}{x-2} \\to x+2$ |
| $\\frac{0}{0}$ with radical | Multiply by conjugate | $\\frac{\\sqrt{x+4}-2}{x}$ |
| $\\frac{\\text{nonzero}}{0}$ | Check for $\\pm\\infty$ or DNE | $\\frac{1}{x-3}$ near $x=3$ |

**AP Tip:** $\\frac{0}{0}$ does NOT mean DNE. It means "do more algebra."
      `
    },
    {
      id: 'limit1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+9} - 3}{x}$.',
            options: ['$\\frac{1}{6}$', '$0$', '$\\frac{1}{3}$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Multiply by conjugate: $\\frac{(x+9)-9}{x(\\sqrt{x+9}+3)} = \\frac{1}{\\sqrt{x+9}+3}$. At $x=0$: $\\frac{1}{3+3} = \\frac{1}{6}$.'
          }
        ]
      }
    },
    {
      id: 'limit1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Technique** 🔍\n\nFor each limit, select the best first step.`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 4} \\frac{x^2-16}{x-4}$', options: ['Direct substitution', 'Factor the numerator', 'Rationalize', 'Limit does not exist'] },
          { label: '$\\lim_{x \\to 1} (3x^2+2x-1)$', options: ['Direct substitution', 'Factor the numerator', 'Rationalize', 'Limit does not exist'] },
          { label: '$\\lim_{x \\to 0} \\frac{\\sqrt{x+1}-1}{x}$', options: ['Direct substitution', 'Factor the numerator', 'Rationalize', 'Limit does not exist'] }
        ],
        correctAnswers: ['Factor the numerator', 'Direct substitution', 'Rationalize'],
        hint1: 'Try substituting the value first. If you get 0/0, try another technique.',
        hint2: '$x^2-16 = (x-4)(x+4)$ is a difference of squares.',
        hint3: 'Polynomials are continuous, so direct substitution always works for them.',
        explanation: 'First: $\\frac{0}{0}$, factor $(x-4)(x+4)$. Second: polynomial, just plug in to get 4. Third: $\\frac{0}{0}$ with a radical, multiply by conjugate.'
      }
    }
  ]
}
