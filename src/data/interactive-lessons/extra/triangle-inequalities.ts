import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Triangle Inequalities (Geometry).
 * Registry key: 'triangle-inequalities' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'triangle-inequalities',
    sections: [
      {
        id: 'ti1-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Inequalities

**Part 1 of 5 — The Triangle Inequality Theorem**

---

### Topics in This Part

| Section |
|---------|
| Can These Sides Make a Triangle? |
| The Triangle Inequality Theorem |
| The One-Check Shortcut |

> 🔑 **Key Concept:** Not every set of three lengths can close up into a triangle. If two sides are too short, they simply can't reach across the third. The **Triangle Inequality Theorem** tells you exactly when three lengths *will* form a triangle.`,
      },
      {
        id: 'ti1-build',
        type: 'text' as const,
        content: `## Can These Sides Make a Triangle?

Imagine two sticks hinged at one end. To form a triangle, their free ends must meet the third side. If the two sticks are too short, they fall short of reaching — no triangle.

- Sides $3$, $4$, $5$ → the two shorter sticks ($3 + 4 = 7$) easily reach across the side of length $5$. ✓ **Triangle**
- Sides $1$, $2$, $10$ → the two shorter sticks ($1 + 2 = 3$) can't span a gap of $10$. ✗ **No triangle**

The deciding factor is always whether the **two shorter sides together** are long enough to stretch across the longest side.

> 💡 Picture it: if you flatten the triangle completely, the two short sides lie *along* the long side. To make a real (non-flat) triangle, they must add up to **strictly more** than the long side.`,
      },
      {
        id: 'ti1-theorem',
        type: 'text' as const,
        content: `## The Triangle Inequality Theorem

> 🔑 **Theorem:** The sum of the lengths of **any two sides** of a triangle is **greater than** the length of the third side.

For a triangle with sides $a$, $b$, and $c$, **all three** of these must hold:

$$a + b > c \\qquad a + c > b \\qquad b + c > a$$

### Example: Sides $7$, $10$, $5$

| Check | Sum | vs. third | Pass? |
|-------|-----|-----------|-------|
| $7 + 10 > 5$ | $17$ | $> 5$ | ✓ |
| $7 + 5 > 10$ | $12$ | $> 10$ | ✓ |
| $10 + 5 > 7$ | $15$ | $> 7$ | ✓ |

All three pass, so $7$, $10$, $5$ **form a triangle**.

> ⚠️ The inequality is **strict** ($>$, not $\\geq$). If a sum **equals** the third side, the three points lie on a straight line — a *degenerate* triangle with zero area, which we do **not** count as a real triangle.`,
      },
      {
        id: 'ti1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which set of side lengths CAN form a triangle?',
              options: ['$2$, $3$, $6$', '$4$, $5$, $8$', '$1$, $1$, $3$', '$5$, $5$, $10$'],
              correctAnswer: 1,
              explanation: 'For $4, 5, 8$: $4+5=9>8$ ✓, $4+8>5$ ✓, $5+8>4$ ✓. For $2,3,6$: $2+3=5$, not $>6$. For $1,1,3$: $1+1=2<3$. For $5,5,10$: $5+5=10$, not strictly greater — that is degenerate.',
            },
            {
              question: 'Why must the inequality use $>$ rather than $\\geq$?',
              options: [
                'If a sum equals the third side, the triangle is flat (zero area) — not a real triangle',
                'Because side lengths must be whole numbers',
                'Because the largest side is always the longest',
                'It does not matter; $\\geq$ would work just as well',
              ],
              correctAnswer: 0,
              explanation: 'When two sides sum to exactly the third, the vertices are collinear, giving a degenerate triangle with zero area. A genuine triangle needs the strict inequality.',
            },
          ],
        },
      },
      {
        id: 'ti1-shortcut',
        type: 'text' as const,
        content: `## The One-Check Shortcut

Checking all three inequalities works, but there's a faster way.

> 🔑 **Shortcut:** Add the **two shortest** sides. If that sum is **greater than the longest** side, the triangle is valid. You only need this one check.

Why? If the two shortest sides already beat the longest side, then *any* two sides (which can only be longer) will certainly beat the remaining one.

### Example: Sides $6$, $9$, $4$

The two shortest are $4$ and $6$. The longest is $9$.

$$4 + 6 = 10 > 9 \\;\\Rightarrow\\; \\text{valid triangle} ✓$$

### Example: Sides $3$, $11$, $7$

Two shortest: $3$ and $7$. Longest: $11$.

$$3 + 7 = 10 \\not> 11 \\;\\Rightarrow\\; \\text{NOT a triangle} ✗$$`,
      },
      {
        id: 'ti1-drill',
        type: 'dropdown-select' as const,
        content: `**Valid or Not?** 🔽

Use the shortcut — add the two shortest sides and compare with the longest.`,
        exercise: {
          dropdowns: [
            { label: 'Sides $5$, $12$, $13$:', options: ['Valid triangle', 'Not a triangle'] },
            { label: 'Sides $2$, $4$, $7$:', options: ['Valid triangle', 'Not a triangle'] },
            { label: 'Sides $8$, $8$, $8$:', options: ['Valid triangle', 'Not a triangle'] },
            { label: 'Sides $6$, $6$, $12$:', options: ['Valid triangle', 'Not a triangle'] },
          ],
          correctAnswers: ['Valid triangle', 'Not a triangle', 'Valid triangle', 'Not a triangle'],
          hint1: 'Shortest two of $5,12,13$ are $5$ and $12$: $5+12=17>13$.',
          hint2: 'For $2,4,7$: $2+4=6$, which is not greater than $7$.',
          hint3: 'For $6,6,12$: $6+6=12$, equal (not strictly greater) — degenerate, so not a triangle.',
          explanation: '$5,12,13$: $5+12=17>13$ ✓. $2,4,7$: $2+4=6\\not>7$ ✗. $8,8,8$ (equilateral): $8+8=16>8$ ✓. $6,6,12$: $6+6=12\\not>12$ ✗.',
        },
      },
      {
        id: 'ti1-sum-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Shortcut** 🧮

For each set of sides, add the **two shortest** sides, then decide.

**1)** Sides $7$, $9$, $4$ — what is the sum of the two shortest sides?
**2)** Sides $3$, $5$, $9$ — what is the sum of the two shortest sides?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['11', '8'],
          hint1: 'Pick the two smallest numbers and add them; compare with the largest.',
          hint2: 'For $7,9,4$ the two shortest are $4$ and $7$: $4+7=11$ (and $11>9$, so it is valid).',
          hint3: 'For $3,5,9$ the two shortest are $3$ and $5$: $3+5=8$ (and $8\\not>9$, so it is not a triangle).',
          explanation: '1) Two shortest of $7,9,4$ are $4$ and $7$: $4+7=11$ ($>9$ → valid). 2) Two shortest of $3,5,9$ are $3$ and $5$: $3+5=8$ ($\\not>9$ → not a triangle).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'triangle-inequalities',
    sections: [
      {
        id: 'ti2-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Inequalities

**Part 2 of 5 — The Range of the Third Side**

---

> 🔑 **The Question:** If two sides of a triangle are $a$ and $b$, how long can the third side $x$ be? Not anything — it's trapped between a smallest and largest value.`,
      },
      {
        id: 'ti2-range',
        type: 'text' as const,
        content: `## Boxing In the Third Side

Suppose two sides are $a$ and $b$. Let the third side be $x$. The triangle inequality gives us two useful bounds:

- From $a + b > x$: the third side must be **less than the sum**. So $\\;x < a + b$.
- From $a + x > b$ and $b + x > a$: the third side must be **more than the difference**. So $\\;x > |a - b|$.

Putting them together:

$$|a - b| < x < a + b$$

> 🔑 **Range Rule:** The third side is **bigger than the difference** of the other two and **smaller than their sum**.

### Example: Two sides are $7$ and $10$

$$|10 - 7| < x < 10 + 7$$
$$3 < x < 17$$

So the third side can be anything strictly between $3$ and $17$.`,
      },
      {
        id: 'ti2-range-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two sides of a triangle are $8$ and $5$. The third side $x$ must satisfy:',
              options: ['$3 < x < 13$', '$5 < x < 8$', '$0 < x < 13$', '$3 < x < 40$'],
              correctAnswer: 0,
              explanation: 'Difference $= |8-5| = 3$; sum $= 8+5 = 13$. So $3 < x < 13$.',
            },
            {
              question: 'Two sides are $6$ and $6$. Which third-side length is possible?',
              options: ['$11$', '$12$', '$0$', '$13$'],
              correctAnswer: 0,
              explanation: 'Range is $|6-6| < x < 6+6$, i.e. $0 < x < 12$. Only $11$ lies strictly inside. $12$ and $13$ are too big; $0$ is not a length.',
            },
          ],
        },
      },
      {
        id: 'ti2-worked',
        type: 'text' as const,
        content: `## Worked Example: Counting Whole-Number Possibilities

**Two sides of a triangle are $4$ and $9$. How many whole-number values are possible for the third side?**

**Step 1 — Find the range.**
$$|9 - 4| < x < 9 + 4 \\;\\Rightarrow\\; 5 < x < 13$$

**Step 2 — List the whole numbers strictly between $5$ and $13$.**

$$x = 6,\\; 7,\\; 8,\\; 9,\\; 10,\\; 11,\\; 12$$

**Step 3 — Count them.** That's $\\mathbf{7}$ possible whole-number lengths.

> ⚠️ The endpoints $5$ and $13$ are **excluded** — the inequality is strict, so $x = 5$ and $x = 13$ would give degenerate (flat) triangles.

> 💡 **Shortcut for counting whole numbers** strictly between two integers $m$ and $n$ (with $m < n$): there are $n - m - 1$ of them. Here $13 - 5 - 1 = 7$. ✓`,
      },
      {
        id: 'ti2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Range** 🧮

For each pair of sides, enter the smallest and largest **strict** bounds for the third side $x$, where $\\text{low} < x < \\text{high}$.

**1)** Sides $9$ and $14$:  low $= \\,?$ , high $= \\,?$
**2)** Sides $11$ and $11$:  low $= \\,?$ , high $= \\,?$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['5', '23', '0', '22'],
          hint1: 'low $= |a-b|$, high $= a+b$.',
          hint2: 'For $9$ and $14$: $|14-9|=5$ and $14+9=23$.',
          hint3: 'For $11$ and $11$: $|11-11|=0$ and $11+11=22$.',
          explanation: '1) $|14-9|=5$, $14+9=23$ → $5 < x < 23$. 2) $|11-11|=0$, $11+11=22$ → $0 < x < 22$.',
        },
      },
      {
        id: 'ti2-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Possibilities** 🧮

**1)** Two sides are $5$ and $8$. How many **whole-number** values are possible for the third side?
**2)** Two sides are $10$ and $10$. How many **whole-number** values are possible for the third side?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['9', '19'],
          hint1: 'Find the range first, then count integers strictly inside (use high $-$ low $-1$).',
          hint2: 'For $5,8$: $3 < x < 13$, so $13 - 3 - 1 = 9$.',
          hint3: 'For $10,10$: $0 < x < 20$, so $20 - 0 - 1 = 19$.',
          explanation: '1) $3 < x < 13$ → integers $4..12$ → $9$ values. 2) $0 < x < 20$ → integers $1..19$ → $19$ values.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'triangle-inequalities',
    sections: [
      {
        id: 'ti3-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Inequalities

**Part 3 of 5 — Sides, Angles & Their Order**

---

> 🔑 **The Big Idea:** Inside any triangle, the longest side and the largest angle are partners — they always sit **opposite** each other. The shortest side faces the smallest angle.`,
      },
      {
        id: 'ti3-sideangle',
        type: 'text' as const,
        content: `## The Side–Angle Relationship

> 🔑 **Theorem (Side–Angle Inequality):** In any triangle, the **larger angle is opposite the longer side**, and the **longer side is opposite the larger angle**. The ordering of the sides exactly matches the ordering of the angles opposite them.

Think of an angle as how "wide open" a corner is. A wider corner forces the side across from it to stretch farther.

### Example

In a triangle, suppose the angles are $50°$, $60°$, and $70°$. Then the sides opposite them, from **shortest to longest**, are:

| Angle | Side opposite it | Rank |
|-------|------------------|------|
| $50°$ (smallest) | shortest side | 1st |
| $60°$ (middle) | middle side | 2nd |
| $70°$ (largest) | longest side | 3rd |

> 💡 "**Big angle → big side across from it.**" Just match the order: smallest angle to shortest side, largest angle to longest side.`,
      },
      {
        id: 'ti3-naming',
        type: 'text' as const,
        content: `## Reading a Labeled Triangle

A side is named by the two vertices at its ends; the angle "opposite" a side is the vertex **not** on that side.

In triangle $ABC$:
- Side $BC$ is opposite vertex $A$ (angle $A$).
- Side $AC$ is opposite vertex $B$ (angle $B$).
- Side $AB$ is opposite vertex $C$ (angle $C$).

### Example

In triangle $ABC$, $\\angle A = 80°$, $\\angle B = 60°$, $\\angle C = 40°$.

The **largest angle** is $\\angle A$, so the **longest side** is the one opposite $A$, namely $BC$.

The **smallest angle** is $\\angle C$, so the **shortest side** is opposite $C$, namely $AB$.

> ⚠️ A common slip is naming the side *touching* the big angle. The longest side is the one **across from** (opposite) the largest angle, not next to it.`,
      },
      {
        id: 'ti3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Side to Angle** 🔽

In triangle $ABC$, $\\angle A = 75°$, $\\angle B = 65°$, $\\angle C = 40°$.`,
        exercise: {
          dropdowns: [
            { label: 'The longest side is opposite:', options: ['$\\angle A$', '$\\angle B$', '$\\angle C$'] },
            { label: 'So the longest side is:', options: ['$BC$', '$AC$', '$AB$'] },
            { label: 'The shortest side is:', options: ['$AB$', '$BC$', '$AC$'] },
          ],
          correctAnswers: ['$\\angle A$', '$BC$', '$AB$'],
          hint1: 'Largest angle here is $\\angle A = 75°$; smallest is $\\angle C = 40°$.',
          hint2: 'The side opposite a vertex does not contain that vertex letter.',
          hint3: 'Opposite $\\angle A$ is side $BC$; opposite $\\angle C$ is side $AB$.',
          explanation: '$\\angle A$ (75°) is largest → longest side $BC$ (opposite $A$). $\\angle C$ (40°) is smallest → shortest side $AB$ (opposite $C$).',
        },
      },
      {
        id: 'ti3-reverse',
        type: 'text' as const,
        content: `## Going the Other Way: Sides → Angles

The relationship works in both directions. If you know the **sides**, you can rank the **angles**.

### Example: Sides $AB = 9$, $BC = 5$, $CA = 7$

Rank the sides shortest → longest: $BC = 5 < CA = 7 < AB = 9$.

The angle opposite each side follows the same order:
- Opposite $BC$ is $\\angle A$ → **smallest angle**.
- Opposite $CA$ is $\\angle B$ → **middle angle**.
- Opposite $AB$ is $\\angle C$ → **largest angle**.

So $\\angle A < \\angle B < \\angle C$.

> 💡 To rank angles from side lengths: find which side each angle is **opposite**, then the angles line up in the same order as those opposite sides.`,
      },
      {
        id: 'ti3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In triangle $PQR$, $PQ = 12$, $QR = 8$, $PR = 15$. Which is the LARGEST angle?',
              options: ['$\\angle Q$', '$\\angle P$', '$\\angle R$', 'They are all equal'],
              correctAnswer: 0,
              explanation: 'The largest angle is opposite the longest side. The longest side is $PR = 15$, and the vertex opposite $PR$ is $Q$. So $\\angle Q$ is largest.',
            },
            {
              question: 'A triangle has angles $30°$, $90°$, and $60°$. The shortest side is opposite the:',
              options: ['$30°$ angle', '$60°$ angle', '$90°$ angle', 'There is no shortest side'],
              correctAnswer: 0,
              explanation: 'Shortest side is opposite the smallest angle. The smallest angle is $30°$, so the side opposite it is shortest.',
            },
          ],
        },
      },
      {
        id: 'ti3-angle-drill',
        type: 'input-boxes' as const,
        content: `**Largest and Smallest** 🧮

A triangle has angles $55°$, $48°$, and $77°$ (in degrees).

**1)** The **longest** side is opposite the angle measuring how many degrees?
**2)** The **shortest** side is opposite the angle measuring how many degrees?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['77', '48'],
          hint1: 'Longest side ↔ largest angle; shortest side ↔ smallest angle.',
          hint2: 'The largest of $55$, $48$, $77$ is $77$.',
          hint3: 'The smallest of $55$, $48$, $77$ is $48$.',
          explanation: '1) Longest side is opposite the largest angle, $77°$. 2) Shortest side is opposite the smallest angle, $48°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'triangle-inequalities',
    sections: [
      {
        id: 'ti4-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Inequalities

**Part 4 of 5 — Exterior Angles & Ordering in Practice**

---

> 🔑 **Two more tools:** the **Exterior Angle Inequality** (an exterior angle beats each far interior angle) and a reliable routine for ordering sides when you only know the angles — even when one angle is hidden.`,
      },
      {
        id: 'ti4-exterior',
        type: 'text' as const,
        content: `## The Exterior Angle Inequality

Extend one side of a triangle past a vertex; the angle formed outside is an **exterior angle**. The two interior angles *not* next to it are its **remote interior angles**.

> 🔑 **Exterior Angle Inequality:** An exterior angle of a triangle is **greater than either** of its two remote interior angles.

This is actually a consequence of the Exterior Angle *Theorem*, which says the exterior angle **equals the sum** of the two remote interior angles:

$$\\text{exterior} = \\text{remote}_1 + \\text{remote}_2$$

Since each remote angle is positive, the exterior angle must exceed each one individually.

### Example

A triangle has remote interior angles of $45°$ and $70°$ for a given exterior angle.

$$\\text{exterior} = 45° + 70° = 115°$$

And indeed $115° > 45°$ and $115° > 70°$. ✓

> 💡 The exterior angle and the interior angle at the **same** vertex are supplementary (they add to $180°$). Here the interior angle is $180° - 115° = 65°$.`,
      },
      {
        id: 'ti4-ext-drill',
        type: 'input-boxes' as const,
        content: `**Exterior Angles** 🧮

A triangle has interior angles $A$, $B$, and $C$.

**1)** The remote interior angles for the exterior angle at $C$ are $A = 55°$ and $B = 80°$. What is that exterior angle (in degrees)?
**2)** Using your answer, what is interior angle $C$ (in degrees)?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['135', '45'],
          hint1: 'Exterior angle $=$ sum of the two remote interior angles.',
          hint2: '$55 + 80 = 135$ for the exterior angle.',
          hint3: 'Interior $C$ is supplementary to its exterior angle: $180 - 135 = 45$.',
          explanation: '1) Exterior at $C = A + B = 55 + 80 = 135°$. 2) Interior $C = 180 - 135 = 45°$ (and indeed $55+80+45=180$ ✓).',
        },
      },
      {
        id: 'ti4-order-angles',
        type: 'text' as const,
        content: `## Ordering Sides When an Angle Is Missing

Often a problem gives two angles and asks you to order the sides. The trick: the three angles of a triangle always sum to $180°$, so the **missing angle** is $180°$ minus the other two.

### Example: Angles $40°$ and $75°$ are given

Find the third angle:

$$180° - 40° - 75° = 65°$$

Now order the angles: $40° < 65° < 75°$.

The sides opposite, from **shortest to longest**, follow that exact order:
- shortest side opposite $40°$,
- middle side opposite $65°$,
- longest side opposite $75°$.

> ⚠️ Don't forget to **find the missing angle first**. Comparing only the two given angles can hide which side is truly longest.`,
      },
      {
        id: 'ti4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order Everything** 🔽

In triangle $XYZ$, $\\angle X = 35°$ and $\\angle Y = 95°$.`,
        exercise: {
          dropdowns: [
            { label: 'The missing angle $\\angle Z$ is:', options: ['$50°$', '$60°$', '$45°$', '$70°$'] },
            { label: 'The largest angle is:', options: ['$\\angle Y$', '$\\angle X$', '$\\angle Z$'] },
            { label: 'The longest side is opposite:', options: ['$\\angle Y$', '$\\angle X$', '$\\angle Z$'] },
            { label: 'The shortest side is opposite:', options: ['$\\angle X$', '$\\angle Y$', '$\\angle Z$'] },
          ],
          correctAnswers: ['$50°$', '$\\angle Y$', '$\\angle Y$', '$\\angle X$'],
          hint1: '$\\angle Z = 180° - 35° - 95°$.',
          hint2: '$180 - 35 - 95 = 50$, so the angles are $35°$, $95°$, $50°$.',
          hint3: 'Largest angle $\\angle Y=95°$ → longest side opposite it; smallest $\\angle X=35°$ → shortest side opposite it.',
          explanation: '$\\angle Z = 180-35-95 = 50°$. Order: $35° < 50° < 95°$. Largest is $\\angle Y$ (longest side opposite $Y$); smallest is $\\angle X$ (shortest side opposite $X$).',
        },
      },
      {
        id: 'ti4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An exterior angle of a triangle measures $120°$. One remote interior angle is $50°$. The other remote interior angle is:',
              options: ['$70°$', '$60°$', '$30°$', '$170°$'],
              correctAnswer: 0,
              explanation: 'Exterior $=$ sum of remote interiors, so $120° = 50° + x \\Rightarrow x = 70°$.',
            },
            {
              question: 'In triangle $ABC$, $\\angle A = 100°$ and $\\angle B = 45°$. Which side is longest?',
              options: [
                'The side opposite $\\angle A$ (i.e. $BC$)',
                'The side opposite $\\angle B$ (i.e. $AC$)',
                'The side opposite $\\angle C$ (i.e. $AB$)',
                'Cannot be determined',
              ],
              correctAnswer: 0,
              explanation: '$\\angle C = 180-100-45 = 35°$. Largest angle is $\\angle A=100°$, so the longest side is opposite $A$, which is $BC$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'triangle-inequalities',
    sections: [
      {
        id: 'ti5-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Inequalities

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) test whether three lengths form a triangle, (2) find the range for a missing side, (3) match sides to angles, and (4) use exterior angles and ordering. Let's put it all together.`,
      },
      {
        id: 'ti5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key rule |
|------|----------|
| Do $a,b,c$ form a triangle? | sum of two shortest $>$ longest (strict) |
| Range of third side $x$ (sides $a,b$) | $\\lvert a-b\\rvert < x < a+b$ |
| Count whole-number sides | integers strictly between the bounds |
| Longest side | opposite the **largest** angle |
| Shortest side | opposite the **smallest** angle |
| Exterior angle | $=$ sum of the two remote interiors |

> ⚠️ Two habits that prevent most mistakes: use **strict** inequalities ($>$, never $\\geq$), and always pair a side with the angle **opposite** it — never the angle beside it.`,
      },
      {
        id: 'ti5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two sides of a triangle are $7$ and $7$. How many whole-number values are possible for the third side?',
              options: ['$13$', '$14$', '$7$', '$12$'],
              correctAnswer: 0,
              explanation: 'Range: $|7-7| < x < 7+7$, i.e. $0 < x < 14$. Whole numbers $1$ through $13$ → $13$ values.',
            },
            {
              question: 'In triangle $DEF$, $DE = 6$, $EF = 10$, $DF = 8$. Order the angles from smallest to largest.',
              options: [
                '$\\angle F < \\angle E < \\angle D$',
                '$\\angle D < \\angle E < \\angle F$',
                '$\\angle E < \\angle F < \\angle D$',
                '$\\angle F < \\angle D < \\angle E$',
              ],
              correctAnswer: 0,
              explanation: 'Sides shortest→longest: $DE=6 < DF=8 < EF=10$. An angle is opposite the side without its letter: $\\angle F$ is opposite $DE$, $\\angle E$ opposite $DF$, $\\angle D$ opposite $EF$. Smallest side $DE$ → smallest angle $\\angle F$; largest side $EF$ → largest angle $\\angle D$. So $\\angle F < \\angle E < \\angle D$.',
            },
          ],
        },
      },
      {
        id: 'ti5-range-drill',
        type: 'input-boxes' as const,
        content: `**One More Range** 🧮

Two sides of a triangle measure $13$ and $6$.

**1)** Smallest strict bound for the third side $x$ (the low end): $\\,?$
**2)** Largest strict bound for the third side $x$ (the high end): $\\,?$
**3)** Number of whole-number values possible for $x$: $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '19', '11'],
          hint1: 'low $= |13-6|$ and high $= 13+6$.',
          hint2: '$|13-6| = 7$ and $13+6 = 19$, so $7 < x < 19$.',
          hint3: 'Whole numbers strictly between $7$ and $19$: count with $19 - 7 - 1 = 11$.',
          explanation: 'Range $7 < x < 19$. Whole numbers $8$ through $18$ → $19-7-1 = 11$ values.',
        },
      },
      {
        id: 'ti5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which set of lengths can form a triangle?',
              options: ['$5$, $6$, $9$', '$3$, $4$, $7$', '$2$, $2$, $5$', '$1$, $8$, $10$'],
              correctAnswer: 0,
              explanation: '$5,6,9$: $5+6=11>9$ ✓ (and the other checks pass). $3+4=7$ (not $>7$, degenerate); $2+2=4<5$; $1+8=9<10$.',
            },
            {
              question: 'Two sides of a triangle are $4$ and $11$. The third side $x$ must satisfy:',
              options: ['$7 < x < 15$', '$4 < x < 11$', '$0 < x < 15$', '$7 < x < 44$'],
              correctAnswer: 0,
              explanation: 'Difference $=|11-4|=7$; sum $=11+4=15$. So $7 < x < 15$.',
            },
            {
              question: 'In triangle $ABC$, the longest side is $AB$. Which angle is the largest?',
              options: ['$\\angle C$', '$\\angle A$', '$\\angle B$', '$\\angle A$ and $\\angle B$ tie'],
              correctAnswer: 0,
              explanation: 'The largest angle is opposite the longest side. Side $AB$ is opposite vertex $C$, so $\\angle C$ is the largest angle.',
            },
          ],
        },
      },
    ],
  },
]
