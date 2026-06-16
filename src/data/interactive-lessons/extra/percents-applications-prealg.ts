import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Percents and Applications (Pre-Algebra).
 * Registry key / DB slug: 'percents-applications-prealg'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'percents-applications-prealg',
    sections: [
      {
        id: 'pct1-intro',
        type: 'text' as const,
        content: `# 💯 Percents and Applications

**Part 1 of 5 — What a Percent Really Means**

---

### Topics in This Part

| Section |
|---------|
| Percent = "Per Hundred" |
| Converting Percents ↔ Decimals |
| Converting Percents ↔ Fractions |

> 🔑 **Key Concept:** A **percent** is just a fraction with a denominator of $100$. The word *percent* comes from the Latin *per centum* — "per hundred." Master this one idea and every percent problem becomes a fraction problem.`,
      },
      {
        id: 'pct1-meaning',
        type: 'text' as const,
        content: `## Percent = "Per Hundred"

When you see $45\\%$, read it as **45 out of 100**:

$$45\\% = \\frac{45}{100} = 0.45$$

Picture a $10 \\times 10$ grid of $100$ squares. Shading $45$ of them shows $45\\%$ — almost half the grid.

| Percent | Out of 100 | As a fraction |
|---------|-----------|---------------|
| $25\\%$ | $25$ shaded | $\\dfrac{25}{100} = \\dfrac{1}{4}$ |
| $50\\%$ | $50$ shaded | $\\dfrac{50}{100} = \\dfrac{1}{2}$ |
| $100\\%$ | all $100$ shaded | $\\dfrac{100}{100} = 1$ |
| $150\\%$ | a *whole grid* plus $50$ more | $\\dfrac{150}{100} = 1\\tfrac{1}{2}$ |

> 💡 A percent **can** be more than $100$. $100\\%$ means "the whole thing," so $150\\%$ means "one and a half times as much."`,
      },
      {
        id: 'pct1-meaning-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $7\\%$ mean?',
              options: ['$7$ out of $100$', '$7$ out of $10$', '$100$ out of $7$', '$7$ times $100$'],
              correctAnswer: 0,
              explanation: 'Percent means "per hundred," so $7\\% = \\frac{7}{100} = 0.07$ — that\'s $7$ out of every $100$.',
            },
            {
              question: 'On a $10\\times 10$ grid of $100$ squares, $30$ squares are shaded. What percent is shaded?',
              options: ['$3\\%$', '$30\\%$', '$300\\%$', '$0.3\\%$'],
              correctAnswer: 1,
              explanation: '$30$ shaded out of $100$ total is $\\frac{30}{100} = 30\\%$.',
            },
          ],
        },
      },
      {
        id: 'pct1-decimals',
        type: 'text' as const,
        content: `## Percents ↔ Decimals

Because a percent is "out of $100$," converting is all about moving the decimal point **two places**.

**Percent → Decimal:** drop the $\\%$ sign and move the decimal **2 places left** (÷ 100).

$$45\\% \\to 0.45 \\qquad 7\\% \\to 0.07 \\qquad 120\\% \\to 1.20$$

**Decimal → Percent:** move the decimal **2 places right** and add a $\\%$ sign (× 100).

$$0.6 \\to 60\\% \\qquad 0.03 \\to 3\\% \\qquad 2.5 \\to 250\\%$$

> ⚠️ **Watch single digits.** $7\\%$ is $0.07$, **not** $0.7$. You must fill an empty place with a zero: $07. \\to 0.07$.`,
      },
      {
        id: 'pct1-decimal-drill',
        type: 'input-boxes' as const,
        content: `**Convert Percents and Decimals** 🧮

Move the decimal two places.

**1)** $45\\%$ as a decimal $= \\,?$
**2)** $7\\%$ as a decimal $= \\,?$
**3)** $0.6$ as a percent $= \\,?\\%$  *(enter just the number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.45', '0.07', '60'],
          hint1: 'Percent → decimal: move 2 places **left**. $45\\% \\to 0.45$.',
          hint2: 'Single digit: $7\\%$ needs a placeholder zero → $0.07$, not $0.7$.',
          hint3: 'Decimal → percent: move 2 places **right**. $0.6 \\to 0.60 \\to 60\\%$.',
          explanation: '1) $45\\% = 0.45$.  2) $7\\% = 0.07$ (fill the empty place with $0$).  3) $0.6 = 60\\%$.',
        },
      },
      {
        id: 'pct1-fractions',
        type: 'text' as const,
        content: `## Percents ↔ Fractions

**Percent → Fraction:** put the number over $100$, then simplify.

$$75\\% = \\frac{75}{100} = \\frac{3}{4} \\qquad 40\\% = \\frac{40}{100} = \\frac{2}{5}$$

**Fraction → Percent:** divide, then move the decimal $2$ places right (or build an equivalent fraction with denominator $100$).

$$\\frac{1}{8} = 0.125 = 12.5\\% \\qquad \\frac{3}{4} = \\frac{75}{100} = 75\\%$$

### Memorize These Benchmarks

| Fraction | Decimal | Percent |
|----------|---------|---------|
| $\\dfrac{1}{2}$ | $0.5$ | $50\\%$ |
| $\\dfrac{1}{4}$ | $0.25$ | $25\\%$ |
| $\\dfrac{3}{4}$ | $0.75$ | $75\\%$ |
| $\\dfrac{1}{5}$ | $0.2$ | $20\\%$ |
| $\\dfrac{1}{8}$ | $0.125$ | $12.5\\%$ |

> 🔑 Knowing these by heart makes mental percents fast: $25\\%$ of anything is just *one quarter* of it.`,
      },
      {
        id: 'pct1-fraction-check',
        type: 'dropdown-select' as const,
        content: `**Match the Forms** 🔽

Choose the correct equivalent for each.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{3}{4}$ as a percent:', options: ['$75\\%$', '$34\\%$', '$0.75\\%$', '$43\\%$'] },
            { label: '$40\\%$ as a simplified fraction:', options: ['$\\dfrac{2}{5}$', '$\\dfrac{4}{10}$', '$\\dfrac{1}{4}$', '$\\dfrac{40}{1}$'] },
            { label: '$\\dfrac{1}{8}$ as a percent:', options: ['$12.5\\%$', '$8\\%$', '$18\\%$', '$1.8\\%$'] },
          ],
          correctAnswers: ['$75\\%$', '$\\dfrac{2}{5}$', '$12.5\\%$'],
          hint1: '$\\frac{3}{4} = \\frac{75}{100} = 75\\%$.',
          hint2: '$40\\% = \\frac{40}{100}$; divide top and bottom by $20$ to get $\\frac{2}{5}$.',
          hint3: '$\\frac{1}{8} = 1 \\div 8 = 0.125 = 12.5\\%$.',
          explanation: '$\\frac{3}{4}=75\\%$, $40\\%=\\frac{2}{5}$ (÷20), and $\\frac{1}{8}=12.5\\%$. All three forms — fraction, decimal, percent — describe the same amount.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'percents-applications-prealg',
    sections: [
      {
        id: 'pct2-intro',
        type: 'text' as const,
        content: `# 💯 Percents and Applications

**Part 2 of 5 — Finding a Percent of a Number**

---

> 🔑 **The Core Skill:** "$20\\%$ of $80$" is a multiplication problem. The word **"of"** means **multiply**, and a percent is a decimal in disguise:
>
> $$20\\% \\text{ of } 80 = 0.20 \\times 80 = 16$$`,
      },
      {
        id: 'pct2-percent-of',
        type: 'text' as const,
        content: `## "Of" Means Multiply

To find a percent **of** a number, change the percent to a decimal and multiply:

$$\\text{(percent as decimal)} \\times \\text{(the number)} = \\text{the part}$$

### Worked Example: $15\\%$ of $60$

1. Convert: $15\\% = 0.15$
2. Multiply: $0.15 \\times 60 = 9$

So $15\\%$ of $60$ is $\\mathbf{9}$.

### Worked Example: $8\\%$ of $250$

$$8\\% = 0.08 \\quad\\Rightarrow\\quad 0.08 \\times 250 = 20$$

### Worked Example: $150\\%$ of $40$

$$150\\% = 1.50 \\quad\\Rightarrow\\quad 1.50 \\times 40 = 60$$

> 💡 Because $150\\% > 100\\%$, the answer ($60$) is **bigger** than the original number ($40$). That's a good sanity check.`,
      },
      {
        id: 'pct2-of-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $20\\%$ of $80$?',
              options: ['$16$', '$160$', '$1.6$', '$4$'],
              correctAnswer: 0,
              explanation: '$20\\% = 0.20$, and $0.20 \\times 80 = 16$.',
            },
            {
              question: 'Which expression correctly computes "$8\\%$ of $250$"?',
              options: ['$0.08 \\times 250$', '$8 \\times 250$', '$250 \\div 8$', '$0.8 \\times 250$'],
              correctAnswer: 0,
              explanation: 'Convert $8\\%$ to the decimal $0.08$, then multiply by $250$. ($0.8$ would be $80\\%$.)',
            },
          ],
        },
      },
      {
        id: 'pct2-estimate',
        type: 'text' as const,
        content: `## Estimate to Catch Mistakes

Before you trust a calculation, **estimate** with a benchmark percent:

- $10\\%$ of a number is just that number with the decimal moved one place left: $10\\%$ of $60$ is $6$.
- So $15\\%$ of $60$ should be a bit *more* than $6$ — and indeed it's $9$. ✓

> 💡 If your answer is wildly off your estimate, you probably forgot to convert the percent to a decimal. ($15 \\times 60 = 900$ is a giant red flag.)`,
      },
      {
        id: 'pct2-percent-drill',
        type: 'input-boxes' as const,
        content: `**Find the Part** 🧮

Convert to a decimal and multiply.

**1)** $15\\%$ of $60 = \\,?$
**2)** $8\\%$ of $250 = \\,?$
**3)** $150\\%$ of $40 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '20', '60'],
          hint1: '$0.15 \\times 60 = 9$.',
          hint2: '$0.08 \\times 250 = 20$.',
          hint3: '$150\\% = 1.5$, and $1.5 \\times 40 = 60$ — larger than $40$, as expected.',
          explanation: '1) $9$.  2) $20$.  3) $60$. Each time: percent → decimal → multiply.',
        },
      },
      {
        id: 'pct2-three-questions',
        type: 'text' as const,
        content: `## The Three Percent Questions

Every percent problem is one of three types. They all come from the same relationship:

$$\\text{part} = \\text{percent} \\times \\text{whole}$$

| Question type | What's missing | How to solve |
|---------------|----------------|--------------|
| **Find the part** | the part | multiply: $0.25 \\times 80 = 20$ |
| **Find the percent** | the percent | divide part by whole: $\\dfrac{18}{24} = 0.75 = 75\\%$ |
| **Find the whole** | the whole | divide part by percent: $\\dfrac{30}{0.25} = 120$ |

### Worked Example: "What percent of $24$ is $18$?"

$$\\frac{\\text{part}}{\\text{whole}} = \\frac{18}{24} = 0.75 = 75\\%$$

### Worked Example: "$30$ is $25\\%$ of what number?"

$$\\text{whole} = \\frac{\\text{part}}{\\text{percent}} = \\frac{30}{0.25} = 120$$

> ⚠️ **Read carefully.** "What percent" → divide part by whole. "Of what number" → divide part by the decimal percent. Mixing these up is the #1 percent mistake.`,
      },
      {
        id: 'pct2-three-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Move** 🔽

For each question, choose the calculation that solves it.`,
        exercise: {
          dropdowns: [
            { label: '$45$ is what percent of $90$?', options: ['$45 \\div 90$', '$90 \\div 45$', '$0.45 \\times 90$', '$45 \\times 90$'] },
            { label: '$12$ is $40\\%$ of what number?', options: ['$12 \\div 0.40$', '$12 \\times 0.40$', '$0.40 \\div 12$', '$12 \\div 40$'] },
            { label: 'What is $5\\%$ of $200$?', options: ['$0.05 \\times 200$', '$200 \\div 0.05$', '$5 \\times 200$', '$200 \\div 5$'] },
          ],
          correctAnswers: ['$45 \\div 90$', '$12 \\div 0.40$', '$0.05 \\times 200$'],
          hint1: '"What percent" → divide the part by the whole: $45 \\div 90 = 0.5 = 50\\%$.',
          hint2: '"Of what number" → divide the part by the decimal percent: $12 \\div 0.40 = 30$.',
          hint3: '"What is X% of" → multiply: $0.05 \\times 200 = 10$.',
          explanation: 'Find percent → $\\frac{part}{whole}$. Find whole → $\\frac{part}{percent}$. Find part → $percent \\times whole$.',
        },
      },
      {
        id: 'pct2-keyword-tip',
        type: 'text' as const,
        content: `## Decoding the Words

The phrasing tells you which operation to use:

| The sentence says... | You are finding the... | So you... |
|----------------------|------------------------|-----------|
| "What **is** X% of N" | part | multiply |
| "**What percent** of N is P" | percent | divide $\\dfrac{P}{N}$ |
| "P is X% **of what**" | whole | divide $\\dfrac{P}{\\text{decimal}}$ |

> 🔑 Translate the words first, *then* compute. Now solve one of each type yourself.`,
      },
      {
        id: 'pct2-three-drill',
        type: 'input-boxes' as const,
        content: `**Solve Each Type** 🧮

**1)** What percent of $24$ is $18$? $\\,?\\%$  *(enter just the number)*
**2)** $30$ is $25\\%$ of what number? $\\,?$
**3)** What is $5\\%$ of $200$? $\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '120', '10'],
          hint1: 'Find percent: $\\frac{18}{24} = 0.75 = 75\\%$.',
          hint2: 'Find whole: $\\frac{30}{0.25} = 120$.',
          hint3: 'Find part: $0.05 \\times 200 = 10$.',
          explanation: '1) $\\frac{18}{24}=75\\%$.  2) $\\frac{30}{0.25}=120$.  3) $0.05\\times 200=10$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'percents-applications-prealg',
    sections: [
      {
        id: 'pct3-intro',
        type: 'text' as const,
        content: `# 💯 Percents and Applications

**Part 3 of 5 — Percent Increase & Decrease**

---

> 🔑 **The Idea:** When a quantity changes, the **percent change** tells you how big the change is *relative to where it started*:
>
> $$\\text{percent change} = \\frac{\\text{amount of change}}{\\text{original amount}} \\times 100\\%$$`,
      },
      {
        id: 'pct3-change',
        type: 'text' as const,
        content: `## Finding the Percent Change

Two steps:
1. **Amount of change** $=$ new value $-$ original value.
2. **Divide by the original**, then convert to a percent.

### Worked Example: A price rises from $40$ to $50$

$$\\text{change} = 50 - 40 = 10$$
$$\\frac{10}{40} = 0.25 = 25\\% \\text{ increase}$$

### Worked Example: A price drops from $80$ to $60$

$$\\text{change} = 60 - 80 = -20$$
$$\\frac{-20}{80} = -0.25 = 25\\% \\text{ decrease}$$

> ⚠️ **Always divide by the *original* value, not the new one.** Going $40 \\to 50$ is a $25\\%$ increase, but $50 \\to 40$ is a $20\\%$ decrease — different originals, different percents.`,
      },
      {
        id: 'pct3-change-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A plant grows from $50$ cm to $75$ cm. What is the percent increase?',
              options: ['$50\\%$', '$25\\%$', '$33\\%$', '$150\\%$'],
              correctAnswer: 0,
              explanation: 'Change $= 75 - 50 = 25$. Divide by the **original**: $\\frac{25}{50} = 0.5 = 50\\%$ increase.',
            },
            {
              question: 'In a percent-change problem, you should always divide the amount of change by the:',
              options: ['original value', 'new value', 'larger value', 'sum of both values'],
              correctAnswer: 0,
              explanation: 'Percent change is measured relative to where you *started*, so you divide by the original (old) value.',
            },
          ],
        },
      },
      {
        id: 'pct3-markup-discount',
        type: 'text' as const,
        content: `## Markups and Discounts

Stores use percent change constantly: a **markup** raises a price, a **discount** lowers it.

There are two equally good methods.

### Method A — Find the change, then add or subtract

**A shirt costs \\$25 and is marked up $20\\%$:**

$$\\text{markup} = 0.20 \\times 25 = 5 \\quad\\Rightarrow\\quad 25 + 5 = \\$30$$

**A \\$80 jacket is $30\\%$ off:**

$$\\text{discount} = 0.30 \\times 80 = 24 \\quad\\Rightarrow\\quad 80 - 24 = \\$56$$

### Method B — Multiply by the final percent (the shortcut)

- A $20\\%$ increase means you keep $100\\% + 20\\% = 120\\%$: $\\;1.20 \\times 25 = \\$30$.
- A $30\\%$ discount means you pay $100\\% - 30\\% = 70\\%$: $\\;0.70 \\times 80 = \\$56$.

> 💡 **Method B is faster.** For a $30\\%$-off sale, just multiply by $0.70$ — you pay $70\\%$ of the original. One step, same answer.`,
      },
      {
        id: 'pct3-shortcut-dropdown',
        type: 'dropdown-select' as const,
        content: `**The One-Step Multiplier** 🔽

Choose the single number you'd multiply the original price by.`,
        exercise: {
          dropdowns: [
            { label: 'A $15\\%$ price increase → multiply by:', options: ['$1.15$', '$0.15$', '$0.85$', '$1.50$'] },
            { label: 'A $40\\%$ discount → multiply by:', options: ['$0.60$', '$0.40$', '$1.40$', '$1.60$'] },
            { label: 'A $25\\%$ markup → multiply by:', options: ['$1.25$', '$0.25$', '$0.75$', '$1.75$'] },
          ],
          correctAnswers: ['$1.15$', '$0.60$', '$1.25$'],
          hint1: 'An increase keeps $100\\%$ and adds more: $100\\% + 15\\% = 115\\% = 1.15$.',
          hint2: 'A discount means you pay what\'s left: $100\\% - 40\\% = 60\\% = 0.60$.',
          hint3: 'A markup adds on top: $100\\% + 25\\% = 125\\% = 1.25$.',
          explanation: 'Increase/markup → $1 + \\text{rate}$. Discount → $1 - \\text{rate}$. So $+15\\% \\to 1.15$, $-40\\% \\to 0.60$, $+25\\% \\to 1.25$.',
        },
      },
      {
        id: 'pct3-method-note',
        type: 'text' as const,
        content: `## One Multiplier, Final Answer

You just built every shortcut multiplier. Putting Method B to work:

$$\\underbrace{1.20}_{+20\\%} \\times 25 = \\$30 \\qquad \\underbrace{0.70}_{-30\\%} \\times 80 = \\$56$$

> 💡 Method B (multiply once) and Method A (find the change, then add/subtract) **always** give the same answer. Use whichever you find clearer — but Method B is fewer steps. Try a few on your own.`,
      },
      {
        id: 'pct3-markup-drill',
        type: 'input-boxes' as const,
        content: `**Markups and Discounts** 🧮

Enter the final price in dollars (just the number).

**1)** A \\$25 shirt is marked up $20\\%$. New price $= \\$\\,?$
**2)** An \\$80 jacket is $30\\%$ off. Sale price $= \\$\\,?$
**3)** A \\$200 bike is $40\\%$ off. Sale price $= \\$\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['30', '56', '120'],
          hint1: 'Increase: $1.20 \\times 25 = 30$.',
          hint2: 'Discount: pay $70\\%$, so $0.70 \\times 80 = 56$.',
          hint3: 'Discount: pay $60\\%$, so $0.60 \\times 200 = 120$.',
          explanation: '1) $1.20\\times 25 = \\$30$.  2) $0.70\\times 80 = \\$56$.  3) $0.60\\times 200 = \\$120$.',
        },
      },
      {
        id: 'pct3-reverse',
        type: 'text' as const,
        content: `## Working Backward (Finding the Original)

If you know the *final* price and the percent change, divide to recover the original.

### Worked Example: A jacket costs \\$48 after $20\\%$ off. What was the original price?

You paid $80\\%$ of the original, so:

$$0.80 \\times (\\text{original}) = 48 \\quad\\Rightarrow\\quad \\text{original} = \\frac{48}{0.80} = \\$60$$

> ⚠️ **Don't just add $20\\%$ back to \\$48.** That gives \\$57.60, which is wrong, because the $20\\%$ was taken off the *larger* original price ($60$), not the sale price ($48$). Always divide by the multiplier.`,
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'percents-applications-prealg',
    sections: [
      {
        id: 'pct4-intro',
        type: 'text' as const,
        content: `# 💯 Percents and Applications

**Part 4 of 5 — Real-World Applications**

---

> 🔑 **Same skill, new names.** Sales tax, tips, commission, and simple interest are *all* "percent of a number" problems wearing different costumes.`,
      },
      {
        id: 'pct4-tax-tip',
        type: 'text' as const,
        content: `## Sales Tax and Tips

Both **tax** and **tip** are amounts *added on top* of a base price.

$$\\text{tax (or tip)} = \\text{rate} \\times \\text{base price}$$
$$\\text{total} = \\text{base} + \\text{tax (or tip)}$$

### Worked Example: $8\\%$ sales tax on a \\$45 purchase

$$\\text{tax} = 0.08 \\times 45 = \\$3.60$$
$$\\text{total} = 45 + 3.60 = \\$48.60$$

### Worked Example: An $18\\%$ tip on a \\$50 meal

$$\\text{tip} = 0.18 \\times 50 = \\$9.00$$
$$\\text{total} = 50 + 9 = \\$59.00$$

> 💡 **Shortcut:** since tax and tip are added on, you can multiply the base by $(1 + \\text{rate})$ for the total in one step: $1.08 \\times 45 = \\$48.60$.`,
      },
      {
        id: 'pct4-tax-tip-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A meal costs \\$35. How much is a $20\\%$ tip?',
              options: ['\\$7', '\\$70', '\\$5.50', '\\$42'],
              correctAnswer: 0,
              explanation: '$0.20 \\times 35 = \\$7$. (The \\$42 would be the *total* including the tip, not the tip itself.)',
            },
            {
              question: 'With $8\\%$ sales tax, what is the **total** cost of a \\$45 item?',
              options: ['\\$48.60', '\\$3.60', '\\$53.00', '\\$45.08'],
              correctAnswer: 0,
              explanation: 'Tax $= 0.08 \\times 45 = \\$3.60$; total $= 45 + 3.60 = \\$48.60$. Or in one step: $1.08 \\times 45 = \\$48.60$.',
            },
          ],
        },
      },
      {
        id: 'pct4-commission',
        type: 'text' as const,
        content: `## Commission

A **commission** is a percent of sales that a salesperson earns as pay.

$$\\text{commission} = \\text{rate} \\times \\text{total sales}$$

### Worked Example: A realtor earns $6\\%$ commission on a \\$250{,}000 home

$$0.06 \\times 250{,}000 = \\$15{,}000$$

### Worked Example: A clerk earns $5\\%$ commission on \\$1{,}200 in sales

$$0.05 \\times 1{,}200 = \\$60$$

> 💡 Commission is the same operation as tax and tip — "percent of a number" — it's just *money earned* instead of *money added to a bill*.`,
      },
      {
        id: 'pct4-app-drill',
        type: 'input-boxes' as const,
        content: `**Tax, Tip, and Commission** 🧮

Enter dollar amounts (just the number).

**1)** A $7.5\\%$ tax on a \\$120 item. Tax $= \\$\\,?$
**2)** A $15\\%$ tip on a \\$40 meal. Tip $= \\$\\,?$
**3)** A $6\\%$ commission on \\$1{,}200 in sales. Commission $= \\$\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '6', '72'],
          hint1: '$0.075 \\times 120 = 9$.',
          hint2: '$0.15 \\times 40 = 6$.',
          hint3: '$0.06 \\times 1200 = 72$.',
          explanation: '1) $0.075\\times 120 = \\$9$.  2) $0.15\\times 40 = \\$6$.  3) $0.06\\times 1200 = \\$72$. All three are "percent of a number."',
        },
      },
      {
        id: 'pct4-interest',
        type: 'text' as const,
        content: `## Simple Interest

**Simple interest** is money earned (or owed) on a starting amount, computed with one formula:

$$I = P \\cdot r \\cdot t$$

| Symbol | Meaning |
|--------|---------|
| $I$ | interest earned (in dollars) |
| $P$ | **principal** — the starting amount |
| $r$ | annual rate, as a **decimal** |
| $t$ | time, in **years** |

### Worked Example: \\$1{,}000 at $5\\%$ for $2$ years

$$I = 1000 \\times 0.05 \\times 2 = \\$100$$

The **total amount** in the account is principal plus interest:

$$P + I = 1000 + 100 = \\$1{,}100$$

> ⚠️ **Two common slips:** (1) use $r$ as a *decimal* ($5\\% = 0.05$, not $5$), and (2) keep $t$ in *years* (6 months $= 0.5$ year).`,
      },
      {
        id: 'pct4-interest-dropdown',
        type: 'dropdown-select' as const,
        content: `**Simple Interest** 🔽

Use $I = P \\cdot r \\cdot t$ for \\$500 at $4\\%$ for $3$ years.`,
        exercise: {
          dropdowns: [
            { label: 'The principal $P$ is:', options: ['$500$', '$4$', '$0.04$', '$3$'] },
            { label: 'The rate $r$ (as a decimal) is:', options: ['$0.04$', '$4$', '$0.4$', '$0.004$'] },
            { label: 'The interest $I = P \\cdot r \\cdot t$ equals:', options: ['$\\$60$', '$\\$600$', '$\\$6$', '$\\$20$'] },
          ],
          correctAnswers: ['$500$', '$0.04$', '$\\$60$'],
          hint1: 'The principal is the starting amount you deposit: \\$500.',
          hint2: '$4\\%$ as a decimal is $0.04$ (move two places left).',
          hint3: '$I = 500 \\times 0.04 \\times 3 = 20 \\times 3 = \\$60$.',
          explanation: '$P = 500$, $r = 0.04$, $t = 3$, so $I = 500 \\times 0.04 \\times 3 = \\$60$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'percents-applications-prealg',
    sections: [
      {
        id: 'pct5-intro',
        type: 'text' as const,
        content: `# 💯 Percents and Applications

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) convert between percents, decimals, and fractions, (2) find a percent of a number and solve all three percent questions, (3) handle percent increase and decrease, and (4) apply percents to tax, tip, commission, and interest. Let's put it all together.`,
      },
      {
        id: 'pct5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Percent → decimal | move decimal $2$ places **left** ($45\\% \\to 0.45$) |
| Decimal → percent | move decimal $2$ places **right** ($0.6 \\to 60\\%$) |
| Find the part | $\\text{percent} \\times \\text{whole}$ |
| Find the percent | $\\dfrac{\\text{part}}{\\text{whole}} \\times 100\\%$ |
| Find the whole | $\\dfrac{\\text{part}}{\\text{percent}}$ |
| Percent change | $\\dfrac{\\text{new} - \\text{original}}{\\text{original}} \\times 100\\%$ |
| Discount (pay) | multiply by $1 - \\text{rate}$ |
| Markup / tax / tip total | multiply by $1 + \\text{rate}$ |
| Simple interest | $I = P \\cdot r \\cdot t$ |

> ⚠️ Remember the big three traps: convert percents to **decimals** before multiplying, divide by the **original** for percent change, and use $r$ as a **decimal** with $t$ in **years**.`,
      },
      {
        id: 'pct5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Mixed Review** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$12.5\\%$ as a fraction:', options: ['$\\dfrac{1}{8}$', '$\\dfrac{1}{4}$', '$\\dfrac{1}{2}$', '$\\dfrac{1}{5}$'] },
            { label: 'A price goes $60 \\to 75$. The percent change is:', options: ['$25\\%$ increase', '$15\\%$ increase', '$20\\%$ increase', '$25\\%$ decrease'] },
            { label: 'A \\$50 item with a $10\\%$ discount: pay', options: ['$\\$45$', '$\\$40$', '$\\$55$', '$\\$5$'] },
          ],
          correctAnswers: ['$\\dfrac{1}{8}$', '$25\\%$ increase', '$\\$45$'],
          hint1: '$12.5\\% = \\frac{12.5}{100} = \\frac{1}{8}$ (it\'s a benchmark — memorize it).',
          hint2: 'Change $= 75 - 60 = 15$; $\\frac{15}{60} = 0.25 = 25\\%$ increase.',
          hint3: '$10\\%$ off means pay $90\\%$: $0.90 \\times 50 = \\$45$.',
          explanation: '$12.5\\% = \\frac{1}{8}$; $60\\to 75$ is $\\frac{15}{60}=25\\%$ up; $10\\%$ off \\$50 leaves $0.90\\times 50=\\$45$.',
        },
      },
      {
        id: 'pct5-numeric-note',
        type: 'text' as const,
        content: `## From Recognizing to Computing

The review above asked you to *recognize* the right form. Now let's *compute* full answers. Keep the playbook handy:

- **"What is X% of N?"** → multiply.
- **"P is X% of what?"** → divide $P$ by the decimal.
- **A tip total** → multiply by $1 + \\text{rate}$.

> 🔑 Decimal-ize the percent first, every time. Then the arithmetic is easy.`,
      },
      {
        id: 'pct5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** What is $35\\%$ of $200$? $\\,?$
**2)** $90$ is $75\\%$ of what number? $\\,?$
**3)** A \\$45 meal with a $20\\%$ tip costs a total of $\\$\\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['70', '120', '54'],
          hint1: '$0.35 \\times 200 = 70$.',
          hint2: 'Find the whole: $\\frac{90}{0.75} = 120$.',
          hint3: 'Total $= 1.20 \\times 45 = 54$ (or tip $9$ plus meal $45$).',
          explanation: '1) $0.35\\times 200 = 70$.  2) $\\frac{90}{0.75}=120$.  3) $1.20\\times 45 = \\$54$.',
        },
      },
      {
        id: 'pct5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Application Challenge** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \\$100 phone is $25\\%$ off, then $8\\%$ sales tax is added to the sale price. What is the final total?',
              options: ['\\$81.00', '\\$83.00', '\\$75.00', '\\$80.00'],
              correctAnswer: 0,
              explanation: 'Sale price $= 0.75 \\times 100 = \\$75$. Tax $= 0.08 \\times 75 = \\$6$. Total $= 75 + 6 = \\$81.00$.',
            },
            {
              question: 'You deposit \\$800 at $6\\%$ simple interest for $2$ years. How much **interest** do you earn?',
              options: ['\\$96', '\\$48', '\\$896', '\\$960'],
              correctAnswer: 0,
              explanation: '$I = P \\cdot r \\cdot t = 800 \\times 0.06 \\times 2 = \\$96$. (\\$896 would be the total balance.)',
            },
          ],
        },
      },
      {
        id: 'pct5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$48$ is what percent of $80$?',
              options: ['$60\\%$', '$48\\%$', '$160\\%$', '$32\\%$'],
              correctAnswer: 0,
              explanation: 'Find the percent: $\\frac{\\text{part}}{\\text{whole}} = \\frac{48}{80} = 0.6 = 60\\%$.',
            },
            {
              question: 'A jacket is on sale for \\$40 after a $20\\%$ discount. What was the original price?',
              options: ['\\$50', '\\$48', '\\$60', '\\$45'],
              correctAnswer: 0,
              explanation: 'You paid $80\\%$ of the original: $0.80 \\times \\text{(original)} = 40$, so original $= \\frac{40}{0.80} = \\$50$. (Adding $20\\%$ back to \\$40 is the wrong move.)',
            },
            {
              question: 'A store marks up a \\$250 item by $12\\%$. What is the new price?',
              options: ['\\$280', '\\$262', '\\$300', '\\$238'],
              correctAnswer: 0,
              explanation: 'A $12\\%$ markup means multiply by $1.12$: $1.12 \\times 250 = \\$280$ (markup $= 0.12 \\times 250 = \\$30$, added on).',
            },
          ],
        },
      },
    ],
  },
]
