import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Ratios and Rates (Algebra 1).
 * Registry key / DB Topic.slug: 'ratios-rates-algebra1'.
 * 5 parts, gold-standard structure: meaning of a ratio → unit rates → proportions
 * & cross-multiplication → scaling, recipes & maps (applications) → mixed practice
 * + exit quiz.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every rate, ratio, and proportion answer was re-checked by hand before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'ratios-rates-algebra1',
    sections: [
      {
        id: 'rr1-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 1 of 5 — What Is a Ratio?**

---

### Topics in This Part

| Section |
|---------|
| The Meaning of a Ratio |
| Three Ways to Write a Ratio |
| Equivalent Ratios & Simplifying |

> 🔑 **Key Concept:** A **ratio** compares two quantities by division. It tells you *how much of one thing there is for every amount of another* — the foundation for rates, proportions, percents, and slope.`,
      },
      {
        id: 'rr1-meaning',
        type: 'text' as const,
        content: `## The Meaning of a Ratio

A **ratio** compares two quantities. If a fruit bowl has $6$ apples and $4$ oranges, the ratio of apples to oranges is

$$6 \\text{ to } 4 \\quad=\\quad 6 : 4 \\quad=\\quad \\frac{6}{4}.$$

All three notations mean the same thing. Because a ratio is really a fraction, you can **simplify** it by dividing both numbers by a common factor:

$$\\frac{6}{4} = \\frac{6 \\div 2}{4 \\div 2} = \\frac{3}{2} \\quad\\Longrightarrow\\quad 3 : 2.$$

So for every $3$ apples there are $2$ oranges.

> ⚠️ **Order matters.** "Apples to oranges" is $6:4$, but "oranges to apples" is $4:6 = 2:3$. Write the quantities in the order the problem names them.`,
      },
      {
        id: 'rr1-types',
        type: 'text' as const,
        content: `## Part-to-Part vs. Part-to-Whole

There are two flavors of ratio, and mixing them up is the most common early mistake.

| Type | Example (6 apples, 4 oranges) | Meaning |
|------|-------------------------------|---------|
| **Part-to-part** | apples : oranges $= 6:4 = 3:2$ | one group compared to another |
| **Part-to-whole** | apples : total $= 6:10 = 3:5$ | one group compared to the total |

The **total** is the sum of all parts: $6 + 4 = 10$ pieces of fruit.

> 💡 A part-to-whole ratio is exactly what becomes a **fraction of the whole** and later a **percent**. Here apples are $\\dfrac{6}{10} = \\dfrac{3}{5} = 60\\%$ of the fruit.`,
      },
      {
        id: 'rr1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A class has $12$ boys and $18$ girls. The ratio of boys to girls in simplest form is:',
              options: ['$2 : 3$', '$3 : 2$', '$12 : 18$', '$2 : 5$'],
              correctAnswer: 0,
              explanation: 'Divide both by their common factor $6$: $12:18 = (12\\div 6):(18\\div 6) = 2:3$. Boys come first because the problem says "boys to girls."',
            },
            {
              question: 'Using the same class ($12$ boys, $18$ girls), the ratio of boys to the **total** number of students is:',
              options: ['$2 : 5$', '$2 : 3$', '$12 : 18$', '$1 : 2$'],
              correctAnswer: 0,
              explanation: 'The total is $12 + 18 = 30$. Boys to total $= 12:30$, and dividing both by $6$ gives $2:5$. This is part-to-whole, so the second number is the total.',
            },
          ],
        },
      },
      {
        id: 'rr1-simplify-drill',
        type: 'input-boxes' as const,
        content: `**Simplify Each Ratio** 🧮

Write each ratio in simplest form. Enter your answer as a fraction like \`3/2\` (first number over second number).

**1)** $8 : 12 = \\,?$
**2)** $15 : 25 = \\,?$
**3)** $9 : 9 = \\,?$  *(yes, ratios can be $1:1$)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2/3', '3/5', '1/1'],
          hint1: 'Find the greatest common factor of both numbers, then divide each by it.',
          hint2: 'For $8:12$ the GCF is $4$: $8\\div 4 = 2$ and $12 \\div 4 = 3$.',
          hint3: 'For $15:25$ the GCF is $5$. For $9:9$, every number divides itself once, giving $1:1$.',
          explanation: '1) $8:12 = 2:3$.  2) $15:25 = 3:5$.  3) $9:9 = 1:1$ — equal quantities always reduce to $1:1$.',
        },
      },
      {
        id: 'rr1-equivalent',
        type: 'text' as const,
        content: `## Equivalent Ratios

Two ratios are **equivalent** when one simplifies to the other — exactly like equivalent fractions. You can **multiply or divide both numbers by the same value**:

$$2 : 3 \\;=\\; 4 : 6 \\;=\\; 6 : 9 \\;=\\; 20 : 30.$$

You **cannot** add or subtract the same number from both — that changes the relationship.

> 🔑 **Key Idea:** Scaling *both* parts by the same factor keeps a ratio equivalent. This is the engine behind every proportion you'll set up in Part 3.`,
      },
      {
        id: 'rr1-equivalent-dropdown',
        type: 'dropdown-select' as const,
        content: `**Spot the Equivalent Ratio** 🔽

Each ratio below is scaled from $2:3$. Pick the value that keeps it equivalent.`,
        exercise: {
          dropdowns: [
            { label: '$2:3 = 8:\\,?$', options: ['$12$', '$9$', '$6$', '$24$'] },
            { label: '$2:3 = \\,?:15$', options: ['$10$', '$5$', '$30$', '$12$'] },
            { label: 'Which is **not** equivalent to $2:3$?', options: ['$5:6$', '$4:6$', '$10:15$', '$20:30$'] },
          ],
          correctAnswers: ['$12$', '$10$', '$5:6$'],
          hint1: 'Multiply or divide BOTH parts by the same number to stay equivalent.',
          hint2: '$2:3 = 8:?$ scales by $4$ (since $2\\times 4 = 8$), so the second part is $3\\times 4 = 12$.',
          hint3: '$2:3 = ?:15$ scales by $5$ (since $3\\times 5 = 15$), so the first part is $2\\times 5 = 10$. And $5:6$ does not come from one common factor.',
          explanation: '$2:3 = 8:12$ (scale by $4$); $2:3 = 10:15$ (scale by $5$). $5:6$ is NOT equivalent — there is no single factor turning $2:3$ into $5:6$, while $4:6$, $10:15$, and $20:30$ all reduce back to $2:3$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'ratios-rates-algebra1',
    sections: [
      {
        id: 'rr2-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 2 of 5 — Rates & Unit Rates**

---

> 🔑 **The Idea:** A **rate** is a ratio that compares two quantities with *different units* (miles and hours, dollars and pounds). A **unit rate** scales it down to "per one" — the single most useful number for comparing deals and speeds.`,
      },
      {
        id: 'rr2-rate',
        type: 'text' as const,
        content: `## Rates and Unit Rates

A **rate** compares quantities measured in different units:

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}}, \\qquad \\frac{\\$6}{3 \\text{ pounds}}, \\qquad \\frac{15 \\text{ pages}}{5 \\text{ minutes}}.$$

A **unit rate** has a denominator of $1$. To find it, **divide the top by the bottom**:

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}} = \\frac{60 \\text{ miles}}{1 \\text{ hour}} = 60 \\text{ mph}.$$

$$\\frac{\\$6}{3 \\text{ lb}} = \\frac{\\$2}{1 \\text{ lb}} = \\$2 \\text{ per pound}.$$

> 💡 The word **"per"** signals a unit rate: miles **per** hour, dollars **per** pound, words **per** minute. "Per" always means *divide by that unit*.`,
      },
      {
        id: 'rr2-unitrate-drill',
        type: 'input-boxes' as const,
        content: `**Find the Unit Rate** 🧮

Divide the top quantity by the bottom quantity. Enter just the number.

**1)** $150$ miles in $3$ hours $= \\,?$ miles per hour
**2)** \\$12 for $4$ notebooks $= \\,?$ dollars per notebook
**3)** $90$ words in $2$ minutes $= \\,?$ words per minute`,
        exercise: {
          boxes: 3,
          correctAnswers: ['50', '3', '45'],
          hint1: 'Unit rate $=$ (top quantity) $\\div$ (bottom quantity).',
          hint2: '$150 \\div 3 = 50$ and $12 \\div 4 = 3$.',
          hint3: '$90 \\div 2 = 45$ words for every $1$ minute.',
          explanation: '1) $150\\div 3 = 50$ mph.  2) $12\\div 4 = \\$3$ per notebook.  3) $90\\div 2 = 45$ words per minute.',
        },
      },
      {
        id: 'rr2-bestbuy',
        type: 'text' as const,
        content: `## Unit Rates Compare Deals

