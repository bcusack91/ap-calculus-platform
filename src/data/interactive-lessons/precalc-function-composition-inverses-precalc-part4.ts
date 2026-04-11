export const precalcCompositionPart4Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📊 Composition with Tables & Graphs

**Part 4 of 7**

### Reading from Tables

Given tables of $f$ and $g$:

| $x$ | $f(x)$ | $g(x)$ |
|:----|:-------|:-------|
| 1 | 3 | 2 |
| 2 | 5 | 4 |
| 3 | 1 | 1 |
| 4 | 2 | 3 |
| 5 | 4 | 5 |

**Find $(f \\circ g)(2)$:**

$g(2) = 4$, then $f(4) = 2$. So $(f \\circ g)(2) = 2$.

**Find $(g \\circ f)(3)$:**

$f(3) = 1$, then $g(1) = 2$. So $(g \\circ f)(3) = 2$.
      `
    },
    {
      id: 'p4-tables',
      type: 'text' as const,
      content: `
## 📝 Inverse from Tables

If $f$ is one-to-one, we can read $f^{-1}$ from the table by swapping input/output:

| $x$ | $f(x)$ |
|:----|:-------|
| 1 | 3 |
| 2 | 5 |
| 3 | 1 |
| 4 | 2 |

So $f^{-1}(3) = 1, f^{-1}(5) = 2, f^{-1}(1) = 3, f^{-1}(2) = 4$.

### Verifying One-to-One from a Table

Check: does any output appear more than once? If yes, $f$ is NOT one-to-one.

### Composition Chains from Tables

$(f \\circ f)(1)$: $f(1) = 3$, then $f(3) = 1$. So $(f \\circ f)(1) = 1$.

This means $1$ and $3$ form a **2-cycle** under $f$.
      `
    },
    {
      id: 'p4-graphs',
      type: 'text' as const,
      content: `
## 📈 Composition with Graphs

To find $(f \\circ g)(a)$ from graphs:

1. Go to $x = a$ on the graph of $g$ → read $g(a)$
2. Go to $x = g(a)$ on the graph of $f$ → read $f(g(a))$

### Graph of $f^{-1}$

Reflect the graph of $f$ across $y = x$.

**Key observations:**
- If $f$ passes through $(2, 5)$, then $f^{-1}$ passes through $(5, 2)$
- Increasing functions have increasing inverses
- $x$-intercepts of $f$ become $y$-intercepts of $f^{-1}$

### Fixed Points

A **fixed point** is where $f(x) = x$ (the graph crosses $y = x$).

At fixed points: $f(a) = a = f^{-1}(a)$. Both the function and its inverse share this point!
      `
    },
    {
      id: 'p4-mcq',
      type: 'multiple-choice' as const,
      content: `
**Tables & Graphs Quiz** 🎯

Use this table:
| $x$ | 1 | 2 | 3 | 4 |
|:----|:--|:--|:--|:--|
| $f(x)$ | 4 | 1 | 2 | 3 |
| $g(x)$ | 2 | 3 | 4 | 1 |
      `,
      exercise: {
        questions: [
          {
            question: '$(f \\circ g)(1) =$',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: '$g(1)=2, f(2)=1$.'
          },
          {
            question: '$(g \\circ f)(4) =$',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 3,
            explanation: '$f(4)=3, g(3)=4$.'
          },
          {
            question: '$f^{-1}(4) =$',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: '$f(1)=4$, so $f^{-1}(4) = 1$.'
          }
        ]
      }
    },
    {
      id: 'p4-input',
      type: 'input-boxes' as const,
      content: `
**Table Practice** 🧮

Use: $f(1)=3, f(2)=5, f(3)=7, f(4)=9$

**1)** $(f \\circ f^{-1})(7)$ = ?

**2)** $f^{-1}(9)$ = ?

**3)** $f^{-1}(f^{-1}(7))$ = ? (Hint: find $f^{-1}(7)$ first, then apply $f^{-1}$ again)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7', '4', '1'],
        hint1: '$f \\circ f^{-1} = $ identity, so $(f \\circ f^{-1})(7) = 7$.',
        hint2: '$f(4) = 9$, so $f^{-1}(9) = 4$.',
        hint3: '$f^{-1}(7) = 3$. $f^{-1}(3) = 1$ (since $f(1)=3$).',
        explanation: '1) $7$. 2) $4$. 3) $f^{-1}(7)=3, f^{-1}(3)=1$.'
      }
    },
    {
      id: 'p4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Graph & Table Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'If $f(2)=5$, the point on $f^{-1}$ is:',
            options: ['$(2, 5)$', '$(5, 2)$', '$(2, 1/5)$', '$(1/2, 5)$'],
            correctAnswer: 1
          },
          {
            label: 'A function is one-to-one from a table if:',
            options: ['All inputs are different', 'All outputs are different', 'Inputs equal outputs'],
            correctAnswer: 1
          },
          {
            label: 'At a fixed point, $f(a) = a$. This means $f^{-1}(a) =$',
            options: ['$0$', '$1$', '$a$', '$-a$'],
            correctAnswer: 2
          },
          {
            label: 'The line $y = x$ is the mirror for:',
            options: ['Inverse graphs', 'Even functions', 'Odd functions'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$(5, 2)$', 'All outputs are different', '$a$', 'Inverse graphs'],
        hint1: 'Inverse swaps coordinates.',
        hint2: 'One-to-one: no repeated outputs.',
        hint3: 'If $f(a) = a$, then $f^{-1}(a) = a$ too.',
        explanation: 'Swap coordinates for inverse. One-to-one: unique outputs. Fixed points lie on $y=x$. Inverse graphs reflect over $y=x$.'
      }
    },
    {
      id: 'p4-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x)$ passes through $(0, 4)$ and $(3, 0)$, the $y$-intercept of $f^{-1}$ is:',
            options: ['$4$', '$0$', '$3$', '$-4$'],
            correctAnswer: 2,
            explanation: '$(3, 0)$ on $f$ → $(0, 3)$ on $f^{-1}$. So the $y$-intercept of $f^{-1}$ is $3$.'
          },
          {
            question: 'From a table, if two inputs give the same output, then:',
            options: ['The function has an inverse', 'The function does NOT have an inverse', 'We need more information', 'The inverse has two values'],
            correctAnswer: 1,
            explanation: 'Repeated outputs mean the function is not one-to-one → no inverse.'
          }
        ]
      }
    }
  ]
};
