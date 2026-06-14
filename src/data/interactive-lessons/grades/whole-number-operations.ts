import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'whole-number-operations',
    sections: [
      {
        id: 'whole-number-operations-p1-intro',
        type: 'text' as const,
        content: `
# ➕ Whole Number Operations

**Part 1 of 5 — Concept Introduction**

**Whole numbers** are the numbers $0, 1, 2, 3, 4, 5,$ and so on. They are the **counting numbers** plus **zero**. There are no fractions, no decimals, and no negative numbers in this group — just clean, complete numbers.

In this lesson you will master the **four basic operations** you use every day:

- **Addition** $(+)$ — putting amounts together
- **Subtraction** $(-)$ — taking away or finding a difference
- **Multiplication** $(\\times)$ — fast repeated addition of equal groups
- **Division** $(\\div)$ — splitting into equal parts

By the end you will know not just *how* to compute, but *which* operation to choose in a real situation.
    `
      },
      {
        id: 'whole-number-operations-p1-four-ops',
        type: 'text' as const,
        content: `
## The Four Operations at a Glance 🔢

| Operation | Symbol | What it does | Example |
|-----------|:------:|--------------|---------|
| Addition | $+$ | Combines numbers into a total | $456 + 789 = 1{,}245$ |
| Subtraction | $-$ | Finds the difference between numbers | $1{,}000 - 347 = 653$ |
| Multiplication | $\\times$ | Adds equal groups quickly | $24 \\times 15 = 360$ |
| Division | $\\div$ | Splits a number into equal parts | $144 \\div 12 = 12$ |

**Two helpful pairs of "opposites":**

- Addition and subtraction **undo** each other. Since $653 + 347 = 1{,}000$, we know $1{,}000 - 347 = 653$.
- Multiplication and division **undo** each other. Since $12 \\times 12 = 144$, we know $144 \\div 12 = 12$.

These inverse relationships let you **check your work**: redo the problem with the opposite operation and you should land back where you started.
    `
      },
      {
        id: 'whole-number-operations-p1-properties',
        type: 'text' as const,
        content: `
## Properties That Make Math Easier 🧠

Some operations follow special rules called **properties**.

- **Commutative Property** (for $+$ and $\\times$): **order doesn't matter.**
  - $5 + 3 = 3 + 5 = 8$
  - $4 \\times 6 = 6 \\times 4 = 24$
- **Associative Property** (for $+$ and $\\times$): **grouping doesn't matter.**
  - $(2 + 3) + 4 = 2 + (3 + 4) = 9$

**Watch out:** subtraction and division are **not** commutative! $8 - 3$ is $5$, but $3 - 8$ is **not** $5$. Order really matters for those two.

## Order of Operations — PEMDAS

When several operations appear in one expression, follow **PEMDAS**:

1. **P**arentheses
2. **E**xponents
3. **M**ultiplication and **D**ivision (left to right)
4. **A**ddition and **S**ubtraction (left to right)

For example, $2 + 3 \\times 4 = 2 + 12 = 14$ — you multiply *before* you add.
    `
      },
      {
        id: 'whole-number-operations-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Which property is being used below?
    `,
        exercise: {
          questions: [
            {
              question: 'The statement $7 \\times 9 = 9 \\times 7$ is an example of which property?',
              options: [
                'Commutative Property (order doesn\'t matter)',
                'Associative Property (grouping doesn\'t matter)',
                'Order of Operations (PEMDAS)',
                'Subtraction Property'
              ],
              correctAnswer: 0,
              explanation: 'The two factors $7$ and $9$ swapped places but the product stays the same. Changing the order without changing the result is the Commutative Property.'
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
    topicSlug: 'whole-number-operations',
    sections: [
      {
        id: 'whole-number-operations-p2-worked1',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Worked Examples**

Let's slow down and work through one problem of each type, step by step.

## Example 1: Addition with Regrouping → $456 + 789$

Line up the place values and add right to left, **carrying** when a column is $10$ or more.

- **Ones:** $6 + 9 = 15$ → write $5$, carry $1$
- **Tens:** $5 + 8 = 13$, plus the carried $1$ is $14$ → write $4$, carry $1$
- **Hundreds:** $4 + 7 = 11$, plus the carried $1$ is $12$ → write $12$

$$456 + 789 = 1{,}245$$

## Example 2: Subtraction with Borrowing → $1{,}000 - 347$

Subtract right to left, **borrowing** when the top digit is too small.

$$1{,}000 - 347 = 653$$

**Check it:** $653 + 347 = 1{,}000$ ✅. The inverse operation confirms the answer.
    `
      },
      {
        id: 'whole-number-operations-p2-worked2',
        type: 'text' as const,
        content: `
## Example 3: Multiplication → $24 \\times 15$

Break the second factor apart: $15 = 10 + 5$.

- $24 \\times 10 = 240$
- $24 \\times 5 = 120$
- Add the partial products: $240 + 120 = 360$

$$24 \\times 15 = 360$$

## Example 4: Division → $144 \\div 12$

Ask: *"$12$ times what equals $144$?"*

Because $12 \\times 12 = 144$, the answer is:

$$144 \\div 12 = 12$$

**Check it:** $12 \\times 12 = 144$ ✅. Multiplication undoes the division. 🎉
    `
      },
      {
        id: 'whole-number-operations-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Compute each one and type the whole number into the box.

1) **Add:** $327 + 596$

2) **Subtract:** $800 - 245$

