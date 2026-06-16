import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Translations and Reflections (Grade 8 Math, CCSS 8.G.A.1–3).
 * Registry key / DB Topic.slug: 'translations-reflections'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * the coordinate plane, translation rules, reflections over the axes and y = x,
 * composing the two rigid motions, and reasoning about congruence. Sections
 * alternate teaching with interactive checks. LaTeX uses doubled backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'translations-reflections',
    sections: [
      {
        id: 'tr1-intro',
        type: 'text' as const,
        content: `# 🔷 Translations and Reflections

**Part 1 of 5 — Sliding Figures: Translations**

---

### Topics in This Part

| Section |
|---------|
| What Is a Transformation? |
| The Translation Rule $(x, y) \\to (x + a,\\ y + b)$ |
| Translating Whole Figures |

> 🔑 **Key Concept:** A **translation** slides every point of a figure the *same distance* in the *same direction* — no turning, no flipping. The figure that comes out is identical in size and shape to the one that went in.`,
      },
      {
        id: 'tr1-vocab',
        type: 'text' as const,
        content: `## What Is a Transformation?

A **transformation** takes a figure and moves it to a new position on the coordinate plane.

- The original figure is the **pre-image**.
- The moved figure is the **image**.
- We label image points with a **prime** symbol: point $A$ moves to $A'$ (read "A prime").

A **rigid motion** (also called an *isometry*) is a transformation that keeps the figure the **same size and same shape** — it just relocates it. Translations and reflections are both rigid motions.

| Transformation | What it does | Size & shape |
|----------------|--------------|--------------|
| **Translation** | slides | unchanged |
| **Reflection** | flips over a line | unchanged |
| Dilation | resizes | **changes** |

> 💡 Because translations and reflections never change size or shape, the pre-image and image are always **congruent** ($\\cong$). We'll come back to this big idea in Part 5.`,
      },
      {
        id: 'tr1-mc-vocab',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A translation slides a figure. Which is true of the image?',
              options: [
                'It is the same size and shape as the pre-image',
                'It is larger than the pre-image',
                'It is flipped compared to the pre-image',
                'It is rotated a quarter turn',
              ],
              correctAnswer: 0,
              explanation: 'A translation is a rigid motion: it only slides the figure, so the image is congruent — same size, same shape, same orientation.',
            },
            {
              question: 'In a transformation, the moved figure (the result) is called the:',
              options: ['image', 'pre-image', 'dilation', 'axis'],
              correctAnswer: 0,
              explanation: 'The original is the pre-image; the result is the image, whose points get a prime symbol like $A\'$.',
            },
          ],
        },
      },
      {
        id: 'tr1-rule',
        type: 'text' as const,
        content: `## The Translation Rule

To translate a point, add a fixed amount to each coordinate:

$$(x,\\ y) \\;\\longrightarrow\\; (x + a,\\ y + b)$$

- $a$ controls **horizontal** motion: $+a$ moves **right**, $-a$ moves **left**.
- $b$ controls **vertical** motion: $+b$ moves **up**, $-b$ moves **down**.

### Example: translate $A(2, 3)$ right $4$ and up $1$

Right $4$ means $a = +4$; up $1$ means $b = +1$:

$$A(2,\\ 3) \\;\\longrightarrow\\; A'(2 + 4,\\ 3 + 1) = A'(6,\\ 4)$$

### Example: translate $B(-1, 5)$ left $3$ and down $2$

Left $3$ means $a = -3$; down $2$ means $b = -2$:

$$B(-1,\\ 5) \\;\\longrightarrow\\; B'(-1 - 3,\\ 5 - 2) = B'(-4,\\ 3)$$

> ⚠️ **Watch the signs.** "Left" and "down" are the *negative* directions. Mixing them up is the #1 translation error.`,
      },
      {
        id: 'tr1-input',
        type: 'input-boxes' as const,
        content: `**Translate the Point** 🧮

Apply each translation and enter the new coordinates.

**1)** Translate $(4, 1)$ right $2$, up $3$. New $x = \\,?$ and new $y = \\,?$
**2)** Translate $(-5, 6)$ left $4$, down $6$. New $x = \\,?$ and new $y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['6', '4', '-9', '0'],
          hint1: 'Right/up add; left/down subtract.',
          hint2: '1) $4 + 2 = 6$ and $1 + 3 = 4$.',
          hint3: '2) $-5 - 4 = -9$ and $6 - 6 = 0$.',
          explanation: '1) $(4, 1) \\to (6, 4)$.  2) $(-5, 6) \\to (-9, 0)$. Add for right/up, subtract for left/down.',
        },
      },
      {
        id: 'tr1-figure',
        type: 'text' as const,
        content: `## Translating a Whole Figure

To translate a *figure*, apply the **same rule to every vertex**, then connect the new points in the same order.

### Example: translate triangle $ABC$ by $(x, y) \\to (x + 3,\\ y - 2)$

| Vertex | Pre-image | Rule | Image |
|--------|-----------|------|-------|
| $A$ | $(1, 4)$ | $(1+3,\\ 4-2)$ | $A'(4, 2)$ |
| $B$ | $(5, 4)$ | $(5+3,\\ 4-2)$ | $B'(8, 2)$ |
| $C$ | $(1, 1)$ | $(1+3,\\ 1-2)$ | $C'(4, -1)$ |

Every vertex moves right $3$ and down $2$, so the whole triangle slides as one solid piece.

> 🔑 **Key Idea:** Side lengths and angles never change under a translation, so $\\triangle ABC \\cong \\triangle A'B'C'$. You only ever need to move the **vertices** — the sides follow.`,
      },
      {
        id: 'tr1-mc-apply',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Translate $P(3, -2)$ by the rule $(x, y) \\to (x + 5,\\ y + 4)$. Where is $P\'$?',
              options: ['$(8, 2)$', '$(-2, 2)$', '$(8, -6)$', '$(2, 8)$'],
              correctAnswer: 0,
              explanation: '$x: 3 + 5 = 8$ and $y: -2 + 4 = 2$, so $P\'(8, 2)$.',
            },
            {
              question: 'Vertex $A(1, 4)$ of a triangle is translated to $A\'(4, 2)$. To translate the rest of the triangle, the other vertices must move:',
              options: [
                'right $3$ and down $2$ as well',
                'only the vertex $A$ moves',
                'right $3$ and up $2$',
                'by a different rule for each vertex',
              ],
              correctAnswer: 0,
              explanation: 'A translation applies the *same* rule to every vertex. From $(1,4)$ to $(4,2)$ is $x+3$ and $y-2$, so all vertices move right $3$, down $2$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'translations-reflections',
    sections: [
      {
        id: 'tr2-intro',
        type: 'text' as const,
        content: `# 🔷 Translations and Reflections

**Part 2 of 5 — Flipping Figures: Reflections Over the Axes**

---

> 🔑 **The Idea:** A **reflection** flips a figure over a line called the **line of reflection**, producing a *mirror image*. Each point and its image are the **same distance** from that line, on opposite sides.`,
      },
      {
        id: 'tr2-axes',
        type: 'text' as const,
        content: `## Reflecting Over the $x$-axis and $y$-axis

The two most common mirror lines are the axes. Each has a simple coordinate rule.

### Over the $x$-axis (the horizontal axis)

$$(x,\\ y) \\;\\longrightarrow\\; (x,\\ -y)$$

The $x$-coordinate stays put; the **sign of $y$ flips**. The figure flips *up–down*.

### Over the $y$-axis (the vertical axis)

$$(x,\\ y) \\;\\longrightarrow\\; (-x,\\ y)$$

The $y$-coordinate stays put; the **sign of $x$ flips**. The figure flips *left–right*.

| Reflect over | Rule | What flips |
|--------------|------|------------|
| $x$-axis | $(x, y) \\to (x, -y)$ | sign of $y$ |
| $y$-axis | $(x, y) \\to (-x, y)$ | sign of $x$ |

> 💡 **Memory hook:** Reflect over the $x$-axis → the $x$ stays the *same*; reflect over the $y$-axis → the $y$ stays the *same*. The *other* coordinate gets negated.`,
      },
      {
        id: 'tr2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Image** 🔽

Choose the image of each point under the given reflection.`,
        exercise: {
          dropdowns: [
            { label: '$(6, 2)$ over the $x$-axis:', options: ['$(6, -2)$', '$(-6, 2)$', '$(-6, -2)$', '$(2, 6)$'] },
            { label: '$(6, 2)$ over the $y$-axis:', options: ['$(-6, 2)$', '$(6, -2)$', '$(-6, -2)$', '$(2, 6)$'] },
            { label: '$(-4, -7)$ over the $x$-axis:', options: ['$(-4, 7)$', '$(4, -7)$', '$(4, 7)$', '$(-7, -4)$'] },
          ],
          correctAnswers: ['$(6, -2)$', '$(-6, 2)$', '$(-4, 7)$'],
          hint1: 'Over the $x$-axis: keep $x$, flip the sign of $y$.',
          hint2: 'Over the $y$-axis: flip the sign of $x$, keep $y$.',
          hint3: 'For $(-4, -7)$ over the $x$-axis, $-7$ becomes $+7$: $(-4, 7)$.',
          explanation: 'Over the $x$-axis $(x, y) \\to (x, -y)$; over the $y$-axis $(x, y) \\to (-x, y)$. Only the named-axis coordinate is left alone.',
        },
      },
      {
        id: 'tr2-worked',
        type: 'text' as const,
        content: `### Worked Example: reflect $A(3, 5)$ over the $x$-axis

Keep $x$, negate $y$:

$$A(3,\\ 5) \\;\\longrightarrow\\; A'(3,\\ -5)$$

$A$ is $5$ units above the $x$-axis; $A'$ is $5$ units below it — same distance, opposite side. ✓

### Worked Example: reflect $B(-2, 4)$ over the $y$-axis

Negate $x$, keep $y$:

$$B(-2,\\ 4) \\;\\longrightarrow\\; B'(2,\\ 4)$$

$B$ is $2$ units left of the $y$-axis; $B'$ is $2$ units right of it. ✓

> ⚠️ A point **on** the mirror line does not move. For example, $(0, 7)$ reflected over the $y$-axis stays at $(0, 7)$ because $-0 = 0$.`,
      },
      {
        id: 'tr2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A point and its reflection over a line are always:',
              options: [
                'the same distance from the line, on opposite sides',
                'on the same side of the line',
                'the same point',
                'twice as far apart after every reflection',
              ],
              correctAnswer: 0,
              explanation: 'The line of reflection is the perpendicular bisector of the segment joining a point to its image, so the point and image are equidistant from the line and on opposite sides.',
            },
            {
              question: 'Reflecting $(0, -3)$ over the $y$-axis gives:',
              options: ['$(0, -3)$', '$(0, 3)$', '$(3, 0)$', '$(-3, 0)$'],
              correctAnswer: 0,
              explanation: 'Over the $y$-axis, $x$ flips sign: $-0 = 0$, and $y$ stays $-3$. The point is on the $y$-axis, so it doesn\'t move: $(0, -3)$.',
            },
          ],
        },
      },
      {
        id: 'tr2-distance',
        type: 'text' as const,
        content: `## Distance From the Mirror

A handy check: a point and its image are equally far from the line of reflection.

### Example

$C(5, 2)$ reflected over the $x$-axis becomes $C'(5, -2)$.

- $C$ is $2$ units **above** the $x$-axis.
- $C'$ is $2$ units **below** the $x$-axis.

Same distance ($2$), opposite sides — exactly what a reflection guarantees. If your image is the wrong distance from the mirror, recheck which coordinate you negated.

> 🔑 **Key Idea:** Reflections preserve distance from every point to the mirror line, which is why the image is a true mirror copy — congruent to the original.`,
      },
      {
        id: 'tr2-input',
        type: 'input-boxes' as const,
        content: `**Reflect the Point** 🧮

Apply each reflection and enter the new coordinates.

**1)** Reflect $(7, -4)$ over the $x$-axis. New $x = \\,?$ and new $y = \\,?$
**2)** Reflect $(-3, 8)$ over the $y$-axis. New $x = \\,?$ and new $y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '4', '3', '8'],
          hint1: 'Over the $x$-axis keep $x$, negate $y$. Over the $y$-axis negate $x$, keep $y$.',
          hint2: '1) $x$ stays $7$; $-4$ negates to $4$.',
          hint3: '2) $-3$ negates to $3$; $y$ stays $8$.',
          explanation: '1) $(7, -4) \\to (7, 4)$ over the $x$-axis.  2) $(-3, 8) \\to (3, 8)$ over the $y$-axis.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'translations-reflections',
    sections: [
      {
        id: 'tr3-intro',
        type: 'text' as const,
        content: `# 🔷 Translations and Reflections

**Part 3 of 5 — Reflecting Over the Line $y = x$**

---

> 🔑 **The Idea:** Besides the axes, a popular mirror line is the diagonal line $y = x$. Reflecting over it has a memorable rule: **swap the coordinates.**`,
      },
      {
        id: 'tr3-yx',
        type: 'text' as const,
        content: `## Reflecting Over $y = x$

The line $y = x$ runs diagonally through the origin at $45^\\circ$, passing through points like $(1,1)$, $(2,2)$, and $(-3,-3)$ — every point whose coordinates are equal.

To reflect over $y = x$, **swap $x$ and $y$**:

$$(x,\\ y) \\;\\longrightarrow\\; (y,\\ x)$$

### Example: reflect $A(2, 5)$ over $y = x$

Swap the coordinates:

$$A(2,\\ 5) \\;\\longrightarrow\\; A'(5,\\ 2)$$

### Example: reflect $B(-1, 4)$ over $y = x$

$$B(-1,\\ 4) \\;\\longrightarrow\\; B'(4,\\ -1)$$

> 💡 No sign changes here — you only *trade places*. The new $x$ is the old $y$, and the new $y$ is the old $x$.`,
      },
      {
        id: 'tr3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Rule** 🔽

Identify each image. Watch whether the move *swaps* or *negates*.`,
        exercise: {
          dropdowns: [
            { label: '$(3, 8)$ over $y = x$:', options: ['$(8, 3)$', '$(-3, 8)$', '$(3, -8)$', '$(-8, -3)$'] },
            { label: '$(-2, 6)$ over $y = x$:', options: ['$(6, -2)$', '$(2, -6)$', '$(-6, 2)$', '$(2, 6)$'] },
            { label: '$(5, 5)$ over $y = x$:', options: ['$(5, 5)$', '$(-5, 5)$', '$(5, -5)$', '$(0, 0)$'] },
          ],
          correctAnswers: ['$(8, 3)$', '$(6, -2)$', '$(5, 5)$'],
          hint1: 'Over $y = x$, swap the two coordinates — no sign changes.',
          hint2: 'For $(-2, 6)$, swapping gives $(6, -2)$.',
          hint3: '$(5, 5)$ lies *on* the line $y = x$, so swapping leaves it unchanged: $(5, 5)$.',
          explanation: 'Reflecting over $y = x$ uses $(x, y) \\to (y, x)$. A point already on the line (equal coordinates) does not move.',
        },
      },
      {
        id: 'tr3-table',
        type: 'text' as const,
        content: `## All Four Rules So Far

You now have the four reflection/translation rules Grade 8 needs. Keep this table handy.

| Transformation | Rule |
|----------------|------|
| Translate $a$ right, $b$ up | $(x, y) \\to (x + a,\\ y + b)$ |
| Reflect over $x$-axis | $(x, y) \\to (x,\\ -y)$ |
| Reflect over $y$-axis | $(x, y) \\to (-x,\\ y)$ |
| Reflect over $y = x$ | $(x, y) \\to (y,\\ x)$ |

> ⚠️ Don't confuse the rules! Reflecting over $y = x$ **swaps** coordinates (no negatives); reflecting over an axis **negates** one coordinate (no swapping).`,
      },
      {
        id: 'tr3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which rule reflects a point over the line $y = x$?',
              options: ['$(x, y) \\to (y, x)$', '$(x, y) \\to (-x, y)$', '$(x, y) \\to (x, -y)$', '$(x, y) \\to (-x, -y)$'],
              correctAnswer: 0,
              explanation: 'Reflecting over $y = x$ swaps the coordinates: $(x, y) \\to (y, x)$. The other rules negate a coordinate instead.',
            },
            {
              question: 'A figure is reflected over $y = x$. The image of $(0, -9)$ is:',
              options: ['$(-9, 0)$', '$(0, 9)$', '$(9, 0)$', '$(0, -9)$'],
              correctAnswer: 0,
              explanation: 'Swap the coordinates: $(0, -9) \\to (-9, 0)$.',
            },
          ],
        },
      },
      {
        id: 'tr3-tip',
        type: 'text' as const,
        content: `## One Last Check Before You Drill

When you reflect over $y = x$, a quick way to verify your answer: the original and image should be **mirror images across the diagonal**. If you connect a point to its image, that segment crosses $y = x$ at a right angle and is split in half by it.

For instance, $(2, 6)$ and its image $(6, 2)$ are symmetric across the diagonal — the midpoint $(4, 4)$ lies right on the line $y = x$. ✓

> 💡 If your swapped point and the original don't straddle the diagonal evenly, you probably negated a coordinate by accident. Remember: over $y = x$, **swap only.**`,
      },
      {
        id: 'tr3-input',
        type: 'input-boxes' as const,
        content: `**Reflect Over $y = x$** 🧮

Apply the swap rule and enter the new coordinates.

**1)** Reflect $(4, 9)$ over $y = x$. New $x = \\,?$ and new $y = \\,?$
**2)** Reflect $(-6, 1)$ over $y = x$. New $x = \\,?$ and new $y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['9', '4', '1', '-6'],
          hint1: 'Over $y = x$, the new $x$ is the old $y$, and the new $y$ is the old $x$.',
          hint2: '1) Swap $(4, 9)$ to get $(9, 4)$.',
          hint3: '2) Swap $(-6, 1)$ to get $(1, -6)$.',
          explanation: '1) $(4, 9) \\to (9, 4)$.  2) $(-6, 1) \\to (1, -6)$. No signs change — only the order does.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'translations-reflections',
    sections: [
      {
        id: 'tr4-intro',
        type: 'text' as const,
        content: `# 🔷 Translations and Reflections

**Part 4 of 5 — Composing Two Transformations**

---

> 🔑 **Big Idea:** A **composition** applies one transformation, *then another*, to the result. The order can matter — you must perform them in the stated sequence, feeding each image into the next rule.`,
      },
      {
        id: 'tr4-compose',
        type: 'text' as const,
        content: `## How to Compose

To compose transformations, do the **first** one, write down the image, then apply the **second** rule to *that* image.

### Example: reflect $A(3, 4)$ over the $x$-axis, then translate right $2$, up $1$

**Step 1 — reflect over the $x$-axis** $(x, y) \\to (x, -y)$:

$$A(3,\\ 4) \\;\\longrightarrow\\; A'(3,\\ -4)$$

**Step 2 — translate** $(x, y) \\to (x + 2,\\ y + 1)$, applied to $A'$:

$$A'(3,\\ -4) \\;\\longrightarrow\\; A''(3 + 2,\\ -4 + 1) = A''(5,\\ -3)$$

We write the final image as $A''$ (read "A double prime").

> 💡 Each transformation in a composition is still a rigid motion, so the *final* image is congruent to the *original* — the figure never changes size or shape, no matter how many flips and slides you chain together.`,
      },
      {
        id: 'tr4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Compose Step by Step** 🔽

Reflect $A(5, 2)$ over the $x$-axis, **then** translate left $3$, down $1$. Fill in each stage.`,
        exercise: {
          dropdowns: [
            { label: 'After reflecting over the $x$-axis, $A\'$ is:', options: ['$(5, -2)$', '$(-5, 2)$', '$(-5, -2)$', '$(2, 5)$'] },
            { label: 'Then apply left $3$ to the $x$-coordinate:', options: ['$5 - 3 = 2$', '$5 + 3 = 8$', '$-5 - 3 = -8$', '$5 \\cdot 3 = 15$'] },
            { label: 'Final image $A\'\'$ is:', options: ['$(2, -3)$', '$(8, -1)$', '$(2, -1)$', '$(2, 3)$'] },
          ],
          correctAnswers: ['$(5, -2)$', '$5 - 3 = 2$', '$(2, -3)$'],
          hint1: 'Reflecting $(5, 2)$ over the $x$-axis keeps $x$ and negates $y$: $(5, -2)$.',
          hint2: '"Left $3$" subtracts $3$ from the $x$-coordinate: $5 - 3 = 2$.',
          hint3: '"Down $1$" subtracts $1$ from the $y$-coordinate: $-2 - 1 = -3$, giving $(2, -3)$.',
          explanation: '$A(5,2) \\to A\'(5,-2)$ after the reflection, then $(x-3,\\ y-1)$ gives $A\'\'(2, -3)$.',
        },
      },
      {
        id: 'tr4-order',
        type: 'text' as const,
        content: `## Order Can Matter

Swapping the order of two transformations can land the figure in a different spot, so always follow the sequence given.

### Example: start with $P(2, 1)$

**Path A — reflect over $y$-axis, then translate up $3$:**

$$P(2, 1) \\to (-2, 1) \\to (-2,\\ 1 + 3) = (-2,\\ 4)$$

**Path B — translate up $3$, then reflect over $y$-axis:**

$$P(2, 1) \\to (2,\\ 1 + 3) = (2, 4) \\to (-2,\\ 4)$$

Here both paths happen to land at $(-2, 4)$ because a vertical slide and a $y$-axis flip don't interfere. But change the moves — say a *horizontal* slide and a $y$-axis flip — and the two orders give different answers.

> ⚠️ **Always follow the order given.** Do the first transformation completely, *then* apply the second to its image. Don't try to combine them in your head before computing.`,
      },
      {
        id: 'tr4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Translate $(1, 1)$ right $4$, then reflect the result over the $y$-axis. Final image?',
              options: ['$(-5, 1)$', '$(5, 1)$', '$(-5, -1)$', '$(5, -1)$'],
              correctAnswer: 0,
              explanation: 'Step 1: $(1, 1) \\to (1 + 4, 1) = (5, 1)$. Step 2: reflect over $y$-axis, $x$ flips sign: $(5, 1) \\to (-5, 1)$.',
            },
            {
              question: 'After any composition of translations and reflections, the final image is:',
              options: [
                'congruent to the original figure',
                'always larger than the original',
                'always smaller than the original',
                'a different shape than the original',
              ],
              correctAnswer: 0,
              explanation: 'Every translation and reflection is a rigid motion, so chaining them keeps size and shape: the final image is congruent to the original.',
            },
          ],
        },
      },
      {
        id: 'tr4-checklist',
        type: 'text' as const,
        content: `## A Two-Step Routine for Compositions

When a problem chains two transformations, run this routine every time:

1. **Read the order.** Which transformation happens *first*? Underline it.
2. **Apply step 1** to the original point. Write down the intermediate image — call it $A'$.
3. **Apply step 2** to $A'$ (never to the original). Write the final image $A''$.

> ⚠️ The classic mistake is applying *both* rules to the *starting* point. Always feed the image of step 1 into step 2.`,
      },
      {
        id: 'tr4-input',
        type: 'input-boxes' as const,
        content: `**Compose It** 🧮

Apply both steps in order and enter the final coordinates.

**1)** Reflect $(4, 3)$ over the $y$-axis, then translate up $5$. Final $x = \\,?$ and final $y = \\,?$
**2)** Translate $(-2, 6)$ down $4$, then reflect over the $x$-axis. Final $x = \\,?$ and final $y = \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-4', '8', '-2', '-2'],
          hint1: 'Do step 1 fully, then feed that image into step 2.',
          hint2: '1) $(4, 3) \\to (-4, 3)$ over the $y$-axis, then up $5$: $(-4,\\ 3 + 5) = (-4, 8)$.',
          hint3: '2) $(-2, 6) \\to (-2, 2)$ after down $4$, then over the $x$-axis: $(-2,\\ -2)$.',
          explanation: '1) $(4, 3) \\to (-4, 3) \\to (-4, 8)$.  2) $(-2, 6) \\to (-2, 2) \\to (-2, -2)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'translations-reflections',
    sections: [
      {
        id: 'tr5-intro',
        type: 'text' as const,
        content: `# 🔷 Translations and Reflections

**Part 5 of 5 — Congruence, Mixed Practice & Mastery Check**

---

You can now (1) translate points and figures, (2) reflect over the $x$-axis, $y$-axis, and $y = x$, and (3) compose two moves in order. This last part ties it together with **congruence** and a final quiz.`,
      },
      {
        id: 'tr5-congruence',
        type: 'text' as const,
        content: `## Why Translations and Reflections Show Congruence

Two figures are **congruent** ($\\cong$) when one can be mapped exactly onto the other using a sequence of **rigid motions** — translations, reflections, and rotations.

Because translations and reflections never change distances or angles:

- Corresponding **side lengths** stay equal.
- Corresponding **angle measures** stay equal.

So if you can slide and/or flip $\\triangle ABC$ right on top of $\\triangle DEF$, then $\\triangle ABC \\cong \\triangle DEF$.

### Example

$\\triangle ABC$ has vertices $A(1,2)$, $B(4,2)$, $C(1,6)$. Reflect it over the $y$-axis:

$$A(1,2) \\to A'(-1,2), \\quad B(4,2) \\to B'(-4,2), \\quad C(1,6) \\to C'(-1,6)$$

Side $AB$ has length $\\lvert 4 - 1 \\rvert = 3$; side $A'B'$ has length $\\lvert -4 - (-1) \\rvert = 3$. The lengths match — the reflection preserved them, confirming $\\triangle ABC \\cong \\triangle A'B'C'$.

> 🔑 **Key takeaway:** Finding a translation/reflection that maps one figure onto another is exactly how Grade 8 *proves* the figures are congruent.`,
      },
      {
        id: 'tr5-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Transformation** 🔽

Each row shows a pre-image and image. Pick the single transformation that maps one to the other.`,
        exercise: {
          dropdowns: [
            { label: '$(3, 7) \\to (3, -7)$', options: ['reflect over $x$-axis', 'reflect over $y$-axis', 'reflect over $y = x$', 'translate down $14$'] },
            { label: '$(3, 7) \\to (7, 3)$', options: ['reflect over $y = x$', 'reflect over $x$-axis', 'reflect over $y$-axis', 'translate right $4$'] },
            { label: '$(3, 7) \\to (-3, 7)$', options: ['reflect over $y$-axis', 'reflect over $x$-axis', 'reflect over $y = x$', 'translate left $6$'] },
          ],
          correctAnswers: ['reflect over $x$-axis', 'reflect over $y = x$', 'reflect over $y$-axis'],
          hint1: 'If only the sign of $y$ flipped, it was a reflection over the $x$-axis.',
          hint2: 'If the coordinates swapped, it was a reflection over $y = x$.',
          hint3: 'If only the sign of $x$ flipped, it was a reflection over the $y$-axis.',
          explanation: '$(3,7)\\to(3,-7)$ negates $y$ → $x$-axis. $(3,7)\\to(7,3)$ swaps → $y=x$. $(3,7)\\to(-3,7)$ negates $x$ → $y$-axis.',
        },
      },
      {
        id: 'tr5-reference',
        type: 'text' as const,
        content: `## Quick Reference

Everything from this lesson in one place — use it for the mixed practice and exit quiz below.

| Goal | Rule |
|------|------|
| Translate $a$ right, $b$ up | $(x, y) \\to (x + a,\\ y + b)$ |
| Reflect over $x$-axis | $(x, y) \\to (x,\\ -y)$ |
| Reflect over $y$-axis | $(x, y) \\to (-x,\\ y)$ |
| Reflect over $y = x$ | $(x, y) \\to (y,\\ x)$ |
| Compose two moves | apply first rule, then the second to that image |

> ⚠️ Reflecting over an axis **negates** one coordinate; reflecting over $y = x$ **swaps** them. Left/down are negative for translations. The image is always **congruent** to the original.`,
      },
      {
        id: 'tr5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Translate $(-3, 5)$ by $(x, y) \\to (x + 6,\\ y - 8)$. The image is:',
              options: ['$(3, -3)$', '$(3, 13)$', '$(-9, 13)$', '$(3, -13)$'],
              correctAnswer: 0,
              explanation: '$x: -3 + 6 = 3$ and $y: 5 - 8 = -3$, so the image is $(3, -3)$.',
            },
            {
              question: 'A triangle is reflected over the $x$-axis. Compared to the original, the image is:',
              options: [
                'congruent (same size and shape)',
                'twice as large',
                'half as large',
                'a different shape',
              ],
              correctAnswer: 0,
              explanation: 'Reflection is a rigid motion, so the image is congruent to the original — same side lengths and angle measures.',
            },
          ],
        },
      },
      {
        id: 'tr5-wrapup',
        type: 'text' as const,
        content: `## You're Ready

Nice work. You can now slide figures with a translation rule, flip them over the $x$-axis, $y$-axis, and the diagonal $y = x$, chain two moves into a composition, and explain why the result is always **congruent** to the original.

One final challenge below combines a translation *and* a reflection. Take it slow: do the translation first, write the intermediate point, then reflect.

> 🔑 **Remember:** read the order, work one step at a time, and watch your signs. Answer all three to finish the lesson.`,
      },
      {
        id: 'tr5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Reflect $(-5, 2)$ over the $y$-axis. The image is:',
              options: ['$(5, 2)$', '$(-5, -2)$', '$(5, -2)$', '$(2, -5)$'],
              correctAnswer: 0,
              explanation: 'Over the $y$-axis, the sign of $x$ flips and $y$ stays: $(-5, 2) \\to (5, 2)$.',
            },
            {
              question: 'Reflect $(6, -1)$ over the line $y = x$. The image is:',
              options: ['$(-1, 6)$', '$(1, 6)$', '$(-6, 1)$', '$(6, 1)$'],
              correctAnswer: 0,
              explanation: 'Reflecting over $y = x$ swaps the coordinates: $(6, -1) \\to (-1, 6)$.',
            },
            {
              question: 'Translate $(2, 2)$ left $5$, down $3$, then reflect over the $x$-axis. The final image is:',
              options: ['$(-3, 1)$', '$(-3, -1)$', '$(7, 1)$', '$(-3, -5)$'],
              correctAnswer: 0,
              explanation: 'Step 1: $(2, 2) \\to (2 - 5,\\ 2 - 3) = (-3, -1)$. Step 2: reflect over $x$-axis, $y$ flips sign: $(-3, -1) \\to (-3, 1)$.',
            },
          ],
        },
      },
    ],
  },
]
