import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Geometric Transformations (Grade 8 Math, CCSS 8.G.A).
 * Registry key / DB Topic.slug: 'geometric-transformations-grade8'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * translations, reflections, rotations (rigid motions / congruence) and dilations
 * (similarity), plus sequences of transformations on the coordinate plane.
 * LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'geometric-transformations-grade8',
    sections: [
      {
        id: 'gt1-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Transformations

**Part 1 of 5 — Moving Shapes & Translations**

---

### Topics in This Part

| Section |
|---------|
| What Is a Transformation? |
| Pre-image, Image & Prime Notation |
| Translations (Slides) |
| The Translation Rule |

> 🔑 **Key Concept:** A **transformation** moves or changes a figure on the coordinate plane. In this lesson you'll master the four big ones — **translations, reflections, rotations, and dilations** — starting with the simplest: the slide.`,
      },
      {
        id: 'gt1-vocab',
        type: 'text' as const,
        content: `## What Is a Transformation?

A **transformation** takes an original figure (the **pre-image**) and produces a new figure (the **image**).

- The **pre-image** is what you start with. We label its points $A$, $B$, $C$, …
- The **image** is the result. We label its points with **prime marks**: $A'$, $B'$, $C'$ (read "A prime").

So if point $A$ moves to a new spot, that new spot is $A'$.

| Word | Meaning |
|------|---------|
| Pre-image | the original figure |
| Image | the figure after the move |
| $A \\to A'$ | "point $A$ maps to point $A'$ (A prime)" |

There are four transformations to know:

| Transformation | Plain-English name | Does the size change? |
|----------------|--------------------|-----------------------|
| Translation | slide | no |
| Reflection | flip | no |
| Rotation | turn | no |
| Dilation | resize | **yes** |

> 💡 The first three (slide, flip, turn) keep the figure **exactly the same size and shape** — only its position changes. We'll explore why that matters in Part 4.`,
      },
      {
        id: 'gt1-vocab-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a transformation, what do we call the original figure (before it moves)?',
              options: ['The image', 'The pre-image', 'The prime', 'The vertex'],
              correctAnswer: 1,
              explanation: 'The figure you start with is the **pre-image**. After the transformation, the result is called the **image** and its points get prime marks.',
            },
            {
              question: 'A figure is slid 4 units to the right. Which transformation is this?',
              options: ['Translation', 'Reflection', 'Rotation', 'Dilation'],
              correctAnswer: 0,
              explanation: 'Sliding a figure without flipping, turning, or resizing it is a **translation**.',
            },
          ],
        },
      },
      {
        id: 'gt1-translation-teach',
        type: 'text' as const,
        content: `## Translations (Slides)

A **translation** slides every point of a figure the **same distance** in the **same direction**. Nothing flips, turns, or changes size.

On the coordinate plane we describe a slide by how it changes $x$ and $y$:

$$(x,\\, y) \\to (x + a,\\, y + b)$$

- $a$ is the horizontal move: **right** is $+$, **left** is $-$.
- $b$ is the vertical move: **up** is $+$, **down** is $-$.

### Worked Example: slide right 5, up 2

The rule is $(x, y) \\to (x + 5,\\, y + 2)$. Apply it to point $A(1, 3)$:

$$A(1,\\,3) \\to A'(1 + 5,\\; 3 + 2) = A'(6,\\, 5)$$

### Worked Example: slide left 3, down 4

The rule is $(x, y) \\to (x - 3,\\, y - 4)$. Apply it to $B(2, 6)$:

$$B(2,\\,6) \\to B'(2 - 3,\\; 6 - 4) = B'(-1,\\, 2)$$

> ⚠️ **Watch the signs.** Left and down are **negative**. Mixing these up is the most common translation mistake.`,
      },
      {
        id: 'gt1-translation-drill',
        type: 'input-boxes' as const,
        content: `**Translate the Point** 🧮

Apply the translation rule $(x, y) \\to (x + 4,\\, y - 3)$ (right 4, down 3) to each point. Enter the image coordinates.

**1)** $A(2, 5) \\to A'(\\,?,\\ ?\\,)$ — enter the $x$ then the $y$.
**2)** $B(-1, 0) \\to B'(\\,?,\\ ?\\,)$ — enter the $x$ then the $y$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['6', '2', '3', '-3'],
          hint1: 'For $A$: $x = 2 + 4 = 6$, and $y = 5 - 3 = 2$.',
          hint2: 'For $B$: $x = -1 + 4 = 3$, and $y = 0 - 3 = -3$.',
          hint3: 'Add $4$ to every $x$ (move right) and subtract $3$ from every $y$ (move down).',
          explanation: '$A(2,5) \\to A\'(6, 2)$ and $B(-1,0) \\to B\'(3, -3)$. Right adds to $x$; down subtracts from $y$.',
        },
      },
      {
        id: 'gt1-rule-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Slide** 🔽

A figure moves so that point $P(4, 1)$ lands on $P'(1, 5)$. Describe the translation.`,
        exercise: {
          dropdowns: [
            { label: 'Horizontal move (compare the $x$-values):', options: ['left 3', 'right 3', 'left 4', 'right 1'] },
            { label: 'Vertical move (compare the $y$-values):', options: ['up 4', 'down 4', 'up 5', 'down 1'] },
            { label: 'The rule is:', options: ['$(x-3,\\ y+4)$', '$(x+3,\\ y-4)$', '$(x-3,\\ y-4)$', '$(x+3,\\ y+4)$'] },
          ],
          correctAnswers: ['left 3', 'up 4', '$(x-3,\\ y+4)$'],
          hint1: 'The $x$ went from $4$ to $1$, a change of $-3$ (left 3).',
          hint2: 'The $y$ went from $1$ to $5$, a change of $+4$ (up 4).',
          hint3: 'Left 3 means $x - 3$; up 4 means $y + 4$, giving $(x-3,\\ y+4)$.',
          explanation: 'From $(4,1)$ to $(1,5)$: $x$ dropped by $3$ (left 3) and $y$ rose by $4$ (up 4), so the rule is $(x, y) \\to (x - 3,\\, y + 4)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'geometric-transformations-grade8',
    sections: [
      {
        id: 'gt2-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Transformations

**Part 2 of 5 — Reflections (Flips)**

---

> 🔑 **The Idea:** A **reflection** flips a figure over a line called the **line of reflection**, producing a mirror image. The image is the same size and shape — just facing the other way.`,
      },
      {
        id: 'gt2-axes-teach',
        type: 'text' as const,
        content: `## Reflecting Over the Axes

When you flip a point over an axis, one coordinate keeps its sign and the other flips.

| Reflect over… | Rule | What changes |
|---------------|------|--------------|
| the **$x$-axis** | $(x,\\, y) \\to (x,\\, -y)$ | the $y$ flips sign |
| the **$y$-axis** | $(x,\\, y) \\to (-x,\\, y)$ | the $x$ flips sign |

### Why it works

Think of the $x$-axis as a horizontal mirror. A point $3$ units **above** it reflects to a point $3$ units **below** it — same $x$, opposite $y$.

### Worked Example: reflect $A(4, 2)$ over the $x$-axis

Keep $x$, flip the sign of $y$:

$$A(4,\\, 2) \\to A'(4,\\, -2)$$

### Worked Example: reflect $B(-3, 5)$ over the $y$-axis

Flip the sign of $x$, keep $y$:

$$B(-3,\\, 5) \\to B'(3,\\, 5)$$

> 💡 **Memory trick:** "Reflect over the $x$-axis → change the $y$." You change the coordinate of the axis you are **not** flipping over.`,
      },
      {
        id: 'gt2-axes-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Reflect the point $(5, -1)$ over the $x$-axis. The image is:',
              options: ['$(5, 1)$', '$(-5, -1)$', '$(-5, 1)$', '$(1, 5)$'],
              correctAnswer: 0,
              explanation: 'Reflecting over the $x$-axis uses $(x, y) \\to (x, -y)$: keep $x = 5$, flip $y$ from $-1$ to $1$, giving $(5, 1)$.',
            },
            {
              question: 'Which rule reflects a point over the $y$-axis?',
              options: ['$(x, y) \\to (x, -y)$', '$(x, y) \\to (-x, y)$', '$(x, y) \\to (-x, -y)$', '$(x, y) \\to (y, x)$'],
              correctAnswer: 1,
              explanation: 'Over the $y$-axis you flip the sign of $x$ and keep $y$: $(x, y) \\to (-x, y)$.',
            },
          ],
        },
      },
      {
        id: 'gt2-special-teach',
        type: 'text' as const,
        content: `## Two Special Lines: $y = x$ and the Origin

A couple of reflections come up often enough to memorize:

| Reflect over… | Rule | What happens |
|---------------|------|--------------|
| the line $y = x$ | $(x,\\, y) \\to (y,\\, x)$ | **swap** $x$ and $y$ |
| the **origin** | $(x,\\, y) \\to (-x,\\, -y)$ | flip **both** signs |

> 📝 Reflecting over the origin gives the same result as rotating $180^\\circ$ about the origin — you'll see that again in Part 3.

### Worked Example: reflect $A(2, 7)$ over the line $y = x$

Swap the coordinates:

$$A(2,\\, 7) \\to A'(7,\\, 2)$$

### Worked Example: reflect $B(-4, 6)$ over the origin

Flip both signs:

$$B(-4,\\, 6) \\to B'(4,\\, -6)$$`,
      },
      {
        id: 'gt2-reflect-drill',
        type: 'input-boxes' as const,
        content: `**Reflect the Point** 🧮

Find each image. Enter the $x$-coordinate, then the $y$-coordinate.

**1)** Reflect $A(6, -2)$ over the **$y$-axis** $\\to A'(\\,?,\\ ?\\,)$
**2)** Reflect $B(3, 8)$ over the **line $y = x$** $\\to B'(\\,?,\\ ?\\,)$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-6', '-2', '8', '3'],
          hint1: 'Over the $y$-axis: flip the sign of $x$, keep $y$. So $(6, -2) \\to (-6, -2)$.',
          hint2: 'Over $y = x$: swap the two coordinates. So $(3, 8) \\to (8, 3)$.',
          hint3: 'Box order is $x$ then $y$ for each point: $A\'(-6, -2)$, then $B\'(8, 3)$.',
          explanation: '$A(6,-2)$ over the $y$-axis $\\to A\'(-6, -2)$. $B(3,8)$ over $y=x$ $\\to B\'(8, 3)$ (coordinates swap).',
        },
      },
      {
        id: 'gt2-reflect-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Reflection** 🔽

Choose the correct image for each reflection of the point $(-5, 4)$.`,
        exercise: {
          dropdowns: [
            { label: 'Over the $x$-axis:', options: ['$(-5, -4)$', '$(5, 4)$', '$(5, -4)$', '$(4, -5)$'] },
            { label: 'Over the $y$-axis:', options: ['$(5, 4)$', '$(-5, -4)$', '$(5, -4)$', '$(4, 5)$'] },
            { label: 'Over the origin:', options: ['$(5, -4)$', '$(-5, -4)$', '$(5, 4)$', '$(4, -5)$'] },
          ],
          correctAnswers: ['$(-5, -4)$', '$(5, 4)$', '$(5, -4)$'],
          hint1: 'Over the $x$-axis: keep $x = -5$, flip $y$ from $4$ to $-4$.',
          hint2: 'Over the $y$-axis: flip $x$ from $-5$ to $5$, keep $y = 4$.',
          hint3: 'Over the origin: flip **both** signs, so $(-5, 4) \\to (5, -4)$.',
          explanation: 'Starting at $(-5, 4)$: $x$-axis $\\to (-5, -4)$; $y$-axis $\\to (5, 4)$; origin $\\to (5, -4)$ (both signs flip).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'geometric-transformations-grade8',
    sections: [
      {
        id: 'gt3-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Transformations

**Part 3 of 5 — Rotations (Turns)**

---

> 🔑 **The Idea:** A **rotation** turns a figure around a fixed point called the **center of rotation**. At this level the center is almost always the **origin**, and turns are **counterclockwise** unless told otherwise.`,
      },
      {
        id: 'gt3-rules-teach',
        type: 'text' as const,
        content: `## Rotations About the Origin

Memorize these three counterclockwise (CCW) rules:

| Rotation (CCW about origin) | Rule |
|------------------------------|------|
| $90^\\circ$ | $(x,\\, y) \\to (-y,\\, x)$ |
| $180^\\circ$ | $(x,\\, y) \\to (-x,\\, -y)$ |
| $270^\\circ$ | $(x,\\, y) \\to (y,\\, -x)$ |

### Worked Example: rotate $A(3, 5)$ by $90^\\circ$ CCW

Use $(x, y) \\to (-y, x)$:

$$A(3,\\, 5) \\to A'(-5,\\, 3)$$

### Worked Example: rotate $B(-2, 6)$ by $180^\\circ$

Use $(x, y) \\to (-x, -y)$ — flip both signs:

$$B(-2,\\, 6) \\to B'(2,\\, -6)$$

> 💡 **Direction shortcut:** A $270^\\circ$ turn **counterclockwise** lands in the same place as a $90^\\circ$ turn **clockwise**. Both use $(x, y) \\to (y, -x)$.

> ⚠️ A $180^\\circ$ rotation is the **only** one where the direction (CW vs. CCW) doesn't matter — you end up in the same spot either way.`,
      },
      {
        id: 'gt3-rules-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rotate $(4, 1)$ by $90^\\circ$ counterclockwise about the origin. The image is:',
              options: ['$(-1, 4)$', '$(1, -4)$', '$(-4, -1)$', '$(1, 4)$'],
              correctAnswer: 0,
              explanation: 'The $90^\\circ$ CCW rule is $(x, y) \\to (-y, x)$. So $(4, 1) \\to (-1, 4)$.',
            },
            {
              question: 'Which rotation has the same effect as reflecting a point over the origin?',
              options: ['$90^\\circ$ rotation', '$180^\\circ$ rotation', '$270^\\circ$ rotation', '$360^\\circ$ rotation'],
              correctAnswer: 1,
              explanation: 'Reflecting over the origin, $(x, y) \\to (-x, -y)$, is identical to a $180^\\circ$ rotation about the origin.',
            },
          ],
        },
      },
      {
        id: 'gt3-rotate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Rule, Then the Image** 🔽

You are rotating the point $P(2, 7)$ **counterclockwise** about the origin.`,
        exercise: {
          dropdowns: [
            { label: 'Rule for $90^\\circ$ CCW:', options: ['$(-y,\\ x)$', '$(y,\\ -x)$', '$(-x,\\ -y)$', '$(y,\\ x)$'] },
            { label: 'Image of $P(2,7)$ after $90^\\circ$ CCW:', options: ['$(-7, 2)$', '$(7, -2)$', '$(-2, -7)$', '$(7, 2)$'] },
            { label: 'Image of $P(2,7)$ after $270^\\circ$ CCW:', options: ['$(7, -2)$', '$(-7, 2)$', '$(-2, -7)$', '$(2, -7)$'] },
          ],
          correctAnswers: ['$(-y,\\ x)$', '$(-7, 2)$', '$(7, -2)$'],
          hint1: 'The $90^\\circ$ CCW rule is $(x, y) \\to (-y, x)$.',
          hint2: 'Apply $(-y, x)$ to $(2, 7)$: $-y = -7$ and $x = 2$, so $(-7, 2)$.',
          hint3: 'The $270^\\circ$ CCW rule is $(x, y) \\to (y, -x)$, so $(2, 7) \\to (7, -2)$.',
          explanation: '$90^\\circ$ CCW uses $(-y, x)$, sending $(2,7)\\to(-7,2)$. $270^\\circ$ CCW uses $(y, -x)$, sending $(2,7)\\to(7,-2)$.',
        },
      },
      {
        id: 'gt3-rotate-drill',
        type: 'input-boxes' as const,
        content: `**Rotate the Point** 🧮

All rotations are **counterclockwise about the origin**. Enter the $x$-coordinate, then the $y$-coordinate.

**1)** Rotate $A(-3, 4)$ by $180^\\circ \\to A'(\\,?,\\ ?\\,)$
**2)** Rotate $B(6, 1)$ by $90^\\circ \\to B'(\\,?,\\ ?\\,)$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['3', '-4', '-1', '6'],
          hint1: '$180^\\circ$ uses $(x, y) \\to (-x, -y)$, so $(-3, 4) \\to (3, -4)$.',
          hint2: '$90^\\circ$ CCW uses $(x, y) \\to (-y, x)$, so $(6, 1) \\to (-1, 6)$.',
          hint3: 'Enter $x$ then $y$ for each: $A\'(3, -4)$, then $B\'(-1, 6)$.',
          explanation: '$A(-3,4)$ rotated $180^\\circ \\to A\'(3, -4)$ (both signs flip). $B(6,1)$ rotated $90^\\circ$ CCW $\\to B\'(-1, 6)$ using $(-y, x)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'geometric-transformations-grade8',
    sections: [
      {
        id: 'gt4-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Transformations

**Part 4 of 5 — Dilations, Congruence & Similarity**

---

> 🔑 **The Big Distinction:** Translations, reflections, and rotations are **rigid motions** — they preserve size and shape, so the image is **congruent** to the pre-image. A **dilation** resizes a figure, so the image is **similar** (same shape, different size).`,
      },
      {
        id: 'gt4-dilation-teach',
        type: 'text' as const,
        content: `## Dilations (Resizing)

A **dilation** stretches or shrinks a figure from a **center** (usually the origin) by a **scale factor** $k$.

When the center is the origin, the rule is:

$$(x,\\, y) \\to (kx,\\, ky)$$

The scale factor tells you what happens:

| Scale factor $k$ | Effect |
|------------------|--------|
| $k > 1$ | **enlargement** (figure gets bigger) |
| $0 < k < 1$ | **reduction** (figure gets smaller) |
| $k = 1$ | no change |

### Worked Example: dilate $A(2, 3)$ by scale factor $k = 4$

Multiply both coordinates by $4$:

$$A(2,\\, 3) \\to A'(8,\\, 12)$$

### Worked Example: dilate $B(10, -6)$ by scale factor $k = \\dfrac{1}{2}$

Multiply both coordinates by $\\dfrac{1}{2}$:

$$B(10,\\, -6) \\to B'(5,\\, -3)$$

> ⚠️ A dilation is the **only** one of the four transformations that changes the figure's **size**. The image is **not** congruent to the pre-image — it's **similar**.`,
      },
      {
        id: 'gt4-dilation-drill',
        type: 'input-boxes' as const,
        content: `**Dilate the Point** 🧮

Each dilation is centered at the origin. Enter the $x$-coordinate, then the $y$-coordinate.

**1)** Dilate $A(3, -5)$ by scale factor $k = 3 \\to A'(\\,?,\\ ?\\,)$
**2)** Dilate $B(8, 12)$ by scale factor $k = \\dfrac{1}{4} \\to B'(\\,?,\\ ?\\,)$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['9', '-15', '2', '3'],
          hint1: 'For $A$: multiply both coordinates by $3$. $3 \\cdot 3 = 9$ and $3 \\cdot (-5) = -15$.',
          hint2: 'For $B$: multiply both coordinates by $\\frac{1}{4}$. $8 \\div 4 = 2$ and $12 \\div 4 = 3$.',
          hint3: 'A dilation multiplies **both** coordinates by $k$: $A\'(9, -15)$ and $B\'(2, 3)$.',
          explanation: '$A(3,-5)$ at $k=3 \\to A\'(9, -15)$. $B(8,12)$ at $k=\\frac{1}{4} \\to B\'(2, 3)$ (a reduction since $k<1$).',
        },
      },
      {
        id: 'gt4-congruent-teach',
        type: 'text' as const,
        content: `## Congruent vs. Similar

This is the key idea Grade 8 transformations build toward:

| Result | Means | Produced by |
|--------|-------|-------------|
| **Congruent** $\\cong$ | same shape **and** same size | a sequence of translations, reflections, rotations |
| **Similar** $\\sim$ | same shape, possibly different size | a sequence that includes a dilation |

> 🔑 **Test for congruence:** Two figures are **congruent** if you can map one onto the other using **only** rigid motions (slides, flips, turns) — no resizing.

> 🔑 **Test for similarity:** Two figures are **similar** if you can map one onto the other using rigid motions **and** a dilation.

### Example

A triangle is translated 3 units right and then reflected over the $x$-axis. Since both moves are rigid motions, the image is **congruent** to the original. But if that triangle were also dilated by $k = 2$, the image would only be **similar**, not congruent.`,
      },
      {
        id: 'gt4-congruent-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which transformation produces an image that is NOT congruent to the pre-image?',
              options: ['Translation', 'Reflection', 'Rotation', 'Dilation (scale factor $\\ne 1$)'],
              correctAnswer: 3,
              explanation: 'A dilation with $k \\ne 1$ changes the figure\'s size, so the image is **similar** but **not congruent**. The other three are rigid motions and preserve size.',
            },
            {
              question: 'Figure $Q$ is the image of figure $P$ after a rotation and a translation. Figures $P$ and $Q$ must be:',
              options: ['Similar but not congruent', 'Congruent', 'Neither congruent nor similar', 'The same single figure'],
              correctAnswer: 1,
              explanation: 'Rotations and translations are both rigid motions, so they preserve size and shape. $P$ and $Q$ are **congruent** (and, since congruent figures are also similar, similar too — but "congruent" is the strongest correct description).',
            },
          ],
        },
      },
      {
        id: 'gt4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Congruent or Similar?** 🔽

For each sequence applied to a triangle, choose the strongest correct description of the image.`,
        exercise: {
          dropdowns: [
            { label: 'Reflect over $y$-axis, then slide up 3:', options: ['Congruent', 'Similar only', 'Neither'] },
            { label: 'Dilate by $k = 2$, then rotate $90^\\circ$:', options: ['Similar only', 'Congruent', 'Neither'] },
            { label: 'Rotate $180^\\circ$, then dilate by $k = 1$:', options: ['Congruent', 'Similar only', 'Neither'] },
          ],
          correctAnswers: ['Congruent', 'Similar only', 'Congruent'],
          hint1: 'Reflections and translations are rigid motions — size is preserved, so the image is congruent.',
          hint2: 'A dilation with $k = 2$ changes the size, so the image is only similar (not congruent).',
          hint3: 'A dilation with $k = 1$ does not change the size at all, so combined with a rotation the image stays congruent.',
          explanation: 'Rigid-motions-only sequences give **congruent** images. Any dilation with $k \\ne 1$ makes it **similar only**. A dilation with $k = 1$ is no resize, so the image stays congruent.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'geometric-transformations-grade8',
    sections: [
      {
        id: 'gt5-intro',
        type: 'text' as const,
        content: `# 🔁 Geometric Transformations

**Part 5 of 5 — Sequences & Mastery Check**

---

You can now translate, reflect, rotate, and dilate any point. The last skill is applying **two or more transformations in a row** — a **sequence** — and then we'll finish with a mastery check.`,
      },
      {
        id: 'gt5-sequence-teach',
        type: 'text' as const,
        content: `## Sequences of Transformations

To apply a **sequence**, transform the point with the **first** rule, then feed that result into the **second** rule. **Order matters.**

### Worked Example

Start with $A(2, 3)$.
**Step 1 — reflect over the $x$-axis** $(x, y) \\to (x, -y)$:

$$A(2,\\, 3) \\to A'(2,\\, -3)$$

**Step 2 — translate right 4, up 1** $(x, y) \\to (x + 4,\\, y + 1)$, applied to $A'$:

$$A'(2,\\, -3) \\to A''(6,\\, -2)$$

So the full sequence sends $A(2, 3) \\to A''(6, -2)$. The double-prime $A''$ means "after two transformations."

> ⚠️ **Order matters!** Reflecting then sliding usually lands somewhere different from sliding then reflecting. Always work **left to right**, one step at a time.

> 💡 The image after a sequence of **rigid motions** is always **congruent** to the original — no matter how many slides, flips, and turns you string together.`,
      },
      {
        id: 'gt5-sequence-drill',
        type: 'input-boxes' as const,
        content: `**Run the Sequence** 🧮

Start with $P(1, 4)$. Apply the two steps **in order**.

**Step 1:** Rotate $90^\\circ$ CCW about the origin, $(x, y) \\to (-y, x)$.
**Step 2:** Translate down 2, $(x, y) \\to (x,\\, y - 2)$.

Enter the final image $P''$ — the $x$-coordinate, then the $y$-coordinate.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['-4', '-1'],
          hint1: 'Step 1: $(1, 4) \\to (-4, 1)$ using $(-y, x)$.',
          hint2: 'Step 2: take $(-4, 1)$ and subtract $2$ from $y$: $(-4, 1 - 2) = (-4, -1)$.',
          hint3: 'Work left to right: rotate first to get $(-4, 1)$, then slide down to get $(-4, -1)$.',
          explanation: 'Step 1 (rotate $90^\\circ$ CCW): $P(1,4) \\to (-4, 1)$. Step 2 (down 2): $(-4, 1) \\to P\'\'(-4, -1)$.',
        },
      },
      {
        id: 'gt5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Transformation | Rule (about origin) | Size kept? |
|----------------|---------------------|-----------|
| Translate $(a, b)$ | $(x + a,\\, y + b)$ | yes |
| Reflect over $x$-axis | $(x,\\, -y)$ | yes |
| Reflect over $y$-axis | $(-x,\\, y)$ | yes |
| Reflect over $y = x$ | $(y,\\, x)$ | yes |
| Rotate $90^\\circ$ CCW | $(-y,\\, x)$ | yes |
| Rotate $180^\\circ$ | $(-x,\\, -y)$ | yes |
| Rotate $270^\\circ$ CCW | $(y,\\, -x)$ | yes |
| Dilate by $k$ | $(kx,\\, ky)$ | **no** |

> 🔑 The first seven are **rigid motions** → image is **congruent**. A dilation (with $k \\ne 1$) → image is **similar**.`,
      },
      {
        id: 'gt5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Translate $(-2, 5)$ by the rule $(x, y) \\to (x + 6,\\, y - 9)$. The image is:',
              options: ['$(4, -4)$', '$(-8, 14)$', '$(4, 14)$', '$(8, -4)$'],
              correctAnswer: 0,
              explanation: '$x = -2 + 6 = 4$ and $y = 5 - 9 = -4$, so the image is $(4, -4)$.',
            },
            {
              question: 'A figure is dilated by scale factor $k = \\dfrac{1}{3}$ about the origin. Compared to the original, the image is:',
              options: ['Larger and congruent', 'Smaller and similar', 'The same size and congruent', 'Larger and similar'],
              correctAnswer: 1,
              explanation: 'Since $0 < k < 1$, the dilation is a reduction — the image is **smaller**. Dilations preserve shape but not size, so the image is **similar** (not congruent).',
            },
          ],
        },
      },
      {
        id: 'gt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Reflect $(7, -3)$ over the $y$-axis. The image is:',
              options: ['$(-7, -3)$', '$(7, 3)$', '$(-7, 3)$', '$(-3, 7)$'],
              correctAnswer: 0,
              explanation: 'Over the $y$-axis, $(x, y) \\to (-x, y)$: flip $x$ from $7$ to $-7$, keep $y = -3$, giving $(-7, -3)$.',
            },
            {
              question: 'Rotate $(2, -6)$ by $180^\\circ$ about the origin. The image is:',
              options: ['$(-2, 6)$', '$(6, 2)$', '$(2, 6)$', '$(-6, -2)$'],
              correctAnswer: 0,
              explanation: 'The $180^\\circ$ rule is $(x, y) \\to (-x, -y)$: flip both signs, so $(2, -6) \\to (-2, 6)$.',
            },
            {
              question: 'A triangle is reflected over the $x$-axis and then rotated $90^\\circ$. The image is ____ to the original.',
              options: ['similar but not congruent', 'congruent', 'neither congruent nor similar', 'larger'],
              correctAnswer: 1,
              explanation: 'Reflections and rotations are both rigid motions, which preserve size and shape, so the image is **congruent** to the original.',
            },
          ],
        },
      },
    ],
  },
]
