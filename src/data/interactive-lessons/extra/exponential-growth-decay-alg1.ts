import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Exponential Growth and Decay (Algebra 1).
 * Registry key: 'exponential-growth-decay-alg1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'exponential-growth-decay-alg1',
    sections: [
      {
        id: 'egd1-intro',
        type: 'text' as const,
        content: `# 📈 Exponential Growth and Decay

**Part 1 of 5 — What Makes a Function Exponential?**

---

### Topics in This Part

| Section |
|---------|
| Repeated Multiplication |
| The Form $y = a \\cdot b^{x}$ |
| Exponential vs. Linear |

> 🔑 **Key Concept:** A function is **exponential** when each step *multiplies* by a fixed number instead of *adding* one. That single difference is what makes money, populations, and viruses explode — or fade away.`,
      },
      {
        id: 'egd1-repeated',
        type: 'text' as const,
        content: `## Repeated Multiplication

A **linear** pattern grows by *adding* the same amount each step. An **exponential** pattern grows by *multiplying* by the same amount each step.

Suppose a single bacterium doubles every hour:

| Hour ($x$) | Bacteria ($y$) | How we got it |
|:---:|:---:|:---|
| 0 | 1 | start |
| 1 | 2 | $1 \\times 2$ |
| 2 | 4 | $2 \\times 2$ |
| 3 | 8 | $4 \\times 2$ |
| 4 | 16 | $8 \\times 2$ |

Every row is the previous row **times 2**. Instead of writing all those multiplications, we use an exponent:

$$y = 1 \\cdot 2^{x}$$

> 🔑 **Key Idea:** The exponent counts *how many times you multiply*. After $x$ hours you have multiplied by $2$ a total of $x$ times, so $y = 2^{x}$.`,
      },
      {
        id: 'egd1-table-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the doubling table above, what is the value of $y$ when $x = 5$?',
              options: ['$32$', '$10$', '$25$', '$20$'],
              correctAnswer: 0,
              explanation: 'Each step multiplies by $2$: after hour 4 you have $16$, so hour 5 is $16 \\times 2 = 32$. (Or $2^{5} = 32$.)',
            },
            {
              question: 'Which describes an **exponential** pattern?',
              options: [
                'Each value is the previous value times a fixed number',
                'Each value is the previous value plus a fixed number',
                'Each value is the previous value minus 3',
                'The values stay constant',
              ],
              correctAnswer: 0,
              explanation: 'Exponential = repeated **multiplication** by a fixed factor. Adding a fixed number is linear.',
            },
          ],
        },
      },
      {
        id: 'egd1-form',
        type: 'text' as const,
        content: `## The Form $y = a \\cdot b^{x}$

Every exponential function can be written as:

$$y = a \\cdot b^{x}$$

| Symbol | Name | What it means |
|:---:|:---|:---|
| $a$ | **initial value** | the value of $y$ when $x = 0$ (the start) |
| $b$ | **base** (growth/decay factor) | the number you multiply by each step |
| $x$ | **exponent** | the number of steps (often time) |

**Why is $a$ the start?** When $x = 0$, $\\;b^{0} = 1$, so $y = a \\cdot 1 = a$.

### Example

$$y = 5 \\cdot 3^{x}$$

Here $a = 5$ (you start at $5$) and $b = 3$ (you triple every step).

> 💡 **Read it like a sentence:** "Start at $a$, and multiply by $b$ each time."`,
      },
      {
        id: 'egd1-identify',
        type: 'input-boxes' as const,
        content: `**Identify $a$ and $b$** 🧮

For each function, read off the initial value $a$ and the base $b$.

**1)** $y = 7 \\cdot 2^{x}$.   $a = \\,?$
**2)** $y = 7 \\cdot 2^{x}$.   $b = \\,?$
**3)** $y = 100 \\cdot (0.5)^{x}$.   $a = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '2', '100'],
          hint1: 'In $a \\cdot b^{x}$, the number in front is $a$ and the number being raised to the power is $b$.',
          hint2: 'For $7 \\cdot 2^{x}$: $a = 7$, $b = 2$.',
          hint3: 'For $100 \\cdot (0.5)^{x}$: the front number is the initial value $a = 100$.',
          explanation: '1) $a = 7$ (the starting amount).  2) $b = 2$ (the base you multiply by).  3) $a = 100$.',
        },
      },
      {
        id: 'egd1-vs-linear',
        type: 'text' as const,
        content: `## Exponential vs. Linear

Both grow, but they grow in completely different *shapes*.

| | Linear $y = mx + b$ | Exponential $y = a \\cdot b^{x}$ |
|:---|:---|:---|
| Step rule | **add** a fixed amount | **multiply** by a fixed factor |
| First differences | constant | **not** constant |
| Ratios of values | not constant | **constant** |
| Graph shape | straight line | curve that bends upward (or hugs the axis) |

**Quick test:** Look at a $y$-table. Divide each value by the one before it.
- If those *ratios* are all equal → **exponential**.
- If the *differences* are all equal → **linear**.

> ⚠️ **Common confusion:** "$y = x^{2}$" is **not** exponential — the variable is in the *base* there, not the exponent. Exponential means the variable is *up in the exponent*: $2^{x}$, not $x^{2}$.`,
      },
      {
        id: 'egd1-classify',
        type: 'dropdown-select' as const,
        content: `**Linear or Exponential?** 🔽

Classify each table or rule.`,
        exercise: {
          dropdowns: [
            { label: '$y$-values $3, 6, 12, 24$ (each $\\times 2$):', options: ['Exponential', 'Linear'] },
            { label: '$y$-values $3, 7, 11, 15$ (each $+4$):', options: ['Linear', 'Exponential'] },
            { label: 'The rule $y = 4 \\cdot 5^{x}$:', options: ['Exponential', 'Linear'] },
            { label: 'The rule $y = 5x + 4$:', options: ['Linear', 'Exponential'] },
          ],
          correctAnswers: ['Exponential', 'Linear', 'Exponential', 'Linear'],
          hint1: 'Equal **ratios** between values → exponential. Equal **differences** → linear.',
          hint2: '$3,6,12,24$ each multiply by $2$ (a constant ratio), so it is exponential.',
          hint3: 'If the variable $x$ sits in the **exponent** ($b^{x}$), it is exponential. If $x$ is multiplied by a number ($mx$), it is linear.',
          explanation: 'Multiplying by a constant factor (constant ratio) → exponential. Adding a constant (constant difference) → linear.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'exponential-growth-decay-alg1',
    sections: [
      {
        id: 'egd2-intro',
        type: 'text' as const,
        content: `# 📈 Exponential Growth and Decay

**Part 2 of 5 — Exponential Growth**

---

> 🔑 **The Idea:** When the base $b$ is **greater than 1**, the function *grows*. The amount keeps getting bigger because you multiply by something larger than itself each step.`,
      },
      {
        id: 'egd2-growth-factor',
        type: 'text' as const,
        content: `## Growth Factor and Percent Rate

For growth we write the base as:

$$b = 1 + r$$

where $r$ is the **growth rate** written as a **decimal**.

The "$1$" keeps the whole amount you already had; the "$+\\,r$" adds the new growth on top.

| Percent increase | Rate $r$ (decimal) | Growth factor $b = 1 + r$ |
|:---:|:---:|:---:|
| $5\\%$ | $0.05$ | $1.05$ |
| $20\\%$ | $0.20$ | $1.20$ |
| $50\\%$ | $0.50$ | $1.50$ |
| $100\\%$ | $1.00$ | $2.00$ (doubles!) |

> 🔑 **Key Idea:** A $7\\%$ increase means you keep $100\\%$ and add $7\\%$, so you multiply by $1.07$ each step — **not** by $0.07$.

So the full growth model is:

$$y = a(1 + r)^{x}$$`,
      },
      {
        id: 'egd2-percent-to-b',
        type: 'input-boxes' as const,
        content: `**Find the Growth Factor** 🧮

Write the growth factor $b = 1 + r$ for each percent increase. *(Enter a decimal.)*

**1)** A town grows $3\\%$ per year.   $b = \\,?$
**2)** An investment grows $12\\%$ per year.   $b = \\,?$
**3)** A population grows $100\\%$ per generation.   $b = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1.03', '1.12', '2'],
          hint1: 'Convert the percent to a decimal, then add $1$: $b = 1 + r$.',
          hint2: '$3\\% = 0.03$, so $b = 1 + 0.03 = 1.03$.',
          hint3: '$100\\% = 1.00$, so $b = 1 + 1 = 2$ — the amount doubles each step.',
          explanation: '1) $1 + 0.03 = 1.03$.  2) $1 + 0.12 = 1.12$.  3) $1 + 1 = 2$.',
        },
      },
      {
        id: 'egd2-build',
        type: 'text' as const,
        content: `## Building a Growth Equation

To model growth, plug the **start** into $a$ and the **factor** into $b$.

### Example: A \\$2{,}000 deposit earns $4\\%$ interest per year.

- Initial value: $a = 2000$
- Growth rate: $r = 0.04$, so $b = 1.04$

$$y = 2000(1.04)^{x}$$

where $x$ is the number of years and $y$ is the balance.

### Example: A video gets $50$ views, and views grow $20\\%$ per day.

- $a = 50$, $\\;r = 0.20$, $\\;b = 1.20$

$$y = 50(1.20)^{x}$$

> 💡 **Pattern:** $y = (\\text{start}) \\cdot (1 + \\text{rate})^{\\,\\text{time}}$. Get those three pieces and you have the equation.`,
      },
      {
        id: 'egd2-build-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A car worth \\$18{,}000 *appreciates* (gains value) $6\\%$ per year. Which equation models its value?',
              options: [
                '$y = 18000(1.06)^{x}$',
                '$y = 18000(0.06)^{x}$',
                '$y = 18000(6)^{x}$',
                '$y = 1.06(18000)^{x}$',
              ],
              correctAnswer: 0,
              explanation: 'Start $a = 18000$; a $6\\%$ increase gives $b = 1 + 0.06 = 1.06$. So $y = 18000(1.06)^{x}$.',
            },
            {
              question: 'In the model $y = 800(1.25)^{x}$, what is the yearly percent **increase**?',
              options: ['$25\\%$', '$125\\%$', '$1.25\\%$', '$0.25\\%$'],
              correctAnswer: 0,
              explanation: 'Since $b = 1 + r = 1.25$, the rate is $r = 0.25 = 25\\%$.',
            },
          ],
        },
      },
      {
        id: 'egd2-evaluate',
        type: 'input-boxes' as const,
        content: `**Evaluate the Growth Model** 🧮

Use $y = 2000(1.04)^{x}$ (the \\$2{,}000 deposit at $4\\%$).

**1)** Balance after $0$ years:   $y = \\,?$
**2)** Balance after $1$ year:   $y = \\,?$
**3)** Balance after $2$ years:   $y = \\,?$  *(round to the nearest cent if needed)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2000', '2080', '2163.20'],
          hint1: 'At $x = 0$, $1.04^{0} = 1$, so $y = 2000 \\cdot 1 = 2000$.',
          hint2: 'At $x = 1$: $y = 2000 \\cdot 1.04 = 2080$.',
          hint3: 'At $x = 2$: $y = 2000 \\cdot 1.04^{2} = 2000 \\cdot 1.0816 = 2163.20$.',
          explanation: '1) $2000(1) = 2000$.  2) $2000(1.04) = 2080$.  3) $2000(1.0816) = 2163.20$. The yearly gain grows each year — that is the exponential effect.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'exponential-growth-decay-alg1',
    sections: [
      {
        id: 'egd3-intro',
        type: 'text' as const,
        content: `# 📈 Exponential Growth and Decay

**Part 3 of 5 — Exponential Decay**

---

> 🔑 **The Idea:** When the base $b$ is **between 0 and 1**, the function *decays*. You keep only a fraction of the amount each step, so the total shrinks toward zero.`,
      },
      {
        id: 'egd3-decay-factor',
        type: 'text' as const,
        content: `## Decay Factor and Percent Rate

For decay we write the base as:

$$b = 1 - r$$

where $r$ is the **decay rate** as a decimal. You *subtract* because you are **losing** a percent each step.

| Percent decrease | Rate $r$ (decimal) | Decay factor $b = 1 - r$ |
|:---:|:---:|:---:|
| $10\\%$ | $0.10$ | $0.90$ |
| $25\\%$ | $0.25$ | $0.75$ |
| $50\\%$ | $0.50$ | $0.50$ (halves!) |
| $3\\%$ | $0.03$ | $0.97$ |

> ⚠️ **Watch out:** A $10\\%$ *loss* means you keep $90\\%$, so $b = 0.90$, **not** $0.10$. The factor is always what you *keep*, not what you lose.

The full decay model is:

$$y = a(1 - r)^{x}$$`,
      },
      {
        id: 'egd3-percent-to-b',
        type: 'input-boxes' as const,
        content: `**Find the Decay Factor** 🧮

Write the decay factor $b = 1 - r$ for each percent decrease. *(Enter a decimal.)*

**1)** A car loses $15\\%$ of its value per year.   $b = \\,?$
**2)** A medication leaves the body, dropping $30\\%$ per hour.   $b = \\,?$
**3)** A radioactive sample loses $50\\%$ each period.   $b = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.85', '0.70', '0.5'],
          hint1: 'You keep what is left after the loss: $b = 1 - r$.',
          hint2: '$15\\% = 0.15$, so $b = 1 - 0.15 = 0.85$ (you keep $85\\%$).',
          hint3: 'Losing $50\\%$ means keeping $50\\%$, so $b = 1 - 0.50 = 0.50$.',
          explanation: '1) $1 - 0.15 = 0.85$.  2) $1 - 0.30 = 0.70$.  3) $1 - 0.50 = 0.50$. The factor is always the fraction you **keep**.',
        },
      },
      {
        id: 'egd3-growth-or-decay',
        type: 'dropdown-select' as const,
        content: `**Growth or Decay?** 🔽

Decide from the base $b$. Remember: $b > 1$ grows, $0 < b < 1$ decays.`,
        exercise: {
          dropdowns: [
            { label: '$y = 500(1.08)^{x}$:', options: ['Growth', 'Decay'] },
            { label: '$y = 500(0.92)^{x}$:', options: ['Decay', 'Growth'] },
            { label: '$y = 30(2)^{x}$:', options: ['Growth', 'Decay'] },
            { label: '$y = 30\\left(\\frac{3}{4}\\right)^{x}$:', options: ['Decay', 'Growth'] },
          ],
          correctAnswers: ['Growth', 'Decay', 'Growth', 'Decay'],
          hint1: 'Compare $b$ to $1$. Bigger than $1$ → growth. Between $0$ and $1$ → decay.',
          hint2: '$1.08 > 1$ and $2 > 1$, so those grow.',
          hint3: '$0.92 < 1$ and $\\frac{3}{4} = 0.75 < 1$, so those decay.',
          explanation: 'A base above $1$ multiplies up (growth); a base between $0$ and $1$ multiplies down (decay).',
        },
      },
      {
        id: 'egd3-build',
        type: 'text' as const,
        content: `## Building a Decay Equation

### Example: A \\$24{,}000 car loses $15\\%$ of its value each year.

- Initial value: $a = 24000$
- Decay rate: $r = 0.15$, so $b = 1 - 0.15 = 0.85$

$$y = 24000(0.85)^{x}$$

### Example: A drug starts at $200$ mg and $25\\%$ leaves the body each hour.

- $a = 200$, $\\;r = 0.25$, $\\;b = 0.75$

$$y = 200(0.75)^{x}$$

> 💡 **Pattern:** $y = (\\text{start}) \\cdot (1 - \\text{rate})^{\\,\\text{time}}$. Same recipe as growth — just *subtract* the rate.`,
      },
      {
        id: 'egd3-evaluate',
        type: 'input-boxes' as const,
        content: `**Evaluate the Decay Model** 🧮

A drug starts at $200$ mg and $50\\%$ leaves the body each hour, so $y = 200(0.5)^{x}$.

**1)** Amount after $1$ hour:   $y = \\,?$ mg
**2)** Amount after $2$ hours:   $y = \\,?$ mg
**3)** Amount after $3$ hours:   $y = \\,?$ mg`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '50', '25'],
          hint1: 'Each hour you keep half: multiply by $0.5$.',
          hint2: 'Hour 1: $200 \\cdot 0.5 = 100$. Hour 2: $100 \\cdot 0.5 = 50$.',
          hint3: 'Hour 3: $50 \\cdot 0.5 = 25$. (Or $200 \\cdot 0.5^{3} = 200 \\cdot 0.125 = 25$.)',
          explanation: '1) $200(0.5) = 100$.  2) $200(0.25) = 50$.  3) $200(0.125) = 25$. Halving each hour is a classic decay pattern (a "half-life").',
        },
      },
      {
        id: 'egd3-build-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \\$30{,}000 truck depreciates $20\\%$ per year. Which equation models its value?',
              options: [
                '$y = 30000(0.80)^{x}$',
                '$y = 30000(0.20)^{x}$',
                '$y = 30000(1.20)^{x}$',
                '$y = 30000(20)^{x}$',
              ],
              correctAnswer: 0,
              explanation: 'A $20\\%$ loss keeps $80\\%$: $b = 1 - 0.20 = 0.80$. So $y = 30000(0.80)^{x}$.',
            },
            {
              question: 'In $y = 60(0.9)^{x}$, what percent is **lost** each step?',
              options: ['$10\\%$', '$90\\%$', '$0.9\\%$', '$9\\%$'],
              correctAnswer: 0,
              explanation: 'Since $b = 1 - r = 0.9$, the rate lost is $r = 0.1 = 10\\%$ (you keep $90\\%$).',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'exponential-growth-decay-alg1',
    sections: [
      {
        id: 'egd4-intro',
        type: 'text' as const,
        content: `# 📈 Exponential Growth and Decay

**Part 4 of 5 — Tables, Graphs & Word Problems**

---

> 🔑 **Big Payoff:** Once you can build the equation, you can fill in tables, sketch the graph, and answer real questions about money, populations, and medicine.`,
      },
      {
        id: 'egd4-tables-graphs',
        type: 'text' as const,
        content: `## Reading Tables and Graphs

Plug values of $x$ into $y = a \\cdot b^{x}$ to build a table, then plot the points.

### Example: $y = 3 \\cdot 2^{x}$

| $x$ | $0$ | $1$ | $2$ | $3$ | $4$ |
|:---:|:---:|:---:|:---:|:---:|:---:|
| $y$ | $3$ | $6$ | $12$ | $24$ | $48$ |

Notice the **shape clues** that show up on a graph:

| Feature | Growth ($b > 1$) | Decay ($0 < b < 1$) |
|:---|:---|:---|
| $y$-intercept | $(0, a)$ | $(0, a)$ |
| Direction | rises to the right | falls to the right |
| As $x$ gets large | shoots up | flattens toward $0$ |
| Horizontal asymptote | $y = 0$ (to the left) | $y = 0$ (to the right) |

> 💡 **Both** kinds always pass through $(0, a)$ — the initial value is the $y$-intercept. And the curve **never touches** $y = 0$; it only gets infinitely close.`,
      },
      {
        id: 'egd4-table-fill',
        type: 'input-boxes' as const,
        content: `**Fill the Table** 🧮

Complete the table for $y = 3 \\cdot 2^{x}$.

**1)** $x = 0$:   $y = \\,?$
**2)** $x = 2$:   $y = \\,?$
**3)** $x = 4$:   $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '12', '48'],
          hint1: 'At $x = 0$, $2^{0} = 1$, so $y = 3 \\cdot 1 = 3$.',
          hint2: 'At $x = 2$, $2^{2} = 4$, so $y = 3 \\cdot 4 = 12$.',
          hint3: 'At $x = 4$, $2^{4} = 16$, so $y = 3 \\cdot 16 = 48$.',
          explanation: '1) $3 \\cdot 2^{0} = 3$.  2) $3 \\cdot 2^{2} = 12$.  3) $3 \\cdot 2^{4} = 48$. Each step doubles the previous $y$.',
        },
      },
      {
        id: 'egd4-graph-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the $y$-intercept of $y = 7(0.5)^{x}$?',
              options: ['$(0, 7)$', '$(0, 0.5)$', '$(0, 0)$', '$(7, 0)$'],
              correctAnswer: 0,
              explanation: 'At $x = 0$, $(0.5)^{0} = 1$, so $y = 7 \\cdot 1 = 7$. The $y$-intercept is $(0, a) = (0, 7)$.',
            },
            {
              question: 'The graph of $y = 5(1.3)^{x}$ does which of these?',
              options: [
                'Rises to the right (grows)',
                'Falls to the right (decays)',
                'Is a straight line',
                'Touches the $x$-axis',
              ],
              correctAnswer: 0,
              explanation: 'Since $b = 1.3 > 1$, this is growth, so the curve rises as $x$ increases. It approaches but never touches $y = 0$.',
            },
          ],
        },
      },
      {
        id: 'egd4-word-worked',
        type: 'text' as const,
        content: `## Word Problems: A Full Walkthrough

### Problem: A population of $400$ deer grows $5\\%$ per year. How many after $3$ years?

**Step 1 — Identify the pieces.**
- Start: $a = 400$
- Rate: $r = 0.05$ (growth), so $b = 1.05$
- Time: $x = 3$

**Step 2 — Write the model.**
$$y = 400(1.05)^{x}$$

**Step 3 — Substitute $x = 3$.**
$$y = 400(1.05)^{3} = 400(1.157625) = 463.05$$

**Step 4 — Interpret.** About **$463$ deer** after $3$ years (round to a whole animal).

> ⚠️ **Order of operations:** Do the **exponent first** ($1.05^{3}$), *then* multiply by $400$. Never multiply $400 \\times 1.05$ and *then* cube it.`,
      },
      {
        id: 'egd4-word-drill',
        type: 'input-boxes' as const,
        content: `**Word-Problem Practice** 🧮

A phone is worth \\$80 and loses $15\\%$ of its value each year, so $y = 80(0.85)^{x}$.

**1)** Value after $1$ year:   $y = \\,?$ dollars
**2)** Value after $2$ years:   $y = \\,?$ dollars  *(round to the nearest cent)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['68', '57.80'],
          hint1: 'Year 1: do the exponent, then multiply: $80 \\cdot 0.85^{1} = 80 \\cdot 0.85$.',
          hint2: 'Year 1: $80 \\cdot 0.85 = 68$.',
          hint3: 'Year 2: $0.85^{2} = 0.7225$, so $80 \\cdot 0.7225 = 57.80$.',
          explanation: '1) $80(0.85) = 68$.  2) $80(0.7225) = 57.80$. The value drops by a *shrinking* dollar amount each year because $15\\%$ is taken of a smaller base.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'exponential-growth-decay-alg1',
    sections: [
      {
        id: 'egd5-intro',
        type: 'text' as const,
        content: `# 📈 Exponential Growth and Decay

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize exponential patterns, (2) build growth models, (3) build decay models, and (4) evaluate and interpret them. Let's put it all together.`,
      },
      {
        id: 'egd5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|:---|:---|
| General form | $y = a \\cdot b^{x}$ |
| Initial value | $a = y$ when $x = 0$ (the $y$-intercept) |
| Growth factor | $b = 1 + r$ (and $b > 1$) |
| Decay factor | $b = 1 - r$ (and $0 < b < 1$) |
| Build a model | $y = (\\text{start})(1 \\pm \\text{rate})^{\\,\\text{time}}$ |
| Evaluate | exponent **first**, then multiply by $a$ |

> ⚠️ **Three traps to avoid:**
> - A $7\\%$ *gain* is $\\times 1.07$, not $\\times 0.07$.
> - A $7\\%$ *loss* is $\\times 0.93$, not $\\times 0.07$.
> - $b^{0} = 1$ for any base, so the start is always $a$.`,
      },
      {
        id: 'egd5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Model** 🔽

Choose the correct base $b$ for each situation.`,
        exercise: {
          dropdowns: [
            { label: 'Grows $8\\%$ per year, $b =$', options: ['$1.08$', '$0.08$', '$0.92$', '$8$'] },
            { label: 'Loses $8\\%$ per year, $b =$', options: ['$0.92$', '$1.08$', '$0.08$', '$8$'] },
            { label: 'Doubles each step, $b =$', options: ['$2$', '$0.5$', '$1.2$', '$0.2$'] },
            { label: 'Halves each step, $b =$', options: ['$0.5$', '$2$', '$1.5$', '$0.05$'] },
          ],
          correctAnswers: ['$1.08$', '$0.92$', '$2$', '$0.5$'],
          hint1: 'Growth: $b = 1 + r$. Decay: $b = 1 - r$.',
          hint2: 'Gain $8\\%$: $1 + 0.08 = 1.08$. Lose $8\\%$: $1 - 0.08 = 0.92$.',
          hint3: 'Doubling means $\\times 2$; halving means $\\times 0.5$.',
          explanation: 'Gain $8\\% \\to 1.08$; lose $8\\% \\to 0.92$; double $\\to 2$; halve $\\to 0.5$.',
        },
      },
      {
        id: 'egd5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A colony of $200$ bacteria triples each hour. How many after $2$ hours?',
              options: ['$1800$', '$600$', '$1200$', '$400$'],
              correctAnswer: 0,
              explanation: 'Model $y = 200(3)^{x}$. At $x = 2$: $200 \\cdot 3^{2} = 200 \\cdot 9 = 1800$.',
            },
            {
              question: 'Which situation is modeled by $y = 5000(0.94)^{x}$?',
              options: [
                'Starts at $5000$ and decreases $6\\%$ each step',
                'Starts at $5000$ and increases $6\\%$ each step',
                'Starts at $5000$ and decreases $94\\%$ each step',
                'Starts at $0.94$ and increases each step',
              ],
              correctAnswer: 0,
              explanation: '$a = 5000$ is the start. $b = 0.94 = 1 - 0.06$, so it loses $6\\%$ each step (keeps $94\\%$).',
            },
          ],
        },
      },
      {
        id: 'egd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A savings account of \\$1{,}000 earns $8\\%$ per year. What is the balance after $2$ years?',
              options: ['$\\$1{,}166.40$', '$\\$1{,}160.00$', '$\\$1{,}080.00$', '$\\$1{,}016.00$'],
              correctAnswer: 0,
              explanation: '$y = 1000(1.08)^{2} = 1000(1.1664) = 1166.40$. (Do the exponent first, then multiply.)',
            },
            {
              question: 'In the model $y = 250(0.7)^{x}$, the quantity is:',
              options: [
                'Decaying at $30\\%$ per step',
                'Growing at $70\\%$ per step',
                'Decaying at $70\\%$ per step',
                'Growing at $30\\%$ per step',
              ],
              correctAnswer: 0,
              explanation: '$b = 0.7 = 1 - 0.30 < 1$, so it decays; you keep $70\\%$ and lose $30\\%$ each step.',
            },
            {
              question: 'What is the $y$-intercept (initial value) of $y = 12(1.5)^{x}$?',
              options: ['$12$', '$1.5$', '$18$', '$0$'],
              correctAnswer: 0,
              explanation: 'At $x = 0$, $(1.5)^{0} = 1$, so $y = 12 \\cdot 1 = 12$. The initial value $a$ is always the $y$-intercept.',
            },
          ],
        },
      },
    ],
  },
]
