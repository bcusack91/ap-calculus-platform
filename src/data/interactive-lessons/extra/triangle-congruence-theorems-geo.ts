import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Triangle Congruence Theorems (Geometry).
 * Registry key: 'triangle-congruence-theorems-geo' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'triangle-congruence-theorems-geo',
    sections: [
      {
        id: 'tct1-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Congruence Theorems

**Part 1 of 5 — What Congruence Means**

---

### Topics in This Part

| Section |
|---------|
| Congruent vs. Equal |
| Corresponding Parts & Notation |
| Included Sides and Included Angles |

> 🔑 **Key Concept:** Two triangles are **congruent** when they have *exactly* the same size and shape — one could be slid, flipped, or rotated to land perfectly on top of the other. Every congruence theorem in this lesson is a shortcut for proving that without checking all six parts.`,
      },
      {
        id: 'tct1-congruent-vs-equal',
        type: 'text' as const,
        content: `## Congruent vs. Equal

A triangle has **six parts**: three sides and three angles. If two triangles are congruent, *all six* corresponding parts match.

- We say the **figures** are **congruent** and write $\\triangle ABC \\cong \\triangle DEF$.
- We say the **measures** are **equal** and write $AB = DE$ or $m\\angle A = m\\angle D$.

> 💡 **Wording matters:** Segments and angles are *congruent* ($\\cong$); their lengths and degree measures are *equal* ($=$). On a test, "$\\overline{AB} \\cong \\overline{DE}$" and "$AB = DE$" say the same thing in two correct grammars.

### The order of the letters is a promise

The statement $\\triangle ABC \\cong \\triangle DEF$ lists corresponding vertices **in order**:

| This vertex… | …corresponds to | This part equals that part |
|--------------|-----------------|----------------------------|
| $A$ | $D$ | $\\angle A \\cong \\angle D$ |
| $B$ | $E$ | $\\angle B \\cong \\angle E$ |
| $C$ | $F$ | $\\angle C \\cong \\angle F$ |
| $\\overline{AB}$ | $\\overline{DE}$ | $AB = DE$ |
| $\\overline{BC}$ | $\\overline{EF}$ | $BC = EF$ |
| $\\overline{CA}$ | $\\overline{FD}$ | $CA = FD$ |`,
      },
      {
        id: 'tct1-correspond-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'If $\\triangle PQR \\cong \\triangle STU$, which side is congruent to $\\overline{QR}$?',
              options: ['$\\overline{TU}$', '$\\overline{ST}$', '$\\overline{SU}$', '$\\overline{PR}$'],
              correctAnswer: 0,
              explanation: 'Read the order: $P\\to S$, $Q\\to T$, $R\\to U$. So $\\overline{QR}$ corresponds to $\\overline{TU}$.',
            },
            {
              question: 'In $\\triangle ABC \\cong \\triangle DEF$, which statement is written correctly?',
              options: ['$\\angle B \\cong \\angle E$', '$\\angle B = \\angle E$', '$\\overline{AB} \\cong DE$', '$m\\angle B \\cong m\\angle E$'],
              correctAnswer: 0,
              explanation: 'Angles (figures) are *congruent* ($\\cong$); their measures are *equal* ($=$). "$\\angle B \\cong \\angle E$" mixes the symbol and object correctly. "$m\\angle B = m\\angle E$" would also be correct, but "$m\\angle B \\cong m\\angle E$" is not.',
            },
          ],
        },
      },
      {
        id: 'tct1-included',
        type: 'text' as const,
        content: `## Included Sides and Included Angles

The congruence theorems depend on *where* the matched parts sit. Two vocabulary words make every theorem precise.

- An **included angle** is the angle **between** two named sides (its vertex is where they meet).
- An **included side** is the side **between** two named angles (it joins their vertices).

### Example: $\\triangle ABC$

| Two sides | Their included angle |
|-----------|----------------------|
| $\\overline{AB}$ and $\\overline{BC}$ | $\\angle B$ |
| $\\overline{BC}$ and $\\overline{CA}$ | $\\angle C$ |
| $\\overline{CA}$ and $\\overline{AB}$ | $\\angle A$ |

| Two angles | Their included side |
|------------|---------------------|
| $\\angle A$ and $\\angle B$ | $\\overline{AB}$ |
| $\\angle B$ and $\\angle C$ | $\\overline{BC}$ |
| $\\angle A$ and $\\angle C$ | $\\overline{AC}$ |

> ⚠️ "Included" is the difference between a theorem that **works** (SAS) and one that **doesn't** (SSA). Get comfortable spotting it now.`,
      },
      {
        id: 'tct1-included-drop',
        type: 'dropdown-select' as const,
        content: `**Spot the Included Part** 🔽

Use $\\triangle XYZ$ for each.`,
        exercise: {
          dropdowns: [
            { label: 'The angle included between $\\overline{XY}$ and $\\overline{YZ}$ is:', options: ['$\\angle Y$', '$\\angle X$', '$\\angle Z$'] },
            { label: 'The side included between $\\angle X$ and $\\angle Z$ is:', options: ['$\\overline{XZ}$', '$\\overline{XY}$', '$\\overline{YZ}$'] },
            { label: 'The angle included between $\\overline{XZ}$ and $\\overline{XY}$ is:', options: ['$\\angle X$', '$\\angle Y$', '$\\angle Z$'] },
          ],
          correctAnswers: ['$\\angle Y$', '$\\overline{XZ}$', '$\\angle X$'],
          hint1: 'The included angle sits at the vertex shared by the two sides — find the common letter.',
          hint2: '$\\overline{XY}$ and $\\overline{YZ}$ share vertex $Y$, so the included angle is $\\angle Y$.',
          hint3: 'The included side between $\\angle X$ and $\\angle Z$ joins vertices $X$ and $Z$: that is $\\overline{XZ}$.',
          explanation: 'Sides $\\overline{XY}$, $\\overline{YZ}$ meet at $Y$ ⇒ $\\angle Y$. Angles at $X$ and $Z$ are joined by $\\overline{XZ}$. Sides $\\overline{XZ}$, $\\overline{XY}$ meet at $X$ ⇒ $\\angle X$.',
        },
      },
      {
        id: 'tct1-cpctc',
        type: 'text' as const,
        content: `## The Payoff: CPCTC

Why prove triangles congruent at all? Because of one powerful follow-up rule:

> 🔑 **CPCTC** — *Corresponding Parts of Congruent Triangles are Congruent.* Once you've proven $\\triangle ABC \\cong \\triangle DEF$, you may declare **any** pair of matched sides or angles congruent.

That's the whole game plan for most geometry proofs:

1. Use a congruence theorem (SSS, SAS, ASA, AAS, or HL) to prove two triangles congruent.
2. Use **CPCTC** to conclude that some specific side or angle you actually wanted is congruent.

In Parts 2–4 we'll collect the five theorems. In Part 5 we'll chain them with CPCTC.`,
      },
      {
        id: 'tct1-cpctc-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'CPCTC can be used at which point in a proof?',
              options: [
                'Only *after* the two triangles have been proven congruent',
                'As the very first step, to set up the proof',
                'Only when the triangles are right triangles',
                'Any time two sides look equal',
              ],
              correctAnswer: 0,
              explanation: 'CPCTC stands for "Corresponding Parts of *Congruent* Triangles are Congruent," so the triangles must already be proven congruent before it applies.',
            },
            {
              question: 'You have shown $\\triangle ABC \\cong \\triangle DEF$. By CPCTC, which pair is congruent?',
              options: ['$\\angle C$ and $\\angle F$', '$\\angle C$ and $\\angle D$', '$\\overline{AB}$ and $\\overline{EF}$', '$\\angle A$ and $\\angle E$'],
              correctAnswer: 0,
              explanation: 'Matching the order $A\\to D$, $B\\to E$, $C\\to F$, vertex $C$ corresponds to vertex $F$, so $\\angle C \\cong \\angle F$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'triangle-congruence-theorems-geo',
    sections: [
      {
        id: 'tct2-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Congruence Theorems

**Part 2 of 5 — SSS and SAS**

---

> 🔑 **The Big Idea:** You don't need all six parts. The right **three** parts lock a triangle's size and shape completely. The first two shortcuts are **SSS** and **SAS**.`,
      },
      {
        id: 'tct2-sss',
        type: 'text' as const,
        content: `## SSS — Side-Side-Side

> 🔑 **SSS Postulate:** If the **three sides** of one triangle are congruent to the three sides of another, the triangles are congruent.

If $AB = DE$, $BC = EF$, and $CA = FD$, then $\\triangle ABC \\cong \\triangle DEF$.

Three fixed side lengths can build **only one** triangle (up to flips and turns) — that rigidity is exactly why triangular braces hold up bridges and bicycle frames.

### Example

In $\\triangle ABC$ and $\\triangle DEF$: $AB = 5$, $BC = 7$, $CA = 6$ and $DE = 5$, $EF = 7$, $FD = 6$.

All three pairs of sides match, so $\\triangle ABC \\cong \\triangle DEF$ by **SSS**.`,
      },
      {
        id: 'tct2-sas',
        type: 'text' as const,
        content: `## SAS — Side-Angle-Side

> 🔑 **SAS Postulate:** If **two sides and the angle *between* them** in one triangle are congruent to the corresponding two sides and included angle of another, the triangles are congruent.

The angle **must** be the **included** angle — the one trapped between the two sides.

### Example

In $\\triangle GHI$ and $\\triangle JKL$: $GH = JK = 8$, $\\angle H = \\angle K = 40°$, and $HI = KL = 5$.

The angle $\\angle H$ is included between sides $\\overline{GH}$ and $\\overline{HI}$ (and $\\angle K$ between $\\overline{JK}$ and $\\overline{KL}$). So $\\triangle GHI \\cong \\triangle JKL$ by **SAS**.

> ⚠️ **Order check for SAS:** the letters read **S-A-S** — side, *included* angle, side. If the angle is *not* between the two sides, this is "SSA," which is **not** a valid theorem (more on that in Part 3).`,
      },
      {
        id: 'tct2-pick-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two triangles each have sides $4$, $9$, and $11$. Which theorem proves them congruent?',
              options: ['SSS', 'SAS', 'ASA', 'They cannot be proven congruent'],
              correctAnswer: 0,
              explanation: 'All three sides of one match all three sides of the other, so SSS applies.',
            },
            {
              question: 'You know $\\overline{PQ} \\cong \\overline{ST}$, $\\angle Q \\cong \\angle T$, and $\\overline{QR} \\cong \\overline{TU}$. Which theorem applies?',
              options: ['SAS — the angle is included between the two sides', 'SSS', 'ASA', 'None — the angle is not included'],
              correctAnswer: 0,
              explanation: '$\\angle Q$ sits between $\\overline{PQ}$ and $\\overline{QR}$ (it is at vertex $Q$, shared by both), so it is the included angle. That is SAS.',
            },
          ],
        },
      },
      {
        id: 'tct2-included-check',
        type: 'dropdown-select' as const,
        content: `**SAS Requires the *Included* Angle** 🔽

For $\\triangle ABC$, decide whether each given set is enough for **SAS**.`,
        exercise: {
          dropdowns: [
            { label: '$\\overline{AB}$, $\\angle A$, $\\overline{AC}$ — is the angle included?', options: ['Yes — valid SAS', 'No — not included'] },
            { label: '$\\overline{AB}$, $\\angle C$, $\\overline{AC}$ — is the angle included?', options: ['No — not included', 'Yes — valid SAS'] },
            { label: '$\\overline{BC}$, $\\angle B$, $\\overline{AB}$ — is the angle included?', options: ['Yes — valid SAS', 'No — not included'] },
          ],
          correctAnswers: ['Yes — valid SAS', 'No — not included', 'Yes — valid SAS'],
          hint1: 'The angle is "included" only if its vertex is shared by both named sides.',
          hint2: '$\\angle A$ is between $\\overline{AB}$ and $\\overline{AC}$ ✓. But $\\angle C$ is not between $\\overline{AB}$ and $\\overline{AC}$ — vertex $C$ is on only one of them.',
          hint3: '$\\overline{BC}$ and $\\overline{AB}$ meet at vertex $B$, so $\\angle B$ is included — valid SAS.',
          explanation: 'Row 1: $\\angle A$ is between $\\overline{AB}$ and $\\overline{AC}$ ✓. Row 2: $\\angle C$ is the angle *opposite* $\\overline{AB}$, not between the two named sides — not SAS. Row 3: $\\angle B$ joins $\\overline{AB}$ and $\\overline{BC}$ ✓.',
        },
      },
      {
        id: 'tct2-solve-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Measure** 🧮

Because congruent triangles have equal corresponding parts, a known triangle tells you the unknown one.

Given $\\triangle ABC \\cong \\triangle DEF$ with $AB = 12$, $BC = 9$, $CA = 15$, and $m\\angle A = 53°$, $m\\angle B = 90°$.

**1)** $DE = \\,?$
**2)** $EF = \\,?$
**3)** $m\\angle D = \\,?$ *(in degrees, just the number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '9', '53'],
          hint1: 'Corresponding parts are equal. $\\overline{DE}$ corresponds to $\\overline{AB}$.',
          hint2: '$\\overline{EF}$ corresponds to $\\overline{BC}$, so $EF = BC = 9$.',
          hint3: '$\\angle D$ corresponds to $\\angle A$, so $m\\angle D = m\\angle A = 53°$.',
          explanation: '$DE = AB = 12$. $EF = BC = 9$. $m\\angle D = m\\angle A = 53°$. Matching letters give matching measures.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'triangle-congruence-theorems-geo',
    sections: [
      {
        id: 'tct3-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Congruence Theorems

**Part 3 of 5 — ASA, AAS, and the Two Fakes**

---

> 🔑 **The Big Idea:** When the matched information includes **two angles**, the shortcuts are **ASA** and **AAS**. Two famous look-alikes — **SSA** and **AAA** — are *not* theorems. Knowing why they fail is as important as knowing the four that work.`,
      },
      {
        id: 'tct3-asa',
        type: 'text' as const,
        content: `## ASA — Angle-Side-Angle

> 🔑 **ASA Postulate:** If **two angles and the side *between* them** (the included side) in one triangle are congruent to the corresponding parts of another, the triangles are congruent.

### Example

In $\\triangle ABC$ and $\\triangle DEF$: $\\angle A = \\angle D = 50°$, $AB = DE = 7$, and $\\angle B = \\angle E = 60°$.

Side $\\overline{AB}$ is included between $\\angle A$ and $\\angle B$, so $\\triangle ABC \\cong \\triangle DEF$ by **ASA**.

> 💡 Two angles fix the triangle's *shape*; one matching side fixes its *scale*. Together they pin down a single triangle.`,
      },
      {
        id: 'tct3-aas',
        type: 'text' as const,
        content: `## AAS — Angle-Angle-Side

> 🔑 **AAS Theorem:** If **two angles and a *non-included* side** of one triangle are congruent to the corresponding parts of another, the triangles are congruent.

Why is AAS automatically valid? Because the **Triangle Angle Sum** is always $180°$: if two pairs of angles match, the **third** pair must match too. So a non-included side is actually included between two *known* angles — AAS quietly becomes ASA.

### Example

$\\angle A = \\angle D = 40°$, $\\angle B = \\angle E = 75°$, and $BC = EF = 10$. Side $\\overline{BC}$ is *opposite* $\\angle A$, not between the two angles — so this is **AAS**, and the triangles are congruent.

| Theorem | The side is… |
|---------|--------------|
| ASA | **between** the two angles (included) |
| AAS | **not between** the two angles (non-included) |`,
      },
      {
        id: 'tct3-asa-aas-mc',
        type: 'multiple-choice' as const,
        content: `**ASA or AAS?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You know $\\angle A \\cong \\angle D$, $\\angle C \\cong \\angle F$, and $\\overline{AC} \\cong \\overline{DF}$. Which theorem fits?',
              options: ['ASA — the side is between the two angles', 'AAS — the side is not between the angles', 'SAS', 'SSS'],
              correctAnswer: 0,
              explanation: '$\\overline{AC}$ is the side joining vertices $A$ and $C$, the two angles you know — it is included between them. That is ASA.',
            },
            {
              question: 'You know $\\angle A \\cong \\angle D$, $\\angle B \\cong \\angle E$, and $\\overline{BC} \\cong \\overline{EF}$. Which theorem fits?',
              options: ['AAS — the side is not between the two angles', 'ASA — the side is between the angles', 'SSA', 'SAS'],
              correctAnswer: 0,
              explanation: 'The known angles are at $A$ and $B$; their included side would be $\\overline{AB}$. But you are given $\\overline{BC}$, which is *not* between them, so this is AAS.',
            },
          ],
        },
      },
      {
        id: 'tct3-fakes',
        type: 'text' as const,
        content: `## The Two Fakes: SSA and AAA

> ⚠️ **SSA is NOT a theorem.** Two sides and a *non-included* angle can produce **two different** triangles — this is the famous "ambiguous case." With one angle and the side opposite it, the third side can sometimes swing to two positions, giving two non-congruent triangles.

> ⚠️ **AAA is NOT a theorem.** Three matching angles guarantee the same *shape* but say nothing about *size*. Two triangles can have all angles equal yet be different sizes — they are **similar**, not congruent. (A small $30°$-$60°$-$90°$ triangle and a giant one have identical angles.)

### The complete scorecard

| Combination | Congruent? |
|-------------|------------|
| SSS | ✅ Yes |
| SAS (included angle) | ✅ Yes |
| ASA (included side) | ✅ Yes |
| AAS | ✅ Yes |
| **SSA** | ❌ No (ambiguous) |
| **AAA** | ❌ No (only similar) |`,
      },
      {
        id: 'tct3-scorecard-drop',
        type: 'dropdown-select' as const,
        content: `**Theorem or Not?** 🔽

Decide whether each combination guarantees congruence.`,
        exercise: {
          dropdowns: [
            { label: 'AAA →', options: ['Not valid — only similar', 'Valid congruence'] },
            { label: 'AAS →', options: ['Valid congruence', 'Not valid'] },
            { label: 'SSA →', options: ['Not valid — ambiguous case', 'Valid congruence'] },
            { label: 'ASA →', options: ['Valid congruence', 'Not valid'] },
          ],
          correctAnswers: ['Not valid — only similar', 'Valid congruence', 'Not valid — ambiguous case', 'Valid congruence'],
          hint1: 'The four valid theorems are SSS, SAS, ASA, and AAS. Anything else is suspect.',
          hint2: 'AAA fixes shape but not size (similar). SSA can build two different triangles (ambiguous).',
          hint3: 'AAS is valid because the Triangle Angle Sum makes the third angle match, turning it into ASA.',
          explanation: 'AAA → similar only. AAS → valid (third angle forced by the $180°$ sum). SSA → ambiguous, not valid. ASA → valid (included side).',
        },
      },
      {
        id: 'tct3-angle-sum-drill',
        type: 'input-boxes' as const,
        content: `**Use the Angle Sum** 🧮

This is the reasoning behind AAS. The three interior angles of any triangle add to $180°$.

**1)** A triangle has angles $40°$ and $75°$. The third angle $= \\,?$ *(degrees)*
**2)** In $\\triangle ABC \\cong \\triangle DEF$, $m\\angle A = 90°$ and $m\\angle B = 35°$. Then $m\\angle F = \\,?$ *(degrees)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['65', '55'],
          hint1: 'The three angles sum to $180°$, so the third $= 180 - (\\text{sum of the other two})$.',
          hint2: '$180 - 40 - 75 = 65$.',
          hint3: 'First find $m\\angle C = 180 - 90 - 35 = 55°$. Then $\\angle F$ corresponds to $\\angle C$, so $m\\angle F = 55°$.',
          explanation: '1) $180 - 40 - 75 = 65°$. 2) $m\\angle C = 180 - 90 - 35 = 55°$, and $\\angle F \\cong \\angle C$, so $m\\angle F = 55°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'triangle-congruence-theorems-geo',
    sections: [
      {
        id: 'tct4-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Congruence Theorems

**Part 4 of 5 — HL & Proving with CPCTC**

---

> 🔑 **The Big Idea:** Right triangles get a *fifth* shortcut — **HL** — and it's the only place a version of "SSA" is allowed. Then we put all five theorems to work inside two-column proofs using **CPCTC**.`,
      },
      {
        id: 'tct4-hl',
        type: 'text' as const,
        content: `## HL — Hypotenuse-Leg (right triangles only)

> 🔑 **HL Theorem:** In two **right** triangles, if the **hypotenuse** and one **leg** of one are congruent to the hypotenuse and a leg of the other, the triangles are congruent.

Two conditions must hold to even consider HL:

1. Both triangles are **right** triangles (there is a $90°$ angle).
2. You match the **hypotenuse** and **one leg**.

Why is this allowed when ordinary SSA is not? The right angle plus the Pythagorean Theorem forces the **second leg** to a single length ($\\text{leg}_2 = \\sqrt{\\text{hyp}^2 - \\text{leg}_1^2}$), so the ambiguity disappears and it effectively becomes SSS.

### Example

$\\triangle ABC$ and $\\triangle DEF$ are right triangles with right angles at $C$ and $F$. If hypotenuse $AB =$ hypotenuse $DE = 13$ and leg $BC =$ leg $EF = 5$, then $\\triangle ABC \\cong \\triangle DEF$ by **HL**. (The third sides are both $\\sqrt{13^2 - 5^2} = 12$.)`,
      },
      {
        id: 'tct4-hl-mc',
        type: 'multiple-choice' as const,
        content: `**Does HL Apply?** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two right triangles share a congruent hypotenuse and one congruent leg. Which theorem proves them congruent?',
              options: ['HL', 'SSA — which is fine here', 'AAA', 'None — right triangles are special'],
              correctAnswer: 0,
              explanation: 'Hypotenuse + leg in two right triangles is exactly the HL Theorem.',
            },
            {
              question: 'Why can right triangles use hypotenuse-and-leg when SSA fails for general triangles?',
              options: [
                'The right angle and Pythagoras force the second leg, removing the ambiguity',
                'Right triangles are always congruent',
                'HL is just a nickname for AAA',
                'The hypotenuse is always the longest side, so order does not matter',
              ],
              correctAnswer: 0,
              explanation: 'Given the hypotenuse and one leg, $\\text{leg}_2 = \\sqrt{\\text{hyp}^2 - \\text{leg}_1^2}$ is determined exactly, so only one triangle is possible — effectively SSS.',
            },
          ],
        },
      },
      {
        id: 'tct4-shared',
        type: 'text' as const,
        content: `## Reusing Shared Parts in Proofs

Real proofs rarely hand you all three pairs directly. Two "free" facts close most gaps:

- **Reflexive Property:** any side or angle is congruent to itself — $\\overline{AB} \\cong \\overline{AB}$. A shared side between two triangles is automatically one matched pair.
- **Vertical Angles** formed by crossing segments are congruent — often the *angle* in an SAS or ASA setup.

### Worked Proof Sketch

Given: $\\overline{AB} \\cong \\overline{CB}$ and $\\overline{DB}$ bisects $\\angle ABC$. Prove: $\\triangle ABD \\cong \\triangle CBD$.

| Statement | Reason |
|-----------|--------|
| $\\overline{AB} \\cong \\overline{CB}$ | Given |
| $\\angle ABD \\cong \\angle CBD$ | Definition of angle bisector |
| $\\overline{BD} \\cong \\overline{BD}$ | Reflexive Property |
| $\\triangle ABD \\cong \\triangle CBD$ | **SAS** |

The matched parts are **S** ($AB,CB$), **A** ($\\angle ABD, \\angle CBD$), **S** ($BD,BD$) — and the angle is included between the two sides. ✅`,
      },
      {
        id: 'tct4-proof-drop',
        type: 'dropdown-select' as const,
        content: `**Finish the Proof** 🔽

Given: $\\overline{AD} \\parallel \\overline{BC}$ and $\\overline{AD} \\cong \\overline{BC}$, with diagonals crossing so that $A,B$ and $D,C$ are opposite vertices of $\\triangle ABD$ and $\\triangle CDB$ sharing diagonal $\\overline{BD}$. Prove $\\triangle ABD \\cong \\triangle CDB$.`,
        exercise: {
          dropdowns: [
            { label: '$\\overline{AD} \\cong \\overline{BC}$ — reason:', options: ['Given', 'Reflexive Property', 'CPCTC'] },
            { label: '$\\angle ADB \\cong \\angle CBD$ — reason:', options: ['Alternate interior angles ($\\overline{AD} \\parallel \\overline{BC}$)', 'Vertical angles', 'Given'] },
            { label: '$\\overline{BD} \\cong \\overline{BD}$ — reason:', options: ['Reflexive Property', 'Given', 'CPCTC'] },
            { label: 'Therefore $\\triangle ABD \\cong \\triangle CDB$ by:', options: ['SAS', 'ASA', 'SSS'] },
          ],
          correctAnswers: ['Given', 'Alternate interior angles ($\\overline{AD} \\parallel \\overline{BC}$)', 'Reflexive Property', 'SAS'],
          hint1: 'Two facts are handed to you directly; one comes from the parallel lines; one is the shared diagonal.',
          hint2: 'Parallel lines cut by the transversal $\\overline{BD}$ make alternate interior angles $\\angle ADB$ and $\\angle CBD$ congruent.',
          hint3: 'You now have side $\\overline{AD}\\cong\\overline{BC}$, the angle between them and $\\overline{BD}$, and shared side $\\overline{BD}$ — Side-Angle-Side.',
          explanation: 'Given side $\\overline{AD}\\cong\\overline{BC}$; alternate interior angles give $\\angle ADB\\cong\\angle CBD$; the shared diagonal $\\overline{BD}\\cong\\overline{BD}$ is reflexive. Side-Angle-Side ⇒ SAS.',
        },
      },
      {
        id: 'tct4-cpctc-mc',
        type: 'multiple-choice' as const,
        content: `**Using CPCTC** 🎯`,
        exercise: {
          questions: [
            {
              question: 'After proving $\\triangle ABD \\cong \\triangle CBD$, you conclude $\\angle A \\cong \\angle C$. What justifies this final step?',
              options: ['CPCTC', 'SAS', 'Reflexive Property', 'The Triangle Angle Sum'],
              correctAnswer: 0,
              explanation: 'Once the triangles are congruent, every pair of corresponding parts is congruent — that rule is CPCTC.',
            },
            {
              question: 'Which is the correct *order* of reasoning in a typical congruence proof?',
              options: [
                'Match three parts → cite a congruence theorem → use CPCTC for the part you want',
                'Use CPCTC → then cite SSS → then match parts',
                'Cite AAA → then CPCTC',
                'Use CPCTC first, then prove the triangles congruent',
              ],
              correctAnswer: 0,
              explanation: 'You must prove the triangles congruent (via SSS/SAS/ASA/AAS/HL) *before* CPCTC can give you a specific corresponding part.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'triangle-congruence-theorems-geo',
    sections: [
      {
        id: 'tct5-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Congruence Theorems

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You now have all five theorems plus CPCTC. Let's put them together and finish with an Exit Quiz.`,
      },
      {
        id: 'tct5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Theorem | What you must match | Works for |
|---------|--------------------|-----------|
| **SSS** | all three sides | any triangle |
| **SAS** | two sides + the *included* angle | any triangle |
| **ASA** | two angles + the *included* side | any triangle |
| **AAS** | two angles + a *non-included* side | any triangle |
| **HL** | hypotenuse + one leg | **right** triangles only |

> ⚠️ **Not theorems:** **SSA** (ambiguous — two possible triangles) and **AAA** (same shape, possibly different size ⇒ only *similar*).

> 🔑 **Proof game plan:** match three correct parts → name the theorem → invoke **CPCTC** for the side or angle you actually need.`,
      },
      {
        id: 'tct5-classify-drop',
        type: 'dropdown-select' as const,
        content: `**Name That Theorem** 🔽

Choose the theorem each set of marks proves (or "none").`,
        exercise: {
          dropdowns: [
            { label: 'Two angles and the side *between* them match:', options: ['ASA', 'AAS', 'SAS'] },
            { label: 'Two sides and the angle *opposite* one of them match:', options: ['None (SSA is ambiguous)', 'SAS', 'HL'] },
            { label: 'Right triangles; hypotenuses and one pair of legs match:', options: ['HL', 'SSA', 'SAS'] },
            { label: 'Two angles and a side *not* between them match:', options: ['AAS', 'ASA', 'SSS'] },
          ],
          correctAnswers: ['ASA', 'None (SSA is ambiguous)', 'HL', 'AAS'],
          hint1: 'Watch whether the side or angle is *included* (between) or *not included*.',
          hint2: 'Side between two angles ⇒ ASA. Side not between ⇒ AAS.',
          hint3: 'A non-included angle with two sides is SSA — not valid. Hypotenuse + leg in right triangles is HL.',
          explanation: 'Included side ⇒ ASA. Two sides + opposite (non-included) angle ⇒ SSA, not valid. Right triangles with hypotenuse + leg ⇒ HL. Two angles + non-included side ⇒ AAS.',
        },
      },
      {
        id: 'tct5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In $\\triangle ABC$ and $\\triangle DEF$: $AB = DE$, $\\angle A = \\angle D$, and $AC = DF$. Which theorem proves congruence?',
              options: ['SAS', 'ASA', 'AAS', 'None'],
              correctAnswer: 0,
              explanation: '$\\angle A$ is included between sides $\\overline{AB}$ and $\\overline{AC}$ (it sits at vertex $A$, shared by both). Two sides + included angle = SAS.',
            },
            {
              question: 'Two triangles have all three pairs of angles congruent but no known sides. What can you conclude?',
              options: [
                'They are similar, but not necessarily congruent',
                'They are congruent by AAA',
                'They are congruent by ASA',
                'Nothing can be said',
              ],
              correctAnswer: 0,
              explanation: 'AAA fixes shape, not size, so the triangles are *similar*. Without a matching side you cannot claim congruence.',
            },
          ],
        },
      },
      {
        id: 'tct5-measure-drill',
        type: 'input-boxes' as const,
        content: `**Solve for the Unknowns** 🧮

$\\triangle ABC \\cong \\triangle PQR$. From the diagram, $AB = 2x + 1$ and its corresponding side $PQ = 11$. Also $m\\angle C = 4y$ corresponds to $m\\angle R = 72°$.

**1)** Solve for $x$. *(Hint: $2x + 1 = 11$)*
**2)** Solve for $y$. *(Hint: $4y = 72$)*`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '18'],
          hint1: 'Corresponding parts are equal: set $AB = PQ$ and $m\\angle C = m\\angle R$.',
          hint2: '$2x + 1 = 11 \\Rightarrow 2x = 10 \\Rightarrow x = 5$.',
          hint3: '$4y = 72 \\Rightarrow y = 18$.',
          explanation: '$2x+1 = 11 \\Rightarrow x = 5$. $4y = 72 \\Rightarrow y = 18$. Congruent triangles force corresponding measures to be equal.',
        },
      },
      {
        id: 'tct5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which combination is NOT enough to prove two triangles congruent?',
              options: ['AAA', 'SSS', 'ASA', 'HL (in right triangles)'],
              correctAnswer: 0,
              explanation: 'AAA guarantees the same shape but not the same size, so it proves *similarity*, not congruence. SSS, ASA, and HL are all valid.',
            },
            {
              question: 'You proved $\\triangle ABC \\cong \\triangle XYZ$. Which statement must be true?',
              options: ['$\\overline{BC} \\cong \\overline{YZ}$', '$\\overline{BC} \\cong \\overline{XY}$', '$\\angle A \\cong \\angle Z$', '$\\overline{AB} \\cong \\overline{YZ}$'],
              correctAnswer: 0,
              explanation: 'Read the order $A\\to X$, $B\\to Y$, $C\\to Z$. So $\\overline{BC}$ corresponds to $\\overline{YZ}$, and by CPCTC they are congruent.',
            },
            {
              question: 'In two right triangles, the hypotenuses are congruent and one pair of legs is congruent. The triangles are congruent by:',
              options: ['HL', 'SSA', 'AAS', 'AAA'],
              correctAnswer: 0,
              explanation: 'Hypotenuse + one leg in two right triangles is precisely the HL Theorem; the Pythagorean Theorem forces the remaining leg to match.',
            },
          ],
        },
      },
    ],
  },
]
