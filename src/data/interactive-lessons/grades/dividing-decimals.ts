import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // partTitle: "What Does Dividing Decimals Mean?"
  // ============================================================
  {
    topicSlug: 'dividing-decimals',
    sections: [
      {
        id: 'p1-why-divide',
        type: 'text',
        content: `## Why Do We Divide Decimals? 🍕

**Division** means splitting something into equal groups or sharing it fairly. We do this with decimals all the time in real life:

- **Splitting a bill:** \\$45.75 ÷ 3 friends
- **Finding the unit price:** \\$6.75 for $5$ snacks → how much is *one*?
- **Sharing a measurement:** $12.5$ feet of rope $\\div\\ 5$ pieces

A **decimal** is just a number with a point in it, like $12.6$ or $0.4$. Dividing decimals uses the same long division you already know — we just have to take good care of that little **decimal point**.`,
      },
      {
        id: 'p1-by-whole-number',
        type: 'text',
        content: `## Dividing a Decimal by a Whole Number ➗

The easiest case is when the number you are **dividing by** (the *divisor*) is a whole number.

**Example:** $12.6 \\div 3$

**The big trick:** bring the decimal point **straight up** into your answer, then divide like normal!

\`\`\`
    4.2
  ------
3 | 12.6
    12
    --
     06
      6
     --
      0  ✓
\`\`\`

**Step by step:**
1. The decimal point in $12.6$ is between the $2$ and the $6$. Bring it **straight up** to that same spot in the answer.
2. $12 \\div 3 = 4$ → write the $4$.
3. $6 \\div 3 = 2$ → write the $2$.

**Answer:** $12.6 \\div 3 = 4.2$ ✓`,
      },
      {
        id: 'p1-key-rule',
        type: 'text',
        content: `## ⭐ The Key Rule for Dividing BY a Decimal

What if you divide *by* a decimal, like $7.2 \\div 0.4$? We don't like dividing by a decimal, so we change it!

> **Make the divisor (the outside number) a whole number by moving its decimal point to the right.**
>
> **Then move the decimal point the SAME number of places in the dividend (the inside number).**

| Original problem | Move decimals | New problem |
|:---:|:---:|:---:|
| $7.2 \\div 0.4$ | 1 place right | $72 \\div 4$ |
| $4.68 \\div 0.6$ | 1 place right | $46.8 \\div 6$ |
| $15 \\div 0.4$ | 1 place right | $150 \\div 4$ |

Moving the decimal the **same** number of places in **both** numbers keeps the answer exactly the same. It's like making both numbers $10$ times (or $100$ times) bigger — the division result doesn't change!`,
      },
      {
        id: 'p1-concept-check',
        type: 'multiple-choice',
        content: `## Quick Concept Check ✅

Let's make sure the big idea is clear.`,
        exercise: {
          questions: [
            {
              question:
                'To divide $5.6 \\div 0.7$, what is the FIRST thing you should do?',
              options: [
                'Move the decimal so $0.7$ becomes the whole number $7$, and move $5.6$ the same way to get $56$',
                'Move the decimal so $5.6$ becomes $56$ but leave $0.7$ alone',
                'Add a zero to make $5.60$ and divide by $0.7$',
                'Subtract $0.7$ from $5.6$ first',
              ],
              correctAnswer: 0,
              explanation:
                'We make the divisor a whole number: $0.7$ becomes $7$ (move 1 place right). Then we move the decimal the SAME 1 place in $5.6$ to get $56$. Now solve $56 \\div 7 = 8$.',
            },
          ],
        },
      },
    ],
  },

  // ============================================================
  // PART 2 — Worked Examples
  // partTitle: "Dividing Step by Step"
  // ============================================================
  {
    topicSlug: 'dividing-decimals',
    sections: [
      {
        id: 'p2-worked-decimal-divisor',
        type: 'text',
        content: `## Worked Example: Dividing by a Decimal 🧮

Let's fully solve $4.68 \\div 0.6$, one step at a time.

**Step 1 — Make the divisor a whole number.**
Move the decimal in $0.6$ one place right → it becomes $6$.

**Step 2 — Move the dividend the SAME number of places.**
Move the decimal in $4.68$ one place right → it becomes $46.8$.

So now we solve the easier problem: $46.8 \\div 6$.

**Step 3 — Divide, bringing the point straight up.**

\`\`\`
    7.8
  ------
6 | 46.8
    42
    --
     4 8
     4 8
     ---
       0  ✓
\`\`\`

- $46 \\div 6 = 7$ (since $6 \\times 7 = 42$), remainder $4$.
- Bring down the $8$ → $48$. The decimal point comes straight up here.
- $48 \\div 6 = 8$.

**Answer:** $4.68 \\div 0.6 = 7.8$ ✓`,
      },
      {
        id: 'p2-worked-add-zeros',
        type: 'text',
        content: `## Worked Example: Adding Zeros When Needed ➕0️⃣

Sometimes the division doesn't end neatly, so we **add zeros** after the decimal point to keep going. Adding a zero on the end never changes the value ($15 = 15.0 = 15.00$).

**Example:** $15 \\div 0.4$

**Step 1 — Make $0.4$ a whole number:** move 1 place right → $4$.
**Step 2 — Move $15$ the same 1 place right:** $15 \\to 150$ (you can write it as $150.0$).

**Step 3 — Divide $150 \\div 4$, adding a zero to finish:**

\`\`\`
    37.5
  -------
4 | 150.0
    12
    --
     30
     28
     --
      20
      20
      --
       0  ✓
\`\`\`

- $15 \\div 4 = 3$, remainder $3$ → bring down $0$ to make $30$.
- $30 \\div 4 = 7$, remainder $2$ → bring down a $0$ (added!) to make $20$.
- $20 \\div 4 = 5$.

**Answer:** $15 \\div 0.4 = 37.5$ ✓`,
      },
      {
        id: 'p2-input-practice',
        type: 'input-boxes',
        content: `## Your Turn: Divide These ✍️

Use the steps you just learned. Type each answer as a decimal number, like \`4.2\`.

1. $8.4 \\div 4 = \\;?$
2. $9.6 \\div 0.8 = \\;?$  (make $0.8$ into $8$ first!)
3. $6 \\div 0.5 = \\;?$  (make $0.5$ into $5$, and $6$ into $60$)`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2.1', '12', '12'],
          hint1:
            'For #1 the divisor is already a whole number — just bring the point straight up. For #2 and #3, move BOTH decimals the same number of places to the right first.',
          hint2:
            'Problem 2 becomes $96 \\div 8$. Problem 3 becomes $60 \\div 5$. Then divide as usual.',
          explanation:
            'Problem 1: $8.4 \\div 4 = 2.1$ (bring the point straight up). Problem 2: $9.6 \\div 0.8 = 96 \\div 8 = 12$. Problem 3: $6 \\div 0.5 = 60 \\div 5 = 12$.',
        },
      },
    ],
  },

  // ============================================================
  // PART 3 — Guided Practice
  // partTitle: "Guided Practice"
  // ============================================================
  {
    topicSlug: 'dividing-decimals',
    sections: [
      {
        id: 'p3-mc',
        type: 'multiple-choice',
        content: `## Multiple Choice 🎯

Work through each one carefully. Move the decimals first if you are dividing by a decimal!`,
        exercise: {
          questions: [
            {
              question: 'What is $14.4 \\div 6$?',
              options: ['2.4', '2.04', '24', '0.24'],
              correctAnswer: 0,
              explanation:
                'Bring the point straight up and divide: $14 \\div 6 = 2$ remainder $2$, bring down the $4$ to make $24$, and $24 \\div 6 = 4$. So the answer is $2.4$.',
            },
            {
              question: 'What is $3.5 \\div 0.7$?',
              options: ['0.5', '5', '50', '2.8'],
              correctAnswer: 1,
              explanation:
                'Make $0.7$ into $7$ (1 place right) and $3.5$ into $35$ (1 place right). Then $35 \\div 7 = 5$.',
            },
          ],
        },
      },
      {
        id: 'p3-dropdown',
        type: 'dropdown-select',
        content: `## Dividing by 10, 100, and 1,000 🔽

**Quick rule:** dividing by $10$, $100$, or $1{,}000$ just moves the decimal point to the **LEFT**!

- $\\div\\ 10$ → move **1** place left
- $\\div\\ 100$ → move **2** places left
- $\\div\\ 1{,}000$ → move **3** places left

Choose the correct answer for each.`,
        exercise: {
          dropdowns: [
            { label: '$34.5 \\div 10 = $', options: ['3.45', '345', '0.345'] },
            { label: '$34.5 \\div 100 = $', options: ['3.45', '0.345', '0.0345'] },
          ],
          correctAnswers: ['3.45', '0.345'],
          hint1:
            'Dividing by 10 moves the point 1 place left. Dividing by 100 moves it 2 places left. Each move makes the number smaller.',
          explanation:
            '$34.5 \\div 10 = 3.45$ (point moves 1 place left). $34.5 \\div 100 = 0.345$ (point moves 2 places left, so we add a zero in front).',
        },
      },
    ],
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // partTitle: "Decimals in the Real World"
  // ============================================================
  {
    topicSlug: 'dividing-decimals',
    sections: [
      {
        id: 'p4-context',
        type: 'text',
        content: `## Dividing Decimals in the Real World 🌎

Dividing decimals helps us **share money fairly** and **find the price of one item**.

**Splitting a bill:** Three friends split a \\$47.85 dinner evenly. How much does each pay?

Solve \\$47.85 ÷ 3:

\`\`\`
    15.95
  -------
3 | 47.85
     3
    --
    17
    15
    --
     28
     27
     --
      15
      15
      --
       0  ✓
\`\`\`

Each friend pays **\\$15.95**.

**Finding the unit price:** $4$ apples cost \\$3.96. How much is **one** apple?

Solve \\$3.96 ÷ 4 = \\$0.99 per apple. Knowing the **unit price** lets you compare deals at the store. Now try a few yourself!`,
      },
      {
        id: 'p4-input',
        type: 'input-boxes',
        content: `## Word Problem Practice 💵

Type each answer as a decimal number (no dollar sign needed), like \`0.99\`.

1. A $12.5$-foot rope is cut into $5$ equal pieces. How long is each piece (in feet)?
2. Five granola bars cost \\$6.75. What is the price of **one** bar?
3. A $4.8$-liter jug of juice is poured equally into $8$ cups. How many liters are in each cup?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2.5', '1.35', '0.6'],
          hint1:
            'Each of these is a division: split the total into equal groups. The divisors ($5$, $5$, $8$) are already whole numbers, so just bring the decimal point straight up.',
          hint2:
            'Problem 2: $6.75 \\div 5$. Problem 3: $4.8 \\div 8$ — since $4 \\div 8$ does not work, the answer starts with $0.$',
          explanation:
            'Problem 1: $12.5 \\div 5 = 2.5$ feet. Problem 2: $6.75 \\div 5 = 1.35$ dollars. Problem 3: $4.8 \\div 8 = 0.6$ liters.',
        },
      },
      {
        id: 'p4-mc',
        type: 'multiple-choice',
        content: `## One More Word Problem 🧠`,
        exercise: {
          questions: [
            {
              question:
                'A baker shares $9.6$ kg of flour equally among $4$ bowls. How much flour goes in each bowl?',
              options: ['2.4 kg', '24 kg', '0.24 kg', '5.6 kg'],
              correctAnswer: 0,
              explanation:
                '"Equally among 4" means divide: $9.6 \\div 4$. Bring the point straight up: $9 \\div 4 = 2$ remainder $1$, then $16 \\div 4 = 4$, giving $2.4$ kg.',
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
    topicSlug: 'dividing-decimals',
    sections: [
      {
        id: 'p5-summary',
        type: 'text',
        content: `## Review: Everything You Learned 📋

You can now divide decimals like a pro! Here is a quick summary.

| Situation | What to do | Example |
|-----------|------------|---------|
| Decimal $\\div$ whole number | Bring the point **straight up**, then divide | $12.6 \\div 3 = 4.2$ |
| Dividing **by** a decimal | Move BOTH decimals right to make the divisor whole | $7.2 \\div 0.4 = 18$ |
| Division won't end | **Add zeros** after the decimal and keep going | $15 \\div 0.4 = 37.5$ |
| Dividing by $10, 100, 1{,}000$ | Move the point **left** $1$, $2$, or $3$ places | $34.5 \\div 100 = 0.345$ |

**Estimate first!** Round the numbers to check your answer is reasonable. For example, $47.6 \\div 7.8 \\approx 48 \\div 8 = 6$, so the real answer ($\\approx 6.1$) makes sense.

Ready for the final challenge? Let's go! 🚀`,
      },
      {
        id: 'p5-challenge',
        type: 'multiple-choice',
        content: `## Final Challenge 🏆`,
        exercise: {
          questions: [
            {
              question: 'What is $7.2 \\div 0.4$?',
              options: ['1.8', '18', '0.18', '2.8'],
              correctAnswer: 1,
              explanation:
                'Make $0.4$ into $4$ (1 place right) and $7.2$ into $72$ (1 place right). Then $72 \\div 4 = 18$.',
            },
            {
              question:
                'Estimate first: about how big is the answer to $24.3 \\div 5.9$?',
              options: [
                'Close to $0.4$',
                'Close to $4$',
                'Close to $40$',
                'Close to $400$',
              ],
              correctAnswer: 1,
              explanation:
                'Round to friendly numbers: $24 \\div 6 = 4$. So the answer should be close to $4$ (the actual answer is about $4.1$).',
            },
          ],
        },
      },
    ],
  },
]
