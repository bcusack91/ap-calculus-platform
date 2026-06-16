import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Multiplying Decimals (Grade 5 Math).
 * Registry key / DB slug: 'multiplying-decimals-grade5'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'multiplying-decimals-grade5',
    sections: [
      {
        id: 'mdec1-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Decimals

**Part 1 of 5 — Decimals & Place Value**

---

### Topics in This Part

| Section |
|---------|
| What a Decimal Really Means |
| Reading the Place Values |
| Multiplying a Decimal by 10, 100, 1000 |

> 🔑 **Key Concept:** A decimal is just another way to write a fraction whose denominator is $10$, $100$, $1000$, and so on. Once you see *where* the digits sit, multiplying them becomes a careful — but very doable — counting game.`,
      },
      {
        id: 'mdec1-meaning',
        type: 'text' as const,
        content: `## What a Decimal Really Means

The dot in a number is the **decimal point**. It separates the **whole** part from the **fractional** part.

$$3.7 = 3 + \\frac{7}{10}$$

Every place to the **right** of the point is worth $10$ times *less* than the place before it:

| Place | tens | ones | • | tenths | hundredths | thousandths |
|-------|------|------|---|--------|------------|-------------|
| Value | $10$ | $1$ | • | $\\frac{1}{10}$ | $\\frac{1}{100}$ | $\\frac{1}{1000}$ |
| Decimal | $10$ | $1$ | • | $0.1$ | $0.01$ | $0.001$ |

So in the number $4.56$:
- the $4$ is in the **ones** place → worth $4$
- the $5$ is in the **tenths** place → worth $\\frac{5}{10} = 0.5$
- the $6$ is in the **hundredths** place → worth $\\frac{6}{100} = 0.06$

$$4.56 = 4 + 0.5 + 0.06$$

> 💡 **Decimal places:** The number of digits *after* the decimal point is called the number of **decimal places**. $4.56$ has **2** decimal places; $0.3$ has **1**; $7.125$ has **3**. This count is the secret to everything in this lesson.`,
      },
      {
        id: 'mdec1-place-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $8.24$, the digit $2$ is in which place?',
              options: ['tenths', 'hundredths', 'ones', 'tens'],
              correctAnswer: 0,
              explanation: 'The first digit right after the decimal point is the tenths place. So the $2$ in $8.24$ is worth $\\frac{2}{10} = 0.2$.',
            },
            {
              question: 'How many decimal places does $0.075$ have?',
              options: ['1', '2', '3', '4'],
              correctAnswer: 2,
              explanation: 'Count the digits after the decimal point: $0$, $7$, $5$ — that is $3$ decimal places.',
            },
            {
              question: 'Which number equals $5 + 0.3 + 0.08$?',
              options: ['$5.38$', '$5.308$', '$5.83$', '$0.538$'],
              correctAnswer: 0,
              explanation: '$0.3$ is tenths and $0.08$ is hundredths, so $5 + 0.3 + 0.08 = 5.38$.',
            },
          ],
        },
      },
      {
        id: 'mdec1-times10',
        type: 'text' as const,
        content: `## Multiplying by 10, 100, and 1000

Here is a pattern you already half-know. When you multiply a decimal by a power of $10$, the **digits stay the same** — the decimal point just slides to the **right**.

| Multiply by | Point moves right… |
|-------------|--------------------|
| $10$ | $1$ place |
| $100$ | $2$ places |
| $1000$ | $3$ places |

### Examples

$$3.7 \\times 10 = 37$$
$$3.7 \\times 100 = 370$$
$$0.045 \\times 100 = 4.5$$

In the last one, the point in $0.045$ hops $2$ places right: $0.045 \\to 0.45 \\to 4.5$.

> ⚠️ If you run out of digits, fill the gap with **zeros**. For example $3.7 \\times 100$: hop the point twice — $3.7 \\to 37. \\to 370.$ — and add a $0$ to fill the empty place.`,
      },
      {
        id: 'mdec1-times10-drill',
        type: 'input-boxes' as const,
        content: `**Slide the Point** 🧮

Multiply each decimal by the power of $10$.

**1)** $2.6 \\times 10 = \\,?$
**2)** $0.84 \\times 100 = \\,?$
**3)** $0.5 \\times 1000 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['26', '84', '500'],
          hint1: '$\\times 10$ moves the point $1$ place right: $2.6 \\to 26$.',
          hint2: '$\\times 100$ moves the point $2$ places right: $0.84 \\to 8.4 \\to 84$.',
          hint3: '$\\times 1000$ moves the point $3$ places right. $0.5 \\to 5 \\to 50 \\to 500$ (add zeros to fill).',
          explanation: '1) $2.6 \\times 10 = 26$.  2) $0.84 \\times 100 = 84$.  3) $0.5 \\times 1000 = 500$.',
        },
      },
      {
        id: 'mdec1-bridge',
        type: 'text' as const,
        content: `## Two Directions

Sliding the point **right** makes a number bigger ($\\times 10$). Sliding it **left** makes a number smaller — that's what happens when you *divide* by $10$ or multiply by a tiny decimal. Keep both directions in mind as we put the pieces together below.`,
      },
      {
        id: 'mdec1-place-dropdown',
        type: 'dropdown-select' as const,
        content: `**Place-Value Round-Up** 🔽

Match each statement to the correct value.`,
        exercise: {
          dropdowns: [
            { label: 'In $6.93$, the digit $3$ is in the…', options: ['hundredths place', 'tenths place', 'ones place', 'thousandths place'] },
            { label: '$0.07 \\times 100 =$', options: ['$7$', '$0.7$', '$70$', '$0.007$'] },
            { label: 'Number of decimal places in $1.250$:', options: ['$3$', '$2$', '$1$', '$0$'] },
          ],
          correctAnswers: ['hundredths place', '$7$', '$3$'],
          hint1: 'The second digit after the point is the hundredths place.',
          hint2: '$\\times 100$ slides the point $2$ places right: $0.07 \\to 0.7 \\to 7$.',
          hint3: 'Count every digit after the point, even a trailing zero: $2$, $5$, $0$ → $3$ places.',
          explanation: 'In $6.93$ the $3$ is hundredths; $0.07 \\times 100 = 7$; and $1.250$ has $3$ written decimal places.',
        },
      },
      {
        id: 'mdec1-wrap',
        type: 'text' as const,
        content: `## Why This Matters

Multiplying by powers of $10$ is the *engine* behind multiplying decimals. The trick we'll learn in Part 2 is to temporarily **turn the decimals into whole numbers** (by multiplying by $10$, $100$, …), do an easy whole-number multiplication, and then slide the point back.

You now know:
- A decimal is a number with place values smaller than $1$ (tenths, hundredths, …).
- The count of digits after the point is the number of **decimal places**.
- Multiplying by a power of $10$ just slides the point right.

In Part 2 we use these ideas to build the one rule that powers every decimal multiplication.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'multiplying-decimals-grade5',
    sections: [
      {
        id: 'mdec2-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Decimals

**Part 2 of 5 — The Count-the-Places Rule**

---

> 🔑 **The One Big Rule:** Multiply the numbers as if there were **no decimal points at all**. Then count the total number of decimal places in *both* factors, and put that many decimal places in your answer.`,
      },
      {
        id: 'mdec2-rule',
        type: 'text' as const,
        content: `## Why the Rule Works

Look at $0.3 \\times 0.4$. Rewrite each decimal as a fraction:

$$0.3 \\times 0.4 = \\frac{3}{10} \\times \\frac{4}{10} = \\frac{3 \\times 4}{10 \\times 10} = \\frac{12}{100} = 0.12$$

Notice what happened:
- $3 \\times 4 = 12$ (that's the **whole-number** multiplication).
- The denominators $10 \\times 10 = 100$ gave **2 zeros**, which means **2 decimal places**.

And $0.3$ has $1$ decimal place, $0.4$ has $1$ decimal place — together that's $1 + 1 = 2$. ✓

> 🔑 **The Steps**
> 1. **Ignore** the decimal points and multiply the whole numbers.
> 2. **Count** the total decimal places in both factors.
> 3. **Place** the point in the answer so it has that many decimal places.`,
      },
      {
        id: 'mdec2-worked1',
        type: 'text' as const,
        content: `## Worked Example: $0.6 \\times 0.7$

**Step 1 — Ignore the points and multiply:**
$$6 \\times 7 = 42$$

**Step 2 — Count the decimal places:**
$0.6$ has $1$ place, $0.7$ has $1$ place. Total $= 1 + 1 = 2$ places.

**Step 3 — Place the point** so the answer has $2$ decimal places:
$$42 \\to 0.42$$

$$0.6 \\times 0.7 = 0.42$$

> 💡 **Sanity check:** $0.6$ is a bit more than half, $0.7$ is a bit more than half, so the answer should be *less than $1$* — and $0.42$ is. When you multiply two numbers that are each less than $1$, the product is **smaller** than both. That's a great way to catch a misplaced point.`,
      },
      {
        id: 'mdec2-count-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'For $2.5 \\times 0.3$, how many decimal places should the answer have?',
              options: ['1', '2', '3', '0'],
              correctAnswer: 1,
              explanation: '$2.5$ has $1$ decimal place and $0.3$ has $1$ decimal place. Total $= 1 + 1 = 2$ places.',
            },
            {
              question: 'You compute $7 \\times 8 = 56$ for the problem $0.7 \\times 0.8$. Where does the point go?',
              options: ['$5.6$', '$0.56$', '$56$', '$0.056$'],
              correctAnswer: 1,
              explanation: '$0.7$ and $0.8$ together have $2$ decimal places, so $56$ becomes $0.56$.',
            },
          ],
        },
      },
      {
        id: 'mdec2-worked2',
        type: 'text' as const,
        content: `## Worked Example: $1.2 \\times 0.04$

**Step 1 — Multiply as whole numbers:**
$$12 \\times 4 = 48$$

**Step 2 — Count decimal places:**
$1.2$ has $1$ place, $0.04$ has $2$ places. Total $= 1 + 2 = 3$ places.

**Step 3 — Place the point** to get $3$ decimal places. We only have two digits in $48$, so add a **leading zero** to make room:
$$48 \\to 0.048$$

$$1.2 \\times 0.04 = 0.048$$

> ⚠️ **Watch out!** When you need more decimal places than you have digits, pad with **zeros on the left** *after* the decimal point. $48$ with $3$ decimal places is $0.048$, not $0.48$.`,
      },
      {
        id: 'mdec2-drill',
        type: 'input-boxes' as const,
        content: `**Use the Rule** 🧮

Multiply. Enter your answer as a decimal.

**1)** $0.4 \\times 0.2 = \\,?$
**2)** $0.9 \\times 0.6 = \\,?$
**3)** $0.5 \\times 0.07 = \\,?$  *(3 decimal places)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.08', '0.54', '0.035'],
          hint1: '$4 \\times 2 = 8$. Two decimal places (1 + 1), so $8 \\to 0.08$ — pad a zero.',
          hint2: '$9 \\times 6 = 54$. Two decimal places, so $54 \\to 0.54$.',
          hint3: '$5 \\times 7 = 35$. Total places $= 1 + 2 = 3$, so $35 \\to 0.035$.',
          explanation: '1) $0.4 \\times 0.2 = 0.08$.  2) $0.9 \\times 0.6 = 0.54$.  3) $0.5 \\times 0.07 = 0.035$.',
        },
      },
      {
        id: 'mdec2-trap-bridge',
        type: 'text' as const,
        content: `## A Common Trap

The hardest part is **not** the multiplying — it's deciding **where the point goes** afterward. The same digits ($1$, $2$) can become $0.12$, $1.2$, or $12$ depending only on the place count. Always finish by counting places in *both* factors.`,
      },
      {
        id: 'mdec2-place-dropdown',
        type: 'dropdown-select' as const,
        content: `**Place the Point** 🔽

For each problem, the whole-number product is given. Choose where the point belongs.`,
        exercise: {
          dropdowns: [
            { label: '$0.6 \\times 0.5$ from $6 \\times 5 = 30$:', options: ['$0.30$', '$3.0$', '$0.03$', '$30$'] },
            { label: '$1.2 \\times 0.3$ from $12 \\times 3 = 36$:', options: ['$0.36$', '$3.6$', '$0.036$', '$36$'] },
            { label: '$0.2 \\times 0.04$ from $2 \\times 4 = 8$:', options: ['$0.008$', '$0.08$', '$0.8$', '$0.0008$'] },
          ],
          correctAnswers: ['$0.30$', '$0.36$', '$0.008$'],
          hint1: '$0.6$ and $0.5$ give $2$ places: $30 \\to 0.30$.',
          hint2: '$1.2$ and $0.3$ give $1 + 1 = 2$ places: $36 \\to 0.36$.',
          hint3: '$0.2$ and $0.04$ give $1 + 2 = 3$ places: $8 \\to 0.008$.',
          explanation: '$0.6 \\times 0.5 = 0.30$; $1.2 \\times 0.3 = 0.36$; $0.2 \\times 0.04 = 0.008$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'multiplying-decimals-grade5',
    sections: [
      {
        id: 'mdec3-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Decimals

**Part 3 of 5 — Bigger Numbers, Same Rule**

---

> 🔑 **Stay calm:** The count-the-places rule never changes, even when the numbers get bigger. Multiply as whole numbers, then count and place the point. Let's grow our toolkit to handle two-digit and multi-digit products.`,
      },
      {
        id: 'mdec3-decimal-times-whole',
        type: 'text' as const,
        content: `## Decimal × Whole Number

A whole number has **zero** decimal places, so the answer gets the same number of decimal places as the decimal factor.

### Worked Example: $3 \\times 1.4$

**Step 1 — Multiply as whole numbers:** $3 \\times 14 = 42$.

**Step 2 — Count places:** $1.4$ has $1$ place; $3$ has $0$. Total $= 1$ place.

**Step 3 — Place the point:** $42 \\to 4.2$.

$$3 \\times 1.4 = 4.2$$

> 💡 **Estimate to check:** $1.4$ is close to $1$, so $3 \\times 1.4$ should be a little more than $3$. And $4.2$ is. ✓ Estimating first tells you roughly where the point belongs.`,
      },
      {
        id: 'mdec3-estimate-check',
        type: 'multiple-choice' as const,
        content: `**Estimation Check** 🎯

Estimating where the point goes is one of the best ways to avoid mistakes.`,
        exercise: {
          questions: [
            {
              question: 'You multiply $48 \\times 12 = 576$ for the problem $4.8 \\times 1.2$. Using estimation ($5 \\times 1 = 5$), where does the point go?',
              options: ['$57.6$', '$5.76$', '$0.576$', '$576$'],
              correctAnswer: 1,
              explanation: '$4.8 \\times 1.2$ is about $5 \\times 1 = 5$, so the answer should be near $5$. That means $576$ becomes $5.76$. (It also matches the rule: $1 + 1 = 2$ decimal places.)',
            },
            {
              question: 'About how big is $6.1 \\times 2.9$?',
              options: ['about $0.18$', 'about $1.8$', 'about $18$', 'about $180$'],
              correctAnswer: 2,
              explanation: 'Round to $6 \\times 3 = 18$. So $6.1 \\times 2.9$ should be near $18$ (the exact value is $17.69$).',
            },
          ],
        },
      },
      {
        id: 'mdec3-worked-two-digit',
        type: 'text' as const,
        content: `## Worked Example: $2.3 \\times 1.5$

**Step 1 — Multiply $23 \\times 15$** as whole numbers:

$$23 \\times 15 = 23 \\times 10 + 23 \\times 5 = 230 + 115 = 345$$

**Step 2 — Count places:** $2.3$ has $1$ place, $1.5$ has $1$ place. Total $= 2$ places.

**Step 3 — Place the point** so the answer has $2$ decimal places:
$$345 \\to 3.45$$

$$2.3 \\times 1.5 = 3.45$$

> ✅ **Check by estimating:** $2.3 \\times 1.5 \\approx 2 \\times 1.5 = 3$. The answer $3.45$ is right in that neighborhood. ✓`,
      },
      {
        id: 'mdec3-order-steps',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're computing $1.6 \\times 0.5$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, multiply ignoring the points:', options: ['$16 \\times 5 = 80$', '$16 \\times 5 = 11$', '$1.6 \\times 5 = 8$', '$16 + 5 = 21$'] },
            { label: 'Total decimal places in $1.6$ and $0.5$:', options: ['$2$', '$1$', '$3$', '$0$'] },
            { label: 'Place the point in $80$:', options: ['$0.80$', '$8.0$', '$0.08$', '$80$'] },
            { label: 'Final answer (simplified):', options: ['$0.8$', '$8$', '$0.08$', '$80$'] },
          ],
          correctAnswers: ['$16 \\times 5 = 80$', '$2$', '$0.80$', '$0.8$'],
          hint1: 'Drop the points: $16 \\times 5 = 80$.',
          hint2: '$1.6$ has $1$ place and $0.5$ has $1$ place, so $1 + 1 = 2$ total.',
          hint3: 'Give $80$ two decimal places to get $0.80$, and a trailing zero can be dropped, so $0.80 = 0.8$.',
          explanation: '$16 \\times 5 = 80$; with $2$ decimal places that is $0.80 = 0.8$. So $1.6 \\times 0.5 = 0.8$.',
        },
      },
      {
        id: 'mdec3-drill',
        type: 'input-boxes' as const,
        content: `**Build It Up** 🧮

Multiply. Enter your answer as a decimal.

**1)** $4 \\times 0.6 = \\,?$
**2)** $1.2 \\times 1.3 = \\,?$
**3)** $3.5 \\times 0.4 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2.4', '1.56', '1.4'],
          hint1: '$4 \\times 6 = 24$, one decimal place: $24 \\to 2.4$.',
          hint2: '$12 \\times 13 = 156$, two decimal places: $156 \\to 1.56$.',
          hint3: '$35 \\times 4 = 140$, two decimal places: $140 \\to 1.40 = 1.4$.',
          explanation: '1) $4 \\times 0.6 = 2.4$.  2) $1.2 \\times 1.3 = 1.56$.  3) $3.5 \\times 0.4 = 1.40 = 1.4$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'multiplying-decimals-grade5',
    sections: [
      {
        id: 'mdec4-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Decimals

**Part 4 of 5 — Word Problems & Money**

---

> 🔑 **Real-world payoff:** Most decimal multiplication you'll ever do is about **money** and **measurements** — prices, totals, distances, and weights. The math is exactly the same; you just have to read carefully and keep your units straight.`,
      },
      {
        id: 'mdec4-money',
        type: 'text' as const,
        content: `## Money: A Decimal You Already Use

A dollar amount like \\$3.45 is just a decimal with **2 decimal places** — the cents.

### Worked Example: 4 notebooks at \\$1.25 each

We need $4 \\times 1.25$.

**Step 1 — Multiply as whole numbers:** $4 \\times 125 = 500$.

**Step 2 — Count places:** $1.25$ has $2$ places; $4$ has $0$. Total $= 2$ places.

**Step 3 — Place the point:** $500 \\to 5.00$.

$$4 \\times 1.25 = 5.00$$

So the total cost is **\\$5.00**.

> 💡 **Money rounds to 2 places.** A money answer should always show $2$ decimal places (the cents). Write \\$5.00, not \\$5, and write \\$0.40, not \\$0.4 — even though $5.00 = 5$ and $0.40 = 0.4$ as numbers.`,
      },
      {
        id: 'mdec4-money-check',
        type: 'multiple-choice' as const,
        content: `**Money Math** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A pack of stickers costs \\$2.40. How much do 3 packs cost?',
              options: ['\\$6.40', '\\$7.20', '\\$0.72', '\\$72.00'],
              correctAnswer: 1,
              explanation: 'Ignore the point: $3 \\times 240 = 720$. The price $2.40$ has $2$ decimal places, so $720 \\to 7.20$. So 3 packs cost \\$7.20.',
            },
            {
              question: 'Gas costs \\$3.50 per gallon. What do 2 gallons cost?',
              options: ['\\$5.50', '\\$6.00', '\\$7.00', '\\$70.00'],
              correctAnswer: 2,
              explanation: '$2 \\times 3.50 = 7.00$. Two gallons cost \\$7.00.',
            },
          ],
        },
      },
      {
        id: 'mdec4-measurement',
        type: 'text' as const,
        content: `## Measurement & Multi-Step Problems

The same rule handles distances, weights, and areas.

### Worked Example: Area of a rectangle

A rug is $2.5$ meters long and $1.2$ meters wide. Its **area** is length × width:

$$2.5 \\times 1.2$$

**Step 1:** $25 \\times 12 = 300$.
**Step 2:** $2.5$ has $1$ place, $1.2$ has $1$ place → $2$ places total.
**Step 3:** $300 \\to 3.00$.

$$2.5 \\times 1.2 = 3.00 = 3$$

So the area is $3$ square meters.

> ⚠️ **Read the question, then answer it.** Word problems often hide an extra step — like "how much **change** from \\$10?" After multiplying, you may still need to **subtract** or compare. Always re-read what the problem actually asks.`,
      },
      {
        id: 'mdec4-word-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Problem** 🔽

A water bottle holds $0.75$ liters. You drink $4$ full bottles. Build the solution.`,
        exercise: {
          dropdowns: [
            { label: 'The expression you need:', options: ['$4 \\times 0.75$', '$4 + 0.75$', '$0.75 \\div 4$', '$4 - 0.75$'] },
            { label: 'Whole-number product ($4 \\times 75$):', options: ['$300$', '$30$', '$280$', '$3$'] },
            { label: 'Total decimal places:', options: ['$2$', '$1$', '$3$', '$0$'] },
            { label: 'Final answer in liters:', options: ['$3$ L', '$0.3$ L', '$30$ L', '$0.03$ L'] },
          ],
          correctAnswers: ['$4 \\times 0.75$', '$300$', '$2$', '$3$ L'],
          hint1: '"$4$ full bottles of $0.75$ L" means repeated addition, which is multiplication: $4 \\times 0.75$.',
          hint2: 'Ignore the point: $4 \\times 75 = 300$.',
          hint3: '$0.75$ has $2$ decimal places and $4$ has $0$, so place $2$: $300 \\to 3.00 = 3$ liters.',
          explanation: '$4 \\times 0.75 = 3.00 = 3$. You drink $3$ liters of water.',
        },
      },
      {
        id: 'mdec4-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Story** 🧮

Enter just the number (no \\$ sign or units).

**1)** Apples cost \\$1.20 per pound. What do $5$ pounds cost? *(dollars)*
**2)** A ribbon is $0.8$ m long. You need $6$ ribbons. Total length? *(meters)*
**3)** A juice box holds $0.25$ L. How many liters in $4$ boxes? *(liters)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4.8', '1'],
          hint1: '$5 \\times 1.20 = 6.00$, which is \\$6.',
          hint2: '$6 \\times 0.8$: $6 \\times 8 = 48$, one decimal place → $4.8$ meters.',
          hint3: '$4 \\times 0.25 = 1.00 = 1$ liter.',
          explanation: '1) $5 \\times 1.20 = 6$.  2) $6 \\times 0.8 = 4.8$.  3) $4 \\times 0.25 = 1$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'multiplying-decimals-grade5',
    sections: [
      {
        id: 'mdec5-intro',
        type: 'text' as const,
        content: `# ✖️ Multiplying Decimals

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) read decimal place values, (2) use the count-the-places rule, (3) handle bigger numbers, and (4) solve money and measurement word problems. Let's put it all together and catch the most common mistakes.`,
      },
      {
        id: 'mdec5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Multiply two decimals | Ignore points, multiply, then place points |
| Count decimal places | Add the places of **both** factors |
| Not enough digits | Pad with **leading zeros** after the point |
| Check your answer | **Estimate** with rounded whole numbers |
| Money answers | Always show **2** decimal places |

> ⚠️ **Top 3 mistakes to avoid:**
> 1. **Miscounting places.** $0.3 \\times 0.2$ needs $2$ places: $0.06$, not $0.6$.
> 2. **Forgetting to pad zeros.** $4 \\times 0.02 = 0.08$, not $0.8$.
> 3. **Lining up the points like in addition.** When *multiplying*, you do **not** line up the decimal points — you just count places at the end.`,
      },
      {
        id: 'mdec5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $0.2 \\times 0.3$?',
              options: ['$0.06$', '$0.6$', '$0.5$', '$6$'],
              correctAnswer: 0,
              explanation: '$2 \\times 3 = 6$, and $0.2$ and $0.3$ have $2$ decimal places together, so $6 \\to 0.06$.',
            },
            {
              question: 'What is $1.5 \\times 4$?',
              options: ['$6$', '$0.6$', '$60$', '$5.4$'],
              correctAnswer: 0,
              explanation: '$15 \\times 4 = 60$, one decimal place from $1.5$, so $60 \\to 6.0 = 6$.',
            },
            {
              question: 'Which product is the largest?',
              options: ['$0.5 \\times 0.5$', '$0.5 \\times 2$', '$0.5 \\times 0.1$', '$0.5 \\times 0.9$'],
              correctAnswer: 1,
              explanation: '$0.5 \\times 2 = 1$, which beats $0.25$, $0.05$, and $0.45$. Multiplying by a number bigger than $1$ grows the value; multiplying by less than $1$ shrinks it.',
            },
          ],
        },
      },
      {
        id: 'mdec5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Final Drills** 🧮

Multiply. Enter your answer as a decimal.

**1)** $0.7 \\times 0.6 = \\,?$
**2)** $2.4 \\times 0.5 = \\,?$
**3)** $1.1 \\times 1.1 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.42', '1.2', '1.21'],
          hint1: '$7 \\times 6 = 42$, two decimal places: $42 \\to 0.42$.',
          hint2: '$24 \\times 5 = 120$, two decimal places: $120 \\to 1.20 = 1.2$.',
          hint3: '$11 \\times 11 = 121$, two decimal places: $121 \\to 1.21$.',
          explanation: '1) $0.7 \\times 0.6 = 0.42$.  2) $2.4 \\times 0.5 = 1.20 = 1.2$.  3) $1.1 \\times 1.1 = 1.21$.',
        },
      },
      {
        id: 'mdec5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'How many decimal places should the answer to $0.25 \\times 1.3$ have?',
              options: ['$3$', '$2$', '$1$', '$5$'],
              correctAnswer: 0,
              explanation: '$0.25$ has $2$ places and $1.3$ has $1$ place, so the answer has $2 + 1 = 3$ decimal places.',
            },
            {
              question: 'A movie ticket costs \\$8.50. What do $3$ tickets cost?',
              options: ['\\$24.50', '\\$25.50', '\\$2.55', '\\$255.00'],
              correctAnswer: 1,
              explanation: '$3 \\times 8.50$: $3 \\times 85 = 255$, two decimal places → $25.50$. So $3$ tickets cost \\$25.50.',
            },
            {
              question: 'What is $0.04 \\times 0.2$?',
              options: ['$0.008$', '$0.08$', '$0.8$', '$0.0008$'],
              correctAnswer: 0,
              explanation: '$4 \\times 2 = 8$. Total decimal places $= 2 + 1 = 3$, so $8 \\to 0.008$ (pad two leading zeros).',
            },
          ],
        },
      },
    ],
  },
]
