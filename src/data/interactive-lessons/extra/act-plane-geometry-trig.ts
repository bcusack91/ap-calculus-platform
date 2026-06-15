import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Plane Geometry and Trigonometry (ACT Prep).
 * Registry key: 'act-plane-geometry-trig' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written as \\circ.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'act-plane-geometry-trig',
    sections: [
      {
        id: 'apg1-intro',
        type: 'text' as const,
        content: `# 📐 Plane Geometry & Trigonometry

**Part 1 of 5 — Angles, Lines & Triangle Sums**

---

### Topics in This Part

| Section |
|---------|
| Angle Pairs (complementary, supplementary, vertical) |
| Parallel Lines Cut by a Transversal |
| The Triangle Angle-Sum & Exterior Angle |

> 🔑 **Why this matters:** Plane geometry and trig make up about **35–40%** of the ACT Math section. Almost every figure on the test starts with a few angle facts — master these and you unlock the rest.`,
      },
      {
        id: 'apg1-anglepairs',
        type: 'text' as const,
        content: `## Angle Pairs You Must Know

| Relationship | Definition | They add to |
|--------------|------------|-------------|
| **Complementary** | two angles that form a right angle | $90^\\circ$ |
| **Supplementary** | two angles on a straight line | $180^\\circ$ |
| **Vertical** | opposite angles where two lines cross | *equal* (not a sum) |

**Vertical angles are always equal.** When two lines intersect, the angle pairs across from each other match:

$$\\text{if one angle is } 70^\\circ,\\ \\text{the one across from it is also } 70^\\circ$$

The other two angles are each $180^\\circ - 70^\\circ = 110^\\circ$ (supplementary, on a straight line).

> 💡 **ACT shortcut:** angles around a single point on one side of a line always total $180^\\circ$; angles all the way around a point total $360^\\circ$.`,
      },
      {
        id: 'apg1-pairs-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two angles are complementary. One measures $37^\\circ$. What is the other?',
              options: ['$53^\\circ$', '$143^\\circ$', '$63^\\circ$', '$37^\\circ$'],
              correctAnswer: 0,
              explanation: 'Complementary angles add to $90^\\circ$, so the other is $90^\\circ - 37^\\circ = 53^\\circ$.',
            },
            {
              question: 'Two lines intersect. One of the four angles is $115^\\circ$. The angle vertical to it measures:',
              options: ['$115^\\circ$', '$65^\\circ$', '$25^\\circ$', '$180^\\circ$'],
              correctAnswer: 0,
              explanation: 'Vertical angles are equal, so the angle directly across is also $115^\\circ$. (The two adjacent angles would be $65^\\circ$ each.)',
            },
          ],
        },
      },
      {
        id: 'apg1-parallel',
        type: 'text' as const,
        content: `## Parallel Lines Cut by a Transversal

When a straight line (a **transversal**) crosses two **parallel** lines, only two angle sizes appear — and they pair up:

| Pair type | Relationship |
|-----------|--------------|
| **Corresponding** (same corner position) | equal |
| **Alternate interior** (Z-shape, between the lines) | equal |
| **Co-interior / same-side interior** | supplementary ($180^\\circ$) |

### Example

Two parallel lines are cut by a transversal. One interior angle is $110^\\circ$.

- The **alternate interior** angle is also $110^\\circ$.
- The **co-interior** angle on the same side is $180^\\circ - 110^\\circ = 70^\\circ$.

> ⚠️ These rules **only** work when the lines are parallel. The ACT will tell you (or mark the figure with arrows) when they are.`,
      },
      {
        id: 'apg1-parallel-dropdown',
        type: 'dropdown-select' as const,
        content: `**Parallel-Line Angles** 🔽

Lines $\\ell$ and $m$ are parallel, cut by a transversal. An angle of $65^\\circ$ is marked. Choose each related angle.`,
        exercise: {
          dropdowns: [
            { label: 'The corresponding angle measures:', options: ['$65^\\circ$', '$115^\\circ$', '$25^\\circ$', '$130^\\circ$'] },
            { label: 'The alternate interior angle measures:', options: ['$65^\\circ$', '$115^\\circ$', '$35^\\circ$', '$90^\\circ$'] },
            { label: 'The co-interior (same-side) angle measures:', options: ['$115^\\circ$', '$65^\\circ$', '$25^\\circ$', '$180^\\circ$'] },
          ],
          correctAnswers: ['$65^\\circ$', '$65^\\circ$', '$115^\\circ$'],
          hint1: 'Corresponding angles sit in the same corner position and are equal.',
          hint2: 'Alternate interior angles form a Z and are equal.',
          hint3: 'Co-interior angles are supplementary: $180^\\circ - 65^\\circ = 115^\\circ$.',
          explanation: 'With parallel lines, the corresponding and alternate-interior angles equal $65^\\circ$; the same-side interior angle is $180^\\circ - 65^\\circ = 115^\\circ$.',
        },
      },
      {
        id: 'apg1-trisum',
        type: 'text' as const,
        content: `## The Triangle Angle-Sum

The three interior angles of **any** triangle add to $180^\\circ$:

$$\\angle A + \\angle B + \\angle C = 180^\\circ$$

**Example:** a triangle has angles $50^\\circ$ and $60^\\circ$. The third is
$$180^\\circ - 50^\\circ - 60^\\circ = 70^\\circ.$$

### Exterior Angle Theorem

An **exterior** angle of a triangle equals the **sum of the two non-adjacent (remote) interior angles**:

$$\\text{exterior} = 45^\\circ + 70^\\circ = 115^\\circ$$

> 💡 Quick check: that exterior angle ($115^\\circ$) plus its neighbor interior angle ($65^\\circ$) makes $180^\\circ$ — a straight line. ✓`,
      },
      {
        id: 'apg1-trisum-input',
        type: 'input-boxes' as const,
        content: `**Find the Missing Angle** 🧮

Enter each missing angle in degrees (just the number).

**1)** A triangle has angles $40^\\circ$ and $75^\\circ$. The third angle $= \\,?$
**2)** A right triangle has one acute angle of $32^\\circ$. The other acute angle $= \\,?$
**3)** An exterior angle of a triangle equals the sum of remote interior angles $52^\\circ$ and $61^\\circ$. The exterior angle $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['65', '58', '113'],
          hint1: '$180 - 40 - 75 = 65$.',
          hint2: 'A right triangle has a $90^\\circ$ angle, so the two acute angles add to $90^\\circ$: $90 - 32 = 58$.',
          hint3: 'Exterior angle $= 52 + 61 = 113$.',
          explanation: '1) $180 - 40 - 75 = 65^\\circ$.  2) $90 - 32 = 58^\\circ$.  3) $52 + 61 = 113^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'act-plane-geometry-trig',
    sections: [
      {
        id: 'apg2-intro',
        type: 'text' as const,
        content: `# 📐 Plane Geometry & Trigonometry

**Part 2 of 5 — Triangles: Pythagoras, Special Triangles & Similarity**

---

> 🔑 **The big three:** the Pythagorean theorem, the two special right triangles, and similar-triangle proportions. These appear on virtually every ACT.`,
      },
      {
        id: 'apg2-pythag',
        type: 'text' as const,
        content: `## The Pythagorean Theorem

In a **right** triangle with legs $a$, $b$ and hypotenuse $c$ (the side opposite the right angle, always the longest):

$$a^2 + b^2 = c^2$$

### Pythagorean Triples to Memorize

| Triple | Check |
|--------|-------|
| $3,\\ 4,\\ 5$ | $9 + 16 = 25$ ✓ |
| $5,\\ 12,\\ 13$ | $25 + 144 = 169$ ✓ |
| $8,\\ 15,\\ 17$ | $64 + 225 = 289$ ✓ |

**Multiples count too:** $3\\text{-}4\\text{-}5$ scaled by $3$ gives $9\\text{-}12\\text{-}15$.

### Example: find a leg

Hypotenuse $= 10$, one leg $= 6$. Find the other leg:
$$6^2 + b^2 = 10^2 \\;\\Rightarrow\\; b^2 = 100 - 36 = 64 \\;\\Rightarrow\\; b = 8$$

> ⚠️ The hypotenuse is **always** $c$ — never put the longest side in place of a leg.`,
      },
      {
        id: 'apg2-pythag-input',
        type: 'input-boxes' as const,
        content: `**Pythagorean Drill** 🧮

Enter each missing side length (a whole number).

**1)** Legs $9$ and $12$. Hypotenuse $= \\,?$
**2)** Leg $5$, hypotenuse $13$. Other leg $= \\,?$
**3)** Legs $8$ and $15$. Hypotenuse $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '12', '17'],
          hint1: '$9^2 + 12^2 = 81 + 144 = 225$, and $\\sqrt{225} = 15$. (It is a $3\\text{-}4\\text{-}5$ scaled by $3$.)',
          hint2: '$13^2 - 5^2 = 169 - 25 = 144$, and $\\sqrt{144} = 12$. (A $5\\text{-}12\\text{-}13$ triple.)',
          hint3: '$8^2 + 15^2 = 64 + 225 = 289$, and $\\sqrt{289} = 17$.',
          explanation: '1) $\\sqrt{81+144}=\\sqrt{225}=15$.  2) $\\sqrt{169-25}=\\sqrt{144}=12$.  3) $\\sqrt{64+225}=\\sqrt{289}=17$.',
        },
      },
      {
        id: 'apg2-special',
        type: 'text' as const,
        content: `## The Two Special Right Triangles

These side ratios are fixed — the ACT loves them because no calculator is needed.

### $45^\\circ$-$45^\\circ$-$90^\\circ$ (isosceles right)

$$\\text{leg} : \\text{leg} : \\text{hypotenuse} \\;=\\; 1 : 1 : \\sqrt{2}$$

If each leg is $5$, the hypotenuse is $5\\sqrt{2}$.

### $30^\\circ$-$60^\\circ$-$90^\\circ$

$$\\text{short leg} : \\text{long leg} : \\text{hypotenuse} \\;=\\; 1 : \\sqrt{3} : 2$$

- The **short leg** is opposite the $30^\\circ$ angle.
- The **hypotenuse** is twice the short leg.
- The **long leg** (opposite $60^\\circ$) is the short leg times $\\sqrt{3}$.

**Example:** short leg $= 4 \\Rightarrow$ long leg $= 4\\sqrt{3}$, hypotenuse $= 8$.

> 💡 In a $30$-$60$-$90$, the hypotenuse is the **biggest** number ($2$), so it is double the smallest side — a fast sanity check.`,
      },
      {
        id: 'apg2-special-mc',
        type: 'multiple-choice' as const,
        content: `**Special Triangles** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a $45^\\circ$-$45^\\circ$-$90^\\circ$ triangle, each leg is $7$. The hypotenuse is:',
              options: ['$7\\sqrt{2}$', '$14$', '$7\\sqrt{3}$', '$7$'],
              correctAnswer: 0,
              explanation: 'The ratio is $1:1:\\sqrt{2}$, so hypotenuse $= 7\\sqrt{2}$.',
            },
            {
              question: 'In a $30^\\circ$-$60^\\circ$-$90^\\circ$ triangle, the hypotenuse is $10$. The side opposite the $30^\\circ$ angle (short leg) is:',
              options: ['$5$', '$5\\sqrt{3}$', '$10\\sqrt{3}$', '$\\sqrt{10}$'],
              correctAnswer: 0,
              explanation: 'The hypotenuse is twice the short leg, so short leg $= 10 \\div 2 = 5$.',
            },
          ],
        },
      },
      {
        id: 'apg2-similar',
        type: 'text' as const,
        content: `## Similar Triangles

Two triangles are **similar** when their angles match. Corresponding sides are then **proportional** — same shape, scaled size.

$$\\frac{\\text{side in triangle 1}}{\\text{matching side in triangle 2}} = \\text{constant scale factor}$$

### Example

Triangle $ABC$ is similar to triangle $DEF$. Side $AB = 6$ matches $DE = 9$; side $BC = x$ matches $EF = 12$. Set up the proportion:

$$\\frac{6}{9} = \\frac{x}{12} \\;\\Rightarrow\\; x = \\frac{6 \\cdot 12}{9} = \\frac{72}{9} = 8$$

> 🔑 **Set-up rule:** keep the same triangle on top of both fractions. Cross-multiply, then solve.`,
      },
      {
        id: 'apg2-similar-input',
        type: 'input-boxes' as const,
        content: `**Similar-Triangle Proportions** 🧮

Solve for the missing length (a whole number).

**1)** $\\dfrac{4}{6} = \\dfrac{x}{15}$. Find $x$.
**2)** A $5$-ft pole casts a $4$-ft shadow. At the same time a tree casts a $20$-ft shadow. Using $\\dfrac{5}{4} = \\dfrac{h}{20}$, find the tree height $h$ (ft).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', '25'],
          hint1: 'Cross-multiply: $6x = 4 \\cdot 15 = 60$, so $x = 10$.',
          hint2: 'Cross-multiply: $4h = 5 \\cdot 20 = 100$, so $h = 25$.',
          hint3: 'Always cross-multiply, then divide.',
          explanation: '1) $6x = 60 \\Rightarrow x = 10$.  2) $4h = 100 \\Rightarrow h = 25$ ft.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'act-plane-geometry-trig',
    sections: [
      {
        id: 'apg3-intro',
        type: 'text' as const,
        content: `# 📐 Plane Geometry & Trigonometry

**Part 3 of 5 — Polygons, Circles, Area & Perimeter**

---

> 🔑 **Formula-heavy part:** the ACT does *not* give you a formula sheet, so the area, circumference, and polygon-angle rules here must be memorized cold.`,
      },
      {
        id: 'apg3-area',
        type: 'text' as const,
        content: `## Area & Perimeter Formulas

| Shape | Area | Perimeter |
|-------|------|-----------|
| Rectangle ($l \\times w$) | $A = lw$ | $P = 2l + 2w$ |
| Triangle (base $b$, height $h$) | $A = \\tfrac{1}{2}bh$ | sum of three sides |
| Parallelogram | $A = bh$ | $2(\\text{base} + \\text{side})$ |
| Trapezoid (parallel sides $b_1, b_2$) | $A = \\tfrac{1}{2}(b_1 + b_2)h$ | sum of four sides |

### Example: triangle area

Base $= 10$, height $= 6$:
$$A = \\tfrac{1}{2}(10)(6) = 30$$

> ⚠️ In a triangle, the **height** is the perpendicular distance to the base — *not* a slanted side. Use the side that meets the base at $90^\\circ$.`,
      },
      {
        id: 'apg3-circle',
        type: 'text' as const,
        content: `## Circles

For a circle with radius $r$ (and diameter $d = 2r$):

$$\\text{Area} = \\pi r^2 \\qquad \\text{Circumference} = 2\\pi r = \\pi d$$

### Example: $r = 5$

$$\\text{Area} = \\pi (5)^2 = 25\\pi \\qquad \\text{Circumference} = 2\\pi(5) = 10\\pi$$

### Sectors (pie slices)

A sector spanning a central angle of $\\theta$ degrees is the fraction $\\dfrac{\\theta}{360^\\circ}$ of the whole circle:

$$\\text{Sector area} = \\frac{\\theta}{360^\\circ}\\cdot \\pi r^2 \\qquad \\text{Arc length} = \\frac{\\theta}{360^\\circ}\\cdot 2\\pi r$$

**Example:** a $90^\\circ$ sector of a circle with $r = 6$ is $\\frac{90}{360} = \\frac14$ of the circle:
$$\\text{Sector area} = \\tfrac14 \\cdot 36\\pi = 9\\pi, \\qquad \\text{Arc length} = \\tfrac14 \\cdot 12\\pi = 3\\pi.$$`,
      },
      {
        id: 'apg3-circle-mc',
        type: 'multiple-choice' as const,
        content: `**Circle Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has radius $7$. Its area is:',
              options: ['$49\\pi$', '$14\\pi$', '$7\\pi$', '$98\\pi$'],
              correctAnswer: 0,
              explanation: 'Area $= \\pi r^2 = \\pi(7)^2 = 49\\pi$.',
            },
            {
              question: 'A circle has diameter $12$. Its circumference is:',
              options: ['$12\\pi$', '$6\\pi$', '$24\\pi$', '$144\\pi$'],
              correctAnswer: 0,
              explanation: 'Circumference $= \\pi d = \\pi(12) = 12\\pi$. (Equivalently $2\\pi r$ with $r = 6$.)',
            },
          ],
        },
      },
      {
        id: 'apg3-polygon',
        type: 'text' as const,
        content: `## Polygon Interior Angles

The interior angles of an $n$-sided polygon sum to:

$$\\text{Sum} = (n - 2)\\cdot 180^\\circ$$

For a **regular** polygon (all angles equal), each interior angle is that sum divided by $n$:

| Polygon | $n$ | Angle sum | Each angle (regular) |
|---------|-----|-----------|----------------------|
| Pentagon | $5$ | $540^\\circ$ | $108^\\circ$ |
| Hexagon | $6$ | $720^\\circ$ | $120^\\circ$ |
| Octagon | $8$ | $1080^\\circ$ | $135^\\circ$ |

**Example (hexagon):** $(6-2)\\cdot 180^\\circ = 720^\\circ$, and $720^\\circ \\div 6 = 120^\\circ$ each.

> 💡 The **exterior** angles of *any* convex polygon always sum to $360^\\circ$ — a handy backup formula.`,
      },
      {
        id: 'apg3-polygon-dropdown',
        type: 'dropdown-select' as const,
        content: `**Polygons & Areas** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Interior angle sum of a pentagon ($n=5$):', options: ['$540^\\circ$', '$360^\\circ$', '$720^\\circ$', '$180^\\circ$'] },
            { label: 'Each interior angle of a regular octagon:', options: ['$135^\\circ$', '$120^\\circ$', '$108^\\circ$', '$144^\\circ$'] },
            { label: 'Area of a trapezoid with parallel sides $6$ and $10$, height $4$:', options: ['$32$', '$40$', '$60$', '$24$'] },
          ],
          correctAnswers: ['$540^\\circ$', '$135^\\circ$', '$32$'],
          hint1: '$(5-2)\\cdot 180^\\circ = 540^\\circ$.',
          hint2: 'Octagon sum $= (8-2)\\cdot 180^\\circ = 1080^\\circ$; divide by $8$ to get $135^\\circ$.',
          hint3: 'Trapezoid area $= \\tfrac12(b_1+b_2)h = \\tfrac12(6+10)(4) = \\tfrac12(16)(4) = 32$.',
          explanation: 'Pentagon sum $= 540^\\circ$; regular octagon angle $= 1080^\\circ \\div 8 = 135^\\circ$; trapezoid area $= \\tfrac12(16)(4) = 32$.',
        },
      },
      {
        id: 'apg3-area-recap',
        type: 'text' as const,
        content: `## Putting the Area Formulas to Work

Before the drill, lock in the three you will use most:

$$\\text{Rectangle: } A = lw, \\qquad \\text{Triangle: } A = \\tfrac12 bh, \\qquad \\text{Circle: } A = \\pi r^2$$

On the ACT, leave a circle's area in terms of $\\pi$ (e.g. $9\\pi$) unless the question asks for a decimal — it is faster and avoids rounding mistakes.

> 💡 If a figure is a composite shape (a rectangle with a half-circle on top, say), find each piece's area separately and **add** them.`,
      },
      {
        id: 'apg3-area-input',
        type: 'input-boxes' as const,
        content: `**Area Drill** 🧮

Enter each answer as a number (use $\\pi$ as the symbol, not a decimal — e.g. write the coefficient only).

**1)** Rectangle $8$ by $5$: area $= \\,?$
**2)** Triangle, base $12$, height $7$: area $= \\,?$
**3)** Circle with radius $3$: area is $?\\,\\pi$ (enter the coefficient)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', '42', '9'],
          hint1: 'Rectangle area $= lw = 8 \\cdot 5 = 40$.',
          hint2: 'Triangle area $= \\tfrac12 bh = \\tfrac12(12)(7) = 42$.',
          hint3: 'Circle area $= \\pi r^2 = \\pi(3)^2 = 9\\pi$; the coefficient is $9$.',
          explanation: '1) $8\\cdot 5 = 40$.  2) $\\tfrac12(12)(7) = 42$.  3) $\\pi(3)^2 = 9\\pi \\Rightarrow$ coefficient $9$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'act-plane-geometry-trig',
    sections: [
      {
        id: 'apg4-intro',
        type: 'text' as const,
        content: `# 📐 Plane Geometry & Trigonometry

**Part 4 of 5 — Right-Triangle Trigonometry (SOH-CAH-TOA)**

---

> 🔑 **The whole game:** the three basic trig ratios connect an **acute angle** of a right triangle to its sides. Memorize **SOH-CAH-TOA** and you can find any missing side or angle.`,
      },
      {
        id: 'apg4-sohcahtoa',
        type: 'text' as const,
        content: `## SOH-CAH-TOA

Relative to a chosen acute angle $\\theta$, label the sides:
- **Opposite** — the leg across from $\\theta$
- **Adjacent** — the leg next to $\\theta$ (not the hypotenuse)
- **Hypotenuse** — opposite the right angle (longest)

$$\\sin\\theta = \\frac{\\text{Opp}}{\\text{Hyp}}, \\qquad \\cos\\theta = \\frac{\\text{Adj}}{\\text{Hyp}}, \\qquad \\tan\\theta = \\frac{\\text{Opp}}{\\text{Adj}}$$

### Example: the $3$-$4$-$5$ triangle

Let $\\theta$ be the angle with opposite leg $3$, adjacent leg $4$, hypotenuse $5$:

$$\\sin\\theta = \\frac{3}{5}, \\qquad \\cos\\theta = \\frac{4}{5}, \\qquad \\tan\\theta = \\frac{3}{4}$$

> 💡 **SOH-CAH-TOA** = **S**in **O**pp/**H**yp, **C**os **A**dj/**H**yp, **T**an **O**pp/**A**dj.`,
      },
      {
        id: 'apg4-ratio-mc',
        type: 'multiple-choice' as const,
        content: `**Identify the Ratio** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a right triangle, the leg opposite $\\theta$ is $12$, the adjacent leg is $5$, and the hypotenuse is $13$. What is $\\cos\\theta$?',
              options: ['$\\frac{5}{13}$', '$\\frac{12}{13}$', '$\\frac{12}{5}$', '$\\frac{5}{12}$'],
              correctAnswer: 0,
              explanation: 'Cosine is Adjacent/Hypotenuse $= \\frac{5}{13}$.',
            },
            {
              question: 'Using the same triangle (opposite $12$, adjacent $5$, hyp $13$), what is $\\tan\\theta$?',
              options: ['$\\frac{12}{5}$', '$\\frac{5}{12}$', '$\\frac{12}{13}$', '$\\frac{5}{13}$'],
              correctAnswer: 0,
              explanation: 'Tangent is Opposite/Adjacent $= \\frac{12}{5}$.',
            },
          ],
        },
      },
      {
        id: 'apg4-special-angles',
        type: 'text' as const,
        content: `## Trig of the Special Angles

From the special right triangles, these exact values come up constantly:

| $\\theta$ | $\\sin\\theta$ | $\\cos\\theta$ | $\\tan\\theta$ |
|-----------|---------------|---------------|---------------|
| $30^\\circ$ | $\\frac{1}{2}$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{3}}{3}$ |
| $45^\\circ$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $1$ |
| $60^\\circ$ | $\\frac{\\sqrt{3}}{2}$ | $\\frac{1}{2}$ | $\\sqrt{3}$ |

### Solving for a side

If you know an angle and one side, multiply or divide to get another.

**Example:** the hypotenuse is $10$ and one acute angle is $30^\\circ$. The side **opposite** that angle is
$$\\text{Opp} = \\text{Hyp}\\cdot \\sin 30^\\circ = 10 \\cdot \\tfrac{1}{2} = 5.$$

> ⚠️ Notice $\\sin 30^\\circ = \\frac12$ but $\\sin 60^\\circ = \\frac{\\sqrt3}{2}$ — they are **not** the same. Match the ratio to the angle carefully.`,
      },
      {
        id: 'apg4-special-dropdown',
        type: 'dropdown-select' as const,
        content: `**Special-Angle Values** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$\\sin 30^\\circ =$', options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'] },
            { label: '$\\cos 60^\\circ =$', options: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$0$'] },
            { label: '$\\tan 45^\\circ =$', options: ['$1$', '$\\frac{\\sqrt{2}}{2}$', '$\\sqrt{3}$', '$\\frac{1}{2}$'] },
          ],
          correctAnswers: ['$\\frac{1}{2}$', '$\\frac{1}{2}$', '$1$'],
          hint1: 'In a $30$-$60$-$90$, the side opposite $30^\\circ$ is half the hypotenuse, so $\\sin 30^\\circ = \\frac12$.',
          hint2: 'Cosine of $60^\\circ$ equals sine of $30^\\circ$ (co-functions): both are $\\frac12$.',
          hint3: 'In a $45$-$45$-$90$ the two legs are equal, so $\\tan 45^\\circ = \\frac{\\text{opp}}{\\text{adj}} = 1$.',
          explanation: '$\\sin 30^\\circ = \\frac12$, $\\cos 60^\\circ = \\frac12$, and $\\tan 45^\\circ = 1$.',
        },
      },
      {
        id: 'apg4-solve-recap',
        type: 'text' as const,
        content: `## Turning a Ratio Into a Side

To find a **side** when you know an angle and another side, set up the matching ratio and solve:

- Know the **hypotenuse**, want the **opposite** side → use $\\sin$: $\\;\\text{Opp} = \\text{Hyp}\\cdot\\sin\\theta$.
- Know the **hypotenuse**, want the **adjacent** side → use $\\cos$: $\\;\\text{Adj} = \\text{Hyp}\\cdot\\cos\\theta$.
- Know one **leg**, want the **other leg** → use $\\tan$.

> 🔑 Pick the ratio that contains **the side you know** and **the side you want** — then it is just one multiplication or one cross-multiply away.`,
      },
      {
        id: 'apg4-solve-input',
        type: 'input-boxes' as const,
        content: `**Solve the Triangle** 🧮

Enter each answer as a whole number.

**1)** Right triangle, hypotenuse $20$, one acute angle $30^\\circ$. The leg opposite that angle $= 20\\sin 30^\\circ = \\,?$
**2)** A right triangle has $\\tan\\theta = \\frac{3}{4}$ with opposite leg $6$. Using $\\frac{6}{\\text{adj}} = \\frac34$, the adjacent leg $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['10', '8'],
          hint1: '$20 \\cdot \\sin 30^\\circ = 20 \\cdot \\tfrac12 = 10$.',
          hint2: '$\\frac{6}{\\text{adj}} = \\frac34 \\Rightarrow 3\\cdot\\text{adj} = 24 \\Rightarrow \\text{adj} = 8$.',
          hint3: 'Cross-multiply the proportion, then divide.',
          explanation: '1) $20\\sin 30^\\circ = 20\\cdot\\tfrac12 = 10$.  2) $\\frac{6}{\\text{adj}} = \\frac34 \\Rightarrow \\text{adj} = 8$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'act-plane-geometry-trig',
    sections: [
      {
        id: 'apg5-intro',
        type: 'text' as const,
        content: `# 📐 Plane Geometry & Trigonometry

**Part 5 of 5 — Coordinate Geometry & Mastery Check**

---

The ACT also tests geometry on the $xy$-plane: distance, midpoint, and slope. Then we put everything together.`,
      },
      {
        id: 'apg5-coord',
        type: 'text' as const,
        content: `## Distance, Midpoint & Slope

For two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$\\text{Distance} = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

$$\\text{Midpoint} = \\left(\\frac{x_1 + x_2}{2},\\ \\frac{y_1 + y_2}{2}\\right)$$

$$\\text{Slope} = \\frac{y_2 - y_1}{x_2 - x_1} = \\frac{\\text{rise}}{\\text{run}}$$

### Worked Example

Points $(1, 2)$ and $(4, 6)$:
$$\\text{Distance} = \\sqrt{(4-1)^2 + (6-2)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$
$$\\text{Slope} = \\frac{6 - 2}{4 - 1} = \\frac{4}{3}$$

> 💡 The distance formula is just the Pythagorean theorem in disguise: the horizontal and vertical gaps are the legs, the distance is the hypotenuse.`,
      },
      {
        id: 'apg5-coord-input',
        type: 'input-boxes' as const,
        content: `**Coordinate Drill** 🧮

Use the points $(2, 3)$ and $(8, 11)$.

**1)** Midpoint $x$-coordinate $= \\,?$
**2)** Midpoint $y$-coordinate $= \\,?$
**3)** Slope of the line through them $= \\,?$  *(reduce to a fraction or whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '7', '4/3'],
          hint1: 'Midpoint $x = \\frac{2+8}{2} = 5$.',
          hint2: 'Midpoint $y = \\frac{3+11}{2} = 7$.',
          hint3: 'Slope $= \\frac{11-3}{8-2} = \\frac{8}{6} = \\frac{4}{3}$.',
          explanation: 'Midpoint $= (5, 7)$; slope $= \\frac{8}{6} = \\frac{4}{3}$.',
        },
      },
      {
        id: 'apg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key formula |
|------|-------------|
| Triangle angles | sum $= 180^\\circ$ |
| Polygon angle sum | $(n-2)\\cdot 180^\\circ$ |
| Right-triangle side | $a^2 + b^2 = c^2$ |
| $45$-$45$-$90$ | $1 : 1 : \\sqrt{2}$ |
| $30$-$60$-$90$ | $1 : \\sqrt{3} : 2$ |
| Trig ratios | SOH-CAH-TOA |
| Circle | $A = \\pi r^2,\\ C = 2\\pi r$ |
| Distance | $\\sqrt{(\\Delta x)^2 + (\\Delta y)^2}$ |

> ⚠️ The ACT gives **no** formula sheet. Drill these until they are automatic.`,
      },
      {
        id: 'apg5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A right triangle has legs $6$ and $8$. The length of the hypotenuse is:',
              options: ['$10$', '$14$', '$\\sqrt{14}$', '$48$'],
              correctAnswer: 0,
              explanation: '$6^2 + 8^2 = 36 + 64 = 100$, and $\\sqrt{100} = 10$. (A $3\\text{-}4\\text{-}5$ scaled by $2$.)',
            },
            {
              question: 'The distance between $(-2, -1)$ and $(1, 3)$ is:',
              options: ['$5$', '$7$', '$\\sqrt{7}$', '$25$'],
              correctAnswer: 0,
              explanation: '$\\sqrt{(1-(-2))^2 + (3-(-1))^2} = \\sqrt{3^2 + 4^2} = \\sqrt{9+16} = \\sqrt{25} = 5$.',
            },
          ],
        },
      },
      {
        id: 'apg5-before-exit',
        type: 'text' as const,
        content: `## One Last Look Before the Exit Quiz

You have covered the full ACT plane-geometry-and-trig toolkit:

1. **Angles & lines** — complementary/supplementary/vertical, parallel-line pairs, $180^\\circ$ triangle sum.
2. **Triangles** — Pythagoras, the $1{:}1{:}\\sqrt2$ and $1{:}\\sqrt3{:}2$ special triangles, similarity proportions.
3. **Polygons & circles** — $(n-2)\\cdot 180^\\circ$, $A=\\pi r^2$, sectors.
4. **Trig** — SOH-CAH-TOA and the $30^\\circ$/$45^\\circ$/$60^\\circ$ exact values.
5. **Coordinate geometry** — distance, midpoint, slope.

> 🔑 On test day, **redraw and label** every figure. Most ACT geometry errors come from mis-reading the picture, not from the math itself.`,
      },
      {
        id: 'apg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Two parallel lines are cut by a transversal. One co-interior (same-side interior) angle is $130^\\circ$. The other co-interior angle is:',
              options: ['$50^\\circ$', '$130^\\circ$', '$230^\\circ$', '$40^\\circ$'],
              correctAnswer: 0,
              explanation: 'Co-interior angles are supplementary, so the other is $180^\\circ - 130^\\circ = 50^\\circ$.',
            },
            {
              question: 'In a right triangle, the side opposite $\\theta$ is $9$ and the hypotenuse is $15$. What is $\\sin\\theta$?',
              options: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{5}{3}$', '$\\frac{9}{12}$'],
              correctAnswer: 0,
              explanation: '$\\sin\\theta = \\frac{\\text{Opp}}{\\text{Hyp}} = \\frac{9}{15} = \\frac{3}{5}$.',
            },
            {
              question: 'Each interior angle of a regular hexagon measures:',
              options: ['$120^\\circ$', '$108^\\circ$', '$135^\\circ$', '$60^\\circ$'],
              correctAnswer: 0,
              explanation: 'Angle sum $= (6-2)\\cdot 180^\\circ = 720^\\circ$; divided by $6$ gives $120^\\circ$.',
            },
          ],
        },
      },
    ],
  },
]
