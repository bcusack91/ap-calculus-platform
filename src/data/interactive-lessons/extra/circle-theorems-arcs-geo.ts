import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Circle Theorems and Arc Relationships (Geometry).
 * Registry key: 'circle-theorems-arcs-geo' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'circle-theorems-arcs-geo',
    sections: [
      {
        id: 'cta1-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Theorems & Arc Relationships

**Part 1 of 5 — Arcs, Central Angles & the Vocabulary of Circles**

---

### Topics in This Part

| Section |
|---------|
| Parts of a Circle |
| Arcs and Their Measures |
| Central Angles = Their Arcs |
| Arc Addition |

> 🔑 **Key Concept:** Almost every circle theorem connects an **angle** to an **arc**. Before we can use those theorems, we need to measure arcs — and that begins with the **central angle**.`,
      },
      {
        id: 'cta1-vocab',
        type: 'text' as const,
        content: `## Parts of a Circle

Every circle theorem is built from a few key parts:

| Term | Meaning |
|------|---------|
| **Center** | The fixed point all points are equidistant from |
| **Radius** | A segment from the center to the circle |
| **Chord** | A segment with **both** endpoints on the circle |
| **Diameter** | A chord through the center (the longest chord) |
| **Secant** | A **line** that crosses the circle at two points |
| **Tangent** | A line touching the circle at exactly **one** point |
| **Arc** | A portion of the circle between two points |

> 💡 A **diameter** is a special chord, and a **secant** is the line that a chord lies on. Knowing which is which decides *which theorem* applies.`,
      },
      {
        id: 'cta1-arcs-text',
        type: 'text' as const,
        content: `## Arcs and Their Measures

Two points on a circle split it into two arcs:

- A **minor arc** is the shorter arc (measure $< 180°$). Named with **two** letters, e.g. $\\overgroup{AB}$.
- A **major arc** is the longer arc (measure $> 180°$). Named with **three** letters, e.g. $\\overgroup{ACB}$, to make the path clear.
- A **semicircle** is exactly half the circle (measure $= 180°$), cut off by a diameter.

The **measure** of an arc is *not* its length — it is the number of degrees of the central angle that opens onto it. A full circle is always $360°$:

$$\\text{minor arc} + \\text{major arc} = 360°$$

> 🔑 **Key Idea:** Arc *measure* is in degrees and tells you "how much turn." Arc *length* is an actual distance and depends on the radius. This lesson is about **measure**.`,
      },
      {
        id: 'cta1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Part** 🔽

Match each description to the correct term.`,
        exercise: {
          dropdowns: [
            { label: 'A line touching the circle at exactly one point:', options: ['tangent', 'secant', 'chord', 'radius'] },
            { label: 'A chord that passes through the center:', options: ['diameter', 'tangent', 'arc', 'radius'] },
            { label: 'An arc measuring more than $180°$:', options: ['major arc', 'minor arc', 'semicircle', 'central angle'] },
          ],
          correctAnswers: ['tangent', 'diameter', 'major arc'],
          hint1: 'A tangent "touches" once; a secant "cuts through" at two points.',
          hint2: 'The longest chord goes straight through the center — that is the diameter.',
          hint3: 'Minor $< 180°$, semicircle $= 180°$, major $> 180°$.',
          explanation: 'A tangent touches at one point; a diameter is a chord through the center; an arc over $180°$ is a major arc.',
        },
      },
      {
        id: 'cta1-central',
        type: 'text' as const,
        content: `## The Central Angle = Its Arc

A **central angle** has its vertex at the **center** of the circle. This gives us our very first theorem — and the simplest one:

$$\\boxed{\\text{central angle} = \\text{intercepted arc}}$$

If central angle $\\angle AOB = 70°$, then the minor arc $\\overgroup{AB} = 70°$ as well.

### Example

A central angle measures $110°$. Then:
- minor arc $\\overgroup{AB} = 110°$
- major arc $\\overgroup{ACB} = 360° - 110° = 250°$

> 💡 This is the **only** angle that equals its arc *exactly*. Every other angle in this lesson is some fraction or combination of arcs — so always ask first: "Is the vertex at the center?"`,
      },
      {
        id: 'cta1-central-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A central angle of a circle measures $85°$. What is the measure of the arc it intercepts?',
              options: ['$85°$', '$42.5°$', '$170°$', '$275°$'],
              correctAnswer: 0,
              explanation: 'A central angle is equal to its intercepted arc. So the arc measures $85°$.',
            },
            {
              question: 'A minor arc measures $130°$. What is the measure of the major arc with the same endpoints?',
              options: ['$130°$', '$230°$', '$50°$', '$360°$'],
              correctAnswer: 1,
              explanation: 'The two arcs together make a full circle: $360° - 130° = 230°$.',
            },
            {
              question: 'Which segment has BOTH of its endpoints on the circle but does NOT pass through the center?',
              options: ['A radius', 'A non-diameter chord', 'A tangent', 'A central angle'],
              correctAnswer: 1,
              explanation: 'A chord has both endpoints on the circle. A diameter is the special chord through the center, so a chord that misses the center is a non-diameter chord.',
            },
          ],
        },
      },
      {
        id: 'cta1-addition',
        type: 'text' as const,
        content: `## Arc Addition

Adjacent arcs add, just like adjacent angles:

$$\\overgroup{AB} + \\overgroup{BC} = \\overgroup{ABC}$$

### Worked Example

Points $A$, $B$, $C$ lie on a circle in order. If $\\overgroup{AB} = 75°$ and $\\overgroup{BC} = 60°$, then:

$$\\overgroup{ABC} = 75° + 60° = 135°$$

And the remaining arc back to $A$ is $360° - 135° = 225°$.

> ⚠️ **Common Mistake:** Don't confuse a **semicircle** ($180°$) with a **major arc** ($>180°$). A diameter creates two semicircles, each exactly $180°$.`,
      },
      {
        id: 'cta1-addition-drill',
        type: 'input-boxes' as const,
        content: `**Arc Arithmetic** 🧮

Points $P$, $Q$, $R$ lie on a circle in that order. Use arc addition and the $360°$ rule.

**1)** If $\\overgroup{PQ} = 40°$ and $\\overgroup{QR} = 95°$, then $\\overgroup{PQR} = \\,?$ degrees
**2)** Using part 1, the remaining major arc $\\overgroup{RP}$ (back to $P$) $= \\,?$ degrees
**3)** A central angle intercepts an arc of $148°$. The central angle $= \\,?$ degrees`,
        exercise: {
          boxes: 3,
          correctAnswers: ['135', '225', '148'],
          hint1: 'Add the two adjacent arcs: $40 + 95$.',
          hint2: 'Subtract the $135°$ arc from the full circle: $360 - 135$.',
          hint3: 'A central angle equals its intercepted arc exactly.',
          explanation: '1) $\\overgroup{PQR} = 40° + 95° = 135°$.  2) $\\overgroup{RP} = 360° - 135° = 225°$.  3) The central angle equals the arc, so $148°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'circle-theorems-arcs-geo',
    sections: [
      {
        id: 'cta2-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Theorems & Arc Relationships

**Part 2 of 5 — The Inscribed Angle Theorem**

---

> 🔑 **The Big One:** An **inscribed angle** has its vertex **on** the circle. The Inscribed Angle Theorem says it is **half** of its intercepted arc. This single theorem powers most circle problems.`,
      },
      {
        id: 'cta2-theorem',
        type: 'text' as const,
        content: `## The Inscribed Angle Theorem

An **inscribed angle** is formed by two chords that share an endpoint **on** the circle. The arc "inside" the angle is the **intercepted arc**.

$$\\boxed{\\text{inscribed angle} = \\frac{1}{2}\\,(\\text{intercepted arc})}$$

Equivalently, the arc is **twice** the inscribed angle.

### Compare to the Central Angle

| Vertex location | Angle vs. its arc |
|-----------------|-------------------|
| **Center** (central angle) | angle $=$ arc |
| **On the circle** (inscribed angle) | angle $= \\frac{1}{2}$ arc |

### Worked Example

An inscribed angle intercepts an arc of $100°$. Then:

$$\\text{inscribed angle} = \\frac{1}{2}(100°) = 50°$$

Going the other way: if the inscribed angle is $35°$, its intercepted arc is $2(35°) = 70°$.`,
      },
      {
        id: 'cta2-find-drill',
        type: 'input-boxes' as const,
        content: `**Half the Arc** 🧮

Use inscribed angle $= \\frac{1}{2}\\,(\\text{arc})$, and arc $= 2 \\times (\\text{inscribed angle})$.

**1)** An inscribed angle intercepts a $146°$ arc. The angle $= \\,?$ degrees
**2)** An inscribed angle measures $52°$. Its intercepted arc $= \\,?$ degrees
**3)** A central angle of $90°$ and an inscribed angle intercept the **same** arc. The inscribed angle $= \\,?$ degrees`,
        exercise: {
          boxes: 3,
          correctAnswers: ['73', '104', '45'],
          hint1: 'Halve the arc: $146 \\div 2$.',
          hint2: 'Double the angle: $52 \\times 2$.',
          hint3: 'The central angle equals the arc ($90°$); the inscribed angle is half of that arc.',
          explanation: '1) $\\frac{1}{2}(146) = 73°$.  2) $2(52) = 104°$.  3) The arc is $90°$, so the inscribed angle is $\\frac{1}{2}(90) = 45°$.',
        },
      },
      {
        id: 'cta2-corollary',
        type: 'text' as const,
        content: `## Powerful Corollary: Same Arc → Same Angle

Because every inscribed angle is **half its arc**, two inscribed angles that intercept the **same arc** must be **equal** — no matter where their vertices sit on the circle.

$$\\angle ACB = \\angle ADB \\quad \\text{(both intercept arc } \\overgroup{AB}\\text{)}$$

### Why this is so useful

In many figures you'll see several angles all "looking at" the same chord. They're all equal. This turns scary diagrams into simple ones.

> 💡 **Pro tip:** When two angles open onto the *same* chord from the *same side*, set them equal. When you see a central and inscribed angle on the same arc, the central is **twice** the inscribed.`,
      },
      {
        id: 'cta2-corollary-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Inscribed angle $\\angle ACB$ and inscribed angle $\\angle ADB$ both intercept arc $\\overgroup{AB} = 80°$. What is $\\angle ADB$?',
              options: ['$80°$', '$40°$', '$160°$', '$20°$'],
              correctAnswer: 1,
              explanation: 'Both angles intercept the same $80°$ arc, so each equals $\\frac{1}{2}(80°) = 40°$.',
            },
            {
              question: 'A central angle and an inscribed angle intercept the SAME arc. The inscribed angle is $30°$. What is the central angle?',
              options: ['$30°$', '$15°$', '$60°$', '$90°$'],
              correctAnswer: 2,
              explanation: 'The arc is $2(30°) = 60°$. A central angle equals its arc, so it is $60°$ — twice the inscribed angle.',
            },
          ],
        },
      },
      {
        id: 'cta2-summary',
        type: 'text' as const,
        content: `## Putting It Together

Two theorems, side by side, decided entirely by **where the vertex sits**:

| Vertex | Theorem |
|--------|---------|
| At the **center** | angle $=$ arc |
| **On** the circle | angle $= \\frac{1}{2}$ arc |

And the headline corollary: angles on the **same arc** are **equal**, while a **central** angle is **twice** an **inscribed** angle on that same arc.

> 💡 Keep this picture in mind for the next dropdown — every item is just "central vs. inscribed."`,
      },
      {
        id: 'cta2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Relationship** 🔽

For each pair, choose how the angle relates to the arc it intercepts.`,
        exercise: {
          dropdowns: [
            { label: 'A central angle, compared to its arc, is:', options: ['equal to it', 'half of it', 'twice it', 'unrelated'] },
            { label: 'An inscribed angle, compared to its arc, is:', options: ['equal to it', 'half of it', 'twice it', 'unrelated'] },
            { label: 'Two inscribed angles on the same arc are:', options: ['equal to each other', 'supplementary', 'complementary', 'always $90°$'] },
          ],
          correctAnswers: ['equal to it', 'half of it', 'equal to each other'],
          hint1: 'Central angle: vertex at the center → it matches its arc exactly.',
          hint2: 'Inscribed angle: vertex on the circle → it is half its arc.',
          hint3: 'Same arc means same half-arc, so the inscribed angles are equal.',
          explanation: 'Central $=$ arc; inscribed $= \\frac{1}{2}$ arc; two inscribed angles on the same arc are equal because each is half the same arc.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'circle-theorems-arcs-geo',
    sections: [
      {
        id: 'cta3-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Theorems & Arc Relationships

**Part 3 of 5 — Special Inscribed Angles: Semicircles, Cyclic Quadrilaterals & Tangent–Chord**

---

> 🔑 **From one theorem, three classics:** The Inscribed Angle Theorem gives us (1) the **right angle in a semicircle**, (2) **supplementary opposite angles** in a cyclic quadrilateral, and (3) the **tangent–chord angle**.`,
      },
      {
        id: 'cta3-thales',
        type: 'text' as const,
        content: `## Angle in a Semicircle (Thales' Theorem)

If the intercepted arc is a **semicircle** ($180°$), the inscribed angle is:

$$\\frac{1}{2}(180°) = 90°$$

So **an angle inscribed in a semicircle is always a right angle**. Equivalently: if a triangle's longest side is a **diameter**, the angle opposite it is $90°$.

### Worked Example

$\\overline{AB}$ is a diameter and $C$ is any other point on the circle. Then $\\angle ACB = 90°$ — guaranteed, wherever $C$ is.

If $\\angle CAB = 28°$, then in right triangle $ACB$:

$$\\angle ABC = 180° - 90° - 28° = 62°$$

> 💡 Spotting a **diameter** in a problem is a free $90°$. Always look for it.`,
      },
      {
        id: 'cta3-thales-drill',
        type: 'input-boxes' as const,
        content: `**Right Angle in a Semicircle** 🧮

$\\overline{AB}$ is a diameter of a circle and $C$ is another point on the circle, so $\\angle ACB = 90°$.

**1)** $\\angle ACB = \\,?$ degrees
**2)** If $\\angle CAB = 35°$, then $\\angle ABC = \\,?$ degrees
**3)** The arc $\\overgroup{ACB}$ cut off by the diameter measures $\\,?$ degrees`,
        exercise: {
          boxes: 3,
          correctAnswers: ['90', '55', '180'],
          hint1: 'An angle inscribed in a semicircle is always a right angle.',
          hint2: 'The triangle’s angles sum to $180°$: $180 - 90 - 35$.',
          hint3: 'A diameter splits the circle into two semicircles, each $180°$.',
          explanation: '1) Inscribed in a semicircle, so $90°$.  2) $180 - 90 - 35 = 55°$.  3) A semicircle is $180°$.',
        },
      },
      {
        id: 'cta3-cyclic',
        type: 'text' as const,
        content: `## Cyclic Quadrilaterals

A **cyclic quadrilateral** has all four vertices on a circle. Its **opposite angles are supplementary** (add to $180°$):

$$\\angle A + \\angle C = 180° \\qquad \\angle B + \\angle D = 180°$$

**Why?** Opposite angles intercept arcs that together make the whole circle. Each angle is half its arc, so together they are half of $360° = 180°$.

### Worked Example

In cyclic quadrilateral $ABCD$, $\\angle A = 95°$. Then the opposite angle:

$$\\angle C = 180° - 95° = 85°$$

> ⚠️ **Only opposite angles** are supplementary. Adjacent angles ($\\angle A$ and $\\angle B$) are **not** generally supplementary.`,
      },
      {
        id: 'cta3-cyclic-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In cyclic quadrilateral $ABCD$, $\\angle B = 110°$. What is the opposite angle $\\angle D$?',
              options: ['$110°$', '$70°$', '$55°$', '$250°$'],
              correctAnswer: 1,
              explanation: 'Opposite angles of a cyclic quadrilateral are supplementary: $\\angle D = 180° - 110° = 70°$.',
            },
            {
              question: 'A triangle is inscribed in a circle so that one side is a diameter. What is the angle opposite that diameter?',
              options: ['$45°$', '$60°$', '$90°$', 'It depends on the triangle'],
              correctAnswer: 2,
              explanation: 'An angle inscribed in a semicircle is a right angle, so the angle opposite the diameter is $90°$ — no matter the triangle.',
            },
          ],
        },
      },
      {
        id: 'cta3-tangent-chord',
        type: 'text' as const,
        content: `## Tangent–Chord Angle

When a **tangent** and a **chord** meet at the point of tangency, the angle they form is **half the intercepted arc** — the same "half the arc" rule, just with a tangent as one side:

$$\\text{tangent–chord angle} = \\frac{1}{2}\\,(\\text{intercepted arc})$$

### Worked Example

A chord meets a tangent at the point of tangency, cutting off an arc of $130°$ on the side of the angle. Then:

$$\\text{angle} = \\frac{1}{2}(130°) = 65°$$

> 🔑 **Pattern so far:** Central angle $=$ arc. **Everything else with its vertex ON the circle** (inscribed angle, tangent–chord angle) $= \\frac{1}{2}$ arc.`,
      },
      {
        id: 'cta3-tangent-dropdown',
        type: 'dropdown-select' as const,
        content: `**Classify & Compute** 🔽

Choose the correct value for each special case.`,
        exercise: {
          dropdowns: [
            { label: 'Angle inscribed in a semicircle:', options: ['$90°$', '$180°$', '$45°$', '$60°$'] },
            { label: 'Cyclic quad: angle opposite a $72°$ angle:', options: ['$108°$', '$72°$', '$18°$', '$144°$'] },
            { label: 'Tangent–chord angle on a $150°$ arc:', options: ['$75°$', '$150°$', '$30°$', '$300°$'] },
          ],
          correctAnswers: ['$90°$', '$108°$', '$75°$'],
          hint1: 'Semicircle arc $= 180°$, and the inscribed angle is half of it.',
          hint2: 'Opposite angles in a cyclic quadrilateral are supplementary: $180 - 72$.',
          hint3: 'Tangent–chord angle is half its intercepted arc: $\\frac{1}{2}(150)$.',
          explanation: 'Semicircle: $\\frac{1}{2}(180) = 90°$. Cyclic: $180 - 72 = 108°$. Tangent–chord: $\\frac{1}{2}(150) = 75°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'circle-theorems-arcs-geo',
    sections: [
      {
        id: 'cta4-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Theorems & Arc Relationships

**Part 4 of 5 — Angles from Chords, Secants & Tangents**

---

> 🔑 **Where is the vertex?** That one question selects the formula. **Inside** the circle → *average* of two arcs. **Outside** the circle → *half the difference* of two arcs.`,
      },
      {
        id: 'cta4-interior',
        type: 'text' as const,
        content: `## Two Chords Meeting Inside the Circle

When two chords cross **inside** a circle, each angle is the **average** of the two arcs it (and its vertical partner) intercept:

$$\\text{angle} = \\frac{1}{2}\\,(\\text{arc}_1 + \\text{arc}_2)$$

Here $\\text{arc}_1$ is the arc "inside" the angle and $\\text{arc}_2$ is the arc inside its vertical angle.

### Worked Example

Two chords cross inside a circle. The arc inside the angle is $70°$ and the arc inside its vertical angle is $50°$:

$$\\text{angle} = \\frac{1}{2}(70° + 50°) = \\frac{1}{2}(120°) = 60°$$

> 💡 An inscribed angle ($\\frac{1}{2}$ of one arc) is just the special case where the vertex slides out to the circle and one of the two arcs shrinks to $0°$.`,
      },
      {
        id: 'cta4-interior-drill',
        type: 'input-boxes' as const,
        content: `**Average the Arcs (Vertex Inside)** 🧮

Two chords intersect inside a circle. Use angle $= \\frac{1}{2}(\\text{arc}_1 + \\text{arc}_2)$.

**1)** Arcs of $80°$ and $40°$. Angle $= \\,?$ degrees
**2)** Arcs of $130°$ and $90°$. Angle $= \\,?$ degrees
**3)** The angle is $75°$ and one intercepted arc is $60°$. The other arc $= \\,?$ degrees`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '110', '90'],
          hint1: 'Average the arcs: $\\frac{1}{2}(80 + 40)$.',
          hint2: '$\\frac{1}{2}(130 + 90) = \\frac{1}{2}(220)$.',
          hint3: 'If $75 = \\frac{1}{2}(60 + x)$, then $60 + x = 150$, so $x = 90$.',
          explanation: '1) $\\frac{1}{2}(120) = 60°$.  2) $\\frac{1}{2}(220) = 110°$.  3) $2(75) = 150$ total, minus $60$, gives $90°$.',
        },
      },
      {
        id: 'cta4-exterior',
        type: 'text' as const,
        content: `## Vertex Outside the Circle

When two secants, two tangents, or a secant and a tangent meet **outside** the circle, the angle is **half the difference** of the intercepted arcs (far arc minus near arc):

$$\\text{angle} = \\frac{1}{2}\\,(\\text{far arc} - \\text{near arc})$$

This works for all three exterior cases:

| Two lines from the outside point | Formula |
|----------------------------------|---------|
| Two secants | $\\frac{1}{2}(\\text{far} - \\text{near})$ |
| Secant + tangent | $\\frac{1}{2}(\\text{far} - \\text{near})$ |
| Two tangents | $\\frac{1}{2}(\\text{far} - \\text{near})$ |

### Worked Example

Two secants from an external point intercept a far arc of $120°$ and a near arc of $40°$:

$$\\text{angle} = \\frac{1}{2}(120° - 40°) = \\frac{1}{2}(80°) = 40°$$

> ⚠️ **Inside vs. outside:** *Inside* you **add** the arcs (average); *outside* you **subtract** them (half the difference). Mixing these up is the #1 error on circle angle problems.`,
      },
      {
        id: 'cta4-exterior-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Two secants meet OUTSIDE a circle, intercepting a far arc of $160°$ and a near arc of $60°$. What is the angle at the external point?',
              options: ['$50°$', '$110°$', '$100°$', '$220°$'],
              correctAnswer: 0,
              explanation: 'Outside the circle, angle $= \\frac{1}{2}(\\text{far} - \\text{near}) = \\frac{1}{2}(160° - 60°) = \\frac{1}{2}(100°) = 50°$.',
            },
            {
              question: 'Two chords cross INSIDE a circle, intercepting arcs of $50°$ and $70°$. What is the angle?',
              options: ['$10°$', '$120°$', '$60°$', '$35°$'],
              correctAnswer: 2,
              explanation: 'Inside, angle $= \\frac{1}{2}(\\text{arc}_1 + \\text{arc}_2) = \\frac{1}{2}(50° + 70°) = \\frac{1}{2}(120°) = 60°$.',
            },
            {
              question: 'For an angle whose vertex is OUTSIDE the circle, you should:',
              options: ['Add the two arcs and halve', 'Subtract the arcs and halve', 'Add the two arcs', 'Take half of one arc only'],
              correctAnswer: 1,
              explanation: 'An exterior angle equals half the DIFFERENCE of the intercepted arcs (far minus near).',
            },
          ],
        },
      },
      {
        id: 'cta4-decision',
        type: 'text' as const,
        content: `## One Decision, Four Formulas

Everything in this lesson collapses to a single question — **where is the vertex?**

| Vertex | Angle |
|--------|-------|
| Center | arc |
| On the circle | $\\frac{1}{2}$ arc |
| **Inside** | $\\frac{1}{2}(\\text{arc}_1 + \\text{arc}_2)$ — **add** |
| **Outside** | $\\frac{1}{2}(\\text{far} - \\text{near})$ — **subtract** |

As the vertex moves from the center, outward to the circle, then outside, the angle for the *same* arcs gets **smaller**. That's why outside angles use a difference: they "see" less of the circle.

> 💡 Memory hook: **In**side → add (the angle is "full of" circle); **out**side → subtract (the circle is "far away").`,
      },
      {
        id: 'cta4-inout-dropdown',
        type: 'dropdown-select' as const,
        content: `**Inside or Outside?** 🔽

Decide which operation to use, then read off the result.`,
        exercise: {
          dropdowns: [
            { label: 'Vertex INSIDE the circle → you:', options: ['add the arcs, then halve', 'subtract the arcs, then halve', 'use one arc only'] },
            { label: 'Vertex OUTSIDE the circle → you:', options: ['add the arcs, then halve', 'subtract the arcs, then halve', 'use one arc only'] },
            { label: 'Outside angle from arcs $200°$ and $80°$:', options: ['$60°$', '$140°$', '$120°$', '$280°$'] },
          ],
          correctAnswers: ['add the arcs, then halve', 'subtract the arcs, then halve', '$60°$'],
          hint1: 'Inside the circle, the angle is the AVERAGE of the two arcs.',
          hint2: 'Outside the circle, the angle is half the DIFFERENCE of the arcs.',
          hint3: '$\\frac{1}{2}(200 - 80) = \\frac{1}{2}(120) = 60°$.',
          explanation: 'Inside → average (add, halve). Outside → half the difference (subtract, halve): $\\frac{1}{2}(200 - 80) = 60°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'circle-theorems-arcs-geo',
    sections: [
      {
        id: 'cta5-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Theorems & Arc Relationships

**Part 5 of 5 — Segment Lengths & Mastery Check**

---

We've measured arcs and angles. Now we measure **lengths** of the chords, secants, and tangents themselves — then put everything together.`,
      },
      {
        id: 'cta5-segments',
        type: 'text' as const,
        content: `## Segment Length Relationships

These "power of a point" rules relate the **lengths** of segments — not their arcs.

**1) Two chords intersecting inside:** the products of the two pieces are equal.

$$a \\cdot b = c \\cdot d$$

**2) Two secants from an external point:** (whole) $\\times$ (external part) is equal for both.

$$(\\text{whole}_1)(\\text{external}_1) = (\\text{whole}_2)(\\text{external}_2)$$

**3) Tangent and secant from an external point:** the tangent squared equals (whole secant)(external part).

$$t^2 = (\\text{whole})(\\text{external})$$

> 🔑 **Theme:** Every rule multiplies a segment by its matching partner. Inside the circle it's piece $\\times$ piece; outside it's whole $\\times$ external.`,
      },
      {
        id: 'cta5-chord-drill',
        type: 'input-boxes' as const,
        content: `**Power of a Point** 🧮

**1)** Two chords cross inside a circle. One chord is split into $4$ and $6$; the other into $3$ and $x$. Using $4 \\cdot 6 = 3 \\cdot x$, find $x = \\,?$
**2)** A tangent of length $t$ and a secant from the same external point: the secant's whole length is $16$ and its external part is $4$. Using $t^2 = 16 \\cdot 4$, find $t = \\,?$
**3)** Two chords cross: one chord splits into $8$ and $3$; the other into $6$ and $y$. Find $y = \\,?$ *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '8', '4'],
          hint1: '$4 \\cdot 6 = 24$, so $3x = 24$ and $x = 8$.',
          hint2: '$t^2 = 16 \\cdot 4 = 64$, so $t = \\sqrt{64} = 8$.',
          hint3: '$8 \\cdot 3 = 24$, so $6y = 24$ and $y = 4$.',
          explanation: '1) $24 = 3x \\Rightarrow x = 8$.  2) $t^2 = 64 \\Rightarrow t = 8$.  3) $24 = 6y \\Rightarrow y = 4$.',
        },
      },
      {
        id: 'cta5-reference',
        type: 'text' as const,
        content: `## Quick Reference — The Whole Lesson

| Vertex location | Angle rule |
|-----------------|-----------|
| **Center** | angle $=$ arc |
| **On circle** (inscribed / tangent–chord) | angle $= \\frac{1}{2}$ arc |
| **Inside** (two chords) | angle $= \\frac{1}{2}(\\text{arc}_1 + \\text{arc}_2)$ |
| **Outside** (secants/tangents) | angle $= \\frac{1}{2}(\\text{far} - \\text{near})$ |

| Special case | Result |
|--------------|--------|
| Angle in a semicircle | $90°$ |
| Cyclic quad, opposite angles | sum to $180°$ |
| Segments (two chords) | piece $\\cdot$ piece $=$ piece $\\cdot$ piece |
| Segments (tangent + secant) | $t^2 = (\\text{whole})(\\text{external})$ |

> ⚠️ **Always ask first:** *Where is the vertex?* That decides the angle formula every single time.`,
      },
      {
        id: 'cta5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An inscribed angle intercepts an arc of $124°$. What is the inscribed angle?',
              options: ['$124°$', '$62°$', '$248°$', '$56°$'],
              correctAnswer: 1,
              explanation: 'Inscribed angle $= \\frac{1}{2}(\\text{arc}) = \\frac{1}{2}(124°) = 62°$.',
            },
            {
              question: 'Two chords intersect inside a circle, splitting into pieces $5, 6$ and $3, x$. Find $x$.',
              options: ['$10$', '$2$', '$9$', '$18$'],
              correctAnswer: 0,
              explanation: 'Piece $\\times$ piece is equal: $5 \\cdot 6 = 3 \\cdot x$, so $30 = 3x$ and $x = 10$.',
            },
            {
              question: 'In cyclic quadrilateral $ABCD$, $\\angle A = 88°$. What is $\\angle C$?',
              options: ['$88°$', '$92°$', '$44°$', '$176°$'],
              correctAnswer: 1,
              explanation: 'Opposite angles are supplementary: $\\angle C = 180° - 88° = 92°$.',
            },
          ],
        },
      },
      {
        id: 'cta5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A central angle intercepts a $108°$ arc, and an inscribed angle intercepts the same arc. What are the two angles, respectively?',
              options: ['$108°$ and $54°$', '$54°$ and $108°$', '$108°$ and $108°$', '$54°$ and $54°$'],
              correctAnswer: 0,
              explanation: 'The central angle equals its arc ($108°$); the inscribed angle is half the arc ($\\frac{1}{2}(108°) = 54°$).',
            },
            {
              question: 'Two secants meet outside a circle, intercepting arcs of $140°$ (far) and $50°$ (near). What is the angle at the external point?',
              options: ['$95°$', '$45°$', '$90°$', '$190°$'],
              correctAnswer: 1,
              explanation: 'Outside: angle $= \\frac{1}{2}(\\text{far} - \\text{near}) = \\frac{1}{2}(140° - 50°) = \\frac{1}{2}(90°) = 45°$.',
            },
            {
              question: 'A triangle is inscribed in a circle with one side as a diameter. One of the other angles is $40°$. What are the remaining two angles?',
              options: ['$90°$ and $50°$', '$60°$ and $80°$', '$90°$ and $40°$', '$70°$ and $70°$'],
              correctAnswer: 0,
              explanation: 'The angle opposite the diameter is $90°$ (semicircle). The third angle is $180° - 90° - 40° = 50°$.',
            },
          ],
        },
      },
    ],
  },
]