3) **Multiply:** $32 \\times 14$
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['923', '555', '448'],
          hint1: 'Line up the place values. When a column reaches 10 or more, carry; when the top digit is too small, borrow.',
          hint2: 'For $32 \\times 14$, split it: $32 \\times 10 = 320$ and $32 \\times 4 = 128$, then add.',
          explanation: '$327 + 596 = 923$. $800 - 245 = 555$. For the product, $32 \\times 10 = 320$ and $32 \\times 4 = 128$, so $320 + 128 = 448$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'whole-number-operations',
    sections: [
      {
        id: 'whole-number-operations-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Work each problem carefully. Remember to use **PEMDAS** when more than one operation appears.
    `,
        exercise: {
          questions: [
            {
              question: 'What is $6 + 4 \\times 5$?',
              options: ['$26$', '$50$', '$30$', '$20$'],
              correctAnswer: 0,
              explanation: 'By PEMDAS, multiply first: $4 \\times 5 = 20$. Then add: $6 + 20 = 26$.'
            },
            {
              question: 'What is $1{,}500 \\div 25$?',
              options: ['$60$', '$50$', '$600$', '$75$'],
              correctAnswer: 0,
              explanation: 'Since $25 \\times 60 = 1{,}500$, we get $1{,}500 \\div 25 = 60$.'
            }
          ]
        }
      },
      {
        id: 'whole-number-operations-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Fill In the Steps** 🔍

Evaluate the expression $(8 + 2) \\times 3$ using the order of operations.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'First, do the work inside the parentheses: $8 + 2 =$',
              options: ['$10$', '$16$', '$6$', '$24$']
            },
            {
              label: 'Then multiply by 3: $10 \\times 3 =$',
              options: ['$30$', '$13$', '$103$', '$33$']
            }
          ],
          correctAnswers: ['$10$', '$30$'],
          hint1: 'PEMDAS says Parentheses come first, so add $8 + 2$ before you multiply.',
          explanation: 'Parentheses first: $8 + 2 = 10$. Then multiply: $10 \\times 3 = 30$, so $(8 + 2) \\times 3 = 30$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'whole-number-operations',
    sections: [
      {
        id: 'whole-number-operations-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Real-World Problems**

The hardest part of a word problem is choosing the **right operation**. Use these clues:

| If the problem asks you to... | Use this operation |
|-------------------------------|--------------------|
| Combine amounts / find a total | Addition $(+)$ |
| Take away / find how many are left / compare | Subtraction $(-)$ |
| Find the total of **equal groups** | Multiplication $(\\times)$ |
| **Split** evenly / share into equal parts | Division $(\\div)$ |

## Field Trip Example 🚌

A school is taking $156$ students on a field trip. Each bus holds $40$ students. **How many full buses can they fill, and how many students are left over?**

This is a division problem: $156 \\div 40$.

- $40 \\times 3 = 120$ and $40 \\times 4 = 160$ (too big).
- So **3 full buses**, using $120$ students.
- Left over: $156 - 120 = 36$ students still need a ride (a 4th bus!).
    `
      },
      {
        id: 'whole-number-operations-p4-input',
        type: 'input-boxes' as const,
        content: `
**Solve the Word Problem** 🧮

A bakery sells muffins in boxes of $6$. On Monday they bake $18$ boxes.

1) **How many muffins did they bake in total?** (Multiply boxes by muffins per box.)

2) On Tuesday they baked $90$ muffins. **How many muffins did they bake over the two days?** (Add the two days.)

3) If $48$ of the Monday muffins were sold, **how many Monday muffins were left?** (Subtract from your answer to question 1.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['108', '198', '60'],
          hint1: 'Total muffins on Monday $= 18 \\times 6$. "In total over two days" means add the two daily amounts.',
          hint2: 'Monday total is $108$. Add $90$ for the two-day total. Subtract $48$ sold from $108$ to find what was left.',
          explanation: 'Monday: $18 \\times 6 = 108$ muffins. Two-day total: $108 + 90 = 198$. Left from Monday: $108 - 48 = 60$.'
        }
      },
      {
        id: 'whole-number-operations-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Choose the Operation** 🤔
    `,
        exercise: {
          questions: [
            {
              question: 'A theater has $625$ seats. If $389$ seats are taken, which operation finds how many seats are **empty**, and what is the answer?',
              options: [
                'Subtraction: $625 - 389 = 236$',
                'Addition: $625 + 389 = 1{,}014$',
                'Multiplication: $625 \\times 389$',
                'Division: $625 \\div 389$'
              ],
              correctAnswer: 0,
              explanation: 'Finding how many are left (empty) means taking away the taken seats, so subtract: $625 - 389 = 236$.'
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
    topicSlug: 'whole-number-operations',
    sections: [
      {
        id: 'whole-number-operations-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Review & Challenge**

You've mastered all four operations and the rules that organize them. Here is the big picture:

| Idea | Key Point | Example |
|------|-----------|---------|
| Addition | Combine to a total | $456 + 789 = 1{,}245$ |
| Subtraction | Find the difference | $1{,}000 - 347 = 653$ |
| Multiplication | Total of equal groups | $24 \\times 15 = 360$ |
| Division | Split into equal parts | $144 \\div 12 = 12$ |
| Commutative | Order doesn't matter $(+, \\times)$ | $5 + 3 = 3 + 5$ |
| Associative | Grouping doesn't matter $(+, \\times)$ | $(2+3)+4 = 2+(3+4)$ |
| PEMDAS | The order to evaluate | $2 + 3 \\times 4 = 14$ |

**Remember:** multiplication and division come *before* addition and subtraction, and you always work parentheses first. Time for the final challenge! 🚀
    `
      },
      {
        id: 'whole-number-operations-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Final Challenge** 🎓

Mix everything you've learned. Take your time with each one.
    `,
        exercise: {
          questions: [
            {
              question: 'Evaluate $3 \\times (12 - 4) + 6$ using the order of operations.',
              options: ['$30$', '$42$', '$18$', '$54$'],
              correctAnswer: 0,
              explanation: 'Parentheses first: $12 - 4 = 8$. Then multiply: $3 \\times 8 = 24$. Finally add: $24 + 6 = 30$.'
            },
            {
              question: 'A store orders $36$ cases of water with $24$ bottles in each case. How many bottles is that in total?',
              options: ['$864$', '$60$', '$12$', '$540$'],
              correctAnswer: 0,
              explanation: 'Equal groups mean multiply: $36 \\times 24 = 864$ bottles. ($36 \\times 20 = 720$ and $36 \\times 4 = 144$, and $720 + 144 = 864$.)'
            }
          ]
        }
      }
    ]
  }
]
