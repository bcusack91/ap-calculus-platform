import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'understanding-integers-grade6',
    sections: [
      {
        id: 'understanding-integers-grade6-p1-intro',
        type: 'text' as const,
        content: `
# 🌡️ Understanding Integers

**Part 1 of 5 — Concept Introduction**

Have you ever seen a temperature like $-10°$ on a freezing winter morning? Or heard that a submarine dove to $-200$ feet below sea level? Those numbers with a little "minus" in front are part of a special set of numbers called **integers**.

**Integers** are the whole numbers, their **opposites**, and **zero**:

$$..., -3, -2, -1, 0, 1, 2, 3, ...$$

The three little dots ($...$) mean the list keeps going forever in both directions!

## The Three Kinds of Integers

| Type | Examples | Where it lives |
|------|----------|----------------|
| **Positive integers** | $1, 2, 3, 4, ...$ | To the **right** of zero |
| **Negative integers** | $-1, -2, -3, -4, ...$ | To the **left** of zero |
| **Zero** | $0$ | Right in the **middle** |

> 💡 **Important:** Zero is special — it is **neither positive nor negative**. It is the dividing line between the two!

Notice that fractions and decimals like $\\frac{1}{2}$ or $2.5$ are **not** integers. Integers are only whole numbers and their opposites.
    `
      },
      {
        id: 'understanding-integers-grade6-p1-numberline',
        type: 'text' as const,
        content: `
## The Number Line 📏

The easiest way to picture integers is on a **number line**:

$$\\longleftarrow \\;\\; -5 \\;\\; -4 \\;\\; -3 \\;\\; -2 \\;\\; -1 \\;\\; 0 \\;\\; 1 \\;\\; 2 \\;\\; 3 \\;\\; 4 \\;\\; 5 \\;\\; \\longrightarrow$$

The number line follows two simple rules:

- As you move **right**, the numbers get **bigger** (increase).
- As you move **left**, the numbers get **smaller** (decrease).

## Opposites ↔️

Every integer has an **opposite** — the number that is the **same distance** from zero but on the **other side**.

- The opposite of $3$ is $-3$.
- The opposite of $-7$ is $7$.
- The opposite of $0$ is just $0$ itself.

Think of opposites as a mirror image, with zero acting as the mirror!
    `
      },
      {
        id: 'understanding-integers-grade6-p1-realworld',
        type: 'text' as const,
        content: `
## Why Integers Matter 🌍

Negative numbers help us describe things that go **below** a starting point. Here are some real places you see them:

- **Temperature:** $-10°$ means 10 degrees **below** zero (brrr! ❄️).
- **Elevation:** $-50$ feet means 50 feet **below** sea level.
- **Money:** $-20$, i.e. owing \\$20, means you **owe** \\$20 (a debt).

In each case, the **positive** version means the opposite direction: $+10°$ is above zero, $+50$ feet is above sea level, and $+20$, i.e. having \\$20, means you **have** \\$20.

So integers let us talk about both directions — up and down, above and below, having and owing — all with one set of numbers.
    `
      },
      {
        id: 'understanding-integers-grade6-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Let's make sure the basics are clear before moving on.
    `,
        exercise: {
          questions: [
            {
              question: 'Which statement about the number $0$ is true?',
              options: [
                'Zero is neither positive nor negative',
                'Zero is the smallest positive integer',
                'Zero is the largest negative integer',
                'Zero is not an integer at all'
              ],
              correctAnswer: 0,
              explanation: 'Zero sits exactly in the middle of the number line and is the dividing line between positive and negative numbers, so it is neither positive nor negative.'
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
    topicSlug: 'understanding-integers-grade6',
    sections: [
      {
        id: 'understanding-integers-grade6-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Absolute Value Step by Step**

The **absolute value** of a number is its **distance from zero** on the number line. Distance is never negative, so absolute value is **always positive (or zero)**.

We write absolute value with two straight bars: $|\\;\\;|$.

## Example 1: Find $|-5|$

- Picture $-5$ on the number line. It sits **5 steps to the left** of zero.
- Distance is just *how far*, not *which direction*.
- So $|-5| = 5$. ✅

## Example 2: Find $|5|$

- The number $5$ sits **5 steps to the right** of zero.
- That is also a distance of $5$.
- So $|5| = 5$. ✅

> 💡 **Big idea:** A number and its opposite have the **same** absolute value, because they are the same distance from zero. Both $-5$ and $5$ are $5$ units away.

## Example 3: Find $|0|$

Zero is $0$ steps away from itself, so $|0| = 0$.
    `
      },
      {
        id: 'understanding-integers-grade6-p2-worked2',
        type: 'text' as const,
        content: `
## Putting It Together

Let's read this number line and answer a few quick questions.

$$\\longleftarrow \\;\\; -4 \\;\\; -3 \\;\\; -2 \\;\\; -1 \\;\\; 0 \\;\\; 1 \\;\\; 2 \\;\\; 3 \\;\\; 4 \\;\\; \\longrightarrow$$

- **What is the opposite of $-3$?** Go the same distance on the other side of zero → $3$.
- **What is $|-4|$?** The number $-4$ is $4$ units from zero → $4$.
- **What is $|2|$?** The number $2$ is $2$ units from zero → $2$.

Now it is your turn to try a few!
    `
      },
      {
        id: 'understanding-integers-grade6-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Use what you learned about opposites and absolute value. Type a single number for each answer.

1) What is $|-8|$?

2) What is the **opposite** of $6$? (Include the sign.)

