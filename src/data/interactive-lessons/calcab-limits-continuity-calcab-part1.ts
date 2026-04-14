export const calcabLimitsPart1Data = {
  topicSlug: 'limits-continuity-calcab',
  sections: [
    {
      id: 'limit1-intro',
      type: 'text' as const,
      content: `# ∫ Understanding Limits

**Part 1 of 7 — The Foundation of Calculus**

---

### Topics in This Part

| Section |
|---------|
| 📖 What Is a Limit? |
| Direct Substitution |
| 📌 The Indeterminate Form $\\frac{0}{0}$ |
| Algebraic Techniques: Factor, Rationalize, Expand |
| When Limits Do Not Exist |

> 🔑 **Key Concept:** A limit describes the value a function *approaches* as the input gets closer to a particular value. The function does NOT need to be defined at that point for the limit to exist.`
    },
    {
      id: 'limit1-definition',
      type: 'text' as const,
      content: `
## 📖 What Is a Limit?

A **limit** describes the value a function approaches as $x$ approaches a particular value $c$:

$$\\boxed{\\lim_{x \\to c} f(x) = L}$$

This means: as $x$ gets arbitrarily close to $c$ (from both sides), $f(x)$ gets arbitrarily close to $L$.

---

### Key Distinction

| Statement | What It Means |
|-----------|---------------|
| $\\lim_{x \\to c} f(x) = L$ | $f(x)$ *approaches* $L$ as $x$ approaches $c$ |
| $f(c) = L$ | The function *equals* $L$ at $x = c$ |

These are **different things**! A function can have a limit at a point where it's not defined, or where $f(c)$ differs from $L$.

---

### Graphical Intuition

Consider a function with a **hole** at $(3, 7)$ and $f(3) = 2$.

- $\\lim_{x \\to 3} f(x) = 7$ (the function *heads toward* 7)
- $f(3) = 2$ (the actual function value is 2)

> **AP Tip:** About 15% of AP Calculus MC questions involve limits. Mastering this concept is foundational for derivatives and integrals.`
    },
    {
      id: 'limit1-direct-sub',
      type: 'text' as const,
      content: `
## 📖 Evaluating Limits by Direct Substitution

The simplest method: **just plug in the value**. If $f(c)$ produces a real number, then:

$$\\boxed{\\lim_{x \\to c} f(x) = f(c) \\quad \\text{(if } f \\text{ is continuous at } c\\text{)}}$$

---

### Functions Where Direct Substitution Always Works

| Function Type | Example |
|--------------|---------|
| Polynomials | $\\lim_{x \\to 3} (2x^2 + 1) = 19$ |
| Exponentials | $\\lim_{x \\to 0} e^{2x} = 1$ |
| Trig functions | $\\lim_{x \\to \\pi} \\sin(x) = 0$ |
| Rational (if denominator $\\neq 0$) | $\\lim_{x \\to 1} \\frac{x+3}{x+1} = 2$ |

---

**Worked Example:**

$$\\lim_{x \\to 2} (x^3 - 4x + 7)$$

Substitute $x = 2$: $8 - 8 + 7 = 7$ ✓

> 🔑 **Key Fact:** All polynomial and exponential functions are continuous everywhere, so direct substitution always works for them.`
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
            explanation: 'Direct substitution gives $\\frac{0}{0}$, so we factor: $\\frac{x^2-9}{x-3} = \\frac{(x-3)(x+3)}{x-3} = x+3$. At $x=3$: $3+3=6$.'
          },
          {
            question: 'If $\\lim_{x \\to 5} f(x) = 12$, which of the following MUST be true?',
            options: ['$f(5) = 12$', 'As $x$ approaches 5, $f(x)$ approaches 12', 'The function is defined at $x = 5$', '$f(x) = 12$ for all $x$ near 5'],
            correctAnswer: 1,
            explanation: 'A limit statement only tells us about behavior *approaching* the point. The function might not be defined at $x=5$, or $f(5)$ might differ from 12 (hole in the graph).'
          },
          {
            question: 'Evaluate $\\lim_{x \\to -1} (x^3 + 3x^2 - 2)$.',
            options: ['$-4$', '$0$', '$2$', '$4$'],
            correctAnswer: 1,
            explanation: 'This is a polynomial — direct substitution works: $(-1)^3 + 3(-1)^2 - 2 = -1 + 3 - 2 = 0$.'
          }
        ]
      }
    },
    {
      id: 'limit1-indeterminate',
      type: 'text' as const,
      content: `
## 📌 The Indeterminate Form $\\frac{0}{0}$

When direct substitution gives $\\frac{0}{0}$, you have an **indeterminate form**. The limit may still exist — you must apply algebraic techniques to simplify.

$$\\boxed{\\frac{0}{0} \\text{ means "do more algebra" — NOT "does not exist"}}$$

---

### Technique 1: Factoring

$$\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2} = \\lim_{x \\to 2} \\frac{(x-2)(x+2)}{x-2} = \\lim_{x \\to 2}(x+2) = 4$$

---

### Technique 2: Rationalizing (Conjugate Multiplication)

$$\\lim_{x \\to 0} \\frac{\\sqrt{x+4} - 2}{x}$$

Multiply numerator and denominator by the conjugate $\\sqrt{x+4} + 2$:

$$= \\frac{(x+4) - 4}{x(\\sqrt{x+4}+2)} = \\frac{x}{x(\\sqrt{x+4}+2)} = \\frac{1}{\\sqrt{x+4}+2}$$

At $x = 0$: $\\frac{1}{2+2} = \\frac{1}{4}$

---

### Technique 3: Expanding

$$\\lim_{x \\to 0} \\frac{(x+3)^2 - 9}{x} = \\lim_{x \\to 0} \\frac{x^2+6x+9-9}{x} = \\lim_{x \\to 0} \\frac{x^2+6x}{x} = \\lim_{x \\to 0}(x+6) = 6$$

> **AP Tip:** On free-response questions, always show the algebraic simplification step. Simply writing the final answer without work earns 0 points.`
    },
    {
      id: 'limit1-quiz2',
      type: 'multiple-choice' as const,
      content: `**More Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Evaluate $\\lim_{x \\to 0} \\frac{\\sqrt{x+9} - 3}{x}$.',
            options: ['$\\frac{1}{6}$', '$0$', '$\\frac{1}{3}$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Multiply by conjugate: $\\frac{(x+9)-9}{x(\\sqrt{x+9}+3)} = \\frac{1}{\\sqrt{x+9}+3}$. At $x=0$: $\\frac{1}{3+3} = \\frac{1}{6}$.'
          },
          {
            question: 'Evaluate $\\lim_{x \\to -3} \\frac{x^2 + 5x + 6}{x + 3}$.',
            options: ['$-1$', '$0$', '$1$', 'Does not exist'],
            correctAnswer: 0,
            explanation: 'Factor numerator: $\\frac{(x+2)(x+3)}{x+3} = x+2$. At $x=-3$: $-3+2 = -1$.'
          }
        ]
      }
    },
    {
      id: 'limit1-dne',
      type: 'text' as const,
      content: `
## When Limits Do Not Exist (DNE)

A limit **does not exist** when:

| Situation | Example | Why DNE |
|-----------|---------|---------|
| Left ≠ Right | $\\lim_{x \\to 0} \\frac{|x|}{x}$ | Left gives $-1$, right gives $+1$ |
| Unbounded | $\\lim_{x \\to 0} \\frac{1}{x^2}$ | Grows to $+\\infty$ (we say $= \\infty$) |
| Oscillation | $\\lim_{x \\to 0} \\sin\\left(\\frac{1}{x}\\right)$ | Bounces between $-1$ and $1$ forever |

---

### $\\frac{\\text{nonzero}}{0}$ — Not Indeterminate!

$$\\frac{\\text{nonzero}}{0} \\Rightarrow \\text{Check } \\pm\\infty \\text{ or DNE}$$

**Example:** $\\lim_{x \\to 3} \\frac{1}{(x-3)^2} = +\\infty$ (both sides go to $+\\infty$)

**Example:** $\\lim_{x \\to 3} \\frac{1}{x-3}$ → DNE (left goes to $-\\infty$, right goes to $+\\infty$)

> 🔑 **Key Distinction:** $\\frac{0}{0}$ = indeterminate (do more work). $\\frac{\\text{nonzero}}{0}$ = usually $\\pm\\infty$ or DNE.`
    },
    {
      id: 'limit1-techniques-table',
      type: 'text' as const,
      content: `
## Key Techniques Summary

| Situation | Strategy | Result Example |
|-----------|----------|----------------|
| Direct sub works | Plug in $c$ | $\\lim_{x \\to 2} x^3 = 8$ |
| $\\frac{0}{0}$ — polynomial | Factor & cancel | $\\frac{x^2-4}{x-2} \\to x+2$ |
| $\\frac{0}{0}$ — radical | Multiply by conjugate | $\\frac{\\sqrt{x+4}-2}{x} \\to \\frac{1}{4}$ |
| $\\frac{0}{0}$ — binomial | Expand & simplify | $\\frac{(x+3)^2-9}{x} \\to 6$ |
| $\\frac{\\text{nonzero}}{0}$ | Check $\\pm\\infty$ or DNE | $\\frac{1}{(x-3)^2} \\to +\\infty$ |
| Left $\\neq$ Right | Compare one-sided limits | $\\frac{|x|}{x} \\to $ DNE |

> **AP Tip:** On the AP exam, the answer choice "does not exist" is tempting but usually wrong for $\\frac{0}{0}$ forms. Always try algebra first!`
    },
    {
      id: 'limit1-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Technique** 🔍\n\nFor each limit, select the best first step.`,
      exercise: {
        dropdowns: [
          { label: '$\\lim_{x \\to 4} \\frac{x^2-16}{x-4}$', options: ['Direct substitution', 'Factor the numerator', 'Rationalize', 'Limit does not exist'] },
          { label: '$\\lim_{x \\to 1} (3x^2+2x-1)$', options: ['Direct substitution', 'Factor the numerator', 'Rationalize', 'Limit does not exist'] },
          { label: '$\\lim_{x \\to 0} \\frac{\\sqrt{x+1}-1}{x}$', options: ['Direct substitution', 'Factor the numerator', 'Rationalize', 'Limit does not exist'] },
          { label: '$\\lim_{x \\to 2} \\frac{5}{(x-2)^2}$', options: ['Direct substitution', 'Factor the numerator', 'Rationalize', 'The limit is $+\\infty$'] }
        ],
        correctAnswers: ['Factor the numerator', 'Direct substitution', 'Rationalize', 'The limit is $+\\infty$'],
        hint1: 'Try substituting the value first. If you get 0/0, try another technique.',
        hint2: '$x^2-16 = (x-4)(x+4)$ is a difference of squares.',
        hint3: 'Polynomials are continuous, so direct substitution always works for them.',
        explanation: 'First: $\\frac{0}{0}$, factor $(x-4)(x+4)$. Second: polynomial, plug in to get 4. Third: $\\frac{0}{0}$ with radical, multiply by conjugate. Fourth: $\\frac{5}{0^+} = +\\infty$.'
      }
    },
    {
      id: 'limit1-input',
      type: 'input-box' as const,
      content: `**Compute the Limit** ✍️`,
      exercise: {
        question: 'Evaluate $\\lim_{x \\to 5} \\frac{x^2 - 25}{x - 5}$. Enter a number.',
        correctAnswer: '10',
        acceptableAnswers: ['10', '10.0'],
        hint1: 'Direct substitution gives $\\frac{0}{0}$. Factor the numerator.',
        hint2: '$x^2 - 25 = (x-5)(x+5)$',
        explanation: 'Factor: $\\frac{(x-5)(x+5)}{x-5} = x+5$. At $x=5$: $5+5 = 10$.'
      }
    }
  ]
}
