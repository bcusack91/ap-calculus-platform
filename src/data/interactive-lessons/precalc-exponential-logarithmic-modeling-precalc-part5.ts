export const precalcExpLogModelingPart5Data = {
  topicSlug: 'exponential-logarithmic-modeling-precalc',
  sections: [
    {
      id: 'elm5-intro',
      type: 'text' as const,
      content: `
# 🪵 Logarithmic Functions in Context

**Part 5 of 7 — Logarithmic Functions in Context**

A **logarithmic model** has the form

$$\\boxed{y = a + b\\log_c x} \\qquad (\\text{often } y = a + b\\ln x \\text{ or } y = a + b\\log x)$$

Its defining pattern is the **mirror image** of the exponential pattern:

| Function | Equal input **differences** give… | Equal input **ratios** give… |
|:---------|:----------------------------------|:-----------------------------|
| exponential $y = ab^x$ | equal output **ratios** | — |
| logarithmic $y = a + b\\log_c x$ | — | equal output **differences** |

**Multiplying the input by $c$ adds $b$ to the output.** Multiplying the input by $c^2$ adds $2b$, and so on.

### A Log Model from Data

| $x$ | $1$ | $10$ | $100$ | $1000$ |
|:--|:--|:--|:--|:--|
| $y$ | $4$ | $7$ | $10$ | $13$ |

Each time $x$ is multiplied by $10$, $y$ increases by $3$, so $y = 4 + 3\\log x$. Check: $x = 100$ gives $4 + 3(2) = 10$ ✔.

| $x$ | $2$ | $4$ | $8$ | $16$ |
|:--|:--|:--|:--|:--|
| $y$ | $5$ | $8$ | $11$ | $14$ |

Each **doubling** of $x$ adds $3$: $y = 2 + 3\\log_2 x$ (at $x = 2$: $2 + 3(1) = 5$ ✔; at $x = 16$: $2 + 3(4) = 14$ ✔).

> **Justify (AP language):** "A logarithmic model is appropriate because the output values increase by a constant amount each time the input values are multiplied by the same factor."
      `
    },
    {
      id: 'elm5-shape',
      type: 'text' as const,
      content: `
## 📈 Shape, Calculator, and Inverse

### What the graph looks like

For $b > 0$, $y = a + b\\ln x$ is **increasing** and **concave down**: the output rises quickly for small $x$ and then more and more slowly — but it **never levels off**. There is no horizontal asymptote; $\\lim_{x \\to \\infty} (a + b\\ln x) = \\infty$. The vertical asymptote is $x = 0$, and the domain is $x > 0$.

Typical contexts: the time to learn a skill as practice hours grow, a reading on a logarithmic instrument scale, the loudness we *perceive* as sound intensity grows.

### Logarithmic regression on the calculator

\`LnReg\` fits $y = a + b\\ln x$ to a data set and returns $a$ and $b$. You read them off and use the model exactly as in Part 2.

> **Example:** \`LnReg\` returns $a = 12.4$ and $b = 5.3$, so $y = 12.4 + 5.3\\ln x$. Predicted value at $x = 20$: $12.4 + 5.3\\ln 20 \\approx 12.4 + 5.3(2.996) \\approx 28.3$.

### A log model is the inverse of an exponential model

If $y = 2 + 3\\log x$, then $\\log x = \\dfrac{y - 2}{3}$ and $x = 10^{(y-2)/3}$: solving a logarithmic model for the input produces an **exponential** expression. Swapping the roles of input and output turns a log model into an exponential one and back again (CED 2.10).
      `
    },
    {
      id: 'elm5-mcq',
      type: 'multiple-choice' as const,
      content: `
**Logarithmic Model Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which table is modeled by a logarithmic function?',
            options: [
              '$x = 1, 3, 9, 27$ with $y = 2, 5, 8, 11$',
              '$x = 1, 2, 3, 4$ with $y = 2, 5, 8, 11$',
              '$x = 1, 3, 9, 27$ with $y = 2, 6, 18, 54$',
              '$x = 1, 2, 3, 4$ with $y = 2, 6, 18, 54$'
            ],
            correctAnswer: 0,
            explanation: 'In the first table each tripling of $x$ adds $3$ to $y$: $y = 2 + 3\\log_3 x$. Equal input steps with equal output steps ($2, 5, 8, 11$ at $1, 2, 3, 4$) is linear; $y = 2x$ is linear too; and equal input steps with a constant output ratio ($2, 6, 18, 54$ at $1, 2, 3, 4$) is exponential.'
          },
          {
            question: 'For the model $y = 4 + 3\\log x$, what is $y$ when $x = 1000$?',
            options: [
              '$13$',
              '$3004$',
              '$7$',
              '$12$'
            ],
            correctAnswer: 0,
            explanation: '$\\log 1000 = 3$, so $y = 4 + 3(3) = 13$. The value $3004$ multiplies $x$ by $3$ instead of taking its log, $7$ uses $\\log 1000 = 1$, and $12$ drops the $4$ then adds it incorrectly.'
          },
          {
            question: 'Logarithmic regression gives $y = 12.4 + 5.3\\ln x$. Which is the model\'s prediction for $x = 20$?',
            options: [
              'About $28.3$',
              'About $118.4$',
              'About $15.9$',
              'About $19.3$'
            ],
            correctAnswer: 0,
            explanation: '$\\ln 20 \\approx 2.996$, so $y \\approx 12.4 + 5.3(2.996) \\approx 28.3$. The value $118.4$ forgets the logarithm ($12.4 + 5.3 \\cdot 20$), $15.9$ is $5.3\\ln 20$ without the $12.4$, and $19.3$ uses the common log $\\log 20 \\approx 1.301$ instead of $\\ln 20$.'
          }
        ]
      }
    },
    {
      id: 'elm5-input',
      type: 'input-boxes' as const,
      content: `
**Logarithmic Model Drill** 🧮

**1)** For $y = 4 + 3\\log x$, find $y$ when $x = 100$. (e.g., at $x = 10$: $4 + 3(1) = 7$)

**2)** For $y = 2 + 3\\log_2 x$, by how much does $y$ increase when $x$ goes from $4$ to $32$? (e.g., from $4$ to $8$: $x$ doubles once, so $y$ increases by $3$)

**3)** For $y = 4 + 3\\log x$, find $x$ when $y = 16$. (e.g., $y = 10$: $\\log x = 2$, so $x = 100$)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '9', '10000'],
        hint1: '$\\log 100 = 2$.',
        hint2: '$32 = 4 \\cdot 8 = 4 \\cdot 2^3$: three doublings, each adding $3$.',
        hint3: '$3\\log x = 12$, so $\\log x = 4$.',
        explanation: '1) $4 + 3(2) = 10$. 2) $3\\log_2 8 = 3(3) = 9$ (check: $y(4) = 8$, $y(32) = 17$). 3) $\\log x = 4$, so $x = 10^4 = 10{,}000$.'
      }
    },
    {
      id: 'elm5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Logarithmic Model Concepts** 🔽
      `,
      exercise: {
        dropdowns: [
          {
            label: 'For $y = a + b\\log x$, multiplying $x$ by $10$',
            options: ['adds $b$ to $y$', 'multiplies $y$ by $b$', 'adds $10b$ to $y$', 'adds $a$ to $y$']
          },
          {
            label: 'For $b > 0$, the graph of $y = a + b\\ln x$ is',
            options: ['increasing and concave down', 'increasing and concave up', 'decreasing and concave down', 'increasing with a horizontal asymptote']
          },
          {
            label: 'As $x \\to \\infty$, a logarithmic model',
            options: ['grows without bound, ever more slowly', 'approaches a horizontal asymptote', 'reaches a maximum value', 'oscillates']
          },
          {
            label: 'Solving a logarithmic model for its input gives an expression that is',
            options: ['exponential', 'linear', 'quadratic', 'also logarithmic']
          }
        ],
        correctAnswers: ['adds $b$ to $y$', 'increasing and concave down', 'grows without bound, ever more slowly', 'exponential'],
        hint1: '$\\log(10x) = 1 + \\log x$.',
        hint2: 'Rising, but flattening out.',
        hint3: 'Logs never level off: $\\lim_{x \\to \\infty} \\ln x = \\infty$. Inverting a log undoes it with an exponential.',
        explanation: '$b\\log(10x) = b + b\\log x$. With $b > 0$ the log model is increasing and concave down, grows without bound, and its inverse is exponential.'
      }
    },
    {
      id: 'elm5-exit',
      type: 'multiple-choice' as const,
      content: `
**Exit Quiz** ✅
      `,
      exercise: {
        questions: [
          {
            question: 'For the model $y = 5 + 2\\ln x$, by how much does $y$ change when $x$ increases from $e$ to $e^3$?',
            options: [
              'It increases by $4$',
              'It increases by $2e^2$',
              'It increases by $6$',
              'It is multiplied by $3$'
            ],
            correctAnswer: 0,
            explanation: '$y(e) = 5 + 2(1) = 7$ and $y(e^3) = 5 + 2(3) = 11$, an increase of $4$: multiplying the input by $e^2$ adds $2 \\cdot 2 = 4$. The output changes by a constant amount, not by a factor.'
          },
          {
            question: 'A data set has $y = 3, 5, 7, 9$ at $x = 1, 2, 4, 8$. Which model fits?',
            options: [
              '$y = 3 + 2\\log_2 x$',
              '$y = 3 + 2x$',
              '$y = 3(2)^x$',
              '$y = 3 + 2\\log x$'
            ],
            correctAnswer: 0,
            explanation: 'Each doubling of $x$ adds $2$ to $y$, so the model is logarithmic with base $2$: at $x = 8$, $3 + 2\\log_2 8 = 3 + 6 = 9$ ✔. The linear model $3 + 2x$ gives $19$ at $x = 8$, the exponential gives $768$, and $3 + 2\\log 8 \\approx 4.8$.'
          }
        ]
      }
    }
  ]
};
