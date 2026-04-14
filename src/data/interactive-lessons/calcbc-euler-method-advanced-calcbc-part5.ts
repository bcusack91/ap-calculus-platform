export const calcbcEulerPart5Data = {
  topicSlug: 'euler-method-advanced-calcbc',
  sections: [
    {
      id: 'euler5-intro',
      type: 'text' as const,
      content: `# AP Exam Strategies — Euler's Method

**Part 5 of 7 — Maximizing FRQ Points**

### How Euler's Method Appears on the AP Exam

| Format | Frequency | What they ask |
|--------|-----------|---------------|
| FRQ part (b) or (c) | Very common | "Use Euler's method with 2 steps to approximate $y(1)$" |
| MC | Occasional | "Which value is the Euler approximation?" |
| Slope field + Euler | Common | "Is your approximation an over/underestimate?" |

### FRQ Point-Earning Template

**Step 1:** State the formula
$$y_{n+1} = y_n + f(x_n, y_n) \\cdot \\Delta x$$

**Step 2:** Compute $\\Delta x$
$$\\Delta x = \\frac{x_{\\text{target}} - x_0}{\\text{number of steps}}$$

**Step 3:** Build the table (show ALL intermediate values)

**Step 4:** Box your final answer

**Step 5:** If asked, justify over/underestimate using concavity

> **AP Tip:** Even with a wrong $f$ formula (from a previous part), you can earn Euler points for correct METHOD. Always show your process.`
    },
    {
      id: 'euler5-pitfalls',
      type: 'text' as const,
      content: `### Common Point-Losing Mistakes

| Mistake | Points lost | How to avoid |
|---------|------------|-------------|
| Using slope at wrong point | 1–2 | Always use $(x_n, y_n)$, not $(x_{n+1}, y_{n+1})$ |
| Wrong $\\Delta x$ | All | Read carefully: "two steps from $x = 0$ to $x = 1$" → $\\Delta x = 0.5$ |
| Not showing intermediate steps | 1 | Write out each step, don't skip to final |
| Arithmetic error | 1 | Check: does the sign of $\\Delta y$ match the slope? |
| No justification for over/under | 1 | Must cite $y'' > 0$ or $y'' < 0$ |

### The "Separation of Variables + Euler" Combo

A classic FRQ structure:
- Part (a): Sketch solution on slope field
- Part (b): Find exact solution by separation of variables
- Part (c): Use Euler's method to approximate
- Part (d): Is the Euler approximation an over/underestimate? Justify.

Parts (b)–(d) are often independent — you can earn points on (c) and (d) even if you miss (b).`
    },
    {
      id: 'euler5-mc1',
      type: 'multiple-choice' as const,
      content: '**AP-Style Questions**',
      exercise: {
        questions: [
          {
            question: '$dy/dx = y - x$, $y(1) = 2$. Using Euler with $\\Delta x = 0.5$, what is $y(2)$?',
            options: ['$y(1.5) = 2.5$, $y(2) = 3.0$', '$y(1.5) = 2.5$, $y(2) = 3.5$', '$y(1.5) = 3.0$, $y(2) = 4.0$', '$y(1.5) = 2.0$, $y(2) = 2.5$'],
            correctAnswer: 0,
            explanation: 'Step 1: $f(1,2) = 2 - 1 = 1$, $y(1.5) = 2 + 1(0.5) = 2.5$. Step 2: $f(1.5, 2.5) = 2.5 - 1.5 = 1$, $y(2) = 2.5 + 1(0.5) = 3.0$.'
          },
          {
            question: 'An FRQ gives $dy/dx = \\sin(xy)$, $y(0) = 1$. For Euler with one step, $\\Delta x = 0.5$. $y(0.5) =$',
            options: ['$1 + \\sin(0)(0.5) = 1$', '$1 + \\sin(0.5)(0.5)$', '$1 + 0.5$', '$\\sin(0) = 0$, so $y = 0$'],
            correctAnswer: 0,
            explanation: '$f(0, 1) = \\sin(0 \\cdot 1) = \\sin(0) = 0$. $y(0.5) = 1 + 0(0.5) = 1$.'
          },
          {
            question: 'Can you use Euler\'s method if $f(x, y)$ is undefined at a point?',
            options: ['No — you cannot compute the slope at that point', 'Yes, skip that step', 'Yes, use the previous slope', 'Yes, use $\\Delta y = 0$'],
            correctAnswer: 0,
            explanation: 'Euler requires evaluating $f(x_n, y_n)$ at each step. If undefined, the method breaks down.'
          }
        ]
      }
    },
    {
      id: 'euler5-dropdown',
      type: 'dropdown-select' as const,
      content: '**FRQ Setup**\n\n$dy/dx = x^2 + y$, $y(0) = -1$. Approximate $y(0.4)$ with 2 equal steps.',
      exercise: {
        dropdowns: [
          {
            label: '$\\Delta x =$',
            options: ['$0.2$', '$0.4$', '$0.1$', '$0.5$'],
            correctAnswers: ['$0.2$'],
            hints: ['$\\Delta x = (0.4 - 0)/2 = 0.2$.'],
            explanation: 'Two steps from $x = 0$ to $x = 0.4$: $\\Delta x = 0.2$.'
          },
          {
            label: 'Step 1: $f(0, -1) = 0 + (-1) = -1$. $y(0.2) =$',
            options: ['$-1 + (-1)(0.2) = -1.2$', '$-1 + (-1)(0.4) = -1.4$', '$-1 + 1(0.2) = -0.8$', '$-1.1$'],
            correctAnswers: ['$-1 + (-1)(0.2) = -1.2$'],
            hints: ['$y(0.2) = y(0) + f(0,-1) \\cdot \\Delta x = -1 + (-1)(0.2)$.'],
            explanation: '$y(0.2) = -1 - 0.2 = -1.2$.'
          },
          {
            label: 'Step 2: $f(0.2, -1.2) = 0.04 + (-1.2) = -1.16$. $y(0.4) =$',
            options: ['$-1.2 + (-1.16)(0.2) = -1.432$', '$-1.2 + (-1.16)(0.4) = -1.664$', '$-1.2 - 0.2 = -1.4$', '$-1.36$'],
            correctAnswers: ['$-1.2 + (-1.16)(0.2) = -1.432$'],
            hints: ['$y(0.4) = -1.2 + (-1.16)(0.2)$.'],
            explanation: '$y(0.4) \\approx -1.432$.'
          }
        ]
      }
    },
    {
      id: 'euler5-input',
      type: 'input-box' as const,
      content: '**Quick Compute**',
      exercise: {
        question: '$dy/dx = 2y$, $y(0) = 1$, one Euler step with $\\Delta x = 0.5$. What is $y(0.5)$? Enter a number.',
        correctAnswer: '2',
        acceptableAnswers: ['2', '2.0', '2.00'],
        hints: ['$f(0, 1) = 2(1) = 2$. $y(0.5) = 1 + 2(0.5)$.'],
        explanation: '$f(0,1) = 2$. $y(0.5) = 1 + 2(0.5) = 2$. (Exact: $e^1 \\approx 2.718$, so underestimate since $y\'\' = 4e^{2x} > 0$.)'
      }
    },
    {
      id: 'euler5-summary',
      type: 'text' as const,
      content: `### Summary

- Always show your table on FRQs
- Compute $\\Delta x$ correctly from the problem setup
- Justify over/underestimate with concavity ($y''$)
- Euler parts are often independent of other FRQ parts — always attempt

> **Next:** Part 6 — Problem-Solving Workshop.`
    }
  ]
};
