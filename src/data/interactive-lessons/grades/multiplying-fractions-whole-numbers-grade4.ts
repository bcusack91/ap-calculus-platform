import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ───────────────────────────── PART 1 ─────────────────────────────
  {
    topicSlug: 'multiplying-fractions-whole-numbers-grade4',
    sections: [
      {
        id: 'mfwn-p1-intro',
        type: 'text',
        content: `
# 🍕 Multiplying Fractions by Whole Numbers

**Part 1 of 5 — The Big Idea**

You already know how to multiply whole numbers, like $3 \\times 4 = 12$. Multiplying a **fraction** by a whole number works in a very similar way.

Multiplying a fraction by a whole number just means **adding that fraction over and over again**.

For example, $3 \\times \\frac{2}{5}$ means "three groups of $\\frac{2}{5}$":

$3 \\times \\frac{2}{5} = \\frac{2}{5} + \\frac{2}{5} + \\frac{2}{5} = \\frac{6}{5} = 1\\frac{1}{5}$

When we add fractions with the **same denominator**, we add the numerators (the top numbers) and keep the denominator (the bottom number) the same.
        `,
      },
      {
        id: 'mfwn-p1-shortcut',
        type: 'text',
        content: `
## ✨ The Shortcut

Adding the fraction many times works, but there is a faster way:

$$n \\times \\frac{a}{b} = \\frac{n \\times a}{b}$$

In plain words:

- **Multiply** the whole number by the **numerator** (the top number).
- **Keep** the **denominator** (the bottom number) exactly the same.

| Problem | Multiply the top | Keep the bottom | Answer |
|---------|------------------|-----------------|--------|
| $3 \\times \\frac{2}{5}$ | $3 \\times 2 = 6$ | $5$ | $\\frac{6}{5}$ |
| $4 \\times \\frac{1}{3}$ | $4 \\times 1 = 4$ | $3$ | $\\frac{4}{3}$ |
| $2 \\times \\frac{3}{7}$ | $2 \\times 3 = 6$ | $7$ | $\\frac{6}{7}$ |

Notice the bottom number **never changes**. Only the top number gets multiplied.
        `,
      },
      {
        id: 'mfwn-p1-whyworks',
        type: 'text',
        content: `
## 🤔 Why Does the Shortcut Work?

Think about $4 \\times \\frac{1}{3}$. That is four copies of $\\frac{1}{3}$:

$$\\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} + \\frac{1}{3} = \\frac{4}{3}$$

Each piece is one-third, and there are **4** of them. So we have $\\frac{4}{3}$. That is exactly $4 \\times 1$ on top, with the $3$ staying on the bottom. The shortcut and the repeated addition give the **same answer** every time.
        `,
      },
      {
        id: 'mfwn-p1-mcq',
        type: 'multiple-choice',
        content: `
**Concept Check** 🎯
        `,
        exercise: {
          questions: [
            {
              question: 'When you multiply a whole number by a fraction, what happens to the **denominator** (the bottom number)?',
              options: [
                'It stays the same.',
                'You multiply it by the whole number.',
                'You add the whole number to it.',
                'It becomes 1.',
              ],
              correctAnswer: 0,
              explanation: 'Only the numerator (top) gets multiplied by the whole number. The denominator stays the same, for example $3 \\times \\frac{2}{5} = \\frac{6}{5}$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────────── PART 2 ─────────────────────────────
  {
    topicSlug: 'multiplying-fractions-whole-numbers-grade4',
    sections: [
      {
        id: 'mfwn-p2-worked',
        type: 'text',
        content: `
# 🧮 Worked Examples

**Part 2 of 5 — Step by Step**

Let's work through a few problems slowly so you can see every step.

### Example 1: $4 \\times \\frac{3}{8}$

- **Step 1 — Multiply the top:** $4 \\times 3 = 12$.
- **Step 2 — Keep the bottom:** the denominator stays $8$.
- **Step 3 — Write it:** $\\frac{12}{8}$.
- **Step 4 — Simplify:** $\\frac{12}{8} = \\frac{3}{2} = 1\\frac{1}{2}$.

$$4 \\times \\frac{3}{8} = \\frac{12}{8} = 1\\frac{1}{2}$$

### Example 2: $5 \\times \\frac{1}{3}$

- **Multiply the top:** $5 \\times 1 = 5$.
- **Keep the bottom:** $3$.
- **Result:** $\\frac{5}{3}$, which equals $1\\frac{2}{3}$.

### Example 3: $6 \\times \\frac{2}{7}$

- **Multiply the top:** $6 \\times 2 = 12$.
- **Keep the bottom:** $7$.
- **Result:** $\\frac{12}{7} = 1\\frac{5}{7}$.
        `,
      },
      {
        id: 'mfwn-p2-mixed',
        type: 'text',
        content: `
## 🔁 Turning a Fraction Into a Mixed Number

When the top number is **bigger than** the bottom number, the fraction is greater than 1. We can write it as a **mixed number** (a whole number plus a fraction).

To do this, ask: *how many times does the bottom go into the top?*

- $\\frac{12}{7}$: the $7$ goes into $12$ **one** time with $5$ left over, so $\\frac{12}{7} = 1\\frac{5}{7}$.
- $\\frac{5}{3}$: the $3$ goes into $5$ **one** time with $2$ left over, so $\\frac{5}{3} = 1\\frac{2}{3}$.
        `,
      },
      {
        id: 'mfwn-p2-input',
        type: 'input-boxes',
        content: `
**Your Turn — Type Each Answer** 🧮

Use the shortcut: multiply the top, keep the bottom.

1) $2 \\times \\frac{3}{8} = \\frac{?}{8}$ — What is the **numerator** (top number)?

2) $5 \\times \\frac{2}{9} = \\frac{?}{9}$ — What is the **numerator** (top number)?

3) $3 \\times \\frac{1}{4} = \\frac{?}{4}$ — What is the **numerator** (top number)?
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '10', '3'],
          hint1: 'Multiply the whole number by the top of the fraction. The bottom number is already filled in for you.',
          hint2: 'For problem 1: $2 \\times 3$. For problem 2: $5 \\times 2$. For problem 3: $3 \\times 1$.',
          explanation: '1) $2 \\times 3 = 6$, so $\\frac{6}{8}$. 2) $5 \\times 2 = 10$, so $\\frac{10}{9}$. 3) $3 \\times 1 = 3$, so $\\frac{3}{4}$.',
        },
      },
    ],
  },

  // ───────────────────────────── PART 3 ─────────────────────────────
  {
    topicSlug: 'multiplying-fractions-whole-numbers-grade4',
    sections: [
      {
        id: 'mfwn-p3-mcq',
        type: 'multiple-choice',
        content: `
# 🏋️ Guided Practice

**Part 3 of 5 — Practice Together**

Pick the correct answer for each problem.
        `,
        exercise: {
          questions: [
            {
              question: 'What is $4 \\times \\frac{2}{5}$?',
              options: [
                '$\\frac{8}{5}$',
                '$\\frac{8}{20}$',
                '$\\frac{6}{5}$',
                '$\\frac{2}{20}$',
              ],
              correctAnswer: 0,
              explanation: 'Multiply the top: $4 \\times 2 = 8$. Keep the bottom $5$. The answer is $\\frac{8}{5}$.',
            },
            {
              question: 'What is $3 \\times \\frac{2}{3}$?',
              options: [
                '$\\frac{5}{3}$',
                '$\\frac{6}{9}$',
                '$2$',
                '$\\frac{6}{3}$ which is wrong because it equals 3',
              ],
              correctAnswer: 2,
              explanation: 'Multiply the top: $3 \\times 2 = 6$, keep the bottom $3$, giving $\\frac{6}{3}$. Since $6 \\div 3 = 2$, the answer is the whole number $2$.',
            },
          ],
        },
      },
      {
        id: 'mfwn-p3-dropdown',
        type: 'dropdown-select',
        content: `
**Choose the Correct Result** 🔍

Use the shortcut, then simplify if you can.
        `,
        exercise: {
          dropdowns: [
            {
              label: '$5 \\times \\frac{1}{6}$ equals',
              options: ['$\\frac{5}{6}$', '$\\frac{6}{5}$', '$\\frac{1}{30}$', '$\\frac{5}{30}$'],
            },
            {
              label: '$2 \\times \\frac{4}{5}$ equals',
              options: ['$\\frac{8}{5}$', '$\\frac{6}{5}$', '$\\frac{8}{10}$', '$\\frac{4}{10}$'],
            },
          ],
          correctAnswers: ['$\\frac{5}{6}$', '$\\frac{8}{5}$'],
          hint1: 'Multiply the whole number by the top number, and keep the bottom number the same.',
          explanation: '$5 \\times \\frac{1}{6} = \\frac{5}{6}$. $2 \\times \\frac{4}{5} = \\frac{8}{5}$.',
        },
      },
    ],
  },

  // ───────────────────────────── PART 4 ─────────────────────────────
  {
    topicSlug: 'multiplying-fractions-whole-numbers-grade4',
    sections: [
      {
        id: 'mfwn-p4-context',
        type: 'text',
        content: `
# 🌎 Word Problems

**Part 4 of 5 — Real-World Math**

Multiplying fractions by whole numbers shows up all the time in real life — sharing pizza, measuring ingredients, or running laps.

### Example: Sharing Pizza 🍕

*Each person eats $\\frac{3}{8}$ of a pizza. How much pizza do **4** people eat?*

We need **4 groups** of $\\frac{3}{8}$, so we multiply:

$$4 \\times \\frac{3}{8} = \\frac{12}{8} = 1\\frac{4}{8} = 1\\frac{1}{2} \\text{ pizzas}$$

**Tip:** Look for the words "**each**" and "**how many in total**." That is a clue to multiply!
        `,
      },
      {
        id: 'mfwn-p4-input',
        type: 'input-boxes',
        content: `
**Word Problem Practice** ✏️

Read carefully and type each answer.

1) A recipe uses $\\frac{2}{3}$ cup of flour. You make **3** batches. Total cups of flour $= 3 \\times \\frac{2}{3}$. Type the answer as a whole number.

2) Maya runs $\\frac{3}{10}$ of a mile each day. After **4** days she has run $4 \\times \\frac{3}{10} = \\frac{?}{10}$ miles. Type the **numerator** (top number).

3) Each cup holds $\\frac{1}{4}$ liter of juice. **5** cups hold $5 \\times \\frac{1}{4} = \\frac{?}{4}$ liters. Type the **numerator** (top number).
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '12', '5'],
          hint1: 'Multiply the whole number by the top of the fraction first.',
          hint2: 'Problem 1: $3 \\times \\frac{2}{3} = \\frac{6}{3}$, and $6 \\div 3 = 2$. Problems 2 and 3 just need the top number.',
          explanation: '1) $3 \\times \\frac{2}{3} = \\frac{6}{3} = 2$ cups. 2) $4 \\times 3 = 12$, so $\\frac{12}{10}$ miles. 3) $5 \\times 1 = 5$, so $\\frac{5}{4}$ liters.',
        },
      },
      {
        id: 'mfwn-p4-mcq',
        type: 'multiple-choice',
        content: `
**Solve the Story Problem** 📖
        `,
        exercise: {
          questions: [
            {
              question: 'A glass holds $\\frac{2}{5}$ of a liter of water. How much water do **3** glasses hold in total?',
              options: [
                '$\\frac{6}{5}$ liter, which is $1\\frac{1}{5}$ liters',
                '$\\frac{6}{15}$ liter',
                '$\\frac{2}{15}$ liter',
                '$\\frac{5}{6}$ liter',
              ],
              correctAnswer: 0,
              explanation: 'Three glasses means $3 \\times \\frac{2}{5}$. Multiply the top: $3 \\times 2 = 6$, keep the bottom $5$, giving $\\frac{6}{5} = 1\\frac{1}{5}$ liters.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────────── PART 5 ─────────────────────────────
  {
    topicSlug: 'multiplying-fractions-whole-numbers-grade4',
    sections: [
      {
        id: 'mfwn-p5-summary',
        type: 'text',
        content: `
# 🏆 Review & Challenge

**Part 5 of 5 — Putting It All Together**

You made it! Here is everything in one place.

| Step | What to do | Example |
|------|------------|---------|
| 1 | Multiply the whole number by the **top** (numerator) | $4 \\times \\frac{3}{8}$: $4 \\times 3 = 12$ |
| 2 | **Keep** the bottom (denominator) the same | bottom stays $8$ → $\\frac{12}{8}$ |
| 3 | **Simplify** by dividing top and bottom by their GCF | $\\frac{12}{8} = \\frac{3}{2}$ |
| 4 | Write big fractions as a **mixed number** | $\\frac{3}{2} = 1\\frac{1}{2}$ |

**Remember the rule:** $n \\times \\frac{a}{b} = \\frac{n \\times a}{b}$ — and **always simplify your final answer!**
        `,
      },
      {
        id: 'mfwn-p5-mcq',
        type: 'multiple-choice',
        content: `
**Challenge Questions** 🌟

Mix everything you learned!
        `,
        exercise: {
          questions: [
            {
              question: 'Which expression is the **same** as $4 \\times \\frac{1}{6}$?',
              options: [
                '$\\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6} + \\frac{1}{6}$',
                '$\\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{1}{6} \\times \\frac{1}{6}$',
                '$4 + \\frac{1}{6}$',
                '$\\frac{4}{24}$',
              ],
              correctAnswer: 0,
              explanation: 'Multiplying by a whole number means repeated addition: $4 \\times \\frac{1}{6}$ is four copies of $\\frac{1}{6}$ added together, which equals $\\frac{4}{6}$.',
            },
            {
              question: 'What is $6 \\times \\frac{2}{3}$, written in simplest form?',
              options: [
                '$\\frac{12}{18}$',
                '$4$',
                '$\\frac{8}{3}$',
                '$\\frac{12}{3}$ without simplifying',
              ],
              correctAnswer: 1,
              explanation: 'Multiply the top: $6 \\times 2 = 12$, keep the bottom $3$, giving $\\frac{12}{3}$. Since $12 \\div 3 = 4$, the simplest form is the whole number $4$.',
            },
          ],
        },
      },
    ],
  },
]
