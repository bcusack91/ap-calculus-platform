import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'comparing-fractions-grade4',
    sections: [
      {
        id: 'p1-intro',
        type: 'text',
        content: `## Comparing Fractions 🍕

Which is bigger, $\\frac{3}{8}$ of a pizza or $\\frac{5}{8}$ of a pizza? Comparing fractions means deciding which fraction is **larger**, which is **smaller**, or whether they are **equal**.

We use three symbols when we compare:

- $<$ means **less than** (the small end points to the smaller number)
- $>$ means **greater than**
- $=$ means **equal to**

The most important idea in this lesson is simple: **you can only compare two fractions fairly when the pieces are the same size.** Same-size pieces means the same **denominator** (the bottom number).`,
      },
      {
        id: 'p1-same-denominator',
        type: 'text',
        content: `## Same Denominator

When two fractions have the **same denominator**, the pieces are already the same size. So you just compare the **numerators** (the top numbers) — whoever has more pieces wins.

**Example:** Compare $\\frac{3}{8}$ and $\\frac{5}{8}$.

Both fractions are made of eighths, so each piece is the same size. We have **3 pieces** versus **5 pieces**, and $3 < 5$.

$$\\frac{3}{8} < \\frac{5}{8}$$

It really is that easy: **same bottom, just look at the top.**`,
      },
      {
        id: 'p1-same-numerator',
        type: 'text',
        content: `## A Sneaky Trick: Same Numerator

What if the **numerators** are the same but the denominators are different? Think about it: would you rather share a candy bar with $4$ friends or with $8$ friends?

Fewer people means **bigger pieces**! So when the numerators match, the fraction with the **smaller denominator** is **larger**.

| Fraction | Pieces | Piece size |
|----------|--------|-----------|
| $\\frac{3}{4}$ | 3 | big |
| $\\frac{3}{8}$ | 3 | small |

Both have 3 pieces, but fourths are bigger than eighths, so:

$$\\frac{3}{4} > \\frac{3}{8}$$

**Rule of thumb:** Same numerator? **Smaller denominator = larger fraction.**`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Check ✅

Let's make sure the main idea stuck.`,
        exercise: {
          questions: [
            {
              question: 'Compare $\\frac{2}{6}$ and $\\frac{5}{6}$. Which statement is true?',
              options: [
                '$\\frac{2}{6} > \\frac{5}{6}$',
                '$\\frac{2}{6} < \\frac{5}{6}$',
                '$\\frac{2}{6} = \\frac{5}{6}$',
                'You cannot compare them',
              ],
              correctAnswer: 1,
              explanation:
                'Both fractions are sixths, so the pieces are the same size. Since $2 < 5$, we have $\\frac{2}{6} < \\frac{5}{6}$.',
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
    topicSlug: 'comparing-fractions-grade4',
    sections: [
      {
        id: 'p2-common-denominator',
        type: 'text',
        content: `## Different Denominators: Find a Common Denominator

When the denominators are **different**, the pieces are different sizes, so we cannot compare yet. First we **rewrite both fractions** so they have the **same denominator**. This is called finding a **common denominator**.

**Example:** Compare $\\frac{1}{2}$ and $\\frac{2}{5}$.

**Step 1 — Find a common denominator.** A denominator that works for both 2 and 5 is $2 \\times 5 = 10$.

**Step 2 — Rewrite each fraction as tenths.**

- $\\frac{1}{2} = \\frac{1 \\times 5}{2 \\times 5} = \\frac{5}{10}$
- $\\frac{2}{5} = \\frac{2 \\times 2}{5 \\times 2} = \\frac{4}{10}$

**Step 3 — Compare the numerators.** Now both are tenths, so compare the tops: $5 > 4$.

$$\\frac{5}{10} > \\frac{4}{10} \\quad\\Rightarrow\\quad \\frac{1}{2} > \\frac{2}{5}$$`,
      },
      {
        id: 'p2-second-example',
        type: 'text',
        content: `## One More Worked Example

**Compare $\\frac{2}{3}$ and $\\frac{3}{4}$.**

**Step 1 — Common denominator:** $3 \\times 4 = 12$.

**Step 2 — Rewrite both fractions:**

| Fraction | Multiply by | New fraction |
|----------|-------------|--------------|
| $\\frac{2}{3}$ | $\\frac{4}{4}$ | $\\frac{8}{12}$ |
| $\\frac{3}{4}$ | $\\frac{3}{3}$ | $\\frac{9}{12}$ |

**Step 3 — Compare numerators:** $8 < 9$, so

$$\\frac{2}{3} < \\frac{3}{4}$$`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn ✏️

Compare $\\frac{1}{4}$ and $\\frac{2}{3}$ using the common denominator **12**.

- **Box 1:** Rewrite $\\frac{1}{4}$ as a fraction over 12. Type just the **numerator** (the new top number).
- **Box 2:** Rewrite $\\frac{2}{3}$ as a fraction over 12. Type just the **numerator**.
- **Box 3:** Which symbol makes it true: $\\frac{1}{4}\\;\\square\\;\\frac{2}{3}$? Type $<$ or $>$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3', '8', '<'],
          hint1: 'To make 4 into 12, multiply by 3, so multiply the top by 3 too. To make 3 into 12, multiply by 4.',
          hint2: 'You should get $\\frac{3}{12}$ and $\\frac{8}{12}$. Now compare 3 and 8.',
          explanation:
            '$\\frac{1}{4} = \\frac{3}{12}$ and $\\frac{2}{3} = \\frac{8}{12}$. Since $3 < 8$, we have $\\frac{1}{4} < \\frac{2}{3}$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'comparing-fractions-grade4',
    sections: [
      {
        id: 'p3-multiple-choice',
        type: 'multiple-choice',
        content: `## Guided Practice 🧭

Use what you have learned to compare each pair.`,
        exercise: {
          questions: [
            {
              question: 'Same numerator! Compare $\\frac{4}{5}$ and $\\frac{4}{9}$. Which is true?',
              options: [
                '$\\frac{4}{5} < \\frac{4}{9}$',
                '$\\frac{4}{5} = \\frac{4}{9}$',
                '$\\frac{4}{5} > \\frac{4}{9}$',
                'Cannot tell',
              ],
              correctAnswer: 2,
              explanation:
                'The numerators are both 4. Fifths are bigger pieces than ninths, so the smaller denominator wins: $\\frac{4}{5} > \\frac{4}{9}$.',
            },
            {
              question: 'Compare $\\frac{3}{4}$ and $\\frac{5}{8}$. Use a common denominator of 8.',
              options: [
                '$\\frac{3}{4} < \\frac{5}{8}$',
                '$\\frac{3}{4} > \\frac{5}{8}$',
                '$\\frac{3}{4} = \\frac{5}{8}$',
                'They cannot be compared',
              ],
              correctAnswer: 1,
              explanation:
                '$\\frac{3}{4} = \\frac{6}{8}$. Comparing $\\frac{6}{8}$ and $\\frac{5}{8}$, we see $6 > 5$, so $\\frac{3}{4} > \\frac{5}{8}$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Choose the Right Symbol 🔽

Pick the symbol that makes each comparison true.`,
        exercise: {
          dropdowns: [
            { label: 'Compare: $\\frac{2}{7} \\;\\square\\; \\frac{5}{7}$', options: ['<', '>', '='] },
            { label: 'Compare: $\\frac{1}{2} \\;\\square\\; \\frac{3}{6}$', options: ['<', '>', '='] },
          ],
          correctAnswers: ['<', '='],
          hint1:
            'For the first pair the denominators match, so compare the tops. For the second, rewrite $\\frac{1}{2}$ as sixths.',
          explanation:
            'First pair: both are sevenths and $2 < 5$, so $\\frac{2}{7} < \\frac{5}{7}$. Second pair: $\\frac{1}{2} = \\frac{3}{6}$, so the two fractions are equal.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'comparing-fractions-grade4',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Fractions in Real Life 🌍

Comparing fractions shows up everywhere — sharing food, reading recipes, and tracking how much of a job is done.

**Benchmark fractions** are a quick way to estimate. Ask yourself: is this fraction close to $0$, close to $\\frac{1}{2}$, or close to $1$?

- $\\frac{1}{8}$ has only a tiny piece, so it is **close to 0**.
- $\\frac{7}{8}$ is almost the whole thing, so it is **close to 1**.

So without any hard math, $\\frac{7}{8} > \\frac{1}{8}$. Benchmarks let you compare quickly when one fraction is small and the other is big.`,
      },
      {
        id: 'p4-word-input',
        type: 'input-boxes',
        content: `## Recipe Problem 🧁

A muffin recipe needs $\\frac{2}{3}$ cup of sugar. A cookie recipe needs $\\frac{3}{4}$ cup of sugar. Use a common denominator of **12** to find out which recipe uses more sugar.

- **Box 1:** Rewrite $\\frac{2}{3}$ over 12. Type just the **numerator**.
- **Box 2:** Rewrite $\\frac{3}{4}$ over 12. Type just the **numerator**.
- **Box 3:** Which recipe uses more sugar? Type **muffin** or **cookie**.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '9', 'cookie'],
          hint1: 'To make 3 into 12, multiply by 4. To make 4 into 12, multiply by 3. Do the same to each top.',
          hint2: 'You get $\\frac{8}{12}$ and $\\frac{9}{12}$. The larger numerator uses more sugar.',
          explanation:
            '$\\frac{2}{3} = \\frac{8}{12}$ and $\\frac{3}{4} = \\frac{9}{12}$. Since $9 > 8$, the cookie recipe uses more sugar.',
        },
      },
      {
        id: 'p4-word-mc',
        type: 'multiple-choice',
        content: `## Reading Challenge 📚`,
        exercise: {
          questions: [
            {
              question:
                'Maya read $\\frac{5}{6}$ of her book. Leo read $\\frac{1}{6}$ of his book. Who is closer to finishing, using benchmarks?',
              options: [
                'Leo, because $\\frac{1}{6}$ is close to 1',
                'Maya, because $\\frac{5}{6}$ is close to 1',
                'They are equal',
                'You cannot compare them',
              ],
              correctAnswer: 1,
              explanation:
                '$\\frac{5}{6}$ is almost a whole (close to 1), while $\\frac{1}{6}$ is close to 0. So Maya is closer to finishing.',
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
    topicSlug: 'comparing-fractions-grade4',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: All Your Tools 🛠️

You now have three ways to compare fractions. Pick whichever fits the problem!

| Situation | What to do | Example |
|-----------|-----------|---------|
| **Same denominator** | Compare the numerators (tops) | $\\frac{3}{8} < \\frac{5}{8}$ |
| **Same numerator** | Smaller denominator = larger fraction | $\\frac{3}{4} > \\frac{3}{8}$ |
| **Different denominators** | Find a common denominator, then compare tops | $\\frac{1}{2} > \\frac{2}{5}$ |
| **One small, one big** | Use benchmarks ($0$, $\\frac{1}{2}$, $1$) | $\\frac{7}{8} > \\frac{1}{8}$ |

**Remember:** You can only compare fairly when the pieces are the **same size** — that means the **same denominator**.`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Mixed Challenge 🏆

These questions mix every idea from the lesson. Take your time!`,
        exercise: {
          questions: [
            {
              question: 'Compare $\\frac{5}{6}$ and $\\frac{5}{8}$. Which is true?',
              options: [
                '$\\frac{5}{6} < \\frac{5}{8}$',
                '$\\frac{5}{6} > \\frac{5}{8}$',
                '$\\frac{5}{6} = \\frac{5}{8}$',
                'Cannot tell',
              ],
              correctAnswer: 1,
              explanation:
                'The numerators are both 5. Sixths are bigger pieces than eighths, so the smaller denominator wins: $\\frac{5}{6} > \\frac{5}{8}$.',
            },
            {
              question: 'Compare $\\frac{2}{3}$ and $\\frac{5}{6}$ using a common denominator of 6. Which is true?',
              options: [
                '$\\frac{2}{3} > \\frac{5}{6}$',
                '$\\frac{2}{3} = \\frac{5}{6}$',
                '$\\frac{2}{3} < \\frac{5}{6}$',
                'They cannot be compared',
              ],
              correctAnswer: 2,
              explanation:
                '$\\frac{2}{3} = \\frac{4}{6}$. Comparing $\\frac{4}{6}$ and $\\frac{5}{6}$, we see $4 < 5$, so $\\frac{2}{3} < \\frac{5}{6}$.',
            },
          ],
        },
      },
    ],
  },
]
