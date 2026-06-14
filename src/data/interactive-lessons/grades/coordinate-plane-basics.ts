import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'coordinate-plane-basics',
    sections: [
      {
        id: 'coordinate-plane-basics-p1-intro',
        type: 'text' as const,
        content: `
# 📍 The Coordinate Plane

**Part 1 of 5 — Concept Introduction**

Imagine you want to tell a friend exactly where to find a hidden treasure on a map. You could say "go 3 steps right and 2 steps up." That is exactly how the **coordinate plane** works!

The coordinate plane (also called the **Cartesian plane**) is made of two number lines that cross each other. Together they form a grid that lets us name the **exact location** of any point using just two numbers.

## The Two Number Lines (Axes)

| Axis | Direction | Goes... | Positive side | Negative side |
|------|-----------|---------|---------------|---------------|
| **x-axis** | Horizontal ↔ | Left and right | Right of center | Left of center |
| **y-axis** | Vertical ↕ | Up and down | Up from center | Down from center |

Think of the **x-axis** as the *floor* and the **y-axis** as the *wall*. Where they cross is your starting spot.
    `
      },
      {
        id: 'coordinate-plane-basics-p1-origin',
        type: 'text' as const,
        content: `
## The Origin 🏠

The point where the x-axis and y-axis meet is called the **origin**. The origin is like "home base" — it is where every trip across the coordinate plane begins.

The origin always has the coordinates $(0, 0)$, because you have not moved left, right, up, or down yet.

## Ordered Pairs

We name a location using an **ordered pair**. It looks like this:

$$(x, y)$$

- The **first number** is the **x-coordinate** (how far left or right).
- The **second number** is the **y-coordinate** (how far up or down).

**The order matters!** Always write **x first, then y**.

> 💡 **Memory trick:** "x comes before y, just like in the alphabet!"

For example, the point $(3, 5)$ means: move **3 units right**, then **5 units up**.
    `
      },
      {
        id: 'coordinate-plane-basics-p1-example',
        type: 'text' as const,
        content: `
## A Worked Example

Let's read the point $(4, 2)$ together.

- The first number is $4$. Since it is positive, move **4 units to the right** along the x-axis.
- The second number is $2$. Since it is positive, move **2 units up** from there.
- Mark the spot — that is the point $(4, 2)$!

Now look at the point $(0, 6)$.

- The x-coordinate is $0$, so you **do not move left or right** at all.
- The y-coordinate is $6$, so you move **6 units up**.
- This point sits right **on the y-axis**, because its x-value is $0$.

**Big idea:** the first number always tells you the *side-to-side* move, and the second number always tells you the *up-and-down* move.
    `
      },
      {
        id: 'coordinate-plane-basics-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you remember the order of the numbers in an ordered pair.
    `,
        exercise: {
          questions: [
            {
              question: 'In the ordered pair $(7, 2)$, which number tells you how far to move **right**?',
              options: [
                'The $7$, because it is the x-coordinate (written first)',
                'The $2$, because it is the x-coordinate',
                'Both numbers tell you to move right',
                'Neither number — you always move up first'
              ],
              correctAnswer: 0,
              explanation: 'The x-coordinate is written first and controls left/right movement. Here $7$ is the x-coordinate, so you move 7 units to the right.'
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
    topicSlug: 'coordinate-plane-basics',
    sections: [
      {
        id: 'coordinate-plane-basics-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Plotting Points Step by Step**

Follow the same four steps every time you plot a point:

1. **Start** at the origin $(0, 0)$.
2. Look at the **x-coordinate** → move right (positive) or left (negative).
3. Look at the **y-coordinate** → move up (positive) or down (negative).
4. **Mark** the point where you land.

## Example 1: Plot $(5, 3)$

- **Start** at the origin $(0, 0)$.
- **x-coordinate is $5$** (positive) → move **5 units right**.
- **y-coordinate is $3$** (positive) → move **3 units up**.
- **Mark** the point. Done! ✅

## Example 2: Plot $(-3, 1)$

- **Start** at the origin $(0, 0)$.
- **x-coordinate is $-3$** (negative) → move **3 units left**.
- **y-coordinate is $1$** (positive) → move **1 unit up**.
- **Mark** the point. ✅

Notice how the **sign** of each number decides the direction. A negative x means *left*; a negative y means *down*.
    `
      },
      {
        id: 'coordinate-plane-basics-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

A point is described like this: *"Start at the origin, move 6 units to the right, then move 4 units up."*

1) What is the **x-coordinate** of this point? (Type a single number.)

2) What is the **y-coordinate** of this point? (Type a single number.)

