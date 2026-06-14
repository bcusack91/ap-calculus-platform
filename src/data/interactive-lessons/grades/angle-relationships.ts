import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'angle-relationships',
    sections: [
      {
        id: 'angle-relationships-p1-intro',
        type: 'text' as const,
        content: `
# 📐 Angle Relationships

**Part 1 of 5 — Concept Introduction**

Angles are everywhere — in the corner of a book, the hands of a clock, and the spot where two roads cross. In this lesson you'll learn how angles **relate** to each other so you can find a missing angle without even using a protractor!

## Quick Review: What Is an Angle?

An **angle** is formed by two **rays** that share a common endpoint called the **vertex**. We measure angles in **degrees** ($°$), and one full turn all the way around is $360°$.

We sort angles by how big they are:

| Type | Measure | Picture in your head |
|------|---------|----------------------|
| **Acute** | less than $90°$ | a sharp, narrow corner |
| **Right** | exactly $90°$ | a perfect square corner |
| **Obtuse** | between $90°$ and $180°$ | a wide, open corner |
| **Straight** | exactly $180°$ | a flat straight line |

Keep these in mind — the relationships below are built right on top of them. ✅
    `
      },
      {
        id: 'angle-relationships-p1-comp-supp',
        type: 'text' as const,
        content: `
## The Two Big "Sum" Relationships

Two of the most useful angle relationships are about angles that **add up to a special number**.

**Complementary angles** are two angles that add up to $90°$.

- $30°$ and $60°$ are complementary because $30 + 60 = 90$.
- $45°$ and $45°$ are complementary because $45 + 45 = 90$.

**Supplementary angles** are two angles that add up to $180°$.

- $120°$ and $60°$ are supplementary because $120 + 60 = 180$.
- $130°$ and $50°$ are supplementary because $130 + 50 = 180$.

**Important:** The two angles do **not** have to be touching! As long as their measures add to $90°$ they are complementary, and as long as they add to $180°$ they are supplementary.

💡 **Memory trick:** **C**omplementary comes before **S**upplementary in the alphabet, just like $90$ comes before $180$ on the number line.
    `
      },
      {
        id: 'angle-relationships-p1-vertical',
        type: 'text' as const,
        content: `
## Adjacent and Vertical Angles

**Adjacent angles** sit side-by-side. They share a common **vertex** and a common **side**, but they do not overlap. (Think of slicing a pizza wedge into two smaller wedges.)

**Vertical angles** appear whenever two straight lines **cross**. The two angles that sit **opposite** each other (across the X) are vertical angles.

**🔑 Key property: Vertical angles are ALWAYS equal!**

When two lines intersect they make $4$ angles. Opposite angles are equal, and angles next to each other form a straight line, so they are supplementary.

**Worked example:** Two lines cross and one angle measures $50°$. The angle **opposite** it is also $50°$ (vertical angles are equal). The two angles **next to** it form straight lines, so each is $180 - 50 = 130°$. ✅
    `
      },
      {
        id: 'angle-relationships-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

You just met four relationships: complementary, supplementary, adjacent, and vertical. Let's check the key idea.
    `,
        exercise: {
          questions: [
            {
              question: 'Two angles add up to $90°$. What are they called?',
              options: [
                'Supplementary angles',
                'Complementary angles',
                'Vertical angles',
                'Straight angles'
              ],
              correctAnswer: 1,
              explanation: 'Complementary angles add up to $90°$. Supplementary angles are the ones that add to $180°$.'
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
    topicSlug: 'angle-relationships',
    sections: [
      {
        id: 'angle-relationships-p2-finding',
        type: 'text' as const,
        content: `
# ✏️ Worked Examples: Finding a Missing Angle

**Part 2 of 5 — Worked Examples**

To find a missing angle, just **subtract from the special total**.

- To find a **complement**, subtract from $90°$.
- To find a **supplement**, subtract from $180°$.

**Example 1 — Complement.** What is the complement of $35°$?

$$90 - 35 = 55$$

So the complement of $35°$ is $\\mathbf{55°}$. ✅ (Check: $35 + 55 = 90$.)

**Example 2 — Supplement.** What is the supplement of $110°$?

$$180 - 110 = 70$$

So the supplement of $110°$ is $\\mathbf{70°}$. ✅ (Check: $110 + 70 = 180$.)
    `
      },
      {
        id: 'angle-relationships-p2-algebra',
        type: 'text' as const,
        content: `
## Using Algebra with Angle Relationships

Sometimes the angles are written with a variable like $x$. Set up an equation using the correct total, then solve.

**Example 3 — Complementary with algebra.** Two complementary angles are $3x$ and $2x$. Find each angle.

**Step 1 — Write the equation (sum is $90$):**
$$3x + 2x = 90$$

**Step 2 — Combine like terms:**
$$5x = 90$$

**Step 3 — Divide both sides by $5$:**
$$x = 18$$

**Step 4 — Plug back in:** $3(18) = 54°$ and $2(18) = 36°$.

The angles are $\\mathbf{54°}$ and $\\mathbf{36°}$. ✅ (Check: $54 + 36 = 90$.)

**Example 4 — Supplementary with algebra.** Two supplementary angles are $x$ and $2x$. Then $x + 2x = 180$, so $3x = 180$ and $x = 60$. The angles are $60°$ and $120°$.
    `
      },
      {
        id: 'angle-relationships-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Solve each one. Type just the number (no $°$ symbol).

1) What is the **complement** of $40°$?  ($90 - 40 = ?$)

2) What is the **supplement** of $75°$?  ($180 - 75 = ?$)

3) Two lines cross. One angle is $65°$. What is its **vertical** angle (the one directly across from it)?
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['50', '105', '65'],
          hint1: 'For a complement subtract from 90. For a supplement subtract from 180.',
          hint2: 'Vertical angles are ALWAYS equal, so the angle across from a 65° angle is also 65°.',
          explanation: 'Complement of 40° is 90 − 40 = 50°. Supplement of 75° is 180 − 75 = 105°. A vertical angle equals its partner, so it is 65°.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'angle-relationships',
    sections: [
      {
        id: 'angle-relationships-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Work through each question. Pick the relationship first, then do the arithmetic.
    `,
        exercise: {
          questions: [
            {
              question: 'Angle $A$ and angle $B$ are supplementary. If angle $A = 130°$, what is angle $B$?',
              options: [
                '$30°$',
                '$50°$',
                '$60°$',
                '$70°$'
              ],
              correctAnswer: 1,
              explanation: 'Supplementary angles add to $180°$, so $B = 180 - 130 = 50°$.'
            },
            {
              question: 'Two lines intersect. One of the four angles measures $115°$. What is the measure of the angle directly **across** from it?',
              options: [
                '$65°$',
                '$25°$',
                '$115°$',
                '$180°$'
              ],
              correctAnswer: 2,
              explanation: 'The angle directly across is a vertical angle, and vertical angles are always equal, so it is $115°$.'
            }
          ]
        }
      },
      {
        id: 'angle-relationships-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Name That Relationship** 🔍

Choose the word that correctly completes each statement.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'Two angles that add up to $180°$ are',
              options: ['complementary', 'supplementary', 'vertical', 'adjacent']
            },
            {
              label: 'Angles that are opposite each other when two lines cross and are always equal are',
              options: ['complementary', 'supplementary', 'vertical', 'adjacent']
            }
          ],
          correctAnswers: ['supplementary', 'vertical'],
          hint1: 'Supplementary angles add to 180°. The "always equal" pair made by crossing lines are vertical angles.',
          explanation: 'Angles that add to $180°$ are supplementary. The equal, opposite pair formed by two intersecting lines are vertical angles.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'angle-relationships',
    sections: [
      {
        id: 'angle-relationships-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Real-World Angles

**Part 4 of 5 — Application & Word Problems**

Angle relationships show up all the time in the real world:

- A **skateboard ramp** leaning against a wall makes a corner with the floor. The ramp angle and the angle above it on the wall are **complementary** (they share a right-angle corner that totals $90°$).
- When you **fold a piece of paper** flat, the angles along the straight crease are **supplementary** because the fold lies on a straight line ($180°$).
- Where two **streets cross** in an X-shape, the angles straight across from each other are **vertical** angles and have equal measures.

**Worked example:** A kite string makes a $58°$ angle with a flagpole. The pole is straight up, forming a $90°$ corner with the ground. The angle between the **string and the ground** plus the $58°$ angle must complete that corner, so it is $90 - 58 = 32°$. The string-and-ground angle is $\\mathbf{32°}$. ✅
    `
      },
      {
        id: 'angle-relationships-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

Type just the number (no $°$ symbol).

1) A door is propped open. The open door and the wall behind it form two **supplementary** angles. If the door makes a $65°$ angle with the wall on one side, what is the angle on the other side? ($180 - 65 = ?$)

2) A ramp meets the floor at a $25°$ angle. The angle between the ramp and a vertical wall is its **complement**. What is that angle? ($90 - 25 = ?$)

3) Two roads cross. One of the angles at the crossing is $72°$. What is the measure of the **vertical** angle across from it?
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['115', '65', '72'],
          hint1: 'Supplements come from 180. Complements come from 90.',
          hint2: 'Vertical angles are equal, so the angle across from 72° is also 72°.',
          explanation: 'Supplement of 65° is 180 − 65 = 115°. Complement of 25° is 90 − 25 = 65°. The vertical angle equals 72°.'
        }
      },
      {
        id: 'angle-relationships-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Apply It** 🎯

Read carefully and choose the best answer.
    `,
        exercise: {
          questions: [
            {
              question: 'Two complementary angles are $5x$ and $4x$. What is the value of $x$?',
              options: [
                '$x = 9$',
                '$x = 10$',
                '$x = 18$',
                '$x = 20$'
              ],
              correctAnswer: 1,
              explanation: 'Complementary angles add to $90°$, so $5x + 4x = 90$, giving $9x = 90$ and $x = 10$.'
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
    topicSlug: 'angle-relationships',
    sections: [
      {
        id: 'angle-relationships-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You've learned four key angle relationships. Here is everything in one place:

| Relationship | What It Means | How to Find a Missing Angle |
|--------------|---------------|------------------------------|
| **Complementary** | two angles add to $90°$ | subtract from $90$ |
| **Supplementary** | two angles add to $180°$ | subtract from $180$ |
| **Adjacent** | side-by-side, share a vertex & side | depends on the figure |
| **Vertical** | opposite angles from crossing lines | they are **equal** |

**Remember:**

- **C**omplementary → **90°** (C comes first, like 90).
- **S**upplementary → **180°**.
- **Vertical** angles are always **equal**.

Now put it all together in the final challenge below. 💪
    `
      },
      {
        id: 'angle-relationships-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Mixed Challenge** 🎯

These questions mix all of today's ideas. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'An angle measures $90°$. What is the measure of its **supplement**?',
              options: [
                '$0°$',
                '$45°$',
                '$90°$',
                '$180°$'
              ],
              correctAnswer: 2,
              explanation: 'A supplement is found by subtracting from $180°$: $180 - 90 = 90°$. So a right angle is its own supplement.'
            },
            {
              question: 'Two lines intersect. One angle is $40°$. Which statement is TRUE about the angle **next to** it (forming a straight line)?',
              options: [
                'It is $40°$ because vertical angles are equal',
                'It is $50°$ because the angles are complementary',
                'It is $140°$ because the two angles are supplementary',
                'It is $320°$ because they add to $360°$'
              ],
              correctAnswer: 2,
              explanation: 'An angle next to the $40°$ angle forms a straight line with it, so the two are supplementary: $180 - 40 = 140°$.'
            }
          ]
        }
      }
    ]
  }
]
