import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'division-with-remainders',
    sections: [
      {
        id: 'dwr-p1-intro',
        type: 'text' as const,
        content: `
# 🍪 Division with Remainders

**Part 1 of 5 — Concept Introduction**

Sometimes when we share things into equal groups, it works out perfectly. Other times... there's a little bit **left over**.

That "left over" amount has a special name: the **remainder**.

## What is a Remainder?

A **remainder** is the amount that is left when a number cannot be split into equal groups evenly.

Imagine you have **13 cookies** and you want to make groups of **4**:

- You can make **3 groups of 4** because $3 \\times 4 = 12$
- That uses 12 cookies, but you started with 13
- So **1 cookie** is left over — that's the remainder!

We write this as:

$$13 \\div 4 = 3 \\; R1$$

The little **R** stands for **R**emainder. We read it as *"3 remainder 1."*
        `
      },
      {
        id: 'dwr-p1-parts',
        type: 'text' as const,
        content: `
## The Parts of a Division Problem 🧩

Every division problem with a remainder has these parts. Let's use $13 \\div 4 = 3 \\; R1$ as our example:

| Part | Meaning | In our example |
|------|---------|----------------|
| **Dividend** | The number being divided | $13$ |
| **Divisor** | The size of each group | $4$ |
| **Quotient** | How many full groups | $3$ |
| **Remainder** | What is left over | $1$ |

**The golden rule of remainders:**

> The remainder is **always smaller** than the divisor.

Why? Because if the remainder were as big as the divisor, you could make **one more group**! For example, if you had a "remainder" of 4 when dividing by 4, you could form another group of 4. So the leftover must be $0, 1, 2,$ or $3$ when dividing by 4.
        `
      },
      {
        id: 'dwr-p1-worked',
        type: 'text' as const,
        content: `
## A Worked Example 🌟

**Sharing 17 cookies among 5 friends:** $17 \\div 5$

- **Step 1:** How many groups of 5 fit into 17?
  - $5 \\times 3 = 15$ ✅ (this fits!)
  - $5 \\times 4 = 20$ ❌ (too big — we only have 17)
  - So each friend gets **3** cookies.
- **Step 2:** Multiply: $3 \\times 5 = 15$ cookies are handed out.
- **Step 3:** Subtract: $17 - 15 = 2$ cookies are **left over**.

$$17 \\div 5 = 3 \\; R2$$

Each friend gets **3 cookies**, and **2 cookies** are left in the jar.
        `
      },
      {
        id: 'dwr-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
## Concept Check 🎯

Let's make sure the big idea is clear.
        `,
        exercise: {
          questions: [
            {
              question: "You have 11 marbles and put them into bags of 3. You can fill 3 full bags ($3 \\times 3 = 9$). How many marbles are left over (the remainder)?",
              options: ['1', '2', '3', '0'],
              correctAnswer: 1,
              explanation: "You used 9 marbles in 3 full bags, and $11 - 9 = 2$ marbles are left over. So $11 \\div 3 = 3 \\; R2$."
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 2 — Worked Examples
  // ===================================================================
  {
    topicSlug: 'division-with-remainders',
    sections: [
      {
        id: 'dwr-p2-intro',
        type: 'text' as const,
        content: `
# ✏️ Finding Remainders Step by Step

**Part 2 of 5 — Worked Examples**

Let's learn a reliable 3-step method you can use for **any** division-with-remainder problem.

## The 3-Step Method

**Example:** $23 \\div 5$

- **Step 1 — Estimate:** How many 5s fit into 23?
  - $5 \\times 4 = 20$ ✅ (fits)
  - $5 \\times 5 = 25$ ❌ (too big)
  - The quotient is **4**.
- **Step 2 — Multiply:** $4 \\times 5 = 20$
- **Step 3 — Subtract:** $23 - 20 = 3$

$$23 \\div 5 = 4 \\; R3$$

✅ Check the golden rule: the remainder $3$ is smaller than the divisor $5$.
        `
      },
      {
        id: 'dwr-p2-longdiv',
        type: 'text' as const,
        content: `
## The Same Idea with Long Division 📏

**Example:** $47 \\div 6$

\`\`\`
      7 R5
    ------
  6 | 47
      42     (6 × 7 = 42)
     ----
       5     (47 − 42 = 5)
\`\`\`

**Walking through it:**

1. How many 6s fit into 47? → **7**, because $6 \\times 7 = 42$. (And $6 \\times 8 = 48$, which is too big.)
2. Write **7** on top.
3. Multiply: $7 \\times 6 = 42$.
4. Subtract: $47 - 42 = 5$.
5. The leftover **5** is the remainder.

$$47 \\div 6 = 7 \\; R5 \\; ✅$$

Notice the remainder $5$ is smaller than the divisor $6$ — perfect.
        `
      },
      {
        id: 'dwr-p2-input',
        type: 'input-boxes' as const,
        content: `
## Your Turn 🧮

Use the 3-step method (estimate, multiply, subtract) to solve these. Type just the **number** for each answer.

1) Solve $19 \\div 4$. The **quotient** is ?

2) For that same problem $19 \\div 4$, the **remainder** is ?

3) Solve $25 \\div 6$. The **remainder** is ?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '3', '1'],
          hint1: 'For 19 ÷ 4: $4 \\times 4 = 16$ fits, but $4 \\times 5 = 20$ is too big. So the quotient is 4.',
          hint2: 'Subtract to find each remainder: $19 - 16 = 3$, and for 25 ÷ 6, $25 - 24 = 1$.',
          explanation: '1) $19 \\div 4 = 4\\;R3$, so the quotient is 4. 2) The remainder is 3. 3) $25 \\div 6 = 4\\;R1$, so the remainder is 1.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'division-with-remainders',
    sections: [
      {
        id: 'dwr-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Work through each one carefully. Remember: estimate, multiply, subtract — and the remainder must be smaller than the divisor.
        `,
        exercise: {
          questions: [
            {
              question: "What is $37 \\div 5$?",
              options: ['$7 \\; R2$', '$6 \\; R7$', '$8 \\; R3$', '$7 \\; R3$'],
              correctAnswer: 0,
              explanation: "$5 \\times 7 = 35$ fits, and $37 - 35 = 2$. So $37 \\div 5 = 7 \\; R2$. The remainder 2 is smaller than 5. ✅"
            },
            {
              question: "What is $58 \\div 7$?",
              options: ['$7 \\; R9$', '$8 \\; R2$', '$8 \\; R3$', '$9 \\; R1$'],
              correctAnswer: 1,
              explanation: "$7 \\times 8 = 56$ fits, and $58 - 56 = 2$. So $58 \\div 7 = 8 \\; R2$."
            }
          ]
        }
      },
      {
        id: 'dwr-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
## Checking with the Golden Rule 🔍

The remainder must **always be smaller than the divisor**. Use that rule to spot the correct facts below.
        `,
        exercise: {
          dropdowns: [
            {
              label: 'When you divide any number by 4, the largest remainder you could ever have is',
              options: ['3', '4', '5', '0']
            },
            {
              label: 'For $43 \\div 9$, the answer is',
              options: ['$4 \\; R7$', '$5 \\; R2$', '$4 \\; R9$', '$3 \\; R16$']
            }
          ],
          correctAnswers: ['3', '$4 \\; R7$'],
          hint1: 'The remainder must be smaller than the divisor, so dividing by 4 gives a remainder of 0, 1, 2, or 3.',
          explanation: 'Dividing by 4 can leave at most 3. For $43 \\div 9$: $9 \\times 4 = 36$ fits and $43 - 36 = 7$, so $43 \\div 9 = 4 \\; R7$.'
        }
      }
    ]
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'division-with-remainders',
    sections: [
      {
        id: 'dwr-p4-text',
        type: 'text' as const,
        content: `
# 🚗 Remainders in the Real World

**Part 4 of 5 — Application & Word Problems**

In real life, the remainder doesn't always mean the same thing. What you do with it depends on the **question**! Here are the four most common situations:

| Situation | What to do | Example |
|-----------|------------|---------|
| Can't use a partial item | **Drop** the remainder | "How many full 6-packs from 50 cans?" → $50 \\div 6 = 8\\;R2$ → **8 packs** |
| Everyone needs a spot | **Round up** | "Cars for 23 people, 5 per car?" → $23 \\div 5 = 4\\;R3$ → **5 cars** |
| The leftovers ARE the answer | **Use the remainder** | "17 pencils, 5 per friend, how many left?" → $17 \\div 5 = 3\\;R2$ → **2 pencils** |

**The key question to ask yourself:** *"Does this problem want the groups, or the leftovers?"*

> 💡 With **rounding up**, even a small remainder means you need one more — because those extra people still need a ride!
        `
      },
      {
        id: 'dwr-p4-input',
        type: 'input-boxes' as const,
        content: `
## Word Problem Workshop 🧮

You have **38 stickers** and you put **5 stickers** on each page of your album.

1) Solve $38 \\div 5$. How many pages get **completely filled**? (the quotient)

2) How many stickers are **left over** after filling those pages? (the remainder)

