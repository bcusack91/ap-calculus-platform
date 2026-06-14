import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'distance-formula',
    sections: [
      {
        id: 'distance-formula-p1-intro',
        type: 'text' as const,
        content: `
# 📏 The Distance Formula

**Part 1 of 5 — Concept Introduction**

How far apart are two points on a coordinate plane? You could try to measure with a ruler, but that is slow and never exact. The **distance formula** gives you the precise straight-line distance between any two points, every single time.

The best part? You already know where it comes from — the **Pythagorean Theorem**!

## The Formula

Given two points $(x_1, y_1)$ and $(x_2, y_2)$, the distance $d$ between them is:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

In plain English: **subtract the x's, subtract the y's, square each difference, add them up, then take the square root.**
    `
      },
      {
        id: 'distance-formula-p1-origin',
        type: 'text' as const,
        content: `
## Where Does It Come From? 🔺

Picture two points on a graph. Connect them with a straight line — that line is the **hypotenuse** of a right triangle. The two legs run perfectly horizontal and vertical.

| Part of the triangle | What it represents | Length |
|----------------------|--------------------|--------|
| **Horizontal leg** | Difference in x-values | $\\|x_2 - x_1\\|$ |
| **Vertical leg** | Difference in y-values | $\\|y_2 - y_1\\|$ |
| **Hypotenuse** | The distance we want | $d$ |

The Pythagorean Theorem says $\\text{leg}^2 + \\text{leg}^2 = \\text{hypotenuse}^2$, so:

$$d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$

Take the square root of both sides and you get the distance formula:

$$d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

> 💡 **Why squaring saves us:** Even if a difference comes out negative, squaring it makes it positive — so the order you subtract in does not change the answer.
    `
      },
      {
        id: 'distance-formula-p1-example',
        type: 'text' as const,
        content: `
## A First Worked Example

Find the distance between $(1, 2)$ and $(4, 6)$.

**Step 1 — Label the points.**
$(x_1, y_1) = (1, 2)$ and $(x_2, y_2) = (4, 6)$.

**Step 2 — Plug into the formula.**
$$d = \\sqrt{(4 - 1)^2 + (6 - 2)^2}$$

**Step 3 — Simplify inside.**
$$d = \\sqrt{(3)^2 + (4)^2} = \\sqrt{9 + 16}$$

**Step 4 — Add, then take the square root.**
$$d = \\sqrt{25} = 5$$

**Answer: $5$ units.** Notice this is the famous $3$-$4$-$5$ right triangle hiding in the coordinate plane!
    `
      },
      {
        id: 'distance-formula-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you understand what the distance formula is built from.
    `,
        exercise: {
          questions: [
            {
              question: 'The distance formula is really a rearranged version of which famous theorem?',
              options: [
                'The Pythagorean Theorem',
                'The Triangle Sum Theorem',
                'The Midpoint Theorem',
                'The Slope Formula'
              ],
              correctAnswer: 0,
              explanation: 'The straight-line distance is the hypotenuse of a right triangle whose legs are the horizontal and vertical differences, so $d^2 = (x_2-x_1)^2 + (y_2-y_1)^2$ comes straight from the Pythagorean Theorem.'
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
    topicSlug: 'distance-formula',
    sections: [
      {
        id: 'distance-formula-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Step by Step**

The same four steps work every time. Watch what happens when the numbers are not so friendly.

## Example: Distance Between $(-2, 3)$ and $(4, -1)$

**Step 1 — Label.** $(x_1, y_1) = (-2, 3)$ and $(x_2, y_2) = (4, -1)$.

**Step 2 — Substitute.** Be careful subtracting negatives!
$$d = \\sqrt{(4 - (-2))^2 + (-1 - 3)^2}$$

**Step 3 — Simplify the subtractions.**
$$d = \\sqrt{(4 + 2)^2 + (-4)^2} = \\sqrt{(6)^2 + (-4)^2}$$

**Step 4 — Square, add, and take the root.**
$$d = \\sqrt{36 + 16} = \\sqrt{52}$$

**Step 5 — Simplify the radical.** Since $52 = 4 \\times 13$:
$$d = \\sqrt{4 \\times 13} = 2\\sqrt{13} \\approx 7.21$$

**Answer: $2\\sqrt{13}$ units (about $7.21$ units).**

> 💡 Subtracting a negative is the same as **adding**: $4 - (-2) = 4 + 2 = 6$.
    `
      },
      {
        id: 'distance-formula-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Find the distance between $(0, 0)$ and $(6, 8)$.

1) What is the **horizontal difference** $(x_2 - x_1)$? (Type a single number.)

2) What is the **vertical difference** $(y_2 - y_1)$? (Type a single number.)

