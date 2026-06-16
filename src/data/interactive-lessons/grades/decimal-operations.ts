import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "Decimals & The Four Operations"
  // ============================================================
  {
    topicSlug: 'decimal-operations',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## Decimals Are Everywhere 🔢

A **decimal** is a way to show parts of a whole — just like a fraction. The little dot is the **decimal point**, and it separates the **whole number** part (on the left) from the **part smaller than one** (on the right).

You already use decimals every single day:

- **Money:** a snack costs **\\$2.75**
- **Sports:** a sprinter runs the 100m in **$10.4$** seconds
- **Cooking:** a recipe needs **$1.5$** cups of sugar

In this topic you'll master **all four operations** with decimals: **add**, **subtract**, **multiply**, and **divide**. The good news? You already know how to do these with whole numbers — decimals just add a couple of careful rules.`,
      },
      {
        id: 'p1-place-value',
        type: 'text',
        content: `## Place Value Is the Secret 🗝️

Each spot to the **right** of the decimal point is **ten times smaller** than the one before it. Let's break down the number $12.345$:

| Place      | Tens | Ones | (point) | Tenths | Hundredths | Thousandths |
|------------|:----:|:----:|:-------:|:------:|:----------:|:-----------:|
| **Digit**  | 1    | 2    | .       | 3      | 4          | 5           |
| **Value**  | 10   | 2    |         | $\\frac{3}{10}$ | $\\frac{4}{100}$ | $\\frac{5}{1000}$ |

So $12.345$ means: **1 ten**, **2 ones**, **3 tenths**, **4 hundredths**, and **5 thousandths**.

**Why this matters:** when we add and subtract, we must line up matching place values. That's why we **line up the decimal points** — it keeps tenths over tenths and hundredths over hundredths.`,
      },
      {
        id: 'p1-rules',
        type: 'text',
        content: `## ⭐ The Big Ideas

Here is the heart of every decimal operation:

- **Adding & Subtracting:** **Line up the decimal points** vertically. Add **zeros** as placeholders so every number has the same number of decimal places. Then add or subtract normally and bring the decimal point straight down.
- **Multiplying:** **Ignore** the decimal points and multiply like whole numbers. Then **count** the total decimal places in *both* factors and put that many decimal places in your answer.
- **Dividing:** Set it up so you are dividing by a **whole number**, then divide normally, keeping the decimal point lined up.

Adding $12.5 + 3.84$? Line them up and fill in a zero:

$$\\begin{aligned} 12.50 \\\\ +\\ 3.84 \\\\ \\hline 16.34 \\end{aligned}$$

Notice the $0$ we added to $12.5$ to make it $12.50$ — that placeholder keeps everything lined up.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the **most important rule** stuck.`,
        exercise: {
          questions: [
            {
              question:
                'When you **add** or **subtract** decimals, what is the first and most important thing you must do?',
              options: [
                'Line up the last digits on the right',
                'Line up the decimal points',
                'Multiply the numbers first',
                'Remove all the decimal points',
              ],
              correctAnswer: 1,
              explanation:
                'Lining up the decimal points keeps each place value (tenths over tenths, hundredths over hundredths) aligned so the addition or subtraction is correct.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Worked Examples: Add, Subtract & Multiply"
  // ============================================================
  {
    topicSlug: 'decimal-operations',
    sections: [
      {
        id: 'p2-add-sub',
        type: 'text',
        content: `## Worked Example: Adding & Subtracting ➕➖

**Add:** $5.2 + 13.456 + 0.89$

**Step 1 — Line up the decimal points** and fill in zeros so every number has 3 decimal places:

$$\\begin{aligned} 5.200 \\\\ 13.456 \\\\ +\\ 0.890 \\\\ \\hline 19.546 \\end{aligned}$$

**Answer:** $19.546$ ✅

---

**Subtract:** $10 - 3.76$

A whole number like $10$ has an invisible decimal: it's $10.00$. Now line up and subtract, borrowing just like with whole numbers:

$$\\begin{aligned} 10.00 \\\\ -\\ 3.76 \\\\ \\hline 6.24 \\end{aligned}$$

**Answer:** $6.24$ ✅`,
      },
      {
        id: 'p2-multiply',
        type: 'text',
        content: `## Worked Example: Multiplying ✖️

**Multiply:** $2.5 \\times 1.3$

**Step 1 — Ignore the decimals** and multiply as whole numbers:

$$25 \\times 13 = 325$$

**Step 2 — Count the decimal places** in the problem:

- $2.5$ has **1** decimal place
- $1.3$ has **1** decimal place
- Total: $1 + 1 = 2$ decimal places

**Step 3 — Place the decimal** so the answer has 2 decimal places (count 2 from the right):

$$325 \\rightarrow 3.25$$

**Answer:** $3.25$ ✅

> **Tip:** With small decimals like $0.4 \\times 0.3$, multiply $4 \\times 3 = 12$, then place 2 decimal places to get $0.12$.`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn ✍️

Solve each one. Type just the number (no extra symbols).

- **Box 1:** $8.5 + 2.34 = ?$
- **Box 2:** $9 - 4.7 = ?$
- **Box 3:** $1.2 \\times 0.5 = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10.84', '4.3', '0.6'],
          hint1: 'For adding and subtracting, line up the decimal points and add zeros as placeholders.',
          hint2: 'For multiplying $1.2 \\times 0.5$: do $12 \\times 5 = 60$, then place 2 decimal places to get $0.60 = 0.6$.',
          explanation:
            '$8.50 + 2.34 = 10.84$. For $9 - 4.7$, write $9.0 - 4.7 = 4.3$. For $1.2 \\times 0.5$, multiply $12 \\times 5 = 60$, then with 2 decimal places it becomes $0.60$, which simplifies to $0.6$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Guided Practice"
  // ============================================================
  {
    topicSlug: 'decimal-operations',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Pick the Answer 🎯

Work each one carefully. Remember the rules for each operation!`,
        exercise: {
          questions: [
            {
              question: 'What is $7.6 + 12.45$?',
              options: ['$19.51$', '$20.05$', '$19.05$', '$83.05$'],
              correctAnswer: 1,
              explanation:
                'Line up the decimals: $7.60 + 12.45 = 20.05$. Add zeros so both have two decimal places before adding.',
            },
            {
              question: 'What is $0.6 \\times 0.7$?',
              options: ['$4.2$', '$0.42$', '$0.042$', '$42$'],
              correctAnswer: 1,
              explanation:
                'Multiply $6 \\times 7 = 42$. Each factor has 1 decimal place, so the answer needs $1 + 1 = 2$ decimal places: $0.42$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Finish Each Statement 🧩

Choose the option that correctly completes each sentence.`,
        exercise: {
          dropdowns: [
            {
              label: 'When multiplying $3.4 \\times 5$, the answer has',
              options: ['0 decimal places', '1 decimal place', '2 decimal places'],
            },
            {
              label: 'To compute $15.8 - 7.23$, you should first rewrite $15.8$ as',
              options: ['$15.083$', '$15.80$', '$1.580$'],
            },
          ],
          correctAnswers: ['1 decimal place', '$15.80$'],
          hint1: 'Count the total decimal places in the factors for multiplication; add a placeholder zero for subtraction.',
          explanation:
            '$3.4$ has 1 decimal place and $5$ has 0, so the product ($17.0$) has $1 + 0 = 1$ decimal place. To subtract neatly, rewrite $15.8$ as $15.80$ so both numbers have two decimal places: $15.80 - 7.23 = 8.57$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Real-World Decimals"
  // ============================================================
  {
    topicSlug: 'decimal-operations',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Decimals in the Real World 🌎

Decimals show up constantly when we deal with **money**, **measurements**, and **sharing**.

**Shopping trip:** Maya buys a notebook for \\$3.49 and a pen for \\$1.25.

- **Total cost:** \\$3.49 + \\$1.25 = \\$4.74
- **Change from \\$10:** \\$10.00 - \\$4.74 = \\$5.26

**Splitting evenly:** If 4 friends share a \\$12.80 pizza equally, each pays \\$12.80 ÷ 4 = \\$3.20.

The math is exactly the same as before — just remember to **line up** for $+$ and $-$, **count places** for $\\times$, and **keep the decimal lined up** for $\\div$. Money answers should always have **two** decimal places (cents).`,
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Solve the Story Problems 🛒

Type just the number. For money answers, you can write it like $5.26$ (no dollar sign needed).

- **Box 1:** A book costs \\$8.99 and a bookmark costs \\$2.50. What is the **total** cost?
- **Box 2:** You pay with a \\$20 bill for an item that costs \\$13.45. How much **change** do you get?
- **Box 3:** Four friends split a \\$9.60 bill equally. How much does **each** person pay?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['11.49', '6.55', '2.40'],
          hint1: 'Total means add; change means subtract from the amount paid; splitting equally means divide.',
          hint2: 'For the change, line up $20.00 - 13.45$. For the split, $9.60 \\div 4$ — think how many groups of 4 fit.',
          explanation:
            'Total: $8.99 + 2.50 = 11.49$. Change: $20.00 - 13.45 = 6.55$. Split: $9.60 \\div 4 = 2.40$ each. Money answers keep two decimal places.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## One More Real-World Problem 🏃`,
        exercise: {
          questions: [
            {
              question:
                'A runner laps the track in $1.5$ minutes each lap. How long does it take to run $6$ laps?',
              options: ['$7.5$ minutes', '$9$ minutes', '$4.5$ minutes', '$6.5$ minutes'],
              correctAnswer: 1,
              explanation:
                'Multiply $1.5 \\times 6 = 9$. ($15 \\times 6 = 90$, then 1 decimal place gives $9.0 = 9$.) So it takes $9$ minutes.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // partTitle: "Review & Challenge"
  // ============================================================
  {
    topicSlug: 'decimal-operations',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## 🏆 Putting It All Together

You've now worked with **all four decimal operations**. Here's a quick summary to lock it in:

| Operation | Key Rule | Example |
|-----------|----------|---------|
| **Add** ➕ | Line up decimals, add zeros, add | $12.50 + 3.84 = 16.34$ |
| **Subtract** ➖ | Line up decimals, borrow as needed | $10.00 - 3.76 = 6.24$ |
| **Multiply** ✖️ | Multiply, then count total decimal places | $2.5 \\times 1.3 = 3.25$ |
| **Divide** ➗ | Divide by a whole number, keep decimal lined up | $9.60 \\div 4 = 2.40$ |

**Remember the difference:** for $+$ and $-$ you **line up the points**, but for $\\times$ you **ignore the points** and **count places** at the end. Mixing these two up is the most common mistake — so pause and ask yourself which operation you're doing!`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge: Mixed Operations 🎓

These mix everything together. Take your time and apply the right rule for each!`,
        exercise: {
          questions: [
            {
              question:
                'A student computes $0.3 \\times 0.4$ and gets $1.2$. What did they do wrong?',
              options: [
                'Nothing — $1.2$ is correct',
                'They forgot to count decimal places; the answer should be $0.12$',
                'They should have added instead, getting $0.7$',
                'The answer should be $12$',
              ],
              correctAnswer: 1,
              explanation:
                'Multiplying gives $3 \\times 4 = 12$, but each factor has 1 decimal place, so the answer needs $1 + 1 = 2$ decimal places: $0.12$, not $1.2$.',
            },
            {
              question: 'Evaluate $6.4 - 2.85 + 1.2$ from left to right.',
              options: ['$4.75$', '$2.35$', '$10.45$', '$4.55$'],
              correctAnswer: 0,
              explanation:
                'First $6.40 - 2.85 = 3.55$. Then $3.55 + 1.20 = 4.75$. Line up the decimals at each step.',
            },
          ],
        },
      },
    ],
  },
]
