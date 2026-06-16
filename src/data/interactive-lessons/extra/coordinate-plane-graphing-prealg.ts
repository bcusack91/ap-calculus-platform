import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — The Coordinate Plane and Graphing (Pre-Algebra).
 * Registry key / DB Topic.slug: 'coordinate-plane-graphing-prealg'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Pre-Algebra:
 * axes & origin, ordered pairs (x, y), the four quadrants, points on the axes,
 * plotting & reading points, distance on a grid, reflections across the axes, and
 * graphing a table of values. LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-prealg',
    sections: [
      {
        id: 'cpg1-intro',
        type: 'text' as const,
        content: `# 📍 The Coordinate Plane and Graphing

**Part 1 of 5 — Building the Plane: Axes, Origin & Ordered Pairs**

---

### Topics in This Part

| Section |
|---------|
| The Two Number Lines |
| The Origin and the Axes |
| Ordered Pairs $(x, y)$ |
| Reading the Address of a Point |

> 🔑 **Key Concept:** The **coordinate plane** is just two number lines crossing at right angles. Every point on it has a unique "address" written as an **ordered pair** $(x, y)$ — and the order matters.`,
      },
      {
        id: 'cpg1-axes',
        type: 'text' as const,
        content: `## The Two Number Lines

A single number line lets you locate one number. To locate a *position* in 2-D space, we need **two** number lines:

- The **$x$-axis** runs **horizontally** (left–right). Right is positive, left is negative.
- The **$y$-axis** runs **vertically** (up–down). Up is positive, down is negative.

They cross at a single point called the **origin**, written $(0, 0)$.

| Axis | Direction | Positive way | Negative way |
|------|-----------|--------------|--------------|
| $x$-axis | horizontal | right $\\rightarrow$ | $\\leftarrow$ left |
| $y$-axis | vertical | up $\\uparrow$ | $\\downarrow$ down |

> 💡 **Memory tip:** "$x$ is a cross" — the $x$-axis goes a-**cross** the page. Whatever is left runs up and down.`,
      },
      {
        id: 'cpg1-axes-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement about the coordinate plane is correct?',
              options: [
                'The $x$-axis is horizontal and the $y$-axis is vertical.',
                'The $x$-axis is vertical and the $y$-axis is horizontal.',
                'Both axes run left to right.',
                'The axes never meet.',
              ],
              correctAnswer: 0,
              explanation: 'The $x$-axis runs across (horizontal) and the $y$-axis runs up and down (vertical). They cross at the origin.',
            },
            {
              question: 'What are the coordinates of the origin?',
              options: ['$(0, 0)$', '$(1, 1)$', '$(0, 1)$', 'There is no fixed point.'],
              correctAnswer: 0,
              explanation: 'The origin is where the two axes cross — zero units right and zero units up — so its address is $(0, 0)$.',
            },
          ],
        },
      },
      {
        id: 'cpg1-ordered-pairs',
        type: 'text' as const,
        content: `## Ordered Pairs: $(x, y)$

A point's address is an **ordered pair**. The word *ordered* is the whole point — you always list the numbers in the same order:

$$(\\,\\underbrace{x}_{\\text{across first}},\\ \\underbrace{y}_{\\text{up second}}\\,)$$

1. The **first** number is the **$x$-coordinate** — how far to move **left/right** from the origin.
2. The **second** number is the **$y$-coordinate** — how far to move **up/down**.

> ⚠️ **Order matters!** $(3, 5)$ and $(5, 3)$ are **different** points. $(3, 5)$ means 3 right, 5 up; $(5, 3)$ means 5 right, 3 up.

> 💡 **Memory tip:** Go in the front **door** ($x$, across) *before* you go **up** the stairs ($y$). Across, then up — always in alphabetical order, $x$ before $y$.`,
      },
      {
        id: 'cpg1-address-drill',
        type: 'dropdown-select' as const,
        content: `**Read the Movement** 🔽

For the point $(-4, 6)$, describe how to travel from the origin.`,
        exercise: {
          dropdowns: [
            { label: 'The $x$-coordinate is $-4$, so move:', options: ['4 units left', '4 units right', '4 units up', '4 units down'] },
            { label: 'The $y$-coordinate is $6$, so move:', options: ['6 units up', '6 units down', '6 units left', '6 units right'] },
            { label: 'Which coordinate is listed first?', options: ['the $x$-coordinate', 'the $y$-coordinate', 'the larger one', 'the positive one'] },
          ],
          correctAnswers: ['4 units left', '6 units up', 'the $x$-coordinate'],
          hint1: 'A negative $x$-coordinate means move left; a positive one means move right.',
          hint2: 'A positive $y$-coordinate means move up.',
          hint3: 'In $(x, y)$ the $x$-coordinate (across) is always listed first.',
          explanation: 'From the origin: $x=-4$ → 4 left; $y=6$ → 6 up. The $x$-coordinate is always first in $(x, y)$.',
        },
      },
      {
        id: 'cpg1-coord-input',
        type: 'input-boxes' as const,
        content: `**Name That Coordinate** 🧮

Use the point $P = (-7, 2)$.

**1)** What is the $x$-coordinate of $P$?
**2)** What is the $y$-coordinate of $P$?
**3)** From the origin, how many units do you move *up* to reach $P$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-7', '2', '2'],
          hint1: 'The $x$-coordinate is the first number in $(x, y)$.',
          hint2: 'The $y$-coordinate is the second number in $(x, y)$.',
          hint3: 'A $y$-coordinate of $2$ means moving 2 units up from the origin.',
          explanation: 'In $(-7, 2)$: the $x$-coordinate is $-7$, the $y$-coordinate is $2$, and you move $2$ units up. (The $-7$ tells you to go 7 left.)',
        },
      },
      {
        id: 'cpg1-wrap',
        type: 'text' as const,
        content: `## Putting It Together

You now know the parts of the plane and how to read an address:

- Two axes ($x$ across, $y$ up) crossing at the **origin** $(0,0)$.
- Every point is an **ordered pair** $(x, y)$ — **across first, up second**.

> 🔑 **Takeaway:** A point is a set of *directions* from the origin. In Part 2 you'll follow those directions to actually **plot** points on a grid.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-prealg',
    sections: [
      {
        id: 'cpg2-intro',
        type: 'text' as const,
        content: `# 📍 The Coordinate Plane and Graphing

**Part 2 of 5 — Plotting and Reading Points**

---

> 🔑 **The Skill:** Plotting is following directions. Start at the **origin**, walk left/right by the $x$-value, then up/down by the $y$-value, and mark the spot.`,
      },
      {
        id: 'cpg2-how-to-plot',
        type: 'text' as const,
        content: `## How to Plot a Point

To plot the point $(x, y)$:

1. **Start at the origin** $(0, 0)$.
2. **Move horizontally** by the $x$-value: right if positive, left if negative.
3. **Move vertically** by the $y$-value: up if positive, down if negative.
4. **Mark a dot** where you land.

### Worked Example: Plot $(4, 3)$

Start at $(0,0)$. The $x$-value is $+4$, so move **4 right**. The $y$-value is $+3$, so move **3 up**. The dot lands 4 to the right and 3 above the origin.

### Worked Example: Plot $(-2, 5)$

Start at $(0,0)$. The $x$-value is $-2$, so move **2 left**. The $y$-value is $+5$, so move **5 up**.

> 💡 Always read the $x$-value first — even though it feels natural to go up first, the *across* move comes first.`,
      },
      {
        id: 'cpg2-plot-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To plot $(5, -3)$, which moves do you make from the origin?',
              options: [
                '5 right, then 3 down',
                '5 up, then 3 left',
                '3 right, then 5 down',
                '5 left, then 3 up',
              ],
              correctAnswer: 0,
              explanation: '$x = 5$ (positive) → 5 right. $y = -3$ (negative) → 3 down. Across first, then up/down.',
            },
            {
              question: 'A point is plotted 6 units left and 1 unit up from the origin. Its coordinates are:',
              options: ['$(-6, 1)$', '$(6, 1)$', '$(1, -6)$', '$(-6, -1)$'],
              correctAnswer: 0,
              explanation: '6 left means $x = -6$; 1 up means $y = 1$. Written across-first: $(-6, 1)$.',
            },
          ],
        },
      },
      {
        id: 'cpg2-reading',
        type: 'text' as const,
        content: `## Reading a Plotted Point

Reading is plotting in reverse. Given a dot on the grid, ask two questions:

1. **How far left or right of the origin is it?** That number (with sign) is the $x$-coordinate.
2. **How far up or down is it?** That number (with sign) is the $y$-coordinate.

### Worked Example

A dot sits **3 units to the right** and **4 units below** the origin.

- Right $3$ → $x = 3$
- Below $4$ → $y = -4$

So the point is $(3, -4)$.

> ⚠️ **Watch the sign on "down" and "left."** Down and left are **negative**; up and right are **positive**. Forgetting a sign is the #1 plotting error.`,
      },
      {
        id: 'cpg2-read-dropdown',
        type: 'dropdown-select' as const,
        content: `**Find Each Address** 🔽

A point lies **5 units left** of the origin and **2 units down**.`,
        exercise: {
          dropdowns: [
            { label: 'Its $x$-coordinate is:', options: ['$-5$', '$5$', '$-2$', '$2$'] },
            { label: 'Its $y$-coordinate is:', options: ['$-2$', '$2$', '$-5$', '$5$'] },
            { label: 'Written as an ordered pair:', options: ['$(-5, -2)$', '$(-2, -5)$', '$(5, 2)$', '$(-5, 2)$'] },
          ],
          correctAnswers: ['$-5$', '$-2$', '$(-5, -2)$'],
          hint1: 'Left of the origin means the $x$-coordinate is negative.',
          hint2: 'Down from the origin means the $y$-coordinate is negative.',
          hint3: 'Write the $x$-coordinate first: $(-5, -2)$.',
          explanation: '5 left → $x = -5$; 2 down → $y = -2$. Across-first gives $(-5, -2)$.',
        },
      },
      {
        id: 'cpg2-plot-input',
        type: 'input-boxes' as const,
        content: `**Plotting Moves** 🧮

Answer each as a signed number (use a minus sign for left or down).

**1)** To plot $(-8, 0)$, how many units do you move horizontally? (Negative = left.)
**2)** To plot $(0, -5)$, how many units do you move vertically? (Negative = down.)
**3)** A dot is 9 units right and 4 units up. What is its $x$-coordinate?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-8', '-5', '9'],
          hint1: 'The horizontal move equals the $x$-value, $-8$ (8 to the left).',
          hint2: 'The vertical move equals the $y$-value, $-5$ (5 down).',
          hint3: '9 units right is positive, so the $x$-coordinate is $9$.',
          explanation: '1) Move $-8$ (8 left).  2) Move $-5$ (5 down).  3) $x = 9$. Right and up are positive; left and down are negative.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-prealg',
    sections: [
      {
        id: 'cpg3-intro',
        type: 'text' as const,
        content: `# 📍 The Coordinate Plane and Graphing

**Part 3 of 5 — The Four Quadrants & Points on the Axes**

---

> 🔑 **The Map:** The two axes split the plane into **four regions** called **quadrants**. Knowing the sign pattern of each quadrant lets you locate a point *before* you even plot it.`,
      },
      {
        id: 'cpg3-quadrants',
        type: 'text' as const,
        content: `## The Four Quadrants

The quadrants are numbered with **Roman numerals**, starting in the **top right** and going **counter-clockwise**.

| Quadrant | Location | $x$ sign | $y$ sign | Example point |
|----------|----------|----------|----------|---------------|
| **I** | top right | $+$ | $+$ | $(3, 5)$ |
| **II** | top left | $-$ | $+$ | $(-3, 5)$ |
| **III** | bottom left | $-$ | $-$ | $(-3, -5)$ |
| **IV** | bottom right | $+$ | $-$ | $(3, -5)$ |

> 🔑 **The pattern:** Start at Quadrant I (both positive) and spin counter-clockwise. The signs go $(+,+) \\to (-,+) \\to (-,-) \\to (+,-)$.

> 💡 **Memory tip:** "$x$ tells the column, $y$ tells the row." If $x$ is negative you're on the **left**; if $y$ is negative you're on the **bottom**.`,
      },
      {
        id: 'cpg3-quad-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In which quadrant is the point $(-6, -2)$?',
              options: ['Quadrant III', 'Quadrant I', 'Quadrant II', 'Quadrant IV'],
              correctAnswer: 0,
              explanation: 'Both coordinates are negative $(-,-)$, which is the bottom-left region: **Quadrant III**.',
            },
            {
              question: 'A point has a positive $x$-coordinate and a negative $y$-coordinate. Where is it?',
              options: ['Quadrant IV', 'Quadrant I', 'Quadrant II', 'Quadrant III'],
              correctAnswer: 0,
              explanation: 'Sign pattern $(+, -)$ is the bottom-right region: **Quadrant IV**.',
            },
            {
              question: 'Which point lies in Quadrant II?',
              options: ['$(-4, 9)$', '$(4, 9)$', '$(-4, -9)$', '$(4, -9)$'],
              correctAnswer: 0,
              explanation: 'Quadrant II is top-left, sign pattern $(-, +)$. Only $(-4, 9)$ fits: negative $x$, positive $y$.',
            },
          ],
        },
      },
      {
        id: 'cpg3-on-axes',
        type: 'text' as const,
        content: `## Points *on* the Axes (the Special Cases)

If a point lies **on** an axis, it is **not** in any quadrant. There's a simple rule based on which coordinate is **zero**:

| If… | The point lies on… |
|-----|--------------------|
| $y = 0$, e.g. $(7, 0)$ | the **$x$-axis** |
| $x = 0$, e.g. $(0, -4)$ | the **$y$-axis** |
| $x = 0$ **and** $y = 0$ | the **origin** $(0,0)$ |

**Why?** A $y$-coordinate of $0$ means "don't move up or down," so you stay on the horizontal $x$-axis. An $x$-coordinate of $0$ means "don't move left or right," so you stay on the vertical $y$-axis.

> ⚠️ **Common trap:** $(0, -4)$ has a *zero $x$*, so it's on the **$y$-axis** — even though the $y$-axis is named for $y$. Look at the coordinate that is **zero**, then go to the **other** axis.`,
      },
      {
        id: 'cpg3-axes-dropdown',
        type: 'dropdown-select' as const,
        content: `**Quadrant or Axis?** 🔽

Classify each point.`,
        exercise: {
          dropdowns: [
            { label: '$(0, 8)$ lies on the:', options: ['$y$-axis', '$x$-axis', 'Quadrant I', 'origin'] },
            { label: '$(-5, 0)$ lies on the:', options: ['$x$-axis', '$y$-axis', 'Quadrant II', 'origin'] },
            { label: '$(2, -7)$ is in:', options: ['Quadrant IV', 'Quadrant I', 'Quadrant III', '$x$-axis'] },
          ],
          correctAnswers: ['$y$-axis', '$x$-axis', 'Quadrant IV'],
          hint1: '$(0, 8)$ has $x = 0$, so it sits on the vertical $y$-axis.',
          hint2: '$(-5, 0)$ has $y = 0$, so it sits on the horizontal $x$-axis.',
          hint3: '$(2, -7)$ has signs $(+, -)$ — bottom-right, Quadrant IV.',
          explanation: 'Zero $x$ → $y$-axis. Zero $y$ → $x$-axis. Signs $(+,-)$ → Quadrant IV. The zero coordinate always points to the *other* axis.',
        },
      },
      {
        id: 'cpg3-quad-input',
        type: 'input-boxes' as const,
        content: `**Quadrant Numbers** 🧮

Enter the quadrant number (1, 2, 3, or 4) for each point. If the point is on an axis, enter **0**.

**1)** $(9, 4)$
**2)** $(-1, -8)$
**3)** $(0, 3)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1', '3', '0'],
          hint1: '$(9, 4)$ is $(+, +)$ — top right.',
          hint2: '$(-1, -8)$ is $(-, -)$ — bottom left.',
          hint3: '$(0, 3)$ has $x = 0$, so it is on the $y$-axis (not a quadrant) → enter $0$.',
          explanation: '1) $(+,+)$ → Quadrant 1.  2) $(-,-)$ → Quadrant 3.  3) $x=0$ → on the $y$-axis, so enter $0$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-prealg',
    sections: [
      {
        id: 'cpg4-intro',
        type: 'text' as const,
        content: `# 📍 The Coordinate Plane and Graphing

**Part 4 of 5 — Distance, Reflections & Graphing a Table**

---

> 🔑 **Putting the Plane to Work:** Now that you can place points, you can *measure* between them, *flip* them across the axes, and *graph* a rule from a table.`,
      },
      {
        id: 'cpg4-distance',
        type: 'text' as const,
        content: `## Distance Along a Grid Line

When two points share the **same $x$** (a vertical line) or the **same $y$** (a horizontal line), the distance between them is just the gap between the *other* coordinates. Count the squares — or subtract.

### Horizontal distance (same $y$)

$\\text{distance} = $ difference of the **$x$-coordinates**.

**Example:** From $(2, 3)$ to $(9, 3)$: both have $y = 3$, so $9 - 2 = 7$ units apart.

### Vertical distance (same $x$)

$\\text{distance} = $ difference of the **$y$-coordinates**.

**Example:** From $(-4, 1)$ to $(-4, 6)$: both have $x = -4$, so $6 - 1 = 5$ units apart.

> 💡 **Crossing zero?** From $(-3, 5)$ to $(4, 5)$ the distance is $4 - (-3) = 7$. Subtracting a negative *adds*. You can also just count: 3 squares to the origin, plus 4 more = 7.

> ⚠️ Distance is always **positive**. If subtraction gives a negative, take its absolute value: $\\lvert x_2 - x_1 \\rvert$.`,
      },
      {
        id: 'cpg4-distance-input',
        type: 'input-boxes' as const,
        content: `**Measure the Gap** 🧮

Each pair of points shares an axis-line. Enter the distance between them (a positive number).

**1)** $(1, 7)$ and $(1, 2)$
**2)** $(-6, 4)$ and $(3, 4)$
**3)** $(0, -2)$ and $(0, 5)$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '9', '7'],
          hint1: 'Same $x = 1$: subtract the $y$-coordinates, $7 - 2$.',
          hint2: 'Same $y = 4$: subtract the $x$-coordinates, $3 - (-6)$.',
          hint3: 'Same $x = 0$: subtract the $y$-coordinates, $5 - (-2)$.',
          explanation: '1) $\\lvert 7-2 \\rvert = 5$.  2) $\\lvert 3-(-6) \\rvert = 9$.  3) $\\lvert 5-(-2) \\rvert = 7$. Subtracting a negative adds.',
        },
      },
      {
        id: 'cpg4-reflections',
        type: 'text' as const,
        content: `## Reflections Across the Axes

A **reflection** flips a point to the opposite side of an axis, like a mirror image. There are two simple rules:

| Reflect across… | What changes | Rule |
|-----------------|--------------|------|
| the **$x$-axis** | $y$ flips sign | $(x, y) \\to (x, -y)$ |
| the **$y$-axis** | $x$ flips sign | $(x, y) \\to (-x, y)$ |

### Worked Example

Reflect $(3, 5)$ across the **$x$-axis**: only $y$ flips → $(3, -5)$.

Reflect $(3, 5)$ across the **$y$-axis**: only $x$ flips → $(-3, 5)$.

> 💡 **Why?** A mirror on the $x$-axis (horizontal mirror) flips *up/down*, which is the $y$-value. A mirror on the $y$-axis (vertical mirror) flips *left/right*, which is the $x$-value. **The axis you flip across is the coordinate that stays the same.**`,
      },
      {
        id: 'cpg4-reflect-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Reflect $(-2, 6)$ across the $x$-axis. The image is:',
              options: ['$(-2, -6)$', '$(2, 6)$', '$(2, -6)$', '$(-2, 6)$'],
              correctAnswer: 0,
              explanation: 'Reflecting across the $x$-axis flips only the $y$-coordinate: $(-2, 6) \\to (-2, -6)$.',
            },
            {
              question: 'A point is reflected across the $y$-axis and becomes $(7, -1)$. What was the original point?',
              options: ['$(-7, -1)$', '$(7, 1)$', '$(-7, 1)$', '$(7, -1)$'],
              correctAnswer: 0,
              explanation: 'Reflecting across the $y$-axis flips the $x$-coordinate, so the original $x$ was $-7$. The $y$ is unchanged: $(-7, -1)$.',
            },
          ],
        },
      },
      {
        id: 'cpg4-table',
        type: 'text' as const,
        content: `## Graphing a Table of Values

A rule like $y = x + 2$ pairs each input $x$ with an output $y$. Make a small **table**, turn each row into an ordered pair, and plot the points.

### Worked Example: $y = x + 2$

| $x$ | $y = x + 2$ | Point $(x, y)$ |
|-----|-------------|----------------|
| $-1$ | $-1 + 2 = 1$ | $(-1, 1)$ |
| $0$ | $0 + 2 = 2$ | $(0, 2)$ |
| $1$ | $1 + 2 = 3$ | $(1, 3)$ |
| $2$ | $2 + 2 = 4$ | $(2, 4)$ |

Plot $(-1,1), (0,2), (1,3), (2,4)$ — they fall in a perfectly straight line. Connecting them graphs the rule.

> 🔑 **Big idea:** A graph is a *picture of a rule*. Every point on the line is an $(x, y)$ pair that makes the equation true.`,
      },
      {
        id: 'cpg4-table-dropdown',
        type: 'dropdown-select' as const,
        content: `**Complete the Table** 🔽

Fill in the missing outputs and a point for the rule $y = 2x - 1$.`,
        exercise: {
          dropdowns: [
            { label: 'When $x = 0$, $y =$', options: ['$-1$', '$0$', '$1$', '$2$'] },
            { label: 'When $x = 3$, $y =$', options: ['$5$', '$6$', '$7$', '$2$'] },
            { label: 'When $x = -2$, the point is:', options: ['$(-2, -5)$', '$(-2, -3)$', '$(-2, 3)$', '$(-2, 5)$'] },
          ],
          correctAnswers: ['$-1$', '$5$', '$(-2, -5)$'],
          hint1: '$y = 2(0) - 1 = -1$.',
          hint2: '$y = 2(3) - 1 = 6 - 1 = 5$.',
          hint3: '$y = 2(-2) - 1 = -4 - 1 = -5$, so the point is $(-2, -5)$.',
          explanation: 'Substitute each $x$ into $y = 2x - 1$: $x=0 \\to -1$; $x=3 \\to 5$; $x=-2 \\to -5$, giving $(-2, -5)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'coordinate-plane-graphing-prealg',
    sections: [
      {
        id: 'cpg5-intro',
        type: 'text' as const,
        content: `# 📍 The Coordinate Plane and Graphing

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read and write ordered pairs, (2) plot and read points, (3) name quadrants and axis points, and (4) measure distance, reflect points, and graph a table. Let's tie it all together.`,
      },
      {
        id: 'cpg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read an address | $(x, y)$ = across first, up second |
| Find the quadrant | $(+,+)$=I, $(-,+)$=II, $(-,-)$=III, $(+,-)$=IV |
| On the $x$-axis? | the point has $y = 0$ |
| On the $y$-axis? | the point has $x = 0$ |
| Distance on a grid line | $\\lvert x_2 - x_1 \\rvert$ or $\\lvert y_2 - y_1 \\rvert$ |
| Reflect over $x$-axis | $(x, y) \\to (x, -y)$ |
| Reflect over $y$-axis | $(x, y) \\to (-x, y)$ |
| Graph a rule | make a table → plot $(x, y)$ pairs |

> ⚠️ **Top three traps:** (1) writing $y$ before $x$; (2) wrong sign for "left" or "down"; (3) thinking a point with a zero coordinate is in a quadrant — it's on an *axis*.`,
      },
      {
        id: 'cpg5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The point $(0, -9)$ lies:',
              options: ['on the $y$-axis', 'on the $x$-axis', 'in Quadrant III', 'in Quadrant IV'],
              correctAnswer: 0,
              explanation: 'Its $x$-coordinate is $0$, so it stays on the vertical $y$-axis (9 units below the origin).',
            },
            {
              question: 'How far apart are $(-3, 4)$ and $(5, 4)$?',
              options: ['8 units', '2 units', '9 units', '1 unit'],
              correctAnswer: 0,
              explanation: 'Same $y = 4$, so the distance is $\\lvert 5 - (-3) \\rvert = \\lvert 8 \\rvert = 8$ units.',
            },
            {
              question: 'Reflect $(6, -2)$ across the $y$-axis. The image is:',
              options: ['$(-6, -2)$', '$(6, 2)$', '$(-6, 2)$', '$(2, -6)$'],
              correctAnswer: 0,
              explanation: 'Reflecting across the $y$-axis flips only the $x$-coordinate: $(6, -2) \\to (-6, -2)$.',
            },
          ],
        },
      },
      {
        id: 'cpg5-mixed-input',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

**1)** For the rule $y = 3x + 1$, what is $y$ when $x = 4$?
**2)** What is the distance between $(2, -5)$ and $(2, 6)$?
**3)** In which quadrant is $(-8, 7)$? (Enter 1, 2, 3, or 4.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['13', '11', '2'],
          hint1: '$y = 3(4) + 1 = 12 + 1$.',
          hint2: 'Same $x = 2$: distance $= \\lvert 6 - (-5) \\rvert$.',
          hint3: '$(-8, 7)$ has signs $(-, +)$ — top-left.',
          explanation: '1) $y = 3(4)+1 = 13$.  2) $\\lvert 6-(-5) \\rvert = 11$.  3) $(-,+)$ → Quadrant 2.',
        },
      },
      {
        id: 'cpg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which ordered pair describes a point 4 units left and 7 units up from the origin?',
              options: ['$(-4, 7)$', '$(4, 7)$', '$(7, -4)$', '$(-4, -7)$'],
              correctAnswer: 0,
              explanation: '4 left → $x = -4$; 7 up → $y = 7$. Across-first gives $(-4, 7)$.',
            },
            {
              question: 'Reflecting the point $(5, 3)$ across the $x$-axis gives:',
              options: ['$(5, -3)$', '$(-5, 3)$', '$(-5, -3)$', '$(3, 5)$'],
              correctAnswer: 0,
              explanation: 'Reflection across the $x$-axis flips only the $y$-coordinate: $(5, 3) \\to (5, -3)$.',
            },
            {
              question: 'A point has a negative $x$-coordinate and a positive $y$-coordinate. It is in:',
              options: ['Quadrant II', 'Quadrant I', 'Quadrant III', 'Quadrant IV'],
              correctAnswer: 0,
              explanation: 'Sign pattern $(-, +)$ is the top-left region: **Quadrant II**.',
            },
          ],
        },
      },
    ],
  },
]
