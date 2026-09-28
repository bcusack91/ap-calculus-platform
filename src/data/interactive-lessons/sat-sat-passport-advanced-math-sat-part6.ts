export const satPassportAdvPart6Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa6-intro',
      type: 'text' as const,
      content: `
# 🔄 Function Notation & Composition

**Part 6 of 7 — $f(g(x))$, Solving with Composition, Domain Restrictions**

**Function notation** $f(x)$ names the output when $x$ is the input.

**Example 1:** If $f(x) = 2x + 3$, find $f(4)$.

$$f(4) = 2(4) + 3 = 11$$

**Example 2:** If $g(x) = x^2 - 1$, find $g(-3)$.

$$g(-3) = (-3)^2 - 1 = 9 - 1 = 8$$

**Composition** means plugging one function into another:

$$f(g(x)) = f\\bigl(g(x)\\bigr) \\quad \\text{read "f of g of x"}$$

**Example 3:** $f(x) = 2x+1$, $g(x) = x^2$. Find $f(g(3))$.

$$g(3) = 9 \\implies f(9) = 2(9)+1 = 19$$

**SAT Tip:** Always work from the **inside out**: evaluate $g(x)$ first, then plug the result into $f$.
      `
    },
    {
      id: 'sat-pa6-composition',
      type: 'text' as const,
      content: `
## Composition as a Formula

You can also compose symbolically.

**Example 4:** $f(x) = 3x - 2$, $g(x) = x + 5$. Find $f(g(x))$.

$$f(g(x)) = f(x+5) = 3(x+5) - 2 = 3x + 15 - 2 = 3x + 13$$

**Example 5:** Same functions. Find $g(f(x))$.

$$g(f(x)) = g(3x-2) = (3x-2) + 5 = 3x + 3$$

> Notice $f(g(x)) \\neq g(f(x))$ in general. Composition is **not commutative**.

**Example 6 — Triple composition:** If $h(x) = x^2$, find $h(f(1))$ with $f(x) = 3x-2$.

$$f(1) = 1 \\implies h(1) = 1$$

So $h(f(1)) = 1$.
      `
    },
    {
      id: 'sat-pa6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Composition Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x + 4$ and $g(x) = 2x$, what is $f(g(3))$?',
            options: ['$10$', '$14$', '$7$', '$12$'],
            correctAnswer: 0,
            explanation: '$g(3) = 6$. $f(6) = 6 + 4 = 10$.'
          },
          {
            question: 'If $f(x) = x^2$ and $g(x) = x - 1$, what is $g(f(4))$?',
            options: ['$9$', '$15$', '$16$', '$25$'],
            correctAnswer: 1,
            explanation: '$f(4) = 16$. $g(16) = 16 - 1 = 15$.'
          }
        ]
      }
    },
    {
      id: 'sat-pa6-inverse',
      type: 'text' as const,
      content: `
## Domain Restrictions

The **domain** is the set of inputs a function accepts. On the SAT, two rules cause restrictions:

- A **denominator** cannot equal $0$.
- The expression under a **square root** cannot be negative.

**Example 7:** $f(x) = \\frac{3}{x - 4}$. The denominator is $0$ at $x = 4$, so the domain is all real numbers except $4$.

**Example 8:** $g(x) = \\sqrt{2x - 6}$. Require $2x - 6 \\geq 0$, so $x \\geq 3$.

**Domain of a composition:** $f(g(x))$ needs $g(x)$ to be an allowed input of $f$.

**Example 9:** $f(x) = \\frac{1}{x}$ and $g(x) = x - 5$. Then $f(g(x)) = \\frac{1}{x - 5}$, which is undefined at $x = 5$.

## Solving with Composition

**Example 10:** $f(x) = 2x + 3$ and $g(x) = x^2$. If $f(g(k)) = 21$, find all possible $k$.

$$2 \\cdot g(k) + 3 = 21 \\implies g(k) = 9 \\implies k^2 = 9 \\implies k = 3 \\text{ or } k = -3$$

**SAT Tip:** Undo the **outer** function first to find the value of the inner one, then solve for the input.
      `
    },
    {
      id: 'sat-pa6-input1',
      type: 'input-boxes' as const,
      content: `
**Function & Composition Calculations** 🧮

Let $f(x) = 4x - 3$ and $g(x) = x^2 + 1$.

1) What is $f(g(2))$?

2) What value of $x$ satisfies $f(x) = 9$?

3) What is $g(f(1))$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '3', '2'],
        hint1: '$g(2) = 4 + 1 = 5$. Then $f(5) = 20 - 3 = 17$.',
        hint2: 'Solve $4x - 3 = 9$.',
        hint3: '$f(1) = 4 - 3 = 1$. Then $g(1) = 1 + 1 = 2$.',
        explanation: '1) $f(g(2)) = f(5) = 17$. 2) $4x - 3 = 9 \\implies 4x = 12 \\implies x = 3$. 3) $g(f(1)) = g(1) = 2$.'
      }
    },
    {
      id: 'sat-pa6-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Function Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(g(x))$ means you evaluate … first.',
            options: ['$f(x)$', '$g(x)$', 'either one', 'neither']
          },
          {
            label: 'The function $h(x) = \\frac{1}{x - 7}$ is undefined at $x = $ …',
            options: ['$0$', '$1$', '$7$', '$-7$']
          },
          {
            label: 'If $g(2) = 5$ and $f(5) = 12$, then $f(g(2)) = $ …',
            options: ['$12$', '$5$', '$2$', '$17$']
          }
        ],
        correctAnswers: ['$g(x)$', '$7$', '$12$'],
        hint1: 'Composition works inside-out.',
        hint2: 'A fraction is undefined where its denominator equals $0$.',
        hint3: 'First find $g(2)$, then feed that output into $f$.',
        explanation: 'Evaluate $g(x)$ first (inside-out). $x - 7 = 0$ at $x = 7$, so $h$ is undefined there. $f(g(2)) = f(5) = 12$.'
      }
    },
    {
      id: 'sat-pa6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = 2x + 1$ and $g(x) = x^2 - 3$, which expression is equivalent to $g(f(x))$?',
            options: ['$4x^2 + 4x - 2$', '$2x^2 - 5$', '$4x^2 - 2$', '$4x^2 + 4x + 4$'],
            correctAnswer: 0,
            explanation: '$g(f(x)) = (2x + 1)^2 - 3 = 4x^2 + 4x + 1 - 3 = 4x^2 + 4x - 2$. $2x^2 - 5$ is $f(g(x))$, the other order; $4x^2 - 2$ squares $2x + 1$ as $4x^2 + 1$ and drops the middle term.'
          },
          {
            question: 'If $f(x) = \\sqrt{x}$ and $g(x) = x - 4$, what is the domain of $f(g(x))$?',
            options: ['All real numbers', '$x \\geq 4$', '$x \\geq 0$', '$x \\geq -4$'],
            correctAnswer: 1,
            explanation: '$f(g(x)) = \\sqrt{x - 4}$, which needs $x - 4 \\geq 0$, so $x \\geq 4$. $x \\geq 0$ is the domain of $f$ alone, not of the composition.'
          }
        ]
      }
    }
  ]
};
