import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'multi-digit-multiplication',
    sections: [
      {
        id: 'mdm-p1-intro',
        type: 'text',
        content: `
# ✖️ Multi-Digit Multiplication

When numbers get bigger, you cannot always solve them in your head. Instead, you use a step-by-step method called the **standard algorithm**. It breaks one big problem into a few small, easy multiplication facts.

## The Big Idea

Multiplication is just a fast way of adding equal groups.

- $4 \\times 23$ means "**4 groups of 23**."
- Instead of adding $23 + 23 + 23 + 23$, you multiply.

The secret to large numbers is to multiply **one digit at a time**, always working from **right to left**, and to **carry** when a product is 10 or more.

## Place Value Is Your Friend

Every digit lives in a column: **ones**, **tens**, **hundreds**. Keeping digits lined up in their columns is what makes the algorithm work.

| Hundreds | Tens | Ones |
|:--------:|:----:|:----:|
|          |  2   |  3   |

The $2$ is really **2 tens** (20) and the $3$ is **3 ones**. We multiply each part and put it back together.
        `,
      },
      {
        id: 'mdm-p1-onedigit',
        type: 'text',
        content: `
## Multiplying by One Digit

Let's multiply $23 \\times 4$.

**Step 1 — Multiply the ones.**
$3 \\times 4 = 12$. That is too big for one column, so **write the 2** and **carry the 1** to the tens.

**Step 2 — Multiply the tens.**
$2 \\times 4 = 8$, then **add the carried 1**: $8 + 1 = 9$. Write the 9.

**Step 3 — Read the answer.**
$$23 \\times 4 = 92$$

### Why carrying works
$3 \\times 4 = 12$ is **1 ten and 2 ones**. The 2 ones stay in the ones column, and the 1 ten *moves over* to wait with the other tens. That carried 1 is what we add in Step 2.
        `,
      },
      {
        id: 'mdm-p1-twodigit',
        type: 'text',
        content: `
## Multiplying by Two Digits

When the bottom number has **two digits**, you multiply **twice** and then **add**.

Example: $34 \\times 26$

1. **Multiply by the ones digit (6):** $34 \\times 6 = 204$
2. **Multiply by the tens digit (2):** $34 \\times 2 = 68$. Because the 2 means **20**, you **shift one place left**, so it becomes $680$.
3. **Add the two partial products:** $204 + 680 = 884$

So $34 \\times 26 = 884$. The little 0 you write when shifting is a placeholder that keeps your columns honest.
        `,
      },
      {
        id: 'mdm-p1-check',
        type: 'multiple-choice',
        content: `
## Concept Check 🎯

Make sure the core idea makes sense before we practice.
        `,
        exercise: {
          questions: [
            {
              question: "When you multiply $27 \\times 3$, the ones step gives $7 \\times 3 = 21$. What should you do?",
              options: [
                "Write 1 and carry 2 to the tens column",
                "Write 21 in the ones column",
                "Write 2 and carry 1 to the tens column",
                "Skip the ones and start with the tens",
              ],
              correctAnswer: 0,
              explanation: "$7 \\times 3 = 21$ is 2 tens and 1 one. Write the 1 in the ones place and carry the 2 to the tens.",
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'multi-digit-multiplication',
    sections: [
      {
        id: 'mdm-p2-worked1',
        type: 'text',
        content: `
# 📝 Worked Examples

Let's slow down and watch every step.

## Example 1: $46 \\times 3$ (one digit)

**Step 1 — Ones:** $6 \\times 3 = 18$. Write **8**, carry **1**.

**Step 2 — Tens:** $4 \\times 3 = 12$, plus the carried $1 = 13$. Since there are no more digits, write **13** in front.

$$46 \\times 3 = 138$$

| Step | Math | Write | Carry |
|------|------|:-----:|:-----:|
| Ones | $6 \\times 3 = 18$ | 8 | 1 |
| Tens | $4 \\times 3 = 12,\\ +1 = 13$ | 13 | — |

**Estimate to check:** $46$ is about $50$, and $50 \\times 3 = 150$. Our answer $138$ is close, so it makes sense. ✅
        `,
      },
      {
        id: 'mdm-p2-worked2',
        type: 'text',
        content: `
## Example 2: $52 \\times 14$ (two digits)

**Row 1 — Multiply by the ones digit (4):**
$52 \\times 4 = 208$

**Row 2 — Multiply by the tens digit (1):**
$52 \\times 1 = 52$. The 1 means **10**, so shift one place left and write a **0** placeholder: $520$.

**Add the partial products:**
$$208 + 520 = 728$$

So $52 \\times 14 = 728$.

| Partial Product | Comes From | Value |
|-----------------|-----------|:-----:|
| First row | $52 \\times 4$ | 208 |
| Second row | $52 \\times 10$ | 520 |
| **Total** | $208 + 520$ | **728** |
        `,
      },
      {
        id: 'mdm-p2-input',
        type: 'input-boxes',
        content: `
## Your Turn 🧮

Solve $63 \\times 5$ one step at a time. Type a number in each box.

1) Ones step: $3 \\times 5 = ?$

2) Tens step: $6 \\times 5 = 30$, plus the carried $1$. What is the new total for the tens step?

3) What is the final answer to $63 \\times 5$?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '31', '315'],
          hint1: 'For box 1, just multiply $3 \\times 5$. Then remember to carry the 1 into box 2.',
          hint2: 'Box 2 is $6 \\times 5 = 30$, then add the 1 you carried from box 1.',
          explanation: "$3 \\times 5 = 15$ (write 5, carry 1). $6 \\times 5 = 30$, plus carried $1 = 31$. Putting it together gives $315$.",
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'multi-digit-multiplication',
    sections: [
      {
        id: 'mdm-p3-mcq',
        type: 'multiple-choice',
        content: `
# 🧭 Guided Practice

Work through each problem carefully. Use the standard algorithm and check with estimation.
        `,
        exercise: {
          questions: [
            {
              question: "What is $84 \\times 6$?",
              options: ['504', '484', '4824', '514'],
              correctAnswer: 0,
              explanation: "Ones: $4 \\times 6 = 24$ (write 4, carry 2). Tens: $8 \\times 6 = 48$, plus 2 is 50. Answer: $504$.",
            },
            {
              question: "When multiplying $37 \\times 25$, what placeholder do you write before the second partial product (from the tens digit)?",
              options: [
                "A 0, because the tens digit really means a multiple of ten",
                "A 1, to mark the start of a new row",
                "Nothing — the rows line up the same way",
                "A 5, copied from the tens digit",
              ],
              correctAnswer: 0,
              explanation: "The tens digit stands for tens, so its product is shifted one place left. The 0 placeholder keeps the columns aligned.",
            },
          ],
        },
      },
      {
        id: 'mdm-p3-dropdown',
        type: 'dropdown-select',
        content: `
## Build the Algorithm 🔍

Choose the correct words to complete the rules of multi-digit multiplication.
        `,
        exercise: {
          dropdowns: [
            {
              label: 'You always begin multiplying from the',
              options: ['ones place on the right', 'tens place on the left', 'biggest digit', 'middle digit'],
            },
            {
              label: 'After multiplying by both digits, the last thing you do is',
              options: ['add the partial products', 'subtract the rows', 'carry one more time', 'divide by ten'],
            },
          ],
          correctAnswers: ['ones place on the right', 'add the partial products'],
          hint1: 'Think about where carrying needs to start, and what you do with the two rows at the end.',
          explanation: "Always start at the ones place on the right and carry as you go left. Once both partial products are written, add them to get the final answer.",
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'multi-digit-multiplication',
    sections: [
      {
        id: 'mdm-p4-context',
        type: 'text',
        content: `
# 🌍 Real-World Multiplication

Multiplication shows up everywhere in daily life. The trick is spotting the **equal groups**.

## Shopping
If one toy costs \\$24 and you buy $15$ toys, the total is $24 \\times 15 = 360$, i.e. \\$360.

## Area
A garden is $18$ feet long and $12$ feet wide. Its area is $18 \\times 12 = 216$ square feet.

## Equal Groups
If each class has $28$ students and there are $4$ classes, that is $28 \\times 4 = 112$ students.

| Situation | Multiply | Answer |
|-----------|----------|:------:|
| 15 toys at \\$24 each | $24 \\times 15$ | \\$360 |
| 18 ft by 12 ft garden | $18 \\times 12$ | 216 sq ft |
| 4 classes of 28 | $28 \\times 4$ | 112 |

**Tip:** Underline the two numbers being multiplied, then set them up in the standard algorithm.
        `,
      },
      {
        id: 'mdm-p4-input',
        type: 'input-boxes',
        content: `
## Solve the Word Problem 🧮

A school orders **6 boxes** of markers. Each box holds **35 markers**.

1) Ones step: $5 \\times 6 = ?$

2) Tens step: $3 \\times 6 = 18$, plus the carried $3$. What is the tens total?

3) How many markers are there in all?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '21', '210'],
          hint1: 'Box 1 is $5 \\times 6$. Write the 0 and carry the 3 into the tens step.',
          hint2: 'Box 2: $3 \\times 6 = 18$, then add the carried 3 to get 21.',
          explanation: "$5 \\times 6 = 30$ (write 0, carry 3). $3 \\times 6 = 18$, plus 3 is 21. So $35 \\times 6 = 210$ markers.",
        },
      },
      {
        id: 'mdm-p4-mcq',
        type: 'multiple-choice',
        content: `
## Apply It 🎯
        `,
        exercise: {
          questions: [
            {
              question: "A movie theater has $32$ rows of seats with $18$ seats in each row. How many seats are there in total?",
              options: ['576 seats', '50 seats', '486 seats', '326 seats'],
              correctAnswer: 0,
              explanation: "Multiply $32 \\times 18$: $32 \\times 8 = 256$ and $32 \\times 10 = 320$. Then $256 + 320 = 576$ seats.",
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'multi-digit-multiplication',
    sections: [
      {
        id: 'mdm-p5-summary',
        type: 'text',
        content: `
# 🏆 Review & Challenge

You now have all the tools for multi-digit multiplication. Here is the whole method in one place.

## The Standard Algorithm, Step by Step

| Step | What to Do | Why |
|------|-----------|-----|
| 1 | Start at the **ones** place on the right | Carrying flows left |
| 2 | **Carry** when a product is 10 or more | Keeps each column under 10 |
| 3 | **Shift** left for the tens digit (write a 0) | The tens digit means tens |
| 4 | **Add** all partial products | Combines the equal groups |
| 5 | **Estimate** to check | Catches mistakes |

### Remember
- **Line up your columns** carefully — ones under ones, tens under tens.
- **Shift** one place left when you multiply by the tens digit.
- **Estimate first** so a wrong answer stands out.

You've got this! 🌟
        `,
      },
      {
        id: 'mdm-p5-mcq',
        type: 'multiple-choice',
        content: `
## Mixed Challenge 📋

Pull together everything you've learned.
        `,
        exercise: {
          questions: [
            {
              question: "What is $46 \\times 23$?",
              options: ['1058', '1012', '966', '1158'],
              correctAnswer: 0,
              explanation: "$46 \\times 3 = 138$ and $46 \\times 20 = 920$. Add: $138 + 920 = 1058$.",
            },
            {
              question: "Which estimate best checks whether $59 \\times 4 = 236$ is reasonable?",
              options: [
                "$60 \\times 4 = 240$, so 236 is reasonable",
                "$50 \\times 4 = 200$, so 236 must be wrong",
                "$59 + 4 = 63$, so 236 is wrong",
                "$60 \\times 40 = 2400$, so 236 is too small",
              ],
              correctAnswer: 0,
              explanation: "Round 59 up to 60: $60 \\times 4 = 240$. Since 236 is very close to 240, the answer is reasonable.",
            },
          ],
        },
      },
    ],
  },
]
