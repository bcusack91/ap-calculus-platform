import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Graphing Systems of Equations (Algebra 1).
 * Registry key: 'graphing-systems-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'graphing-systems-algebra1',
    sections: [
      {
        id: 'gse1-intro',
        type: 'text' as const,
        content: `# 📊 Graphing Systems of Equations

**Part 1 of 5 — What a System Is and What "Solution" Means**

---

### Topics in This Part

| Section |
|---------|
| What Is a System of Equations? |
| The Solution Is the Intersection Point |
| Checking a Point in Both Equations |

> 🔑 **Key Concept:** A **system of equations** is two (or more) equations that share the same variables. To **graph-solve** a system, you draw both lines on one set of axes — the point where they **cross** is the solution that makes *both* equations true at once.`,
      },
      {
        id: 'gse1-whatis',
        type: 'text' as const,
        content: `## What Is a System of Equations?

A **system of linear equations** is a set of two lines you want to satisfy *simultaneously*:

$$\\begin{cases} y = x + 1 \\\\ y = -x + 3 \\end{cases}$$

Each equation by itself has infinitely many solutions (every point on its line). The **system** asks a sharper question:

> Which single point $(x, y)$ lies on **both** lines at the same time?

### Why Graphing Works

When you plot both lines, every point on line 1 satisfies equation 1, and every point on line 2 satisfies equation 2. The **only** place that satisfies *both* is where the lines **intersect**.

| Where the point lives | Which equation it satisfies |
|-----------------------|-----------------------------|
| On line 1 only | Equation 1 |
| On line 2 only | Equation 2 |
| **At the intersection** | **Both** ✓ |

> 🔑 **Big Idea:** The **solution of a system** = the **intersection point** of its graphs.`,
      },
      {
        id: 'gse1-concept-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you solve a system of two linear equations by graphing, the solution is:',
              options: [
                'The point where the two lines cross',
                'The $y$-intercept of the first line',
                'Any point on either line',
                'The slope of both lines',
              ],
              correctAnswer: 0,
              explanation: 'The solution must satisfy BOTH equations, so it must lie on BOTH lines — that happens only at the intersection point.',
            },
            {
              question: 'A point is a solution to a system only if it makes:',
              options: [
                'Both equations true',
                'At least one equation true',
                'The first equation true',
                'Neither equation false',
              ],
              correctAnswer: 0,
              explanation: 'A system solution must satisfy every equation in the system simultaneously — "both" for a two-equation system.',
            },
          ],
        },
      },
      {
        id: 'gse1-check-point',
        type: 'text' as const,
        content: `## Checking Whether a Point Is the Solution

You don't always need a graph to *test* a candidate point — just substitute it into **both** equations and see if both come out true.

### Example: Is $(1, 2)$ the solution of $\\begin{cases} y = x + 1 \\\\ y = -x + 3 \\end{cases}$?

**Equation 1:** $y = x + 1 \\Rightarrow 2 = 1 + 1 = 2$ ✓

**Equation 2:** $y = -x + 3 \\Rightarrow 2 = -1 + 3 = 2$ ✓

Both check out, so $(1, 2)$ **is** the solution.

> 💡 **Notation tip:** We write the solution as an ordered pair $(x, y)$ — here $(1, 2)$ — because a system pins down *one* $x$ and *one* $y$.

> ⚠️ A point that works in **one** equation but fails the **other** is **not** a solution. You must check both.`,
      },
      {
        id: 'gse1-check-drill',
        type: 'input-boxes' as const,
        content: `**Test the Point** 🧮

Consider the system $\\begin{cases} y = 2x - 1 \\\\ y = x + 1 \\end{cases}$ and the candidate point $(2, 3)$.

**1)** Plug $x = 2$ into $y = 2x - 1$. What $y$-value do you get?
**2)** Plug $x = 2$ into $y = x + 1$. What $y$-value do you get?
**3)** Enter \`1\` if $(2, 3)$ is the solution to the system, or \`0\` if it is not.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '3', '1'],
          hint1: '$y = 2x - 1 = 2(2) - 1 = 4 - 1 = 3$.',
          hint2: '$y = x + 1 = 2 + 1 = 3$.',
          hint3: 'Both equations give $y = 3$ when $x = 2$, so $(2, 3)$ lies on both lines — it IS the solution. Enter $1$.',
          explanation: 'Equation 1 gives $3$, equation 2 gives $3$. Since both are satisfied by $(2,3)$, it is the solution (answer $1$).',
        },
      },
      {
        id: 'gse1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Vocabulary Check** 🔽

Match each idea to the correct statement about a two-line system.`,
        exercise: {
          dropdowns: [
            { label: 'The solution of the system is:', options: ['The intersection point', 'The $y$-intercept', 'The slope', 'The $x$-axis'] },
            { label: 'A point is a solution when it makes:', options: ['Both equations true', 'One equation true', 'No equation false', 'The slopes equal'] },
            { label: 'We write the solution as:', options: ['An ordered pair $(x, y)$', 'A single number', 'A slope $m$', 'An inequality'] },
          ],
          correctAnswers: ['The intersection point', 'Both equations true', 'An ordered pair $(x, y)$'],
          hint1: 'The two graphs meet at one place — that crossing is the solution.',
          hint2: 'To solve a *system*, a point must satisfy every equation simultaneously: both must be true.',
          hint3: 'A system fixes one $x$ and one $y$, so we report the solution as an ordered pair $(x, y)$.',
          explanation: 'The solution is the intersection point — the single ordered pair $(x, y)$ that makes both equations true.',
        },
      },
      {
        id: 'gse1-wrap',
        type: 'text' as const,
        content: `## What You Can Now Do

You know what a system is, that its solution is the **intersection point**, and how to **verify** a candidate by checking both equations.

In **Part 2** we'll actually *draw* the two lines from scratch — using slope and $y$-intercept — and read the intersection straight off the graph.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'graphing-systems-algebra1',
    sections: [
      {
        id: 'gse2-intro',
        type: 'text' as const,
        content: `# 📊 Graphing Systems of Equations

**Part 2 of 5 — Graphing the Lines and Reading the Intersection**

---

> 🔑 **The Plan:** Put each equation in **slope-intercept form** $y = mx + b$, plot its $y$-intercept, use the slope to get a second point, draw the line — then find where the two lines meet.`,
      },
      {
        id: 'gse2-slopeint',
        type: 'text' as const,
        content: `## Step 1: Slope-Intercept Form

Every line you'll graph here can be written as:

$$y = mx + b$$

- $b$ = the **$y$-intercept** — where the line crosses the $y$-axis, at the point $(0, b)$.
- $m$ = the **slope** — $\\dfrac{\\text{rise}}{\\text{run}}$, how far up you go for each step right.

### How to Plot a Line

1. Plot $(0, b)$ on the $y$-axis.
2. From there, apply the slope: a slope of $2 = \\dfrac{2}{1}$ means **up 2, right 1**.
3. Connect the points with a straight line.

### Example: graph $y = 2x + 1$

| $x$ | $y = 2x + 1$ |
|-----|--------------|
| $0$ | $1$ |
| $1$ | $3$ |
| $2$ | $5$ |

Start at $(0, 1)$, then up-2-right-1 lands you at $(1, 3)$, then $(2, 5)$.

> 💡 A **negative** slope like $-1 = \\dfrac{-1}{1}$ means **down 1, right 1** — the line falls as you read left to right.`,
      },
      {
        id: 'gse2-slope-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Line** 🔽

For each equation, identify its slope and $y$-intercept.`,
        exercise: {
          dropdowns: [
            { label: 'Slope of $y = 3x - 4$:', options: ['$3$', '$-4$', '$-3$', '$4$'] },
            { label: '$y$-intercept of $y = 3x - 4$:', options: ['$(0, -4)$', '$(0, 3)$', '$(0, 4)$', '$(-4, 0)$'] },
            { label: 'Slope of $y = -x + 6$:', options: ['$-1$', '$1$', '$6$', '$-6$'] },
          ],
          correctAnswers: ['$3$', '$(0, -4)$', '$-1$'],
          hint1: 'In $y = mx + b$, the slope $m$ is the number multiplying $x$. For $y = 3x - 4$, that is $3$.',
          hint2: 'The $y$-intercept is $b$, the constant term; the line crosses the $y$-axis at $(0, b)$. Here $b = -4$, so $(0, -4)$.',
          hint3: 'In $y = -x + 6$, the coefficient of $x$ is $-1$ (since $-x = -1x$), so the slope is $-1$.',
          explanation: '$y = 3x - 4$ has slope $3$ and crosses the $y$-axis at $(0, -4)$. $y = -x + 6$ has slope $-1$.',
        },
      },
      {
        id: 'gse2-worked',
        type: 'text' as const,
        content: `## Step 2: Graph Both and Find Where They Meet

### Worked Example

$$\\begin{cases} y = 2x + 1 \\\\ y = -x + 4 \\end{cases}$$

**Line 1** ($y = 2x + 1$): start at $(0, 1)$, up 2 right 1 → $(1, 3)$.

**Line 2** ($y = -x + 4$): start at $(0, 4)$, down 1 right 1 → $(1, 3)$.

Both lines pass through $(1, 3)$ — that's the intersection!

### Confirm Algebraically

Set the two right-hand sides equal (both equal $y$):

$$2x + 1 = -x + 4 \\;\\Rightarrow\\; 3x = 3 \\;\\Rightarrow\\; x = 1$$

Then $y = 2(1) + 1 = 3$. **Solution: $(1, 3)$.**

> ✅ **Check in equation 2:** $y = -x + 4 = -1 + 4 = 3$ ✓`,
      },
      {
        id: 'gse2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To graph $y = \\frac{1}{2}x + 3$, you start at $(0, 3)$ and then move:',
              options: [
                'Up 1, right 2',
                'Up 2, right 1',
                'Up 3, right 1',
                'Down 1, right 2',
              ],
              correctAnswer: 0,
              explanation: 'Slope $\\frac{1}{2} = \\frac{\\text{rise}}{\\text{run}}$ means rise $1$, run $2$ — up 1, right 2.',
            },
            {
              question: 'Two lines intersect at $(2, 0)$. Which statement is true?',
              options: [
                '$(2, 0)$ is the solution of the system',
                'The system has no solution',
                'The lines are parallel',
                'The $y$-intercept of both lines is $0$',
              ],
              correctAnswer: 0,
              explanation: 'The intersection point of two lines is exactly the solution of the system formed by their equations.',
            },
          ],
        },
      },
      {
        id: 'gse2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Intersection** 🧮

Solve each system by setting the right-hand sides equal (both equal $y$). Enter the requested coordinate.

**1)** $\\begin{cases} y = x - 2 \\\\ y = -2x + 4 \\end{cases}$ — what is the $x$-coordinate of the intersection?
**2)** Same system: what is the $y$-coordinate?
**3)** $\\begin{cases} y = \\frac{1}{2}x + 3 \\\\ y = -x + 6 \\end{cases}$ — what is the $x$-coordinate of the intersection?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '0', '2'],
          hint1: 'Set $x - 2 = -2x + 4$. Add $2x$ to both sides: $3x - 2 = 4$, so $3x = 6$, $x = 2$.',
          hint2: 'Substitute $x = 2$ into $y = x - 2$: $y = 2 - 2 = 0$.',
          hint3: 'Set $\\frac{1}{2}x + 3 = -x + 6$. Add $x$: $\\frac{3}{2}x + 3 = 6$, so $\\frac{3}{2}x = 3$, $x = 2$.',
          explanation: '1) $x - 2 = -2x + 4 \\Rightarrow 3x = 6 \\Rightarrow x = 2$.  2) $y = 2 - 2 = 0$, giving $(2, 0)$.  3) $\\frac{1}{2}x + 3 = -x + 6 \\Rightarrow \\frac{3}{2}x = 3 \\Rightarrow x = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'graphing-systems-algebra1',
    sections: [
      {
        id: 'gse3-intro',
        type: 'text' as const,
        content: `# 📊 Graphing Systems of Equations

**Part 3 of 5 — Three Types of Solutions**

---

> 🔑 **Key Insight:** Not every system has exactly one solution. Two lines can **cross once**, **never cross** (parallel), or be the **same line** (overlap everywhere). The slopes and intercepts tell you which case you're in *before* you finish graphing.`,
      },
      {
        id: 'gse3-types',
        type: 'text' as const,
        content: `## The Three Possibilities

| Case | Picture | # of Solutions | How to spot it |
|------|---------|----------------|----------------|
| **Intersecting** | lines cross once | **exactly one** | **different slopes** |
| **Parallel** | lines never meet | **none** | **same slope, different $y$-intercept** |
| **Coincident** | one line on top of the other | **infinitely many** | **same slope, same $y$-intercept** |

> 🔑 **Slope test:** Compare slopes first.
> - Different slopes → **one** solution.
> - Same slope → check intercepts: different $b$ → **none**; same $b$ → **infinitely many**.`,
      },
      {
        id: 'gse3-types-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The system $\\begin{cases} y = 2x + 3 \\\\ y = 2x - 1 \\end{cases}$ has how many solutions?',
              options: [
                'None — the lines are parallel',
                'Exactly one',
                'Infinitely many',
                'Exactly two',
              ],
              correctAnswer: 0,
              explanation: 'Both lines have slope $2$ but different $y$-intercepts ($3$ vs $-1$), so they are parallel and never meet — no solution.',
            },
            {
              question: 'Two lines have the same slope AND the same $y$-intercept. The system has:',
              options: [
                'Infinitely many solutions',
                'No solution',
                'Exactly one solution',
                'Exactly two solutions',
              ],
              correctAnswer: 0,
              explanation: 'Same slope and same intercept means they are the SAME line (coincident). Every point on the line solves both equations → infinitely many solutions.',
            },
          ],
        },
      },
      {
        id: 'gse3-examples',
        type: 'text' as const,
        content: `## Worked Examples of Each Case

### One Solution: $\\begin{cases} y = x + 2 \\\\ y = -2x + 5 \\end{cases}$

Slopes $1$ and $-2$ are **different** → exactly one solution. Solve: $x + 2 = -2x + 5 \\Rightarrow 3x = 3 \\Rightarrow x = 1$, $y = 3$. **Solution $(1, 3)$.**

### No Solution: $\\begin{cases} y = 3x + 1 \\\\ y = 3x - 4 \\end{cases}$

Same slope $3$, different intercepts → **parallel**. Setting them equal gives $3x + 1 = 3x - 4 \\Rightarrow 1 = -4$, which is **false**. No $(x, y)$ works → **no solution**.

### Infinitely Many: $\\begin{cases} y = 3x - 2 \\\\ 2y = 6x - 4 \\end{cases}$

Divide the second equation by $2$: $y = 3x - 2$ — the **same line**! Every point on it solves both → **infinitely many solutions**.

> ⚠️ When two equations reduce to the **same** line, the system is *not* "no solution" — it's the opposite: *infinitely many*.`,
      },
      {
        id: 'gse3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify the System** 🔽

Use the slope test to decide how many solutions each system has.`,
        exercise: {
          dropdowns: [
            {
              label: '$\\begin{cases} y = 4x + 1 \\\\ y = -x + 6 \\end{cases}$',
              options: ['One solution', 'No solution', 'Infinitely many'],
            },
            {
              label: '$\\begin{cases} y = -2x + 5 \\\\ y = -2x + 1 \\end{cases}$',
              options: ['No solution', 'One solution', 'Infinitely many'],
            },
            {
              label: '$\\begin{cases} y = \\frac{1}{2}x - 3 \\\\ 2y = x - 6 \\end{cases}$',
              options: ['Infinitely many', 'One solution', 'No solution'],
            },
          ],
          correctAnswers: ['One solution', 'No solution', 'Infinitely many'],
          hint1: 'Slopes $4$ and $-1$ are different → the lines cross once → one solution.',
          hint2: 'Both slopes are $-2$ but intercepts $5$ and $1$ differ → parallel → no solution.',
          hint3: 'Divide $2y = x - 6$ by $2$ to get $y = \\frac{1}{2}x - 3$ — identical to the first line → infinitely many.',
          explanation: 'Different slopes → one solution. Same slope, different intercept → none. Same line → infinitely many.',
        },
      },
      {
        id: 'gse3-drill',
        type: 'input-boxes' as const,
        content: `**Count the Solutions** 🧮

For each system, enter the number of solutions: type \`1\` for one, \`0\` for none, or \`infinite\` for infinitely many.

**1)** $\\begin{cases} y = 5x - 2 \\\\ y = 5x + 7 \\end{cases}$
**2)** $\\begin{cases} y = 2x + 1 \\\\ y = -3x + 6 \\end{cases}$
**3)** $\\begin{cases} y = x + 4 \\\\ 3y = 3x + 12 \\end{cases}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0', '1', 'infinite'],
          hint1: 'System 1: same slope $5$, different intercepts ($-2$ vs $7$) → parallel → $0$ solutions.',
          hint2: 'System 2: slopes $2$ and $-3$ differ → they cross once → $1$ solution.',
          hint3: 'System 3: divide $3y = 3x + 12$ by $3$ to get $y = x + 4$ — the same line → infinite.',
          explanation: '1) parallel → $0$.  2) different slopes → $1$.  3) same line → infinite.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'graphing-systems-algebra1',
    sections: [
      {
        id: 'gse4-intro',
        type: 'text' as const,
        content: `# 📊 Graphing Systems of Equations

**Part 4 of 5 — Real-World Applications**

---

> 🔑 **Why This Matters:** Systems answer "when are two things equal?" — when do two phone plans cost the same, when does a business break even, when do two travelers meet. The intersection point *is* the answer.`,
      },
      {
        id: 'gse4-setup',
        type: 'text' as const,
        content: `## Turning a Word Problem into a System

The recipe is always the same:

1. **Name the variables.** Usually $x$ = the input (minutes, items, hours) and $y$ = the output (cost, revenue, distance).
2. **Write one equation per scenario** in $y = mx + b$ form, where $m$ is the *rate* and $b$ is the *starting value*.
3. **Find the intersection** — that's the value where the two scenarios are equal.

### Example: Two Phone Plans

- **Plan A:** \\$30 flat fee plus \\$0.10 per GB → $y = 0.10x + 30$
- **Plan B:** \\$20 flat fee plus \\$0.20 per GB → $y = 0.20x + 20$

Here $x$ = gigabytes used and $y$ = monthly cost. When do they cost the same?

$$0.10x + 30 = 0.20x + 20 \\;\\Rightarrow\\; 10 = 0.10x \\;\\Rightarrow\\; x = 100$$

At $x = 100$ GB, $y = 0.10(100) + 30 = 40$, giving \\$40. **They cost the same — \\$40 — at 100 GB.**

> 💡 Below $100$ GB, Plan B is cheaper (its lower \\$20 flat fee dominates); above $100$ GB, Plan A's lower per-GB rate wins.`,
      },
      {
        id: 'gse4-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Equations** 🔽

A gym charges a \\$50 sign-up fee plus \\$20 per month. A second gym charges no sign-up fee but \\$30 per month. Let $x$ = months and $y$ = total cost.`,
        exercise: {
          dropdowns: [
            { label: 'Equation for the first gym:', options: ['$y = 20x + 50$', '$y = 50x + 20$', '$y = 20x$', '$y = 70x$'] },
            { label: 'Equation for the second gym:', options: ['$y = 30x$', '$y = 30x + 50$', '$y = 50x + 30$', '$y = 30$'] },
            { label: 'To find when costs are equal, you:', options: ['Set the two equations equal', 'Add the two equations', 'Find each $y$-intercept', 'Multiply the equations'] },
          ],
          correctAnswers: ['$y = 20x + 50$', '$y = 30x$', 'Set the two equations equal'],
          hint1: 'First gym: starting value (intercept) is the \\$50 fee, rate (slope) is \\$20/month → $y = 20x + 50$.',
          hint2: 'Second gym: no sign-up fee means intercept $0$; rate is \\$30/month → $y = 30x$.',
          hint3: 'The costs are equal where the lines intersect, which you find by setting the right-hand sides equal.',
          explanation: 'Flat fees are $y$-intercepts; monthly rates are slopes. Setting the equations equal locates the break-even month.',
        },
      },
      {
        id: 'gse4-breakeven',
        type: 'text' as const,
        content: `## Break-Even Analysis

A classic use: a business has **costs** that start high (equipment) and **revenue** that starts at zero. The **break-even point** is where revenue catches up to cost.

### Example

A T-shirt stand spends \\$200 on a booth plus \\$5 per shirt, and sells each shirt for \\$15.

- **Cost:** $y = 5x + 200$
- **Revenue:** $y = 15x$

Break even where cost $=$ revenue:

$$5x + 200 = 15x \\;\\Rightarrow\\; 200 = 10x \\;\\Rightarrow\\; x = 20$$

At $x = 20$ shirts, $y = 15(20) = 300$, giving \\$300. **Break-even: 20 shirts, \\$300.**

> ✅ **Check:** cost $= 5(20) + 200 = 300$, revenue $= 15(20) = 300$. Equal ✓ — and past 20 shirts the stand finally makes a profit.`,
      },
      {
        id: 'gse4-app-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Application** 🧮

Use the phone-plan and break-even setups above.

**1)** Two plans: $y = 0.10x + 30$ and $y = 0.20x + 20$. At how many GB ($x$) do they cost the same?
**2)** At that point, what is the shared monthly cost $y$ (in dollars, no \\$ sign)?
**3)** Break-even: $y = 5x + 200$ (cost) and $y = 15x$ (revenue). How many shirts ($x$) to break even?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '40', '20'],
          hint1: '$0.10x + 30 = 0.20x + 20 \\Rightarrow 10 = 0.10x \\Rightarrow x = 100$ GB.',
          hint2: 'Substitute $x = 100$: $y = 0.10(100) + 30 = 10 + 30 = 40$ dollars.',
          hint3: '$5x + 200 = 15x \\Rightarrow 200 = 10x \\Rightarrow x = 20$ shirts.',
          explanation: '1) $x = 100$ GB.  2) $y = \\$40$.  3) $x = 20$ shirts (where cost equals revenue).',
        },
      },
      {
        id: 'gse4-app-mc',
        type: 'multiple-choice' as const,
        content: `**Interpret the Result** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For the T-shirt stand (break-even at 20 shirts), selling 25 shirts means the stand is:',
              options: [
                'Making a profit',
                'Losing money',
                'Exactly breaking even',
                'Out of business',
              ],
              correctAnswer: 0,
              explanation: 'Past the break-even point (20 shirts), revenue exceeds cost, so selling 25 shirts yields a profit.',
            },
            {
              question: 'Two travelers leave on lines that are parallel on a distance-vs-time graph. This means they:',
              options: [
                'Never meet (move at the same speed, staying a fixed distance apart)',
                'Meet exactly once',
                'Travel the identical path',
                'Both stop moving',
              ],
              correctAnswer: 0,
              explanation: 'Parallel lines have equal slopes (equal speeds) but different starting points, so the gap never closes — they never meet.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'graphing-systems-algebra1',
    sections: [
      {
        id: 'gse5-intro',
        type: 'text' as const,
        content: `# 📊 Graphing Systems of Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) define a system and verify a point, (2) graph two lines and read their intersection, (3) classify a system as one / no / infinite solutions, and (4) model real situations. Time to put it all together.`,
      },
      {
        id: 'gse5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Solve by graphing | Plot both lines; the **intersection** is the solution |
| Verify a point | Substitute into **both** equations; both must be true |
| Solve algebraically | Set right-hand sides equal: $m_1 x + b_1 = m_2 x + b_2$ |
| Different slopes | **one** solution |
| Same slope, different $b$ | **no** solution (parallel) |
| Same slope, same $b$ | **infinitely many** (same line) |

> ⚠️ **Two traps to avoid:** (1) checking only one equation when verifying a point, and (2) confusing parallel lines (*no* solution) with identical lines (*infinitely many*).`,
      },
      {
        id: 'gse5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve by graphing: $\\begin{cases} y = x - 3 \\\\ y = -x + 1 \\end{cases}$. The solution is:',
              options: ['$(2, -1)$', '$(-1, 2)$', '$(2, 1)$', '$(-2, -1)$'],
              correctAnswer: 0,
              explanation: '$x - 3 = -x + 1 \\Rightarrow 2x = 4 \\Rightarrow x = 2$; then $y = 2 - 3 = -1$. Solution $(2, -1)$.',
            },
            {
              question: 'How many solutions does $\\begin{cases} y = 4x \\\\ y = x + 3 \\end{cases}$ have, and what is it?',
              options: [
                'One solution: $(1, 4)$',
                'No solution',
                'Infinitely many',
                'One solution: $(3, 12)$',
              ],
              correctAnswer: 0,
              explanation: 'Slopes $4$ and $1$ differ → one solution. $4x = x + 3 \\Rightarrow 3x = 3 \\Rightarrow x = 1$, $y = 4$. Solution $(1, 4)$.',
            },
          ],
        },
      },
      {
        id: 'gse5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

**1)** Solve $\\begin{cases} y = 3x - 4 \\\\ y = x + 2 \\end{cases}$ — enter the $x$-coordinate of the solution.
**2)** Same system: enter the $y$-coordinate.
**3)** How many solutions does $\\begin{cases} y = 2x + 5 \\\\ y = 2x + 5 \\end{cases}$ have? (type \`infinite\`)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '5', 'infinite'],
          hint1: 'Set $3x - 4 = x + 2$: subtract $x$ → $2x - 4 = 2$, so $2x = 6$, $x = 3$.',
          hint2: 'Substitute $x = 3$ into $y = x + 2$: $y = 3 + 2 = 5$.',
          hint3: 'The two equations are identical — same line — so every point works: infinitely many.',
          explanation: '1) $3x - 4 = x + 2 \\Rightarrow 2x = 6 \\Rightarrow x = 3$.  2) $y = 3 + 2 = 5$, giving $(3, 5)$.  3) identical equations → infinite.',
        },
      },
      {
        id: 'gse5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the solution to $\\begin{cases} y = 2x \\\\ y = x + 2 \\end{cases}$?',
              options: ['$(2, 4)$', '$(4, 2)$', '$(1, 2)$', '$(2, 2)$'],
              correctAnswer: 0,
              explanation: '$2x = x + 2 \\Rightarrow x = 2$; then $y = 2(2) = 4$. Solution $(2, 4)$.',
            },
            {
              question: 'The system $\\begin{cases} y = -3x + 8 \\\\ y = -3x - 1 \\end{cases}$ has:',
              options: [
                'No solution (parallel lines)',
                'One solution',
                'Infinitely many solutions',
                'A solution at $(0, 8)$',
              ],
              correctAnswer: 0,
              explanation: 'Same slope $-3$ but different $y$-intercepts ($8$ vs $-1$) → parallel lines that never meet → no solution.',
            },
            {
              question: 'Two lines cross at $(3, 3)$ on a graph. Which point is the solution of the system?',
              options: ['$(3, 3)$', '$(0, 3)$', '$(3, 0)$', 'There is no solution'],
              correctAnswer: 0,
              explanation: 'The solution of a system graphed as two lines is exactly their intersection point: $(3, 3)$.',
            },
          ],
        },
      },
    ],
  },
]
