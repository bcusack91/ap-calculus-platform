export const satFunctionsPart7Data = {
  topicSlug: 'sat-functions-graphs-sat',
  sections: [
    {
      id: 'sat-fn7-intro',
      type: 'text' as const,
      content: `
# 🏆 Review & Mixed Practice

**Part 7 of 7 — Key Formulas, Mixed SAT Problems, Strategy Tips**

Let's bring together everything from Parts 1–6. Here's your quick-reference sheet:

| Topic | Key Fact |
|-------|---------|
| **Notation** | $f(a)$ = plug $a$ into the rule for $f$ |
| **Domain** | Exclude values that cause ÷ 0 or $\\sqrt{\\text{neg}}$ |
| **Range** | Vertex $(h, k)$ of $a(x-h)^2+k$: min $k$ if $a>0$, max $k$ if $a<0$ |
| **Transformations** | $f(x-h)+k$ → right $h$, up $k$; $-f(x)$ reflects over $x$-axis |
| **Composition** | $f(g(x))$: apply $g$ first, then $f$ |
| **Inverse** | Swap $x,y$ and solve; $f(f^{-1}(x))=x$ |
| **Zeros** | Where $f(x) = 0$; $x$-axis crossings |
| **Piecewise** | Check which interval, use that rule |
| **Absolute value** | $|A| = B \\implies A = B$ or $A = -B$ |
      `
    },
    {
      id: 'sat-fn7-strat',
      type: 'text' as const,
      content: `
## SAT Strategy Tips

**1. Substitution is your best friend.** When a question says "find $f(g(2))$", just plug in step by step.

**2. Use answer choices.** If finding $f^{-1}(7)$ is hard algebraically, try each answer choice $c$ and see which gives $f(c) = 7$.

**3. Graph questions — read carefully:**
- "Where is $f(x) > 0$?" = where the graph is **above** the $x$-axis
- "Where is $f$ increasing?" = where the graph goes **uphill** left to right
- "What is the maximum of $f$?" = the **highest** $y$-value

**4. Transformation traps:**
- $f(x - 3)$ shifts **right** (not left!)
- $f(x) - 3$ shifts **down** (not up!)
- Don't confuse $2f(x)$ (stretch output) with $f(2x)$ (compress input)

**5. Absolute value = two cases.** Always split $|\\text{expr}| = k$ into two equations.
      `
    },
    {
      id: 'sat-fn7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 1** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = x^2 + 2x$ and $g(x) = x - 3$, what is $f(g(5))$?',
            options: ['$8$', '$12$', '$32$', '$35$'],
            correctAnswer: 0,
            explanation: '$g(5) = 5 - 3 = 2$. Then $f(2) = 4 + 4 = 8$.'
          },
          {
            question: 'The function $h(x) = \\frac{x + 1}{x^2 - 9}$ is undefined when $x =$',
            options: ['$-1$ only', '$3$ only', '$3$ and $-3$', '$-1, 3,$ and $-3$'],
            correctAnswer: 2,
            explanation: '$x^2 - 9 = 0 \\implies x^2 = 9 \\implies x = \\pm 3$. The numerator being zero ($x = -1$) doesn\'t make the function undefined — it just means $h(-1) = 0$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review — Set 2** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of $y = f(x)$ has a minimum at $(2, -5)$. The graph of $y = f(x - 3) + 1$ has a minimum at which point?',
            options: ['$(-1, -4)$', '$(5, -4)$', '$(5, -6)$', '$(-1, -6)$'],
            correctAnswer: 1,
            explanation: '$f(x - 3)$ shifts right 3: $x$-coordinate becomes $2 + 3 = 5$. The $+1$ shifts up 1: $y$-coordinate becomes $-5 + 1 = -4$. Minimum at $(5, -4)$.'
          },
          {
            question: 'If $f(x) = 2x + 6$, what is $f^{-1}(0)$?',
            options: ['$0$', '$3$', '$-3$', '$6$'],
            correctAnswer: 2,
            explanation: 'Solve $2x + 6 = 0 \\implies x = -3$. So $f(-3) = 0$, meaning $f^{-1}(0) = -3$.'
          }
        ]
      }
    },
    {
      id: 'sat-fn7-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Practice** 🧮

1) If $f(x) = 3x - 1$ and $g(x) = x^2 + 2$, find $g(f(2))$.
2) Solve $|2x - 8| = 6$. Find the **product** of the two solutions.
3) The vertex of $y = -(x + 3)^2 + 7$ is at $(-3, k)$. What is $k$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['27', '7', '7'],
        hint1: '$f(2) = 3(2) - 1 = 5$. Then $g(5) = ?$.',
        hint2: '$2x - 8 = 6 \\implies x = 7$. $2x - 8 = -6 \\implies x = 1$. Multiply them.',
        hint3: 'In $-(x+3)^2 + 7$, the vertex is $(-3, 7)$.',
        explanation: '$f(2) = 5$, $g(5) = 25 + 2 = 27$. Solutions: $x = 7$ or $x = 1$; product $= 7$. Vertex: $(-3, 7)$, so $k = 7$.'
      }
    },
    {
      id: 'sat-fn7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify & Solve** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$f(x) = \\frac{1}{\\sqrt{x - 1}}$ — domain is',
            options: ['$x > 0$', '$x > 1$', '$x \\geq 1$', '$x \\neq 1$']
          },
          {
            label: 'If $f(3) = 10$, then $f^{-1}(10) =$',
            options: ['$3$', '$10$', '$\\frac{1}{10}$', 'Cannot determine']
          },
          {
            label: '$g(x) = |x| + 2$ has range',
            options: ['$[0, \\infty)$', '$[2, \\infty)$', '$(-\\infty, 2]$', 'All reals']
          },
          {
            label: '$y = f(x) + 5$ shifts the graph',
            options: ['Right 5', 'Left 5', 'Up 5', 'Down 5']
          }
        ],
        correctAnswers: ['$x > 1$', '$3$', '$[2, \\infty)$', 'Up 5'],
        hint1: 'Need $x - 1 > 0$ (strict, because it\'s in the denominator under a root).',
        hint2: 'By definition of inverse: if $f(a) = b$, then $f^{-1}(b) = a$.',
        hint3: '$|x| \\geq 0$, so $|x| + 2 \\geq 2$.',
        explanation: '$x - 1 > 0 \\implies x > 1$. $f(3) = 10 \\implies f^{-1}(10) = 3$. $|x| + 2 \\geq 2$, range $[2, \\infty)$. Adding 5 outside shifts up 5.'
      }
    },
    {
      id: 'sat-fn7-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Level Mixed Problems** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $f(x) = ax + b$ where $f(2) = 7$ and $f(5) = 16$, what is $f(0)$?',
            options: ['$1$', '$-1$', '$3$', '$0$'],
            correctAnswer: 0,
            explanation: 'From $f(2) = 7$: $2a + b = 7$. From $f(5) = 16$: $5a + b = 16$. Subtract: $3a = 9 \\implies a = 3$. Then $b = 7 - 6 = 1$. So $f(0) = 3(0) + 1 = 1$.'
          },
          {
            question: 'A piecewise function $f$ satisfies $f(x) = |x - 2| + |x + 1|$. What is $f(0)$?',
            options: ['$1$', '$3$', '$-1$', '$5$'],
            correctAnswer: 1,
            explanation: '$f(0) = |0 - 2| + |0 + 1| = |-2| + |1| = 2 + 1 = 3$.'
          }
        ]
      }
    }
  ]
};
