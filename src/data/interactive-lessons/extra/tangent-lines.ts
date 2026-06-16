import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Tangent Lines (Geometry).
 * Registry key: 'tangent-lines' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'tangent-lines',
    sections: [
      {
        id: 'tl1-intro',
        type: 'text' as const,
        content: `# 📏 Tangent Lines

**Part 1 of 5 — The Tangent and Its Right Angle**

---

### Topics in This Part

| Section |
|---------|
| Tangent vs. Secant |
| The Point of Tangency |
| The Radius–Tangent Right Angle |

> 🔑 **Key Concept:** A **tangent line** touches a circle at exactly **one** point. The single most useful fact about it: a tangent is always **perpendicular** to the radius drawn to that point of contact.`,
      },
      {
        id: 'tl1-vocab',
        type: 'text' as const,
        content: `## Tangent vs. Secant

A line and a circle can meet in three ways:

| Line | Points of contact | Name |
|------|-------------------|------|
| Misses the circle | $0$ | (no special name) |
| Touches once | $1$ | **tangent** |
| Cuts through | $2$ | **secant** |

The point where a tangent touches the circle is the **point of tangency** (or *point of contact*).

> 💡 The word *tangent* comes from the Latin *tangere*, "to touch." A tangent line **touches** but never **crosses** into the circle.`,
      },
      {
        id: 'tl1-vocab-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A line that intersects a circle at exactly two points is called a:',
              options: ['tangent', 'secant', 'radius', 'chord'],
              correctAnswer: 1,
              explanation: 'A **secant** cuts through the circle, crossing it at two points. A **tangent** touches at only one point.',
            },
            {
              question: 'How many points does a tangent line share with its circle?',
              options: ['Exactly one', 'Exactly two', 'Zero', 'Infinitely many'],
              correctAnswer: 0,
              explanation: 'A tangent touches the circle at exactly one point — the point of tangency.',
            },
          ],
        },
      },
      {
        id: 'tl1-perp',
        type: 'text' as const,
        content: `## The Radius–Tangent Theorem

This is the rule the entire topic is built on:

> 🔑 **Tangent–Radius Theorem:** A tangent line is **perpendicular** to the radius drawn to the point of tangency.

If circle $O$ has a tangent line touching at point $T$, and $P$ is any other point on that tangent line, then radius $\\overline{OT}$ meets the tangent at a **right angle**:

$$\\overline{OT} \\perp \\text{tangent line} \\quad\\Longrightarrow\\quad \\angle OTP = 90°$$

### Why it matters

That right angle lets you build a **right triangle** any time a tangent appears — which means the **Pythagorean theorem** is suddenly available. Watch:

If $P$ is a point outside the circle, $T$ is a point of tangency, and $O$ is the center, then $\\triangle PTO$ has a right angle at $T$:

$$PT^2 + r^2 = PO^2$$

where $r = OT$ is the radius.

> ⚠️ The right angle is at the **point of tangency** $T$ — *not* at the center and *not* at the external point. So the hypotenuse is always $PO$ (center to outside point).`,
      },
      {
        id: 'tl1-perp-drill',
        type: 'input-boxes' as const,
        content: `**Use the Right Angle** 🧮

In each diagram, $\\overline{PT}$ is tangent to circle $O$ at $T$, with radius $r = OT$ and $PO$ the distance from the center to $P$. Use $PT^2 + r^2 = PO^2$.

**1)** $r = 5$, $PO = 13$. Find $PT$.
**2)** $r = 6$, $PO = 10$. Find $PT$.
**3)** $r = 8$, $PO = 17$. Find $PT$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '8', '15'],
          hint1: '$PT^2 = PO^2 - r^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $PT = 12$.',
          hint2: '$PT^2 = 10^2 - 6^2 = 100 - 36 = 64$, so $PT = 8$.',
          hint3: '$PT^2 = 17^2 - 8^2 = 289 - 64 = 225$, so $PT = 15$.',
          explanation: '1) $\\sqrt{169-25}=\\sqrt{144}=12$.  2) $\\sqrt{100-36}=\\sqrt{64}=8$.  3) $\\sqrt{289-64}=\\sqrt{225}=15$. Each is a right triangle with the right angle at $T$.',
        },
      },
      {
        id: 'tl1-classify-text',
        type: 'text' as const,
        content: `## Naming What You See

Before moving on, make sure you can name a line by how it meets a circle:

- **$0$ shared points** → the line misses the circle entirely.
- **$1$ shared point** → **tangent**.
- **$2$ shared points** → **secant**.

A **chord** is the *segment* joining the two crossing points of a secant, and the **diameter** is the longest chord (it passes through the center).`,
      },
      {
        id: 'tl1-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify the Line** 🔽

Match each description to the correct name.`,
        exercise: {
          dropdowns: [
            { label: 'Touches the circle at exactly one point:', options: ['tangent', 'secant', 'chord'] },
            { label: 'Crosses the circle, sharing two points:', options: ['secant', 'tangent', 'radius'] },
            { label: 'Meets the radius at the point of contact at:', options: ['$90°$', '$45°$', '$180°$'] },
          ],
          correctAnswers: ['tangent', 'secant', '$90°$'],
          hint1: '"Touch once" is the definition of a tangent.',
          hint2: 'A line crossing at two points is a secant.',
          hint3: 'The tangent–radius angle is always a right angle, $90°$.',
          explanation: 'One point → tangent; two points → secant; and the tangent always meets its radius at $90°$.',
        },
      },
      {
        id: 'tl1-recap',
        type: 'text' as const,
        content: `## Wrap-Up

You now know the two facts the whole topic leans on:

1. A **tangent** touches a circle at exactly **one** point.
2. The **radius to that point is perpendicular** to the tangent — giving you a right triangle and the Pythagorean theorem.

> 💡 Whenever you see a tangent in a problem, your first move should be: *draw the radius to the point of tangency and mark the right angle.*

In Part 2 we use this to compare **two** tangents drawn from the same outside point.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'tangent-lines',
    sections: [
      {
        id: 'tl2-intro',
        type: 'text' as const,
        content: `# 📏 Tangent Lines

**Part 2 of 5 — Tangent Segments from an External Point**

---

> 🔑 **The Big Idea:** From a single point outside a circle you can draw exactly **two** tangent lines, and the two **tangent segments are congruent** — they have equal length.`,
      },
      {
        id: 'tl2-two-tangents',
        type: 'text' as const,
        content: `## Two Tangents, Equal Lengths

From an external point $P$, draw the two tangent segments $\\overline{PA}$ and $\\overline{PB}$, touching the circle at $A$ and $B$.

> 🔑 **Two-Tangent Theorem:** Tangent segments drawn to a circle from the same external point are congruent: $PA = PB$.

### Why it's true

Connect the center $O$ to $P$, $A$, and $B$. You get two right triangles, $\\triangle PAO$ and $\\triangle PBO$:

- $\\angle PAO = \\angle PBO = 90°$ (radius ⊥ tangent)
- $OA = OB = r$ (both are radii)
- $PO = PO$ (shared hypotenuse)

So $\\triangle PAO \\cong \\triangle PBO$ (Hypotenuse–Leg), which forces $PA = PB$. ✓

| Quantity | $\\triangle PAO$ | $\\triangle PBO$ |
|----------|------------------|------------------|
| Right angle | at $A$ | at $B$ |
| Leg (radius) | $OA = r$ | $OB = r$ |
| Hypotenuse | $PO$ | $PO$ |
| Tangent leg | $PA$ | $PB$ ( $= PA$ ) |`,
      },
      {
        id: 'tl2-two-tangents-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\overline{PA}$ and $\\overline{PB}$ are tangent to a circle from external point $P$. If $PA = 9$, what is $PB$?',
              options: ['$9$', '$18$', '$4.5$', 'Cannot be determined'],
              correctAnswer: 0,
              explanation: 'Tangent segments from the same external point are congruent, so $PB = PA = 9$.',
            },
            {
              question: 'What congruence rule proves the two tangent triangles equal?',
              options: ['Side–Side–Side', 'Angle–Angle–Angle', 'Hypotenuse–Leg', 'Side–Angle–Side with the included tangent'],
              correctAnswer: 2,
              explanation: 'Both triangles are right triangles sharing hypotenuse $PO$ with equal radii as legs — that is Hypotenuse–Leg (HL).',
            },
          ],
        },
      },
      {
        id: 'tl2-perimeter',
        type: 'text' as const,
        content: `## A Classic Application: Inscribed Polygons

When a circle is inscribed in a triangle (or any polygon), each side is tangent to the circle. The two-tangent theorem says the tangent segments from each vertex are equal — that lets you find unknown lengths.

### Worked Example

A circle is inscribed in a triangle. The tangent lengths from the three vertices are $x$, $y$, and $z$, so each side equals the **sum of two tangent lengths**. If the tangent segments from one vertex measure $5$ and from the next vertex measure $7$, then the side **between** them is:

$$5 + 7 = 12$$

> 💡 At every vertex, the two tangent segments leaving that vertex are equal. Label them once and reuse the labels around the whole figure.`,
      },
      {
        id: 'tl2-drill',
        type: 'input-boxes' as const,
        content: `**Tangent-Length Problems** 🧮

**1)** $\\overline{PA}$ and $\\overline{PB}$ are tangent from $P$. If $PA = 3x + 4$ and $PB = 5x - 8$, the segments are equal. Solve for $x$.
**2)** Using the value of $x$ from #1, find the common tangent length $PA$.
**3)** Tangents from $P$ have length $10$. The radius is $r$ and $PO = 26$. Find $r$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '22', '24'],
          hint1: 'Set $3x + 4 = 5x - 8$. Then $12 = 2x$, so $x = 6$.',
          hint2: '$PA = 3x + 4 = 3(6) + 4 = 22$. (Check: $PB = 5(6) - 8 = 22$. ✓)',
          hint3: 'Right triangle at the point of tangency: $r^2 = PO^2 - PT^2 = 26^2 - 10^2 = 676 - 100 = 576$, so $r = 24$.',
          explanation: '1) $3x+4 = 5x-8 \\Rightarrow x = 6$.  2) $PA = 22$.  3) $r = \\sqrt{676-100} = \\sqrt{576} = 24$.',
        },
      },
      {
        id: 'tl2-inscribed-text',
        type: 'text' as const,
        content: `## Setting Up an Inscribed-Circle Side

Picture a triangle with an inscribed circle. Call the tangent lengths from the three vertices $a$, $b$, and $c$. Each **side** is the sum of the two tangent lengths from its endpoints:

$$\\text{side} = (\\text{tangent from one vertex}) + (\\text{tangent from the other vertex})$$

So if $a = 4$ and $b = 9$, the side joining those two vertices is $4 + 9 = 13$.`,
      },
      {
        id: 'tl2-inscribed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Inscribed-Circle Sides** 🔽

A triangle has an inscribed circle with tangent lengths $a = 5$, $b = 8$, and $c = 3$ from its three vertices.`,
        exercise: {
          dropdowns: [
            { label: 'Side joining the $a$- and $b$-vertices ($a+b$):', options: ['$13$', '$11$', '$8$', '$40$'] },
            { label: 'Side joining the $b$- and $c$-vertices ($b+c$):', options: ['$11$', '$13$', '$8$', '$24$'] },
            { label: 'Why are the two tangents from each vertex equal?', options: ['Two-Tangent Theorem', 'Pythagorean Theorem', 'they are radii', 'Tangent–Chord Theorem'] },
          ],
          correctAnswers: ['$13$', '$11$', 'Two-Tangent Theorem'],
          hint1: '$a + b = 5 + 8 = 13$.',
          hint2: '$b + c = 8 + 3 = 11$.',
          hint3: 'Tangents from the same external point are congruent — that is the Two-Tangent Theorem.',
          explanation: 'Each side is the sum of two tangent lengths: $a+b = 13$ and $b+c = 11$. The equal tangents come from the Two-Tangent Theorem.',
        },
      },
      {
        id: 'tl2-recap',
        type: 'text' as const,
        content: `## Wrap-Up

Two tangents from one external point are **always equal in length** — proven by Hypotenuse–Leg. This single fact unlocks a huge family of problems: inscribed circles, kite-shaped figures, and "find $x$" tangent equations.

> ⚠️ The theorem applies only when both tangents come from the **same** external point. Tangents from two *different* points are generally **not** equal.

Next, in Part 3, we measure the **angles** that tangents make with chords and with each other.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'tangent-lines',
    sections: [
      {
        id: 'tl3-intro',
        type: 'text' as const,
        content: `# 📏 Tangent Lines

**Part 3 of 5 — Tangent Angles & Intercepted Arcs**

---

> 🔑 **The Theme:** Angles formed by tangents are measured by the **arcs** they intercept. Two formulas do all the work: the **tangent–chord** angle and the **two-tangent** angle.`,
      },
      {
        id: 'tl3-tangent-chord',
        type: 'text' as const,
        content: `## The Tangent–Chord Angle

When a tangent and a **chord** meet at the point of tangency, the angle between them is **half** the intercepted arc.

> 🔑 **Tangent–Chord Theorem:** $\\text{angle} = \\dfrac{1}{2}(\\text{intercepted arc})$

### Worked Example

A chord meets a tangent at the point of tangency, intercepting an arc of $140°$. The tangent–chord angle is:

$$\\frac{1}{2}(140°) = 70°$$

The chord cuts the circle into two arcs that add to $360°$, so the *other* arc is $360° - 140° = 220°$, and the angle on the **other side** of the chord is:

$$\\frac{1}{2}(220°) = 110°$$

> 💡 Check: $70° + 110° = 180°$, exactly a straight line along the tangent. ✓`,
      },
      {
        id: 'tl3-tangent-chord-check',
        type: 'input-boxes' as const,
        content: `**Tangent–Chord Practice** 🧮

A chord meets a tangent at the point of tangency. Find each tangent–chord angle (in degrees — enter the number only).

**1)** Intercepted arc $= 80°$. Angle $= \\,?$
**2)** Intercepted arc $= 200°$. Angle $= \\,?$
**3)** The tangent–chord angle is $35°$. Find its intercepted arc.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', '100', '70'],
          hint1: '$\\frac{1}{2}(80°) = 40°$.',
          hint2: '$\\frac{1}{2}(200°) = 100°$.',
          hint3: 'Reverse the formula: arc $= 2 \\times$ angle $= 2(35°) = 70°$.',
          explanation: '1) $\\frac{1}{2}(80)=40$.  2) $\\frac{1}{2}(200)=100$.  3) arc $= 2(35)=70$. The angle is always half the intercepted arc.',
        },
      },
      {
        id: 'tl3-two-tangent-angle',
        type: 'text' as const,
        content: `## The Two-Tangent Angle

When **two tangents** meet at an external point $P$, they intercept a **near arc** (closer to $P$) and a **far arc** (across the circle). The angle at $P$ is **half the difference**:

$$\\angle P = \\frac{1}{2}\\big(\\text{far arc} - \\text{near arc}\\big)$$

Because the two arcs make a full circle, $\\text{far arc} + \\text{near arc} = 360°$.

### Worked Example

Two tangents from $P$ intercept a near arc of $100°$. Then the far arc is $360° - 100° = 260°$, and:

$$\\angle P = \\frac{1}{2}(260° - 100°) = \\frac{1}{2}(160°) = 80°$$

> 💡 **Shortcut:** The angle at $P$ and the **near arc** are *supplementary*: $\\angle P + (\\text{near arc}) = 180°$. Here $80° + 100° = 180°$. ✓ (This comes from the quadrilateral $PAOB$ having two $90°$ angles.)`,
      },
      {
        id: 'tl3-two-tangent-dropdown',
        type: 'dropdown-select' as const,
        content: `**Two-Tangent Angle Walkthrough** 🔽

Two tangents from external point $P$ intercept a **near arc of $120°$**. Work through the angle at $P$.`,
        exercise: {
          dropdowns: [
            { label: 'The far arc is:', options: ['$240°$', '$120°$', '$180°$', '$300°$'] },
            { label: 'far arc − near arc =', options: ['$120°$', '$240°$', '$360°$', '$60°$'] },
            { label: '$\\angle P = \\frac{1}{2}(\\text{difference}) =$', options: ['$60°$', '$120°$', '$30°$', '$90°$'] },
            { label: 'Check via the supplement of the near arc:', options: ['$180° - 120° = 60°$', '$180° + 120°$', '$120° \\div 2 = 60°$', '$360° - 120°$'] },
          ],
          correctAnswers: ['$240°$', '$120°$', '$60°$', '$180° - 120° = 60°$'],
          hint1: 'Far arc $= 360° - \\text{near arc} = 360° - 120° = 240°$.',
          hint2: 'Difference $= 240° - 120° = 120°$.',
          hint3: '$\\angle P = \\frac{1}{2}(120°) = 60°$, and the supplement check: $180° - 120° = 60°$. ✓',
          explanation: 'Far arc $240°$; difference $120°$; $\\angle P = 60°$. The supplement shortcut ($180° - $ near arc) gives the same $60°$.',
        },
      },
      {
        id: 'tl3-recap-text',
        type: 'text' as const,
        content: `## Two Formulas, One Pattern

Both tangent-angle rules say the same thing: **an angle is half of an arc (or half of an arc difference).**

| Angle | Formula |
|-------|---------|
| Tangent–chord (vertex *on* the circle) | $\\frac{1}{2}(\\text{one arc})$ |
| Two-tangent (vertex *outside* the circle) | $\\frac{1}{2}(\\text{far arc} - \\text{near arc})$ |

> 💡 Vertex **on** the circle → use one arc. Vertex **outside** → use the *difference* of the two arcs.`,
      },
      {
        id: 'tl3-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two tangents from $P$ form a $50°$ angle. What is the near (smaller) intercepted arc?',
              options: ['$130°$', '$100°$', '$50°$', '$230°$'],
              correctAnswer: 0,
              explanation: 'The near arc and $\\angle P$ are supplementary: near arc $= 180° - 50° = 130°$.',
            },
            {
              question: 'A tangent and a chord meet, intercepting a $90°$ arc. The tangent–chord angle equals:',
              options: ['$45°$', '$90°$', '$180°$', '$135°$'],
              correctAnswer: 0,
              explanation: 'Tangent–chord angle $= \\frac{1}{2}(\\text{arc}) = \\frac{1}{2}(90°) = 45°$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'tangent-lines',
    sections: [
      {
        id: 'tl4-intro',
        type: 'text' as const,
        content: `# 📏 Tangent Lines

**Part 4 of 5 — Tangents on the Coordinate Plane**

---

> 🔑 **Goal:** Put tangents on the $xy$-plane. We'll find the slope of a tangent line and test whether a given line is tangent to a circle.`,
      },
      {
        id: 'tl4-slope',
        type: 'text' as const,
        content: `## The Tangent Is Perpendicular to the Radius

On a coordinate grid, the radius–tangent right angle becomes a **slope** statement:

> 🔑 The tangent's slope is the **negative reciprocal** of the radius's slope (because perpendicular slopes multiply to $-1$).

### Worked Example

Circle centered at $O = (0, 0)$, with point of tangency $T = (3, 4)$ on the circle.

**Step 1 — slope of the radius $\\overline{OT}$:**
$$m_{\\text{radius}} = \\frac{4 - 0}{3 - 0} = \\frac{4}{3}$$

**Step 2 — slope of the tangent** (negative reciprocal):
$$m_{\\text{tangent}} = -\\frac{3}{4}$$

**Step 3 — equation** through $T = (3,4)$ with slope $-\\frac{3}{4}$:
$$y - 4 = -\\frac{3}{4}(x - 3)$$

> 💡 Check perpendicularity: $\\dfrac{4}{3} \\cdot \\left(-\\dfrac{3}{4}\\right) = -1$. ✓ Perpendicular slopes always multiply to $-1$.`,
      },
      {
        id: 'tl4-slope-drill',
        type: 'input-boxes' as const,
        content: `**Slopes of Tangents** 🧮

A circle is centered at the origin $O=(0,0)$. For each point of tangency $T$, find the **slope of the tangent line** (negative reciprocal of the radius slope). Enter as a fraction like \`-2/5\` or a whole number.

**1)** $T = (2, 6)$. Radius slope $= 3$, so tangent slope $= \\,?$
**2)** $T = (5, -2)$. Tangent slope $= \\,?$
**3)** $T = (0, 7)$ (top of the circle). Tangent slope $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-1/3', '5/2', '0'],
          hint1: 'Radius slope $= 6/2 = 3$; negative reciprocal is $-1/3$.',
          hint2: 'Radius slope $= -2/5$; negative reciprocal is $5/2$.',
          hint3: 'The radius is vertical (undefined slope), so the tangent at the top is horizontal: slope $= 0$.',
          explanation: '1) $-1/3$.  2) flip and negate $-2/5 \\to 5/2$.  3) A vertical radius gives a horizontal tangent, slope $0$.',
        },
      },
      {
        id: 'tl4-test-tangent',
        type: 'text' as const,
        content: `## Is a Line Tangent? The Distance Test

A line is **tangent** to a circle exactly when its distance from the center equals the radius:

| Distance from center to line | Relationship |
|------------------------------|--------------|
| greater than $r$ | line misses the circle |
| equal to $r$ | line is **tangent** |
| less than $r$ | line is a secant (cuts twice) |

### Worked Example

Is the segment with $PT = 12$, radius $r = 5$, and external distance $PO = 13$ a valid tangent setup?

$$PT^2 + r^2 = 12^2 + 5^2 = 144 + 25 = 169 = 13^2 = PO^2 \\;✓$$

Because the Pythagorean relationship holds with the right angle at $T$, the line through $P$ and $T$ is genuinely tangent.

> ⚠️ If $PT^2 + r^2 \\ne PO^2$, the line is **not** tangent — the angle at $T$ wouldn't be $90°$.`,
      },
      {
        id: 'tl4-test-dropdown',
        type: 'dropdown-select' as const,
        content: `**Tangent or Not?** 🔽

A circle has radius $r$. For each line, compare its distance $d$ from the center to $r$.`,
        exercise: {
          dropdowns: [
            { label: '$r = 5$, distance $d = 5$:', options: ['tangent', 'secant', 'misses the circle'] },
            { label: '$r = 5$, distance $d = 3$:', options: ['secant', 'tangent', 'misses the circle'] },
            { label: '$r = 5$, distance $d = 8$:', options: ['misses the circle', 'tangent', 'secant'] },
          ],
          correctAnswers: ['tangent', 'secant', 'misses the circle'],
          hint1: 'When $d = r$ exactly, the line just touches: tangent.',
          hint2: 'When $d < r$, the line dips inside and crosses twice: secant.',
          hint3: 'When $d > r$, the line stays outside: it misses the circle.',
          explanation: '$d = r$ → tangent; $d < r$ → secant; $d > r$ → no intersection. The tangent is the exact boundary case.',
        },
      },
      {
        id: 'tl4-bridge-text',
        type: 'text' as const,
        content: `## Tying the Two Tools Together

On the coordinate plane, tangent problems reduce to two ideas:

1. **Slope:** the tangent's slope is the **negative reciprocal** of the radius's slope (they meet at $90°$).
2. **Distance:** a line is tangent exactly when its distance from the center equals $r$.

> 💡 Both are just the perpendicular-radius fact in disguise — one as a slope statement, one as a distance statement.`,
      },
      {
        id: 'tl4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A radius has slope $-\\frac{2}{3}$. The tangent at that point has slope:',
              options: ['$\\frac{3}{2}$', '$-\\frac{3}{2}$', '$-\\frac{2}{3}$', '$\\frac{2}{3}$'],
              correctAnswer: 0,
              explanation: 'Negative reciprocal of $-\\frac{2}{3}$: flip to $-\\frac{3}{2}$, then negate to $\\frac{3}{2}$. Check: $-\\frac{2}{3}\\cdot\\frac{3}{2} = -1$. ✓',
            },
            {
              question: 'A line is $7$ units from the center of a circle of radius $7$. The line is:',
              options: ['tangent to the circle', 'a secant', 'outside the circle', 'a diameter'],
              correctAnswer: 0,
              explanation: 'Distance equals the radius ($7 = 7$), so the line touches at exactly one point — it is tangent.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'tangent-lines',
    sections: [
      {
        id: 'tl5-intro',
        type: 'text' as const,
        content: `# 📏 Tangent Lines

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) use the radius–tangent right angle, (2) apply the two-tangent theorem, (3) measure tangent angles by their arcs, and (4) work tangents on the coordinate plane. Let's put it together.`,
      },
      {
        id: 'tl5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Situation | Key fact |
|-----------|----------|
| Tangent meets radius at $T$ | $\\overline{OT} \\perp$ tangent (right angle at $T$) |
| External point $P$, tangent point $T$ | $PT^2 + r^2 = PO^2$ |
| Two tangents from one point $P$ | $PA = PB$ (segments congruent) |
| Tangent–chord angle | $\\frac{1}{2}(\\text{intercepted arc})$ |
| Two-tangent angle | $\\frac{1}{2}(\\text{far arc} - \\text{near arc})$ |
| Tangent angle vs. near arc | supplementary: $\\angle P + \\text{near arc} = 180°$ |
| Coordinate tangent slope | negative reciprocal of the radius's slope |
| Distance test | tangent ⟺ distance from center $= r$ |

> ⚠️ Two reminders: the right angle is at the **point of tangency**, and the two-tangent theorem needs both tangents from the **same** external point.`,
      },
      {
        id: 'tl5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\overline{PT}$ is tangent at $T$. If $r = 9$ and $PT = 12$, find $PO$ (center to $P$).',
              options: ['$15$', '$21$', '$\\sqrt{63}$', '$3\\sqrt{7}$'],
              correctAnswer: 0,
              explanation: '$PO^2 = PT^2 + r^2 = 12^2 + 9^2 = 144 + 81 = 225$, so $PO = \\sqrt{225} = 15$.',
            },
            {
              question: 'Two tangents from $P$ intercept a near arc of $140°$. Find $\\angle P$.',
              options: ['$40°$', '$70°$', '$140°$', '$220°$'],
              correctAnswer: 0,
              explanation: 'Near arc and $\\angle P$ are supplementary: $\\angle P = 180° - 140° = 40°$. (Or: far arc $= 220°$, and $\\frac{1}{2}(220-140) = 40°$.)',
            },
          ],
        },
      },
      {
        id: 'tl5-strategy-text',
        type: 'text' as const,
        content: `## A Solving Game Plan

When a tangent problem appears, run this checklist:

1. **Mark the right angle** at every point of tangency and draw the radius there.
2. **Look for two tangents** from one point → set their lengths equal.
3. **Need an angle?** Find the intercepted arc, then take **half** of it (or half the difference).
4. **On a grid?** Use perpendicular slopes (negative reciprocals) or the distance-equals-radius test.

> 💡 Almost every tangent problem is one of these four moves — or a short combination of them.`,
      },
      {
        id: 'tl5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Numeric Practice** 🧮

**1)** Tangents $\\overline{PA}$ and $\\overline{PB}$ from $P$: $PA = 4x - 3$ and $PB = x + 9$. Solve for $x$.
**2)** A tangent–chord angle measures $63°$. Find its intercepted arc (degrees).
**3)** $\\overline{PT}$ tangent at $T$, $PO = 20$, $PT = 16$. Find the radius $r$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '126', '12'],
          hint1: 'Equal tangents: $4x - 3 = x + 9 \\Rightarrow 3x = 12 \\Rightarrow x = 4$.',
          hint2: 'arc $= 2 \\times$ angle $= 2(63°) = 126°$.',
          hint3: '$r^2 = PO^2 - PT^2 = 20^2 - 16^2 = 400 - 256 = 144$, so $r = 12$.',
          explanation: '1) $x = 4$.  2) arc $= 126°$.  3) $r = \\sqrt{400-256} = \\sqrt{144} = 12$.',
        },
      },
      {
        id: 'tl5-prequiz-text',
        type: 'text' as const,
        content: `## One Last Look

You've used every tangent tool in this lesson. The exit quiz below pulls from all five parts: the right angle, the two-tangent theorem, and the distance test.

> 🔑 Remember the anchor fact: **a tangent is perpendicular to the radius at the point of contact.** Almost everything else follows from it.`,
      },
      {
        id: 'tl5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A tangent line meets the radius at the point of tangency. The angle between them is:',
              options: ['$90°$', '$45°$', '$180°$', 'it depends on the radius length'],
              correctAnswer: 0,
              explanation: 'By the Tangent–Radius Theorem, a tangent is perpendicular to the radius drawn to the point of tangency — always $90°$.',
            },
            {
              question: '$\\overline{PA}$ and $\\overline{PB}$ are tangent from $P$ with $PA = 6x + 1$ and $PB = 4x + 9$. Find $PA$.',
              options: ['$25$', '$4$', '$13$', '$17$'],
              correctAnswer: 0,
              explanation: 'Equal tangents: $6x + 1 = 4x + 9 \\Rightarrow 2x = 8 \\Rightarrow x = 4$. Then $PA = 6(4) + 1 = 25$ (and $PB = 4(4)+9 = 25$ ✓).',
            },
            {
              question: 'A circle of radius $7$ has its center $7$ units from a line. The line is:',
              options: ['tangent to the circle', 'a secant of the circle', 'entirely outside the circle', 'a diameter of the circle'],
              correctAnswer: 0,
              explanation: 'When the distance from the center equals the radius, the line touches at exactly one point — it is tangent.',
            },
          ],
        },
      },
    ],
  },
]
