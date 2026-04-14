export const actIntermAlgPart2Data = {
  topicSlug: 'act-intermediate-algebra-act',
  sections: [
    {
      id: 'act-ia2-intro',
      type: 'text' as const,
      content: `
# 🔧 Functions & Notation

**Part 2 of 7 — Evaluating f(x), Domain & Range, Composition**

A **function** is a rule that assigns exactly one output to each input. On the ACT you'll see standard notation like $f(x)$, $g(x)$, etc.

**Evaluating a function** means substituting a value for $x$.

**Example 1:** If $f(x) = 3x^2 - 2x + 1$, find $f(4)$.

$$f(4) = 3(16) - 2(4) + 1 = 48 - 8 + 1 = 41$$

**Example 2:** If $g(x) = \\frac{x+1}{x-3}$, find $g(5)$.

$$g(5) = \\frac{5+1}{5-3} = \\frac{6}{2} = 3$$
      `
    },
    {
      id: 'act-ia2-domain',
      type: 'text' as const,
      content: `
## Domain & Range

The **domain** is the set of all valid inputs. The **range** is the set of all possible outputs.

Common domain restrictions:
- **Fractions:** denominator $\\neq 0$.
- **Square roots:** radicand $\\geq 0$ (for real numbers).
- **Logarithms:** argument $> 0$.

**Example 3:** Find the domain of $h(x) = \\frac{1}{x^2 - 9}$.

Set $x^2 - 9 \\neq 0$: $x \\neq \\pm 3$. Domain: all real numbers except $3$ and $-3$.

**Example 4:** Find the domain of $k(x) = \\sqrt{2x - 8}$.

$$2x - 8 \\geq 0 \\implies x \\geq 4$$

Domain: $[4, \\infty)$.
      `
    },
    {
      id: 'act-ia2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Function Evaluation** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 - 3x + 2$, what is $f(-1)$?',
            options: ['$0$', '$6$', '$4$', '$2$'],
            correctAnswer: 1,
            explanation: '$f(-1) = (-1)^2 - 3(-1) + 2 = 1 + 3 + 2 = 6$.'
          },
          {
            question: 'What value(s) are excluded from the domain of $g(x) = \\frac{5}{x + 2}$?',
            options: ['$x = 0$', '$x = -2$', '$x = 2$', '$x = 5$'],
            correctAnswer: 1,
            explanation: 'The denominator $x + 2 = 0$ when $x = -2$, so $x = -2$ is excluded.'
          }
        ]
      }
    },
    {
      id: 'act-ia2-composition',
      type: 'text' as const,
      content: `
## Function Composition

The **composition** $(f \\circ g)(x) = f(g(x))$ means plug $g(x)$ into $f$.

**Example 5:** Let $f(x) = 2x + 3$ and $g(x) = x^2$. Find $(f \\circ g)(4)$.

$$g(4) = 16 \\implies f(16) = 2(16) + 3 = 35$$

**Example 6:** Same functions. Find $(g \\circ f)(4)$.

$$f(4) = 11 \\implies g(11) = 121$$

**Order matters!** $f \\circ g \\neq g \\circ f$ in general.

**Example 7:** If $f(x) = x + 5$ and $g(x) = 3x$, find $f(g(x))$.

$$f(g(x)) = f(3x) = 3x + 5$$
      `
    },
    {
      id: 'act-ia2-input1',
      type: 'input-boxes' as const,
      content: `
**Function Practice** 🧮

Let $f(x) = 2x - 1$ and $g(x) = x^2 + 3$.

1) What is $f(5)$?

2) What is $g(-2)$?

3) What is $f(g(1))$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['9', '7', '7'],
        hint1: '$f(5) = 2(5) - 1$.',
        hint2: '$g(-2) = (-2)^2 + 3 = 4 + 3$.',
        hint3: 'First find $g(1) = 1 + 3 = 4$, then $f(4) = 2(4) - 1$.',
        explanation: '$f(5) = 9$. $g(-2) = 7$. $g(1) = 4$ then $f(4) = 7$.'
      }
    },
    {
      id: 'act-ia2-dropdown1',
      type: 'dropdown-select' as const,
      content: `
**Domain & Composition Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The domain of $\\sqrt{x - 5}$ is …',
            options: ['$x > 5$', '$x \\geq 5$', '$x \\leq 5$', 'all real numbers']
          },
          {
            label: '$(f \\circ g)(x)$ means you first apply …',
            options: ['$f$, then $g$', '$g$, then $f$', 'either order', 'neither']
          },
          {
            label: 'If $f(x) = x + 1$ and $g(x) = 2x$, then $g(f(3))$ equals …',
            options: ['$7$', '$8$', '$6$', '$9$']
          }
        ],
        correctAnswers: ['$x \\geq 5$', '$g$, then $f$', '$8$'],
        hint1: 'The radicand must be $\\geq 0$, so $x - 5 \\geq 0$.',
        hint2: '$(f \\circ g)(x) = f(g(x))$: evaluate $g$ first, then feed into $f$.',
        hint3: '$f(3) = 4$, then $g(4) = 8$.',
        explanation: 'Domain of $\\sqrt{x-5}$ is $x \\geq 5$. In $f \\circ g$ you apply $g$ first. $g(f(3)) = g(4) = 8$.'
      }
    },
    {
      id: 'act-ia2-act',
      type: 'multiple-choice' as const,
      content: `
**ACT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = \\frac{x}{x-4}$, which value of $x$ is NOT in the domain of $f$?',
            options: ['$0$', '$-4$', '$4$', '$1$'],
            correctAnswer: 2,
            explanation: 'The denominator is $x - 4$, which equals zero when $x = 4$.'
          },
          {
            question: 'If $f(x) = 3x - 2$ and $g(x) = x + 4$, what is $(f \\circ g)(2)$?',
            options: ['$12$', '$16$', '$8$', '$18$'],
            correctAnswer: 1,
            explanation: '$g(2) = 6$, then $f(6) = 3(6) - 2 = 16$.'
          }
        ]
      }
    }
  ]
};
