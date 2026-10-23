const fmJumpFigure = {
  svg: '<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" font-family="sans-serif"><g class="fig-muted" stroke="currentColor" stroke-width="1" stroke-dasharray="3 3"><line x1="180" y1="20" x2="180" y2="195"/></g><g stroke="currentColor" stroke-width="1.5"><line x1="30" y1="110" x2="305" y2="110"/><line x1="124" y1="200" x2="124" y2="10"/></g><text x="302" y="124" font-size="12" fill="currentColor">x</text><text x="130" y="16" font-size="12" fill="currentColor">y</text><text x="68" y="124" font-size="11" fill="currentColor" text-anchor="middle">-2</text><text x="170" y="124" font-size="11" fill="currentColor" text-anchor="end">2</text><text x="236" y="124" font-size="11" fill="currentColor" text-anchor="middle">4</text><text x="118" y="60" font-size="11" fill="currentColor" text-anchor="end">3</text><text x="118" y="96" font-size="11" fill="currentColor" text-anchor="end">1</text><text x="118" y="132" font-size="11" fill="currentColor" text-anchor="end">-1</text><g class="fig-accent"><line x1="40" y1="146" x2="180" y2="56" stroke="currentColor" stroke-width="2.5"/><line x1="180" y1="128" x2="292" y2="56" stroke="currentColor" stroke-width="2.5"/><circle class="fig-bg" cx="180" cy="56" r="4.5" stroke="currentColor" stroke-width="2"/><circle cx="180" cy="128" r="4.5" fill="currentColor"/></g><text x="188" y="52" font-size="11" fill="currentColor">(2, 3)</text><text x="188" y="142" font-size="11" fill="currentColor">(2, -1)</text></svg>',
  alt: 'Graph of a piecewise function. For x less than 2, a line with slope 1 rises from (-3, -2) toward the point (2, 3), ending in an open circle at (2, 3). For x at least 2, a second line with slope 1 starts at a filled dot at (2, -1) and rises to (6, 3). A dashed vertical line marks x = 2; the graph jumps down 4 units there.',
  caption: 'Figure 3. The graph of $j(x) = \\begin{cases} x + 1 & x < 2 \\\\ x - 3 & x \\ge 2 \\end{cases}$.',
  size: 'md' as const,
}

