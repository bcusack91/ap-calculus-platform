import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Circles: Circumference and Area (Grade 7 Math).
 * Registry key / DB slug: 'circles-circumference-area-grade7'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). Grade-7 convention: use π ≈ 3.14.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'circles-circumference-area-grade7',
    sections: [
      {
        id: 'circ1-intro',
        type: 'text' as const,
        content: `# ⭕ Circles: Circumference and Area

**Part 1 of 5 — The Parts of a Circle and the Magic Number π**

---

### Topics in This Part

| Section |
|---------|
| Radius, Diameter, and Center |
| What Is π (Pi)? |
| The Radius–Diameter Connection |

> 🔑 **Key Concept:** Every circle hides one special number, **π** (pi). It connects the distance *around* a circle to the distance *across* it — and it's the key to everything in this lesson.`,
      },
      {
        id: 'circ1-parts',
        type: 'text' as const,
        content: `## The Parts of a Circle

A **circle** is the set of all points the same distance from a center point. Three words describe its size:

| Part | What it is | Symbol |
|------|-----------|--------|
| **Center** | the middle point | — |
| **Radius** | center → edge | $r$ |
| **Diameter** | edge → edge, *through* the center | $d$ |

The **circumference** is the distance all the way *around* the circle — like the perimeter of a polygon, but for a curve.

> 🔑 **Key Relationship:** The diameter is **twice** the radius, because it crosses the circle through the center — one radius on each side.
$$d = 2r \\qquad\\text{and}\\qquad r = \\frac{d}{2}$$`,
      },
      {
        id: 'circ1-radius-diameter',
        type: 'input-boxes' as const,
        content: `**Radius and Diameter** 🧮

Use $d = 2r$ and $r = \\dfrac{d}{2}$.

**1)** A circle has radius $r = 6$ cm. Its diameter is $d = \\,?$ cm.
**2)** A circle has diameter $d = 20$ in. Its radius is $r = \\,?$ in.
**3)** A pizza is $14$ inches across (that's the diameter). Its radius is $r = \\,?$ in.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '10', '7'],
          hint1: 'Diameter is double the radius: $d = 2r$. So $d = 2 \\times 6$.',
          hint2: 'Radius is half the diameter: $r = d \\div 2$. So $r = 20 \\div 2$.',
          hint3: '"Across" means the diameter, so $r = 14 \\div 2 = 7$.',
          explanation: '1) $d = 2 \\times 6 = 12$ cm.  2) $r = 20 \\div 2 = 10$ in.  3) $r = 14 \\div 2 = 7$ in.',
        },
      },
      {
        id: 'circ1-pi',
        type: 'text' as const,
        content: `## What Is π (Pi)?

Take **any** circle, measure all the way around (circumference $C$), then measure straight across (diameter $d$). Divide $C$ by $d$. You always get the **same** number — about **3.14**. That number is **π**.

$$\\pi = \\frac{C}{d} \\approx 3.14$$

> 💡 **π never changes.** A coin, a clock, a planet's orbit — divide the distance around by the distance across and you always get $\\approx 3.14$. That's what makes π so powerful.

Two values you'll use in Grade 7:

| Form | Value | When to use |
|------|-------|-------------|
| Decimal | $\\pi \\approx 3.14$ | most problems |
| Fraction | $\\pi \\approx \\dfrac{22}{7}$ | when the radius is a multiple of $7$ |`,
      },
      {
        id: 'circ1-concept-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The distance from the center of a circle to its edge is called the:',
              options: ['radius', 'diameter', 'circumference', 'π'],
              correctAnswer: 0,
              explanation: 'The radius goes from the center to the edge. The diameter goes all the way across through the center, and equals two radii.',
            },
            {
              question: 'What does π (pi) actually represent?',
              options: [
                'The circumference divided by the diameter',
                'The radius times two',
                'The area of any circle',
                'The diameter divided by the radius',
              ],
              correctAnswer: 0,
              explanation: 'For every circle, $C \\div d = \\pi \\approx 3.14$. Pi is the ratio of the distance around to the distance across.',
            },
            {
              question: 'A circle has a radius of $9$ m. What is its diameter?',
              options: ['$18$ m', '$4.5$ m', '$9$ m', '$3.14$ m'],
              correctAnswer: 0,
              explanation: 'Diameter is twice the radius: $d = 2 \\times 9 = 18$ m.',
            },
          ],
        },
      },
      {
        id: 'circ1-match',
        type: 'dropdown-select' as const,
        content: `**Match Each Term** 🔽

Choose the description that fits each part of a circle.`,
        exercise: {
          dropdowns: [
            { label: 'Radius', options: ['center to the edge', 'all the way around', 'edge to edge through the center'] },
            { label: 'Diameter', options: ['edge to edge through the center', 'center to the edge', 'the ratio $C \\div d$'] },
            { label: 'π (pi)', options: ['$\\approx 3.14$, the ratio $C \\div d$', 'twice the radius', 'the distance around'] },
          ],
          correctAnswers: ['center to the edge', 'edge to edge through the center', '$\\approx 3.14$, the ratio $C \\div d$'],
          hint1: 'The radius is the *short* one — center to edge.',
          hint2: 'The diameter is the *long* one — all the way across through the center, equal to two radii.',
          hint3: 'π is a number ($\\approx 3.14$), not a distance; it is the ratio of circumference to diameter.',
          explanation: 'Radius = center to edge. Diameter = edge to edge through the center ($= 2r$). π $\\approx 3.14$ is the ratio $C \\div d$.',
        },
      },
      {
        id: 'circ1-wrap',
        type: 'text' as const,
        content: `## You're Ready to Measure

You now know the building blocks:

- **Radius** $r$: center to edge.
- **Diameter** $d = 2r$: across, through the center.
- **π** $\\approx 3.14$: the ratio $\\dfrac{C}{d}$ that every circle shares.

> 🔑 Because $\\pi = \\dfrac{C}{d}$, multiplying both sides by $d$ gives $C = \\pi d$. That one rearrangement is the **circumference formula** — and it's where Part 2 begins.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'circles-circumference-area-grade7',
    sections: [
      {
        id: 'circ2-intro',
        type: 'text' as const,
        content: `# ⭕ Circles: Circumference and Area

**Part 2 of 5 — Finding the Circumference**

---

> 🔑 **The Formula:** The circumference is π times the diameter. Because $d = 2r$, you can write it two equal ways:
$$C = \\pi d \\qquad\\text{or}\\qquad C = 2\\pi r$$`,
      },
      {
        id: 'circ2-formula',
        type: 'text' as const,
        content: `## The Circumference Formula

| You're given… | Use this version | Why |
|----------------|------------------|-----|
| the **diameter** $d$ | $C = \\pi d$ | plug $d$ in directly |
| the **radius** $r$ | $C = 2\\pi r$ | because $d = 2r$ |

### Worked Example: Diameter Given

A circle has diameter $d = 10$ cm. Find the circumference. Use $\\pi \\approx 3.14$.

$$C = \\pi d \\approx 3.14 \\times 10 = 31.4 \\text{ cm}$$

### Worked Example: Radius Given

A circle has radius $r = 5$ cm. Find the circumference.

$$C = 2\\pi r \\approx 2 \\times 3.14 \\times 5 = 31.4 \\text{ cm}$$

> 💡 **Same answer!** A radius of $5$ and a diameter of $10$ describe the *same circle*, so both formulas give $31.4$ cm. They're really the same formula.`,
      },
      {
        id: 'circ2-pick-formula',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Setup** 🔽

For each circle, choose the correct first step. Use $\\pi \\approx 3.14$.`,
        exercise: {
          dropdowns: [
            { label: 'Diameter $d = 8$, find $C$:', options: ['$C = 3.14 \\times 8$', '$C = 3.14 \\times 4$', '$C = 2 \\times 3.14 \\times 8$', '$C = 3.14 \\times 8 \\times 8$'] },
            { label: 'Radius $r = 4$, find $C$:', options: ['$C = 2 \\times 3.14 \\times 4$', '$C = 3.14 \\times 4$', '$C = 3.14 \\times 2$', '$C = 3.14 \\times 4 \\times 4$'] },
            { label: 'Radius $r = 6$, find $C$:', options: ['$C = 2 \\times 3.14 \\times 6$', '$C = 3.14 \\times 6$', '$C = 3.14 \\times 3$', '$C = 3.14 \\times 6 \\times 6$'] },
          ],
          correctAnswers: ['$C = 3.14 \\times 8$', '$C = 2 \\times 3.14 \\times 4$', '$C = 2 \\times 3.14 \\times 6$'],
          hint1: 'If you have the **diameter**, use $C = \\pi d$ — just one multiply by $\\pi$.',
          hint2: 'If you have the **radius**, use $C = 2\\pi r$ — double the radius first (or multiply by $2\\pi$).',
          hint3: 'Multiplying the radius by itself ($r \\times r$) is for *area*, not circumference. Circumference never squares anything.',
          explanation: 'Diameter → $C = \\pi d$. Radius → $C = 2\\pi r$. Squaring is only for area, so any option with $r \\times r$ is wrong here.',
        },
      },
      {
        id: 'circ2-compute',
        type: 'input-boxes' as const,
        content: `**Compute the Circumference** 🧮

Use $\\pi \\approx 3.14$. Round to the nearest tenth if needed.

**1)** $d = 6$ m: $\\;C = \\,?$ m
**2)** $r = 10$ ft: $\\;C = \\,?$ ft
**3)** $d = 100$ cm: $\\;C = \\,?$ cm`,
        exercise: {
          boxes: 3,
          correctAnswers: ['18.84', '62.8', '314'],
          hint1: '$C = \\pi d = 3.14 \\times 6$.',
          hint2: '$C = 2\\pi r = 2 \\times 3.14 \\times 10 = 6.28 \\times 10$.',
          hint3: '$C = \\pi d = 3.14 \\times 100$. Multiplying by $100$ moves the decimal two places.',
          explanation: '1) $3.14 \\times 6 = 18.84$ m.  2) $2 \\times 3.14 \\times 10 = 62.8$ ft.  3) $3.14 \\times 100 = 314$ cm.',
        },
      },
      {
        id: 'circ2-twentytwo-sevenths',
        type: 'text' as const,
        content: `## When the Radius Is a Multiple of 7

When the radius or diameter is a multiple of $7$, the fraction $\\pi \\approx \\dfrac{22}{7}$ makes the math come out clean.

### Worked Example: $r = 7$ cm

$$C = 2\\pi r \\approx 2 \\times \\frac{22}{7} \\times 7 = 2 \\times 22 = 44 \\text{ cm}$$

The $7$ in the radius cancels the $7$ in the denominator — no decimals needed!

> ⚠️ **Watch your units.** Circumference is a length, so its units are plain (cm, m, ft) — **not** squared. Squared units belong to area, coming in Part 3.`,
      },
      {
        id: 'circ2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A bicycle wheel has a diameter of $20$ inches. About how far does it travel in one full turn? (Use $\\pi \\approx 3.14$.)',
              options: ['$62.8$ in', '$31.4$ in', '$125.6$ in', '$40$ in'],
              correctAnswer: 0,
              explanation: 'One full turn covers the circumference: $C = \\pi d = 3.14 \\times 20 = 62.8$ in.',
            },
            {
              question: 'Using $\\pi \\approx \\dfrac{22}{7}$, the circumference of a circle with radius $r = 14$ m is:',
              options: ['$88$ m', '$44$ m', '$88$ $m^{2}$', '$616$ m'],
              correctAnswer: 0,
              explanation: '$C = 2\\pi r = 2 \\times \\frac{22}{7} \\times 14 = 2 \\times 22 \\times 2 = 88$ m. Circumference uses plain (non-squared) units.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'circles-circumference-area-grade7',
    sections: [
      {
        id: 'circ3-intro',
        type: 'text' as const,
        content: `# ⭕ Circles: Circumference and Area

**Part 3 of 5 — Finding the Area**

---

> 🔑 **The Formula:** The area of a circle is π times the radius **squared**.
$$A = \\pi r^2$$
The little $2$ matters — area is always measured in **square** units.`,
      },
      {
        id: 'circ3-formula',
        type: 'text' as const,
        content: `## The Area Formula

$$A = \\pi r^2 = \\pi \\times r \\times r$$

> ⚠️ **Order of operations!** Square the radius **first**, then multiply by π. Do **not** multiply $\\pi \\times r$ and then square — that gives the wrong answer.

### Worked Example: $r = 5$ cm

$$A = \\pi r^2 \\approx 3.14 \\times 5^2 = 3.14 \\times 25 = 78.5 \\text{ cm}^2$$

Step by step:
1. Square the radius: $5^2 = 25$.
2. Multiply by π: $3.14 \\times 25 = 78.5$.
3. Units are **squared**: $\\text{cm}^2$.`,
      },
      {
        id: 'circ3-radius-first',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To find the area of a circle with radius $4$, what do you compute first?',
              options: ['$4^2 = 16$', '$3.14 \\times 4 = 12.56$', '$4 \\times 2 = 8$', '$3.14 \\times 2 = 6.28$'],
              correctAnswer: 0,
              explanation: 'In $A = \\pi r^2$, square the radius first: $4^2 = 16$. Then multiply by π: $3.14 \\times 16 = 50.24$.',
            },
            {
              question: 'Which set of units is correct for the **area** of a circle?',
              options: ['$\\text{cm}^2$ (square centimeters)', '$\\text{cm}$ (centimeters)', '$\\text{cm}^3$ (cubic centimeters)', 'no units'],
              correctAnswer: 0,
              explanation: 'Area measures a surface, so it uses **square** units like $\\text{cm}^2$. Plain units are for length (circumference); cubic units are for volume.',
            },
          ],
        },
      },
      {
        id: 'circ3-compute',
        type: 'input-boxes' as const,
        content: `**Compute the Area** 🧮

Use $\\pi \\approx 3.14$. Square the radius first!

**1)** $r = 2$ cm: $\\;A = \\,?$  $(cm^{2})$
**2)** $r = 3$ m: $\\;A = \\,?$  $(m^{2})$
**3)** $r = 10$ ft: $\\;A = \\,?$  $(ft^{2})$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12.56', '28.26', '314'],
          hint1: '$A = 3.14 \\times 2^2 = 3.14 \\times 4$.',
          hint2: '$A = 3.14 \\times 3^2 = 3.14 \\times 9$.',
          hint3: '$A = 3.14 \\times 10^2 = 3.14 \\times 100$.',
          explanation: '1) $3.14 \\times 4 = 12.56$ $cm^{2}$.  2) $3.14 \\times 9 = 28.26$ $m^{2}$.  3) $3.14 \\times 100 = 314$ $ft^{2}$.',
        },
      },
      {
        id: 'circ3-diameter-given',
        type: 'text' as const,
        content: `## When You're Given the Diameter

The area formula needs the **radius**. If you're handed the diameter, find the radius first by halving it.

### Worked Example: $d = 12$ cm

1. **Halve** the diameter: $r = \\dfrac{12}{2} = 6$ cm.
2. **Square** it: $6^2 = 36$.
3. **Multiply** by π: $A = 3.14 \\times 36 = 113.04 \\text{ cm}^2$.

> ⚠️ **The #1 area mistake:** plugging the *diameter* straight into $A = \\pi r^2$. Always cut the diameter in half to get $r$ first. Using $12$ instead of $6$ would give an answer **four times too big**.`,
      },
      {
        id: 'circ3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Area Calculation** 🔽

A circle has **diameter** $d = 8$ cm. Step through finding the area. Use $\\pi \\approx 3.14$.`,
        exercise: {
          dropdowns: [
            { label: 'Step 1 — find the radius:', options: ['$r = 4$', '$r = 8$', '$r = 16$', '$r = 2$'] },
            { label: 'Step 2 — square the radius:', options: ['$4^2 = 16$', '$4 \\times 2 = 8$', '$8^2 = 64$', '$4^2 = 8$'] },
            { label: 'Step 3 — the area:', options: ['$3.14 \\times 16 = 50.24$', '$3.14 \\times 8 = 25.12$', '$3.14 \\times 64 = 200.96$', '$3.14 \\times 4 = 12.56$'] },
          ],
          correctAnswers: ['$r = 4$', '$4^2 = 16$', '$3.14 \\times 16 = 50.24$'],
          hint1: 'Radius is half the diameter: $r = 8 \\div 2 = 4$.',
          hint2: 'Square the **radius** ($4$), not the diameter: $4^2 = 16$.',
          hint3: 'Finish with $A = \\pi r^2 = 3.14 \\times 16 = 50.24$ $cm^{2}$.',
          explanation: '$d = 8 \\Rightarrow r = 4 \\Rightarrow r^2 = 16 \\Rightarrow A = 3.14 \\times 16 = 50.24$ $cm^{2}$. Halving the diameter first is essential.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'circles-circumference-area-grade7',
    sections: [
      {
        id: 'circ4-intro',
        type: 'text' as const,
        content: `# ⭕ Circles: Circumference and Area

**Part 4 of 5 — Real-World Problems, Half Circles, and Working Backward**

---

> 🔑 **The skill that matters most:** reading a word problem and deciding — *do they want the distance **around** (circumference) or the space **inside** (area)?*`,
      },
      {
        id: 'circ4-which',
        type: 'text' as const,
        content: `## Circumference or Area? Read the Clues

| The problem asks about… | They want… | Formula |
|--------------------------|------------|---------|
| fencing, trim, a border, edging, distance traveled | **circumference** | $C = \\pi d$ |
| how far around, a rim, a belt | **circumference** | $C = 2\\pi r$ |
| carpet, paint, grass, a pizza's "size", surface covered | **area** | $A = \\pi r^2$ |
| how much space inside | **area** | $A = \\pi r^2$ |

> 💡 **Quick test:** If the answer is a **length** (around the edge), it's circumference. If it's a **surface** (filling the inside), it's area — and the units are squared.`,
      },
      {
        id: 'circ4-which-quiz',
        type: 'dropdown-select' as const,
        content: `**Around or Inside?** 🔽

Decide whether each situation needs **circumference** or **area**.`,
        exercise: {
          dropdowns: [
            { label: 'Putting a fence around a circular garden:', options: ['circumference', 'area'] },
            { label: 'Buying sod to cover a circular lawn:', options: ['area', 'circumference'] },
            { label: 'Trimming lace around a round tablecloth:', options: ['circumference', 'area'] },
            { label: 'Painting the surface of a round sign:', options: ['area', 'circumference'] },
          ],
          correctAnswers: ['circumference', 'area', 'circumference', 'area'],
          hint1: 'A fence and a lace trim both go *around* the edge — that distance is circumference.',
          hint2: 'Sod and paint *cover* the inside surface — that is area, in square units.',
          hint3: 'Around the edge → circumference (length). Filling the inside → area (square units).',
          explanation: 'Fence and lace go around the edge → circumference. Sod and paint cover the surface → area.',
        },
      },
      {
        id: 'circ4-worked',
        type: 'text' as const,
        content: `## Worked Example: A Circular Pond

A circular pond has a radius of $7$ m.

**(a) A path goes all the way around the edge. How long is it?**
That's the circumference. Using $\\pi \\approx \\dfrac{22}{7}$:
$$C = 2\\pi r \\approx 2 \\times \\frac{22}{7} \\times 7 = 44 \\text{ m}$$

**(b) How much water surface does the pond cover?**
That's the area. Using $\\pi \\approx \\dfrac{22}{7}$:
$$A = \\pi r^2 \\approx \\frac{22}{7} \\times 7^2 = \\frac{22}{7} \\times 49 = 22 \\times 7 = 154 \\text{ m}^2$$

> 🔑 **Same circle, two questions.** The path (around) is a length, $44$ m. The surface (inside) is an area, $154$ $m^{2}$. Notice the squared units flag it as area.`,
      },
      {
        id: 'circ4-semicircle',
        type: 'text' as const,
        content: `## Half Circles (Semicircles)

A **semicircle** is half a circle. Its area is just half the full circle's area:

$$A_{\\text{semicircle}} = \\frac{1}{2}\\pi r^2$$

### Worked Example: $r = 4$ cm

$$A = \\frac{1}{2} \\times 3.14 \\times 4^2 = \\frac{1}{2} \\times 3.14 \\times 16 = \\frac{1}{2} \\times 50.24 = 25.12 \\text{ cm}^2$$

> 💡 For the **perimeter** of a semicircle, take half the circumference *and add the straight diameter across the bottom*: $\\frac{1}{2}(2\\pi r) + d$. The flat edge is part of the boundary too!`,
      },
      {
        id: 'circ4-applied-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

Use $\\pi \\approx 3.14$. Read carefully — around or inside?

**1)** A round trampoline has radius $5$ ft. How much netting covers the jumping surface? $A = \\,?$ $ft^{2}$
**2)** A circular running track has diameter $80$ m. How far is one lap around it? $C = \\,?$ m
**3)** A semicircular rug has radius $2$ m. What is its area? $A = \\,?$ $m^{2}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['78.5', '251.2', '6.28'],
          hint1: 'Surface = area: $A = 3.14 \\times 5^2 = 3.14 \\times 25$.',
          hint2: 'One lap = circumference: $C = \\pi d = 3.14 \\times 80$.',
          hint3: 'Semicircle area is half: $A = \\frac{1}{2} \\times 3.14 \\times 2^2 = \\frac{1}{2} \\times 3.14 \\times 4$.',
          explanation: '1) $3.14 \\times 25 = 78.5$ $ft^{2}$ (area).  2) $3.14 \\times 80 = 251.2$ m (circumference, a length — plain units, not squared).  3) $\\frac{1}{2} \\times 3.14 \\times 4 = 6.28$ $m^{2}$ (half-circle area).',
        },
      },
      {
        id: 'circ4-backward',
        type: 'multiple-choice' as const,
        content: `**Working Backward** 🎯

Sometimes you know the circumference or area and must find the radius or diameter.`,
        exercise: {
          questions: [
            {
              question: 'A circle has circumference $C = 31.4$ cm. Using $\\pi \\approx 3.14$, what is its diameter?',
              options: ['$10$ cm', '$5$ cm', '$15.7$ cm', '$98.6$ cm'],
              correctAnswer: 0,
              explanation: 'Since $C = \\pi d$, reverse it: $d = C \\div \\pi = 31.4 \\div 3.14 = 10$ cm.',
            },
            {
              question: 'A circle has circumference $C = 18.84$ m. What is its radius? (Use $\\pi \\approx 3.14$.)',
              options: ['$3$ m', '$6$ m', '$9.42$ m', '$1.5$ m'],
              correctAnswer: 0,
              explanation: 'First $d = C \\div \\pi = 18.84 \\div 3.14 = 6$ m, then $r = d \\div 2 = 3$ m. (Or $r = C \\div (2\\pi)$.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'circles-circumference-area-grade7',
    sections: [
      {
        id: 'circ5-intro',
        type: 'text' as const,
        content: `# ⭕ Circles: Circumference and Area

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) name the parts of a circle, (2) find circumference with $C = \\pi d$ or $C = 2\\pi r$, (3) find area with $A = \\pi r^2$, and (4) decide which one a word problem needs. Let's put it all together.`,
      },
      {
        id: 'circ5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Formula | Units |
|------|---------|-------|
| Diameter from radius | $d = 2r$ | length |
| Radius from diameter | $r = \\dfrac{d}{2}$ | length |
| Circumference (diameter) | $C = \\pi d$ | length |
| Circumference (radius) | $C = 2\\pi r$ | length |
| Area | $A = \\pi r^2$ | **square** units |
| Semicircle area | $A = \\dfrac{1}{2}\\pi r^2$ | **square** units |

> ⚠️ **Three reminders:** (1) Area uses the **radius**, so halve the diameter first. (2) **Square the radius** before multiplying by π. (3) Around = length; inside = squared units. Use $\\pi \\approx 3.14$, or $\\dfrac{22}{7}$ when the radius is a multiple of $7$.`,
      },
      {
        id: 'circ5-mixed',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Use $\\pi \\approx 3.14$ (round to the nearest hundredth if needed).

**1)** $r = 8$ m: circumference $C = \\,?$ m
**2)** $r = 8$ m: area $A = \\,?$ $m^{2}$
**3)** $d = 4$ cm: area $A = \\,?$ $cm^{2}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50.24', '200.96', '12.56'],
          hint1: '$C = 2\\pi r = 2 \\times 3.14 \\times 8$.',
          hint2: '$A = \\pi r^2 = 3.14 \\times 8^2 = 3.14 \\times 64$.',
          hint3: 'First halve: $r = 4 \\div 2 = 2$. Then $A = 3.14 \\times 2^2 = 3.14 \\times 4$.',
          explanation: '1) $2 \\times 3.14 \\times 8 = 50.24$ m.  2) $3.14 \\times 64 = 200.96$ $m^{2}$.  3) $r = 2$, so $A = 3.14 \\times 4 = 12.56$ $cm^{2}$.',
        },
      },
      {
        id: 'circ5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A circular clock face has a radius of $15$ cm. About how much area does the face cover? (Use $\\pi \\approx 3.14$.)',
              options: ['$706.5$ $cm^{2}$', '$94.2$ $cm^{2}$', '$47.1$ $cm^{2}$', '$2826$ $cm^{2}$'],
              correctAnswer: 0,
              explanation: '$A = \\pi r^2 = 3.14 \\times 15^2 = 3.14 \\times 225 = 706.5$ $cm^{2}$.',
            },
            {
              question: 'Which describes the perimeter of a **semicircle** with radius $r$?',
              options: [
                'half the circumference, plus the diameter across the flat side',
                'half the circumference only',
                'the full circumference',
                'half the area',
              ],
              correctAnswer: 0,
              explanation: 'The boundary of a semicircle is the curved half ($\\frac{1}{2} \\times 2\\pi r$) **plus** the straight diameter $d$ along the bottom.',
            },
          ],
        },
      },
      {
        id: 'circ5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A circle has a diameter of $14$ cm. Using $\\pi \\approx \\dfrac{22}{7}$, its circumference is:',
              options: ['$44$ cm', '$22$ cm', '$154$ cm', '$88$ cm'],
              correctAnswer: 0,
              explanation: '$C = \\pi d = \\frac{22}{7} \\times 14 = 22 \\times 2 = 44$ cm. Circumference is a length, so no squared units.',
            },
            {
              question: 'What is the area of a circle with radius $6$ m? (Use $\\pi \\approx 3.14$.)',
              options: ['$113.04$ $m^{2}$', '$37.68$ $m^{2}$', '$18.84$ $m^{2}$', '$113.04$ m'],
              correctAnswer: 0,
              explanation: '$A = \\pi r^2 = 3.14 \\times 6^2 = 3.14 \\times 36 = 113.04$ $m^{2}$. Square the radius first, and use square units.',
            },
            {
              question: 'A gardener needs edging to go around a circular flower bed with radius $5$ ft. Which calculation is correct? (Use $\\pi \\approx 3.14$.)',
              options: [
                '$C = 2 \\times 3.14 \\times 5 = 31.4$ ft',
                '$A = 3.14 \\times 5^2 = 78.5$ $ft^{2}$',
                '$C = 3.14 \\times 5 = 15.7$ ft',
                '$A = 3.14 \\times 5 = 15.7$ $ft^{2}$',
              ],
              correctAnswer: 0,
              explanation: 'Edging goes *around* the edge, so it is circumference. With the radius given, $C = 2\\pi r = 2 \\times 3.14 \\times 5 = 31.4$ ft.',
            },
          ],
        },
      },
    ],
  },
]
