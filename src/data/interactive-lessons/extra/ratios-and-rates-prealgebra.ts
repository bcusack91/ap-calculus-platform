import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Ratios and Rates (Pre-Algebra).
 * Registry key / DB Topic.slug: 'ratios-and-rates-prealgebra'.
 * 5 parts, gold-standard structure: what is a ratio (notation, simplifying,
 * equivalence) → rates & unit rates (unit price / best buy) → proportions &
 * cross-multiplication → scaling, maps, recipes & speed applications →
 * mixed practice + exit quiz.
 * Each part alternates teaching with >= 3 interactive checks across >= 2 types.
 * LaTeX uses doubled backslashes (these are JS template-literal strings).
 * Every ratio, unit rate, and proportion answer was recomputed before authoring.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'ratios-and-rates-prealgebra',
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
| Three Ways to Write a Ratio |
| Equivalent Ratios |
| Simplifying to Lowest Terms |

> 🔑 **Key Concept:** A **ratio** compares two quantities by division. If a fruit bowl has $3$ apples and $5$ oranges, the ratio of apples to oranges is $3$ **to** $5$. Everything in this lesson grows from that one idea.`,
      },
      {
        id: 'rr1-notation',
        type: 'text' as const,
        content: `## Three Ways to Write a Ratio

The **same** ratio can be written three different ways. For $3$ apples and $5$ oranges:

| Notation | Looks like | Read as |
|----------|-----------|---------|
| Word form | $3$ to $5$ | "three to five" |
| Colon form | $3:5$ | "three to five" |
| Fraction form | $\\dfrac{3}{5}$ | "three to five" |

All three mean exactly the same comparison.

> ⚠️ **Order matters!** "Apples to oranges" is $3:5$, but "oranges to apples" is $5:3$. Always write the quantities in the order the problem names them.

> 💡 **Part vs. whole.** Sometimes a ratio compares a part to the **total**. With $3$ apples and $5$ oranges there are $8$ fruits total, so the ratio of *apples to all fruit* is $3:8$.`,
      },
      {
        id: 'rr1-notation-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A classroom has $12$ boys and $15$ girls. What is the ratio of boys to girls?',
              options: ['$12:15$', '$15:12$', '$12:27$', '$15:27$'],
              correctAnswer: 0,
              explanation: 'The ratio of boys to girls lists boys first: $12:15$. (Writing it $15:12$ would be girls to boys.)',
            },
            {
              question: 'Using the same class, what is the ratio of boys to the **total** number of students?',
              options: ['$12:15$', '$12:27$', '$15:27$', '$27:12$'],
              correctAnswer: 1,
              explanation: 'Total students $= 12 + 15 = 27$. Boys to total is $12:27$ — a part-to-whole ratio.',
            },
          ],
        },
      },
      {
        id: 'rr1-equivalent',
        type: 'text' as const,
        content: `## Equivalent Ratios

Two ratios are **equivalent** when one can be made from the other by multiplying (or dividing) **both** numbers by the same value.

$$\\frac{2}{3} = \\frac{2 \\cdot 2}{3 \\cdot 2} = \\frac{4}{6} = \\frac{2 \\cdot 5}{3 \\cdot 5} = \\frac{10}{15}$$

So $2:3$, $4:6$, and $10:15$ are all the **same** ratio.

> 🔑 **Golden Rule:** Whatever you do to the top, do to the bottom. Multiplying $2:3$ by $4$ gives $8:12$ — still the same ratio because both sides grew by the same factor.

### Building an Equivalent Ratio

| Start | Multiply both by | Result |
|-------|------------------|--------|
| $1:4$ | $3$ | $3:12$ |
| $5:2$ | $4$ | $20:8$ |
| $3:7$ | $10$ | $30:70$ |`,
      },
      {
        id: 'rr1-equivalent-drill',
        type: 'input-boxes' as const,
        content: `**Build Equivalent Ratios** 🧮

Fill in the missing number so the two ratios are equivalent.

