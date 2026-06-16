import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Polygon Angle Sums (Geometry).
 * Registry key: 'polygon-angle-sums' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'polygon-angle-sums',
    sections: [
      {
        id: 'pas1-intro',
        type: 'text' as const,
        content: `# 🔷 Polygon Angle Sums

**Part 1 of 5 — Polygons & the Triangle Foundation**

---

### Topics in This Part

| Section |
|---------|
| What Is a Polygon? Naming by Sides |
| Convex vs. Concave |
| Every Angle Sum Starts with the Triangle ($180°$) |

> 🔑 **Key Concept:** The entire topic rests on one fact you already know — *the angles of a triangle add up to $180°$*. Every polygon can be sliced into triangles, so its angle sum is just a count of triangles times $180°$. Part 1 sets up that idea.`,
      },
      {
        id: 'pas1-what',
        type: 'text' as const,
        content: `## What Is a Polygon?

A **polygon** is a closed, flat shape made of **straight line segments** (its *sides*) joined end to end. The corners where two sides meet are **vertices**, and the angles *inside* the shape are its **interior angles**.

We name a polygon by its number of sides $n$:

| Sides $n$ | Name |
|-----------|------|
| $3$ | Triangle |
| $4$ | Quadrilateral |
| $5$ | Pentagon |
| $6$ | Hexagon |
| $7$ | Heptagon |
| $8$ | Octagon |
| $10$ | Decagon |
| $12$ | Dodecagon |

> 💡 **Rule of thumb:** A polygon always has the **same number of vertices, sides, and interior angles**. A hexagon has $6$ of each.`,
      },
      {
        id: 'pas1-name-check',
        type: 'dropdown-select' as const,
        content: `**Name That Polygon** 🔽

Match each polygon to its number of sides.`,
        exercise: {
          dropdowns: [
            { label: 'A pentagon has how many sides?', options: ['$3$', '$5$', '$6$', '$8$'] },
            { label: 'A polygon with $8$ sides is called a:', options: ['Hexagon', 'Heptagon', 'Octagon', 'Decagon'] },
            { label: 'A decagon has how many vertices?', options: ['$8$', '$9$', '$10$', '$12$'] },
          ],
          correctAnswers: ['$5$', 'Octagon', '$10$'],
          hint1: '"Penta-" means five.',
          hint2: '"Octa-" means eight (think octopus — eight legs).',
          hint3: 'A polygon has the same number of vertices as sides; "deca-" means ten.',
          explanation: 'Pentagon $= 5$ sides, octagon $= 8$ sides, and a decagon has $10$ sides $= 10$ vertices.',
        },
      },
      {
        id: 'pas1-convex',
        type: 'text' as const,
        content: `## Convex vs. Concave

- A **convex** polygon has *no dents*: every interior angle is **less than $180°$**, and no side, if extended, cuts through the shape. A stop sign (octagon) is convex.
- A **concave** polygon has at least one "caved-in" vertex — an interior angle **greater than $180°$** (a *reflex* angle). An arrowhead or a star outline is concave.

A polygon is **regular** when it is *both* **equilateral** (all sides equal) *and* **equiangular** (all angles equal). A regular polygon is always convex — think of a square or a regular hexagon.

> ⚠️ **Watch out:** All the simple angle-sum formulas in this lesson assume a **convex** polygon. They still work for any simple (non-self-crossing) polygon, but the cleanest reasoning is convex.`,
      },
      {
        id: 'pas1-triangle',
        type: 'text' as const,
        content: `## The Triangle: $180°$

The cornerstone fact:

$$\\text{interior angles of any triangle} = 180°$$

This is true for *every* triangle — tall, skinny, right, or obtuse. If you tear off the three corners of a paper triangle and lay them side by side, they form a straight line, which measures $180°$.

### Quick Example

A triangle has angles $70°$ and $55°$. The third angle is:

$$180° - 70° - 55° = 55°$$

> 🔑 **Why this matters:** A quadrilateral can be split into $2$ triangles, a pentagon into $3$, and so on. Each triangle contributes $180°$ — that single idea generates *every* formula in Part 2.`,
      },
      {
        id: 'pas1-tri-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Angle** 🧮

Use "the three angles add to $180°$." Enter the missing angle in degrees (number only).

**1)** A triangle has angles $90°$, $40°$, and $\\,?$
**2)** A triangle has angles $60°$, $60°$, and $\\,?$  *(equilateral)*
**3)** A triangle has angles $25°$, $35°$, and $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50', '60', '120'],
          hint1: 'Subtract the two known angles from $180$.',
          hint2: '$180 - 90 - 40 = 50$. For #2, $180 - 60 - 60 = 60$.',
          hint3: 'For #3, $180 - 25 - 35 = 120$.',
          explanation: '1) $180 - 90 - 40 = 50°$.  2) $180 - 60 - 60 = 60°$ (all equal in an equilateral triangle).  3) $180 - 25 - 35 = 120°$.',
        },
      },
      {
        id: 'pas1-concept',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement about a regular polygon is always true?',
              options: [
                'All sides are equal AND all angles are equal',
                'All sides are equal but the angles may differ',
                'All angles are equal but the sides may differ',
                'It must be a triangle',
              ],
              correctAnswer: 0,
              explanation: '"Regular" means *both* equilateral (equal sides) and equiangular (equal angles). A square is the regular quadrilateral.',
            },
            {
              question: 'A polygon has one interior angle measuring $210°$. The polygon must be:',
              options: ['Convex', 'Concave', 'Regular', 'A triangle'],
              correctAnswer: 1,
              explanation: 'An interior angle greater than $180°$ (a reflex angle) means a "caved-in" vertex, so the polygon is concave.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'polygon-angle-sums',
    sections: [
      {
        id: 'pas2-intro',
        type: 'text' as const,
        content: `# 🔷 Polygon Angle Sums

**Part 2 of 5 — The Interior Angle Sum Formula**

---

> 🔑 **The Idea:** From any *one* vertex of a convex polygon, draw all the diagonals. The polygon splits into triangles — exactly $(n-2)$ of them. Since each triangle is $180°$, the total interior angle sum is $(n-2)\\cdot 180°$.`,
      },
      {
        id: 'pas2-derive',
        type: 'text' as const,
        content: `## Slicing a Polygon into Triangles

Pick one vertex and draw a diagonal to every *non-adjacent* vertex. The polygon fans out into triangles:

| Polygon | Sides $n$ | Triangles formed | Interior sum |
|---------|-----------|------------------|--------------|
| Triangle | $3$ | $1$ | $180°$ |
| Quadrilateral | $4$ | $2$ | $360°$ |
| Pentagon | $5$ | $3$ | $540°$ |
| Hexagon | $6$ | $4$ | $720°$ |

Notice the number of triangles is always **two less** than the number of sides. That gives the master formula:

$$S = (n - 2)\\cdot 180°$$

where $S$ is the sum of the interior angles and $n$ is the number of sides.

> 💡 **Why $n-2$?** Two of the polygon's sides meet *at* the vertex you chose, so they can't start a diagonal. Every diagonal you *can* draw carves off one triangle, and you always end up with $n-2$ of them.`,
      },
      {
        id: 'pas2-examples',
        type: 'text' as const,
        content: `## Worked Examples

### Example: Heptagon ($n = 7$)

$$S = (7 - 2)\\cdot 180° = 5 \\cdot 180° = 900°$$

### Example: Octagon ($n = 8$)

$$S = (8 - 2)\\cdot 180° = 6 \\cdot 180° = 1080°$$

### Example: Decagon ($n = 10$)

$$S = (10 - 2)\\cdot 180° = 8 \\cdot 180° = 1440°$$

> ✅ **Check the pattern:** each time you add one side, the sum grows by exactly $180°$ — one more triangle.`,
      },
      {
        id: 'pas2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the sum of the interior angles of a pentagon?',
              options: ['$360°$', '$540°$', '$720°$', '$900°$'],
              correctAnswer: 1,
              explanation: '$S = (5-2)\\cdot 180° = 3\\cdot 180° = 540°$.',
            },
            {
              question: 'A polygon splits into $6$ triangles from one vertex. How many sides does it have?',
              options: ['$6$', '$7$', '$8$', '$12$'],
              correctAnswer: 2,
              explanation: 'Triangles $= n - 2$, so $n - 2 = 6 \\Rightarrow n = 8$. It is an octagon.',
            },
          ],
        },
      },
      {
        id: 'pas2-drill',
        type: 'input-boxes' as const,
        content: `**Apply the Formula** 🧮

Use $S = (n-2)\\cdot 180°$. Enter each interior angle **sum** in degrees (number only).

**1)** Hexagon ($n = 6$): $S = \\,?$
**2)** Nonagon ($n = 9$): $S = \\,?$
**3)** Dodecagon ($n = 12$): $S = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['720', '1260', '1800'],
          hint1: 'Subtract $2$ from $n$, then multiply by $180$.',
          hint2: 'Hexagon: $(6-2)\\cdot 180 = 4\\cdot 180 = 720$.',
          hint3: 'Nonagon: $(9-2)\\cdot 180 = 7\\cdot 180 = 1260$. Dodecagon: $(12-2)\\cdot 180 = 10\\cdot 180 = 1800$.',
          explanation: '1) $(6-2)\\cdot 180 = 720°$.  2) $(9-2)\\cdot 180 = 1260°$.  3) $(12-2)\\cdot 180 = 1800°$.',
        },
      },
      {
        id: 'pas2-reverse',
        type: 'input-boxes' as const,
        content: `**Work Backwards** 🧮

Given the interior angle **sum**, find the number of **sides** $n$. (Solve $S = (n-2)\\cdot 180$, so $n = \\dfrac{S}{180} + 2$.)

**1)** $S = 1080°$, so $n = \\,?$
**2)** $S = 540°$, so $n = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['8', '5'],
          hint1: 'Divide $S$ by $180$ to get the number of triangles, then add $2$.',
          hint2: '$1080 \\div 180 = 6$ triangles, so $n = 6 + 2 = 8$.',
          hint3: '$540 \\div 180 = 3$ triangles, so $n = 3 + 2 = 5$.',
          explanation: '1) $1080/180 = 6$, $n = 6+2 = 8$ (octagon).  2) $540/180 = 3$, $n = 3+2 = 5$ (pentagon).',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'polygon-angle-sums',
    sections: [
      {
        id: 'pas3-intro',
        type: 'text' as const,
        content: `# 🔷 Polygon Angle Sums

**Part 3 of 5 — Each Angle of a Regular Polygon**

---

> 🔑 **The Idea:** In a *regular* polygon all $n$ interior angles are **equal**, so each one is just the total sum shared equally among the vertices:
> $$\\text{each interior angle} = \\frac{(n-2)\\cdot 180°}{n}$$`,
      },
      {
        id: 'pas3-formula',
        type: 'text' as const,
        content: `## Splitting the Sum Evenly

Because a regular polygon is **equiangular**, divide the total interior sum by the number of angles $n$:

$$\\text{each interior angle} = \\frac{(n-2)\\cdot 180°}{n}$$

### Example: Regular Pentagon ($n = 5$)

$$\\frac{(5-2)\\cdot 180°}{5} = \\frac{540°}{5} = 108°$$

### Example: Regular Hexagon ($n = 6$)

$$\\frac{(6-2)\\cdot 180°}{6} = \\frac{720°}{6} = 120°$$

| Regular polygon | Total sum | Each interior angle |
|-----------------|-----------|---------------------|
| Pentagon ($n=5$) | $540°$ | $108°$ |
| Hexagon ($n=6$) | $720°$ | $120°$ |
| Octagon ($n=8$) | $1080°$ | $135°$ |
| Decagon ($n=10$) | $1440°$ | $144°$ |

> 💡 **Sanity check:** Each interior angle of a *convex* polygon must be **less than $180°$**. All the values above pass — and as $n$ grows, the angle creeps toward (but never reaches) $180°$.`,
      },
      {
        id: 'pas3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Each interior angle of a regular octagon measures:',
              options: ['$120°$', '$135°$', '$144°$', '$1080°$'],
              correctAnswer: 1,
              explanation: 'Sum $= (8-2)\\cdot 180 = 1080°$; each angle $= 1080 \\div 8 = 135°$.',
            },
            {
              question: 'Why divide by $n$ to get one angle of a regular polygon?',
              options: [
                'Because all $n$ interior angles are equal',
                'Because there are $n-2$ triangles',
                'Because the exterior angles sum to $360°$',
                'Because $n$ is always even',
              ],
              correctAnswer: 0,
              explanation: 'A regular polygon is equiangular, so the total sum splits into $n$ equal pieces — divide by $n$.',
            },
          ],
        },
      },
      {
        id: 'pas3-drill',
        type: 'input-boxes' as const,
        content: `**Each Interior Angle** 🧮

Find each interior angle of a **regular** polygon. Enter the value in degrees (number only).

**1)** Regular triangle ($n = 3$): $\\,?$
**2)** Regular quadrilateral / square ($n = 4$): $\\,?$
**3)** Regular decagon ($n = 10$): $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '90', '144'],
          hint1: 'First find the sum $(n-2)\\cdot 180$, then divide by $n$.',
          hint2: 'Triangle: $180 \\div 3 = 60$. Square: $360 \\div 4 = 90$.',
          hint3: 'Decagon: sum $= (10-2)\\cdot 180 = 1440$, so each $= 1440 \\div 10 = 144$.',
          explanation: '1) $\\frac{(3-2)180}{3} = 60°$.  2) $\\frac{(4-2)180}{4} = 90°$ (a square).  3) $\\frac{(10-2)180}{10} = 144°$.',
        },
      },
      {
        id: 'pas3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Calculation** 🔽

You want each interior angle of a regular **hexagon** ($n = 6$). Choose each step.`,
        exercise: {
          dropdowns: [
            { label: 'Interior angle sum $(n-2)\\cdot 180$:', options: ['$540°$', '$720°$', '$900°$', '$1080°$'] },
            { label: 'Divide by the number of angles:', options: ['Divide by $4$', 'Divide by $6$', 'Divide by $8$', 'Divide by $180$'] },
            { label: 'Each interior angle:', options: ['$108°$', '$120°$', '$135°$', '$144°$'] },
          ],
          correctAnswers: ['$720°$', 'Divide by $6$', '$120°$'],
          hint1: 'Sum $= (6-2)\\cdot 180 = 4\\cdot 180$.',
          hint2: 'A regular polygon has $n$ equal angles, so divide by $n = 6$.',
          hint3: '$720 \\div 6 = 120$.',
          explanation: 'Sum $= 720°$; divide by $6$ angles; each interior angle $= 120°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'polygon-angle-sums',
    sections: [
      {
        id: 'pas4-intro',
        type: 'text' as const,
        content: `# 🔷 Polygon Angle Sums

**Part 4 of 5 — Exterior Angles & the $360°$ Rule**

---

> 🔑 **The Surprise:** No matter how many sides a convex polygon has, its **exterior angles always add up to $360°$**. Not $n$-dependent — always exactly one full turn.`,
      },
      {
        id: 'pas4-what',
        type: 'text' as const,
        content: `## What Is an Exterior Angle?

At each vertex, extend one side. The angle between that extension and the next side is the **exterior angle**. At any vertex, the interior and exterior angles form a straight line:

$$\\text{interior} + \\text{exterior} = 180°$$

So they are **supplementary** — knowing one gives the other.

### The Big Fact

$$\\text{sum of exterior angles (one per vertex)} = 360°$$

**Why?** Walk all the way around the polygon's edge. At each corner you turn by the exterior angle, and by the time you return to the start you've made exactly **one full $360°$ turn**.

> ⚠️ **Careful:** This $360°$ rule uses **one exterior angle per vertex**. It holds for *every* convex polygon, regular or not.`,
      },
      {
        id: 'pas4-regular',
        type: 'text' as const,
        content: `## Regular Polygons: Each Exterior Angle

Since a regular polygon's exterior angles are all equal and sum to $360°$:

$$\\text{each exterior angle} = \\frac{360°}{n}$$

This is often the **fastest** route to the interior angle, too:

$$\\text{each interior angle} = 180° - \\frac{360°}{n}$$

### Example: Regular Pentagon ($n = 5$)

$$\\text{exterior} = \\frac{360°}{5} = 72°, \\qquad \\text{interior} = 180° - 72° = 108°$$

### Example: Regular Octagon ($n = 8$)

$$\\text{exterior} = \\frac{360°}{8} = 45°, \\qquad \\text{interior} = 180° - 45° = 135°$$

> 💡 Both interior values ($108°$ and $135°$) match what we found in Part 3 — two roads, same destination.`,
      },
      {
        id: 'pas4-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The sum of the exterior angles of a convex 20-gon (one per vertex) is:',
              options: ['$360°$', '$3240°$', '$3600°$', '$18°$'],
              correctAnswer: 0,
              explanation: 'The exterior-angle sum is always $360°$ for *any* convex polygon, no matter how many sides.',
            },
            {
              question: 'Each exterior angle of a regular polygon is $36°$. How many sides does it have?',
              options: ['$8$', '$9$', '$10$', '$12$'],
              correctAnswer: 2,
              explanation: 'Each exterior $= 360/n$, so $n = 360 \\div 36 = 10$. It is a regular decagon.',
            },
          ],
        },
      },
      {
        id: 'pas4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Interior ↔ Exterior** 🔽

Use "interior $+$ exterior $= 180°$" and "each exterior $= 360°/n$".`,
        exercise: {
          dropdowns: [
            { label: 'A regular polygon has interior angle $150°$. Each exterior angle is:', options: ['$15°$', '$30°$', '$45°$', '$150°$'] },
            { label: 'So the number of sides $n = 360°/\\text{exterior}$ is:', options: ['$10$', '$12$', '$15$', '$24$'] },
            { label: 'Each exterior angle of a regular hexagon ($n=6$) is:', options: ['$45°$', '$60°$', '$72°$', '$120°$'] },
          ],
          correctAnswers: ['$30°$', '$12$', '$60°$'],
          hint1: 'Exterior $= 180° - $ interior $= 180° - 150°$.',
          hint2: '$n = 360° \\div \\text{exterior}$.',
          hint3: 'Hexagon exterior $= 360° \\div 6 = 60°$.',
          explanation: 'Exterior $= 180-150 = 30°$; $n = 360/30 = 12$ (dodecagon). Regular hexagon exterior $= 360/6 = 60°$.',
        },
      },
      {
        id: 'pas4-drill',
        type: 'input-boxes' as const,
        content: `**Find the Number of Sides** 🧮

Use each exterior angle $= \\dfrac{360°}{n}$, so $n = \\dfrac{360°}{\\text{exterior}}$. Enter $n$ (number only).

**1)** Each exterior angle is $40°$, so $n = \\,?$
**2)** Each exterior angle is $24°$, so $n = \\,?$
**3)** Each *interior* angle is $160°$, so $n = \\,?$  *(find the exterior first)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '15', '18'],
          hint1: 'For an exterior angle, $n = 360 \\div \\text{exterior}$.',
          hint2: '$360 \\div 40 = 9$.  $360 \\div 24 = 15$.',
          hint3: 'For #3, exterior $= 180 - 160 = 20°$, then $n = 360 \\div 20 = 18$.',
          explanation: '1) $360/40 = 9$.  2) $360/24 = 15$.  3) exterior $= 180-160 = 20°$, so $n = 360/20 = 18$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'polygon-angle-sums',
    sections: [
      {
        id: 'pas5-intro',
        type: 'text' as const,
        content: `# 🔷 Polygon Angle Sums

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name polygons and find a triangle's missing angle, (2) compute any interior angle **sum** with $(n-2)\\cdot 180°$, (3) find each angle of a **regular** polygon, and (4) use the exterior-angle $360°$ rule. Let's put it all together.`,
      },
      {
        id: 'pas5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula |
|------|---------|
| Interior angle **sum** | $S = (n-2)\\cdot 180°$ |
| Number of sides from the sum | $n = \\dfrac{S}{180°} + 2$ |
| Each interior angle (regular) | $\\dfrac{(n-2)\\cdot 180°}{n}$ |
| Sum of exterior angles | always $360°$ |
| Each exterior angle (regular) | $\\dfrac{360°}{n}$ |
| Number of sides from an exterior angle | $n = \\dfrac{360°}{\\text{exterior}}$ |
| Interior–exterior link | interior $+$ exterior $= 180°$ |

> ⚠️ **Don't mix them up:** the *interior* sum **grows** with $n$, but the *exterior* sum is **always $360°$**. For a single angle of a regular polygon, dividing the exterior by $360°/n$ is usually the fastest path.`,
      },
      {
        id: 'pas5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A regular polygon has each interior angle equal to $140°$. How many sides does it have?',
              options: ['$8$', '$9$', '$10$', '$12$'],
              correctAnswer: 1,
              explanation: 'Exterior $= 180 - 140 = 40°$; $n = 360 \\div 40 = 9$. A regular nonagon.',
            },
            {
              question: 'Five of a hexagon’s six interior angles are $110°, 130°, 120°, 125°,$ and $140°$. The sixth angle is:',
              options: ['$95°$', '$100°$', '$105°$', '$120°$'],
              correctAnswer: 0,
              explanation: 'Hexagon sum $= (6-2)\\cdot 180 = 720°$. The five given angles total $625°$, so the sixth $= 720 - 625 = 95°$.',
            },
          ],
        },
      },
      {
        id: 'pas5-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Drill** 🧮

Enter each answer in degrees or as a count (number only).

**1)** Interior angle sum of a heptagon ($n = 7$): $\\,?$
**2)** Each interior angle of a regular dodecagon ($n = 12$): $\\,?$
**3)** A regular polygon has each exterior angle $= 30°$. Number of sides $n = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['900', '150', '12'],
          hint1: 'Heptagon sum $= (7-2)\\cdot 180$.',
          hint2: 'Dodecagon each interior $= 180 - 360/12 = 180 - 30$.',
          hint3: 'For #3, $n = 360 \\div 30$.',
          explanation: '1) $(7-2)\\cdot 180 = 900°$.  2) exterior $= 360/12 = 30°$, so interior $= 180-30 = 150°$.  3) $n = 360/30 = 12$.',
        },
      },
      {
        id: 'pas5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the sum of the interior angles of a decagon ($n = 10$)?',
              options: ['$1260°$', '$1440°$', '$1620°$', '$1800°$'],
              correctAnswer: 1,
              explanation: '$S = (10-2)\\cdot 180 = 8\\cdot 180 = 1440°$.',
            },
            {
              question: 'Each interior angle of a regular polygon is $135°$. The polygon is a regular:',
              options: ['Hexagon', 'Heptagon', 'Octagon', 'Nonagon'],
              correctAnswer: 2,
              explanation: 'Exterior $= 180 - 135 = 45°$; $n = 360 \\div 45 = 8$. A regular octagon.',
            },
            {
              question: 'The sum of the exterior angles (one per vertex) of a convex 15-gon is:',
              options: ['$360°$', '$2340°$', '$2700°$', '$24°$'],
              correctAnswer: 0,
              explanation: 'The exterior-angle sum is always $360°$ for any convex polygon, regardless of the number of sides.',
            },
          ],
        },
      },
    ],
  },
]