Unit rates let you compare options that come in different sizes — the "better buy."

### Example: Which juice is cheaper?

- Brand A: \\$3.00 for $24$ oz $\\;\\Rightarrow\\; 3.00 \\div 24 = 0.125$, i.e. \\$0.125 per oz
- Brand B: \\$4.50 for $40$ oz $\\;\\Rightarrow\\; 4.50 \\div 40 = 0.1125$, i.e. \\$0.1125 per oz

Brand B costs **less per ounce** (\\$0.1125 $<$ \\$0.125), so **Brand B is the better buy**.

> ⚠️ Always compare the **same** unit. A lower total price is *not* always the better deal — compare price **per ounce** (or per item), never just the sticker price.`,
      },
      {
        id: 'rr2-bestbuy-q',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A car travels $240$ miles on $8$ gallons of gas. What is its fuel economy?',
              options: ['$30$ miles per gallon', '$32$ miles per gallon', '$8$ miles per gallon', '$248$ miles per gallon'],
              correctAnswer: 0,
              explanation: 'Unit rate $= 240 \\div 8 = 30$ miles per gallon. "Per gallon" means divide the miles by the gallons.',
            },
            {
              question: 'Which is the better buy: $5$ lb of rice for $\\$10$, or $8$ lb for $\\$12$?',
              options: ['$8$ lb for $\\$12$ ($\\$1.50$/lb)', '$5$ lb for $\\$10$ ($\\$2.00$/lb)', 'They cost the same per pound', 'The $\\$10$ option, because it is cheaper overall'],
              correctAnswer: 0,
              explanation: '$10\\div 5 = \\$2.00$ per lb versus $12 \\div 8 = \\$1.50$ per lb. The $8$-lb bag is cheaper **per pound**, so it is the better buy even though its total price is higher.',
            },
          ],
        },
      },
      {
        id: 'rr2-dropdown',
        type: 'dropdown-select' as const,
        content: `**Match the Unit Rate** 🔽