3) What is $|7|$?
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '-6', '7'],
          hint1: 'Absolute value is the distance from zero, and distance is always positive.',
          hint2: 'The opposite of a positive number is the same number with a minus sign in front.',
          explanation: 'The number $-8$ is 8 units from zero, so $|-8| = 8$. The opposite of $6$ is $-6$ (same distance, other side of zero). The number $7$ is 7 units from zero, so $|7| = 7$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'understanding-integers-grade6',
    sections: [
      {
        id: 'understanding-integers-grade6-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Comparing Integers**

Remember the golden rule: on a number line, the number **farther to the right is greater**, and the number **farther to the left is less**.
    `,
        exercise: {
          questions: [
            {
              question: 'Which symbol makes this true:  $-1 \\;\\square\\; -4$ ?',
              options: [
                '$>$ (greater than), because $-1$ is to the right of $-4$',
                '$<$ (less than), because $-1$ is to the left of $-4$',
                '$=$ (equal to), because both are negative',
                'None of these work'
              ],
              correctAnswer: 0,
              explanation: 'On the number line $-1$ sits to the right of $-4$, and numbers to the right are greater, so $-1 > -4$.'
            },
            {
              question: 'Which of these integers is the **smallest**?',
              options: [
                '$-6$',
                '$-2$',
                '$0$',
                '$3$'
              ],
              correctAnswer: 0,
              explanation: 'The smallest number is the one farthest to the left on the number line. $-6$ is farther left than $-2$, $0$, and $3$, so it is the smallest.'
            }
          ]
        }
      },
      {
        id: 'understanding-integers-grade6-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Comparison** 🔍

Choose the correct word to complete each sentence about the number line.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'Because $5$ is to the right of $-3$, the number $5$ is',
              options: ['greater than', 'less than', 'equal to']
            },
            {
              label: 'Because $-2$ is to the left of $0$, the number $-2$ is',
              options: ['less than', 'greater than', 'equal to']
            }
          ],
          correctAnswers: ['greater than', 'less than'],
          hint1: 'Right means greater; left means less. Compare each number to the other one.',
          explanation: 'Numbers to the right are greater, so $5 > -3$ ($5$ is greater than $-3$). Numbers to the left are less, so $-2 < 0$ ($-2$ is less than $0$).'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'understanding-integers-grade6',
    sections: [
      {
        id: 'understanding-integers-grade6-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Integers in the Real World**

Integers show up all around you. The trick to word problems is deciding which direction is **positive** and which is **negative**.

| Situation | Positive ($+$) means | Negative ($-$) means |
|-----------|----------------------|----------------------|
| **Temperature** | Above zero | Below zero |
| **Elevation** | Above sea level | Below sea level |
| **Money** | You have / earn | You owe / spend |
| **Football** | Yards gained | Yards lost |

## Example 🏔️

A hiker starts at sea level ($0$ feet). She climbs to $+300$ feet, then a diver goes down to $-150$ feet in a nearby lake.

- The hiker's elevation $+300$ is **above** sea level.
- The diver's elevation $-150$ is **below** sea level.
- Since $+300$ is to the **right** of $-150$ on a number line, the hiker is higher: $300 > -150$.

Once you label the directions, comparing integers tells you who is higher, colder, or richer!
    `
      },
      {
        id: 'understanding-integers-grade6-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

On a freezing morning, a thermometer reads **8 degrees below zero**. By noon it has warmed up, and a bank account shows a debt (money owed) of **\\$15**.

Type a single number for each answer, including a minus sign when needed.

1) Write the morning temperature as an integer.

2) Write the bank account debt of \\$15 as an integer.

