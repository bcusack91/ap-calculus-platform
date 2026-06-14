import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // =====================================================================
  // PART 1 — Concept Introduction
  // =====================================================================
  {
    topicSlug: 'area-composite-figures',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## What Is a Composite Figure? 🧩

A **composite figure** (sometimes called a *complex figure*) is a shape made by putting together two or more **basic shapes**. Think of it like a puzzle: the big shape is built from smaller pieces you already know how to handle.

The basic building blocks are usually:
- **Rectangles** and **squares**
- **Triangles**
- **Circles** and **semicircles**
- **Trapezoids** and **parallelograms**

You see composite figures everywhere in real life:
- The **floor plan** of a house
- A **garden** split into different sections
- A **swimming pool** shaped like a rectangle with a rounded end
- **Letters and logos** like the giant "L" on a sign

The big idea is simple: **break the messy shape into simple shapes, find each area, then combine them.**`
      },
      {
        id: 'p1-formulas',
        type: 'text',
        content: `## Review: The Area Formulas You Need 📐

Before we combine shapes, let's review the area formula for each basic piece. Keep this table handy!

| Shape | Formula | Meaning |
| --- | --- | --- |
| **Rectangle** | $A = l \\times w$ | length times width |
| **Square** | $A = s^2$ | side times side |
| **Triangle** | $A = \\frac{1}{2}bh$ | half of base times height |
| **Parallelogram** | $A = bh$ | base times height |
| **Trapezoid** | $A = \\frac{1}{2}(b_1 + b_2)h$ | half the sum of the two bases, times height |
| **Circle** | $A = \\pi r^2$ | pi times radius squared |
| **Semicircle** | $A = \\frac{1}{2}\\pi r^2$ | half of a circle |

> **Remember:** the **radius** $r$ is *half* the diameter. If a circle's diameter is $6$ cm, then $r = 3$ cm.

We'll use $\\pi \\approx 3.14$ when we need a number for circle problems.`
      },
      {
        id: 'p1-strategy',
        type: 'text',
        content: `## The 3-Step Strategy ✅

Every composite-figure problem follows the same plan:

**Step 1 — Break it apart.** Look for rectangles, triangles, and circles hiding inside. Draw a line to split the figure into simple pieces.

**Step 2 — Find each area.** Use the right formula for each piece and label your dimensions carefully.

**Step 3 — Combine.** Usually you **add** the pieces together:

$$A_{total} = A_1 + A_2 + A_3 + \\dots$$

**Worked example — an L-shaped figure.** Split the "L" into two rectangles:
- Top rectangle: $8$ ft by $3$ ft → $A_1 = 8 \\times 3 = 24$ ft²
- Bottom rectangle: $5$ ft by $4$ ft → $A_2 = 5 \\times 4 = 20$ ft²
- Total: $A = 24 + 20 = 44$ ft² ✓

That's it — split, solve each piece, then add!`
      },
      {
        id: 'p1-check',
        type: 'multiple-choice',
        content: `## Concept Check ✅

Let's make sure the main idea is clear before moving on.`,
        exercise: {
          questions: [
            {
              question: 'What is the **first step** when finding the area of a composite figure?',
              options: [
                'Add up all the side lengths to find the perimeter first',
                'Break the figure into basic shapes like rectangles and triangles',
                'Multiply the longest two measurements together',
                'Find the area of a circle, even if there is no circle'
              ],
              correctAnswer: 1,
              explanation: 'A composite figure is made of simpler shapes, so the first step is to break it apart into basic shapes you know how to handle. Then you find each area and combine them.'
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
    topicSlug: 'area-composite-figures',
    sections: [
      {
        id: 'p2-house',
        type: 'text',
        content: `## Worked Example: A "House" Shape 🏠

A house-shaped figure is a **rectangle** with a **triangle** roof on top.
- Rectangle (the walls): $12$ m wide and $8$ m tall
- Triangle (the roof): base $= 12$ m, height $= 5$ m

**Step 1 — Break it apart.** It's already two pieces: one rectangle + one triangle.

**Step 2 — Find each area.**
- Rectangle: $A_1 = l \\times w = 12 \\times 8 = 96$ m²
- Triangle: $A_2 = \\frac{1}{2}bh = \\frac{1}{2} \\times 12 \\times 5 = \\frac{1}{2} \\times 60 = 30$ m²

**Step 3 — Add them.**
$$A = 96 + 30 = 126 \\text{ m}^2 ✓$$

> **Tip:** For the triangle, multiply base times height *first* ($12 \\times 5 = 60$), then take half. The numbers stay friendly!`
      },
      {
        id: 'p2-semicircle',
        type: 'text',
        content: `## Worked Example: Rectangle + Semicircle 🏊

A swimming pool is a **rectangle** with a **semicircle** on one end.
- Rectangle: $10$ cm long and $6$ cm wide
- Semicircle: it sits on the $6$ cm end, so the **diameter** is $6$ cm and the **radius** is $r = 3$ cm

**Step 1 — Break it apart.** One rectangle + one semicircle.

**Step 2 — Find each area** (use $\\pi \\approx 3.14$).
- Rectangle: $A_1 = 10 \\times 6 = 60$ cm²
- Semicircle: $A_2 = \\frac{1}{2}\\pi r^2 = \\frac{1}{2} \\times 3.14 \\times 3^2 = \\frac{1}{2} \\times 3.14 \\times 9 = \\frac{1}{2} \\times 28.26 = 14.13$ cm²

**Step 3 — Add them.**
$$A = 60 + 14.13 = 74.13 \\text{ cm}^2 ✓$$

Notice we found the radius by cutting the diameter in half. That's a super common step — watch for it!`
      },
      {
        id: 'p2-input',
        type: 'input-boxes',
        content: `## Your Turn — Fill in the Boxes ✍️

A figure is a **rectangle with a triangle on top** (a "house" shape).
- Rectangle: $9$ ft wide and $6$ ft tall
- Triangle on top: base $= 9$ ft, height $= 4$ ft

**Box 1:** Area of the **rectangle** in ft² (use $A = l \\times w$)
**Box 2:** Area of the **triangle** in ft² (use $A = \\frac{1}{2}bh$)
**Box 3:** The **total area** in ft²`,
        exercise: {
          boxes: 3,
          correctAnswers: ['54', '18', '72'],
          hint1: 'Box 1: multiply width by height. Box 2: multiply base times height, then take half. Box 3: add Box 1 and Box 2.',
          hint2: 'Box 1: $9 \\times 6$. Box 2: $\\frac{1}{2} \\times 9 \\times 4$. Box 3: rectangle area + triangle area.',
          explanation: 'Box 1: $9 \\times 6 = 54$ ft². Box 2: $\\frac{1}{2} \\times 9 \\times 4 = \\frac{1}{2} \\times 36 = 18$ ft². Box 3: $54 + 18 = 72$ ft². ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 3 — Guided Practice
  // =====================================================================
  {
    topicSlug: 'area-composite-figures',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Answer 🎯

Break each figure into basic shapes, then combine the areas.`,
        exercise: {
          questions: [
            {
              question: 'An L-shaped figure splits into two rectangles: one is $7$ m by $2$ m, and the other is $3$ m by $5$ m. What is the **total area**?',
              options: [
                '$14$ m²',
                '$15$ m²',
                '$29$ m²',
                '$35$ m²'
              ],
              correctAnswer: 2,
              explanation: 'First rectangle: $7 \\times 2 = 14$ m². Second rectangle: $3 \\times 5 = 15$ m². Total: $14 + 15 = 29$ m².'
            },
            {
              question: 'A figure is a rectangle ($10$ cm by $4$ cm) with a triangle on top (base $10$ cm, height $6$ cm). What is the **total area**?',
              options: [
                '$40$ cm²',
                '$30$ cm²',
                '$60$ cm²',
                '$70$ cm²'
              ],
              correctAnswer: 3,
              explanation: 'Rectangle: $10 \\times 4 = 40$ cm². Triangle: $\\frac{1}{2} \\times 10 \\times 6 = 30$ cm². Total: $40 + 30 = 70$ cm².'
            }
          ]
        }
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Match the Piece to Its Formula 🔽

A composite figure is made of a **rectangle** and a **semicircle**. Choose the correct formula for each piece.`,
        exercise: {
          dropdowns: [
            {
              label: 'To find the area of the rectangle piece, use…',
              options: ['$A = l \\times w$', '$A = \\frac{1}{2}bh$', '$A = \\frac{1}{2}\\pi r^2$', '$A = \\pi r^2$']
            },
            {
              label: 'To find the area of the semicircle piece, use…',
              options: ['$A = \\frac{1}{2}\\pi r^2$', '$A = \\pi r^2$', '$A = l \\times w$', '$A = \\frac{1}{2}bh$']
            }
          ],
          correctAnswers: ['$A = l \\times w$', '$A = \\frac{1}{2}\\pi r^2$'],
          hint1: 'A rectangle uses length times width. A semicircle is half of a full circle, so it is half of $\\pi r^2$.',
          explanation: 'The rectangle uses $A = l \\times w$. A semicircle is exactly half a circle, so its area is $A = \\frac{1}{2}\\pi r^2$. ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 4 — Application & Word Problems
  // =====================================================================
  {
    topicSlug: 'area-composite-figures',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Real-World Composite Figures 🌍

Composite-figure math shows up whenever a real object isn't a perfect single shape.

**Example — a garden.** Maya's vegetable garden is shaped like a rectangle with a triangular flower bed attached to one end. To buy the right amount of soil, she needs the **total area**.
- Rectangle part: $15$ ft by $8$ ft → $A_1 = 15 \\times 8 = 120$ ft²
- Triangle part: base $8$ ft, height $6$ ft → $A_2 = \\frac{1}{2} \\times 8 \\times 6 = 24$ ft²
- Total area: $120 + 24 = 144$ ft²

So Maya needs enough soil to cover **$144$ ft²**. Breaking the garden into a rectangle and a triangle made the problem easy. Now try a couple yourself.`
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Word Problem — Fill in the Boxes ✍️

A classroom rug is shaped like a **rectangle with a semicircle** on one end.
- Rectangle: $8$ ft long and $4$ ft wide
- Semicircle on the $4$ ft end: diameter $= 4$ ft, so radius $r = 2$ ft

Use $\\pi \\approx 3.14$.

**Box 1:** The **radius** of the semicircle in ft
**Box 2:** Area of the **rectangle** in ft²
**Box 3:** Area of the **semicircle** in ft² (use $A = \\frac{1}{2}\\pi r^2$, rounded to two decimals)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '32', '6.28'],
          hint1: 'Box 1: the radius is half the diameter. Box 2: multiply length by width. Box 3: half of $\\pi$ times radius squared.',
          hint2: 'Box 1: $4 \\div 2$. Box 2: $8 \\times 4$. Box 3: $\\frac{1}{2} \\times 3.14 \\times 2^2$.',
          explanation: 'Box 1: $r = 4 \\div 2 = 2$ ft. Box 2: $8 \\times 4 = 32$ ft². Box 3: $\\frac{1}{2} \\times 3.14 \\times 2^2 = \\frac{1}{2} \\times 3.14 \\times 4 = \\frac{1}{2} \\times 12.56 = 6.28$ ft². ✓'
        }
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Application Question 🧮

Use the **subtraction method** for this one.`,
        exercise: {
          questions: [
            {
              question: 'A square sign is $10$ in by $10$ in. A small $4$ in by $3$ in **rectangular hole** is cut out of it for a bolt. What is the **area of the sign that remains**?',
              options: [
                '$88$ in²',
                '$100$ in²',
                '$112$ in²',
                '$12$ in²'
              ],
              correctAnswer: 0,
              explanation: 'Full square: $10 \\times 10 = 100$ in². Hole: $4 \\times 3 = 12$ in². Remaining area: $100 - 12 = 88$ in². Sometimes it is easier to subtract a missing piece!'
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
    topicSlug: 'area-composite-figures',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Summary: Putting It All Together 🎓

You now know how to find the area of any composite figure! Here's the whole plan in one place:

| Step | What you do |
| --- | --- |
| **1. Break apart** | Split the figure into rectangles, triangles, and circles |
| **2. Find each area** | Use the right formula for each piece |
| **3. Combine** | **Add** the pieces — or **subtract** a missing hole |

**The two methods:**
- **Addition method:** when pieces are *joined together*, find each area and **add**: $A = A_1 + A_2 + \\dots$
- **Subtraction method:** when a piece is *cut out*, find the big area and **subtract** the missing piece: $A = A_{big} - A_{hole}$

**Key reminders:**
- The **radius** is half the **diameter**.
- Area is always measured in **square units** (cm², ft², m²).
- A **semicircle** is half a circle: $A = \\frac{1}{2}\\pi r^2$.

Now take on the challenge questions below!`
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Challenge Questions 🏆

These mix the addition and subtraction methods. Take your time and work step by step.`,
        exercise: {
          questions: [
            {
              question: 'A trapezoid has parallel bases of $6$ m and $10$ m and a height of $4$ m. A **triangle** with base $10$ m and height $3$ m sits on top of it. What is the **total area**?',
              options: [
                '$32$ m²',
                '$47$ m²',
                '$15$ m²',
                '$62$ m²'
              ],
              correctAnswer: 1,
              explanation: 'Trapezoid: $\\frac{1}{2}(6 + 10) \\times 4 = \\frac{1}{2} \\times 16 \\times 4 = 32$ m². Triangle: $\\frac{1}{2} \\times 10 \\times 3 = 15$ m². Total: $32 + 15 = 47$ m².'
            },
            {
              question: 'A rectangular floor is $12$ ft by $9$ ft. A square closet $3$ ft by $3$ ft is **not** part of the floor (it is walled off). What is the area of the **usable floor**?',
              options: [
                '$108$ ft²',
                '$99$ ft²',
                '$9$ ft²',
                '$117$ ft²'
              ],
              correctAnswer: 1,
              explanation: 'Whole floor: $12 \\times 9 = 108$ ft². Closet removed: $3 \\times 3 = 9$ ft². Usable floor: $108 - 9 = 99$ ft². This is the subtraction method in action!'
            }
          ]
        }
      }
    ]
  }
]
