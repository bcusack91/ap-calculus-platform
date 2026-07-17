import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // =====================================================================
  // PART 1 — Concept Introduction
  // =====================================================================
  {
    topicSlug: 'surface-area-volume',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## Stepping Into 3D 📦

Look around you — boxes, cans, ice cubes, basketballs. These are all **3D shapes** (three-dimensional). Unlike flat 2D shapes, they have **length, width, AND height**, so they take up real space.

With 3D shapes there are **two** big things we can measure:

| Measurement | What it tells you | Picture it as… | Units |
| --- | --- | --- | --- |
| **Volume** | the space **inside** the shape | how much water it could hold | cubic units $(cm^{3})$ |
| **Surface Area** | the total area of the **outside** | how much wrapping paper to cover it | square units $(cm^{2})$ |

The key idea: **volume is the INSIDE, surface area is the OUTSIDE.** Keep that picture in your head and you'll know which one a problem is asking for!`
      },
      {
        id: 'p1-volume',
        type: 'text',
        content: `## What Is Volume? 🧊

**Volume** measures the amount of space **inside** a 3D shape.

**Think of it as:** How much liquid could it hold? Or, how many little **unit cubes** (1×1×1 cubes) fit inside?

Because we are filling the shape with little cubes, volume is measured in **cubic units** — written with a little **3** like $cm^{3}$, $in^{3}$, $m^{3}$, or $ft^{3}$.

**Example:** A box that is $3$ cm long, $4$ cm wide, and $2$ cm tall.
- Bottom layer: $3 \\times 4 = 12$ cubes
- It is $2$ layers tall, so $12 \\times 2 = 24$ cubes
- **Volume $= 24$ $cm^{3}$** ✓ (24 cubic centimeters of space inside)

That is exactly why the volume of a box is **length × width × height** — you're counting how many unit cubes fit inside!`
      },
      {
        id: 'p1-surface-area',
        type: 'text',
        content: `## What Is Surface Area? 🎁

**Surface Area** measures the **total area of all the outside surfaces** of a 3D shape.

**Think of it as:** How much wrapping paper do you need to cover it? Or how much paint to cover every side?

To find it, you find the area of **each flat face** and **add them all up**. Because we're adding up areas, surface area is measured in **square units** like $cm^{2}$, $in^{2}$, $m^{2}$, or $ft^{2}$.

**Example:** A cube has **6 faces**. If each face is a $2$ cm × $2$ cm square:
- Area of one face: $2 \\times 2 = 4$ $cm^{2}$
- There are $6$ faces: $6 \\times 4 = 24$ $cm^{2}$
- **Surface Area $= 24$ $cm^{2}$** ✓

> **Watch the units!** Volume uses **cubic** units $(cm^{3})$ because it fills space. Surface area uses **square** units $(cm^{2})$ because it covers a surface.`
      },
      {
        id: 'p1-check',
        type: 'multiple-choice',
        content: `## Concept Check ✅

Let's make sure the difference between volume and surface area is clear before we go further.`,
        exercise: {
          questions: [
            {
              question: 'Maria is wrapping a birthday present in wrapping paper. Which measurement tells her how much paper she needs to **cover the outside** of the box?',
              options: [
                'Surface area, because the paper covers all the outside faces',
                'Volume, because the paper fills the inside of the box',
                'Surface area, measured in cubic units',
                'Volume, measured in square units'
              ],
              correctAnswer: 0,
              explanation: 'Wrapping paper covers the **outside** surfaces of the box, so she needs the surface area. Surface area is measured in square units $(like cm^{2})$, not cubic units.'
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
    topicSlug: 'surface-area-volume',
    sections: [
      {
        id: 'p2-worked-box',
        type: 'text',
        content: `## Worked Examples: The Rectangular Prism 📦

A **rectangular prism** is just a box with length ($l$), width ($w$), and height ($h$). Here are its two formulas:

$$V = l \\times w \\times h \\qquad SA = 2lw + 2lh + 2wh$$

The surface area formula adds up the **6 faces**: top + bottom ($2lw$), front + back ($2lh$), and the two ends ($2wh$).

---

**Example 1 — Volume of a box**

Find the volume of a box: $l = 5$ ft, $w = 3$ ft, $h = 4$ ft.

- Formula: $V = l \\times w \\times h$
- Plug in: $V = 5 \\times 3 \\times 4$
- Compute: $V = 15 \\times 4 = 60$ $ft^{3}$ ✓

---

**Example 2 — Surface area of the same box**

Same box ($5$ ft × $3$ ft × $4$ ft). Find the surface area.

- Formula: $SA = 2lw + 2lh + 2wh$
- Plug in: $SA = 2(5 \\times 3) + 2(5 \\times 4) + 2(3 \\times 4)$
- Each pair: $2(15) + 2(20) + 2(12) = 30 + 40 + 24$
- Add: $SA = 94$ $ft^{2}$ ✓`
      },
      {
        id: 'p2-worked-cube',
        type: 'text',
        content: `## Worked Examples: The Cube 🧊

A **cube** is a special box where all edges are equal. We call that length $s$ (for *side*). Since every measurement is the same, the formulas get simpler:

$$V = s^3 \\qquad SA = 6s^2$$

- $V = s^3$ means $s \\times s \\times s$ (all three dimensions are $s$).
- $SA = 6s^2$ because a cube has $6$ identical square faces, each with area $s^2$.

---

**Example 3 — A cube with side $6$ cm**

- **Volume:** $V = s^3 = 6 \\times 6 \\times 6 = 36 \\times 6 = 216$ $cm^{3}$ ✓
- **Surface area:** $SA = 6s^2 = 6 \\times (6 \\times 6) = 6 \\times 36 = 216$ $cm^{2}$ ✓

> **Cool but tricky:** for this cube the volume and surface area are both **216**, but the **units are different** — $216$ $cm^{3}$ of space inside vs. $216$ $cm^{2}$ of surface outside. Same number, totally different meaning!

Now try one in the boxes below.`
      },
      {
        id: 'p2-input',
        type: 'input-boxes',
        content: `## Your Turn — Fill in the Boxes ✍️

A rectangular prism (box) is $\\textbf{8}$ cm long, $\\textbf{2}$ cm wide, and $\\textbf{3}$ cm tall.

**Box 1:** The **volume** in $cm^{3}$ (use $V = l \\times w \\times h$)
**Box 2:** The **surface area** in $cm^{2}$ (use $SA = 2lw + 2lh + 2wh$)
**Box 3:** A **cube** has side $5$ cm. Its **volume** in $cm^{3}$ (use $V = s^3$)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['48', '92', '125'],
          hint1: 'Box 1: multiply all three numbers together. Box 2: find $2lw$, $2lh$, and $2wh$, then add. Box 3: multiply $5 \\times 5 \\times 5$.',
          hint2: 'Box 1: $8 \\times 2 \\times 3$. Box 2: $2(8 \\times 2) + 2(8 \\times 3) + 2(2 \\times 3) = 32 + 48 + 12$. Box 3: $5 \\times 5 \\times 5$.',
          explanation: 'Box 1 (volume): $8 \\times 2 \\times 3 = 48$ $cm^{3}$. Box 2 (surface area): $2(16) + 2(24) + 2(6) = 32 + 48 + 12 = 92$ $cm^{2}$. Box 3 (cube volume): $5^3 = 125$ $cm^{3}$. ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 3 — Guided Practice
  // =====================================================================
  {
    topicSlug: 'surface-area-volume',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Choose the Answer 🎯

Remember: **volume** fills the inside (cubic units, $cm^{3}$), **surface area** covers the outside (square units, $cm^{2}$).`,
        exercise: {
          questions: [
            {
              question: 'A box is $4$ m long, $2$ m wide, and $5$ m tall. What is its **volume**?',
              options: [
                '$11$ $m^{3}$',
                '$40$ $m^{3}$',
                '$76$ $m^{3}$',
                '$20$ $m^{3}$'
              ],
              correctAnswer: 1,
              explanation: 'Volume of a box is $V = l \\times w \\times h = 4 \\times 2 \\times 5 = 40$ $m^{3}$. ✓'
            },
            {
              question: 'A cube has a side length of $4$ in. What is its **surface area**?',
              options: [
                '$16$ $in^{2}$',
                '$64$ $in^{2}$',
                '$96$ $in^{2}$',
                '$24$ $in^{2}$'
              ],
              correctAnswer: 2,
              explanation: 'Surface area of a cube is $SA = 6s^2 = 6 \\times (4 \\times 4) = 6 \\times 16 = 96$ $in^{2}$. ($64$ $in^{3}$ would be the volume, $4^3$.)'
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
              label: 'To find the volume of a cube with side $s$, the formula is…',
              options: ['$V = s^3$', '$SA = 6s^2$', '$V = l \\times w \\times h$', '$SA = 2lw + 2lh + 2wh$']
            },
            {
              label: 'A **volume** answer should be measured in…',
              options: ['cubic units $(like cm^{3})$', 'square units $(like cm^{2})$']
            }
          ],
          correctAnswers: ['$V = s^3$', 'cubic units $(like cm^{3})$'],
          hint1: 'A cube has all three dimensions equal to $s$, so its volume multiplies $s$ three times. Because volume fills space, it uses cubic units.',
          explanation: 'The volume of a cube is $V = s^3$ (that is $s \\times s \\times s$), and volume is always measured in **cubic units** like $cm^{3}$ because you are filling space with little cubes. ✓'
        }
      }
    ]
  },

  // =====================================================================
  // PART 4 — Application & Word Problems
  // =====================================================================
  {
    topicSlug: 'surface-area-volume',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Surface Area and Volume in Real Life 🏠

These ideas show up everywhere! The trick is reading the problem and asking: *am I filling the INSIDE (volume) or covering the OUTSIDE (surface area)?*

| Real-life job | What you need |
| --- | --- |
| How much water fills a tank | **Volume** (inside) |
| How much sand fills a sandbox | **Volume** (inside) |
| How much wrapping paper to cover a gift | **Surface area** (outside) |
| How much paint to cover a crate | **Surface area** (outside) |
| How many cubic feet a moving box holds | **Volume** (inside) |

**Story example:** A fish tank is shaped like a box: $30$ in long, $12$ in wide, $15$ in tall. To find how much water it holds, you fill the *inside* → use **volume**:
- $V = l \\times w \\times h = 30 \\times 12 \\times 15 = 5400$ $in^{3}$ of water. 🐠

Now use this idea on the problems below!`
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Storage Box Project 📦

A moving company makes storage boxes that are $\\textbf{6}$ ft long, $\\textbf{3}$ ft wide, and $\\textbf{2}$ ft tall.

**Box 1:** How many **cubic feet** can the box hold? (volume)
**Box 2:** They want to **paint the outside** of the box. How many **square feet** of surface? (surface area)
**Box 3:** A **cube-shaped** crate has side $4$ ft. How many **cubic feet** does it hold? (volume)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '72', '64'],
          hint1: 'Box 1 fills the inside → $V = l \\times w \\times h$. Box 2 covers the outside → $SA = 2lw + 2lh + 2wh$. Box 3 is a cube → $V = s^3$.',
          hint2: 'Box 1: $6 \\times 3 \\times 2$. Box 2: $2(6 \\times 3) + 2(6 \\times 2) + 2(3 \\times 2) = 36 + 24 + 12$. Box 3: $4 \\times 4 \\times 4$.',
          explanation: 'Box 1 (volume): $6 \\times 3 \\times 2 = 36$ $ft^{3}$. Box 2 (surface area): $2(18) + 2(12) + 2(6) = 36 + 24 + 12 = 72$ $ft^{2}$. Box 3 (cube volume): $4^3 = 64$ $ft^{3}$. ✓'
        }
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Word Problem Challenge 💧`,
        exercise: {
          questions: [
            {
              question: 'A swimming pool shaped like a box is $10$ m long, $4$ m wide, and $2$ m deep. How much **water** (in cubic meters) does it hold when full?',
              options: [
                '$16$ $m^{3}$',
                '$80$ $m^{3}$',
                '$56$ $m^{3}$',
                '$48$ $m^{3}$'
              ],
              correctAnswer: 1,
              explanation: 'Water fills the **inside** of the pool, so use volume: $V = l \\times w \\times h = 10 \\times 4 \\times 2 = 80$ $m^{3}$. ✓'
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
    topicSlug: 'surface-area-volume',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: Everything in One Place 🌟

You can now find the **volume** and **surface area** of rectangular prisms and cubes! Here is your formula summary:

| Shape | Volume (inside) | Surface Area (outside) |
| --- | --- | --- |
| **Rectangular prism** | $V = l \\times w \\times h$ | $SA = 2lw + 2lh + 2wh$ |
| **Cube** | $V = s^3$ | $SA = 6s^2$ |

**The two big ideas to never forget:**

- **Volume** is the space **inside** → fills the shape → **cubic units** ($cm^{3}$, $ft^{3}$).
- **Surface Area** is the total of the **outside** faces → covers the shape → **square units** ($cm^{2}$, $ft^{2}$).

> **Quick gut-check:** Filling the *inside* with water or sand? Volume (cubic). Covering the *outside* with paint or paper? Surface area (square). Get that right and the formula does the rest! 💪`
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆

These mix together volume and surface area. Decide *inside or outside* first!`,
        exercise: {
          questions: [
            {
              question: 'A cube has a side length of $3$ cm. What is its **volume**?',
              options: [
                '$9$ $cm^{3}$',
                '$27$ $cm^{3}$',
                '$54$ $cm^{3}$',
                '$18$ $cm^{3}$'
              ],
              correctAnswer: 1,
              explanation: 'Volume of a cube is $V = s^3 = 3 \\times 3 \\times 3 = 27$ $cm^{3}$. ($54$ $cm^{2}$ would be its surface area, $6 \\times 3^2$.)'
            },
            {
              question: 'A box has length $5$ m, width $2$ m, and height $1$ m. What is its **surface area**?',
              options: [
                '$10$ $m^{2}$',
                '$17$ $m^{2}$',
                '$34$ $m^{2}$',
                '$24$ $m^{2}$'
              ],
              correctAnswer: 2,
              explanation: 'Surface area is $SA = 2lw + 2lh + 2wh = 2(5 \\times 2) + 2(5 \\times 1) + 2(2 \\times 1) = 20 + 10 + 4 = 34$ $m^{2}$. ✓'
            }
          ]
        }
      }
    ]
  }
]