3) What is the final **distance** $d = \\sqrt{6^2 + 8^2}$? (Type a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '8', '10'],
          hint1: 'Horizontal difference is $6 - 0$ and vertical difference is $8 - 0$.',
          hint2: 'Square each difference: $6^2 = 36$ and $8^2 = 64$. Then add and take the square root of the total.',
          explanation: 'The differences are $6$ and $8$. Then $d = \\sqrt{36 + 64} = \\sqrt{100} = 10$. This is a $6$-$8$-$10$ triangle, which is just a doubled $3$-$4$-$5$ triangle.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'distance-formula',
    sections: [
      {
        id: 'distance-formula-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Work each one carefully. Watch the signs and remember to square before you add.
    `,
        exercise: {
          questions: [
            {
              question: 'What is the distance between $(2, 1)$ and $(2, 8)$?',
              options: [
                '$7$ units',
                '$9$ units',
                '$10$ units',
                '$\\sqrt{7}$ units'
              ],
              correctAnswer: 0,
              explanation: 'The x-coordinates are the same, so this is a vertical distance: $d = \\|8 - 1\\| = 7$. The formula gives $\\sqrt{0 + 49} = 7$.'
            },
            {
              question: 'What is the distance between $(0, 0)$ and $(5, 12)$?',
              options: [
                '$13$ units',
                '$17$ units',
                '$\\sqrt{17}$ units',
                '$7$ units'
              ],
              correctAnswer: 0,
              explanation: 'Using distance from the origin, $d = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13$. This is a $5$-$12$-$13$ triangle.'
            }
          ]
        }
      },
      {
        id: 'distance-formula-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

Complete the work for finding the distance between $(1, 3)$ and $(7, 3)$.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'Since both points have the same y-coordinate, the vertical leg has length',
              options: ['0', '3', '6', '7']
            },
            {
              label: 'So the distance equals the horizontal difference $\\|7 - 1\\|$, which is',
              options: ['6', '8', '4', '10']
            }
          ],
          correctAnswers: ['0', '6'],
          hint1: 'When the y-values match, $y_2 - y_1 = 0$, so the only distance is horizontal.',
          explanation: 'Both points have $y = 3$, so the vertical leg is $0$. The distance is just $\\|7 - 1\\| = 6$ units — a horizontal segment.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'distance-formula',
    sections: [
      {
        id: 'distance-formula-p4-context',
        type: 'text' as const,
        content: `
# 🗺️ Real-World Applications

**Part 4 of 5 — Word Problems**

The distance formula is not just for math class — it powers maps, video games, and GPS systems!

## City Map Example

Mia's town is laid out on a grid where each unit is one **city block**. Her house is at $(2, 1)$ and the library is at $(5, 5)$. How many blocks is the straight-line ("as the crow flies") distance?

**Set it up:**
$$d = \\sqrt{(5 - 2)^2 + (5 - 1)^2}$$

**Simplify:**
$$d = \\sqrt{(3)^2 + (4)^2} = \\sqrt{9 + 16} = \\sqrt{25} = 5$$

So the library is **$5$ blocks** away in a straight line. A bird could fly there in 5 blocks, even though Mia might have to walk farther along the streets!
    `
      },
      {
        id: 'distance-formula-p4-input',
        type: 'input-boxes' as const,
        content: `
**Treasure Hunt** 🏴‍☠️

On a treasure map, the palm tree is at $(-1, -2)$ and the buried chest is at $(2, 2)$. Each unit is one step.

1) What is the **horizontal difference** $(x_2 - x_1) = 2 - (-1)$? (Type a single number.)

2) What is the **vertical difference** $(y_2 - y_1) = 2 - (-2)$? (Type a single number.)