For each rate, choose the correct unit rate.`,
        exercise: {
          dropdowns: [
            { label: '$\\$20$ for $5$ tickets:', options: ['$\\$4$ per ticket', '$\\$5$ per ticket', '$\\$15$ per ticket', '$\\$25$ per ticket'] },
            { label: '$210$ heartbeats in $3$ minutes:', options: ['$70$ beats per minute', '$60$ beats per minute', '$207$ beats per minute', '$630$ beats per minute'] },
            { label: '$8$ cups of flour for $2$ loaves:', options: ['$4$ cups per loaf', '$2$ cups per loaf', '$6$ cups per loaf', '$16$ cups per loaf'] },
          ],
          correctAnswers: ['$\\$4$ per ticket', '$70$ beats per minute', '$4$ cups per loaf'],
          hint1: 'Each time, divide the first quantity by the second.',
          hint2: '$20 \\div 5 = 4$ and $210 \\div 3 = 70$.',
          hint3: '$8 \\div 2 = 4$ cups of flour for each single loaf.',
          explanation: '$20\\div 5 = \\$4$/ticket, $210\\div 3 = 70$ bpm, $8\\div 2 = 4$ cups/loaf. A unit rate always has $1$ in the denominator.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'ratios-rates-algebra1',
    sections: [
      {
        id: 'rr3-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 3 of 5 — Proportions & Cross-Multiplication**

---

> 🔑 **Why it works:** A **proportion** is an equation stating that two ratios are equal. **Cross-multiplication** turns it into a simple linear equation you can solve for the unknown.`,
      },
      {
        id: 'rr3-proportion',
        type: 'text' as const,
        content: `## What Is a Proportion?

A **proportion** sets two ratios equal:

$$\\frac{a}{b} = \\frac{c}{d}.$$

Two ratios form a true proportion exactly when their **cross products** are equal:

$$\\frac{a}{b} = \\frac{c}{d} \\quad\\Longleftrightarrow\\quad a \\cdot d = b \\cdot c.$$

### Quick check: Is $\\dfrac{3}{4} = \\dfrac{9}{12}$?

Cross-multiply: $3 \\cdot 12 = 36$ and $4 \\cdot 9 = 36$. The cross products match, so **yes**, it's a true proportion.

> 🔑 **The cross-product rule** ($a d = b c$) is just "multiply both sides by $b$ and by $d$." It's the workhorse for solving any proportion.`,
      },
      {
        id: 'rr3-istrue',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which equation is a **true** proportion?',
              options: ['$\\frac{2}{5} = \\frac{6}{15}$', '$\\frac{2}{5} = \\frac{6}{10}$', '$\\frac{3}{7} = \\frac{6}{12}$', '$\\frac{4}{9} = \\frac{8}{16}$'],
              correctAnswer: 0,
              explanation: 'Cross-multiply $\\frac{2}{5}=\\frac{6}{15}$: $2\\cdot 15 = 30$ and $5\\cdot 6 = 30$. Equal cross products $\\Rightarrow$ true. The others all give unequal cross products.',
            },
            {
              question: 'If $\\frac{x}{8} = \\frac{3}{4}$, then cross-multiplying gives which equation?',
              options: ['$4x = 24$', '$3x = 32$', '$4x = 3$', '$x = 12$'],
              correctAnswer: 0,
              explanation: 'Cross products: $x \\cdot 4 = 8 \\cdot 3$, i.e. $4x = 24$. (Solving gives $x = 6$, but the question asks for the cross-multiplied equation.)',
            },
          ],
        },
      },
      {
        id: 'rr3-solve',
        type: 'text' as const,
        content: `## Solving a Proportion for the Unknown

### Example: Solve $\\dfrac{x}{8} = \\dfrac{3}{4}$

1. **Cross-multiply:** $4x = 8 \\cdot 3 = 24$
2. **Divide** both sides by $4$: $x = \\dfrac{24}{4} = 6$

> ✅ **Check:** $\\dfrac{6}{8} = \\dfrac{3}{4}$ ✓ (both reduce to $\\frac{3}{4}$).

### Example: Solve $\\dfrac{5}{n} = \\dfrac{2}{6}$

1. Cross-multiply: $2n = 5 \\cdot 6 = 30$
2. Divide by $2$: $n = 15$

> ✅ **Check:** $\\dfrac{5}{15} = \\dfrac{1}{3}$ and $\\dfrac{2}{6} = \\dfrac{1}{3}$ ✓`,
      },
      {
        id: 'rr3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Order the Steps** 🔽

You're solving $\\dfrac{x}{6} = \\dfrac{10}{4}$. Choose what happens at each stage.`,
        exercise: {
          dropdowns: [
            { label: 'First, cross-multiply:', options: ['$4x = 60$', '$4x = 10$', '$10x = 24$', '$x = 60$'] },
            { label: 'To isolate $x$, divide both sides by:', options: ['$4$', '$6$', '$10$', '$60$'] },
            { label: 'The solution is:', options: ['$x = 15$', '$x = 24$', '$x = 6$', '$x = 40$'] },
          ],
          correctAnswers: ['$4x = 60$', '$4$', '$x = 15$'],
          hint1: 'Cross products: $x \\cdot 4 = 6 \\cdot 10$.',
          hint2: 'That gives $4x = 60$; undo the multiplication by $4$.',
          hint3: '$x = 60 \\div 4 = 15$.',
          explanation: '$\\frac{x}{6}=\\frac{10}{4} \\Rightarrow 4x = 60 \\Rightarrow x = 15$. Check: $\\frac{15}{6} = 2.5 = \\frac{10}{4}$ ✓.',
        },
      },
      {
        id: 'rr3-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve Each Proportion** 🧮

Cross-multiply and solve for the variable. Enter just the number.

**1)** $\\dfrac{x}{9} = \\dfrac{4}{3} \\;\\Rightarrow\\; x = \\,?$
**2)** $\\dfrac{6}{n} = \\dfrac{3}{8} \\;\\Rightarrow\\; n = \\,?$
**3)** $\\dfrac{7}{10} = \\dfrac{y}{40} \\;\\Rightarrow\\; y = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '16', '28'],
          hint1: 'Cross-multiply first, then divide to isolate the variable.',
          hint2: '1) $3x = 9\\cdot 4 = 36$, so $x = 12$.  2) $3n = 6\\cdot 8 = 48$, so $n = 16$.',
          hint3: '3) $10y = 7\\cdot 40 = 280$, so $y = 28$.',
          explanation: '1) $3x = 36 \\Rightarrow x = 12$.  2) $3n = 48 \\Rightarrow n = 16$.  3) $10y = 280 \\Rightarrow y = 28$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'ratios-rates-algebra1',
    sections: [
      {
        id: 'rr4-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 4 of 5 — Real-World Applications**

---

> 🔑 **Big Payoff:** Proportions solve a huge slice of everyday math — scaling recipes, reading maps, converting units, finding speeds, and computing similar-figure lengths. The skill is **setting up the proportion correctly**.`,
      },
      {
        id: 'rr4-setup',
        type: 'text' as const,
        content: `## Setting Up a Word-Problem Proportion

The golden rule: **keep the same units lined up** — top with top, bottom with bottom.

### Example: Recipe scaling

A recipe needs $2$ cups of flour for $3$ servings. How much flour for $12$ servings?

$$\\frac{2 \\text{ cups}}{3 \\text{ servings}} = \\frac{x \\text{ cups}}{12 \\text{ servings}}$$

Cross-multiply: $3x = 2 \\cdot 12 = 24$, so $x = 8$ cups.

> ⚠️ **Label your units.** Putting "cups" on top in **both** ratios (and "servings" on the bottom in both) is what guarantees a correct setup. Mismatched units give a wrong answer.`,
      },
      {
        id: 'rr4-recipe-q',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A map uses a scale of $1$ inch $= 25$ miles. Two cities are $4$ inches apart on the map. How far apart are they in reality?',
              options: ['$100$ miles', '$29$ miles', '$50$ miles', '$6.25$ miles'],
              correctAnswer: 0,
              explanation: 'Set up $\\frac{1\\text{ in}}{25\\text{ mi}} = \\frac{4\\text{ in}}{x\\text{ mi}}$. Cross-multiply: $1\\cdot x = 25 \\cdot 4 = 100$ miles.',
            },
            {
              question: 'If $3$ workers build a wall in $12$ days, the rate is $36$ "worker-days." How long would $6$ workers take (same total work)?',
              options: ['$6$ days', '$24$ days', '$9$ days', '$2$ days'],
              correctAnswer: 0,
              explanation: 'Total work is $3\\times 12 = 36$ worker-days. With $6$ workers: $36 \\div 6 = 6$ days. More workers means fewer days — this is an inverse relationship, so be careful not to just scale up.',
            },
          ],
        },
      },
      {
        id: 'rr4-scale-drill',
        type: 'input-boxes' as const,
        content: `**Apply a Proportion** 🧮

Set up a proportion (units lined up!) and solve. Enter just the number.

**1)** $4$ apples cost \\$3. How much do $12$ apples cost (in dollars)?
**2)** A car goes $60$ miles in $1$ hour. How far in $3.5$ hours? (miles)
**3)** A scale model is $1\\,\\text{cm} = 4\\,\\text{m}$. A wall is $20\\,\\text{m}$ tall. How tall is the model (cm)?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '210', '5'],
          hint1: 'Keep matching units across from each other: cost over apples, miles over hours, cm over m.',
          hint2: '1) $\\frac{3}{4} = \\frac{x}{12} \\Rightarrow 4x = 36 \\Rightarrow x = 9$.  2) $60 \\times 3.5 = 210$.',
          hint3: '3) $\\frac{1\\text{ cm}}{4\\text{ m}} = \\frac{x\\text{ cm}}{20\\text{ m}} \\Rightarrow 4x = 20 \\Rightarrow x = 5$.',
          explanation: '1) $\\$9$.  2) $210$ miles.  3) $5$ cm. Each was set up with like units aligned, then cross-multiplied.',
        },
      },
      {
        id: 'rr4-percent',
        type: 'text' as const,
        content: `## Percents Are Just Proportions

A **percent** is a ratio out of $100$. To solve a percent problem, use the proportion

$$\\frac{\\text{part}}{\\text{whole}} = \\frac{\\text{percent}}{100}.$$

### Example: What is $15\\%$ of $80$?

$$\\frac{x}{80} = \\frac{15}{100} \\;\\Rightarrow\\; 100x = 80 \\cdot 15 = 1200 \\;\\Rightarrow\\; x = 12.$$

So $15\\%$ of $80$ is $12$.

> 💡 The same template answers all three percent questions: find the part, find the whole, or find the percent — just leave the unknown as the variable.`,
      },
      {
        id: 'rr4-percent-dropdown',
        type: 'dropdown-select' as const,
        content: `**Percent Proportions** 🔽

Use $\\dfrac{\\text{part}}{\\text{whole}} = \\dfrac{\\text{percent}}{100}$ to choose each answer.`,
        exercise: {
          dropdowns: [
            { label: '$20\\%$ of $50$ is:', options: ['$10$', '$20$', '$30$', '$70$'] },
            { label: '$30$ is what percent of $120$?', options: ['$25\\%$', '$40\\%$', '$30\\%$', '$90\\%$'] },
            { label: '$9$ is $25\\%$ of what number?', options: ['$36$', '$34$', '$225$', '$2.25$'] },
          ],
          correctAnswers: ['$10$', '$25\\%$', '$36$'],
          hint1: 'Set up $\\frac{\\text{part}}{\\text{whole}} = \\frac{\\text{percent}}{100}$ and solve for the unknown.',
          hint2: '$\\frac{x}{50} = \\frac{20}{100} \\Rightarrow x = 10$.  $\\frac{30}{120} = \\frac{p}{100} \\Rightarrow p = 25$.',
          hint3: '$\\frac{9}{w} = \\frac{25}{100} \\Rightarrow 25w = 900 \\Rightarrow w = 36$.',
          explanation: '$20\\%$ of $50 = 10$; $30/120 = 25\\%$; and $9$ is $25\\%$ of $36$ (since $25\\%$ is one-quarter, and $9\\times 4 = 36$).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'ratios-rates-algebra1',
    sections: [
      {
        id: 'rr5-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) write and simplify ratios, (2) compute unit rates and find the better buy, (3) solve proportions by cross-multiplying, and (4) apply proportions to recipes, maps, and percents. Let's put it together.`,
      },
      {
        id: 'rr5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Simplify a ratio | divide both parts by the GCF |
| Find a unit rate | divide top by bottom (denominator $= 1$) |
| Pick the better buy | compare price **per unit**, lowest wins |
| Check a proportion | cross products equal: $ad = bc$ |
| Solve a proportion | cross-multiply, then divide |
| Percent problem | $\\dfrac{\\text{part}}{\\text{whole}} = \\dfrac{\\text{percent}}{100}$ |

> ⚠️ Remember: line up like units (top with top), keep ratio order as written, and compare unit rates — not totals — when judging a deal.`,
      },
      {
        id: 'rr5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A printer prints $48$ pages in $6$ minutes. At this rate, how many pages in $10$ minutes?',
              options: ['$80$ pages', '$72$ pages', '$58$ pages', '$480$ pages'],
              correctAnswer: 0,
              explanation: 'Unit rate $= 48 \\div 6 = 8$ pages per minute. In $10$ minutes: $8 \\times 10 = 80$ pages. (Or proportion $\\frac{48}{6} = \\frac{x}{10} \\Rightarrow 6x = 480 \\Rightarrow x = 80$.)',
            },
            {
              question: 'Solve for $x$: $\\dfrac{x}{15} = \\dfrac{8}{5}$.',
              options: ['$x = 24$', '$x = 12$', '$x = 9.375$', '$x = 3$'],
              correctAnswer: 0,
              explanation: 'Cross-multiply: $5x = 15 \\cdot 8 = 120$, so $x = 24$. Check: $\\frac{24}{15} = 1.6 = \\frac{8}{5}$ ✓.',
            },
          ],
        },
      },
      {
        id: 'rr5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Skills Drill** 🧮

Use the right tool for each. Enter just the number.

**1)** Simplify $18:24$ — enter as a fraction like \`3/4\`.
**2)** A bus travels $180$ miles in $4$ hours. Unit rate $= \\,?$ miles per hour.
**3)** Solve $\\dfrac{x}{12} = \\dfrac{5}{4} \\;\\Rightarrow\\; x = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/4', '45', '15'],
          hint1: 'For (1) divide both by the GCF; for (2) divide miles by hours; for (3) cross-multiply then divide.',
          hint2: '$18:24$ has GCF $6$: $18\\div 6 = 3$, $24\\div 6 = 4$. And $180\\div 4 = 45$.',
          hint3: '$\\frac{x}{12} = \\frac{5}{4} \\Rightarrow 4x = 12\\cdot 5 = 60 \\Rightarrow x = 15$.',
          explanation: '1) $18:24 = 3:4 = 3/4$.  2) $180\\div 4 = 45$ mph.  3) $4x = 60 \\Rightarrow x = 15$.',
        },
      },
      {
        id: 'rr5-mixed-dropdown',
        type: 'dropdown-select' as const,
        content: `**Choose the Result** 🔽

