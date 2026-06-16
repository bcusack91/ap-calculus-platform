import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Angle Measurements (Pre-Algebra).
 * Registry key / DB Topic.slug: 'angle-measurements'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Pre-Algebra:
 * naming & classifying angles, measuring with a protractor, complementary &
 * supplementary pairs, vertical & adjacent angles, and solving simple one- and
 * two-step equations for an unknown angle. LaTeX uses doubled backslashes
 * (template-literal strings); the degree symbol is written \\circ in math mode.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'angle-measurements',
    sections: [
      {
        id: 'am1-intro',
        type: 'text' as const,
        content: `# 📐 Angle Measurements

**Part 1 of 5 — What an Angle Is & How We Name It**

---

### Topics in This Part

| Section |
|---------|
| What Is an Angle? |
| Degrees: the Unit of Turning |
| Naming Angles |

> 🔑 **Key Concept:** An **angle** is the amount of *turn* between two rays that share a common endpoint. We measure that turn in **degrees** ($^\\circ$), where one full turn all the way around is $360^\\circ$.`,
      },
      {
        id: 'am1-what-is',
        type: 'text' as const,
        content: `## What Is an Angle?

An angle is formed by two **rays** (straight paths that start at a point and go on forever) that share the same starting point. That shared point is called the **vertex**.

- The two rays are the **sides** of the angle.
- The **vertex** is the corner where they meet.
- The **measure** of the angle tells how wide it is opened.

$$\\text{ray} + \\text{ray} + \\text{shared vertex} \\;\\Rightarrow\\; \\text{angle}$$

Think of opening a book or a pair of scissors: the wider you open them, the bigger the angle. A barely-open pair of scissors makes a small angle; scissors opened flat make a large one.

> 💡 The *length* of the sides does **not** change the angle. Two rays drawn long or short open to the same measure — only the amount of turning matters.`,
      },
      {
        id: 'am1-degrees',
        type: 'text' as const,
        content: `## Degrees: the Unit of Turning

We measure angles in **degrees**, written with a small circle: $90^\\circ$, $45^\\circ$, $180^\\circ$.

| Picture | Measure | Why |
|---------|---------|-----|
| All the way around (full circle) | $360^\\circ$ | one complete turn |
| Half turn (a straight line) | $180^\\circ$ | half of $360^\\circ$ |
| Quarter turn (a square corner) | $90^\\circ$ | one-fourth of $360^\\circ$ |

So a $90^\\circ$ angle is exactly a "square corner" — the kind you see in the corner of a piece of paper. A $180^\\circ$ angle is a perfectly straight line.

> 🔑 **Anchor these three:** a full turn is $360^\\circ$, a straight line is $180^\\circ$, and a square corner is $90^\\circ$. Almost every angle fact comes back to these.`,
      },
      {
        id: 'am1-basics-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the name of the point where the two sides of an angle meet?',
              options: ['The vertex', 'The ray', 'The degree', 'The midpoint'],
              correctAnswer: 0,
              explanation: 'The shared endpoint of the two rays is the vertex — the "corner" of the angle.',
            },
            {
              question: 'How many degrees are in one complete turn all the way around?',
              options: ['$360^\\circ$', '$180^\\circ$', '$90^\\circ$', '$100^\\circ$'],
              correctAnswer: 0,
              explanation: 'One full turn around a point is $360^\\circ$. A half turn is $180^\\circ$ and a quarter turn is $90^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'am1-fractions-input',
        type: 'input-boxes' as const,
        content: `**Fractions of a Full Turn** 🧮

A full turn is $360^\\circ$. Use that to find each fraction of a turn (in degrees).

**1)** Half a turn ($\\frac{1}{2}$ of $360^\\circ$) is $\\,?^\\circ$
**2)** A quarter turn ($\\frac{1}{4}$ of $360^\\circ$) is $\\,?^\\circ$
**3)** Three-quarters of a turn ($\\frac{3}{4}$ of $360^\\circ$) is $\\,?^\\circ$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['180', '90', '270'],
          hint1: 'Take $360$ and multiply by the fraction.',
          hint2: '$\\frac{1}{2}\\times 360 = 180$; $\\frac{1}{4}\\times 360 = 90$.',
          hint3: '$\\frac{3}{4}\\times 360 = 270$ (that is three quarter-turns: $90 \\times 3$).',
          explanation: '1) $\\frac{1}{2}(360) = 180^\\circ$ (straight line).  2) $\\frac{1}{4}(360) = 90^\\circ$ (right angle).  3) $\\frac{3}{4}(360) = 270^\\circ$.',
        },
      },
      {
        id: 'am1-naming',
        type: 'text' as const,
        content: `## Naming Angles

There are three common ways to name an angle, all using the angle symbol $\\angle$:

1. **By its vertex letter:** if only one angle is at vertex $B$, we can call it $\\angle B$.
2. **By three points:** name a point on one side, the **vertex in the middle**, then a point on the other side — like $\\angle ABC$ or $\\angle CBA$. The middle letter is *always* the vertex.
3. **By a number** placed inside the angle, like $\\angle 1$.

> ⚠️ **Watch the middle letter.** In $\\angle ABC$ the vertex is $B$, not $A$. If you write $\\angle BAC$ you've named a *different* angle (vertex $A$). The middle letter is the corner.`,
      },
      {
        id: 'am1-naming-dropdown',
        type: 'dropdown-select' as const,
        content: `**Naming Practice** 🔽

An angle has its corner at point $Q$, with one side passing through $P$ and the other through $R$.`,
        exercise: {
          dropdowns: [
            { label: 'Which letter is the vertex of $\\angle PQR$?', options: ['$Q$', '$P$', '$R$', 'cannot tell'] },
            { label: 'Another correct name for the same angle is:', options: ['$\\angle RQP$', '$\\angle PRQ$', '$\\angle QPR$', '$\\angle RPQ$'] },
            { label: 'A full turn around a point measures:', options: ['$360^\\circ$', '$180^\\circ$', '$90^\\circ$', '$270^\\circ$'] },
          ],
          correctAnswers: ['$Q$', '$\\angle RQP$', '$360^\\circ$'],
          hint1: 'The vertex is always the middle letter in a three-letter name.',
          hint2: 'You may reverse the two outer letters, but the vertex must stay in the middle.',
          hint3: '$\\angle PQR$ and $\\angle RQP$ both keep $Q$ in the middle, so they name the same angle.',
          explanation: 'The middle letter names the vertex, so $\\angle PQR = \\angle RQP$ (vertex $Q$). A full turn is $360^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'angle-measurements',
    sections: [
      {
        id: 'am2-intro',
        type: 'text' as const,
        content: `# 📐 Angle Measurements

**Part 2 of 5 — Classifying Angles by Size**

---

> 🔑 **The Idea:** Every angle falls into one of four named groups based only on its measure: **acute**, **right**, **obtuse**, or **straight**. Learning the boundaries lets you classify any angle at a glance.`,
      },
      {
        id: 'am2-types',
        type: 'text' as const,
        content: `## The Four Main Types

| Type | Measure | Looks like |
|------|---------|------------|
| **Acute** | greater than $0^\\circ$ and less than $90^\\circ$ | a sharp, narrow corner |
| **Right** | exactly $90^\\circ$ | a perfect square corner ⌐ |
| **Obtuse** | greater than $90^\\circ$ and less than $180^\\circ$ | a wide, open corner |
| **Straight** | exactly $180^\\circ$ | a flat straight line |

A handy way to remember **acute**: a small angle is "a-cute little angle." An **obtuse** angle is big and blunt.

> 💡 The cutoff numbers are $90^\\circ$ and $180^\\circ$. Anything *below* $90^\\circ$ is acute; *exactly* $90^\\circ$ is right; *between* $90^\\circ$ and $180^\\circ$ is obtuse; *exactly* $180^\\circ$ is straight.`,
      },
      {
        id: 'am2-reflex',
        type: 'text' as const,
        content: `## One More: the Reflex Angle

An angle that measures **more than $180^\\circ$ but less than $360^\\circ$** is called a **reflex angle**. It's the "big" way around.

For example, the inside corner of a slice of pizza might be $40^\\circ$ (acute), but going the *long way* around the outside of that same corner is $360^\\circ - 40^\\circ = 320^\\circ$, a reflex angle.

$$\\text{reflex measure} = 360^\\circ - (\\text{small angle})$$

> ⚠️ A right angle is **exactly** $90^\\circ$ — not "about $90^\\circ$." If an angle is $89^\\circ$ it is *acute*, and $91^\\circ$ is *obtuse*. The label depends on the precise measure.`,
      },
      {
        id: 'am2-classify-mc',
        type: 'multiple-choice' as const,
        content: `**Classify the Angle** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An angle measures $135^\\circ$. What type is it?',
              options: ['Obtuse', 'Acute', 'Right', 'Straight'],
              correctAnswer: 0,
              explanation: '$135^\\circ$ is greater than $90^\\circ$ and less than $180^\\circ$, so it is obtuse.',
            },
            {
              question: 'Which measure describes a right angle?',
              options: ['Exactly $90^\\circ$', 'Exactly $180^\\circ$', 'Less than $90^\\circ$', 'More than $90^\\circ$'],
              correctAnswer: 0,
              explanation: 'A right angle is exactly $90^\\circ$ — a square corner. It is shown with a small square mark.',
            },
            {
              question: 'An angle of $72^\\circ$ is:',
              options: ['Acute', 'Right', 'Obtuse', 'Reflex'],
              correctAnswer: 0,
              explanation: '$72^\\circ$ is less than $90^\\circ$, so it is acute (a sharp, narrow angle).',
            },
          ],
        },
      },
      {
        id: 'am2-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match Measure to Type** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$45^\\circ$ is:', options: ['Acute', 'Right', 'Obtuse', 'Straight'] },
            { label: '$180^\\circ$ is:', options: ['Straight', 'Right', 'Obtuse', 'Reflex'] },
            { label: '$250^\\circ$ is:', options: ['Reflex', 'Obtuse', 'Straight', 'Acute'] },
          ],
          correctAnswers: ['Acute', 'Straight', 'Reflex'],
          hint1: 'Below $90^\\circ$ is acute; exactly $180^\\circ$ is a straight line.',
          hint2: 'A reflex angle is bigger than $180^\\circ$ (but less than $360^\\circ$).',
          hint3: '$45 < 90$ → acute. $180$ exactly → straight. $250$ is between $180$ and $360$ → reflex.',
          explanation: '$45^\\circ$ acute, $180^\\circ$ straight, $250^\\circ$ reflex. The boundaries are $90^\\circ$, $180^\\circ$, and $360^\\circ$.',
        },
      },
      {
        id: 'am2-classify-input',
        type: 'input-boxes' as const,
        content: `**Reflex from Acute** 🧮

The reflex angle that goes the *long way* around equals $360^\\circ$ minus the small angle.

**1)** The small angle is $40^\\circ$. The reflex angle is $\\,?^\\circ$
**2)** The small angle is $115^\\circ$. The reflex angle is $\\,?^\\circ$
**3)** The small angle is $90^\\circ$. The reflex angle is $\\,?^\\circ$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['320', '245', '270'],
          hint1: 'Reflex $= 360^\\circ - \\text{small angle}$.',
          hint2: '$360 - 40 = 320$; $360 - 115 = 245$.',
          hint3: '$360 - 90 = 270$. The reflex of a right angle is $270^\\circ$.',
          explanation: '1) $360 - 40 = 320^\\circ$.  2) $360 - 115 = 245^\\circ$.  3) $360 - 90 = 270^\\circ$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'angle-measurements',
    sections: [
      {
        id: 'am3-intro',
        type: 'text' as const,
        content: `# 📐 Angle Measurements

**Part 3 of 5 — Measuring with a Protractor**

---

> 🔑 **Why it matters:** A **protractor** is the half-circle tool that turns the *picture* of an angle into a *number* of degrees. Reading one correctly is the single most useful angle skill.`,
      },
      {
        id: 'am3-how-to',
        type: 'text' as const,
        content: `## How to Use a Protractor

A protractor is a half-circle marked from $0^\\circ$ to $180^\\circ$. To measure an angle:

1. **Place the center** (the small hole or cross in the middle of the flat edge) exactly on the **vertex**.
2. **Line up the baseline** ($0^\\circ$ line) along **one side** of the angle.
3. **Read the number** where the *other* side crosses the scale.

A protractor has **two scales** — an inner one and an outer one — running in opposite directions. Both go $0$ to $180$.

> ⚠️ **The double-scale trap:** start counting from the **$0^\\circ$** on the side you lined up, and follow *that same scale* around. If your angle looks acute (small) but you read a number like $150^\\circ$, you're on the wrong scale — switch to the other reading.`,
      },
      {
        id: 'am3-which-scale',
        type: 'text' as const,
        content: `## Picking the Right Scale

Use your eyes as a check **before** trusting the number:

- If the angle is clearly **acute** (sharp), its measure must be **less than $90^\\circ$**.
- If the angle is clearly **obtuse** (wide), its measure must be **more than $90^\\circ$**.

So if a wide-open angle gives you a choice between $50^\\circ$ and $130^\\circ$, the answer is $130^\\circ$ — because the angle is obtuse.

> 💡 The two scales always add to $180$: if one scale reads $50$, the other reads $180 - 50 = 130$ at that same spot. Use the acute/obtuse look to decide which is right.`,
      },
      {
        id: 'am3-scale-mc',
        type: 'multiple-choice' as const,
        content: `**Read the Protractor** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You measure an angle that looks clearly acute. The protractor shows the side crossing at both $35^\\circ$ (inner) and $145^\\circ$ (outer). What is the angle?',
              options: ['$35^\\circ$', '$145^\\circ$', '$90^\\circ$', '$180^\\circ$'],
              correctAnswer: 0,
              explanation: 'An acute angle must be less than $90^\\circ$, so the correct reading is $35^\\circ$, not $145^\\circ$.',
            },
            {
              question: 'Where should the center of the protractor be placed?',
              options: ['On the vertex of the angle', 'On the end of one ray', 'Anywhere on a side', 'In the middle between the two sides'],
              correctAnswer: 0,
              explanation: 'The center mark goes exactly on the vertex; one side is lined up with the $0^\\circ$ baseline.',
            },
          ],
        },
      },
      {
        id: 'am3-scale-input',
        type: 'input-boxes' as const,
        content: `**The Two Scales Add to 180** 🧮

At any spot, the inner and outer protractor scales add up to $180^\\circ$. Find the missing reading.

**1)** One scale reads $60^\\circ$. The other reads $\\,?^\\circ$
**2)** One scale reads $108^\\circ$. The other reads $\\,?^\\circ$
**3)** One scale reads $90^\\circ$. The other reads $\\,?^\\circ$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['120', '72', '90'],
          hint1: 'The two readings always add to $180$, so other $= 180 - \\text{one}$.',
          hint2: '$180 - 60 = 120$; $180 - 108 = 72$.',
          hint3: '$180 - 90 = 90$ — at the very top of the protractor both scales read $90^\\circ$.',
          explanation: '1) $180 - 60 = 120^\\circ$.  2) $180 - 108 = 72^\\circ$.  3) $180 - 90 = 90^\\circ$.',
        },
      },
      {
        id: 'am3-estimate-dropdown',
        type: 'dropdown-select' as const,
        content: `**Sanity-Check Your Reading** 🔽

For each described angle, pick the only reasonable measure.`,
        exercise: {
          dropdowns: [
            { label: 'A very sharp, narrow angle is about:', options: ['$20^\\circ$', '$95^\\circ$', '$160^\\circ$', '$180^\\circ$'] },
            { label: 'A wide-open angle, just short of a flat line, is about:', options: ['$170^\\circ$', '$90^\\circ$', '$45^\\circ$', '$10^\\circ$'] },
            { label: 'A square-corner angle measures:', options: ['$90^\\circ$', '$60^\\circ$', '$120^\\circ$', '$30^\\circ$'] },
          ],
          correctAnswers: ['$20^\\circ$', '$170^\\circ$', '$90^\\circ$'],
          hint1: 'Sharp/narrow → small number; wide-open → big number.',
          hint2: 'Just short of a straight ($180^\\circ$) line means close to $180$, like $170^\\circ$.',
          hint3: 'A square corner is exactly $90^\\circ$.',
          explanation: 'Narrow ≈ $20^\\circ$, almost-flat ≈ $170^\\circ$, square corner $= 90^\\circ$. Always estimate before reading the scale.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'angle-measurements',
    sections: [
      {
        id: 'am4-intro',
        type: 'text' as const,
        content: `# 📐 Angle Measurements

**Part 4 of 5 — Angle Pairs: Complementary, Supplementary & Vertical**

---

> 🔑 **Big Payoff:** When angles sit next to each other, their measures are linked by simple rules. These let you find a *missing* angle without measuring it at all — just add or subtract.`,
      },
      {
        id: 'am4-comp-supp',
        type: 'text' as const,
        content: `## Complementary and Supplementary

| Pair | They add to | Memory hook |
|------|-------------|-------------|
| **Complementary** | $90^\\circ$ | **C** comes before **S**, and $90$ before $180$ — "**C**orner" ($90^\\circ$) |
| **Supplementary** | $180^\\circ$ | "**S**traight" line ($180^\\circ$) |

So two angles are **complementary** if their measures add to $90^\\circ$, and **supplementary** if they add to $180^\\circ$.

### Find a Missing Angle

If an angle is $34^\\circ$, its **complement** is what's left to reach $90^\\circ$:
$$90^\\circ - 34^\\circ = 56^\\circ$$

Its **supplement** is what's left to reach $180^\\circ$:
$$180^\\circ - 34^\\circ = 146^\\circ$$

> 💡 **Complement = $90 -$ angle.  Supplement = $180 -$ angle.** Keep the two $90$/$180$ totals straight and these problems become one subtraction.`,
      },
      {
        id: 'am4-comp-supp-input',
        type: 'input-boxes' as const,
        content: `**Complements & Supplements** 🧮

**1)** The complement of $25^\\circ$ is $\\,?^\\circ$
**2)** The supplement of $70^\\circ$ is $\\,?^\\circ$
**3)** Two complementary angles: one is $61^\\circ$, the other is $\\,?^\\circ$
**4)** The supplement of $125^\\circ$ is $\\,?^\\circ$`,
        exercise: {
          boxes: 4,
          correctAnswers: ['65', '110', '29', '55'],
          hint1: 'Complement $= 90 - \\text{angle}$; supplement $= 180 - \\text{angle}$.',
          hint2: '$90 - 25 = 65$; $180 - 70 = 110$.',
          hint3: '$90 - 61 = 29$; $180 - 125 = 55$.',
          explanation: '1) $90 - 25 = 65^\\circ$.  2) $180 - 70 = 110^\\circ$.  3) $90 - 61 = 29^\\circ$.  4) $180 - 125 = 55^\\circ$.',
        },
      },
      {
        id: 'am4-vertical',
        type: 'text' as const,
        content: `## Vertical and Adjacent Angles

When two straight lines **cross**, they make four angles.

- **Adjacent angles** sit *next to each other* and share a side. A pair of adjacent angles on a straight line is **supplementary** (adds to $180^\\circ$).
- **Vertical angles** sit *across from each other* (opposite the crossing point). **Vertical angles are always equal.**

$$\\text{Two lines crossing} \\;\\Rightarrow\\; \\text{opposite angles are equal}$$

### Example

If one of the four angles is $110^\\circ$, then:
- The angle **across** from it (vertical) is also $110^\\circ$.
- Each angle **next** to it (adjacent, on a line) is $180^\\circ - 110^\\circ = 70^\\circ$.

> ⚠️ Don't mix them up: **vertical** angles are *equal*; angles that form a *straight line* are *supplementary*. "Vertical" here means "opposite," not "up and down."`,
      },
      {
        id: 'am4-vertical-mc',
        type: 'multiple-choice' as const,
        content: `**Crossing Lines** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two lines cross. One angle is $63^\\circ$. The angle directly across from it (its vertical angle) is:',
              options: ['$63^\\circ$', '$117^\\circ$', '$27^\\circ$', '$90^\\circ$'],
              correctAnswer: 0,
              explanation: 'Vertical (opposite) angles are always equal, so it is also $63^\\circ$.',
            },
            {
              question: 'Two angles together form a straight line. One is $63^\\circ$. The other is:',
              options: ['$117^\\circ$', '$63^\\circ$', '$27^\\circ$', '$37^\\circ$'],
              correctAnswer: 0,
              explanation: 'Angles on a straight line are supplementary: $180^\\circ - 63^\\circ = 117^\\circ$.',
            },
            {
              question: 'Two complementary angles must add up to:',
              options: ['$90^\\circ$', '$180^\\circ$', '$360^\\circ$', '$45^\\circ$'],
              correctAnswer: 0,
              explanation: 'Complementary angles add to $90^\\circ$ (think "Corner"). Supplementary angles add to $180^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'am4-pairs-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Relationship** 🔽

Decide how each pair of angles is related.`,
        exercise: {
          dropdowns: [
            { label: 'Angles that add to $180^\\circ$ are:', options: ['Supplementary', 'Complementary', 'Vertical', 'Reflex'] },
            { label: 'Angles directly opposite where two lines cross are:', options: ['Vertical (equal)', 'Supplementary', 'Complementary', 'Acute'] },
            { label: 'Angles that add to $90^\\circ$ are:', options: ['Complementary', 'Supplementary', 'Vertical', 'Straight'] },
          ],
          correctAnswers: ['Supplementary', 'Vertical (equal)', 'Complementary'],
          hint1: '"Straight" line = $180^\\circ$ = Supplementary; "Corner" = $90^\\circ$ = Complementary.',
          hint2: 'Opposite angles at a crossing are vertical and they are equal.',
          hint3: 'Add to $180$ → supplementary; opposite → vertical; add to $90$ → complementary.',
          explanation: 'Add to $180^\\circ$ → supplementary; opposite at a crossing → vertical (equal); add to $90^\\circ$ → complementary.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'angle-measurements',
    sections: [
      {
        id: 'am5-intro',
        type: 'text' as const,
        content: `# 📐 Angle Measurements

**Part 5 of 5 — Solving for Unknown Angles & Mastery Check**

---

You can now name, classify, measure, and pair up angles. The last skill is using a little algebra to **solve** for an unknown angle when the relationship is given.`,
      },
      {
        id: 'am5-solve',
        type: 'text' as const,
        content: `## Turning Angle Facts into Equations

When a problem labels an angle with a variable like $x$, translate the angle fact into an equation, then solve.

### Example 1 — Supplementary

An angle and its supplement are $(x)$ and $(x + 40)$. Together they make a straight line:
$$x + (x + 40) = 180$$
$$2x + 40 = 180 \\;\\Rightarrow\\; 2x = 140 \\;\\Rightarrow\\; x = 70$$

So the angles are $70^\\circ$ and $110^\\circ$. ✅ Check: $70 + 110 = 180$. ✓

### Example 2 — Vertical

Two vertical angles are $(3x)$ and $(x + 50)$. Vertical angles are **equal**:
$$3x = x + 50 \\;\\Rightarrow\\; 2x = 50 \\;\\Rightarrow\\; x = 25$$

Each angle is $3(25) = 75^\\circ$. ✅ Check: $x + 50 = 75$. ✓

> 🔑 **The recipe:** (1) write what the fact says — *equal*, *add to $90$*, or *add to $180$* — as an equation, (2) solve for the variable, (3) plug back in to get the actual degrees.`,
      },
      {
        id: 'am5-solve-input',
        type: 'input-boxes' as const,
        content: `**Solve for the Angle** 🧮

**1)** An angle and its complement are $x$ and $2x$. Solve: $x + 2x = 90$, so $x = \\,?$
**2)** Two supplementary angles are $x$ and $x$ (they are equal). Each one measures $\\,?^\\circ$
**3)** Vertical angles are $(4x)$ and $(x + 30)$. Solve $4x = x + 30$: $x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '90', '10'],
          hint1: '1) $x + 2x = 3x = 90$, so divide by $3$.',
          hint2: '2) Equal supplementary angles split $180^\\circ$ in half.',
          hint3: '3) $4x = x + 30 \\Rightarrow 3x = 30 \\Rightarrow x = 10$.',
          explanation: '1) $3x = 90 \\Rightarrow x = 30$.  2) $x + x = 180 \\Rightarrow x = 90$.  3) $3x = 30 \\Rightarrow x = 10$.',
        },
      },
      {
        id: 'am5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Fact | Rule |
|------|------|
| Full turn | $360^\\circ$ |
| Straight line | $180^\\circ$ |
| Right angle (square corner) | $90^\\circ$ |
| Acute / Obtuse | less than $90^\\circ$ / between $90^\\circ$ and $180^\\circ$ |
| Complementary pair | add to $90^\\circ$ |
| Supplementary pair | add to $180^\\circ$ |
| Vertical angles | equal |
| Reflex angle | $360^\\circ - \\text{small angle}$ |

> ⚠️ The two most common slips: confusing $90$ (complementary) with $180$ (supplementary), and thinking vertical angles add up instead of being **equal**.`,
      },
      {
        id: 'am5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An angle measures $58^\\circ$. What is its complement?',
              options: ['$32^\\circ$', '$122^\\circ$', '$42^\\circ$', '$148^\\circ$'],
              correctAnswer: 0,
              explanation: 'Complement $= 90 - 58 = 32^\\circ$.',
            },
            {
              question: 'Two vertical angles are $(2x)$ and $(x + 40)$. What is $x$?',
              options: ['$40$', '$20$', '$80$', '$120$'],
              correctAnswer: 0,
              explanation: 'Vertical angles are equal: $2x = x + 40 \\Rightarrow x = 40$.',
            },
          ],
        },
      },
      {
        id: 'am5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'An angle measures $112^\\circ$. How is it classified?',
              options: ['Obtuse', 'Acute', 'Right', 'Straight'],
              correctAnswer: 0,
              explanation: '$112^\\circ$ is between $90^\\circ$ and $180^\\circ$, so it is obtuse.',
            },
            {
              question: 'The supplement of $43^\\circ$ is:',
              options: ['$137^\\circ$', '$47^\\circ$', '$317^\\circ$', '$157^\\circ$'],
              correctAnswer: 0,
              explanation: 'Supplement $= 180 - 43 = 137^\\circ$.',
            },
            {
              question: 'Two lines cross and one angle is $85^\\circ$. The angle directly across from it is:',
              options: ['$85^\\circ$', '$95^\\circ$', '$5^\\circ$', '$275^\\circ$'],
              correctAnswer: 0,
              explanation: 'Vertical (opposite) angles are equal, so the angle across is also $85^\\circ$.',
            },
          ],
        },
      },
    ],
  },
]