3) How many **steps** is the chest from the tree, $d = \\sqrt{3^2 + 4^2}$? (Type a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '4', '5'],
          hint1: 'Subtracting a negative adds: $2 - (-1) = 2 + 1$ and $2 - (-2) = 2 + 2$.',
          hint2: 'Square the differences ($3^2 = 9$, $4^2 = 16$), add them, then take the square root.',
          explanation: 'The differences are $3$ and $4$, so $d = \\sqrt{9 + 16} = \\sqrt{25} = 5$ steps. Another $3$-$4$-$5$ triangle!'
        }
      },
      {
        id: 'distance-formula-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Application Check** 🎮

In a video game, a player is at point $(0, 0)$ and a coin is at $(8, 6)$.
    `,
        exercise: {
          questions: [
            {
              question: 'How far must the player travel in a straight line to reach the coin at $(8, 6)$?',
              options: [
                '$10$ units',
                '$14$ units',
                '$\\sqrt{14}$ units',
                '$48$ units'
              ],
              correctAnswer: 0,
              explanation: 'Using distance from the origin, $d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ units.'
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
    topicSlug: 'distance-formula',
    sections: [
      {
        id: 'distance-formula-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You have mastered the distance formula! Here is a quick reference summary.

## Summary Table

| Situation | Shortcut | Example |
|-----------|----------|---------|
| **General case** | $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$ | $(1,2)$ to $(4,6)$ → $5$ |
| **Same y (horizontal)** | $d = \\|x_2 - x_1\\|$ | $(1,3)$ to $(7,3)$ → $6$ |
| **Same x (vertical)** | $d = \\|y_2 - y_1\\|$ | $(2,1)$ to $(2,8)$ → $7$ |
| **From the origin** | $d = \\sqrt{x^2 + y^2}$ | $(0,0)$ to $(5,12)$ → $13$ |

## Key Reminders

- **Subtract, square, add, root** — in that order.
- Squaring erases negatives, so the **order of subtraction does not matter**.
- Watch out for **subtracting negatives**: $a - (-b) = a + b$.
- Look for **special triangles** like $3$-$4$-$5$ and $5$-$12$-$13$ to check your work fast.
    `
      },
      {
        id: 'distance-formula-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🚀

Mix everything together. Take your time on the signs.
    `,
        exercise: {
          questions: [
            {
              question: 'What is the distance between $(-5, -2)$ and $(3, 4)$?',
              options: [
                '$10$ units',
                '$14$ units',
                '$\\sqrt{14}$ units',
                '$8$ units'
              ],
              correctAnswer: 0,
              explanation: 'The differences are $3 - (-5) = 8$ and $4 - (-2) = 6$, so $d = \\sqrt{8^2 + 6^2} = \\sqrt{64 + 36} = \\sqrt{100} = 10$ units.'
            },
            {
              question: 'A point on the graph is exactly $\\sqrt{52} = 2\\sqrt{13}$ units away. Which pair of points produces this distance?',
              options: [
                '$(-2, 3)$ and $(4, -1)$',
                '$(0, 0)$ and $(3, 4)$',
                '$(1, 1)$ and $(4, 5)$',
                '$(2, 2)$ and $(5, 6)$'
              ],
              correctAnswer: 0,
              explanation: 'For $(-2,3)$ and $(4,-1)$: $d = \\sqrt{(6)^2 + (-4)^2} = \\sqrt{36 + 16} = \\sqrt{52} = 2\\sqrt{13}$. The other pairs all give $\\sqrt{25} = 5$.'
            }
          ]
        }
      }
    ]
  }
]