3) A car holds **5** people. If **23** people need a ride, how many cars are needed? (Remember to round up!)
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['7', '3', '5'],
          hint1: 'For the stickers: $5 \\times 7 = 35$ fits into 38, and $38 - 35 = 3$.',
          hint2: 'For the cars: $23 \\div 5 = 4\\;R3$. Those 3 extra people still need a ride, so round UP from 4 to 5.',
          explanation: '1) $38 \\div 5 = 7\\;R3$, so 7 full pages. 2) 3 stickers are left over. 3) $23 \\div 5 = 4\\;R3$; rounding up means 5 cars are needed.'
        }
      },
      {
        id: 'dwr-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
## Choose Wisely 🤔

Read carefully — what does the question really want?
        `,
        exercise: {
          questions: [
            {
              question: "A baker puts cupcakes into boxes that hold 4 cupcakes each. She has 26 cupcakes. How many **completely full boxes** can she make?",
              options: ['7 boxes', '6 boxes', '5 boxes', '8 boxes'],
              correctAnswer: 1,
              explanation: "$26 \\div 4 = 6 \\; R2$. She fills 6 full boxes; the 2 extra cupcakes don't make a full box, so we drop the remainder. Answer: 6 boxes."
            }
          ]
        }
      }
    ]
  },

  // ===================================================================
  // PART 5 — Review & Challenge
  // ===================================================================
  {
    topicSlug: 'division-with-remainders',
    sections: [
      {
        id: 'dwr-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You've learned how to find remainders, check them, and decide what to do with them. Here's everything in one place:

## Quick Summary Table

| Idea | What it means |
|------|---------------|
| **Remainder** | The amount left over when groups aren't even |
| **Golden rule** | The remainder is always smaller than the divisor |
| **3-step method** | Estimate → Multiply → Subtract |
| **Checking** | $(\\text{quotient} \\times \\text{divisor}) + \\text{remainder} = \\text{dividend}$ |
| **Drop it** | When a partial item can't be used |
| **Round up** | When everyone/everything still needs a spot |

**Example of checking:** Is $23 \\div 5 = 4 \\; R3$ correct?

- Multiply: $4 \\times 5 = 20$
- Add the remainder: $20 + 3 = 23$ ✅
- It matches the dividend — correct!

Now show what you know on the challenge below. 💪
        `
      },
      {
        id: 'dwr-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
## Final Challenge 🎯

Mix everything together — solving, checking, and interpreting remainders.
        `,
        exercise: {
          questions: [
            {
              question: "Which check correctly proves that $29 \\div 6 = 4 \\; R5$?",
              options: [
                '$4 \\times 6 + 5 = 29$ ✅',
                '$4 \\times 5 + 6 = 26$',
                '$6 \\times 5 + 4 = 34$',
                '$29 \\times 6 + 5 = 179$'
              ],
              correctAnswer: 0,
              explanation: "To check, multiply quotient × divisor, then add the remainder: $4 \\times 6 + 5 = 24 + 5 = 29$. It equals the dividend, so the answer is correct. ✅"
            },
            {
              question: "A teacher has 30 students going on a trip. Each van holds 7 students. What is the **smallest number of vans** needed so that every student has a seat?",
              options: ['4 vans', '5 vans', '6 vans', '7 vans'],
              correctAnswer: 1,
              explanation: "$30 \\div 7 = 4 \\; R2$. Four vans carry 28 students, but 2 students are still left, so you must round up to 5 vans."
            }
          ]
        }
      }
    ]
  }
]
