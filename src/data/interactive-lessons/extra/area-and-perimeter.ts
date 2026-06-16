import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Area and Perimeter (Grade 4 Math).
 * Registry key / DB Topic.slug: 'area-and-perimeter'.
 * 5 parts, gold-standard structure: what perimeter & area mean (counting on a grid) →
 * the perimeter formula for rectangles → the area formula for rectangles →
 * working backwards / missing-side & word problems → mixed practice + exit quiz.
 * Math is grade-appropriate (whole numbers, addition & multiplication only).
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every computed value, drill answer, and correctAnswer index was re-checked before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'area-and-perimeter',
    sections: [
      {
        id: 'ap1-intro',
        type: 'text' as const,
        content: `# 📏 Area and Perimeter

**Part 1 of 5 — What Do They Even Mean?**

---

### Topics in This Part

| Section |
|---------|
| Perimeter = the distance around |
| Area = the space inside |
| Units: regular vs. square |

> 🔑 **Key Idea:** **Perimeter** is the distance *around the edge* of a shape. **Area** is the amount of flat space *inside* it. They answer two different questions, so we measure them in two different ways.`,
      },
      {
        id: 'ap1-perimeter',
        type: 'text' as const,
        content: `## Perimeter — The Distance Around

Imagine walking all the way around the edge of a garden and counting your steps. That total is the **perimeter**.

To find a perimeter, you **add up the lengths of all the sides**.

### Example: a rectangle that is 5 cm long and 3 cm wide

A rectangle has **4 sides** — two long sides and two short sides:

$$5 + 3 + 5 + 3 = 16 \\text{ cm}$$

So the perimeter is **16 cm**.

> 💡 Perimeter is a **length**, so it uses normal length units: cm, m, inches, feet — never "square" units.`,
      },
      {
        id: 'ap1-area',
        type: 'text' as const,
        content: `## Area — The Space Inside

**Area** measures how much flat space is *covered* by a shape — like how much carpet you'd need to cover a floor.

We measure area by counting **unit squares**: little squares that are 1 unit on each side.

### Example: a rectangle on a grid

If a rectangle is **5 squares** across and **3 squares** down, we can count the squares row by row:

$$3 \\text{ rows} \\times 5 \\text{ squares each} = 15 \\text{ squares}$$

So the area is **15 square centimeters**, written $15 \\text{ cm}^2$.

> 🔑 **Big difference:** Perimeter counts the **edge** (a line). Area counts the **inside** (the squares). The same rectangle above has a perimeter of $16 \\text{ cm}$ but an area of $15 \\text{ cm}^2$.`,
      },
      {
        id: 'ap1-which',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You want to put a fence all the way around a yard. Are you measuring perimeter or area?',
              options: ['Perimeter — the distance around the edge', 'Area — the space inside', 'Both at the same time', 'Neither one'],
              correctAnswer: 0,
              explanation: 'A fence goes around the outside edge, so you need the perimeter — the total distance around.',
            },
            {
              question: 'You want to cover a floor with tiles. Are you measuring perimeter or area?',
              options: ['Area — the space inside that the tiles cover', 'Perimeter — the distance around the edge', 'The longest side only', 'Neither one'],
              correctAnswer: 0,
              explanation: 'Tiles cover the flat space inside the floor, so you need the area.',
            },
          ],
        },
      },
      {
        id: 'ap1-units',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Unit** 🔽

Perimeter is a length, so it uses units like $\\text{cm}$. Area is a count of squares, so it uses **square** units like $\\text{cm}^2$.`,
        exercise: {
          dropdowns: [
            { label: 'A perimeter could be measured in:', options: ['$\\text{cm}$', '$\\text{cm}^2$', 'square tiles', 'corners'] },
            { label: 'An area could be measured in:', options: ['$\\text{cm}^2$', '$\\text{cm}$', 'inches', 'meters'] },
          ],
          correctAnswers: ['$\\text{cm}$', '$\\text{cm}^2$'],
          hint1: 'Perimeter is a distance (a length), so it uses plain length units.',
          hint2: 'Area counts squares, so its unit has a little "$^2$" — like $\\text{cm}^2$ ("square centimeters").',
          hint3: 'Plain $\\text{cm}$ = length = perimeter. $\\text{cm}^2$ = squares = area.',
          explanation: 'Perimeter uses length units ($\\text{cm}$). Area uses square units ($\\text{cm}^2$) because it counts unit squares.',
        },
      },
      {
        id: 'ap1-two-numbers',
        type: 'text' as const,
        content: `## One Shape, Two Different Numbers

Here's the idea that trips students up the most: **the same rectangle has both a perimeter and an area**, and they are almost always *different numbers*.

Think about the $5$-by-$3$ rectangle from before:
- Walk **around the edge** → perimeter $= 16$ (a length)
- Count the **squares inside** → area $= 15$ (a count of squares)

So whenever you read a problem, the very first question to ask yourself is: **"Do I want the edge, or the inside?"** Let's practice spotting both on the same shape.`,
      },
      {
        id: 'ap1-count',
        type: 'input-boxes' as const,
        content: `**Count on the Grid** 🧮

A rectangle is drawn on grid paper. It is **6 squares** across and **2 squares** down.

**1)** How many unit squares fit inside? (Add the rows: $6 + 6 = ?$)
**2)** How far is it all the way around the edge? ($6 + 2 + 6 + 2 = ?$)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '16'],
          hint1: 'Inside: there are 2 rows of 6 squares. Count them all: $6 + 6 = 12$.',
          hint2: 'Around the edge: walk all four sides — $6 + 2 + 6 + 2$.',
          hint3: 'Area (inside) $= 12$ squares. Perimeter (around) $= 6+2+6+2 = 16$.',
          explanation: '1) Area $= 6 + 6 = 12$ unit squares. 2) Perimeter $= 6 + 2 + 6 + 2 = 16$ units. Same rectangle, two different measurements!',
        },
      },
      {
        id: 'ap1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You now know the two big ideas:

| Word | Means | Find it by | Units |
|------|-------|-----------|-------|
| **Perimeter** | distance around the edge | adding all the sides | $\\text{cm}, \\text{m}, \\text{in}$ |
| **Area** | space inside | counting unit squares | $\\text{cm}^2, \\text{m}^2, \\text{in}^2$ |

Counting squares one by one works, but it's slow. In **Part 2** we'll learn a fast formula for perimeter, and in **Part 3** a fast formula for area.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'area-and-perimeter',
    sections: [
      {
        id: 'ap2-intro',
        type: 'text' as const,
        content: `# 📏 Area and Perimeter

**Part 2 of 5 — The Perimeter of a Rectangle**

---

> 🔑 **The Idea:** Every rectangle has two pairs of equal sides. Instead of adding four numbers, we can use a shortcut formula to find the perimeter quickly.`,
      },
      {
        id: 'ap2-formula',
        type: 'text' as const,
        content: `## Two Ways to Find a Rectangle's Perimeter

A rectangle has a **length** ($l$) and a **width** ($w$). The two long sides are both $l$, and the two short sides are both $w$.

**Way 1 — Add all four sides:**

$$P = l + w + l + w$$

**Way 2 — The shortcut formula:**

$$P = 2 \\times l + 2 \\times w$$

Both give the same answer! The shortcut just notices there are **two** lengths and **two** widths.

### Worked Example: $l = 8$ m, $w = 5$ m

$$P = 2 \\times 8 + 2 \\times 5 = 16 + 10 = 26 \\text{ m}$$

> ✅ **Check by adding all sides:** $8 + 5 + 8 + 5 = 26$ m ✓ Same answer.`,
      },
      {
        id: 'ap2-worked2',
        type: 'text' as const,
        content: `### Worked Example: a square with side $7$ cm

A **square** is a special rectangle where all 4 sides are equal. So we can just add the side four times, or multiply by 4:

$$P = 7 + 7 + 7 + 7 = 4 \\times 7 = 28 \\text{ cm}$$

### Worked Example: $l = 10$ ft, $w = 3$ ft

$$P = 2 \\times 10 + 2 \\times 3 = 20 + 6 = 26 \\text{ ft}$$

> 💡 **Square shortcut:** For a square, $P = 4 \\times \\text{side}$. For any rectangle, $P = 2 \\times l + 2 \\times w$.`,
      },
      {
        id: 'ap2-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangle is $9$ cm long and $4$ cm wide. What is its perimeter?',
              options: ['$26$ cm', '$36$ cm', '$13$ cm', '$22$ cm'],
              correctAnswer: 0,
              explanation: '$P = 2\\times 9 + 2\\times 4 = 18 + 8 = 26$ cm. (Note: $36$ would be the *area*, $9\\times4$ — a common mix-up!)',
            },
            {
              question: 'A square has a side length of $6$ inches. What is its perimeter?',
              options: ['$24$ in', '$12$ in', '$36$ in', '$6$ in'],
              correctAnswer: 0,
              explanation: 'All four sides are $6$, so $P = 4 \\times 6 = 24$ in.',
            },
          ],
        },
      },
      {
        id: 'ap2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Build the Perimeter** 🔽

A rectangle is $12$ m long and $5$ m wide. Fill in each step.`,
        exercise: {
          dropdowns: [
            { label: 'Two lengths added together:', options: ['$24$', '$17$', '$12$', '$60$'] },
            { label: 'Two widths added together:', options: ['$10$', '$5$', '$25$', '$7$'] },
            { label: 'The total perimeter:', options: ['$34$ m', '$17$ m', '$60$ m', '$29$ m'] },
          ],
          correctAnswers: ['$24$', '$10$', '$34$ m'],
          hint1: 'Two lengths: $12 + 12 = 24$ (or $2 \\times 12$).',
          hint2: 'Two widths: $5 + 5 = 10$ (or $2 \\times 5$).',
          hint3: 'Add the two parts together: $24 + 10 = 34$ m.',
          explanation: '$P = 2\\times12 + 2\\times5 = 24 + 10 = 34$ m. Add the two lengths and two widths, then combine.',
        },
      },
      {
        id: 'ap2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Perimeter** 🧮

Enter just the number (the unit is shown for you).

**1)** Rectangle: $l = 7$ cm, $w = 6$ cm. $\\;P = ?$ cm
**2)** Rectangle: $l = 15$ m, $w = 10$ m. $\\;P = ?$ m
**3)** Square: side $= 9$ ft. $\\;P = ?$ ft`,
        exercise: {
          boxes: 3,
          correctAnswers: ['26', '50', '36'],
          hint1: '$P = 2\\times 7 + 2\\times 6 = 14 + 12 = 26$.',
          hint2: '$P = 2\\times 15 + 2\\times 10 = 30 + 20 = 50$.',
          hint3: 'A square: $P = 4 \\times 9 = 36$.',
          explanation: '1) $14+12 = 26$ cm. 2) $30+20 = 50$ m. 3) $4\\times9 = 36$ ft.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'area-and-perimeter',
    sections: [
      {
        id: 'ap3-intro',
        type: 'text' as const,
        content: `# 📏 Area and Perimeter

