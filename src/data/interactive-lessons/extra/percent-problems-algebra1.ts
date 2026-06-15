import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Percent Problems (Algebra 1).
 * Registry key / DB Topic.slug: 'percent-problems-algebra1'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). Currency is escaped as \$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'percent-problems-algebra1',
    sections: [
      {
        id: 'pct1-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 1 of 5 — What a Percent Really Is**

---

### Topics in This Part

| Section |
|---------|
| Percent = "Out of 100" |
| Converting Percents, Decimals & Fractions |
| Finding the Percent of a Number |

> 🔑 **Key Concept:** A percent is just a fraction with a hidden denominator of $100$. Master that one idea and every percent problem — tips, taxes, discounts, interest — becomes the same problem in a costume.`,
      },
      {
        id: 'pct1-meaning',
        type: 'text' as const,
        content: `## Percent = "Out of 100"

The word **percent** comes from *per centum* — "per hundred." So:

$$x\\% = \\frac{x}{100}$$

That means $37\\%$ literally means $\\dfrac{37}{100}$, or $37$ out of every $100$.

### Three Ways to Write the Same Value

| Percent | Fraction | Decimal |
|---------|----------|---------|
| $50\\%$ | $\\dfrac{50}{100} = \\dfrac{1}{2}$ | $0.5$ |
| $25\\%$ | $\\dfrac{25}{100} = \\dfrac{1}{4}$ | $0.25$ |
| $10\\%$ | $\\dfrac{10}{100} = \\dfrac{1}{10}$ | $0.1$ |
| $100\\%$ | $\\dfrac{100}{100} = 1$ | $1$ |

> 💡 **Notice:** $100\\%$ of something is the *whole* thing, and $200\\%$ is *twice* as much. Percents above $100$ are completely normal.`,
      },
      {
        id: 'pct1-convert-text',
        type: 'text' as const,
        content: `## Converting Between Forms

Two moves do almost everything:

**Percent → Decimal:** divide by $100$ (move the decimal point **two places left**).
$$64\\% = 0.64 \\qquad 8\\% = 0.08 \\qquad 150\\% = 1.5$$

**Decimal → Percent:** multiply by $100$ (move the decimal point **two places right**).
$$0.3 = 30\\% \\qquad 0.07 = 7\\% \\qquad 1.25 = 125\\%$$

> ⚠️ **Watch the zeros.** $8\\%$ is $0.08$, **not** $0.8$. Forgetting the leading zero is the #1 percent error.`,
      },
      {
        id: 'pct1-convert-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Write $5\\%$ as a decimal.',
              options: ['$0.05$', '$0.5$', '$5.0$', '$0.005$'],
              correctAnswer: 0,
              explanation: 'Divide by $100$: move the decimal two places left. $5\\% = 0.05$. (One zero is needed as a placeholder.)',
            },
            {
              question: 'Write $0.9$ as a percent.',
              options: ['$9\\%$', '$0.9\\%$', '$90\\%$', '$900\\%$'],
              correctAnswer: 2,
              explanation: 'Multiply by $100$: move the decimal two places right. $0.9 = 90\\%$.',
            },
            {
              question: 'Which percent equals the fraction $\\dfrac{3}{4}$?',
              options: ['$34\\%$', '$75\\%$', '$43\\%$', '$7.5\\%$'],
              correctAnswer: 1,
              explanation: '$\\dfrac{3}{4} = 0.75 = 75\\%$. (Divide $3 \\div 4 = 0.75$, then multiply by $100$.)',
            },
          ],
        },
      },
      {
        id: 'pct1-convert-drill',
        type: 'input-boxes' as const,
        content: `**Conversion Drill** 🧮

Convert each value. Enter decimals as decimals (e.g. \`0.42\`).

**1)** $42\\%$ as a decimal $= \\,?$
**2)** $3\\%$ as a decimal $= \\,?$
**3)** $1.4$ as a percent $= \\,?$  *(enter just the number, e.g. \`140\`)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.42', '0.03', '140'],
          hint1: 'Percent → decimal: divide by $100$ (two places left). $42\\% = 0.42$.',
          hint2: '$3\\%$ needs a placeholder zero: $0.03$, not $0.3$.',
          hint3: 'Decimal → percent: multiply by $100$ (two places right). $1.4 = 140\\%$.',
          explanation: '1) $42\\% = 0.42$.  2) $3\\% = 0.03$.  3) $1.4 = 140\\%$ — values over $1$ become percents over $100$.',
        },
      },
      {
        id: 'pct1-percent-of-text',
        type: 'text' as const,
        content: `## Finding the Percent OF a Number

To find a percent **of** a number, turn the percent into a decimal and **multiply**. The word "of" means times.

$$x\\% \\text{ of } N = \\frac{x}{100} \\cdot N$$

### Worked Example: $20\\%$ of $80$

$$20\\% \\text{ of } 80 = 0.20 \\cdot 80 = 16$$

### Worked Example: $15\\%$ of $60$

$$15\\% \\text{ of } 60 = 0.15 \\cdot 60 = 9$$

> 💡 **Mental-math shortcut:** $10\\%$ of any number just moves the decimal one place left. $10\\%$ of $250$ is $25$. Then $5\\%$ is half of that ($12.5$), and $20\\%$ is double it ($50$).`,
      },
      {
        id: 'pct1-percent-of-drill',
        type: 'input-boxes' as const,
        content: `**Find the Part** 🧮

Compute each. Multiply the decimal form by the number.

**1)** $25\\%$ of $40 = \\,?$
**2)** $10\\%$ of $90 = \\,?$
**3)** $30\\%$ of $200 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['10', '9', '60'],
          hint1: '$25\\% = 0.25$, so $0.25 \\cdot 40 = 10$.',
          hint2: '$10\\%$ moves the decimal one place left: $10\\%$ of $90 = 9$.',
          hint3: '$30\\% = 0.30$, so $0.30 \\cdot 200 = 60$.',
          explanation: '1) $0.25 \\cdot 40 = 10$.  2) $0.10 \\cdot 90 = 9$.  3) $0.30 \\cdot 200 = 60$. "Of" always means multiply.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'percent-problems-algebra1',
    sections: [
      {
        id: 'pct2-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 2 of 5 — The Percent Proportion & The Three Questions**

---

> 🔑 **One tool, three questions.** Every basic percent problem is asking for one of three things: the **part**, the **whole**, or the **percent**. A single proportion handles all three.`,
      },
      {
        id: 'pct2-proportion',
        type: 'text' as const,
        content: `## The Percent Proportion

$$\\frac{\\text{part}}{\\text{whole}} = \\frac{\\text{percent}}{100}$$

The **whole** is the amount after the word "of." The **part** is usually the amount after "is."

> 💡 A useful phrase: **"is over of equals percent over 100."**
> $$\\frac{\\text{is}}{\\text{of}} = \\frac{\\%}{100}$$

### The Three Questions

| You're missing… | The question sounds like… |
|-----------------|---------------------------|
| the **part** | "What **is** $20\\%$ of $80$?" |
| the **percent** | "$16$ **is what percent** of $80$?" |
| the **whole** | "$16$ **is** $20\\%$ **of what**?" |

Fill in everything you know, then cross-multiply and solve.`,
      },
      {
        id: 'pct2-find-part',
        type: 'text' as const,
        content: `## Question 1 — Finding the Part

### Worked Example: What is $35\\%$ of $140$?

Set up the proportion with the part unknown:

$$\\frac{p}{140} = \\frac{35}{100}$$

Cross-multiply:

$$100p = 35 \\cdot 140 = 4900 \\;\\Rightarrow\\; p = \\frac{4900}{100} = 49$$

> ✅ **Check with multiplication:** $0.35 \\cdot 140 = 49$ ✓ — same answer as Part 1's method, because they're the same idea.`,
      },
      {
        id: 'pct2-find-percent',
        type: 'text' as const,
        content: `## Question 2 — Finding the Percent

### Worked Example: $18$ is what percent of $72$?

Now the percent is unknown:

$$\\frac{18}{72} = \\frac{x}{100}$$

Cross-multiply:

$$72x = 18 \\cdot 100 = 1800 \\;\\Rightarrow\\; x = \\frac{1800}{72} = 25$$

So $18$ is $\\mathbf{25\\%}$ of $72$.

> ⚠️ **Order matters.** "$18$ is what percent **of** $72$" puts $72$ (the "of" number) on the bottom. Flipping them gives the wrong answer.`,
      },
      {
        id: 'pct2-setup-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set Up the Proportion** 🔽

Read each question and choose the correct setup using $\\dfrac{\\text{is}}{\\text{of}} = \\dfrac{\\%}{100}$.`,
        exercise: {
          dropdowns: [
            { label: '"What is $40\\%$ of $25$?"', options: ['$\\frac{p}{25} = \\frac{40}{100}$', '$\\frac{25}{p} = \\frac{40}{100}$', '$\\frac{p}{40} = \\frac{25}{100}$', '$\\frac{40}{25} = \\frac{p}{100}$'] },
            { label: '"$9$ is what percent of $36$?"', options: ['$\\frac{9}{36} = \\frac{x}{100}$', '$\\frac{36}{9} = \\frac{x}{100}$', '$\\frac{9}{x} = \\frac{36}{100}$', '$\\frac{x}{36} = \\frac{9}{100}$'] },
            { label: '"$12$ is $30\\%$ of what number?"', options: ['$\\frac{12}{w} = \\frac{30}{100}$', '$\\frac{w}{12} = \\frac{30}{100}$', '$\\frac{12}{30} = \\frac{w}{100}$', '$\\frac{30}{12} = \\frac{w}{100}$'] },
          ],
          correctAnswers: ['$\\frac{p}{25} = \\frac{40}{100}$', '$\\frac{9}{36} = \\frac{x}{100}$', '$\\frac{12}{w} = \\frac{30}{100}$'],
          hint1: 'The "of" number is the whole — it goes in the denominator on the left.',
          hint2: 'The "is" number is the part — it goes in the numerator on the left.',
          hint3: 'The known percent goes over $100$; the unknown can be the part, percent, or whole.',
          explanation: '1) Part unknown: $\\frac{p}{25}=\\frac{40}{100}$.  2) Percent unknown: $\\frac{9}{36}=\\frac{x}{100}$.  3) Whole unknown: $\\frac{12}{w}=\\frac{30}{100}$.',
        },
      },
      {
        id: 'pct2-mixed-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $60\\%$ of $45$?',
              options: ['$27$', '$30$', '$75$', '$2.7$'],
              correctAnswer: 0,
              explanation: '$\\frac{p}{45} = \\frac{60}{100} \\Rightarrow 100p = 2700 \\Rightarrow p = 27$. (Or $0.60 \\cdot 45 = 27$.)',
            },
            {
              question: '$21$ is what percent of $84$?',
              options: ['$4\\%$', '$25\\%$', '$40\\%$', '$63\\%$'],
              correctAnswer: 1,
              explanation: '$\\frac{21}{84} = \\frac{x}{100} \\Rightarrow 84x = 2100 \\Rightarrow x = 25$. So $21$ is $25\\%$ of $84$.',
            },
          ],
        },
      },
      {
        id: 'pct2-find-part-drill',
        type: 'input-boxes' as const,
        content: `**Part & Percent Drill** 🧮

Use the proportion (or multiply).

**1)** What is $45\\%$ of $80$? $= \\,?$
**2)** $30$ is what percent of $120$? $= \\,?$  *(enter just the number)*
**3)** What is $8\\%$ of $250$? $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '25', '20'],
          hint1: '$0.45 \\cdot 80 = 36$.',
          hint2: '$\\frac{30}{120} = 0.25 = 25\\%$.',
          hint3: '$0.08 \\cdot 250 = 20$.',
          explanation: '1) $0.45 \\cdot 80 = 36$.  2) $\\frac{30}{120}=\\frac{1}{4}=25\\%$.  3) $0.08 \\cdot 250 = 20$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'percent-problems-algebra1',
    sections: [
      {
        id: 'pct3-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 3 of 5 — Finding the Whole (the Reverse Problem)**

---

> 🔑 **The trickiest of the three.** When the *whole* is missing, students often divide by the wrong number. The proportion keeps you safe — but there's also a slick one-step method.`,
      },
      {
        id: 'pct3-find-whole',
        type: 'text' as const,
        content: `## Finding the Whole

### Worked Example: $24$ is $30\\%$ of what number?

Set up with the **whole** unknown:

$$\\frac{24}{w} = \\frac{30}{100}$$

Cross-multiply:

$$30w = 24 \\cdot 100 = 2400 \\;\\Rightarrow\\; w = \\frac{2400}{30} = 80$$

So $24$ is $30\\%$ of $\\mathbf{80}$.

> ✅ **Check:** $30\\%$ of $80 = 0.30 \\cdot 80 = 24$ ✓`,
      },
      {
        id: 'pct3-divide-method',
        type: 'text' as const,
        content: `## The One-Step Shortcut

Since "part $=$ percent (as a decimal) $\\times$ whole," you can solve for the whole by **dividing**:

$$\\text{whole} = \\frac{\\text{part}}{\\text{percent as a decimal}}$$

### Same Example, Faster

$$w = \\frac{24}{0.30} = 80$$

### Another: $45$ is $75\\%$ of what?

$$w = \\frac{45}{0.75} = 60$$

> ⚠️ **Direction check:** finding the whole means the answer should be **bigger** than the part (when the percent is under $100\\%$). If you divide $24 \\div 0.30$ and get something *smaller* than $24$, you divided the wrong way.`,
      },
      {
        id: 'pct3-whole-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Operation?** 🔽

Decide what to do, then read off the result.`,
        exercise: {
          dropdowns: [
            { label: 'To find the whole, you should…', options: ['divide the part by the decimal percent', 'multiply the part by the decimal percent', 'divide the percent by the part', 'add the part and the percent'] },
            { label: '$15$ is $25\\%$ of what number?', options: ['$60$', '$3.75$', '$40$', '$3.75\\%$'] },
            { label: '$50$ is $40\\%$ of what number?', options: ['$125$', '$20$', '$90$', '$200$'] },
          ],
          correctAnswers: ['divide the part by the decimal percent', '$60$', '$125$'],
          hint1: 'part $=$ percent $\\times$ whole, so whole $=$ part $\\div$ percent.',
          hint2: '$15 \\div 0.25 = 60$ — and $60$ is bigger than $15$, which makes sense.',
          hint3: '$50 \\div 0.40 = 125$.',
          explanation: 'Whole $=$ part $\\div$ decimal percent. $15 \\div 0.25 = 60$; $50 \\div 0.40 = 125$. Both wholes exceed their parts (percent $< 100\\%$).',
        },
      },
      {
        id: 'pct3-three-q-check',
        type: 'multiple-choice' as const,
        content: `**Mixed Concept Check** 🎯

These mix all three question types — read carefully before you set up.`,
        exercise: {
          questions: [
            {
              question: '$18$ is $20\\%$ of what number?',
              options: ['$3.6$', '$90$', '$72$', '$38$'],
              correctAnswer: 1,
              explanation: 'Whole $= 18 \\div 0.20 = 90$. Check: $0.20 \\cdot 90 = 18$ ✓.',
            },
            {
              question: 'What is $120\\%$ of $50$?',
              options: ['$42$', '$170$', '$60$', '$600$'],
              correctAnswer: 2,
              explanation: '$120\\% = 1.2$, so $1.2 \\cdot 50 = 60$. A percent over $100$ gives a result larger than the original.',
            },
          ],
        },
      },
      {
        id: 'pct3-whole-drill',
        type: 'input-boxes' as const,
        content: `**Find the Whole** 🧮

Use whole $=$ part $\\div$ decimal percent.

**1)** $14$ is $50\\%$ of what number? $= \\,?$
**2)** $9$ is $25\\%$ of what number? $= \\,?$
**3)** $63$ is $90\\%$ of what number? $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['28', '36', '70'],
          hint1: '$14 \\div 0.50 = 28$.',
          hint2: '$9 \\div 0.25 = 36$.',
          hint3: '$63 \\div 0.90 = 70$.',
          explanation: '1) $14 \\div 0.5 = 28$.  2) $9 \\div 0.25 = 36$.  3) $63 \\div 0.9 = 70$. Each whole is larger than its part because every percent is under $100\\%$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'percent-problems-algebra1',
    sections: [
      {
        id: 'pct4-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 4 of 5 — Percent Change, Tips, Tax & Discounts**

---

> 🔑 **Real money lives here.** Markups, markdowns, tips, and sales tax are all *percent of change* problems. One formula and one shortcut cover them all.`,
      },
      {
        id: 'pct4-change-formula',
        type: 'text' as const,
        content: `## Percent of Change

$$\\text{percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$$

- A **positive** result is a **percent increase**.
- A **negative** result is a **percent decrease**.

> ⚠️ **Always divide by the ORIGINAL (old) amount**, not the new one. The "old" value is your $100\\%$ baseline.

### Worked Example: Price rises from \$40 to \$50

$$\\frac{50 - 40}{40} \\times 100\\% = \\frac{10}{40} \\times 100\\% = 25\\% \\text{ increase}$$

### Worked Example: Price drops from \$80 to \$60

$$\\frac{60 - 80}{80} \\times 100\\% = \\frac{-20}{80} \\times 100\\% = -25\\% \\;(\\text{a } 25\\% \\text{ decrease})$$`,
      },
      {
        id: 'pct4-change-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A plant grows from $20$ cm to $26$ cm. What is the percent increase?',
              options: ['$6\\%$', '$30\\%$', '$23\\%$', '$26\\%$'],
              correctAnswer: 1,
              explanation: '$\\frac{26-20}{20} \\times 100\\% = \\frac{6}{20} \\times 100\\% = 30\\%$. Divide the change by the ORIGINAL ($20$).',
            },
            {
              question: 'A \$50 jacket is marked down to \$35. What is the percent decrease?',
              options: ['$15\\%$', '$35\\%$', '$30\\%$', '$43\\%$'],
              correctAnswer: 2,
              explanation: '$\\frac{35-50}{50} \\times 100\\% = \\frac{-15}{50} \\times 100\\% = -30\\%$, i.e. a $30\\%$ decrease.',
            },
          ],
        },
      },
      {
        id: 'pct4-multiplier',
        type: 'text' as const,
        content: `## The Multiplier Shortcut (Tips, Tax, Discounts)

Instead of finding the change and then adding or subtracting, multiply **once** by a smart number.

| Situation | Multiplier |
|-----------|------------|
| Add $8\\%$ tax | $\\times 1.08$ |
| Add a $20\\%$ tip | $\\times 1.20$ |
| Take $25\\%$ off | $\\times 0.75$ |
| Take $40\\%$ off | $\\times 0.60$ |

> 🔑 **Rule:** To **increase** by $p\\%$, multiply by $\\left(1 + \\dfrac{p}{100}\\right)$. To **decrease** by $p\\%$, multiply by $\\left(1 - \\dfrac{p}{100}\\right)$.

### Worked Example: \$60 meal with a $20\\%$ tip

$$60 \\times 1.20 = 72 \\;\\Rightarrow\\; \\$72 \\text{ total}$$

### Worked Example: \$80 shoes, $25\\%$ off

$$80 \\times 0.75 = 60 \\;\\Rightarrow\\; \\$60 \\text{ sale price}$$`,
      },
      {
        id: 'pct4-multiplier-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Multiplier** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Add $15\\%$ sales tax:', options: ['$\\times 1.15$', '$\\times 0.15$', '$\\times 1.5$', '$\\times 0.85$'] },
            { label: 'Take $30\\%$ off the price:', options: ['$\\times 0.70$', '$\\times 1.30$', '$\\times 0.30$', '$\\times 0.97$'] },
            { label: 'Increase by $100\\%$ (double it):', options: ['$\\times 2.00$', '$\\times 1.00$', '$\\times 0.50$', '$\\times 10.0$'] },
          ],
          correctAnswers: ['$\\times 1.15$', '$\\times 0.70$', '$\\times 2.00$'],
          hint1: 'Increase by $p\\%$: multiply by $1 + \\frac{p}{100}$.',
          hint2: 'Decrease by $p\\%$: multiply by $1 - \\frac{p}{100}$. A $30\\%$ discount keeps $70\\%$, so $\\times 0.70$.',
          hint3: 'A $100\\%$ increase adds the whole thing again: $1 + 1.00 = 2.00$.',
          explanation: 'Tax $+15\\% \\to \\times 1.15$. Discount $-30\\% \\to \\times 0.70$ (you pay $70\\%$). $+100\\% \\to \\times 2.00$.',
        },
      },
      {
        id: 'pct4-money-drill',
        type: 'input-boxes' as const,
        content: `**Money Math** 🧮

Use the multiplier shortcut. Enter dollar amounts as numbers (e.g. \`64.80\`).

**1)** A \$120 bike is $40\\%$ off. Sale price $= \\,?$
**2)** A \$25 meal with $8\\%$ tax. Total $= \\,?$
**3)** A population of $400$ grows by $15\\%$. New population $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['72', '27', '460'],
          hint1: '$40\\%$ off means you pay $60\\%$: $120 \\times 0.60 = 72$.',
          hint2: 'Add tax: $25 \\times 1.08 = 27$.',
          hint3: 'Grow by $15\\%$: $400 \\times 1.15 = 460$.',
          explanation: '1) $120 \\times 0.60 = \\$72$.  2) $25 \\times 1.08 = \\$27$.  3) $400 \\times 1.15 = 460$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'percent-problems-algebra1',
    sections: [
      {
        id: 'pct5-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 5 of 5 — Mixed Applications & Mastery Check**

---

You can now (1) convert percents, (2) find the part, (3) find the percent and the whole, and (4) handle percent change, tips, tax, and discounts. Time to combine them — including a few classic traps.`,
      },
      {
        id: 'pct5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Percent → decimal | divide by $100$ (two places left) |
| Find the **part** | part $=$ decimal percent $\\times$ whole |
| Find the **percent** | percent $= \\dfrac{\\text{part}}{\\text{whole}} \\times 100\\%$ |
| Find the **whole** | whole $= \\dfrac{\\text{part}}{\\text{decimal percent}}$ |
| Percent change | $\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100\\%$ |
| Increase / decrease by $p\\%$ | $\\times \\left(1 \\pm \\dfrac{p}{100}\\right)$ |

> ⚠️ **Two famous traps:**
> 1. A $20\\%$ increase followed by a $20\\%$ decrease does **not** return to the start. ($100 \\to 120 \\to 96$.)
> 2. Percent change is always measured **against the original**, never the new value.`,
      },
      {
        id: 'pct5-trap-text',
        type: 'text' as const,
        content: `## A Classic Trap: Up Then Down

A \$100 stock rises $20\\%$, then falls $20\\%$. Is it back to \$100?

**Step 1 — Up $20\\%$:** $100 \\times 1.20 = 120$.
**Step 2 — Down $20\\%$:** $120 \\times 0.80 = 96$.

It ends at $\\mathbf{\\$96}$ — a net **$4\\%$ loss**! The second $20\\%$ is taken from the *larger* \$120, so it removes more than the first $20\\%$ added.

> 💡 **Why:** $1.20 \\times 0.80 = 0.96$, which is a $4\\%$ decrease overall — no matter the starting price.`,
      },
      {
        id: 'pct5-trap-check',
        type: 'multiple-choice' as const,
        content: `**Trap Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \$200 item goes up $50\\%$, then down $50\\%$. Final price?',
              options: ['$\\$200$', '$\\$150$', '$\\$100$', '$\\$50$'],
              correctAnswer: 1,
              explanation: '$200 \\times 1.50 = 300$, then $300 \\times 0.50 = 150$. The overall multiplier is $1.5 \\times 0.5 = 0.75$, a $25\\%$ net loss.',
            },
            {
              question: 'Which is larger: $20\\%$ of $50$, or $50\\%$ of $20$?',
              options: ['$20\\%$ of $50$ is larger', '$50\\%$ of $20$ is larger', 'They are equal', 'It cannot be determined'],
              correctAnswer: 2,
              explanation: 'Both equal $10$: $0.20 \\cdot 50 = 10$ and $0.50 \\cdot 20 = 10$. "$a\\%$ of $b$" always equals "$b\\%$ of $a$."',
            },
          ],
        },
      },
      {
        id: 'pct5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Mastery Drill** 🧮

**1)** $36$ is what percent of $48$? $= \\,?$  *(enter just the number)*
**2)** $21$ is $35\\%$ of what number? $= \\,?$
**3)** A \$90 coat is $30\\%$ off, then $10\\%$ sales tax is added. Final price $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['75', '60', '69.30'],
          hint1: '$\\frac{36}{48} = 0.75 = 75\\%$.',
          hint2: 'Whole $= 21 \\div 0.35 = 60$.',
          hint3: 'Discount first: $90 \\times 0.70 = 63$. Then tax: $63 \\times 1.10 = 69.30$.',
          explanation: '1) $\\frac{36}{48}=75\\%$.  2) $21 \\div 0.35 = 60$.  3) $90 \\times 0.70 = 63$, then $63 \\times 1.10 = \\$69.30$.',
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
              question: 'What is $15\\%$ of $240$?',
              options: ['$36$', '$16$', '$45$', '$360$'],
              correctAnswer: 0,
              explanation: '$0.15 \\cdot 240 = 36$. (Or $10\\%$ of $240 = 24$, plus half of that $= 12$, gives $36$.)',
            },
            {
              question: 'A test score rose from $60$ to $75$. What was the percent increase?',
              options: ['$15\\%$', '$20\\%$', '$25\\%$', '$80\\%$'],
              correctAnswer: 2,
              explanation: '$\\frac{75-60}{60} \\times 100\\% = \\frac{15}{60} \\times 100\\% = 25\\%$. Divide the change by the ORIGINAL ($60$).',
            },
            {
              question: '$48$ is $80\\%$ of what number?',
              options: ['$38.4$', '$60$', '$96$', '$128$'],
              correctAnswer: 1,
              explanation: 'Whole $= 48 \\div 0.80 = 60$. Check: $0.80 \\cdot 60 = 48$ ✓.',
            },
          ],
        },
      },
    ],
  },
]
