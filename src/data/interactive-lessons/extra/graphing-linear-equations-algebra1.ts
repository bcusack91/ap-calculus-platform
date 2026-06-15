import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Graphing Linear Equations (Algebra 1).
 * Registry key: 'graphing-linear-equations-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'graphing-linear-equations-algebra1',
    sections: [
      {
        id: 'gle1-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Linear Equations

**Part 1 of 5 — The Coordinate Plane & Plotting Points**

---

### Topics in This Part

| Section |
|---------|
| The Coordinate Plane |
| Plotting Ordered Pairs |
| Checking Points on a Line |

> 🔑 **Key Concept:** A **linear equation** graphs as a perfectly straight line. Every point on that line is an $(x, y)$ pair that makes the equation true. Before we draw lines, we need to be fluent at plotting and testing points.`,
      },
      {
        id: 'gle1-plane',
        type: 'text' as const,
        content: `## The Coordinate Plane

The coordinate plane is built from two number lines that cross at the **origin** $(0, 0)$:

- The **$x$-axis** runs horizontally (left–right).
- The **$y$-axis** runs vertically (up–down).

An **ordered pair** $(x, y)$ tells you how to find a point:

$$(\\underbrace{x}_{\\text{right/left}},\\; \\underbrace{y}_{\\text{up/down}})$$

> ⚠️ **Order matters!** $(3, 1)$ and $(1, 3)$ are *different* points. Always read $x$ first, then $y$.

### The Four Quadrants

The axes split the plane into four **quadrants**, numbered counter-clockwise starting from the top right:

| Quadrant | $x$ sign | $y$ sign | Example |
|----------|----------|----------|---------|
| I | $+$ | $+$ | $(4, 2)$ |
| II | $-$ | $+$ | $(-4, 2)$ |
| III | $-$ | $-$ | $(-4, -2)$ |
| IV | $+$ | $-$ | $(4, -2)$ |`,
      },
      {
        id: 'gle1-quadrant-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In which quadrant does the point $(-5, 3)$ lie?',
              options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
              correctAnswer: 1,
              explanation: '$x = -5$ (negative) and $y = 3$ (positive). Negative $x$ with positive $y$ is the top-left region: Quadrant II.',
            },
            {
              question: 'To plot $(2, -4)$, you move from the origin:',
              options: ['2 right, 4 up', '2 right, 4 down', '4 right, 2 down', '2 left, 4 down'],
              correctAnswer: 1,
              explanation: 'Read $x$ first: $x = 2$ means 2 units right. Then $y = -4$ means 4 units down. The point lands in Quadrant IV.',
            },
          ],
        },
      },
      {
        id: 'gle1-plot-drill',
        type: 'input-boxes' as const,
        content: `**Locate the Point** 🧮

A point starts at the origin. Enter the coordinate asked for.

**1)** Start at origin, move **3 right** and **5 up**. What is the $y$-coordinate?
**2)** The point $(-7, 0)$ lies on which axis value of $y$? Enter the $y$-coordinate.
**3)** A point in Quadrant III has $x = -2$. Enter a possible $y$-coordinate (any negative integer).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '0', '-1'],
          hint1: 'Moving up affects the $y$-coordinate. 5 up means $y = 5$.',
          hint2: 'The point $(-7, 0)$ sits exactly on the $x$-axis, where $y = 0$.',
          hint3: 'Quadrant III needs $y < 0$. Any negative integer such as $-1$, $-2$, $-3$ works.',
          explanation: '1) $y = 5$. 2) $y = 0$ (the point is on the $x$-axis). 3) Any negative $y$ such as $-1$ keeps the point in Quadrant III.',
        },
      },
      {
        id: 'gle1-onthe-line',
        type: 'text' as const,
        content: `## Is a Point *On* the Line?

A point $(x, y)$ lies on a line only if it **satisfies the equation** — plug in both coordinates and check that the two sides are equal.

### Example: Is $(2, 7)$ on $y = 3x + 1$?

$$y = 3x + 1 \\;\\Rightarrow\\; 7 \\stackrel{?}{=} 3(2) + 1 = 6 + 1 = 7 \\; ✓$$

Both sides equal $7$, so **yes**, $(2, 7)$ is on the line.

### Example: Is $(4, 5)$ on $y = 2x - 1$?

$$5 \\stackrel{?}{=} 2(4) - 1 = 8 - 1 = 7$$

Since $5 \\ne 7$, the point is **not** on the line.

> 💡 To build a line by hand, pick a few $x$-values, compute each $y$, plot the resulting points, and connect them with a straight edge.`,
      },
      {
        id: 'gle1-check-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which point lies on the line $y = 2x - 3$?',
              options: ['$(0, 3)$', '$(1, -1)$', '$(2, 3)$', '$(-1, -1)$'],
              correctAnswer: 1,
              explanation: 'Test $(1, -1)$: $2(1) - 3 = -1$ ✓. (Check the others: $(0,3)$ gives $-3$; $(2,3)$ gives $1$; $(-1,-1)$ gives $-5$.)',
            },
            {
              question: 'A table for a line shows $(0, 4)$ and $(1, 6)$. Each time $x$ increases by 1, $y$ increases by:',
              options: ['$2$', '$4$', '$6$', '$10$'],
              correctAnswer: 0,
              explanation: 'From $(0,4)$ to $(1,6)$, $y$ goes from $4$ to $6$, a change of $+2$ for each $+1$ in $x$. This constant change is what makes the line straight.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'graphing-linear-equations-algebra1',
    sections: [
      {
        id: 'gle2-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Linear Equations

**Part 2 of 5 — Slope: Steepness & Direction**

---

> 🔑 **The Idea:** **Slope** measures how steep a line is and which way it tilts. It is the *constant rate of change* — the same "rise over run" no matter which two points you choose.`,
      },
      {
        id: 'gle2-slope',
        type: 'text' as const,
        content: `## The Slope Formula

For any two points $(x_1, y_1)$ and $(x_2, y_2)$ on a line:

$$m = \\frac{\\text{rise}}{\\text{run}} = \\frac{y_2 - y_1}{x_2 - x_1}$$

- **Rise** = vertical change (change in $y$)
- **Run** = horizontal change (change in $x$)

### Example: slope through $(1, 2)$ and $(4, 8)$

$$m = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$$

The line rises $2$ units for every $1$ unit it moves right.

> ⚠️ **Stay consistent!** Whatever point you call "second" for $y$, use the *same* point first for $x$. Subtract in the same order on top and bottom.`,
      },
      {
        id: 'gle2-types',
        type: 'text' as const,
        content: `## Four Kinds of Slope

| Line looks like… | Slope sign | Example |
|------------------|-----------|---------|
| Going **up** left-to-right ⤴ | **positive** | $m = 3$ |
| Going **down** left-to-right ⤵ | **negative** | $m = -2$ |
| Perfectly **horizontal** → | **zero** ($m = 0$) | $y = 4$ |
| Perfectly **vertical** ↑ | **undefined** | $x = 5$ |

A horizontal line has rise $= 0$, so $m = \\dfrac{0}{\\text{run}} = 0$.

A vertical line has run $= 0$, so $m = \\dfrac{\\text{rise}}{0}$ is **undefined** (you can't divide by zero).

> 💡 Steeper lines have slopes farther from $0$. A slope of $5$ is steeper than a slope of $\\frac{1}{2}$.`,
      },
      {
        id: 'gle2-slope-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the slope of the line through $(2, 3)$ and $(6, 11)$?',
              options: ['$2$', '$\\frac{1}{2}$', '$4$', '$8$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{11 - 3}{6 - 2} = \\dfrac{8}{4} = 2$.',
            },
            {
              question: 'The line $y = -7$ is horizontal. Its slope is:',
              options: ['$-7$', '$0$', 'undefined', '$7$'],
              correctAnswer: 1,
              explanation: 'A horizontal line never rises, so rise $= 0$ and $m = \\dfrac{0}{\\text{run}} = 0$. (A *vertical* line like $x = -7$ would have undefined slope.)',
            },
          ],
        },
      },
      {
        id: 'gle2-slope-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Slope** 🧮

Find the slope through each pair of points. Enter a fraction like \`-3/4\` or an integer.

**1)** $(0, 1)$ and $(2, 7)$ $\\;\\Rightarrow\\; m = \\,?$
**2)** $(1, 5)$ and $(4, -1)$ $\\;\\Rightarrow\\; m = \\,?$
**3)** $(-2, 3)$ and $(2, 4)$ $\\;\\Rightarrow\\; m = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-2', '1/4'],
          hint1: '$m = \\dfrac{7 - 1}{2 - 0} = \\dfrac{6}{2} = 3$.',
          hint2: '$m = \\dfrac{-1 - 5}{4 - 1} = \\dfrac{-6}{3} = -2$.',
          hint3: '$m = \\dfrac{4 - 3}{2 - (-2)} = \\dfrac{1}{4}$.',
          explanation: '1) $m = 6/2 = 3$. 2) $m = -6/3 = -2$. 3) $m = 1/4$ — remember $2 - (-2) = 4$ in the denominator.',
        },
      },
      {
        id: 'gle2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Slope** 🔽

Choose the slope sign or value that fits each description.`,
        exercise: {
          dropdowns: [
            { label: 'A line falling from upper-left to lower-right:', options: ['positive', 'negative', 'zero', 'undefined'] },
            { label: 'The horizontal line $y = 2$:', options: ['positive', 'negative', 'zero', 'undefined'] },
            { label: 'The vertical line $x = -3$:', options: ['positive', 'negative', 'zero', 'undefined'] },
          ],
          correctAnswers: ['negative', 'zero', 'undefined'],
          hint1: 'Falling left-to-right means the line tilts downward — a negative slope.',
          hint2: 'A horizontal line has no rise, so its slope is zero.',
          hint3: 'A vertical line has zero run, and dividing by zero is undefined.',
          explanation: 'Downhill lines have negative slope, horizontal lines have slope $0$, and vertical lines have undefined slope.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'graphing-linear-equations-algebra1',
    sections: [
      {
        id: 'gle3-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Linear Equations

**Part 3 of 5 — Slope-Intercept Form**

---

> 🔑 **The Power Tool:** Slope-intercept form $y = mx + b$ is the fastest way to graph a line. It hands you the **slope $m$** and the **$y$-intercept $b$** right from the equation.`,
      },
      {
        id: 'gle3-form',
        type: 'text' as const,
        content: `## $y = mx + b$

$$y = \\underbrace{m}_{\\text{slope}}\\,x + \\underbrace{b}_{y\\text{-intercept}}$$

- **$m$** = slope (steepness/direction)
- **$b$** = $y$-intercept = the $y$-value where the line crosses the $y$-axis, i.e. the point $(0, b)$

### Reading a Line at a Glance

| Equation | Slope $m$ | $y$-intercept $b$ | Crosses $y$-axis at |
|----------|-----------|-------------------|---------------------|
| $y = 3x + 2$ | $3$ | $2$ | $(0, 2)$ |
| $y = -\\frac{1}{2}x + 4$ | $-\\frac{1}{2}$ | $4$ | $(0, 4)$ |
| $y = x - 5$ | $1$ | $-5$ | $(0, -5)$ |
| $y = -2x$ | $-2$ | $0$ | $(0, 0)$ |

> ⚠️ **Watch hidden numbers.** In $y = x - 5$ the slope is $1$ (not blank) and $b = -5$ (the sign travels with the number). In $y = -2x$, $b = 0$.`,
      },
      {
        id: 'gle3-read-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $y = -4x + 9$, the slope and $y$-intercept are:',
              options: ['slope $9$, intercept $-4$', 'slope $-4$, intercept $9$', 'slope $4$, intercept $-9$', 'slope $-4$, intercept $-9$'],
              correctAnswer: 1,
              explanation: 'Match to $y = mx + b$: $m = -4$ (coefficient of $x$) and $b = 9$ (the constant). The line crosses the $y$-axis at $(0, 9)$.',
            },
            {
              question: 'Which equation has a $y$-intercept of $(0, -3)$ and slope $\\frac{2}{3}$?',
              options: ['$y = -3x + \\frac{2}{3}$', '$y = \\frac{2}{3}x - 3$', '$y = \\frac{2}{3}x + 3$', '$y = 3x - \\frac{2}{3}$'],
              correctAnswer: 1,
              explanation: 'Slope-intercept form is $y = mx + b$ with $m = \\frac{2}{3}$ and $b = -3$, giving $y = \\frac{2}{3}x - 3$.',
            },
          ],
        },
      },
      {
        id: 'gle3-graphing',
        type: 'text' as const,
        content: `## Graphing from $y = mx + b$

Three quick steps:

1. **Plot the $y$-intercept** $(0, b)$ first — your starting dot.
2. **Use the slope** $m = \\dfrac{\\text{rise}}{\\text{run}}$ to step to the next point. From the intercept, go *up/down* by the rise and *right* by the run.
3. **Draw the line** through both points.

### Worked Example: $y = 2x + 1$

- Start at $b = 1$: plot $(0, 1)$.
- Slope $2 = \\dfrac{2}{1}$: from $(0, 1)$ go **up 2, right 1** to $(1, 3)$.
- Repeat to confirm: $(2, 5)$. Connect the dots.

### Worked Example: $y = -\\frac{2}{3}x + 4$

- Start at $b = 4$: plot $(0, 4)$.
- Slope $-\\dfrac{2}{3}$: go **down 2, right 3** to $(3, 2)$.
- Connect $(0, 4)$ and $(3, 2)$.

> 💡 For a *negative* slope, put the minus sign on the rise: down for the rise, still right for the run.`,
      },
      {
        id: 'gle3-graph-dropdown',
        type: 'dropdown-select' as const,
        content: `**Graph It Step by Step** 🔽

You're graphing $y = 3x - 2$.`,
        exercise: {
          dropdowns: [
            { label: 'First point to plot (the $y$-intercept):', options: ['$(0, -2)$', '$(0, 3)$', '$(-2, 0)$', '$(3, -2)$'] },
            { label: 'From there, the slope says move:', options: ['up 3, right 1', 'up 1, right 3', 'down 3, right 1', 'up 2, right 3'] },
            { label: 'The second point you land on:', options: ['$(1, 1)$', '$(1, 3)$', '$(3, 1)$', '$(1, -5)$'] },
          ],
          correctAnswers: ['$(0, -2)$', 'up 3, right 1', '$(1, 1)$'],
          hint1: 'The $y$-intercept is $b = -2$, plotted as $(0, -2)$.',
          hint2: 'Slope $3 = \\frac{3}{1}$: rise 3 (up), run 1 (right).',
          hint3: 'From $(0, -2)$ go up 3 to $y = 1$ and right 1 to $x = 1$: the point $(1, 1)$.',
          explanation: 'Start at $(0, -2)$, apply slope $\\frac{3}{1}$ (up 3, right 1) to reach $(1, 1)$, then draw the line.',
        },
      },
      {
        id: 'gle3-intercept-drill',
        type: 'input-boxes' as const,
        content: `**From Equation to Graph** 🧮

For $y = -\\frac{1}{2}x + 6$, answer each part.

**1)** The $y$-intercept is the point $(0, \\,?)$. Enter the $y$-value.
**2)** Starting at the intercept, you go down 1 and right 2. What is the $x$-coordinate of that second point?
**3)** What is the $y$-coordinate of that second point?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '2', '5'],
          hint1: 'The constant $b = 6$, so the intercept is $(0, 6)$.',
          hint2: 'Slope $-\\frac{1}{2}$ means run $= 2$, so the new $x = 0 + 2 = 2$.',
          hint3: 'Rise $= -1$ means down 1, so the new $y = 6 - 1 = 5$. The second point is $(2, 5)$.',
          explanation: 'Intercept $(0, 6)$; slope $-\\frac{1}{2}$ (down 1, right 2) lands on $(2, 5)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'graphing-linear-equations-algebra1',
    sections: [
      {
        id: 'gle4-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Linear Equations

**Part 4 of 5 — Intercepts, Standard Form & Special Lines**

---

> 🔑 **More Ways In:** Not every line arrives as $y = mx + b$. Here you'll graph from **intercepts**, convert **standard form** $Ax + By = C$, and master **horizontal**, **vertical**, **parallel**, and **perpendicular** lines.`,
      },
      {
        id: 'gle4-intercepts',
        type: 'text' as const,
        content: `## Graphing with Intercepts

Two intercepts are enough to draw any (non-horizontal, non-vertical) line:

- **$x$-intercept:** where the line crosses the $x$-axis. Set $y = 0$, solve for $x$.
- **$y$-intercept:** where the line crosses the $y$-axis. Set $x = 0$, solve for $y$.

### Example: $2x + 3y = 12$

**$x$-intercept** (let $y = 0$):
$$2x + 3(0) = 12 \\;\\Rightarrow\\; 2x = 12 \\;\\Rightarrow\\; x = 6 \\;\\Rightarrow\\; (6, 0)$$

**$y$-intercept** (let $x = 0$):
$$2(0) + 3y = 12 \\;\\Rightarrow\\; 3y = 12 \\;\\Rightarrow\\; y = 4 \\;\\Rightarrow\\; (0, 4)$$

Plot $(6, 0)$ and $(0, 4)$, connect, done.

> 💡 The intercept method is fastest for **standard form** $Ax + By = C$, where solving for $y$ would be extra work.`,
      },
      {
        id: 'gle4-intercept-drill',
        type: 'input-boxes' as const,
        content: `**Find the Intercepts** 🧮

For the line $4x - 2y = 8$:

**1)** $x$-intercept: set $y = 0$ and solve. Enter the $x$-value.
**2)** $y$-intercept: set $x = 0$ and solve. Enter the $y$-value.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '-4'],
          hint1: 'Let $y = 0$: $4x - 0 = 8 \\Rightarrow 4x = 8 \\Rightarrow x = 2$.',
          hint2: 'Let $x = 0$: $-2y = 8 \\Rightarrow y = -4$. Watch the sign: dividing $8$ by $-2$ gives $-4$.',
          hint3: 'The two intercepts are $(2, 0)$ on the $x$-axis and $(0, -4)$ on the $y$-axis.',
          explanation: '$x$-intercept $(2, 0)$ and $y$-intercept $(0, -4)$. Plot both and connect.',
        },
      },
      {
        id: 'gle4-special',
        type: 'text' as const,
        content: `## Horizontal & Vertical Lines

These are the two "special" lines students mix up most:

| Equation | Looks like | Slope | Passes through |
|----------|-----------|-------|----------------|
| $y = k$ | **horizontal** line | $0$ | every point with $y = k$, e.g. $(0, k)$ |
| $x = k$ | **vertical** line | undefined | every point with $x = k$, e.g. $(k, 0)$ |

- $y = 3$ is a flat horizontal line at height $3$.
- $x = -2$ is a vertical line two units left of the $y$-axis.

> ⚠️ **Don't swap them!** "$y$ equals a number" is *horizontal*; "$x$ equals a number" is *vertical*. The letter that's **fixed** is the axis the line is *perpendicular* to.`,
      },
      {
        id: 'gle4-special-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The graph of $x = 5$ is:',
              options: ['a horizontal line through $(0, 5)$', 'a vertical line through $(5, 0)$', 'a line with slope $5$', 'a single point at $(5, 5)$'],
              correctAnswer: 1,
              explanation: '$x = 5$ fixes $x$ at $5$ for all $y$-values, drawing a vertical line through $(5, 0)$ with undefined slope.',
            },
            {
              question: 'Which line is parallel to $y = 4$?',
              options: ['$x = 4$', '$y = -1$', '$y = x$', '$x = -1$'],
              correctAnswer: 1,
              explanation: '$y = 4$ is horizontal. Another horizontal line, like $y = -1$, is parallel to it. ($x = 4$ and $x = -1$ are vertical; $y = x$ is diagonal.)',
            },
          ],
        },
      },
      {
        id: 'gle4-parallel-perp',
        type: 'text' as const,
        content: `## Parallel & Perpendicular Lines

Two lines' slopes tell you how they relate:

- **Parallel lines** never meet — they have the **same slope** ($m_1 = m_2$).
- **Perpendicular lines** cross at $90^\\circ$ — their slopes are **negative reciprocals** ($m_1 \\cdot m_2 = -1$).

### Negative Reciprocal in One Move

Flip the fraction and switch the sign:

$$m = \\frac{2}{3} \\;\\longrightarrow\\; m_\\perp = -\\frac{3}{2}, \\qquad m = -4 \\;\\longrightarrow\\; m_\\perp = \\frac{1}{4}$$

| Original slope | Parallel slope | Perpendicular slope |
|----------------|----------------|---------------------|
| $3$ | $3$ | $-\\frac{1}{3}$ |
| $-\\frac{1}{2}$ | $-\\frac{1}{2}$ | $2$ |
| $\\frac{5}{4}$ | $\\frac{5}{4}$ | $-\\frac{4}{5}$ |

> 💡 Check perpendicularity by multiplying: $3 \\cdot \\left(-\\frac{1}{3}\\right) = -1$ ✓.`,
      },
      {
        id: 'gle4-perp-dropdown',
        type: 'dropdown-select' as const,
        content: `**Parallel or Perpendicular?** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'A line parallel to $y = 2x + 7$ has slope:', options: ['$2$', '$-2$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'] },
            { label: 'A line perpendicular to $y = 2x + 7$ has slope:', options: ['$2$', '$-2$', '$-\\frac{1}{2}$', '$\\frac{1}{2}$'] },
            { label: 'A line perpendicular to $y = -\\frac{3}{4}x$ has slope:', options: ['$-\\frac{3}{4}$', '$\\frac{3}{4}$', '$\\frac{4}{3}$', '$-\\frac{4}{3}$'] },
          ],
          correctAnswers: ['$2$', '$-\\frac{1}{2}$', '$\\frac{4}{3}$'],
          hint1: 'Parallel lines share the exact same slope.',
          hint2: 'Perpendicular slope = negative reciprocal: flip $2 = \\frac{2}{1}$ and negate to get $-\\frac{1}{2}$.',
          hint3: 'Flip $-\\frac{3}{4}$ to $-\\frac{4}{3}$, then switch the sign: $+\\frac{4}{3}$.',
          explanation: 'Parallel: same slope ($2$). Perpendicular: negative reciprocal — $2 \\to -\\frac{1}{2}$ and $-\\frac{3}{4} \\to \\frac{4}{3}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'graphing-linear-equations-algebra1',
    sections: [
      {
        id: 'gle5-intro',
        type: 'text' as const,
        content: `# 📈 Graphing Linear Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) plot and test points, (2) compute slope, (3) graph from $y = mx + b$, and (4) handle intercepts, standard form, and special lines. Let's put it all together.`,
      },
      {
        id: 'gle5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Slope from two points | $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ |
| Graph $y = mx + b$ | plot $(0, b)$, step by slope $\\dfrac{\\text{rise}}{\\text{run}}$ |
| Graph $Ax + By = C$ | find $x$- and $y$-intercepts |
| Horizontal line | $y = k$, slope $0$ |
| Vertical line | $x = k$, slope undefined |
| Perpendicular slope | negative reciprocal ($m_1 m_2 = -1$) |

> ⚠️ Top traps: reading $(x, y)$ in the wrong order, dropping a negative sign on the slope, and swapping horizontal ($y = k$) with vertical ($x = k$).`,
      },
      {
        id: 'gle5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Slope through $(-3, 2)$ and $(1, 10)$ $\\;\\Rightarrow\\; m = \\,?$
**2)** The line $y = 5x - 8$ crosses the $y$-axis at $(0, \\,?)$. Enter the $y$-value.
**3)** A line perpendicular to one with slope $\\frac{2}{5}$ has slope $\\,?$ (enter as a fraction like \`-5/2\`).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '-8', '-5/2'],
          hint1: '$m = \\dfrac{10 - 2}{1 - (-3)} = \\dfrac{8}{4} = 2$.',
          hint2: 'In $y = mx + b$, the $y$-intercept is $b = -8$.',
          hint3: 'Flip $\\frac{2}{5}$ to $\\frac{5}{2}$ and negate: $-\\frac{5}{2}$.',
          explanation: '1) $m = 8/4 = 2$. 2) $b = -8$. 3) negative reciprocal of $\\frac{2}{5}$ is $-\\frac{5}{2}$.',
        },
      },
      {
        id: 'gle5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation describes a line with slope $-3$ passing through $(0, 5)$?',
              options: ['$y = 5x - 3$', '$y = -3x + 5$', '$y = 3x + 5$', '$y = -3x - 5$'],
              correctAnswer: 1,
              explanation: 'Slope-intercept form $y = mx + b$ with $m = -3$ and $b = 5$ gives $y = -3x + 5$.',
            },
            {
              question: 'The $x$-intercept of $3x + 5y = 15$ is:',
              options: ['$(0, 3)$', '$(5, 0)$', '$(3, 0)$', '$(0, 5)$'],
              correctAnswer: 1,
              explanation: 'Set $y = 0$: $3x = 15 \\Rightarrow x = 5$, so the $x$-intercept is $(5, 0)$.',
            },
          ],
        },
      },
      {
        id: 'gle5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the slope of the line through $(2, -1)$ and $(5, 8)$?',
              options: ['$3$', '$-3$', '$\\frac{1}{3}$', '$9$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{8 - (-1)}{5 - 2} = \\dfrac{9}{3} = 3$.',
            },
            {
              question: 'In $y = \\frac{3}{4}x - 6$, the $y$-intercept is:',
              options: ['$(0, \\frac{3}{4})$', '$(0, 6)$', '$(0, -6)$', '$(-6, 0)$'],
              correctAnswer: 2,
              explanation: 'The constant $b = -6$, so the line crosses the $y$-axis at $(0, -6)$.',
            },
            {
              question: 'Which statement about the line $y = -2$ is true?',
              options: ['It is vertical with undefined slope', 'It is horizontal with slope $0$', 'It has slope $-2$', 'It passes through $(-2, 0)$'],
              correctAnswer: 1,
              explanation: '$y = k$ is a horizontal line. It is flat, so its slope is $0$, and it passes through points like $(0, -2)$.',
            },
          ],
        },
      },
    ],
  },
]
