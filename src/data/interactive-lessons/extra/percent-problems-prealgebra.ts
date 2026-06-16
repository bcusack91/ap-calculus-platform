import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Percent Problems (Pre-Algebra).
 * Registry key: 'percent-problems-prealgebra' (matches the DB Topic.slug).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings). Currency in prose is escaped as \$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'percent-problems-prealgebra',
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
| Percent Means "Out of 100" |
| Percents, Decimals & Fractions |
| Converting Back and Forth |

> 🔑 **Key Concept:** A percent is just a fraction with a hidden denominator of $100$. The word **percent** literally means *"per hundred"* — *cent* is the Latin root for hundred (think *cent*ury, *cent*imeter). Master that one idea and every percent problem becomes a fraction problem you already know how to do.`,
      },
      {
        id: 'pct1-meaning',
        type: 'text' as const,
        content: `## Percent Means "Out of 100"

When you see $37\\%$, read it as **"37 out of 100"**:

$$37\\% = \\frac{37}{100} = 0.37$$

Imagine a $10 \\times 10$ grid with $100$ little squares. Shading $37$ of them shows you exactly what $37\\%$ looks like.

| Percent | Words | Fraction | Decimal |
|---------|-------|----------|---------|
| $25\\%$ | 25 out of 100 | $\\dfrac{25}{100} = \\dfrac{1}{4}$ | $0.25$ |
| $50\\%$ | 50 out of 100 | $\\dfrac{50}{100} = \\dfrac{1}{2}$ | $0.50$ |
| $100\\%$ | 100 out of 100 | $\\dfrac{100}{100} = 1$ | $1.00$ |
| $9\\%$ | 9 out of 100 | $\\dfrac{9}{100}$ | $0.09$ |

> 💡 **Watch the edges:** $100\\%$ is the *whole thing*. More than $100\\%$ (like $150\\%$) means *more than the whole*, and less than $1\\%$ means a tiny sliver.`,
      },
      {
        id: 'pct1-meaning-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What does $63\\%$ mean?',
              options: ['63 out of 100', '63 out of 10', '100 out of 63', '63 times 100'],
              correctAnswer: 0,
              explanation: 'Percent means "per hundred," so $63\\%$ is $63$ out of $100$, which equals $\\frac{63}{100} = 0.63$.',
            },
            {
              question: 'A test grade of $100\\%$ means you got:',
              options: ['Every question right (the whole thing)', 'Half right', '100 questions right', 'One question right'],
              correctAnswer: 0,
              explanation: '$100\\% = \\frac{100}{100} = 1$, the whole amount — so you earned the entire possible score.',
            },
          ],
        },
      },
      {
        id: 'pct1-to-decimal',
        type: 'text' as const,
        content: `## Percent → Decimal: Move the Point Left

To turn a percent into a decimal, **divide by 100** — which just slides the decimal point **two places to the left** and drops the $\\%$ sign.

$$48\\% = 48.0 \\to 0.48 \\qquad 7\\% = 07.0 \\to 0.07 \\qquad 250\\% = 250.0 \\to 2.50$$

> ⚠️ **Don't forget the leading zero.** $7\\%$ becomes $0.07$, **not** $0.7$. You must fill the empty place with a zero: $0\\underline{0}7 \\to 0.07$.

## Decimal → Percent: Move the Point Right

Going the other way, **multiply by 100** — slide the point **two places to the right** and add a $\\%$ sign.

$$0.92 \\to 92\\% \\qquad 0.05 \\to 5\\% \\qquad 1.3 \\to 130\\%$$`,
      },
      {
        id: 'pct1-convert-drill',
        type: 'input-boxes' as const,
        content: `**Convert Percents and Decimals** 🧮

Fill in each blank.