**1)** $\\dfrac{2}{5} = \\dfrac{?}{20}$
**2)** $\\dfrac{3}{4} = \\dfrac{12}{?}$
**3)** $\\dfrac{6}{9} = \\dfrac{2}{?}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['8', '16', '3'],
          hint1: 'Bottom went from $5$ to $20$, so multiply both by $4$: $2\\cdot 4 = 8$.',
          hint2: 'Top went from $3$ to $12$, so multiply both by $4$: $4\\cdot 4 = 16$.',
          hint3: 'Here the ratio is shrinking: divide both by $3$. $6\\div 3 = 2$ and $9\\div 3 = 3$.',
          explanation: '1) $\\frac{2}{5}=\\frac{8}{20}$ (×4).  2) $\\frac{3}{4}=\\frac{12}{16}$ (×4).  3) $\\frac{6}{9}=\\frac{2}{3}$ (÷3).',
        },
      },
      {
        id: 'rr1-simplify',
        type: 'text' as const,
        content: `## Simplifying to Lowest Terms

A ratio is in **simplest form** (lowest terms) when the two numbers share no common factor except $1$. To simplify, divide both numbers by their **greatest common factor (GCF)**.

### Example: Simplify $18:24$

The GCF of $18$ and $24$ is $6$:

$$\\frac{18}{24} = \\frac{18 \\div 6}{24 \\div 6} = \\frac{3}{4}$$

So $18:24$ simplifies to $3:4$.

### Example: Simplify $20:50$

The GCF of $20$ and $50$ is $10$:

$$\\frac{20}{50} = \\frac{20 \\div 10}{50 \\div 10} = \\frac{2}{5}$$

> 💡 **Why simplify?** $3:4$ is much easier to picture and compare than $18:24$, even though they describe the same relationship.`,
      },
      {
        id: 'rr1-simplify-check',
        type: 'dropdown-select' as const,
        content: `**Simplify Each Ratio** 🔽

Choose the lowest-terms form of each ratio.`,
        exercise: {
          dropdowns: [
            { label: '$12:18$ simplifies to', options: ['$2:3$', '$3:4$', '$6:9$', '$4:6$'] },
            { label: '$25:15$ simplifies to', options: ['$5:3$', '$3:5$', '$5:4$', '$25:15$'] },
            { label: '$16:40$ simplifies to', options: ['$2:5$', '$4:10$', '$8:20$', '$2:4$'] },
          ],
          correctAnswers: ['$2:3$', '$5:3$', '$2:5$'],
          hint1: 'GCF of $12$ and $18$ is $6$: $12\\div 6 = 2$, $18\\div 6 = 3$.',
          hint2: 'GCF of $25$ and $15$ is $5$: $25\\div 5 = 5$, $15\\div 5 = 3$. Keep the order!',
          hint3: 'GCF of $16$ and $40$ is $8$: $16\\div 8 = 2$, $40\\div 8 = 5$.',
          explanation: '$12:18 \\to 2:3$ (÷6).  $25:15 \\to 5:3$ (÷5).  $16:40 \\to 2:5$ (÷8). $4:10$ and $8:20$ are equivalent but NOT lowest terms.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'ratios-and-rates-prealgebra',
    sections: [
      {
        id: 'rr2-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 2 of 5 — Rates and Unit Rates**

---

> 🔑 **The Idea:** A **rate** is a special ratio that compares two quantities with **different units** — like miles and hours, or dollars and pounds. A **unit rate** shrinks that comparison down to "per $1$."`,
      },
      {
        id: 'rr2-rates',
        type: 'text' as const,
        content: `## What Makes a Rate Special

A **ratio** like $3:5$ usually compares the same kind of thing (apples to oranges, both fruit). A **rate** compares **different units**:

| Rate | Compares | Units |
|------|----------|-------|
| $120$ miles in $2$ hours | distance to time | miles per hour |
| \\$6 for $3$ pounds | cost to weight | dollars per pound |
| $90$ words in $2$ minutes | words to time | words per minute |

A **unit rate** has a denominator of $1$ — "per **one** unit." To find it, **divide the top by the bottom**.

### Example: $120$ miles in $2$ hours

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}} = \\frac{60 \\text{ miles}}{1 \\text{ hour}} = 60 \\text{ mph}$$

> 💡 **The word "per" signals a unit rate.** Miles **per** hour, cost **per** pound, beats **per** minute — each means "for every $1$."`,
      },
      {
        id: 'rr2-unitrate-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A car travels $150$ miles in $3$ hours. What is its unit rate (speed)?',
              options: ['$50$ mph', '$45$ mph', '$150$ mph', '$3$ mph'],
              correctAnswer: 0,
              explanation: 'Divide distance by time: $150 \\div 3 = 50$ miles per hour.',
            },
            {
              question: 'A printer prints $240$ pages in $8$ minutes. What is the unit rate?',
              options: ['$32$ pages/min', '$30$ pages/min', '$240$ pages/min', '$8$ pages/min'],
              correctAnswer: 1,
              explanation: '$240 \\div 8 = 30$ pages per minute.',
            },
          ],
        },
      },
      {
        id: 'rr2-find-rate',
        type: 'input-boxes' as const,
        content: `**Find the Unit Rate** 🧮

Divide the top quantity by the bottom to get the "per $1$" rate.

**1)** $\\$45$ for $5$ tickets $=\\$\\,?$ per ticket
**2)** $360$ km in $4$ hours $=\\,?$ km/h
**3)** $84$ heartbeats in $60$ seconds $=\\,?$ beats per second  *(decimal is fine)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['9', '90', '1.4'],
          hint1: '$45 \\div 5 = 9$ dollars per ticket.',
          hint2: '$360 \\div 4 = 90$ km per hour.',
          hint3: '$84 \\div 60 = 1.4$ beats per second.',
          explanation: '1) $\\$45/5 = \\$9$ per ticket.  2) $360/4 = 90$ km/h.  3) $84/60 = 1.4$ beats/sec.',
        },
      },
      {
        id: 'rr2-unitprice',
        type: 'text' as const,
        content: `## Unit Price and the "Best Buy"

A **unit price** is a unit rate for cost: **dollars per single item or per unit of weight**. It is the secret weapon for comparison shopping — the lower the unit price, the better the deal.

### Example: Which is the better buy?

- **Option A:** $12$ granola bars for $\\$4.80$
- **Option B:** $8$ granola bars for $\\$3.60$

Find each unit price by dividing **cost ÷ quantity**:

$$\\text{A: } \\frac{\\$4.80}{12} = \\$0.40 \\text{ per bar} \\qquad \\text{B: } \\frac{\\$3.60}{8} = \\$0.45 \\text{ per bar}$$

Option **A** costs less per bar ($\\$0.40 < \\$0.45$), so **A is the better buy**.

> ⚠️ **Bigger package $\\ne$ always cheaper.** Always reduce to the *per-unit* price before deciding — that's the only fair comparison.`,
      },
      {
        id: 'rr2-bestbuy-check',
        type: 'multiple-choice' as const,
        content: `**Best Buy** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $\\$6.00$ box holds $10$ snack packs; a $\\$10.50$ box holds $15$. Which has the lower unit price?',
              options: ['The $\\$6.00$ box ($\\$0.60$ each)', 'The $\\$10.50$ box ($\\$0.70$ each)', 'They are equal', 'Cannot tell without weight'],
              correctAnswer: 0,
              explanation: '$\\$6.00 \\div 10 = \\$0.60$ each; $\\$10.50 \\div 15 = \\$0.70$ each. $\\$0.60 < \\$0.70$, so the $\\$6.00$ box is the better buy.',
            },
            {
              question: 'Juice comes in a $48$-oz bottle for $\\$3.84$ and a $32$-oz bottle for $\\$2.88$. What is the unit price of the $48$-oz bottle?',
              options: ['$\\$0.08$ per oz', '$\\$0.09$ per oz', '$\\$0.12$ per oz', '$\\$0.80$ per oz'],
              correctAnswer: 0,
              explanation: '$\\$3.84 \\div 48 = \\$0.08$ per ounce. (The $32$-oz bottle is $\\$2.88 \\div 32 = \\$0.09$/oz, so the big bottle wins.)',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'ratios-and-rates-prealgebra',
    sections: [
      {
        id: 'rr3-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 3 of 5 — Proportions**

---

> 🔑 **The Idea:** A **proportion** is an equation that says two ratios are **equal**, like $\\dfrac{2}{3} = \\dfrac{8}{12}$. When one number is missing, we can solve for it — and that unlocks almost every real-world ratio problem.`,
      },
      {
        id: 'rr3-cross',
        type: 'text' as const,
        content: `## Cross-Multiplication

In any true proportion, the **cross products** are equal:

$$\\frac{a}{b} = \\frac{c}{d} \\quad\\Longrightarrow\\quad a \\cdot d = b \\cdot c$$

You multiply diagonally — top-left times bottom-right equals top-right times bottom-left.

### Quick Check: Is $\\dfrac{3}{4} = \\dfrac{9}{12}$ a true proportion?

$$3 \\cdot 12 = 36 \\qquad 4 \\cdot 9 = 36$$

The cross products match ($36 = 36$), so **yes**, it's a true proportion. ✓

### When they *don't* match

Is $\\dfrac{2}{5} = \\dfrac{3}{7}$? Cross products: $2 \\cdot 7 = 14$ and $5 \\cdot 3 = 15$. Since $14 \\ne 15$, it is **not** a proportion.`,
      },
      {
        id: 'rr3-cross-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pair forms a TRUE proportion?',
              options: ['$\\dfrac{4}{6} = \\dfrac{6}{9}$', '$\\dfrac{2}{3} = \\dfrac{5}{7}$', '$\\dfrac{3}{5} = \\dfrac{4}{6}$', '$\\dfrac{1}{2} = \\dfrac{3}{8}$'],
              correctAnswer: 0,
              explanation: 'Cross-multiply $\\frac{4}{6}=\\frac{6}{9}$: $4\\cdot 9 = 36$ and $6\\cdot 6 = 36$. Equal, so it is a true proportion. The others fail (e.g. $2\\cdot 7=14\\ne 15=3\\cdot 5$).',
            },
            {
              question: 'For the proportion $\\dfrac{5}{8} = \\dfrac{x}{40}$, the correct cross-multiplication is:',
              options: ['$5 \\cdot 40 = 8 \\cdot x$', '$5 \\cdot 8 = 40 \\cdot x$', '$5 \\cdot x = 8 \\cdot 40$', '$8 \\cdot 40 = 5 \\cdot x$'],
              correctAnswer: 0,
              explanation: 'Multiply diagonals: top-left $\\times$ bottom-right $= 5\\cdot 40$, and top-right $\\times$ bottom-left $= 8\\cdot x$. So $5\\cdot 40 = 8\\cdot x$.',
            },
          ],
        },
      },
      {
        id: 'rr3-solve',
        type: 'text' as const,
        content: `## Solving a Proportion for the Unknown

To find a missing value, cross-multiply, then divide.

### Example: Solve $\\dfrac{x}{12} = \\dfrac{3}{4}$

1. **Cross-multiply:** $\\;4 \\cdot x = 12 \\cdot 3$
2. **Simplify:** $\\;4x = 36$
3. **Divide by $4$:** $\\;x = 9$

> ✅ **Check:** $\\dfrac{9}{12} = \\dfrac{3}{4}$? Cross products $9\\cdot 4 = 36$ and $12\\cdot 3 = 36$. ✓

### Example: Solve $\\dfrac{6}{x} = \\dfrac{9}{15}$

$$9 \\cdot x = 6 \\cdot 15 \\;\\Rightarrow\\; 9x = 90 \\;\\Rightarrow\\; x = 10$$

> 💡 **The unknown can be anywhere** — top or bottom, left or right. Cross-multiplication handles all four positions the same way.`,
      },
      {
        id: 'rr3-solve-drill',
        type: 'input-boxes' as const,
        content: `**Solve the Proportion** 🧮

Cross-multiply, then divide. Enter the value of $x$.

**1)** $\\dfrac{x}{10} = \\dfrac{6}{5}$
**2)** $\\dfrac{4}{x} = \\dfrac{12}{21}$
**3)** $\\dfrac{7}{8} = \\dfrac{x}{24}$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['12', '7', '21'],
          hint1: '$5x = 10\\cdot 6 = 60$, so $x = 60\\div 5 = 12$.',
          hint2: '$12x = 4\\cdot 21 = 84$, so $x = 84\\div 12 = 7$.',
          hint3: '$8x = 7\\cdot 24 = 168$, so $x = 168\\div 8 = 21$.',
          explanation: '1) $x=12$.  2) $x=7$.  3) $x=21$. Each: cross-multiply, then divide by the number next to $x$.',
        },
      },
      {
        id: 'rr3-word',
        type: 'text' as const,
        content: `## Setting Up a Proportion from Words

The hardest part of a word problem is *setting it up*. The trick: **keep the same units lined up** — top with top, bottom with bottom.

### Example: $3$ pencils cost $\\$1.20$. How much do $7$ pencils cost?

Set up "pencils over dollars" on both sides:

$$\\frac{3 \\text{ pencils}}{\\$1.20} = \\frac{7 \\text{ pencils}}{\\$x}$$

Cross-multiply: $\\;3x = 1.20 \\cdot 7 = 8.40$, so $x = 8.40 \\div 3 = \\$2.80$.

> ⚠️ **Line up the units!** If pencils are on top on the left, pencils must be on top on the right. Flipping one side gives the wrong answer.`,
      },
      {
        id: 'rr3-word-check',
        type: 'dropdown-select' as const,
        content: `**Set It Up and Solve** 🔽

If $4$ notebooks cost $\\$10$, how much do $10$ notebooks cost?`,
        exercise: {
          dropdowns: [
            { label: 'Correct setup (notebooks/dollars):', options: ['$\\dfrac{4}{10} = \\dfrac{10}{x}$', '$\\dfrac{4}{10} = \\dfrac{x}{10}$', '$\\dfrac{10}{4} = \\dfrac{10}{x}$', '$\\dfrac{4}{x} = \\dfrac{10}{10}$'] },
            { label: 'After cross-multiplying:', options: ['$4x = 100$', '$4x = 40$', '$10x = 40$', '$40 = 10x$'] },
            { label: 'The cost of $10$ notebooks:', options: ['$\\$25$', '$\\$40$', '$\\$2.50$', '$\\$100$'] },
          ],
          correctAnswers: ['$\\dfrac{4}{10} = \\dfrac{10}{x}$', '$4x = 100$', '$\\$25$'],
          hint1: 'Put notebooks on top and dollars on bottom on BOTH sides: $\\frac{4}{10}=\\frac{10}{x}$.',
          hint2: 'Cross-multiply $\\frac{4}{10}=\\frac{10}{x}$: $4\\cdot x = 10\\cdot 10 = 100$.',
          hint3: '$4x = 100 \\Rightarrow x = 100\\div 4 = 25$, so $10$ notebooks cost $\\$25$.',
          explanation: '$\\frac{4}{10}=\\frac{10}{x} \\Rightarrow 4x = 100 \\Rightarrow x = 25$. Ten notebooks cost $\\$25$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'ratios-and-rates-prealgebra',
    sections: [
      {
        id: 'rr4-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 4 of 5 — Scaling, Maps, Recipes & Speed**

---

> 🔑 **Big Payoff:** Ratios and proportions power real life — scaling recipes up or down, reading map distances, mixing colors, and connecting **distance, rate, and time**.`,
      },
      {
        id: 'rr4-scale',
        type: 'text' as const,
        content: `## Scaling Recipes Up and Down

To scale a recipe, multiply **every** ingredient by the same **scale factor**. Doubling means $\\times 2$; halving means $\\times \\frac{1}{2}$.

### Example: A recipe for $4$ servings uses $6$ cups of flour. How much for $10$ servings?

Set up a proportion (servings over cups):

$$\\frac{4 \\text{ servings}}{6 \\text{ cups}} = \\frac{10 \\text{ servings}}{x \\text{ cups}}$$

$$4x = 6 \\cdot 10 = 60 \\;\\Rightarrow\\; x = 15 \\text{ cups}$$

> 💡 **Shortcut with unit rate:** $6 \\div 4 = 1.5$ cups per serving, so $10$ servings need $10 \\times 1.5 = 15$ cups — same answer.`,
      },
      {
        id: 'rr4-scale-check',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A recipe for $3$ dozen cookies uses $2$ cups of sugar. How much sugar for $9$ dozen cookies?',
              options: ['$6$ cups', '$5$ cups', '$4$ cups', '$8$ cups'],
              correctAnswer: 0,
              explanation: '$9$ dozen is $3$ times $3$ dozen, so multiply sugar by $3$: $2 \\times 3 = 6$ cups. (Or solve $\\frac{3}{2}=\\frac{9}{x}$: $3x=18$, $x=6$.)',
            },
            {
              question: 'A smoothie uses $3$ bananas for $2$ servings. How many bananas for $1$ serving?',
              options: ['$1.5$ bananas', '$2$ bananas', '$1$ banana', '$3$ bananas'],
              correctAnswer: 0,
              explanation: 'Unit rate: $3 \\div 2 = 1.5$ bananas per serving.',
            },
          ],
        },
      },
      {
        id: 'rr4-map',
        type: 'text' as const,
        content: `## Map Scales

A **map scale** is a ratio: *map distance* to *real distance*. A scale of "$1$ inch $= 50$ miles" means every inch on paper stands for $50$ real miles.

### Example: The scale is $1$ inch $= 50$ miles. Two cities are $3.5$ inches apart on the map. How far apart are they really?

$$\\frac{1 \\text{ inch}}{50 \\text{ miles}} = \\frac{3.5 \\text{ inches}}{x \\text{ miles}}$$

$$1 \\cdot x = 50 \\cdot 3.5 \\;\\Rightarrow\\; x = 175 \\text{ miles}$$

> 💡 With a "$1$ to something" scale you can skip cross-multiplication: just **multiply** the map distance by the scale. $3.5 \\times 50 = 175$ miles.`,
      },
      {
        id: 'rr4-map-drill',
        type: 'input-boxes' as const,
        content: `**Map & Scale Practice** 🧮

**1)** Scale $1$ in $= 25$ mi. A road is $4$ inches long on the map. Real length $=\\,?$ miles.
**2)** Scale $1$ cm $= 8$ km. Two towns are $6$ cm apart. Real distance $=\\,?$ km.
**3)** A model car is built at scale $1:18$. The model is $9$ inches long. The real car is $\\,?$ inches long.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['100', '48', '162'],
          hint1: '$4 \\times 25 = 100$ miles.',
          hint2: '$6 \\times 8 = 48$ km.',
          hint3: 'Scale $1:18$ means real is $18\\times$ the model: $9 \\times 18 = 162$ inches.',
          explanation: '1) $4\\times 25 = 100$ mi.  2) $6\\times 8 = 48$ km.  3) $9\\times 18 = 162$ in.',
        },
      },
      {
        id: 'rr4-speed',
        type: 'text' as const,
        content: `## Distance, Rate, and Time

Speed is a rate, so the three quantities are tied together:

$$\\text{distance} = \\text{rate} \\times \\text{time} \\qquad \\text{rate} = \\frac{\\text{distance}}{\\text{time}} \\qquad \\text{time} = \\frac{\\text{distance}}{\\text{rate}}$$

### Example: A train goes $240$ miles in $4$ hours. At that rate, how far in $7$ hours?

First the unit rate: $240 \\div 4 = 60$ mph. Then $60 \\times 7 = 420$ miles.

### Example: How long to drive $300$ miles at $50$ mph?

$$\\text{time} = \\frac{300}{50} = 6 \\text{ hours}$$

> ⚠️ **Match the units.** If the rate is *miles per hour*, time must be in *hours* — not minutes.`,
      },
      {
        id: 'rr4-speed-check',
        type: 'multiple-choice' as const,
        content: `**Speed Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A cyclist rides at a steady $12$ mph. How far does she travel in $3$ hours?',
              options: ['$36$ miles', '$15$ miles', '$4$ miles', '$12$ miles'],
              correctAnswer: 0,
              explanation: 'distance $=$ rate $\\times$ time $= 12 \\times 3 = 36$ miles.',
            },
            {
              question: 'A car covers $180$ miles in $3$ hours. How long would $300$ miles take at the same speed?',
              options: ['$5$ hours', '$6$ hours', '$4$ hours', '$3$ hours'],
              correctAnswer: 0,
              explanation: 'Speed $= 180 \\div 3 = 60$ mph. Time $= 300 \\div 60 = 5$ hours.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'ratios-and-rates-prealgebra',
    sections: [
      {
        id: 'rr5-intro',
        type: 'text' as const,
        content: `# ⚖️ Ratios and Rates

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) write and simplify ratios, (2) find unit rates and the best buy, (3) solve proportions by cross-multiplying, and (4) apply all of it to recipes, maps, and speed. Let's put it together.`,
      },
      {
        id: 'rr5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Write a ratio | $a$ to $b$, $a:b$, or $\\dfrac{a}{b}$ (order matters) |
| Simplify a ratio | divide both numbers by their GCF |
| Find a unit rate | divide top by bottom ("per $1$") |
| Find the best buy | compare **unit prices**; lowest wins |
| Solve a proportion | cross-multiply, then divide |
| Scale / map / speed | set up a proportion, line up the units |

> ⚠️ Two reminders that catch most mistakes: keep the **order** of a ratio consistent, and **line up matching units** (top with top) when you build a proportion.`,
      },
      {
        id: 'rr5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

**1)** Simplify the ratio $24:36$ to lowest terms. Enter as a fraction like \`a/b\`.
**2)** $\\$7.50$ for $6$ apples is how many dollars per apple?  *(decimal)*
**3)** Solve $\\dfrac{x}{18} = \\dfrac{5}{6}$ for $x$.`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2/3', '1.25', '15'],
          hint1: 'GCF of $24$ and $36$ is $12$: $24\\div 12 = 2$, $36\\div 12 = 3$, giving $2/3$.',
          hint2: 'Unit price $= \\$7.50 \\div 6 = \\$1.25$ per apple.',
          hint3: 'Cross-multiply: $6x = 18\\cdot 5 = 90$, so $x = 90\\div 6 = 15$.',
          explanation: '1) $24:36 = 2/3$ (÷12).  2) $7.50/6 = 1.25$ per apple.  3) $6x = 90 \\Rightarrow x = 15$.',
        },
      },
      {
        id: 'rr5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $20$-oz box of cereal costs $\\$4.00$ and a $32$-oz box costs $\\$5.76$. Which is the better buy?',
              options: ['The $32$-oz box ($\\$0.18$/oz)', 'The $20$-oz box ($\\$0.20$/oz)', 'They cost the same per ounce', 'Not enough information'],
              correctAnswer: 0,
              explanation: '$\\$4.00 \\div 20 = \\$0.20$/oz; $\\$5.76 \\div 32 = \\$0.18$/oz. The $32$-oz box has the lower unit price, so it is the better buy.',
            },
            {
              question: 'On a map, $1$ inch represents $40$ miles. Two cities are $2.5$ inches apart. How far apart are they really?',
              options: ['$100$ miles', '$40$ miles', '$80$ miles', '$160$ miles'],
              correctAnswer: 0,
              explanation: 'Multiply map distance by the scale: $2.5 \\times 40 = 100$ miles.',
            },
          ],
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
              question: 'The ratio $15:20$ written in simplest form is:',
              options: ['$3:4$', '$4:5$', '$5:6$', '$15:20$'],
              correctAnswer: 0,
              explanation: 'GCF of $15$ and $20$ is $5$: $15\\div 5 = 3$, $20\\div 5 = 4$, so $3:4$.',
            },
            {
              question: 'Solve the proportion $\\dfrac{8}{12} = \\dfrac{x}{9}$.',
              options: ['$x = 6$', '$x = 4$', '$x = 7$', '$x = 12$'],
              correctAnswer: 0,
              explanation: 'Cross-multiply: $12x = 8\\cdot 9 = 72$, so $x = 72\\div 12 = 6$.',
            },
            {
              question: 'A runner covers $5$ miles in $40$ minutes. What is her unit rate in minutes per mile?',
              options: ['$8$ min/mile', '$5$ min/mile', '$40$ min/mile', '$200$ min/mile'],
              correctAnswer: 0,
              explanation: 'Minutes per mile $= 40 \\div 5 = 8$ minutes per mile.',
            },
          ],
        },
      },
    ],
  },
]
