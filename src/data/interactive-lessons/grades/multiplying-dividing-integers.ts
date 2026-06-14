import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "The Sign Rules"
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-integers',
    sections: [
      {
        id: 'p1-what-are-integers',
        type: 'text',
        content: `## Quick Review: What Are Integers? 🔢

**Integers** are the whole numbers and their opposites. There are no fractions or decimals.

$$\\ldots, -3, -2, -1, 0, 1, 2, 3, \\ldots$$

- **Positive integers** sit to the *right* of zero: $1, 2, 3, 4, \\ldots$
- **Negative integers** sit to the *left* of zero: $-1, -2, -3, -4, \\ldots$
- **Zero** is special — it is neither positive nor negative.

In Grade 6 you learned to **add** and **subtract** integers. Now you will master **multiplying** and **dividing** them. The good news? The number part of the answer is found exactly the way you already know. The only new skill is figuring out the **sign** of the answer.`,
      },
      {
        id: 'p1-multiply-rules',
        type: 'text',
        content: `## The Rules for Multiplying Integers ✖️

To multiply integers, do **two jobs**:

1. **Multiply the numbers** as if both were positive.
2. **Decide the sign** using the rules below.

**Rule 1 — Positive × Positive = Positive**

This is normal multiplication: $5 \\times 3 = 15$.

**Rule 2 — Negative × Negative = Positive**

Two negatives make a positive! $(-5) \\times (-3) = 15$. A negative "reverses" a number, and reversing twice brings you right back to positive.

**Rule 3 — Positive × Negative = Negative**

A positive and a negative give a negative product: $5 \\times (-3) = -15$.

**Rule 4 — Negative × Positive = Negative**

Order does not matter (that's the commutative property), so this is just like Rule 3: $(-3) \\times 5 = -15$.`,
      },
      {
        id: 'p1-sign-shortcut',
        type: 'text',
        content: `## ⭐ The Shortcut: Same vs. Different Signs

You do **not** need to memorize four separate rules. There is one simple idea:

| The two signs are... | The product is... | Example |
|----------------------|:-----------------:|---------|
| **Same** (both + or both −) | **Positive** | $(-6)\\times(-2)=12$ |
| **Different** (one + and one −) | **Negative** | $(-6)\\times 2=-12$ |

So just ask yourself: *"Are the signs the **same** or **different**?"*

- **Same signs → Positive** ✅
- **Different signs → Negative** ❌

That's it! Whether you have $(+)\\times(+)$ or $(-)\\times(-)$, matching signs always give a positive answer. A mismatch always gives a negative answer.`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the big idea is clear before we practice.`,
        exercise: {
          questions: [
            {
              question:
                'Without computing the number, what will the **sign** of $(-8) \\times (-4)$ be?',
              options: [
                'Negative, because there are negative numbers',
                'Positive, because the signs are the same',
                'Negative, because two negatives stay negative',
                'It cannot be determined',
              ],
              correctAnswer: 1,
              explanation:
                'Both numbers are negative, so the signs are the same. Same signs always give a positive product, so the answer is $+32$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Multiplying Step by Step"
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-integers',
    sections: [
      {
        id: 'p2-worked-multiply',
        type: 'text',
        content: `## Multiplying Step by Step ✖️

Let's work two examples carefully so you see the pattern.

**Example A:** $(-7) \\times 6$

- **Step 1 — Multiply the numbers:** $7 \\times 6 = 42$.
- **Step 2 — Choose the sign:** one number is negative and one is positive, so the signs are **different**. Different signs → **negative**.
- **Answer:** $(-7) \\times 6 = -42$

**Example B:** $(-9) \\times (-4)$

- **Step 1 — Multiply the numbers:** $9 \\times 4 = 36$.
- **Step 2 — Choose the sign:** both numbers are negative, so the signs are the **same**. Same signs → **positive**.
- **Answer:** $(-9) \\times (-4) = 36$`,
      },
      {
        id: 'p2-multiple-negatives',
        type: 'text',
        content: `## Multiplying More Than Two Integers 🔁

When a problem has **three or more** factors, you don't need to track signs one pair at a time. Just **count the negative signs**:

- **Even** number of negatives → **Positive** result
- **Odd** number of negatives → **Negative** result

**Example C:** $(-2) \\times (-3) \\times (-4)$

- Count the negatives: there are **3** of them — that's **odd** → the answer is **negative**.
- Multiply the numbers: $2 \\times 3 \\times 4 = 24$.
- **Answer:** $-24$

**Example D:** $(-2) \\times (-3) \\times 4$

- Count the negatives: there are **2** — that's **even** → the answer is **positive**.
- Multiply the numbers: $2 \\times 3 \\times 4 = 24$.
- **Answer:** $+24$`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn: Multiply These ✍️

First find the number part, then decide the sign. Type each answer as a signed number, like \`-42\` or \`36\`.

1. $(-7) \\times 6 = \\;?$
2. $(-9) \\times (-4) = \\;?$
3. $(-2) \\times (-3) \\times (-4) = \\;?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-42', '36', '-24'],
          hint1:
            'Multiply the numbers as if they were both positive first, then attach the correct sign.',
          hint2:
            'Same signs make a positive answer; different signs make a negative answer. For problem 3, count the negatives — three negatives is odd, so the answer is negative.',
          explanation:
            'Problem 1: different signs, so $(-7) \\times 6 = -42$. Problem 2: same signs, so $(-9) \\times (-4) = 36$. Problem 3: three negatives is odd, so the answer is negative: $2 \\times 3 \\times 4 = 24 \\Rightarrow -24$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Dividing Integers"
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-integers',
    sections: [
      {
        id: 'p3-divide-text',
        type: 'text',
        content: `## Dividing Integers ➗

Here is the best news of the whole lesson: **division uses the exact same sign rules as multiplication!**

- **Same signs → Positive** quotient
- **Different signs → Negative** quotient

| Problem | Signs | Result |
|---------|:-----:|:------:|
| $(-12) \\div (-3)$ | same | $4$ |
| $(-20) \\div 5$ | different | $-4$ |
| $18 \\div (-6)$ | different | $-3$ |
| $24 \\div 8$ | same | $3$ |

The steps are the same as before: **divide the numbers**, then **attach the sign**. Now try the questions below.`,
      },
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Multiple Choice 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $(-20) \\div 5$?',
              options: ['$4$', '$-4$', '$-15$', '$100$'],
              correctAnswer: 1,
              explanation:
                'The numbers divide to give $20 \\div 5 = 4$. The signs are different (negative and positive), so the quotient is negative: $-4$.',
            },
            {
              question: 'What is $(-36) \\div (-9)$?',
              options: ['$-4$', '$-27$', '$4$', '$45$'],
              correctAnswer: 2,
              explanation:
                'The numbers divide to give $36 \\div 9 = 4$. Both signs are negative, so the signs are the same and the quotient is positive: $4$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Choose the Correct Sign 🔽

For each problem, the number part is already correct — you just pick the right **sign** of the answer.`,
        exercise: {
          dropdowns: [
            { label: '$8 \\times (-5) = $', options: ['$40$', '$-40$', '$-13$'] },
            { label: '$(-45) \\div (-9) = $', options: ['$-5$', '$5$', '$-54$'] },
          ],
          correctAnswers: ['$-40$', '$5$'],
          hint1:
            'Decide whether the two signs are the same or different. Same → positive; different → negative.',
          explanation:
            'For $8 \\times (-5)$ the signs are different, so the answer is negative: $-40$. For $(-45) \\div (-9)$ the signs are the same, so the answer is positive: $5$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Integers in the Real World"
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-integers',
    sections: [
      {
        id: 'p4-real-world-text',
        type: 'text',
        content: `## Integers in the Real World 🌍

Negative numbers show up everywhere — temperatures dropping, money owed, and submarines diving. Multiplying and dividing helps us scale these changes up or down.

**Temperature drop:** A cold front makes the temperature fall $3$ degrees each hour. We write a drop as $-3$. After $4$ hours, the change is:
$$4 \\times (-3) = -12 \\text{ degrees}$$

**Sharing a debt:** Four friends share a debt of $\\$20$ equally. A debt is negative, so the total is $-20$. Each person's share is:
$$(-20) \\div 4 = -5 \\Rightarrow \\text{each owes } \\$5$$

**Diving deeper:** A submarine descends $25$ meters every minute. Going down is $-25$. After $3$ minutes its depth change is $3 \\times (-25) = -75$ meters.

Watch the words: *"drop," "owe," "below,"* and *"descend"* all point to **negative** numbers.`,
      },
      {
        id: 'p4-input-practice',
        type: 'input-boxes',
        content: `## Word Problem Practice ✍️

Write each answer as a signed integer, like \`-12\` or \`6\`.

1. The temperature drops $3$ degrees each hour for $4$ hours. What is the total change? ( $4 \\times (-3)$ )
2. Five friends equally share a debt of $\\$30$. What is each person's share as an integer? ( $(-30) \\div 5$ )
3. A diver goes down $6$ meters each minute for $7$ minutes. What is the total change in depth? ( $7 \\times (-6)$ )`,
        exercise: {
          boxes: 3,
          correctAnswers: ['-12', '-6', '-42'],
          hint1:
            'A "drop," a "debt," and "going down" are all negative. Find the number part, then attach the negative sign.',
          hint2:
            'Problem 1: $4 \\times 3 = 12$. Problem 2: $30 \\div 5 = 6$. Problem 3: $7 \\times 6 = 42$. Each answer is negative because the situation describes a loss or downward change.',
          explanation:
            'Problem 1: $4 \\times (-3) = -12$ degrees. Problem 2: $(-30) \\div 5 = -6$, so each person owes $\\$6$. Problem 3: $7 \\times (-6) = -42$ meters.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## Application Check 🎯`,
        exercise: {
          questions: [
            {
              question:
                'A video game takes away $8$ points each time you miss a target. If you miss $5$ targets, what is your total score change?',
              options: ['$-40$ points', '$40$ points', '$-13$ points', '$-3$ points'],
              correctAnswer: 0,
              explanation:
                'Losing points is negative, so each miss is $-8$. Five misses give $5 \\times (-8) = -40$ points.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // partTitle: "Review & Mixed Challenge"
  // ============================================================
  {
    topicSlug: 'multiplying-dividing-integers',
    sections: [
      {
        id: 'p5-summary-text',
        type: 'text',
        content: `## Putting It All Together 🧠

You now have **one set of rules** that works for *both* multiplication and division. Here is the full summary:

| Operation | Signs of the numbers | Sign of the answer | Example |
|-----------|----------------------|:------------------:|---------|
| Multiply  | Same (++ or −−)      | **Positive** | $(-6)\\times(-3)=18$ |
| Multiply  | Different (+− or −+) | **Negative** | $(-6)\\times 3=-18$ |
| Divide    | Same (++ or −−)      | **Positive** | $(-18)\\div(-3)=6$ |
| Divide    | Different (+− or −+) | **Negative** | $18\\div(-3)=-6$ |

**Remember these two key ideas:**

- **Same signs → Positive.** **Different signs → Negative.**
- For three or more factors, **count the negatives**: even → positive, odd → negative.

Ready for the final challenge? It mixes everything together!`,
      },
      {
        id: 'p5-challenge-mc',
        type: 'multiple-choice',
        content: `## 🏆 Mixed Challenge

Use the sign rules carefully — these mix multiplication and division.`,
        exercise: {
          questions: [
            {
              question: 'What is $(-4) \\times (-2) \\times (-3)$?',
              options: ['$24$', '$-24$', '$-9$', '$9$'],
              correctAnswer: 1,
              explanation:
                'Count the negatives: there are three, which is odd, so the answer is negative. The numbers give $4 \\times 2 \\times 3 = 24$, so the answer is $-24$.',
            },
            {
              question: 'What is $(-6) \\times 4 \\div (-3)$?',
              options: ['$-8$', '$8$', '$-2$', '$72$'],
              correctAnswer: 1,
              explanation:
                'Work left to right: $(-6) \\times 4 = -24$ (different signs). Then $(-24) \\div (-3) = 8$ (same signs, positive).',
            },
          ],
        },
      },
    ],
  },
]