3) The x-coordinate of the **origin** is always... (Type a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '0'],
          hint1: 'The x-coordinate is the left/right move, and the y-coordinate is the up/down move.',
          hint2: 'The origin is "home base" where both axes cross — you have not moved at all yet.',
          explanation: 'Moving 6 right gives an x-coordinate of 6, and moving 4 up gives a y-coordinate of 4, so the point is $(6, 4)$. The origin is always $(0, 0)$, so its x-coordinate is 0.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'coordinate-plane-basics',
    sections: [
      {
        id: 'coordinate-plane-basics-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Read each ordered pair carefully and think about the direction of each move.
    `,
        exercise: {
          questions: [
            {
              question: 'To plot the point $(2, -5)$, which moves do you make from the origin?',
              options: [
                'Move 2 units right, then 5 units down',
                'Move 2 units left, then 5 units up',
                'Move 5 units right, then 2 units down',
                'Move 2 units up, then 5 units right'
              ],
              correctAnswer: 0,
              explanation: 'The x-coordinate $2$ is positive, so move right. The y-coordinate $-5$ is negative, so move down.'
            },
            {
              question: 'A point has the coordinates $(0, 4)$. Where does it sit?',
              options: [
                'Right on the y-axis',
                'Right on the x-axis',
                'At the origin',
                '4 units to the right of the origin'
              ],
              correctAnswer: 0,
              explanation: 'When the x-coordinate is $0$, you do not move left or right, so the point lands directly on the vertical y-axis.'
            }
          ]
        }
      },
      {
        id: 'coordinate-plane-basics-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Directions** 🔍

Complete the sentences that describe how to plot the point $(-4, 3)$.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'Because the x-coordinate is $-4$, you move 4 units to the',
              options: ['left', 'right', 'up', 'down']
            },
            {
              label: 'Because the y-coordinate is $3$, you move 3 units',
              options: ['up', 'down', 'left', 'right']
            }
          ],
          correctAnswers: ['left', 'up'],
          hint1: 'A negative x-coordinate means move left; a positive y-coordinate means move up.',
          explanation: 'The x-coordinate $-4$ is negative, so you move 4 units left. The y-coordinate $3$ is positive, so you move 3 units up.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'coordinate-plane-basics',
    sections: [
      {
        id: 'coordinate-plane-basics-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Coordinate Plane**

The coordinate plane is not just for math class — it shows up everywhere! Video games, treasure maps, seating charts, and even GPS apps use ordered pairs to find locations.

## City Grid Example 🗺️

Imagine a city where every street is laid out on a grid. The town hall sits at the origin $(0, 0)$.

To get to the **library**, you walk **5 blocks east** (right) and **2 blocks north** (up). On a coordinate plane, *east* is positive x and *north* is positive y. So the library is at:

$$(5, 2)$$

To get to the **park**, you walk **3 blocks west** (left) and **4 blocks north** (up). *West* is negative x, so the park is at:

$$(-3, 4)$$

By turning directions into ordered pairs, you can find any location on the grid using just two numbers!
    `
      },
      {
        id: 'coordinate-plane-basics-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

In the same city grid (town hall at the origin), the **school** is **2 blocks west** and **6 blocks south** of the town hall. West is negative x, and south is negative y.

1) What is the **x-coordinate** of the school? (Type a single number, including the sign.)

2) What is the **y-coordinate** of the school? (Type a single number, including the sign.)

3) The town hall is at the origin. What is its **y-coordinate**? (Type a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['-2', '-6', '0'],
          hint1: 'West means move left, which gives a negative x. South means move down, which gives a negative y.',
          hint2: 'Two blocks west is $x = -2$ and six blocks south is $y = -6$. The origin is $(0, 0)$.',
          explanation: '2 blocks west makes the x-coordinate $-2$, and 6 blocks south makes the y-coordinate $-6$, so the school is at $(-2, -6)$. The town hall sits at the origin $(0, 0)$, so its y-coordinate is 0.'
        }
      },
      {
        id: 'coordinate-plane-basics-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'In a video game, a coin is hidden at $(7, 0)$. Starting from the origin, how do you reach it?',
              options: [
                'Move 7 units right and do not move up or down',
                'Move 7 units up and do not move left or right',
                'Move 7 units left and 7 units up',
                'Stay at the origin — it is already there'
              ],
              correctAnswer: 0,
              explanation: 'The x-coordinate $7$ means move 7 units right, and the y-coordinate $0$ means no vertical movement, so the coin sits on the x-axis.'
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
    topicSlug: 'coordinate-plane-basics',
    sections: [
      {
        id: 'coordinate-plane-basics-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You made it! Here is everything you learned about the coordinate plane, all in one place.

## Quick Summary Table

| Term | What It Means | Key Fact |
|------|---------------|----------|
| **x-axis** | Horizontal number line | Right is positive, left is negative |
| **y-axis** | Vertical number line | Up is positive, down is negative |
| **Origin** | Where the axes cross | Always $(0, 0)$ |
| **Ordered pair** | A point's location | Written $(x, y)$ — **x first!** |

**Remember:**
- The **x-coordinate** comes first and controls **left/right** movement.
- The **y-coordinate** comes second and controls **up/down** movement.
- A **positive** number moves right or up; a **negative** number moves left or down.
- The plane is split into **four quadrants** (I, II, III, IV) that go **counterclockwise** starting from the top right.

Now try these mixed challenge problems!
    `
      },
      {
        id: 'coordinate-plane-basics-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

These mix everything together. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'Which ordered pair means "move 3 units left and 6 units up" from the origin?',
              options: ['$(-3, 6)$', '$(3, 6)$', '$(6, -3)$', '$(-6, 3)$'],
              correctAnswer: 0,
              explanation: 'Moving left makes the x-coordinate negative ($-3$), and moving up makes the y-coordinate positive ($6$), giving $(-3, 6)$.'
            },
            {
              question: 'In Quadrant I (the top-right section), what is true about the coordinates of a point?',
              options: [
                'Both x and y are positive, like $(3, 4)$',
                'Both x and y are negative, like $(-3, -4)$',
                'x is negative and y is positive',
                'x is positive and y is negative'
              ],
              correctAnswer: 0,
              explanation: 'Quadrant I is to the right of the y-axis and above the x-axis, so both coordinates are positive, for example $(3, 4)$.'
            }
          ]
        }
      }
    ]
  }
]
