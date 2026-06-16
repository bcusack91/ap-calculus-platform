import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Ratios and Proportions (Pre-Algebra).
 * Registry key / DB slug: 'ratios-proportions-prealg'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'ratios-proportions-prealg',
    sections: [
      {
        id: 'rp1-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Proportions

**Part 1 of 5 — What Is a Ratio?**

---

### Topics in This Part

| Section |
|---------|
| Three Ways to Write a Ratio |
| Reading a Ratio in Context |
| Simplifying a Ratio |

> 🔑 **Key Concept:** A **ratio** compares two quantities by division. "$3$ cats to $2$ dogs" tells you *how many of one thing there are for every amount of another* — and that comparison stays true no matter how many animals you have.`,
      },
      {
        id: 'rp1-three-forms',
        type: 'text' as const,
        content: `## Three Ways to Write a Ratio

A ratio comparing $a$ to $b$ can be written three equivalent ways:

| Notation | Looks like | Read as |
|----------|-----------|---------|
| With the word *to* | $3$ to $2$ | "three to two" |
| With a colon | $3 : 2$ | "three to two" |
| As a fraction | $\\dfrac{3}{2}$ | "three to two" |

All three mean the **same comparison**. The fraction form is the most useful for calculating, because it lets you use everything you already know about fractions.

### Order Matters

A ratio is an **ordered** comparison. If a fruit bowl has $5$ apples and $3$ oranges:

- apples to oranges $= 5 : 3$
- oranges to apples $= 3 : 5$

These are **not** the same — the first number always matches the first quantity named.

> ⚠️ **Watch the order.** "Boys to girls $= 4 : 7$" is different from "girls to boys $= 7 : 4$". Always match the numbers to the words in the same order.`,
      },
      {
        id: 'rp1-read-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A bag has $6$ red marbles and $10$ blue marbles. What is the ratio of red marbles to blue marbles?',
              options: ['$6 : 10$', '$10 : 6$', '$6 : 16$', '$10 : 16$'],
              correctAnswer: 0,
              explanation: 'The first quantity named (red) goes first: $6 : 10$. Reversing it ($10:6$) would be blue to red.',
            },
            {
              question: 'Which of these is **not** another way to write the ratio "$8$ to $3$"?',
              options: ['$8 : 3$', '$\\dfrac{8}{3}$', '$3 : 8$', '$8$ to $3$'],
              correctAnswer: 2,
              explanation: '$3:8$ reverses the order, so it is a different ratio. The colon form $8:3$ and the fraction $\\frac{8}{3}$ both keep the same order.',
            },
          ],
        },
      },
      {
        id: 'rp1-simplify-teach',
        type: 'text' as const,
        content: `## Simplifying a Ratio

Because a ratio behaves like a fraction, you simplify it the same way: **divide both parts by their greatest common factor (GCF)**.

### Example: simplify $12 : 18$

The GCF of $12$ and $18$ is $6$:

$$12 : 18 = \\frac{12 \\div 6}{18 \\div 6} = \\frac{2}{3} = 2 : 3$$

So for every $2$ of the first thing there are $3$ of the second.

### Example: simplify $20 : 4$

The GCF of $20$ and $4$ is $4$:

$$20 : 4 = \\frac{20 \\div 4}{4 \\div 4} = \\frac{5}{1} = 5 : 1$$

A ratio like $5 : 1$ means "five for every one."

> 💡 A ratio is in **simplest form** when the two numbers share no common factor other than $1$ — exactly like a fraction in lowest terms.`,
      },
      {
        id: 'rp1-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify the Ratio** 🧮

Write each ratio in simplest form. Enter your answer using a colon, like \`2:3\`.

**1)** $9 : 15$
**2)** $8 : 24$
**3)** $30 : 12$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3:5', '1:3', '5:2'],
          hint1: 'GCF of $9$ and $15$ is $3$: divide both by $3$.',
          hint2: 'GCF of $8$ and $24$ is $8$: $8\\div 8 = 1$ and $24 \\div 8 = 3$.',
          hint3: 'GCF of $30$ and $12$ is $6$: $30\\div 6 = 5$ and $12 \\div 6 = 2$.',
          explanation: '1) $9:15 = 3:5$.  2) $8:24 = 1:3$.  3) $30:12 = 5:2$. Each is divided by the GCF of its two numbers.',
        },
      },
      {
        id: 'rp1-order-recap',
        type: 'text' as const,
        content: `## Putting Order and Simplifying Together

Real problems combine both skills: read the ratio in the **right order**, then **simplify**. You can even build a *third* ratio — comparing one part to the **total** (the sum of both parts).

For a group of $14$ boys and $16$ girls, the total is $14 + 16 = 30$, so "boys to total" $= 14 : 30 = 7 : 15$.

> 🔑 A **part-to-total** ratio compares one part to the whole group, while a **part-to-part** ratio compares the two parts to each other. Read the question carefully to know which one it wants.`,
      },
      {
        id: 'rp1-order-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Words to the Ratio** 🔽

A classroom has $14$ boys and $16$ girls. Choose the correct ratio for each description (simplest form).`,
        exercise: {
          dropdowns: [
            { label: 'boys to girls:', options: ['$7 : 8$', '$8 : 7$', '$14 : 16$', '$7 : 15$'] },
            { label: 'girls to boys:', options: ['$8 : 7$', '$7 : 8$', '$16 : 14$', '$8 : 15$'] },
            { label: 'boys to total students:', options: ['$7 : 15$', '$7 : 8$', '$14 : 16$', '$8 : 15$'] },
          ],
          correctAnswers: ['$7 : 8$', '$8 : 7$', '$7 : 15$'],
          hint1: 'Boys first: $14 : 16$. GCF is $2$, so $7 : 8$.',
          hint2: 'Girls first: $16 : 14 = 8 : 7$.',
          hint3: 'Total students $= 14 + 16 = 30$. Boys to total $= 14 : 30 = 7 : 15$.',
          explanation: 'Order matches the words. Boys to girls $= 14:16 = 7:8$; girls to boys $= 8:7$; boys to total $= 14:30 = 7:15$ (total is $30$).',
        },
      },
      {
        id: 'rp1-wrap',
        type: 'text' as const,
        content: `## Wrapping Up Part 1

You can now:

- write a ratio three ways: *to*, colon, and fraction,
- keep the **order** straight (first thing named goes first), and
- **simplify** by dividing both parts by the GCF.

> 🔑 A ratio is just a comparison-by-division. In Part 2 we add **units** to ratios and turn them into **rates** — the everyday tool behind speeds, prices, and recipes.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'ratios-proportions-prealg',
    sections: [
      {
        id: 'rp2-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Proportions

**Part 2 of 5 — Rates and Unit Rates**

---

> 🔑 **The Idea:** A **rate** is a ratio that compares two quantities with *different units* — like miles and hours. A **unit rate** rewrites that comparison so the second quantity is exactly **$1$** (miles per **one** hour).`,
      },
      {
        id: 'rp2-rate-teach',
        type: 'text' as const,
        content: `## Rates vs. Unit Rates

| Term | Meaning | Example |
|------|---------|---------|
| **Rate** | A ratio of two *different* units | $120$ miles in $2$ hours |
| **Unit rate** | A rate with a denominator of $1$ | $60$ miles per $1$ hour |

The little word **"per"** signals a unit rate: miles **per** hour, dollars **per** pound, words **per** minute.

### Finding a Unit Rate

To find a unit rate, **divide the first quantity by the second**:

$$\\text{unit rate} = \\frac{\\text{first quantity}}{\\text{second quantity}}$$

### Example: a car travels $120$ miles in $2$ hours

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}} = \\frac{60 \\text{ miles}}{1 \\text{ hour}} = 60 \\text{ mph}$$

The car covers $60$ miles for **each** hour.`,
      },
      {
        id: 'rp2-rate-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A printer prints $250$ pages in $5$ minutes. What is the unit rate?',
              options: ['$50$ pages per minute', '$5$ pages per minute', '$1250$ pages per minute', '$50$ minutes per page'],
              correctAnswer: 0,
              explanation: 'Divide pages by minutes: $250 \\div 5 = 50$ pages per minute.',
            },
            {
              question: 'Which phrase describes a **unit rate**?',
              options: ['$3$ apples for $2$ dollars', '$\\$1.50$ per apple', '$6$ apples to $4$ oranges', '$2 : 3$'],
              correctAnswer: 1,
              explanation: 'A unit rate compares to exactly one of something. "$\\$1.50$ per apple" gives the cost for *one* apple, so its second quantity is $1$.',
            },
          ],
        },
      },
      {
        id: 'rp2-best-buy-teach',
        type: 'text' as const,
        content: `## Why Unit Rates Are Useful: Comparing Prices

Unit rates let you compare options fairly. The smaller cost-per-item is the **better buy**.

### Example: which is the better deal?

- **Brand A:** $\\$6$ for $4$ pounds
- **Brand B:** $\\$10$ for $8$ pounds

Find the price **per pound** for each:

$$\\text{Brand A} = \\frac{\\$6}{4 \\text{ lb}} = \\$1.50 \\text{ per lb}$$

$$\\text{Brand B} = \\frac{\\$10}{8 \\text{ lb}} = \\$1.25 \\text{ per lb}$$

Brand B costs less per pound ($\\$1.25 < \\$1.50$), so **Brand B is the better buy**.

> 💡 To compare two deals, always reduce each to the **same unit rate** (here, dollars per pound). Whichever number is lower wins.`,
      },
      {
        id: 'rp2-unit-drill',
        type: 'input-boxes' as const,
        content: `**Find the Unit Rate** 🧮

Divide the first quantity by the second. Enter a number (decimals are fine).

**1)** $\\$45$ for $9$ shirts $\\Rightarrow$ dollars per shirt $= \\,?$
**2)** $360$ words typed in $6$ minutes $\\Rightarrow$ words per minute $= \\,?$
**3)** $\\$7.50$ for $5$ pounds of apples $\\Rightarrow$ dollars per pound $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['5', '60', '1.5'],
          hint1: '$45 \\div 9 = 5$ dollars per shirt.',
          hint2: '$360 \\div 6 = 60$ words per minute.',
          hint3: '$7.50 \\div 5 = 1.5$ dollars per pound.',
          explanation: '1) $\\$45 \\div 9 = \\$5$/shirt.  2) $360 \\div 6 = 60$ wpm.  3) $\\$7.50 \\div 5 = \\$1.50$/lb. Each unit rate divides the first quantity by the second.',
        },
      },
      {
        id: 'rp2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Better Buy?** 🔽

Two stores sell the same juice. Find each unit price, then pick the better deal.`,
        exercise: {
          dropdowns: [
            { label: 'Store X: $\\$8$ for $4$ bottles $\\Rightarrow$ price per bottle:', options: ['$\\$2.00$', '$\\$4.00$', '$\\$0.50$', '$\\$8.00$'] },
            { label: 'Store Y: $\\$9$ for $6$ bottles $\\Rightarrow$ price per bottle:', options: ['$\\$1.50$', '$\\$3.00$', '$\\$0.67$', '$\\$2.00$'] },
            { label: 'The better buy is:', options: ['Store Y', 'Store X', 'They cost the same', 'Cannot tell'] },
          ],
          correctAnswers: ['$\\$2.00$', '$\\$1.50$', 'Store Y'],
          hint1: 'Store X: $8 \\div 4 = 2$ dollars per bottle.',
          hint2: 'Store Y: $9 \\div 6 = 1.5$ dollars per bottle.',
          hint3: 'Compare the unit prices: $\\$1.50 < \\$2.00$, so Store Y is cheaper per bottle.',
          explanation: 'Store X is $\\$2.00$/bottle and Store Y is $\\$1.50$/bottle. Store Y is the better buy because it costs less for each bottle.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'ratios-proportions-prealg',
    sections: [
      {
        id: 'rp3-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Proportions

**Part 3 of 5 — Proportions & Equivalent Ratios**

---

> 🔑 **What's a proportion?** A **proportion** is an equation that says two ratios are **equal**, like $\\dfrac{2}{3} = \\dfrac{6}{9}$. Recognizing and building equal ratios is the heart of this whole topic.`,
      },
      {
        id: 'rp3-equiv-teach',
        type: 'text' as const,
        content: `## Equivalent Ratios

Two ratios are **equivalent** if you can get one from the other by multiplying (or dividing) **both** parts by the same number.

$$\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$$

So $2 : 3$, $4 : 6$, $8 : 12$, and $20 : 30$ are all the **same ratio** in different clothes.

| Multiply both by | Ratio |
|------------------|-------|
| (original) | $2 : 3$ |
| $\\times 2$ | $4 : 6$ |
| $\\times 5$ | $10 : 15$ |
| $\\times 10$ | $20 : 30$ |

> ⚠️ You must multiply or divide **both** numbers by the same value. Multiplying only the top changes the ratio.`,
      },
      {
        id: 'rp3-cross-teach',
        type: 'text' as const,
        content: `## The Cross-Products Test

How can you check whether two ratios are equal *without* simplifying both? Use **cross products**.

For $\\dfrac{a}{b} = \\dfrac{c}{d}$, the cross products are $a \\cdot d$ and $b \\cdot c$.

> 🔑 **The rule:** $\\dfrac{a}{b} = \\dfrac{c}{d}$ is true **exactly when** $a \\cdot d = b \\cdot c$ (the cross products are equal).

### Example: is $\\dfrac{3}{4} = \\dfrac{9}{12}$?

$$3 \\cdot 12 = 36 \\qquad 4 \\cdot 9 = 36$$

The cross products match ($36 = 36$), so **yes**, it's a true proportion.

### Example: is $\\dfrac{2}{5} = \\dfrac{6}{14}$?

$$2 \\cdot 14 = 28 \\qquad 5 \\cdot 6 = 30$$

$28 \\ne 30$, so **no** — these ratios are *not* equal.`,
      },
      {
        id: 'rp3-cross-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pair forms a true proportion?',
              options: ['$\\dfrac{4}{6} = \\dfrac{6}{9}$', '$\\dfrac{2}{3} = \\dfrac{5}{6}$', '$\\dfrac{3}{4} = \\dfrac{7}{8}$', '$\\dfrac{5}{2} = \\dfrac{8}{4}$'],
              correctAnswer: 0,
              explanation: 'Check cross products: $4 \\cdot 9 = 36$ and $6 \\cdot 6 = 36$. They match, so $\\frac{4}{6} = \\frac{6}{9}$ is true. The others fail (e.g. $2\\cdot 6 = 12 \\ne 15 = 3\\cdot 5$).',
            },
            {
              question: 'Which ratio is **equivalent** to $3 : 5$?',
              options: ['$12 : 20$', '$3 : 10$', '$6 : 8$', '$5 : 3$'],
              correctAnswer: 0,
              explanation: 'Multiply both parts of $3:5$ by $4$ to get $12:20$. Check: $3 \\cdot 20 = 60 = 5 \\cdot 12$. ✓',
            },
          ],
        },
      },
      {
        id: 'rp3-equiv-drill',
        type: 'input-boxes' as const,
        content: `**Build Equivalent Ratios** 🧮

Fill in the missing number so the ratios are equivalent.

**1)** $\\dfrac{2}{7} = \\dfrac{?}{21}$
**2)** $\\dfrac{5}{8} = \\dfrac{15}{?}$
**3)** $\\dfrac{4}{9} = \\dfrac{?}{36}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '24', '16'],
          hint1: 'The bottom went from $7$ to $21$, a $\\times 3$. So the top is $2 \\times 3 = 6$.',
          hint2: 'The top went from $5$ to $15$, a $\\times 3$. So the bottom is $8 \\times 3 = 24$.',
          hint3: 'The bottom went from $9$ to $36$, a $\\times 4$. So the top is $4 \\times 4 = 16$.',
          explanation: '1) $\\frac{2}{7} = \\frac{6}{21}$.  2) $\\frac{5}{8} = \\frac{15}{24}$.  3) $\\frac{4}{9} = \\frac{16}{36}$. In each, both parts are scaled by the same factor.',
        },
      },
      {
        id: 'rp3-cross-recap',
        type: 'text' as const,
        content: `## Back to Cross Products

Building equivalent ratios is great when you can *see* the scale factor. But sometimes the numbers don't share an obvious multiplier — that's when **cross products** are the fastest check.

$$\\frac{a}{b} = \\frac{c}{d} \\quad\\Longleftrightarrow\\quad a \\cdot d = b \\cdot c$$

If the two cross products are equal, the proportion is **true**; if not, it's **false**. No simplifying required.

> 💡 Cross products work even with messy numbers like $\\dfrac{17}{23}$ — that's exactly why this test is so powerful.`,
      },
      {
        id: 'rp3-dropdown',
        type: 'dropdown-select' as const,
        content: `**True or Not?** 🔽

Use cross products to decide whether each proportion is true.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{6}{8} = \\dfrac{9}{12}$ is:', options: ['True', 'False'] },
            { label: '$\\dfrac{3}{7} = \\dfrac{9}{20}$ is:', options: ['True', 'False'] },
            { label: '$\\dfrac{10}{4} = \\dfrac{5}{2}$ is:', options: ['True', 'False'] },
          ],
          correctAnswers: ['True', 'False', 'True'],
          hint1: '$6 \\cdot 12 = 72$ and $8 \\cdot 9 = 72$ — equal, so True.',
          hint2: '$3 \\cdot 20 = 60$ but $7 \\cdot 9 = 63$ — not equal, so False.',
          hint3: '$10 \\cdot 2 = 20$ and $4 \\cdot 5 = 20$ — equal, so True.',
          explanation: 'A proportion is true exactly when its cross products match: $72=72$ (True), $60\\ne 63$ (False), $20=20$ (True).',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'ratios-proportions-prealg',
    sections: [
      {
        id: 'rp4-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Proportions

**Part 4 of 5 — Solving Proportions for the Unknown**

---

> 🔑 **The Payoff:** When a proportion has a *missing* value, cross products turn it into a simple one-step equation you can solve. This is the single most useful skill in the whole topic.`,
      },
      {
        id: 'rp4-solve-teach',
        type: 'text' as const,
        content: `## Solving with Cross Multiplication

To solve a proportion like $\\dfrac{x}{6} = \\dfrac{4}{3}$:

1. **Cross multiply** to clear the fractions: $x \\cdot 3 = 6 \\cdot 4$
2. **Simplify:** $3x = 24$
3. **Divide** both sides by the number next to $x$: $x = \\dfrac{24}{3} = 8$

$$\\frac{x}{6} = \\frac{4}{3} \\;\\Rightarrow\\; 3x = 24 \\;\\Rightarrow\\; x = 8$$

> ✅ **Check:** $\\dfrac{8}{6} = \\dfrac{4}{3}$? Cross products: $8 \\cdot 3 = 24$ and $6 \\cdot 4 = 24$. ✓

### Example: the unknown on the bottom

$$\\frac{5}{n} = \\frac{15}{12}$$

Cross multiply: $5 \\cdot 12 = 15 \\cdot n$, so $60 = 15n$, giving $n = \\dfrac{60}{15} = 4$.`,
      },
      {
        id: 'rp4-solve-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Solve $\\dfrac{x}{10} = \\dfrac{3}{5}$.',
              options: ['$x = 6$', '$x = 5$', '$x = 15$', '$x = 2$'],
              correctAnswer: 0,
              explanation: 'Cross multiply: $5x = 30$, so $x = 6$. Check: $\\frac{6}{10} = \\frac{3}{5}$ ✓.',
            },
            {
              question: 'Solve $\\dfrac{8}{12} = \\dfrac{6}{y}$.',
              options: ['$y = 9$', '$y = 4$', '$y = 16$', '$y = 18$'],
              correctAnswer: 0,
              explanation: 'Cross multiply: $8y = 72$, so $y = 9$. Check: $\\frac{8}{12} = \\frac{6}{9}$ since both simplify to $\\frac{2}{3}$ ✓.',
            },
          ],
        },
      },
      {
        id: 'rp4-setup-teach',
        type: 'text' as const,
        content: `## Setting Up a Proportion from Words

The trick is to keep the **same kind of quantity** in matching positions — top with top, bottom with bottom.

### Example: scaling a recipe

A recipe uses $2$ cups of flour for every $3$ cups of milk. How much flour for $12$ cups of milk?

Put **flour on top** and **milk on the bottom** in both ratios:

$$\\frac{\\text{flour}}{\\text{milk}}: \\quad \\frac{2}{3} = \\frac{x}{12}$$

Cross multiply: $3x = 24$, so $x = 8$. You need **$8$ cups of flour**.

> 💡 **The golden rule of setup:** whatever unit is on *top* in the first ratio must be on *top* in the second ratio too. Mixing them up is the #1 word-problem mistake.`,
      },
      {
        id: 'rp4-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Proportion** 🧮

Cross multiply and solve for the variable. Enter just the number.

**1)** $\\dfrac{x}{4} = \\dfrac{9}{6} \\Rightarrow x = \\,?$
**2)** $\\dfrac{7}{n} = \\dfrac{21}{15} \\Rightarrow n = \\,?$
**3)** $\\dfrac{a}{20} = \\dfrac{3}{5} \\Rightarrow a = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '5', '12'],
          hint1: 'Cross multiply: $6x = 36$, so $x = 6$.',
          hint2: 'Cross multiply: $21n = 105$, so $n = 5$.',
          hint3: 'Cross multiply: $5a = 60$, so $a = 12$.',
          explanation: '1) $6x = 4 \\cdot 9 = 36 \\Rightarrow x = 6$.  2) $21n = 7 \\cdot 15 = 105 \\Rightarrow n = 5$.  3) $5a = 20 \\cdot 3 = 60 \\Rightarrow a = 12$.',
        },
      },
      {
        id: 'rp4-word-drill',
        type: 'input-boxes' as const,
        content: `**Word Problems** 🧮

Set up a proportion, then solve. Enter just the number.

**1)** If $3$ notebooks cost $\\$12$, how much do $7$ notebooks cost? (dollars)
**2)** A map uses $1$ inch for every $25$ miles. How many miles is $4$ inches? (miles)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['28', '100'],
          hint1: 'Set up $\\frac{3}{12} = \\frac{7}{x}$ (notebooks over dollars). Cross multiply: $3x = 84$.',
          hint2: 'Set up $\\frac{1}{25} = \\frac{4}{x}$ (inches over miles). Cross multiply: $x = 100$.',
          hint3: 'Keep units in matching positions, then cross multiply and divide.',
          explanation: '1) $\\frac{3}{12} = \\frac{7}{x} \\Rightarrow 3x = 84 \\Rightarrow x = 28$ dollars.  2) $\\frac{1}{25} = \\frac{4}{x} \\Rightarrow x = 100$ miles.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'ratios-proportions-prealg',
    sections: [
      {
        id: 'rp5-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Proportions

**Part 5 of 5 — Applications & Mastery Check**

---

You can now write ratios, simplify them, find unit rates, recognize proportions, and solve for unknowns. Let's apply all of it to real situations — and then prove your mastery.`,
      },
      {
        id: 'rp5-scale-teach',
        type: 'text' as const,
        content: `## Scale Drawings & Similar Shapes

A **scale** is a ratio that compares a drawing to real life, like $1 \\text{ cm} : 50 \\text{ km}$ on a map.

### Example: a model car

A model car is built at a scale of $1 : 18$ — every $1$ inch on the model is $18$ inches on the real car. If the model is $9$ inches long, how long is the real car?

$$\\frac{1}{18} = \\frac{9}{x} \\;\\Rightarrow\\; x = 18 \\cdot 9 = 162 \\text{ inches}$$

The real car is $162$ inches long.

> 💡 Scale problems are just proportions in disguise: **model : real $=$ model : real**, with units kept in matching positions.`,
      },
      {
        id: 'rp5-scale-drill',
        type: 'input-boxes' as const,
        content: `**Scale & Application Practice** 🧮

Set up a proportion and solve. Enter just the number.

**1)** A blueprint uses $1$ inch for every $4$ feet. A wall is $20$ feet long. How many inches is it on the blueprint? (inches)
**2)** $5$ workers paint a fence in the same way, finishing $3$ fences in a day. At that rate, how many fences would $5$ workers finish in $4$ days? (fences)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['5', '12'],
          hint1: 'Set up $\\frac{1}{4} = \\frac{x}{20}$ (inches over feet). Cross multiply: $4x = 20$.',
          hint2: 'Set up $\\frac{3}{1} = \\frac{x}{4}$ (fences over days). So $x = 3 \\cdot 4$.',
          hint3: 'Keep matching units in the same positions, then cross multiply.',
          explanation: '1) $\\frac{1}{4} = \\frac{x}{20} \\Rightarrow 4x = 20 \\Rightarrow x = 5$ inches.  2) $\\frac{3}{1} = \\frac{x}{4} \\Rightarrow x = 12$ fences.',
        },
      },
      {
        id: 'rp5-app-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Right Setup** 🔽

A train travels $240$ miles in $4$ hours. Choose the correct value for each.`,
        exercise: {
          dropdowns: [
            { label: 'Unit rate (miles per hour):', options: ['$60$', '$120$', '$30$', '$960$'] },
            { label: 'Correct proportion to find the distance $d$ in $7$ hours:', options: ['$\\dfrac{240}{4} = \\dfrac{d}{7}$', '$\\dfrac{240}{4} = \\dfrac{7}{d}$', '$\\dfrac{4}{240} = \\dfrac{d}{7}$', '$\\dfrac{240}{d} = \\dfrac{4}{7}$'] },
            { label: 'Distance in $7$ hours (miles):', options: ['$420$', '$360$', '$480$', '$1680$'] },
          ],
          correctAnswers: ['$60$', '$\\dfrac{240}{4} = \\dfrac{d}{7}$', '$420$'],
          hint1: 'Unit rate: $240 \\div 4 = 60$ mph.',
          hint2: 'Keep miles on top, hours on bottom in both ratios: $\\frac{240}{4} = \\frac{d}{7}$.',
          hint3: 'Solve $\\frac{240}{4} = \\frac{d}{7}$: $4d = 1680$, so $d = 420$ — or just $60 \\times 7 = 420$.',
          explanation: 'The unit rate is $60$ mph. Keeping miles over hours gives $\\frac{240}{4} = \\frac{d}{7}$, and $d = 60 \\cdot 7 = 420$ miles.',
        },
      },
      {
        id: 'rp5-quick-ref',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Write a ratio | first quantity $:$ second quantity (order matters) |
| Simplify a ratio | divide both parts by their GCF |
| Find a unit rate | divide first quantity by second (second $= 1$) |
| Check a proportion | cross products equal? $a\\cdot d = b\\cdot c$ |
| Solve $\\dfrac{a}{b} = \\dfrac{c}{d}$ for a missing value | cross multiply, then divide |

> ⚠️ When setting up a word problem, always line up matching units: **top with top, bottom with bottom.**`,
      },
      {
        id: 'rp5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A recipe needs $4$ eggs for every $6$ servings. How many eggs are needed for $15$ servings?',
              options: ['$10$ eggs', '$9$ eggs', '$12$ eggs', '$8$ eggs'],
              correctAnswer: 0,
              explanation: 'Set up $\\frac{4}{6} = \\frac{x}{15}$. Cross multiply: $6x = 60$, so $x = 10$ eggs.',
            },
            {
              question: 'On a map, $2$ inches represents $30$ miles. How many miles do $5$ inches represent?',
              options: ['$75$ miles', '$60$ miles', '$12$ miles', '$150$ miles'],
              correctAnswer: 0,
              explanation: 'Set up $\\frac{2}{30} = \\frac{5}{x}$. Cross multiply: $2x = 150$, so $x = 75$ miles.',
            },
          ],
        },
      },
      {
        id: 'rp5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Simplify the ratio $24 : 36$.',
              options: ['$2 : 3$', '$3 : 4$', '$4 : 6$', '$6 : 9$'],
              correctAnswer: 0,
              explanation: 'The GCF of $24$ and $36$ is $12$: $24\\div 12 = 2$ and $36 \\div 12 = 3$, so $24:36 = 2:3$.',
            },
            {
              question: 'Solve the proportion $\\dfrac{x}{15} = \\dfrac{4}{5}$.',
              options: ['$x = 12$', '$x = 3$', '$x = 20$', '$x = 75$'],
              correctAnswer: 0,
              explanation: 'Cross multiply: $5x = 60$, so $x = 12$. Check: $\\frac{12}{15} = \\frac{4}{5}$ ✓.',
            },
            {
              question: 'A car goes $180$ miles on $6$ gallons of gas. What is its unit rate (miles per gallon)?',
              options: ['$30$ mpg', '$36$ mpg', '$1080$ mpg', '$6$ mpg'],
              correctAnswer: 0,
              explanation: 'Divide miles by gallons: $180 \\div 6 = 30$ miles per gallon.',
            },
          ],
        },
      },
    ],
  },
]
