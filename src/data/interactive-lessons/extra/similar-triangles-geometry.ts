import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Similar Triangles (Geometry).
 * Registry key: 'similar-triangles-geometry' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'similar-triangles-geometry',
    sections: [
      {
        id: 'sim1-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Triangles

**Part 1 of 5 — What Similarity Means**

---

### Topics in This Part

| Section |
|---------|
| Congruent vs. Similar |
| The Two Conditions for Similarity |
| Reading a Similarity Statement |
| The Scale Factor |

> 🔑 **Key Concept:** Two triangles are **similar** when they have the *same shape* but not necessarily the *same size*. One is a scaled copy of the other — every length stretched (or shrunk) by the same factor, with all angles kept identical.`,
      },
      {
        id: 'sim1-congruent-vs-similar',
        type: 'text' as const,
        content: `## Congruent vs. Similar

It helps to compare the two big ideas side by side.

| | **Congruent** ($\\cong$) | **Similar** ($\\sim$) |
|---|---|---|
| Shape | same | same |
| Size | **same** | can differ |
| Corresponding angles | equal | equal |
| Corresponding sides | **equal** | **proportional** |

Congruence is the special case of similarity where the scale factor is exactly $1$. So **every pair of congruent triangles is also similar**, but most similar triangles are *not* congruent.

> 🔑 **Two conditions** must *both* hold for similarity:
> 1. All pairs of **corresponding angles are equal**, and
> 2. All pairs of **corresponding sides are in the same ratio** (proportional).`,
      },
      {
        id: 'sim1-cvs-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two triangles are similar but **not** congruent. Which statement is true?',
              options: [
                'Their corresponding sides are equal in length',
                'Their corresponding angles are equal, but corresponding sides are proportional (not equal)',
                'Their corresponding angles are different',
                'They must have the same area',
              ],
              correctAnswer: 1,
              explanation: 'Similar triangles always have equal corresponding angles. If they are not congruent, the corresponding sides are proportional but not equal — the scale factor is something other than $1$.',
            },
            {
              question: 'Which statement about congruent triangles is correct?',
              options: [
                'They are similar with a scale factor of $1$',
                'They are never similar',
                'Their angles can differ',
                'Their sides are proportional but not equal',
              ],
              correctAnswer: 0,
              explanation: 'Congruent triangles have equal corresponding sides, so the ratio (scale factor) between them is $1$. That makes congruence a special case of similarity.',
            },
          ],
        },
      },
      {
        id: 'sim1-statement',
        type: 'text' as const,
        content: `## Reading a Similarity Statement

When we write $\\triangle ABC \\sim \\triangle DEF$, the **order of the letters matters**. It tells you exactly which parts correspond:

$$\\triangle ABC \\sim \\triangle DEF$$

| Corresponding angles | Corresponding sides |
|---|---|
| $\\angle A = \\angle D$ | $\\overline{AB} \\leftrightarrow \\overline{DE}$ |
| $\\angle B = \\angle E$ | $\\overline{BC} \\leftrightarrow \\overline{EF}$ |
| $\\angle C = \\angle F$ | $\\overline{CA} \\leftrightarrow \\overline{FD}$ |

The proportional sides give us the key chain of equal ratios:

$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{CA}{FD}$$

> ⚠️ **Order is not optional.** $\\triangle ABC \\sim \\triangle DEF$ is a *different* claim from $\\triangle ABC \\sim \\triangle EFD$. Always match the letters in the same position.`,
      },
      {
        id: 'sim1-correspondence',
        type: 'dropdown-select' as const,
        content: `**Match the Corresponding Parts** 🔽

Given $\\triangle PQR \\sim \\triangle XYZ$, pick the part that corresponds to each one.`,
        exercise: {
          dropdowns: [
            { label: 'The angle corresponding to $\\angle P$ is:', options: ['$\\angle X$', '$\\angle Y$', '$\\angle Z$', '$\\angle Q$'] },
            { label: 'The side corresponding to $\\overline{QR}$ is:', options: ['$\\overline{YZ}$', '$\\overline{XY}$', '$\\overline{XZ}$', '$\\overline{PQ}$'] },
            { label: 'A correct proportion is:', options: ['$\\frac{PQ}{XY} = \\frac{QR}{YZ}$', '$\\frac{PQ}{YZ} = \\frac{QR}{XY}$', '$\\frac{PQ}{XZ} = \\frac{QR}{XY}$', '$\\frac{PR}{YZ} = \\frac{QR}{XY}$'] },
          ],
          correctAnswers: ['$\\angle X$', '$\\overline{YZ}$', '$\\frac{PQ}{XY} = \\frac{QR}{YZ}$'],
          hint1: 'Letters in the same position correspond: $P\\leftrightarrow X$, $Q\\leftrightarrow Y$, $R\\leftrightarrow Z$.',
          hint2: 'Side $\\overline{QR}$ uses the 2nd and 3rd letters $Q,R$, which match $Y,Z$.',
          hint3: 'Every numerator is from $\\triangle PQR$ and every denominator from $\\triangle XYZ$, with matching letter positions.',
          explanation: '$P\\leftrightarrow X$, so $\\angle P=\\angle X$. $\\overline{QR}\\leftrightarrow\\overline{YZ}$. The ratio chain is $\\frac{PQ}{XY}=\\frac{QR}{YZ}=\\frac{PR}{XZ}$.',
        },
      },
      {
        id: 'sim1-scale-factor',
        type: 'text' as const,
        content: `## The Scale Factor

The **scale factor** $k$ is the single number that every length is multiplied by to go from one triangle to its similar partner:

$$k = \\frac{\\text{a side of the new triangle}}{\\text{the matching side of the original}}$$

If $\\triangle ABC \\sim \\triangle DEF$ and $k = \\dfrac{DE}{AB}$, then **every** side of $\\triangle DEF$ is $k$ times its match in $\\triangle ABC$.

### Example

$\\triangle ABC \\sim \\triangle DEF$ with $AB = 4$ and $DE = 12$. The scale factor from $ABC$ to $DEF$ is

$$k = \\frac{DE}{AB} = \\frac{12}{4} = 3.$$

So $DEF$ is **three times as large**. Going the other way, from $DEF$ to $ABC$, the scale factor is $\\dfrac{1}{3}$.

> 💡 **Reciprocal rule:** the scale factor one direction is always the reciprocal of the scale factor the other direction. $k$ and $\\dfrac{1}{k}$ are the two views of the same pair.`,
      },
      {
        id: 'sim1-scale-drill',
        type: 'input-boxes' as const,
        content: `**Find the Scale Factor** 🧮

$\\triangle ABC \\sim \\triangle DEF$. Use the matching sides given.

**1)** $AB = 5$, $DE = 15$. Scale factor from $ABC$ to $DEF$ $= \\,?$
**2)** $BC = 8$, $EF = 2$. Scale factor from $ABC$ to $DEF$ $= \\,?$  *(decimal or fraction)*
**3)** $CA = 6$, $FD = 9$. Scale factor from $ABC$ to $DEF$ $= \\,?$  *(decimal or fraction)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '0.25', '1.5'],
          hint1: 'Scale factor $= \\dfrac{\\text{new}}{\\text{old}} = \\dfrac{DE}{AB}$.',
          hint2: 'For #2, $\\dfrac{EF}{BC} = \\dfrac{2}{8} = \\dfrac{1}{4} = 0.25$.',
          hint3: 'For #3, $\\dfrac{FD}{CA} = \\dfrac{9}{6} = \\dfrac{3}{2} = 1.5$.',
          explanation: '1) $15/5 = 3$.  2) $2/8 = 0.25$ (a shrink).  3) $9/6 = 1.5$ (an enlargement).',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'similar-triangles-geometry',
    sections: [
      {
        id: 'sim2-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Triangles

**Part 2 of 5 — The Three Similarity Shortcuts (AA, SSS, SAS)**

---

> 🔑 **The shortcut idea:** You almost never have to check *all six* parts (3 angles + 3 sides). Just like congruence has SSS, SAS, ASA, similarity has its own three shortcuts: **AA**, **SSS~**, and **SAS~**. Any one of them is enough to prove two triangles similar.`,
      },
      {
        id: 'sim2-aa',
        type: 'text' as const,
        content: `## AA — Angle-Angle (the most-used one)

> **AA Similarity:** If **two angles** of one triangle equal two angles of another triangle, the triangles are similar.

Why only two? Because the angles of every triangle add to $180°$. If two pairs match, the third pair is *forced* to match too:

$$\\angle C = 180° - \\angle A - \\angle B.$$

### Example

In $\\triangle ABC$, $\\angle A = 50°$ and $\\angle B = 60°$. In $\\triangle DEF$, $\\angle D = 50°$ and $\\angle E = 60°$. Then the third angles are both

$$180° - 50° - 60° = 70°,$$

so all three angles match and $\\triangle ABC \\sim \\triangle DEF$ by **AA**.

> 💡 AA is the workhorse of geometry. Parallel lines, shadows, and nested triangles almost always give you two equal angles for free.`,
      },
      {
        id: 'sim2-sss-sas',
        type: 'text' as const,
        content: `## SSS~ and SAS~ (the side shortcuts)

> **SSS Similarity:** If all **three pairs of corresponding sides** are in the same ratio, the triangles are similar.

$$\\frac{AB}{DE} = \\frac{BC}{EF} = \\frac{CA}{FD} \\;\\Rightarrow\\; \\triangle ABC \\sim \\triangle DEF$$

> **SAS Similarity:** If **two pairs of corresponding sides** are in the same ratio **and the included angles** (the angles *between* those sides) are equal, the triangles are similar.

| Shortcut | What you need |
|---|---|
| **AA** | 2 pairs of equal angles |
| **SSS~** | 3 pairs of proportional sides |
| **SAS~** | 2 pairs of proportional sides + equal **included** angle |

> ⚠️ For SAS~ the equal angle must be the one **between** the two proportional sides. An angle somewhere else does *not* count.`,
      },
      {
        id: 'sim2-which-shortcut',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\triangle ABC$ has $\\angle A = 40°$ and $\\angle B = 75°$. $\\triangle XYZ$ has $\\angle X = 40°$ and $\\angle Y = 75°$. Which shortcut proves them similar?',
              options: ['SSS~', 'SAS~', 'AA', 'None — you need a side'],
              correctAnswer: 2,
              explanation: 'Two pairs of equal angles ($40°$ and $75°$) is exactly the **AA** condition. No side information is needed.',
            },
            {
              question: 'You know two pairs of sides are proportional and the angle **between** those two sides is equal in both triangles. Which shortcut applies?',
              options: ['AA', 'SAS~', 'SSS~', 'HL'],
              correctAnswer: 1,
              explanation: 'Two proportional sides with the **included** angle equal is the SAS~ (Side-Angle-Side) similarity criterion.',
            },
            {
              question: 'All three sides of $\\triangle ABC$ are exactly $\\frac{2}{3}$ the length of the corresponding sides of $\\triangle DEF$. The triangles are similar by:',
              options: ['SSS~', 'AA', 'SAS~', 'They are not similar'],
              correctAnswer: 0,
              explanation: 'Three pairs of sides all in the same ratio ($\\frac{2}{3}$) is the SSS~ criterion.',
            },
          ],
        },
      },
      {
        id: 'sim2-sss-check',
        type: 'input-boxes' as const,
        content: `**Test the SSS~ Ratios** 🧮

$\\triangle ABC$ has sides $6, 9, 12$. $\\triangle DEF$ has the corresponding sides $8, 12, 16$.

**1)** Ratio of the first pair $\\dfrac{6}{8}$ as a decimal $= \\,?$
**2)** Ratio of the second pair $\\dfrac{9}{12}$ as a decimal $= \\,?$
**3)** Ratio of the third pair $\\dfrac{12}{16}$ as a decimal $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.75', '0.75', '0.75'],
          hint1: '$6 \\div 8 = 0.75$.',
          hint2: '$9 \\div 12 = 0.75$.',
          hint3: '$12 \\div 16 = 0.75$. All three equal — that is SSS~.',
          explanation: 'Every ratio is $0.75$ (i.e. $\\frac{3}{4}$). Because all three corresponding-side ratios are equal, the triangles are similar by SSS~.',
        },
      },
      {
        id: 'sim2-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Shortcut** 🔽

For each situation, choose the similarity criterion that fits.`,
        exercise: {
          dropdowns: [
            { label: 'Two equal angles in each triangle:', options: ['AA', 'SSS~', 'SAS~', 'Not similar'] },
            { label: 'Three proportional sides:', options: ['SSS~', 'AA', 'SAS~', 'Not similar'] },
            { label: 'Two proportional sides + equal included angle:', options: ['SAS~', 'AA', 'SSS~', 'Not similar'] },
          ],
          correctAnswers: ['AA', 'SSS~', 'SAS~'],
          hint1: 'Angle-Angle needs only two angle pairs.',
          hint2: 'Three sides in the same ratio is Side-Side-Side similarity.',
          hint3: 'Two sides plus the angle *between* them is Side-Angle-Side similarity.',
          explanation: 'The three shortcuts are AA (two angles), SSS~ (three sides), and SAS~ (two sides + included angle).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'similar-triangles-geometry',
    sections: [
      {
        id: 'sim3-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Triangles

**Part 3 of 5 — Solving for Missing Sides**

---

> 🔑 **Why we care:** The real power of similarity is that proportional sides let you **solve for an unknown length**. Set up a proportion, cross-multiply, and solve. This is the single most-tested skill in this topic.`,
      },
      {
        id: 'sim3-proportion-method',
        type: 'text' as const,
        content: `## The Proportion Method

When $\\triangle ABC \\sim \\triangle DEF$, set the matching sides equal as ratios, then **cross-multiply**.

### Worked Example

$\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$, $DE = 9$, and $BC = 8$. Find $EF$.

**Step 1 — Write the proportion** (matching sides):
$$\\frac{AB}{DE} = \\frac{BC}{EF} \\;\\Rightarrow\\; \\frac{6}{9} = \\frac{8}{EF}$$

**Step 2 — Cross-multiply:**
$$6 \\cdot EF = 9 \\cdot 8 = 72$$

**Step 3 — Solve:**
$$EF = \\frac{72}{6} = 12$$

> ✅ **Check:** $\\dfrac{6}{9} = \\dfrac{2}{3}$ and $\\dfrac{8}{12} = \\dfrac{2}{3}$ ✓ — both ratios match, so $EF = 12$ is correct.`,
      },
      {
        id: 'sim3-worked2',
        type: 'text' as const,
        content: `### Worked Example: scale factor first

Sometimes it is fastest to find the scale factor $k$, then multiply.

$\\triangle PQR \\sim \\triangle STU$ with $PQ = 10$ and $ST = 25$. Find $TU$ if $QR = 4$.

**Scale factor** (from $PQR$ to $STU$):
$$k = \\frac{ST}{PQ} = \\frac{25}{10} = 2.5$$

Every side of $STU$ is $2.5$ times its match in $PQR$, so:
$$TU = k \\cdot QR = 2.5 \\cdot 4 = 10$$

> 💡 **Two valid routes, same answer.** A proportion and the scale-factor method always agree — use whichever feels cleaner for the numbers in front of you.`,
      },
      {
        id: 'sim3-solve-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\triangle ABC \\sim \\triangle DEF$ with $\\dfrac{AB}{DE} = \\dfrac{3}{5}$. If $BC = 9$, what is $EF$?',
              options: ['$15$', '$5.4$', '$6$', '$11$'],
              correctAnswer: 0,
              explanation: 'All matching ratios equal $\\frac{3}{5}$, so $\\frac{9}{EF} = \\frac{3}{5}$. Cross-multiply: $3\\cdot EF = 45$, giving $EF = 15$.',
            },
            {
              question: 'Two similar triangles have a scale factor of $4$ from the small one to the large one. A side of the small triangle is $7$. The matching side of the large triangle is:',
              options: ['$1.75$', '$11$', '$28$', '$3.5$'],
              correctAnswer: 2,
              explanation: 'Multiply by the scale factor: $7 \\cdot 4 = 28$.',
            },
          ],
        },
      },
      {
        id: 'sim3-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Missing Side** 🧮

In each, $\\triangle ABC \\sim \\triangle DEF$.

**1)** $AB = 4$, $DE = 6$, $BC = 10$. Find $EF$.
**2)** $AB = 8$, $DE = 12$, $AC = 6$. Find $DF$.
**3)** Scale factor from $ABC$ to $DEF$ is $0.5$; $CA = 14$. Find $FD$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '9', '7'],
          hint1: '$\\frac{4}{6} = \\frac{10}{EF} \\Rightarrow 4\\,EF = 60 \\Rightarrow EF = 15$.',
          hint2: '$\\frac{8}{12} = \\frac{6}{DF} \\Rightarrow 8\\,DF = 72 \\Rightarrow DF = 9$.',
          hint3: 'Multiply by the scale factor: $14 \\cdot 0.5 = 7$.',
          explanation: '1) $EF = 60/4 = 15$.  2) $DF = 72/8 = 9$.  3) $FD = 14\\cdot 0.5 = 7$.',
        },
      },
      {
        id: 'sim3-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Solve** 🔽

You're finding $EF$ given $\\triangle ABC \\sim \\triangle DEF$, $AB = 5$, $DE = 20$, $BC = 3$. Choose each step.`,
        exercise: {
          dropdowns: [
            { label: 'Set up the proportion:', options: ['$\\frac{5}{20} = \\frac{3}{EF}$', '$\\frac{5}{3} = \\frac{20}{EF}$', '$\\frac{5}{20} = \\frac{EF}{3}$', '$\\frac{20}{5} = \\frac{3}{EF}$'] },
            { label: 'Cross-multiply:', options: ['$5 \\cdot EF = 60$', '$5 \\cdot EF = 23$', '$20 \\cdot EF = 15$', '$3 \\cdot EF = 100$'] },
            { label: 'Solve for $EF$:', options: ['$EF = 12$', '$EF = 0.75$', '$EF = 60$', '$EF = 4$'] },
          ],
          correctAnswers: ['$\\frac{5}{20} = \\frac{3}{EF}$', '$5 \\cdot EF = 60$', '$EF = 12$'],
          hint1: 'Match $AB$ with $DE$ and $BC$ with $EF$: $\\frac{AB}{DE} = \\frac{BC}{EF}$.',
          hint2: 'Cross-multiply $\\frac{5}{20} = \\frac{3}{EF}$: $5\\cdot EF = 20\\cdot 3 = 60$.',
          hint3: 'Divide: $EF = 60 \\div 5 = 12$.',
          explanation: '$\\frac{5}{20} = \\frac{3}{EF} \\Rightarrow 5\\,EF = 60 \\Rightarrow EF = 12$. (The scale factor $20/5 = 4$ confirms it: $3\\cdot 4 = 12$.)',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'similar-triangles-geometry',
    sections: [
      {
        id: 'sim4-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Triangles

**Part 4 of 5 — Real Applications: Shadows, Mirrors & the Side-Splitter**

---

> 🔑 **Similarity in the wild:** Before lasers, people measured the height of trees, buildings, and pyramids using nothing but shadows and similar triangles. The same idea powers indirect measurement today.`,
      },
      {
        id: 'sim4-shadows',
        type: 'text' as const,
        content: `## Shadow Problems (Indirect Measurement)

At the same time of day, the sun hits everything at the same angle. So a person and a tree each cast a shadow, forming **two similar right triangles** (AA: both have a right angle and the same sun angle).

$$\\frac{\\text{person height}}{\\text{person's shadow}} = \\frac{\\text{tree height}}{\\text{tree's shadow}}$$

### Worked Example

A $6$-ft person casts a $4$-ft shadow. At the same moment a tree casts a $20$-ft shadow. How tall is the tree?

$$\\frac{6}{4} = \\frac{h}{20}$$

Cross-multiply:
$$4h = 6 \\cdot 20 = 120 \\;\\Rightarrow\\; h = \\frac{120}{4} = 30 \\text{ ft}$$

> ✅ **Check:** $\\dfrac{6}{4} = 1.5$ and $\\dfrac{30}{20} = 1.5$ ✓ — the tree is **$30$ feet** tall.`,
      },
      {
        id: 'sim4-shadow-drill',
        type: 'input-boxes' as const,
        content: `**Shadow Practice** 🧮

Set up height-over-shadow proportions.

**1)** A $5$-ft person casts a $3$-ft shadow. A flagpole casts a $21$-ft shadow at the same time. Find the flagpole's height (ft).
**2)** A $2$-ft sign casts a $1.5$-ft shadow. A nearby lamppost is $12$ ft tall. How long is its shadow (ft)?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['35', '9'],
          hint1: '$\\frac{5}{3} = \\frac{h}{21} \\Rightarrow 3h = 105 \\Rightarrow h = 35$.',
          hint2: '$\\frac{2}{1.5} = \\frac{12}{s} \\Rightarrow 2s = 18 \\Rightarrow s = 9$.',
          hint3: 'Keep height on top and shadow on the bottom in **both** ratios.',
          explanation: '1) $h = 105/3 = 35$ ft.  2) $s = (12\\cdot 1.5)/2 = 18/2 = 9$ ft.',
        },
      },
      {
        id: 'sim4-side-splitter',
        type: 'text' as const,
        content: `## The Side-Splitter Theorem

> **Side-Splitter (Triangle Proportionality) Theorem:** A line drawn **parallel to one side** of a triangle, cutting the other two sides, divides those sides **proportionally**.

If $\\overline{DE} \\parallel \\overline{BC}$ in $\\triangle ABC$ (with $D$ on $\\overline{AB}$ and $E$ on $\\overline{AC}$):

$$\\frac{AD}{DB} = \\frac{AE}{EC}$$

This works because $\\overline{DE} \\parallel \\overline{BC}$ creates equal corresponding angles, so $\\triangle ADE \\sim \\triangle ABC$ by **AA**.

### Worked Example

In $\\triangle ABC$, $\\overline{DE} \\parallel \\overline{BC}$ with $AD = 4$, $DB = 6$, and $AE = 8$. Find $EC$.

$$\\frac{AD}{DB} = \\frac{AE}{EC} \\;\\Rightarrow\\; \\frac{4}{6} = \\frac{8}{EC}$$
$$4 \\cdot EC = 48 \\;\\Rightarrow\\; EC = 12$$

> ⚠️ The side-splitter ratio compares the **two pieces of the same side** ($AD$ to $DB$), *not* a piece to the whole. Don't accidentally use $AB$.`,
      },
      {
        id: 'sim4-app-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why do a person and a flagpole form similar triangles at the same time of day?',
              options: [
                'Both have a right angle and share the same sun-angle, so AA applies',
                'They are the same height',
                'Their shadows are always equal',
                'Because all triangles are similar',
              ],
              correctAnswer: 0,
              explanation: 'Each object stands vertically (a right angle to the ground) and the sun strikes both at the same angle, giving two equal angle pairs — that is AA similarity.',
            },
            {
              question: 'In $\\triangle ABC$, $\\overline{DE} \\parallel \\overline{BC}$ with $AD = 3$, $DB = 9$, $AE = 2$. By the side-splitter theorem, $EC = $',
              options: ['$6$', '$3$', '$0.67$', '$18$'],
              correctAnswer: 0,
              explanation: '$\\frac{AD}{DB} = \\frac{AE}{EC} \\Rightarrow \\frac{3}{9} = \\frac{2}{EC} \\Rightarrow 3\\,EC = 18 \\Rightarrow EC = 6$.',
            },
          ],
        },
      },
      {
        id: 'sim4-mirror',
        type: 'text' as const,
        content: `## Bonus: the Mirror Method

Place a mirror flat on the ground between you and a tall object. Step back until you see the object's top in the mirror. The light reflects at equal angles, so your "eye-height-and-distance" triangle is similar to the "object-height-and-distance" triangle:

$$\\frac{\\text{your eye height}}{\\text{your distance to mirror}} = \\frac{\\text{object height}}{\\text{object's distance to mirror}}$$

> 💡 Shadows, mirrors, and side-splitters are three faces of the *same* tool. Spot the two equal angles, declare the triangles similar, write a proportion, and solve.`,
      },
      {
        id: 'sim4-side-splitter-drill',
        type: 'input-boxes' as const,
        content: `**Side-Splitter & Mirror Practice** 🧮

**1)** $\\overline{DE} \\parallel \\overline{BC}$, $AD = 5$, $DB = 10$, $AE = 4$. Find $EC$.
**2)** Mirror method: your eye is $5$ ft up, you stand $2$ ft from the mirror, and the tree is $14$ ft from the mirror. Find the tree's height (ft).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8', '35'],
          hint1: '$\\frac{5}{10} = \\frac{4}{EC} \\Rightarrow 5\\,EC = 40 \\Rightarrow EC = 8$.',
          hint2: '$\\frac{5}{2} = \\frac{h}{14} \\Rightarrow 2h = 70 \\Rightarrow h = 35$.',
          hint3: 'Both are just proportions: cross-multiply, then divide.',
          explanation: '1) $EC = 40/5 = 8$.  2) $h = (5\\cdot 14)/2 = 70/2 = 35$ ft.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'similar-triangles-geometry',
    sections: [
      {
        id: 'sim5-intro',
        type: 'text' as const,
        content: `# 🔺 Similar Triangles

**Part 5 of 5 — Perimeter, Area & Mastery Check**

---

You can now (1) recognize similarity, (2) prove it with AA / SSS~ / SAS~, (3) solve for missing sides, and (4) apply it to shadows and the side-splitter. One last idea ties it together: how similarity scales **perimeter** and **area**.`,
      },
      {
        id: 'sim5-perimeter-area',
        type: 'text' as const,
        content: `## How Perimeter and Area Scale

If two triangles are similar with scale factor $k$:

| Quantity | Ratio between the triangles |
|---|---|
| Corresponding **sides** | $k$ |
| **Perimeter** | $k$ |
| **Area** | $k^2$ |

**Perimeter** is just a sum of sides, so it scales by the *same* factor $k$. But **area** depends on two dimensions (base $\\times$ height), so it scales by $k^2$.

### Example

$\\triangle ABC \\sim \\triangle DEF$ with scale factor $k = 3$. If $\\triangle ABC$ has area $5$, then

$$\\text{area of } \\triangle DEF = k^2 \\cdot 5 = 9 \\cdot 5 = 45.$$

> ⚠️ **Classic trap:** if the sides triple, the area does **not** triple — it grows $3^2 = 9$ times. Doubling the sides quadruples the area.`,
      },
      {
        id: 'sim5-area-drill',
        type: 'input-boxes' as const,
        content: `**Scale Perimeter & Area** 🧮

$\\triangle ABC \\sim \\triangle DEF$ with scale factor $k$ (from $ABC$ to $DEF$).

**1)** $k = 4$. $\\triangle ABC$ has perimeter $7$. Find the perimeter of $\\triangle DEF$.
**2)** $k = 4$. $\\triangle ABC$ has area $3$. Find the area of $\\triangle DEF$.
**3)** $k = 2$. $\\triangle ABC$ has area $10$. Find the area of $\\triangle DEF$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['28', '48', '40'],
          hint1: 'Perimeter scales by $k$: $7 \\cdot 4 = 28$.',
          hint2: 'Area scales by $k^2 = 16$: $3 \\cdot 16 = 48$.',
          hint3: 'Area scales by $k^2 = 4$: $10 \\cdot 4 = 40$.',
          explanation: '1) Perimeter $\\times k = 7\\cdot 4 = 28$.  2) Area $\\times k^2 = 3\\cdot 16 = 48$.  3) Area $\\times k^2 = 10\\cdot 4 = 40$.',
        },
      },
      {
        id: 'sim5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|---|---|
| Prove similarity | AA, SSS~, or SAS~ |
| Read correspondence | match letters by position in $\\triangle ABC \\sim \\triangle DEF$ |
| Find a missing side | $\\dfrac{AB}{DE} = \\dfrac{BC}{EF}$, cross-multiply |
| Scale factor | $k = \\dfrac{\\text{new side}}{\\text{old side}}$ |
| Side-splitter | $\\overline{DE}\\parallel\\overline{BC} \\Rightarrow \\dfrac{AD}{DB} = \\dfrac{AE}{EC}$ |
| Perimeter ratio | $k$ |
| Area ratio | $k^2$ |

> 🔑 The whole topic reduces to one habit: find the two equal angles, declare similarity, then write and solve a proportion.`,
      },
      {
        id: 'sim5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\triangle ABC \\sim \\triangle DEF$ with $AB = 6$, $DE = 9$. The scale factor from $ABC$ to $DEF$, and the area ratio, are:',
              options: [
                'scale $\\frac{3}{2}$, area ratio $\\frac{9}{4}$',
                'scale $\\frac{2}{3}$, area ratio $\\frac{4}{9}$',
                'scale $\\frac{3}{2}$, area ratio $\\frac{3}{2}$',
                'scale $\\frac{9}{6}$, area ratio $\\frac{9}{6}$',
              ],
              correctAnswer: 0,
              explanation: 'Scale factor $= \\frac{DE}{AB} = \\frac{9}{6} = \\frac{3}{2}$. Area scales by $k^2 = \\left(\\frac{3}{2}\\right)^2 = \\frac{9}{4}$.',
            },
            {
              question: 'In $\\triangle ABC$, a line parallel to $\\overline{BC}$ meets $\\overline{AB}$ at $D$ and $\\overline{AC}$ at $E$ with $AD = 6$, $DB = 4$, $AE = 9$. Then $EC = $',
              options: ['$6$', '$13.5$', '$4$', '$1.5$'],
              correctAnswer: 0,
              explanation: '$\\frac{AD}{DB} = \\frac{AE}{EC} \\Rightarrow \\frac{6}{4} = \\frac{9}{EC} \\Rightarrow 6\\,EC = 36 \\Rightarrow EC = 6$.',
            },
          ],
        },
      },
      {
        id: 'sim5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$\\triangle ABC$ has $\\angle A = 35°$, $\\angle B = 90°$. $\\triangle DEF$ has $\\angle D = 35°$, $\\angle E = 90°$. The triangles are similar by:',
              options: ['AA', 'SSS~', 'SAS~', 'They are not similar'],
              correctAnswer: 0,
              explanation: 'Two pairs of equal angles ($35°$ and $90°$) satisfy the AA similarity criterion.',
            },
            {
              question: '$\\triangle PQR \\sim \\triangle STU$ with $PQ = 8$, $ST = 12$, and $QR = 6$. Find $TU$.',
              options: ['$9$', '$4$', '$10$', '$18$'],
              correctAnswer: 0,
              explanation: '$\\frac{PQ}{ST} = \\frac{QR}{TU} \\Rightarrow \\frac{8}{12} = \\frac{6}{TU} \\Rightarrow 8\\,TU = 72 \\Rightarrow TU = 9$.',
            },
            {
              question: 'Two similar triangles have a scale factor of $5$. If the smaller has area $2$, the larger has area:',
              options: ['$50$', '$10$', '$25$', '$7$'],
              correctAnswer: 0,
              explanation: 'Area scales by $k^2 = 5^2 = 25$, so the larger area is $2 \\cdot 25 = 50$.',
            },
          ],
        },
      },
    ],
  },
]