One quick choice from each topic in this lesson.`,
        exercise: {
          dropdowns: [
            { label: '$\\$15$ for $3$ lb is a unit rate of:', options: ['$\\$5$ per lb', '$\\$3$ per lb', '$\\$12$ per lb', '$\\$45$ per lb'] },
            { label: 'Is $\\dfrac{4}{6} = \\dfrac{10}{15}$ a true proportion?', options: ['Yes', 'No'] },
            { label: '$25\\%$ of $60$ is:', options: ['$15$', '$24$', '$35$', '$240$'] },
          ],
          correctAnswers: ['$\\$5$ per lb', 'Yes', '$15$'],
          hint1: 'Divide for the unit rate; use cross products to test the proportion; use part/whole = percent/100.',
          hint2: '$15\\div 3 = 5$. For the proportion, compare $4\\cdot 15$ with $6\\cdot 10$.',
          hint3: '$4\\cdot 15 = 60 = 6\\cdot 10$, so it is true. And $\\frac{x}{60} = \\frac{25}{100} \\Rightarrow x = 15$.',
          explanation: '$15\\div 3 = \\$5$/lb. $\\frac{4}{6} = \\frac{10}{15}$ is TRUE since $4\\cdot 15 = 60 = 6\\cdot 10$ (both reduce to $\\frac{2}{3}$). $25\\%$ of $60 = 15$ (one-quarter of $60$).',
        },
      },
      {
        id: 'rr5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'A recipe calls for sugar and flour in the ratio $2:5$. If you use $6$ cups of sugar, how much flour do you need?',
              options: ['$15$ cups', '$9$ cups', '$12$ cups', '$30$ cups'],
              correctAnswer: 0,
              explanation: 'Scale the ratio: $2:5$ times $3$ gives $6:15$. So $6$ cups of sugar pairs with $15$ cups of flour. (Proportion: $\\frac{2}{5} = \\frac{6}{x} \\Rightarrow 2x = 30 \\Rightarrow x = 15$.)',
            },
            {
              question: 'Which is the better buy: $\\$4.00$ for $16$ oz, or $\\$5.40$ for $24$ oz?',
              options: ['$\\$5.40$ for $24$ oz ($\\$0.225$/oz)', '$\\$4.00$ for $16$ oz ($\\$0.25$/oz)', 'They are equal per ounce', 'The $\\$4.00$ option, since it costs less'],
              correctAnswer: 0,
              explanation: '$4.00 \\div 16 = \\$0.25$/oz versus $5.40 \\div 24 = \\$0.225$/oz. The $24$-oz size is cheaper per ounce, so it is the better buy.',
            },
            {
              question: 'What is $40\\%$ of $90$?',
              options: ['$36$', '$45$', '$50$', '$22.5$'],
              correctAnswer: 0,
              explanation: 'Use $\\frac{x}{90} = \\frac{40}{100}$: $100x = 90 \\cdot 40 = 3600$, so $x = 36$. (Or $0.40 \\times 90 = 36$.)',
            },
          ],
        },
      },
    ],
  },
]
