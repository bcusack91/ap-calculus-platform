import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Circle Basics (Geometry).
 * Registry key: 'circle-basics-geometry' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); the degree symbol is written literally (°).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'circle-basics-geometry',
    sections: [
      {
        id: 'cb1-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Basics

**Part 1 of 5 — The Parts of a Circle**

---

### Topics in This Part

| Section |
|---------|
| Center, Radius, and Diameter |
| Chords, Secants, and Tangents |
| Arcs and Semicircles |

> 🔑 **Key Concept:** A **circle** is the set of all points that are the *same distance* from a single fixed point. That fixed point is the **center**, and that fixed distance is the **radius**. Every formula in this lesson grows from those two ideas.`,
      },
      {
        id: 'cb1-radius-diameter',
        type: 'text' as const,
        content: `## Center, Radius, and Diameter

A circle is named by its **center**. A circle with center $O$ is called "circle $O$" (written $\\odot O$).

| Term | Meaning | Symbol |
|------|---------|--------|
| **Radius** | distance from the center to any point on the circle | $r$ |
| **Diameter** | distance straight across through the center | $d$ |

The diameter is a chord that passes through the center, so it is **always twice the radius**:

$$d = 2r \\qquad\\Longleftrightarrow\\qquad r = \\dfrac{d}{2}$$

### Examples

| If… | then… |
|-----|-------|
| $r = 5$ | $d = 2(5) = 10$ |
| $d = 18$ | $r = \\dfrac{18}{2} = 9$ |
| $r = 3.5$ | $d = 7$ |

> 💡 The word *radius* comes from the Latin for "spoke of a wheel." Like spokes, **every radius of the same circle has the same length.**`,
      },
      {
        id: 'cb1-radius-drill',
        type: 'input-boxes' as const,
        content: `**Radius and Diameter** 🧮

Use $d = 2r$ and $r = \\dfrac{d}{2}$.

**1)** A circle has radius $r = 8$. Its diameter is $d = \\,?$
**2)** A circle has diameter $d = 24$. Its radius is $r = \\,?$
**3)** A circle has radius $r = 4.5$. Its diameter is $d = \\,?$  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '12', '9'],
          hint1: 'Diameter is twice the radius: $d = 2r = 2(8) = 16$.',
          hint2: 'Radius is half the diameter: $r = \\dfrac{24}{2} = 12$.',
          hint3: '$d = 2(4.5) = 9$. Doubling a decimal works the same way.',
          explanation: '1) $d = 2(8) = 16$.  2) $r = 24 \\div 2 = 12$.  3) $d = 2(4.5) = 9$.',
        },
      },
      {
        id: 'cb1-chords-lines',
        type: 'text' as const,
        content: `## Chords, Secants, and Tangents

Different lines and segments interact with a circle in different ways:

| Term | What it is |
|------|-----------|
| **Chord** | a segment whose *endpoints* both lie on the circle |
| **Diameter** | the longest possible chord (it passes through the center) |
| **Secant** | a *line* that crosses the circle at **two** points |
| **Tangent** | a *line* that touches the circle at **exactly one** point |

The single point where a tangent touches is the **point of tangency**.

> 🔑 **Diameter = longest chord.** Every diameter is a chord, but most chords are *not* diameters. A chord only becomes a diameter when it runs through the center.

> ⚠️ Don't confuse a **chord** (a segment with both ends *on* the circle) with a **secant** (a full *line* that passes *through* the circle). A secant contains a chord.`,
      },
      {
        id: 'cb1-vocab-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which term describes a line that touches a circle at exactly one point?',
              options: ['Tangent', 'Secant', 'Chord', 'Diameter'],
              correctAnswer: 0,
              explanation: 'A tangent touches the circle at exactly one point (the point of tangency). A secant crosses at two points.',
            },
            {
              question: 'Which of these is always the longest chord of a circle?',
              options: ['The diameter', 'A radius', 'A tangent', 'Any chord through the edge'],
              correctAnswer: 0,
              explanation: 'The diameter passes through the center, making it the longest chord. A radius is not a chord (only one endpoint is on the circle).',
            },
            {
              question: 'A segment with both endpoints on the circle, but not passing through the center, is a:',
              options: ['Chord', 'Diameter', 'Radius', 'Secant'],
              correctAnswer: 0,
              explanation: 'Both endpoints are on the circle, so it is a chord. It is not a diameter because it misses the center, and not a radius (a radius has one endpoint at the center).',
            },
          ],
        },
      },
      {
        id: 'cb1-arcs',
        type: 'text' as const,
        content: `## Arcs and Semicircles

An **arc** is a portion of the circle itself — a curved piece of the boundary, not a straight segment.

- A **semicircle** is exactly **half** the circle, cut off by a diameter (an arc of $180°$).
- A **minor arc** is *smaller* than a semicircle (less than $180°$).
- A **major arc** is *larger* than a semicircle (more than $180°$).

The whole way around a circle measures $360°$, so:

$$\\text{semicircle} = 180°, \\qquad \\text{full circle} = 360°$$

> 💡 We measure arcs in **degrees** (how much of the $360°$ they cover) and we'll measure their **length** in Part 4. Two different ideas — same arc.

You now know the vocabulary of a circle. In Part 2 we measure the distance *around* it.`,
      },
      {
        id: 'cb1-arc-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Vocabulary** 🔽

Choose the term that fits each description.`,
        exercise: {
          dropdowns: [
            { label: 'Half of a circle, cut by a diameter:', options: ['Semicircle', 'Minor arc', 'Major arc', 'Chord'] },
            { label: 'An arc measuring less than $180°$:', options: ['Minor arc', 'Major arc', 'Semicircle', 'Tangent'] },
            { label: 'Distance all the way around equals:', options: ['$360°$', '$180°$', '$90°$', '$100°$'] },
          ],
          correctAnswers: ['Semicircle', 'Minor arc', '$360°$'],
          hint1: 'A diameter splits the circle into two equal halves.',
          hint2: '"Minor" means smaller than a semicircle (under $180°$); "major" means larger.',
          hint3: 'One full turn around any circle is always $360°$.',
          explanation: 'A semicircle is $180°$; a minor arc is under $180°$; a major arc is over $180°$; the full circle is $360°$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'circle-basics-geometry',
    sections: [
      {
        id: 'cb2-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Basics

**Part 2 of 5 — Circumference**

---

> 🔑 **The Idea:** The **circumference** is the distance once around the outside of a circle — its "perimeter." Amazingly, that distance is *always* the diameter multiplied by the same magic number, $\\pi$.`,
      },
      {
        id: 'cb2-pi',
        type: 'text' as const,
        content: `## Meet $\\pi$ (Pi)

Divide **any** circle's circumference by its diameter and you always get the same number:

$$\\pi = \\dfrac{C}{d} \\approx 3.14159\\ldots \\approx 3.14$$

Because $\\pi = \\dfrac{C}{d}$, multiplying both sides by $d$ gives the circumference formulas:

$$C = \\pi d \\qquad\\text{or, since } d = 2r,\\qquad C = 2\\pi r$$

| You know… | Use… |
|-----------|------|
| the diameter $d$ | $C = \\pi d$ |
| the radius $r$ | $C = 2\\pi r$ |

> 💡 $\\pi$ is *irrational* — its decimals never end or repeat. For exact answers we leave $\\pi$ in the answer (like $10\\pi$); for decimals we approximate with $\\pi \\approx 3.14$.`,
      },
      {
        id: 'cb2-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — given the radius
A circle has radius $r = 5$. Find the circumference.

$$C = 2\\pi r = 2\\pi(5) = 10\\pi \\approx 10(3.14) = 31.4$$

### Example 2 — given the diameter
A circle has diameter $d = 10$. Find the circumference.

$$C = \\pi d = \\pi(10) = 10\\pi \\approx 31.4$$

> ✅ **Notice:** $r = 5$ and $d = 10$ describe the *same* circle, so both give $C = 10\\pi$. Whether you start from $r$ or $d$, you reach the same answer.

### Example 3 — exact answer
A circle has radius $r = 3$. The exact circumference is:

$$C = 2\\pi(3) = 6\\pi$$`,
      },
      {
        id: 'cb2-circ-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has radius $7$. Its exact circumference is:',
              options: ['$14\\pi$', '$7\\pi$', '$49\\pi$', '$28\\pi$'],
              correctAnswer: 0,
              explanation: '$C = 2\\pi r = 2\\pi(7) = 14\\pi$. (Squaring would be for area, not circumference.)',
            },
            {
              question: 'Which formula gives the circumference when you know the diameter?',
              options: ['$C = \\pi d$', '$C = 2\\pi d$', '$C = \\pi d^2$', '$C = \\pi r$'],
              correctAnswer: 0,
              explanation: 'By definition $\\pi = C/d$, so $C = \\pi d$. Using $C = 2\\pi r$ would double-count, since $d$ already equals $2r$.',
            },
          ],
        },
      },
      {
        id: 'cb2-circ-drill',
        type: 'input-boxes' as const,
        content: `**Find the Circumference** 🧮

Use $\\pi \\approx 3.14$ and round to **two decimal places** where needed.

**1)** $r = 5$. Circumference $C = \\,?$  *(use $\\pi \\approx 3.14$)*
**2)** $d = 6$. Circumference $C = \\,?$  *(use $\\pi \\approx 3.14$)*
**3)** $r = 10$, exact answer. $C = \\,?\\,\\pi$  *(enter just the number before $\\pi$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['31.4', '18.84', '20'],
          hint1: '$C = 2\\pi r = 2(3.14)(5) = 31.4$.',
          hint2: 'For a diameter, use $C = \\pi d = 3.14 \\times 6 = 18.84$.',
          hint3: 'Exact form: $C = 2\\pi(10) = 20\\pi$, so the number before $\\pi$ is $20$.',
          explanation: '1) $C = 2(3.14)(5) = 31.4$.  2) $C = \\pi d = 3.14(6) = 18.84$.  3) $C = 2\\pi(10) = 20\\pi$, so the number is $20$.',
        },
      },
      {
        id: 'cb2-reverse',
        type: 'text' as const,
        content: `## Working Backwards

If you know the **circumference** and want the diameter or radius, just undo the multiplication.

$$d = \\dfrac{C}{\\pi}, \\qquad r = \\dfrac{C}{2\\pi}$$

### Example
A circular track has circumference $C = 62.8$ m. Find its diameter (use $\\pi \\approx 3.14$).

$$d = \\dfrac{C}{\\pi} = \\dfrac{62.8}{3.14} = 20 \\text{ m}$$

> ⚠️ **Watch the formula match.** Dividing $C$ by $\\pi$ gives the **diameter**; dividing by $2\\pi$ gives the **radius**. Mixing these up is the most common circumference error.

In Part 3 we move from the distance *around* a circle to the space *inside* it.`,
      },
      {
        id: 'cb2-reverse-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Move** 🔽

A circle has circumference $C = 31.4$ (use $\\pi \\approx 3.14$).`,
        exercise: {
          dropdowns: [
            { label: 'To find the diameter, compute:', options: ['$31.4 \\div 3.14$', '$31.4 \\times 3.14$', '$31.4 \\div 6.28$ then $\\times 2$', '$31.4 \\times 2$'] },
            { label: 'That gives a diameter of:', options: ['$10$', '$5$', '$20$', '$15$'] },
            { label: 'So the radius is:', options: ['$5$', '$10$', '$20$', '$2.5$'] },
          ],
          correctAnswers: ['$31.4 \\div 3.14$', '$10$', '$5$'],
          hint1: 'Since $C = \\pi d$, undo by dividing: $d = C \\div \\pi$.',
          hint2: '$31.4 \\div 3.14 = 10$, so the diameter is $10$.',
          hint3: 'The radius is half the diameter: $r = 10 \\div 2 = 5$.',
          explanation: '$d = C/\\pi = 31.4/3.14 = 10$, and $r = d/2 = 5$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'circle-basics-geometry',
    sections: [
      {
        id: 'cb3-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Basics

**Part 3 of 5 — Area**

---

> 🔑 **The Idea:** **Area** is the amount of flat space *inside* a circle. It depends on the radius squared — so doubling the radius makes the area **four times** as big.`,
      },
      {
        id: 'cb3-area-formula',
        type: 'text' as const,
        content: `## The Area Formula

$$A = \\pi r^2$$

The radius is **squared**, and the units are **square** units ($cm^{2}$, $in^{2}$, $m^{2}$).

> ⚠️ **Radius, not diameter!** If you're given the diameter, first cut it in half to get $r$, *then* square it. Forgetting to halve first is the #1 area mistake.

| You know… | Steps |
|-----------|-------|
| radius $r$ | square it, times $\\pi$: $A = \\pi r^2$ |
| diameter $d$ | first $r = \\dfrac{d}{2}$, then $A = \\pi r^2$ |

> 💡 Circumference uses $r$ to the **first** power ($2\\pi r$); area uses $r$ to the **second** power ($\\pi r^2$). The little exponent tells you which one you're finding.`,
      },
      {
        id: 'cb3-area-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — given the radius
$r = 5$:

$$A = \\pi r^2 = \\pi (5)^2 = 25\\pi \\approx 25(3.14) = 78.5 \\text{ square units}$$

### Example 2 — given the diameter
$d = 12$. First halve it: $r = \\dfrac{12}{2} = 6$. Then:

$$A = \\pi (6)^2 = 36\\pi \\approx 113.1 \\text{ square units}$$

> ✅ **Check the trap:** if you *forgot* to halve and used $r = 12$, you'd get $144\\pi$ — four times too big. Always halve the diameter first.

### Example 3 — exact answer
$r = 4$:

$$A = \\pi(4)^2 = 16\\pi$$`,
      },
      {
        id: 'cb3-area-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has radius $10$. Its exact area is:',
              options: ['$100\\pi$', '$20\\pi$', '$10\\pi$', '$1000\\pi$'],
              correctAnswer: 0,
              explanation: '$A = \\pi r^2 = \\pi(10)^2 = 100\\pi$. The radius is squared, so $10^2 = 100$.',
            },
            {
              question: 'A circle has diameter $8$. What is the correct first step to find the area?',
              options: ['Find $r = 8 \\div 2 = 4$', 'Square the diameter: $8^2 = 64$', 'Multiply $8$ by $\\pi$', 'Multiply $8$ by $2\\pi$'],
              correctAnswer: 0,
              explanation: 'The area formula needs the radius, so first halve the diameter: $r = 4$. Then $A = \\pi(4)^2 = 16\\pi$.',
            },
          ],
        },
      },
      {
        id: 'cb3-area-drill',
        type: 'input-boxes' as const,
        content: `**Find the Area** 🧮

Give **exact** answers as a number times $\\pi$ (enter only the number before $\\pi$).

**1)** $r = 3$. Area $= \\,?\\,\\pi$
**2)** $r = 7$. Area $= \\,?\\,\\pi$
**3)** $d = 20$ (so $r = 10$). Area $= \\,?\\,\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '49', '100'],
          hint1: '$A = \\pi r^2 = \\pi(3)^2 = 9\\pi$, so the number is $9$.',
          hint2: '$A = \\pi(7)^2 = 49\\pi$, so the number is $49$.',
          hint3: 'First $r = 20 \\div 2 = 10$, then $A = \\pi(10)^2 = 100\\pi$, so the number is $100$.',
          explanation: '1) $9\\pi$.  2) $49\\pi$.  3) halve $d$ to get $r=10$, then $100\\pi$.',
        },
      },
      {
        id: 'cb3-semicircle',
        type: 'text' as const,
        content: `## Half Circles (Semicircles)

A **semicircle** is half a circle, so its area is half the full-circle area:

$$A_{\\text{semicircle}} = \\dfrac{1}{2}\\,\\pi r^2$$

### Example
A semicircle has radius $r = 6$:

$$A = \\dfrac{1}{2}\\,\\pi (6)^2 = \\dfrac{1}{2}(36\\pi) = 18\\pi \\approx 56.5 \\text{ square units}$$

> 💡 The same "take a fraction of the whole" idea — half here — powers **sectors** in Part 4, where the fraction can be any slice of the $360°$ pie.

Next up: slicing the circle into wedges and arcs.`,
      },
      {
        id: 'cb3-semicircle-dropdown',
        type: 'dropdown-select' as const,
        content: `**Semicircle Reasoning** 🔽

A semicircle has radius $r = 4$.`,
        exercise: {
          dropdowns: [
            { label: 'Area of the FULL circle:', options: ['$16\\pi$', '$8\\pi$', '$4\\pi$', '$32\\pi$'] },
            { label: 'Area of the SEMICIRCLE (half):', options: ['$8\\pi$', '$16\\pi$', '$4\\pi$', '$32\\pi$'] },
          ],
          correctAnswers: ['$16\\pi$', '$8\\pi$'],
          hint1: 'Full circle: $A = \\pi r^2 = \\pi(4)^2 = 16\\pi$.',
          hint2: 'A semicircle is half: $\\dfrac{1}{2}(16\\pi) = 8\\pi$.',
          hint3: 'Find the whole first, then take half.',
          explanation: 'Full circle $= 16\\pi$; half of that is $8\\pi$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'circle-basics-geometry',
    sections: [
      {
        id: 'cb4-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Basics

**Part 4 of 5 — Arcs, Sectors & Central Angles**

---

> 🔑 **Big Idea:** A **central angle** opens from the center and cuts out a slice. The *fraction* of $360°$ that the angle covers is the *same fraction* of the circumference (arc length) **and** of the area (sector area).`,
      },
      {
        id: 'cb4-central-angle',
        type: 'text' as const,
        content: `## Central Angles and the "Fraction" Trick

A **central angle** has its vertex at the center. Its measure equals the measure of the **arc** it cuts off.

The key to everything in this part is one fraction:

$$\\text{fraction of the circle} = \\dfrac{\\text{central angle}}{360°}$$

| Central angle | Fraction of circle |
|---------------|--------------------|
| $90°$ | $\\dfrac{90}{360} = \\dfrac{1}{4}$ |
| $180°$ | $\\dfrac{180}{360} = \\dfrac{1}{2}$ |
| $120°$ | $\\dfrac{120}{360} = \\dfrac{1}{3}$ |
| $60°$ | $\\dfrac{60}{360} = \\dfrac{1}{6}$ |

> 💡 Once you know the fraction, **multiply** it by the full circumference for arc length, or by the full area for sector area. Same fraction, two uses.`,
      },
      {
        id: 'cb4-arc-length',
        type: 'text' as const,
        content: `## Arc Length

An **arc length** is the distance along the curved edge — a fraction of the whole circumference:

$$\\text{arc length} = \\dfrac{\\theta}{360°} \\cdot 2\\pi r$$

where $\\theta$ is the central angle.

### Example
A circle has radius $r = 8$ and a central angle of $\\theta = 90°$. Find the arc length.

$$\\text{arc} = \\dfrac{90}{360}\\cdot 2\\pi(8) = \\dfrac{1}{4}\\cdot 16\\pi = 4\\pi \\approx 12.57$$

> ✅ **Sanity check:** a $90°$ arc is one quarter of the way around, so it should be one quarter of the circumference $16\\pi$. Indeed $\\frac{1}{4}(16\\pi) = 4\\pi$. ✓`,
      },
      {
        id: 'cb4-arc-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A central angle of $120°$ represents what fraction of a full circle?',
              options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{2}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{6}$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{120}{360} = \\dfrac{1}{3}$. A $120°$ slice is one-third of the $360°$ circle.',
            },
            {
              question: 'In a circle of radius $12$, the arc length cut by a $60°$ central angle is:',
              options: ['$4\\pi$', '$2\\pi$', '$6\\pi$', '$12\\pi$'],
              correctAnswer: 0,
              explanation: 'Fraction $= \\frac{60}{360} = \\frac{1}{6}$. Circumference $= 2\\pi(12) = 24\\pi$. Arc $= \\frac{1}{6}(24\\pi) = 4\\pi$.',
            },
          ],
        },
      },
      {
        id: 'cb4-sector',
        type: 'text' as const,
        content: `## Sector Area

A **sector** is a "pizza slice" — the region between two radii and an arc. Its area is the same fraction of the total area:

$$\\text{sector area} = \\dfrac{\\theta}{360°} \\cdot \\pi r^2$$

### Example
A circle has radius $r = 6$ and a $120°$ sector. Find the sector area.

$$\\text{sector} = \\dfrac{120}{360}\\cdot \\pi(6)^2 = \\dfrac{1}{3}\\cdot 36\\pi = 12\\pi \\approx 37.70$$

> ⚠️ **Pick the right "whole."** Arc length uses the **circumference** $2\\pi r$; sector area uses the **area** $\\pi r^2$. The fraction $\\frac{\\theta}{360}$ is identical — only the thing you multiply by changes.`,
      },
      {
        id: 'cb4-sector-drill',
        type: 'input-boxes' as const,
        content: `**Arcs and Sectors** 🧮

Give **exact** answers as a number times $\\pi$ (enter only the number before $\\pi$).

**1)** $r = 8$, $\\theta = 90°$. **Sector area** $= \\,?\\,\\pi$
**2)** $r = 4$, $\\theta = 45°$. **Sector area** $= \\,?\\,\\pi$
**3)** $r = 10$, $\\theta = 180°$. **Arc length** $= \\,?\\,\\pi$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['16', '2', '10'],
          hint1: 'Sector $= \\frac{90}{360}\\cdot\\pi(8)^2 = \\frac{1}{4}\\cdot 64\\pi = 16\\pi$.',
          hint2: 'Sector $= \\frac{45}{360}\\cdot\\pi(4)^2 = \\frac{1}{8}\\cdot 16\\pi = 2\\pi$.',
          hint3: 'Arc $= \\frac{180}{360}\\cdot 2\\pi(10) = \\frac{1}{2}\\cdot 20\\pi = 10\\pi$.',
          explanation: '1) $\\frac{1}{4}(64\\pi)=16\\pi$.  2) $\\frac{1}{8}(16\\pi)=2\\pi$.  3) half of the circumference $20\\pi$ is $10\\pi$.',
        },
      },
      {
        id: 'cb4-three-steps',
        type: 'text' as const,
        content: `## A Reliable 3-Step Routine

Every arc-length or sector-area problem reduces to the same three moves:

1. **Fraction:** compute $\\dfrac{\\theta}{360°}$ and simplify it.
2. **Whole:** find the matching "whole" — circumference $2\\pi r$ for an *arc*, area $\\pi r^2$ for a *sector*.
3. **Multiply:** fraction × whole.

> 💡 If you keep the fraction simplified (like $\\frac{1}{6}$ instead of $\\frac{60}{360}$), the final multiplication is almost always clean. Let's run all three steps on one circle.`,
      },
      {
        id: 'cb4-sector-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Sector** 🔽

A circle has radius $r = 6$ and a central angle of $\\theta = 60°$.`,
        exercise: {
          dropdowns: [
            { label: 'Fraction of the circle:', options: ['$\\dfrac{1}{6}$', '$\\dfrac{1}{3}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$'] },
            { label: 'Full area $\\pi r^2$ equals:', options: ['$36\\pi$', '$12\\pi$', '$6\\pi$', '$72\\pi$'] },
            { label: 'Sector area (fraction × full area):', options: ['$6\\pi$', '$12\\pi$', '$36\\pi$', '$3\\pi$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{6}$', '$36\\pi$', '$6\\pi$'],
          hint1: '$\\dfrac{60}{360} = \\dfrac{1}{6}$.',
          hint2: 'Full area $= \\pi(6)^2 = 36\\pi$.',
          hint3: 'Sector $= \\dfrac{1}{6}\\cdot 36\\pi = 6\\pi$.',
          explanation: 'Fraction $\\frac{1}{6}$, full area $36\\pi$, so sector $= \\frac{1}{6}(36\\pi) = 6\\pi$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'circle-basics-geometry',
    sections: [
      {
        id: 'cb5-intro',
        type: 'text' as const,
        content: `# ⭕ Circle Basics

**Part 5 of 5 — Equation of a Circle & Mastery Check**

---

> 🔑 **Last Idea:** Put a circle on the coordinate plane and its definition ("all points a fixed distance $r$ from the center") becomes a clean algebraic equation built from the distance formula.`,
      },
      {
        id: 'cb5-equation',
        type: 'text' as const,
        content: `## The Standard Equation

A circle with center $(h, k)$ and radius $r$ has the equation:

$$(x - h)^2 + (y - k)^2 = r^2$$

Read it carefully — the signs **flip**, and the right side is $r^2$ (not $r$):

| Equation | Center $(h,k)$ | Radius $r$ |
|----------|----------------|-----------|
| $(x-2)^2 + (y-3)^2 = 25$ | $(2, 3)$ | $\\sqrt{25} = 5$ |
| $(x+5)^2 + (y-2)^2 = 9$ | $(-5, 2)$ | $\\sqrt{9} = 3$ |
| $x^2 + y^2 = 49$ | $(0, 0)$ | $\\sqrt{49} = 7$ |

> ⚠️ **Sign flip:** $(x - h)$ means the center's $x$ is $+h$. So $(x + 5)^2 = (x - (-5))^2$ gives $h = -5$. And **take the square root of the right side** to get the radius — $r^2 = 25$ means $r = 5$, not $25$.`,
      },
      {
        id: 'cb5-equation-worked',
        type: 'text' as const,
        content: `## Worked Examples

### Example 1 — write the equation
Center $(2, -3)$, radius $5$. Substitute $h = 2$, $k = -3$, $r = 5$:

$$(x - 2)^2 + (y - (-3))^2 = 5^2 \\;\\Longrightarrow\\; (x-2)^2 + (y+3)^2 = 25$$

### Example 2 — read off center and radius
Given $(x-1)^2 + (y-4)^2 = 36$:

$$\\text{center } (1, 4), \\qquad r = \\sqrt{36} = 6$$

> ✅ **Check:** plug the center's own coordinates? No — plug a point you expect *on* the circle. The point $(7, 4)$ is $6$ units right of the center: $(7-1)^2 + (4-4)^2 = 36 + 0 = 36$ ✓.`,
      },
      {
        id: 'cb5-equation-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Circle** 🔽

Use $(x-h)^2 + (y-k)^2 = r^2$.`,
        exercise: {
          dropdowns: [
            { label: 'Center of $(x-3)^2 + (y-7)^2 = 16$:', options: ['$(3, 7)$', '$(-3, -7)$', '$(7, 3)$', '$(3, -7)$'] },
            { label: 'Radius of $(x-3)^2 + (y-7)^2 = 16$:', options: ['$4$', '$16$', '$8$', '$\\sqrt{8}$'] },
            { label: 'Center of $(x+5)^2 + (y-2)^2 = 9$:', options: ['$(-5, 2)$', '$(5, 2)$', '$(-5, -2)$', '$(5, -2)$'] },
          ],
          correctAnswers: ['$(3, 7)$', '$4$', '$(-5, 2)$'],
          hint1: '$(x-h)^2+(y-k)^2 = r^2$ has center $(h,k)$; here $h=3$, $k=7$.',
          hint2: 'The right side is $r^2 = 16$, so $r = \\sqrt{16} = 4$.',
          hint3: '$(x+5)^2 = (x-(-5))^2$, so $h = -5$, and $k = 2$.',
          explanation: 'Center $(3,7)$, $r = \\sqrt{16}=4$; and $(x+5)^2+(y-2)^2=9$ has center $(-5,2)$.',
        },
      },
      {
        id: 'cb5-quick-reference',
        type: 'text' as const,
        content: `## Quick Reference — Everything in One Table

| Goal | Formula |
|------|---------|
| Diameter from radius | $d = 2r$ |
| Circumference | $C = 2\\pi r = \\pi d$ |
| Area | $A = \\pi r^2$ |
| Arc length (angle $\\theta$) | $\\dfrac{\\theta}{360°}\\cdot 2\\pi r$ |
| Sector area (angle $\\theta$) | $\\dfrac{\\theta}{360°}\\cdot \\pi r^2$ |
| Equation of a circle | $(x-h)^2 + (y-k)^2 = r^2$, center $(h,k)$ |

> ⚠️ Two traps to remember: **halve the diameter before squaring** for area, and **take the square root of $r^2$** to read a radius off an equation. Keep those straight and the rest is bookkeeping.`,
      },
      {
        id: 'cb5-equation-drill',
        type: 'input-boxes' as const,
        content: `**Center and Radius** 🧮

Given $(x+5)^2 + (y-2)^2 = 9$:

**1)** The center's $x$-coordinate $h = \\,?$
**2)** The center's $y$-coordinate $k = \\,?$
**3)** The radius $r = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-5', '2', '3'],
          hint1: '$(x+5)^2 = (x-(-5))^2$, so $h = -5$.',
          hint2: '$(y-2)^2$ already has the minus sign, so $k = +2$.',
          hint3: 'The right side is $r^2 = 9$, so $r = \\sqrt{9} = 3$.',
          explanation: 'Center $(-5, 2)$ and $r = \\sqrt{9} = 3$.',
        },
      },
      {
        id: 'cb5-putting-together',
        type: 'text' as const,
        content: `## Putting It All Together

You can now move fluently between a circle's **radius**, **diameter**, **circumference**, **area**, its **arcs and sectors**, and its **equation** on the plane. The final two checks mix every part of the lesson at once.

> 💡 When a problem gives you the *diameter*, jot down the *radius* immediately — most formulas (area, circumference via $2\\pi r$, arc length, sector area) are built on $r$, so converting first prevents the most common slips.`,
      },
      {
        id: 'cb5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circle has radius $5$. Which pair (circumference, area) is correct?',
              options: ['$C = 10\\pi,\\; A = 25\\pi$', '$C = 25\\pi,\\; A = 10\\pi$', '$C = 5\\pi,\\; A = 25\\pi$', '$C = 10\\pi,\\; A = 10\\pi$'],
              correctAnswer: 0,
              explanation: '$C = 2\\pi r = 10\\pi$ (radius to the first power) and $A = \\pi r^2 = 25\\pi$ (radius squared).',
            },
            {
              question: 'The equation of a circle with center $(0,0)$ and radius $7$ is:',
              options: ['$x^2 + y^2 = 49$', '$x^2 + y^2 = 7$', '$(x-7)^2 + y^2 = 0$', '$x^2 + y^2 = 14$'],
              correctAnswer: 0,
              explanation: 'Center $(0,0)$ gives $x^2 + y^2 = r^2$, and $r^2 = 7^2 = 49$.',
            },
          ],
        },
      },
      {
        id: 'cb5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A circle has diameter $12$. What is its exact area?',
              options: ['$36\\pi$', '$144\\pi$', '$24\\pi$', '$12\\pi$'],
              correctAnswer: 0,
              explanation: 'First halve the diameter: $r = 6$. Then $A = \\pi r^2 = \\pi(6)^2 = 36\\pi$. (Using $r=12$ by mistake gives $144\\pi$.)',
            },
            {
              question: 'A $90°$ sector is cut from a circle of radius $8$. Its area is:',
              options: ['$16\\pi$', '$64\\pi$', '$4\\pi$', '$8\\pi$'],
              correctAnswer: 0,
              explanation: 'Fraction $= \\frac{90}{360} = \\frac{1}{4}$; full area $= \\pi(8)^2 = 64\\pi$; sector $= \\frac{1}{4}(64\\pi) = 16\\pi$.',
            },
            {
              question: 'The center and radius of $(x-1)^2 + (y+4)^2 = 36$ are:',
              options: ['Center $(1, -4)$, radius $6$', 'Center $(-1, 4)$, radius $6$', 'Center $(1, -4)$, radius $36$', 'Center $(1, 4)$, radius $6$'],
              correctAnswer: 0,
              explanation: '$(x-1)^2$ gives $h=1$; $(y+4)^2 = (y-(-4))^2$ gives $k=-4$; and $r = \\sqrt{36} = 6$.',
            },
          ],
        },
      },
    ],
  },
]
