import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Multi-Digit Multiplication (Grade 5 Math).
 * Registry key / DB slug: 'multi-digit-multiplication-grade5'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'multi-digit-multiplication-grade5',
    sections: [
      {
        id: 'mdm1-intro',
        type: 'text' as const,
        content: `# ✖️ Multi-Digit Multiplication

**Part 1 of 5 — Place Value: The Secret Behind Big Multiplication**

---

### Topics in This Part

| Section |
|---------|
| What "Multi-Digit" Really Means |
| Breaking Numbers Apart by Place Value |
| Multiplying by 10, 100, and 1,000 |

> 🔑 **Key Concept:** Every big multiplication problem is really just a bunch of small multiplications added together. The trick is **place value** — knowing that the $4$ in $\\,341\\,$ is worth $40$, not $4$. Master that, and the rest is easy.`,
      },
      {
        id: 'mdm1-placevalue',
        type: 'text' as const,
        content: `## Breaking Numbers Apart by Place Value

A number like $\\,247\\,$ is built from three pieces:

$$247 = \\underbrace{200}_{\\text{hundreds}} + \\underbrace{40}_{\\text{tens}} + \\underbrace{7}_{\\text{ones}}$$

We call this **expanded form**. Pulling a number apart this way is the whole idea behind multiplication — you multiply each piece, then add the results back together.

### Try Reading the Places

| Number | Hundreds | Tens | Ones |
|--------|----------|------|------|
| $58$ | $0$ | $50$ | $8$ |
| $306$ | $300$ | $0$ | $6$ |
| $914$ | $900$ | $10$ | $4$ |

> 💡 **Heads up:** The digit and its *value* are different. In $914$, the digit is $1$, but its **value** is $10$ because it sits in the tens place.`,
      },
      {
        id: 'mdm1-expanded-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is the value of the digit $7$ in the number $\\,3{,}706$?',
              options: ['$7$', '$70$', '$700$', '$7{,}000$'],
              correctAnswer: 2,
              explanation: 'In $3{,}706$, the $7$ sits in the **hundreds** place, so its value is $7 \\times 100 = 700$.',
            },
            {
              question: 'Which choice shows $\\,485\\,$ in expanded form?',
              options: ['$40 + 80 + 5$', '$400 + 80 + 5$', '$400 + 8 + 5$', '$4 + 8 + 5$'],
              correctAnswer: 1,
              explanation: '$485 = 400 + 80 + 5$. The $4$ is worth $400$ and the $8$ is worth $80$.',
            },
          ],
        },
      },
      {
        id: 'mdm1-powers-ten',
        type: 'text' as const,
        content: `## Multiplying by 10, 100, and 1,000

This is the fastest shortcut in all of multiplication. To multiply by a power of ten, **count the zeros and tack them on the end**:

$$6 \\times 10 = 60 \\qquad 6 \\times 100 = 600 \\qquad 6 \\times 1{,}000 = 6{,}000$$

It works for bigger numbers too:

$$23 \\times 10 = 230 \\qquad 23 \\times 100 = 2{,}300$$

> 🔑 **Why it works:** Multiplying by $10$ shifts every digit one place to the **left** — ones become tens, tens become hundreds. The new $0$ just fills the empty ones place.

> ⚠️ **Watch out:** $40 \\times 30$ is **not** $120$. Multiply the non-zero parts ($4 \\times 3 = 12$), *then* add the two zeros back: $40 \\times 30 = 1{,}200$.`,
      },
      {
        id: 'mdm1-powers-drill',
        type: 'input-boxes' as const,
        content: `**Zero Power-Up** 🧮

Use the count-the-zeros shortcut.

**1)** $8 \\times 100 = \\,?$
**2)** $52 \\times 10 = \\,?$
**3)** $40 \\times 30 = \\,?$  *(multiply $4 \\times 3$ first, then add both zeros)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['800', '520', '1200'],
          hint1: '$8 \\times 100$: write $8$, then add the two zeros from $100$ → $800$.',
          hint2: '$52 \\times 10$: add one zero to $52$ → $520$.',
          hint3: '$4 \\times 3 = 12$, and there are two zeros total ($40$ and $30$), so $1{,}200$.',
          explanation: '1) $800$.  2) $520$.  3) $4\\times3 = 12$, then add two zeros → $1{,}200$.',
        },
      },
      {
        id: 'mdm1-value-recap',
        type: 'text' as const,
        content: `## One Last Place-Value Skill

Before we start multiplying big numbers, make sure you can name the **value** of any digit on sight. This is the single skill every method below depends on.

$$\\underset{\\text{value }600}{\\boxed{6}}\\,\\underset{\\text{value }30}{\\boxed{3}}\\,\\underset{\\text{value }8}{\\boxed{8}} \\;=\\; 638$$

Read the place, multiply by what it's worth ($100$, $10$, or $1$), and you have its value.`,
      },
      {
        id: 'mdm1-expanded-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Place Value** 🔽

Choose the correct value of each underlined digit.`,
        exercise: {
          dropdowns: [
            { label: 'The $5$ in $\\,852$:', options: ['$50$', '$5$', '$500$', '$5{,}000$'] },
            { label: 'The $3$ in $\\,3{,}214$:', options: ['$3{,}000$', '$300$', '$30$', '$3$'] },
            { label: 'The $9$ in $\\,409$:', options: ['$9$', '$90$', '$900$', '$0$'] },
          ],
          correctAnswers: ['$50$', '$3{,}000$', '$9$'],
          hint1: 'In $852$, the $5$ is in the **tens** place, so it is worth $5 \\times 10 = 50$.',
          hint2: 'In $3{,}214$, the $3$ is in the **thousands** place, so it is worth $3{,}000$.',
          hint3: 'In $409$, the $9$ is in the **ones** place, so it is worth just $9$.',
          explanation: 'The value of a digit depends on its place: tens ($\\times 10$), thousands ($\\times 1{,}000$), and ones ($\\times 1$).',
        },
      },
      {
        id: 'mdm1-wrap',
        type: 'text' as const,
        content: `## Putting It Together

Place value is the engine. When you see $\\,34 \\times 6$, your brain can split it:

$$34 \\times 6 = (30 + 4) \\times 6 = (30 \\times 6) + (4 \\times 6) = 180 + 24 = 204$$

That splitting move is called the **distributive property**, and it's exactly what every method in this lesson is built on. In Part 2 we'll turn it into a quick, reliable procedure.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'multi-digit-multiplication-grade5',
    sections: [
      {
        id: 'mdm2-intro',
        type: 'text' as const,
        content: `# ✖️ Multi-Digit Multiplication

**Part 2 of 5 — Multiplying by a One-Digit Number**

---

> 🔑 **The Idea:** To multiply a big number by a single digit, multiply **one place at a time**, starting from the ones. When a column overflows past $9$, you **carry** the extra into the next column.`,
      },
      {
        id: 'mdm2-steps',
        type: 'text' as const,
        content: `## The Standard Algorithm (One Digit)

To compute $\\,47 \\times 8$:

1. **Ones first:** $8 \\times 7 = 56$. Write the $6$, **carry** the $5$.
2. **Tens next:** $8 \\times 4 = 32$, then **add the carried $5$**: $32 + 5 = 37$. Write $37$.
3. **Read the answer:** $376$.

$$47 \\times 8 = 376$$

We can check with place value:

$$47 \\times 8 = (40 \\times 8) + (7 \\times 8) = 320 + 56 = 376 \\;✓$$

> ⚠️ **The #1 mistake:** Forgetting to **add** the carried digit *after* multiplying the next column. Multiply first, then add the carry.`,
      },
      {
        id: 'mdm2-carry-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'You compute $6 \\times 9 = 54$ in the ones column. What do you do next?',
              options: [
                'Write $54$ in the ones column',
                'Write $4$ and carry the $5$ to the tens column',
                'Write $5$ and carry the $4$ to the tens column',
                'Carry the whole $54$',
              ],
              correctAnswer: 1,
              explanation: 'Only one digit can sit in the ones place. Write the $4$ (the ones digit of $54$) and carry the $5$ (the tens digit) to the next column.',
            },
            {
              question: 'In $\\,38 \\times 4$, the ones step gives $4 \\times 8 = 32$. The tens step is $4 \\times 3 = 12$. What is the final tens-and-up part after the carry?',
              options: ['$12$', '$13$', '$15$', '$14$'],
              correctAnswer: 2,
              explanation: 'Write the $2$ from $32$ and carry the $3$. Then $12 + 3 = 15$, giving the answer $152$.',
            },
          ],
        },
      },
      {
        id: 'mdm2-worked2',
        type: 'text' as const,
        content: `## A Three-Digit Example

Compute $\\,218 \\times 6$. Work right to left:

1. **Ones:** $6 \\times 8 = 48$ → write $8$, carry $4$.
2. **Tens:** $6 \\times 1 = 6$, plus carry $4$ → $10$. Write $0$, carry $1$.
3. **Hundreds:** $6 \\times 2 = 12$, plus carry $1$ → $13$. Write $13$.

$$218 \\times 6 = 1{,}308$$

> ✅ **Check:** $(200 \\times 6) + (10 \\times 6) + (8 \\times 6) = 1200 + 60 + 48 = 1{,}308$ ✓`,
      },
      {
        id: 'mdm2-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're computing $\\,57 \\times 6$. Choose what happens at each stage. ($6 \\times 7 = 42$ and $6 \\times 5 = 30$.)`,
        exercise: {
          dropdowns: [
            { label: 'Ones column $6 \\times 7 = 42$, so:', options: ['write $2$, carry $4$', 'write $4$, carry $2$', 'write $42$', 'write $2$, carry $2$'] },
            { label: 'Tens column $6 \\times 5 = 30$, then add the carry:', options: ['$30 + 4 = 34$', '$30 + 2 = 32$', '$30$', '$30 + 42 = 72$'] },
            { label: 'Final answer:', options: ['$342$', '$324$', '$302$', '$72$'] },
          ],
          correctAnswers: ['write $2$, carry $4$', '$30 + 4 = 34$', '$342$'],
          hint1: '$42$ has a $2$ in the ones place and a $4$ in the tens place — write the $2$, carry the $4$.',
          hint2: 'After $6 \\times 5 = 30$, add the carried $4$: $30 + 4 = 34$.',
          hint3: 'Put the $34$ in front of the written $2$ → $342$.',
          explanation: '$6\\times7 = 42$ (write $2$, carry $4$); $6\\times5 = 30$, plus $4 = 34$. Answer: $342$.',
        },
      },
      {
        id: 'mdm2-recap',
        type: 'text' as const,
        content: `## You've Got the Rhythm

The whole one-digit method is a steady beat: **multiply, write, carry — repeat.**

> 🔑 At each column: multiply the two digits, **add any carry from the previous column**, write the ones digit of that result, and carry the rest. When you reach the last column, write the whole number.

Now run the beat yourself on the problems below.`,
      },
      {
        id: 'mdm2-onedigit-drill',
        type: 'input-boxes' as const,
        content: `**Carry Practice** 🧮

Multiply. Remember to carry when a column goes past $9$.

**1)** $63 \\times 7 = \\,?$
**2)** $84 \\times 5 = \\,?$
**3)** $347 \\times 9 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['441', '420', '3123'],
          hint1: '$7 \\times 3 = 21$ (write $1$, carry $2$); $7 \\times 6 = 42$, plus $2 = 44$. Answer $441$.',
          hint2: '$5 \\times 4 = 20$ (write $0$, carry $2$); $5 \\times 8 = 40$, plus $2 = 42$. Answer $420$.',
          hint3: '$9\\times7=63$ (write $3$, carry $6$); $9\\times4=36{+}6=42$ (write $2$, carry $4$); $9\\times3=27{+}4=31$. Answer $3{,}123$.',
          explanation: '1) $441$.  2) $420$.  3) $3{,}123$. Always multiply the column, then add any carry.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'multi-digit-multiplication-grade5',
    sections: [
      {
        id: 'mdm3-intro',
        type: 'text' as const,
        content: `# ✖️ Multi-Digit Multiplication

**Part 3 of 5 — The Box (Area) Method for Two-Digit × Two-Digit**

---

> 🔑 **The Idea:** When both numbers have two digits, split *each* number by place value into a grid. Multiply every box, then add. The grid makes it almost impossible to lose a piece.`,
      },
      {
        id: 'mdm3-box-teach',
        type: 'text' as const,
        content: `## Building the Box

To compute $\\,23 \\times 44$, split each number:

- $23 = 20 + 3$
- $44 = 40 + 4$

Draw a $2 \\times 2$ grid and multiply each row-piece by each column-piece:

| $\\times$ | $40$ | $4$ |
|-----------|------|-----|
| **$20$** | $800$ | $80$ |
| **$3$** | $120$ | $12$ |

Now add all four boxes:

$$800 + 120 + 80 + 12 = 1{,}012$$

$$23 \\times 44 = 1{,}012$$

> 💡 **Why four boxes?** Two pieces times two pieces makes $2 \\times 2 = 4$ products. The box method just keeps every partial product organized so nothing gets skipped.`,
      },
      {
        id: 'mdm3-box-dropdown',
        type: 'dropdown-select' as const,
        content: `**Fill the Box** 🔽

You're computing $\\,36 \\times 25$ using the area method. Split: $36 = 30 + 6$ and $25 = 20 + 5$. Choose the value for each box.`,
        exercise: {
          dropdowns: [
            { label: '$30 \\times 20 =$', options: ['$600$', '$60$', '$500$', '$6{,}000$'] },
            { label: '$30 \\times 5 =$', options: ['$150$', '$15$', '$120$', '$1{,}500$'] },
            { label: '$6 \\times 20 =$', options: ['$120$', '$12$', '$110$', '$26$'] },
            { label: '$6 \\times 5 =$', options: ['$30$', '$11$', '$300$', '$35$'] },
          ],
          correctAnswers: ['$600$', '$150$', '$120$', '$30$'],
          hint1: '$30 \\times 20$: think $3 \\times 2 = 6$, then add the two zeros → $600$.',
          hint2: '$30 \\times 5 = 150$, and $6 \\times 20 = 120$.',
          hint3: 'Adding all four: $600 + 150 + 120 + 30 = 900$, so $36 \\times 25 = 900$.',
          explanation: 'The four boxes are $600, 150, 120, 30$. Their sum is $900$, so $36 \\times 25 = 900$.',
        },
      },
      {
        id: 'mdm3-box-worked',
        type: 'text' as const,
        content: `## One More: $\\,64 \\times 53$

Split: $64 = 60 + 4$ and $53 = 50 + 3$.

| $\\times$ | $50$ | $3$ |
|-----------|------|-----|
| **$60$** | $3{,}000$ | $180$ |
| **$4$** | $200$ | $12$ |

Add the four partial products:

$$3{,}000 + 200 + 180 + 12 = 3{,}392$$

$$64 \\times 53 = 3{,}392$$

> ✅ **Check by rounding:** $64 \\approx 60$ and $53 \\approx 50$, so the answer should be near $60 \\times 50 = 3{,}000$. Our $3{,}392$ is close — that's a good sign it's right.`,
      },
      {
        id: 'mdm3-box-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Using the box method for $\\,42 \\times 17$, which four partial products do you need?',
              options: [
                '$40\\times10,\\ 40\\times7,\\ 2\\times10,\\ 2\\times7$',
                '$42\\times10,\\ 42\\times7$',
                '$4\\times1,\\ 4\\times7,\\ 2\\times1,\\ 2\\times7$',
                '$40\\times17,\\ 2\\times17$',
              ],
              correctAnswer: 0,
              explanation: 'Split $42 = 40+2$ and $17 = 10+7$. Each piece of one number multiplies each piece of the other: $40\\times10$, $40\\times7$, $2\\times10$, $2\\times7$.',
            },
            {
              question: 'The four boxes for a problem add up to $1{,}200 + 80 + 150 + 10$. What is the product?',
              options: ['$1{,}430$', '$1{,}440$', '$1{,}340$', '$1{,}450$'],
              correctAnswer: 1,
              explanation: '$1{,}200 + 80 + 150 + 10 = 1{,}440$. Add the partial products carefully, lining up place values.',
            },
          ],
        },
      },
      {
        id: 'mdm3-box-recap',
        type: 'text' as const,
        content: `## The Box Method in Four Moves

1. **Split** each two-digit number into tens + ones.
2. **Draw** a $2 \\times 2$ grid.
3. **Multiply** to fill all four boxes.
4. **Add** the four partial products.

> 💡 The hardest box is always tens × tens — but it's just a single-digit fact with zeros tacked on (like $30 \\times 20 = 600$). Try the full method on the two problems below.`,
      },
      {
        id: 'mdm3-box-drill',
        type: 'input-boxes' as const,
        content: `**Box It Up** 🧮

Use the area method. Enter the final product.

**1)** $24 \\times 32 = \\,?$
**2)** $51 \\times 46 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['768', '2346'],
          hint1: '$24\\times32$: boxes are $20\\times30=600$, $20\\times2=40$, $4\\times30=120$, $4\\times2=8$.',
          hint2: '$600+40+120+8 = 768$.',
          hint3: '$51\\times46$: boxes $50\\times40=2000$, $50\\times6=300$, $1\\times40=40$, $1\\times6=6$; sum $= 2{,}346$.',
          explanation: '1) $600+40+120+8 = 768$.  2) $2000+300+40+6 = 2{,}346$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'multi-digit-multiplication-grade5',
    sections: [
      {
        id: 'mdm4-intro',
        type: 'text' as const,
        content: `# ✖️ Multi-Digit Multiplication

**Part 4 of 5 — The Standard Algorithm (Two-Digit × Two-Digit)**

---

> 🔑 **The Idea:** The stacked "standard algorithm" is the box method written compactly. You multiply by the **ones digit**, then by the **tens digit**, and add the two rows. The key is the **placeholder zero** on the second row.`,
      },
      {
        id: 'mdm4-stack-teach',
        type: 'text' as const,
        content: `## Stacking It Up: $\\,73 \\times 46$

**Step 1 — Multiply by the ones digit ($6$):**

$$73 \\times 6 = 438$$

**Step 2 — Multiply by the tens digit ($4$, which is really $40$):**

Write a **placeholder $0$** in the ones spot first, because you're really multiplying by $40$, not $4$:

$$73 \\times 40 = 2{,}920$$

**Step 3 — Add the two partial products:**

$$438 + 2{,}920 = 3{,}358$$

$$73 \\times 46 = 3{,}358$$

> ⚠️ **The most common mistake** is forgetting the placeholder $0$ on the second row. Without it, you'd be multiplying by $4$ instead of $40$ — and your answer would be ten times too small.`,
      },
      {
        id: 'mdm4-placeholder-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'When you multiply by the tens digit in the standard algorithm, why do you write a $0$ in the ones place of that row?',
              options: [
                'To make the answer look bigger',
                'Because the tens digit really stands for a number of tens (e.g., $4$ means $40$)',
                'Because zero is the first digit you always write',
                'It is optional and does not change the answer',
              ],
              correctAnswer: 1,
              explanation: 'The tens digit $4$ has a value of $40$. Multiplying by $40$ is multiplying by $4$ and then by $10$, and the placeholder $0$ is the "$\\times 10$" part. Skipping it makes the row ten times too small.',
            },
            {
              question: 'In the standard algorithm for $\\,58 \\times 23$, the two partial products are $58 \\times 3$ and $58 \\times 20$. What are they?',
              options: ['$174$ and $1{,}160$', '$174$ and $116$', '$164$ and $1{,}160$', '$174$ and $1{,}260$'],
              correctAnswer: 0,
              explanation: '$58 \\times 3 = 174$ and $58 \\times 20 = 1{,}160$. Adding gives $174 + 1{,}160 = 1{,}334$, so $58 \\times 23 = 1{,}334$.',
            },
          ],
        },
      },
      {
        id: 'mdm4-bigger-bridge',
        type: 'text' as const,
        content: `## It Works for Bigger Numbers Too

The exact same two-row recipe handles a three-digit number on top. You still make a **ones row**, then a **tens row with a placeholder $0$**, then add.

> 🔑 No matter how long the top number is, multiplying by a two-digit number always gives you exactly **two rows** to add — one for the ones digit, one for the tens digit. Let's walk through one step by step.`,
      },
      {
        id: 'mdm4-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're computing $\\,125 \\times 32$ with the standard algorithm. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First partial product (times the ones digit $2$):', options: ['$250$', '$25$', '$2{,}500$', '$252$'] },
            { label: 'Second row starts with a:', options: ['placeholder $0$', 'decimal point', 'carry of $1$', 'comma'] },
            { label: 'Second partial product ($125 \\times 30$):', options: ['$3{,}750$', '$375$', '$3{,}570$', '$37{,}500$'] },
            { label: 'Final sum:', options: ['$4{,}000$', '$3{,}900$', '$4{,}100$', '$3{,}750$'] },
          ],
          correctAnswers: ['$250$', 'placeholder $0$', '$3{,}750$', '$4{,}000$'],
          hint1: '$125 \\times 2 = 250$. That is the first row.',
          hint2: 'The second row multiplies by the tens digit, so it begins with a placeholder $0$; $125 \\times 30 = 3{,}750$.',
          hint3: 'Add the rows: $250 + 3{,}750 = 4{,}000$.',
          explanation: '$125\\times2 = 250$; $125\\times30 = 3{,}750$; sum $= 4{,}000$. So $125 \\times 32 = 4{,}000$.',
        },
      },
      {
        id: 'mdm4-worked3',
        type: 'text' as const,
        content: `## A Three-Digit × Two-Digit Example

Compute $\\,236 \\times 18$.

**Ones row:** $236 \\times 8 = 1{,}888$
**Tens row (placeholder $0$):** $236 \\times 10 = 2{,}360$

Add them:

$$1{,}888 + 2{,}360 = 4{,}248$$

$$236 \\times 18 = 4{,}248$$

> ✅ **Estimate to check:** $236 \\approx 240$ and $18 \\approx 20$, so expect roughly $240 \\times 20 = 4{,}800$. Our $4{,}248$ is in the right neighborhood. ✓`,
      },
      {
        id: 'mdm4-stack-drill',
        type: 'input-boxes' as const,
        content: `**Standard Algorithm Drill** 🧮

Use the stacked method (don't forget the placeholder $0$!).

**1)** $46 \\times 27 = \\,?$
**2)** $312 \\times 24 = \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1242', '7488'],
          hint1: '$46\\times7 = 322$ and $46\\times20 = 920$.',
          hint2: '$322 + 920 = 1{,}242$.',
          hint3: '$312\\times4 = 1{,}248$ and $312\\times20 = 6{,}240$; sum $= 7{,}488$.',
          explanation: '1) $322 + 920 = 1{,}242$.  2) $1{,}248 + 6{,}240 = 7{,}488$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'multi-digit-multiplication-grade5',
    sections: [
      {
        id: 'mdm5-intro',
        type: 'text' as const,
        content: `# ✖️ Multi-Digit Multiplication

**Part 5 of 5 — Word Problems, Estimation & Mastery Check**

---

You can now (1) use place value, (2) multiply by one digit with carrying, (3) use the box method, and (4) run the standard algorithm. Let's apply it to real situations and finish with a mastery quiz.`,
      },
      {
        id: 'mdm5-wordproblem',
        type: 'text' as const,
        content: `## Multiplication in Real Life

Word problems hide a multiplication inside a story. Look for the phrase **"each"** or a rate — that's your signal to multiply.

### Example

> A school orders $\\,24\\,$ boxes of pencils. Each box holds $\\,36\\,$ pencils. How many pencils in all?

The phrase "each box holds $36$" means **equal groups**, so multiply:

$$24 \\times 36 = ?$$

Using the standard algorithm: $24 \\times 6 = 144$ and $24 \\times 30 = 720$.

$$144 + 720 = 864$$

So there are **$864$ pencils**.

> 💡 **Estimate first:** $24 \\approx 25$ and $36 \\approx 35$, so expect about $25 \\times 35 \\approx 875$. The exact answer $864$ is close — that confirms it.`,
      },
      {
        id: 'mdm5-estimation-mc',
        type: 'multiple-choice' as const,
        content: `**Estimation Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Without computing exactly, the best estimate for $\\,68 \\times 52$ is closest to:',
              options: ['$350$', '$3{,}500$', '$35{,}000$', '$700$'],
              correctAnswer: 1,
              explanation: 'Round to $70 \\times 50 = 3{,}500$. (The exact product is $3{,}536$, very close to the estimate.)',
            },
            {
              question: 'A theater has $\\,18\\,$ rows with $\\,25\\,$ seats in each row. Which expression finds the total number of seats?',
              options: ['$18 + 25$', '$18 \\times 25$', '$25 - 18$', '$25 \\div 18$'],
              correctAnswer: 1,
              explanation: 'Equal groups (each row has $25$ seats) means multiply: $18 \\times 25 = 450$ seats.',
            },
          ],
        },
      },
      {
        id: 'mdm5-word-strategy',
        type: 'text' as const,
        content: `## A Plan for Any Word Problem

1. **Read** and find the two numbers.
2. **Spot the signal:** words like *each*, *per*, *every*, or *rows of* mean equal groups → **multiply**.
3. **Estimate** so you'll know if your answer is reasonable.
4. **Compute** with the standard algorithm.
5. **Label** your answer (pencils, seats, boxes…).

> 💡 If the story says "each ___ has ___," you are almost always multiplying. Use the plan on the two problems below.`,
      },
      {
        id: 'mdm5-word-drill',
        type: 'input-boxes' as const,
        content: `**Word Problem Drill** 🧮

Solve each. Enter just the number.

**1)** A warehouse has $\\,45\\,$ shelves. Each shelf holds $\\,28\\,$ boxes. How many boxes total?
**2)** A bus seats $\\,52\\,$ people. How many people can $\\,16\\,$ full buses carry?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['1260', '832'],
          hint1: '"Each shelf holds $28$" → multiply $45 \\times 28$.',
          hint2: '$45\\times8 = 360$ and $45\\times20 = 900$; $360 + 900 = 1{,}260$.',
          hint3: '$52\\times16$: $52\\times6 = 312$ and $52\\times10 = 520$; $312 + 520 = 832$.',
          explanation: '1) $45 \\times 28 = 1{,}260$ boxes.  2) $52 \\times 16 = 832$ people.',
        },
      },
      {
        id: 'mdm5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Multiply by $10, 100, 1{,}000$ | count the zeros and tack them on |
| Multiply by one digit | go right to left; **carry** when a column passes $9$ |
| Two-digit × two-digit (box) | split each number, multiply $4$ boxes, add |
| Two-digit × two-digit (standard) | ones row, then tens row with a **placeholder $0$**, then add |
| Check any answer | round each factor and estimate |

> ⚠️ Top mistakes to avoid: forgetting to **add the carry**, dropping the **placeholder $0$** on the tens row, and skipping a box in the area method.`,
      },
      {
        id: 'mdm5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is $\\,40 \\times 70$?',
              options: ['$280$', '$2{,}800$', '$28{,}000$', '$110$'],
              correctAnswer: 1,
              explanation: 'Multiply the non-zero parts: $4 \\times 7 = 28$. Then add the two zeros: $2{,}800$.',
            },
            {
              question: 'In the standard algorithm for $\\,53 \\times 27$, what is the second partial product (multiplying by the tens digit)?',
              options: ['$53 \\times 2 = 106$', '$53 \\times 20 = 1{,}060$', '$53 \\times 7 = 371$', '$53 \\times 70 = 3{,}710$'],
              correctAnswer: 1,
              explanation: 'The tens digit $2$ stands for $20$, so the second row is $53 \\times 20 = 1{,}060$ (note the placeholder $0$). The full product is $371 + 1{,}060 = 1{,}431$.',
            },
            {
              question: 'A box holds $\\,32\\,$ markers. How many markers are in $\\,15\\,$ boxes?',
              options: ['$480$', '$47$', '$450$', '$320$'],
              correctAnswer: 0,
              explanation: 'Multiply: $32 \\times 15$. $32 \\times 5 = 160$ and $32 \\times 10 = 320$; $160 + 320 = 480$ markers.',
            },
          ],
        },
      },
    ],
  },
]
