import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rotations and Dilations (Grade 8 Math).
 * Registry key: 'rotations-dilations' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rotations-dilations',
    sections: [
      {
        id: 'rd1-intro',
        type: 'text' as const,
        content: `# 🔄 Rotations & Dilations

**Part 1 of 5 — Rotations: Turning Around a Point**

---

### Topics in This Part

| Section |
|---------|
| What Is a Rotation? |
| The Center, Angle, and Direction |
| Rotating 90°, 180°, and 270° |

> 🔑 **Key Concept:** A **rotation** turns every point of a figure around a fixed **center** by the same **angle**. The figure keeps its exact size and shape — it just faces a new direction. This is the first of two transformations in this lesson; the second is **dilation**, which resizes a figure.`,
      },
      {
        id: 'rd1-what',
        type: 'text' as const,
        content: `## What Is a Rotation?

Imagine pinning a photo to a corkboard with a single tack and spinning it. Every point on the photo travels along a **circle** around that tack. That is a **rotation**.

A rotation is defined by three things:

| Part | Meaning |
|------|---------|
| **Center** | the fixed point you turn around (often the origin, $(0,0)$) |
| **Angle** | how far you turn — usually $90°$, $180°$, or $270°$ |
| **Direction** | **counterclockwise** (the default, "positive") or **clockwise** |

> 🔑 **Key Idea:** A rotation is a **rigid motion** (also called an *isometry*). The image is **congruent** to the original — same side lengths, same angles, same area. Only the *orientation in space* changes.

The original figure is called the **pre-image**. The turned figure is the **image**, and we mark its points with a prime symbol: $A \\to A'$ (read "$A$ prime").`,
      },
      {
        id: 'rd1-direction-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which property is ALWAYS preserved by a rotation?',
              options: ['Side lengths and angle measures', 'The direction the figure faces', 'The position of each point', 'Only the area, not the side lengths'],
              correctAnswer: 0,
              explanation: 'A rotation is a rigid motion: it keeps all side lengths and angle measures identical, so the image is congruent to the pre-image. What *does* change is the orientation (which way the figure faces) and the location of each point.',
            },
            {
              question: 'Unless told otherwise, a positive rotation angle turns the figure in which direction?',
              options: ['Counterclockwise', 'Clockwise', 'Straight down', 'It depends on the figure'],
              correctAnswer: 0,
              explanation: 'By convention, a positive angle of rotation is measured counterclockwise. A clockwise turn is described as negative, or stated explicitly as "clockwise."',
            },
          ],
        },
      },
      {
        id: 'rd1-rules',
        type: 'text' as const,
        content: `## Rotating Around the Origin

When the center is the origin $(0,0)$, the coordinate rules are clean and worth memorizing. For a **counterclockwise** rotation:

| Rotation (CCW about origin) | Rule: $(x, y) \\to$ |
|------------------------------|---------------------|
| $90°$ | $(-y,\\ x)$ |
| $180°$ | $(-x,\\ -y)$ |
| $270°$ | $(y,\\ -x)$ |

### Worked Example: rotate $A(4, 2)$ counterclockwise by $90°$

Apply $(x, y) \\to (-y, x)$ with $x = 4$ and $y = 2$:

$$A(4, 2) \\to A'(-2,\\ 4)$$

The point moved from the lower-right region toward the upper-left — exactly what a quarter-turn counterclockwise should do.

> 💡 **Shortcut to remember:** A $270°$ counterclockwise turn lands in the same place as a $90°$ **clockwise** turn. So "$90°$ clockwise" uses the rule $(x, y) \\to (y, -x)$.`,
      },
      {
        id: 'rd1-90-drill',
        type: 'input-boxes' as const,
        content: `**Rotate 90° Counterclockwise** 🧮

Use the rule $(x, y) \\to (-y, x)$. Enter each image coordinate.

**1)** $P(3, 5) \\to P'(\\,?,\\ ?\\,)$ — enter the $x$-coordinate, then the $y$-coordinate.
**2)** $Q(-1, 6) \\to Q'(\\,?,\\ ?\\,)$ — enter the $x$-coordinate, then the $y$-coordinate.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['-5', '3', '-6', '-1'],
          hint1: 'The rule is $(x, y) \\to (-y, x)$: the new $x$ is the *negative of the old $y$*, and the new $y$ is the *old $x$*.',
          hint2: 'For $P(3, 5)$: new $x = -5$, new $y = 3$, giving $P\'(-5, 3)$.',
          hint3: 'For $Q(-1, 6)$: new $x = -(6) = -6$, new $y = -1$, giving $Q\'(-6, -1)$.',
          explanation: '1) $P(3,5) \\to (-5, 3)$.  2) $Q(-1,6) \\to (-6, -1)$. In each case the new $x$ is $-y$ and the new $y$ is $x$.',
        },
      },
      {
        id: 'rd1-180-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rotate $B(6, -3)$ by $180°$ about the origin. The image $B\'$ is:',
              options: ['$(-6, 3)$', '$(3, 6)$', '$(-3, -6)$', '$(6, 3)$'],
              correctAnswer: 0,
              explanation: 'A $180°$ rotation uses $(x, y) \\to (-x, -y)$. So $B(6, -3) \\to (-6, 3)$. Both signs flip.',
            },
            {
              question: 'A $180°$ rotation is special because clockwise and counterclockwise give:',
              options: ['The same image', 'Opposite images', 'Different images only for negative points', 'No image at all'],
              correctAnswer: 0,
              explanation: 'A half-turn lands in the same place whether you go clockwise or counterclockwise — both reach the point directly opposite across the center. That is why $180°$ has no direction to specify.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rotations-dilations',
    sections: [
      {
        id: 'rd2-intro',
        type: 'text' as const,
        content: `# 🔄 Rotations & Dilations

**Part 2 of 5 — Mastering Rotation Rules**

---

> 🔑 **The Goal:** In Part 1 you met the three origin rotations. Now you'll apply them fluently, handle clockwise turns, and rotate whole figures point by point.`,
      },
      {
        id: 'rd2-clockwise',
        type: 'text' as const,
        content: `## Clockwise vs. Counterclockwise

Every counterclockwise (CCW) rotation has a matching clockwise (CW) one that lands in the same place:

| Same destination | CCW name | CW name |
|------------------|----------|---------|
| quarter-turn left | $90°$ CCW | $270°$ CW |
| half-turn | $180°$ | $180°$ |
| quarter-turn right | $270°$ CCW | $90°$ CW |

So you only ever need the three CCW rules:

| Angle (CCW) | $(x, y) \\to$ |
|-------------|---------------|
| $90°$ | $(-y,\\ x)$ |
| $180°$ | $(-x,\\ -y)$ |
| $270°$ | $(y,\\ -x)$ |

> ⚠️ **Watch out:** "$90°$ **clockwise**" is **not** the $90°$ CCW rule. It equals $270°$ CCW, so it uses $(x, y) \\to (y, -x)$. Read the direction carefully before you pick a rule.`,
      },
      {
        id: 'rd2-rule-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Rule** 🔽

Choose the correct coordinate rule for each rotation about the origin.`,
        exercise: {
          dropdowns: [
            { label: '$90°$ counterclockwise:', options: ['$(-y,\\ x)$', '$(y,\\ -x)$', '$(-x,\\ -y)$', '$(x,\\ -y)$'] },
            { label: '$180°$:', options: ['$(-x,\\ -y)$', '$(-y,\\ x)$', '$(y,\\ x)$', '$(x,\\ y)$'] },
            { label: '$270°$ counterclockwise:', options: ['$(y,\\ -x)$', '$(-y,\\ x)$', '$(-x,\\ -y)$', '$(-y,\\ -x)$'] },
            { label: '$90°$ clockwise:', options: ['$(y,\\ -x)$', '$(-y,\\ x)$', '$(-x,\\ -y)$', '$(x,\\ y)$'] },
          ],
          correctAnswers: ['$(-y,\\ x)$', '$(-x,\\ -y)$', '$(y,\\ -x)$', '$(y,\\ -x)$'],
          hint1: '$90°$ CCW swaps the coordinates and negates the new first one: $(-y, x)$.',
          hint2: '$180°$ just negates both: $(-x, -y)$. $270°$ CCW is $(y, -x)$.',
          hint3: '$90°$ clockwise equals $270°$ counterclockwise, so it uses the same rule: $(y, -x)$.',
          explanation: '$90°$ CCW $= (-y, x)$; $180° = (-x, -y)$; $270°$ CCW $= (y, -x)$; and $90°$ CW reaches the same spot as $270°$ CCW, so it is also $(y, -x)$.',
        },
      },
      {
        id: 'rd2-worked-figure',
        type: 'text' as const,
        content: `## Rotating a Whole Figure

To rotate a polygon, rotate **each vertex** with the rule, then reconnect them in order.

### Worked Example: rotate triangle $RST$ by $180°$ about the origin

Vertices: $R(2, 1)$, $S(5, 1)$, $T(2, 4)$. Apply $(x, y) \\to (-x, -y)$:

$$R(2, 1) \\to R'(-2, -1)$$
$$S(5, 1) \\to S'(-5, -1)$$
$$T(2, 4) \\to T'(-2, -4)$$

Connect $R'S'T'$ in the same order. The new triangle is congruent to the original and sits in the opposite quadrant.

> ✅ **Check:** Side $RS$ had length $5 - 2 = 3$. Side $R'S'$ runs from $(-2,-1)$ to $(-5,-1)$, length $\\lvert -5 - (-2) \\rvert = 3$. ✓ Congruence preserved.`,
      },
      {
        id: 'rd2-270-drill',
        type: 'input-boxes' as const,
        content: `**Rotate the Vertices** 🧮

Rotate each point **$270°$ counterclockwise** about the origin using $(x, y) \\to (y, -x)$.

**1)** $M(2, 7) \\to M'(\\,?,\\ ?\\,)$ — $x$ then $y$.
**2)** $N(-4, 3) \\to N'(\\,?,\\ ?\\,)$ — $x$ then $y$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['7', '-2', '3', '4'],
          hint1: 'The rule $(x, y) \\to (y, -x)$ puts the old $y$ first and the *negative of the old $x$* second.',
          hint2: 'For $M(2, 7)$: new $x = 7$, new $y = -2$, so $M\'(7, -2)$.',
          hint3: 'For $N(-4, 3)$: new $x = 3$, new $y = -(-4) = 4$, so $N\'(3, 4)$.',
          explanation: '1) $M(2,7) \\to (7, -2)$.  2) $N(-4,3) \\to (3, 4)$. Old $y$ becomes the new $x$; the negated old $x$ becomes the new $y$.',
        },
      },
      {
        id: 'rd2-mixed-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Point $C(-2, 5)$ is rotated $90°$ clockwise about the origin. What is $C\'$?',
              options: ['$(5, 2)$', '$(-5, -2)$', '$(2, -5)$', '$(5, -2)$'],
              correctAnswer: 0,
              explanation: '$90°$ clockwise uses $(x, y) \\to (y, -x)$. So $C(-2, 5) \\to (5, -(-2)) = (5, 2)$.',
            },
            {
              question: 'After rotating a figure $90°$ about the origin, you find the image is congruent but its side lengths look halved. What went wrong?',
              options: ['Nothing — a rotation never changes side lengths, so a measurement error occurred', 'Rotations always halve lengths', 'A 90° rotation only works on triangles', 'The figure was too far from the origin'],
              correctAnswer: 0,
              explanation: 'Rotations are rigid motions and never change side lengths. If the image appears resized, the rotation was applied incorrectly or measured incorrectly — lengths must match exactly.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rotations-dilations',
    sections: [
      {
        id: 'rd3-intro',
        type: 'text' as const,
        content: `# 🔄 Rotations & Dilations

**Part 3 of 5 — Dilations: Resizing a Figure**

---

> 🔑 **A New Kind of Transformation:** Rotations keep size fixed. A **dilation** does the opposite job — it **stretches or shrinks** a figure while keeping its shape. The result is **similar** (same shape, proportional size), not congruent.`,
      },
      {
        id: 'rd3-what',
        type: 'text' as const,
        content: `## What Is a Dilation?

A **dilation** resizes a figure away from (or toward) a fixed **center of dilation** by a number called the **scale factor**, written $k$.

$$\\text{dilation about origin:}\\quad (x, y) \\to (kx,\\ ky)$$

Every coordinate is multiplied by $k$. The scale factor tells you what happens:

| Scale factor $k$ | Effect |
|------------------|--------|
| $k > 1$ | **enlargement** — figure gets bigger |
| $k = 1$ | no change (same figure) |
| $0 < k < 1$ | **reduction** — figure gets smaller |

> 🔑 **Key Idea:** A dilation produces a figure that is **similar** to the original. All angles stay equal, and every length is multiplied by $k$. Only when $k = 1$ is the image also congruent.

> ⚠️ **Don't confuse the two!** A *rotation* keeps size and changes orientation. A *dilation* keeps orientation and changes size.`,
      },
      {
        id: 'rd3-classify-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A dilation with scale factor $k = \\frac{1}{3}$ produces an image that is:',
              options: ['Smaller than the original (a reduction)', 'Larger than the original (an enlargement)', 'The exact same size', 'A rotated copy'],
              correctAnswer: 0,
              explanation: 'When $0 < k < 1$, the dilation is a reduction: each length is multiplied by $\\frac{1}{3}$, so the image is one-third the size.',
            },
            {
              question: 'Compared with the original, a dilated figure is always:',
              options: ['Similar (same shape, proportional sizes)', 'Congruent (identical)', 'Rotated 180°', 'A mirror image'],
              correctAnswer: 0,
              explanation: 'A dilation preserves shape and all angle measures but scales lengths by $k$, so the image is similar to the original. It is congruent only in the special case $k = 1$.',
            },
          ],
        },
      },
      {
        id: 'rd3-worked',
        type: 'text' as const,
        content: `## Dilating Points and Figures (center = origin)

Multiply **every** coordinate by the scale factor $k$.

### Worked Example: dilate $D(3, -6)$ by $k = 2$

$$D(3, -6) \\to D'(2 \\cdot 3,\\ 2 \\cdot (-6)) = D'(6, -12)$$

The point moved **twice as far** from the origin in every direction.

### Worked Example: dilate a triangle by $k = \\frac{1}{2}$

Vertices $A(4, 2)$, $B(8, 6)$, $C(2, -4)$ with $k = \\frac{1}{2}$:

$$A(4, 2) \\to A'(2, 1)$$
$$B(8, 6) \\to B'(4, 3)$$
$$C(2, -4) \\to C'(1, -2)$$

Each coordinate was halved, so the image triangle is half the size — a reduction.

> 💡 **Distance from the center scales by $k$ too.** If a vertex was $10$ units from the origin and $k = \\frac{1}{2}$, the image vertex sits $5$ units from the origin along the same ray.`,
      },
      {
        id: 'rd3-dilate-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Scale Factor** 🧮

Dilate each point about the origin. Multiply both coordinates by $k$.

**1)** $P(5, 3)$ with $k = 4 \\to P'(\\,?,\\ ?\\,)$ — $x$ then $y$.
**2)** $Q(-8, 12)$ with $k = \\frac{1}{4} \\to Q'(\\,?,\\ ?\\,)$ — $x$ then $y$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['20', '12', '-2', '3'],
          hint1: 'A dilation about the origin uses $(x, y) \\to (kx, ky)$ — multiply BOTH coordinates by $k$.',
          hint2: 'For $P(5, 3)$ with $k = 4$: $(4 \\cdot 5,\\ 4 \\cdot 3) = (20, 12)$.',
          hint3: 'For $Q(-8, 12)$ with $k = \\frac{1}{4}$: $\\left(\\frac{-8}{4},\\ \\frac{12}{4}\\right) = (-2, 3)$.',
          explanation: '1) $P(5,3) \\to (20, 12)$ — an enlargement.  2) $Q(-8,12) \\to (-2, 3)$ — a reduction. Every coordinate is multiplied by $k$.',
        },
      },
      {
        id: 'rd3-find-k',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A point at $(3, 5)$ is dilated about the origin to $(9, 15)$. What is the scale factor $k$?',
              options: ['$3$', '$\\frac{1}{3}$', '$6$', '$2$'],
              correctAnswer: 0,
              explanation: 'Find $k$ by dividing an image coordinate by the matching original: $\\frac{9}{3} = 3$ (and $\\frac{15}{5} = 3$). So $k = 3$, an enlargement.',
            },
            {
              question: 'A side of length $12$ becomes length $4$ after a dilation. The scale factor is:',
              options: ['$\\frac{1}{3}$', '$3$', '$8$', '$\\frac{1}{4}$'],
              correctAnswer: 0,
              explanation: '$k = \\frac{\\text{image length}}{\\text{original length}} = \\frac{4}{12} = \\frac{1}{3}$. Since $0 < k < 1$, it is a reduction.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rotations-dilations',
    sections: [
      {
        id: 'rd4-intro',
        type: 'text' as const,
        content: `# 🔄 Rotations & Dilations

**Part 4 of 5 — Comparing, Combining & Working Backward**

---

> 🔑 **Putting It Together:** You can now rotate and dilate. This part sharpens the difference between them, finds an unknown scale factor or angle, and chains transformations into a single sequence.`,
      },
      {
        id: 'rd4-compare',
        type: 'text' as const,
        content: `## Rotation vs. Dilation at a Glance

| Feature | Rotation | Dilation |
|---------|----------|----------|
| Changes size? | **No** | **Yes** (unless $k = 1$) |
| Changes shape? | No | No |
| Changes orientation/facing? | **Yes** | No |
| Image is... | **congruent** | **similar** |
| Type of motion | rigid (isometry) | non-rigid (when $k \\ne 1$) |
| Origin rule | e.g. $(x,y)\\to(-y,x)$ | $(x,y)\\to(kx,ky)$ |

> 💡 Both transformations **preserve angle measures** and keep the figure's overall shape. The dividing line is size: a rotation never resizes, while a dilation (with $k \\ne 1$) always does.`,
      },
      {
        id: 'rd4-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Rotation or Dilation?** 🔽

For each described change, choose whether it is a rotation or a dilation, and whether the image is congruent or similar.`,
        exercise: {
          dropdowns: [
            { label: 'A figure is turned $90°$ about the origin; size unchanged. This is a:', options: ['rotation', 'dilation'] },
            { label: 'That same image is...', options: ['congruent to the original', 'a reduction of the original'] },
            { label: 'A figure is enlarged so every side triples. This is a:', options: ['dilation', 'rotation'] },
            { label: 'That enlarged image is...', options: ['similar to the original', 'congruent to the original'] },
          ],
          correctAnswers: ['rotation', 'congruent to the original', 'dilation', 'similar to the original'],
          hint1: 'Size unchanged + new facing direction = rotation; size changed = dilation.',
          hint2: 'A rotation keeps everything the same size, so the image is congruent.',
          hint3: 'Tripling every side is a dilation with $k = 3$; scaling makes the image similar, not congruent.',
          explanation: 'Turning without resizing is a rotation, and its image is congruent. Tripling the sides is a dilation ($k=3$), and its image is similar to the original.',
        },
      },
      {
        id: 'rd4-find-angle',
        type: 'text' as const,
        content: `## Working Backward to Find the Transformation

Sometimes you are given the pre-image and image and must identify the transformation.

### Find the rotation: $A(1, 4) \\to A'(-4, 1)$

Test the rules. Does $(x, y) \\to (-y, x)$ fit? $(-4, 1)$ would need $-y = -4$ (so $y = 4$ ✓) and $x = 1$ ✓. **It's a $90°$ counterclockwise rotation.**

### Find the scale factor: $B(2, 5) \\to B'(8, 20)$

Divide matching coordinates: $\\frac{8}{2} = 4$ and $\\frac{20}{5} = 4$. **It's a dilation with $k = 4$.**

> ⚠️ **Always test BOTH coordinates.** A real dilation gives the *same* $k$ from $x$ and from $y$. If the two ratios disagree, it is not a single dilation about the origin.`,
      },
      {
        id: 'rd4-backward-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Value** 🧮

**1)** Dilation about the origin: $(6, -9) \\to (2, -3)$. What is the scale factor $k$? *(fraction or decimal)*
**2)** Dilation about the origin with $k = 5$ sends $(x, y) \\to (35, -10)$. Find the original $x$, then the original $y$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/3', '7', '-2'],
          hint1: 'For (1), divide an image coordinate by its original: $\\frac{2}{6}$.',
          hint2: '$\\frac{2}{6} = \\frac{1}{3}$ (and $\\frac{-3}{-9} = \\frac{1}{3}$), so $k = \\frac{1}{3}$.',
          hint3: 'For (2), undo $k = 5$ by dividing: original $x = \\frac{35}{5} = 7$ and original $y = \\frac{-10}{5} = -2$.',
          explanation: '1) $k = \\frac{2}{6} = \\frac{1}{3}$.  2) Divide the image by $5$: $x = 7$, $y = -2$, so the original point was $(7, -2)$.',
        },
      },
      {
        id: 'rd4-compose',
        type: 'text' as const,
        content: `## Combining Two Transformations

You can apply one transformation, then another, to the result. Order matters — but doing the steps carefully keeps it simple.

### Worked Example: rotate $90°$ CCW, then dilate by $k = 2$

Start with $P(3, 1)$.

**Step 1 — rotate $90°$ CCW** with $(x, y) \\to (-y, x)$:
$$P(3, 1) \\to P'(-1, 3)$$

**Step 2 — dilate $P'$ by $k = 2$** with $(x, y) \\to (2x, 2y)$:
$$P'(-1, 3) \\to P''(-2, 6)$$

The final image $P''(-2, 6)$ is both turned a quarter-turn and twice as far from the origin.

> 💡 A rotation-then-dilation (or the reverse) is called a **similarity transformation**: the final image is always **similar** to the original, because only the dilation step changes size.`,
      },
      {
        id: 'rd4-compose-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Apply a $180°$ rotation about the origin, then a dilation with $k = 3$, to $T(2, -1)$. What is the final image?',
              options: ['$(-6, 3)$', '$(6, -3)$', '$(-2, 1)$', '$(-6, -3)$'],
              correctAnswer: 0,
              explanation: 'Step 1: $180°$ gives $(x,y)\\to(-x,-y)$, so $T(2,-1)\\to(-2, 1)$. Step 2: dilate by $3$, so $(-2,1)\\to(-6, 3)$.',
            },
            {
              question: 'After any rotation followed by a dilation with $k \\ne 1$, the final image is:',
              options: ['Similar to the original', 'Congruent to the original', 'A reflection of the original', 'Always larger than the original'],
              correctAnswer: 0,
              explanation: 'The rotation preserves size and the dilation scales it, so the combined image has the same shape but a different size — it is similar to the original.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rotations-dilations',
    sections: [
      {
        id: 'rd5-intro',
        type: 'text' as const,
        content: `# 🔄 Rotations & Dilations

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) rotate $90°$, $180°$, and $270°$ about the origin, (2) handle clockwise turns, (3) dilate by any scale factor, (4) tell rotations from dilations, and (5) work backward to find an angle or scale factor. Let's bring it all together.`,
      },
      {
        id: 'rd5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Rotate $90°$ CCW about origin | $(x, y) \\to (-y, x)$ |
| Rotate $180°$ about origin | $(x, y) \\to (-x, -y)$ |
| Rotate $270°$ CCW (= $90°$ CW) | $(x, y) \\to (y, -x)$ |
| Dilate about origin by $k$ | $(x, y) \\to (kx, ky)$ |
| Find scale factor $k$ | $k = \\dfrac{\\text{image length}}{\\text{original length}}$ |
| Decide congruent vs. similar | rotation $\\Rightarrow$ congruent; dilation ($k\\ne 1$) $\\Rightarrow$ similar |

> ⚠️ **Remember the big contrast:** a **rotation** keeps size and changes facing; a **dilation** keeps facing and changes size. Both keep the shape and all angle measures.`,
      },
      {
        id: 'rd5-mixed',
        type: 'dropdown-select' as const,
        content: `**Mixed Practice** 🔽

Fill in each result.`,
        exercise: {
          dropdowns: [
            { label: 'Rotate $(4, -2)$ by $90°$ CCW about the origin:', options: ['$(2, 4)$', '$(-2, -4)$', '$(2, -4)$', '$(-4, 2)$'] },
            { label: 'Dilate $(4, -2)$ about the origin by $k = \\frac{1}{2}$:', options: ['$(2, -1)$', '$(8, -4)$', '$(2, 1)$', '$(-2, 1)$'] },
            { label: 'The dilated image is ___ to the original:', options: ['similar', 'congruent'] },
          ],
          correctAnswers: ['$(2, 4)$', '$(2, -1)$', 'similar'],
          hint1: '$90°$ CCW uses $(x, y) \\to (-y, x)$: $(4, -2) \\to (-(-2), 4) = (2, 4)$.',
          hint2: 'Dilating by $\\frac{1}{2}$ halves both coordinates: $(4, -2) \\to (2, -1)$.',
          hint3: 'A dilation with $k \\ne 1$ changes size, so the image is similar (not congruent).',
          explanation: 'Rotation $90°$ CCW: $(4,-2)\\to(2,4)$. Dilation $k=\\frac{1}{2}$: $(4,-2)\\to(2,-1)$. Since the dilation resized the figure, the image is similar to the original.',
        },
      },
      {
        id: 'rd5-app',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

A triangle has a vertex at $V(10, -5)$.

**1)** After a dilation about the origin with $k = \\frac{2}{5}$, the image vertex is $V'(\\,?,\\ ?\\,)$ — enter $x$ then $y$.
**2)** Starting again from $V(10, -5)$, after a $180°$ rotation about the origin, the image vertex is $V''(\\,?,\\ ?\\,)$ — enter $x$ then $y$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['4', '-2', '-10', '5'],
          hint1: 'For the dilation, multiply both coordinates by $\\frac{2}{5}$.',
          hint2: '$\\frac{2}{5} \\cdot 10 = 4$ and $\\frac{2}{5} \\cdot (-5) = -2$, so $V\'(4, -2)$.',
          hint3: 'For the $180°$ rotation use $(x, y) \\to (-x, -y)$: $V(10, -5) \\to (-10, 5)$.',
          explanation: '1) Dilation $k=\\frac{2}{5}$: $(10,-5)\\to(4, -2)$.  2) Rotation $180°$: $(10,-5)\\to(-10, 5)$.',
        },
      },
      {
        id: 'rd5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Rotate $(-3, 7)$ by $270°$ counterclockwise about the origin. The image is:',
              options: ['$(7, 3)$', '$(-7, -3)$', '$(7, -3)$', '$(3, -7)$'],
              correctAnswer: 0,
              explanation: '$270°$ CCW uses $(x, y) \\to (y, -x)$. So $(-3, 7) \\to (7, -(-3)) = (7, 3)$.',
            },
            {
              question: 'A point at $(2, 6)$ is dilated about the origin to $(5, 15)$. The scale factor is:',
              options: ['$\\frac{5}{2}$', '$\\frac{2}{5}$', '$3$', '$\\frac{1}{3}$'],
              correctAnswer: 0,
              explanation: 'Divide matching coordinates: $\\frac{5}{2} = 2.5$ and $\\frac{15}{6} = 2.5$. Both give $k = \\frac{5}{2}$, an enlargement.',
            },
            {
              question: 'Which statement is TRUE about how rotations and dilations differ?',
              options: ['A rotation keeps the size; a dilation (with $k \\ne 1$) changes it', 'A rotation changes the size; a dilation keeps it', 'Both always change the size', 'Both always keep the figure congruent'],
              correctAnswer: 0,
              explanation: 'A rotation is a rigid motion that preserves size (image is congruent). A dilation with $k \\ne 1$ resizes the figure (image is similar). That size difference is the key distinction.',
            },
          ],
        },
      },
    ],
  },
]
