import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Angle Relationships (Geometry).
 * Registry key: 'angle-relationships-geometry' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'angle-relationships-geometry',
    sections: [
      {
        id: 'arg1-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 1 of 5 — Naming & Classifying Angles**

---

### Topics in This Part

| Section |
|---------|
| What Is an Angle? Naming Angles |
| Classifying by Size (acute, right, obtuse, straight, reflex) |
| Adjacent Angles & Angle Bisectors |

> 🔑 **Key Concept:** Almost every geometry problem about angles comes down to the same idea — *angles that go together add up to a known total* (often $90°$, $180°$, or $360°$). Part 1 builds the vocabulary so the rest of the lesson is just careful arithmetic and algebra.`,
      },
      {
        id: 'arg1-naming',
        type: 'text' as const,
        content: `## What Is an Angle?

An **angle** is formed by two **rays** (the *sides*) that share a common endpoint called the **vertex**. We measure the "opening" between the rays in **degrees**, written with the symbol $°$.

### How to Name an Angle

| Notation | When to use it | Example |
|----------|----------------|---------|
| $\\angle B$ | Only **one** angle is at vertex $B$ | $\\angle B$ |
| $\\angle ABC$ | Several angles share vertex $B$ — the **middle letter is always the vertex** | $\\angle ABC$ |
| $\\angle 1$ | A number is labeled inside the angle | $\\angle 1$ |

> ⚠️ **Common slip-up:** In three-letter names like $\\angle ABC$, the *middle* letter ($B$) is the vertex — **not** the first letter. $\\angle ABC$ and $\\angle CBA$ name the **same** angle.`,
      },
      {
        id: 'arg1-naming-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the name $\\angle PQR$, which point is the vertex?',
              options: ['$Q$', '$P$', '$R$', 'You cannot tell'],
              correctAnswer: 0,
              explanation: 'The **middle** letter of a three-letter angle name is always the vertex, so the vertex is $Q$.',
            },
            {
              question: 'Which name refers to the SAME angle as $\\angle XYZ$?',
              options: ['$\\angle ZYX$', '$\\angle YXZ$', '$\\angle XZY$', '$\\angle YZX$'],
              correctAnswer: 0,
              explanation: 'Reversing the outer letters keeps the same vertex in the middle, so $\\angle ZYX = \\angle XYZ$. The others move $Y$ out of the middle, changing the vertex.',
            },
          ],
        },
      },
      {
        id: 'arg1-classify-text',
        type: 'text' as const,
        content: `## Classifying Angles by Size

Every angle measure $m$ falls into exactly one category:

| Type | Measure | Picture cue |
|------|---------|-------------|
| **Acute** | $0° < m < 90°$ | sharp, narrow |
| **Right** | $m = 90°$ | square corner $\\llcorner$ |
| **Obtuse** | $90° < m < 180°$ | wide, open |
| **Straight** | $m = 180°$ | a straight line |
| **Reflex** | $180° < m < 360°$ | bends past straight |

> 💡 **Memory hook:** *"a-**cute** little angle"* is small ($< 90°$); an **obtuse** angle is "blunt" and wide ($> 90°$). A **right** angle is exactly $90°$ — the corner of this page.`,
      },
      {
        id: 'arg1-classify-check',
        type: 'dropdown-select' as const,
        content: `**Classify Each Angle** 🔽

Match each measure to its type.`,
        exercise: {
          dropdowns: [
            { label: 'A $35°$ angle is:', options: ['Acute', 'Right', 'Obtuse', 'Reflex'] },
            { label: 'A $90°$ angle is:', options: ['Right', 'Acute', 'Obtuse', 'Straight'] },
            { label: 'A $145°$ angle is:', options: ['Obtuse', 'Acute', 'Right', 'Reflex'] },
            { label: 'A $200°$ angle is:', options: ['Reflex', 'Obtuse', 'Straight', 'Right'] },
          ],
          correctAnswers: ['Acute', 'Right', 'Obtuse', 'Reflex'],
          hint1: 'Acute $< 90°$, right $= 90°$, obtuse is between $90°$ and $180°$.',
          hint2: '$145°$ is between $90°$ and $180°$, so it is obtuse.',
          hint3: 'Anything strictly between $180°$ and $360°$ is reflex; $200°$ qualifies.',
          explanation: '$35°$ acute, $90°$ right, $145°$ obtuse (between $90$ and $180$), $200°$ reflex (between $180$ and $360$).',
        },
      },
      {
        id: 'arg1-adjacent-text',
        type: 'text' as const,
        content: `## Adjacent Angles & Angle Bisectors

Two angles are **adjacent** when they:
1. share the **same vertex**, **and**
2. share a **common side**, **and**
3. do **not overlap** (their interiors don't share space).

When two adjacent angles fit together, their measures **add**:

$$m\\angle ABD + m\\angle DBC = m\\angle ABC$$

An **angle bisector** is a ray that splits an angle into **two equal** adjacent angles. If ray $BD$ bisects $\\angle ABC$, then

$$m\\angle ABD = m\\angle DBC = \\tfrac{1}{2}\\, m\\angle ABC.$$

**Example:** A $70°$ angle is bisected. Each half is $\\dfrac{70°}{2} = 35°$.

> 🔑 **Key Idea:** "Bisect" means *cut into two equal parts*. So a bisector always **halves** the angle — and two halves add back to the whole.`,
      },
      {
        id: 'arg1-adjacent-drill',
        type: 'input-boxes' as const,
        content: `**Adjacent Angles & Bisectors** 🧮

Use "adjacent angles add" and "a bisector halves." Enter just the number of degrees (no $°$ symbol).

**1)** $\\angle ABD = 28°$ and $\\angle DBC = 47°$ are adjacent. Find $\\angle ABC$.
**2)** Ray $BD$ bisects a $116°$ angle. Find the measure of each half.
**3)** Ray $BD$ bisects $\\angle ABC$, and $\\angle ABD = 24°$. Find the whole angle $\\angle ABC$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '58', '48'],
          hint1: 'Adjacent angles add: $28 + 47$.',
          hint2: 'A bisector halves: $116 \\div 2$.',
          hint3: 'If one half is $24°$, the whole is twice that: $2 \\times 24$.',
          explanation: '1) $28 + 47 = 75°$.  2) $116 \\div 2 = 58°$.  3) the whole is $2 \\times 24 = 48°$.',
        },
      },
      {
        id: 'arg1-wrap',
        type: 'text' as const,
        content: `## Recap

You can now **name** angles (middle letter = vertex), **classify** them by size, and use the two workhorse facts: *adjacent angles add* and *a bisector halves*.

Next we meet the two most important pairs in all of geometry — **complementary** ($90°$) and **supplementary** ($180°$) angles — and start solving for unknowns.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'angle-relationships-geometry',
    sections: [
      {
        id: 'arg2-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 2 of 5 — Complementary & Supplementary Angles**

---

> 🔑 **The Two Totals to Memorize:**
> - **Complementary** angles add to $90°$ — think *"**C**orner"* (a right angle).
> - **Supplementary** angles add to $180°$ — think *"**S**traight"* (a straight line).`,
      },
      {
        id: 'arg2-defs',
        type: 'text' as const,
        content: `## Definitions

| Relationship | Sum | The "partner" angle |
|--------------|-----|---------------------|
| **Complementary** | $90°$ | the **complement** of $x$ is $90° - x$ |
| **Supplementary** | $180°$ | the **supplement** of $x$ is $180° - x$ |

The two angles do **not** have to be next to each other — only their **measures** matter.

### Worked Example: complement and supplement of $58°$

- Complement: $90° - 58° = 32°$
- Supplement: $180° - 58° = 122°$

> 💡 **Memory hook:** **C** comes before **S** in the alphabet, and $90$ comes before $180$. So **C**omplementary → $90°$, **S**upplementary → $180°$.`,
      },
      {
        id: 'arg2-cs-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two angles are complementary. One measures $35°$. The other measures:',
              options: ['$55°$', '$65°$', '$145°$', '$45°$'],
              correctAnswer: 0,
              explanation: 'Complementary angles add to $90°$, so the other is $90° - 35° = 55°$.',
            },
            {
              question: 'The supplement of a $73°$ angle is:',
              options: ['$107°$', '$17°$', '$83°$', '$287°$'],
              correctAnswer: 0,
              explanation: 'Supplementary angles add to $180°$, so $180° - 73° = 107°$.',
            },
            {
              question: 'Can a $120°$ angle have a complement?',
              options: ['No — a complement would be negative ($90 - 120 < 0$)', 'Yes, its complement is $30°$', 'Yes, its complement is $60°$', 'Yes, its complement is $-30°$'],
              correctAnswer: 0,
              explanation: 'A complement must be positive, and $90° - 120° = -30°$ is impossible. Only angles **less than $90°$** have a complement. (It does have a supplement: $60°$.)',
            },
          ],
        },
      },
      {
        id: 'arg2-linear-pair',
        type: 'text' as const,
        content: `## Linear Pairs Are Always Supplementary

When two adjacent angles together form a **straight line**, they make a **linear pair**. Because a straight angle is $180°$:

$$\\text{Linear Pair Postulate:}\\quad m\\angle 1 + m\\angle 2 = 180°$$

### Worked Example

$\\angle 1$ and $\\angle 2$ form a linear pair and $m\\angle 1 = 130°$. Then

$$m\\angle 2 = 180° - 130° = 50°.$$

> ⚠️ **Don't mix them up!** A linear pair (angles on a straight line) is **supplementary** ($180°$), *not* complementary. Complementary pairs make a right-angle corner, not a straight line.`,
      },
      {
        id: 'arg2-find-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Angle** 🧮

Enter just the number of degrees (no $°$ symbol).

**1)** Find the complement of $31°$.
**2)** Find the supplement of $31°$.
**3)** $\\angle 1$ and $\\angle 2$ form a linear pair. If $\\angle 1 = 142°$, find $\\angle 2$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['59', '149', '38'],
          hint1: 'Complement: $90 - 31$.',
          hint2: 'Supplement: $180 - 31$.',
          hint3: 'A linear pair is supplementary: $180 - 142$.',
          explanation: '1) $90 - 31 = 59°$.  2) $180 - 31 = 149°$.  3) $180 - 142 = 38°$.',
        },
      },
      {
        id: 'arg2-algebra-text',
        type: 'text' as const,
        content: `## Setting Up Equations

When angles are given as **expressions** in $x$, write the relationship as an equation, then solve.

### Worked Example: complementary angles $2x$ and $3x$

They add to $90°$:

$$2x + 3x = 90 \\;\\Rightarrow\\; 5x = 90 \\;\\Rightarrow\\; x = 18.$$

So the angles are $2(18) = 36°$ and $3(18) = 54°$, and indeed $36 + 54 = 90$ ✓.

### Worked Example: supplementary angles $4x$ and $5x$

$$4x + 5x = 180 \\;\\Rightarrow\\; 9x = 180 \\;\\Rightarrow\\; x = 20.$$

The angles are $80°$ and $100°$, and $80 + 100 = 180$ ✓.

> 🔑 **The recipe:** (1) decide the total ($90$ or $180$), (2) add the expressions and set equal to that total, (3) solve for $x$, (4) plug back to get the actual angles.`,
      },
      {
        id: 'arg2-algebra-check',
        type: 'dropdown-select' as const,
        content: `**Build the Equation** 🔽

Two **supplementary** angles measure $(3x)°$ and $(2x + 40)°$.`,
        exercise: {
          dropdowns: [
            { label: 'Correct equation:', options: ['$3x + 2x + 40 = 180$', '$3x + 2x + 40 = 90$', '$3x = 2x + 40$', '$3x + 2x + 40 = 360$'] },
            { label: 'Solve for $x$:', options: ['$x = 28$', '$x = 22$', '$x = 10$', '$x = 44$'] },
            { label: 'The two angles are:', options: ['$84°$ and $96°$', '$60°$ and $120°$', '$66°$ and $114°$', '$90°$ and $90°$'] },
          ],
          correctAnswers: ['$3x + 2x + 40 = 180$', '$x = 28$', '$84°$ and $96°$'],
          hint1: 'Supplementary means the two expressions add to $180$.',
          hint2: '$5x + 40 = 180 \\Rightarrow 5x = 140 \\Rightarrow x = 28$.',
          hint3: '$3x = 3(28) = 84°$ and $2x + 40 = 56 + 40 = 96°$; check $84 + 96 = 180$ ✓.',
          explanation: 'Set $3x + (2x + 40) = 180 \\Rightarrow 5x + 40 = 180 \\Rightarrow x = 28$. Angles: $84°$ and $96°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'angle-relationships-geometry',
    sections: [
      {
        id: 'arg3-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 3 of 5 — Vertical Angles & Angles Around a Point**

---

> 🔑 **Two new facts:**
> - **Vertical angles** (opposite angles at an intersection) are **congruent** (equal).
> - Angles that fill all the way **around a point** add to $360°$.`,
      },
      {
        id: 'arg3-vertical-text',
        type: 'text' as const,
        content: `## Vertical Angles

When two lines **cross**, they create **two pairs** of **vertical angles** — the angles that sit *directly across* from each other.

> 🔑 **Vertical Angles Theorem:** Vertical angles are always **congruent** (equal in measure).

Why? Each pair of vertical angles shares a **linear pair** with the same neighbor. If $\\angle 1$ and $\\angle 2$ form a linear pair, and $\\angle 2$ and $\\angle 3$ also form a linear pair, then both equal $180° - m\\angle 2$, so $\\angle 1 = \\angle 3$.

### Worked Example

Two lines cross. One angle is $52°$.

- Its **vertical** angle (directly across) is also $52°$.
- The **two other** angles are each $180° - 52° = 128°$ (linear pairs with the $52°$).

The four angles are $52°,\\,128°,\\,52°,\\,128°$ — and they sum to $360°$ ✓.`,
      },
      {
        id: 'arg3-vertical-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two lines intersect. One of the four angles is $67°$. The angle vertical to it (directly across) is:',
              options: ['$67°$', '$113°$', '$23°$', '$90°$'],
              correctAnswer: 0,
              explanation: 'Vertical angles are congruent, so the angle across is also $67°$.',
            },
            {
              question: 'Two lines intersect, making a $67°$ angle. Each angle ADJACENT to it (next to it on a line) measures:',
              options: ['$113°$', '$67°$', '$23°$', '$293°$'],
              correctAnswer: 0,
              explanation: 'An adjacent angle forms a linear pair with the $67°$, so it is $180° - 67° = 113°$.',
            },
          ],
        },
      },
      {
        id: 'arg3-vertical-algebra',
        type: 'text' as const,
        content: `## Vertical Angles in Algebra

Because vertical angles are **equal**, you set their expressions equal to each other.

### Worked Example

Vertical angles measure $(3x + 10)°$ and $(5x - 20)°$. Since they're equal:

$$3x + 10 = 5x - 20$$
$$10 + 20 = 5x - 3x$$
$$30 = 2x \\;\\Rightarrow\\; x = 15$$

Each angle is $3(15) + 10 = 55°$ (and $5(15) - 20 = 55°$ ✓).

> ⚠️ **Watch the relationship!** Vertical angles are **equal** (set the expressions *equal*). A linear pair is **supplementary** (set the expressions *equal to $180$*). Using the wrong one is the #1 mistake here.`,
      },
      {
        id: 'arg3-vertical-drill',
        type: 'input-boxes' as const,
        content: `**Vertical-Angle Algebra** 🧮

Enter just the number (no $°$ symbol).

**1)** Vertical angles are $(2x + 15)°$ and $(4x - 25)°$. Find $x$.
**2)** Using that $x$, find the measure of each vertical angle.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['20', '55'],
          hint1: 'Vertical angles are equal: $2x + 15 = 4x - 25$.',
          hint2: '$15 + 25 = 4x - 2x \\Rightarrow 40 = 2x \\Rightarrow x = 20$.',
          hint3: 'Plug in: $2(20) + 15 = 55°$ (check $4(20) - 25 = 55°$ ✓).',
          explanation: '$2x + 15 = 4x - 25 \\Rightarrow 40 = 2x \\Rightarrow x = 20$. Each angle $= 2(20) + 15 = 55°$.',
        },
      },
      {
        id: 'arg3-around-text',
        type: 'text' as const,
        content: `## Angles Around a Point

The angles that completely surround a single point make one full turn:

$$\\text{angles around a point sum to } 360°.$$

### Worked Example

Three angles meet at a point: $120°$, $95°$, and an unknown angle $x$. Then

$$120 + 95 + x = 360 \\;\\Rightarrow\\; 215 + x = 360 \\;\\Rightarrow\\; x = 145°.$$

> 💡 **The "magic totals" so far:** angles on a **line** → $180°$; angles **around a point** → $360°$; a **right angle** → $90°$. Spotting which total applies is half the battle.`,
      },
      {
        id: 'arg3-around-drill',
        type: 'input-boxes' as const,
        content: `**Angles Around a Point** 🧮

Enter just the number of degrees.

**1)** Four angles around a point are $90°$, $110°$, $70°$, and $x$. Find $x$.
**2)** Three angles around a point are $(2x)°$, $(3x)°$, and $(x)°$. Find $x$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['90', '60'],
          hint1: 'They sum to $360°$: $90 + 110 + 70 + x = 360$.',
          hint2: '$270 + x = 360 \\Rightarrow x = 90$.',
          hint3: 'For #2: $2x + 3x + x = 6x = 360 \\Rightarrow x = 60$.',
          explanation: '1) $90 + 110 + 70 = 270$, so $x = 360 - 270 = 90°$.  2) $6x = 360 \\Rightarrow x = 60$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'angle-relationships-geometry',
    sections: [
      {
        id: 'arg4-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 4 of 5 — Parallel Lines & a Transversal**

---

> 🔑 **The Big Setup:** When a **transversal** (a line that crosses two others) cuts **parallel** lines, it creates **8 angles** with beautiful patterns. Every one of those angles is either **equal to** or **supplementary to** any other.`,
      },
      {
        id: 'arg4-types-text',
        type: 'text' as const,
        content: `## The Four Named Pairs

A transversal cutting two **parallel** lines creates these special pairs:

| Pair | Where they sit | Relationship (parallel lines) |
|------|----------------|-------------------------------|
| **Corresponding** | same position at each intersection (e.g. both top-left) | **equal** |
| **Alternate Interior** | between the lines, opposite sides of the transversal | **equal** |
| **Alternate Exterior** | outside the lines, opposite sides of the transversal | **equal** |
| **Co-Interior** (same-side interior) | between the lines, **same** side of the transversal | **supplementary** ($180°$) |

> 🔑 **The shortcut that never fails:** With parallel lines, all 8 angles are one of just **two** sizes. Equal-looking angles **are** equal; the other size is its supplement. If one angle is $70°$, every angle is either $70°$ or $110°$.`,
      },
      {
        id: 'arg4-identify-check',
        type: 'dropdown-select' as const,
        content: `**Name the Relationship** 🔽

A transversal crosses two **parallel** lines. Choose how each pair relates.`,
        exercise: {
          dropdowns: [
            { label: 'Corresponding angles are:', options: ['Equal', 'Supplementary', 'Complementary', 'Unrelated'] },
            { label: 'Alternate interior angles are:', options: ['Equal', 'Supplementary', 'Complementary', 'Unrelated'] },
            { label: 'Co-interior (same-side interior) angles are:', options: ['Supplementary', 'Equal', 'Complementary', 'Unrelated'] },
            { label: 'Alternate exterior angles are:', options: ['Equal', 'Supplementary', 'Complementary', 'Unrelated'] },
          ],
          correctAnswers: ['Equal', 'Equal', 'Supplementary', 'Equal'],
          hint1: 'Corresponding, alternate interior, and alternate exterior angles are all **equal** with parallel lines.',
          hint2: 'Only the **same-side** (co-interior) pair is supplementary, summing to $180°$.',
          hint3: '"Alternate" (opposite sides) → equal; "co-/same-side interior" → supplementary.',
          explanation: 'With parallel lines: corresponding = equal, alternate interior = equal, alternate exterior = equal, co-interior (same-side) = supplementary ($180°$).',
        },
      },
      {
        id: 'arg4-worked-text',
        type: 'text' as const,
        content: `## Worked Example

Lines $\\ell$ and $m$ are parallel, cut by transversal $t$. One angle measures $70°$. Find the rest using the two-size rule.

- The angle **corresponding** to it: $70°$ (equal).
- The **alternate interior** angle: $70°$ (equal).
- A **co-interior** angle (same side, between the lines): $180° - 70° = 110°$.
- The angle forming a **linear pair** with the $70°$: $180° - 70° = 110°$.

So every one of the 8 angles is either $70°$ or $110°$, and $70 + 110 = 180$ ✓.

### Worked Example with Algebra

Two **alternate interior** angles are $(2x + 30)°$ and $(4x - 10)°$. Alternate interior angles are **equal**:

$$2x + 30 = 4x - 10 \\;\\Rightarrow\\; 40 = 2x \\;\\Rightarrow\\; x = 20.$$

Each angle is $2(20) + 30 = 70°$ (and $4(20) - 10 = 70°$ ✓).`,
      },
      {
        id: 'arg4-mc-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two parallel lines are cut by a transversal. A pair of corresponding angles measures $(x)°$ and $115°$. What is $x$?',
              options: ['$115$', '$65$', '$180$', '$57.5$'],
              correctAnswer: 0,
              explanation: 'Corresponding angles are equal when the lines are parallel, so $x = 115$.',
            },
            {
              question: 'Co-interior (same-side interior) angles measure $(x)°$ and $50°$. Find $x$.',
              options: ['$130$', '$50$', '$40$', '$90$'],
              correctAnswer: 0,
              explanation: 'Co-interior angles are supplementary, so $x = 180° - 50° = 130°$.',
            },
          ],
        },
      },
      {
        id: 'arg4-algebra-drill',
        type: 'input-boxes' as const,
        content: `**Transversal Algebra** 🧮

Two parallel lines are cut by a transversal. Enter just the number.

**1)** Alternate exterior angles are $(5x)°$ and $(3x + 24)°$. Find $x$.
**2)** Co-interior angles are $(2x)°$ and $(x + 30)°$. Find $x$.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '50'],
          hint1: 'Alternate exterior angles are **equal**: $5x = 3x + 24$.',
          hint2: '#1: $5x - 3x = 24 \\Rightarrow 2x = 24 \\Rightarrow x = 12$.',
          hint3: '#2 co-interior are **supplementary**: $2x + (x + 30) = 180 \\Rightarrow 3x = 150 \\Rightarrow x = 50$.',
          explanation: '1) Equal: $5x = 3x + 24 \\Rightarrow x = 12$.  2) Supplementary: $3x + 30 = 180 \\Rightarrow x = 50$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'angle-relationships-geometry',
    sections: [
      {
        id: 'arg5-intro',
        type: 'text' as const,
        content: `# 📐 Angle Relationships

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You now know every core angle relationship. The skill that separates strong geometry students is **diagnosing which relationship applies** before computing. Let's put it all together.`,
      },
      {
        id: 'arg5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Relationship | What's true | Set up |
|--------------|-------------|--------|
| Complementary | sum $= 90°$ | $a + b = 90$ |
| Supplementary / Linear pair | sum $= 180°$ | $a + b = 180$ |
| Vertical angles | **equal** | $a = b$ |
| Angle bisector | each half **equal** | each $= \\tfrac{1}{2}$ whole |
| Around a point | sum $= 360°$ | $a + b + c + \\dots = 360$ |
| Corresponding / Alt. interior / Alt. exterior | **equal** | $a = b$ |
| Co-interior (same-side) | supplementary | $a + b = 180$ |

> ⚠️ **The decision that trips people up:** is the pair **equal** or does it **add to $180°$**? Vertical, corresponding, and alternate angles are *equal*; linear pairs and co-interior angles *sum to $180°$*.`,
      },
      {
        id: 'arg5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An angle is $20°$ more than its complement. Find the larger angle.',
              options: ['$55°$', '$35°$', '$70°$', '$80°$'],
              correctAnswer: 0,
              explanation: 'Let the smaller be $x$; then $x + (x + 20) = 90 \\Rightarrow 2x = 70 \\Rightarrow x = 35$. The larger is $35 + 20 = 55°$.',
            },
            {
              question: 'Two supplementary angles are in the ratio $1:3$. The larger angle is:',
              options: ['$135°$', '$45°$', '$120°$', '$60°$'],
              correctAnswer: 0,
              explanation: 'Let the angles be $x$ and $3x$: $x + 3x = 180 \\Rightarrow 4x = 180 \\Rightarrow x = 45$. The larger is $3(45) = 135°$.',
            },
            {
              question: 'Two lines intersect. Vertical angles are $(4x)°$ and $(2x + 50)°$. Find the measure of each.',
              options: ['$100°$', '$25°$', '$130°$', '$80°$'],
              correctAnswer: 0,
              explanation: 'Vertical angles are equal: $4x = 2x + 50 \\Rightarrow 2x = 50 \\Rightarrow x = 25$. Each angle is $4(25) = 100°$.',
            },
          ],
        },
      },
      {
        id: 'arg5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

Enter just the number of degrees.

**1)** $\\angle A$ and $\\angle B$ are complementary. $\\angle A = 4x$ and $\\angle B = 2x + 30$. Find $\\angle A$.
**2)** Parallel lines are cut by a transversal; a co-interior pair is $112°$ and $y$. Find $y$.
**3)** Three angles around a point are $130°$, $85°$, and $z$. Find $z$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['40', '68', '145'],
          hint1: '#1: $4x + (2x + 30) = 90 \\Rightarrow 6x = 60 \\Rightarrow x = 10$, so $\\angle A = 4(10)$.',
          hint2: '#2: co-interior angles are supplementary: $180 - 112$.',
          hint3: '#3: around a point sums to $360$: $360 - 130 - 85$.',
          explanation: '1) $6x + 30 = 90 \\Rightarrow x = 10 \\Rightarrow \\angle A = 40°$.  2) $180 - 112 = 68°$.  3) $360 - 215 = 145°$.',
        },
      },
      {
        id: 'arg5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The complement of a $42°$ angle is:',
              options: ['$48°$', '$138°$', '$58°$', '$42°$'],
              correctAnswer: 0,
              explanation: 'Complementary angles add to $90°$: $90° - 42° = 48°$.',
            },
            {
              question: 'A linear pair has angles $(2x)°$ and $(3x + 30)°$. Find $x$.',
              options: ['$30$', '$36$', '$40$', '$45$'],
              correctAnswer: 0,
              explanation: 'A linear pair is supplementary: $2x + 3x + 30 = 180 \\Rightarrow 5x = 150 \\Rightarrow x = 30$.',
            },
            {
              question: 'Parallel lines are cut by a transversal. Alternate interior angles are $(3x + 5)°$ and $(x + 45)°$. Each angle measures:',
              options: ['$65°$', '$20°$', '$45°$', '$25°$'],
              correctAnswer: 0,
              explanation: 'Alternate interior angles are equal: $3x + 5 = x + 45 \\Rightarrow 2x = 40 \\Rightarrow x = 20$. Each angle is $3(20) + 5 = 65°$.',
            },
          ],
        },
      },
    ],
  },
]
