import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Congruent Triangles (Geometry).
 * Registry key: 'congruent-triangles' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'congruent-triangles',
    sections: [
      {
        id: 'ct1-intro',
        type: 'text' as const,
        content: `# 📐 Congruent Triangles

**Part 1 of 5 — What Congruence Means & Correspondence**

---

### Topics in This Part

| Section |
|---------|
| Congruent Figures & Rigid Motions |
| Correspondence and the $\\cong$ Statement |
| Corresponding Parts (the six pieces) |

> 🔑 **Key Concept:** Two triangles are **congruent** when they have *exactly the same size and shape* — one can be slid, turned, or flipped to land perfectly on the other. The whole unit is about proving this **without** measuring all six parts.`,
      },
      {
        id: 'ct1-rigid',
        type: 'text' as const,
        content: `## Congruent Figures & Rigid Motions

Two figures are **congruent** ($\\cong$) if a sequence of **rigid motions** maps one exactly onto the other. The three rigid motions are:

| Rigid Motion | What it does | Changes size/shape? |
|--------------|--------------|---------------------|
| **Translation** (slide) | shifts every point the same way | no |
| **Rotation** (turn) | spins about a fixed point | no |
| **Reflection** (flip) | mirrors across a line | no |

Because rigid motions never stretch or shrink, congruent triangles have:

- **all three pairs of sides equal in length**, and
- **all three pairs of angles equal in measure**.

That's **six** matching pieces in total — three sides and three angles.

> 💡 "Equal" describes *measures* (numbers); "congruent" describes *figures* (segments, angles, triangles). We write $AB = CD$ for lengths but $\\overline{AB} \\cong \\overline{CD}$ for the segments themselves.`,
      },
      {
        id: 'ct1-count-drill',
        type: 'input-boxes' as const,
        content: `**Count the Parts** 🧮

A triangle has three sides and three angles.

**1)** How many pairs of **sides** must match for two triangles to be congruent?
**2)** How many pairs of **angles** must match?
**3)** In total, how many corresponding parts are congruent in a pair of congruent triangles?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '3', '6'],
          hint1: 'A triangle has exactly 3 sides.',
          hint2: 'A triangle has exactly 3 angles.',
          hint3: 'Add the sides and angles together: $3 + 3$.',
          explanation: 'Congruent triangles match in all $3$ side pairs and all $3$ angle pairs — $6$ corresponding parts in all. The shortcuts (SSS, SAS, …) let you confirm congruence from just $3$ of them.',
        },
      },
      {
        id: 'ct1-correspond',
        type: 'text' as const,
        content: `## Correspondence: Order Matters

When we write a congruence statement, the **order of the letters** tells you which parts match. If

$$\\triangle ABC \\cong \\triangle DEF$$

then the vertices correspond in order:

$$A \\leftrightarrow D, \\quad B \\leftrightarrow E, \\quad C \\leftrightarrow F$$

From that single statement you can read off **all six** congruences:

| Corresponding Angles | Corresponding Sides |
|----------------------|---------------------|
| $\\angle A \\cong \\angle D$ | $\\overline{AB} \\cong \\overline{DE}$ |
| $\\angle B \\cong \\angle E$ | $\\overline{BC} \\cong \\overline{EF}$ |
| $\\angle C \\cong \\angle F$ | $\\overline{CA} \\cong \\overline{FD}$ |

> ⚠️ **Common Mistake:** $\\triangle ABC \\cong \\triangle DEF$ and $\\triangle ABC \\cong \\triangle EFD$ are **not** the same statement. The letters must line up matching part to matching part.`,
      },
      {
        id: 'ct1-readoff',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Given $\\triangle PQR \\cong \\triangle STU$, which side corresponds to $\\overline{QR}$?',
              options: ['$\\overline{TU}$', '$\\overline{ST}$', '$\\overline{SU}$', '$\\overline{PR}$'],
              correctAnswer: 0,
              explanation: 'In order, $P\\leftrightarrow S$, $Q\\leftrightarrow T$, $R\\leftrightarrow U$. So $\\overline{QR}$ (from $Q$ to $R$) corresponds to $\\overline{TU}$ (from $T$ to $U$).',
            },
            {
              question: 'Which statement guarantees the SAME six congruences as $\\triangle ABC \\cong \\triangle DEF$?',
              options: ['$\\triangle BCA \\cong \\triangle EFD$', '$\\triangle ABC \\cong \\triangle EFD$', '$\\triangle BAC \\cong \\triangle DEF$', '$\\triangle CBA \\cong \\triangle DEF$'],
              correctAnswer: 0,
              explanation: 'Rotating the letters in lock-step keeps the pairs intact: $B\\leftrightarrow E$, $C\\leftrightarrow F$, $A\\leftrightarrow D$ — exactly the original matches. The others scramble the correspondence.',
            },
          ],
        },
      },
      {
        id: 'ct1-cpctc',
        type: 'text' as const,
        content: `## The Big Payoff: CPCTC

Once you **prove** two triangles congruent, you instantly know all six parts match. That principle has a famous name:

> 🔑 **CPCTC** — *Corresponding Parts of Congruent Triangles are Congruent.*

This is the *reason we care* about proving congruence. Often a problem wants just one segment or one angle, and the strategy is:

1. Prove the two triangles containing those parts are congruent.
2. Use **CPCTC** to conclude the specific part you wanted is congruent.

The next three parts give you the **shortcuts** (SSS, SAS, ASA, AAS, HL) that prove congruence from only *three* pieces — so you never have to check all six.`,
      },
      {
        id: 'ct1-correspond-drill',
        type: 'dropdown-select' as const,
        content: `**Match the Parts** 🔽

Given $\\triangle MNO \\cong \\triangle XYZ$, choose the corresponding part for each.`,
        exercise: {
          dropdowns: [
            { label: '$\\angle N$ corresponds to:', options: ['$\\angle Y$', '$\\angle X$', '$\\angle Z$', '$\\angle M$'] },
            { label: '$\\overline{MO}$ corresponds to:', options: ['$\\overline{XZ}$', '$\\overline{XY}$', '$\\overline{YZ}$', '$\\overline{MN}$'] },
            { label: '$\\overline{YZ}$ corresponds to:', options: ['$\\overline{NO}$', '$\\overline{MN}$', '$\\overline{MO}$', '$\\overline{XY}$'] },
          ],
          correctAnswers: ['$\\angle Y$', '$\\overline{XZ}$', '$\\overline{NO}$'],
          hint1: 'Line up the letters in order: $M\\leftrightarrow X$, $N\\leftrightarrow Y$, $O\\leftrightarrow Z$.',
          hint2: '$\\overline{MO}$ runs from the 1st vertex to the 3rd, so match the 1st-to-3rd on the other triangle: $\\overline{XZ}$.',
          hint3: '$\\overline{YZ}$ runs from the 2nd to the 3rd vertex ($Y\\leftrightarrow N$, $Z\\leftrightarrow O$), so it matches $\\overline{NO}$.',
          explanation: 'With $M\\leftrightarrow X$, $N\\leftrightarrow Y$, $O\\leftrightarrow Z$: $\\angle N\\cong\\angle Y$, $\\overline{MO}\\cong\\overline{XZ}$, and $\\overline{YZ}\\cong\\overline{NO}$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'congruent-triangles',
    sections: [
      {
        id: 'ct2-intro',
        type: 'text' as const,
        content: `# 📐 Congruent Triangles

**Part 2 of 5 — The SSS & SAS Postulates**

---

> 🔑 **The Idea:** You don't need all six parts. Just **three** of the right ones lock a triangle's size and shape. The first two shortcuts are **SSS** (three sides) and **SAS** (two sides and the angle *between* them).`,
      },
      {
        id: 'ct2-sss',
        type: 'text' as const,
        content: `## Side-Side-Side (SSS)

> 🔑 **SSS Postulate:** If the three sides of one triangle are congruent to the three sides of another triangle, then the triangles are congruent.

Three fixed side lengths can build **only one** triangle shape — there's no wiggle room. That's why three sides are enough.

### Worked Example

In $\\triangle ABC$ and $\\triangle DEF$:
$$AB = DE = 5, \\quad BC = EF = 7, \\quad CA = FD = 9$$

All three side pairs match, so by **SSS**, $\\triangle ABC \\cong \\triangle DEF$.

> 💡 SSS is the postulate behind why triangles make rigid bracing — a triangular frame can't be deformed without changing a side length.`,
      },
      {
        id: 'ct2-sas',
        type: 'text' as const,
        content: `## Side-Angle-Side (SAS)

> 🔑 **SAS Postulate:** If two sides and the **included angle** of one triangle are congruent to two sides and the included angle of another, the triangles are congruent.

The **included angle** is the angle *between* the two named sides — its vertex is where the two sides meet.

### Worked Example

In $\\triangle GHI$ and $\\triangle JKL$:
$$GH = JK = 6, \\quad \\angle H = \\angle K = 40°, \\quad HI = KL = 8$$

Here $\\angle H$ sits **between** sides $\\overline{GH}$ and $\\overline{HI}$ — it's included. So by **SAS**, $\\triangle GHI \\cong \\triangle JKL$.

> ⚠️ **Order matters in SAS:** the angle must be *between* the two sides. "Side-Side-Angle" (a side, another side, then a *non*-included angle) does **not** prove congruence — that's the SSA trap we'll meet in Part 4.`,
      },
      {
        id: 'ct2-included',
        type: 'dropdown-select' as const,
        content: `**Find the Included Angle / Side** 🔽

The *included angle* between two sides is at the vertex they share; the *included side* between two angles is the segment connecting their vertices.`,
        exercise: {
          dropdowns: [
            { label: 'In $\\triangle ABC$, the angle included between $\\overline{AB}$ and $\\overline{BC}$ is:', options: ['$\\angle B$', '$\\angle A$', '$\\angle C$', '$\\angle ABC$ and $\\angle BCA$'] },
            { label: 'The angle included between $\\overline{CA}$ and $\\overline{CB}$ is:', options: ['$\\angle C$', '$\\angle A$', '$\\angle B$', '$\\angle ACB$ and $\\angle BAC$'] },
            { label: 'In $\\triangle PQR$, the side included between $\\angle P$ and $\\angle Q$ is:', options: ['$\\overline{PQ}$', '$\\overline{QR}$', '$\\overline{PR}$', '$\\overline{RP}$'] },
          ],
          correctAnswers: ['$\\angle B$', '$\\angle C$', '$\\overline{PQ}$'],
          hint1: 'The included angle is at the vertex the two sides have in common.',
          hint2: '$\\overline{AB}$ and $\\overline{BC}$ both touch vertex $B$, so $\\angle B$ is between them.',
          hint3: 'The side included between $\\angle P$ and $\\angle Q$ joins their vertices $P$ and $Q$: that is $\\overline{PQ}$.',
          explanation: 'Two sides meet at a shared vertex — that vertex angle is "included." Two angles are joined by the segment between their vertices — that segment is the "included side."',
        },
      },
      {
        id: 'ct2-shared',
        type: 'text' as const,
        content: `## A Free Side or Angle: the Reflexive Property

Many figures have two triangles that **share** a side or angle. A shared part is congruent to itself:

> 🔑 **Reflexive Property:** $\\overline{XY} \\cong \\overline{XY}$ and $\\angle X \\cong \\angle X$.

### Worked Example

In a kite, segment $\\overline{BD}$ is shared by $\\triangle ABD$ and $\\triangle CBD$. If $\\overline{AB}\\cong\\overline{CB}$ and $\\overline{AD}\\cong\\overline{CD}$, then together with the shared side $\\overline{BD}\\cong\\overline{BD}$ we have **three** pairs of sides — so $\\triangle ABD \\cong \\triangle CBD$ by **SSS**.

> 💡 The shared side is the "third pair" you'd otherwise be missing. Spotting reflexive parts is one of the most useful proof skills in this whole unit.`,
      },
      {
        id: 'ct2-which',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two triangles have all three pairs of sides congruent. Which postulate proves them congruent?',
              options: ['SSS', 'SAS', 'ASA', 'None — you need an angle too'],
              correctAnswer: 0,
              explanation: 'Three pairs of congruent sides is exactly the Side-Side-Side (SSS) postulate. No angle information is needed.',
            },
            {
              question: 'You know $\\overline{AB}\\cong\\overline{DE}$, $\\overline{AC}\\cong\\overline{DF}$, and $\\angle A\\cong\\angle D$. Which postulate applies?',
              options: ['SAS — $\\angle A$ is between the two sides', 'SSS', 'SAS — but only if $\\angle B \\cong \\angle E$', 'None — this is SSA'],
              correctAnswer: 0,
              explanation: 'Sides $\\overline{AB}$ and $\\overline{AC}$ both meet at vertex $A$, so $\\angle A$ is the included angle. Two sides + included angle = SAS.',
            },
          ],
        },
      },
      {
        id: 'ct2-cpctc-bridge',
        type: 'text' as const,
        content: `## Reading Lengths from a Congruence

Once SSS or SAS proves two triangles congruent, **every** corresponding length and angle is equal (CPCTC). That lets you fill in unknown measurements directly — no extra work needed.

> 💡 If $\\triangle GHI \\cong \\triangle JKL$, then $\\overline{GH}\\cong\\overline{JK}$, $\\overline{HI}\\cong\\overline{KL}$, $\\overline{GI}\\cong\\overline{JL}$, and the matching angles are equal too. Try it below.`,
      },
      {
        id: 'ct2-cpctc-drill',
        type: 'input-boxes' as const,
        content: `**Use the Congruence** 🧮

Suppose $\\triangle GHI \\cong \\triangle JKL$ with $GH = 6$, $HI = 8$, and $\\angle H = 40°$.

**1)** Find $JK$ (the side matching $\\overline{GH}$).
**2)** Find $\\angle K$ (the angle matching $\\angle H$), in degrees.
**3)** If also $GI = 11$, find $JL$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '40', '11'],
          hint1: '$\\overline{GH}\\cong\\overline{JK}$ by correspondence, so $JK = GH$.',
          hint2: '$\\angle H \\cong \\angle K$, so they share the same measure.',
          hint3: '$\\overline{GI}$ corresponds to $\\overline{JL}$ ($G\\leftrightarrow J$, $I\\leftrightarrow L$), so $JL = GI$.',
          explanation: 'Corresponding parts are equal: $JK = GH = 6$, $\\angle K = \\angle H = 40°$, and $JL = GI = 11$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'congruent-triangles',
    sections: [
      {
        id: 'ct3-intro',
        type: 'text' as const,
        content: `# 📐 Congruent Triangles

**Part 3 of 5 — ASA, AAS & the HL Shortcut**

---

> 🔑 **The Idea:** Sometimes you know more about the angles than the sides. **ASA** and **AAS** use two angles plus one side. **HL** is a special shortcut just for **right triangles**.`,
      },
      {
        id: 'ct3-asa',
        type: 'text' as const,
        content: `## Angle-Side-Angle (ASA)

> 🔑 **ASA Postulate:** If two angles and the **included side** of one triangle are congruent to two angles and the included side of another, the triangles are congruent.

The **included side** is the side *between* the two named angles (it joins their vertices).

### Worked Example

In $\\triangle ABC$ and $\\triangle DEF$:
$$\\angle A = \\angle D = 50°, \\quad AB = DE = 7, \\quad \\angle B = \\angle E = 60°$$

Side $\\overline{AB}$ lies **between** $\\angle A$ and $\\angle B$ — it's included. So by **ASA**, $\\triangle ABC \\cong \\triangle DEF$.

> 💡 Once two angles are fixed, the **third angle is forced** (the three must sum to $180°$). The single known side then pins down the exact size.`,
      },
      {
        id: 'ct3-third-angle',
        type: 'input-boxes' as const,
        content: `**The Third Angle Is Forced** 🧮

ASA and AAS work because the triangle's angles must sum to $180°$, so two known angles fix the third. Find the missing angle (in degrees).

**1)** Two angles are $50°$ and $60°$. Find the third.
**2)** Two angles are $40°$ and $75°$. Find the third.
**3)** A right triangle has one angle of $32°$. Find the remaining acute angle.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['70', '65', '58'],
          hint1: 'Subtract both known angles from $180°$: $180 - 50 - 60$.',
          hint2: '$180 - 40 - 75 = 65$.',
          hint3: 'A right triangle already uses $90°$, so the two acute angles sum to $90°$: $90 - 32 = 58$.',
          explanation: '1) $180-50-60 = 70°$.  2) $180-40-75 = 65°$.  3) $180-90-32 = 58°$ (the acute angles add to $90°$).',
        },
      },
      {
        id: 'ct3-aas',
        type: 'text' as const,
        content: `## Angle-Angle-Side (AAS)

> 🔑 **AAS Theorem:** If two angles and a **non-included side** of one triangle are congruent to the corresponding parts of another, the triangles are congruent.

The difference from ASA is *where* the side sits:

| Postulate | The known side is… |
|-----------|--------------------|
| **ASA** | **between** the two known angles |
| **AAS** | **not** between them (off to the side) |

AAS works because two angles determine the third, which effectively converts the picture back into an ASA situation.

### Worked Example

In $\\triangle GHI$ and $\\triangle JKL$:
$$\\angle G = \\angle J = 40°, \\quad \\angle H = \\angle K = 75°, \\quad HI = KL = 9$$

Side $\\overline{HI}$ is **not** between $\\angle G$ and $\\angle H$ (it touches $H$ but not $G$), so this is **AAS**, giving $\\triangle GHI \\cong \\triangle JKL$.

> ⚠️ **AAA is NOT enough.** Three matching angles only guarantee the same *shape* (similar triangles), not the same *size* — think of two equilateral triangles, one tiny and one huge.`,
      },
      {
        id: 'ct3-asavsaas',
        type: 'dropdown-select' as const,
        content: `**ASA or AAS?** 🔽

Decide which postulate the given information matches.`,
        exercise: {
          dropdowns: [
            { label: '$\\angle A\\cong\\angle D$, $\\overline{AB}\\cong\\overline{DE}$, $\\angle B\\cong\\angle E$:', options: ['ASA', 'AAS', 'SAS', 'Not enough'] },
            { label: '$\\angle A\\cong\\angle D$, $\\angle B\\cong\\angle E$, $\\overline{BC}\\cong\\overline{EF}$:', options: ['AAS', 'ASA', 'SSS', 'Not enough'] },
            { label: '$\\angle A\\cong\\angle D$, $\\angle B\\cong\\angle E$, $\\angle C\\cong\\angle F$:', options: ['Not enough (AAA)', 'ASA', 'AAS', 'SAS'] },
          ],
          correctAnswers: ['ASA', 'AAS', 'Not enough (AAA)'],
          hint1: 'Find the side: is it BETWEEN the two angles (ASA) or off to the side (AAS)?',
          hint2: '$\\overline{AB}$ joins vertices $A$ and $B$, so it sits between $\\angle A$ and $\\angle B$ → ASA. $\\overline{BC}$ does not touch $\\angle A$ → AAS.',
          hint3: 'Three angles and no side is AAA — that fixes shape but not size, so it does NOT prove congruence.',
          explanation: 'Side between the two angles = ASA. Side not between them = AAS. Three angles with no side = AAA, which is insufficient.',
        },
      },
      {
        id: 'ct3-hl',
        type: 'text' as const,
        content: `## The HL Theorem (Right Triangles Only)

Right triangles get one extra shortcut.

> 🔑 **HL (Hypotenuse-Leg) Theorem:** If the **hypotenuse** and one **leg** of a right triangle are congruent to the hypotenuse and a leg of another right triangle, the triangles are congruent.

Three conditions must hold to use HL:

1. Both triangles are **right** triangles (a $90°$ angle).
2. The **hypotenuses** are congruent.
3. One pair of **legs** is congruent.

### Why It Works

By the Pythagorean Theorem, $\\text{leg}_1^2 + \\text{leg}_2^2 = \\text{hyp}^2$. If the hypotenuse and one leg match, the **second leg is forced** to match too — which is really SSS in disguise.

> 💡 HL is the *only* time a "Side-Side-Angle" arrangement works — because the angle is a right angle and the side opposite it is the longest (the hypotenuse), removing the ambiguity that normally dooms SSA.`,
      },
      {
        id: 'ct3-hlcheck',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two right triangles have congruent hypotenuses and one pair of congruent legs. Which theorem applies?',
              options: ['HL', 'SSA (always works)', 'AAA', 'None — right triangles need SSS'],
              correctAnswer: 0,
              explanation: 'Congruent hypotenuse + congruent leg in two right triangles is exactly the Hypotenuse-Leg (HL) theorem.',
            },
            {
              question: 'Why does AAS prove congruence even though only one side is known?',
              options: [
                'Two angles force the third, so the single side pins down the size',
                'Because AAS is the same as AAA',
                'Because the side must always be the hypotenuse',
                'It does not — AAS is never valid',
              ],
              correctAnswer: 0,
              explanation: 'Since angles sum to $180°$, knowing two angles determines the third. With all angles fixed, one matching side locks in the exact size — that is why AAS works.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'congruent-triangles',
    sections: [
      {
        id: 'ct4-intro',
        type: 'text' as const,
        content: `# 📐 Congruent Triangles

**Part 4 of 5 — Choosing a Method, Proofs & the Traps**

---

> 🔑 **The Idea:** Five valid shortcuts — **SSS, SAS, ASA, AAS, HL** — and two famous frauds, **SSA** and **AAA**. This part teaches you to pick the right one and write a clean two-column proof.`,
      },
      {
        id: 'ct4-summary',
        type: 'text' as const,
        content: `## The Five Valid Shortcuts (and the Two Frauds)

| Shortcut | What you need | Valid? |
|----------|---------------|--------|
| **SSS** | 3 sides | ✅ |
| **SAS** | 2 sides + **included** angle | ✅ |
| **ASA** | 2 angles + **included** side | ✅ |
| **AAS** | 2 angles + **non-included** side | ✅ |
| **HL** | right triangle: hypotenuse + leg | ✅ |
| **SSA** | 2 sides + non-included angle | ❌ (the "ambiguous case") |
| **AAA** | 3 angles, no side | ❌ (same shape, any size) |

> ⚠️ **Why SSA fails:** With two sides and a non-included angle, the third side can sometimes swing to **two different** positions — building two non-congruent triangles. The lone exception is HL, where the angle is a right angle.`,
      },
      {
        id: 'ct4-pickmethod',
        type: 'multiple-choice' as const,
        content: `**Which Method?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Triangles share a side, and you know two pairs of other sides are congruent. Best method?',
              options: ['SSS (the shared side is the third pair, by the Reflexive Property)', 'SAS', 'ASA', 'AAA'],
              correctAnswer: 0,
              explanation: 'The shared side is congruent to itself (Reflexive Property), giving a third pair of congruent sides. Three side pairs = SSS.',
            },
            {
              question: 'You know $\\overline{AB}\\cong\\overline{DE}$, $\\overline{BC}\\cong\\overline{EF}$, and the non-included $\\angle A\\cong\\angle D$. Can you conclude congruence?',
              options: [
                'No — this is SSA, the ambiguous case',
                'Yes, by SAS',
                'Yes, by SSS',
                'Yes, by AAS',
              ],
              correctAnswer: 0,
              explanation: 'The angle $\\angle A$ is not between the two known sides $\\overline{AB}$ and $\\overline{BC}$, so this is Side-Side-Angle (SSA) — which does not guarantee congruence.',
            },
          ],
        },
      },
      {
        id: 'ct4-proof',
        type: 'text' as const,
        content: `## A Worked Two-Column Proof

**Given:** $\\overline{AB}\\cong\\overline{CB}$ and $\\overline{BD}$ bisects $\\angle ABC$.
**Prove:** $\\triangle ABD \\cong \\triangle CBD$.

| Statement | Reason |
|-----------|--------|
| 1. $\\overline{AB}\\cong\\overline{CB}$ | Given |
| 2. $\\overline{BD}$ bisects $\\angle ABC$ | Given |
| 3. $\\angle ABD \\cong \\angle CBD$ | Definition of angle bisector |
| 4. $\\overline{BD}\\cong\\overline{BD}$ | Reflexive Property |
| 5. $\\triangle ABD \\cong \\triangle CBD$ | **SAS** (Statements 1, 3, 4) |

Notice the order **S-A-S**: side (1), included angle (3), side (4). The angle in step 3 sits *between* the two sides — exactly what SAS requires.

> 💡 **Proof strategy:** mark what's given, hunt for "free" parts (shared sides/angles = Reflexive, vertical angles, parallel-line angles), count to three matching parts, then name the postulate.`,
      },
      {
        id: 'ct4-proofdrill',
        type: 'dropdown-select' as const,
        content: `**Complete the Proof** 🔽

**Given:** $\\overline{AC}$ and $\\overline{BD}$ intersect at $E$, with $E$ the midpoint of both.
**Prove:** $\\triangle AEB \\cong \\triangle CED$. Fill in each reason or step.`,
        exercise: {
          dropdowns: [
            { label: '$\\overline{AE}\\cong\\overline{CE}$ and $\\overline{BE}\\cong\\overline{DE}$ because:', options: ['Definition of midpoint', 'Reflexive Property', 'Given congruence', 'CPCTC'] },
            { label: '$\\angle AEB \\cong \\angle CED$ because they are:', options: ['Vertical angles', 'Corresponding angles', 'Supplementary', 'A linear pair'] },
            { label: 'Therefore $\\triangle AEB \\cong \\triangle CED$ by:', options: ['SAS', 'ASA', 'SSS', 'AAA'] },
          ],
          correctAnswers: ['Definition of midpoint', 'Vertical angles', 'SAS'],
          hint1: 'A midpoint splits a segment into two congruent halves — that is the definition of midpoint.',
          hint2: 'Two lines crossing at $E$ form vertical angles, which are always congruent.',
          hint3: 'You have side ($\\overline{AE}$), included angle ($\\angle AEB$), side ($\\overline{BE}$) — that order is SAS.',
          explanation: 'Midpoint gives $\\overline{AE}\\cong\\overline{CE}$ and $\\overline{BE}\\cong\\overline{DE}$; the crossing lines make $\\angle AEB$ and $\\angle CED$ vertical (congruent). Side–included angle–side = SAS.',
        },
      },
      {
        id: 'ct4-cpctc',
        type: 'text' as const,
        content: `## Using CPCTC After the Proof

Once the triangles are congruent, **CPCTC** unlocks any remaining part.

### Example

Suppose you've proven $\\triangle AEB \\cong \\triangle CED$ above. You can now conclude:

$$\\overline{AB}\\cong\\overline{CD} \\quad\\text{and}\\quad \\angle A \\cong \\angle C$$

…even though those weren't in the "Given." Each follows because **C**orresponding **P**arts of **C**ongruent **T**riangles are **C**ongruent.

> 🔑 The two-step pattern for almost every congruence proof:
> 1. Prove $\\triangle_1 \\cong \\triangle_2$ (using SSS/SAS/ASA/AAS/HL).
> 2. Conclude the specific side/angle you want **by CPCTC**.`,
      },
      {
        id: 'ct4-cpctc-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You have proven $\\triangle PQR \\cong \\triangle STU$. Which statement is justified by CPCTC?',
              options: ['$\\overline{QR}\\cong\\overline{TU}$', 'The triangles are right triangles', '$\\overline{PQ}\\cong\\overline{QR}$', '$\\angle P + \\angle S = 90°$'],
              correctAnswer: 0,
              explanation: 'CPCTC says every corresponding pair is congruent. With $Q\\leftrightarrow T$ and $R\\leftrightarrow U$, side $\\overline{QR}$ corresponds to $\\overline{TU}$. The other options compare non-corresponding or unrelated parts.',
            },
            {
              question: 'In a proof, when can you legitimately write "CPCTC" as a reason?',
              options: [
                'Only AFTER you have already proven the two triangles congruent',
                'As the very first step, before anything else',
                'Any time two segments look equal',
                'Only when using the HL theorem',
              ],
              correctAnswer: 0,
              explanation: 'CPCTC draws conclusions FROM a congruence you have already established. You must prove $\\triangle_1\\cong\\triangle_2$ first, then CPCTC unlocks the corresponding parts.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'congruent-triangles',
    sections: [
      {
        id: 'ct5-intro',
        type: 'text' as const,
        content: `# 📐 Congruent Triangles

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read a congruence statement, (2) apply SSS, SAS, ASA, AAS, and HL, (3) avoid the SSA and AAA traps, and (4) finish proofs with CPCTC. Time to put it all together.`,
      },
      {
        id: 'ct5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Read corresponding parts | Line the letters up in order |
| 3 sides match | **SSS** |
| 2 sides + angle *between* them | **SAS** |
| 2 angles + side *between* them | **ASA** |
| 2 angles + side *not* between | **AAS** |
| Right triangle: hyp + a leg | **HL** |
| Conclude a leftover part | **CPCTC** (after proving congruence) |

> ⚠️ **Never** trust **SSA** (ambiguous) or **AAA** (right shape, wrong size). And always check for "free" congruent parts: shared sides/angles (Reflexive) and vertical angles.`,
      },
      {
        id: 'ct5-anglesum',
        type: 'input-boxes' as const,
        content: `**Numeric Warm-Up** 🧮

Use the Triangle Angle-Sum Theorem ($\\angle$s of a triangle add to $180°$) and CPCTC.

**1)** $\\triangle ABC \\cong \\triangle DEF$ with $\\angle A = 55°$ and $\\angle B = 65°$. Find $\\angle F$ (in degrees). *(Hint: $\\angle F \\cong \\angle C$.)*
**2)** $\\triangle ABC \\cong \\triangle DEF$ with $DE = 12$. Find $AB$.
**3)** In a triangle, two angles measure $90°$ and $35°$. Find the third angle (in degrees).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '12', '55'],
          hint1: 'For (1): $\\angle C = 180° - 55° - 65° = 60°$, and $\\angle F \\cong \\angle C$ by CPCTC.',
          hint2: 'For (2): $\\overline{AB}\\cong\\overline{DE}$ by CPCTC, so $AB = DE = 12$.',
          hint3: 'For (3): $180° - 90° - 35° = 55°$.',
          explanation: '1) $\\angle C = 180-55-65 = 60°$, so $\\angle F = 60°$.  2) $AB = DE = 12$ by CPCTC.  3) $180-90-35 = 55°$.',
        },
      },
      {
        id: 'ct5-strategy',
        type: 'text' as const,
        content: `## Choosing a Method, Fast

For each problem, ask three questions in order:

1. **Right triangle with hypotenuse + leg?** → **HL**.
2. **How many sides vs. angles do I know?** Three sides → SSS. Two sides + one angle → check if the angle is *included* (SAS) or not (then it's SSA — reject).
3. **Two angles + one side?** Is the side *between* them (ASA) or off to the side (AAS)?

> 💡 Don't forget the "free" parts — a shared side/angle (Reflexive) or vertical angles often supply the third piece you need.`,
      },
      {
        id: 'ct5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\triangle ABC$ and $\\triangle XYZ$: $\\angle B\\cong\\angle Y$, $\\overline{BC}\\cong\\overline{YZ}$, and $\\angle C\\cong\\angle Z$. Which postulate proves congruence?',
              options: ['ASA — the side is between the two angles', 'AAS', 'SAS', 'None — this is SSA'],
              correctAnswer: 0,
              explanation: 'Side $\\overline{BC}$ joins vertices $B$ and $C$, so it lies between $\\angle B$ and $\\angle C$. Two angles + included side = ASA.',
            },
            {
              question: 'Which set of facts does NOT prove two triangles congruent?',
              options: [
                '$\\angle A\\cong\\angle D$, $\\angle B\\cong\\angle E$, $\\angle C\\cong\\angle F$',
                '$\\overline{AB}\\cong\\overline{DE}$, $\\overline{BC}\\cong\\overline{EF}$, $\\overline{CA}\\cong\\overline{FD}$',
                'Two right triangles with congruent hypotenuses and a congruent leg',
                '$\\overline{AB}\\cong\\overline{DE}$, $\\angle A\\cong\\angle D$, $\\overline{AC}\\cong\\overline{DF}$',
              ],
              correctAnswer: 0,
              explanation: 'Three congruent angles (AAA) only guarantees the same shape, not size. The others are SSS, HL, and SAS — all valid.',
            },
          ],
        },
      },
      {
        id: 'ct5-recall',
        type: 'text' as const,
        content: `## One-Line Recall

When you spot the given parts, name the shortcut by **what kind of parts** and **their order**:

> 🔑 **S/A pattern → postulate**
> - **SSS** · **SAS** (angle *included*) · **ASA** (side *included*) · **AAS** (side *not* included) · **HL** (right triangle)
> - Reject **SSA** and **AAA** every time.

Run the pattern on the next set.`,
      },
      {
        id: 'ct5-method-drill',
        type: 'dropdown-select' as const,
        content: `**Name That Postulate** 🔽

Pick the shortcut justified by each set of congruent parts.`,
        exercise: {
          dropdowns: [
            { label: '2 sides + the angle between them:', options: ['SAS', 'SSA', 'ASA', 'AAS'] },
            { label: '2 angles + a side that is NOT between them:', options: ['AAS', 'ASA', 'SSS', 'AAA'] },
            { label: 'Right triangles: equal hypotenuses + 1 equal leg:', options: ['HL', 'SSA', 'SAS', 'LL only'] },
          ],
          correctAnswers: ['SAS', 'AAS', 'HL'],
          hint1: 'Side, *included* angle, side is SAS.',
          hint2: 'Two angles with the side off to the side (non-included) is AAS.',
          hint3: 'Hypotenuse + Leg in right triangles is the HL theorem.',
          explanation: 'Included angle between two sides → SAS. Non-included side with two angles → AAS. Hypotenuse + leg in right triangles → HL.',
        },
      },
      {
        id: 'ct5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Given $\\triangle RST \\cong \\triangle UVW$, which angle is congruent to $\\angle S$?',
              options: ['$\\angle V$', '$\\angle U$', '$\\angle W$', '$\\angle T$'],
              correctAnswer: 0,
              explanation: 'In order, $R\\leftrightarrow U$, $S\\leftrightarrow V$, $T\\leftrightarrow W$. So $\\angle S \\cong \\angle V$.',
            },
            {
              question: 'Two triangles share a side and have two other pairs of congruent sides. Which postulate proves them congruent?',
              options: ['SSS', 'AAA', 'SSA', 'ASA'],
              correctAnswer: 0,
              explanation: 'The shared side is congruent to itself (Reflexive), giving three pairs of congruent sides → SSS.',
            },
            {
              question: 'Why is SSA (two sides and a non-included angle) NOT a valid congruence shortcut?',
              options: [
                'The third side can swing into two different positions, making two non-congruent triangles (the ambiguous case)',
                'Because two sides are never enough information',
                'Because the angles must always sum to less than $180°$',
                'It actually is valid — it is the same as SAS',
              ],
              correctAnswer: 0,
              explanation: 'With a non-included angle, the remaining side may close in two ways, producing two different (non-congruent) triangles — the "ambiguous case." The one exception is HL for right triangles.',
            },
          ],
        },
      },
    ],
  },
]
