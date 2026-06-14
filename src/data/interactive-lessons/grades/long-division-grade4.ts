import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'long-division-grade4',
    sections: [
      {
        id: 'long-division-grade4-p1-intro',
        type: 'text',
        content: `
# ➗ Long Division

**Part 1 of 5 — What Is Long Division?**

When numbers get too big to divide in your head, we use a neat method called **long division**. It breaks a hard problem into small, easy steps that you repeat over and over.

In a division problem, every number has a name:

- The **dividend** is the number being split up (it goes *inside* the division box).
- The **divisor** is the number you are splitting by (it goes *outside* the box).
- The **quotient** is the answer (it goes *on top* of the box).

For example, in $84 \\div 4 = 21$:

| Part | Number | Where it goes |
| --- | --- | --- |
| Dividend | $84$ | inside the box |
| Divisor | $4$ | outside the box |
| Quotient | $21$ | on top |
        `,
      },
      {
        id: 'long-division-grade4-p1-steps',
        type: 'text',
        content: `
## The Four Steps: D, M, S, B

Long division repeats **four steps** in the same order every time. A fun way to remember them is **DMSB — Dad, Mom, Sister, Brother**:

1. **Divide** — How many times does the divisor go in?
2. **Multiply** — Multiply that answer by the divisor.
3. **Subtract** — Subtract to see what is left.
4. **Bring down** — Bring down the next digit, then start over.

**Worked Example: $84 \\div 4$**

- **Divide:** $8 \\div 4 = 2$. Write **2** on top.
- **Multiply:** $2 \\times 4 = 8$. Write it under the 8.
- **Subtract:** $8 - 8 = 0$.
- **Bring down:** Bring down the **4**, making **04**.
- **Repeat — Divide:** $4 \\div 4 = 1$. Write **1** on top.
- **Multiply & Subtract:** $1 \\times 4 = 4$, and $4 - 4 = 0$.

The quotient on top is **21**, so $84 \\div 4 = 21$. 🎉
        `,
      },
      {
        id: 'long-division-grade4-p1-names',
        type: 'text',
        content: `
## Why the Steps Work

Long division is really just sharing into equal groups, one place value at a time. We start with the **biggest** place (the tens or hundreds) and work toward the **smallest** (the ones).

That is why we always work **left to right** through the dividend — the opposite direction from addition and subtraction!
        `,
      },
      {
        id: 'long-division-grade4-p1-mcq',
        type: 'multiple-choice',
        content: `
**Concept Check** 🎯
        `,
        exercise: {
          questions: [
            {
              question: 'In the problem $96 \\div 3$, which number is the **divisor**?',
              options: ['$96$', '$3$', '$32$', '$9$'],
              correctAnswer: 1,
              explanation: 'The divisor is the number you divide by, and it sits outside the division box. Here that is $3$.',
            },
          ],
        },
      },
    ],
  },

  // ===================================================================
  // PART 2 — Worked Examples
  // ===================================================================
  {
    topicSlug: 'long-division-grade4',
    sections: [
      {
        id: 'long-division-grade4-p2-example1',
        type: 'text',
        content: `
# ✏️ Worked Examples

**Part 2 of 5 — Step by Step**

Let's carefully work through $72 \\div 6$ using **DMSB**.

**Step 1 — Divide:** Can $6$ go into $7$? Yes, once. $7 \\div 6 = 1$. Write **1** on top above the 7.

**Step 2 — Multiply:** $1 \\times 6 = 6$. Write 6 below the 7.

**Step 3 — Subtract:** $7 - 6 = 1$.

**Step 4 — Bring down:** Bring down the **2**, making **12**.

**Repeat — Divide:** $12 \\div 6 = 2$. Write **2** on top.

**Multiply & Subtract:** $2 \\times 6 = 12$, and $12 - 12 = 0$.

The answer is $72 \\div 6 = 12$. ✅
        `,
      },
      {
        id: 'long-division-grade4-p2-example2',
        type: 'text',
        content: `
## A Bigger Example: $156 \\div 4$

| Step | What you do | Running answer |
| --- | --- | --- |
| Divide | $1 \\div 4 = 0$, so look at $15$ instead. $15 \\div 4 = 3$ | $3$ |
| Multiply / Subtract | $3 \\times 4 = 12$; $15 - 12 = 3$ | $3$ |
| Bring down | Bring down the $6$ → **36** | $3$ |
| Divide | $36 \\div 4 = 9$ | $39$ |
| Multiply / Subtract | $9 \\times 4 = 36$; $36 - 36 = 0$ | $39$ |

So $156 \\div 4 = 39$.

**Tip:** If the first digit is smaller than the divisor (like $1 < 4$ above), just include the next digit and divide that bigger chunk.
        `,
      },
      {
        id: 'long-division-grade4-p2-input',
        type: 'input-boxes',
        content: `
**Your Turn** 🧮

Work each one with DMSB and type just the quotient (the answer).

1) $48 \\div 4 = $ ?

2) $90 \\div 3 = $ ?

3) $128 \\div 8 = $ ?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '30', '16'],
          hint1: 'Start with the left digit. For $48 \\div 4$: $4 \\div 4 = 1$, then bring down the 8.',
          hint2: 'Check by multiplying your answer by the divisor — it should give the dividend.',
          explanation: '1) $48 \\div 4 = 12$. 2) $90 \\div 3 = 30$. 3) $128 \\div 8 = 16$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'long-division-grade4',
    sections: [
      {
        id: 'long-division-grade4-p3-mcq',
        type: 'multiple-choice',
        content: `
# 🧭 Guided Practice

**Part 3 of 5 — Practice Together**

Work each problem with DMSB, then choose the correct answer.
        `,
        exercise: {
          questions: [
            {
              question: 'What is $84 \\div 4$?',
              options: ['$19$', '$21$', '$24$', '$22$'],
              correctAnswer: 1,
              explanation: '$8 \\div 4 = 2$, then $4 \\div 4 = 1$, giving $21$. Check: $21 \\times 4 = 84$. ✓',
            },
            {
              question: 'What is $135 \\div 5$?',
              options: ['$25$', '$26$', '$27$', '$28$'],
              correctAnswer: 2,
              explanation: '$13 \\div 5 = 2$ remainder $3$; bring down the 5 to get 35; $35 \\div 5 = 7$. So $135 \\div 5 = 27$. Check: $27 \\times 5 = 135$. ✓',
            },
          ],
        },
      },
      {
        id: 'long-division-grade4-p3-dropdown',
        type: 'dropdown-select',
        content: `
**Name the Steps** 🔤

Fill in the missing parts of the DMSB process for $96 \\div 6$.

- After you **Divide** ($9 \\div 6 = 1$), the next step is to ___.
- The answer to $96 \\div 6$ is ___.
        `,
        exercise: {
          dropdowns: [
            { label: 'Step after Divide', options: ['Multiply', 'Bring down', 'Add'] },
            { label: 'Final answer', options: ['14', '16', '18'] },
          ],
          correctAnswers: ['Multiply', '16'],
          hint1: 'DMSB order: Divide, then Multiply, then Subtract, then Bring down.',
          explanation: 'After Divide comes Multiply. Working it out: $9 \\div 6 = 1$, bring down 6 → 36, $36 \\div 6 = 6$, so $96 \\div 6 = 16$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'long-division-grade4',
    sections: [
      {
        id: 'long-division-grade4-p4-context',
        type: 'text',
        content: `
# 🌍 Word Problems

**Part 4 of 5 — Division in Real Life**

Division helps us **share things equally** or **split things into groups**. The trick is figuring out what is being shared (the dividend) and how many groups or how big each group is (the divisor).

> **Example:** A teacher has **72 crayons** to share equally among **6 tables**. How many crayons does each table get?
>
> This is $72 \\div 6 = 12$. Each table gets **12 crayons**. 🖍️

**Remainders in real life:** Sometimes things don't split evenly. If you have **17 stickers** for **3 friends**, then $17 \\div 3 = 5$ **R** $2$. Each friend gets 5 stickers, and **2 stickers are left over**.
        `,
      },
      {
        id: 'long-division-grade4-p4-input',
        type: 'input-boxes',
        content: `
**Solve Each Problem** 🧮

1) A baker puts **96 muffins** into boxes of **8**. How many full boxes are there?

2) **150 students** ride in buses that hold **5** rows each... actually, they split evenly into **5** buses. How many students per bus?

3) **45 apples** are shared equally among **9** baskets. How many apples in each basket?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '30', '5'],
          hint1: 'Decide what is the dividend (total) and what is the divisor (groups), then divide.',
          hint2: 'Check by multiplying: boxes $\\times$ per-box should equal the total.',
          explanation: '1) $96 \\div 8 = 12$ boxes. 2) $150 \\div 5 = 30$ students. 3) $45 \\div 9 = 5$ apples.',
        },
      },
      {
        id: 'long-division-grade4-p4-mcq',
        type: 'multiple-choice',
        content: `
**Remainder Problem** 🎯
        `,
        exercise: {
          questions: [
            {
              question: 'There are **23 cookies** to share equally among **4 kids**. How many cookies does each kid get, and how many are left over?',
              options: [
                '$5$ each, $3$ left over',
                '$6$ each, $1$ left over',
                '$5$ each, $1$ left over',
                '$4$ each, $7$ left over',
              ],
              correctAnswer: 0,
              explanation: '$23 \\div 4 = 5$ R $3$, because $5 \\times 4 = 20$ and $23 - 20 = 3$. Each kid gets 5, with 3 left over.',
            },
          ],
        },
      },
    ],
  },

  // ===================================================================
  // PART 5 — Review & Challenge
  // ===================================================================
  {
    topicSlug: 'long-division-grade4',
    sections: [
      {
        id: 'long-division-grade4-p5-summary',
        type: 'text',
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Put It All Together**

You learned how to break big division problems into small, repeating steps. Here is your quick reference:

| Step | Name | What you do |
| --- | --- | --- |
| D | **Divide** | How many times does the divisor go in? |
| M | **Multiply** | Multiply that digit by the divisor |
| S | **Subtract** | Subtract to find what is left |
| B | **Bring down** | Bring down the next digit and repeat |

**Don't forget to check!** Multiply your **quotient** by the **divisor** — you should get the **dividend** back.

- $84 \\div 4 = 21$, and $21 \\times 4 = 84$ ✓

If a number is left over at the end, that is the **remainder** ($17 \\div 3 = 5$ R $2$).
        `,
      },
      {
        id: 'long-division-grade4-p5-mcq',
        type: 'multiple-choice',
        content: `
**Mixed Challenge** 🎯

Use everything you know about long division.
        `,
        exercise: {
          questions: [
            {
              question: 'What is $128 \\div 4$?',
              options: ['$24$', '$32$', '$34$', '$42$'],
              correctAnswer: 1,
              explanation: '$12 \\div 4 = 3$, bring down 8 → 8, $8 \\div 4 = 2$, giving $32$. Check: $32 \\times 4 = 128$. ✓',
            },
            {
              question: 'Which multiplication correctly **checks** the answer $76 \\div 4 = 19$?',
              options: [
                '$19 \\times 4 = 76$',
                '$19 + 4 = 23$',
                '$76 \\times 4 = 304$',
                '$4 \\times 4 = 16$',
              ],
              correctAnswer: 0,
              explanation: 'To check a division answer, multiply the quotient by the divisor: $19 \\times 4 = 76$, which matches the dividend. ✓',
            },
          ],
        },
      },
    ],
  },
]
