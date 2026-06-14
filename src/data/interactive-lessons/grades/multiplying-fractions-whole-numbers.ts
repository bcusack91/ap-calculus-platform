import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ===================================================================
  // PART 1 — Concept Introduction
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-whole-numbers',
    sections: [
      {
        id: 'mfwn-p1-intro',
        type: 'text',
        content: `
# ✖️ Multiplying Fractions by Whole Numbers

**Multiplying a fraction by a whole number just means adding that fraction over and over again.**

When you see $3 \\times \\frac{1}{4}$, read it as **"3 groups of $\\frac{1}{4}$."** That is the same as:

$$\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} = \\frac{3}{4}$$

So multiplying by a whole number is really just a **shortcut for repeated addition**. Instead of adding the fraction many times, you can multiply!

### What stays the same?
- The **denominator** (bottom number) does **not** change.
- Only the **numerator** (top number) gets bigger.
        `,
      },
      {
        id: 'mfwn-p1-visual',
        type: 'text',
        content: `
## Picture It: Repeated Addition

Let's look at $4 \\times \\frac{1}{5}$. That means we want **4 copies of $\\frac{1}{5}$**.

$$\\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} + \\frac{1}{5} = \\frac{4}{5}$$

Imagine 4 strips, each with one out of five pieces shaded:

\`\`\`
[■][□][□][□][□]   ← 1/5
[■][□][□][□][□]   ← 1/5
[■][□][□][□][□]   ← 1/5
[■][□][□][□][□]   ← 1/5
─────────────────
4 shaded fifths   =  4/5
\`\`\`

We added the numerators ($1+1+1+1 = 4$) and kept the denominator ($5$). Answer: $\\frac{4}{5}$ ✓
        `,
      },
      {
        id: 'mfwn-p1-rule',
        type: 'text',
        content: `
## ⭐ The Simple Rule

To multiply a whole number by a fraction:

1. **Multiply** the whole number by the **numerator** (top number).
2. **Keep** the **denominator** (bottom number) the same.
3. **Simplify** if you can.

**Example:** $5 \\times \\frac{2}{3}$

- Multiply the tops: $5 \\times 2 = 10$
- Keep the bottom: $3$
- Answer: $\\frac{10}{3}$

That's it — fast and easy!
        `,
      },
      {
        id: 'mfwn-p1-check',
        type: 'multiple-choice',
        content: `
## Concept Check 🎯

Make sure the big idea makes sense before we move on.
        `,
        exercise: {
          questions: [
            {
              question: 'What does $3 \\times \\frac{1}{4}$ mean?',
              options: [
                '$\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4}$',
                '$\\frac{1}{4} + 3$',
                '$\\frac{3}{12}$',
                '$\\frac{1}{4} - \\frac{1}{4} - \\frac{1}{4}$',
              ],
              correctAnswer: 0,
              explanation:
                'Multiplying a fraction by a whole number means repeated addition. $3 \\times \\frac{1}{4}$ is three groups of $\\frac{1}{4}$, which is $\\frac{1}{4} + \\frac{1}{4} + \\frac{1}{4} = \\frac{3}{4}$.',
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
    topicSlug: 'multiplying-fractions-whole-numbers',
    sections: [
      {
        id: 'mfwn-p2-worked',
        type: 'text',
        content: `
# 🛠️ Worked Examples

Let's walk through the rule step by step. Remember: **multiply the tops, keep the bottom.**

### Example 1: $3 \\times \\frac{1}{4}$
- Multiply the tops: $3 \\times 1 = 3$
- Keep the bottom: $4$
- **Answer:** $\\frac{3}{4}$ ✓

### Example 2: $6 \\times \\frac{2}{5}$
- Multiply the tops: $6 \\times 2 = 12$
- Keep the bottom: $5$
- **Answer:** $\\frac{12}{5}$, which is the mixed number $2\\frac{2}{5}$ ✓

### Example 3: $4 \\times \\frac{3}{8}$
- Multiply the tops: $4 \\times 3 = 12$
- Keep the bottom: $8$
- That gives $\\frac{12}{8}$. Now **simplify**: $\\frac{12}{8} = \\frac{3}{2} = 1\\frac{1}{2}$ ✓
        `,
      },
      {
        id: 'mfwn-p2-whole-as-fraction',
        type: 'text',
        content: `
## Another Way to See It

Any whole number can be written as a fraction over **1**:

- $3 = \\frac{3}{1}$
- $5 = \\frac{5}{1}$
- $7 = \\frac{7}{1}$

Then you multiply tops together and bottoms together.

**Example:** $4 \\times \\frac{2}{3} = \\frac{4}{1} \\times \\frac{2}{3}$
- Tops: $4 \\times 2 = 8$
- Bottoms: $1 \\times 3 = 3$
- **Answer:** $\\frac{8}{3} = 2\\frac{2}{3}$ ✓

Same answer — just a different path!
        `,
      },
      {
        id: 'mfwn-p2-input',
        type: 'input-boxes',
        content: `
## Your Turn 🧮

Fill in each answer. Type fractions like \`12/5\` and whole numbers like \`6\`.

1) $2 \\times \\frac{3}{7} = ?$  (write as a fraction)

2) $5 \\times \\frac{1}{8} = ?$  (write as a fraction)

3) $3 \\times \\frac{2}{9} = ?$  (write as a fraction)
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['6/7', '5/8', '6/9'],
          hint1: 'Multiply the whole number by the top number, and keep the bottom number the same.',
          hint2: 'For #1: $2 \\times 3 = 6$, keep the $7$, so the answer is $\\frac{6}{7}$.',
          explanation:
            '1) $2 \\times \\frac{3}{7} = \\frac{6}{7}$. 2) $5 \\times \\frac{1}{8} = \\frac{5}{8}$. 3) $3 \\times \\frac{2}{9} = \\frac{6}{9}$ (which also simplifies to $\\frac{2}{3}$).',
        },
      },
    ],
  },

  // ===================================================================
  // PART 3 — Guided Practice
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-whole-numbers',
    sections: [
      {
        id: 'mfwn-p3-mcq',
        type: 'multiple-choice',
        content: `
# 🧭 Guided Practice

Choose the correct product for each one. Multiply the tops and keep the bottom!
        `,
        exercise: {
          questions: [
            {
              question: 'What is $2 \\times \\frac{4}{5}$?',
              options: ['$\\frac{8}{5}$', '$\\frac{8}{10}$', '$\\frac{6}{5}$', '$\\frac{2}{5}$'],
              correctAnswer: 0,
              explanation:
                'Multiply the tops: $2 \\times 4 = 8$, and keep the bottom $5$. The answer is $\\frac{8}{5}$.',
            },
            {
              question: 'What is $4 \\times \\frac{2}{3}$?',
              options: ['$\\frac{6}{3}$', '$\\frac{8}{3}$', '$\\frac{8}{12}$', '$\\frac{2}{12}$'],
              correctAnswer: 1,
              explanation:
                'Multiply the tops: $4 \\times 2 = 8$, and keep the bottom $3$. The answer is $\\frac{8}{3}$ (which is $2\\frac{2}{3}$).',
            },
          ],
        },
      },
      {
        id: 'mfwn-p3-dropdown',
        type: 'dropdown-select',
        content: `
## Finish the Steps 🔍

Use what you know about the rule to complete each statement.
        `,
        exercise: {
          dropdowns: [
            {
              label: 'When you multiply $6 \\times \\frac{1}{4}$, the denominator of the answer is',
              options: ['4', '6', '24', '10'],
            },
            {
              label: 'The product $3 \\times \\frac{2}{7}$ equals',
              options: ['$\\frac{6}{7}$', '$\\frac{5}{7}$', '$\\frac{6}{21}$', '$\\frac{2}{21}$'],
            },
          ],
          correctAnswers: ['4', '$\\frac{6}{7}$'],
          hint1:
            'The denominator never changes when you multiply by a whole number — only the top number grows.',
          explanation:
            'For $6 \\times \\frac{1}{4}$, the bottom stays $4$. For $3 \\times \\frac{2}{7}$, multiply the tops ($3 \\times 2 = 6$) and keep the bottom $7$, giving $\\frac{6}{7}$.',
        },
      },
    ],
  },

  // ===================================================================
  // PART 4 — Application & Word Problems
  // ===================================================================
  {
    topicSlug: 'multiplying-fractions-whole-numbers',
    sections: [
      {
        id: 'mfwn-p4-context',
        type: 'text',
        content: `
# 🌍 Real-World Word Problems

We multiply fractions by whole numbers all the time in real life!

### 🍪 Baking cookies
You make **3 batches** of cookies. Each batch needs $\\frac{2}{3}$ cup of sugar.

$$3 \\times \\frac{2}{3} = \\frac{6}{3} = 2 \\text{ cups of sugar} ✓$$

### 🏃 Running
You run $\\frac{3}{4}$ mile each day for **5 days**.

$$5 \\times \\frac{3}{4} = \\frac{15}{4} = 3\\frac{3}{4} \\text{ miles} ✓$$

### 🎀 Cutting ribbon
You need **4 pieces** of ribbon, each $\\frac{5}{8}$ yard long.

$$4 \\times \\frac{5}{8} = \\frac{20}{8} = 2\\frac{1}{2} \\text{ yards} ✓$$

**The trick:** find the whole number (how many groups) and the fraction (size of each group), then multiply!
        `,
      },
      {
        id: 'mfwn-p4-input',
        type: 'input-boxes',
        content: `
## Solve the Problems ✏️

Type fractions like \`6/3\` exactly as asked.

1) A recipe uses $\\frac{1}{3}$ cup of flour. You make 4 batches. How much flour total? (write as a fraction)

2) A snail crawls $\\frac{2}{5}$ meter each hour. How far in 3 hours? (write as a fraction)

3) Each gift needs $\\frac{1}{6}$ roll of tape. How much tape for 5 gifts? (write as a fraction)
        `,
        exercise: {
          boxes: 3,
          correctAnswers: ['4/3', '6/5', '5/6'],
          hint1: 'The number of batches/hours/gifts is the whole number you multiply by.',
          hint2: 'For #1: $4 \\times \\frac{1}{3} = \\frac{4}{3}$.',
          explanation:
            '1) $4 \\times \\frac{1}{3} = \\frac{4}{3}$ cups. 2) $3 \\times \\frac{2}{5} = \\frac{6}{5}$ meters. 3) $5 \\times \\frac{1}{6} = \\frac{5}{6}$ roll.',
        },
      },
      {
        id: 'mfwn-p4-mcq',
        type: 'multiple-choice',
        content: `
## Word Problem Challenge 🎯
        `,
        exercise: {
          questions: [
            {
              question:
                'A water bottle holds $\\frac{3}{4}$ liter. How many liters do 6 bottles hold in all?',
              options: ['$\\frac{18}{4} = 4\\frac{1}{2}$ liters', '$\\frac{9}{4}$ liters', '$\\frac{6}{4}$ liters', '$\\frac{3}{24}$ liter'],
              correctAnswer: 0,
              explanation:
                'Multiply: $6 \\times \\frac{3}{4} = \\frac{18}{4}$. Simplify to $4\\frac{1}{2}$ liters.',
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
    topicSlug: 'multiplying-fractions-whole-numbers',
    sections: [
      {
        id: 'mfwn-p5-summary',
        type: 'text',
        content: `
# 🏆 Review & Challenge

You've learned how to multiply a fraction by a whole number. Here's the big picture in one table:

| Step | What to do | Example: $5 \\times \\frac{2}{3}$ |
|------|-----------|-------------------------------|
| 1 | Multiply whole number × numerator | $5 \\times 2 = 10$ |
| 2 | Keep the denominator the same | denominator stays $3$ |
| 3 | Write the fraction | $\\frac{10}{3}$ |
| 4 | Simplify or make a mixed number | $\\frac{10}{3} = 3\\frac{1}{3}$ |

**Remember:**
- It's just **repeated addition**.
- The **denominator never changes**.
- If the top ends up **bigger than the bottom**, you can write a **mixed number**.

Now try these challenge questions that mix everything together!
        `,
      },
      {
        id: 'mfwn-p5-mcq',
        type: 'multiple-choice',
        content: `
## Mixed Challenge 🎯
        `,
        exercise: {
          questions: [
            {
              question: 'What is $7 \\times \\frac{3}{4}$ written as a mixed number?',
              options: ['$5\\frac{1}{4}$', '$4\\frac{3}{4}$', '$\\frac{21}{4}$ exactly equals $4\\frac{1}{4}$', '$2\\frac{1}{4}$'],
              correctAnswer: 0,
              explanation:
                '$7 \\times \\frac{3}{4} = \\frac{21}{4}$. Since $21 \\div 4 = 5$ remainder $1$, that is $5\\frac{1}{4}$.',
            },
            {
              question: 'Which statement about $8 \\times \\frac{1}{3}$ is TRUE?',
              options: [
                'The denominator stays 3, so the answer is $\\frac{8}{3}$',
                'The denominator becomes 24, so the answer is $\\frac{8}{24}$',
                'You add 8 and 3 to get $\\frac{1}{11}$',
                'The answer is a whole number, $8$',
              ],
              correctAnswer: 0,
              explanation:
                'When multiplying by a whole number, the denominator stays the same. $8 \\times \\frac{1}{3} = \\frac{8}{3}$, which is $2\\frac{2}{3}$.',
            },
          ],
        },
      },
    ],
  },
]
