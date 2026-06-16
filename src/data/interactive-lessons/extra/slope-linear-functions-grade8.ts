import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Slope and Linear Functions (Grade 8 Math,
 * CCSS 8.EE.B.5, 8.EE.B.6, 8.F.A.3, 8.F.B.4).
 * Registry key / DB Topic.slug: 'slope-linear-functions-grade8'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * slope as rate of change, the slope formula, slope-intercept form y = mx + b,
 * graphing lines, writing equations, and real-world linear models.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'slope-linear-functions-grade8',
    sections: [
      {
        id: 'slf1-intro',
        type: 'text' as const,
        content: `# 📈 Slope & Linear Functions

**Part 1 of 5 — What Slope Means**

---

### Topics in This Part

| Section |
|---------|
| Slope as Steepness |
| Rise Over Run |
| Positive, Negative, Zero & Undefined |

> 🔑 **Key Concept:** **Slope** measures how *steep* a line is — exactly how much it goes *up* (or *down*) every time you move one step to the *right*. A ramp, a staircase, and a hill all have slope.`,
      },
      {
        id: 'slf1-steepness',
        type: 'text' as const,
        content: `## Slope as Steepness

Picture walking up a wheelchair ramp. A **gentle** ramp barely rises — small slope. A **steep** ramp shoots up fast — big slope.

We measure slope as the ratio:

$$\\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{\\text{vertical change}}{\\text{horizontal change}}$$

- **Rise** = how far the line goes **up** (positive) or **down** (negative).
- **Run** = how far the line goes **to the right** (we always read left-to-right).

### Example

A ramp goes **up 2 feet** for every **8 feet** it stretches forward:

$$\\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{2}{8} = \\frac{1}{4}$$

> 💡 **Read it like a fraction.** A slope of $\\dfrac{1}{4}$ means: *go up 1 every time you go right 4.* The bigger the number, the steeper the line.`,
      },
      {
        id: 'slf1-rise-run-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A line rises 6 units for every 3 units it runs to the right. What is its slope?',
              options: ['$2$', '$\\frac{1}{2}$', '$3$', '$18$'],
              correctAnswer: 0,
              explanation: 'Slope $= \\dfrac{\\text{rise}}{\\text{run}} = \\dfrac{6}{3} = 2$. The line goes up 2 for every 1 to the right.',
            },
            {
              question: 'Which line is the STEEPEST?',
              options: ['slope $= 5$', 'slope $= 1$', 'slope $= \\frac{1}{3}$', 'slope $= \\frac{2}{5}$'],
              correctAnswer: 0,
              explanation: 'Steepness depends on how big the slope is (its distance from 0). $5$ is the largest, so that line climbs fastest.',
            },
          ],
        },
      },
      {
        id: 'slf1-signs',
        type: 'text' as const,
        content: `## Four Kinds of Slope

As you read a line from **left to right**, it can do one of four things:

| Line goes... | Slope is... | Example |
|--------------|-------------|---------|
| **uphill** ↗ | **positive** ($+$) | $m = 3$ |
| **downhill** ↘ | **negative** ($-$) | $m = -2$ |
| **flat** → | **zero** ($0$) | $m = 0$ |
| **straight up** ↑ | **undefined** | vertical line |

> ⚠️ A **horizontal** line has slope $0$ (no rise). A **vertical** line has an **undefined** slope (the run is $0$, and we can't divide by zero). Don't mix these two up!`,
      },
      {
        id: 'slf1-signs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Slope** 🔽

For each description, pick the kind of slope.`,
        exercise: {
          dropdowns: [
            { label: 'A line going downhill from left to right:', options: ['positive', 'negative', 'zero', 'undefined'] },
            { label: 'A perfectly horizontal (flat) line:', options: ['positive', 'negative', 'zero', 'undefined'] },
            { label: 'A perfectly vertical line:', options: ['positive', 'negative', 'zero', 'undefined'] },
            { label: 'A line going uphill from left to right:', options: ['positive', 'negative', 'zero', 'undefined'] },
          ],
          correctAnswers: ['negative', 'zero', 'undefined', 'positive'],
          hint1: 'Downhill = falling = negative; uphill = rising = positive.',
          hint2: 'A flat line never rises, so rise $= 0$ and slope $= 0$.',
          hint3: 'A vertical line has run $= 0$, and dividing by $0$ is undefined.',
          explanation: 'Downhill → negative, horizontal → zero, vertical → undefined, uphill → positive.',
        },
      },
      {
        id: 'slf1-rise-run-calc',
        type: 'text' as const,
        content: `## Counting Rise and Run

When a line is on a grid, you can find its slope by **counting boxes**: pick two points on the line, count how many squares you go **up or down** (rise), then how many you go **right** (run).

### Example

From one point to another, a line goes **up 3** and **right 4**:

$$\\text{slope} = \\frac{\\text{rise}}{\\text{run}} = \\frac{3}{4}$$

If instead it goes **down 3** and right 4, the rise is $-3$, so the slope is $-\\dfrac{3}{4}$.

> 💡 Going *down* counts as a **negative** rise. The run (right) is almost always positive because we read left-to-right.`,
      },
      {
        id: 'slf1-rise-run-drill',
        type: 'input-boxes' as const,
        content: `**Count It Out** 🧮

Find each slope as $\\dfrac{\\text{rise}}{\\text{run}}$. Enter a whole number or a fraction like $3/4$.

**1)** up $4$, right $2$ → slope $= \\,?$
**2)** down $5$, right $5$ → slope $= \\,?$
**3)** up $1$, right $3$ → slope $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '-1', '1/3'],
          hint1: 'Up $4$ over right $2$ is $\\dfrac{4}{2} = 2$.',
          hint2: 'Down $5$ means rise $= -5$, so $\\dfrac{-5}{5} = -1$.',
          hint3: 'Up $1$ over right $3$ is already in lowest terms: $\\dfrac{1}{3}$.',
          explanation: '1) $\\frac{4}{2} = 2$.  2) $\\frac{-5}{5} = -1$ (down = negative rise).  3) $\\frac{1}{3}$.',
        },
      },
      {
        id: 'slf1-close',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You now know what slope *is*: a number that captures steepness and direction, found as $\\dfrac{\\text{rise}}{\\text{run}}$.

In **Part 2** you'll learn the **slope formula** — a quick way to get the slope straight from two points, without ever drawing the picture.

> 🔑 **Remember:** rise is up/down, run is left/right, and we always read a line from left to right.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'slope-linear-functions-grade8',
    sections: [
      {
        id: 'slf2-intro',
        type: 'text' as const,
        content: `# 📈 Slope & Linear Functions

**Part 2 of 5 — The Slope Formula**

---

> 🔑 **The Idea:** Give me any **two points** on a line and I can find the slope with one formula — no graph needed.`,
      },
      {
        id: 'slf2-formula',
        type: 'text' as const,
        content: `## The Slope Formula

For two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{change in } y}{\\text{change in } x}$$

This is just *rise over run* in disguise: the top is how much $y$ changed (rise), the bottom is how much $x$ changed (run).

### Worked Example: $(1, 2)$ and $(4, 8)$

Label them: $x_1 = 1,\\ y_1 = 2,\\ x_2 = 4,\\ y_2 = 8$.

$$m = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{8 - 2}{4 - 1} = \\frac{6}{3} = 2$$

The slope is $2$.

> ⚠️ **Stay consistent!** Whatever point you call "second" for the $y$'s, use the *same* point's $x$ as "second." Mixing them up flips the sign.`,
      },
      {
        id: 'slf2-negative',
        type: 'text' as const,
        content: `### Worked Example with a Negative Slope: $(2, 5)$ and $(6, 1)$

$$m = \\frac{1 - 5}{6 - 2} = \\frac{-4}{4} = -1$$

The slope is $-1$ — the line goes **downhill**, falling 1 unit for every 1 to the right. That matches: as $x$ grew, $y$ shrank.

### A Subtraction Reminder

Watch out for negatives inside the formula. For $(-3, 4)$ and $(1, -2)$:

$$m = \\frac{-2 - 4}{1 - (-3)} = \\frac{-6}{1 + 3} = \\frac{-6}{4} = -\\frac{3}{2}$$

> 💡 $1 - (-3)$ becomes $1 + 3 = 4$. Subtracting a negative *adds*.`,
      },
      {
        id: 'slf2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the slope of the line through $(0, 1)$ and $(2, 7)$.',
              options: ['$3$', '$\\frac{1}{3}$', '$-3$', '$4$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{7 - 1}{2 - 0} = \\dfrac{6}{2} = 3$.',
            },
            {
              question: 'Find the slope of the line through $(1, 6)$ and $(5, 2)$.',
              options: ['$-1$', '$1$', '$-2$', '$2$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{2 - 6}{5 - 1} = \\dfrac{-4}{4} = -1$. Downhill line.',
            },
          ],
        },
      },
      {
        id: 'slf2-drill',
        type: 'input-boxes' as const,
        content: `**Use the Formula** 🧮

Find the slope through each pair of points. Enter a whole number or a fraction like $-3/2$.

**1)** $(2, 3)$ and $(5, 12)$ → $m = \\,?$
**2)** $(1, 8)$ and $(4, 2)$ → $m = \\,?$
**3)** $(-1, 2)$ and $(3, 4)$ → $m = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '-2', '1/2'],
          hint1: '$m = \\dfrac{12 - 3}{5 - 2} = \\dfrac{9}{3} = 3$.',
          hint2: '$m = \\dfrac{2 - 8}{4 - 1} = \\dfrac{-6}{3} = -2$.',
          hint3: '$m = \\dfrac{4 - 2}{3 - (-1)} = \\dfrac{2}{4} = \\dfrac{1}{2}$.',
          explanation: '1) $m = 3$.  2) $m = -2$.  3) $m = \\frac{1}{2}$. Always do $\\frac{y_2 - y_1}{x_2 - x_1}$ and simplify.',
        },
      },
      {
        id: 'slf2-special-dropdown',
        type: 'dropdown-select' as const,
        content: `**Horizontal & Vertical** 🔽

Use the formula to spot special lines.`,
        exercise: {
          dropdowns: [
            { label: 'Slope through $(2, 5)$ and $(7, 5)$:', options: ['$0$', 'undefined', '$5$', '$1$'] },
            { label: 'Slope through $(3, 1)$ and $(3, 9)$:', options: ['$0$', 'undefined', '$8$', '$3$'] },
          ],
          correctAnswers: ['$0$', 'undefined'],
          hint1: 'Same $y$-values → rise $= 0$ → slope $= 0$ (horizontal line).',
          hint2: 'Same $x$-values → run $= 0$ → dividing by $0$ is undefined (vertical line).',
          hint3: '$(2,5),(7,5)$: $\\frac{5-5}{7-2}=\\frac{0}{5}=0$. $(3,1),(3,9)$: $\\frac{9-1}{3-3}=\\frac{8}{0}$ undefined.',
          explanation: 'Equal $y$-values give slope $0$; equal $x$-values give an undefined slope.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'slope-linear-functions-grade8',
    sections: [
      {
        id: 'slf3-intro',
        type: 'text' as const,
        content: `# 📈 Slope & Linear Functions

**Part 3 of 5 — Slope-Intercept Form $y = mx + b$**

---

> 🔑 **The Power Form:** Every straight (non-vertical) line can be written as $y = mx + b$. Just by *looking* at it, you can read off the slope and where it crosses the $y$-axis.`,
      },
      {
        id: 'slf3-form',
        type: 'text' as const,
        content: `## Reading $y = mx + b$

$$y = \\underbrace{m}_{\\text{slope}}\\,x + \\underbrace{b}_{y\\text{-intercept}}$$

- **$m$** is the **slope** — the number multiplied by $x$.
- **$b$** is the **$y$-intercept** — the $y$-value where the line crosses the $y$-axis (this is the point $(0, b)$).

### Example: $y = 3x + 4$

- Slope $m = 3$ → up 3, right 1.
- $y$-intercept $b = 4$ → the line passes through $(0, 4)$.

### Example: $y = -\\dfrac{1}{2}x - 5$

- Slope $m = -\\dfrac{1}{2}$ → down 1, right 2.
- $y$-intercept $b = -5$ → passes through $(0, -5)$.

> 💡 **Watch the signs.** In $y = 2x - 7$, the $y$-intercept is $-7$, not $7$, because $y = 2x + (-7)$.`,
      },
      {
        id: 'slf3-read-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Equation** 🔽

Identify the slope and $y$-intercept of each line.`,
        exercise: {
          dropdowns: [
            { label: 'Slope of $y = 5x + 2$:', options: ['$5$', '$2$', '$-5$', '$\\frac{1}{5}$'] },
            { label: '$y$-intercept of $y = 5x + 2$:', options: ['$5$', '$2$', '$0$', '$-2$'] },
            { label: 'Slope of $y = -4x - 9$:', options: ['$-4$', '$4$', '$-9$', '$9$'] },
            { label: '$y$-intercept of $y = -4x - 9$:', options: ['$-9$', '$9$', '$-4$', '$4$'] },
          ],
          correctAnswers: ['$5$', '$2$', '$-4$', '$-9$'],
          hint1: 'The slope $m$ is the number multiplied by $x$.',
          hint2: 'The $y$-intercept $b$ is the constant added at the end.',
          hint3: 'In $y = -4x - 9$, rewrite as $y = -4x + (-9)$, so $m = -4$ and $b = -9$.',
          explanation: '$y = 5x + 2$: $m = 5$, $b = 2$.  $y = -4x - 9$: $m = -4$, $b = -9$.',
        },
      },
      {
        id: 'slf3-rearrange',
        type: 'text' as const,
        content: `## When It's Not Already Solved for $y$

Sometimes a line is written like $2x + y = 10$. To read the slope and intercept, **solve for $y$ first**.

### Example: $2x + y = 10$

Subtract $2x$ from both sides:

$$y = -2x + 10$$

Now it's clear: slope $m = -2$, $y$-intercept $b = 10$.

### Example: $4x + 2y = 6$

Subtract $4x$: $\\;2y = -4x + 6$. Then divide every term by $2$:

$$y = -2x + 3$$

So $m = -2$ and $b = 3$.

> ⚠️ **Divide *every* term.** When you divide $2y = -4x + 6$ by $2$, all three pieces get divided: $y = -2x + 3$.`,
      },
      {
        id: 'slf3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rewrite $3x + y = 7$ in slope-intercept form.',
              options: ['$y = -3x + 7$', '$y = 3x + 7$', '$y = -3x - 7$', '$y = 7x + 3$'],
              correctAnswer: 0,
              explanation: 'Subtract $3x$ from both sides: $y = -3x + 7$. Slope $-3$, intercept $7$.',
            },
            {
              question: 'What is the $y$-intercept of $y = -x + 8$?',
              options: ['$8$', '$-1$', '$-8$', '$1$'],
              correctAnswer: 0,
              explanation: 'The constant is $+8$, so the line crosses the $y$-axis at $(0, 8)$. (The slope is $-1$.)',
            },
          ],
        },
      },
      {
        id: 'slf3-drill',
        type: 'input-boxes' as const,
        content: `**Slope & Intercept** 🧮

Rewrite in $y = mx + b$ form if needed, then enter the values.

**1)** $y = 6x - 11$.  Slope $m = \\,?$
**2)** Same line: $y$-intercept $b = \\,?$
**3)** Solve $x + y = 4$ for $y$, then give the slope $m = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '-11', '-1'],
          hint1: 'In $y = 6x - 11$, the number times $x$ is $6$.',
          hint2: '$y = 6x + (-11)$, so $b = -11$.',
          hint3: '$x + y = 4 \\Rightarrow y = -x + 4 \\Rightarrow y = -1x + 4$, so $m = -1$.',
          explanation: '1) $m = 6$.  2) $b = -11$.  3) $y = -x + 4$, so $m = -1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'slope-linear-functions-grade8',
    sections: [
      {
        id: 'slf4-intro',
        type: 'text' as const,
        content: `# 📈 Slope & Linear Functions

**Part 4 of 5 — Graphing Lines & Writing Equations**

---

> 🔑 **Two Skills, One Form:** With $y = mx + b$ you can **draw** any line from its equation, and **write** the equation of any line you can see.`,
      },
      {
        id: 'slf4-graphing',
        type: 'text' as const,
        content: `## Graphing from $y = mx + b$

There's a simple recipe:

1. **Plot $b$** — put a point at $(0, b)$ on the $y$-axis.
2. **Use the slope** as $\\dfrac{\\text{rise}}{\\text{run}}$ to step to a second point.
3. **Connect** the points with a straight line.

### Example: $y = 2x + 1$

1. $b = 1$ → start at $(0, 1)$.
2. $m = 2 = \\dfrac{2}{1}$ → from $(0,1)$ go **up 2, right 1** to $(1, 3)$.
3. Draw the line through $(0,1)$ and $(1,3)$.

### Example: $y = -\\dfrac{2}{3}x + 4$

1. $b = 4$ → start at $(0, 4)$.
2. $m = -\\dfrac{2}{3}$ → go **down 2, right 3** to $(3, 2)$.

> 💡 A **negative** slope like $-\\dfrac{2}{3}$ means *down* 2 and *right* 3 (or, equally, up 2 and left 3). Either way, the line falls.`,
      },
      {
        id: 'slf4-point-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Starting at the $y$-intercept of $y = 4x - 3$, where is the next point if you use the slope once?',
              options: ['$(1, 1)$', '$(1, 7)$', '$(0, 1)$', '$(4, 1)$'],
              correctAnswer: 0,
              explanation: 'Start at $(0, -3)$. Slope $4 = \\frac{4}{1}$: up 4, right 1 → $(1, -3 + 4) = (1, 1)$.',
            },
            {
              question: 'Does the point $(2, 5)$ lie on the line $y = 2x + 1$?',
              options: ['Yes', 'No', 'Only if $x = 0$', 'Cannot tell'],
              correctAnswer: 0,
              explanation: 'Plug in $x = 2$: $y = 2(2) + 1 = 5$. Since $y = 5$ matches, the point is on the line.',
            },
          ],
        },
      },
      {
        id: 'slf4-writing',
        type: 'text' as const,
        content: `## Writing an Equation from a Graph (or Two Points)

To build $y = mx + b$, you need **two things**: the slope $m$ and the intercept $b$.

### Example: a line through $(0, 2)$ and $(3, 8)$

1. **Slope:** $m = \\dfrac{8 - 2}{3 - 0} = \\dfrac{6}{3} = 2$.
2. **Intercept:** one point is $(0, 2)$, so $b = 2$ (it's already on the $y$-axis).
3. **Equation:** $y = 2x + 2$.

### Example: line through $(1, 5)$ with slope $3$

The intercept isn't given, so find $b$ by plugging the point into $y = mx + b$:

$$5 = 3(1) + b \\;\\Rightarrow\\; 5 = 3 + b \\;\\Rightarrow\\; b = 2$$

So the equation is $y = 3x + 2$.

> 🔑 **The trick:** once you know $m$, plug *any* point's $(x, y)$ into $y = mx + b$ and solve for $b$.`,
      },
      {
        id: 'slf4-write-drill',
        type: 'input-boxes' as const,
        content: `**Write the Equation** 🧮

Find the slope and intercept, then report them.

**1)** Line through $(0, -4)$ and $(2, 6)$.  Slope $m = \\,?$
**2)** Same line: $y$-intercept $b = \\,?$
**3)** Line with slope $4$ passing through $(1, 9)$.  Find $b = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '-4', '5'],
          hint1: '$m = \\dfrac{6 - (-4)}{2 - 0} = \\dfrac{10}{2} = 5$.',
          hint2: 'One point is $(0, -4)$, which is on the $y$-axis, so $b = -4$.',
          hint3: 'Plug into $y = mx + b$: $9 = 4(1) + b \\Rightarrow 9 = 4 + b \\Rightarrow b = 5$.',
          explanation: '1) $m = 5$.  2) $b = -4$ (equation $y = 5x - 4$).  3) $9 = 4 + b$, so $b = 5$.',
        },
      },
      {
        id: 'slf4-build-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Line** 🔽

A line has slope $-2$ and passes through $(0, 3)$.`,
        exercise: {
          dropdowns: [
            { label: 'The $y$-intercept $b$ is:', options: ['$3$', '$-2$', '$0$', '$-3$'] },
            { label: 'The full equation is:', options: ['$y = -2x + 3$', '$y = 3x - 2$', '$y = -2x - 3$', '$y = 2x + 3$'] },
            { label: 'From $(0,3)$, the slope steps you to:', options: ['$(1, 1)$', '$(1, 5)$', '$(1, 3)$', '$(2, 3)$'] },
          ],
          correctAnswers: ['$3$', '$y = -2x + 3$', '$(1, 1)$'],
          hint1: 'The point $(0, 3)$ is on the $y$-axis, so $b = 3$.',
          hint2: 'With $m = -2$ and $b = 3$, the equation is $y = -2x + 3$.',
          hint3: 'Slope $-2 = \\frac{-2}{1}$: down 2, right 1 from $(0,3)$ → $(1, 1)$.',
          explanation: '$b = 3$, equation $y = -2x + 3$; one slope step gives $(1, 1)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'slope-linear-functions-grade8',
    sections: [
      {
        id: 'slf5-intro',
        type: 'text' as const,
        content: `# 📈 Slope & Linear Functions

**Part 5 of 5 — Real-World Models & Mastery Check**

---

The best part: linear functions describe **real life**. Pay-per-job, phone plans, savings, distance traveled — anything that changes at a *steady rate* is linear.`,
      },
      {
        id: 'slf5-realworld',
        type: 'text' as const,
        content: `## Slope = Rate, Intercept = Starting Amount

In a real-world line $y = mx + b$:

- **$m$ (slope)** is the **rate of change** — "per" something: dollars *per* hour, miles *per* gallon.
- **$b$ (intercept)** is the **starting value** — the amount when $x = 0$.

### Example: a Plumber's Bill

A plumber charges a \\$50 service fee plus \\$30 per hour. The cost $y$ for $x$ hours is:

$$y = 30x + 50$$

- Slope $30$ → it costs **\\$30 more per hour**.
- Intercept $50$ → even for $0$ hours, the bill starts at **\\$50** (the fee).

For a 4-hour job: $y = 30(4) + 50 = 120 + 50 = \\$170$.

> 💡 The words tell you the equation: a fixed start is the **intercept**; a "per-unit" cost is the **slope**.`,
      },
      {
        id: 'slf5-realworld-dropdown',
        type: 'dropdown-select' as const,
        content: `**Translate the Story** 🔽

A gym charges a \\$20 sign-up fee plus \\$15 each month. Let $y$ be the total cost after $x$ months.`,
        exercise: {
          dropdowns: [
            { label: 'The slope (rate) is:', options: ['$15$', '$20$', '$35$', '$5$'] },
            { label: 'The $y$-intercept (start) is:', options: ['$20$', '$15$', '$0$', '$35$'] },
            { label: 'The equation is:', options: ['$y = 15x + 20$', '$y = 20x + 15$', '$y = 35x$', '$y = 15x - 20$'] },
          ],
          correctAnswers: ['$15$', '$20$', '$y = 15x + 20$'],
          hint1: 'The "per month" charge is the rate, so it is the slope.',
          hint2: 'The one-time sign-up fee happens at $x = 0$ months, so it is the intercept.',
          hint3: 'Rate $\\$15$/month is the slope; the $\\$20$ fee is the intercept: $y = 15x + 20$.',
          explanation: 'Slope $= 15$ (per month), intercept $= 20$ (sign-up fee): $y = 15x + 20$.',
        },
      },
      {
        id: 'slf5-realworld-drill',
        type: 'input-boxes' as const,
        content: `**Use the Model** 🧮

A taxi charges \\$3 to start plus \\$2 per mile: $y = 2x + 3$, where $x$ is miles and $y$ is dollars.

**1)** What does a 5-mile ride cost? $\\,?$  *(dollars)*
**2)** What does a 10-mile ride cost? $\\,?$  *(dollars)*
**3)** If a ride cost \\$15, how many miles was it? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '23', '6'],
          hint1: '$y = 2(5) + 3 = 10 + 3 = 13$.',
          hint2: '$y = 2(10) + 3 = 20 + 3 = 23$.',
          hint3: 'Set $15 = 2x + 3 \\Rightarrow 12 = 2x \\Rightarrow x = 6$ miles.',
          explanation: '1) \\$13.  2) \\$23.  3) $15 = 2x + 3 \\Rightarrow x = 6$ miles.',
        },
      },
      {
        id: 'slf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Slope from a picture | $\\dfrac{\\text{rise}}{\\text{run}}$ (up/down over left/right) |
| Slope from two points | $m = \\dfrac{y_2 - y_1}{x_2 - x_1}$ |
| Read $y = mx + b$ | $m$ = slope, $b$ = $y$-intercept $(0, b)$ |
| Graph a line | plot $b$, then step by the slope |
| Write a line | find $m$, plug a point into $y = mx + b$ for $b$ |
| Real-world | slope = rate, intercept = starting amount |

> ⚠️ **Top traps:** keep your two points in the same order in the slope formula, watch the sign of $b$, and remember horizontal lines have slope $0$ while vertical lines are undefined.`,
      },
      {
        id: 'slf5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the slope of the line through $(-2, 1)$ and $(2, 9)$.',
              options: ['$2$', '$-2$', '$\\frac{1}{2}$', '$4$'],
              correctAnswer: 0,
              explanation: '$m = \\dfrac{9 - 1}{2 - (-2)} = \\dfrac{8}{4} = 2$.',
            },
            {
              question: 'A line has slope $-3$ and passes through $(0, 7)$. Its equation is:',
              options: ['$y = -3x + 7$', '$y = 7x - 3$', '$y = -3x - 7$', '$y = 3x + 7$'],
              correctAnswer: 0,
              explanation: 'Slope $m = -3$, intercept $b = 7$ (the point is on the $y$-axis): $y = -3x + 7$.',
            },
          ],
        },
      },
      {
        id: 'slf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the slope of the line $y = -\\frac{1}{4}x + 6$?',
              options: ['$-\\frac{1}{4}$', '$6$', '$\\frac{1}{4}$', '$-6$'],
              correctAnswer: 0,
              explanation: 'In $y = mx + b$, the slope is the coefficient of $x$, which is $-\\frac{1}{4}$. (The intercept is $6$.)',
            },
            {
              question: 'A horizontal line has a slope of:',
              options: ['$0$', 'undefined', '$1$', 'any positive number'],
              correctAnswer: 0,
              explanation: 'A horizontal line never rises, so rise $= 0$ and slope $= \\frac{0}{\\text{run}} = 0$.',
            },
            {
              question: 'A candle is 12 cm tall and burns down 2 cm per hour: $y = -2x + 12$. How tall is it after 3 hours?',
              options: ['$6$ cm', '$8$ cm', '$10$ cm', '$4$ cm'],
              correctAnswer: 0,
              explanation: '$y = -2(3) + 12 = -6 + 12 = 6$ cm. The slope $-2$ means it shrinks 2 cm each hour.',
            },
          ],
        },
      },
    ],
  },
]
