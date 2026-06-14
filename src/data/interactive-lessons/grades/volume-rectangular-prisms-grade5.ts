import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade5',
    sections: [
      {
        id: 'volume-rect-prism-g5-p1-intro',
        type: 'text' as const,
        content: `
# 📦 Volume of Rectangular Prisms

**Part 1 of 5 — Concept Introduction**

When you measure how much **flat space** a shape covers, you find its *area*. But the world is not flat — boxes, rooms, and fish tanks take up space in **three directions**.

**Volume** measures how much space is *inside* a 3D shape. Think of it as: *"How many little cubes would fit inside?"*

## A Rectangular Prism

A **rectangular prism** is just a box shape. Every page of a thick book, every cereal box, and every brick is a rectangular prism. It has three measurements:

- **Length** ($l$) — how long it is
- **Width** ($w$) — how wide it is
- **Height** ($h$) — how tall it is

## Cubic Units

Volume is always measured in **cubic units**, because we are counting unit cubes. A unit cube is $1$ wide, $1$ long, and $1$ tall.

| Measurement | Type | Example Unit |
|-------------|------|--------------|
| Length | 1 direction | $cm$, $in$ |
| Area | 2 directions | $cm^2$, $in^2$ |
| **Volume** | **3 directions** | $cm^3$, $in^3$ |

The little raised $3$ in $cm^3$ means "cubic," and it reminds us we used **three** measurements: length, width, and height. 🧊
    `
      },
      {
        id: 'volume-rect-prism-g5-p1-formula',
        type: 'text' as const,
        content: `
## The Volume Formula

To find the volume of any rectangular prism, **multiply all three measurements together**:

$$V = l \\times w \\times h$$

There is another helpful way to think about it. The bottom of the box is a rectangle called the **base**. Its area is $l \\times w$. Then you stack that base up by the height:

$$V = (\\text{Area of base}) \\times h$$

Both ideas give the **same answer** — they are just two ways of seeing the same multiplication.

## A Special Case: Cubes

A **cube** is a rectangular prism where all three sides are equal. If each side has length $s$, then:

$$V = s \\times s \\times s = s^3$$

So a cube with side $4\\,cm$ has volume $4^3 = 4 \\times 4 \\times 4 = 64\\,cm^3$.
    `
      },
      {
        id: 'volume-rect-prism-g5-p1-example',
        type: 'text' as const,
        content: `
## A Worked Example

Let's find the volume of a box that is $5\\,cm$ long, $3\\,cm$ wide, and $2\\,cm$ tall.

**Step 1 — Write the formula:**

$$V = l \\times w \\times h$$

**Step 2 — Put in the numbers:**

$$V = 5 \\times 3 \\times 2$$

**Step 3 — Multiply, one piece at a time:**

$$V = 15 \\times 2 = 30$$

**Step 4 — Add the cubic units:**

$$V = 30\\,cm^3$$

So $30$ unit cubes would fit inside the box. Notice the unit is $cm^3$ (cubic), not $cm$ or $cm^2$. ✅
    `
      },
      {
        id: 'volume-rect-prism-g5-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you understand what volume measures and which units we use.
    `,
        exercise: {
          questions: [
            {
              question: 'Which formula gives the volume of a rectangular prism?',
              options: [
                '$V = l \\times w \\times h$',
                '$V = l + w + h$',
                '$V = l \\times w$',
                '$V = 2 \\times (l + w)$'
              ],
              correctAnswer: 0,
              explanation: 'Volume uses all three measurements multiplied together: length times width times height, written $V = l \\times w \\times h$.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade5',
    sections: [
      {
        id: 'volume-rect-prism-g5-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's slow down and work through two problems one step at a time.

## Example 1: A Bigger Box

Find the volume of a box that is $6\\,in$ long, $4\\,in$ wide, and $5\\,in$ tall.

**Step 1 — Formula:** $V = l \\times w \\times h$

**Step 2 — Substitute:** $V = 6 \\times 4 \\times 5$

**Step 3 — Multiply the first two:** $6 \\times 4 = 24$

**Step 4 — Multiply by the last one:** $24 \\times 5 = 120$

**Step 5 — Add units:** $V = 120\\,in^3$ ✅

💡 **Tip:** It does not matter which two numbers you multiply first. $6 \\times 4 \\times 5$, $5 \\times 6 \\times 4$, and $4 \\times 5 \\times 6$ all equal $120$.
    `
      },
      {
        id: 'volume-rect-prism-g5-p2-worked2',
        type: 'text' as const,
        content: `
## Example 2: Using the Base

Find the volume of a fish tank that is $10\\,cm$ long, $4\\,cm$ wide, and $7\\,cm$ tall — this time using the **base** method.

**Step 1 — Find the area of the base** (the bottom rectangle):

$$\\text{Area of base} = l \\times w = 10 \\times 4 = 40\\,cm^2$$

**Step 2 — Multiply the base area by the height:**

$$V = (\\text{Area of base}) \\times h = 40 \\times 7 = 280$$

**Step 3 — Add units:** $V = 280\\,cm^3$ ✅

This is the same answer you would get from $10 \\times 4 \\times 7$. Two paths, one answer! 🎉
    `
      },
      {
        id: 'volume-rect-prism-g5-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

A storage box is $8\\,cm$ long, $3\\,cm$ wide, and $2\\,cm$ tall. Find its volume step by step. Type only the number in each box.

1) First, multiply length and width: $8 \\times 3 = ?$ (This is the area of the base.)

2) Now multiply that result by the height: (your answer) $\\times 2 = ?$ (This is the volume in $cm^3$.)
    `,
        exercise: {
          boxes: 2,
          correctAnswers: ['24', '48'],
          hint1: 'Length times width gives the area of the base: $8 \\times 3$.',
          hint2: 'Take the base area ($24$) and multiply it by the height ($2$) to get the volume.',
          explanation: 'The base area is $8 \\times 3 = 24\\,cm^2$. Then $24 \\times 2 = 48$, so the volume is $48\\,cm^3$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade5',
    sections: [
      {
        id: 'volume-rect-prism-g5-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Use $V = l \\times w \\times h$ on each problem. Remember to add cubic units.
    `,
        exercise: {
          questions: [
            {
              question: 'A box is $3\\,cm$ long, $3\\,cm$ wide, and $4\\,cm$ tall. What is its volume?',
              options: ['$36\\,cm^3$', '$10\\,cm^3$', '$24\\,cm^3$', '$12\\,cm^3$'],
              correctAnswer: 0,
              explanation: 'Multiply all three: $3 \\times 3 \\times 4 = 9 \\times 4 = 36\\,cm^3$.'
            },
            {
              question: 'A cube has a side length of $2\\,m$. What is its volume?',
              options: ['$6\\,m^3$', '$8\\,m^3$', '$4\\,m^3$', '$12\\,m^3$'],
              correctAnswer: 1,
              explanation: 'For a cube, $V = s^3 = 2 \\times 2 \\times 2 = 8\\,m^3$.'
            }
          ]
        }
      },
      {
        id: 'volume-rect-prism-g5-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

A prism is $5\\,ft$ long, $2\\,ft$ wide, and $3\\,ft$ tall. Complete the two steps to find its volume.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'First, the area of the base ($l \\times w = 5 \\times 2$) is',
              options: ['$10\\,ft^2$', '$7\\,ft^2$', '$25\\,ft^2$', '$30\\,ft^2$']
            },
            {
              label: 'Then the volume (base area $\\times h = 10 \\times 3$) is',
              options: ['$13\\,ft^3$', '$60\\,ft^3$', '$30\\,ft^3$', '$15\\,ft^3$']
            }
          ],
          correctAnswers: ['$10\\,ft^2$', '$30\\,ft^3$'],
          hint1: 'The base area is $5 \\times 2 = 10$. Then multiply that by the height $3$.',
          explanation: 'The base area is $5 \\times 2 = 10\\,ft^2$. Multiplying by the height gives $10 \\times 3 = 30\\,ft^3$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade5',
    sections: [
      {
        id: 'volume-rect-prism-g5-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Volume shows up everywhere in real life. We use it to figure out how much a container can hold, how much water fills a pool, or how much soil fills a garden box.

## Fish Tank Example 🐠

Maria is filling a fish tank shaped like a rectangular prism. It is $40\\,cm$ long, $20\\,cm$ wide, and $30\\,cm$ tall. **How much water can it hold?**

This asks for the **volume**:

$$V = l \\times w \\times h = 40 \\times 20 \\times 30$$

Multiply two at a time:

$$40 \\times 20 = 800 \\qquad 800 \\times 30 = 24{,}000$$

The tank holds $24{,}000\\,cm^3$ of water! 🌊

## Watch Your Words

Word problems often hide the measurements in a sentence. Look for three numbers — the **length, width, and height** — and multiply them together. The answer is always in **cubic units**.
    `
      },
      {
        id: 'volume-rect-prism-g5-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

A moving box is $4\\,ft$ long, $3\\,ft$ wide, and $2\\,ft$ tall. Find its volume step by step. Type only the number in each box.

1) Multiply length and width: $4 \\times 3 = ?$

2) Multiply that result by the height: (your answer) $\\times 2 = ?$ (the volume in $ft^3$)
    `,
        exercise: {
          boxes: 2,
          correctAnswers: ['12', '24'],
          hint1: 'Length times width gives the base area: $4 \\times 3$.',
          hint2: 'Multiply the base area ($12$) by the height ($2$) to find the volume.',
          explanation: 'The base area is $4 \\times 3 = 12\\,ft^2$. Then $12 \\times 2 = 24$, so the box holds $24\\,ft^3$.'
        }
      },
      {
        id: 'volume-rect-prism-g5-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Real-World Check** ✅

Read carefully and pick the volume.
    `,
        exercise: {
          questions: [
            {
              question: 'A swimming pool is $10\\,m$ long, $5\\,m$ wide, and $2\\,m$ deep. What is its volume?',
              options: ['$17\\,m^3$', '$50\\,m^3$', '$100\\,m^3$', '$70\\,m^3$'],
              correctAnswer: 2,
              explanation: 'Multiply all three measurements: $10 \\times 5 \\times 2 = 50 \\times 2 = 100\\,m^3$.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade5',
    sections: [
      {
        id: 'volume-rect-prism-g5-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You made it! Here is everything about volume in one quick summary.

## Summary Table

| Idea | What to Remember |
|------|------------------|
| **What is volume?** | The space *inside* a 3D shape |
| **Formula** | $V = l \\times w \\times h$ |
| **Base method** | $V = (\\text{Area of base}) \\times h$ |
| **Cube** | $V = s^3$ (all sides equal) |
| **Units** | Always **cubic**: $cm^3$, $m^3$, $in^3$, $ft^3$ |

## Key Reminders 🔑

- Volume always uses **three** measurements multiplied together.
- The answer is always in **cubic** units (the little $3$ in $cm^3$).
- A **cube** is just a rectangular prism with all equal sides.

Now try the final challenge to mix everything together!
    `
      },
      {
        id: 'volume-rect-prism-g5-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Final Challenge** 🎯

These problems mix together every idea from the lesson. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'A cube has a side length of $3\\,cm$. What is its volume?',
              options: ['$9\\,cm^3$', '$27\\,cm^3$', '$6\\,cm^3$', '$12\\,cm^3$'],
              correctAnswer: 1,
              explanation: 'For a cube, $V = s^3 = 3 \\times 3 \\times 3 = 27\\,cm^3$.'
            },
            {
              question: 'A box has a base area of $12\\,cm^2$ and a height of $5\\,cm$. What is its volume?',
              options: ['$17\\,cm^3$', '$60\\,cm^3$', '$24\\,cm^3$', '$7\\,cm^3$'],
              correctAnswer: 1,
              explanation: 'Using $V = (\\text{Area of base}) \\times h$, multiply $12 \\times 5 = 60\\,cm^3$.'
            }
          ]
        }
      }
    ]
  }
]
