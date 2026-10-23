export const precalcCompositionPart4Data = {
  topicSlug: 'function-composition-inverses-precalc',
  sections: [
    {
      id: 'p4-intro',
      type: 'text' as const,
      content: `
# 📊 Composition with Tables & Graphs

**Part 4 of 7 — Composition with Tables & Graphs**

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

> ⚠️ If an inner output is **not** in the table, the composition is **undefined** from the table alone. With the table above, $(f \\circ g)(5)$ needs $f(5)$, which is not listed.
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
- A graph has an inverse function only if it passes the horizontal line test

*Aside:* where a graph crosses the line $y = x$, $f(a) = a$, so the function and its inverse share that point.
      `
    },
    {
      id: 'p4-graph-check',
      type: 'multiple-choice' as const,
      figure: {
        svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="92" y1="200" x2="92" y2="20"/><line x1="144" y1="200" x2="144" y2="20"/><line x1="196" y1="200" x2="196" y2="20"/><line x1="248" y1="200" x2="248" y2="20"/><line x1="40" y1="164" x2="300" y2="164"/><line x1="40" y1="128" x2="300" y2="128"/><line x1="40" y1="92" x2="300" y2="92"/><line x1="40" y1="56" x2="300" y2="56"/></g><g class="fig-muted" stroke="currentColor" stroke-width="1.5" stroke-dasharray="6 4"><line x1="40" y1="200" x2="274" y2="38"/></g><text x="280" y="34" font-size="11" fill="currentColor">y = x</text><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="200" x2="305" y2="200"/><line x1="40" y1="210" x2="40" y2="12"/></g><text x="302" y="214" font-size="12" fill="currentColor">x</text><text x="46" y="18" font-size="12" fill="currentColor">y</text><g font-size="11" fill="currentColor" text-anchor="middle"><text x="92" y="214">1</text><text x="144" y="214">2</text><text x="196" y="214">3</text><text x="248" y="214">4</text></g><g font-size="11" fill="currentColor" text-anchor="end"><text x="34" y="168">1</text><text x="34" y="132">2</text><text x="34" y="96">3</text><text x="34" y="60">4</text></g><g class="fig-accent"><polyline points="40,56 144,200 248,128" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="40" cy="56" r="4" fill="currentColor"/><circle cx="144" cy="200" r="4" fill="currentColor"/><circle cx="248" cy="128" r="4" fill="currentColor"/><text x="60" y="48" font-size="13" fill="currentColor" font-style="italic">f</text></g><g class="fig-accent-2"><polyline points="40,92 196,200 248,164" fill="none" stroke="currentColor" stroke-width="2.5"/><circle cx="40" cy="92" r="4" fill="currentColor"/><circle cx="196" cy="200" r="4" fill="currentColor"/><circle cx="248" cy="164" r="4" fill="currentColor"/><text x="110" y="124" font-size="13" fill="currentColor" font-style="italic">g</text></g></svg>',
        alt: 'Two piecewise-linear graphs on axes from 0 to 4. The graph of f goes from (0, 4) down to (2, 0) and then up to (4, 2). The graph of g goes from (0, 3) down to (3, 0) and then up to (4, 1). The dashed line y = x is also drawn.',
        caption: 'Figure. The graphs of $f$ (blue) and $g$ (red), with the line $y = x$ dashed.',
      },
      content: `
**Use the graphs above.** 📈 Read each inner value from its graph first, then feed it into the outer graph.
      `,
      exercise: {
        questions: [
          {
            question: 'What is $(f \\circ g)(1)$?',
            options: ['$0$', '$2$', '$3$', '$4$'],
            correctAnswer: 0,
            explanation: 'From the graph of $g$, $g(1) = 2$. From the graph of $f$, $f(2) = 0$. So $(f \\circ g)(1) = 0$. Reading $f(1) = 2$ first gives the wrong order, and $3$ is $g(0)$.'
          },
          {
            question: 'What is $(g \\circ f)(4)$?',
            options: ['$1$', '$2$', '$0$', '$4$'],
            correctAnswer: 0,
            explanation: '$f(4) = 2$, then $g(2) = 1$. The value $2$ stops after the first step, and $0$ is $g(3)$.'
          },
          {
            question: 'Is $f$ one-to-one on $0 \\leq x \\leq 4$?',
            options: ['No, because $f(1) = f(4) = 2$', 'Yes, because its graph is made of line segments', 'Yes, because it crosses the line $y = x$ once', 'No, because $f(2) = 0$'],
            correctAnswer: 0,
            explanation: 'The horizontal line $y = 2$ meets the graph of $f$ twice, at $x = 1$ and $x = 4$, so two inputs share an output. Being piecewise linear or having a zero says nothing about one-to-one.'
          },
          {
            question: 'Restricted to $0 \\leq x \\leq 2$, $f$ is one-to-one and passes through $(0, 4)$. Which point is on the graph of its inverse?',
            options: ['$(4, 0)$', '$(0, 4)$', '$(-4, 0)$', '$(0, \\tfrac{1}{4})$'],
            correctAnswer: 0,
            explanation: 'The inverse swaps inputs and outputs: $f(0) = 4$ means $f^{-1}(4) = 0$, the point $(4, 0)$. On the graph this is the reflection of $(0, 4)$ across the line $y = x$.'
          }
        ]
      }
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
            label: 'If the graph of $f$ crosses the line $y = x$ at $x = a$, then $f(a) = a$ and $f^{-1}(a) =$',
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
        explanation: 'Swap coordinates for inverse. One-to-one: unique outputs. A point on $y = x$ is shared by $f$ and $f^{-1}$. Inverse graphs reflect over $y=x$.'
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
