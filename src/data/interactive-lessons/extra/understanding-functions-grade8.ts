import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Understanding Functions (Grade 8 Math, CCSS 8.F.A & 8.F.B).
 * Registry key / DB Topic.slug: 'understanding-functions-grade8'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * the definition of a function (one output per input), four representations
 * (table, mapping, graph, equation) and the vertical line test, evaluating a rule,
 * rate of change & initial value, linear vs. nonlinear, and comparing functions
 * across representations. LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'understanding-functions-grade8',
    sections: [
      {
        id: 'uf1-intro',
        type: 'text' as const,
        content: `# ⚙️ Understanding Functions

**Part 1 of 5 — What Is a Function?**

---

### Topics in This Part

| Section |
|---------|
| The Input–Output Machine |
| The One Rule: One Output per Input |
| Spotting Functions in a Table |

> 🔑 **Key Concept:** A **function** is a rule that takes each **input** and gives back **exactly one output**. Same input in → same single output out, every time.`,
      },
      {
        id: 'uf1-machine',
        type: 'text' as const,
        content: `## The Input–Output Machine

Picture a function as a machine. You drop an **input** in the top, the machine applies its **rule**, and exactly one **output** drops out the bottom.

$$\\text{input} \\;\\longrightarrow\\; \\boxed{\\text{rule}} \\;\\longrightarrow\\; \\text{output}$$

For example, a "double it" machine:

| Input | Rule | Output |
|-------|------|--------|
| $3$ | $\\times 2$ | $6$ |
| $5$ | $\\times 2$ | $10$ |
| $0$ | $\\times 2$ | $0$ |

The **inputs** together are called the **domain**. The **outputs** together are called the **range**.

> 💡 You already use functions every day. "Hours worked" → "pay earned" is a function. So is "number of tacos" → "total cost."`,
      },
      {
        id: 'uf1-onerule',
        type: 'text' as const,
        content: `## The One Rule That Defines a Function

Here is the single test that decides everything:

> 🔑 **Function Rule:** Each input is allowed **exactly one** output. An input may **never** point to two different outputs.

It is perfectly fine for two different inputs to share the **same** output:

| Relation | One output per input? | Function? |
|----------|----------------------|-----------|
| $1\\to 4,\\;\\; 2\\to 4,\\;\\; 3\\to 9$ | Yes — each input has one output | ✅ Function |
| $1\\to 4,\\;\\; 1\\to 7,\\;\\; 2\\to 5$ | No — input $1$ gives $4$ **and** $7$ | ❌ Not a function |

The first relation is fine even though $1$ and $2$ both output $4$. The problem in the second is that the **same input** $1$ produces **two different** outputs.

> ⚠️ **Watch the direction.** Repeated *outputs* are allowed. Repeated *inputs with different outputs* are NOT.`,
      },
      {
        id: 'uf1-check-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement correctly describes a function?',
              options: [
                'Each input gives exactly one output.',
                'Each output gives exactly one input.',
                'Every input must give a different output.',
                'Inputs and outputs must be equal.',
              ],
              correctAnswer: 0,
              explanation: 'A function assigns exactly one output to each input. Two inputs may share an output, and an input is never allowed two outputs.',
            },
            {
              question: 'Which relation is NOT a function?',
              options: [
                '$\\{(1,2),(2,2),(3,2)\\}$',
                '$\\{(0,5),(1,6),(2,7)\\}$',
                '$\\{(4,1),(4,8),(5,2)\\}$',
                '$\\{(2,3),(3,4),(5,6)\\}$',
              ],
              correctAnswer: 2,
              explanation: 'In $\\{(4,1),(4,8),(5,2)\\}$ the input $4$ maps to both $1$ and $8$ — one input, two outputs — so it is not a function. The others give each input a single output.',
            },
          ],
        },
      },
      {
        id: 'uf1-table-check',
        type: 'dropdown-select' as const,
        content: `**Function or Not?** 🔽

For each table of $(x, y)$ pairs, decide whether $y$ is a function of $x$.`,
        exercise: {
          dropdowns: [
            { label: '$x: 1,2,3,4$ and $y: 2,4,6,8$', options: ['Function', 'Not a function'] },
            { label: '$x: 0,1,1,2$ and $y: 5,6,9,7$', options: ['Function', 'Not a function'] },
            { label: '$x: -2,-1,0,1$ and $y: 3,3,3,3$', options: ['Function', 'Not a function'] },
          ],
          correctAnswers: ['Function', 'Not a function', 'Function'],
          hint1: 'Look only at the $x$-values (inputs). Does any $x$ repeat?',
          hint2: 'In the second table, $x = 1$ appears twice — paired with $6$ and with $9$.',
          hint3: 'Repeated outputs are fine. A constant output like $3,3,3,3$ is still a function as long as no input repeats with a different output.',
          explanation: 'Table 1: all inputs distinct → function. Table 2: input $1$ gives $6$ and $9$ → not a function. Table 3: inputs distinct, outputs all $3$ → still a function (repeated outputs are allowed).',
        },
      },
      {
        id: 'uf1-machine-drill',
        type: 'input-boxes' as const,
        content: `**Run the Machine** 🧮

A "double it" function uses the rule $y = 2x$ — it sends each input to twice itself.

**1)** Input $4$ gives output $\\,?$
**2)** Input $7$ gives output $\\,?$
**3)** Which input gives the output $20$? Input $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '14', '10'],
          hint1: 'Multiply the input by $2$: $2 \\times 4 = 8$.',
          hint2: '$2 \\times 7 = 14$.',
          hint3: 'Work backwards: if $2x = 20$, then $x = 20 \\div 2 = 10$.',
          explanation: 'The rule $y = 2x$ gives $4 \\to 8$ and $7 \\to 14$. To get an output of $20$, the input must be $20 \\div 2 = 10$.',
        },
      },
      {
        id: 'uf1-wrap',
        type: 'text' as const,
        content: `## You've Got the Definition

You can now state the one rule that makes a relation a function: **one output per input.** You can test a table by scanning the input column for a repeat that points to different outputs.

In Part 2 we'll see the **four ways** the same function can be written — table, mapping diagram, graph, and equation — and meet the famous **vertical line test**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'understanding-functions-grade8',
    sections: [
      {
        id: 'uf2-intro',
        type: 'text' as const,
        content: `# ⚙️ Understanding Functions

**Part 2 of 5 — Four Ways to Show a Function**

---

> 🔑 **The Idea:** The *same* function can be shown as a **table**, a **mapping diagram**, a **graph**, or an **equation**. They all carry the same input → output information.`,
      },
      {
        id: 'uf2-reps',
        type: 'text' as const,
        content: `## The Four Representations

Here is the rule "add 1" shown four ways:

**1) Table**

| $x$ (input) | $y$ (output) |
|-------------|--------------|
| $0$ | $1$ |
| $1$ | $2$ |
| $2$ | $3$ |

**2) Mapping diagram** — arrows from each input to its output:

$$0 \\to 1, \\quad 1 \\to 2, \\quad 2 \\to 3$$

**3) Equation (rule):**

$$y = x + 1$$

**4) Graph** — the points $(0,1)$, $(1,2)$, $(2,3)$ plotted on a coordinate grid.

> 💡 Whenever you switch representations, the pairs never change. The point $(2,3)$, the table row $2 \\to 3$, and "plug $x=2$ into $y=x+1$" all say the same thing.`,
      },
      {
        id: 'uf2-mapping-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A mapping diagram is a function when…',
              options: [
                'each input arrow points to exactly one output',
                'each output has exactly one arrow coming in',
                'there are the same number of inputs and outputs',
                'no two arrows ever cross',
              ],
              correctAnswer: 0,
              explanation: 'A mapping is a function exactly when every input sends out a single arrow. An input with two arrows (two outputs) breaks the rule; outputs may receive many arrows.',
            },
            {
              question: 'The equation $y = x + 1$ and the point $(2, 3)$ agree because…',
              options: [
                'when $x = 2$, $y = 2 + 1 = 3$',
                'when $x = 3$, $y = 3 + 1 = 4$',
                '$2$ and $3$ add to $5$',
                'the point should be $(3, 2)$',
              ],
              correctAnswer: 0,
              explanation: 'Substituting the input $x = 2$ into $y = x + 1$ gives $y = 3$, which is exactly the point $(2, 3)$.',
            },
          ],
        },
      },
      {
        id: 'uf2-vlt',
        type: 'text' as const,
        content: `## The Vertical Line Test

On a graph, every input $x$ corresponds to a vertical line. If that vertical line hits the graph **more than once**, then that single input has **two outputs** — so the graph is **not** a function.

> 🔑 **Vertical Line Test (VLT):** If **any** vertical line crosses the graph more than once, the graph is **not a function**. If every vertical line crosses **at most once**, it **is** a function.

| Graph | Vertical line hits it… | Function? |
|-------|------------------------|-----------|
| A straight line like $y = x+1$ | once | ✅ Yes |
| A parabola like $y = x^2$ | once | ✅ Yes |
| A full circle | twice (top & bottom) | ❌ No |
| A sideways "U" (opens right) | twice | ❌ No |

> ⚠️ A parabola passes the VLT even though it has a repeated *output* (e.g. $y=4$ at $x=2$ and $x=-2$). Remember: repeated outputs are allowed.`,
      },
      {
        id: 'uf2-vlt-check',
        type: 'dropdown-select' as const,
        content: `**Apply the Vertical Line Test** 🔽

Decide whether each graph passes the vertical line test (and is therefore a function).`,
        exercise: {
          dropdowns: [
            { label: 'A straight slanted line', options: ['Function', 'Not a function'] },
            { label: 'A circle', options: ['Function', 'Not a function'] },
            { label: 'A U-shaped parabola opening up', options: ['Function', 'Not a function'] },
            { label: 'A vertical line $x = 3$', options: ['Function', 'Not a function'] },
          ],
          correctAnswers: ['Function', 'Not a function', 'Function', 'Not a function'],
          hint1: 'Imagine sweeping a vertical line across the graph. Does it ever touch the graph in two places at once?',
          hint2: 'A circle is hit twice by a vertical line through its middle, so it fails.',
          hint3: 'A vertical line $x=3$ is itself a vertical line — it overlaps in infinitely many points, so the single input $3$ has many outputs: not a function.',
          explanation: 'Slanted line: passes (once). Circle: fails (twice). Upward parabola: passes (once). Vertical line $x=3$: fails — the one input $x=3$ has infinitely many $y$-values.',
        },
      },
      {
        id: 'uf2-translate-drill',
        type: 'input-boxes' as const,
        content: `**Translate Between Representations** 🧮

The function is given by the rule $y = 3x$.

**1)** Complete the table: when $x = 2$, $y = \\,?$
**2)** When $x = 5$, $y = \\,?$
**3)** The graph passes through the point $(4, \\,?)$ — enter the missing $y$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '15', '12'],
          hint1: 'Multiply the input by $3$: $y = 3x$.',
          hint2: '$3 \\times 5 = 15$.',
          hint3: 'The point $(4, y)$ means $x = 4$, so $y = 3 \\times 4 = 12$.',
          explanation: '$y=3x$: at $x=2$, $y=6$; at $x=5$, $y=15$; at $x=4$, $y=12$, so the point is $(4,12)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'understanding-functions-grade8',
    sections: [
      {
        id: 'uf3-intro',
        type: 'text' as const,
        content: `# ⚙️ Understanding Functions

**Part 3 of 5 — Function Rules & Evaluating**

---

> 🔑 **Why it matters:** A function's **rule** (its equation) lets you find the output for *any* input — even inputs not in the table — by substituting and simplifying.`,
      },
      {
        id: 'uf3-evaluate',
        type: 'text' as const,
        content: `## Evaluating a Function Rule

To **evaluate** a function, replace $x$ with the input value and simplify.

### Example: $y = 2x + 5$

| Input $x$ | Substitute | Output $y$ |
|-----------|-----------|-----------|
| $0$ | $2(0)+5$ | $5$ |
| $3$ | $2(3)+5$ | $11$ |
| $-1$ | $2(-1)+5$ | $3$ |

Work the order of operations carefully — **multiply before you add**.

### Example: $y = x^2 - 4$ at $x = 3$

$$y = (3)^2 - 4 = 9 - 4 = 5$$

> ⚠️ Square the input **before** subtracting. $3^2 = 9$, not $3 \\cdot 2 = 6$.`,
      },
      {
        id: 'uf3-eval-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $y = 4x - 1$, what is the output when $x = 2$?',
              options: ['$7$', '$8$', '$9$', '$3$'],
              correctAnswer: 0,
              explanation: '$y = 4(2) - 1 = 8 - 1 = 7$. Multiply first, then subtract.',
            },
            {
              question: 'For $y = x^2 + 1$, what is the output when $x = -3$?',
              options: ['$10$', '$-8$', '$-5$', '$7$'],
              correctAnswer: 0,
              explanation: '$(-3)^2 = 9$, then $9 + 1 = 10$. A negative input squared becomes positive.',
            },
          ],
        },
      },
      {
        id: 'uf3-eval-drill',
        type: 'input-boxes' as const,
        content: `**Evaluate the Rule** 🧮

Use the rule $y = 3x - 4$.

**1)** $x = 0 \\;\\Rightarrow\\; y = \\,?$
**2)** $x = 5 \\;\\Rightarrow\\; y = \\,?$
**3)** $x = -2 \\;\\Rightarrow\\; y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-4', '11', '-10'],
          hint1: '$3(0) - 4 = 0 - 4 = -4$.',
          hint2: '$3(5) - 4 = 15 - 4 = 11$.',
          hint3: '$3(-2) - 4 = -6 - 4 = -10$.',
          explanation: '$y=3x-4$: at $x=0$, $y=-4$; at $x=5$, $y=11$; at $x=-2$, $y=-10$.',
        },
      },
      {
        id: 'uf3-build-rule',
        type: 'text' as const,
        content: `## Reading a Rule From Words

Many word problems hide a function. Translate the words into a rule.

### Example: Taco truck

Tacos cost \\$2 each plus a \\$3 flat delivery fee. The total cost $C$ for $t$ tacos is:

$$C = 2t + 3$$

- The **\\$2 per taco** is the number multiplied by the input (the *rate*).
- The **\\$3 fee** is added once no matter what (the *starting value*).

So $5$ tacos cost $C = 2(5) + 3 = 13$, giving \\$13.

> 💡 "Per," "each," and "every" signal the number you **multiply** by. "Flat fee," "starting," and "one-time" signal the number you **add**.`,
      },
      {
        id: 'uf3-word-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Rule** 🔽

A gym charges a \\$20 sign-up fee plus \\$15 each month. Let $m$ be the number of months and $C$ the total cost.`,
        exercise: {
          dropdowns: [
            { label: 'The number multiplied by $m$ (the rate) is:', options: ['$15$', '$20$', '$35$', '$5$'] },
            { label: 'The number added once (the start) is:', options: ['$20$', '$15$', '$35$', '$0$'] },
            { label: 'The function rule is:', options: ['$C = 15m + 20$', '$C = 20m + 15$', '$C = 35m$', '$C = 15 + 20m$'] },
          ],
          correctAnswers: ['$15$', '$20$', '$C = 15m + 20$'],
          hint1: '"$\\$15$ each month" multiplies the number of months $m$.',
          hint2: 'The "$\\$20$ sign-up fee" is paid once, no matter how many months.',
          hint3: 'Put it together: rate times input plus the one-time start → $C = 15m + 20$.',
          explanation: 'The monthly rate \\$15 multiplies $m$; the \\$20 fee is added once. So $C = 15m + 20$. For example, $4$ months cost $15(4)+20 = \\$80$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'understanding-functions-grade8',
    sections: [
      {
        id: 'uf4-intro',
        type: 'text' as const,
        content: `# ⚙️ Understanding Functions

**Part 4 of 5 — Rate of Change, Initial Value & Linear vs. Nonlinear**

---

> 🔑 **Big Idea:** A **linear function** changes by the **same amount** every time the input goes up by $1$. That steady change is the **rate of change (slope)**, and the output at $x=0$ is the **initial value**.`,
      },
      {
        id: 'uf4-roc',
        type: 'text' as const,
        content: `## Rate of Change & Initial Value

For a linear function written $y = mx + b$:

- $m$ is the **rate of change** (slope) — how much $y$ changes each time $x$ increases by $1$.
- $b$ is the **initial value** — the output when $x = 0$ (the $y$-intercept).

$$\\text{rate of change} = \\frac{\\text{change in } y}{\\text{change in } x} = \\frac{\\Delta y}{\\Delta x}$$

### Example: From a table

| $x$ | $0$ | $1$ | $2$ | $3$ |
|-----|-----|-----|-----|-----|
| $y$ | $4$ | $7$ | $10$ | $13$ |

Each time $x$ goes up by $1$, $y$ goes up by $3$, so the rate of change is $3$. The initial value (at $x=0$) is $4$. The rule is $y = 3x + 4$.

> 💡 To find the rate of change between two points $(x_1,y_1)$ and $(x_2,y_2)$, use $\\dfrac{y_2 - y_1}{x_2 - x_1}$.`,
      },
      {
        id: 'uf4-roc-drill',
        type: 'input-boxes' as const,
        content: `**Find Rate of Change & Initial Value** 🧮

A linear function passes through these points:

| $x$ | $0$ | $1$ | $2$ | $3$ |
|-----|-----|-----|-----|-----|
| $y$ | $10$ | $8$ | $6$ | $4$ |

**1)** Rate of change (change in $y$ per $+1$ in $x$) $= \\,?$
**2)** Initial value (output at $x = 0$) $= \\,?$
**3)** Using $y = mx + b$, what is the output at $x = 5$? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '10', '0'],
          hint1: 'From $x=0$ to $x=1$, $y$ goes from $10$ to $8$ — a change of $-2$.',
          hint2: 'The initial value is the $y$-value when $x = 0$, which is $10$.',
          hint3: 'The rule is $y = -2x + 10$, so at $x=5$: $y = -2(5)+10 = -10+10 = 0$.',
          explanation: 'Each step right lowers $y$ by $2$, so rate $= -2$. At $x=0$, $y=10$ (initial value). Rule $y=-2x+10$ gives $y=0$ at $x=5$.',
        },
      },
      {
        id: 'uf4-linear-vs',
        type: 'text' as const,
        content: `## Linear vs. Nonlinear

A function is **linear** if it has a **constant** rate of change — its graph is a **straight line** and its equation can be written $y = mx + b$ (no $x^2$, no $x$ in a denominator, no $x$ under a root).

| Function | Rate of change | Linear? |
|----------|----------------|---------|
| $y = 2x + 1$ | constant $2$ | ✅ Linear |
| $y = -x + 7$ | constant $-1$ | ✅ Linear |
| $y = x^2$ | changes (1, 3, 5, …) | ❌ Nonlinear |
| $y = \\dfrac{6}{x}$ | changes | ❌ Nonlinear |

### Check $y = x^2$ with a table

| $x$ | $0$ | $1$ | $2$ | $3$ |
|-----|-----|-----|-----|-----|
| $y$ | $0$ | $1$ | $4$ | $9$ |

The jumps are $+1, +3, +5$ — **not** constant — so $y = x^2$ is **nonlinear**.

> ⚠️ A table is linear only if the output changes by the **same** amount for each equal step in $x$.`,
      },
      {
        id: 'uf4-linear-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation represents a linear function?',
              options: ['$y = 5x - 2$', '$y = x^2 + 3$', '$y = \\dfrac{8}{x}$', '$y = 2^x$'],
              correctAnswer: 0,
              explanation: 'Only $y = 5x - 2$ has the form $y = mx + b$ with a constant rate of change. The others ($x^2$, a variable denominator, and an exponent) are nonlinear.',
            },
            {
              question: 'A table shows $y$-values $3, 7, 11, 15$ for $x = 1, 2, 3, 4$. Is the function linear, and what is its rate of change?',
              options: [
                'Linear, rate of change $4$',
                'Linear, rate of change $3$',
                'Nonlinear',
                'Linear, rate of change $2$',
              ],
              correctAnswer: 0,
              explanation: 'Each step in $x$ raises $y$ by $4$ ($3\\to7\\to11\\to15$). The change is constant, so it is linear with rate of change $4$.',
            },
          ],
        },
      },
      {
        id: 'uf4-compare',
        type: 'text' as const,
        content: `## Comparing Two Functions

You can compare functions even when they're written **differently** — pull the rate of change and initial value from each.

### Example

**Function A** (equation): $y = 4x + 1$. Rate of change $= 4$, initial value $= 1$.

**Function B** (table):

| $x$ | $0$ | $1$ | $2$ |
|-----|-----|-----|-----|
| $y$ | $3$ | $5$ | $7$ |

Function B has rate of change $2$ and initial value $3$.

So **A grows faster** (rate $4 > 2$), but **B starts higher** (initial value $3 > 1$).

> 💡 To compare, get every function into the same language: *how fast it grows* (rate of change) and *where it starts* (initial value).`,
      },
      {
        id: 'uf4-compare-dropdown',
        type: 'dropdown-select' as const,
        content: `**Compare the Functions** 🔽

**Function A:** $y = 2x + 6$.
**Function B:** a line through $(0, 2)$ and $(1, 7)$.`,
        exercise: {
          dropdowns: [
            { label: 'Rate of change of A:', options: ['$2$', '$6$', '$5$', '$8$'] },
            { label: 'Rate of change of B:', options: ['$5$', '$2$', '$7$', '$1$'] },
            { label: 'Which grows faster?', options: ['B', 'A', 'They grow equally fast', 'Cannot tell'] },
            { label: 'Which starts higher (greater initial value)?', options: ['A', 'B', 'They start equal', 'Cannot tell'] },
          ],
          correctAnswers: ['$2$', '$5$', 'B', 'A'],
          hint1: 'In $y = 2x + 6$, the number multiplying $x$ is the rate of change.',
          hint2: 'For B, from $(0,2)$ to $(1,7)$, $y$ rises $7 - 2 = 5$ as $x$ rises by $1$.',
          hint3: 'Compare rates ($5 > 2$, so B grows faster). Compare initial values: A starts at $6$, B starts at $2$, so A starts higher.',
          explanation: 'A: rate $2$, initial value $6$. B: rate $5$, initial value $2$. B grows faster ($5>2$); A starts higher ($6>2$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'understanding-functions-grade8',
    sections: [
      {
        id: 'uf5-intro',
        type: 'text' as const,
        content: `# ⚙️ Understanding Functions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) define a function and test relations, (2) move between table, mapping, graph, and equation, (3) evaluate and build rules, and (4) find rate of change, initial value, and tell linear from nonlinear. Let's put it together.`,
      },
      {
        id: 'uf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Idea | What to remember |
|------|------------------|
| Function | each input → exactly **one** output |
| Test a table | scan inputs; same input + different outputs = not a function |
| Vertical line test | a vertical line hitting the graph twice = not a function |
| Evaluate a rule | substitute the input for $x$, then simplify |
| Linear function | constant rate of change; form $y = mx + b$; straight line |
| Rate of change | $\\dfrac{\\Delta y}{\\Delta x}$ — change in $y$ per $+1$ in $x$ |
| Initial value | output when $x = 0$ (the $y$-intercept, $b$) |

> ⚠️ Repeated **outputs** are allowed. Repeated **inputs with different outputs** are not.`,
      },
      {
        id: 'uf5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which set of ordered pairs represents a function?',
              options: [
                '$\\{(1,3),(2,5),(4,5)\\}$',
                '$\\{(2,1),(2,4),(3,5)\\}$',
                '$\\{(0,0),(0,1),(1,2)\\}$',
                '$\\{(5,2),(5,3),(6,4)\\}$',
              ],
              correctAnswer: 0,
              explanation: 'In $\\{(1,3),(2,5),(4,5)\\}$ every input is distinct (1, 2, 4); the repeated output $5$ is allowed. The other three each reuse an input ($2$, $0$, or $5$) with two different outputs.',
            },
            {
              question: 'For $y = -2x + 9$, what is the output when $x = 4$?',
              options: ['$1$', '$17$', '$-1$', '$7$'],
              correctAnswer: 0,
              explanation: '$y = -2(4) + 9 = -8 + 9 = 1$.',
            },
          ],
        },
      },
      {
        id: 'uf5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

A line passes through $(0, 5)$ and $(2, 11)$.

**1)** Rate of change $= \\dfrac{11 - 5}{2 - 0} = \\,?$
**2)** Initial value (output at $x=0$) $= \\,?$
**3)** Write the output at $x = 4$ using $y = mx + b$: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', '17'],
          hint1: 'Rate of change $= \\dfrac{11-5}{2-0} = \\dfrac{6}{2} = 3$.',
          hint2: 'The point $(0,5)$ gives the initial value directly: $y = 5$ when $x = 0$.',
          hint3: 'The rule is $y = 3x + 5$, so at $x = 4$: $y = 3(4)+5 = 12+5 = 17$.',
          explanation: 'Rate $= \\frac{6}{2} = 3$; initial value $= 5$; rule $y = 3x + 5$ gives $y = 17$ at $x = 4$.',
        },
      },
      {
        id: 'uf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A graph fails the vertical line test. What does that tell you?',
              options: [
                'It is not a function — some input has more than one output.',
                'It is a function with a constant rate of change.',
                'It is linear.',
                'Every input has exactly one output.',
              ],
              correctAnswer: 0,
              explanation: 'Failing the VLT means a vertical line hits the graph twice, so one input has two outputs — the definition of *not a function*.',
            },
            {
              question: 'A function has rate of change $3$ and initial value $-2$. Which rule and output at $x=2$ are correct?',
              options: [
                '$y = 3x - 2$, and at $x=2$, $y = 4$',
                '$y = -2x + 3$, and at $x=2$, $y = -1$',
                '$y = 3x - 2$, and at $x=2$, $y = 1$',
                '$y = 3x + 2$, and at $x=2$, $y = 8$',
              ],
              correctAnswer: 0,
              explanation: 'Rate of change is $m=3$ and initial value is $b=-2$, so $y = 3x - 2$. At $x=2$: $y = 3(2) - 2 = 6 - 2 = 4$.',
            },
            {
              question: 'Which table represents a nonlinear function?',
              options: [
                '$x: 1,2,3$ and $y: 2,8,18$',
                '$x: 1,2,3$ and $y: 4,7,10$',
                '$x: 1,2,3$ and $y: 5,3,1$',
                '$x: 1,2,3$ and $y: 0,6,12$',
              ],
              correctAnswer: 0,
              explanation: 'For $y: 2,8,18$ the jumps are $+6$ then $+10$ — not constant — so it is nonlinear. The others change by a constant $+3$, $-2$, and $+6$ respectively, so they are linear.',
            },
          ],
        },
      },
    ],
  },
]
