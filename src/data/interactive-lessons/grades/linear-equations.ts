import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'linear-equations',
    sections: [
      {
        id: 'linear-equations-p1-intro',
        type: 'text' as const,
        content: `
# ⚖️ Linear Equations

**Part 1 of 5 — Concept Introduction**

A **linear equation** is an equation whose variable only ever has an exponent of $1$ — no $x^2$, no $x^3$, and no $x$ hiding in a denominator. When you graph a linear equation in two variables, you always get a perfectly **straight line**, which is exactly where the name *linear* comes from.

In Grade 8 we focus on **solving** linear equations in one variable. *Solving* means finding the single value of $x$ that makes the two sides equal. Think of the equals sign as the middle of a balance scale: whatever you do to one side, you must do to the other to keep it balanced.

## Linear vs. Not Linear

| Equation | Linear? | Why |
|----------|---------|-----|
| $3x + 5 = 11$ | ✅ Yes | $x$ has exponent $1$ |
| $7 - 2x = x + 1$ | ✅ Yes | variables on both sides, all exponent $1$ |
| $x^2 = 9$ | ❌ No | the $x^2$ makes it a parabola |
| $\\frac{6}{x} = 2$ | ❌ No | the variable is in a denominator |

If you can write it without exponents above $1$ and without a variable in the denominator, it is linear.
    `
      },
      {
        id: 'linear-equations-p1-inverse',
        type: 'text' as const,
        content: `
## The Golden Rule of Balance

To solve $x + 4 = 9$, you want $x$ all by itself. Right now $4$ is being **added** to $x$, so you undo it with the **opposite** operation — subtraction:

$$x + 4 - 4 = 9 - 4$$
$$x = 5$$

We subtracted $4$ from **both** sides so the scale stays balanced. These pairs of opposite operations are called **inverse operations**:

- Addition ↔ Subtraction
- Multiplication ↔ Division

**Example:** Solve $3x = 12$. Here $x$ is **multiplied** by $3$, so undo it by **dividing** both sides by $3$:

$$\\frac{3x}{3} = \\frac{12}{3} \\quad\\Rightarrow\\quad x = 4$$

> 💡 **Key idea:** To get a variable alone, undo whatever is happening to it using the inverse operation — and always do it to *both* sides.
    `
      },
      {
        id: 'linear-equations-p1-twosteps',
        type: 'text' as const,
        content: `
## Two-Step Equations

Most equations need **two** moves. The trick is to undo operations in **reverse order** — strip away addition/subtraction first, then multiplication/division.

**Example:** Solve $2x + 3 = 11$.

1. Undo the $+3$ first → subtract $3$ from both sides: $2x = 8$
2. Undo the $\\times 2$ → divide both sides by $2$: $x = 4$

**Check:** Put $x = 4$ back in: $2(4) + 3 = 8 + 3 = 11$. ✅ It works!

Always finish by **checking**: substitute your answer into the original equation and confirm both sides are equal.
    `
      },
      {
        id: 'linear-equations-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you can spot which operation to use.
    `,
        exercise: {
          questions: [
            {
              question: 'To solve $x - 7 = 2$, what should you do to both sides?',
              options: [
                'Add $7$ to both sides',
                'Subtract $7$ from both sides',
                'Multiply both sides by $7$',
                'Divide both sides by $7$'
              ],
              correctAnswer: 0,
              explanation: 'Since $7$ is being subtracted from $x$, you undo it with the inverse operation — addition. Adding $7$ to both sides gives $x = 9$.'
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
    topicSlug: 'linear-equations',
    sections: [
      {
        id: 'linear-equations-p2-worked',
        type: 'text' as const,
        content: `
# 📝 Worked Examples

**Part 2 of 5 — Variables on Both Sides**

When the variable appears on **both** sides of the equals sign, your first job is to **collect all the variable terms on one side** and all the plain numbers on the other. You do this with the same balance rule: subtract a term from both sides to make it disappear from one side.

## Example 1: Solve $5x = 2x + 9$

1. Get the $x$'s together. Subtract $2x$ from **both** sides:
$$5x - 2x = 2x + 9 - 2x \\quad\\Rightarrow\\quad 3x = 9$$
2. Divide both sides by $3$:
$$x = 3$$
3. **Check:** $5(3) = 15$ and $2(3) + 9 = 15$. ✅ Both sides equal $15$.

## Example 2: Solve $4x + 1 = 2x + 7$

1. Subtract $2x$ from both sides to gather the variables on the left:
$$2x + 1 = 7$$
2. Subtract $1$ from both sides to gather the numbers on the right:
$$2x = 6$$
3. Divide both sides by $2$:
$$x = 3$$
4. **Check:** $4(3) + 1 = 13$ and $2(3) + 7 = 13$. ✅

**Strategy reminder:** move the *smaller* variable term to keep your coefficient positive — it makes the arithmetic easier.
    `
      },
      {
        id: 'linear-equations-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** 🧮

Solve the equation $6x + 2 = 4x + 10$ one step at a time.

1) After subtracting $4x$ from both sides, what number is the new coefficient of $x$? (For example, if you get $2x$, type **2**.)

2) After also subtracting $2$ from both sides, what number is left on the right side? (You should have *(your coefficient)*$x = $ that number.)

3) Finally, what is the value of $x$?
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '8', '4'],
          hint1: 'Subtract $4x$ from both sides: $6x - 4x = 2x$, so the left becomes $2x + 2$ and the right becomes $10$.',
          hint2: 'From $2x + 2 = 10$, subtract $2$ to get $2x = 8$, then divide by $2$.',
          explanation: 'Subtracting $4x$ gives $2x + 2 = 10$ (coefficient $2$). Subtracting $2$ gives $2x = 8$. Dividing by $2$ gives $x = 4$. Check: $6(4)+2 = 26$ and $4(4)+10 = 26$. ✅'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'linear-equations',
    sections: [
      {
        id: 'linear-equations-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Guided Practice**

Work each equation carefully. Remember: collect the variables on one side, the numbers on the other, then divide.
    `,
        exercise: {
          questions: [
            {
              question: 'Solve $7x - 4 = 3x + 8$. What is $x$?',
              options: [
                '$x = 3$',
                '$x = 4$',
                '$x = 2$',
                '$x = 12$'
              ],
              correctAnswer: 0,
              explanation: 'Subtract $3x$: $4x - 4 = 8$. Add $4$: $4x = 12$. Divide by $4$: $x = 3$. Check: $7(3)-4 = 17$ and $3(3)+8 = 17$. ✅'
            },
            {
              question: 'Solve $2(x + 3) = x + 10$. (Distribute first!) What is $x$?',
              options: [
                '$x = 4$',
                '$x = 6$',
                '$x = 3$',
                '$x = 16$'
              ],
              correctAnswer: 0,
              explanation: 'Distribute: $2x + 6 = x + 10$. Subtract $x$: $x + 6 = 10$. Subtract $6$: $x = 4$. Check: $2(4+3) = 14$ and $4 + 10 = 14$. ✅'
            }
          ]
        }
      },
      {
        id: 'linear-equations-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Choose the Right Move** 🔍

You are solving $9x + 5 = 4x + 25$. Pick the correct step at each stage.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'To collect the variables on the left, first',
              options: [
                'subtract $4x$ from both sides',
                'add $4x$ to both sides',
                'subtract $9x$ from both sides',
                'divide both sides by $9$'
              ]
            },
            {
              label: 'After that you have $5x + 5 = 25$. To finish, subtract $5$ and then',
              options: [
                'divide both sides by $5$',
                'multiply both sides by $5$',
                'subtract $5$ again',
                'add $5x$ to both sides'
              ]
            }
          ],
          correctAnswers: ['subtract $4x$ from both sides', 'divide both sides by $5$'],
          hint1: 'Move the smaller variable term ($4x$) so the coefficient stays positive, then isolate $x$ by dividing by its coefficient.',
          explanation: 'Subtracting $4x$ gives $5x + 5 = 25$. Subtracting $5$ gives $5x = 20$, and dividing both sides by $5$ gives $x = 4$. ✅'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'linear-equations',
    sections: [
      {
        id: 'linear-equations-p4-text',
        type: 'text' as const,
        content: `
# 🌍 Application & Word Problems

**Part 4 of 5 — Linear Equations in Real Life**

Equations with variables on both sides show up whenever you compare **two plans** and ask, *"When are they equal?"*

## The Two Gyms Problem 🏋️

**Gym A** charges a \\$20 sign-up fee plus \\$10 per month. **Gym B** charges no sign-up fee but \\$15 per month. After how many months do they cost the *same*?

Let $x$ = number of months. Write the cost of each gym:

- Gym A: $10x + 20$
- Gym B: $15x$

Set them equal because we want the costs to match:

$$10x + 20 = 15x$$

Now solve. Subtract $10x$ from both sides: $20 = 5x$. Divide by $5$: $x = 4$.

**Answer:** After **4 months** both gyms cost the same — \\$60 each. The variable-on-both-sides equation came straight from a real decision!
    `
      },
      {
        id: 'linear-equations-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** 🧮

Two taxi companies are competing for your ride:

- **Yellow Cab:** \\$5 base fare plus \\$2 per mile → cost $= 2x + 5$
- **Blue Cab:** \\$3 per mile, no base fare → cost $= 3x$

You want to know after how many miles the two cabs cost the same, so set $2x + 5 = 3x$.

1) After subtracting $2x$ from both sides, what number equals $x$ (the number of miles where the costs match)?

2) What is the total cost of **either** cab at that number of miles? (In dollars, type a single number.)

