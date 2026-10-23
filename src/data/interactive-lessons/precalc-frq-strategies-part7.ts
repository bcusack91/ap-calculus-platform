export const precalcFrqStrategiesPart7Data = {
  topicSlug: 'precalc-frq-strategies',
  sections: [
    {
      id: 'pfs7-intro',
      type: 'text' as const,
      content: `# 📝 Free-Response Strategies: the Four Question Types

**Part 7 of 7 — Mixed Mini-FRQ Set and Mastery Check**

### Two Mini-FRQs, Scored

Work each one on paper before reading the solution. Time yourself: about **8 minutes** each.

## Mini-FRQ A (Function Concepts style, calculator allowed)

The function $k$ is an exponential function. Selected values of $k$ are given in the table.

| $x$ | $0$ | $1$ | $2$ | $3$ |
|:---:|:---:|:---:|:---:|:---:|
| $k(x)$ | $3$ | $6$ | $12$ | $24$ |

**(A)** Find the value of $k(5)$.

**(B)** Find the average rate of change of $k$ over the interval $1 \\le x \\le 3$.

**(C)(i)** Explain why $k$ has an inverse function. **(ii)** Find $k^{-1}(48)$.

### Solution

**(A)** Consecutive ratios are $2$, so $k(x) = 3 \\cdot 2^x$ and $k(5) = 3 \\cdot 32 = 96$. *(1 point)*

**(B)** $\\dfrac{k(3) - k(1)}{3 - 1} = \\dfrac{24 - 6}{2} = 9$. *(1 point, quotient shown)*

**(C)(i)** "$k(x) = 3 \\cdot 2^x$ is strictly increasing (each output is double the previous), so every output occurs for exactly one input: $k$ is one-to-one and has an inverse." *(1 point)*

**(C)(ii)** $3 \\cdot 2^x = 48 \\Rightarrow 2^x = 16 \\Rightarrow x = 4$, so $k^{-1}(48) = 4$. *(1 point)*

## Mini-FRQ B (Symbolic Manipulations style, no calculator)

**(A)** Solve $2\\log_5 x = \\log_5(x + 6)$.

**(B)** Rewrite $3 \\cdot 9^x$ as a single power of $3$.

**(C)** Solve $\\cos\\theta = \\sin\\theta$ on $0 \\le \\theta < 2\\pi$.

### Solution

**(A)** $\\log_5 x^2 = \\log_5(x + 6) \\Rightarrow x^2 = x + 6 \\Rightarrow (x - 3)(x + 2) = 0$. The original equation needs $x > 0$, so $x = -2$ is rejected. **$x = 3$.** *(2 points: solution and rejection)*

**(B)** $9^x = (3^2)^x = 3^{2x}$, so $3 \\cdot 9^x = 3^{2x + 1}$. *(2 points)*

**(C)** Where $\\cos\\theta = \\sin\\theta$, the point on the unit circle has equal coordinates: $\\theta = \\dfrac{\\pi}{4}$ or $\\theta = \\dfrac{5\\pi}{4}$. (Equivalently, dividing by $\\cos\\theta \\ne 0$ gives $\\tan\\theta = 1$.) *(2 points)*

> **Key Fact:** Each solution above contains the same ingredients every time: the **computation**, the **check** (domain, interval), and the **answer in the form asked for**.`
    },
    {
      id: 'pfs7-mc',
      type: 'multiple-choice' as const,
      content: '**Mastery check.** 🎯 Use the table of $k$ from Mini-FRQ A where needed.',
      exercise: {
        questions: [
          {
            question: 'Using the table of the exponential function $k$, what is $k(5)$?',
            options: ['$96$', '$48$', '$72$', '$192$'],
            correctAnswer: 0,
            explanation: 'Each step of $1$ in $x$ doubles the output, so $k(x) = 3 \\cdot 2^x$ and $k(5) = 3 \\cdot 32 = 96$. $48$ is $k(4)$, $192$ is $k(6)$, and $72$ is $3 \\cdot 24$, which treats the pattern as multiplying $k(3)$ by $3$.'
          },
          {
            question: 'What is the average rate of change of $k$ over $0 \\le x \\le 3$?',
            options: ['$7$', '$21$', '$8$', '$3$'],
            correctAnswer: 0,
            explanation: '$\\frac{k(3) - k(0)}{3 - 0} = \\frac{24 - 3}{3} = 7$. $21$ is the total change without dividing, $8$ is $\\frac{24}{3}$, and $3$ is $k(0)$.'
          },
          {
            question: 'What is the solution set of $2\\log_5 x = \\log_5(x + 6)$?',
            options: ['$x = 3$ only', '$x = 3$ or $x = -2$', '$x = -2$ only', '$x = 6$ only'],
            correctAnswer: 0,
            explanation: 'Squaring the argument gives $x^2 = x + 6$ with roots $3$ and $-2$; since $\\log_5 x$ requires $x > 0$, only $x = 3$ is a solution. $x = 6$ gives $2\\log_5 6 \\ne \\log_5 12$.'
          },
          {
            question: 'Which expression is equivalent to $3 \\cdot 9^x$?',
            options: ['$3^{2x + 1}$', '$27^{x}$', '$3^{x + 2}$', '$9^{x + 3}$'],
            correctAnswer: 0,
            explanation: '$9^x = 3^{2x}$, and multiplying by $3 = 3^1$ adds $1$ to the exponent. $27^x = 3^{3x}$, $3^{x + 2} = 9 \\cdot 3^x$, and $9^{x + 3} = 729 \\cdot 9^x$.'
          }
        ]
      }
    },
    {
      id: 'pfs7-input',
      type: 'input-boxes' as const,
      content: `**Final checks.** ✍️

**1)** With $k(x) = 3 \\cdot 2^x$, the value of $k^{-1}(48)$:

**2)** The number of solutions of $\\cos\\theta = \\sin\\theta$ on $0 \\le \\theta < 2\\pi$:

**3)** The number of real solutions of $\\log_2 x + \\log_2(x - 2) = 3$ (after rejecting any extraneous value):`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2', '1'],
        hint1: '$3 \\cdot 2^x = 48 \\Rightarrow 2^x = 16$.',
        hint2: 'Equal coordinates on the unit circle happen at one angle in Quadrant I and one in Quadrant III.',
        hint3: 'The roots of $x^2 - 2x - 8 = 0$ are $4$ and $-2$; which is in the domain?',
        explanation: '(1) $2^x = 16$, so $x = 4$. (2) $\\theta = \\frac{\\pi}{4}$ and $\\frac{5\\pi}{4}$: two solutions. (3) Only $x = 4$ survives the domain check, so one solution.'
      }
    },
    {
      id: 'pfs7-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Free-Response Strategies

| Question | Role | Calculator | What it rewards |
|:---:|:---|:---:|:---|
| 1 | Function Concepts | yes | reading a table with a rule: composition, inverses, rates of change, asymptotes with limit notation |
| 2 | Modeling a Non-Periodic Context | yes | justified model choice, regression to three decimals, "approximately", units, limitations |
| 3 | Modeling a Periodic Context | no | midline/amplitude/period from a graph, an exact sinusoid, all solutions, increasing/decreasing and concavity |
| 4 | Symbolic Manipulations | no | exact solving with domain checks, equivalent forms, trig identities that leave one function |

- **6 points** per question, earned part by part; attempt every part
- Part A: **three decimals**, **approximately**, **stored model**; Part B: **exact**
- Every rate of change: **units + interval**; every justification: **from the data or the model**
- Budget **35 + 35 minutes**: Q1 ≈ 15, Q2 ≈ 20, Q3 ≈ 17, Q4 ≈ 18, with a two-minute convention check at the end of each section`
    }
  ]
};