**Part 3 of 5 — The Area of a Rectangle**

---

> 🔑 **The Idea:** Counting squares one by one is slow. But the squares are arranged in neat rows and columns — and that's exactly what **multiplication** is for!`,
      },
      {
        id: 'ap3-formula',
        type: 'text' as const,
        content: `## The Area Formula

Look at a rectangle that is $5$ squares across and $3$ squares down. There are $3$ rows, and each row has $5$ squares. Instead of counting all $15$, we **multiply**:

$$A = l \\times w$$

That is, **area = length × width**.

### Worked Example: $l = 5$ cm, $w = 3$ cm

$$A = 5 \\times 3 = 15 \\text{ cm}^2$$

So the rectangle covers **15 square centimeters**.

> 🔑 **Why "square" units?** Each little square is $1 \\text{ cm}$ on each side, so it is $1$ *square* centimeter ($1 \\text{ cm}^2$). The area tells you how many of those squares fit inside.`,
      },
      {
        id: 'ap3-worked2',
        type: 'text' as const,
        content: `### Worked Example: $l = 8$ m, $w = 4$ m

$$A = 8 \\times 4 = 32 \\text{ m}^2$$

### Worked Example: a square with side $6$ in

For a square, length and width are equal, so:

$$A = 6 \\times 6 = 36 \\text{ in}^2$$

> ⚠️ **Watch out!** Don't mix up the formulas:
> - **Perimeter** uses **adding**: $P = 2\\times l + 2\\times w$
> - **Area** uses **multiplying**: $A = l \\times w$
>
> For an $8 \\times 4$ rectangle, $P = 24$ but $A = 32$ — very different numbers!`,
      },
      {
        id: 'ap3-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangle is $7$ cm long and $5$ cm wide. What is its area?',
              options: ['$35 \\text{ cm}^2$', '$24 \\text{ cm}^2$', '$12 \\text{ cm}^2$', '$35 \\text{ cm}$'],
              correctAnswer: 0,
              explanation: '$A = l \\times w = 7 \\times 5 = 35$. Area uses **square** units, so it is $35 \\text{ cm}^2$. ($24$ would be the perimeter.)',
            },
            {
              question: 'Which operation do you use to find the AREA of a rectangle?',
              options: ['Multiply the length by the width', 'Add all four sides', 'Multiply the side by 4', 'Subtract width from length'],
              correctAnswer: 0,
              explanation: 'Area $= l \\times w$ (multiply). Adding all four sides gives the perimeter instead.',
            },
          ],
        },
      },
      {
        id: 'ap3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Area or Perimeter?** 🔽

For each rectangle, pick the correct value. Remember: area multiplies, perimeter adds.`,
        exercise: {
          dropdowns: [
            { label: 'Area of a $6 \\times 4$ rectangle:', options: ['$24$', '$20$', '$10$', '$48$'] },
            { label: 'Perimeter of that same $6 \\times 4$ rectangle:', options: ['$20$', '$24$', '$10$', '$48$'] },
            { label: 'Area of a square with side $5$:', options: ['$25$', '$20$', '$10$', '$15$'] },
          ],
          correctAnswers: ['$24$', '$20$', '$25$'],
          hint1: 'Area = multiply: $6 \\times 4 = 24$.',
          hint2: 'Perimeter = add the sides: $6+4+6+4 = 20$.',
          hint3: 'Square area: $5 \\times 5 = 25$.',
          explanation: 'Area of $6\\times4 = 24$ (multiply). Perimeter of $6\\times4 = 20$ (add). Square area $= 5\\times5 = 25$.',
        },
      },
      {
        id: 'ap3-drill',
        type: 'input-boxes' as const,
        content: `**Find the Area** 🧮

Enter just the number.

**1)** Rectangle: $l = 9$ cm, $w = 6$ cm. $\\;A = ?$
**2)** Rectangle: $l = 12$ m, $w = 5$ m. $\\;A = ?$
**3)** Square: side $= 8$ in. $\\;A = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['54', '60', '64'],
          hint1: '$A = 9 \\times 6 = 54$.',
          hint2: '$A = 12 \\times 5 = 60$.',
          hint3: 'A square: $A = 8 \\times 8 = 64$.',
          explanation: '1) $9\\times6 = 54 \\text{ cm}^2$. 2) $12\\times5 = 60 \\text{ m}^2$. 3) $8\\times8 = 64 \\text{ in}^2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'area-and-perimeter',
    sections: [
      {
        id: 'ap4-intro',
        type: 'text' as const,
        content: `# 📏 Area and Perimeter

**Part 4 of 5 — Missing Sides & Real-World Problems**

---

> 🔑 **Big Skill:** Sometimes you know the area or perimeter but are *missing a side*. You can work backwards using division. And often the math is hidden inside a story — a garden, a room, a poster.`,
      },
      {
        id: 'ap4-missing',
        type: 'text' as const,
        content: `## Working Backwards to Find a Missing Side

Since **area = length × width**, you can find a missing side by **dividing**.

### Example: A rectangle has area $24 \\text{ cm}^2$ and length $6$ cm. What is the width?

$$\\text{width} = \\text{area} \\div \\text{length} = 24 \\div 6 = 4 \\text{ cm}$$

> ✅ **Check:** $6 \\times 4 = 24 \\text{ cm}^2$ ✓

### Example: A rectangle has perimeter $20$ m and length $7$ m. What is the width?

First, two lengths use up $2 \\times 7 = 14$ m. That leaves $20 - 14 = 6$ m for the **two** widths, so each width is $6 \\div 2 = 3$ m.

$$\\text{width} = (20 - 2\\times 7) \\div 2 = (20 - 14) \\div 2 = 3 \\text{ m}$$

> ✅ **Check:** $7 + 3 + 7 + 3 = 20$ m ✓`,
      },
      {
        id: 'ap4-missing-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Side** 🧮

Enter just the number.

**1)** Area $= 30 \\text{ cm}^2$, length $= 5$ cm. Width $= ?$ cm
**2)** Area $= 56 \\text{ m}^2$, width $= 7$ m. Length $= ?$ m`,
        exercise: {
          boxes: 2,
          correctAnswers: ['6', '8'],
          hint1: 'Divide: width $= 30 \\div 5$.',
          hint2: 'Divide: length $= 56 \\div 7$.',
          hint3: '$30 \\div 5 = 6$, and $56 \\div 7 = 8$. Always check by multiplying back!',
          explanation: '1) $30 \\div 5 = 6$ cm (check: $5\\times6=30$). 2) $56 \\div 7 = 8$ m (check: $7\\times8=56$).',
        },
      },
      {
        id: 'ap4-word',
        type: 'text' as const,
        content: `## Reading a Word Problem

