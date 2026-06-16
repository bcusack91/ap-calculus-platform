import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Ellipses and Hyperbolas (AP Precalculus).
 * Registry key: 'ellipses-hyperbolas' (matches the DB Topic.slug, no alias needed).
 * 7 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'ellipses-hyperbolas',
    sections: [
      {
        id: 'eh1-intro',
        type: 'text' as const,
        content: `# 🛰️ Ellipses & Hyperbolas

**Part 1 of 7 — Slicing the Cone**

---

### Topics in This Part

| Section |
|---------|
| What Is a Conic Section? |
| The Two Defining Distances |
| Anatomy of an Ellipse |
| Anatomy of a Hyperbola |

> 🔑 **Key Concept:** An **ellipse** and a **hyperbola** both come from slicing a double cone. Each is defined by a rule about **distances to two fixed points** called *foci*. The ellipse *adds* those distances; the hyperbola *subtracts* them. Master that one contrast and everything else follows.`,
      },
      {
        id: 'eh1-conic',
        type: 'text' as const,
        content: `## What Is a Conic Section?

A **conic section** is the curve you get when a flat plane slices through a double cone. The *angle* of the slice decides the shape:

| Slice angle | Curve |
|-------------|-------|
| Perpendicular to the axis | **Circle** |
| Tilted, but cuts one nappe cleanly | **Ellipse** |
| Parallel to a slant edge | **Parabola** |
| Steep — cuts **both** nappes | **Hyperbola** |

In this lesson we focus on the two "closed-vs-open" twins:

- An **ellipse** is a closed, oval loop (a circle is the special case where it is perfectly round).
- A **hyperbola** is *two* separate open branches that fly apart forever.

> 💡 A circle is just an ellipse whose two foci have merged into a single center. Everything you learn about ellipses contains circles as a special case.`,
      },
      {
        id: 'eh1-focidef',
        type: 'text' as const,
        content: `## The Two Defining Distances

Every ellipse and hyperbola has two special interior points called **foci** (singular: *focus*). The whole curve is built from a distance rule involving those foci.

**Ellipse — the sum is constant.** For *every* point $P$ on an ellipse, the sum of the distances to the two foci is the same fixed number, $2a$:

$$d(P, F_1) + d(P, F_2) = 2a$$

> 💡 The "thumbtack and string" trick: pin two tacks (the foci), loop a string around them, and trace with a pencil pulled taut. Because the string length never changes, the **sum** of distances stays constant — and you draw a perfect ellipse.

**Hyperbola — the *difference* is constant.** For every point $P$ on a hyperbola, the *absolute difference* of the distances to the two foci is fixed at $2a$:

$$\\left| d(P, F_1) - d(P, F_2) \\right| = 2a$$

> 🔑 One word — *sum* vs. *difference* — is the entire difference between the two curves' definitions.`,
      },
      {
        id: 'eh1-defcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A point $P$ lies on an ellipse. Which quantity is the SAME for every point on that ellipse?',
              options: [
                'The sum of the distances from $P$ to the two foci',
                'The difference of the distances from $P$ to the two foci',
                'The distance from $P$ to the center',
                'The product of the distances from $P$ to the two foci',
              ],
              correctAnswer: 0,
              explanation: 'An ellipse is defined by a constant SUM of focal distances, $d(P,F_1)+d(P,F_2)=2a$. The difference rule is what defines a hyperbola.',
            },
            {
              question: 'Which conic section is produced when a plane cuts through BOTH nappes of a double cone?',
              options: ['Hyperbola', 'Ellipse', 'Circle', 'Parabola'],
              correctAnswer: 0,
              explanation: 'Only a steep enough slice reaches both nappes of the cone, producing the two separate branches of a hyperbola. Ellipses and circles stay within a single nappe.',
            },
          ],
        },
      },
      {
        id: 'eh1-anatomy-ellipse',
        type: 'text' as const,
        content: `## Anatomy of an Ellipse

Picture a horizontal ellipse centered at the origin:

| Feature | Meaning |
|---------|---------|
| **Center** | The midpoint of the ellipse, $(h, k)$ |
| **Major axis** | The *longer* axis; length $2a$ |
| **Minor axis** | The *shorter* axis; length $2b$ |
| **Vertices** | Endpoints of the **major** axis (distance $a$ from center) |
| **Co-vertices** | Endpoints of the **minor** axis (distance $b$ from center) |
| **Foci** | Two points on the major axis, distance $c$ from center |

Because the major axis is the longer one, we always have $a > b > 0$ for an ellipse. The foci live *inside* the ellipse on the major axis.

> ⚠️ For an ellipse, $a$ is **always** the bigger of $a$ and $b$ — $a$ is whichever number sits under the **longer** axis, not necessarily under $x^2$.`,
      },
      {
        id: 'eh1-anatomy-hyperbola',
        type: 'text' as const,
        content: `## Anatomy of a Hyperbola

Now a horizontal hyperbola centered at the origin:

| Feature | Meaning |
|---------|---------|
| **Center** | The midpoint between the two branches, $(h, k)$ |
| **Transverse axis** | The axis that passes *through* both vertices; length $2a$ |
| **Vertices** | The two "tips" where the branches turn around (distance $a$ from center) |
| **Foci** | Two points beyond the vertices (distance $c$ from center) |
| **Asymptotes** | Two crossing lines the branches approach but never touch |

> ⚠️ For a hyperbola, $a$ is **not** necessarily larger than $b$. Here $a$ is whatever sits under the **positive** term, and the foci are even farther out than the vertices, so $c > a$. We'll nail the $a, b, c$ relationships in Part 2 — they are *different* for each curve.`,
      },
      {
        id: 'eh1-match',
        type: 'dropdown-select' as const,
        content: `**Match the Vocabulary** 🔽

Choose the correct term for each description.`,
        exercise: {
          dropdowns: [
            { label: 'The longer axis of an ellipse is the:', options: ['major axis', 'minor axis', 'transverse axis', 'asymptote'] },
            { label: 'The tips of a hyperbola where each branch turns around are the:', options: ['vertices', 'co-vertices', 'foci', 'center'] },
            { label: 'Lines a hyperbola approaches but never reaches are its:', options: ['asymptotes', 'axes', 'directrices', 'vertices'] },
          ],
          correctAnswers: ['major axis', 'vertices', 'asymptotes'],
          hint1: 'On an ellipse, "major" means bigger — the longer axis.',
          hint2: 'A hyperbola has only two vertices, one on each branch, at the closest approach of the branches.',
          hint3: 'Asymptotes guide the far-out shape of a hyperbola; ellipses have none.',
          explanation: 'Ellipse: longer axis = major axis. Hyperbola: turning points = vertices, and the branches hug their asymptotes as they go to infinity.',
        },
      },
      {
        id: 'eh1-defcalc',
        type: 'input-boxes' as const,
        content: `**Apply the Definitions** 🧮

Use the distance rules directly. (No equations needed — just the focal-distance definitions.)

**1)** A point $P$ lies on an ellipse with $2a = 20$. Its distance to one focus is $d(P, F_1) = 7$. What is $d(P, F_2)$?
**2)** A point $Q$ lies on a hyperbola with $2a = 12$. Its distances to the foci are $d(Q, F_1) = 15$ and $d(Q, F_2) = ?$, where $Q$ is on the branch nearer $F_2$ (so $d(Q,F_1) > d(Q,F_2)$). Find $d(Q, F_2)$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['13', '3'],
          hint1: 'Ellipse: the SUM is $2a$. So $d(P,F_1) + d(P,F_2) = 20$.',
          hint2: 'Hyperbola: the absolute DIFFERENCE is $2a = 12$. So $|d(Q,F_1) - d(Q,F_2)| = 12$.',
          hint3: 'For (2), $15 - d(Q,F_2) = 12$, so $d(Q,F_2) = 3$.',
          explanation: '1) Ellipse sum rule: $d(P,F_2) = 2a - d(P,F_1) = 20 - 7 = 13$. 2) Hyperbola difference rule: $15 - d(Q,F_2) = 12 \\Rightarrow d(Q,F_2) = 3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'ellipses-hyperbolas',
    sections: [
      {
        id: 'eh2-intro',
        type: 'text' as const,
        content: `# 🛰️ Ellipses & Hyperbolas

**Part 2 of 7 — The Standard Equations**

---

> 🔑 **The Goal:** Read a standard-form equation and instantly extract the center, the orientation, and the values of $a$, $b$, and $c$. The plus/minus sign between the two terms is the single most important clue.`,
      },
      {
        id: 'eh2-forms',
        type: 'text' as const,
        content: `## The Two Standard Forms (centered at the origin)

**Ellipse** — the two terms are **added** and the right side is $1$:

$$\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$$

**Hyperbola** — the two terms are **subtracted**:

$$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 \\qquad\\text{or}\\qquad \\frac{y^2}{a^2} - \\frac{x^2}{b^2} = 1$$

> 🔑 **The sign tells you the shape.** A **plus** sign means *ellipse*; a **minus** sign means *hyperbola*. Always rearrange to "$= 1$" before reading anything off.`,
      },
      {
        id: 'eh2-abc',
        type: 'text' as const,
        content: `## The $a$, $b$, $c$ Relationships — They Differ!

This is the table students most often confuse. The relationship between $a$, $b$, and $c$ is **opposite** for the two curves:

| | Ellipse | Hyperbola |
|---|---------|-----------|
| Sign between terms | $+$ | $-$ |
| Key relationship | $c^2 = a^2 - b^2$ | $c^2 = a^2 + b^2$ |
| Which is biggest? | $a$ is largest ($a>b$, $a>c$) | $c$ is largest ($c>a$, $c>b$) |
| $a^2$ sits under… | the **longer** axis | the **positive** term |

> ⚠️ **Do not memorize "$a$ is under $x^2$."** For an ellipse, $a^2$ is the *larger* denominator (under the longer axis). For a hyperbola, $a^2$ is the denominator of the *positive* term — whether that's the $x$-term or the $y$-term.

**Why the sign flip in the formula?** In an ellipse the foci sit *inside* (closer to center than the vertices), so $c < a$ and $c^2 = a^2 - b^2$. In a hyperbola the foci sit *outside* the vertices, so $c > a$ and $c^2 = a^2 + b^2$.`,
      },
      {
        id: 'eh2-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What conic is $\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$?',
              options: ['Hyperbola', 'Ellipse', 'Circle', 'Parabola'],
              correctAnswer: 0,
              explanation: 'The minus sign between the terms (with $=1$ on the right) signals a hyperbola.',
            },
            {
              question: 'For the ellipse $\\dfrac{x^2}{25} + \\dfrac{y^2}{4} = 1$, which value is $a^2$?',
              options: ['$25$', '$4$', '$21$', '$29$'],
              correctAnswer: 0,
              explanation: 'For an ellipse $a^2$ is the LARGER denominator (under the longer axis). Here $25 > 4$, so $a^2 = 25$ and $b^2 = 4$.',
            },
            {
              question: 'For the hyperbola $\\dfrac{y^2}{9} - \\dfrac{x^2}{16} = 1$, which value is $a^2$?',
              options: ['$9$', '$16$', '$25$', '$7$'],
              correctAnswer: 0,
              explanation: 'For a hyperbola $a^2$ is the denominator of the POSITIVE term. The $y^2$ term is positive, so $a^2 = 9$ (and $b^2 = 16$). Notice $a^2$ is NOT the larger value here.',
            },
          ],
        },
      },
      {
        id: 'eh2-orientation',
        type: 'text' as const,
        content: `## Orientation: Which Way Does It Open?

**Ellipse.** The **longer** axis lies along the variable with the **larger** denominator.
- Larger denominator under $x^2$ → major axis is **horizontal** (wider than tall).
- Larger denominator under $y^2$ → major axis is **vertical** (taller than wide).

**Hyperbola.** The branches open along the variable of the **positive** term.
- $x^2$ positive → opens **left/right** (horizontal transverse axis).
- $y^2$ positive → opens **up/down** (vertical transverse axis).

> 💡 For a hyperbola, the size of the denominators does **not** decide orientation — only the **sign** does. $\\dfrac{y^2}{4} - \\dfrac{x^2}{25} = 1$ opens up/down even though $25 > 4$.`,
      },
      {
        id: 'eh2-orient-drill',
        type: 'dropdown-select' as const,
        content: `**Read the Orientation** 🔽

For each equation, choose the conic type and how it opens.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{x^2}{9} + \\dfrac{y^2}{36} = 1$ is a:', options: ['vertical ellipse', 'horizontal ellipse', 'vertical hyperbola', 'horizontal hyperbola'] },
            { label: '$\\dfrac{x^2}{36} - \\dfrac{y^2}{9} = 1$ is a:', options: ['horizontal hyperbola', 'vertical hyperbola', 'horizontal ellipse', 'vertical ellipse'] },
            { label: '$\\dfrac{y^2}{4} - \\dfrac{x^2}{25} = 1$ is a:', options: ['vertical hyperbola', 'horizontal hyperbola', 'vertical ellipse', 'horizontal ellipse'] },
          ],
          correctAnswers: ['vertical ellipse', 'horizontal hyperbola', 'vertical hyperbola'],
          hint1: 'Plus sign → ellipse; the major axis is under the LARGER denominator.',
          hint2: 'Minus sign → hyperbola; it opens along the POSITIVE term.',
          hint3: 'In the last one the $y^2$ term is positive, so it opens up/down (vertical) regardless of which denominator is larger.',
          explanation: '1) $+$, larger denom under $y^2$ → vertical ellipse. 2) $-$, $x^2$ positive → horizontal hyperbola. 3) $-$, $y^2$ positive → vertical hyperbola.',
        },
      },
      {
        id: 'eh2-asquared-drill',
        type: 'input-boxes' as const,
        content: `**Pick Out $a^2$** 🧮

Remember: for an **ellipse** $a^2$ is the **larger** denominator; for a **hyperbola** $a^2$ is the denominator of the **positive** term. Enter the value of $a^2$.

**1)** Ellipse $\\dfrac{x^2}{7} + \\dfrac{y^2}{49} = 1$: $a^2 = \\,?$
**2)** Hyperbola $\\dfrac{y^2}{8} - \\dfrac{x^2}{40} = 1$: $a^2 = \\,?$
**3)** Ellipse $\\dfrac{x^2}{50} + \\dfrac{y^2}{14} = 1$: $a^2 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['49', '8', '50'],
          hint1: 'Ellipse → larger denominator. Between $7$ and $49$, the larger is $49$.',
          hint2: 'Hyperbola → denominator of the POSITIVE term. The $y^2$ term is positive, so $a^2 = 8$ (even though $40 > 8$).',
          hint3: 'Ellipse again: the larger of $50$ and $14$ is $50$.',
          explanation: '1) Ellipse: $a^2$ = larger denom = $49$. 2) Hyperbola: $a^2$ = positive-term denom = $8$ (NOT the larger one). 3) Ellipse: $a^2 = 50$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'ellipses-hyperbolas',
    sections: [
      {
        id: 'eh3-intro',
        type: 'text' as const,
        content: `# 🛰️ Ellipses & Hyperbolas

**Part 3 of 7 — Ellipses: Graphing & Finding Foci**

---

> 🔑 **The Workflow:** From $\\dfrac{x^2}{a^2} + \\dfrac{y^2}{b^2} = 1$, find $a$, $b$, then $c$ via $c^2 = a^2 - b^2$. That hands you vertices, co-vertices, and foci — everything you need to graph.`,
      },
      {
        id: 'eh3-worked1',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$

**Step 1 — Identify $a^2$ and $b^2$.** The larger denominator is under $x^2$, so the major axis is horizontal:
$$a^2 = 25 \\Rightarrow a = 5, \\qquad b^2 = 9 \\Rightarrow b = 3$$

**Step 2 — Find $c$** using the *ellipse* relationship $c^2 = a^2 - b^2$:
$$c^2 = 25 - 9 = 16 \\Rightarrow c = 4$$

**Step 3 — List the key points** (center at origin, horizontal major axis):

| Feature | Coordinates |
|---------|-------------|
| Vertices | $(\\pm 5,\\, 0)$ |
| Co-vertices | $(0,\\, \\pm 3)$ |
| Foci | $(\\pm 4,\\, 0)$ |

> ✅ **Sanity check:** the foci must lie *inside* the ellipse on the major axis. $c = 4 < a = 5$ ✓ — foci are between the center and the vertices, exactly as they should be.`,
      },
      {
        id: 'eh3-worked2',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{x^2}{16} + \\dfrac{y^2}{49} = 1$

Now the larger denominator ($49$) is under $y^2$, so the major axis is **vertical**:
$$a^2 = 49 \\Rightarrow a = 7, \\qquad b^2 = 16 \\Rightarrow b = 4$$
$$c^2 = a^2 - b^2 = 49 - 16 = 33 \\Rightarrow c = \\sqrt{33}\\approx 5.7$$

Because the major axis is vertical, the vertices and foci are on the **$y$-axis**:

| Feature | Coordinates |
|---------|-------------|
| Vertices | $(0,\\, \\pm 7)$ |
| Co-vertices | $(\\pm 4,\\, 0)$ |
| Foci | $(0,\\, \\pm\\sqrt{33})$ |

> ⚠️ The foci always sit on the **major** axis (here the $y$-axis), never on the minor axis. If your foci came out on the short axis, you mixed up $a$ and $b$.`,
      },
      {
        id: 'eh3-foci-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\dfrac{x^2}{169} + \\dfrac{y^2}{144} = 1$, the foci are at:',
              options: ['$(\\pm 5,\\, 0)$', '$(0,\\, \\pm 5)$', '$(\\pm 13,\\, 0)$', '$(\\pm 12,\\, 0)$'],
              correctAnswer: 0,
              explanation: '$a^2=169, b^2=144$, so $c^2 = 169-144 = 25$, $c=5$. The larger denominator is under $x^2$, so the foci are on the $x$-axis: $(\\pm 5, 0)$.',
            },
            {
              question: 'The vertices of $\\dfrac{x^2}{4} + \\dfrac{y^2}{36} = 1$ are at:',
              options: ['$(0,\\, \\pm 6)$', '$(\\pm 2,\\, 0)$', '$(\\pm 6,\\, 0)$', '$(0,\\, \\pm 2)$'],
              correctAnswer: 0,
              explanation: 'The larger denominator $36$ is under $y^2$, so the major axis is vertical with $a=6$. Vertices are the endpoints of the major axis: $(0, \\pm 6)$.',
            },
          ],
        },
      },
      {
        id: 'eh3-foci-drill',
        type: 'input-boxes' as const,
        content: `**Find $c$** 🧮

Compute the focal distance $c$ for each ellipse using $c^2 = a^2 - b^2$. (Round to two decimals if not a whole number.)

**1)** $\\dfrac{x^2}{100} + \\dfrac{y^2}{64} = 1,\\quad c = \\,?$
**2)** $\\dfrac{x^2}{9} + \\dfrac{y^2}{25} = 1,\\quad c = \\,?$
**3)** $\\dfrac{x^2}{20} + \\dfrac{y^2}{4} = 1,\\quad c = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '4'],
          hint1: '$c^2 = 100 - 64 = 36$, so $c = 6$.',
          hint2: 'Use the larger value as $a^2$: $c^2 = 25 - 9 = 16$, so $c = 4$.',
          hint3: '$c^2 = 20 - 4 = 16$, so $c = 4$.',
          explanation: '1) $\\sqrt{100-64}=\\sqrt{36}=6$. 2) $\\sqrt{25-9}=\\sqrt{16}=4$. 3) $\\sqrt{20-4}=\\sqrt{16}=4$. Always subtract the smaller denominator from the larger.',
        },
      },
      {
        id: 'eh3-graph-order',
        type: 'dropdown-select' as const,
        content: `**Graphing Workflow** 🔽

You're graphing $\\dfrac{x^2}{36} + \\dfrac{y^2}{100} = 1$. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Major axis direction:', options: ['vertical', 'horizontal', 'diagonal', 'none'] },
            { label: 'Value of $a$ (semi-major):', options: ['$10$', '$6$', '$8$', '$100$'] },
            { label: 'Value of $c$ (focal distance):', options: ['$8$', '$6$', '$10$', '$\\sqrt{136}$'] },
          ],
          correctAnswers: ['vertical', '$10$', '$8$'],
          hint1: 'Larger denominator $100$ is under $y^2$, so the major axis is vertical.',
          hint2: '$a = \\sqrt{100} = 10$ (always the square root of the LARGER denominator for an ellipse).',
          hint3: '$c^2 = 100 - 36 = 64$, so $c = 8$.',
          explanation: 'Larger denom under $y^2$ → vertical major axis, $a=10$, $b=6$. $c^2 = 100-36 = 64 \\Rightarrow c = 8$. Foci at $(0, \\pm 8)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'ellipses-hyperbolas',
    sections: [
      {
        id: 'eh4-intro',
        type: 'text' as const,
        content: `# 🛰️ Ellipses & Hyperbolas

**Part 4 of 7 — Hyperbolas: Asymptotes, Vertices & Foci**

---

> 🔑 **The Workflow:** From standard form, the **positive** term gives $a$ and the orientation; $c^2 = a^2 + b^2$ gives the foci; and the denominators give the **asymptotes** — the rails that guide the branches to infinity.`,
      },
      {
        id: 'eh4-asymptotes',
        type: 'text' as const,
        content: `## Asymptotes: The Defining Feature

For a hyperbola centered at the origin, the asymptotes pass through the center with slopes built from $a$ and $b$:

**Horizontal** $\\dfrac{x^2}{a^2} - \\dfrac{y^2}{b^2} = 1$:
$$y = \\pm\\frac{b}{a}\\,x$$

**Vertical** $\\dfrac{y^2}{a^2} - \\dfrac{x^2}{b^2} = 1$:
$$y = \\pm\\frac{a}{b}\\,x$$

> 💡 **The box trick.** Mark $\\pm a$ along the transverse axis and $\\pm b$ along the other axis, draw the rectangle through those four points, and extend its diagonals — those diagonals are exactly the asymptotes. The vertices touch the box at the midpoints of two sides.

> ⚠️ The slope is **(rise of the $y$-related length) over (run of the $x$-related length)**. For a *horizontal* hyperbola, $a$ is under $x^2$, so the slope is $b/a$. For a *vertical* hyperbola, $a$ is under $y^2$, so the slope is $a/b$. When in doubt, rebuild the box.`,
      },
      {
        id: 'eh4-worked1',
        type: 'text' as const,
        content: `## Worked Example: $\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1$

**Step 1 — Orientation & $a$, $b$.** The $x^2$ term is positive, so it opens left/right:
$$a^2 = 9 \\Rightarrow a = 3, \\qquad b^2 = 16 \\Rightarrow b = 4$$

**Step 2 — Find $c$** using the *hyperbola* relationship $c^2 = a^2 + b^2$:
$$c^2 = 9 + 16 = 25 \\Rightarrow c = 5$$

**Step 3 — Asymptotes** (horizontal, slope $\\pm b/a$):
$$y = \\pm\\frac{4}{3}\\,x$$

| Feature | Coordinates / Equation |
|---------|------------------------|
| Vertices | $(\\pm 3,\\, 0)$ |
| Foci | $(\\pm 5,\\, 0)$ |
| Asymptotes | $y = \\pm\\dfrac{4}{3}x$ |

> ✅ **Sanity check:** for a hyperbola the foci are *farther* out than the vertices, so $c > a$. Here $5 > 3$ ✓.`,
      },
      {
        id: 'eh4-hyp-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $\\dfrac{x^2}{16} - \\dfrac{y^2}{9} = 1$, the foci are at:',
              options: ['$(\\pm 5,\\, 0)$', '$(\\pm \\sqrt 7,\\, 0)$', '$(0,\\, \\pm 5)$', '$(\\pm 4,\\, 0)$'],
              correctAnswer: 0,
              explanation: 'Hyperbola: $c^2 = a^2 + b^2 = 16 + 9 = 25$, so $c = 5$. The $x^2$ term is positive, so the foci are on the $x$-axis: $(\\pm 5, 0)$.',
            },
            {
              question: 'The asymptotes of $\\dfrac{x^2}{4} - \\dfrac{y^2}{25} = 1$ are:',
              options: ['$y = \\pm\\dfrac{5}{2}x$', '$y = \\pm\\dfrac{2}{5}x$', '$y = \\pm\\dfrac{25}{4}x$', '$y = \\pm\\dfrac{4}{25}x$'],
              correctAnswer: 0,
              explanation: 'Horizontal hyperbola: slope $= \\pm b/a$. Here $a = \\sqrt 4 = 2$ and $b = \\sqrt{25} = 5$, so the asymptotes are $y = \\pm \\frac{5}{2}x$.',
            },
            {
              question: 'The vertices of $\\dfrac{y^2}{36} - \\dfrac{x^2}{13} = 1$ are at:',
              options: ['$(0,\\, \\pm 6)$', '$(\\pm 6,\\, 0)$', '$(0,\\, \\pm 7)$', '$(\\pm 7,\\, 0)$'],
              correctAnswer: 0,
              explanation: 'The $y^2$ term is positive, so the hyperbola opens up/down with $a^2 = 36$, $a = 6$. Vertices are on the $y$-axis: $(0, \\pm 6)$.',
            },
          ],
        },
      },
      {
        id: 'eh4-c-drill',
        type: 'input-boxes' as const,
        content: `**Find $c$ for Hyperbolas** 🧮

Use $c^2 = a^2 + b^2$ (note the PLUS for hyperbolas). Round to two decimals if not whole.

**1)** $\\dfrac{x^2}{9} - \\dfrac{y^2}{16} = 1,\\quad c = \\,?$
**2)** $\\dfrac{y^2}{64} - \\dfrac{x^2}{36} = 1,\\quad c = \\,?$
**3)** $\\dfrac{x^2}{1} - \\dfrac{y^2}{8} = 1,\\quad c = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '10', '3'],
          hint1: '$c^2 = 9 + 16 = 25$, so $c = 5$.',
          hint2: '$c^2 = 64 + 36 = 100$, so $c = 10$.',
          hint3: '$c^2 = 1 + 8 = 9$, so $c = 3$.',
          explanation: '1) $\\sqrt{9+16}=\\sqrt{25}=5$. 2) $\\sqrt{64+36}=\\sqrt{100}=10$. 3) $\\sqrt{1+8}=\\sqrt 9=3$. For hyperbolas you ADD; the foci always end up outside the vertices.',
        },
      },
      {
        id: 'eh4-asym-drill',
        type: 'input-boxes' as const,
        content: `**Asymptote Slopes** 🧮

Enter the POSITIVE asymptote slope as a fraction or decimal. (The other asymptote is its negative.)

**1)** $\\dfrac{x^2}{9} - \\dfrac{y^2}{4} = 1$ → slope $= \\,?$
**2)** $\\dfrac{y^2}{9} - \\dfrac{x^2}{4} = 1$ → slope $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2/3', '3/2'],
          hint1: 'Horizontal hyperbola: slope $= b/a = \\sqrt 4 / \\sqrt 9 = 2/3$.',
          hint2: 'Vertical hyperbola: slope $= a/b = \\sqrt 9 / \\sqrt 4 = 3/2$.',
          hint3: 'Horizontal → $b/a$; vertical → $a/b$. The orientation flips the fraction.',
          explanation: '1) Horizontal, $a=3, b=2$, slope $=b/a=2/3$. 2) Vertical, $a=3, b=2$, slope $=a/b=3/2$. Same numbers, but orientation decides numerator vs. denominator.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'ellipses-hyperbolas',
    sections: [
      {
        id: 'eh5-intro',
        type: 'text' as const,
        content: `# 🛰️ Ellipses & Hyperbolas

**Part 5 of 7 — Shifted Centers & Completing the Square**

---

> 🔑 **The Big Idea:** Move the center from the origin to $(h, k)$ by replacing $x$ with $(x-h)$ and $y$ with $(y-k)$. When an equation is given expanded, **complete the square** to recover that standard form.`,
      },
      {
        id: 'eh5-shifted',
        type: 'text' as const,
        content: `## Standard Form with Center $(h, k)$

Just shift each variable. The center moves, but $a$, $b$, $c$ and the shapes are unchanged:

**Ellipse:**
$$\\frac{(x-h)^2}{a^2} + \\frac{(y-k)^2}{b^2} = 1$$

**Hyperbola (horizontal):**
$$\\frac{(x-h)^2}{a^2} - \\frac{(y-k)^2}{b^2} = 1$$

> ⚠️ **Watch the signs.** $(x-h)^2$ means the center's $x$-coordinate is $+h$. So $(x+3)^2 = (x-(-3))^2$ puts the center at $x=-3$. The sign you see is the *opposite* of the coordinate.

To get vertices/foci, find them as if centered at the origin, then **add $(h, k)$** to shift them into place. Asymptotes of a shifted hyperbola pass through $(h,k)$:
$$y - k = \\pm\\frac{b}{a}(x - h) \\quad \\text{(horizontal hyperbola)}$$`,
      },
      {
        id: 'eh5-center-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The center of $\\dfrac{(x-2)^2}{16} + \\dfrac{(y+5)^2}{9} = 1$ is:',
              options: ['$(2,\\, -5)$', '$(-2,\\, 5)$', '$(2,\\, 5)$', '$(-2,\\, -5)$'],
              correctAnswer: 0,
              explanation: '$(x-2)$ gives $h=2$; $(y+5)=(y-(-5))$ gives $k=-5$. Center $(2, -5)$. The sign flips: $+5$ inside means $-5$ in the coordinate.',
            },
            {
              question: 'For the ellipse in the previous question, where is the RIGHT vertex (major axis is horizontal, $a=4$)?',
              options: ['$(6,\\, -5)$', '$(2,\\, -1)$', '$(4,\\, -5)$', '$(6,\\, 0)$'],
              correctAnswer: 0,
              explanation: 'Larger denominator $16$ is under $x$, so horizontal major axis with $a=4$. Right vertex $= $ center $+ (a, 0) = (2+4,\\, -5) = (6, -5)$.',
            },
          ],
        },
      },
      {
        id: 'eh5-cts-worked',
        type: 'text' as const,
        content: `## Completing the Square to Find Standard Form

**Example:** $\\;x^2 + 4x + 4y^2 - 8y - 8 = 0$.

**Step 1 — Group and factor out leading coefficients** (the $+$ between groups already hints "ellipse"):
$$(x^2 + 4x) + 4(y^2 - 2y) = 8$$

**Step 2 — Complete each square.** For $x^2+4x$ add $(4/2)^2=4$. For $y^2-2y$ add $(2/2)^2=1$ — but it's inside a factor of $4$, so you actually add $4\\cdot 1 = 4$ to the right:
$$(x^2 + 4x + 4) + 4(y^2 - 2y + 1) = 8 + 4 + 4$$
$$(x+2)^2 + 4(y-1)^2 = 16$$

**Step 3 — Divide by $16$** to get the "$=1$" form:
$$\\frac{(x+2)^2}{16} + \\frac{(y-1)^2}{4} = 1$$

> ✅ Center $(-2, 1)$, $a^2=16$, $b^2=4$. Since the $+$ remained, it's an **ellipse** — as the matching signs predicted.`,
      },
      {
        id: 'eh5-cts-drill',
        type: 'input-boxes' as const,
        content: `**Complete the Square** 🧮

The hyperbola $9x^2 - 4y^2 - 36x - 8y + 68 = 0$ rewrites as
$$\\frac{(y - k)^2}{9} - \\frac{(x - h)^2}{4} = 1.$$
Find the center coordinates.

**1)** $h = \\,?$
**2)** $k = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '-1'],
          hint1: 'Group: $9(x^2-4x) - 4(y^2+2y) + 68 = 0$. The $x$-square completes at $x=2$.',
          hint2: '$9(x-2)^2$ comes from $x^2-4x+4$; $-4(y+1)^2$ comes from $y^2+2y+1$. So $h=2$, and $(y+1)=(y-(-1))$ gives $k=-1$.',
          hint3: 'After completing the square the equation is $-4(y+1)^2 + 9(x-2)^2 = -36$; divide by $-36$ to land on standard form with center $(2,-1)$.',
          explanation: 'Completing the square gives center $(h,k)=(2,-1)$. The $+2y$ makes $(y+1)^2$, so $k=-1$; the $-4x$ inside $9(\\dots)$ makes $(x-2)^2$, so $h=2$.',
        },
      },
      {
        id: 'eh5-shift-dropdown',
        type: 'dropdown-select' as const,
        content: `**Shift It** 🔽

A hyperbola has standard form $\\dfrac{(x-3)^2}{4} - \\dfrac{(y+1)^2}{9} = 1$. Fill in each feature.`,
        exercise: {
          dropdowns: [
            { label: 'Center:', options: ['$(3,\\, -1)$', '$(-3,\\, 1)$', '$(3,\\, 1)$', '$(-3,\\, -1)$'] },
            { label: 'Opens:', options: ['left/right', 'up/down', 'diagonally', 'it is a circle'] },
            { label: 'A vertex (using $a=2$):', options: ['$(5,\\, -1)$', '$(3,\\, 1)$', '$(3,\\, -3)$', '$(1,\\, 1)$'] },
          ],
          correctAnswers: ['$(3,\\, -1)$', 'left/right', '$(5,\\, -1)$'],
          hint1: '$(x-3)$ and $(y+1)$ give center $(3, -1)$.',
          hint2: 'The $x^2$-term is positive, so it opens left/right with $a=\\sqrt 4 = 2$.',
          hint3: 'Right vertex $=$ center $+ (a, 0) = (3+2,\\, -1) = (5, -1)$.',
          explanation: 'Center $(3,-1)$; positive $x$-term → opens left/right; $a=2$ → vertices at $(3\\pm 2, -1)$, i.e. $(5,-1)$ and $(1,-1)$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'ellipses-hyperbolas',
    sections: [
      {
        id: 'eh6-intro',
        type: 'text' as const,
        content: `# 🛰️ Ellipses & Hyperbolas

**Part 6 of 7 — Eccentricity & Real-World Applications**

---

> 🔑 **Eccentricity** $e = \\dfrac{c}{a}$ measures how "stretched" a conic is. It is the single number that distinguishes a nearly-circular orbit from a wildly elongated one, and it's how astronomers and engineers describe these curves.`,
      },
      {
        id: 'eh6-eccentricity',
        type: 'text' as const,
        content: `## Eccentricity: $e = \\dfrac{c}{a}$

Eccentricity always equals (focal distance) ÷ (semi-major or semi-transverse length):

| Conic | Range of $e$ | Meaning |
|-------|--------------|---------|
| Circle | $e = 0$ | foci merged at center ($c=0$) |
| Ellipse | $0 < e < 1$ | closer to $0$ = rounder; closer to $1$ = flatter |
| Parabola | $e = 1$ | the boundary case |
| Hyperbola | $e > 1$ | larger $e$ = more open branches |

> 💡 For an **ellipse**, $c < a$ so $e < 1$ automatically. For a **hyperbola**, $c > a$ so $e > 1$ automatically. The value of $e$ tells you the conic type at a glance.

**Example (ellipse).** $\\dfrac{x^2}{25}+\\dfrac{y^2}{9}=1$ had $a=5$, $c=4$, so $e = \\dfrac{4}{5} = 0.8$ — a fairly flattened ellipse.

**Example (hyperbola).** $\\dfrac{x^2}{9}-\\dfrac{y^2}{16}=1$ had $a=3$, $c=5$, so $e = \\dfrac{5}{3} \\approx 1.67$.`,
      },
      {
        id: 'eh6-ecc-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An ellipse has eccentricity $e = 0.05$. What does this tell you?',
              options: [
                'It is very nearly a circle',
                'It is extremely elongated (cigar-shaped)',
                'It is actually a hyperbola',
                'It is a parabola',
              ],
              correctAnswer: 0,
              explanation: 'For an ellipse, $e$ near $0$ means $c$ is tiny compared to $a$ — the foci are almost on top of the center, so the shape is almost a perfect circle. (Earth’s orbit has $e \\approx 0.017$.)',
            },
            {
              question: 'A conic has $a = 4$ and $c = 6$. What is it, and what is $e$?',
              options: [
                'Hyperbola, $e = 1.5$',
                'Ellipse, $e = 1.5$',
                'Ellipse, $e = 0.67$',
                'Circle, $e = 0$',
              ],
              correctAnswer: 0,
              explanation: '$e = c/a = 6/4 = 1.5 > 1$, and $c > a$, so it must be a hyperbola. (An ellipse can never have $c > a$.)',
            },
          ],
        },
      },
      {
        id: 'eh6-ecc-drill',
        type: 'input-boxes' as const,
        content: `**Compute Eccentricity** 🧮

Find $e = c/a$. Round to two decimals.

**1)** Ellipse $\\dfrac{x^2}{100}+\\dfrac{y^2}{36}=1$ (so $a=10$, $c=8$): $e = \\,?$
**2)** Hyperbola $\\dfrac{x^2}{9}-\\dfrac{y^2}{27}=1$ (so $a=3$, $c=6$): $e = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0.8', '2'],
          hint1: 'Ellipse: $c^2 = 100-36 = 64$, $c=8$, so $e = 8/10$.',
          hint2: 'Hyperbola: $c^2 = 9+27 = 36$, $c=6$, so $e = 6/3$.',
          hint3: '$e = c/a$ always. Ellipse gives $<1$, hyperbola gives $>1$.',
          explanation: '1) $e = 8/10 = 0.8$ (ellipse, $<1$ ✓). 2) $e = 6/3 = 2$ (hyperbola, $>1$ ✓).',
        },
      },
      {
        id: 'eh6-apps',
        type: 'text' as const,
        content: `## Where These Curves Show Up

**Ellipses**
- **Planetary orbits.** Kepler's First Law: planets orbit the Sun in ellipses with the Sun at *one focus* (not the center).
- **Whispering galleries.** Sound from one focus reflects off an elliptical ceiling and converges precisely at the other focus — whisper at one spot, heard clearly across the room.
- **Lithotripsy.** Shock waves emitted from one focus of an elliptical reflector focus on a kidney stone placed at the other focus.

**Hyperbolas**
- **Navigation (LORAN/GPS-style).** A constant *difference* in signal arrival times from two stations places you on a hyperbola — exactly its defining property.
- **Cooling towers & some telescope mirrors** use hyperbolic cross-sections.
- **Comet paths.** A comet with $e > 1$ swings past the Sun once on a hyperbolic trajectory and never returns.

> 🔑 The reflective "focus-to-focus" property of the ellipse and the "constant difference" property of the hyperbola are not trivia — they are *exactly* the definitions from Part 1 doing real work.`,
      },
      {
        id: 'eh6-app-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Application** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Planets orbit the Sun in an ellipse with the Sun at one…', options: ['focus', 'vertex', 'center', 'asymptote'] },
            { label: 'A whispering gallery works because of the ellipse’s…', options: ['reflective focus-to-focus property', 'pair of asymptotes', 'eccentricity of 1', 'flat directrix'] },
            { label: 'Navigation by constant signal-time DIFFERENCE traces a…', options: ['hyperbola', 'circle', 'parabola', 'ellipse'] },
          ],
          correctAnswers: ['focus', 'reflective focus-to-focus property', 'hyperbola'],
          hint1: 'Kepler placed the Sun at a focus, not the center, of the elliptical orbit.',
          hint2: 'Waves from one focus reconverge at the other focus of an ellipse.',
          hint3: 'A constant DIFFERENCE of distances/times is the very definition of a hyperbola.',
          explanation: 'Sun at a focus (Kepler), focus-to-focus reflection (whispering gallery / lithotripsy), and constant time-difference navigation (hyperbola) all come straight from the conic definitions.',
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'ellipses-hyperbolas',
    sections: [
      {
        id: 'eh7-intro',
        type: 'text' as const,
        content: `# 🛰️ Ellipses & Hyperbolas

**Part 7 of 7 — Mixed Mastery & Exit Quiz**

---

You can now (1) tell the curves apart by sign, (2) extract $a$, $b$, $c$ correctly for each, (3) graph with vertices, foci, and asymptotes, (4) handle shifted centers, and (5) compute eccentricity. Time to put it all together.`,
      },
      {
        id: 'eh7-reference',
        type: 'text' as const,
        content: `## Quick Reference Card

| Question | Ellipse | Hyperbola |
|----------|---------|-----------|
| Sign between terms | $+$ | $-$ |
| $a^2$ is… | larger denominator | denominator of positive term |
| Focal relation | $c^2 = a^2 - b^2$ | $c^2 = a^2 + b^2$ |
| Biggest of $a,b,c$ | $a$ | $c$ |
| Foci lie on the… | major axis | transverse axis |
| Asymptotes? | none | $y-k = \\pm\\dfrac{b}{a}(x-h)$ (horiz.) |
| Eccentricity $e=c/a$ | $0 < e < 1$ | $e > 1$ |

> ⚠️ **Top traps:** (1) using $-$ instead of $+$ in the focal relation (or vice-versa); (2) flipping the asymptote slope between $b/a$ and $a/b$; (3) forgetting the sign flip when reading a shifted center.`,
      },
      {
        id: 'eh7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation is an ellipse with a VERTICAL major axis?',
              options: [
                '$\\dfrac{x^2}{9} + \\dfrac{y^2}{25} = 1$',
                '$\\dfrac{x^2}{25} + \\dfrac{y^2}{9} = 1$',
                '$\\dfrac{x^2}{25} - \\dfrac{y^2}{9} = 1$',
                '$\\dfrac{y^2}{25} - \\dfrac{x^2}{9} = 1$',
              ],
              correctAnswer: 0,
              explanation: 'A $+$ sign means ellipse; vertical major axis means the larger denominator is under $y^2$. Only $\\frac{x^2}{9}+\\frac{y^2}{25}=1$ has both (larger $25$ under $y^2$).',
            },
            {
              question: 'For $\\dfrac{y^2}{25} - \\dfrac{x^2}{144} = 1$, find $c$.',
              options: ['$13$', '$\\sqrt{119}$', '$12$', '$5$'],
              correctAnswer: 0,
              explanation: 'Hyperbola: $c^2 = a^2 + b^2 = 25 + 144 = 169$, so $c = 13$.',
            },
            {
              question: 'The center of $\\dfrac{(x+4)^2}{9} + \\dfrac{(y-7)^2}{16} = 1$ is:',
              options: ['$(-4,\\, 7)$', '$(4,\\, -7)$', '$(-4,\\, -7)$', '$(4,\\, 7)$'],
              correctAnswer: 0,
              explanation: '$(x+4)=(x-(-4))$ gives $h=-4$; $(y-7)$ gives $k=7$. Center $(-4, 7)$.',
            },
          ],
        },
      },
      {
        id: 'eh7-mixed-input',
        type: 'input-boxes' as const,
        content: `**Mixed Computation** 🧮

**1)** For the ellipse $\\dfrac{x^2}{49}+\\dfrac{y^2}{24}=1$, find $c$.
**2)** For the hyperbola $\\dfrac{x^2}{16}-\\dfrac{y^2}{9}=1$, find the eccentricity $e$ (two decimals).
**3)** The hyperbola $\\dfrac{x^2}{36}-\\dfrac{y^2}{64}=1$ has positive asymptote slope $= \\,?$ (fraction ok).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '1.25', '4/3'],
          hint1: 'Ellipse: $c^2 = 49 - 24 = 25$, so $c = 5$.',
          hint2: 'Hyperbola: $c^2 = 16+9 = 25$, $c=5$, $a=4$, so $e = 5/4 = 1.25$.',
          hint3: 'Horizontal hyperbola: slope $= b/a = \\sqrt{64}/\\sqrt{36} = 8/6 = 4/3$.',
          explanation: '1) $\\sqrt{49-24}=\\sqrt{25}=5$. 2) $c=\\sqrt{16+9}=5$, $e=c/a=5/4=1.25$. 3) $b/a = 8/6 = 4/3$.',
        },
      },
      {
        id: 'eh7-final-dropdown',
        type: 'dropdown-select' as const,
        content: `**Full Analysis** 🔽

Analyze $\\dfrac{(x-1)^2}{16} - \\dfrac{(y+2)^2}{9} = 1$ completely.`,
        exercise: {
          dropdowns: [
            { label: 'Conic type:', options: ['hyperbola (opens left/right)', 'hyperbola (opens up/down)', 'ellipse (horizontal)', 'ellipse (vertical)'] },
            { label: 'Center:', options: ['$(1,\\, -2)$', '$(-1,\\, 2)$', '$(1,\\, 2)$', '$(-1,\\, -2)$'] },
            { label: 'Value of $c$:', options: ['$5$', '$\\sqrt 7$', '$7$', '$4$'] },
            { label: 'Asymptote slopes $\\pm$:', options: ['$\\dfrac{3}{4}$', '$\\dfrac{4}{3}$', '$\\dfrac{9}{16}$', '$\\dfrac{16}{9}$'] },
          ],
          correctAnswers: ['hyperbola (opens left/right)', '$(1,\\, -2)$', '$5$', '$\\dfrac{3}{4}$'],
          hint1: 'Minus sign → hyperbola; the $x$-term is positive so it opens left/right.',
          hint2: 'Center from $(x-1)$ and $(y+2)$ is $(1, -2)$.',
          hint3: '$c^2 = a^2+b^2 = 16+9 = 25 \\Rightarrow c=5$; horizontal slope $= b/a = 3/4$.',
          explanation: 'Hyperbola opening left/right, center $(1,-2)$, $a=4$, $b=3$, $c=\\sqrt{16+9}=5$, asymptote slopes $\\pm b/a = \\pm 3/4$.',
        },
      },
      {
        id: 'eh7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which focal relationship belongs to an ELLIPSE?',
              options: ['$c^2 = a^2 - b^2$', '$c^2 = a^2 + b^2$', '$c^2 = b^2 - a^2$', '$c = a + b$'],
              correctAnswer: 0,
              explanation: 'Ellipse: foci are inside, so $c < a$ and $c^2 = a^2 - b^2$. The plus version belongs to the hyperbola.',
            },
            {
              question: 'A conic has $e = \\dfrac{c}{a} = 0.6$. The conic is:',
              options: ['an ellipse', 'a hyperbola', 'a parabola', 'a circle'],
              correctAnswer: 0,
              explanation: 'Eccentricity strictly between $0$ and $1$ means an ellipse. ($e=0$ circle, $e=1$ parabola, $e>1$ hyperbola.)',
            },
            {
              question: 'The asymptotes of $\\dfrac{x^2}{9} - \\dfrac{y^2}{49} = 1$ are:',
              options: [
                '$y = \\pm\\dfrac{7}{3}x$',
                '$y = \\pm\\dfrac{3}{7}x$',
                '$y = \\pm\\dfrac{49}{9}x$',
                '$y = \\pm\\dfrac{9}{49}x$',
              ],
              correctAnswer: 0,
              explanation: 'Horizontal hyperbola: slope $=\\pm b/a$. Here $a=\\sqrt 9=3$, $b=\\sqrt{49}=7$, so $y = \\pm\\frac{7}{3}x$.',
            },
          ],
        },
      },
    ],
  },
]
