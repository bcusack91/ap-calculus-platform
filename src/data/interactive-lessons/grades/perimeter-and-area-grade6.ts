import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // =====================================================================
  // PART 1 — Concept Introduction
  // =====================================================================
  {
    topicSlug: 'perimeter-and-area-grade6',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## Perimeter and Area: What's the Difference? 📐

Imagine you have a rectangular garden. Two very different questions could come up:

- **How much fence** do I need to go all the way around it? → that's **perimeter**.
- **How much grass** do I need to cover the ground inside? → that's **area**.

These are the two big ideas in this lesson:

| Idea | What it measures | Picture it as… |
| --- | --- | --- |
| **Perimeter** | the distance **around** a shape | walking along the edge |
| **Area** | the space **inside** a shape | filling it with tiles |

The key thing to remember: **perimeter is the outline, area is the inside.** Mixing them up is the most common mistake, so keep that picture in your head!`
      },
      {
        id: 'p1-perimeter',
        type: 'text',
        content: `## Perimeter: The Distance Around 🚶

**Perimeter** is the total distance around the outside of a shape. To find it, you simply **add up all the side lengths**.

**Rectangle** — a rectangle has two long sides (the **length**, $l$) and two short sides (the **width**, $w$). So:

$$P = 2l + 2w$$

which is the same as

$$P = 2(l + w)$$

**Example:** A rectangle is $l = 8$ cm long and $w = 3$ cm wide.
- $P = 2(8 + 3) = 2(11) = 22$ cm ✓

**Square** — a square has $4$ equal sides, each of length $s$:

$$P = 4s$$

**Example:** A square has sides of $5$ in.
- $P = 4 \\times 5 = 20$ in ✓

Because perimeter is a **length**, we measure it in **linear units** like cm, m, in, or ft.`
      },
      {
        id: 'p1-area',
        type: 'text',
        content: `## Area: The Space Inside 🟦

**Area** is the amount of space **inside** a shape. We measure it in **square units** (like cm² or ft²) because we are counting how many little squares fit inside.

**Rectangle** — multiply length by width:

$$A = l \\times w$$

**Example:** A rectangle that is $8$ cm long and $3$ cm wide has
- $A = 8 \\times 3 = 24$ cm² ✓ (that's $24$ little $1$-cm squares inside!)

**Square** — since all sides are equal, multiply a side by itself:

$$A = s \\times s = s^2$$

**Example:** A square with side $5$ in has
- $A = 5^2 = 25$ in² ✓

**Triangle** — a triangle takes up exactly **half** of a rectangle with the same base and height:

$$A = \\frac{1}{2}bh$$

where $b$ is the **base** and $h$ is the **height**.

> **Watch the units!** Perimeter uses plain units (cm). Area uses **square** units (cm²).`
      },
      {
        id: 'p1-check',
        type: 'multiple-choice',
        content: `## Concept Check ✅

Let's make sure the difference between perimeter and area is clear before we go further.`,
        exercise: {
          questions: [
            {
              question: 'Mr. Lopez wants to put a **fence around** his rectangular yard. Which should he calculate to know how much fence to buy?',
              options: [
                'The perimeter, because fencing goes around the outside edge',
                'The area, because fencing covers the inside',
                'The perimeter, measured in square units',
                'The area, measured in linear units'
              ],
              correctAnswer: 0,
              explanation: 'A fence goes all the way **around** the yard, so he needs the perimeter (distance around). Perimeter is measured in linear units like feet, not square units.'
            }
          ]
        }
      }
    ]
  },

  // =====================================================================
  // PART 2 — Worked Examples
  // =====================================================================
  {
    topicSlug: 'perimeter-and-area-grade6',
    sections: [
      {
        id: 'p2-worked-rect',
        type: 'text',
        content: `## Worked Examples: Step by Step ✏️

Let's work through perimeter and area **one step at a time**. Each example follows the same plan:

1. **Write** the correct formula.
2. **Plug in** the numbers from the shape.
3. **Compute** and label with the right unit (linear for perimeter, square for area).

---

**Example 1 — Rectangle perimeter**

A rectangle is $l = 9$ m long and $w = 4$ m wide. Find the perimeter.

- Formula: $P = 2(l + w)$
- Plug in: $P = 2(9 + 4)$
- Compute: $P = 2(13) = 26$ m ✓

---

**Example 2 — Rectangle area**

Same rectangle ($l = 9$ m, $w = 4$ m). Find the area.

- Formula: $A = l \\times w$
- Plug in: $A = 9 \\times 4$
- Compute: $A = 36$ m² ✓

Notice how the **same shape** gives a perimeter of $26$ m but an area of $36$ m² — different ideas, different units!`
      },
      {
        id: 'p2-worked-tri',
        type: 'text',
        content: `## Worked Examples: Squares and Triangles 🔺

**Example 3 — Square**

A square has a side length of $7$ ft. Find both the perimeter and the area.

- Perimeter: $P = 4s = 4 \\times 7 = 28$ ft ✓
- Area: $A = s^2 = 7 \\times 7 = 49$ ft² ✓

---

**Example 4 — Triangle area**

A triangle has a base of $b = 10$ cm and a height of $h = 6$ cm. Find the area.

- Formula: $A = \\frac{1}{2}bh$
- Plug in: $A = \\frac{1}{2} \\times 10 \\times 6$
- Compute the easy way: first $10 \\times 6 = 60$, then half of that is $\\frac{1}{2} \\times 60 = 30$
- So $A = 30$ cm² ✓

> **Tip for triangles:** multiply the base and height first, *then* take half. It keeps the numbers simple!

Now you try a few in the boxes below.`
      },
      {
        id: 'p2-input',
        type: 'input-boxes',
        content: `## Your Turn — Fill in the Boxes ✍️

A rectangle is $\\textbf{12}$ cm long and $\\textbf{5}$ cm wide. Use $P = 2(l + w)$ and $A = l \\times w$.

**Box 1:** The **perimeter** in cm
**Box 2:** The **area** in cm²
**Box 3:** A triangle has base $8$ cm and height $5$ cm. Its **area** in cm² (use $A = \\frac{1}{2}bh$)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['34', '60', '20'],
          hint1: 'Box 1: add length and width, then double it. Box 2: multiply length times width. Box 3: multiply base times height, then take half.',
          hint2: 'Box 1: $2(12 + 5)$. Box 2: $12 \\times 5$. Box 3: $\\frac{1}{2} \\times 8 \\times 5$.',
          explanation: 'Box 1: $2(12 + 5) = 2(17) = 34$ cm. Box 2: $12 \\times 5 = 60$ cm². Box 3: $\\frac{1}{2} \\times 8 \\times 5 = \\frac{1}{2} \\times 40 = 20$ cm². ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 3 — Guided Practice
  // =====================================================================
  {
    topicSlug: 'perimeter-and-area-grade6',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Answer 🎯

Remember: **perimeter** adds the sides (linear units), **area** multiplies (square units).`,
        exercise: {
          questions: [
            {
              question: 'A square has a side length of $6$ m. What is its **area**?',
              options: [
                '$24$ m²',
                '$36$ m²',
                '$12$ m²',
                '$30$ m²'
              ],
              correctAnswer: 1,
              explanation: 'Area of a square is $A = s^2 = 6 \\times 6 = 36$ m². ($24$ m would be the perimeter, $4 \\times 6$.)'
            },
            {
              question: 'A rectangle has length $11$ in and width $2$ in. What is its **perimeter**?',
              options: [
                '$22$ in',
                '$13$ in',
                '$26$ in',
                '$24$ in'
              ],
              correctAnswer: 2,
              explanation: 'Perimeter is $P = 2(l + w) = 2(11 + 2) = 2(13) = 26$ in. ($22$ in² would be the area.)'
            }
          ]
        }
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Match the Formula 🔽

For each measurement, choose the correct **formula** and the correct **unit type**.`,
        exercise: {
          dropdowns: [
            {
              label: 'To find the area of a rectangle, the formula is…',
              options: ['$A = l \\times w$', '$P = 2(l + w)$', '$P = 4s$', '$A = \\frac{1}{2}bh$']
            },
            {
              label: 'The answer for an **area** should be measured in…',
              options: ['square units (like cm²)', 'linear units (like cm)']
            }
          ],
          correctAnswers: ['$A = l \\times w$', 'square units (like cm²)'],
          hint1: 'Area means the space inside, found by multiplying length times width. Because we count squares inside, area uses square units.',
          explanation: 'The area of a rectangle is $A = l \\times w$, and area is always measured in **square units** like cm² because you are counting the squares that fit inside. ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 4 — Application & Word Problems
  // =====================================================================
  {
    topicSlug: 'perimeter-and-area-grade6',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Perimeter and Area in Real Life 🏡

Perimeter and area show up constantly in the real world. The trick is reading the problem and asking: *am I going AROUND the shape (perimeter) or COVERING the inside (area)?*

| Real-life job | What you need |
| --- | --- |
| Fencing a yard | **Perimeter** (around) |
| Putting trim around a picture | **Perimeter** (around) |
| Laying carpet or tiles | **Area** (inside) |
| Painting a wall | **Area** (inside) |
| Buying grass seed for a lawn | **Area** (inside) |

**Story example:** Jada is tiling a rectangular kitchen floor that is $7$ ft long and $5$ ft wide. Tiles cover the *inside*, so she needs the **area**:
- $A = l \\times w = 7 \\times 5 = 35$ ft² of tile. 🧱

Now use this idea on the problems below!`
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Garden Project 🌻

The Patel family is building a rectangular vegetable garden that is $\\textbf{10}$ ft long and $\\textbf{6}$ ft wide.

**Box 1:** They want a **fence around** the garden. How many feet of fencing? (perimeter)
**Box 2:** They want **soil to cover** the ground inside. How many square feet? (area)
**Box 3:** A triangular flower bed has base $4$ ft and height $3$ ft. Its **area** in ft²?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['32', '60', '6'],
          hint1: 'Fencing goes around → perimeter $= 2(l + w)$. Soil covers the inside → area $= l \\times w$. Triangle area $= \\frac{1}{2}bh$.',
          hint2: 'Box 1: $2(10 + 6)$. Box 2: $10 \\times 6$. Box 3: $\\frac{1}{2} \\times 4 \\times 3$.',
          explanation: 'Box 1 (perimeter): $2(10 + 6) = 2(16) = 32$ ft. Box 2 (area): $10 \\times 6 = 60$ ft². Box 3 (triangle): $\\frac{1}{2} \\times 4 \\times 3 = 6$ ft². ✓'
        }
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Word Problem Challenge 🖼️`,
        exercise: {
          questions: [
            {
              question: 'Devon is painting one **square wall** of a shed. The wall is $9$ ft on each side. How many **square feet** of wall does he need to paint?',
              options: [
                '$36$ ft²',
                '$18$ ft²',
                '$81$ ft²',
                '$72$ ft²'
              ],
              correctAnswer: 2,
              explanation: 'Painting covers the inside of the wall, so use area: $A = s^2 = 9 \\times 9 = 81$ ft². ($36$ ft would be the perimeter, $4 \\times 9$.)'
            }
          ]
        }
      }
    ]
  },

  // =====================================================================
  // PART 5 — Review & Challenge
  // =====================================================================
  {
    topicSlug: 'perimeter-and-area-grade6',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: Everything in One Place 🌟

You can now find the **perimeter** and **area** of rectangles, squares, and triangles! Here is your formula summary:

| Shape | Perimeter | Area |
| --- | --- | --- |
| **Rectangle** | $P = 2(l + w)$ | $A = l \\times w$ |
| **Square** | $P = 4s$ | $A = s^2$ |
| **Triangle** | add all 3 sides | $A = \\frac{1}{2}bh$ |

**The two big ideas to never forget:**

- **Perimeter** is the distance **around** → add the sides → **linear units** (cm, ft).
- **Area** is the space **inside** → multiply → **square units** (cm², ft²).

> **Quick gut-check:** Going *around* the outside? Perimeter. Covering the *inside*? Area. Get that right and the formula does the rest! 💪`
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆

These mix together perimeter and area for different shapes. Decide *around or inside* first!`,
        exercise: {
          questions: [
            {
              question: 'A triangle has a base of $12$ cm and a height of $5$ cm. What is its **area**?',
              options: [
                '$60$ cm²',
                '$30$ cm²',
                '$17$ cm²',
                '$34$ cm²'
              ],
              correctAnswer: 1,
              explanation: 'Triangle area is $A = \\frac{1}{2}bh = \\frac{1}{2} \\times 12 \\times 5 = \\frac{1}{2} \\times 60 = 30$ cm². ✓'
            },
            {
              question: 'A rectangle has a perimeter of $20$ ft. If its length is $7$ ft, what is its **width**?',
              options: [
                '$13$ ft',
                '$10$ ft',
                '$6$ ft',
                '$3$ ft'
              ],
              correctAnswer: 3,
              explanation: 'Since $P = 2(l + w)$, then $20 = 2(7 + w)$, so $7 + w = 10$, which gives $w = 3$ ft. ✓'
            }
          ]
        }
      }
    ]
  }
]