Real problems hide the numbers in a story. The trick is to ask: **am I covering the inside (area) or going around the edge (perimeter)?**

### Example: Maria's Garden

> *Maria is planting a rectangular garden that is $10$ ft long and $4$ ft wide. She wants to put a small fence around it AND cover the ground with mulch. How much fence and how much mulch does she need?*

- **Fence** goes *around the edge* → **perimeter**:
$$P = 2\\times 10 + 2\\times 4 = 20 + 8 = 28 \\text{ ft of fence}$$
- **Mulch** covers the *inside* → **area**:
$$A = 10 \\times 4 = 40 \\text{ ft}^2 \\text{ of mulch}$$

> 💡 **Strategy:** Underline the action. "Around / border / fence / frame" → **perimeter**. "Cover / fill / paint / tile / carpet" → **area**.`,
      },
      {
        id: 'ap4-word-quiz',
        type: 'multiple-choice' as const,
        content: `**Word-Problem Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rug is $8$ ft long and $5$ ft wide. How much floor does the rug COVER?',
              options: ['$40 \\text{ ft}^2$ (area)', '$26 \\text{ ft}$ (perimeter)', '$13 \\text{ ft}$', '$40 \\text{ ft}$'],
              correctAnswer: 0,
              explanation: '"Cover" means area: $A = 8 \\times 5 = 40 \\text{ ft}^2$.',
            },
            {
              question: 'Sam glues a ribbon BORDER around the edge of a $9$ in by $6$ in picture. How long must the ribbon be?',
              options: ['$30$ in (perimeter)', '$54 \\text{ in}^2$ (area)', '$15$ in', '$54$ in'],
              correctAnswer: 0,
              explanation: '"Border around the edge" means perimeter: $P = 2\\times9 + 2\\times6 = 18 + 12 = 30$ in.',
            },
          ],
        },
      },
      {
        id: 'ap4-word-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Clue Word** 🔽

For each job, decide whether you need area or perimeter.`,
        exercise: {
          dropdowns: [
            { label: 'Painting a wall:', options: ['Area', 'Perimeter'] },
            { label: 'Putting trim around a window:', options: ['Perimeter', 'Area'] },
            { label: 'Carpeting a bedroom floor:', options: ['Area', 'Perimeter'] },
            { label: 'Building a fence around a yard:', options: ['Perimeter', 'Area'] },
          ],
          correctAnswers: ['Area', 'Perimeter', 'Area', 'Perimeter'],
          hint1: 'Painting and carpeting COVER a flat surface → area.',
          hint2: 'Trim and fences go AROUND the edge → perimeter.',
          hint3: 'Cover/fill/paint/carpet = area. Around/border/trim/fence = perimeter.',
          explanation: 'Painting (cover) → area. Trim (around) → perimeter. Carpeting (cover) → area. Fence (around) → perimeter.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'area-and-perimeter',
    sections: [
      {
        id: 'ap5-intro',
        type: 'text' as const,
        content: `# 📏 Area and Perimeter

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell perimeter from area, (2) find a rectangle's perimeter, (3) find its area, and (4) solve word problems and missing-side puzzles. Let's put it all together.`,
      },
      {
        id: 'ap5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move | Units |
|------|----------|-------|
| Perimeter of a rectangle | $P = 2\\times l + 2\\times w$ (add the sides) | $\\text{cm}, \\text{m}, \\text{ft}$ |
| Perimeter of a square | $P = 4 \\times \\text{side}$ | $\\text{cm}, \\text{m}, \\text{ft}$ |
| Area of a rectangle | $A = l \\times w$ (multiply) | $\\text{cm}^2, \\text{m}^2, \\text{ft}^2$ |
| Missing side (from area) | side $= \\text{area} \\div \\text{known side}$ | — |

> ⚠️ The #1 mistake is swapping the two: **perimeter ADDS** (and uses plain units), **area MULTIPLIES** (and uses square units). When in doubt, ask: *around the edge, or inside?*`,
      },
      {
        id: 'ap5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

A rectangle is $11$ cm long and $4$ cm wide.

**1)** Find its perimeter (in cm).
**2)** Find its area (the number of $\\text{cm}^2$).
**3)** A square has a perimeter of $20$ cm. What is the length of one side (in cm)?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '44', '5'],
          hint1: 'Perimeter: $2\\times11 + 2\\times4 = 22 + 8$.',
          hint2: 'Area: $11 \\times 4$.',
          hint3: 'A square has 4 equal sides, so one side $= 20 \\div 4$.',
          explanation: '1) $P = 22 + 8 = 30$ cm. 2) $A = 11\\times4 = 44 \\text{ cm}^2$. 3) Each side $= 20 \\div 4 = 5$ cm.',
        },
      },
      {
        id: 'ap5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A rectangle has an area of $48 \\text{ m}^2$ and a length of $8$ m. What is its width?',
              options: ['$6$ m', '$40$ m', '$56$ m', '$24$ m'],
              correctAnswer: 0,
              explanation: 'Work backwards: width $= 48 \\div 8 = 6$ m. Check: $8 \\times 6 = 48 \\text{ m}^2$ ✓',
            },
            {
              question: 'Two rectangles both have a perimeter of $16$ cm. Rectangle A is $5 \\times 3$; Rectangle B is $6 \\times 2$. Which has the bigger AREA?',
              options: ['A ($15 \\text{ cm}^2$)', 'B ($12 \\text{ cm}^2$)', 'They tie', 'Cannot tell'],
              correctAnswer: 0,
              explanation: 'A: $5\\times3 = 15 \\text{ cm}^2$. B: $6\\times2 = 12 \\text{ cm}^2$. Same perimeter ($16$), but A has the bigger area!',
            },
          ],
        },
      },
      {
        id: 'ap5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the perimeter of a rectangle that is $10$ cm long and $7$ cm wide?',
              options: ['$34$ cm', '$70$ cm', '$17$ cm', '$24$ cm'],
              correctAnswer: 0,
              explanation: '$P = 2\\times10 + 2\\times7 = 20 + 14 = 34$ cm. (The $70$ is the area, $10\\times7$.)',
            },
            {
              question: 'What is the area of a square with a side length of $9$ in?',
              options: ['$81 \\text{ in}^2$', '$36 \\text{ in}$', '$18 \\text{ in}^2$', '$45 \\text{ in}^2$'],
              correctAnswer: 0,
              explanation: 'Area of a square $= \\text{side} \\times \\text{side} = 9 \\times 9 = 81 \\text{ in}^2$. (The $36$ is the perimeter, $4\\times9$.)',
            },
            {
              question: 'A garden has an area of $35 \\text{ ft}^2$ and a width of $5$ ft. What is its length?',
              options: ['$7$ ft', '$30$ ft', '$175$ ft', '$40$ ft'],
              correctAnswer: 0,
              explanation: 'Work backwards: length $= 35 \\div 5 = 7$ ft. Check: $7 \\times 5 = 35 \\text{ ft}^2$ ✓',
            },
          ],
        },
      },
    ],
  },
]
