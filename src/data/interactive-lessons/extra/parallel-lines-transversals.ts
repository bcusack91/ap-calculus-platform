import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Parallel Lines and Transversals (Geometry).
 * Registry key: 'parallel-lines-transversals' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'parallel-lines-transversals',
    sections: [
      {
        id: 'plt1-intro',
        type: 'text' as const,
        content: `# 🛤️ Parallel Lines and Transversals

**Part 1 of 5 — The Setup: Lines, Transversals & the Eight Angles**

---

### Topics in This Part

| Section |
|---------|
| Parallel Lines and What a Transversal Is |
| Naming the Eight Angles |
| Interior vs. Exterior, Same Side vs. Alternate |

> 🔑 **Key Concept:** When a single line (a *transversal*) crosses two **parallel** lines, it creates **eight angles** — but there are really only **two distinct sizes**. Learn which angles match and which add to $180°$, and every problem in this unit becomes simple arithmetic or algebra.`,
      },
      {
        id: 'plt1-parallel',
        type: 'text' as const,
        content: `## Parallel Lines and Transversals

Two lines are **parallel** if they lie in the same plane and **never meet**, no matter how far they are extended. We write $\\overleftrightarrow{m} \\parallel \\overleftrightarrow{n}$ and often mark them with matching arrowheads ($\\rightarrow$).

A **transversal** is a line that crosses two (or more) other lines at **two different points**.

> 💡 The transversal is the "crossing" line. The two lines it cuts may or may not be parallel — but the magic only happens when they *are* parallel.

When a transversal cuts two lines, it forms **two intersections**, and each intersection has **four angles**, giving **eight angles** in total. We usually number them $1$ through $8$:

| Top intersection | Bottom intersection |
|------------------|---------------------|
| $\\angle 1 \\;\\; \\angle 2$ | $\\angle 5 \\;\\; \\angle 6$ |
| $\\angle 3 \\;\\; \\angle 4$ | $\\angle 7 \\;\\; \\angle 8$ |

Here $\\angle 1, \\angle 2, \\angle 3, \\angle 4$ surround the upper intersection and $\\angle 5, \\angle 6, \\angle 7, \\angle 8$ surround the lower one.`,
      },
      {
        id: 'plt1-region',
        type: 'text' as const,
        content: `## Interior, Exterior, Same Side & Alternate

Two pieces of vocabulary unlock every angle name:

**Interior vs. Exterior** — is the angle *between* the two parallel lines or *outside* them?
- **Interior** angles lie *between* the parallel lines: $\\angle 3, \\angle 4, \\angle 5, \\angle 6$.
- **Exterior** angles lie *outside* the parallel lines: $\\angle 1, \\angle 2, \\angle 7, \\angle 8$.

**Same side vs. Alternate** — relative to the transversal:
- **Same-side** (or *consecutive*) angles are on the **same** side of the transversal.
- **Alternate** angles are on **opposite** sides of the transversal.

> 🔑 **Mantra:** First ask *"inside or outside the parallel lines?"* (interior/exterior), then ask *"same side or opposite sides of the transversal?"* (same-side/alternate). Those two answers name every angle pair in this unit.`,
      },
      {
        id: 'plt1-twovalues',
        type: 'text' as const,
        content: `## Just Two Values

Here is the payoff hiding in those eight angles. When the lines are parallel, any angle you can draw is either:

- **Acute partner** — all four "narrow" angles are equal to each other, **or**
- **Obtuse partner** — all four "wide" angles are equal to each other,

and an acute angle plus an obtuse angle always make $180°$ (a straight line).

> 💡 So an answer like "$\\angle 1 = 73°$" instantly tells you the other seven angles: four of them are $73°$ and four are $180° - 73° = 107°$.`,
      },
      {
        id: 'plt1-vocab-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A line that crosses two other lines at two different points is called a:',
              options: ['transversal', 'bisector', 'perpendicular', 'tangent'],
              correctAnswer: 0,
              explanation: 'A transversal is exactly a line that intersects two (or more) other lines at distinct points, creating the eight angles we study in this unit.',
            },
            {
              question: 'Using the standard numbering, which group lists only the INTERIOR angles (those between the two parallel lines)?',
              options: ['$\\angle 3, \\angle 4, \\angle 5, \\angle 6$', '$\\angle 1, \\angle 2, \\angle 7, \\angle 8$', '$\\angle 1, \\angle 3, \\angle 5, \\angle 7$', '$\\angle 2, \\angle 4, \\angle 6, \\angle 8$'],
              correctAnswer: 0,
              explanation: 'Interior angles sit between the parallel lines. With the top intersection holding $\\angle 1$–$\\angle 4$ and the bottom holding $\\angle 5$–$\\angle 8$, the angles between the lines are $\\angle 3, \\angle 4$ (bottom of the top intersection) and $\\angle 5, \\angle 6$ (top of the bottom intersection).',
            },
          ],
        },
      },
      {
        id: 'plt1-classify-bridge',
        type: 'text' as const,
        content: `## Try the Two-Question Test

Run each angle through the test from above: **is it inside or outside the parallel lines?** That single question sorts every angle into *interior* or *exterior*.`,
      },
      {
        id: 'plt1-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify Each Angle** 🔽

Using the numbering where $\\angle 1, \\angle 2, \\angle 3, \\angle 4$ surround the **top** intersection and $\\angle 5, \\angle 6, \\angle 7, \\angle 8$ surround the **bottom** intersection, decide whether each angle is interior or exterior.`,
        exercise: {
          dropdowns: [
            { label: '$\\angle 1$ (top-left, above both lines) is:', options: ['Interior', 'Exterior'] },
            { label: '$\\angle 4$ (just below the top line) is:', options: ['Interior', 'Exterior'] },
            { label: '$\\angle 6$ (just above the bottom line) is:', options: ['Interior', 'Exterior'] },
            { label: '$\\angle 8$ (below both lines) is:', options: ['Interior', 'Exterior'] },
          ],
          correctAnswers: ['Exterior', 'Interior', 'Interior', 'Exterior'],
          hint1: 'Interior = between the two parallel lines. Exterior = outside them.',
          hint2: '$\\angle 1$ is above the top line, so it is outside the pair of parallel lines.',
          hint3: '$\\angle 4$ and $\\angle 6$ sit in the strip between the lines; $\\angle 1$ and $\\angle 8$ sit outside it.',
          explanation: 'Interior angles ($\\angle 3,\\angle 4,\\angle 5,\\angle 6$) lie between the parallel lines; exterior angles ($\\angle 1,\\angle 2,\\angle 7,\\angle 8$) lie outside. So $\\angle 1$ and $\\angle 8$ are exterior, while $\\angle 4$ and $\\angle 6$ are interior.',
        },
      },
      {
        id: 'plt1-bridge',
        type: 'text' as const,
        content: `## How Many Angles, How Many Sizes?

Quick gut-check before you move on: counting the angles at *both* crossings and recalling the "two values" idea will keep your bookkeeping straight in every later part.`,
      },
      {
        id: 'plt1-count-input',
        type: 'input-boxes' as const,
        content: `**Count Them** 🧮

A transversal crosses two parallel lines.

**1)** How many angles are formed in total? $\\,?$
**2)** How many *different* angle measures can appear (when the lines are parallel)? $\\,?$
**3)** If one of those angles is $73°$, the other size is $\\,?$ degrees.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '2', '107'],
          hint1: 'Each of the two intersections contributes four angles.',
          hint2: 'With parallel lines every angle is one of just two sizes.',
          hint3: 'The two sizes are supplementary: $180° - 73° = 107°$.',
          explanation: '1) Two intersections × four angles each $= 8$.  2) Just $2$ distinct sizes.  3) $180° - 73° = 107°$.',
        },
      },
      {
        id: 'plt1-wrap',
        type: 'text' as const,
        content: `## Why This Matters

Everything in this lesson is built on a single fact you will prove in Part 2:

> 🔑 **The Big Idea:** When the two lines are **parallel**, the eight angles collapse into just **two values** — every angle is either equal to a chosen angle or is its **supplement** (the two add to $180°$).

So if you can find *one* angle, you can find *all eight*. The next part names the specific pairs and the rule each pair follows. Get the names down and the rest is automatic.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'parallel-lines-transversals',
    sections: [
      {
        id: 'plt2-intro',
        type: 'text' as const,
        content: `# 🛤️ Parallel Lines and Transversals

**Part 2 of 5 — The Angle Pair Relationships**

---

> 🔑 **The Idea:** Each angle pair has a name *and* a rule. When the lines are parallel, the rule is always one of two things: the angles are **equal (congruent)** or they are **supplementary (add to $180°$)**.`,
      },
      {
        id: 'plt2-pairs',
        type: 'text' as const,
        content: `## The Four Named Pairs

When a transversal crosses **parallel** lines, these are the pairs you must know:

| Pair | Location | Rule (parallel lines) |
|------|----------|------------------------|
| **Corresponding** | Same position at each intersection (e.g. both top-left) | **Equal** ✓ |
| **Alternate Interior** | Between the lines, opposite sides of the transversal | **Equal** ✓ |
| **Alternate Exterior** | Outside the lines, opposite sides of the transversal | **Equal** ✓ |
| **Co-Interior** (same-side interior) | Between the lines, *same* side of the transversal | **Supplementary** ($=180°$) |

> 💡 **Pattern:** Three of the four pairs are **equal**. The odd one out — **co-interior** (also called *consecutive interior* or *same-side interior*) — is the only pair that is **supplementary**.`,
      },
      {
        id: 'plt2-vertical',
        type: 'text' as const,
        content: `## Two Relationships That Work Even Without Parallel Lines

Before parallel lines even enter the picture, *any* two crossing lines create:

- **Vertical angles** — opposite each other at one intersection. **Always equal.** (e.g. $\\angle 1 = \\angle 4$)
- **Linear pairs** — adjacent angles forming a straight line. **Always supplementary.** ($\\angle 1 + \\angle 2 = 180°$)

These hold at *every* crossing, parallel or not. Combine them with the parallel-line pairs and you can chase any angle to any other.

### Worked Example: Finding All Eight

Suppose $\\angle 1 = 70°$ and the lines are parallel. Then:

$$\\angle 1 = \\angle 4 = \\angle 5 = \\angle 8 = 70° \\quad(\\text{the acute group})$$
$$\\angle 2 = \\angle 3 = \\angle 6 = \\angle 7 = 110° \\quad(\\text{the supplement, } 180° - 70°)$$

> 🔑 Every angle equals either $70°$ or $110°$ — exactly the "two values" promise from Part 1.`,
      },
      {
        id: 'plt2-name-mc',
        type: 'multiple-choice' as const,
        content: `**Name That Pair** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two angles lie BETWEEN the parallel lines on OPPOSITE sides of the transversal. They are:',
              options: ['Alternate interior angles', 'Corresponding angles', 'Co-interior angles', 'Alternate exterior angles'],
              correctAnswer: 0,
              explanation: 'Between the lines = interior; opposite sides of the transversal = alternate. So they are alternate interior angles, which are equal when the lines are parallel.',
            },
            {
              question: 'Which pair of angles is SUPPLEMENTARY (adds to $180°$) when the lines are parallel?',
              options: ['Co-interior (same-side interior) angles', 'Corresponding angles', 'Alternate interior angles', 'Alternate exterior angles'],
              correctAnswer: 0,
              explanation: 'Co-interior angles (same-side interior) are the only one of the four named pairs that is supplementary. The other three pairs are equal.',
            },
            {
              question: 'Angles in the SAME position at each intersection (e.g. both are the upper-right angle) are:',
              options: ['Corresponding angles', 'Vertical angles', 'Alternate exterior angles', 'Co-interior angles'],
              correctAnswer: 0,
              explanation: 'Matching position at each intersection defines corresponding angles. With parallel lines they are equal.',
            },
          ],
        },
      },
      {
        id: 'plt2-rule-bridge',
        type: 'text' as const,
        content: `## From Names to Rules

Naming the pair is only half the job — each name comes with a rule. Keep the **"three equal, one supplementary"** pattern in mind: corresponding, alternate interior, and alternate exterior are equal; co-interior is the lone supplementary pair.`,
      },
      {
        id: 'plt2-rule-dropdown',
        type: 'dropdown-select' as const,
        content: `**Equal or Supplementary?** 🔽

For each pair (assuming the lines are **parallel**), choose the rule that relates the two angles.`,
        exercise: {
          dropdowns: [
            { label: 'Corresponding angles are:', options: ['Equal', 'Supplementary'] },
            { label: 'Alternate exterior angles are:', options: ['Equal', 'Supplementary'] },
            { label: 'Co-interior (same-side interior) angles are:', options: ['Equal', 'Supplementary'] },
            { label: 'Vertical angles are:', options: ['Equal', 'Supplementary'] },
          ],
          correctAnswers: ['Equal', 'Equal', 'Supplementary', 'Equal'],
          hint1: 'Three of these four are equal; only one adds to $180°$.',
          hint2: 'Co-interior is the supplementary pair. Vertical angles are always equal at any crossing.',
          hint3: 'Corresponding, alternate interior, alternate exterior, and vertical → equal. Co-interior → supplementary.',
          explanation: 'Corresponding, alternate exterior, and vertical angles are all equal. Co-interior (same-side interior) angles are supplementary, summing to $180°$.',
        },
      },
      {
        id: 'plt2-apply-bridge',
        type: 'text' as const,
        content: `## Putting a Number In

Now let's use a rule with an actual measurement. For an **equal** pair, just copy the number across. For the **supplementary** co-interior pair, subtract from $180°$.`,
      },
      {
        id: 'plt2-fill-mc',
        type: 'multiple-choice' as const,
        content: `**Apply the Rule** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Lines are parallel and a pair of corresponding angles is shown. One measures $64°$. The other measures:',
              options: ['$64°$', '$116°$', '$26°$', '$128°$'],
              correctAnswer: 0,
              explanation: 'Corresponding angles are equal when the lines are parallel, so the other angle is also $64°$.',
            },
            {
              question: 'Lines are parallel and two co-interior angles are shown. One measures $64°$. The other measures:',
              options: ['$116°$', '$64°$', '$26°$', '$96°$'],
              correctAnswer: 0,
              explanation: 'Co-interior angles are supplementary: $180° - 64° = 116°$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'parallel-lines-transversals',
    sections: [
      {
        id: 'plt3-intro',
        type: 'text' as const,
        content: `# 🛤️ Parallel Lines and Transversals

**Part 3 of 5 — Finding Missing Angle Measures**

---

> 🔑 **Why it works:** Once you know *one* angle, the rule for each pair (equal or supplementary) lets you fill in the rest. The whole skill is: identify the pair, then add to $180°$ or copy the value.`,
      },
      {
        id: 'plt3-method',
        type: 'text' as const,
        content: `## A Reliable Method

To find an unknown angle when the lines are parallel:

1. **Locate** a known angle and the unknown angle.
2. **Name the relationship** between them (corresponding, alternate interior/exterior, co-interior, vertical, or linear pair).
3. **Apply the rule:** equal pairs → copy the value; supplementary pairs → subtract from $180°$.

### Worked Example: One Step

The lines are parallel. $\\angle a = 125°$, and $\\angle b$ is the **co-interior** partner of $\\angle a$. Find $\\angle b$.

$$\\angle b = 180° - 125° = 55°$$

### Worked Example: Two Steps

The lines are parallel. $\\angle 1 = 48°$. Find $\\angle 7$, the **alternate exterior** angle.

Alternate exterior angles are equal, so:

$$\\angle 7 = \\angle 1 = 48°$$

> ✅ **Check:** $\\angle 7$ and $\\angle 1$ are both outside the parallel lines on opposite sides of the transversal — that is exactly the alternate-exterior pattern, so they match.`,
      },
      {
        id: 'plt3-chain',
        type: 'text' as const,
        content: `## Chaining Relationships

Sometimes the known and unknown angles are not a *named* pair directly — so you take **two short hops**.

### Worked Example: $\\angle 3 = 110°$, find $\\angle 5$

$\\angle 3$ and $\\angle 5$ are **co-interior** (both interior, same side of the transversal):

$$\\angle 5 = 180° - 110° = 70°$$

Alternatively, hop through a linear pair: $\\angle 3$ and $\\angle 1$ form a linear pair so $\\angle 1 = 70°$; then $\\angle 1$ and $\\angle 5$ are corresponding so $\\angle 5 = 70°$... but the direct co-interior route is fastest.

> 💡 **Tip:** There is often more than one valid path. Any correct chain of relationships gives the same answer — pick the shortest one you can name confidently.`,
      },
      {
        id: 'plt3-find-input',
        type: 'input-boxes' as const,
        content: `**Find the Missing Angle** 🧮

In each case the two lines are **parallel**. Use the named relationship to find the unknown angle (enter just the number of degrees).

**1)** $\\angle a = 73°$. Its **corresponding** angle $\\angle b = \\,?$
**2)** $\\angle c = 118°$. Its **co-interior** partner $\\angle d = \\,?$
**3)** $\\angle e = 35°$. Its **alternate interior** partner $\\angle f = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['73', '62', '35'],
          hint1: 'Corresponding angles are equal, so $\\angle b = \\angle a$.',
          hint2: 'Co-interior angles are supplementary: $\\angle d = 180° - 118°$.',
          hint3: 'Alternate interior angles are equal, so $\\angle f = \\angle e$.',
          explanation: '1) Corresponding → equal → $73°$.  2) Co-interior → supplementary → $180° - 118° = 62°$.  3) Alternate interior → equal → $35°$.',
        },
      },
      {
        id: 'plt3-eight-bridge',
        type: 'text' as const,
        content: `## Filling the Whole Diagram

Knowing one angle really does unlock all eight. Using vertical angles (equal) and linear pairs (supplementary) at each crossing, every angle resolves to the starting value or its supplement.`,
      },
      {
        id: 'plt3-eight-input',
        type: 'input-boxes' as const,
        content: `**Fill In All Eight** 🧮

The lines are parallel and $\\angle 1 = 105°$, where $\\angle 1$ is an **exterior** angle. Every angle is either $105°$ or its supplement.

**1)** The supplement of $105°$ is $\\,?$ degrees.
**2)** $\\angle 1$'s **vertical** angle measures $\\,?$ degrees.
**3)** $\\angle 1$'s **co-interior**-type supplement appears as the angle just across the straight line (a linear pair): $\\,?$ degrees.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '105', '75'],
          hint1: '$180° - 105° = 75°$.',
          hint2: 'Vertical angles are always equal, so it matches $\\angle 1 = 105°$.',
          hint3: 'A linear pair is supplementary: $180° - 105° = 75°$.',
          explanation: '1) $180° - 105° = 75°$.  2) Vertical angles are equal → $105°$.  3) Linear pair → supplementary → $75°$. The eight angles are all $105°$ or $75°$.',
        },
      },
      {
        id: 'plt3-rule-bridge',
        type: 'text' as const,
        content: `## Choose the Rule, Then Compute

The hardest part is never the arithmetic — it is correctly **naming** the pair so you know whether to copy the value or subtract from $180°$. Read the next two problems carefully and identify the pair first.`,
      },
      {
        id: 'plt3-which-mc',
        type: 'multiple-choice' as const,
        content: `**Pick the Right Rule** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Lines are parallel. $\\angle x$ and $\\angle y$ are alternate interior angles, and $\\angle x = 82°$. What is $\\angle y$?',
              options: ['$82°$', '$98°$', '$8°$', '$164°$'],
              correctAnswer: 0,
              explanation: 'Alternate interior angles are equal when the lines are parallel, so $\\angle y = 82°$.',
            },
            {
              question: 'Lines are parallel. A pair of same-side (co-interior) angles measure $x$ and $3x$. Their sum must be:',
              options: ['$180°$', '$90°$', '$360°$', '$x$'],
              correctAnswer: 0,
              explanation: 'Co-interior angles are supplementary, so $x + 3x = 180°$. (That would give $x = 45°$.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'parallel-lines-transversals',
    sections: [
      {
        id: 'plt4-intro',
        type: 'text' as const,
        content: `# 🛤️ Parallel Lines and Transversals

**Part 4 of 5 — Solving for x with Algebra**

---

> 🔑 **Big Payoff:** Most test problems hide the angles behind expressions like $2x + 10$ and $5x - 20$. Translate the angle relationship into an **equation**, solve for $x$, then back-substitute to get the actual angle.`,
      },
      {
        id: 'plt4-equal',
        type: 'text' as const,
        content: `## When the Pair Is EQUAL

If the two expressions sit at an **equal** pair (corresponding, alternate interior, or alternate exterior), set them **equal** to each other.

### Worked Example: Alternate Interior

The lines are parallel. The alternate interior angles are $(3x + 15)°$ and $(5x - 25)°$. Find $x$.

Equal pair, so set them equal:

$$3x + 15 = 5x - 25$$
$$15 + 25 = 5x - 3x$$
$$40 = 2x \\;\\Rightarrow\\; x = 20$$

**Find the angle:** $3(20) + 15 = 75°$.

> ✅ **Check:** $5(20) - 25 = 100 - 25 = 75°$. Both expressions give $75°$ ✓`,
      },
      {
        id: 'plt4-supp',
        type: 'text' as const,
        content: `## When the Pair Is SUPPLEMENTARY

If the two expressions sit at a **supplementary** pair (co-interior, or a linear pair), set their **sum equal to $180°$**.

### Worked Example: Co-Interior

The lines are parallel. Co-interior angles are $(2x + 30)°$ and $(4x)°$. Find $x$ and both angles.

Supplementary pair, so the sum is $180°$:

$$(2x + 30) + 4x = 180$$
$$6x + 30 = 180$$
$$6x = 150 \\;\\Rightarrow\\; x = 25$$

**The angles:** $2(25) + 30 = 80°$ and $4(25) = 100°$.

> ✅ **Check:** $80° + 100° = 180°$ ✓ — a valid supplementary pair.

> ⚠️ **The #1 mistake:** setting a supplementary pair *equal* (or an equal pair *to $180°$*). Always name the pair **first**, then decide: equal pairs → "$=$", supplementary pairs → "$+ \\ldots = 180$".`,
      },
      {
        id: 'plt4-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Equation** 🔽

For each scenario (lines are parallel), choose the correct equation to solve for $x$. The two angle expressions are $(2x+20)$ and $(4x-40)$.`,
        exercise: {
          dropdowns: [
            { label: 'If they are CORRESPONDING angles:', options: ['$2x+20 = 4x-40$', '$(2x+20)+(4x-40) = 180$', '$2x+20 = 90$', '$(2x+20)+(4x-40) = 360$'] },
            { label: 'If they are CO-INTERIOR angles:', options: ['$(2x+20)+(4x-40) = 180$', '$2x+20 = 4x-40$', '$(2x+20)+(4x-40) = 90$', '$2x+20 = 180$'] },
            { label: 'If they are ALTERNATE EXTERIOR angles:', options: ['$2x+20 = 4x-40$', '$(2x+20)+(4x-40) = 180$', '$4x-40 = 90$', '$2x+20 = 360$'] },
          ],
          correctAnswers: ['$2x+20 = 4x-40$', '$(2x+20)+(4x-40) = 180$', '$2x+20 = 4x-40$'],
          hint1: 'Equal pairs (corresponding, alternate interior, alternate exterior) → set the expressions equal.',
          hint2: 'Supplementary pairs (co-interior, linear pair) → set the sum to $180$.',
          hint3: 'Corresponding and alternate exterior are equal pairs; co-interior is the supplementary pair.',
          explanation: 'Corresponding and alternate exterior are equal pairs, so set the expressions equal: $2x+20 = 4x-40$. Co-interior is supplementary, so the sum is $180$.',
        },
      },
      {
        id: 'plt4-solve-bridge',
        type: 'text' as const,
        content: `## Now Solve End-to-End

You have built the equation; now finish the job. Solve for $x$, then **back-substitute** to report the actual angle measure when asked. Don't stop at $x$ — many problems want the angle.`,
      },
      {
        id: 'plt4-solve-input',
        type: 'input-boxes' as const,
        content: `**Solve for x** 🧮

The lines are parallel in each problem.

**1)** Corresponding angles $(4x - 5)°$ and $(3x + 20)°$. Find $x$.
**2)** Co-interior angles $(5x)°$ and $(7x - 60)°$. Find $x$.
**3)** Using #1, find the measure of either angle (in degrees).`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '20', '95'],
          hint1: 'Corresponding = equal: $4x - 5 = 3x + 20$. Subtract $3x$ from both sides.',
          hint2: 'Co-interior = supplementary: $5x + (7x - 60) = 180 \\Rightarrow 12x - 60 = 180$.',
          hint3: 'For #3 plug your $x$ from #1 back in: $4(25) - 5 = 95°$ (and $3(25)+20 = 95°$).',
          explanation: '1) $4x-5 = 3x+20 \\Rightarrow x = 25$.  2) $12x - 60 = 180 \\Rightarrow 12x = 240 \\Rightarrow x = 20$.  3) $4(25)-5 = 95°$ (check: $3(25)+20 = 95°$).',
        },
      },
      {
        id: 'plt4-trap-bridge',
        type: 'text' as const,
        content: `## Don't Get Trapped

Test writers love to pair a *supplementary* relationship with expressions that *look* like they should be set equal (and vice versa). The next two problems check that you name the pair before writing the equation.`,
      },
      {
        id: 'plt4-trap-mc',
        type: 'multiple-choice' as const,
        content: `**Spot the Setup** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Lines are parallel. Two angles are $(6x - 10)°$ and $(2x + 50)°$ and they are alternate interior. The correct equation is:',
              options: ['$6x - 10 = 2x + 50$', '$(6x-10)+(2x+50) = 180$', '$6x - 10 = 90$', '$(6x-10)+(2x+50) = 90$'],
              correctAnswer: 0,
              explanation: 'Alternate interior angles are equal, so set the expressions equal: $6x - 10 = 2x + 50$ (giving $4x = 60$, $x = 15$).',
            },
            {
              question: 'Lines are parallel. Same-side interior angles are $(3x)°$ and $(x)°$. Solving correctly gives $x = $',
              options: ['$45$', '$60$', '$90$', '$180$'],
              correctAnswer: 0,
              explanation: 'Same-side (co-interior) angles are supplementary: $3x + x = 180 \\Rightarrow 4x = 180 \\Rightarrow x = 45$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'parallel-lines-transversals',
    sections: [
      {
        id: 'plt5-intro',
        type: 'text' as const,
        content: `# 🛤️ Parallel Lines and Transversals

**Part 5 of 5 — Proving Lines Parallel & Mastery Check**

---

So far we *assumed* the lines were parallel and used the rules forward. Now we run them **backward**: if a pair of angles satisfies the rule, the lines **must be parallel**. Then we finish with a mastery quiz.`,
      },
      {
        id: 'plt5-converse',
        type: 'text' as const,
        content: `## The Converse Theorems

Each angle rule has a **converse** — flip the "if" and "then":

| If you observe... | ...then the lines are parallel |
|-------------------|-------------------------------|
| A pair of **corresponding** angles are **equal** | ✓ |
| A pair of **alternate interior** angles are **equal** | ✓ |
| A pair of **alternate exterior** angles are **equal** | ✓ |
| A pair of **co-interior** angles are **supplementary** ($=180°$) | ✓ |

> 🔑 **Converse in words:** "Equal corresponding (or alternate) angles **force** the lines to be parallel; supplementary co-interior angles do the same." If the measured angles *break* the rule, the lines are **not** parallel.

### Worked Example

A transversal makes a $70°$ angle with line $m$ and a $70°$ angle with line $n$ in **corresponding** positions. Because the corresponding angles are equal, $m \\parallel n$. ✓

If instead those corresponding angles were $70°$ and $75°$, the lines would **not** be parallel.`,
      },
      {
        id: 'plt5-converse-dropdown',
        type: 'dropdown-select' as const,
        content: `**Parallel or Not?** 🔽

A transversal cuts two lines. For each measured pair, decide whether the lines are guaranteed parallel.`,
        exercise: {
          dropdowns: [
            { label: 'Alternate interior angles measure $50°$ and $50°$:', options: ['Parallel', 'Not necessarily parallel'] },
            { label: 'Co-interior angles measure $110°$ and $70°$:', options: ['Parallel', 'Not necessarily parallel'] },
            { label: 'Corresponding angles measure $88°$ and $92°$:', options: ['Not necessarily parallel', 'Parallel'] },
            { label: 'Co-interior angles measure $100°$ and $90°$:', options: ['Not necessarily parallel', 'Parallel'] },
          ],
          correctAnswers: ['Parallel', 'Parallel', 'Not necessarily parallel', 'Not necessarily parallel'],
          hint1: 'Equal alternate/corresponding angles ⇒ parallel. Supplementary co-interior angles ⇒ parallel.',
          hint2: 'Check the rule: do equal pairs match? Do co-interior pairs sum to exactly $180°$?',
          hint3: '$110 + 70 = 180$ ✓ (parallel). $88 \\ne 92$ ✗. $100 + 90 = 190 \\ne 180$ ✗.',
          explanation: 'Alt. interior $50°=50°$ ⇒ parallel. Co-interior $110°+70°=180°$ ⇒ parallel. Corresponding $88° \\ne 92°$ ⇒ not parallel. Co-interior $100°+90°=190° \\ne 180°$ ⇒ not parallel.',
        },
      },
      {
        id: 'plt5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Pair | Position | Rule (∥ lines) | To prove ∥, need |
|------|----------|----------------|------------------|
| Corresponding | Matching corners | Equal | Equal |
| Alternate interior | Inside, opposite sides | Equal | Equal |
| Alternate exterior | Outside, opposite sides | Equal | Equal |
| Co-interior (same-side) | Inside, same side | Supplementary | Sum $= 180°$ |
| Vertical | Opposite at one crossing | Equal (always) | — |
| Linear pair | Adjacent on a line | Supplementary (always) | — |

> ⚠️ Remember the two-question test: **inside or outside?** then **same side or opposite?** Name the pair, then apply *equal* or *supplementary*.`,
      },
      {
        id: 'plt5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Lines are parallel. An angle of $137°$ is given. Its co-interior partner measures:',
              options: ['$43°$', '$137°$', '$53°$', '$223°$'],
              correctAnswer: 0,
              explanation: 'Co-interior angles are supplementary: $180° - 137° = 43°$.',
            },
            {
              question: 'Lines are parallel. Alternate exterior angles are $(7x)°$ and $(5x + 30)°$. Find $x$.',
              options: ['$15$', '$12.5$', '$30$', '$10$'],
              correctAnswer: 0,
              explanation: 'Alternate exterior angles are equal: $7x = 5x + 30 \\Rightarrow 2x = 30 \\Rightarrow x = 15$.',
            },
          ],
        },
      },
      {
        id: 'plt5-exit-bridge',
        type: 'text' as const,
        content: `## One Last Check

You can now name every angle pair, apply *equal* or *supplementary*, solve for $x$, and run the rules backward to prove (or disprove) that lines are parallel. The Exit Quiz below pulls from all five parts.`,
      },
      {
        id: 'plt5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'When a transversal crosses two parallel lines, which pair is SUPPLEMENTARY rather than equal?',
              options: ['Co-interior (same-side interior) angles', 'Corresponding angles', 'Alternate interior angles', 'Alternate exterior angles'],
              correctAnswer: 0,
              explanation: 'Three of the four named pairs are equal; only co-interior (same-side interior) angles are supplementary, summing to $180°$.',
            },
            {
              question: 'Lines are parallel. Corresponding angles are $(9x - 4)°$ and $(7x + 16)°$. The measure of each angle is:',
              options: ['$86°$', '$10°$', '$94°$', '$76°$'],
              correctAnswer: 0,
              explanation: 'Corresponding angles are equal: $9x - 4 = 7x + 16 \\Rightarrow 2x = 20 \\Rightarrow x = 10$. Then $9(10) - 4 = 86°$ (check: $7(10)+16 = 86°$).',
            },
            {
              question: 'A transversal cuts two lines so that a pair of alternate interior angles measure $64°$ and $66°$. What can you conclude?',
              options: ['The lines are NOT parallel', 'The lines are parallel', 'The lines are perpendicular', 'Nothing can be determined'],
              correctAnswer: 0,
              explanation: 'For parallel lines, alternate interior angles must be equal. Since $64° \\ne 66°$, the converse fails and the lines are not parallel.',
            },
          ],
        },
      },
    ],
  },
]
