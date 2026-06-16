import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Writing Linear Equations (Algebra 1).
 * Registry key: 'slope-intercept-form-algebra1' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'slope-intercept-form-algebra1',
    sections: [
      {
        id: 'wle1-intro',
        type: 'text' as const,
        content: `# 📈 Writing Linear Equations

**Part 1 of 5 — Slope-Intercept Form: \\(y = mx + b\\)**

---

### Topics in This Part

| Section |
|---------|
| What the Form Tells You |
| Reading Slope and Intercept |
| Graphing from \\(y = mx + b\\) |

> 🔑 **Key Concept:** Every straight (non-vertical) line can be written as $y = mx + b$, where $m$ is the **slope** and $b$ is the **$y$-intercept**. Master this one form and you can describe any line.`,
      },
      {
        id: 'wle1-form',
        type: 'text' as const,
        content: `## What the Form Tells You

The **slope-intercept form** of a line is:

$$y = mx + b$$

Two numbers do all the work:

- $m$ = the **slope** — how steep the line is, and which way it tilts. Slope is $\\dfrac{\\text{rise}}{\\text{run}}$, the change in $y$ for each step right in $x$.
- $b$ = the **$y$-intercept** — the $y$-value where the line crosses the vertical axis (that is, where $x = 0$).

### Reading Off the Pieces

| Equation | Slope $m$ | $y$-intercept $b$ |
|----------|-----------|-------------------|
| $y = 3x + 2$ | $3$ | $2$ |
| $y = -\\tfrac{1}{2}x + 5$ | $-\\tfrac{1}{2}$ | $5$ |
| $y = 4x$ | $4$ | $0$ |
| $y = -x - 7$ | $-1$ | $-7$ |

> 💡 **Watch the signs.** In $y = -x - 7$, the slope is $-1$ (an unwritten $1$) and $b = -7$. The sign in front of each number belongs to it.`,
      },
      {
        id: 'wle1-read-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the line $y = -2x + 6$, what is the slope?',
              options: ['$-2$', '$6$', '$2$', '$-6$'],
              correctAnswer: 0,
              explanation: 'In $y = mx + b$, the slope $m$ is the coefficient of $x$. Here that coefficient is $-2$, so the slope is $-2$. The $6$ is the $y$-intercept.',
            },
            {
              question: 'What is the $y$-intercept of $y = \\frac{3}{4}x - 5$?',
              options: ['$-5$', '$\\frac{3}{4}$', '$5$', '$3$'],
              correctAnswer: 0,
              explanation: 'The $y$-intercept $b$ is the constant term added at the end. Here it is $-5$, so the line crosses the $y$-axis at $(0, -5)$. The $\\frac{3}{4}$ is the slope.',
            },
          ],
        },
      },
      {
        id: 'wle1-read-drill',
        type: 'input-boxes' as const,
        content: `**Identify $m$ and $b$** 🧮

For each line, enter the slope $m$ first, then the $y$-intercept $b$.

**1)** $y = 5x - 8 \\quad\\Rightarrow\\quad m = \\,?,\\ \\ b = \\,?$
**2)** $y = -x + 3 \\quad\\Rightarrow\\quad m = \\,?,\\ \\ b = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['5', '-8', '-1', '3'],
          hint1: 'The slope is the number multiplied by $x$; the $y$-intercept is the constant on its own.',
          hint2: 'In $y = 5x - 8$: $m = 5$, and $b = -8$ (keep the minus sign).',
          hint3: 'In $y = -x + 3$: an invisible $1$ sits in front of $x$, and it is negative, so $m = -1$; then $b = 3$.',
          explanation: '1) $y = 5x - 8$ gives $m = 5$, $b = -8$.  2) $y = -x + 3$ gives $m = -1$, $b = 3$ — the unwritten coefficient of $x$ is $1$.',
        },
      },
      {
        id: 'wle1-graph',
        type: 'text' as const,
        content: `## Graphing from \\(y = mx + b\\)

Slope-intercept form is a recipe for drawing the line in two moves:

1. **Plot the $y$-intercept** $(0, b)$ — your starting dot on the vertical axis.
2. **Use the slope as rise over run** to step to the next point: $m = \\dfrac{\\text{rise}}{\\text{run}}$.

### Example: $y = 2x + 1$

- Start at $(0, 1)$.
- Slope $2 = \\dfrac{2}{1}$: go **up $2$, right $1$** to reach $(1, 3)$.
- Draw the line through both points.

### Example: $y = -\\tfrac{1}{3}x + 4$

- Start at $(0, 4)$.
- Slope $-\\dfrac{1}{3} = \\dfrac{-1}{3}$: go **down $1$, right $3$** to reach $(3, 3)$.

> ⚠️ A **positive** slope rises left-to-right; a **negative** slope falls left-to-right. If your sketch tilts the wrong way, you've mixed up the sign of $m$.`,
      },
      {
        id: 'wle1-graph-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $y = 4x - 3$, which point is the correct starting point (the $y$-intercept)?',
              options: ['$(0, -3)$', '$(-3, 0)$', '$(0, 4)$', '$(4, -3)$'],
              correctAnswer: 0,
              explanation: 'The $y$-intercept is where $x = 0$, giving the point $(0, b)$. Here $b = -3$, so you start at $(0, -3)$.',
            },
            {
              question: 'A line has slope $\\frac{2}{5}$. Starting from a point, how do you step to the next point?',
              options: ['Up $2$, right $5$', 'Up $5$, right $2$', 'Right $2$, up $5$ then back', 'Down $2$, right $5$'],
              correctAnswer: 0,
              explanation: 'Slope is $\\frac{\\text{rise}}{\\text{run}} = \\frac{2}{5}$, so rise $= 2$ (up, since positive) and run $= 5$ (right). Move up $2$ and right $5$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'slope-intercept-form-algebra1',
    sections: [
      {
        id: 'wle2-intro',
        type: 'text' as const,
        content: `# 📈 Writing Linear Equations

**Part 2 of 5 — From Slope and a Point**

---

> 🔑 **The Goal:** You're given enough information to pin down a line — a slope and one point, or two points. Your job is to produce the equation $y = mx + b$. Everything reduces to finding $m$ and $b$.`,
      },
      {
        id: 'wle2-slope-point',
        type: 'text' as const,
        content: `## Given the Slope and a Point

You already know $m$. To find $b$, plug the point's $x$ and $y$ into $y = mx + b$ and solve.

### Worked Example: slope $2$ through $(3, 5)$

Start from $y = mx + b$ with $m = 2$:

$$y = 2x + b$$

Substitute the point $x = 3,\\ y = 5$:

$$5 = 2(3) + b \\;\\Rightarrow\\; 5 = 6 + b \\;\\Rightarrow\\; b = -1$$

So the equation is $\\boxed{y = 2x - 1}$.

> ✅ **Check:** at $x = 3$, $y = 2(3) - 1 = 5$ ✓ — the line really does pass through $(3, 5)$.`,
      },
      {
        id: 'wle2-slope-point2',
        type: 'text' as const,
        content: `### Worked Example: slope $-3$ through $(2, 4)$

$$4 = -3(2) + b \\;\\Rightarrow\\; 4 = -6 + b \\;\\Rightarrow\\; b = 10$$

Equation: $y = -3x + 10$.

### Worked Example: slope $\\tfrac{1}{2}$ through $(4, 1)$

$$1 = \\tfrac{1}{2}(4) + b \\;\\Rightarrow\\; 1 = 2 + b \\;\\Rightarrow\\; b = -1$$

Equation: $y = \\tfrac{1}{2}x - 1$.

> 💡 **The pattern:** $b = y - mx$, using the point's coordinates. Once $b$ is found, just write $y = mx + b$.`,
      },
      {
        id: 'wle2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A line has slope $4$ and passes through $(1, 7)$. What is $b$?',
              options: ['$3$', '$7$', '$11$', '$-3$'],
              correctAnswer: 0,
              explanation: 'Substitute into $y = 4x + b$: $7 = 4(1) + b \\Rightarrow 7 = 4 + b \\Rightarrow b = 3$. The equation is $y = 4x + 3$.',
            },
            {
              question: 'Which equation has slope $-2$ and passes through $(0, 5)$?',
              options: ['$y = -2x + 5$', '$y = 5x - 2$', '$y = -2x - 5$', '$y = 2x + 5$'],
              correctAnswer: 0,
              explanation: 'The point $(0, 5)$ is itself the $y$-intercept, so $b = 5$. With slope $-2$, the equation is $y = -2x + 5$.',
            },
          ],
        },
      },
      {
        id: 'wle2-drill',
        type: 'input-boxes' as const,
        content: `**Find $b$, Then the Equation** 🧮

Each line's slope $m$ and a point are given. Find the $y$-intercept $b$.

**1)** $m = 3$, through $(2, 4) \\quad\\Rightarrow\\quad b = \\,?$
**2)** $m = -1$, through $(5, 2) \\quad\\Rightarrow\\quad b = \\,?$
**3)** $m = \\tfrac{1}{2}$, through $(6, 1) \\quad\\Rightarrow\\quad b = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '7', '-2'],
          hint1: 'Use $b = y - mx$ with the point you were given.',
          hint2: '1) $b = 4 - 3(2) = 4 - 6 = -2$.',
          hint3: '2) $b = 2 - (-1)(5) = 2 + 5 = 7$.  3) $b = 1 - \\tfrac{1}{2}(6) = 1 - 3 = -2$.',
          explanation: '1) $b = 4 - 6 = -2$ → $y = 3x - 2$.  2) $b = 2 + 5 = 7$ → $y = -x + 7$.  3) $b = 1 - 3 = -2$ → $y = \\tfrac{1}{2}x - 2$.',
        },
      },
      {
        id: 'wle2-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Equation** 🔽

A line has slope $5$ and passes through $(2, 7)$. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Start from slope-intercept form:', options: ['$y = 5x + b$', '$y = 2x + b$', '$y = 7x + b$', '$y = bx + 5$'] },
            { label: 'Substitute the point $(2, 7)$:', options: ['$7 = 5(2) + b$', '$2 = 5(7) + b$', '$5 = 7(2) + b$', '$7 = 2(5) + b$'] },
            { label: 'Solve for $b$:', options: ['$b = -3$', '$b = 3$', '$b = 17$', '$b = 10$'] },
            { label: 'Final equation:', options: ['$y = 5x - 3$', '$y = 5x + 3$', '$y = 2x + 7$', '$y = 5x + 17$'] },
          ],
          correctAnswers: ['$y = 5x + b$', '$7 = 5(2) + b$', '$b = -3$', '$y = 5x - 3$'],
          hint1: 'The slope is $5$, so begin with $y = 5x + b$.',
          hint2: 'Put the point in for $x$ and $y$: $x = 2$, $y = 7$, giving $7 = 5(2) + b$.',
          hint3: '$7 = 10 + b \\Rightarrow b = -3$, so the line is $y = 5x - 3$.',
          explanation: 'With $m = 5$: $7 = 5(2) + b \\Rightarrow 7 = 10 + b \\Rightarrow b = -3$. The equation is $y = 5x - 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'slope-intercept-form-algebra1',
    sections: [
      {
        id: 'wle3-intro',
        type: 'text' as const,
        content: `# 📈 Writing Linear Equations

**Part 3 of 5 — From Two Points & Point-Slope Form**

---

> 🔑 **Two points are enough.** Given any two points on a line, you can find the slope with the slope formula, and then you're back to the "slope and a point" case from Part 2.`,
      },
      {
        id: 'wle3-slope-formula',
        type: 'text' as const,
        content: `## The Slope Formula

For two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{change in } y}{\\text{change in } x}$$

### Worked Example: line through $(2, 3)$ and $(4, 9)$

$$m = \\frac{9 - 3}{4 - 2} = \\frac{6}{2} = 3$$

Now use slope $3$ with either point — say $(2, 3)$:

$$3 = 3(2) + b \\;\\Rightarrow\\; 3 = 6 + b \\;\\Rightarrow\\; b = -3$$

Equation: $y = 3x - 3$.

> ⚠️ **Subtract in the same order** top and bottom. $\\dfrac{y_2 - y_1}{x_2 - x_1}$ is fine, and so is $\\dfrac{y_1 - y_2}{x_1 - x_2}$ — but never mix the orders, or you'll flip the sign of the slope.`,
      },
      {
        id: 'wle3-slope-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the slope of the line through $(1, 2)$ and $(3, 8)$.',
              options: ['$3$', '$\\frac{1}{3}$', '$6$', '$-3$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{8 - 2}{3 - 1} = \\dfrac{6}{2} = 3$.',
            },
            {
              question: 'Find the slope of the line through $(-1, 4)$ and $(2, -5)$.',
              options: ['$-3$', '$3$', '$-\\frac{1}{3}$', '$9$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{-5 - 4}{2 - (-1)} = \\dfrac{-9}{3} = -3$. Be careful with the double negative in the denominator: $2 - (-1) = 3$.',
            },
          ],
        },
      },
      {
        id: 'wle3-slope-drill',
        type: 'input-boxes' as const,
        content: `**Slope from Two Points** 🧮

Use $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$. Enter each slope as an integer.

**1)** $(2, 5)$ and $(6, 13) \\quad\\Rightarrow\\quad m = \\,?$
**2)** $(-2, 7)$ and $(3, -3) \\quad\\Rightarrow\\quad m = \\,?$
**3)** $(0, -3)$ and $(4, 5) \\quad\\Rightarrow\\quad m = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '-2', '2'],
          hint1: 'Subtract the $y$-values for the top, the $x$-values for the bottom, in the same order.',
          hint2: '1) $\\dfrac{13 - 5}{6 - 2} = \\dfrac{8}{4} = 2$.',
          hint3: '2) $\\dfrac{-3 - 7}{3 - (-2)} = \\dfrac{-10}{5} = -2$.  3) $\\dfrac{5 - (-3)}{4 - 0} = \\dfrac{8}{4} = 2$.',
          explanation: '1) $m = \\dfrac{8}{4} = 2$.  2) $m = \\dfrac{-10}{5} = -2$.  3) $m = \\dfrac{8}{4} = 2$.',
        },
      },
      {
        id: 'wle3-point-slope',
        type: 'text' as const,
        content: `## Point-Slope Form

There's a shortcut that skips solving for $b$. The **point-slope form** uses a slope $m$ and any point $(x_1, y_1)$ directly:

$$y - y_1 = m(x - x_1)$$

### Worked Example: slope $4$ through $(1, 2)$

$$y - 2 = 4(x - 1)$$

To convert to slope-intercept form, distribute and isolate $y$:

$$y - 2 = 4x - 4 \\;\\Rightarrow\\; y = 4x - 2$$

> 💡 **Two valid routes to the same line.** Point-slope is fastest to *write down*; slope-intercept is best for *graphing and reading off $b$*. Distributing and solving for $y$ converts one into the other.`,
      },
      {
        id: 'wle3-convert-dropdown',
        type: 'dropdown-select' as const,
        content: `**Convert Point-Slope → Slope-Intercept** 🔽

Convert $y - 5 = -2(x - 3)$ to slope-intercept form.`,
        exercise: {
          dropdowns: [
            { label: 'Distribute the $-2$:', options: ['$y - 5 = -2x + 6$', '$y - 5 = -2x - 6$', '$y - 5 = -2x + 3$', '$y - 5 = 2x - 6$'] },
            { label: 'Add $5$ to both sides:', options: ['$y = -2x + 11$', '$y = -2x + 1$', '$y = -2x - 1$', '$y = 2x + 11$'] },
            { label: 'The slope of this line is:', options: ['$-2$', '$5$', '$3$', '$11$'] },
          ],
          correctAnswers: ['$y - 5 = -2x + 6$', '$y = -2x + 11$', '$-2$'],
          hint1: 'Distributing $-2$ across $(x - 3)$ gives $-2x + 6$ (note $-2 \\cdot -3 = +6$).',
          hint2: 'Add $5$ to both sides: $y = -2x + 6 + 5 = -2x + 11$.',
          hint3: 'In slope-intercept form $y = -2x + 11$, the slope is the coefficient of $x$, namely $-2$.',
          explanation: '$y - 5 = -2(x - 3) \\Rightarrow y - 5 = -2x + 6 \\Rightarrow y = -2x + 11$. Slope $= -2$, $y$-intercept $= 11$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'slope-intercept-form-algebra1',
    sections: [
      {
        id: 'wle4-intro',
        type: 'text' as const,
        content: `# 📈 Writing Linear Equations

**Part 4 of 5 — Special Lines, Standard Form & Modeling**

---

> 🔑 **Beyond the basics.** Horizontal and vertical lines, parallel and perpendicular lines, the standard form $Ax + By = C$, and real-world stories all reduce to the same skill: nail down $m$ and $b$.`,
      },
      {
        id: 'wle4-special',
        type: 'text' as const,
        content: `## Horizontal & Vertical Lines

| Line | Equation | Slope |
|------|----------|-------|
| **Horizontal** through $(3, 4)$ | $y = 4$ | $0$ |
| **Vertical** through $(3, 4)$ | $x = 3$ | undefined |

- A **horizontal** line has slope $0$: $y = mx + b$ becomes $y = b$. The $y$-value never changes.
- A **vertical** line has an **undefined** slope (run $= 0$ means dividing by zero). It is written $x = a$ and **cannot** be put in $y = mx + b$ form.

## Parallel & Perpendicular Lines

| Relationship | Slopes |
|--------------|--------|
| **Parallel** | equal: $m_1 = m_2$ |
| **Perpendicular** | negative reciprocals: $m_1 \\cdot m_2 = -1$ |

To get a **perpendicular** slope, flip the fraction and change the sign:

$$2 \\;\\to\\; -\\tfrac{1}{2}, \\qquad -3 \\;\\to\\; \\tfrac{1}{3}, \\qquad \\tfrac{3}{4} \\;\\to\\; -\\tfrac{4}{3}$$

> ⚠️ "Negative reciprocal" needs **both** moves: flip *and* negate. The reciprocal of $2$ is $\\tfrac{1}{2}$; negating gives $-\\tfrac{1}{2}$.`,
      },
      {
        id: 'wle4-special-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the equation of the horizontal line through $(-2, 6)$?',
              options: ['$y = 6$', '$x = -2$', '$y = -2$', '$x = 6$'],
              correctAnswer: 0,
              explanation: 'A horizontal line has the same $y$-value everywhere. Through $(-2, 6)$ that value is $6$, so the line is $y = 6$.',
            },
            {
              question: 'A line has slope $\\frac{3}{4}$. What is the slope of any line perpendicular to it?',
              options: ['$-\\frac{4}{3}$', '$\\frac{4}{3}$', '$-\\frac{3}{4}$', '$\\frac{3}{4}$'],
              correctAnswer: 0,
              explanation: 'Perpendicular slopes are negative reciprocals: flip $\\frac{3}{4}$ to $\\frac{4}{3}$, then negate to get $-\\frac{4}{3}$.',
            },
            {
              question: 'Which line is parallel to $y = -2x + 9$?',
              options: ['$y = -2x + 1$', '$y = 2x + 9$', '$y = \\frac{1}{2}x + 9$', '$y = -\\frac{1}{2}x + 1$'],
              correctAnswer: 0,
              explanation: 'Parallel lines have equal slopes. The given slope is $-2$, so $y = -2x + 1$ (any line with slope $-2$) is parallel.',
            },
          ],
        },
      },
      {
        id: 'wle4-standard',
        type: 'text' as const,
        content: `## Standard Form: \\(Ax + By = C\\)

Lines often appear as $Ax + By = C$. To find the slope and intercept, **solve for $y$**.

### Worked Example: $2x + 3y = 12$

$$3y = -2x + 12 \\;\\Rightarrow\\; y = -\\tfrac{2}{3}x + 4$$

So $m = -\\dfrac{2}{3}$ and $b = 4$.

### Worked Example: $4x - 2y = 6$

$$-2y = -4x + 6 \\;\\Rightarrow\\; y = 2x - 3$$

So $m = 2$ and $b = -3$ — remember dividing by the **negative** $-2$ flips the sign of every term.

> 💡 To go the other way (slope-intercept → standard), move the $x$-term to the left so $x$ and $y$ are on one side and the constant is on the other.`,
      },
      {
        id: 'wle4-standard-drill',
        type: 'input-boxes' as const,
        content: `**Convert Standard Form** 🧮

Solve each for $y$, then enter the slope $m$ and intercept $b$.

**1)** $x + y = 8 \\quad\\Rightarrow\\quad m = \\,?,\\ \\ b = \\,?$
**2)** $4x - 2y = 6 \\quad\\Rightarrow\\quad m = \\,?,\\ \\ b = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-1', '8', '2', '-3'],
          hint1: 'Get $y$ alone: move the $x$-term across, then divide by the coefficient of $y$.',
          hint2: '1) $y = -x + 8$, so $m = -1$ and $b = 8$.',
          hint3: '2) $-2y = -4x + 6$; divide by $-2$: $y = 2x - 3$, so $m = 2$, $b = -3$.',
          explanation: '1) $x + y = 8 \\Rightarrow y = -x + 8$: $m = -1$, $b = 8$.  2) $4x - 2y = 6 \\Rightarrow y = 2x - 3$: $m = 2$, $b = -3$.',
        },
      },
      {
        id: 'wle4-model',
        type: 'text' as const,
        content: `## Real-World Modeling

In a linear story, the **rate of change** is the slope and the **starting amount** is the $y$-intercept.

### Example: Gym Membership

A gym charges a \\$25 sign-up fee plus \\$15 per month. Total cost after $x$ months:

$$y = 15x + 25$$

- $b = 25$: the cost at month $0$ (the one-time fee).
- $m = 15$: the cost added each month.

After $6$ months: $y = 15(6) + 25 = 90 + 25 = 115$, giving \\$115.

> 💡 **Decode the words.** "Per," "each," and "every" signal the **slope**. A flat "fee," "deposit," or "starting" amount signals the **$y$-intercept**.`,
      },
      {
        id: 'wle4-model-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A taxi charges a $\\$3$ base fare plus $\\$2$ per mile. Which equation gives the cost $y$ for $x$ miles?',
              options: ['$y = 2x + 3$', '$y = 3x + 2$', '$y = 2x - 3$', '$y = 5x$'],
              correctAnswer: 0,
              explanation: 'The per-mile rate $\\$2$ is the slope and the flat base fare $\\$3$ is the $y$-intercept: $y = 2x + 3$.',
            },
            {
              question: 'Using $y = 2x + 3$, what is the cost of a $10$-mile taxi ride?',
              options: ['$\\$23$', '$\\$20$', '$\\$32$', '$\\$13$'],
              correctAnswer: 0,
              explanation: 'Substitute $x = 10$: $y = 2(10) + 3 = 20 + 3 = \\$23$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'slope-intercept-form-algebra1',
    sections: [
      {
        id: 'wle5-intro',
        type: 'text' as const,
        content: `# 📈 Writing Linear Equations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read slope and intercept from $y = mx + b$, (2) write a line from a slope and a point, (3) write a line from two points or point-slope form, and (4) handle special lines, standard form, and word problems. Time to put it together.`,
      },
      {
        id: 'wle5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read a line | $y = mx + b$: $m$ = slope, $b$ = $y$-intercept |
| Slope from two points | $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ |
| Find $b$ from a point | $b = y - mx$ |
| Point-slope form | $y - y_1 = m(x - x_1)$ |
| Standard $Ax + By = C$ | solve for $y$ to read $m$ and $b$ |
| Parallel slopes | equal |
| Perpendicular slopes | negative reciprocals ($m_1 m_2 = -1$) |

> ⚠️ Subtract coordinates in a **consistent order** for slope, distribute carefully in point-slope, and flip **and** negate for a perpendicular slope.`,
      },
      {
        id: 'wle5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Line through $(0, 4)$ and $(2, 0)$: enter $m$, then $b$.
**2)** Slope $-2$ through $(3, 1)$: enter $b$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '4', '7'],
          hint1: '1) $m = \\dfrac{0 - 4}{2 - 0} = \\dfrac{-4}{2} = -2$; the point $(0, 4)$ is the intercept, so $b = 4$.',
          hint2: '2) Use $b = y - mx = 1 - (-2)(3)$.',
          hint3: '2) $b = 1 - (-2)(3) = 1 + 6 = 7$, so the line is $y = -2x + 7$.',
          explanation: '1) $m = -2$ and $b = 4$ → $y = -2x + 4$.  2) $b = 1 + 6 = 7$ → $y = -2x + 7$.',
        },
      },
      {
        id: 'wle5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Write the equation of the line through $(-1, 5)$ and $(2, -1)$.',
              options: ['$y = -2x + 3$', '$y = 2x + 7$', '$y = -2x - 3$', '$y = -\\frac{1}{2}x + 3$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{-1 - 5}{2 - (-1)} = \\dfrac{-6}{3} = -2$. Then $b = 5 - (-2)(-1) = 5 - 2 = 3$, so $y = -2x + 3$.',
            },
            {
              question: 'A line is perpendicular to $y = 2x + 1$ and passes through $(4, 3)$. What is its equation?',
              options: ['$y = -\\frac{1}{2}x + 5$', '$y = 2x - 5$', '$y = -\\frac{1}{2}x + 3$', '$y = -2x + 11$'],
              correctAnswer: 0,
              explanation: 'Perpendicular slope $= -\\frac{1}{2}$. Then $b = 3 - (-\\frac{1}{2})(4) = 3 + 2 = 5$, giving $y = -\\frac{1}{2}x + 5$.',
            },
          ],
        },
      },
      {
        id: 'wle5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the $y$-intercept of $y = -7x + 2$?',
              options: ['$2$', '$-7$', '$-2$', '$7$'],
              correctAnswer: 0,
              explanation: 'In $y = mx + b$ the $y$-intercept is $b$, the constant term. Here $b = 2$, so the line crosses the $y$-axis at $(0, 2)$.',
            },
            {
              question: 'A line has slope $3$ and passes through $(2, 4)$. Its equation is:',
              options: ['$y = 3x - 2$', '$y = 3x + 2$', '$y = 3x + 4$', '$y = 2x + 3$'],
              correctAnswer: 0,
              explanation: '$b = y - mx = 4 - 3(2) = 4 - 6 = -2$, so the equation is $y = 3x - 2$.',
            },
            {
              question: 'Written in slope-intercept form, the line $2x + 3y = 12$ is:',
              options: ['$y = -\\frac{2}{3}x + 4$', '$y = \\frac{2}{3}x + 4$', '$y = -2x + 12$', '$y = -\\frac{2}{3}x + 12$'],
              correctAnswer: 0,
              explanation: 'Solve for $y$: $3y = -2x + 12 \\Rightarrow y = -\\frac{2}{3}x + 4$. So $m = -\\frac{2}{3}$ and $b = 4$.',
            },
          ],
        },
      },
    ],
  },
]