export const precalcFunctionModelingPart5Data = {
  topicSlug: 'function-modeling-precalc',
  sections: [
    {
      id: 'fm5-intro',
      type: 'text' as const,
      content: `# 🧭 Function Model Selection and Construction

**Part 5 of 7 — Building Piecewise Models**

### Graphing a Piecewise-Defined Function

For each piece:

1. **Graph the rule** as usual (line, parabola, constant).
2. **Keep only the part over that piece's interval.**
3. **Mark the endpoints:** $\\le$ or $\\ge$ (included) → a **closed dot** ●; $<$ or $>$ (excluded) → an **open dot** ○.

### Worked Example: the pieces meet

$$
h(x) = \\begin{cases}
x + 3 & x < 1 \\\\
-2x + 6 & x \\ge 1
\\end{cases}
$$

At the boundary $x = 1$, plug $1$ into **both** rules: the left rule gives $1 + 3 = 4$ (open dot, since $x < 1$ excludes $1$) and the right rule gives $-2(1) + 6 = 4$ (closed dot). Both land at $(1, 4)$, so the closed dot fills the open one and the graph has **no gap**. The value is $h(1) = 4$.

### Worked Example: the graph jumps

$$
j(x) = \\begin{cases}
x + 1 & x < 2 \\\\
x - 3 & x \\ge 2
\\end{cases}
$$

At $x = 2$: the left rule gives $2 + 1 = 3$, drawn as an **open dot at $(2, 3)$**; the right rule gives $2 - 3 = -1$, drawn as a **closed dot at $(2, -1)$**. The two heights differ, so the graph **jumps** down by $4$ at $x = 2$. It is still a function: $j(2) = -1$, the closed dot.

### Domain and range

For $p(x) = \\begin{cases} x + 3 & -3 \\le x < 1 \\\\ 5 & 1 \\le x \\le 4 \\end{cases}$:

- **Domain:** the union of the conditions, $[-3, 4]$.
- **Range:** the first piece runs from $p(-3) = 0$ up to, but not including, $1 + 3 = 4$, giving $[0, 4)$; the second piece contributes the single value $5$. Range: $[0, 4) \\cup \\{5\\}$.

> **Key Fact:** A vertical line at any $x$ crosses the graph **exactly once**: that is the picture of "one output per input."`
    },
    {
      id: 'fm5-graph-mc',
      type: 'multiple-choice' as const,
      figure: fmJumpFigure,
      content: '**Read the graph above.** 🎯',
      exercise: {
        questions: [
          {
            question: 'What is $j(2)$?',
            options: ['$-1$', '$3$', 'Both $-1$ and $3$', 'Undefined'],
            correctAnswer: 0,
            explanation: 'The closed dot at $(2, -1)$ is the function value: the condition $x \\ge 2$ includes $2$, so $j(2) = 2 - 3 = -1$. The open dot at $(2, 3)$ only marks where the left piece stops.'
          },
          {
            question: 'What does the open dot at $(2, 3)$ tell you?',
            options: ['The left piece excludes $x = 2$', 'The function takes the value $3$ at $x = 2$', 'The function is not defined at $x = 2$', 'The two pieces of the graph meet at $(2, 3)$'],
            correctAnswer: 0,
            explanation: 'An open dot marks an excluded endpoint: the left rule $x + 1$ applies only for $x < 2$. The function is defined at $2$ (the closed dot), and the pieces do not meet because their heights differ.'
          },
          {
            question: 'Using the graph, what is $j(1)$?',
            options: ['$2$', '$-2$', '$3$', '$0$'],
            correctAnswer: 0,
            explanation: 'Since $1 < 2$, the left piece applies: $j(1) = 1 + 1 = 2$. Using the right rule gives $-2$, the wrong piece.'
          }
        ]
      }
    },
    {
      id: 'fm5-words',
      type: 'text' as const,
      content: `## Building a Piecewise Model from Words

### Tiered pricing

A garage charges a flat $5$ dollars for up to $2$ hours and $3$ dollars for each additional hour (charged continuously). Let $C(t)$ be the cost in dollars after $t$ hours.

- For $0 < t \\le 2$: the cost is the constant $5$.
- For $t > 2$: start from $5$ and add $3$ per hour **beyond** $2$: $5 + 3(t - 2)$.

$$
C(t) = \\begin{cases}
5 & 0 < t \\le 2 \\\\
5 + 3(t - 2) & t > 2
\\end{cases}
$$

The pieces agree at $t = 2$ (both give $5$), so the cost never jumps.

### From data with a change point

A tank's volume $V(t)$, in liters, is recorded every $5$ minutes:

| $t$ (min) | $0$ | $5$ | $10$ | $15$ | $20$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $V(t)$ | $50$ | $150$ | $250$ | $210$ | $170$ |

The behavior changes at $t = 10$: the volume **rises** $100$ liters every $5$ minutes, then **falls** $40$ liters every $5$ minutes. Model each interval separately.

- **Filling, $0 \\le t \\le 10$:** rate $\\frac{100}{5} = 20$ L/min, starting at $50$: $V = 50 + 20t$.
- **Draining, $10 < t \\le 20$:** rate $\\frac{-40}{5} = -8$ L/min, starting from $250$ at $t = 10$: $V = 250 - 8(t - 10)$.

$$
V(t) = \\begin{cases}
50 + 20t & 0 \\le t \\le 10 \\\\
250 - 8(t - 10) & 10 < t \\le 20
\\end{cases}
$$

Both rules give $250$ at $t = 10$, as a tank's volume cannot change instantly. The domain in context is $0 \\le t \\le 20$, the interval the data cover.

### A tax bracket

A simplified tax $T(x)$ on an income of $x$ dollars charges $10\\%$ on the first $10{,}000$ dollars and $20\\%$ on every dollar above that:

$$
T(x) = \\begin{cases}
0.10x & 0 \\le x \\le 10000 \\\\
1000 + 0.20(x - 10000) & x > 10000
\\end{cases}
$$

The constant $1000$ is the tax already owed on the first bracket, so the brackets agree at $x = 10000$. For an income of $25{,}000$ dollars: $T(25000) = 1000 + 0.20(15000) = 4000$ dollars.

> **Key Fact:** In a model where the quantity cannot jump (volume, cost, tax), the rules must **agree at the change point**. Build the second rule from the value where the first one ends.`
    },
    {
      id: 'fm5-model-mc',
      type: 'multiple-choice' as const,
      content: '**Build the model.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Using $T(x) = \\begin{cases} 0.10x & 0 \\le x \\le 10000 \\\\ 1000 + 0.20(x - 10000) & x > 10000 \\end{cases}$, what is the tax on an income of $30{,}000$ dollars?',
            options: ['$5000$ dollars', '$6000$ dollars', '$3000$ dollars', '$4000$ dollars'],
            correctAnswer: 0,
            explanation: 'Since $30000 > 10000$, use the bottom rule: $1000 + 0.20(20000) = 1000 + 4000 = 5000$. Taxing the whole income at $20\\%$ gives $6000$, and $0.10(30000) = 3000$ uses the wrong piece.'
          },
          {
            question: 'A table gives $y = 3, 7, 11, 15, 15, 15$ at $t = 0, 1, 2, 3, 4, 5$. Which piecewise model matches the data?',
            options: ['$y = 3 + 4t$ for $0 \\le t \\le 3$ and $y = 15$ for $3 < t \\le 5$', '$y = 4t$ for $0 \\le t \\le 3$ and $y = 15$ for $3 < t \\le 5$', '$y = 3 + 4t$ for $0 \\le t \\le 5$', '$y = 3 + 4t$ for $0 \\le t \\le 3$ and $y = 15 + 4(t - 3)$ for $3 < t \\le 5$'],
            correctAnswer: 0,
            explanation: 'The values rise by $4$ per step from $3$ until $t = 3$ (where $3 + 4(3) = 15$), then stay constant at $15$. Starting from $4t$ gives $0$ at $t = 0$, one line would keep rising to $23$, and the last option keeps the growth going after $t = 3$.'
          },
          {
            question: 'For $p(x) = \\begin{cases} x + 3 & -3 \\le x < 1 \\\\ 5 & 1 \\le x \\le 4 \\end{cases}$, what is the range of $p$?',
            options: ['$[0, 4) \\cup \\{5\\}$', '$[0, 4] \\cup \\{5\\}$', '$[-3, 4]$', '$[0, 5]$'],
            correctAnswer: 0,
            explanation: 'The first piece takes values from $0$ (at $x = -3$) up to but not including $4$; the second piece is the constant $5$. The value $4$ itself is never reached (the first piece stops before $x = 1$), values between $4$ and $5$ never occur, and $[-3, 4]$ is the domain.'
          }
        ]
      }
    },
    {
      id: 'fm5-input',
      type: 'input-boxes' as const,
      content: `**Use the tank model.** ✍️

$V(t) = \\begin{cases} 50 + 20t & 0 \\le t \\le 10 \\\\ 250 - 8(t - 10) & 10 < t \\le 20 \\end{cases}$ (liters, minutes)

**1)** $V(7)$, in liters:

**2)** $V(15)$, in liters:

**3)** The time $t$, in minutes, at which the tank holds the most water:`,
      exercise: {
        boxes: 3,
        correctAnswers: ['190', '210', '10'],
        hint1: '$7 \\le 10$: use the filling rule.',
        hint2: '$15 > 10$: use the draining rule, $250 - 8(5)$.',
        hint3: 'The volume rises until the change point and falls after it.',
        explanation: '(1) $V(7) = 50 + 140 = 190$ L. (2) $V(15) = 250 - 40 = 210$ L. (3) The volume increases on $[0, 10]$ and decreases on $(10, 20]$, so the maximum of $250$ L occurs at $t = 10$ minutes.'
      }
    },
    {
      id: 'fm5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Tiered pricing.** 🔽 A garage charges a flat $5$ dollars for up to $2$ hours and $3$ dollars per additional hour, charged continuously. $C(t)$ is the cost in dollars after $t$ hours.',
      exercise: {
        dropdowns: [
          {
            label: 'For $0 < t \\le 2$, $C(t) =$',
            options: ['$5$', '$5t$', '$3t$', '$5 + 3t$'],
            correctAnswer: 0
          },
          {
            label: 'For $t > 2$, $C(t) =$',
            options: ['$5 + 3(t - 2)$', '$5 + 3t$', '$3(t - 2)$', '$5 + 3(t + 2)$'],
            correctAnswer: 0
          },
          {
            label: 'The cost of parking for $4.5$ hours is:',
            options: ['$12.50$ dollars', '$18.50$ dollars', '$13.50$ dollars', '$7.50$ dollars'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['$5$', '$5 + 3(t - 2)$', '$12.50$ dollars'],
        hint1: 'The first two hours cost a flat amount no matter how long.',
        hint2: 'Only the hours beyond $2$ are charged at $3$ dollars each.',
        hint3: '$4.5 - 2 = 2.5$ extra hours.',
        explanation: 'A flat charge is a constant piece. Beyond $2$ hours the cost is $5$ plus $3$ for each of the $t - 2$ extra hours. For $4.5$ hours: $5 + 3(2.5) = 12.50$ dollars; $5 + 3(4.5) = 18.50$ charges for the first two hours twice.'
      }
    },
    {
      id: 'fm5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Graph each piece over its own interval; **closed dot** for an included endpoint, **open dot** for an excluded one
- Plug the boundary into **both** rules: equal heights mean the pieces meet, different heights mean a **jump**
- **Domain** is the union of the conditions; find the **range** piece by piece
- From words: a flat fee is a constant piece; "per additional unit beyond $a$" means $\\text{(value at } a) + \\text{rate} \\cdot (t - a)$
- From data: find the **change point** where the pattern switches, model each interval, and make the rules agree there when the quantity cannot jump

> **Up Next:** Part 6 — the assumptions behind a model, and where it stops being valid.`
    }
  ]
};
