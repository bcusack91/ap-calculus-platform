import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Graphing on the Coordinate Plane (Grade 5 Math).
 * Registry key: 'coordinate-plane-graphing-grade5' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). File lives in extra/, so the registry
 * import is '../registry'.
 *
 * Grade-5 aligned (CCSS 5.G.A.1 / 5.G.A.2): the first quadrant only — both
 * coordinates are non-negative whole numbers. No negative numbers are used.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-grade5',
    sections: [
      {
        id: 'cpg1-intro',
        type: 'text' as const,
        content: `# 📍 Graphing on the Coordinate Plane

**Part 1 of 5 — Meet the Coordinate Plane**

---

### Topics in This Part

| Section |
|---------|
| The Two Number Lines |
| The Origin and the Axes |
| Labeling a Grid |

> 🔑 **Key Concept:** A **coordinate plane** is just two number lines that cross. One goes across, one goes up — and together they let us name the exact location of any point with a pair of numbers.`,
      },
      {
        id: 'cpg1-axes',
        type: 'text' as const,
        content: `## The Two Number Lines

You already know a single number line — it counts $0, 1, 2, 3, \\dots$ from left to right. A coordinate plane uses **two** of them:

- The **$x$-axis** is the **horizontal** line (it runs left-to-right, like the horizon).
- The **$y$-axis** is the **vertical** line (it runs up-and-down, like a flagpole).

The point where they cross is called the **origin**. The origin is the "home base" — it sits at $0$ on *both* axes.

| Word | What it means | Direction |
|------|---------------|-----------|
| $x$-axis | horizontal number line | $\\leftrightarrow$ across |
| $y$-axis | vertical number line | $\\updownarrow$ up & down |
| Origin | where the axes meet | the point $(0, 0)$ |

> 💡 **Memory trick:** The letter **x** has a line you can lay *flat* — think "**x** is across." That leaves **y** for up.`,
      },
      {
        id: 'cpg1-checkaxes',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which axis runs left-to-right (horizontally)?',
              options: ['the $x$-axis', 'the $y$-axis', 'the origin', 'the grid line'],
              correctAnswer: 0,
              explanation: 'The $x$-axis is the horizontal number line — "$x$ is across." The $y$-axis is vertical.',
            },
            {
              question: 'What is the special name for the point where the two axes cross?',
              options: ['the corner', 'the center line', 'the origin', 'the zero-zero'],
              correctAnswer: 2,
              explanation: 'The point where the $x$-axis and $y$-axis meet is called the **origin**. It is located at $(0, 0)$.',
            },
          ],
        },
      },
      {
        id: 'cpg1-firstquadrant',
        type: 'text' as const,
        content: `## The First Quadrant

When the two axes cross, they make four corners, called **quadrants**. In Grade 5 we work in just **one** of them — the **first quadrant** — where both numbers are zero or bigger.

Picture a grid in the corner of a page:

\`\`\`
 y
 5 ·  ·  ·  ·  ·  ·
 4 ·  ·  ·  ·  ·  ·
 3 ·  ·  ·  ·  ·  ·
 2 ·  ·  ·  ·  ·  ·
 1 ·  ·  ·  ·  ·  ·
 0 ─────────────────  x
   0  1  2  3  4  5
\`\`\`

- The numbers along the **bottom** count across — that's the $x$-axis.
- The numbers up the **left side** count upward — that's the $y$-axis.
- The origin $(0,0)$ sits in the bottom-left corner.

> 🔑 **Key Idea:** Every spot where a grid line crossing-point lands can be named by **how far across** and **how far up** it is from the origin.`,
      },
      {
        id: 'cpg1-labeldrill',
        type: 'dropdown-select' as const,
        content: `**Label the Grid** 🔽

Use what you just learned to finish each sentence about the grid above.`,
        exercise: {
          dropdowns: [
            { label: 'The line that runs across the bottom is the', options: ['$x$-axis', '$y$-axis', 'origin'] },
            { label: 'The line that runs up the left side is the', options: ['$x$-axis', '$y$-axis', 'origin'] },
            { label: 'The bottom-left corner, at $0$ and $0$, is the', options: ['$x$-axis', '$y$-axis', 'origin'] },
          ],
          correctAnswers: ['$x$-axis', '$y$-axis', 'origin'],
          hint1: 'Across (horizontal) = $x$. "$x$ is across."',
          hint2: 'Up and down (vertical) = $y$.',
          hint3: 'The corner where both are $0$ is the origin, written $(0,0)$.',
          explanation: 'Across = $x$-axis, up = $y$-axis, and the meeting point at $(0,0)$ is the origin.',
        },
      },
      {
        id: 'cpg1-countdrill',
        type: 'input-boxes' as const,
        content: `**Count on the Axes** 🧮

Look again at the grid above.

**1)** The numbers along the bottom ($x$-axis) go from $0$ up to what biggest number shown?
**2)** Starting at the origin, how many units would you climb **up** to reach the top of the grid (the highest number on the $y$-axis)?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '5'],
          hint1: 'Read the row of numbers under the grid: $0, 1, 2, 3, 4, 5$. The biggest is the last one.',
          hint2: 'The $y$-axis on the left is labeled $0, 1, 2, 3, 4, 5$, so the top is $5$ units up.',
          hint3: 'Both axes are numbered $0$ through $5$, so each answer is $5$.',
          explanation: 'The $x$-axis runs $0$ to $5$ across, and the $y$-axis runs $0$ to $5$ up. The top of the grid is $5$ units above the origin.',
        },
      },
      {
        id: 'cpg1-wrap',
        type: 'text' as const,
        content: `## You've Got the Map

You now know the parts of the coordinate plane:

- **$x$-axis** — the horizontal line (across)
- **$y$-axis** — the vertical line (up)
- **Origin** — the crossing point at $(0, 0)$

In Part 2 we'll learn how to write a point's address using two numbers — an **ordered pair** — and how to put a dot exactly where it belongs.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-grade5',
    sections: [
      {
        id: 'cpg2-intro',
        type: 'text' as const,
        content: `# 📍 Graphing on the Coordinate Plane

**Part 2 of 5 — Ordered Pairs: An Address for Every Point**

---

> 🔑 **The Idea:** A point's location is written as an **ordered pair** $(x, y)$. The *order* matters — the first number is always **across**, the second is always **up**.`,
      },
      {
        id: 'cpg2-orderedpair',
        type: 'text' as const,
        content: `## What Is an Ordered Pair?

An **ordered pair** is two numbers inside parentheses, separated by a comma:

$$(x, y) \\quad\\Longrightarrow\\quad (\\,\\text{across},\\ \\text{up}\\,)$$

- The **first** number is the **$x$-coordinate** — how far to move **across** (right) from the origin.
- The **second** number is the **$y$-coordinate** — how far to move **up** from there.

> 💡 **Say it like a story:** "Start at the origin. **Walk across** $x$ steps, then **climb up** $y$ steps." That's exactly where the point lives.

### Example: Plot $(3, 2)$

1. Start at the origin $(0,0)$.
2. Walk **across** to $3$ on the $x$-axis.
3. Climb **up** $2$ units.
4. Put a dot. That dot is the point $(3, 2)$.`,
      },
      {
        id: 'cpg2-orderwarning',
        type: 'text' as const,
        content: `## Order Matters!

The point $(3, 2)$ is **not** the same as $(2, 3)$.

| Point | Across ($x$) | Up ($y$) | Where it lands |
|-------|--------------|----------|----------------|
| $(3, 2)$ | $3$ | $2$ | far right, a little up |
| $(2, 3)$ | $2$ | $3$ | a little right, higher up |

> ⚠️ **The #1 mistake** is swapping the numbers. Always read **$x$ first, then $y$** — across before up. Some students remember it as **"crawl before you climb."**`,
      },
      {
        id: 'cpg2-checkorder',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the ordered pair $(7, 4)$, what does the $7$ tell you to do?',
              options: ['climb up $7$ units', 'walk across $7$ units', 'go down $7$ units', 'count $7$ points'],
              correctAnswer: 1,
              explanation: 'The **first** number is the $x$-coordinate — how far to move **across** (right). So $7$ means walk $7$ units across.',
            },
            {
              question: 'Which statement is true?',
              options: ['$(5, 1)$ and $(1, 5)$ are the same point', '$(5, 1)$ means up $5$, across $1$', '$(5, 1)$ means across $5$, up $1$', 'The order of the numbers does not matter'],
              correctAnswer: 2,
              explanation: 'In $(5, 1)$ the first number is $x$ (across $5$) and the second is $y$ (up $1$). Order always matters, so $(5,1) \\ne (1,5)$.',
            },
          ],
        },
      },
      {
        id: 'cpg2-plotsteps',
        type: 'input-boxes' as const,
        content: `**Walk It Out** 🧮

Imagine plotting the point $(6, 3)$ by starting at the origin.

**1)** How many units do you move **across** (to the right)?
**2)** How many units do you then move **up**?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '3'],
          hint1: 'The first number in $(6, 3)$ is the $x$-coordinate — that is "across."',
          hint2: 'The second number, $3$, is the $y$-coordinate — that is "up."',
          hint3: 'Across $= x = 6$, then up $= y = 3$.',
          explanation: 'For $(6, 3)$: move across $6$, then up $3$. Across is always the first number; up is always the second.',
        },
      },
      {
        id: 'cpg2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Across or Up?** 🔽

For each ordered pair, choose what the **bold** number means.`,
        exercise: {
          dropdowns: [
            { label: 'In $(\\mathbf{8}, 2)$, the $8$ is the', options: ['across ($x$) value', 'up ($y$) value'] },
            { label: 'In $(4, \\mathbf{9})$, the $9$ is the', options: ['across ($x$) value', 'up ($y$) value'] },
            { label: 'In $(\\mathbf{0}, 5)$, the $0$ is the', options: ['across ($x$) value', 'up ($y$) value'] },
          ],
          correctAnswers: ['across ($x$) value', 'up ($y$) value', 'across ($x$) value'],
          hint1: 'The first number in the pair is always the across ($x$) value.',
          hint2: 'The second number is always the up ($y$) value.',
          hint3: 'In $(0, 5)$ the $0$ is first, so it is the across value — you move $0$ across and stay on the $y$-axis.',
          explanation: 'First number = across ($x$); second number = up ($y$). This is true no matter what the numbers are, even $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-grade5',
    sections: [
      {
        id: 'cpg3-intro',
        type: 'text' as const,
        content: `# 📍 Graphing on the Coordinate Plane

**Part 3 of 5 — Reading Points Off a Graph**

---

> 🔑 **Why it works:** Plotting *puts* a dot from a pair. Reading does the reverse — you *find* the pair from a dot by checking how far across and how far up it sits.`,
      },
      {
        id: 'cpg3-readsteps',
        type: 'text' as const,
        content: `## How to Read a Point

To name a point you see on the grid:

1. **Drop straight down** to the $x$-axis and read the number → that's your $x$-coordinate.
2. **Slide straight left** to the $y$-axis and read the number → that's your $y$-coordinate.
3. **Write the pair** as $(x, y)$.

### Worked Example

Here is a grid with three points labeled $A$, $B$, and $C$:

\`\`\`
 y
 5 ·  ·  ·  ·  ·  ·
 4 ·  ·  C  ·  ·  ·
 3 ·  ·  ·  ·  ·  ·
 2 ·  ·  ·  ·  B  ·
 1 ·  A  ·  ·  ·  ·
 0 ─────────────────  x
   0  1  2  3  4  5
\`\`\`

- **Point $A$:** drop down → $x = 1$; slide left → $y = 1$. So $A = (1, 1)$.
- **Point $B$:** drop down → $x = 4$; slide left → $y = 2$. So $B = (4, 2)$.
- **Point $C$:** drop down → $x = 2$; slide left → $y = 4$. So $C = (2, 4)$.

> ⚠️ **Watch out:** Points $B = (4, 2)$ and $C = (2, 4)$ use the same two digits but land in totally different spots — proof that order matters.`,
      },
      {
        id: 'cpg3-readcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯

Use the grid from the example above (points $A$, $B$, $C$).`,
        exercise: {
          questions: [
            {
              question: 'What are the coordinates of point $C$?',
              options: ['$(4, 2)$', '$(2, 4)$', '$(4, 4)$', '$(2, 2)$'],
              correctAnswer: 1,
              explanation: 'Point $C$ is $2$ across and $4$ up, so $C = (2, 4)$. The $x$-coordinate ($2$) comes first.',
            },
            {
              question: 'Which point has the same $x$- and $y$-coordinate (across equals up)?',
              options: ['point $A$', 'point $B$', 'point $C$', 'none of them'],
              correctAnswer: 0,
              explanation: 'Point $A = (1, 1)$: it is $1$ across and $1$ up, so its two coordinates are equal.',
            },
          ],
        },
      },
      {
        id: 'cpg3-readdrill',
        type: 'input-boxes' as const,
        content: `**Read the Coordinates** 🧮

A new point $D$ sits **5 across** and **3 up** from the origin.

**1)** What is the $x$-coordinate of $D$?
**2)** What is the $y$-coordinate of $D$?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '3'],
          hint1: 'The $x$-coordinate is how far **across** — the problem says $5$ across.',
          hint2: 'The $y$-coordinate is how far **up** — the problem says $3$ up.',
          hint3: 'Across $= x = 5$; up $= y = 3$. The point is $D = (5, 3)$.',
          explanation: 'Point $D$ is $5$ across and $3$ up, so $D = (5, 3)$: the $x$-coordinate is $5$ and the $y$-coordinate is $3$.',
        },
      },
      {
        id: 'cpg3-axespoints',
        type: 'text' as const,
        content: `## Points That Sit *On* an Axis

A coordinate can be **$0$**. When that happens, the point lands right on an axis:

| Point | Meaning | Where it sits |
|-------|---------|---------------|
| $(4, 0)$ | $4$ across, $0$ up | on the **$x$-axis** |
| $(0, 3)$ | $0$ across, $3$ up | on the **$y$-axis** |
| $(0, 0)$ | $0$ across, $0$ up | the **origin** |

> 💡 **Shortcut:** If the **$y$-coordinate is $0$**, you never climb up — so the point stays on the $x$-axis. If the **$x$-coordinate is $0$**, you never go across — so it stays on the $y$-axis.`,
      },
      {
        id: 'cpg3-axesdropdown',
        type: 'dropdown-select' as const,
        content: `**On Which Axis?** 🔽

Decide where each point lands.`,
        exercise: {
          dropdowns: [
            { label: 'The point $(6, 0)$ sits on the', options: ['$x$-axis', '$y$-axis', 'origin'] },
            { label: 'The point $(0, 7)$ sits on the', options: ['$x$-axis', '$y$-axis', 'origin'] },
            { label: 'The point $(0, 0)$ is the', options: ['$x$-axis', '$y$-axis', 'origin'] },
          ],
          correctAnswers: ['$x$-axis', '$y$-axis', 'origin'],
          hint1: 'If the up value ($y$) is $0$, the point never leaves the $x$-axis.',
          hint2: 'If the across value ($x$) is $0$, the point never leaves the $y$-axis.',
          hint3: 'When both are $0$, you stay at the home base: the origin.',
          explanation: '$(6,0)$ has $y=0$ → on the $x$-axis. $(0,7)$ has $x=0$ → on the $y$-axis. $(0,0)$ is the origin.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-grade5',
    sections: [
      {
        id: 'cpg4-intro',
        type: 'text' as const,
        content: `# 📍 Graphing on the Coordinate Plane

**Part 4 of 5 — Distances, Paths & Patterns**

---

> 🔑 **Big Payoff:** Once points have addresses, we can do *math* with them — measure how far apart two points are and spot patterns when points line up.`,
      },
      {
        id: 'cpg4-distance',
        type: 'text' as const,
        content: `## Distance Along a Grid Line

When two points share the **same $y$-coordinate**, they sit on the same horizontal line. To find the distance between them, **subtract their $x$-coordinates**.

### Example: Distance from $(2, 3)$ to $(7, 3)$

Both points are $3$ up, so they're on the same horizontal line. Subtract the across-values:

$$7 - 2 = 5 \\text{ units apart}$$

When two points share the **same $x$-coordinate**, they sit on the same vertical line. Then you **subtract their $y$-coordinates**.

### Example: Distance from $(4, 1)$ to $(4, 6)$

Both are $4$ across, so they're on the same vertical line. Subtract the up-values:

$$6 - 1 = 5 \\text{ units apart}$$

> 💡 **Rule of thumb:** Same up value? Subtract the *across* numbers. Same across value? Subtract the *up* numbers. Always take **bigger minus smaller** so the distance is positive.`,
      },
      {
        id: 'cpg4-distcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How far apart are the points $(1, 5)$ and $(9, 5)$?',
              options: ['$4$ units', '$8$ units', '$14$ units', '$5$ units'],
              correctAnswer: 1,
              explanation: 'Both points are $5$ up (same $y$), so subtract the across-values: $9 - 1 = 8$ units.',
            },
            {
              question: 'The points $(3, 2)$ and $(3, 8)$ are on the same vertical line. How far apart are they?',
              options: ['$6$ units', '$5$ units', '$11$ units', '$3$ units'],
              correctAnswer: 0,
              explanation: 'Both are $3$ across (same $x$), so subtract the up-values: $8 - 2 = 6$ units.',
            },
          ],
        },
      },
      {
        id: 'cpg4-distdrill',
        type: 'input-boxes' as const,
        content: `**Measure the Distance** 🧮

Find how many units apart each pair of points is.

**1)** $(2, 4)$ and $(2, 9)$ — they share the same $x$. Distance $= \\,?$
**2)** $(0, 6)$ and $(8, 6)$ — they share the same $y$. Distance $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '8'],
          hint1: 'Same $x$ means subtract the up ($y$) values: $9 - 4$.',
          hint2: 'Same $y$ means subtract the across ($x$) values: $8 - 0$.',
          hint3: 'Always do bigger minus smaller: $9-4=5$ and $8-0=8$.',
          explanation: '1) Same $x=2$, so $9 - 4 = 5$ units.  2) Same $y=6$, so $8 - 0 = 8$ units.',
        },
      },
      {
        id: 'cpg4-patterns',
        type: 'text' as const,
        content: `## Spotting a Pattern

Sometimes a list of ordered pairs follows a **rule**. Look at this set of points:

| Point | $x$ (across) | $y$ (up) |
|-------|--------------|----------|
| $(1, 2)$ | $1$ | $2$ |
| $(2, 4)$ | $2$ | $4$ |
| $(3, 6)$ | $3$ | $6$ |
| $(4, 8)$ | $4$ | $8$ |

Do you see it? In every pair, the **up value is double the across value**: $y = 2 \\times x$. If you plotted these points, they would all line up in a straight, slanting path.

> 🔑 **Key Idea:** A rule like "$y$ is double $x$" lets you find the next point without a picture. If $x = 5$, then $y = 2 \\times 5 = 10$, so the next point is $(5, 10)$.`,
      },
      {
        id: 'cpg4-patterndrop',
        type: 'dropdown-select' as const,
        content: `**Continue the Pattern** 🔽

A pattern follows the rule **"$y$ is $3$ more than $x$"** — that is, $y = x + 3$. Complete the table.`,
        exercise: {
          dropdowns: [
            { label: 'When $x = 1$, the point is', options: ['$(1, 4)$', '$(1, 3)$', '$(4, 1)$'] },
            { label: 'When $x = 5$, the point is', options: ['$(5, 2)$', '$(5, 15)$', '$(5, 8)$'] },
            { label: 'When $x = 10$, the point is', options: ['$(10, 13)$', '$(10, 7)$', '$(13, 10)$'] },
          ],
          correctAnswers: ['$(1, 4)$', '$(5, 8)$', '$(10, 13)$'],
          hint1: 'The rule is $y = x + 3$: take the across value and add $3$ to get the up value.',
          hint2: 'When $x = 5$, then $y = 5 + 3 = 8$, so the point is $(5, 8)$.',
          hint3: 'Keep $x$ first: when $x = 10$, $y = 10 + 3 = 13$, giving $(10, 13)$.',
          explanation: 'Add $3$ to each $x$ to get $y$: $1 \\to 4$, $5 \\to 8$, $10 \\to 13$. The $x$-value always stays first in the pair.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-grade5',
    sections: [
      {
        id: 'cpg5-intro',
        type: 'text' as const,
        content: `# 📍 Graphing on the Coordinate Plane

**Part 5 of 5 — Real-World Maps & Mastery Check**

---

You can now (1) name the parts of the plane, (2) write and plot ordered pairs, (3) read points off a grid, and (4) measure distances and find patterns. Let's use it all on a real map.`,
      },
      {
        id: 'cpg5-realworld',
        type: 'text' as const,
        content: `## A City Map on a Grid

Maps use coordinates all the time. Here is a tiny town where each block is one unit. The origin $(0,0)$ is the bus stop.

| Place | Coordinates | How to get there from the bus stop |
|-------|-------------|------------------------------------|
| 🏫 School | $(2, 5)$ | across $2$, up $5$ |
| 🏪 Store | $(6, 5)$ | across $6$, up $5$ |
| 🏠 Home | $(6, 1)$ | across $6$, up $1$ |
| 🌳 Park | $(2, 1)$ | across $2$, up $1$ |

Because School $(2,5)$ and Store $(6,5)$ share the same up-value ($5$), the distance between them is $6 - 2 = 4$ blocks. And Store $(6,5)$ to Home $(6,1)$ share the same across-value ($6$), so that distance is $5 - 1 = 4$ blocks.

> 💡 Notice the four places form a **square** — each side is $4$ blocks long. Coordinates let you measure a shape without ever leaving your chair.`,
      },
      {
        id: 'cpg5-realcheck',
        type: 'multiple-choice' as const,
        content: `**Map Practice** 🎯

Use the town map above.`,
        exercise: {
          questions: [
            {
              question: 'To walk from the bus stop $(0,0)$ to Home, what are the directions?',
              options: ['across $1$, up $6$', 'across $6$, up $1$', 'across $6$, up $6$', 'across $1$, up $1$'],
              correctAnswer: 1,
              explanation: 'Home is at $(6, 1)$. The first number is across ($6$) and the second is up ($1$): across $6$, then up $1$.',
            },
            {
              question: 'How many blocks is it from the Park $(2,1)$ straight up to the School $(2,5)$?',
              options: ['$2$ blocks', '$3$ blocks', '$4$ blocks', '$6$ blocks'],
              correctAnswer: 2,
              explanation: 'Both share the same across-value ($2$), so subtract the up-values: $5 - 1 = 4$ blocks.',
            },
          ],
        },
      },
      {
        id: 'cpg5-mixeddrill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** A point is $9$ across and $0$ up. Write its $x$-coordinate, then its $y$-coordinate. ($x = ?$, $y = ?$)
**2)** How far apart are $(3, 7)$ and $(3, 2)$? *(distance in units)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '0', '5'],
          hint1: 'Across is the $x$-coordinate ($9$); up is the $y$-coordinate ($0$).',
          hint2: 'A $y$-coordinate of $0$ means the point sits right on the $x$-axis.',
          hint3: 'For the distance, both points share $x = 3$, so subtract the up-values: $7 - 2 = 5$.',
          explanation: 'The point is $(9, 0)$, so $x=9$ and $y=0$. The distance between $(3,7)$ and $(3,2)$ is $7 - 2 = 5$ units.',
        },
      },
      {
        id: 'cpg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Name the lines | $x$-axis = across, $y$-axis = up |
| Read a pair $(x, y)$ | first number across, second number up |
| Plot a point | start at origin → across $x$ → up $y$ |
| Point on the $x$-axis | $y$-coordinate is $0$ |
| Point on the $y$-axis | $x$-coordinate is $0$ |
| Distance (same line) | bigger coordinate $-$ smaller coordinate |

> ⚠️ Remember the golden rule: **across before up** — always read and plot the $x$-coordinate first.`,
      },
      {
        id: 'cpg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'In the ordered pair $(8, 3)$, what does the second number, $3$, tell you?',
              options: ['move across $3$ units', 'move up $3$ units', 'the point is on the $x$-axis', 'add $3$ to the $x$-value'],
              correctAnswer: 1,
              explanation: 'The second number in $(x, y)$ is the $y$-coordinate — how far **up**. So $3$ means climb up $3$ units.',
            },
            {
              question: 'Which point lies exactly on the $y$-axis?',
              options: ['$(5, 0)$', '$(0, 4)$', '$(2, 2)$', '$(3, 6)$'],
              correctAnswer: 1,
              explanation: 'A point is on the $y$-axis when its $x$-coordinate (across) is $0$. Only $(0, 4)$ has $x = 0$.',
            },
            {
              question: 'How many units apart are the points $(2, 5)$ and $(8, 5)$?',
              options: ['$3$ units', '$6$ units', '$10$ units', '$13$ units'],
              correctAnswer: 1,
              explanation: 'Both points share the same up-value ($5$), so subtract the across-values: $8 - 2 = 6$ units.',
            },
          ],
        },
      },
    ],
  },
]