**1)** $84\\% = \\,?$ *(as a decimal)*
**2)** $3\\% = \\,?$ *(as a decimal)*
**3)** $0.6 = \\,?$ *(as a percent — enter just the number, e.g. type \`60\` for $60\\%$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.84', '0.03', '60'],
          hint1: 'Percent → decimal: move the point two places left. $84\\% \\to 0.84$.',
          hint2: 'For $3\\%$, you need a zero to fill the gap: $3\\% \\to 0.03$, not $0.3$.',
          hint3: 'Decimal → percent: move the point two places right. $0.6 \\to 0.60 \\to 60\\%$.',
          explanation: '1) $84\\% = 0.84$.  2) $3\\% = 0.03$ (leading zero required).  3) $0.6 = 60\\%$.',
        },
      },
      {
        id: 'pct1-to-fraction',
        type: 'text' as const,
        content: `## Percent → Fraction (and Simplify)

Write the percent over $100$, then reduce:

$$40\\% = \\frac{40}{100} = \\frac{2}{5} \\qquad 75\\% = \\frac{75}{100} = \\frac{3}{4}$$

### The "Benchmark" Percents Worth Memorizing

These come up constantly — knowing them by heart makes mental math fast.

| Percent | Fraction | Decimal |
|---------|----------|---------|
| $10\\%$ | $\\dfrac{1}{10}$ | $0.1$ |
| $20\\%$ | $\\dfrac{1}{5}$ | $0.2$ |
| $25\\%$ | $\\dfrac{1}{4}$ | $0.25$ |
| $50\\%$ | $\\dfrac{1}{2}$ | $0.5$ |
| $75\\%$ | $\\dfrac{3}{4}$ | $0.75$ |

> 🔑 **Tip:** $\\frac{1}{4}$ of something is the same as $25\\%$ of it. Spotting these matches lets you skip the calculator.`,
      },
      {
        id: 'pct1-fraction-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Forms** 🔽

Pick the equivalent value for each.`,
        exercise: {
          dropdowns: [
            { label: '$25\\%$ as a fraction:', options: ['$\\frac{1}{4}$', '$\\frac{1}{25}$', '$\\frac{1}{5}$', '$\\frac{2}{5}$'] },
            { label: '$0.5$ as a percent:', options: ['$50\\%$', '$5\\%$', '$0.5\\%$', '$500\\%$'] },
            { label: '$\\frac{1}{10}$ as a percent:', options: ['$10\\%$', '$1\\%$', '$0.1\\%$', '$100\\%$'] },
          ],
          correctAnswers: ['$\\frac{1}{4}$', '$50\\%$', '$10\\%$'],
          hint1: '$25\\% = \\frac{25}{100}$, and $\\frac{25}{100}$ reduces to $\\frac{1}{4}$.',
          hint2: 'Decimal → percent moves the point right two places: $0.5 \\to 50\\%$.',
          hint3: '$\\frac{1}{10} = 0.1 = 10\\%$ — one of the benchmark values.',
          explanation: '$25\\% = \\frac{1}{4}$, $\\;0.5 = 50\\%$, $\\;\\frac{1}{10} = 10\\%$. These three forms always describe the same amount.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'percent-problems-prealgebra',
    sections: [
      {
        id: 'pct2-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 2 of 5 — Finding the Percent OF a Number**

---

> 🔑 **The Big Idea:** In a percent problem, the word **"of" means multiply**. To find a percent of a number, change the percent to a decimal and multiply.`,
      },
      {
        id: 'pct2-of-means-times',
        type: 'text' as const,
        content: `## "Of" Means Multiply

To find **a percent of a number**, follow two steps:

1. **Convert** the percent to a decimal (move the point two places left).
2. **Multiply** by the number.

$$\\text{part} = \\text{percent (as a decimal)} \\times \\text{whole}$$

### Worked Example: What is $30\\%$ of $80$?

$$30\\% \\text{ of } 80 = 0.30 \\times 80 = 24$$

So $30\\%$ of $80$ is $\\mathbf{24}$.

### Worked Example: What is $5\\%$ of $200$?

$$5\\% \\text{ of } 200 = 0.05 \\times 200 = 10$$

> ⚠️ **Sanity check your answer.** Since $30\\%$ is less than half, $30\\%$ of $80$ should be *less than $40$* — and $24$ is. If you ever get a part *bigger* than the whole (with a percent under $100\\%$), you slipped a decimal point.`,
      },
      {
        id: 'pct2-mental',
        type: 'text' as const,
        content: `## The 10% Trick (Fast Mental Math)

$10\\%$ of any number is found by **moving its decimal point one place left** — just divide by $10$.

$$10\\% \\text{ of } 60 = 6 \\qquad 10\\% \\text{ of } 45 = 4.5$$

Once you know $10\\%$, you can build other percents:

| Want | Build it from $10\\%$ |
|------|----------------------|
| $5\\%$ | half of $10\\%$ |
| $20\\%$ | double $10\\%$ |
| $30\\%$ | $10\\%$ three times |
| $15\\%$ | $10\\% + 5\\%$ |

### Example: $20\\%$ of $50$ (mental)

$10\\%$ of $50$ is $5$, so $20\\%$ is $5 \\times 2 = \\mathbf{10}$.

> 💡 This is exactly how people figure out a tip in their head — find $10\\%$, then scale it.`,
      },
      {
        id: 'pct2-of-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $40\\%$ of $90$?',
              options: ['$36$', '$45$', '$130$', '$22.5$'],
              correctAnswer: 0,
              explanation: '$40\\% = 0.40$, so $0.40 \\times 90 = 36$. (Check: $40\\%$ is a bit less than half, and $36$ is a bit less than $45$. ✓)',
            },
            {
              question: 'In "What is $15\\%$ of $200$?", the word "of" tells you to:',
              options: ['Multiply', 'Add', 'Subtract', 'Divide'],
              correctAnswer: 0,
              explanation: '"Of" means multiply. $15\\% \\text{ of } 200 = 0.15 \\times 200 = 30$.',
            },
          ],
        },
      },
      {
        id: 'pct2-method-recap',
        type: 'text' as const,
        content: `## The Two-Step Recap

Whenever you need *a percent of a number*, run the same two moves:

$$\\underbrace{\\text{percent}}_{\\text{move point 2 left}} \\;\\longrightarrow\\; \\text{decimal} \\;\\times\\; \\text{whole} \\;=\\; \\text{part}$$

| Problem | Decimal | Multiply | Part |
|---------|---------|----------|------|
| $25\\%$ of $60$ | $0.25$ | $0.25 \\times 60$ | $15$ |
| $10\\%$ of $130$ | $0.10$ | $0.10 \\times 130$ | $13$ |

> 💡 Keep the table's pattern in mind as you work the drill below — decimal first, then multiply.`,
      },
      {
        id: 'pct2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Part** 🧮

Compute each. (Convert to a decimal, then multiply.)

**1)** $25\\%$ of $60 = \\,?$
**2)** $10\\%$ of $130 = \\,?$
**3)** $150\\%$ of $40 = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '13', '60'],
          hint1: '$25\\% = 0.25$, so $0.25 \\times 60 = 15$. (Or: $\\frac{1}{4}$ of $60$.)',
          hint2: '$10\\%$ just moves the decimal one place left: $130 \\to 13$.',
          hint3: '$150\\% = 1.50$, so $1.50 \\times 40 = 60$. Over $100\\%$ gives more than the whole.',
          explanation: '1) $0.25 \\times 60 = 15$.  2) $0.10 \\times 130 = 13$.  3) $1.50 \\times 40 = 60$.',
        },
      },
      {
        id: 'pct2-estimate',
        type: 'text' as const,
        content: `## Estimate First, Compute Second

Good math students *predict* the size of an answer before grinding the numbers. Anchor every percent to these landmarks:

| Percent | Compared to the whole |
|---------|------------------------|
| under $50\\%$ | **less than half** |
| exactly $50\\%$ | **exactly half** |
| $100\\%$ | the **whole** amount |
| over $100\\%$ | **more than the whole** |

> 💡 Estimating first turns a calculation into a quick check. If $50\\%$ of $88$ "should be about half," then $44$ feels right and $176$ obviously doesn't.`,
      },
      {
        id: 'pct2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Reason Before You Compute** 🔽

Without a calculator, decide what's true.`,
        exercise: {
          dropdowns: [
            { label: '$50\\%$ of $88$ is:', options: ['$44$', '$88$', '$176$', '$22$'] },
            { label: '$100\\%$ of $35$ is:', options: ['$35$', '$3.5$', '$350$', '$0$'] },
            { label: '$200\\%$ of $9$ is:', options: ['$18$', '$9$', '$4.5$', '$90$'] },
          ],
          correctAnswers: ['$44$', '$35$', '$18$'],
          hint1: '$50\\%$ means half: half of $88$ is $44$.',
          hint2: '$100\\%$ is the whole thing, so $100\\%$ of $35$ is $35$.',
          hint3: '$200\\%$ is twice the whole: $2 \\times 9 = 18$.',
          explanation: 'Halves and whole-number-percent shortcuts: $50\\% = $ half, $100\\% = $ all of it, $200\\% = $ double.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'percent-problems-prealgebra',
    sections: [
      {
        id: 'pct3-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 3 of 5 — The Three Kinds of Percent Questions**

---

> 🔑 **One Setup, Three Questions:** Every percent problem fits the relationship below. Whichever piece is missing, that's what you solve for.
>
> $$\\frac{\\text{part}}{\\text{whole}} = \\frac{\\text{percent}}{100}$$`,
      },
      {
        id: 'pct3-proportion',
        type: 'text' as const,
        content: `## The Percent Proportion

Line up the numbers in this proportion and **cross-multiply** to solve for the unknown:

$$\\frac{\\text{part}}{\\text{whole}} = \\frac{\\%}{100}$$

- The **whole** comes right after the word "of."
- The **part** is usually right next to the word "is."
- The **percent** is the number with the $\\%$ sign.

### The Three Questions

| Type | Example | What's missing |
|------|---------|----------------|
| Find the part | What is $20\\%$ of $50$? | the **part** |
| Find the percent | $10$ is what percent of $50$? | the **percent** |
| Find the whole | $10$ is $20\\%$ of what? | the **whole** |

> 💡 Part 2 already covered "find the part." Now we tackle the other two.`,
      },
      {
        id: 'pct3-find-percent',
        type: 'text' as const,
        content: `## Finding the Percent: "_ is what percent of _?"

**Question:** $12$ is what percent of $48$?

Use $\\dfrac{\\text{part}}{\\text{whole}}$, then convert to a percent:

$$\\frac{12}{48} = 0.25 = 25\\%$$

So $12$ is $\\mathbf{25\\%}$ of $48$.

### Worked Example: $9$ is what percent of $20$?

$$\\frac{9}{20} = 0.45 = 45\\%$$

> ⚠️ **Order matters!** It's $\\frac{\\text{part}}{\\text{whole}}$, **not** whole over part. The "part" (the smaller piece you're measuring) goes on **top**. Flipping the fraction is the #1 mistake here.`,
      },
      {
        id: 'pct3-percent-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$15$ is what percent of $60$?',
              options: ['$25\\%$', '$40\\%$', '$4\\%$', '$45\\%$'],
              correctAnswer: 0,
              explanation: '$\\frac{\\text{part}}{\\text{whole}} = \\frac{15}{60} = 0.25 = 25\\%$.',
            },
            {
              question: 'To answer "$8$ is what percent of $40$?", you compute:',
              options: ['$\\frac{8}{40}$', '$\\frac{40}{8}$', '$8 \\times 40$', '$40 - 8$'],
              correctAnswer: 0,
              explanation: 'Part over whole: $\\frac{8}{40} = 0.2 = 20\\%$. The part ($8$) goes on top.',
            },
          ],
        },
      },
      {
        id: 'pct3-find-whole',
        type: 'text' as const,
        content: `## Finding the Whole: "_ is _% of what?"

This is the trickiest one because the **whole is missing**. Use the proportion and solve.

**Question:** $18$ is $30\\%$ of what number?

$$\\frac{18}{\\text{whole}} = \\frac{30}{100}$$

Cross-multiply: $30 \\times \\text{whole} = 18 \\times 100 = 1800$, so

$$\\text{whole} = \\frac{1800}{30} = 60$$

So $18$ is $30\\%$ of $\\mathbf{60}$.

> 💡 **Shortcut:** "part is p% of what" means $\\text{whole} = \\dfrac{\\text{part}}{\\text{decimal percent}}$. Here $\\dfrac{18}{0.30} = 60$. Same answer, fewer steps.

> ⚠️ When the whole is missing, you **divide** the part by the decimal — you do *not* multiply. Multiplying would shrink your answer when it needs to grow.`,
      },
      {
        id: 'pct3-whole-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Piece** 🧮

**1)** $14$ is what percent of $56$? *(enter just the number, e.g. \`25\` for $25\\%$)*
**2)** $21$ is $30\\%$ of what number?
**3)** $6$ is $50\\%$ of what number?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '70', '12'],
          hint1: 'Find the percent: $\\frac{14}{56} = 0.25 = 25\\%$.',
          hint2: 'Find the whole: $\\frac{21}{0.30} = 70$.',
          hint3: 'If $6$ is half ($50\\%$) of the whole, the whole is double: $6 \\div 0.5 = 12$.',
          explanation: '1) $\\frac{14}{56} = 25\\%$.  2) $\\frac{21}{0.30} = 70$.  3) $\\frac{6}{0.50} = 12$.',
        },
      },
      {
        id: 'pct3-classify-text',
        type: 'text' as const,
        content: `## Read the Sentence to Pick the Method

Before computing anything, decide **which of the three numbers is missing**. The wording tells you:

| If you see... | The missing piece is the... | So you... |
|---------------|-----------------------------|-----------|
| a percent **and** the number after "of" | **part** | multiply |
| "what percent" | **percent** | divide $\\frac{\\text{part}}{\\text{whole}}$ |
| "of what" | **whole** | divide $\\frac{\\text{part}}{\\text{decimal}}$ |

> 🔑 Classify first, calculate second. Naming the question type stops you from multiplying when you should divide.`,
      },
      {
        id: 'pct3-classify-dropdown',
        type: 'dropdown-select' as const,
        content: `**Which Question Is It?** 🔽

For each sentence, choose what's being asked.`,
        exercise: {
          dropdowns: [
            { label: '"What is $40\\%$ of $25$?" asks for the:', options: ['part', 'percent', 'whole', 'difference'] },
            { label: '"$7$ is what percent of $28$?" asks for the:', options: ['percent', 'part', 'whole', 'decimal'] },
            { label: '"$9$ is $45\\%$ of what?" asks for the:', options: ['whole', 'part', 'percent', 'ratio'] },
          ],
          correctAnswers: ['part', 'percent', 'whole'],
          hint1: 'If the percent and the whole are both given, the missing piece is the part.',
          hint2: 'When "what percent" appears, the percent is unknown.',
          hint3: 'When the number after "of" is "what," the whole is unknown.',
          explanation: 'Identify the missing slot in $\\frac{\\text{part}}{\\text{whole}} = \\frac{\\%}{100}$: it tells you which kind of question you have.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'percent-problems-prealgebra',
    sections: [
      {
        id: 'pct4-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 4 of 5 — Percent Change: Tips, Tax, Discounts & Markups**

---

> 🔑 **Real-World Percents:** Stores, restaurants, and banks all use percents to *change* a starting amount. The trick is knowing whether to **add** (tax, tip, markup) or **subtract** (sale, discount).`,
      },
      {
        id: 'pct4-discount',
        type: 'text' as const,
        content: `## Discounts (Subtract) and Tax/Tip (Add)

**Step 1:** Find the percent *of* the original amount (just like Part 2).
**Step 2:** **Subtract** it for a discount, or **add** it for tax or a tip.

### Worked Example: A \\$40 shirt is $25\\%$ off.

Discount amount: $0.25 \\times 40 = 10$, i.e. \\$10.
Sale price: $40 - 10 = 30$, so **\\$30**.

### Worked Example: A \\$50 meal with a $20\\%$ tip.

Tip amount: $0.20 \\times 50 = 10$, i.e. \\$10.
Total paid: $50 + 10 = 60$, so **\\$60**.

> 💡 **One-step shortcut.** A $25\\%$ discount means you *pay* $75\\%$: $0.75 \\times 40 = 30$, giving \\$30. Adding a $20\\%$ tip means you pay $120\\%$: $1.20 \\times 50 = 60$, giving \\$60. Same answers, one multiplication.`,
      },
      {
        id: 'pct4-discount-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \\$80 jacket is $30\\%$ off. What is the sale price?',
              options: ['\\$56', '\\$24', '\\$50', '\\$104'],
              correctAnswer: 0,
              explanation: 'Discount $= 0.30 \\times 80 = \\$24$, so the price is $80 - 24 = \\$56$. (Shortcut: pay $70\\%$, $0.70 \\times 80 = \\$56$.)',
            },
            {
              question: 'A \\$25 meal has $8\\%$ sales tax. What is the total?',
              options: ['\\$27', '\\$23', '\\$33', '\\$25.08'],
              correctAnswer: 0,
              explanation: 'Tax $= 0.08 \\times 25 = \\$2$, so the total is $25 + 2 = \\$27$. (Shortcut: $1.08 \\times 25 = \\$27$.)',
            },
          ],
        },
      },
      {
        id: 'pct4-percent-change',
        type: 'text' as const,
        content: `## Percent Increase and Decrease

When an amount goes up or down, the **percent change** measures *how big* the change is compared to where it started:

$$\\text{percent change} = \\frac{\\text{amount of change}}{\\text{original amount}} \\times 100\\%$$

### Worked Example: A price rises from \\$20 to \\$25.

Change $= 25 - 20 = 5$. Compare to the **original** ($20$):

$$\\frac{5}{20} = 0.25 = 25\\% \\text{ increase}$$

### Worked Example: A class shrinks from $30$ students to $24$.

Change $= 30 - 24 = 6$:

$$\\frac{6}{30} = 0.20 = 20\\% \\text{ decrease}$$

> ⚠️ **Always divide by the ORIGINAL amount**, not the new one. The original is your starting point — that's what the change is being measured against.`,
      },
      {
        id: 'pct4-change-drill',
        type: 'input-boxes' as const,
        content: `**Tips, Tax & Change** 🧮

**1)** A \\$60 game is $20\\%$ off. The sale price is \\$ $\\,?$
**2)** A \\$45 dinner gets a $20\\%$ tip. The total is \\$ $\\,?$
**3)** A price goes from \\$50 to \\$60. The percent increase is $\\,?$ *(enter just the number, e.g. \`20\` for $20\\%$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['48', '54', '20'],
          hint1: '$20\\%$ off means pay $80\\%$: $0.80 \\times 60 = 48$.',
          hint2: 'Tip $= 0.20 \\times 45 = 9$, total $= 45 + 9 = 54$. (Or $1.20 \\times 45 = 54$.)',
          hint3: 'Change $= 60 - 50 = 10$; divide by the original $50$: $\\frac{10}{50} = 0.20 = 20\\%$.',
          explanation: '1) $0.80 \\times 60 = \\$48$.  2) $1.20 \\times 45 = \\$54$.  3) $\\frac{10}{50} = 20\\%$ increase.',
        },
      },
      {
        id: 'pct4-direction-text',
        type: 'text' as const,
        content: `## The One Question to Ask: Up or Down?

Every real-world percent boils down to: *does the price go up or down?*

- **Down (subtract):** sales, discounts, markdowns → you pay **less than $100\\%$**.
- **Up (add):** sales tax, tips, markups → you pay **more than $100\\%$**.

The one-step multiplier captures both:

$$\\text{new amount} = (\\,100\\% \\pm \\text{rate}\\,) \\times \\text{original}$$

> ⚠️ A $40\\%$ discount is **not** the same as paying $40\\%$. A $40\\%$ discount means you pay the *remaining* $60\\%$. Always ask what fraction of the price is left.`,
      },
      {
        id: 'pct4-change-dropdown',
        type: 'dropdown-select' as const,
        content: `**Add or Subtract?** 🔽

Decide how each situation changes the starting price.`,
        exercise: {
          dropdowns: [
            { label: 'A $15\\%$ store discount means you:', options: ['pay $85\\%$', 'pay $115\\%$', 'pay $15\\%$', 'pay $100\\%$'] },
            { label: 'Adding a $7\\%$ sales tax means you pay:', options: ['$107\\%$', '$93\\%$', '$7\\%$', '$70\\%$'] },
            { label: 'Going from \\$40 to \\$30 is a:', options: ['$25\\%$ decrease', '$10\\%$ decrease', '$25\\%$ increase', '$33\\%$ decrease'] },
          ],
          correctAnswers: ['pay $85\\%$', '$107\\%$', '$25\\%$ decrease'],
          hint1: 'A discount subtracts: $100\\% - 15\\% = 85\\%$ left to pay.',
          hint2: 'Tax adds on top of the whole price: $100\\% + 7\\% = 107\\%$.',
          hint3: 'Change $= 40 - 30 = 10$; over the original $40$: $\\frac{10}{40} = 0.25 = 25\\%$ decrease.',
          explanation: 'Discounts subtract (pay less than $100\\%$); tax and tips add (pay more than $100\\%$); percent change is always measured against the original.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'percent-problems-prealgebra',
    sections: [
      {
        id: 'pct5-intro',
        type: 'text' as const,
        content: `# 💯 Percent Problems

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) convert between percents, decimals, and fractions, (2) find a percent of a number, (3) solve all three percent questions, and (4) handle real-world discounts, tax, tips, and percent change. Let's put it all together.`,
      },
      {
        id: 'pct5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Percent → decimal | move the point **2 left** ($7\\% \\to 0.07$) |
| Decimal → percent | move the point **2 right** ($0.6 \\to 60\\%$) |
| Find the part | $\\text{decimal} \\times \\text{whole}$ |
| Find the percent | $\\dfrac{\\text{part}}{\\text{whole}} \\times 100\\%$ |
| Find the whole | $\\dfrac{\\text{part}}{\\text{decimal percent}}$ |
| Discount | pay $(100\\% - \\text{off})$ |
| Tax / tip | pay $(100\\% + \\text{rate})$ |
| Percent change | $\\dfrac{\\text{change}}{\\text{original}} \\times 100\\%$ |

> 🔑 The whole engine is one relationship: $\\dfrac{\\text{part}}{\\text{whole}} = \\dfrac{\\%}{100}$. Find the missing piece and you've solved the problem.`,
      },
      {
        id: 'pct5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'What is $35\\%$ of $80$?',
              options: ['$28$', '$45$', '$24$', '$2.8$'],
              correctAnswer: 0,
              explanation: '$0.35 \\times 80 = 28$. (Check: $35\\%$ is about a third, and a third of $80$ is roughly $27$. ✓)',
            },
            {
              question: '$24$ is $40\\%$ of what number?',
              options: ['$60$', '$9.6$', '$96$', '$64$'],
              correctAnswer: 0,
              explanation: 'Find the whole: $\\frac{24}{0.40} = 60$. (Check: $40\\%$ of $60 = 0.40 \\times 60 = 24$. ✓)',
            },
          ],
        },
      },
      {
        id: 'pct5-strategy',
        type: 'text' as const,
        content: `## Your Three-Step Game Plan

For *any* percent problem on a test, run this checklist:

1. **Classify** — which is missing: part, percent, or whole?
2. **Estimate** — should the answer be small, about half, or near the whole?
3. **Solve & check** — compute, then confirm your answer matches the estimate.

> 🔑 The same engine handles plain percents *and* word problems: a discount is "find the part, then subtract," and a percent increase is "find the change, divide by the original." Different stories, one tool.`,
      },
      {
        id: 'pct5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Put It Together** 🧮

**1)** $18$ is what percent of $72$? *(enter just the number)*
**2)** A \\$90 bike is $30\\%$ off. The sale price is \\$ $\\,?$
**3)** A population grows from $200$ to $250$. The percent increase is $\\,?$ *(just the number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '63', '25'],
          hint1: '$\\frac{18}{72} = 0.25 = 25\\%$.',
          hint2: '$30\\%$ off means pay $70\\%$: $0.70 \\times 90 = 63$.',
          hint3: 'Change $= 250 - 200 = 50$; over the original $200$: $\\frac{50}{200} = 0.25 = 25\\%$.',
          explanation: '1) $\\frac{18}{72} = 25\\%$.  2) $0.70 \\times 90 = \\$63$.  3) $\\frac{50}{200} = 25\\%$ increase.',
        },
      },
      {
        id: 'pct5-wrapup',
        type: 'text' as const,
        content: `## You're Ready

You've connected percents to decimals and fractions, found parts, percents, and wholes, and applied it all to tips, tax, discounts, and percent change. One last check confirms it all stuck.

> 💡 If a question ever feels stuck, fall back to the master relationship: $\\dfrac{\\text{part}}{\\text{whole}} = \\dfrac{\\%}{100}$.`,
      },
      {
        id: 'pct5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which of these equals $0.04$?',
              options: ['$4\\%$', '$40\\%$', '$400\\%$', '$0.4\\%$'],
              correctAnswer: 0,
              explanation: 'Decimal → percent moves the point two places right: $0.04 \\to 4\\%$. (Watch the zero: it is $4\\%$, not $40\\%$.)',
            },
            {
              question: 'A \\$120 phone bill goes up by $10\\%$. The new bill is:',
              options: ['\\$132', '\\$130', '\\$108', '\\$12'],
              correctAnswer: 0,
              explanation: 'Increase $= 0.10 \\times 120 = \\$12$, so the new bill is $120 + 12 = \\$132$. (Shortcut: $1.10 \\times 120 = \\$132$.)',
            },
            {
              question: '$45$ is what percent of $180$?',
              options: ['$25\\%$', '$40\\%$', '$4\\%$', '$75\\%$'],
              correctAnswer: 0,
              explanation: 'Part over whole: $\\frac{45}{180} = 0.25 = 25\\%$.',
            },
          ],
        },
      },
    ],
  },
]
