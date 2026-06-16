import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Congruence and Similarity (Grade 8 Math,
 * CCSS 8.G.A.1–8.G.A.5).
 * Registry key / DB Topic.slug: 'congruence-similarity'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 8:
 * congruent figures & corresponding parts, rigid motions (translation, reflection,
 * rotation), similar figures, scale factor & dilations, and using proportions to
 * find missing side lengths. LaTeX uses doubled backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'congruence-similarity',
    sections: [
      {
        id: 'cs1-intro',
        type: 'text' as const,
        content: `# 📐 Congruence and Similarity

**Part 1 of 5 — Congruent Figures**

---

### Topics in This Part

| Section |
|---------|
| What Does "Congruent" Mean? |
| Corresponding Sides and Angles |
| Writing a Congruence Statement |

> 🔑 **Key Concept:** Two figures are **congruent** when they have *exactly the same size and shape*. You could slide, flip, or turn one to land perfectly on top of the other. Same size, same shape — that's congruence.`,
      },
      {
        id: 'cs1-meaning',
        type: 'text' as const,
        content: `## What Does "Congruent" Mean?

Two figures are **congruent** ($\\cong$) if one can be placed exactly on top of the other so that every part matches.

When two figures are congruent:
- **Corresponding sides** are equal in length.
- **Corresponding angles** are equal in measure.

Think of two copies of the same key, or two cut-outs from the same cookie cutter — they fit perfectly.

| Symbol | Meaning |
|--------|---------|
| $\\cong$ | "is congruent to" |
| $=$ | "equals" (used for lengths and angle measures) |

> ⚠️ **Careful with symbols:** We say the *figures* are congruent ($\\triangle ABC \\cong \\triangle DEF$), but their *measurements* are equal ($AB = DE$). Use $\\cong$ for shapes and $=$ for numbers.`,
      },
      {
        id: 'cs1-corresponding',
        type: 'text' as const,
        content: `## Corresponding Sides and Angles

"Corresponding" parts are the parts that **match up** when the figures are lined up.

Suppose $\\triangle ABC \\cong \\triangle DEF$. The order of the letters tells you what matches what:

$$A \\leftrightarrow D, \\quad B \\leftrightarrow E, \\quad C \\leftrightarrow F$$

So the corresponding parts are:

| Corresponding Angles | Corresponding Sides |
|----------------------|---------------------|
| $\\angle A = \\angle D$ | $AB = DE$ |
| $\\angle B = \\angle E$ | $BC = EF$ |
| $\\angle C = \\angle F$ | $AC = DF$ |

> 🔑 **Read the statement in order!** In $\\triangle ABC \\cong \\triangle DEF$, the first letters ($A$ and $D$) correspond, the second letters ($B$ and $E$) correspond, and the third letters ($C$ and $F$) correspond.`,
      },
      {
        id: 'cs1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Parts** 🔽

Given $\\triangle ABC \\cong \\triangle DEF$, choose the part that corresponds to each one.`,
        exercise: {
          dropdowns: [
            { label: '$\\angle B$ corresponds to:', options: ['$\\angle E$', '$\\angle D$', '$\\angle F$', '$\\angle A$'] },
            { label: '$\\overline{AC}$ corresponds to:', options: ['$\\overline{DF}$', '$\\overline{DE}$', '$\\overline{EF}$', '$\\overline{BC}$'] },
            { label: '$\\angle F$ corresponds to:', options: ['$\\angle C$', '$\\angle A$', '$\\angle B$', '$\\angle E$'] },
          ],
          correctAnswers: ['$\\angle E$', '$\\overline{DF}$', '$\\angle C$'],
          hint1: 'Line up the letters in order: $A\\leftrightarrow D$, $B\\leftrightarrow E$, $C\\leftrightarrow F$.',
          hint2: '$\\overline{AC}$ uses the first and third letters, so its match uses $D$ and $F$: $\\overline{DF}$.',
          hint3: '$F$ is the third letter of $\\triangle DEF$, matching $C$, the third letter of $\\triangle ABC$.',
          explanation: '$\\angle B \\leftrightarrow \\angle E$, $\\overline{AC} \\leftrightarrow \\overline{DF}$, and $\\angle F \\leftrightarrow \\angle C$ — always read the vertices in matching order.',
        },
      },
      {
        id: 'cs1-naming-note',
        type: 'text' as const,
        content: `## Why the Order Matters

Notice that you never had to look at a picture to match those parts — the **order of the letters** told you everything. That's the power of a congruence statement: it carries the matching information inside it.

So whenever you see a statement like $\\triangle PQR \\cong \\triangle STU$, you can read off corresponding parts directly:

$$P \\leftrightarrow S, \\quad Q \\leftrightarrow T, \\quad R \\leftrightarrow U$$

> 💡 Same idea for sides: pair the letters position-by-position. $\\overline{PR}$ (positions 1 and 3) matches $\\overline{SU}$ (positions 1 and 3).`,
      },
      {
        id: 'cs1-match-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the statement $\\triangle PQR \\cong \\triangle STU$, which side corresponds to $\\overline{PQ}$?',
              options: ['$\\overline{ST}$', '$\\overline{TU}$', '$\\overline{SU}$', '$\\overline{QR}$'],
              correctAnswer: 0,
              explanation: 'Read in order: $P \\leftrightarrow S$ and $Q \\leftrightarrow T$. So $\\overline{PQ}$ corresponds to $\\overline{ST}$.',
            },
            {
              question: 'Two figures are congruent. Which statement is always true?',
              options: [
                'They have the same size and the same shape.',
                'They have the same shape but a different size.',
                'They have the same size but a different shape.',
                'They have different colors.',
              ],
              correctAnswer: 0,
              explanation: 'Congruent figures match exactly — same size AND same shape. (Same shape but different size describes *similar* figures, coming up in Part 3.)',
            },
          ],
        },
      },
      {
        id: 'cs1-equal-measures',
        type: 'text' as const,
        content: `## Using Corresponding Parts to Find Measures

Here's where congruence becomes useful: if two figures are congruent, knowing a measurement in **one** instantly gives you the matching measurement in the **other**.

If $\\triangle ABC \\cong \\triangle DEF$ and you measure $AB = 7$, then you automatically know $DE = 7$ — no need to measure it. The same goes for every corresponding side and angle.

> 🔑 **Corresponding Parts Rule:** In congruent figures, *corresponding parts are equal*. Match the letters, copy the measurement.`,
      },
      {
        id: 'cs1-values-drill',
        type: 'input-boxes' as const,
        content: `**Use Corresponding Parts** 🧮

Given $\\triangle ABC \\cong \\triangle DEF$ with $AB = 7$, $BC = 10$, $AC = 5$, and $\\angle A = 40^\\circ$, find each measurement.

**1)** $DE = \\,?$
**2)** $EF = \\,?$
**3)** $\\angle D = \\,?$ *(in degrees, just the number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '10', '40'],
          hint1: 'Corresponding parts of congruent figures are equal. $DE$ corresponds to $AB$.',
          hint2: '$EF$ corresponds to $BC$, and $BC = 10$.',
          hint3: '$\\angle D$ corresponds to $\\angle A$, and $\\angle A = 40^\\circ$.',
          explanation: '1) $DE = AB = 7$.  2) $EF = BC = 10$.  3) $\\angle D = \\angle A = 40^\\circ$. Matching letters give matching measures.',
        },
      },
      {
        id: 'cs1-statement',
        type: 'text' as const,
        content: `## Writing a Congruence Statement

When you write a congruence statement, **list the vertices in matching order**. This is not optional — the order *is* the information.

If $\\angle X = \\angle M$, $\\angle Y = \\angle N$, and $\\angle Z = \\angle O$, then you must write:

$$\\triangle XYZ \\cong \\triangle MNO$$

Writing $\\triangle XYZ \\cong \\triangle NMO$ would be **wrong**, because it claims $X$ matches $N$ — which isn't true.

> 💡 A good habit: figure out which vertices match *first*, then write both triangles with their letters in the same matching order. You now know what congruence means — in Part 2 we'll see *how* you can move a figure without changing it.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'congruence-similarity',
    sections: [
      {
        id: 'cs2-intro',
        type: 'text' as const,
        content: `# 📐 Congruence and Similarity

**Part 2 of 5 — Rigid Motions (Transformations)**

---

> 🔑 **The Idea:** A **rigid motion** is a move that slides, flips, or turns a figure *without changing its size or shape*. Two figures are congruent exactly when one can be carried onto the other by a sequence of rigid motions.`,
      },
      {
        id: 'cs2-three-motions',
        type: 'text' as const,
        content: `## The Three Rigid Motions

| Motion | Everyday word | What it does |
|--------|---------------|--------------|
| **Translation** | Slide | Moves every point the same distance in the same direction |
| **Reflection** | Flip | Mirrors the figure across a line |
| **Rotation** | Turn | Spins the figure around a fixed point |

All three are **rigid** — they preserve:
- every **side length**,
- every **angle measure**,
- and therefore the figure stays **congruent** to the original.

> 🔑 **Key Fact:** Rigid motions never stretch, shrink, or distort. The image is always congruent to the original — only its *position* (and maybe its facing direction) changes.`,
      },
      {
        id: 'cs2-translation',
        type: 'text' as const,
        content: `## Translations on the Coordinate Plane

A **translation** slides a figure. We describe it by how far it moves right/left ($x$) and up/down ($y$).

The rule "$(x, y) \\to (x + 3,\\, y - 2)$" means: move every point **3 right and 2 down**.

### Example

Translate the point $A(1, 4)$ by the rule $(x, y) \\to (x + 3,\\, y - 2)$:

$$A'(1 + 3,\\; 4 - 2) = A'(4, 2)$$

The image $A'$ is read "A prime." Do the same arithmetic to *every* vertex, and the whole figure slides as one.

> 💡 A translation changes a point's **location** but never its size — so the image is always congruent to the original.`,
      },
      {
        id: 'cs2-translate-drill',
        type: 'input-boxes' as const,
        content: `**Translate the Point** 🧮

Apply the translation rule $(x, y) \\to (x - 4,\\, y + 5)$ to each point. Enter the new coordinates.

**1)** $B(6, 1) \\to B'(\\,?\\,,\\ ?\\,)$ — enter the new $x$, then the new $y$.
**2)** $C(-2, 3) \\to C'(\\,?\\,,\\ ?\\,)$ — enter the new $x$, then the new $y$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['2', '6', '-6', '8'],
          hint1: 'For $B$: new $x = 6 - 4 = 2$.',
          hint2: 'For $B$: new $y = 1 + 5 = 6$. So $B\'(2, 6)$.',
          hint3: 'For $C$: new $x = -2 - 4 = -6$ and new $y = 3 + 5 = 8$.',
          explanation: '1) $B(6,1) \\to (6-4,\\,1+5) = B\'(2, 6)$.  2) $C(-2,3) \\to (-2-4,\\,3+5) = C\'(-6, 8)$.',
        },
      },
      {
        id: 'cs2-reflection',
        type: 'text' as const,
        content: `## Reflections Across the Axes

A **reflection** flips a figure across a line (the "mirror"). Two common mirrors are the $x$-axis and the $y$-axis.

| Reflection across… | Rule | What changes |
|--------------------|------|--------------|
| the **$x$-axis** | $(x, y) \\to (x,\\, -y)$ | sign of $y$ flips |
| the **$y$-axis** | $(x, y) \\to (-x,\\, y)$ | sign of $x$ flips |

### Example: Reflect $P(3, 5)$ across the $x$-axis

Keep $x$, flip the sign of $y$:

$$P(3, 5) \\to P'(3, -5)$$

> ⚠️ **Don't flip both signs!** Reflecting across the $x$-axis changes *only* the $y$-coordinate's sign. Flipping both signs at once is actually a $180^\\circ$ rotation, not a reflection.`,
      },
      {
        id: 'cs2-motion-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Motion** 🔽

Choose the correct rule or result for each transformation.`,
        exercise: {
          dropdowns: [
            { label: 'Rule for a reflection across the $y$-axis:', options: ['$(x, y) \\to (-x, y)$', '$(x, y) \\to (x, -y)$', '$(x, y) \\to (-x, -y)$', '$(x, y) \\to (y, x)$'] },
            { label: 'A "turn" around a point is a:', options: ['rotation', 'translation', 'reflection', 'dilation'] },
            { label: 'Reflect $(4, -2)$ across the $x$-axis:', options: ['$(4, 2)$', '$(-4, -2)$', '$(-4, 2)$', '$(4, -2)$'] },
          ],
          correctAnswers: ['$(x, y) \\to (-x, y)$', 'rotation', '$(4, 2)$'],
          hint1: 'Reflecting across the $y$-axis flips the sign of $x$ and keeps $y$.',
          hint2: 'A turn (spin) about a fixed point is a rotation.',
          hint3: 'Across the $x$-axis, keep $x$ and flip $y$: $(4, -2) \\to (4, 2)$.',
          explanation: 'Across the $y$-axis: $(x,y)\\to(-x,y)$. A "turn" is a rotation. Across the $x$-axis, $(4,-2)\\to(4,2)$.',
        },
      },
      {
        id: 'cs2-rotation-note',
        type: 'text' as const,
        content: `## What All Three Have in Common

Slides, flips, and turns look different, but they share the one property that matters most for this lesson:

> 🔑 **Rigid motions preserve congruence.** No matter how you translate, reflect, or rotate a figure, the image is the **same size and shape** as the original — so it is always **congruent** to it.

This is the link back to Part 1: two figures are congruent *exactly when* a sequence of these rigid motions carries one onto the other.`,
      },
      {
        id: 'cs2-preserve-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After a translation, reflection, or rotation, the image is always ___ the original.',
              options: ['congruent to', 'similar but not congruent to', 'larger than', 'smaller than'],
              correctAnswer: 0,
              explanation: 'All three are rigid motions: they preserve size and shape, so the image is congruent to the original.',
            },
            {
              question: 'Which of these is NOT a rigid motion?',
              options: ['Dilation (resize)', 'Translation (slide)', 'Reflection (flip)', 'Rotation (turn)'],
              correctAnswer: 0,
              explanation: 'A dilation changes a figure\'s size, so it is not rigid. Slides, flips, and turns all keep the size the same.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'congruence-similarity',
    sections: [
      {
        id: 'cs3-intro',
        type: 'text' as const,
        content: `# 📐 Congruence and Similarity

**Part 3 of 5 — Similar Figures & Scale Factor**

---

> 🔑 **The Idea:** Two figures are **similar** ($\\sim$) when they have the **same shape** but (possibly) a **different size**. Think of a photo and a smaller print of it — same picture, scaled down.`,
      },
      {
        id: 'cs3-similar-meaning',
        type: 'text' as const,
        content: `## What Does "Similar" Mean?

Two figures are **similar** if:
- all pairs of **corresponding angles are equal**, and
- all pairs of **corresponding sides are proportional** (in the same ratio).

| | Congruent ($\\cong$) | Similar ($\\sim$) |
|---|---|---|
| Shape | same | same |
| Size | same | may differ |
| Angles | equal | equal |
| Sides | equal | proportional |

> 🔑 **Key Idea:** Congruent figures are a *special case* of similar figures — they're similar with a size ratio of $1$. Every congruent pair is similar, but not every similar pair is congruent.`,
      },
      {
        id: 'cs3-scale-factor',
        type: 'text' as const,
        content: `## Scale Factor

The **scale factor** is the number you multiply the original's side lengths by to get the new figure's side lengths.

$$\\text{scale factor} = \\frac{\\text{new (image) length}}{\\text{original length}}$$

- Scale factor $> 1$ → the figure gets **bigger** (enlargement).
- Scale factor $< 1$ → the figure gets **smaller** (reduction).
- Scale factor $= 1$ → the figures are **congruent**.

### Example

A triangle has a side of length $4$. A similar triangle has the corresponding side of length $12$.

$$\\text{scale factor} = \\frac{12}{4} = 3$$

Every side of the bigger triangle is $3$ times the matching side of the smaller one.

> 💡 To go *backward* (big → small), use the reciprocal. Here the scale factor from the big triangle to the small one is $\\dfrac{4}{12} = \\dfrac{1}{3}$.`,
      },
      {
        id: 'cs3-scale-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangle\'s width grows from $5$ cm to $20$ cm under a dilation. What is the scale factor?',
              options: ['$4$', '$\\frac{1}{4}$', '$15$', '$\\frac{5}{20}$'],
              correctAnswer: 0,
              explanation: 'Scale factor $= \\dfrac{\\text{new}}{\\text{original}} = \\dfrac{20}{5} = 4$. The figure is enlarged 4 times.',
            },
            {
              question: 'If two figures are similar with a scale factor of $1$, then the figures are:',
              options: ['congruent', 'always larger', 'always smaller', 'never the same'],
              correctAnswer: 0,
              explanation: 'A scale factor of $1$ means the sides are equal, so same size and shape — the figures are congruent.',
            },
          ],
        },
      },
      {
        id: 'cs3-dilation',
        type: 'text' as const,
        content: `## Dilations on the Coordinate Plane

A **dilation** is the transformation that resizes a figure. A dilation centered at the **origin** with scale factor $k$ uses the rule:

$$(x, y) \\to (kx,\\, ky)$$

You multiply **both** coordinates by $k$.

### Example: Dilate $A(2, 3)$ by scale factor $k = 2$ (center at origin)

$$A(2, 3) \\to A'(2 \\cdot 2,\\; 2 \\cdot 3) = A'(4, 6)$$

The image $A'$ is twice as far from the origin as $A$ was.

> ⚠️ **A dilation is NOT a rigid motion** (unless $k = 1$). It changes size, so the image is *similar* to the original — same shape, different size — but generally **not congruent**.`,
      },
      {
        id: 'cs3-dilate-drill',
        type: 'input-boxes' as const,
        content: `**Dilate the Point** 🧮

Each dilation is centered at the origin. Apply the rule $(x, y) \\to (kx,\\, ky)$.

**1)** Dilate $P(3, 5)$ by $k = 2$: enter the new $x$, then the new $y$.
**2)** Dilate $Q(10, 6)$ by $k = \\tfrac{1}{2}$: enter the new $x$, then the new $y$.`,
        exercise: {
          boxes: 4,
          correctAnswers: ['6', '10', '5', '3'],
          hint1: 'Multiply BOTH coordinates by the scale factor.',
          hint2: 'For $P$ with $k=2$: $(3 \\cdot 2,\\, 5 \\cdot 2) = (6, 10)$.',
          hint3: 'For $Q$ with $k=\\tfrac12$: $(10 \\cdot \\tfrac12,\\, 6 \\cdot \\tfrac12) = (5, 3)$.',
          explanation: '1) $P(3,5) \\to (6, 10)$ (enlarged).  2) $Q(10,6) \\to (5, 3)$ (reduced to half size).',
        },
      },
      {
        id: 'cs3-which-relationship',
        type: 'text' as const,
        content: `## Congruent or Just Similar?

Now you have two families of transformations, and they produce different relationships:

| Transformation | Result |
|----------------|--------|
| Translation, reflection, rotation | image is **congruent** to the original |
| Dilation with $k \\ne 1$ | image is **similar** (but not congruent) |

> 💡 A handy test: if a transformation can **change the size**, the result is only *similar*. If the size must stay the same, the result is *congruent*.`,
      },
      {
        id: 'cs3-similar-dropdown',
        type: 'dropdown-select' as const,
        content: `**Congruent or Similar?** 🔽

Decide what relationship each transformation produces.`,
        exercise: {
          dropdowns: [
            { label: 'A figure is rotated $90^\\circ$. Image and original are:', options: ['congruent', 'similar but not congruent', 'neither'] },
            { label: 'A figure is dilated by $k = 3$. Image and original are:', options: ['similar but not congruent', 'congruent', 'neither'] },
            { label: 'Similar figures always have equal corresponding:', options: ['angles', 'side lengths', 'areas', 'perimeters'] },
          ],
          correctAnswers: ['congruent', 'similar but not congruent', 'angles'],
          hint1: 'A rotation is a rigid motion — it keeps the size the same.',
          hint2: 'A dilation with $k \\ne 1$ changes the size, so it is similar but not congruent.',
          hint3: 'In similar figures, corresponding angles are always equal; sides are only proportional.',
          explanation: 'Rotation → congruent. Dilation ($k=3$) → similar but not congruent. Similar figures share equal corresponding angles.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'congruence-similarity',
    sections: [
      {
        id: 'cs4-intro',
        type: 'text' as const,
        content: `# 📐 Congruence and Similarity

**Part 4 of 5 — Finding Missing Lengths with Proportions**

---

> 🔑 **Big Payoff:** Because similar figures have **proportional** sides, you can set up a proportion to find any missing length — including real-world heights and distances you could never measure directly.`,
      },
      {
        id: 'cs4-proportions',
        type: 'text' as const,
        content: `## Setting Up a Proportion

In similar figures, the ratio of any pair of corresponding sides equals the scale factor — and **all** the ratios are equal:

$$\\frac{\\text{side of figure 1}}{\\text{matching side of figure 2}} = \\frac{\\text{another side of figure 1}}{\\text{its match in figure 2}}$$

### Example

$\\triangle ABC \\sim \\triangle DEF$. We know $AB = 6$, $DE = 9$, and $BC = 8$. Find $EF$.

Set up matching ratios and cross-multiply:

$$\\frac{AB}{DE} = \\frac{BC}{EF} \\;\\Rightarrow\\; \\frac{6}{9} = \\frac{8}{EF}$$

$$6 \\cdot EF = 9 \\cdot 8 = 72 \\;\\Rightarrow\\; EF = \\frac{72}{6} = 12$$

> ✅ **Check:** The scale factor from $\\triangle ABC$ to $\\triangle DEF$ is $\\dfrac{9}{6} = 1.5$, and $8 \\times 1.5 = 12$ ✓.`,
      },
      {
        id: 'cs4-find-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\triangle ABC \\sim \\triangle XYZ$ with $AB = 4$, $XY = 10$, and $BC = 6$. Find $YZ$.',
              options: ['$15$', '$12$', '$2.4$', '$24$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{AB}{XY} = \\dfrac{BC}{YZ} \\Rightarrow \\dfrac{4}{10} = \\dfrac{6}{YZ}$. Cross-multiply: $4 \\cdot YZ = 60$, so $YZ = 15$.',
            },
            {
              question: 'Two similar rectangles have a scale factor of $\\frac{1}{3}$ (large → small). If a side of the large rectangle is $21$, the matching side of the small one is:',
              options: ['$7$', '$63$', '$18$', '$24$'],
              correctAnswer: 0,
              explanation: 'Multiply by the scale factor: $21 \\times \\dfrac{1}{3} = 7$.',
            },
          ],
        },
      },
      {
        id: 'cs4-cross-multiply',
        type: 'text' as const,
        content: `## The Cross-Multiply Shortcut

When a proportion has the unknown by itself in one denominator (or numerator), **cross-multiplying** is the fastest way to solve it.

For a proportion $\\dfrac{a}{b} = \\dfrac{c}{d}$, cross-multiplying gives:

$$a \\cdot d = b \\cdot c$$

### Quick Example

$$\\frac{2}{x} = \\frac{6}{18} \\;\\Rightarrow\\; 6x = 2 \\cdot 18 = 36 \\;\\Rightarrow\\; x = 6$$

> 💡 Always multiply along the diagonals, then divide to isolate the unknown. Practice it on the drill below.`,
      },
      {
        id: 'cs4-proportion-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Proportion** 🧮

In each pair of similar figures, find the missing length $x$.

**1)** $\\dfrac{3}{x} = \\dfrac{9}{15}$, so $x = \\,?$
**2)** $\\dfrac{x}{12} = \\dfrac{10}{8}$, so $x = \\,?$
**3)** Two similar triangles have a scale factor of $4$. A side of $2.5$ in the small triangle corresponds to what length in the large one? $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '15', '10'],
          hint1: 'Cross-multiply: $3 \\cdot 15 = 9 \\cdot x$, so $45 = 9x$ and $x = 5$.',
          hint2: 'Cross-multiply: $8x = 12 \\cdot 10 = 120$, so $x = 15$.',
          hint3: 'Multiply by the scale factor: $2.5 \\times 4 = 10$.',
          explanation: '1) $45 = 9x \\Rightarrow x = 5$.  2) $8x = 120 \\Rightarrow x = 15$.  3) $2.5 \\times 4 = 10$.',
        },
      },
      {
        id: 'cs4-shadow',
        type: 'text' as const,
        content: `## Real-World Application: Indirect Measurement

Similar triangles let you measure things you can't reach — like the height of a tree using its **shadow**.

At the same time of day, a tree and a person both cast shadows. The triangles (object + shadow + sun ray) are **similar** because the sun's rays hit at the same angle.

### Example

A $6$-ft person casts a $4$-ft shadow. At the same moment, a tree casts a $20$-ft shadow. How tall is the tree?

$$\\frac{\\text{person height}}{\\text{person shadow}} = \\frac{\\text{tree height}}{\\text{tree shadow}} \\;\\Rightarrow\\; \\frac{6}{4} = \\frac{h}{20}$$

$$4h = 6 \\cdot 20 = 120 \\;\\Rightarrow\\; h = \\frac{120}{4} = 30 \\text{ ft}$$

> 💡 The tree is $30$ feet tall — found without a ladder, just a proportion and a shadow.`,
      },
      {
        id: 'cs4-shadow-drill',
        type: 'input-boxes' as const,
        content: `**Indirect Measurement** 🧮

**1)** A $5$-ft student casts a $3$-ft shadow while a flagpole casts a $18$-ft shadow. How tall is the flagpole, in feet? $h = \\,?$
**2)** A model car is built to scale. The real car is $15$ ft long and the model is $1$ ft long, so the scale factor (real → model) is $\\tfrac{1}{15}$. The real car is $6$ ft wide. How wide is the model, in feet? Enter a fraction or decimal. $w = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['30', '0.4'],
          hint1: 'Set up $\\dfrac{5}{3} = \\dfrac{h}{18}$, then cross-multiply.',
          hint2: '$3h = 5 \\cdot 18 = 90$, so $h = 30$ ft.',
          hint3: 'Model width $= 6 \\times \\dfrac{1}{15} = \\dfrac{6}{15} = 0.4$ ft.',
          explanation: '1) $3h = 90 \\Rightarrow h = 30$ ft.  2) $6 \\times \\tfrac{1}{15} = 0.4$ ft (which is $\\tfrac{2}{5}$ ft).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'congruence-similarity',
    sections: [
      {
        id: 'cs5-intro',
        type: 'text' as const,
        content: `# 📐 Congruence and Similarity

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) identify congruent figures and their corresponding parts, (2) use rigid motions, (3) recognize similar figures and scale factor, and (4) find missing lengths with proportions. Let's put it all together.`,
      },
      {
        id: 'cs5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Decide if congruent | same size **and** same shape ($\\cong$) |
| Decide if similar | same shape, sides **proportional** ($\\sim$) |
| Find scale factor | $\\dfrac{\\text{new length}}{\\text{original length}}$ |
| Translate a point | $(x,y) \\to (x \\pm a,\\, y \\pm b)$ |
| Reflect across $x$-axis | $(x,y) \\to (x, -y)$ |
| Reflect across $y$-axis | $(x,y) \\to (-x, y)$ |
| Dilate (center origin) | $(x,y) \\to (kx, ky)$ |
| Find a missing length | set up a proportion, then cross-multiply |

> ⚠️ **Remember:** Translations, reflections, and rotations keep figures **congruent**. A dilation (with $k \\ne 1$) makes figures **similar but not congruent**.`,
      },
      {
        id: 'cs5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\triangle GHI \\sim \\triangle JKL$ with $GH = 8$, $JK = 12$, and $HI = 10$. Find $KL$.',
              options: ['$15$', '$6$', '$14$', '$20$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{GH}{JK} = \\dfrac{HI}{KL} \\Rightarrow \\dfrac{8}{12} = \\dfrac{10}{KL}$. Cross-multiply: $8 \\cdot KL = 120$, so $KL = 15$.',
            },
            {
              question: 'Reflect the point $(-5, 2)$ across the $y$-axis.',
              options: ['$(5, 2)$', '$(-5, -2)$', '$(5, -2)$', '$(2, -5)$'],
              correctAnswer: 0,
              explanation: 'Reflecting across the $y$-axis flips the sign of $x$ and keeps $y$: $(-5, 2) \\to (5, 2)$.',
            },
          ],
        },
      },
      {
        id: 'cs5-blend-note',
        type: 'text' as const,
        content: `## Blending the Skills

The next check mixes all four ideas — corresponding parts, dilations, the congruent-vs-similar distinction — into one set of dropdowns. Slow down on each one and ask yourself:

- Are the letters in matching order? (corresponding parts)
- Does the size change? (congruent vs. similar)
- Am I multiplying *both* coordinates? (dilation)

> 💡 You have everything you need — these just ask you to pick the right tool for each line.`,
      },
      {
        id: 'cs5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Putting It Together** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'In $\\triangle ABC \\cong \\triangle RST$, $\\angle B$ corresponds to:', options: ['$\\angle S$', '$\\angle R$', '$\\angle T$', '$\\angle A$'] },
            { label: 'Dilating $(3, 4)$ by $k = 3$ (center origin) gives:', options: ['$(9, 12)$', '$(6, 7)$', '$(1, \\tfrac{4}{3})$', '$(3, 4)$'] },
            { label: 'Two figures with equal angles but a scale factor of $2$ are:', options: ['similar', 'congruent', 'neither'] },
          ],
          correctAnswers: ['$\\angle S$', '$(9, 12)$', 'similar'],
          hint1: 'Read in order: $A\\leftrightarrow R$, $B\\leftrightarrow S$, $C\\leftrightarrow T$.',
          hint2: 'Multiply both coordinates by $3$: $(3\\cdot3,\\,4\\cdot3) = (9, 12)$.',
          hint3: 'A scale factor of $2$ (not $1$) means same shape, different size → similar.',
          explanation: '$\\angle B \\leftrightarrow \\angle S$. Dilating $(3,4)$ by $3 \\to (9,12)$. A scale factor of $2$ makes them similar (not congruent).',
        },
      },
      {
        id: 'cs5-ready',
        type: 'text' as const,
        content: `## You're Ready

Take stock of what you can now do:

- ✅ Spot congruent figures and read off corresponding sides and angles.
- ✅ Slide, flip, and turn figures with the right coordinate rules.
- ✅ Tell congruent figures from merely similar ones, using scale factor.
- ✅ Solve a proportion to find any missing length — even a tree's height.

One last quiz to lock it in.`,
      },
      {
        id: 'cs5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which transformation produces an image that is similar to, but NOT congruent to, the original?',
              options: ['A dilation with scale factor $2$', 'A translation 5 units right', 'A reflection across the $x$-axis', 'A rotation of $90^\\circ$'],
              correctAnswer: 0,
              explanation: 'A dilation with $k = 2$ changes the size, giving a similar (same shape) but non-congruent image. The other three are rigid motions, so they give congruent images.',
            },
            {
              question: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 5$, $DE = 15$, and $AC = 4$. Find $DF$.',
              options: ['$12$', '$10$', '$8$', '$20$'],
              correctAnswer: 0,
              explanation: 'The scale factor is $\\dfrac{DE}{AB} = \\dfrac{15}{5} = 3$, so $DF = AC \\times 3 = 4 \\times 3 = 12$.',
            },
            {
              question: 'A $6$-ft person casts a $9$-ft shadow while a building casts a $60$-ft shadow at the same time. How tall is the building?',
              options: ['$40$ ft', '$90$ ft', '$57$ ft', '$36$ ft'],
              correctAnswer: 0,
              explanation: '$\\dfrac{6}{9} = \\dfrac{h}{60} \\Rightarrow 9h = 360 \\Rightarrow h = 40$ ft.',
            },
          ],
        },
      },
    ],
  },
]
