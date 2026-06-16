import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Inscribed Angles (Geometry).
 * Registry key: 'inscribed-angles' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'inscribed-angles',
    sections: [
      {
        id: 'ia1-intro',
        type: 'text' as const,
        content: `# ⭕ Inscribed Angles

**Part 1 of 5 — Arcs, Central Angles & Intercepted Arcs**

---

### Topics in This Part

| Section |
|---------|
| Chords, Arcs & the Language of Circles |
| Central Angles = Arc Measure |
| What an Angle "Intercepts" |

> 🔑 **Key Concept:** Every angle theorem in this lesson compares an angle to the **arc it cuts off**. Before we can master inscribed angles in Part 2, we have to be fluent in *arcs* — how they're measured and which arc a given angle "catches." That's the whole job of Part 1.`,
      },
      {
        id: 'ia1-vocab',
        type: 'text' as const,
        content: `## The Language of Circles

A few words appear in every problem. Lock them in now:

| Term | What it is |
|------|-----------|
| **Center** | The fixed point every point on the circle is equidistant from |
| **Radius** | A segment from the center to the circle |
| **Chord** | A segment whose **endpoints both lie on the circle** |
| **Diameter** | A chord that passes through the center (the longest chord) |
| **Arc** | A piece of the circle itself — the curved path between two points |

An **arc** is named by its endpoints, like $\\overset{\\frown}{AB}$. Two points actually split a circle into **two** arcs:

- a **minor arc** (the shorter one, less than $180°$), and
- a **major arc** (the longer one, more than $180°$).

> 💡 To avoid ambiguity, a major arc is usually named with **three** letters — $\\overset{\\frown}{ABC}$ — so you know which way around the circle you mean.`,
      },
      {
        id: 'ia1-vocab-dropdown',
        type: 'dropdown-select' as const,
        content: `**Circle Vocabulary** 🔽

Pick the term that fits each description.`,
        exercise: {
          dropdowns: [
            { label: 'A segment with both endpoints on the circle:', options: ['chord', 'radius', 'arc', 'tangent'] },
            { label: 'A chord that passes through the center:', options: ['diameter', 'radius', 'minor arc', 'central angle'] },
            { label: 'An angle whose vertex is at the center:', options: ['central angle', 'inscribed angle', 'major arc', 'chord'] },
          ],
          correctAnswers: ['chord', 'diameter', 'central angle'],
          hint1: 'A radius goes center-to-edge; a segment touching the circle at *both* ends is something else.',
          hint2: 'The longest chord runs straight through the middle.',
          hint3: 'A central angle is "centered" — its vertex is the center point $O$.',
          explanation: 'A **chord** has both endpoints on the circle; a **diameter** is a chord through the center; a **central angle** has its vertex at the center.',
        },
      },
      {
        id: 'ia1-central',
        type: 'text' as const,
        content: `## Central Angles Measure Their Arcs

A **central angle** has its vertex at the **center** of the circle. Its two sides are radii, and they cut off an arc.

$$\\textbf{The measure of a minor arc} = \\textbf{the measure of its central angle.}$$

So if central angle $\\angle AOB = 70°$ (where $O$ is the center), then the minor arc it opens onto, $\\overset{\\frown}{AB}$, is also $70°$.

Because a full circle is $360°$:

$$\\text{minor arc} + \\text{major arc} = 360°.$$

### Example

If $\\overset{\\frown}{AB} = 70°$, then the major arc $\\overset{\\frown}{ACB} = 360° - 70° = 290°$.

> ⚠️ **Don't confuse arc *measure* with arc *length*.** Arc **measure** is in degrees and depends only on the central angle. Arc **length** is an actual distance and also depends on the radius. This lesson is entirely about arc *measure*.`,
      },
      {
        id: 'ia1-central-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A central angle of a circle measures $115°$. What is the measure of the minor arc it intercepts?',
              options: ['$115°$', '$57.5°$', '$230°$', '$245°$'],
              correctAnswer: 0,
              explanation: 'A central angle has the **same** measure as its intercepted minor arc, so the arc is $115°$. (Halving is what *inscribed* angles do — that comes in Part 2.)',
            },
            {
              question: 'If a minor arc measures $84°$, what is the measure of the major arc with the same endpoints?',
              options: ['$84°$', '$96°$', '$276°$', '$180°$'],
              correctAnswer: 2,
              explanation: 'The two arcs together make a full circle, so the major arc $= 360° - 84° = 276°$.',
            },
          ],
        },
      },
      {
        id: 'ia1-intercept',
        type: 'text' as const,
        content: `## What an Angle "Intercepts"

An angle **intercepts** an arc when the arc lies **in the interior of the angle**, with its endpoints sitting on the two sides of the angle.

Picture an angle with its vertex somewhere and its two sides slicing across the circle. The arc "trapped" between the two sides — the one you'd see looking out from the vertex — is the **intercepted arc**.

> 🔑 **The single most important habit in this whole lesson:** for any angle, find the **arc it intercepts** first. Once you can name that arc, every theorem becomes a one-step formula. We will say *intercepted arc* over and over — make sure you can point to it.

In Part 1 we measure arcs with **central** angles (vertex at the center). Starting in Part 2, the vertex moves **onto the circle** — and a beautiful pattern appears.`,
      },
      {
        id: 'ia1-arc-drill',
        type: 'input-boxes' as const,
        content: `**Arc Arithmetic** 🧮

A circle is divided by points $A$, $B$, and $C$. Use "central angle $=$ arc" and "arcs sum to $360°$."

**1)** Central angle $\\angle AOB = 130°$. Then $\\overset{\\frown}{AB} = \\,?$ degrees.
**2)** Minor arc $\\overset{\\frown}{AB} = 130°$ and minor arc $\\overset{\\frown}{BC} = 95°$. The remaining arc $\\overset{\\frown}{CA} = \\,?$ degrees.
**3)** A diameter splits a circle into two arcs. Each semicircle measures $\\,?$ degrees.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['130', '135', '180'],
          hint1: 'A central angle equals its intercepted arc — copy the number.',
          hint2: 'All three arcs around the circle add to $360°$: $360 - 130 - 95 = ?$',
          hint3: 'A diameter is a straight line through the center, so each half is exactly half of $360°$.',
          explanation: '1) Central angle $=$ arc, so $130°$.  2) $360 - 130 - 95 = 135°$.  3) A semicircle is half the circle: $360 \\div 2 = 180°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'inscribed-angles',
    sections: [
      {
        id: 'ia2-intro',
        type: 'text' as const,
        content: `# ⭕ Inscribed Angles

**Part 2 of 5 — The Inscribed Angle Theorem**

---

> 🔑 **The Big Idea:** Move the vertex from the *center* (Part 1) onto the *circle itself*, and the angle **shrinks to exactly half** of the arc it intercepts. That one fact — the **Inscribed Angle Theorem** — powers the rest of this lesson.`,
      },
      {
        id: 'ia2-define',
        type: 'text' as const,
        content: `## What Is an Inscribed Angle?

An **inscribed angle** is an angle whose:

- **vertex lies ON the circle**, and
- **two sides are chords** of the circle.

So an inscribed angle "sits" on the circle and reaches out with two chords. Those chords cut off the **intercepted arc** — the arc on the *far side*, not containing the vertex.

$$\\boxed{\\text{inscribed angle} = \\tfrac{1}{2}\\,(\\text{intercepted arc})}$$

Equivalently, the **arc is twice the inscribed angle**:

$$\\text{intercepted arc} = 2 \\times (\\text{inscribed angle}).$$

> 💡 **Compare the two vertex positions:**
>
> | Vertex at... | Angle vs. its arc |
> |---|---|
> | the **center** (central angle) | angle $=$ arc |
> | a point **on the circle** (inscribed angle) | angle $= \\tfrac{1}{2}$ arc |`,
      },
      {
        id: 'ia2-worked1',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — Find the angle from the arc

Inscribed angle $\\angle ABC$ intercepts arc $\\overset{\\frown}{AC} = 80°$. Then:

$$m\\angle ABC = \\tfrac{1}{2}(80°) = 40°.$$

### Example 2 — Find the arc from the angle

An inscribed angle measures $54°$. Its intercepted arc is:

$$\\text{arc} = 2(54°) = 108°.$$

### Example 3 — Inscribed and central on the *same* arc

A central angle and an inscribed angle both intercept arc $\\overset{\\frown}{PQ} = 100°$.

$$\\text{central angle} = 100°, \\qquad \\text{inscribed angle} = \\tfrac{1}{2}(100°) = 50°.$$

So the inscribed angle is exactly **half** of the central angle that sees the same arc.

> ⚠️ **Mind the direction of the formula.** Going arc → angle you **halve**; going angle → arc you **double**. Mixing these up is the #1 error on this topic.`,
      },
      {
        id: 'ia2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'An inscribed angle intercepts an arc of $140°$. What is the measure of the inscribed angle?',
              options: ['$140°$', '$70°$', '$280°$', '$40°$'],
              correctAnswer: 1,
              explanation: 'Inscribed angle $= \\tfrac{1}{2}(\\text{arc}) = \\tfrac{1}{2}(140°) = 70°$.',
            },
            {
              question: 'An inscribed angle measures $33°$. What is the measure of its intercepted arc?',
              options: ['$33°$', '$16.5°$', '$66°$', '$147°$'],
              correctAnswer: 2,
              explanation: 'The arc is twice the inscribed angle: $2(33°) = 66°$.',
            },
            {
              question: 'For the SAME arc, how does the inscribed angle compare to the central angle?',
              options: ['It is equal to the central angle', 'It is twice the central angle', 'It is half the central angle', 'There is no fixed relationship'],
              correctAnswer: 2,
              explanation: 'Central angle $=$ arc, and inscribed angle $= \\tfrac12$ arc, so the inscribed angle is **half** the central angle on the same arc.',
            },
          ],
        },
      },
      {
        id: 'ia2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Halve or Double?** 🔽

Decide the relationship and the result in each case.`,
        exercise: {
          dropdowns: [
            { label: 'To go from intercepted arc to inscribed angle, you:', options: ['multiply by 2', 'multiply by $\\tfrac12$', 'subtract from $360°$', 'leave it unchanged'] },
            { label: 'Inscribed angle for an arc of $96°$:', options: ['$48°$', '$96°$', '$192°$', '$264°$'] },
            { label: 'Intercepted arc for an inscribed angle of $61°$:', options: ['$30.5°$', '$61°$', '$122°$', '$299°$'] },
          ],
          correctAnswers: ['multiply by $\\tfrac12$', '$48°$', '$122°$'],
          hint1: 'Inscribed angle $= \\tfrac12 \\times$ arc, so arc → angle means halving.',
          hint2: '$\\tfrac12 \\times 96 = 48$.',
          hint3: 'Angle → arc means doubling: $2 \\times 61 = 122$.',
          explanation: 'Arc → angle: halve. Angle → arc: double. So $\\tfrac12(96°)=48°$ and $2(61°)=122°$.',
        },
      },
      {
        id: 'ia2-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Theorem** 🧮

Use inscribed angle $= \\tfrac12(\\text{intercepted arc})$. Give answers in degrees (no ° symbol).

**1)** Intercepted arc $= 150°$. Inscribed angle $= \\,?$
**2)** Inscribed angle $= 45°$. Intercepted arc $= \\,?$
**3)** Inscribed angle $= 25°$. The matching **central** angle on the same arc $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '90', '50'],
          hint1: '$\\tfrac12 \\times 150 = 75$.',
          hint2: 'Double the inscribed angle: $2 \\times 45 = 90$.',
          hint3: 'The central angle equals the arc, which is double the inscribed angle: $2 \\times 25 = 50$.',
          explanation: '1) $\\tfrac12(150)=75$.  2) arc $=2(45)=90$.  3) central angle $=$ arc $= 2(25) = 50$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'inscribed-angles',
    sections: [
      {
        id: 'ia3-intro',
        type: 'text' as const,
        content: `# ⭕ Inscribed Angles

**Part 3 of 5 — Three Powerful Corollaries**

---

> 🔑 **Why this part matters:** Three facts fall straight out of "angle $= \\tfrac12$ arc." Recognizing them lets you read an answer off a figure in seconds, with no arithmetic at all.`,
      },
      {
        id: 'ia3-same-arc',
        type: 'text' as const,
        content: `## Corollary 1 — Same Arc ⇒ Equal Angles

If two (or more) inscribed angles **intercept the same arc**, they are **congruent**.

Why? Each one equals $\\tfrac12$ of that *same* arc, so they must be equal.

$$\\angle ADB = \\angle ACB = \\tfrac12\\,\\overset{\\frown}{AB}.$$

This is true no matter where the vertices $C$ and $D$ sit on the major arc — every "viewpoint" on the same side sees the chord $AB$ under the **same** angle.

> 💡 You'll often see two triangles sharing a chord; the angles "looking at" that chord from the same side are automatically equal. This is a classic way to prove triangles **similar**.`,
      },
      {
        id: 'ia3-semicircle',
        type: 'text' as const,
        content: `## Corollary 2 — Angle in a Semicircle is $90°$ (Thales' Theorem)

If the intercepted arc is a **semicircle** ($180°$) — which happens exactly when the chord is a **diameter** — then the inscribed angle is:

$$\\tfrac12(180°) = 90°.$$

So **any angle inscribed in a semicircle is a right angle.** Equivalently: if $\\overline{AB}$ is a **diameter** and $C$ is any other point on the circle, then $\\angle ACB = 90°$.

This is **Thales' Theorem**, and it's one of the most useful results in all of geometry — it manufactures right angles for free.

> ⚠️ The right angle is at the vertex **on the circle** ($C$), not at the endpoints of the diameter.`,
      },
      {
        id: 'ia3-semicircle-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$\\overline{AB}$ is a diameter of a circle and $C$ is another point on the circle. What is $m\\angle ACB$?',
              options: ['$45°$', '$60°$', '$90°$', 'It depends on where $C$ is'],
              correctAnswer: 2,
              explanation: 'A diameter intercepts a semicircle ($180°$), so the inscribed angle is $\\tfrac12(180°)=90°$ — Thales’ Theorem — no matter where $C$ sits.',
            },
            {
              question: 'Inscribed angles $\\angle ADB$ and $\\angle ACB$ both intercept arc $\\overset{\\frown}{AB} = 70°$. What is $m\\angle ACB$?',
              options: ['$35°$', '$70°$', '$140°$', 'Cannot be determined', ],
              correctAnswer: 0,
              explanation: 'Both equal $\\tfrac12(70°) = 35°$. Same arc ⇒ equal inscribed angles, so $\\angle ACB = 35°$.',
            },
          ],
        },
      },
      {
        id: 'ia3-right-triangle',
        type: 'text' as const,
        content: `## Putting Thales to Work

Because a triangle inscribed in a semicircle has a right angle, it's a **right triangle** — so the **Pythagorean Theorem** applies.

### Worked Example

$\\overline{AB}$ is a diameter, so $\\angle C = 90°$. If $AC = 6$ and $BC = 8$, find the diameter $AB$.

$$AB^2 = AC^2 + BC^2 = 6^2 + 8^2 = 36 + 64 = 100$$
$$AB = \\sqrt{100} = 10.$$

So the diameter is $10$, and the **radius** is $5$.

> 💡 Whenever a problem mentions a triangle with one side as a diameter, immediately mark the opposite angle $90°$ — half the battle is won.`,
      },
      {
        id: 'ia3-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Use the Corollaries** 🧮

Answers in degrees or units (no symbols).

**1)** $\\overline{AB}$ is a diameter; $C$ is on the circle. $m\\angle ACB = \\,?$ degrees.
**2)** Two inscribed angles see arc $\\overset{\\frown}{XY} = 88°$. Each angle $= \\,?$ degrees.
**3)** A triangle is inscribed in a semicircle with legs $9$ and $12$. The diameter (hypotenuse) $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['90', '44', '15'],
          hint1: 'An angle inscribed in a semicircle is always a right angle.',
          hint2: 'Same arc ⇒ equal inscribed angles, each $= \\tfrac12$ of the arc: $\\tfrac12(88)$.',
          hint3: 'Right triangle: hypotenuse $= \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144}$.',
          explanation: '1) $90°$ (Thales).  2) $\\tfrac12(88) = 44°$ each.  3) $\\sqrt{81+144} = \\sqrt{225} = 15$.',
        },
      },
      {
        id: 'ia3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name the Corollary** 🔽

Match each situation to the result it guarantees.`,
        exercise: {
          dropdowns: [
            { label: 'Chord is a diameter, vertex elsewhere on circle:', options: ['inscribed angle is $90°$', 'inscribed angle is $180°$', 'inscribed angle is $45°$', 'angle cannot be found'] },
            { label: 'Two inscribed angles intercept the same arc:', options: ['they are equal', 'they are supplementary', 'they are complementary', 'they sum to the arc'] },
            { label: 'A triangle inscribed in a semicircle is a:', options: ['right triangle', 'equilateral triangle', 'isosceles triangle', 'obtuse triangle'] },
          ],
          correctAnswers: ['inscribed angle is $90°$', 'they are equal', 'right triangle'],
          hint1: 'A diameter cuts off a $180°$ arc; halve it.',
          hint2: 'Each equals $\\tfrac12$ of the *same* arc.',
          hint3: 'The angle opposite the diameter is $90°$, which makes a right triangle.',
          explanation: 'Diameter ⇒ $90°$ angle (Thales); same arc ⇒ equal angles; a semicircle triangle is a right triangle.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'inscribed-angles',
    sections: [
      {
        id: 'ia4-intro',
        type: 'text' as const,
        content: `# ⭕ Inscribed Angles

**Part 4 of 5 — Inscribed (Cyclic) Quadrilaterals**

---

> 🔑 **Big Payoff:** When all four vertices of a quadrilateral lie on a circle, its **opposite angles are supplementary** — they add to $180°$. This single rule cracks open a whole class of figures.`,
      },
      {
        id: 'ia4-cyclic',
        type: 'text' as const,
        content: `## The Cyclic Quadrilateral Theorem

A **cyclic** (or **inscribed**) **quadrilateral** has all four vertices on one circle. Label it $ABCD$ in order around the circle. Then:

$$m\\angle A + m\\angle C = 180° \\qquad\\text{and}\\qquad m\\angle B + m\\angle D = 180°.$$

**Opposite angles are supplementary.**

### Why it's true

$\\angle A$ and $\\angle C$ are inscribed angles that intercept the **two arcs that together make the whole circle**. So:

$$m\\angle A + m\\angle C = \\tfrac12\\big(\\text{arc}_1\\big) + \\tfrac12\\big(\\text{arc}_2\\big) = \\tfrac12\\big(\\text{arc}_1 + \\text{arc}_2\\big) = \\tfrac12(360°) = 180°.$$

> 💡 Notice you only need this once: the moment you know one angle, its **opposite** is $180°$ minus it.`,
      },
      {
        id: 'ia4-worked',
        type: 'text' as const,
        content: `## Worked Example

In cyclic quadrilateral $ABCD$, $m\\angle A = 95°$ and $m\\angle B = 110°$. Find $\\angle C$ and $\\angle D$.

**Opposite to $A$ is $C$:**
$$m\\angle C = 180° - 95° = 85°.$$

**Opposite to $B$ is $D$:**
$$m\\angle D = 180° - 110° = 70°.$$

> ✅ **Check:** All four interior angles of a quadrilateral sum to $360°$:
> $$95° + 110° + 85° + 70° = 360°.\\;✓$$

### Algebra version

If $m\\angle A = (2x + 10)°$ and its opposite $m\\angle C = (3x - 30)°$, then:

$$(2x + 10) + (3x - 30) = 180 \\;\\Rightarrow\\; 5x - 20 = 180 \\;\\Rightarrow\\; 5x = 200 \\;\\Rightarrow\\; x = 40.$$`,
      },
      {
        id: 'ia4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In a cyclic quadrilateral, one angle is $73°$. What is its opposite angle?',
              options: ['$73°$', '$107°$', '$17°$', '$287°$'],
              correctAnswer: 1,
              explanation: 'Opposite angles in a cyclic quadrilateral are supplementary: $180° - 73° = 107°$.',
            },
            {
              question: 'Which statement is ALWAYS true for a quadrilateral inscribed in a circle?',
              options: ['All four sides are equal', 'Opposite angles sum to $180°$', 'All four angles are equal', 'Opposite angles are equal'],
              correctAnswer: 1,
              explanation: 'The defining property of a cyclic quadrilateral is that each pair of opposite angles is supplementary (sums to $180°$).',
            },
          ],
        },
      },
      {
        id: 'ia4-drill',
        type: 'input-boxes' as const,
        content: `**Cyclic Quadrilateral Practice** 🧮

$ABCD$ is inscribed in a circle (vertices in order). Answer in degrees (no ° symbol).

**1)** $m\\angle A = 64°$. Find $m\\angle C$ (its opposite).
**2)** $m\\angle B = 121°$. Find $m\\angle D$ (its opposite).
**3)** $m\\angle A = (2x)°$ and $m\\angle C = (x + 30)°$. Solve for $x$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['116', '59', '50'],
          hint1: 'Opposite angles are supplementary: $180 - 64$.',
          hint2: '$180 - 121 = ?$',
          hint3: 'Opposite angles add to $180$: $2x + (x + 30) = 180$, so $3x = 150$.',
          explanation: '1) $180 - 64 = 116°$.  2) $180 - 121 = 59°$.  3) $2x + x + 30 = 180 \\Rightarrow 3x = 150 \\Rightarrow x = 50$.',
        },
      },
      {
        id: 'ia4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill the Quadrilateral** 🔽

$ABCD$ is cyclic with $m\\angle A = 80°$ and $m\\angle B = 100°$. Read off the rest.`,
        exercise: {
          dropdowns: [
            { label: '$m\\angle C$ (opposite $A$):', options: ['$80°$', '$100°$', '$10°$', '$280°$'] },
            { label: '$m\\angle D$ (opposite $B$):', options: ['$80°$', '$100°$', '$90°$', '$20°$'] },
            { label: 'Sum of all four angles:', options: ['$180°$', '$270°$', '$360°$', '$540°$'] },
          ],
          correctAnswers: ['$100°$', '$80°$', '$360°$'],
          hint1: 'Opposite of $A$: $180 - 80 = 100$.',
          hint2: 'Opposite of $B$: $180 - 100 = 80$.',
          hint3: 'Every quadrilateral’s interior angles sum to $360°$.',
          explanation: '$\\angle C = 180-80 = 100°$, $\\angle D = 180-100 = 80°$, and $80+100+100+80 = 360°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'inscribed-angles',
    sections: [
      {
        id: 'ia5-intro',
        type: 'text' as const,
        content: `# ⭕ Inscribed Angles

**Part 5 of 5 — Tangent–Chord Angles, Mixed Practice & Mastery Check**

---

You can now handle central angles, inscribed angles, the three corollaries, and cyclic quadrilaterals. One last vertex position completes the picture — the vertex right **on** the circle where a **tangent** meets a **chord**.`,
      },
      {
        id: 'ia5-tangent',
        type: 'text' as const,
        content: `## The Tangent–Chord Angle

A **tangent** is a line that touches the circle at exactly one point. When a tangent and a **chord** meet at that point of tangency, the angle they form follows the **same half-the-arc rule** as an inscribed angle:

$$\\text{tangent–chord angle} = \\tfrac12\\,(\\text{intercepted arc}).$$

The intercepted arc is the one **"inside" the angle**, cut off by the chord.

### Worked Example

A chord cuts off an arc of $130°$, and a tangent is drawn at one end of the chord. The angle between the tangent and the chord is:

$$\\tfrac12(130°) = 65°.$$

> 💡 **Same rule, new vertex.** Central angle $=$ arc; inscribed angle $= \\tfrac12$ arc; tangent–chord angle $= \\tfrac12$ arc. The vertex position changes, but the "half the arc" pattern for angles *on* the circle stays the same.`,
      },
      {
        id: 'ia5-tangent-drill',
        type: 'input-boxes' as const,
        content: `**Tangent–Chord Practice** 🧮

A tangent meets a chord at a point on the circle. Use angle $= \\tfrac12(\\text{intercepted arc})$. Answers in degrees (no ° symbol).

**1)** Intercepted arc $= 200°$. Tangent–chord angle $= \\,?$
**2)** Tangent–chord angle $= 48°$. Intercepted arc $= \\,?$
**3)** The chord is a **diameter** and the tangent is at its end. The tangent–chord angle $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '96', '90'],
          hint1: 'Halve the arc: $\\tfrac12 \\times 200$.',
          hint2: 'Angle → arc means double: $2 \\times 48$.',
          hint3: 'A diameter cuts off a $180°$ arc, so the angle is $\\tfrac12(180)$ — a tangent is always perpendicular to a diameter at the point of tangency.',
          explanation: '1) $\\tfrac12(200) = 100°$.  2) $2(48) = 96°$.  3) The diameter’s arc is $180°$, so $\\tfrac12(180) = 90°$ — the tangent is perpendicular to the diameter.',
        },
      },
      {
        id: 'ia5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Vertex location | Angle formula |
|---|---|
| **Center** of circle (central angle) | angle $=$ intercepted arc |
| **On** the circle, two chords (inscribed angle) | angle $= \\tfrac12$ intercepted arc |
| **On** the circle, tangent + chord | angle $= \\tfrac12$ intercepted arc |

| Special case | Result |
|---|---|
| Same intercepted arc | inscribed angles are **equal** |
| Chord is a diameter (semicircle) | inscribed angle $= 90°$ (Thales) |
| Cyclic quadrilateral | opposite angles sum to $180°$ |

> ⚠️ **Three habits that prevent every common error:** (1) always identify the **intercepted arc** first; (2) for a vertex *on* the circle, **halve**; for a vertex *at the center*, **don't**; (3) for a diameter, instantly write $90°$.`,
      },
      {
        id: 'ia5-vertex-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Rule Applies?** 🔽

Match each vertex position to the right relationship between the angle and its intercepted arc.`,
        exercise: {
          dropdowns: [
            { label: 'Vertex at the **center** of the circle:', options: ['angle $=$ arc', 'angle $= \\tfrac12$ arc', 'angle $= 2 \\times$ arc', 'angle $= 90°$'] },
            { label: 'Vertex **on** the circle, two chords:', options: ['angle $=$ arc', 'angle $= \\tfrac12$ arc', 'angle $= 2 \\times$ arc', 'angle $= 180°$'] },
            { label: 'Vertex **on** the circle, tangent and chord:', options: ['angle $=$ arc', 'angle $= \\tfrac12$ arc', 'angle $= 2 \\times$ arc', 'angle $= 360°$'] },
          ],
          correctAnswers: ['angle $=$ arc', 'angle $= \\tfrac12$ arc', 'angle $= \\tfrac12$ arc'],
          hint1: 'A central angle copies its arc exactly.',
          hint2: 'An inscribed angle is half its arc.',
          hint3: 'A tangent–chord angle follows the same half-the-arc rule as an inscribed angle.',
          explanation: 'Center ⇒ angle $=$ arc. Vertex on the circle (whether two chords or tangent + chord) ⇒ angle $= \\tfrac12$ arc.',
        },
      },
      {
        id: 'ia5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A tangent and a chord meet at a point on a circle, intercepting an arc of $150°$. What is the tangent–chord angle?',
              options: ['$150°$', '$75°$', '$300°$', '$30°$'],
              correctAnswer: 1,
              explanation: 'A tangent–chord angle equals half its intercepted arc: $\\tfrac12(150°) = 75°$.',
            },
            {
              question: 'An inscribed angle and a central angle intercept the same arc. The central angle is $112°$. What is the inscribed angle?',
              options: ['$112°$', '$224°$', '$56°$', '$68°$'],
              correctAnswer: 2,
              explanation: 'The arc equals the central angle ($112°$), and the inscribed angle is half the arc: $\\tfrac12(112°) = 56°$.',
            },
          ],
        },
      },
      {
        id: 'ia5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'An inscribed angle intercepts an arc of $124°$. What is the measure of the inscribed angle?',
              options: ['$62°$', '$124°$', '$248°$', '$56°$'],
              correctAnswer: 0,
              explanation: 'Inscribed angle $= \\tfrac12(\\text{arc}) = \\tfrac12(124°) = 62°$.',
            },
            {
              question: '$\\overline{PQ}$ is a diameter and $R$ is another point on the circle. What is $m\\angle PRQ$?',
              options: ['$60°$', '$90°$', '$180°$', 'It depends on $R$'],
              correctAnswer: 1,
              explanation: 'An angle inscribed in a semicircle is a right angle (Thales’ Theorem): $\\tfrac12(180°) = 90°$, regardless of where $R$ is.',
            },
            {
              question: 'In cyclic quadrilateral $WXYZ$, $m\\angle W = 85°$. What is $m\\angle Y$ (the opposite angle)?',
              options: ['$85°$', '$5°$', '$95°$', '$275°$'],
              correctAnswer: 2,
              explanation: 'Opposite angles of a cyclic quadrilateral are supplementary: $180° - 85° = 95°$.',
            },
          ],
        },
      },
    ],
  },
]