3) For a $10$-mile trip, which is cheaper — type **2** for Yellow Cab's cost $2(10)+5$ or **3** for Blue Cab's cost $3(10)$, whichever is the *smaller* total. (Type the smaller of the two totals as a single number.)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '15', '25'],
          hint1: 'From $2x + 5 = 3x$, subtract $2x$ to get $5 = x$, so the costs match at $5$ miles.',
          hint2: 'At $5$ miles, Blue Cab costs $3(5) = 15$, which equals Yellow Cab $2(5)+5 = 15$. For $10$ miles, compare $2(10)+5 = 25$ with $3(10) = 30$.',
          explanation: 'Subtracting $2x$ gives $5 = x$, so they match at $5$ miles, where both cost $3(5) = 15$ dollars. At $10$ miles Yellow Cab is $2(10)+5 = 25$ and Blue Cab is $3(10) = 30$, so the cheaper (smaller) total is $25$.'
        }
      },
      {
        id: 'linear-equations-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Word Problem Check** 📋
    `,
        exercise: {
          questions: [
            {
              question: 'A candle that is $12$ cm tall burns down $2$ cm per hour, so its height is $12 - 2x$. A second candle is $8$ cm tall and burns $1$ cm per hour, height $8 - x$. After how many hours are the candles the same height? (Solve $12 - 2x = 8 - x$.)',
              options: [
                '$4$ hours',
                '$2$ hours',
                '$6$ hours',
                '$20$ hours'
              ],
              correctAnswer: 0,
              explanation: 'Add $2x$ to both sides: $12 = 8 + x$. Subtract $8$: $x = 4$. After $4$ hours both candles are $4$ cm tall. ✅'
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
    topicSlug: 'linear-equations',
    sections: [
      {
        id: 'linear-equations-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You can now solve any one-variable linear equation — even when the variable is on both sides. Here is the complete game plan:

| Step | What to do | Example |
|------|-----------|---------|
| 1️⃣ Simplify | Distribute and combine like terms | $2(x+1) \\to 2x + 2$ |
| 2️⃣ Gather variables | Subtract a variable term from both sides | $5x = 2x + 9 \\to 3x = 9$ |
| 3️⃣ Gather numbers | Add/subtract to move constants | $2x + 1 = 7 \\to 2x = 6$ |
| 4️⃣ Isolate $x$ | Divide by the coefficient | $3x = 9 \\to x = 3$ |
| 5️⃣ Check | Substitute back into the original | $5(3) = 2(3)+9$ ✅ |

> 💡 **Special cases:** If the variables cancel and you get a *true* statement like $5 = 5$, there are **infinitely many solutions**. If you get a *false* statement like $5 = 8$, there is **no solution**.
    `
      },
      {
        id: 'linear-equations-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Challenge Round** 🎯

Mix everything you have learned. Take your time and check each answer.
    `,
        exercise: {
          questions: [
            {
              question: 'Solve $3(2x - 1) = 4x + 7$. What is $x$?',
              options: [
                '$x = 5$',
                '$x = 4$',
                '$x = 2$',
                '$x = 10$'
              ],
              correctAnswer: 0,
              explanation: 'Distribute: $6x - 3 = 4x + 7$. Subtract $4x$: $2x - 3 = 7$. Add $3$: $2x = 10$. Divide by $2$: $x = 5$. Check: $3(2 \\cdot 5 - 1) = 27$ and $4(5)+7 = 27$. ✅'
            },
            {
              question: 'Which equation has **no solution**?',
              options: [
                '$2x + 5 = 2x + 9$',
                '$2x + 5 = 3x + 9$',
                '$2x + 5 = 2x + 5$',
                '$2x + 5 = x + 9$'
              ],
              correctAnswer: 0,
              explanation: 'In $2x + 5 = 2x + 9$, subtracting $2x$ from both sides leaves $5 = 9$, which is false — so there is no value of $x$ that works. No solution.'
            }
          ]
        }
      }
    ]
  }
]