3) What is the absolute value of that temperature, $|-8|$? (This tells how many degrees below zero it is.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['-8', '-15', '8'],
          hint1: 'Below zero and owing money are both negative, so they need a minus sign.',
          hint2: 'Absolute value is the distance from zero, so it is always positive.',
          explanation: '8 degrees below zero is $-8$, and owing \\$15 is $-15$. The absolute value $|-8| = 8$ because $-8$ is 8 units from zero.'
        }
      },
      {
        id: 'understanding-integers-grade6-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'Two cities report their temperatures: City A is $-3°$ and City B is $-9°$. Which city is **warmer**?',
              options: [
                'City A, because $-3 > -9$ (it is farther right on the number line)',
                'City B, because $-9 > -3$',
                'They are the same temperature',
                'You cannot compare negative temperatures'
              ],
              correctAnswer: 0,
              explanation: 'A warmer temperature is the greater number. Since $-3$ is to the right of $-9$ on the number line, $-3 > -9$, so City A is warmer.'
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
    topicSlug: 'understanding-integers-grade6',
    sections: [
      {
        id: 'understanding-integers-grade6-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You have learned a lot about integers! Here is a quick summary of the big ideas:

| Idea | What it means | Example |
|------|---------------|---------|
| **Integers** | Whole numbers, their opposites, and zero | $..., -2, -1, 0, 1, 2, ...$ |
| **Positive** | To the right of zero | $1, 2, 3, ...$ |
| **Negative** | To the left of zero | $-1, -2, -3, ...$ |
| **Zero** | Neither positive nor negative | $0$ |
| **Opposites** | Same distance from zero, other side | $5$ and $-5$ |
| **Comparing** | Right $=$ greater, left $=$ less | $-1 > -4$ |
| **Absolute value** | Distance from zero (always $\\ge 0$) | $|-7| = 7$ |

> 💡 **Remember:** When comparing two negative numbers, the one **closer to zero** is the **greater** number. For example, $-2 > -8$.

Now take on the challenge questions below to show what you know!
    `
      },
      {
        id: 'understanding-integers-grade6-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Questions** 🎯

These mix together everything from this lesson. Take your time!
    `,
        exercise: {
          questions: [
            {
              question: 'Which list is correctly ordered from **least to greatest**?',
              options: [
                '$-7, \\; -2, \\; 0, \\; 4$',
                '$0, \\; -2, \\; 4, \\; -7$',
                '$4, \\; 0, \\; -2, \\; -7$',
                '$-2, \\; -7, \\; 0, \\; 4$'
              ],
              correctAnswer: 0,
              explanation: 'Least to greatest means left to right on the number line: $-7$ is farthest left, then $-2$, then $0$, then $4$. So $-7, -2, 0, 4$ is correct.'
            },
            {
              question: 'Which statement is **true**?',
              options: [
                '$|-6| = 6$ and $-6 < -1$',
                '$|-6| = -6$ and $-6 > -1$',
                '$|-6| = 6$ and $-6 > -1$',
                '$|-6| = -6$ and $-6 < -1$'
              ],
              correctAnswer: 0,
              explanation: 'Absolute value is always positive, so $|-6| = 6$. On the number line $-6$ is to the left of $-1$, so $-6 < -1$. Only the first option has both facts correct.'
            }
          ]
        }
      }
    ]
  }
]
