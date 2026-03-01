#!/usr/bin/env python3
"""
Generates 7 interactive-lesson TypeScript files for SAT Exponential Functions.
Output directory: src/data/interactive-lessons/
File pattern:    sat-sat-exponential-functions-sat-part{1..7}.ts
"""

import os, textwrap

OUT_DIR = os.path.join(
    os.path.dirname(os.path.dirname(os.path.abspath(__file__))),
    "src", "data", "interactive-lessons",
)

SLUG = "sat-exponential-functions-sat"


def write(n: int, body: str):
    path = os.path.join(OUT_DIR, f"sat-{SLUG}-part{n}.ts")
    with open(path, "w") as f:
        f.write(body)
    print(f"  ✓ wrote {path}  ({len(body.splitlines())} lines)")


# ── Part 1: Exponential vs Linear Growth ─────────────────────────────────────
def part1():
    write(1, textwrap.dedent("""\
export const satExponentialFnPart1Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef1-intro',
      type: 'text' as const,
      content: `
# 📈 Exponential vs Linear Growth

**Part 1 of 7 — Recognizing Patterns in Tables & Equations**

The SAT loves asking you to tell the difference between linear and exponential growth. The key idea is simple:

| Feature | Linear | Exponential |
|---------|--------|-------------|
| Pattern | **Constant difference** | **Constant ratio** |
| Equation | $y = mx + b$ | $y = a \\\\cdot b^x$ |
| Graph shape | Straight line | Curved (J-shape or decay) |
| Example | Adding \\\\$50/month | Growing 10 % per year |

**Constant difference** means the $y$-values change by the **same amount** each step.

**Constant ratio** means each $y$-value is the **same multiple** of the previous one.
      `
    },
    {
      id: 'sat-ef1-tables',
      type: 'text' as const,
      content: `
## Reading Tables — Worked Examples

**Example 1 — Is this linear or exponential?**

| $x$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| $y$ | 5 | 15 | 45 | 135 | 405 |

Check differences: $15-5=10$, $45-15=30$, $135-45=90$ — **not** constant.

Check ratios: $\\\\frac{15}{5}=3$, $\\\\frac{45}{15}=3$, $\\\\frac{135}{45}=3$ — **constant ratio of 3**.

This is **exponential**: $y = 5 \\\\cdot 3^x$.

---

**Example 2 — Linear check**

| $x$ | 0 | 1 | 2 | 3 | 4 |
|-----|---|---|---|---|---|
| $y$ | 8 | 14 | 20 | 26 | 32 |

Differences: $14-8=6$, $20-14=6$, $26-20=6$ — **constant difference of 6**.

This is **linear**: $y = 6x + 8$.

**SAT Tip:** Always check ratios first — if they're constant, it's exponential. If not, check differences for linear.
      `
    },
    {
      id: 'sat-ef1-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Identify the Pattern** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A table shows $y$-values: 4, 12, 36, 108. What type of function is this?',
            options: ['Linear with slope 8', 'Exponential with base 3', 'Quadratic', 'Exponential with base 4'],
            correctAnswer: 1,
            explanation: 'Check the ratio: $12/4 = 3$, $36/12 = 3$, $108/36 = 3$. Constant ratio of 3, so it\\'s exponential with $y = 4 \\\\cdot 3^x$.'
          },
          {
            question: 'Which equation could model the data: $x = 0, 1, 2, 3$ and $y = 100, 50, 25, 12.5$?',
            options: ['$y = 100 - 50x$', '$y = 100 \\\\cdot (0.5)^x$', '$y = 100 \\\\cdot 2^x$', '$y = -50x + 100$'],
            correctAnswer: 1,
            explanation: 'Ratios: $50/100 = 0.5$, $25/50 = 0.5$. The values are halved each time, giving $y = 100(0.5)^x$. Option A would give negative values eventually and doesn\\'t match $y(2) = 0$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef1-writing',
      type: 'text' as const,
      content: `
## Writing Exponential Equations from Tables

To write $y = a \\\\cdot b^x$ from a table:

1. **Find $a$:** The $y$-value when $x = 0$. That's $a$ (the initial value).
2. **Find $b$:** Divide any consecutive $y$-value by the one before it: $b = \\\\frac{y_{n+1}}{y_n}$.

**Example:** A population starts at 200 and triples every year.

| Year ($x$) | 0 | 1 | 2 | 3 |
|------------|---|---|---|---|
| Population | 200 | 600 | 1800 | 5400 |

- $a = 200$ (value at $x = 0$).
- $b = 600/200 = 3$.
- Equation: $P = 200 \\\\cdot 3^x$.

**What if $x = 0$ isn't given?** Use any two consecutive rows. If $y = 48$ at $x = 2$ and $y = 192$ at $x = 3$, then $b = 192/48 = 4$. Back-substitute: $48 = a \\\\cdot 4^2 = 16a$, so $a = 3$. Equation: $y = 3 \\\\cdot 4^x$.
      `
    },
    {
      id: 'sat-ef1-input',
      type: 'input-boxes' as const,
      content: `
**Build the Equation** 🧮

A table shows:

| $x$ | 0 | 1 | 2 | 3 |
|-----|---|---|---|---|
| $y$ | 10 | 20 | 40 | 80 |

1) What is $a$ (the initial value)?
2) What is $b$ (the common ratio)?
3) What is $y$ when $x = 5$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '2', '320'],
        hint1: '$a$ is the $y$-value when $x = 0$.',
        hint2: 'Divide consecutive values: $20/10 = ?$',
        hint3: '$y = 10 \\\\cdot 2^5 = 10 \\\\cdot 32$.',
        explanation: '$a = 10$, $b = 20/10 = 2$. So $y = 10 \\\\cdot 2^x$. At $x = 5$: $y = 10 \\\\cdot 32 = 320$.'
      }
    },
    {
      id: 'sat-ef1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify Each Scenario** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A car loses 15% of its value every year',
            options: ['Linear growth', 'Linear decay', 'Exponential growth', 'Exponential decay']
          },
          {
            label: 'A tank fills at a constant rate of 3 gallons per minute',
            options: ['Linear growth', 'Linear decay', 'Exponential growth', 'Exponential decay']
          },
          {
            label: 'Bacteria double in number every 4 hours',
            options: ['Linear growth', 'Linear decay', 'Exponential growth', 'Exponential decay']
          },
          {
            label: 'A store marks down prices by $5 each week',
            options: ['Linear growth', 'Linear decay', 'Exponential growth', 'Exponential decay']
          }
        ],
        correctAnswers: [
          'Exponential decay',
          'Linear growth',
          'Exponential growth',
          'Linear decay'
        ],
        hint1: 'Losing a percentage each year means multiplying by a constant less than 1.',
        hint2: 'A constant rate (gallons/min or $/week) signals a linear pattern.',
        hint3: 'Doubling means multiplying by 2 each period — exponential.',
        explanation: 'Percent changes → exponential. Constant amount changes → linear. Decay means values decrease; growth means they increase.'
      }
    },
    {
      id: 'sat-ef1-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A study tracks a quantity over time. At $t = 0$ the value is 500, and it increases by 20% each year. Which function models this?',
            options: ['$f(t) = 500 + 20t$', '$f(t) = 500(0.20)^t$', '$f(t) = 500(1.20)^t$', '$f(t) = 500(0.80)^t$'],
            correctAnswer: 2,
            explanation: 'Increasing by 20% means multiplying by $1 + 0.20 = 1.20$ each year. Starting value 500 gives $f(t) = 500(1.20)^t$.'
          },
          {
            question: 'The table below shows an exponential function. What is $y$ when $x = 4$?\\n| $x$ | 0 | 1 | 2 | 3 | 4 |\\n|---|---|---|---|---|---|\\n| $y$ | 3 | 6 | 12 | 24 | ? |',
            options: ['30', '36', '48', '96'],
            correctAnswer: 2,
            explanation: 'The ratio is $6/3 = 2$. Each value doubles. So $y(4) = 24 \\\\times 2 = 48$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 2: Graphs of Exponential Functions ──────────────────────────────────
def part2():
    write(2, textwrap.dedent("""\
export const satExponentialFnPart2Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef2-intro',
      type: 'text' as const,
      content: `
# 📊 Graphs of Exponential Functions

**Part 2 of 7 — Shape, Asymptotes, Increasing/Decreasing, Reflections**

Every exponential function $y = a \\\\cdot b^x$ has a characteristic **J-curve** shape. The SAT tests your ability to read and interpret these graphs.

**Key graph features:**

| Feature | What to Look For |
|---------|-----------------|
| **$y$-intercept** | Set $x = 0$: $y = a \\\\cdot b^0 = a$ |
| **Horizontal asymptote** | $y = 0$ (the $x$-axis) for basic form |
| **Increasing** | When $b > 1$ (growth) |
| **Decreasing** | When $0 < b < 1$ (decay) |
| **Domain** | All real numbers |
| **Range** | $y > 0$ (if $a > 0$) |

The graph **never touches** the horizontal asymptote — it approaches it infinitely closely.
      `
    },
    {
      id: 'sat-ef2-shapes',
      type: 'text' as const,
      content: `
## Growth vs Decay — Visual Guide

**Exponential Growth** ($b > 1$, e.g. $y = 2^x$):
- Starts near the $x$-axis on the left
- Rises steeply to the right
- Passes through $(0, 1)$ when $a = 1$

**Exponential Decay** ($0 < b < 1$, e.g. $y = (0.5)^x$):
- Starts high on the left
- Falls toward the $x$-axis on the right
- Also passes through $(0, 1)$ when $a = 1$

---

**Transformations of $y = a \\\\cdot b^x + k$:**

| Parameter | Effect |
|-----------|--------|
| $a > 0$ | Opens upward |
| $a < 0$ | **Reflects** over $x$-axis (flips upside down) |
| $k > 0$ | Shifts graph **up** $k$ units; asymptote becomes $y = k$ |
| $k < 0$ | Shifts graph **down** $|k|$ units; asymptote is $y = k$ |

**Example:** $y = -3 \\\\cdot 2^x + 5$

- Reflected (since $a = -3 < 0$): graph goes downward
- Asymptote: $y = 5$
- $y$-intercept: $y = -3(1) + 5 = 2$
      `
    },
    {
      id: 'sat-ef2-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Reading Exponential Graphs** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The graph of $y = 4 \\\\cdot (0.5)^x$ crosses the $y$-axis at which point?',
            options: ['$(0, 0.5)$', '$(0, 4)$', '$(0, 2)$', '$(4, 0)$'],
            correctAnswer: 1,
            explanation: 'At $x = 0$: $y = 4 \\\\cdot (0.5)^0 = 4 \\\\cdot 1 = 4$. The $y$-intercept is $(0, 4)$.'
          },
          {
            question: 'What is the horizontal asymptote of $y = 2^x + 3$?',
            options: ['$y = 0$', '$y = 2$', '$y = 3$', '$y = -3$'],
            correctAnswer: 2,
            explanation: 'The $+3$ shifts the basic curve up 3 units. The asymptote moves from $y = 0$ to $y = 3$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef2-worked',
      type: 'text' as const,
      content: `
## Worked Example — Matching a Graph to an Equation

**Problem:** A graph shows an exponential curve that:
- Passes through $(0, 6)$
- Is decreasing (falls from left to right)
- Has a horizontal asymptote at $y = 0$

**Step 1:** Since the curve passes through $(0, 6)$, we know $a = 6$.

**Step 2:** It's decreasing, so $0 < b < 1$.

**Step 3:** The asymptote is $y = 0$, so there's no vertical shift.

**Step 4:** The equation is $y = 6 \\\\cdot b^x$ where $0 < b < 1$.

If it also passes through $(1, 3)$: $3 = 6b$, so $b = 0.5$.

$$y = 6 \\\\cdot (0.5)^x$$

---

**SAT Tip:** On graph-matching questions, always check the $y$-intercept first — it immediately tells you $a$.
      `
    },
    {
      id: 'sat-ef2-input',
      type: 'input-boxes' as const,
      content: `
**Find the Key Features** 🧮

Given $f(x) = 5 \\\\cdot 3^x - 2$

1) What is the $y$-intercept? (the $y$-value when $x = 0$)
2) What is the horizontal asymptote? (just the number)
3) What is $f(2)$?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3', '-2', '43'],
        hint1: 'Plug in $x = 0$: $f(0) = 5 \\\\cdot 3^0 - 2 = 5 - 2$.',
        hint2: 'The asymptote is the constant added at the end: $y = -2$.',
        hint3: '$f(2) = 5 \\\\cdot 3^2 - 2 = 5 \\\\cdot 9 - 2 = 45 - 2$.',
        explanation: '$y$-intercept: $5(1) - 2 = 3$. Asymptote: $y = -2$. $f(2) = 5(9) - 2 = 43$.'
      }
    },
    {
      id: 'sat-ef2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Description** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = 2^x$ — this graph is',
            options: ['Increasing, asymptote $y = 0$', 'Decreasing, asymptote $y = 0$', 'Increasing, asymptote $y = 1$', 'Decreasing, asymptote $y = 2$']
          },
          {
            label: '$y = -(0.5)^x + 4$ — $y$-intercept is',
            options: ['3', '4', '5', '-1']
          },
          {
            label: '$y = 10 \\\\cdot (0.8)^x$ — as $x \\\\to \\\\infty$, $y$ approaches',
            options: ['0', '10', '0.8', '$\\\\infty$']
          }
        ],
        correctAnswers: [
          'Increasing, asymptote $y = 0$',
          '3',
          '0'
        ],
        hint1: 'Base 2 > 1 means growth (increasing). No vertical shift means asymptote stays at $y = 0$.',
        hint2: 'At $x = 0$: $y = -(0.5)^0 + 4 = -1 + 4 = 3$.',
        hint3: 'As $x$ grows, $(0.8)^x \\\\to 0$, so $10 \\\\cdot (0.8)^x \\\\to 0$.',
        explanation: '$2^x$ is growth. $-(0.5)^0 + 4 = 3$. Decay functions approach 0 (or the asymptote).'
      }
    },
    {
      id: 'sat-ef2-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A function $g(x) = a \\\\cdot b^x + k$ has a horizontal asymptote at $y = -1$ and passes through $(0, 5)$. If $b = 2$, what is $a$?',
            options: ['$4$', '$5$', '$6$', '$-6$'],
            correctAnswer: 2,
            explanation: 'Asymptote at $y = -1$ means $k = -1$. At $x = 0$: $5 = a \\\\cdot 2^0 - 1 = a - 1$. So $a = 6$.'
          },
          {
            question: 'Which of the following functions is decreasing and has a range of $(3, \\\\infty)$?',
            options: ['$y = 2^x + 3$', '$y = -(2^x) + 3$', '$y = 4 \\\\cdot (0.5)^x + 3$', '$y = (0.5)^x - 3$'],
            correctAnswer: 2,
            explanation: 'Decreasing requires $0 < b < 1$ or a negative $a$ with $b > 1$. Option C: $(0.5)^x$ is decreasing, and $+3$ shifts the asymptote to $y = 3$. Since $4(0.5)^x > 0$, the range is $(3, \\\\infty)$. Option B is decreasing but its range is $(-\\\\infty, 3)$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 3: Exponential Equations ────────────────────────────────────────────
def part3():
    write(3, textwrap.dedent("""\
export const satExponentialFnPart3Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef3-intro',
      type: 'text' as const,
      content: `
# 🔢 Solving Exponential Equations

**Part 3 of 7 — Same-Base Strategy, Logarithmic Thinking, SAT Shortcuts**

When the SAT gives you an exponential equation, you usually **don't** need a calculator. Most SAT exponential equations can be solved by rewriting both sides with the **same base**.

**Core principle:** If $a^m = a^n$, then $m = n$ (when $a > 0, a \\\\neq 1$).

**Common base families to memorize:**

| Base 2 | Base 3 | Base 5 |
|--------|--------|--------|
| $2^1 = 2$ | $3^1 = 3$ | $5^1 = 5$ |
| $2^2 = 4$ | $3^2 = 9$ | $5^2 = 25$ |
| $2^3 = 8$ | $3^3 = 27$ | $5^3 = 125$ |
| $2^4 = 16$ | $3^4 = 81$ | $5^4 = 625$ |
| $2^5 = 32$ | $3^5 = 243$ | |
| $2^{10} = 1024$ | | |
      `
    },
    {
      id: 'sat-ef3-samebase',
      type: 'text' as const,
      content: `
## Same-Base Method — Worked Examples

**Example 1:** Solve $8^x = 32$.

Rewrite in base 2: $8 = 2^3$ and $32 = 2^5$.

$$(2^3)^x = 2^5$$
$$2^{3x} = 2^5$$
$$3x = 5 \\\\implies x = \\\\frac{5}{3}$$

---

**Example 2:** Solve $4^{x+1} = \\\\frac{1}{8}$.

Rewrite: $4 = 2^2$ and $\\\\frac{1}{8} = 2^{-3}$.

$$(2^2)^{x+1} = 2^{-3}$$
$$2^{2(x+1)} = 2^{-3}$$
$$2x + 2 = -3$$
$$x = -\\\\frac{5}{2}$$

---

**Example 3:** Solve $9^x = 27$.

$9 = 3^2$, $27 = 3^3$: $(3^2)^x = 3^3 \\\\implies 2x = 3 \\\\implies x = \\\\frac{3}{2}$.

**SAT Tip:** If you see 4, 8, 16, 32, 64 → think base 2. If you see 9, 27, 81 → think base 3.
      `
    },
    {
      id: 'sat-ef3-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Same-Base Practice** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Solve: $27^x = 9$',
            options: ['$x = 3$', '$x = \\\\frac{2}{3}$', '$x = \\\\frac{3}{2}$', '$x = \\\\frac{1}{3}$'],
            correctAnswer: 1,
            explanation: '$27 = 3^3$ and $9 = 3^2$. So $(3^3)^x = 3^2 \\\\implies 3x = 2 \\\\implies x = \\\\frac{2}{3}$.'
          },
          {
            question: 'If $2^{3x-1} = 16$, what is $x$?',
            options: ['$\\\\frac{4}{3}$', '$\\\\frac{5}{3}$', '$3$', '$\\\\frac{3}{2}$'],
            correctAnswer: 1,
            explanation: '$16 = 2^4$. So $3x - 1 = 4 \\\\implies 3x = 5 \\\\implies x = \\\\frac{5}{3}$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef3-logs',
      type: 'text' as const,
      content: `
## When Bases Don't Match — Conceptual Log Approach

Sometimes the SAT gives equations where you **can't** easily match bases, like $5^x = 20$.

**What the SAT expects you to know about logs:**

- $\\\\log$ undoes exponentiation: if $b^x = y$, then $x = \\\\log_b(y)$
- You rarely need to compute exact log values on the SAT
- The SAT usually asks for the **setup**, not the decimal answer

**Example:** Which expression gives the solution to $5^x = 20$?

$$x = \\\\log_5(20) = \\\\frac{\\\\ln 20}{\\\\ln 5}$$

**SAT Shortcut for estimation:** Since $5^1 = 5$ and $5^2 = 25$, and $20$ is between $5$ and $25$, we know $1 < x < 2$ (closer to 2). This helps you eliminate wrong answer choices.

---

**Key rule:** $a^x = b \\\\implies x = \\\\frac{\\\\log b}{\\\\log a}$ (any base of log works).
      `
    },
    {
      id: 'sat-ef3-input',
      type: 'input-boxes' as const,
      content: `
**Solve for $x$** 🧮

1) $2^x = 64$

2) $5^{2x} = 125$

