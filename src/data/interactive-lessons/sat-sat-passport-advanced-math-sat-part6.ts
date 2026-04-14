export const satPassportAdvPart6Data = {
  topicSlug: 'sat-passport-advanced-math-sat',
  sections: [
    {
      id: 'sat-pa6-intro',
      type: 'text' as const,
      content: `
# 🔄 Function Notation & Composition

**Part 6 of 7 — $f(g(x))$, Inverse Functions, Domain Restrictions**

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
## Inverse Functions

The **inverse** of $f$, written $f^{-1}$, "undoes" $f$:

$$f(f^{-1}(x)) = x \\quad \\text{and} \\quad f^{-1}(f(x)) = x$$

**To find $f^{-1}$:**
1. Write $y = f(x)$.
2. Swap $x$ and $y$.
3. Solve for $y$.

**Example 7:** $f(x) = 3x - 6$. Find $f^{-1}(x)$.

$y = 3x - 6 \\implies x = 3y - 6 \\implies x + 6 = 3y \\implies y = \\frac{x+6}{3}$

$$f^{-1}(x) = \\frac{x+6}{3}$$

**Check:** $f(f^{-1}(0)) = f(2) = 3(2)-6 = 0$ ✓

**Domain restrictions:** If $f$ has a restricted domain (e.g., $f(x) = \\sqrt{x}$, domain $x \\geq 0$), then the **range** of $f$ becomes the **domain** of $f^{-1}$.
      `
    },
    {
      id: 'sat-pa6-input1',
      type: 'input-boxes' as const,
      content: `
**Function & Inverse Calculations** 🧮

Let $f(x) = 4x - 3$ and $g(x) = x^2 + 1$.

1) What is $f(g(2))$?

2) Find $f^{-1}(x)$ and evaluate $f^{-1}(9)$.

3) What is $g(f(1))$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['17', '3', '2'],
        hint1: '$g(2) = 4 + 1 = 5$. Then $f(5) = 20 - 3 = 17$.',
        hint2: '$f^{-1}(x) = \\frac{x+3}{4}$. Plug in $x = 9$.',
        hint3: '$f(1) = 4 - 3 = 1$. Then $g(1) = 1 + 1 = 2$.',
        explanation: '1) $f(g(2)) = f(5) = 17$. 2) $f^{-1}(9) = \\frac{12}{4} = 3$. 3) $g(f(1)) = g(1) = 2$.'
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
            label: 'The graph of $f^{-1}$ is a reflection of $f$ over the line …',
            options: ['$y = 0$', '$x = 0$', '$y = x$', '$y = -x$']
          },
          {
            label: 'If $f(5) = 12$, then $f^{-1}(12) = $ …',
            options: ['$12$', '$5$', '$\\frac{1}{12}$', 'Cannot determine']
          }
        ],
        correctAnswers: ['$g(x)$', '$y = x$', '$5$'],
        hint1: 'Composition works inside-out.',
        hint2: 'Inverse functions swap the roles of $x$ and $y$.',
        hint3: 'The inverse undoes the function: if $f(a) = b$, then $f^{-1}(b) = a$.',
        explanation: 'Evaluate $g(x)$ first (inside-out). Inverse reflects over $y = x$. $f(5)=12$ means $f^{-1}(12) = 5$.'
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
            question: 'If $f(x) = 2x + 1$ and $g(x) = \\frac{x-1}{2}$, which statement is true?',
            options: ['$f$ and $g$ are inverse functions', '$f(g(x)) = x + 1$', '$g(f(x)) = 2x$', 'None of the above'],
            correctAnswer: 0,
            explanation: '$f(g(x)) = 2 \\cdot \\frac{x-1}{2} + 1 = (x-1)+1 = x$. $g(f(x)) = \\frac{(2x+1)-1}{2} = x$. Since both equal $x$, they are inverses.'
          },
          {
            question: 'The function $f(x) = (x-3)^2$ is defined for $x \\geq 3$. What is the domain of $f^{-1}$?',
            options: ['All real numbers', '$x \\geq 3$', '$x \\geq 0$', '$x > 0$'],
            correctAnswer: 2,
            explanation: 'The range of $f$ (for $x \\geq 3$) is $y \\geq 0$. The domain of $f^{-1}$ equals the range of $f$, so $x \\geq 0$.'
          }
        ]
      }
    }
  ]
};
