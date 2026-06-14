import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade6',
    sections: [
      {
        id: 'volume-rect-prism-g6-p1-intro',
        type: 'text' as const,
        content: `
# 📦 Volume of Rectangular Prisms

**Part 1 of 5 — Concept Introduction**

When you measure how much **flat space** a shape covers, you find its *area*. But the real world is not flat — boxes, swimming pools, and storage units take up space in **three directions** at once.

**Volume** measures how much space is *inside* a 3D shape. A handy way to picture it: *"How many unit cubes would fit inside?"*

## A Rectangular Prism

A **rectangular prism** is a box shape with **6 rectangular faces**. A cereal box, a brick, and a shoebox are all rectangular prisms. It has three measurements:

- **Length** ($l$) — how long it is
- **Width** ($w$) — how wide it is
- **Height** ($h$) — how tall it is

## Cubic Units

Volume is always measured in **cubic units**, because we are counting unit cubes. A unit cube is $1$ unit long, $1$ unit wide, and $1$ unit tall.

| Measurement | Directions | Example Units |
|-------------|------------|---------------|
| Length | 1 direction | $cm$, $in$ |
| Area | 2 directions | $cm^2$, $in^2$ |
| **Volume** | **3 directions** | $cm^3$, $in^3$ |

The little raised $3$ in $cm^3$ means "cubic." It reminds us we multiplied **three** measurements: length, width, and height. 🧊
    `
      },
      {
        id: 'volume-rect-prism-g6-p1-formula',
        type: 'text' as const,
        content: `
## The Volume Formula

To find the volume of any rectangular prism, **multiply all three measurements together**:

$$V = l \\times w \\times h$$

There is a second, very useful way to think about it. The bottom of the box is a rectangle called the **base**. Its area is $l \\times w$. Then you stack that base upward by the height:

$$V = (\\text{Area of base}) \\times h$$

Both ideas give the **exact same answer** — they are just two ways of seeing the same multiplication.

## A Special Case: Cubes

A **cube** is a rectangular prism where all three sides are equal. If each side has length $s$, then:

$$V = s \\times s \\times s = s^3$$

So a cube with side $5\\,cm$ has volume $5^3 = 5 \\times 5 \\times 5 = 125\\,cm^3$.
    `
      },
      {
        id: 'volume-rect-prism-g6-p1-example',
        type: 'text' as const,
        content: `
## A Worked Example

Let's find the volume of a box that is $7\\,cm$ long, $4\\,cm$ wide, and $3\\,cm$ tall.

**Step 1 — Write the formula:**

$$V = l \\times w \\times h$$

**Step 2 — Put in the numbers:**

$$V = 7 \\times 4 \\times 3$$

**Step 3 — Multiply, one piece at a time:**

$$V = 28 \\times 3 = 84$$

**Step 4 — Add the cubic units:**

$$V = 84\\,cm^3$$

So $84$ unit cubes would fit inside the box. Notice the unit is $cm^3$ (cubic), **not** $cm$ or $cm^2$. ✅
    `
      },
      {
        id: 'volume-rect-prism-g6-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you understand what volume measures and which units we use.
    `,
        exercise: {
          questions: [
            {
              question: 'Why is volume measured in cubic units like $cm^3$ instead of $cm$ or $cm^2$?',
              options: [
                'Because volume uses three measurements multiplied together: length, width, and height',
                'Because volume only measures how long a shape is',
                'Because volume is the same as the area of one face',
                'Because cubic units are easier to spell'
              ],
              correctAnswer: 0,
              explanation: 'Volume multiplies three measurements ($l \\times w \\times h$), so the units are cubed — for example $cm \\times cm \\times cm = cm^3$.'
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
    topicSlug: 'volume-rectangular-prisms-grade6',
    sections: [
      {
        id: 'volume-rect-prism-g6-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's slow down and work through two problems one step at a time.

## Example 1: A Bigger Box

Find the volume of a box that is $6\\,in$ long, $5\\,in$ wide, and $4\\,in$ tall.

**Step 1 — Formula:** $V = l \\times w \\times h$

**Step 2 — Substitute:** $V = 6 \\times 5 \\times 4$

**Step 3 — Multiply the first two:** $6 \\times 5 = 30$

**Step 4 — Multiply by the last one:** $30 \\times 4 = 120$

**Step 5 — Add units:** $V = 120\\,in^3$ ✅

💡 **Tip:** It does not matter which two numbers you multiply first. $6 \\times 5 \\times 4$, $4 \\times 6 \\times 5$, and $5 \\times 4 \\times 6$ all equal $120$.
    `
      },
      {
        id: 'volume-rect-prism-g6-p2-worked2',
        type: 'text' as const,
        content: `
## Example 2: Using the Base

Find the volume of an aquarium that is $12\\,cm$ long, $5\\,cm$ wide, and $8\\,cm$ tall — this time using the **base** method.

**Step 1 — Find the area of the base** (the bottom rectangle):

$$\\text{Area of base} = l \\times w = 12 \\times 5 = 60\\,cm^2$$

**Step 2 — Multiply the base area by the height:**

$$V = (\\text{Area of base}) \\times h = 60 \\times 8 = 480$$

**Step 3 — Add units:** $V = 480\\,cm^3$ ✅

This is the same answer you would get from $12 \\times 5 \\times 8$. Two paths, one answer! 🎉
    `
      },
      {
        id: 'volume-rect-prism-g6-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

A storage bin is $9\\,cm$ long, $4\\,cm$ wide, and $6\\,cm$ tall. Find its volume step by step. Type only the number in each box.

1) First, multiply length and width: $9 \\times 4 = ?$ (This is the area of the base.)

2) Now multiply that result by the height: (your answer) $\\times 6 = ?$ (This is the volume in $cm^3$.)
    `,
        exercise: {
          boxes: 2,
          correctAnswers: ['36', '216'],
          hint1: 'Length times width gives the area of the base: $9 \\times 4$.',
          hint2: 'Take the base area ($36$) and multiply it by the height ($6$) to get the volume.',
          explanation: 'The base area is $9 \\times 4 = 36\\,cm^2$. Then $36 \\times 6 = 216$, so the volume is $216\\,cm^3$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade6',
    sections: [
      {
        id: 'volume-rect-prism-g6-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Use $V = l \\times w \\times h$ on each problem. Remember to add cubic units.
    `,
        exercise: {
          questions: [
            {
              question: 'A box is $4\\,cm$ long, $3\\,cm$ wide, and $5\\,cm$ tall. What is its volume?',
              options: ['$12\\,cm^3$', '$60\\,cm^3$', '$45\\,cm^3$', '$23\\,cm^3$'],
              correctAnswer: 1,
              explanation: 'Multiply all three: $4 \\times 3 \\times 5 = 12 \\times 5 = 60\\,cm^3$.'
            },
            {
              question: 'A cube has a side length of $4\\,m$. What is its volume?',
              options: ['$12\\,m^3$', '$16\\,m^3$', '$64\\,m^3$', '$48\\,m^3$'],
              correctAnswer: 2,
              explanation: 'For a cube, $V = s^3 = 4 \\times 4 \\times 4 = 64\\,m^3$.'
            }
          ]
        }
      },
      {
        id: 'volume-rect-prism-g6-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

A prism is $7\\,ft$ long, $3\\,ft$ wide, and $2\\,ft$ tall. Complete the two steps to find its volume.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'First, the area of the base ($l \\times w = 7 \\times 3$) is',
              options: ['$10\\,ft^2$', '$21\\,ft^2$', '$14\\,ft^2$', '$42\\,ft^2$']
            },
            {
              label: 'Then the volume (base area $\\times h = 21 \\times 2$) is',
              options: ['$23\\,ft^3$', '$42\\,ft^3$', '$21\\,ft^3$', '$84\\,ft^3$']
            }
          ],
          correctAnswers: ['$21\\,ft^2$', '$42\\,ft^3$'],
          hint1: 'The base area is $7 \\times 3 = 21$. Then multiply that by the height $2$.',
          explanation: 'The base area is $7 \\times 3 = 21\\,ft^2$. Multiplying by the height gives $21 \\times 2 = 42\\,ft^3$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'volume-rectangular-prisms-grade6',
    sections: [
      {
        id: 'volume-rect-prism-g6-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

Volume shows up everywhere in real life. We use it to figure out how much a container can hold, how much water fills a pool, or how much soil fills a garden box.

## Aquarium Example 🐠

Jordan is filling an aquarium shaped like a rectangular prism. It is $50\\,cm$ long, $30\\,cm$ wide, and $40\\,cm$ tall. **How much water can it hold?**

This question asks for the **volume**:

$$V = l \\times w \\times h = 50 \\times 30 \\times 40$$

Multiply two at a time:

$$50 \\times 30 = 1{,}500 \\qquad 1{,}500 \\times 40 = 60{,}000$$

The aquarium holds $60{,}000\\,cm^3$ of water! 🌊

## Watch Your Words

Word problems often hide the measurements inside a sentence. Look for three numbers — the **length, width, and height** — and multiply them together. The answer is always in **cubic units**.
    `
      },
      {
        id: 'volume-rect-prism-g6-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

A garden planter is $8\\,ft$ long, $3\\,ft$ wide, and $2\\,ft$ tall. Find how much soil it holds, step by step. Type only the number in each box.

1) Multiply length and width: $8 \\times 3 = ?$ (the base area)

2) Multiply that result by the height: (your answer) $\\times 2 = ?$ (the volume in $ft^3$)
    `,
        exercise: {
          boxes: 2,
          correctAnswers: ['24', '48'],
          hint1: 'Length times width gives the base area: $8 \\times 3$.',
          hint2: 'Multiply the base area ($24$) by the height ($2$) to find the volume.',
          explanation: 'The base area is $8 \\times 3 = 24\\,ft^2$. Then $24 \\times 2 = 48$, so the planter holds $48\\,ft^3$ of soil.'
        }
      },
      {
        id: 'volume-rect-prism-g6-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Real-World Check** ✅

Read carefully and pick the volume.
    `,
        exercise: {
          questions: [
            {
              question: 'A shipping crate is $2\\,m$ long, $2\\,m$ wide, and $3\\,m$ tall. What is its volume?',
              options: ['$7\\,m^3$', '$10\\,m^3$', '$12\\,m^3$', '$14\\,m^3$'],
              correctAnswer: 2,
              explanation: 'Multiply all three measurements: $2 \\times 2 \\times 3 = 4 \\times 3 = 12\\,m^3$.'
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
    topicSlug: 'volume-rectangular-prisms-grade6',
    sections: [
      {
        id: 'volume-rect-prism-g6-p5-summary',
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
- A **cube** is just a rectangular prism with all equal sides, so $V = s^3$.

Now try the final challenge to mix everything together!
    `
      },
      {
        id: 'volume-rect-prism-g6-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Final Challenge** 🎯

These problems mix together every idea from the lesson. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'A cube has a side length of $6\\,cm$. What is its volume?',
              options: ['$18\\,cm^3$', '$36\\,cm^3$', '$216\\,cm^3$', '$120\\,cm^3$'],
              correctAnswer: 2,
              explanation: 'For a cube, $V = s^3 = 6 \\times 6 \\times 6 = 216\\,cm^3$.'
            },
            {
              question: 'A rectangular prism has a volume of $48\\,cm^3$. Its base area is $12\\,cm^2$. What is its height?',
              options: ['$4\\,cm$', '$36\\,cm$', '$6\\,cm$', '$60\\,cm$'],
              correctAnswer: 0,
              explanation: 'Since $V = (\\text{base area}) \\times h$, we work backward: $h = 48 \\div 12 = 4\\,cm$.'
            }
          ]
        }
      }
    ]
  }
]