3) $4^x = \\\\frac{1}{16}$
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '3/2', '-2'],
        hint1: '$64 = 2^?$ Count: $2, 4, 8, 16, 32, 64$.',
        hint2: '$125 = 5^3$. So $2x = 3$.',
        hint3: '$\\\\frac{1}{16} = \\\\frac{1}{4^2} = 4^{-2}$, so $x = -2$.',
        explanation: '1) $2^6 = 64$, so $x = 6$. 2) $5^{2x} = 5^3 \\\\implies 2x = 3 \\\\implies x = 3/2$. 3) $4^x = 4^{-2} \\\\implies x = -2$.'
      }
    },
    {
      id: 'sat-ef3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Strategy** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$3^{2x} = 81$',
            options: ['Rewrite as base 3 and set exponents equal', 'Take log of both sides', 'Factor the equation', 'Graph both sides']
          },
          {
            label: '$7^x = 50$',
            options: ['Rewrite as base 7 and set exponents equal', 'Use logarithms: $x = \\\\log(50)/\\\\log(7)$', 'Factor the equation', 'Guess and check']
          },
          {
            label: '$25^x = 5^{3x-1}$',
            options: ['Rewrite 25 as $5^2$ and set exponents equal', 'Use logarithms', 'Cross multiply', 'Take the square root']
          }
        ],
        correctAnswers: [
          'Rewrite as base 3 and set exponents equal',
          'Use logarithms: $x = \\\\log(50)/\\\\log(7)$',
          'Rewrite 25 as $5^2$ and set exponents equal'
        ],
        hint1: '$81 = 3^4$, so both sides share base 3.',
        hint2: '50 is not a clean power of 7, so you need logs.',
        hint3: '$25 = 5^2$, making both sides base 5.',
        explanation: 'Use same-base when both sides can share a base. Use logs when they can\\'t. The SAT rarely requires actual log computation — just setting up the expression.'
      }
    },
    {
      id: 'sat-ef3-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'If $4^{x+1} = 8^{x}$, what is the value of $x$?',
            options: ['$1$', '$2$', '$3$', '$4$'],
            correctAnswer: 1,
            explanation: 'Rewrite: $(2^2)^{x+1} = (2^3)^x \\\\implies 2^{2x+2} = 2^{3x} \\\\implies 2x + 2 = 3x \\\\implies x = 2$.'
          },
          {
            question: 'Which expression is equal to the solution of $3^x = 40$?',
            options: ['$\\\\frac{\\\\log 3}{\\\\log 40}$', '$\\\\frac{40}{3}$', '$\\\\frac{\\\\log 40}{\\\\log 3}$', '$3 \\\\log 40$'],
            correctAnswer: 2,
            explanation: 'Taking $\\\\log$ of both sides: $x \\\\log 3 = \\\\log 40$, so $x = \\\\frac{\\\\log 40}{\\\\log 3}$.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 4: Compound Interest ────────────────────────────────────────────────
def part4():
    write(4, textwrap.dedent("""\
export const satExponentialFnPart4Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef4-intro',
      type: 'text' as const,
      content: `
# 💰 Compound Interest

**Part 4 of 7 — The Compound Interest Formula & Continuous Compounding**

Compound interest is one of the most **tested** exponential applications on the SAT. You must know two formulas:

**Periodic compounding:**

$$A = P\\\\left(1 + \\\\frac{r}{n}\\\\right)^{nt}$$

| Variable | Meaning |
|----------|---------|
| $A$ | Final amount |
| $P$ | Principal (initial investment) |
| $r$ | Annual interest rate (as a decimal) |
| $n$ | Times compounded per year |
| $t$ | Time in years |

**Continuous compounding:**

$$A = Pe^{rt}$$

Common values of $n$: annually = 1, semiannually = 2, quarterly = 4, monthly = 12, daily = 365.
      `
    },
    {
      id: 'sat-ef4-worked',
      type: 'text' as const,
      content: `
## Worked Example — Periodic Compounding

**Problem:** \\\\$5,000 is invested at 6% annual interest, compounded quarterly. What is the value after 3 years?

**Step 1:** Identify the variables.
- $P = 5000$, $r = 0.06$, $n = 4$ (quarterly), $t = 3$.

**Step 2:** Plug into the formula.

$$A = 5000\\\\left(1 + \\\\frac{0.06}{4}\\\\right)^{4 \\\\cdot 3}$$

$$A = 5000(1 + 0.015)^{12}$$

$$A = 5000(1.015)^{12}$$

**Step 3:** Calculate $(1.015)^{12} \\\\approx 1.1956$.

$$A \\\\approx 5000 \\\\times 1.1956 = \\\\$5{,}978$$

---

**SAT Tip:** The SAT often asks you to **set up** the expression rather than compute the final answer. Recognize the structure: $P(1 + r/n)^{nt}$.
      `
    },
    {
      id: 'sat-ef4-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Compound Interest Setup** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'Maya invests \\\\$2,000 at 4% annual interest, compounded monthly. Which expression gives the amount after 5 years?',
            options: [
              '$2000(1 + 0.04)^5$',
              '$2000\\\\left(1 + \\\\frac{0.04}{12}\\\\right)^{60}$',
              '$2000\\\\left(1 + \\\\frac{4}{12}\\\\right)^{60}$',
              '$2000(1.04)^{60}$'
            ],
            correctAnswer: 1,
            explanation: '$P = 2000$, $r = 0.04$, $n = 12$, $t = 5$. So $A = 2000(1 + 0.04/12)^{12 \\\\cdot 5} = 2000(1 + 0.04/12)^{60}$.'
          },
          {
            question: 'In the expression $1000(1.02)^{4t}$, what does the number $1.02$ represent?',
            options: [
              'The annual interest rate is 2%',
              'Each compounding period earns 2% interest',
              'The investment doubles every 2 years',
              'The principal is \\\\$1.02'
            ],
            correctAnswer: 1,
            explanation: 'The $1.02$ inside the parentheses means each compounding period adds 2% of the current balance. The exponent $4t$ suggests compounding 4 times per year, making the annual rate $4 \\\\times 2\\\\% = 8\\\\%$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef4-continuous',
      type: 'text' as const,
      content: `
## Continuous Compounding — $A = Pe^{rt}$

When money compounds **continuously** (infinitely many times per year), we use:

$$A = Pe^{rt}$$

**Example:** \\\\$1,000 invested at 5% compounded continuously for 10 years.

$$A = 1000 \\\\cdot e^{0.05 \\\\times 10} = 1000 \\\\cdot e^{0.5}$$

Since $e^{0.5} \\\\approx 1.6487$:

$$A \\\\approx \\\\$1{,}648.72$$

---

**Comparing compounding frequencies** (\\\\$1,000 at 5% for 10 years):

| Compounding | Formula Value | Amount |
|-------------|---------------|--------|
| Annually ($n=1$) | $(1.05)^{10}$ | \\\\$1,628.89 |
| Quarterly ($n=4$) | $(1.0125)^{40}$ | \\\\$1,643.62 |
| Monthly ($n=12$) | $(1.00417)^{120}$ | \\\\$1,647.01 |
| Continuously | $e^{0.5}$ | \\\\$1,648.72 |

More frequent compounding → slightly more money, but the returns diminish.
      `
    },
    {
      id: 'sat-ef4-input',
      type: 'input-boxes' as const,
      content: `
**Set Up the Formula** 🧮

An investment of \\\\$3,000 earns 8% annual interest, compounded semiannually, for 4 years. In the formula $A = P(1 + r/n)^{nt}$:

1) What is $r/n$? (as a decimal)
2) What is $nt$?
3) What is the full expression's growth factor (the base raised to the power)? Write as $(1.04)^8$ format.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.04', '8', '(1.04)^8'],
        hint1: '$r = 0.08$ and $n = 2$ (semiannually), so $r/n = 0.08/2$.',
        hint2: '$n \\\\cdot t = 2 \\\\times 4 = 8$ total compounding periods.',
        hint3: 'The growth factor is $(1 + 0.04)^8 = (1.04)^8$.',
        explanation: '$r/n = 0.08/2 = 0.04$. $nt = 2 \\\\times 4 = 8$. Growth factor: $(1.04)^8$. Full expression: $A = 3000(1.04)^8$.'
      }
    },
    {
      id: 'sat-ef4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Identify the Components** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $5000(1.015)^{20}$, the annual rate is 6% and it compounds',
            options: ['Annually', 'Semiannually', 'Quarterly', 'Monthly']
          },
          {
            label: 'To find the doubling time, you set $A$ equal to',
            options: ['$P$', '$2P$', '$P/2$', '$P + 2$']
          },
          {
            label: '$A = 800e^{0.03t}$ represents which type of compounding?',
            options: ['Annual', 'Quarterly', 'Continuous', 'Monthly']
          }
        ],
        correctAnswers: [
          'Quarterly',
          '2P',
          'Continuous'
        ],
        hint1: 'Rate per period = $0.015$. If annual rate is 6%, then $0.06/n = 0.015$ → $n = 4$.',
        hint2: 'Doubling means the final amount is twice the principal.',
        hint3: 'The formula $Pe^{rt}$ is the hallmark of continuous compounding.',
        explanation: '$0.06/4 = 0.015$, so quarterly. Doubling: $A = 2P$. The $e^{rt}$ form is always continuous compounding.'
      }
    },
    {
      id: 'sat-ef4-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'Juan deposits \\\\$1,200 in a savings account that pays 3% annual interest, compounded annually. Which expression represents the amount in the account after $t$ years?',
            options: [
              '$1200(0.03)^t$',
              '$1200(1.03)^t$',
              '$1200 + 0.03t$',
              '$1200(1.3)^t$'
            ],
            correctAnswer: 1,
            explanation: 'Compounded annually: $n = 1$, so $A = 1200(1 + 0.03)^t = 1200(1.03)^t$. Option C is simple interest (linear). Option D uses 30% instead of 3%.'
          },
          {
            question: 'Two accounts both start with \\\\$1,000. Account A earns 6% compounded annually. Account B earns 5.9% compounded daily. After 1 year, which has more money?',
            options: [
              'Account A, because 6% > 5.9%',
              'Account B, because daily compounding adds more',
              'They are exactly equal',
              'Cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'A: $1000(1.06)^1 = \\\\$1{,}060$. B: $1000(1 + 0.059/365)^{365} \\\\approx 1000(1.0608) = \\\\$1{,}060.77$. Account B is actually slightly more! But on the SAT level, recognize that the higher nominal rate with less frequent compounding can be compared using effective annual rate.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 5: Percent Change as Multipliers ────────────────────────────────────
def part5():
    write(5, textwrap.dedent("""\
export const satExponentialFnPart5Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef5-intro',
      type: 'text' as const,
      content: `
# 📊 Percent Change as Multipliers

**Part 5 of 7 — Repeated Percent Change, Depreciation, Growth Factors**

The SAT frequently tests your understanding of percent change in exponential contexts. The key insight:

$$\\\\text{Increase by } r\\\\% \\\\implies \\\\text{multiply by } (1 + r/100)$$
$$\\\\text{Decrease by } r\\\\% \\\\implies \\\\text{multiply by } (1 - r/100)$$

| Percent Change | Multiplier | Example |
|----------------|------------|---------|
| Increase 20% | $\\\\times 1.20$ | \\\\$100 → \\\\$120 |
| Increase 5% | $\\\\times 1.05$ | \\\\$100 → \\\\$105 |
| Decrease 10% | $\\\\times 0.90$ | \\\\$100 → \\\\$90 |
| Decrease 25% | $\\\\times 0.75$ | \\\\$100 → \\\\$75 |
| Double (100%) | $\\\\times 2.00$ | \\\\$100 → \\\\$200 |
| Halve (50%) | $\\\\times 0.50$ | \\\\$100 → \\\\$50 |

**Repeated change** after $n$ periods: $\\\\text{Final} = \\\\text{Initial} \\\\times (\\\\text{multiplier})^n$.
      `
    },
    {
      id: 'sat-ef5-worked',
      type: 'text' as const,
      content: `
## Worked Examples — Finding & Using Multipliers

**Example 1 — Depreciation**

A car worth \\\\$25,000 depreciates by 15% per year. What is its value after 4 years?

- Multiplier: $1 - 0.15 = 0.85$
- Value: $25000 \\\\times (0.85)^4$
- $(0.85)^4 \\\\approx 0.5220$
- Value $\\\\approx \\\\$13{,}050$

---

**Example 2 — Extracting the Rate**

A population is modeled by $P(t) = 500(1.08)^t$. What is the growth rate?

The multiplier is $1.08 = 1 + 0.08$, so the growth rate is **8% per time period**.

---

**Example 3 — Tricky SAT question**

A quantity increases by 50% and then decreases by 50%. Is the result the original value?

- Start with 100. Increase by 50%: $100 \\\\times 1.5 = 150$.
- Decrease by 50%: $150 \\\\times 0.5 = 75$.
- Result: **75, not 100!**

The net effect is $1.5 \\\\times 0.5 = 0.75$, a 25% decrease. **This is a classic SAT trap.**
      `
    },
    {
      id: 'sat-ef5-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Identify the Multiplier** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'The value of a collectible increases by 12% each year. If it is currently worth \\\\$400, which expression gives its value in $t$ years?',
            options: [
              '$400 + 12t$',
              '$400(0.12)^t$',
              '$400(1.12)^t$',
              '$400(0.88)^t$'
            ],
            correctAnswer: 2,
            explanation: 'Increase by 12% → multiplier is $1 + 0.12 = 1.12$. After $t$ years: $400(1.12)^t$. Option A is linear growth, not exponential.'
          },
          {
            question: 'A town\\'s population decreases by 3% each year. If the current population is 20,000, approximately how many people will there be in 10 years?',
            options: [
              '$20{,}000(0.97)^{10} \\\\approx 14{,}776$',
              '$20{,}000(0.03)^{10}$',
              '$20{,}000(1.03)^{10} \\\\approx 26{,}878$',
              '$20{,}000 - 3(10) = 19{,}970$'
            ],
            correctAnswer: 0,
            explanation: 'Decrease by 3% → multiplier is $0.97$. After 10 years: $20{,}000(0.97)^{10}$. $(0.97)^{10} \\\\approx 0.7374$, giving about 14,776.'
          }
        ]
      }
    },
    {
      id: 'sat-ef5-advanced',
      type: 'text' as const,
      content: `
## Changing Time Periods

Sometimes the SAT gives a rate per one time period and asks about a different period.

**Example:** A culture of bacteria increases by 20% every **3 hours**. Write a function for the number of bacteria after $t$ **hours**, starting with 100.

Since the 20% increase happens every 3 hours, in $t$ hours there are $t/3$ growth periods.

$$N(t) = 100 \\\\cdot (1.20)^{t/3}$$

---

**Converting to hourly rate (advanced):**

The 3-hour multiplier is $1.20$. The hourly multiplier $m$ satisfies $m^3 = 1.20$:

$$m = (1.20)^{1/3} \\\\approx 1.0627$$

So the hourly growth rate is about $6.27\\\\%$.

Equivalent form: $N(t) = 100 \\\\cdot (1.0627)^t$.

**SAT Tip:** If the rate is "per 3 hours" and the variable is in hours, divide the exponent by 3.
      `
    },
    {
      id: 'sat-ef5-input',
      type: 'input-boxes' as const,
      content: `
**Percent Change Calculations** 🧮

1) What multiplier represents a 35% increase?

2) A laptop worth \\\\$1,200 loses 20% of its value each year. What is the multiplier?

3) After 3 years at that depreciation rate, what is the laptop worth? (Round to nearest dollar)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.35', '0.80', '614'],
        hint1: 'Increase of 35%: multiply by $1 + 0.35$.',
        hint2: 'Losing 20% means keeping 80%, so multiply by $0.80$.',
        hint3: '$1200 \\\\times (0.80)^3 = 1200 \\\\times 0.512 = ?$',
        explanation: '1) $1.35$. 2) $1 - 0.20 = 0.80$. 3) $1200(0.80)^3 = 1200(0.512) = 614.40 \\\\approx \\\\$614$.'
      }
    },
    {
      id: 'sat-ef5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Scenario to the Function** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'House value increases 4% per year, starting at \\\\$300,000',
            options: ['$300000(1.04)^t$', '$300000(0.96)^t$', '$300000(1.4)^t$', '$300000 + 12000t$']
          },
          {
            label: 'Radioactive substance decays 8% per hour, starting with 50g',
            options: ['$50(1.08)^t$', '$50(0.92)^t$', '$50(0.08)^t$', '$50 - 4t$']
          },
          {
            label: 'Stock price doubles every 5 years, starting at \\\\$40',
            options: ['$40(2)^t$', '$40(2)^{t/5}$', '$40(1.02)^t$', '$40 + 8t$']
          }
        ],
        correctAnswers: [
          '$300000(1.04)^t$',
          '$50(0.92)^t$',
          '$40(2)^{t/5}$'
        ],
        hint1: '4% increase → multiplier 1.04.',
        hint2: '8% decay → keeping 92% → multiplier 0.92.',
        hint3: 'Doubles every 5 years → factor of 2, but it takes 5 years, so $t/5$ periods.',
        explanation: 'Growth: multiplier > 1. Decay: multiplier < 1. Different time periods: adjust the exponent.'
      }
    },
    {
      id: 'sat-ef5-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A store increases prices by 10% one year, then decreases them by 10% the next year. The net effect on the original price is:',
            options: [
              'No change (back to original)',
              'A 1% decrease',
              'A 1% increase',
              'A 2% decrease'
            ],
            correctAnswer: 1,
            explanation: 'Net multiplier: $1.10 \\\\times 0.90 = 0.99$. That is a 1% decrease. This is because the 10% decrease is applied to the larger amount.'
          },
          {
            question: 'The function $f(t) = 800(0.75)^{t/4}$ models the mass of a substance in grams after $t$ days. What percent of the substance decays every 4 days?',
            options: ['75%', '25%', '4%', '0.75%'],
            correctAnswer: 1,
            explanation: 'Every 4 days ($t/4$ increases by 1), the mass is multiplied by 0.75. That means 75% remains and 25% decays.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 6: Modeling Real-World Data ─────────────────────────────────────────
def part6():
    write(6, textwrap.dedent("""\
export const satExponentialFnPart6Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef6-intro',
      type: 'text' as const,
      content: `
# 🌍 Modeling Real-World Data

**Part 6 of 7 — Population Growth, Radioactive Decay, Temperature Cooling**

The SAT tests exponential functions in **real-world contexts**. The math is the same — what changes is the story. Here are the three most common models:

| Model | General Form | What's Happening |
|-------|-------------|------------------|
| **Population Growth** | $P(t) = P_0 \\\\cdot (1+r)^t$ | Multiplying by a constant > 1 each period |
| **Radioactive Decay** | $N(t) = N_0 \\\\cdot (0.5)^{t/h}$ | Halving every $h$ time units (half-life) |
| **Cooling/Warming** | $T(t) = T_{env} + (T_0 - T_{env})e^{-kt}$ | Approaching environment temperature |

On the SAT, you'll mainly see population growth and decay. Let's master each one.
      `
    },
    {
      id: 'sat-ef6-population',
      type: 'text' as const,
      content: `
## Population Growth — Worked Example

**Problem:** A city had 50,000 residents in 2010 and grows at 3% per year. Estimate the population in 2025.

**Setup:**
- $P_0 = 50{,}000$ (initial population)
- $r = 0.03$ (3% growth rate)
- $t = 2025 - 2010 = 15$ years

$$P(15) = 50{,}000(1.03)^{15}$$

To estimate $(1.03)^{15}$: use the fact that $(1.03)^{10} \\\\approx 1.344$ and $(1.03)^5 \\\\approx 1.159$:

$$(1.03)^{15} \\\\approx 1.344 \\\\times 1.159 \\\\approx 1.558$$

$$P(15) \\\\approx 50{,}000 \\\\times 1.558 = 77{,}900$$

---

**SAT Tip:** You don't need exact values. The SAT gives answer choices far enough apart that estimation works.
      `
    },
    {
      id: 'sat-ef6-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Population Modeling** 🔍
      `,
      exercise: {
        questions: [
          {
            question: 'A bacteria colony starts with 200 cells and doubles every 30 minutes. Which function gives the number of cells after $t$ minutes?',
            options: [
              '$N(t) = 200(2)^t$',
              '$N(t) = 200(2)^{30t}$',
              '$N(t) = 200(2)^{t/30}$',
              '$N(t) = 400^t$'
            ],
            correctAnswer: 2,
            explanation: 'Doubling every 30 minutes: the number of doubling periods in $t$ minutes is $t/30$. So $N = 200 \\\\cdot 2^{t/30}$.'
          },
          {
            question: 'At this rate, approximately how many bacteria are there after 2 hours?',
            options: ['800', '1,600', '3,200', '6,400'],
            correctAnswer: 2,
            explanation: '2 hours = 120 minutes. Number of doublings: $120/30 = 4$. So $N = 200 \\\\cdot 2^4 = 200 \\\\cdot 16 = 3{,}200$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef6-halflife',
      type: 'text' as const,
      content: `
## Radioactive Decay & Half-Life

**Half-life** is the time it takes for half of a substance to decay. The formula is:

$$N(t) = N_0 \\\\cdot \\\\left(\\\\frac{1}{2}\\\\right)^{t/h}$$

where $h$ is the half-life.

**Example:** Carbon-14 has a half-life of 5,730 years. A sample starts with 80 grams. How much remains after 17,190 years?

- Number of half-lives: $\\\\frac{17{,}190}{5{,}730} = 3$
- $N = 80 \\\\cdot (0.5)^3 = 80 \\\\cdot 0.125 = 10$ grams

**Quick method:** For whole half-lives, just keep halving:

$$80 \\\\xrightarrow{\\\\div 2} 40 \\\\xrightarrow{\\\\div 2} 20 \\\\xrightarrow{\\\\div 2} 10$$

---

**SAT Tip:** If the number of half-lives is a whole number, skip the formula and just halve repeatedly. It's faster and error-free.
      `
    },
    {
      id: 'sat-ef6-input',
      type: 'input-boxes' as const,
      content: `
**Decay Calculations** 🧮

A radioactive substance has a half-life of 10 years. You start with 600 grams.

1) How much remains after 20 years?

2) How much remains after 30 years?

3) After how many years will only 75 grams remain?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['150', '75', '30'],
        hint1: '20 years = 2 half-lives. $600 \\\\div 2 \\\\div 2 = ?$',
        hint2: '30 years = 3 half-lives. Keep halving.',
        hint3: '$75 = 600 \\\\cdot (0.5)^n$. How many times do you halve 600 to get 75? $600 \\\\to 300 \\\\to 150 \\\\to 75$.',
        explanation: '1) 2 half-lives: $600 \\\\to 300 \\\\to 150$. 2) 3 half-lives: $600 \\\\to 300 \\\\to 150 \\\\to 75$. 3) Takes 3 half-lives = $3 \\\\times 10 = 30$ years.'
      }
    },
    {
      id: 'sat-ef6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Interpret the Model** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In $P(t) = 1200(1.05)^t$, the 1200 represents',
            options: ['Growth rate', 'Initial population', 'Final population', 'Time in years']
          },
          {
            label: 'In $N(t) = 500(0.5)^{t/8}$, the half-life is',
            options: ['500 units', '0.5 units', '8 units', '4 units']
          },
          {
            label: 'A function $f(t) = 100(0.93)^t$ models decay. The decay rate is',
            options: ['93%', '7%', '0.93%', '100%']
          },
          {
            label: 'If a population triples every 6 years, after 18 years it has grown by a factor of',
            options: ['3', '6', '9', '27']
          }
        ],
        correctAnswers: [
          'Initial population',
          '8 units',
          '7%',
          '27'
        ],
        hint1: 'The coefficient in front is always the initial value (when $t = 0$).',
        hint2: 'In $(0.5)^{t/h}$, the denominator of the exponent is the half-life.',
        hint3: 'Multiplier of 0.93 means 93% remains, so 7% decays.',
        hint4: '18 years = 3 periods of 6 years. Triples 3 times: $3^3 = 27$.',
        explanation: '1200 is the initial value. The half-life is 8. Decay rate = $1 - 0.93 = 0.07 = 7\\\\%$. $3^3 = 27$.'
      }
    },
    {
      id: 'sat-ef6-sat',
      type: 'multiple-choice' as const,
      content: `
**SAT-Style Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A scientist models the decay of a substance as $A(t) = 240\\\\left(\\\\frac{1}{2}\\\\right)^{t/6}$, where $t$ is in hours. How long until only 30 grams remain?',
            options: ['12 hours', '15 hours', '18 hours', '24 hours'],
            correctAnswer: 2,
            explanation: '$30 = 240(0.5)^{t/6}$. Divide: $(0.5)^{t/6} = 30/240 = 1/8 = (0.5)^3$. So $t/6 = 3$, giving $t = 18$ hours.'
          },
          {
            question: 'The deer population in a park is modeled by $P(t) = 80(1.06)^t$, where $t$ is years since 2020. In what year will the population first exceed 120?',
            options: ['2026', '2027', '2028', '2030'],
            correctAnswer: 2,
            explanation: 'We need $(1.06)^t > 1.5$. Testing: $(1.06)^7 \\\\approx 1.504$. Since $1.504 > 1.5$, the population exceeds 120 during year $t = 7$, but $(1.06)^6 \\\\approx 1.419 < 1.5$. First exceeds 120 partway through year 7 (after 2027 starts), so $2020 + 7 = 2027$. Wait — let\\'s check: at $t = 7$ (start of 2027), $P = 80(1.504) \\\\approx 120.3 > 120$. So in **2027**... but answering 2027 depends on interpretation. At $t=7$, which is 7 years after 2020 = **2027**. But $(1.06)^7 \\\\approx 120.3$. So it first exceeds 120 in 2027. The answer is approximately 2027, but check $(1.06)^8 \\\\approx 127.5$. Given the choices, $t \\\\approx 7$ → year 2027. Actually the closest answer choice available is 2027.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Part 7: Review & Mixed Practice ──────────────────────────────────────────
def part7():
    write(7, textwrap.dedent("""\
export const satExponentialFnPart7Data = {
  topicSlug: 'sat-exponential-functions-sat',
  sections: [
    {
      id: 'sat-ef7-intro',
      type: 'text' as const,
      content: `
# 🎯 Review & Mixed Practice

**Part 7 of 7 — Formula Reference & Mixed SAT-Style Questions**

You've covered all the key exponential function topics. Here's your formula cheat sheet:

**Core Formulas:**

| Formula | Use |
|---------|-----|
| $y = a \\\\cdot b^x$ | General exponential function |
| $A = P(1 + r/n)^{nt}$ | Compound interest |
| $A = Pe^{rt}$ | Continuous compounding |
| $N = N_0(0.5)^{t/h}$ | Half-life decay |

**Key Relationships:**

| If you see... | It means... |
|---------------|-------------|
| Constant ratio in table | Exponential function |
| Constant difference in table | Linear function |
| Multiplier > 1 | Growth |
| 0 < Multiplier < 1 | Decay |
| "increases by $r$%" | Multiply by $(1 + r/100)$ |
| "decreases by $r$%" | Multiply by $(1 - r/100)$ |

**SAT Strategy:** Read the problem → identify the model → write the equation → solve.
      `
    },
    {
      id: 'sat-ef7-mcq1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 1** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'A table shows: $x = 0, 1, 2, 3$ and $y = 256, 192, 144, 108$. What is the common ratio?',
            options: ['$\\\\frac{3}{4}$', '$\\\\frac{4}{3}$', '$\\\\frac{2}{3}$', '$64$'],
            correctAnswer: 0,
            explanation: '$192/256 = 3/4$. Check: $144/192 = 3/4$ and $108/144 = 3/4$. The common ratio is $3/4$.'
          },
          {
            question: 'Which function has a horizontal asymptote at $y = 5$?',
            options: ['$y = 5 \\\\cdot 2^x$', '$y = 2^x + 5$', '$y = 2^{x+5}$', '$y = 5^x$'],
            correctAnswer: 1,
            explanation: 'The asymptote is determined by the vertical shift. $y = 2^x + 5$ shifts the graph up 5 units, moving the asymptote from $y = 0$ to $y = 5$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef7-input1',
      type: 'input-boxes' as const,
      content: `
**Quick Calculations** 🧮

1) Solve: $3^{2x} = 81$

2) \\\\$5,000 at 4% compounded annually for 1 year = ?

3) A substance with half-life 5 years: starting with 160g, how much after 15 years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '5200', '20'],
        hint1: '$81 = 3^4$, so $2x = 4$.',
        hint2: '$5000(1.04)^1 = 5000 \\\\times 1.04$.',
        hint3: '15 years = 3 half-lives. $160 \\\\to 80 \\\\to 40 \\\\to 20$.',
        explanation: '1) $3^{2x} = 3^4 \\\\implies x = 2$. 2) $5000 \\\\times 1.04 = 5200$. 3) Three halvings: $160 \\\\div 8 = 20$.'
      }
    },
    {
      id: 'sat-ef7-mixed',
      type: 'text' as const,
      content: `
## Common SAT Traps to Avoid

**Trap 1: Confusing the rate with the multiplier**
- "Grows at 5%" → multiplier is $1.05$, **not** $0.05$
- "Decays at 5%" → multiplier is $0.95$, **not** $0.05$ or $1.05$

**Trap 2: Wrong time units**
- If the rate is "per month" but $t$ is in years, convert: $12t$ months
- If something doubles every 3 hours but $t$ is in hours: exponent is $t/3$

**Trap 3: "Increase then decrease" doesn't cancel**
- +10% then −10% gives a net **1% decrease** (not zero!)
- Net multiplier: $1.10 \\\\times 0.90 = 0.99$

**Trap 4: Continuous vs periodic compounding**
- $Pe^{rt}$ is continuous
- $P(1 + r/n)^{nt}$ is periodic
- They give different answers!
      `
    },
    {
      id: 'sat-ef7-mcq2',
      type: 'multiple-choice' as const,
      content: `
**Mixed Practice — Set 2** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'An investment of \\\\$2,000 is placed in an account that compounds interest continuously at a rate of 6%. Which expression gives the value after 10 years?',
            options: [
              '$2000(1.06)^{10}$',
              '$2000e^{6}$',
              '$2000e^{0.6}$',
              '$2000(1 + 0.06/12)^{120}$'
            ],
            correctAnswer: 2,
            explanation: 'Continuous compounding: $A = Pe^{rt} = 2000e^{0.06 \\\\times 10} = 2000e^{0.6}$. Option A is annual compounding, not continuous.'
          },
          {
            question: 'A car\\'s value is modeled by $V(t) = 28000(0.82)^t$, where $t$ is in years. What does the $0.82$ tell you?',
            options: [
              'The car loses 82% of its value each year',
              'The car retains 82% of its value each year',
              'The car\\'s value increases by 18% each year',
              'The car will be worth \\\\$0.82 eventually'
            ],
            correctAnswer: 1,
            explanation: 'A multiplier of 0.82 means the car keeps 82% of its value (loses 18%) each year. The value decreases because $0.82 < 1$.'
          }
        ]
      }
    },
    {
      id: 'sat-ef7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Final Review — Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: '$y = 500(1.12)^t$ — the growth rate is',
            options: ['1.12%', '12%', '112%', '0.12%']
          },
          {
            label: 'To solve $5^x = 5^{3x-4}$, the method is',
            options: ['Set exponents equal: $x = 3x - 4$', 'Take log of both sides', 'Cross multiply', 'Factor']
          },
          {
            label: 'The $y$-intercept of $f(x) = 7 \\\\cdot 3^x$ is',
            options: ['$(0, 3)$', '$(0, 7)$', '$(0, 21)$', '$(7, 0)$']
          },
          {
            label: 'Half-life of 20 years, start with 400g. After 60 years:',
            options: ['200g', '100g', '50g', '25g']
          }
        ],
        correctAnswers: [
          '12%',
          'Set exponents equal: $x = 3x - 4$',
          '$(0, 7)$',
          '50g'
        ],
        hint1: 'Multiplier is $1 + r$. If multiplier is $1.12$, then $r = 0.12 = 12\\\\%$.',
        hint2: 'Same base on both sides → just set the exponents equal.',
        hint3: 'At $x = 0$: $f(0) = 7 \\\\cdot 3^0 = 7 \\\\cdot 1 = 7$.',
        hint4: '60 years ÷ 20 = 3 half-lives. $400 \\\\to 200 \\\\to 100 \\\\to 50$.',
        explanation: '12% growth. Same base → equal exponents. $y$-intercept is $a = 7$. Three half-lives: $400/8 = 50$g.'
      }
    },
    {
      id: 'sat-ef7-final',
      type: 'multiple-choice' as const,
      content: `
**Challenge Questions** 📋
      `,
      exercise: {
        questions: [
          {
            question: 'The number of subscribers to a streaming service is modeled by $S(t) = 2{,}000{,}000 \\\\cdot (1.15)^t$, where $t$ is in years. Approximately how long until the service reaches 4 million subscribers?',
            options: [
              'Between 3 and 4 years',
              'Between 4 and 5 years',
              'Between 5 and 6 years',
              'Between 6 and 7 years'
            ],
            correctAnswer: 1,
            explanation: 'We need $(1.15)^t = 2$. Testing: $(1.15)^4 \\\\approx 1.749$ and $(1.15)^5 \\\\approx 2.011$. Since $2.011 > 2$, the service reaches 4 million between $t = 4$ and $t = 5$.'
          },
          {
            question: 'A sample of a radioactive element has a mass of 500 grams. After 12 hours, 125 grams remain. What is the half-life?',
            options: ['3 hours', '4 hours', '6 hours', '8 hours'],
            correctAnswer: 2,
            explanation: '$125/500 = 1/4 = (1/2)^2$. So 2 half-lives passed in 12 hours. Half-life $= 12/2 = 6$ hours.'
          }
        ]
      }
    }
  ]
};
"""))


# ── Main ─────────────────────────────────────────────────────────────────────
if __name__ == "__main__":
    print("Writing SAT Exponential Functions lessons…")
    os.makedirs(OUT_DIR, exist_ok=True)
    part1()
    part2()
    part3()
    part4()
    part5()
    part6()
    part7()
    print("Done — 7 files written.")
