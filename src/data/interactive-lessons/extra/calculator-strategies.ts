import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Calculator Strategies (SAT Prep).
 * Registry key / DB Topic.slug: 'calculator-strategies'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive
 * practice (multiple-choice + input-boxes + dropdown) → exit quiz.
 * Focus: the built-in Desmos graphing calculator on the digital SAT — when to
 * reach for it, how to solve equations/systems graphically, statistics, and the
 * judgment of when NOT to use it. LaTeX uses doubled backslashes (template
 * literals): \\frac, \\sqrt, \\pm, \\cdot, \\approx, \\text, ...
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'calculator-strategies',
    sections: [
      {
        id: 'calc1-intro',
        type: 'text' as const,
        content: `# 🖩 Calculator Strategies

**Part 1 of 5 — Your Calculator Is a Tool, Not a Crutch**

---

### Topics in This Part

| Section |
|---------|
| The Digital SAT Calculator Setup |
| When the Calculator Helps (and When It Doesn't) |
| The 10-Second Decision Rule |

> 🔑 **Key Idea:** On the digital SAT, **every** Math question allows a calculator — there's a built-in **Desmos graphing calculator** on screen. The students who score highest aren't the ones who calculator *everything*; they're the ones who know **when** a button-press is faster than a brain.`,
      },
      {
        id: 'calc1-setup',
        type: 'text' as const,
        content: `## The Setup You Actually Have

The digital SAT gives you a **Desmos graphing calculator** built into the testing app, plus you may bring an **approved physical calculator** as a backup.

What Desmos can do for you in seconds:
- **Graph** any equation by typing it in — \`y = 2x + 3\` draws a line instantly.
- **Solve** equations by finding where graphs cross (intersection points).
- **Find roots / zeros**, the **vertex** of a parabola, and **y-intercepts** by clicking the graph.
- **Make a table** of values, or run **regressions** on data.

What it will **not** do:
- Read the word problem and decide what to compute (that's *you*).
- Set up the right equation from a sentence.
- Save you time when mental math is faster.

> 💡 **Mindset:** The calculator removes *arithmetic risk*. It does **not** remove the need to understand the problem. Set it up by hand; let Desmos finish.`,
      },
      {
        id: 'calc1-when-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'On the digital SAT, which Math questions allow a calculator?',
              options: [
                'Only the second math module',
                'None — it is a no-calculator test',
                'Every Math question (a calculator is built in)',
                'Only word problems',
              ],
              correctAnswer: 2,
              explanation: 'The digital SAT allows a calculator on the entire Math section — Desmos is built into the app, and you may also bring an approved physical calculator.',
            },
            {
              question: 'Which task is the calculator NOT able to do for you?',
              options: [
                'Graph $y = x^2 - 4$',
                'Decide which equation the word problem requires',
                'Find where two lines intersect',
                'Compute $\\sqrt{2809}$',
              ],
              correctAnswer: 1,
              explanation: 'Translating a word problem into the correct equation is your job. The calculator only executes the math once you have set it up.',
            },
          ],
        },
      },
      {
        id: 'calc1-decision-rule',
        type: 'text' as const,
        content: `## The 10-Second Decision Rule

Before you touch the calculator, ask: **"Is this faster in my head or on the screen?"**

| Reach for the calculator when… | Skip it when… |
|--------------------------------|---------------|
| The arithmetic is ugly ($47 \\cdot 83$, $\\sqrt{2809}$) | The numbers are clean ($6 \\cdot 7$, $\\frac{100}{4}$) |
| You need a graph, intersection, or vertex | One step of algebra finishes it |
| Solving a messy system of equations | You can cancel/simplify by sight |
| Running a regression or reading a data table | The answer is a definition or property |

> ⚠️ **Time trap:** Typing a *clean* calculation into the calculator wastes the 5–10 seconds you'll wish you had on the last few questions. Speed comes from **not** reaching for it when you don't need to.`,
      },
      {
        id: 'calc1-decision-drill',
        type: 'dropdown-select' as const,
        content: `**Calculator or Not?** 🔽

For each task, choose the smarter move.`,
        exercise: {
          dropdowns: [
            { label: 'Compute $\\frac{144}{12}$:', options: ['Do it mentally', 'Type into calculator'] },
            { label: 'Find where $y = 2x + 1$ meets $y = -x + 7$:', options: ['Type into calculator', 'Do it mentally'] },
            { label: 'Evaluate $\\sqrt{6241}$:', options: ['Do it mentally', 'Type into calculator'] },
            { label: 'Simplify $\\frac{x^2 \\cdot x^3}{x}$:', options: ['Do it mentally', 'Type into calculator'] },
          ],
          correctAnswers: ['Do it mentally', 'Type into calculator', 'Type into calculator', 'Do it mentally'],
          hint1: '$\\frac{144}{12} = 12$ — that is instant mental math.',
          hint2: 'A messy square root like $\\sqrt{6241}$ is exactly what the calculator is for ($\\sqrt{6241} = 79$).',
          hint3: 'Exponent rules ($x^2 \\cdot x^3 = x^5$, then $\\frac{x^5}{x} = x^4$) are faster by hand than typing.',
          explanation: 'Clean arithmetic and algebra rules → do them mentally. Graph intersections and ugly roots → let the calculator finish. The skill is the decision, not the typing.',
        },
      },
      {
        id: 'calc1-arith-drill',
        type: 'input-boxes' as const,
        content: `**Quick Arithmetic** 🧮

These are the "ugly" computations worth a calculator. Enter each exact value.

**1)** $\\sqrt{2809} = \\,?$
**2)** $47 \\cdot 83 = \\,?$
**3)** $\\frac{966}{14} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['53', '3901', '69'],
          hint1: '$53^2 = 2809$, so $\\sqrt{2809} = 53$ — the kind of root no one should do by hand.',
          hint2: '$47 \\cdot 83 = 3901$. Messy products are exactly what the calculator is for.',
          hint3: '$\\frac{966}{14} = 69$, since $14 \\cdot 69 = 966$.',
          explanation: '1) $\\sqrt{2809} = 53$.  2) $47 \\cdot 83 = 3901$.  3) $966 \\div 14 = 69$. These are smart calculator uses — the arithmetic is genuinely hard by hand.',
        },
      },
      {
        id: 'calc1-recap',
        type: 'text' as const,
        content: `## Part 1 Recap

- A calculator (Desmos + an approved physical backup) is allowed on **all** SAT Math.
- The calculator removes **arithmetic risk**, never the need to understand the problem.
- Use the **10-second rule**: reach for it only when it's genuinely faster.

Next up: **graphing to solve** — turning equations and systems into pictures you can read off the screen.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'calculator-strategies',
    sections: [
      {
        id: 'calc2-intro',
        type: 'text' as const,
        content: `# 🖩 Calculator Strategies

**Part 2 of 5 — Solve by Graphing**

---

> 🔑 **The Big Move:** Most "solve for $x$" and "find the solution" SAT questions can be answered by **graphing both sides and reading the intersection** — no algebra required.`,
      },
      {
        id: 'calc2-intersection',
        type: 'text' as const,
        content: `## Equations → Intersections

To solve an equation like $f(x) = g(x)$ with a graph:

1. Type \`y = \` *(left side)* on one line.
2. Type \`y = \` *(right side)* on the next line.
3. The **intersection point(s)** are the solution(s) — click them to read the coordinates.

### Worked Example: $3x - 5 = x + 7$

Graph $y = 3x - 5$ and $y = x + 7$. They cross at:

$$x = 6, \\quad y = 13 \\;\\Rightarrow\\; \\text{solution } x = 6$$

> ✅ **Check by hand:** $3x - 5 = x + 7 \\Rightarrow 2x = 12 \\Rightarrow x = 6$ ✓

The graph and the algebra agree — but on a messy equation, the graph is far faster and immune to sign errors.`,
      },
      {
        id: 'calc2-roots',
        type: 'text' as const,
        content: `## Roots, Zeros, and the Vertex

To **solve** $f(x) = 0$, graph $y = f(x)$ and read where it **crosses the x-axis** (the *zeros* / *roots*).

### Worked Example: $x^2 - 5x + 6 = 0$

Graph $y = x^2 - 5x + 6$. It touches the x-axis at:

$$x = 2 \\quad \\text{and} \\quad x = 3$$

Clicking the lowest point of the parabola gives the **vertex** $(2.5,\\, -0.25)$ — handy for "minimum value" questions.

> 💡 **Desmos tip:** Click directly on a curve and Desmos highlights its special points — **zeros**, **intercepts**, **intersections**, and **minimum/maximum** — and prints the exact coordinates.`,
      },
      {
        id: 'calc2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You graph $y = x^2 - 9$. To find the solutions of $x^2 - 9 = 0$, you read off the points where the curve…',
              options: [
                'reaches its maximum',
                'crosses the x-axis',
                'crosses the y-axis',
                'has slope zero',
              ],
              correctAnswer: 1,
              explanation: 'Solutions of $f(x) = 0$ are the x-intercepts (zeros): where the graph crosses the x-axis. Here $x = -3$ and $x = 3$.',
            },
            {
              question: 'To solve $2x + 1 = -x + 10$ graphically, what do you graph?',
              options: [
                'Just $y = 2x + 1$',
                '$y = 2x + 1$ and $y = -x + 10$, then read the intersection',
                'Only the x-axis',
                '$y = 3x + 11$',
              ],
              correctAnswer: 1,
              explanation: 'Graph each side as its own line; the x-coordinate of the intersection is the solution. (Here $3x = 9 \\Rightarrow x = 3$.)',
            },
          ],
        },
      },
      {
        id: 'calc2-input',
        type: 'input-boxes' as const,
        content: `**Read the Graph** 🧮

Imagine graphing each in Desmos. Enter the requested value.

**1)** Solve $4x - 8 = 0$. The x-intercept is $x = \\,?$
**2)** $y = x^2 - 16$ crosses the x-axis at $x = -4$ and $x = \\,?$ *(the positive root)*
**3)** Solve $2x + 3 = x + 9$. The lines intersect at $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '4', '6'],
          hint1: '$4x - 8 = 0 \\Rightarrow 4x = 8 \\Rightarrow x = 2$. The graph crosses the x-axis at $2$.',
          hint2: '$x^2 - 16 = 0 \\Rightarrow x^2 = 16 \\Rightarrow x = \\pm 4$. The positive root is $4$.',
          hint3: '$2x + 3 = x + 9 \\Rightarrow x = 6$. The two lines meet where $x = 6$.',
          explanation: '1) $x = 2$.  2) $x = 4$.  3) $x = 6$. Each value is read directly off an intercept or intersection.',
        },
      },
      {
        id: 'calc2-feature-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Feature** 🔽

Match each question to the graph feature that answers it.`,
        exercise: {
          dropdowns: [
            { label: 'Solve $f(x) = 0$:', options: ['x-intercepts (zeros)', 'y-intercept', 'vertex'] },
            { label: 'Solve $f(x) = g(x)$:', options: ['intersection point', 'x-intercept', 'maximum'] },
            { label: 'Find the minimum value of a parabola opening up:', options: ['vertex', 'x-intercept', 'y-intercept'] },
          ],
          correctAnswers: ['x-intercepts (zeros)', 'intersection point', 'vertex'],
          hint1: '$f(x) = 0$ asks where the graph meets the x-axis — its zeros.',
          hint2: '$f(x) = g(x)$ asks where the two graphs are equal — where they intersect.',
          hint3: 'For an upward parabola, the lowest point (the vertex) is the minimum value.',
          explanation: 'Zeros answer $f(x)=0$; the intersection answers $f(x)=g(x)$; the vertex gives a min/max. Knowing which feature to click is the whole skill.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'calculator-strategies',
    sections: [
      {
        id: 'calc3-intro',
        type: 'text' as const,
        content: `# 🖩 Calculator Strategies

**Part 3 of 5 — Systems, Tables & Trickier Graphs**

---

> 🔑 **Why graph systems?** A system of equations is *two graphs*. Their **intersection** is the solution — so a tough system becomes a single click.`,
      },
      {
        id: 'calc3-systems',
        type: 'text' as const,
        content: `## Systems = Intersections

For a system, type **both** equations into Desmos and read the intersection.

### Worked Example

$$\\begin{cases} y = 2x + 1 \\\\ y = -x + 7 \\end{cases}$$

Graph both lines; they cross at $(2,\\, 5)$, so the solution is $x = 2,\\ y = 5$.

### Equations not solved for $y$?

Desmos accepts them **as written** — you don't have to rearrange:

$$\\begin{cases} 3x + 2y = 12 \\\\ x - y = 1 \\end{cases}$$

Type \`3x + 2y = 12\` and \`x - y = 1\` directly. The intersection is $(2.8,\\, 1.8)$.

> 💡 **No rearranging required.** This is the single biggest time-saver: skip the algebra of isolating $y$ and let Desmos draw the implicit equation.`,
      },
      {
        id: 'calc3-special',
        type: 'text' as const,
        content: `## What the Picture Tells You

The *shape* of the graph answers "how many solutions?" instantly:

| What you see | What it means |
|--------------|---------------|
| Lines cross once | **one** solution |
| Lines are parallel (never cross) | **no** solution |
| Lines lie on top of each other | **infinitely many** solutions |
| Parabola crosses x-axis twice | **two** real roots |
| Parabola just touches x-axis | **one** (repeated) root |
| Parabola stays above the x-axis | **no** real roots |

> ⚠️ **Watch the window.** If you don't see an intersection, the graph may be off-screen. **Zoom out** (or pinch) until the full picture appears before deciding "no solution."`,
      },
      {
        id: 'calc3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Picture to the Answer** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Two lines that never cross:', options: ['No solution', 'One solution', 'Infinitely many'] },
            { label: 'A parabola that touches the x-axis at exactly one point:', options: ['Two real roots', 'One (repeated) root', 'No real roots'] },
            { label: 'Two equations whose graphs are the same line:', options: ['Infinitely many solutions', 'No solution', 'One solution'] },
            { label: 'A parabola entirely above the x-axis:', options: ['No real roots', 'Two real roots', 'One root'] },
          ],
          correctAnswers: ['No solution', 'One (repeated) root', 'Infinitely many solutions', 'No real roots'],
          hint1: 'Parallel lines never meet, so there is no point that satisfies both.',
          hint2: 'Touching the x-axis once means the two roots coincide — a repeated root.',
          hint3: 'Identical graphs share every point, so every point is a solution (infinitely many); a parabola that never reaches the x-axis has no real zeros.',
          explanation: 'The geometry tells the story: no crossing → no solution; one touch → repeated root; same line → infinite; above the axis → no real roots.',
        },
      },
      {
        id: 'calc3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In Desmos, you want to solve $\\begin{cases} 2x + y = 5 \\\\ x - y = 1 \\end{cases}$. The fastest correct approach is to…',
              options: [
                'Rearrange both for $y$ first, then graph',
                'Type both equations exactly as written and read the intersection',
                'Graph only the first equation',
                'Use the table feature for the first equation only',
              ],
              correctAnswer: 1,
              explanation: 'Desmos graphs implicit equations as-is, so you can skip the algebra. The intersection of $2x+y=5$ and $x-y=1$ is $(2, 1)$.',
            },
            {
              question: 'You graph a system and see two parallel lines. The system has:',
              options: ['One solution', 'No solution', 'Infinitely many solutions', 'Exactly two solutions'],
              correctAnswer: 1,
              explanation: 'Parallel lines never intersect, so there is no point common to both equations — no solution.',
            },
          ],
        },
      },
      {
        id: 'calc3-input',
        type: 'input-boxes' as const,
        content: `**Read the Intersection** 🧮

Each system below is graphed in Desmos. Enter the requested coordinate.

**1)** $\\begin{cases} y = x + 2 \\\\ y = -x + 8 \\end{cases}$ — the intersection has $x = \\,?$
**2)** Same system: the intersection has $y = \\,?$
**3)** $\\begin{cases} y = 3x \\\\ y = x + 4 \\end{cases}$ — the intersection has $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', '2'],
          hint1: 'Set $x + 2 = -x + 8 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.',
          hint2: 'With $x = 3$, substitute into either line: $y = 3 + 2 = 5$.',
          hint3: 'Set $3x = x + 4 \\Rightarrow 2x = 4 \\Rightarrow x = 2$.',
          explanation: '1) $x = 3$.  2) $y = 5$ → intersection $(3, 5)$.  3) $x = 2$ (then $y = 6$). Each is the point where the two graphs cross.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'calculator-strategies',
    sections: [
      {
        id: 'calc4-intro',
        type: 'text' as const,
        content: `# 🖩 Calculator Strategies

**Part 4 of 5 — Statistics, Tables & Smart Estimation**

---

> 🔑 **Beyond graphs:** Desmos also does **statistics** — mean, median, standard deviation, and regression lines for data tables — plus it lets you **estimate** and **check** answers fast.`,
      },
      {
        id: 'calc4-stats',
        type: 'text' as const,
        content: `## Statistics in One Line

Type a list and Desmos computes summary stats instantly. With \`L = [3, 7, 7, 9, 14]\`:

| Command | Returns |
|---------|---------|
| \`mean(L)\` | $8$ |
| \`median(L)\` | $7$ |
| \`stdev(L)\` | $4$ |
| \`total(L)\` | $40$ |

### Worked Example: Mean of $\\{3, 7, 7, 9, 14\\}$

$$\\text{mean} = \\frac{3 + 7 + 7 + 9 + 14}{5} = \\frac{40}{5} = 8$$

> 💡 **Median trap:** The median is the **middle value of the sorted list**, not the average. For $\\{3, 7, 7, 9, 14\\}$ (already sorted), the middle of $5$ values is the $3$rd one: $7$.`,
      },
      {
        id: 'calc4-regression',
        type: 'text' as const,
        content: `## Lines of Best Fit (Regression)

For a scatterplot question, put the data in a table and fit a model:

1. Enter points in a Desmos **table** with columns $x_1$ and $y_1$.
2. Type \`y_1 ~ m x_1 + b\` to fit a **linear** model.
3. Desmos returns the best-fit **slope $m$** and **intercept $b$**.

### Worked Example

A line of best fit comes out to $y = 1.8x + 2$. To **predict** $y$ when $x = 10$:

$$y = 1.8(10) + 2 = 18 + 2 = 20$$

> ✅ Use the model's equation for predictions; read **slope** as the rate of change and **intercept** as the starting value.`,
      },
      {
        id: 'calc4-input',
        type: 'input-boxes' as const,
        content: `**Crunch the Numbers** 🧮

Use the data set $\\{4, 6, 6, 8, 16\\}$ (already sorted) and the model below.

**1)** Mean of the set $= \\,?$
**2)** Median of the set $= \\,?$
**3)** Using $y = 3x + 5$, predict $y$ when $x = 7$: $y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '6', '26'],
          hint1: 'Mean $= \\frac{4 + 6 + 6 + 8 + 16}{5} = \\frac{40}{5}$.',
          hint2: 'The list has $5$ values; the median is the $3$rd (middle) one.',
          hint3: 'Substitute $x = 7$: $y = 3(7) + 5 = 21 + 5$.',
          explanation: '1) Mean $= 40/5 = 8$.  2) Median (middle of 5) $= 6$.  3) $y = 3(7)+5 = 26$.',
        },
      },
      {
        id: 'calc4-estimate',
        type: 'text' as const,
        content: `## Estimate First, Then Confirm

The calculator is also a **sanity check**. Before committing to an answer:

- **Estimate** the size of the answer mentally ("about $200$").
- **Compute** with the calculator.
- If the screen says $2,000$ or $20$, you typed something wrong — re-check.

> ⚠️ **The classic error:** trusting the screen blindly. A mistyped parenthesis or a missing negative gives a confident, wrong number. A 1-second mental estimate catches it.`,
      },
      {
        id: 'calc4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The median of the data set $\\{2, 5, 5, 8, 30\\}$ is:',
              options: ['$10$', '$5$', '$8$', '$30$'],
              correctAnswer: 1,
              explanation: 'Sorted, the middle (3rd of 5) value is $5$. The large outlier $30$ inflates the mean to $10$ but does not move the median.',
            },
            {
              question: 'A best-fit line is $y = 4x - 3$. Its slope tells you that as $x$ increases by $1$, $y$…',
              options: ['decreases by $3$', 'increases by $4$', 'increases by $3$', 'stays the same'],
              correctAnswer: 1,
              explanation: 'Slope is the rate of change: each $+1$ in $x$ raises $y$ by the slope, $4$. The $-3$ is the y-intercept (starting value).',
            },
          ],
        },
      },
      {
        id: 'calc4-command-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Command** 🔽

You have a list \`L\` in Desmos. Pick the command for each statistic.`,
        exercise: {
          dropdowns: [
            { label: 'Average of the values:', options: ['mean(L)', 'median(L)', 'total(L)'] },
            { label: 'Middle value of the sorted list:', options: ['median(L)', 'mean(L)', 'stdev(L)'] },
            { label: 'Sum of all the values:', options: ['total(L)', 'mean(L)', 'median(L)'] },
          ],
          correctAnswers: ['mean(L)', 'median(L)', 'total(L)'],
          hint1: 'The average is the mean — `mean(L)`.',
          hint2: 'The middle of the sorted list is the median — `median(L)`.',
          hint3: 'The sum of every value is `total(L)`.',
          explanation: 'Match the word to the command: average → `mean(L)`, middle value → `median(L)`, sum → `total(L)`. Spread would be `stdev(L)`.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'calculator-strategies',
    sections: [
      {
        id: 'calc5-intro',
        type: 'text' as const,
        content: `# 🖩 Calculator Strategies

**Part 5 of 5 — Putting It Together & Mastery Check**

---

You can now (1) **decide** when the calculator helps, (2) **solve by graphing**, (3) handle **systems and special cases**, and (4) run **statistics, regressions, and sanity checks**. Time to combine them.`,
      },
      {
        id: 'calc5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Calculator move |
|------|-----------------|
| Solve $f(x) = g(x)$ | Graph both sides, read the **intersection** |
| Solve $f(x) = 0$ | Graph $y = f(x)$, read the **x-intercepts (zeros)** |
| Solve a system | Type both equations **as written**, click the intersection |
| Find a min/max | Click the curve's **vertex / turning point** |
| Mean / median / stdev | \`mean(L)\`, \`median(L)\`, \`stdev(L)\` |
| Line of best fit | Table + \`y_1 ~ m x_1 + b\` |
| Avoid a typo | **Estimate first**, then confirm on screen |

> ⚠️ **Three habits of high scorers:** don't calculator clean arithmetic, **zoom out** before declaring "no solution," and never trust a number you didn't sanity-check.`,
      },
      {
        id: 'calc5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To solve the system $\\begin{cases} y = 2x - 1 \\\\ y = x + 4 \\end{cases}$ in Desmos, the solution is the intersection. What is $x$?',
              options: ['$x = 3$', '$x = 5$', '$x = 1$', '$x = -3$'],
              correctAnswer: 1,
              explanation: 'Set $2x - 1 = x + 4 \\Rightarrow x = 5$ (then $y = 9$). The lines intersect at $(5, 9)$.',
            },
            {
              question: 'A parabola you graph never touches the x-axis. How many real solutions does $f(x) = 0$ have?',
              options: ['Two', 'One', 'None', 'Infinitely many'],
              correctAnswer: 2,
              explanation: 'No x-intercepts means no real zeros — the equation $f(x) = 0$ has no real solutions.',
            },
          ],
        },
      },
      {
        id: 'calc5-input',
        type: 'input-boxes' as const,
        content: `**Final Drill** 🧮

**1)** Solve $5x - 2 = 3x + 8$ (graph both sides). $x = \\,?$
**2)** $y = x^2 - 49$ has x-intercepts at $x = -7$ and $x = \\,?$ *(positive root)*
**3)** Mean of $\\{10, 12, 14, 16, 18\\}$ $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '7', '14'],
          hint1: '$5x - 2 = 3x + 8 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.',
          hint2: '$x^2 - 49 = 0 \\Rightarrow x = \\pm 7$; the positive root is $7$.',
          hint3: 'Mean $= \\frac{10+12+14+16+18}{5} = \\frac{70}{5}$.',
          explanation: '1) $x = 5$ (intersection).  2) $x = 7$ (x-intercept).  3) Mean $= 70/5 = 14$.',
        },
      },
      {
        id: 'calc5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which of these is the BEST use of the SAT calculator?',
              options: [
                'Computing $8 \\times 7$',
                'Finding where $y = x^2 - 2x - 8$ crosses the x-axis',
                'Simplifying $\\frac{x^4}{x^2}$',
                'Adding $20 + 30$',
              ],
              correctAnswer: 1,
              explanation: 'Clean arithmetic and exponent rules are faster by hand. Reading the zeros of a quadratic off a graph ($x = -2$ and $x = 4$) is exactly what the calculator is for.',
            },
            {
              question: 'You type a system into Desmos but see no intersection on screen. Before answering "no solution," you should:',
              options: [
                'Pick "no solution" immediately',
                'Zoom out to make sure the intersection isn\'t off-screen',
                'Delete one equation',
                'Switch to the median command',
              ],
              correctAnswer: 1,
              explanation: 'An intersection can sit outside the default window. Always zoom/pan out to see the full picture before concluding there is no solution.',
            },
            {
              question: 'The median of the data set $\\{1, 4, 4, 9, 100\\}$ is:',
              options: ['$4$', '$23.6$', '$9$', '$100$'],
              correctAnswer: 0,
              explanation: 'Sorted, the middle (3rd of 5) value is $4$. The outlier $100$ pulls the mean up to $23.6$ but leaves the median at $4$.',
            },
          ],
        },
      },
    ],
  },
]
