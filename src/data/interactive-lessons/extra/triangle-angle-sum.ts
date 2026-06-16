import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Triangle Angle Sum Theorem (Geometry).
 * Registry key: 'triangle-angle-sum' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written as \\circ.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'triangle-angle-sum',
    sections: [
      {
        id: 'tas1-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Angle Sum Theorem

**Part 1 of 5 — The 180° Rule**

---

### Topics in This Part

| Section |
|---------|
| What the Theorem Says |
| Why It's Always True |
| Finding a Missing Angle |

> 🔑 **Key Concept:** In **every** triangle — no matter its shape or size — the three interior angles add up to exactly $180^\\circ$. That single fact is the engine behind nearly all triangle problems.`,
      },
      {
        id: 'tas1-statement',
        type: 'text' as const,
        content: `## What the Theorem Says

The **Triangle Angle Sum Theorem** states:

$$\\text{The sum of the interior angles of a triangle is } 180^\\circ.$$

If a triangle has angles $A$, $B$, and $C$, then:

$$m\\angle A + m\\angle B + m\\angle C = 180^\\circ$$

The notation $m\\angle A$ just means "the **measure** of angle $A$" — its size in degrees.

### A Few Quick Examples

| Angle $A$ | Angle $B$ | Angle $C$ | Sum |
|-----------|-----------|-----------|-----|
| $60^\\circ$ | $60^\\circ$ | $60^\\circ$ | $180^\\circ$ ✓ |
| $90^\\circ$ | $45^\\circ$ | $45^\\circ$ | $180^\\circ$ ✓ |
| $100^\\circ$ | $50^\\circ$ | $30^\\circ$ | $180^\\circ$ ✓ |

> 💡 This holds for **any** triangle — equilateral, isosceles, scalene, right, or obtuse. The shape changes, but the total never does.`,
      },
      {
        id: 'tas1-why',
        type: 'text' as const,
        content: `## Why It's Always True

Here's the classic "tear and line up" picture. Take any triangle, tear off its three corners, and place them tip-to-tip along a straight line:

$$\\underbrace{\\;\\angle A + \\angle B + \\angle C\\;}_{\\text{three corners}} = \\underbrace{180^\\circ}_{\\text{a straight line}}$$

The three angles fit together perfectly to form a **straight angle** — and a straight angle measures exactly $180^\\circ$.

> 🔑 **The big idea:** "Three triangle corners" and "one straight line" are the same total: $180^\\circ$. We'll prove this rigorously with parallel lines in Part 4.`,
      },
      {
        id: 'tas1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The three interior angles of any triangle always add up to:',
              options: ['$90^\\circ$', '$180^\\circ$', '$270^\\circ$', '$360^\\circ$'],
              correctAnswer: 1,
              explanation: 'By the Triangle Angle Sum Theorem, the interior angles of every triangle total exactly $180^\\circ$. ($360^\\circ$ is the sum for a quadrilateral, not a triangle.)',
            },
            {
              question: 'Which set of three angles could be the interior angles of a triangle?',
              options: ['$70^\\circ,\\ 80^\\circ,\\ 40^\\circ$', '$90^\\circ,\\ 60^\\circ,\\ 40^\\circ$', '$50^\\circ,\\ 60^\\circ,\\ 70^\\circ$', '$100^\\circ,\\ 50^\\circ,\\ 40^\\circ$'],
              correctAnswer: 2,
              explanation: 'Only $50^\\circ + 60^\\circ + 70^\\circ = 180^\\circ$. The others sum to $190^\\circ$, $190^\\circ$, and $190^\\circ$ — none of which equals $180^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'tas1-find-missing',
        type: 'text' as const,
        content: `## Finding a Missing Angle

If you know **two** angles, you can always find the **third** — just subtract from $180^\\circ$.

$$m\\angle C = 180^\\circ - m\\angle A - m\\angle B$$

### Worked Example

A triangle has angles of $35^\\circ$ and $65^\\circ$. Find the third angle.

$$m\\angle C = 180^\\circ - 35^\\circ - 65^\\circ = 180^\\circ - 100^\\circ = 80^\\circ$$

> ✅ **Check:** $35^\\circ + 65^\\circ + 80^\\circ = 180^\\circ$ ✓`,
      },
      {
        id: 'tas1-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill in the Steps** 🔽

A triangle has two known angles of $70^\\circ$ and $60^\\circ$. Walk through finding the third.`,
        exercise: {
          dropdowns: [
            { label: 'The three angles must add to:', options: ['$180^\\circ$', '$90^\\circ$', '$360^\\circ$', '$120^\\circ$'] },
            { label: 'Sum of the two known angles:', options: ['$130^\\circ$', '$120^\\circ$', '$140^\\circ$', '$110^\\circ$'] },
            { label: 'The third angle is:', options: ['$50^\\circ$', '$60^\\circ$', '$40^\\circ$', '$70^\\circ$'] },
          ],
          correctAnswers: ['$180^\\circ$', '$130^\\circ$', '$50^\\circ$'],
          hint1: 'Every triangle’s interior angles total $180^\\circ$.',
          hint2: '$70^\\circ + 60^\\circ = 130^\\circ$.',
          hint3: '$180^\\circ - 130^\\circ = 50^\\circ$.',
          explanation: 'The angles sum to $180^\\circ$. The two known angles total $70^\\circ + 60^\\circ = 130^\\circ$, so the third is $180^\\circ - 130^\\circ = 50^\\circ$.',
        },
      },
      {
        id: 'tas1-drill',
        type: 'input-boxes' as const,
        content: `**Find the Third Angle** 🧮

Two angles of a triangle are given. Find the missing third angle (in degrees — enter just the number).

**1)** $40^\\circ$ and $75^\\circ$ $\\;\\Rightarrow\\;$ third angle $= \\,?$
**2)** $90^\\circ$ and $25^\\circ$ $\\;\\Rightarrow\\;$ third angle $= \\,?$
**3)** $110^\\circ$ and $30^\\circ$ $\\;\\Rightarrow\\;$ third angle $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['65', '65', '40'],
          hint1: '$180 - 40 - 75 = 65$.',
          hint2: '$180 - 90 - 25 = 65$. (A right angle uses up $90^\\circ$, leaving $90^\\circ$ for the other two.)',
          hint3: '$180 - 110 - 30 = 40$.',
          explanation: '1) $180 - 40 - 75 = 65^\\circ$.  2) $180 - 90 - 25 = 65^\\circ$.  3) $180 - 110 - 30 = 40^\\circ$.',
        },
      },
      {
        id: 'tas1-wrap',
        type: 'text' as const,
        content: `## Part 1 Recap

- Every triangle's interior angles sum to $\\mathbf{180^\\circ}$.
- The notation $m\\angle A$ means "the measure of angle $A$."
- To find a missing angle: $180^\\circ - (\\text{sum of the other two})$.

Next up: classifying triangles by their angles, and what the theorem forces each type to look like.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'triangle-angle-sum',
    sections: [
      {
        id: 'tas2-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Angle Sum Theorem

**Part 2 of 5 — Classifying Triangles by Their Angles**

---

> 🔑 **The Idea:** Because all three angles must total $180^\\circ$, a triangle can have **at most one** right or obtuse angle. The $180^\\circ$ budget simply isn't big enough for two.`,
      },
      {
        id: 'tas2-types',
        type: 'text' as const,
        content: `## Three Types by Angle

| Type | Definition | Example angles |
|------|------------|----------------|
| **Acute** | all three angles $< 90^\\circ$ | $60^\\circ,\\ 70^\\circ,\\ 50^\\circ$ |
| **Right** | exactly one angle $= 90^\\circ$ | $90^\\circ,\\ 60^\\circ,\\ 30^\\circ$ |
| **Obtuse** | exactly one angle $> 90^\\circ$ | $120^\\circ,\\ 35^\\circ,\\ 25^\\circ$ |

> 💡 **Why only one big angle?** Two angles of $90^\\circ$ already use the entire $180^\\circ$, leaving $0^\\circ$ for the third — which is impossible. So a triangle can never have two right angles or two obtuse angles.`,
      },
      {
        id: 'tas2-right',
        type: 'text' as const,
        content: `## The Right-Triangle Shortcut

In a **right triangle**, one angle is $90^\\circ$, so the other two must add to the remaining $90^\\circ$:

$$m\\angle A + m\\angle B = 180^\\circ - 90^\\circ = 90^\\circ$$

The two non-right angles are called **complementary** (they sum to $90^\\circ$).

### Worked Example

A right triangle has one acute angle of $32^\\circ$. Find the other acute angle.

$$90^\\circ - 32^\\circ = 58^\\circ$$

> ✅ **Check:** $90^\\circ + 32^\\circ + 58^\\circ = 180^\\circ$ ✓`,
      },
      {
        id: 'tas2-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Triangle** 🔽

First find the missing angle, then pick the triangle's type.`,
        exercise: {
          dropdowns: [
            { label: 'Angles $50^\\circ, 60^\\circ, ?$ — the missing angle is:', options: ['$70^\\circ$', '$80^\\circ$', '$60^\\circ$', '$90^\\circ$'] },
            { label: 'So that triangle is:', options: ['acute', 'right', 'obtuse', 'straight'] },
            { label: 'Angles $90^\\circ, 55^\\circ, ?$ — that triangle is:', options: ['acute', 'right', 'obtuse', 'equilateral'] },
            { label: 'Angles $120^\\circ, 40^\\circ, ?$ — that triangle is:', options: ['acute', 'right', 'obtuse', 'isosceles'] },
          ],
          correctAnswers: ['$70^\\circ$', 'acute', 'right', 'obtuse'],
          hint1: '$180 - 50 - 60 = 70$.',
          hint2: 'All three angles ($50^\\circ, 60^\\circ, 70^\\circ$) are under $90^\\circ$, so the triangle is acute.',
          hint3: 'A $90^\\circ$ angle makes it a right triangle; a $120^\\circ$ angle (over $90^\\circ$) makes it obtuse.',
          explanation: 'Missing angle $= 70^\\circ$; all angles $< 90^\\circ$ → acute. A $90^\\circ$ angle → right. A $120^\\circ$ angle (> $90^\\circ$) → obtuse.',
        },
      },
      {
        id: 'tas2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Can a triangle have two right angles?',
              options: ['Yes, if the third angle is $0^\\circ$', 'No — two $90^\\circ$ angles already total $180^\\circ$, leaving nothing for the third', 'Yes, in a right triangle', 'Only if it is also obtuse'],
              correctAnswer: 1,
              explanation: 'Two $90^\\circ$ angles sum to $180^\\circ$, which would force the third angle to be $0^\\circ$ — not a real angle. So a triangle can have at most one right angle.',
            },
            {
              question: 'In a right triangle, one acute angle is $28^\\circ$. The other acute angle is:',
              options: ['$62^\\circ$', '$72^\\circ$', '$152^\\circ$', '$28^\\circ$'],
              correctAnswer: 0,
              explanation: 'The two acute angles in a right triangle are complementary: $90^\\circ - 28^\\circ = 62^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'tas2-drill',
        type: 'input-boxes' as const,
        content: `**Right-Triangle Practice** 🧮

Each triangle is a **right triangle** (one $90^\\circ$ angle). Given one acute angle, find the other.

**1)** acute angle $= 41^\\circ \\;\\Rightarrow\\;$ other acute angle $= \\,?$
**2)** acute angle $= 17^\\circ \\;\\Rightarrow\\;$ other acute angle $= \\,?$
**3)** acute angle $= 45^\\circ \\;\\Rightarrow\\;$ other acute angle $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['49', '73', '45'],
          hint1: 'The two acute angles add to $90^\\circ$: $90 - 41 = 49$.',
          hint2: '$90 - 17 = 73$.',
          hint3: '$90 - 45 = 45$ — a $45$-$45$-$90$ triangle, which is isosceles.',
          explanation: '1) $90 - 41 = 49^\\circ$.  2) $90 - 17 = 73^\\circ$.  3) $90 - 45 = 45^\\circ$ (the classic $45$-$45$-$90$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'triangle-angle-sum',
    sections: [
      {
        id: 'tas3-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Angle Sum Theorem

**Part 3 of 5 — Algebra with Triangle Angles**

---

> 🔑 **Why it works:** When angles are written with variables, set their **sum equal to $180^\\circ$**, then solve the equation. The theorem turns a geometry problem into ordinary algebra.`,
      },
      {
        id: 'tas3-method',
        type: 'text' as const,
        content: `## Setting Up the Equation

When angles are expressions in $x$, just add them and set the total to $180^\\circ$.

### Worked Example: $x$, $2x$, $3x$

The three angles of a triangle are $x$, $2x$, and $3x$. Find $x$ and all three angles.

$$x + 2x + 3x = 180^\\circ$$
$$6x = 180^\\circ$$
$$x = 30^\\circ$$

So the angles are $30^\\circ$, $60^\\circ$, and $90^\\circ$.

> ✅ **Check:** $30^\\circ + 60^\\circ + 90^\\circ = 180^\\circ$ ✓ — and it's a right triangle.`,
      },
      {
        id: 'tas3-worked2',
        type: 'text' as const,
        content: `### Worked Example: with a Constant

The angles of a triangle are $(x + 10)^\\circ$, $(2x)^\\circ$, and $(x + 30)^\\circ$. Solve for $x$.

Add them and set equal to $180^\\circ$:

$$(x + 10) + 2x + (x + 30) = 180$$

Combine like terms — $x + 2x + x = 4x$ and $10 + 30 = 40$:

$$4x + 40 = 180$$
$$4x = 140$$
$$x = 35$$

The angles are $45^\\circ$, $70^\\circ$, and $65^\\circ$.

> ✅ **Check:** $45^\\circ + 70^\\circ + 65^\\circ = 180^\\circ$ ✓`,
      },
      {
        id: 'tas3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Equation** 🔽

A triangle has angles $2x$, $3x$, and $4x$. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Set the sum equal to $180$:', options: ['$2x + 3x + 4x = 180$', '$2x \\cdot 3x \\cdot 4x = 180$', '$2x + 3x + 4x = 90$', '$2x + 3x + 4x = 360$'] },
            { label: 'Combine like terms:', options: ['$9x = 180$', '$24x = 180$', '$9x = 90$', '$x = 180$'] },
            { label: 'Solve for $x$:', options: ['$x = 20$', '$x = 30$', '$x = 18$', '$x = 9$'] },
            { label: 'The largest angle ($4x$) is:', options: ['$80^\\circ$', '$60^\\circ$', '$90^\\circ$', '$40^\\circ$'] },
          ],
          correctAnswers: ['$2x + 3x + 4x = 180$', '$9x = 180$', '$x = 20$', '$80^\\circ$'],
          hint1: 'The interior angles add to $180$, so $2x + 3x + 4x = 180$.',
          hint2: '$2x + 3x + 4x = 9x$, giving $9x = 180$.',
          hint3: '$x = 180 \\div 9 = 20$, so $4x = 4(20) = 80^\\circ$.',
          explanation: '$2x+3x+4x = 9x = 180 \\Rightarrow x = 20$. Angles: $40^\\circ, 60^\\circ, 80^\\circ$ (sum $= 180^\\circ$). Largest is $4x = 80^\\circ$.',
        },
      },
      {
        id: 'tas3-drill',
        type: 'input-boxes' as const,
        content: `**Solve for $x$** 🧮

Each set lists a triangle's three angles. Set up "sum $= 180$" and solve for $x$ (enter just the number).

**1)** $x,\\ x,\\ x \\;\\Rightarrow\\; x = \\,?$
**2)** $x,\\ 2x,\\ 2x \\;\\Rightarrow\\; x = \\,?$
**3)** $(x+20),\\ (x+40),\\ x \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '36', '40'],
          hint1: '$x + x + x = 3x = 180$, so $x = 60$ (an equilateral triangle).',
          hint2: '$x + 2x + 2x = 5x = 180$, so $x = 36$.',
          hint3: '$(x+20) + (x+40) + x = 3x + 60 = 180 \\Rightarrow 3x = 120 \\Rightarrow x = 40$.',
          explanation: '1) $3x = 180 \\Rightarrow x = 60$.  2) $5x = 180 \\Rightarrow x = 36$.  3) $3x + 60 = 180 \\Rightarrow x = 40$.',
        },
      },
      {
        id: 'tas3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has angles $(3x)^\\circ$, $(4x)^\\circ$, and $(5x)^\\circ$. What is $x$?',
              options: ['$x = 12$', '$x = 15$', '$x = 18$', '$x = 20$'],
              correctAnswer: 1,
              explanation: '$3x + 4x + 5x = 12x = 180 \\Rightarrow x = 15$. (Angles: $45^\\circ, 60^\\circ, 75^\\circ$.)',
            },
            {
              question: 'Two angles of a triangle are equal, and the third is $80^\\circ$. Each equal angle is:',
              options: ['$50^\\circ$', '$40^\\circ$', '$80^\\circ$', '$100^\\circ$'],
              correctAnswer: 0,
              explanation: 'The two equal angles share $180^\\circ - 80^\\circ = 100^\\circ$, so each is $100^\\circ \\div 2 = 50^\\circ$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'triangle-angle-sum',
    sections: [
      {
        id: 'tas4-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Angle Sum Theorem

**Part 4 of 5 — The Exterior Angle Theorem**

---

> 🔑 **Big Payoff:** Extend one side of a triangle and you create an **exterior angle**. It equals the sum of the two **remote** (non-adjacent) interior angles — a direct consequence of the $180^\\circ$ rule.`,
      },
      {
        id: 'tas4-exterior',
        type: 'text' as const,
        content: `## What Is an Exterior Angle?

Extend a side of a triangle past a vertex. The angle between that extension and the next side is an **exterior angle**.

An exterior angle and the interior angle right next to it form a straight line, so they are **supplementary**:

$$\\text{exterior angle} + \\text{adjacent interior angle} = 180^\\circ$$

### The Exterior Angle Theorem

$$\\text{exterior angle} = \\text{sum of the two } \\textbf{remote} \\text{ interior angles}$$

The two "remote" interior angles are the ones **not** touching the exterior angle.

> 💡 **Why this is true:** The three interior angles sum to $180^\\circ$, and the exterior angle plus its adjacent interior angle also sum to $180^\\circ$. Subtracting that shared adjacent angle from both leaves: exterior $=$ the other two interiors.`,
      },
      {
        id: 'tas4-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — Using the theorem directly

A triangle has remote interior angles of $50^\\circ$ and $70^\\circ$. The exterior angle at the third vertex is:

$$50^\\circ + 70^\\circ = 120^\\circ$$

> ✅ **Check via supplements:** The adjacent interior angle is $180^\\circ - 50^\\circ - 70^\\circ = 60^\\circ$, and $180^\\circ - 60^\\circ = 120^\\circ$ ✓ — same answer.

### Example 2 — Solving for $x$

An exterior angle measures $(5x)^\\circ$, and the two remote interior angles are $(2x)^\\circ$ and $40^\\circ$.

$$5x = 2x + 40$$
$$3x = 40$$
$$x = \\tfrac{40}{3} \\approx 13.3$$

(The exterior angle theorem sets exterior equal to the **sum** of the two remote interiors.)`,
      },
      {
        id: 'tas4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Exterior Angle Reasoning** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'An exterior angle equals the sum of the two:', options: ['remote interior angles', 'adjacent interior angles', 'exterior angles', 'right angles'] },
            { label: 'An exterior angle and its adjacent interior angle are:', options: ['supplementary', 'complementary', 'equal', 'vertical'] },
            { label: 'Remote interiors $35^\\circ$ and $85^\\circ$ → exterior angle $=$', options: ['$120^\\circ$', '$60^\\circ$', '$110^\\circ$', '$50^\\circ$'] },
          ],
          correctAnswers: ['remote interior angles', 'supplementary', '$120^\\circ$'],
          hint1: 'The Exterior Angle Theorem uses the two interior angles NOT next to the exterior angle — the remote ones.',
          hint2: 'An exterior angle and its adjacent interior angle form a straight line, so they sum to $180^\\circ$ (supplementary).',
          hint3: 'Exterior $=$ sum of remote interiors $= 35^\\circ + 85^\\circ = 120^\\circ$.',
          explanation: 'Exterior angle $=$ sum of the two remote interior angles. It is supplementary to its adjacent interior angle. Here $35^\\circ + 85^\\circ = 120^\\circ$.',
        },
      },
      {
        id: 'tas4-drill',
        type: 'input-boxes' as const,
        content: `**Exterior Angle Practice** 🧮

Use **exterior angle $=$ sum of the two remote interior angles**. Enter the exterior angle in degrees.

**1)** remote interiors $45^\\circ$ and $60^\\circ \\;\\Rightarrow\\;$ exterior $= \\,?$
**2)** remote interiors $90^\\circ$ and $35^\\circ \\;\\Rightarrow\\;$ exterior $= \\,?$
**3)** remote interiors $72^\\circ$ and $38^\\circ \\;\\Rightarrow\\;$ exterior $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['105', '125', '110'],
          hint1: '$45 + 60 = 105$.',
          hint2: '$90 + 35 = 125$.',
          hint3: '$72 + 38 = 110$.',
          explanation: '1) $45 + 60 = 105^\\circ$.  2) $90 + 35 = 125^\\circ$.  3) $72 + 38 = 110^\\circ$. Each is just the sum of the two remote interiors.',
        },
      },
      {
        id: 'tas4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An exterior angle of a triangle is $130^\\circ$. One remote interior angle is $85^\\circ$. The other remote interior angle is:',
              options: ['$45^\\circ$', '$50^\\circ$', '$215^\\circ$', '$95^\\circ$'],
              correctAnswer: 0,
              explanation: 'Exterior $=$ sum of remote interiors, so the missing one is $130^\\circ - 85^\\circ = 45^\\circ$.',
            },
            {
              question: 'An exterior angle is always ____ its adjacent interior angle.',
              options: ['equal to', 'complementary to', 'supplementary to', 'double'],
              correctAnswer: 2,
              explanation: 'An exterior angle and the interior angle next to it form a straight line, so together they make $180^\\circ$ — they are supplementary.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'triangle-angle-sum',
    sections: [
      {
        id: 'tas5-intro',
        type: 'text' as const,
        content: `# 📐 Triangle Angle Sum Theorem

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) use the $180^\\circ$ rule to find a missing angle, (2) classify triangles by angle, (3) solve angle equations with algebra, and (4) apply the Exterior Angle Theorem. Let's put it all together.`,
      },
      {
        id: 'tas5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find a missing interior angle | $180^\\circ - (\\text{other two})$ |
| Other acute angle in a right triangle | $90^\\circ - (\\text{known acute})$ |
| Solve for a variable | set the sum of all angles $= 180^\\circ$ |
| Find an exterior angle | sum of the two remote interior angles |
| Exterior + adjacent interior | $= 180^\\circ$ (supplementary) |

> ⚠️ **Common traps:** Don't confuse the *exterior* angle with its *adjacent* interior angle — they're supplements, not equals. And remember a triangle can have **at most one** angle that is $90^\\circ$ or larger.`,
      },
      {
        id: 'tas5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A triangle has angles $(2x)^\\circ$, $(3x - 10)^\\circ$, and $(x + 10)^\\circ$. What is $x$?',
              options: ['$x = 30$', '$x = 25$', '$x = 36$', '$x = 20$'],
              correctAnswer: 0,
              explanation: '$2x + (3x - 10) + (x + 10) = 6x = 180 \\Rightarrow x = 30$. (The $-10$ and $+10$ cancel.) Angles: $60^\\circ, 80^\\circ, 40^\\circ$.',
            },
            {
              question: 'In an isosceles triangle, the vertex angle is $40^\\circ$. Each base angle is:',
              options: ['$70^\\circ$', '$60^\\circ$', '$50^\\circ$', '$140^\\circ$'],
              correctAnswer: 0,
              explanation: 'The two equal base angles share $180^\\circ - 40^\\circ = 140^\\circ$, so each is $140^\\circ \\div 2 = 70^\\circ$.',
            },
          ],
        },
      },
      {
        id: 'tas5-drill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

Enter each answer in degrees (number only).

**1)** A triangle has angles $55^\\circ$ and $80^\\circ$. The third angle $= \\,?$
**2)** A right triangle has one acute angle of $19^\\circ$. The other acute angle $= \\,?$
**3)** Remote interior angles $48^\\circ$ and $66^\\circ$. The exterior angle $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['45', '71', '114'],
          hint1: '$180 - 55 - 80 = 45$.',
          hint2: '$90 - 19 = 71$ (acute angles of a right triangle are complementary).',
          hint3: '$48 + 66 = 114$ (exterior $=$ sum of remote interiors).',
          explanation: '1) $180 - 55 - 80 = 45^\\circ$.  2) $90 - 19 = 71^\\circ$.  3) $48 + 66 = 114^\\circ$.',
        },
      },
      {
        id: 'tas5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'The interior angles of a triangle are $x$, $x$, and $90^\\circ$. What is $x$?',
              options: ['$45^\\circ$', '$30^\\circ$', '$60^\\circ$', '$90^\\circ$'],
              correctAnswer: 0,
              explanation: '$x + x + 90 = 180 \\Rightarrow 2x = 90 \\Rightarrow x = 45^\\circ$ — the $45$-$45$-$90$ right isosceles triangle.',
            },
            {
              question: 'Which is NOT possible for a triangle’s three interior angles?',
              options: ['$1^\\circ,\\ 1^\\circ,\\ 178^\\circ$', '$60^\\circ,\\ 60^\\circ,\\ 60^\\circ$', '$95^\\circ,\\ 95^\\circ,\\ 10^\\circ$', '$30^\\circ,\\ 60^\\circ,\\ 90^\\circ$'],
              correctAnswer: 2,
              explanation: '$95^\\circ + 95^\\circ + 10^\\circ = 200^\\circ \\ne 180^\\circ$ — and a triangle can’t have two obtuse angles. The other three each sum to exactly $180^\\circ$.',
            },
            {
              question: 'An exterior angle of a triangle measures $115^\\circ$. The two remote interior angles could be:',
              options: ['$65^\\circ$ and $50^\\circ$', '$60^\\circ$ and $60^\\circ$', '$115^\\circ$ and $65^\\circ$', '$50^\\circ$ and $30^\\circ$'],
              correctAnswer: 0,
              explanation: 'The remote interiors must sum to the exterior angle: $65^\\circ + 50^\\circ = 115^\\circ$ ✓. The others sum to $120^\\circ$, $180^\\circ$, and $80^\\circ$.',
            },
          ],
        },
      },
    ],
  },
]
