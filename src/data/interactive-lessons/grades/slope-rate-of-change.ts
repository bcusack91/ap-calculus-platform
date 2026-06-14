import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "What Is Slope?"
  // ============================================================
  {
    topicSlug: 'slope-rate-of-change',
    sections: [
      {
        id: 'p1-what-is-slope',
        type: 'text',
        content: `## What Is Slope? 📈

**Slope** measures the **steepness** and **direction** of a line. It answers a simple question: *as you move to the right, how much does the line go up or down?*

Think of slope as:

- How much a line **rises or falls**
- How **fast** something is changing
- The **tilt** of the line

We usually use the letter **$m$** to stand for slope.

A line with a **big** slope is steep, like a ski jump. A line with a **small** slope is gentle, like a wheelchair ramp. A line that is perfectly **flat** has a slope of zero — it doesn't go up or down at all.`,
      },
      {
        id: 'p1-rise-over-run',
        type: 'text',
        content: `## Rise Over Run 🧗

To measure slope we compare two kinds of movement between two points on the line:

- **Rise** = the **vertical** change (how far up or down) — this is the change in $y$.
- **Run** = the **horizontal** change (how far left or right) — this is the change in $x$.

$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{\\text{change in } y}{\\text{change in } x}$$

Given two points $(x_1, y_1)$ and $(x_2, y_2)$, the **slope formula** is:

$$m = \\frac{y_2 - y_1}{x_2 - x_1}$$

You may also see it written with the Greek letter $\\Delta$ (delta), which means "change in":

$$m = \\frac{\\Delta y}{\\Delta x}$$

**Important:** *Up* and *right* are **positive**; *down* and *left* are **negative**. Always subtract the coordinates in the **same order** on the top and bottom.`,
      },
      {
        id: 'p1-worked-intro',
        type: 'text',
        content: `## A First Example 🔍

**Find the slope of the line through $(1, 2)$ and $(4, 8)$.**

**Step 1 — Label the points.**
$$(x_1, y_1) = (1, 2) \\qquad (x_2, y_2) = (4, 8)$$

**Step 2 — Apply the formula.**
$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$$

**Answer: $m = 2$.**

This means the line **rises $2$ units for every $1$ unit you move to the right**. The rise ($6$) and the run ($3$) both describe the same tilt — and the slope $2$ is the simplest way to state it.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the big idea is clear before we practice.`,
        exercise: {
          questions: [
            {
              question: 'In the slope formula $m = \\dfrac{\\text{rise}}{\\text{run}}$, what does the **rise** measure?',
              options: [
                'The horizontal change (change in $x$)',
                'The vertical change (change in $y$)',
                'The total distance between the two points',
                'How many points are on the line',
              ],
              correctAnswer: 1,
              explanation:
                'The **rise** is the vertical change, which is the change in $y$. The **run** is the horizontal change, the change in $x$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Using the Slope Formula"
  // ============================================================
  {
    topicSlug: 'slope-rate-of-change',
    sections: [
      {
        id: 'p2-worked-negative',
        type: 'text',
        content: `## Working Through the Formula ✍️

Let's carefully work two more examples, including one with **negative numbers**.

**Example A — Find the slope through $(-2, 5)$ and $(3, -5)$.**

**Step 1 — Label the points.**
$$(x_1, y_1) = (-2, 5) \\qquad (x_2, y_2) = (3, -5)$$

**Step 2 — Substitute into the formula.**
$$m = \\frac{-5 - 5}{3 - (-2)} = \\frac{-10}{3 + 2} = \\frac{-10}{5} = -2$$

**Answer: $m = -2$.** The line **falls** $2$ units for every $1$ unit to the right.

**Example B — Find the slope through $(0, 4)$ and $(5, 4)$.**

$$m = \\frac{4 - 4}{5 - 0} = \\frac{0}{5} = 0$$

**Answer: $m = 0$.** Both points have the same $y$-value, so there is no rise — this is a **horizontal line**.`,
      },
      {
        id: 'p2-watch-the-signs',
        type: 'text',
        content: `## ⚠️ Watch Your Subtraction

The most common slope mistake is mixing up the order of subtraction. Follow these tips:

- **Be consistent.** Whatever point you use first on top, use first on the bottom too.
- **Subtracting a negative** flips it to addition: $3 - (-2) = 3 + 2 = 5$.
- It does **not** matter which point you call first — as long as you stay consistent, you get the same slope.

| Doing it correctly | Doing it backwards |
|--------------------|--------------------|
| $\\dfrac{-5 - 5}{3 - (-2)} = \\dfrac{-10}{5} = -2$ | $\\dfrac{5 - (-5)}{-2 - 3} = \\dfrac{10}{-5} = -2$ |

Both ways give $m = -2$ — same answer! The danger is mixing the orders, like putting $y_2 - y_1$ on top but $x_1 - x_2$ on the bottom. Pick one order and stick with it.`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn: Find Each Slope ✍️

Use $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$. Type each answer as a single number, like \`3\` or \`-2\`.

1. Slope through $(1, 1)$ and $(4, 10)$
2. Slope through $(2, 7)$ and $(5, 1)$
3. Slope through $(-3, 0)$ and $(1, 8)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-2', '2'],
          hint1:
            'Subtract the $y$-values on top and the $x$-values on the bottom, keeping the same order for both.',
          hint2:
            'Problem 1: $\\frac{10 - 1}{4 - 1} = \\frac{9}{3}$. Problem 2: $\\frac{1 - 7}{5 - 2} = \\frac{-6}{3}$. Problem 3: $\\frac{8 - 0}{1 - (-3)} = \\frac{8}{4}$.',
          explanation:
            'Problem 1: $\\frac{10 - 1}{4 - 1} = \\frac{9}{3} = 3$. Problem 2: $\\frac{1 - 7}{5 - 2} = \\frac{-6}{3} = -2$. Problem 3: $\\frac{8 - 0}{1 - (-3)} = \\frac{8}{4} = 2$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Types of Slope"
  // ============================================================
  {
    topicSlug: 'slope-rate-of-change',
    sections: [
      {
        id: 'p3-types-text',
        type: 'text',
        content: `## The Four Types of Slope 🛝

Every line falls into one of four categories based on its slope:

| Type | Slope value | Direction (left → right) | Example |
|------|:-----------:|--------------------------|---------|
| **Positive** | $m > 0$ | Goes **up** | $m = 2$ |
| **Negative** | $m < 0$ | Goes **down** | $m = -3$ |
| **Zero** | $m = 0$ | Perfectly **flat** (horizontal) | $y = 4$ |
| **Undefined** | none | Straight **up and down** (vertical) | $x = 5$ |

**Why is a vertical line undefined?** Both points have the same $x$-value, so the run is $0$. The slope becomes $\\frac{\\text{rise}}{0}$, and **dividing by zero is undefined** in math.

A quick way to remember the last two: a **H**orizontal line is "**0**" (flat ground), while a **V**ertical line is "undefined" (you can't walk straight up a wall!).`,
      },
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Multiple Choice 🎯

Identify the type and value of slope.`,
        exercise: {
          questions: [
            {
              question:
                'A line passes through $(2, 6)$ and $(8, 6)$. What is its slope?',
              options: [
                '$m = 0$ (horizontal line)',
                '$m = 1$ (positive)',
                'Undefined (vertical line)',
                '$m = -6$ (negative)',
              ],
              correctAnswer: 0,
              explanation:
                'Both points have the same $y$-value ($6$), so the rise is $0$: $m = \\frac{6 - 6}{8 - 2} = \\frac{0}{6} = 0$. This is a horizontal line.',
            },
            {
              question:
                'Which slope describes a line that goes **downward** as you move from left to right?',
              options: ['$m = 4$', '$m = 0$', '$m = -\\frac{1}{2}$', 'Undefined'],
              correctAnswer: 2,
              explanation:
                'A **negative** slope means the line falls from left to right. Of the choices, only $m = -\\frac{1}{2}$ is negative.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Match the Line to Its Slope 🔽

For each description, choose the slope type that fits.`,
        exercise: {
          dropdowns: [
            {
              label: 'A perfectly flat horizontal line has a slope that is...',
              options: ['positive', 'zero', 'undefined'],
            },
            {
              label: 'A straight up-and-down vertical line has a slope that is...',
              options: ['negative', 'zero', 'undefined'],
            },
          ],
          correctAnswers: ['zero', 'undefined'],
          hint1:
            'A horizontal line has no rise, so its slope is $\\frac{0}{\\text{run}}$. A vertical line has no run, so its slope is $\\frac{\\text{rise}}{0}$.',
          explanation:
            'A horizontal line has zero rise, so $m = 0$. A vertical line has zero run, and dividing by zero is **undefined**.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Slope as Rate of Change"
  // ============================================================
  {
    topicSlug: 'slope-rate-of-change',
    sections: [
      {
        id: 'p4-real-world-text',
        type: 'text',
        content: `## Slope as a Rate of Change 🚗

In the real world, slope is often called a **rate of change** — it tells you how fast one quantity changes compared to another. The units make the meaning clear.

**Speed (a rate of change of distance):** A car travels $150$ miles in $3$ hours at a steady speed. Treat time as $x$ and distance as $y$:
$$m = \\frac{150 \\text{ miles}}{3 \\text{ hours}} = 50 \\text{ miles per hour}$$

The slope **$50$** is exactly the car's speed!

**Cost (a rate of change of money):** A taxi charges based on miles driven. If a $4$-mile ride costs $\\$10$ and an $8$-mile ride costs $\\$18$:
$$m = \\frac{18 - 10}{8 - 4} = \\frac{8}{4} = 2 \\text{ dollars per mile}$$

**Reading the units:** "miles **per** hour," "dollars **per** mile," "degrees **per** hour" — the word **"per"** is a big hint that you are looking at a slope.`,
      },
      {
        id: 'p4-input-practice',
        type: 'input-boxes',
        content: `## Word Problem Practice ✍️

Find each rate of change (slope). Type each answer as a single number.

1. A plant grows from $6$ cm to $18$ cm over $4$ weeks. What is its growth rate in **cm per week**? ($\\frac{18 - 6}{4}$)
2. A pool drains from $80$ gallons to $20$ gallons in $5$ minutes. What is the rate of change in **gallons per minute** (use a negative for draining)? ($\\frac{20 - 80}{5}$)
3. A runner covers $12$ km in $2$ hours at a steady pace. What is the speed in **km per hour**? ($\\frac{12}{2}$)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-12', '6'],
          hint1:
            'Rate of change = change in the top quantity divided by change in the bottom quantity (time, weeks, etc.).',
          hint2:
            'Problem 1: $\\frac{18 - 6}{4} = \\frac{12}{4}$. Problem 2: $\\frac{20 - 80}{5} = \\frac{-60}{5}$ (negative because the water is going down). Problem 3: $\\frac{12}{2}$.',
          explanation:
            'Problem 1: $\\frac{12}{4} = 3$ cm per week. Problem 2: $\\frac{-60}{5} = -12$ gallons per minute (negative because the pool is emptying). Problem 3: $\\frac{12}{2} = 6$ km per hour.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Application Check 🎯`,
        exercise: {
          questions: [
            {
              question:
                "A phone plan's cost rises from $\\$30$ at $0$ GB to $\\$50$ at $10$ GB of data. What does the slope tell you?",
              options: [
                'The cost goes **down** $\\$2$ per GB',
                'The cost rises $\\$2$ per GB of data used',
                'The plan is free after $10$ GB',
                'The slope is undefined',
              ],
              correctAnswer: 1,
              explanation:
                'The slope is $\\frac{50 - 30}{10 - 0} = \\frac{20}{10} = 2$. Each extra GB adds $\\$2$ to the cost, so the cost rises $\\$2$ per GB.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // partTitle: "Review & Mixed Challenge"
  // ============================================================
  {
    topicSlug: 'slope-rate-of-change',
    sections: [
      {
        id: 'p5-summary-text',
        type: 'text',
        content: `## Putting It All Together 🧠

You now know how to **find** slope and how to **interpret** it. Here is the full summary:

| Idea | What it means | Key formula or fact |
|------|---------------|---------------------|
| **Slope $m$** | Steepness and direction of a line | $m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$ |
| **Positive slope** | Line goes **up** left → right | $m > 0$ |
| **Negative slope** | Line goes **down** left → right | $m < 0$ |
| **Zero slope** | **Horizontal** line, no rise | $m = 0$ |
| **Undefined slope** | **Vertical** line, no run | divide by $0$ |
| **Rate of change** | Real-world slope ("per") | e.g. miles **per** hour |

**Remember these key ideas:**

- Subtract the $y$'s on top and the $x$'s on the bottom — **same order** for both.
- **Horizontal $= 0$, vertical $=$ undefined.**
- A slope is just a **rate of change** dressed up with units.

Ready for the final challenge? It mixes everything together!`,
      },
      {
        id: 'p5-challenge-mc',
        type: 'multiple-choice',
        content: `## 🏆 Mixed Challenge

Use everything you've learned about slope.`,
        exercise: {
          questions: [
            {
              question: 'What is the slope of the line through $(-1, -4)$ and $(2, 5)$?',
              options: ['$m = 3$', '$m = -3$', '$m = \\frac{1}{3}$', '$m = 9$'],
              correctAnswer: 0,
              explanation:
                'Using the formula: $m = \\frac{5 - (-4)}{2 - (-1)} = \\frac{9}{3} = 3$. Remember that subtracting a negative becomes addition.',
            },
            {
              question:
                'A line through $(7, 2)$ and $(7, 9)$ has what kind of slope, and why?',
              options: [
                'Zero, because the $y$-values are different',
                'Positive, because both points are positive',
                'Undefined, because the run ($x_2 - x_1$) is $0$',
                'Negative, because the line goes down',
              ],
              correctAnswer: 2,
              explanation:
                'Both points have $x = 7$, so the run is $7 - 7 = 0$. The slope $\\frac{9 - 2}{0}$ requires dividing by zero, which is **undefined** — this is a vertical line.',
            },
          ],
        },
      },
    ],
  },
]
