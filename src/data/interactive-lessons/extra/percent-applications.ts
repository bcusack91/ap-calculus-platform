import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Percent Applications (Pre-Algebra).
 * Registry key / DB Topic.slug: 'percent-applications'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings); bare dollar signs are escaped as \$.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'percent-applications',
    sections: [
      {
        id: 'pa1-intro',
        type: 'text' as const,
        content: `# 💯 Percent Applications

**Part 1 of 5 — The Three Pieces of Every Percent Problem**

---

### Topics in This Part

| Section |
|---------|
| What "Percent" Really Means |
| The Percent Equation: part, percent, whole |
| Finding the Part |

> 🔑 **Key Concept:** Almost every percent problem — tips, tax, discounts, interest — is the same equation in disguise: $\\text{part} = \\text{percent} \\times \\text{whole}$. Master that one relationship in Part 1 and the rest of the lesson is just plugging in.`,
      },
      {
        id: 'pa1-meaning',
        type: 'text' as const,
        content: `## What "Percent" Really Means

**Percent** means "per hundred." So $37\\%$ literally means $37$ out of $100$:

$$37\\% = \\frac{37}{100} = 0.37$$

To use a percent in arithmetic, convert it to a **decimal** by moving the decimal point **two places left** (or dividing by $100$):

| Percent | Fraction | Decimal |
|---------|----------|---------|
| $50\\%$ | $\\frac{50}{100}$ | $0.50$ |
| $25\\%$ | $\\frac{25}{100}$ | $0.25$ |
| $8\\%$ | $\\frac{8}{100}$ | $0.08$ |
| $150\\%$ | $\\frac{150}{100}$ | $1.50$ |

> 💡 **Heads up:** $100\\% = 1$ (the whole thing), and percents **above** $100\\%$ are perfectly normal — they just mean "more than the whole." $150\\%$ of a number is one-and-a-half times that number.`,
      },
      {
        id: 'pa1-convert-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Written as a decimal, $6\\%$ is:',
              options: ['$0.06$', '$0.6$', '$6.0$', '$0.006$'],
              correctAnswer: 0,
              explanation: 'Move the decimal point two places left: $6\\% \\to 0.06$. A single-digit percent always starts with $0.0$.',
            },
            {
              question: 'Which of these equals $0.4$?',
              options: ['$4\\%$', '$40\\%$', '$0.4\\%$', '$400\\%$'],
              correctAnswer: 1,
              explanation: 'To turn a decimal into a percent, move the point two places right: $0.4 \\to 40\\%$. Be careful — $4\\%$ is only $0.04$.',
            },
          ],
        },
      },
      {
        id: 'pa1-equation',
        type: 'text' as const,
        content: `## The Percent Equation

Every basic percent problem has **three pieces**, and the equation that links them is:

$$\\text{part} = \\text{percent (as a decimal)} \\times \\text{whole}$$

- The **whole** is the total you start with (it usually follows the word "of").
- The **percent** is the rate, written as a decimal.
- The **part** is the amount you end up with.

### Worked Example: Find $30\\%$ of $80$

Here the **whole** is $80$, the **percent** is $0.30$, and we want the **part**:

$$\\text{part} = 0.30 \\times 80 = 24$$

So $30\\%$ of $80$ is $\\mathbf{24}$.

> 🔑 **Translation tip:** The word **"of"** means multiply, and **"is"** means equals. "What **is** $30\\%$ **of** $80$?" becomes $\\text{part} = 0.30 \\times 80$.`,
      },
      {
        id: 'pa1-find-part-drill',
        type: 'input-boxes' as const,
        content: `**Find the Part** 🧮

Use $\\text{part} = \\text{percent} \\times \\text{whole}$. Convert each percent to a decimal first.

**1)** What is $15\\%$ of $60$?
**2)** What is $25\\%$ of $200$?
**3)** What is $8\\%$ of $50$?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '50', '4'],
          hint1: '$15\\% = 0.15$, so $0.15 \\times 60 = 9$.',
          hint2: '$25\\% = 0.25$, so $0.25 \\times 200 = 50$. (Or note $25\\%$ is one quarter.)',
          hint3: '$8\\% = 0.08$, so $0.08 \\times 50 = 4$.',
          explanation: '1) $0.15 \\times 60 = 9$.  2) $0.25 \\times 200 = 50$.  3) $0.08 \\times 50 = 4$.',
        },
      },
      {
        id: 'pa1-label-pieces',
        type: 'text' as const,
        content: `## Spotting the Pieces in Words

Before you can plug into the equation, you have to **label** the pieces hiding in a sentence. Two signal words do most of the work:

- The number after **"of"** is the **whole**.
- The phrase **"what is"** marks the **part** you're solving for.

For "What is $20\\%$ of $150$?" the whole is $150$, the percent is $0.20$, and the part is the unknown. Try labeling the next one yourself.`,
      },
      {
        id: 'pa1-which-piece',
        type: 'dropdown-select' as const,
        content: `**Name the Pieces** 🔽

In the question **"What is $20\\%$ of $150$?"**, identify each piece.`,
        exercise: {
          dropdowns: [
            { label: 'The whole is:', options: ['$150$', '$20$', '$0.20$', 'unknown'] },
            { label: 'The percent (as a decimal) is:', options: ['$0.20$', '$20$', '$150$', '$2.0$'] },
            { label: 'The part is:', options: ['unknown', '$150$', '$20$', '$0.20$'] },
          ],
          correctAnswers: ['$150$', '$0.20$', 'unknown'],
          hint1: 'The whole follows the word "of," so it is $150$.',
          hint2: 'The percent is $20\\%$, which as a decimal is $0.20$.',
          hint3: 'We are asked "what **is**...?" — the part is the unknown we solve for.',
          explanation: 'Whole $= 150$, percent $= 0.20$, part $=$ unknown. So part $= 0.20 \\times 150 = 30$.',
        },
      },
      {
        id: 'pa1-wrap',
        type: 'text' as const,
        content: `## You've Got the Engine

Every percent application — sales tax, a $20\\%$-off sale, a $15\\%$ tip, the interest on a savings account — runs on the same engine:

$$\\text{part} = \\text{percent} \\times \\text{whole}$$

So far we've solved for the **part**. But sometimes you're handed the part and asked for the **percent** or the **whole**. That's Part 2.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'percent-applications',
    sections: [
      {
        id: 'pa2-intro',
        type: 'text' as const,
        content: `# 💯 Percent Applications

**Part 2 of 5 — Solving for the Percent or the Whole**

---

> 🔑 **The Idea:** The same equation $\\text{part} = \\text{percent} \\times \\text{whole}$ can be rearranged to find *any* missing piece. If you know two of the three, you can always find the third by dividing.`,
      },
      {
        id: 'pa2-rearrange',
        type: 'text' as const,
        content: `## Rearranging the Percent Equation

Start from $\\text{part} = \\text{percent} \\times \\text{whole}$ and divide to isolate what you need:

| You want… | Formula |
|-----------|---------|
| the **part** | $\\text{percent} \\times \\text{whole}$ |
| the **percent** | $\\dfrac{\\text{part}}{\\text{whole}}$ |
| the **whole** | $\\dfrac{\\text{part}}{\\text{percent}}$ |

### Worked Example: "$18$ is what percent of $72$?"

Here the part is $18$ and the whole is $72$. Use $\\text{percent} = \\dfrac{\\text{part}}{\\text{whole}}$:

$$\\text{percent} = \\frac{18}{72} = 0.25 = 25\\%$$

> 💡 **Don't forget the last step!** Dividing gives a **decimal** ($0.25$). Move the point two places right to report it as a **percent** ($25\\%$).`,
      },
      {
        id: 'pa2-pick-formula',
        type: 'dropdown-select' as const,
        content: `**Choose the Right Move** 🔽

Match each question to the operation that solves it.`,
        exercise: {
          dropdowns: [
            { label: '"$12$ is what percent of $48$?"', options: ['divide part by whole', 'divide part by percent', 'multiply percent by whole', 'add part and whole'] },
            { label: '"$9$ is $15\\%$ of what number?"', options: ['divide part by percent', 'divide part by whole', 'multiply percent by whole', 'subtract'] },
            { label: '"What is $40\\%$ of $90$?"', options: ['multiply percent by whole', 'divide part by whole', 'divide part by percent', 'add'] },
          ],
          correctAnswers: ['divide part by whole', 'divide part by percent', 'multiply percent by whole'],
          hint1: 'Missing the **percent**? Divide the part by the whole: $12 \\div 48$.',
          hint2: 'Missing the **whole**? Divide the part by the percent: $9 \\div 0.15$.',
          hint3: 'Missing the **part**? Multiply: $0.40 \\times 90$.',
          explanation: '$12 \\div 48 = 25\\%$;  $9 \\div 0.15 = 60$;  $0.40 \\times 90 = 36$. Identify the missing piece, then divide (or multiply) accordingly.',
        },
      },
      {
        id: 'pa2-whole-example',
        type: 'text' as const,
        content: `### Worked Example: "$45$ is $30\\%$ of what number?"

This time the part is $45$ and the percent is $0.30$; the **whole** is unknown. Use $\\text{whole} = \\dfrac{\\text{part}}{\\text{percent}}$:

$$\\text{whole} = \\frac{45}{0.30} = 150$$

> ✅ **Check:** $30\\%$ of $150$ is $0.30 \\times 150 = 45$ ✓

> ⚠️ **Common mistake:** When the percent is missing you **divide part by whole**; when the *whole* is missing you **divide part by percent**. Mixing these up is the #1 percent error. Always ask: "Which two pieces do I already have?"`,
      },
      {
        id: 'pa2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: '$21$ is what percent of $60$?',
              options: ['$35\\%$', '$39\\%$', '$28\\%$', '$0.35\\%$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{21}{60} = 0.35 = 35\\%$. Remember to convert the decimal $0.35$ into a percent.',
            },
            {
              question: '$24$ is $40\\%$ of what number?',
              options: ['$60$', '$9.6$', '$96$', '$64$'],
              correctAnswer: 0,
              explanation: 'Whole $= \\dfrac{\\text{part}}{\\text{percent}} = \\dfrac{24}{0.40} = 60$. Check: $0.40 \\times 60 = 24$ ✓.',
            },
          ],
        },
      },
      {
        id: 'pa2-strategy',
        type: 'text' as const,
        content: `## A Reliable Two-Question Strategy

For any percent problem, ask yourself two quick questions:

1. **Which piece is missing** — the part, the percent, or the whole?
2. **Which formula** matches that missing piece (multiply, or divide by the whole, or divide by the percent)?

That's it. The drill below mixes "find the percent" and "find the whole" questions on purpose, so you get practice telling them apart.`,
      },
      {
        id: 'pa2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Missing Piece** 🧮

Decide whether the percent or the whole is missing, then solve. Enter percents **as a number without the % sign** (e.g. type \`20\` for $20\\%$).

**1)** $30$ is what percent of $120$?  *(enter the percent)*
**2)** $7$ is $35\\%$ of what number?
**3)** $15$ is what percent of $25$?  *(enter the percent)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '20', '60'],
          hint1: '$\\dfrac{30}{120} = 0.25 \\to 25\\%$.',
          hint2: '$\\dfrac{7}{0.35} = 20$.',
          hint3: '$\\dfrac{15}{25} = 0.60 \\to 60\\%$.',
          explanation: '1) $30 \\div 120 = 0.25 = 25\\%$.  2) $7 \\div 0.35 = 20$.  3) $15 \\div 25 = 0.60 = 60\\%$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'percent-applications',
    sections: [
      {
        id: 'pa3-intro',
        type: 'text' as const,
        content: `# 💯 Percent Applications

**Part 3 of 5 — Tax, Tips & Discounts**

---

> 🔑 **Real-World Payoff:** Sales tax, restaurant tips, and store discounts are all "percent of the price" problems. The trick is knowing whether you **add** the percent (tax, tip) or **subtract** it (discount).`,
      },
      {
        id: 'pa3-tax-tip',
        type: 'text' as const,
        content: `## Tax and Tips: Adding a Percent

A tax or tip is a **part** you add **on top of** the original price.

### Worked Example: \\$50 dinner with an $18\\%$ tip

**Step 1 — Find the tip (the part):**
$$0.18 \\times 50 = 9$$

**Step 2 — Add it to the bill:**
$$50 + 9 = 59$$

The total is **\\$59**.

### The One-Step Shortcut

Adding $18\\%$ to a price is the same as taking $118\\%$ of it:

$$1.18 \\times 50 = 59$$

> 💡 **Why $1.18$?** You keep $100\\%$ of the price **plus** the $18\\%$ tip, and $100\\% + 18\\% = 118\\% = 1.18$. The same logic gives $1.07$ for $7\\%$ tax, $1.20$ for a $20\\%$ tip, and so on.`,
      },
      {
        id: 'pa3-tax-drill',
        type: 'input-boxes' as const,
        content: `**Tax & Tip Practice** 🧮

Find each **total** (price plus the added percent). Enter just the number of dollars.

**1)** A \\$40 shirt with $5\\%$ sales tax. Total $= ?$
**2)** A \\$30 meal with a $20\\%$ tip. Total $= ?$
**3)** A \\$200 purchase with $8\\%$ tax. Total $= ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['42', '36', '216'],
          hint1: 'Tax $= 0.05 \\times 40 = 2$, so total $= 40 + 2 = 42$. (Or $1.05 \\times 40$.)',
          hint2: 'Tip $= 0.20 \\times 30 = 6$, so total $= 30 + 6 = 36$. (Or $1.20 \\times 30$.)',
          hint3: 'Tax $= 0.08 \\times 200 = 16$, so total $= 200 + 16 = 216$. (Or $1.08 \\times 200$.)',
          explanation: '1) $1.05 \\times 40 = 42$.  2) $1.20 \\times 30 = 36$.  3) $1.08 \\times 200 = 216$.',
        },
      },
      {
        id: 'pa3-discount',
        type: 'text' as const,
        content: `## Discounts: Subtracting a Percent

A discount is a **part** you **subtract** from the original price.

### Worked Example: \\$40 jacket, $25\\%$ off

**Step 1 — Find the discount (the part):**
$$0.25 \\times 40 = 10$$

**Step 2 — Subtract it from the price:**
$$40 - 10 = 30$$

The sale price is **\\$30**.

### The One-Step Shortcut

If you take $25\\%$ **off**, you **pay** the remaining $75\\%$:

$$0.75 \\times 40 = 30$$

> 🔑 **The complement rule:** "$25\\%$ off" means "pay $75\\%$," because $100\\% - 25\\% = 75\\%$. Likewise $30\\%$ off means pay $0.70$, and $10\\%$ off means pay $0.90$.`,
      },
      {
        id: 'pa3-discount-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \\$80 pair of shoes is $30\\%$ off. What is the sale price?',
              options: ['$\\$56$', '$\\$24$', '$\\$50$', '$\\$104$'],
              correctAnswer: 0,
              explanation: '$30\\%$ off means pay $70\\%$: $0.70 \\times 80 = 56$. (Check: discount $= 0.30 \\times 80 = 24$, and $80 - 24 = 56$.)',
            },
            {
              question: 'To find the price after a $15\\%$ discount in one step, multiply the original price by:',
              options: ['$0.85$', '$0.15$', '$1.15$', '$1.85$'],
              correctAnswer: 0,
              explanation: 'You pay the complement: $100\\% - 15\\% = 85\\% = 0.85$. Multiplying by $0.15$ would give the discount itself, not the sale price.',
            },
          ],
        },
      },
      {
        id: 'pa3-decide',
        type: 'text' as const,
        content: `## Add or Subtract? Read the Word

The single most important step in these problems is deciding the **direction**:

| Word in the problem | What it does | Multiplier |
|---------------------|--------------|------------|
| tax, tip, markup, "added" | **adds** to the price | $1 + \\text{rate}$ |
| discount, "off," sale, markdown | **subtracts** from the price | $1 - \\text{rate}$ |

The next drill deliberately mixes discounts and tips. Pause on each one and decide the direction before you multiply.`,
      },
      {
        id: 'pa3-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Add or Subtract?** 🧮

Read carefully — decide whether the percent is **added** or **subtracted**, then find the final amount in dollars.

**1)** A \\$60 game, $20\\%$ off. Sale price $= ?$
**2)** A \\$25 lunch with a $16\\%$ tip. Total $= ?$
**3)** A \\$150 coat, $40\\%$ off. Sale price $= ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['48', '29', '90'],
          hint1: '$20\\%$ off → pay $80\\%$: $0.80 \\times 60 = 48$.',
          hint2: 'A tip is added: $1.16 \\times 25 = 29$.',
          hint3: '$40\\%$ off → pay $60\\%$: $0.60 \\times 150 = 90$.',
          explanation: '1) $0.80 \\times 60 = 48$ (discount).  2) $1.16 \\times 25 = 29$ (tip added).  3) $0.60 \\times 150 = 90$ (discount).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'percent-applications',
    sections: [
      {
        id: 'pa4-intro',
        type: 'text' as const,
        content: `# 💯 Percent Applications

**Part 4 of 5 — Percent Change & Simple Interest**

---

> 🔑 **The Idea:** "Percent increase" and "percent decrease" measure how much a value grew or shrank **relative to where it started**. The starting value is always the whole you divide by.`,
      },
      {
        id: 'pa4-change',
        type: 'text' as const,
        content: `## Percent Increase and Decrease

To find a percent change, compare the **amount of change** to the **original** value:

$$\\text{percent change} = \\frac{\\text{new} - \\text{original}}{\\text{original}}$$

A positive result is an **increase**; a negative result is a **decrease**.

### Worked Example: A price rises from \$50 to \$65

**Step 1 — Find the change:** $65 - 50 = 15$

**Step 2 — Divide by the original:**
$$\\frac{15}{50} = 0.30 = 30\\%$$

That's a $\\mathbf{30\\%}$ **increase**.

> ⚠️ **Always divide by the ORIGINAL**, never the new value. Going $50 \\to 65$ is a $30\\%$ increase, but going $65 \\to 50$ is a *decrease* of $\\frac{15}{65} \\approx 23\\%$ — the same gap, a different percent, because the starting point changed.`,
      },
      {
        id: 'pa4-change-drill',
        type: 'input-boxes' as const,
        content: `**Percent Change Practice** 🧮

Use $\\dfrac{\\text{new} - \\text{original}}{\\text{original}}$. Enter the percent as a number (no % sign).

**1)** A plant grows from $80$ cm to $100$ cm. Percent increase $= ?$
**2)** A price drops from $100$ to $80$. Percent decrease $= ?$
**3)** A score rises from $40$ to $50$. Percent increase $= ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['25', '20', '25'],
          hint1: 'Change $= 100 - 80 = 20$; divide by the original $80$: $\\frac{20}{80} = 0.25 = 25\\%$.',
          hint2: 'Change $= 100 - 80 = 20$; divide by the original $100$: $\\frac{20}{100} = 0.20 = 20\\%$.',
          hint3: 'Change $= 50 - 40 = 10$; divide by the original $40$: $\\frac{10}{40} = 0.25 = 25\\%$.',
          explanation: 'Notice 1 and 2 have the same gap of $20$ but different percents — because the originals ($80$ vs. $100$) differ. 3) $\\frac{10}{40} = 25\\%$.',
        },
      },
      {
        id: 'pa4-simple-interest',
        type: 'text' as const,
        content: `## Simple Interest

When you save (or borrow) money, **interest** is a percent of the original amount, called the **principal**. Simple interest is paid on the principal each year:

$$I = P \\times r \\times t$$

where $P$ = principal, $r$ = annual rate (as a decimal), and $t$ = time in years.

### Worked Example: \\$500 at $4\\%$ for $3$ years

$$I = 500 \\times 0.04 \\times 3 = 60$$

You earn **\\$60** in interest, so the account holds $500 + 60 = 560$, i.e. \\$560.

> 💡 The interest each year is $500 \\times 0.04 = 20$, i.e. \\$20, and over $3$ years that's $3 \\times 20 = 60$, i.e. \\$60. The formula just bundles those two multiplications together.`,
      },
      {
        id: 'pa4-interest-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Find the simple interest on \\$1{,}000 at $5\\%$ for $2$ years.',
              options: ['$\\$100$', '$\\$50$', '$\\$1{,}100$', '$\\$10$'],
              correctAnswer: 0,
              explanation: '$I = P r t = 1000 \\times 0.05 \\times 2 = 100$. (The question asks for the interest, not the total balance.)',
            },
            {
              question: 'In the formula $I = Prt$, the rate $r$ for $6\\%$ should be entered as:',
              options: ['$0.06$', '$6$', '$0.6$', '$600$'],
              correctAnswer: 0,
              explanation: 'Always convert the percent to a decimal: $6\\% = 0.06$. Using $6$ would overstate the interest by a factor of $100$.',
            },
          ],
        },
      },
      {
        id: 'pa4-interest-vs-balance',
        type: 'text' as const,
        content: `## Interest vs. Total Balance

Watch the wording carefully — two different things get asked:

- **Interest** ($I$) is *only* the money earned: $I = Prt$.
- **Total balance** is the principal *plus* the interest: $P + I$.

For \\$500 at $4\\%$ for $3$ years, the interest is \\$60 but the balance is \\$560. The next drill asks for one or the other, so read each question to the end.`,
      },
      {
        id: 'pa4-interest-drill',
        type: 'input-boxes' as const,
        content: `**Simple Interest Practice** 🧮

Use $I = P \\times r \\times t$. Enter dollar amounts as a number.

**1)** \\$2,000 at $3\\%$ for $4$ years. Interest $I = ?$
**2)** \\$800 at $10\\%$ for $2$ years. Interest $I = ?$
**3)** \\$1,000 at $5\\%$ for $1$ year — what is the **total balance** (principal $+$ interest)?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['240', '160', '1050'],
          hint1: '$I = 2000 \\times 0.03 \\times 4 = 240$.',
          hint2: '$I = 800 \\times 0.10 \\times 2 = 160$.',
          hint3: 'Interest $= 1000 \\times 0.05 \\times 1 = 50$; total $= 1000 + 50 = 1050$.',
          explanation: '1) $2000 \\times 0.03 \\times 4 = 240$.  2) $800 \\times 0.10 \\times 2 = 160$.  3) interest $50$, total balance $1050$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'percent-applications',
    sections: [
      {
        id: 'pa5-intro',
        type: 'text' as const,
        content: `# 💯 Percent Applications

**Part 5 of 5 — Reverse Percents & Mastery Check**

---

You can now find a part, a percent, or a whole; apply tax, tips, and discounts; and compute percent change and interest. The last skill is the trickiest: working **backward** from a price that *already* includes a percent.`,
      },
      {
        id: 'pa5-reverse',
        type: 'text' as const,
        content: `## Reverse Percents: Finding the Original

When a price already has a discount baked in, you can't just add the percent back — you have to **undo** the multiplication.

### Worked Example: After $20\\%$ off, a coat costs \\$48. What was the original price?

"$20\\%$ off" means the \\$48 is $80\\%$ of the original. So:

$$0.80 \\times (\\text{original}) = 48$$

Divide both sides by $0.80$:

$$\\text{original} = \\frac{48}{0.80} = 60$$

The original price was **\\$60**.

> ⚠️ **Why not just add $20\\%$ to \\$48?** That gives $48 \\times 1.20 = 57.60$, i.e. \\$57.60 — **wrong!** Adding $20\\%$ of \\$48 isn't the same as undoing $20\\%$ of the (larger) original. Always divide by the complement, here $0.80$.

> ✅ **Check:** $20\\%$ off \\$60 is $0.20 \\times 60 = 12$, i.e. \\$12, and $60 - 12 = 48$, i.e. \\$48 ✓`,
      },
      {
        id: 'pa5-reverse-drill',
        type: 'input-boxes' as const,
        content: `**Work Backward** 🧮

Each price already includes the change. Find the **original** price in dollars by dividing.

**1)** After $25\\%$ off, a bag costs \\$45. Original $= ?$  *(divide by $0.75$)*
**2)** After a $10\\%$ tax, a tablet costs \\$220. Pre-tax price $= ?$  *(divide by $1.10$)*
**3)** After $40\\%$ off, a chair costs \\$90. Original $= ?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['60', '200', '150'],
          hint1: '\$45 is $75\\%$ of the original: $\\frac{45}{0.75} = 60$.',
          hint2: '\$220 is $110\\%$ of the pre-tax price: $\\frac{220}{1.10} = 200$.',
          hint3: '\$90 is $60\\%$ of the original: $\\frac{90}{0.60} = 150$.',
          explanation: '1) $45 \\div 0.75 = 60$.  2) $220 \\div 1.10 = 200$.  3) $90 \\div 0.60 = 150$. Discounts divide by the complement; tax divides by $1 + \\text{rate}$.',
        },
      },
      {
        id: 'pa5-reference',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find the part | $\\text{percent} \\times \\text{whole}$ |
| Find the percent | $\\dfrac{\\text{part}}{\\text{whole}}$, then $\\times 100\\%$ |
| Find the whole | $\\dfrac{\\text{part}}{\\text{percent}}$ |
| Add tax / tip | $\\times (1 + \\text{rate})$ |
| Take a discount | $\\times (1 - \\text{rate})$ |
| Percent change | $\\dfrac{\\text{new} - \\text{original}}{\\text{original}}$ |
| Simple interest | $I = P r t$ |
| Reverse a percent | divide by the multiplier $(1 \\pm \\text{rate})$ |

> 🔑 Convert percents to decimals **first**, and when finding a percent, convert the decimal answer **back** to a percent at the end.`,
      },
      {
        id: 'pa5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A \\$120 phone case is on sale for $35\\%$ off, then $7\\%$ tax is added to the sale price. What is the final cost?',
              options: ['$\\$83.46$', '$\\$78.00$', '$\\$72.54$', '$\\$93.60$'],
              correctAnswer: 0,
              explanation: 'Sale price $= 0.65 \\times 120 = 78$. Then add tax: $1.07 \\times 78 = 83.46$. Discount first, then tax on the reduced price.',
            },
            {
              question: 'A town\'s population grew from $2{,}000$ to $2{,}500$. What was the percent increase?',
              options: ['$25\\%$', '$20\\%$', '$50\\%$', '$500\\%$'],
              correctAnswer: 0,
              explanation: 'Change $= 2500 - 2000 = 500$; divide by the original: $\\frac{500}{2000} = 0.25 = 25\\%$.',
            },
          ],
        },
      },
      {
        id: 'pa5-ready',
        type: 'text' as const,
        content: `## Ready for the Exit Quiz

You've covered the whole toolkit: finding any of the three pieces, applying tax and tips, taking discounts, measuring percent change, computing simple interest, and reversing a percent to recover the original.

The three questions below pull from across the lesson. Convert each percent to a decimal first, identify which piece is missing, and you'll be set. Good luck!`,
      },
      {
        id: 'pa5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: '$36$ is what percent of $90$?',
              options: ['$40\\%$', '$45\\%$', '$25\\%$', '$54\\%$'],
              correctAnswer: 0,
              explanation: '$\\dfrac{36}{90} = 0.40 = 40\\%$. Divide the part by the whole, then convert to a percent.',
            },
            {
              question: 'After a $25\\%$ discount, a backpack costs \\$30. What was the original price?',
              options: ['$\\$40$', '$\\$37.50$', '$\\$22.50$', '$\\$45$'],
              correctAnswer: 0,
              explanation: '\\$30 is $75\\%$ of the original, so original $= \\dfrac{30}{0.75} = 40$. Check: $25\\%$ off \\$40 is \\$10, and $40 - 10 = 30$ ✓.',
            },
            {
              question: 'Find the simple interest on \\$600 at $5\\%$ for $2$ years.',
              options: ['$\\$60$', '$\\$30$', '$\\$660$', '$\\$120$'],
              correctAnswer: 0,
              explanation: '$I = Prt = 600 \\times 0.05 \\times 2 = 60$. The total balance would be \\$660, but the interest itself is \\$60.',
            },
          ],
        },
      },
    ],
  },
]
