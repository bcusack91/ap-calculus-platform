import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "Meet the Integers"
  // ============================================================
  {
    topicSlug: 'operations-with-integers-grade7',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## Numbers Go Both Ways 🔢

An **integer** is any whole number, including **zero** and the **negatives**: $\\dots, -3, -2, -1, 0, 1, 2, 3, \\dots$ (no fractions or decimals!).

You already meet negative numbers all the time:

- **Temperature:** it can be $-8$ degrees on a cold morning
- **Money:** owing your friend \\$5 is like having $-5$ dollars
- **Elevation:** a diver $20$ meters below sea level is at $-20$ m

The key idea is **direction**. On a number line, **positive** means moving **right** and **negative** means moving **left**. In this lesson you'll learn to **add**, **subtract**, **multiply**, and **divide** integers with confidence.`,
      },
      {
        id: 'p1-absolute-value',
        type: 'text',
        content: `## Absolute Value: How Far From Zero 📏

The **absolute value** of a number is its **distance from zero** on the number line. Distance is never negative, so absolute value is always **positive or zero**. We write it with bars: $|\\ \\ |$.

- $|5| = 5$ (the number $5$ is $5$ steps from zero)
- $|-5| = 5$ (the number $-5$ is also $5$ steps from zero)
- $|0| = 0$

This is super useful for **adding integers with different signs**, because we'll compare which number is "bigger" in distance from zero.`,
      },
      {
        id: 'p1-adding-rules',
        type: 'text',
        content: `## ⭐ The Two Rules for Adding Integers

When you add integers, **first look at the signs**.

**Rule 1 — Same Signs:** Add the absolute values and **keep the shared sign**.

- $5 + 3 = 8$ (both positive → answer positive)
- $-5 + (-3) = -8$ (both negative → answer negative)

**Rule 2 — Different Signs:** Subtract the smaller absolute value from the larger, and **take the sign of the number with the larger absolute value**.

- $7 + (-3)$: subtract $7 - 3 = 4$, and $7$ wins (it's bigger), so the answer is $+4$
- $-7 + 3$: subtract $7 - 3 = 4$, and $-7$ wins, so the answer is $-4$

| Situation | What to do | Sign of answer |
|-----------|------------|:--------------:|
| Same signs | **Add** the absolute values | Keep the shared sign |
| Different signs | **Subtract** absolute values | Sign of the larger one |

Think of it like a tug-of-war: positives pull right, negatives pull left, and the stronger side wins!`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the **adding rules** stuck before we move on.`,
        exercise: {
          questions: [
            {
              question:
                'When you add two integers with **different signs**, what do you do?',
              options: [
                'Add the absolute values and keep that sign',
                'Subtract the absolute values and use the sign of the larger one',
                'Always make the answer positive',
                'Multiply the two numbers together',
              ],
              correctAnswer: 1,
              explanation:
                'With different signs you subtract the absolute values, then give the answer the sign of the number that is farther from zero (the larger absolute value).',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Worked Examples: Add & Subtract"
  // ============================================================
  {
    topicSlug: 'operations-with-integers-grade7',
    sections: [
      {
        id: 'p2-adding-examples',
        type: 'text',
        content: `## Worked Examples: Adding ➕

**Example 1 — Same signs:** $-6 + (-4)$

- Both signs are negative, so **add** the absolute values: $6 + 4 = 10$
- Keep the shared sign (negative): **answer $= -10$** ✅

**Example 2 — Different signs:** $9 + (-12)$

- The signs differ, so **subtract** absolute values: $12 - 9 = 3$
- $-12$ has the larger absolute value, so the answer is **negative**: **answer $= -3$** ✅`,
      },
      {
        id: 'p2-subtracting-examples',
        type: 'text',
        content: `## Worked Examples: Subtracting ➖

The golden rule for subtraction: **Add the opposite!**

$$a - b = a + (-b)$$

Change the subtraction to addition, then **flip the sign** of the second number. Now use the adding rules you already know.

**Example 1:** $5 - 8$

- Add the opposite: $5 + (-8)$
- Different signs → subtract: $8 - 5 = 3$, and $-8$ wins → **answer $= -3$** ✅

**Example 2:** $-3 - 7$

- Add the opposite: $-3 + (-7)$
- Same signs → add: $3 + 7 = 10$, keep negative → **answer $= -10$** ✅

**Example 3:** $4 - (-6)$  (watch the double negative!)

- Add the opposite of $-6$, which is $+6$: $4 + 6$
- **answer $= 10$** ✅

> **Tip:** Two minus signs next to each other turn into a **plus**: $4 - (-6) = 4 + 6$.`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn ✍️

Solve each one. Type just the number, including a minus sign if the answer is negative (like $-7$).

- **Box 1:** $-6 + (-9) = ?$
- **Box 2:** $8 + (-15) = ?$
- **Box 3:** $-2 - (-10) = ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-15', '-7', '8'],
          hint1: 'For Box 1 the signs are the same (both negative), so add and keep the negative sign.',
          hint2: 'For Box 3, "add the opposite": $-2 - (-10) = -2 + 10$, then use the different-signs rule.',
          explanation:
            '$-6 + (-9) = -15$ (same signs, add and keep negative). $8 + (-15)$: subtract $15 - 8 = 7$, and $-15$ wins, so $-7$. $-2 - (-10) = -2 + 10 = 8$ (the opposite of $-10$ is $+10$).',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Guided Practice"
  // ============================================================
  {
    topicSlug: 'operations-with-integers-grade7',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Guided Practice: Pick the Answer 🎯

Work each one carefully. Decide whether to use the **same-sign** or **different-sign** rule!`,
        exercise: {
          questions: [
            {
              question: 'What is $-7 + 12$?',
              options: ['$-19$', '$-5$', '$5$', '$19$'],
              correctAnswer: 2,
              explanation:
                'Different signs, so subtract: $12 - 7 = 5$. Since $12$ has the larger absolute value, the answer is positive: $5$.',
            },
            {
              question: 'What is $-4 - 9$?',
              options: ['$-13$', '$5$', '$-5$', '$13$'],
              correctAnswer: 0,
              explanation:
                'Add the opposite: $-4 - 9 = -4 + (-9)$. Same signs, so add: $4 + 9 = 13$, and keep the negative sign: $-13$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Finish Each Statement 🧩

Choose the option that correctly completes each sentence about integer operations.`,
        exercise: {
          dropdowns: [
            {
              label: 'To subtract integers, you should always rewrite the problem by',
              options: [
                'adding the opposite of the second number',
                'making both numbers positive',
                'subtracting the absolute values',
              ],
            },
            {
              label: 'When you add two negative integers, the answer is',
              options: ['always positive', 'always negative', 'always zero'],
            },
          ],
          correctAnswers: [
            'adding the opposite of the second number',
            'always negative',
          ],
          hint1: 'Remember: $a - b = a + (-b)$. And two negatives added together pull the same direction on the number line.',
          explanation:
            'Subtraction becomes "add the opposite": $a - b = a + (-b)$. Adding two negatives (same signs) means you add the absolute values and keep the negative sign, so the result is always negative.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Integers in the Real World"
  // ============================================================
  {
    topicSlug: 'operations-with-integers-grade7',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Integers in the Real World 🌎

Negative numbers describe anything that can go **below a starting point** — money owed, temperatures below zero, or going underground.

**Temperature change:** At dawn it was $-5$°C. By noon it rose $8$ degrees.

- New temperature: $-5 + 8 = 3$°C 🌡️

**Bank account:** Jordan has \\$20, then spends \\$32 (overdraft!).

- Balance: $20 - 32 = 20 + (-32) = -12$, so Jordan owes \\$12 (a balance of -\\$12).

**Multiplying for repeated change:** A submarine descends $15$ meters each minute for $4$ minutes. Descending is negative:

- $4 \\times (-15) = -60$, so it ends at $-60$ meters (different signs → negative).

The math is the same as before — just decide which **operation** the story describes, then apply the integer rules.`,
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Solve the Story Problems 📖

Type just the number, with a minus sign if the answer is negative.

- **Box 1:** The temperature is $-3$°C and **drops** another $6$ degrees. What is the new temperature?
- **Box 2:** A diver is at $-12$ m and **rises** $5$ m. What is the diver's new depth?
- **Box 3:** A game costs $7$ points each time you lose. If you lose $3$ times, what is your total score change? (Use multiplication.)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-9', '-7', '-21'],
          hint1: 'A "drop" means subtract; "rises" means add; "loses points" each time means multiply a negative by how many times.',
          hint2: 'Box 1: $-3 - 6$. Box 2: $-12 + 5$. Box 3: $3 \\times (-7)$.',
          explanation:
            'Box 1: $-3 - 6 = -3 + (-6) = -9$°C. Box 2: $-12 + 5 = -7$ m (different signs, $-12$ wins). Box 3: losing $7$ points three times is $3 \\times (-7) = -21$ (different signs → negative).',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## One More Real-World Problem 💳`,
        exercise: {
          questions: [
            {
              question:
                'Mia owes her brother $\\$8$ (a balance of $-8$) and then borrows $\\$5$ more. What is her new balance?',
              options: ['$-3$', '$3$', '$-13$', '$13$'],
              correctAnswer: 2,
              explanation:
                'Borrowing more adds to what she owes: $-8 + (-5) = -13$. Same signs, so add the absolute values and keep the negative sign — she owes $\\$13$.',
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
    topicSlug: 'operations-with-integers-grade7',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## 🏆 Putting It All Together

You've now worked with **all four operations** on integers. The trickiest part is keeping track of **signs** — here's a summary to lock it in:

| Operation | Key Rule | Example |
|-----------|----------|---------|
| **Add** ➕ | Same signs: add & keep sign. Different signs: subtract & use sign of larger | $-5 + 3 = -2$ |
| **Subtract** ➖ | Add the opposite: $a - b = a + (-b)$ | $4 - (-6) = 10$ |
| **Multiply** ✖️ | Same signs → positive; different signs → negative | $(-5) \\times (-3) = 15$ |
| **Divide** ➗ | Same signs → positive; different signs → negative | $12 \\div (-3) = -4$ |

**The big shortcut for $\\times$ and $\\div$:** count the negative signs. An **even** number of negatives gives a **positive** answer; an **odd** number of negatives gives a **negative** answer. For example, $(-2) \\times (-3) \\times (-1)$ has three negatives (odd), so the result is **negative**: $-6$.`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge: Mixed Operations 🎓

These mix every operation together. Decide on the right rule for each — take your time!`,
        exercise: {
          questions: [
            {
              question: 'What is $(-6) \\times (-4)$?',
              options: ['$-24$', '$24$', '$-10$', '$10$'],
              correctAnswer: 1,
              explanation:
                'Multiplying two negatives (same signs) gives a positive: $6 \\times 4 = 24$, so the answer is $+24$.',
            },
            {
              question: 'What is $-20 \\div 4 + 3$?',
              options: ['$-2$', '$8$', '$-8$', '$2$'],
              correctAnswer: 0,
              explanation:
                'Do division first: $-20 \\div 4 = -5$ (different signs → negative). Then $-5 + 3 = -2$ (different signs, $-5$ wins).',
            },
          ],
        },
      },
    ],
  },
]
