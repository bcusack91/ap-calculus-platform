import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Decimals and Percents (Pre-Algebra).
 * Registry key / DB slug: 'decimals-and-percents'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'decimals-and-percents',
    sections: [
      {
        id: 'dp1-intro',
        type: 'text' as const,
        content: `# 💯 Decimals and Percents

**Part 1 of 5 — Place Value & What a Decimal Really Means**

---

### Topics in This Part

| Section |
|---------|
| Reading the Places After the Point |
| Decimals Are Just Fractions in Disguise |
| Comparing & Ordering Decimals |

> 🔑 **Key Concept:** A decimal is a shorthand for a fraction whose denominator is a power of ten. Once you see *which* power of ten each place stands for, every decimal skill follows.`,
      },
      {
        id: 'dp1-places',
        type: 'text' as const,
        content: `## Reading the Places After the Point

Each spot to the **right** of the decimal point is ten times *smaller* than the one before it.

| Place | Value | Example digit in $0.4\\,7\\,5$ |
|-------|-------|------------------------------|
| tenths | $\\dfrac{1}{10}$ | $4$ → four tenths |
| hundredths | $\\dfrac{1}{100}$ | $7$ → seven hundredths |
| thousandths | $\\dfrac{1}{1000}$ | $5$ → five thousandths |

So $0.475$ means $\\dfrac{4}{10} + \\dfrac{7}{100} + \\dfrac{5}{1000} = \\dfrac{475}{1000}$.

> 💡 **Read it out loud:** the last place names the whole thing. $0.475$ is read "four hundred seventy-five **thousandths**" because the final digit $5$ sits in the thousandths place.`,
      },
      {
        id: 'dp1-place-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the number $3.829$, which digit is in the hundredths place?',
              options: ['$8$', '$2$', '$9$', '$3$'],
              correctAnswer: 1,
              explanation: 'After the point the order is tenths ($8$), hundredths ($2$), thousandths ($9$). The hundredths digit is $2$.',
            },
            {
              question: 'How do you read $0.06$?',
              options: ['six tenths', 'six hundredths', 'sixty hundredths', 'six thousandths'],
              correctAnswer: 1,
              explanation: 'The last digit $6$ is in the hundredths place, so $0.06 = \\frac{6}{100}$ — "six hundredths." Note $0.6$ would be six *tenths*.',
            },
          ],
        },
      },
      {
        id: 'dp1-asfraction',
        type: 'text' as const,
        content: `## Decimals Are Just Fractions in Disguise

To turn a decimal into a fraction, the **number of decimal places** tells you the denominator:

$$0.7 = \\frac{7}{10}, \\qquad 0.07 = \\frac{7}{100}, \\qquad 0.007 = \\frac{7}{1000}$$

- **1** decimal place → denominator $10$
- **2** decimal places → denominator $100$
- **3** decimal places → denominator $1000$

### Worked Example: write $0.24$ as a fraction in lowest terms

$$0.24 = \\frac{24}{100} = \\frac{24 \\div 4}{100 \\div 4} = \\frac{6}{25}$$

> 🔑 **Key Idea:** Count the decimal places to get the denominator, drop the point to get the numerator, then simplify.`,
      },
      {
        id: 'dp1-tofraction-drill',
        type: 'input-boxes' as const,
        content: `**Decimal → Fraction** 🧮

Write each decimal as a fraction in **lowest terms**. Type it like \`3/4\`.

**1)** $0.5 = \\,?$
**2)** $0.35 = \\,?$
**3)** $0.08 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['1/2', '7/20', '2/25'],
          hint1: '$0.5 = \\frac{5}{10}$; divide top and bottom by $5$.',
          hint2: '$0.35 = \\frac{35}{100}$; divide top and bottom by $5$ to get $\\frac{7}{20}$.',
          hint3: '$0.08 = \\frac{8}{100}$; divide top and bottom by $4$ to get $\\frac{2}{25}$.',
          explanation: '1) $\\frac{5}{10}=\\frac{1}{2}$.  2) $\\frac{35}{100}=\\frac{7}{20}$.  3) $\\frac{8}{100}=\\frac{2}{25}$.',
        },
      },
      {
        id: 'dp1-compare',
        type: 'text' as const,
        content: `## Comparing & Ordering Decimals

To compare decimals, **line up the decimal points** and compare place by place, left to right. If one number has fewer digits, pad it with **trailing zeros** — they don't change its value.

### Example: which is larger, $0.4$ or $0.38$?

Pad $0.4$ to $0.40$ and compare:

$$0.40 \\;\\text{vs}\\; 0.38 \\;\\Rightarrow\\; \\text{tenths } 4 > 3 \\;\\Rightarrow\\; 0.4 > 0.38$$

> ⚠️ **Common trap:** "$0.38$ has more digits, so it's bigger." Not true! More digits does **not** mean a bigger number. Compare place value, not length.`,
      },
      {
        id: 'dp1-compare-dd',
        type: 'dropdown-select' as const,
        content: `**Compare the Decimals** 🔽

Choose the correct symbol for each pair.`,
        exercise: {
          dropdowns: [
            { label: '$0.7 \\;\\square\\; 0.68$', options: ['$>$', '$<$', '$=$'] },
            { label: '$0.250 \\;\\square\\; 0.25$', options: ['$>$', '$<$', '$=$'] },
            { label: '$0.09 \\;\\square\\; 0.1$', options: ['$>$', '$<$', '$=$'] },
          ],
          correctAnswers: ['$>$', '$=$', '$<$'],
          hint1: 'Pad $0.7$ to $0.70$ and compare with $0.68$: tenths $7 > 6$.',
          hint2: 'Trailing zeros never change a value, so $0.250 = 0.25$.',
          hint3: 'Pad $0.1$ to $0.10$: hundredths place gives $0.09 < 0.10$.',
          explanation: '$0.70 > 0.68$; $0.250 = 0.25$; $0.09 < 0.10$. Always pad to the same number of places first.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'decimals-and-percents',
    sections: [
      {
        id: 'dp2-intro',
        type: 'text' as const,
        content: `# 💯 Decimals and Percents

**Part 2 of 5 — Arithmetic with Decimals**

---

> 🔑 **The Idea:** Adding and subtracting decimals is all about **lining up the points**. Multiplying and dividing is about **counting decimal places**. Master those two habits and decimal arithmetic becomes routine.`,
      },
      {
        id: 'dp2-addsub',
        type: 'text' as const,
        content: `## Adding & Subtracting

**Line up the decimal points**, pad with zeros so every number has the same number of places, then add or subtract as usual — keeping the point in the same column.

### Worked Example: $3.4 + 12.75$

$$\\begin{aligned} 3.40 \\\\ +\\;12.75 \\\\ \\hline 16.15 \\end{aligned}$$

### Worked Example: $8 - 2.6$

Write $8$ as $8.0$, then subtract:

$$8.0 - 2.6 = 5.4$$

> ⚠️ Don't right-align the digits like whole numbers — align the **decimal points**. $3.4 + 12.75$ is *not* $3.4$ stacked under $2.75$.`,
      },
      {
        id: 'dp2-addsub-drill',
        type: 'input-boxes' as const,
        content: `**Add & Subtract** 🧮

**1)** $5.6 + 2.85 = \\,?$
**2)** $10 - 3.7 = \\,?$
**3)** $0.45 + 0.9 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8.45', '6.3', '1.35'],
          hint1: 'Pad to $5.60 + 2.85$ and line up the points.',
          hint2: 'Write $10$ as $10.0$, then $10.0 - 3.7$.',
          hint3: 'Pad to $0.45 + 0.90$.',
          explanation: '1) $5.60 + 2.85 = 8.45$.  2) $10.0 - 3.7 = 6.3$.  3) $0.45 + 0.90 = 1.35$.',
        },
      },
      {
        id: 'dp2-multiply',
        type: 'text' as const,
        content: `## Multiplying Decimals

**Ignore the points**, multiply as whole numbers, then **count the total decimal places** in both factors and place the point that many spots from the right.

### Worked Example: $0.6 \\times 0.4$

$6 \\times 4 = 24$. The factors have $1 + 1 = 2$ decimal places total, so:

$$0.6 \\times 0.4 = 0.24$$

### Worked Example: $1.2 \\times 0.05$

$12 \\times 5 = 60$. Total decimal places $= 1 + 2 = 3$, so move the point $3$ spots:

$$1.2 \\times 0.05 = 0.060 = 0.06$$

> 💡 **Sanity check:** multiplying by a number **less than 1** makes things *smaller*. $0.6 \\times 0.4 = 0.24$ is smaller than both factors — that's expected.`,
      },
      {
        id: 'dp2-mult-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'How many decimal places will be in the product $0.3 \\times 0.07$?',
              options: ['$1$', '$2$', '$3$', '$4$'],
              correctAnswer: 2,
              explanation: '$0.3$ has $1$ place and $0.07$ has $2$ places, so the product has $1 + 2 = 3$ decimal places: $0.021$.',
            },
            {
              question: 'What is $0.5 \\times 0.5$?',
              options: ['$0.25$', '$2.5$', '$0.025$', '$0.1$'],
              correctAnswer: 0,
              explanation: '$5 \\times 5 = 25$, and $1 + 1 = 2$ decimal places, so $0.5 \\times 0.5 = 0.25$. (It is a quarter of $1$.)',
            },
          ],
        },
      },
      {
        id: 'dp2-divide',
        type: 'text' as const,
        content: `## Dividing Decimals

To divide by a decimal, **move the divisor's point to the right** until it's a whole number, and move the dividend's point the **same** number of places. Then divide normally.

### Worked Example: $4.5 \\div 0.9$

Multiply both by $10$ so the divisor becomes a whole number:

$$4.5 \\div 0.9 = 45 \\div 9 = 5$$

### Worked Example: $1.44 \\div 1.2$

Multiply both by $10$: $\\;14.4 \\div 12 = 1.2$.

> 🔑 **Why it works:** moving both points the same way multiplies top and bottom of $\\dfrac{4.5}{0.9}$ by the same power of ten — the value of the fraction doesn't change.`,
      },
      {
        id: 'dp2-divide-drill',
        type: 'input-boxes' as const,
        content: `**Multiply & Divide** 🧮

**1)** $0.8 \\times 0.3 = \\,?$
**2)** $6 \\div 0.5 = \\,?$
**3)** $0.96 \\div 0.6 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.24', '12', '1.6'],
          hint1: '$8 \\times 3 = 24$, with $2$ decimal places.',
          hint2: 'Multiply both by $10$: $60 \\div 5$.',
          hint3: 'Multiply both by $10$: $9.6 \\div 6$.',
          explanation: '1) $0.24$.  2) $6 \\div 0.5 = 60 \\div 5 = 12$.  3) $0.96 \\div 0.6 = 9.6 \\div 6 = 1.6$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'decimals-and-percents',
    sections: [
      {
        id: 'dp3-intro',
        type: 'text' as const,
        content: `# 💯 Decimals and Percents

**Part 3 of 5 — What a Percent Is & Converting**

---

> 🔑 **The Big Idea:** *Percent* means "per hundred." A percent is just a fraction with a hidden denominator of $100$ — and that makes converting between percents, decimals, and fractions almost mechanical.`,
      },
      {
        id: 'dp3-meaning',
        type: 'text' as const,
        content: `## What Does "Percent" Mean?

The word **percent** comes from *per centum* — "per hundred." The symbol $\\%$ literally stands for $\\div 100$:

$$37\\% = \\frac{37}{100} = 0.37$$

So a percent is three views of the same number:

| Percent | Fraction (out of 100) | Decimal |
|---------|------------------------|---------|
| $37\\%$ | $\\dfrac{37}{100}$ | $0.37$ |
| $9\\%$ | $\\dfrac{9}{100}$ | $0.09$ |
| $150\\%$ | $\\dfrac{150}{100}$ | $1.5$ |

> 💡 A percent **can** be more than $100$. $150\\%$ just means $1.5$ — one and a half of the whole.`,
      },
      {
        id: 'dp3-pct-dec',
        type: 'text' as const,
        content: `## Percent ↔ Decimal

Because $\\%$ means $\\div 100$, converting is just **moving the decimal point two places**:

- **Percent → Decimal:** move the point **left** 2 places (divide by 100).
  $$45\\% \\to 0.45, \\qquad 8\\% \\to 0.08, \\qquad 120\\% \\to 1.20$$
- **Decimal → Percent:** move the point **right** 2 places (multiply by 100).
  $$0.6 \\to 60\\%, \\qquad 0.03 \\to 3\\%, \\qquad 1.25 \\to 125\\%$$

> ⚠️ **Watch the zeros:** $8\\% = 0.08$, **not** $0.8$. Moving left two places from $8.$ gives $0.08$. And $0.6 = 60\\%$, **not** $6\\%$ — pad to $0.60$ before moving.`,
      },
      {
        id: 'dp3-pctdec-dd',
        type: 'dropdown-select' as const,
        content: `**Percent ↔ Decimal** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$72\\%$ as a decimal:', options: ['$0.72$', '$7.2$', '$0.072$', '$72$'] },
            { label: '$5\\%$ as a decimal:', options: ['$0.05$', '$0.5$', '$5.0$', '$0.005$'] },
            { label: '$0.9$ as a percent:', options: ['$90\\%$', '$9\\%$', '$0.9\\%$', '$900\\%$'] },
          ],
          correctAnswers: ['$0.72$', '$0.05$', '$90\\%$'],
          hint1: 'Move the point in $72.$ two places left → $0.72$.',
          hint2: '$5\\%$: move two left from $5.$ → $0.05$ (a zero gets inserted).',
          hint3: 'Decimal → percent moves the point two places right: $0.90 \\to 90\\%$.',
          explanation: '$72\\% = 0.72$; $5\\% = 0.05$; $0.9 = 0.90 = 90\\%$. Percent↔decimal is always a 2-place shift.',
        },
      },
      {
        id: 'dp3-pct-frac',
        type: 'text' as const,
        content: `## Percent ↔ Fraction

- **Percent → Fraction:** put the percent over $100$, then simplify.
  $$40\\% = \\frac{40}{100} = \\frac{2}{5}$$
- **Fraction → Percent:** rewrite with denominator $100$ (or divide and multiply by $100$).
  $$\\frac{3}{4} = \\frac{75}{100} = 75\\%$$

### A few worth memorizing

| Fraction | Decimal | Percent |
|----------|---------|---------|
| $\\dfrac{1}{2}$ | $0.5$ | $50\\%$ |
| $\\dfrac{1}{4}$ | $0.25$ | $25\\%$ |
| $\\dfrac{3}{4}$ | $0.75$ | $75\\%$ |
| $\\dfrac{1}{5}$ | $0.2$ | $20\\%$ |
| $\\dfrac{1}{10}$ | $0.1$ | $10\\%$ |

> 🔑 Knowing these "benchmark" conversions by heart makes estimating percents in your head fast.`,
      },
      {
        id: 'dp3-convert-drill',
        type: 'input-boxes' as const,
        content: `**Convert** 🧮

**1)** Write $80\\%$ as a fraction in lowest terms (like \`3/4\`).
**2)** Write $\\dfrac{1}{5}$ as a percent. *(include the number only, e.g. \`20\`)*
**3)** Write $0.125$ as a percent. *(number only)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4/5', '20', '12.5'],
          hint1: '$80\\% = \\frac{80}{100}$; divide top and bottom by $20$.',
          hint2: '$\\frac{1}{5} = \\frac{20}{100}$, which is $20\\%$.',
          hint3: 'Move the point in $0.125$ two places right: $0.125 \\to 12.5\\%$.',
          explanation: '1) $\\frac{80}{100}=\\frac{4}{5}$.  2) $\\frac{1}{5}=20\\%$.  3) $0.125 = 12.5\\%$.',
        },
      },
      {
        id: 'dp3-convert-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which list shows the same value three ways?',
              options: [
                '$\\frac{1}{4}$, $\\;0.25$, $\\;25\\%$',
                '$\\frac{1}{4}$, $\\;0.4$, $\\;25\\%$',
                '$\\frac{1}{4}$, $\\;0.25$, $\\;4\\%$',
                '$\\frac{1}{4}$, $\\;2.5$, $\\;25\\%$',
              ],
              correctAnswer: 0,
              explanation: '$\\frac{1}{4} = \\frac{25}{100} = 0.25 = 25\\%$. All three forms describe the same quantity.',
            },
            {
              question: 'Order from smallest to largest: $0.6$, $\\;\\frac{1}{2}$, $\\;55\\%$.',
              options: [
                '$\\frac{1}{2}, \\;55\\%, \\;0.6$',
                '$0.6, \\;55\\%, \\;\\frac{1}{2}$',
                '$55\\%, \\;\\frac{1}{2}, \\;0.6$',
                '$\\frac{1}{2}, \\;0.6, \\;55\\%$',
              ],
              correctAnswer: 0,
              explanation: 'Convert all to decimals: $\\frac{1}{2}=0.50$, $55\\%=0.55$, and $0.6=0.60$. So $0.50 < 0.55 < 0.60$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'decimals-and-percents',
    sections: [
      {
        id: 'dp4-intro',
        type: 'text' as const,
        content: `# 💯 Decimals and Percents

**Part 4 of 5 — Finding a Percent of a Number**

---

> 🔑 **The Move:** "Percent of" almost always means **multiply**. Turn the percent into a decimal and multiply by the number. That one habit solves tips, discounts, and tax.`,
      },
      {
        id: 'dp4-percentof',
        type: 'text' as const,
        content: `## Finding a Percent OF a Number

To find a percent of a quantity, **convert the percent to a decimal and multiply**:

$$\\text{percent of a number} = (\\text{decimal form}) \\times (\\text{number})$$

### Worked Example: What is $20\\%$ of $60$?

$$20\\% = 0.20, \\qquad 0.20 \\times 60 = 12$$

### Worked Example: What is $8\\%$ of $250$?

$$8\\% = 0.08, \\qquad 0.08 \\times 250 = 20$$

> 💡 **Quick mental trick:** $10\\%$ of any number is just that number with the point moved one place left. $10\\%$ of $60$ is $6$, so $20\\%$ is double that — $12$. ✓`,
      },
      {
        id: 'dp4-percentof-drill',
        type: 'input-boxes' as const,
        content: `**Percent of a Number** 🧮

**1)** $25\\%$ of $80 = \\,?$
**2)** $10\\%$ of $45 = \\,?$
**3)** $5\\%$ of $200 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['20', '4.5', '10'],
          hint1: '$25\\% = 0.25$, and $0.25 \\times 80$.',
          hint2: '$10\\%$ moves the point one place left: $45 \\to 4.5$.',
          hint3: '$5\\% = 0.05$, and $0.05 \\times 200$.',
          explanation: '1) $0.25 \\times 80 = 20$.  2) $10\\%$ of $45 = 4.5$.  3) $0.05 \\times 200 = 10$.',
        },
      },
      {
        id: 'dp4-tipstax',
        type: 'text' as const,
        content: `## Tips, Tax, and Discounts

These are all just "percent of a number," then add or subtract.

### Example — Tip: a meal costs \\$40 and you tip $15\\%$.

$$0.15 \\times 40 = 6 \\;\\Rightarrow\\; \\text{total} = 40 + 6 = 46$$, giving \\$46

### Example — Discount: a \\$50 jacket is $30\\%$ off.

$$0.30 \\times 50 = 15 \\;\\Rightarrow\\; \\text{sale price} = 50 - 15 = 35$$, giving \\$35

> 🔑 **Shortcut for discounts:** $30\\%$ off means you **pay $70\\%$**. So $0.70 \\times 50 = 35$ giving \\$35 in a single step — same answer, fewer moves.`,
      },
      {
        id: 'dp4-app-dd',
        type: 'dropdown-select' as const,
        content: `**Real-World Percents** 🔽

A \\$60 pair of shoes is $25\\%$ off. Walk through it.`,
        exercise: {
          dropdowns: [
            { label: 'The discount amount is:', options: ['$\\$15$', '$\\$25$', '$\\$45$', '$\\$6$'] },
            { label: 'You pay this percent of the price:', options: ['$75\\%$', '$25\\%$', '$60\\%$', '$50\\%$'] },
            { label: 'The final sale price is:', options: ['$\\$45$', '$\\$35$', '$\\$15$', '$\\$75$'] },
          ],
          correctAnswers: ['$\\$15$', '$75\\%$', '$\\$45$'],
          hint1: '$25\\%$ of $60$ is $0.25 \\times 60 = 15$.',
          hint2: '$25\\%$ off means you keep $100\\% - 25\\% = 75\\%$.',
          hint3: 'Sale price $= 60 - 15 = 45$, or directly $0.75 \\times 60 = 45$.',
          explanation: 'Discount $= \\$15$; you pay $75\\%$; final price $= 60 - 15 = \\$45$ (or $0.75 \\times 60 = \\$45$).',
        },
      },
      {
        id: 'dp4-app-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A restaurant bill is \\$80. With a $20\\%$ tip, what is the total?',
              options: ['$\\$96$', '$\\$100$', '$\\$84$', '$\\$16$'],
              correctAnswer: 0,
              explanation: '$20\\%$ of $80$ is $0.20 \\times 80 = 16$. Total $= 80 + 16 = \\$96$.',
            },
            {
              question: 'A \\$120 phone has $6\\%$ sales tax added. What is the final cost?',
              options: ['$\\$127.20$', '$\\$126$', '$\\$120.06$', '$\\$132$'],
              correctAnswer: 0,
              explanation: '$6\\%$ of $120$ is $0.06 \\times 120 = 7.20$. Final cost $= 120 + 7.20 = \\$127.20$.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'decimals-and-percents',
    sections: [
      {
        id: 'dp5-intro',
        type: 'text' as const,
        content: `# 💯 Decimals and Percents

**Part 5 of 5 — Percent Change & Mastery Check**

---

You can now read decimals, do decimal arithmetic, convert between forms, and take a percent of a number. The last skill ties it together: measuring **how much something changed** as a percent.`,
      },
      {
        id: 'dp5-change',
        type: 'text' as const,
        content: `## Percent Increase & Decrease

To find the percent a quantity changed, compare the **change** to the **original**:

$$\\text{percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$$

### Worked Example — Increase: a price rises from \\$40 to \\$50.

$$\\frac{50 - 40}{40} \\times 100\\% = \\frac{10}{40} \\times 100\\% = 25\\% \\text{ increase}$$

### Worked Example — Decrease: a class shrinks from $30$ to $24$ students.

$$\\frac{24 - 30}{30} \\times 100\\% = \\frac{-6}{30} \\times 100\\% = -20\\%,\\; \\text{a } 20\\% \\text{ decrease}$$

> ⚠️ **Always divide by the *original* amount**, not the new one. The starting value is your "$100\\%$."`,
      },
      {
        id: 'dp5-change-drill',
        type: 'input-boxes' as const,
        content: `**Percent Change** 🧮

Give the percent change (number only, e.g. \`25\`).

**1)** A plant grows from $20$ cm to $26$ cm. Percent increase $= \\,?$
**2)** A \\$80 coat drops to \\$60. Percent decrease $= \\,?$`,
        exercise: {
          boxes: 2,
          correctAnswers: ['30', '25'],
          hint1: 'Change $= 26 - 20 = 6$; divide by the original $20$: $\\frac{6}{20} = 0.3$.',
          hint2: 'Change $= 80 - 60 = 20$; divide by the original $80$: $\\frac{20}{80} = 0.25$.',
          explanation: '1) $\\frac{6}{20} \\times 100\\% = 30\\%$ increase.  2) $\\frac{20}{80} \\times 100\\% = 25\\%$ decrease.',
        },
      },
      {
        id: 'dp5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Decimal → fraction | digits over $10, 100, 1000, \\dots$ then simplify |
| Percent → decimal | move point **2 left** ($\\div 100$) |
| Decimal → percent | move point **2 right** ($\\times 100$) |
| Percent of a number | (decimal form) $\\times$ number |
| Discount of $r\\%$ | pay $(100 - r)\\%$ of the price |
| Percent change | $\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$ |

> 💡 Almost every percent problem reduces to one idea: **percent means "per hundred."** Convert to a decimal and the arithmetic is ordinary multiplication.`,
      },
      {
        id: 'dp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \\$25 shirt is marked up to \\$30. What is the percent increase?',
              options: ['$20\\%$', '$5\\%$', '$16.7\\%$', '$25\\%$'],
              correctAnswer: 0,
              explanation: 'Change $= 30 - 25 = 5$. Divide by the original: $\\frac{5}{25} \\times 100\\% = 20\\%$.',
            },
            {
              question: 'Which is the largest value?',
              options: ['$\\frac{3}{5}$', '$0.55$', '$58\\%$', '$\\frac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'As decimals: $\\frac{3}{5}=0.60$, $0.55$, $58\\%=0.58$, $\\frac{1}{2}=0.50$. The largest is $\\frac{3}{5}=0.60$.',
            },
          ],
        },
      },
      {
        id: 'dp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Write $0.45$ as a fraction in lowest terms.',
              options: ['$\\frac{9}{20}$', '$\\frac{45}{10}$', '$\\frac{4}{5}$', '$\\frac{9}{25}$'],
              correctAnswer: 0,
              explanation: '$0.45 = \\frac{45}{100} = \\frac{45 \\div 5}{100 \\div 5} = \\frac{9}{20}$.',
            },
            {
              question: 'What is $15\\%$ of $200$?',
              options: ['$30$', '$15$', '$3$', '$300$'],
              correctAnswer: 0,
              explanation: '$15\\% = 0.15$, and $0.15 \\times 200 = 30$.',
            },
            {
              question: 'A \\$50 game is $40\\%$ off. What is the sale price?',
              options: ['$\\$30$', '$\\$20$', '$\\$40$', '$\\$10$'],
              correctAnswer: 0,
              explanation: '$40\\%$ off means you pay $60\\%$: $0.60 \\times 50 = \\$30$. (Or $50 - 0.40 \\times 50 = 50 - 20 = \\$30$.)',
            },
          ],
        },
      },
    ],
  },
]
