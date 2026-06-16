import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Unit Rates with Fractions (Grade 7 Math, CCSS 7.RP.A.1).
 * Registry key / DB Topic.slug: 'unit-rates-fractions-grade7'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. Pitched at Grade 7:
 * ratios → unit rates → complex fractions (fraction ÷ fraction) → computing unit
 * rates when one or both quantities are fractions → real-world applications
 * (speed, price, recipes, work rate). LaTeX uses doubled backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'unit-rates-fractions-grade7',
    sections: [
      {
        id: 'urf1-intro',
        type: 'text' as const,
        content: `# 🏃 Unit Rates with Fractions

**Part 1 of 5 — Ratios, Rates, and "Per One"**

---

### Topics in This Part

| Section |
|---------|
| Ratios vs. Rates |
| What Makes a Rate a *Unit* Rate |
| Finding a Unit Rate by Dividing |

> 🔑 **Key Concept:** A **unit rate** tells you how much of one quantity goes with *exactly one* of another — like miles **per 1 hour** or dollars **per 1 pound**. To find it, you divide. This whole lesson is about doing that division when the numbers are fractions.`,
      },
      {
        id: 'urf1-ratios-rates',
        type: 'text' as const,
        content: `## Ratios, Rates, and Unit Rates

A **ratio** compares two quantities, like $3$ apples to $2$ oranges, written $3 : 2$ or $\\dfrac{3}{2}$.

A **rate** is a ratio that compares two quantities with **different units**, like $120$ miles in $2$ hours.

A **unit rate** is a rate written with a denominator of **$1$**:

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}} = \\frac{60 \\text{ miles}}{1 \\text{ hour}} = 60 \\text{ miles per hour}$$

| Phrase | What it is | Example |
|--------|-----------|---------|
| "$3$ to $2$" | ratio (same idea) | $3:2$ |
| "$120$ miles in $2$ hours" | rate | $\\dfrac{120 \\text{ mi}}{2 \\text{ hr}}$ |
| "$60$ miles **per hour**" | **unit rate** | $\\dfrac{60 \\text{ mi}}{1 \\text{ hr}}$ |

> 🔑 **The word "per" means "for every one."** Miles *per* hour = miles for every **one** hour. Dollars *per* pound = dollars for every **one** pound.`,
      },
      {
        id: 'urf1-classify',
        type: 'dropdown-select' as const,
        content: `**Name That Comparison** 🔽

Decide whether each phrase is a plain **ratio**, a **rate**, or a **unit rate**.`,
        exercise: {
          dropdowns: [
            { label: '"$4$ cups of flour to $3$ cups of sugar"', options: ['ratio', 'rate', 'unit rate'] },
            { label: '"$90$ heartbeats in $2$ minutes"', options: ['rate', 'ratio', 'unit rate'] },
            { label: '"$25$ miles per gallon"', options: ['unit rate', 'ratio', 'rate'] },
          ],
          correctAnswers: ['ratio', 'rate', 'unit rate'],
          hint1: 'A **ratio** compares two amounts of the *same* kind of thing (cups to cups).',
          hint2: 'A **rate** compares two *different* units but is not yet "per one."',
          hint3: 'A **unit rate** says "per one" — it has a denominator of $1$ (per gallon, per hour).',
          explanation: 'Cups to cups is a **ratio**. "$90$ beats in $2$ min" compares different units but isn’t per-one, so it’s a **rate**. "$25$ miles per gallon" is per *one* gallon, so it’s a **unit rate**.',
        },
      },
      {
        id: 'urf1-find-by-dividing',
        type: 'text' as const,
        content: `## Finding a Unit Rate

To turn any rate into a unit rate, **divide the first quantity by the second**:

$$\\text{unit rate} = \\frac{\\text{first quantity}}{\\text{second quantity}}$$

### Example: $\\$6$ for $3$ pounds of apples

$$\\frac{\\$6}{3 \\text{ lb}} = \\frac{\\$2}{1 \\text{ lb}} = \\$2 \\text{ per pound}$$

### Example: $150$ words in $5$ minutes

$$\\frac{150 \\text{ words}}{5 \\text{ min}} = \\frac{30 \\text{ words}}{1 \\text{ min}} = 30 \\text{ words per minute}$$

> 💡 The unit rate is just the **answer to a division problem**. Once the numbers become fractions (next part), the *idea* stays exactly the same — divide the top by the bottom.`,
      },
      {
        id: 'urf1-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a **unit rate**?',
              options: ['$\\$8$ for $4$ pounds', '$45$ miles per hour', '$3$ cups to $2$ cups', '$120$ miles in $3$ hours'],
              correctAnswer: 1,
              explanation: 'A unit rate compares a quantity to **one** of another unit. "$45$ miles per hour" means $45$ miles for *each* $1$ hour, so the denominator is $1$. The others still need to be divided down to a "per one" form.',
            },
            {
              question: 'A car travels $180$ miles in $3$ hours. What is the unit rate?',
              options: ['$540$ miles per hour', '$60$ miles per hour', '$3$ hours per mile', '$183$ miles per hour'],
              correctAnswer: 1,
              explanation: 'Divide the miles by the hours: $180 \\div 3 = 60$. The unit rate is $60$ miles per hour.',
            },
          ],
        },
      },
      {
        id: 'urf1-drill',
        type: 'input-boxes' as const,
        content: `**Find the Unit Rate** 🧮

Divide the first quantity by the second. Enter just the number.

**1)** $\\$20$ for $5$ notebooks $\\;\\Rightarrow\\;$ dollars per notebook $= \\,?$
**2)** $240$ words in $4$ minutes $\\;\\Rightarrow\\;$ words per minute $= \\,?$
**3)** $36$ students on $3$ buses $\\;\\Rightarrow\\;$ students per bus $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['4', '60', '12'],
          hint1: 'Unit rate $=$ first quantity $\\div$ second quantity.',
          hint2: '$\\$20 \\div 5 = 4$ dollars per notebook.',
          hint3: '$240 \\div 4 = 60$ words/min; $36 \\div 3 = 12$ students/bus.',
          explanation: '1) $20 \\div 5 = 4$ dollars per notebook.  2) $240 \\div 4 = 60$ words per minute.  3) $36 \\div 3 = 12$ students per bus.',
        },
      },
      {
        id: 'urf1-wrap',
        type: 'text' as const,
        content: `## Where We're Headed

So far every division came out to a whole number. But real problems sound like this:

> *"A snail crawls $\\frac{1}{2}$ meter in $\\frac{1}{4}$ hour. How fast is that **per hour**?"*

That's still a unit rate — we still divide $\\frac{1}{2}$ by $\\frac{1}{4}$ — but now we're dividing a **fraction by a fraction**. Part 2 gives you the one tool that makes that easy: the **complex fraction**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'unit-rates-fractions-grade7',
    sections: [
      {
        id: 'urf2-intro',
        type: 'text' as const,
        content: `# 🏃 Unit Rates with Fractions

**Part 2 of 5 — Complex Fractions: Fraction ÷ Fraction**

---

> 🔑 **The Idea:** A unit rate with fractions looks like $\\dfrac{1/2}{1/4}$ — a fraction *on top of* a fraction. That's a **complex fraction**, and it just means "$\\frac{1}{2}$ divided by $\\frac{1}{4}$." The trick: **dividing by a fraction is the same as multiplying by its reciprocal.**`,
      },
      {
        id: 'urf2-reciprocal',
        type: 'text' as const,
        content: `## Keep · Change · Flip

To divide by a fraction, **K**eep the first fraction, **C**hange $\\div$ to $\\times$, and **F**lip the second fraction (use its **reciprocal**):

$$\\frac{a}{b} \\div \\frac{c}{d} = \\frac{a}{b} \\times \\frac{d}{c}$$

The **reciprocal** of a fraction just swaps top and bottom:

| Fraction | Reciprocal |
|----------|-----------|
| $\\dfrac{1}{4}$ | $\\dfrac{4}{1} = 4$ |
| $\\dfrac{2}{3}$ | $\\dfrac{3}{2}$ |
| $\\dfrac{5}{8}$ | $\\dfrac{8}{5}$ |
| $3 = \\dfrac{3}{1}$ | $\\dfrac{1}{3}$ |

> ⚠️ Flip only the **second** fraction — the one you're dividing **by**. The first fraction stays exactly as it is.`,
      },
      {
        id: 'urf2-recip-drill',
        type: 'dropdown-select' as const,
        content: `**Reciprocals** 🔽

Choose the reciprocal of each number.`,
        exercise: {
          dropdowns: [
            { label: 'Reciprocal of $\\dfrac{3}{5}$:', options: ['$\\dfrac{5}{3}$', '$\\dfrac{3}{5}$', '$-\\dfrac{3}{5}$', '$\\dfrac{1}{15}$'] },
            { label: 'Reciprocal of $\\dfrac{1}{6}$:', options: ['$6$', '$\\dfrac{1}{6}$', '$\\dfrac{6}{6}$', '$-6$'] },
            { label: 'Reciprocal of $4$:', options: ['$\\dfrac{1}{4}$', '$4$', '$-4$', '$\\dfrac{4}{1}$'] },
          ],
          correctAnswers: ['$\\dfrac{5}{3}$', '$6$', '$\\dfrac{1}{4}$'],
          hint1: 'The reciprocal swaps the numerator and denominator.',
          hint2: 'A whole number $n$ equals $\\dfrac{n}{1}$, so its reciprocal is $\\dfrac{1}{n}$.',
          hint3: '$\\dfrac{1}{6}$ flips to $\\dfrac{6}{1} = 6$; $4 = \\dfrac{4}{1}$ flips to $\\dfrac{1}{4}$.',
          explanation: 'Swap top and bottom: $\\frac{3}{5}\\to\\frac{5}{3}$, $\\frac{1}{6}\\to 6$, and $4=\\frac{4}{1}\\to\\frac{1}{4}$.',
        },
      },
      {
        id: 'urf2-worked',
        type: 'text' as const,
        content: `## Worked Examples: Dividing Fractions

### Example: $\\dfrac{1}{2} \\div \\dfrac{1}{4}$

Keep $\\frac{1}{2}$, change to $\\times$, flip $\\frac{1}{4}$ to $\\frac{4}{1}$:

$$\\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$$

### Example: $\\dfrac{2}{3} \\div \\dfrac{4}{9}$

$$\\frac{2}{3} \\div \\frac{4}{9} = \\frac{2}{3} \\times \\frac{9}{4} = \\frac{18}{12} = \\frac{3}{2}$$

### Example: $\\dfrac{3}{4} \\div 6$

Write $6$ as $\\frac{6}{1}$, flip to $\\frac{1}{6}$:

$$\\frac{3}{4} \\div 6 = \\frac{3}{4} \\times \\frac{1}{6} = \\frac{3}{24} = \\frac{1}{8}$$

> 💡 Always **simplify** the answer. $\\frac{18}{12}$ and $\\frac{3}{2}$ are equal, but $\\frac{3}{2}$ is the finished form.`,
      },
      {
        id: 'urf2-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Rewrite $\\dfrac{2}{5} \\div \\dfrac{3}{7}$ as a multiplication.',
              options: ['$\\dfrac{2}{5} \\times \\dfrac{7}{3}$', '$\\dfrac{5}{2} \\times \\dfrac{3}{7}$', '$\\dfrac{2}{5} \\times \\dfrac{3}{7}$', '$\\dfrac{5}{2} \\times \\dfrac{7}{3}$'],
              correctAnswer: 0,
              explanation: 'Keep the first fraction, change $\\div$ to $\\times$, and flip the **second** fraction: $\\frac{2}{5} \\times \\frac{7}{3}$.',
            },
            {
              question: 'The complex fraction $\\dfrac{\\,1/3\\,}{\\,1/6\\,}$ equals:',
              options: ['$2$', '$\\dfrac{1}{18}$', '$\\dfrac{1}{2}$', '$18$'],
              correctAnswer: 0,
              explanation: 'A complex fraction means divide: $\\frac{1}{3} \\div \\frac{1}{6} = \\frac{1}{3} \\times \\frac{6}{1} = \\frac{6}{3} = 2$.',
            },
          ],
        },
      },
      {
        id: 'urf2-drill',
        type: 'input-boxes' as const,
        content: `**Divide the Fractions** 🧮

Use Keep–Change–Flip and simplify. Enter your answer as a fraction (like \`3/2\`) or a whole number.

**1)** $\\dfrac{1}{2} \\div \\dfrac{1}{3} = \\,?$
**2)** $\\dfrac{3}{4} \\div \\dfrac{1}{2} = \\,?$
**3)** $\\dfrac{5}{6} \\div \\dfrac{5}{12} = \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['3/2', '3/2', '2'],
          hint1: 'Flip the second fraction and multiply across.',
          hint2: '$\\frac{1}{2} \\times \\frac{3}{1} = \\frac{3}{2}$; $\\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$.',
          hint3: '$\\frac{5}{6} \\times \\frac{12}{5} = \\frac{60}{30} = 2$.',
          explanation: '1) $\\frac{1}{2} \\times \\frac{3}{1} = \\frac{3}{2}$.  2) $\\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$.  3) $\\frac{5}{6} \\times \\frac{12}{5} = \\frac{60}{30} = 2$.',
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'unit-rates-fractions-grade7',
    sections: [
      {
        id: 'urf3-intro',
        type: 'text' as const,
        content: `# 🏃 Unit Rates with Fractions

**Part 3 of 5 — Computing Unit Rates with Fractions**

---

> 🔑 **Putting it together:** A unit rate is "first quantity $\\div$ second quantity." When those quantities are fractions, you divide fractions — exactly the skill from Part 2. The answer comes out **per one** of the bottom unit.`,
      },
      {
        id: 'urf3-method',
        type: 'text' as const,
        content: `## The Method

To find a unit rate with fractions:

1. **Write the rate** as a (complex) fraction: $\\dfrac{\\text{first quantity}}{\\text{second quantity}}$.
2. **Divide** — Keep·Change·Flip.
3. **Simplify**, and attach the units: "(answer) per **one** of the bottom unit."

### Worked Example: the snail

A snail crawls $\\dfrac{1}{2}$ meter in $\\dfrac{1}{4}$ hour. How many **meters per hour**?

$$\\frac{1/2 \\text{ m}}{1/4 \\text{ hr}} = \\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\times \\frac{4}{1} = \\frac{4}{2} = 2$$

The snail crawls **$2$ meters per hour**.

> ✅ **Does it make sense?** It moved $\\frac{1}{2}$ m in just a *quarter* hour. In a *whole* hour (four quarters) it would go $4 \\times \\frac{1}{2} = 2$ m. ✓`,
      },
      {
        id: 'urf3-worked2',
        type: 'text' as const,
        content: `### Worked Example: paint

A painter uses $\\dfrac{3}{4}$ gallon of paint to cover $\\dfrac{1}{2}$ wall. How many **gallons per whole wall**?

We want gallons *per wall*, so gallons go on top and walls on the bottom:

$$\\frac{3/4 \\text{ gal}}{1/2 \\text{ wall}} = \\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$$

That's **$\\dfrac{3}{2} = 1\\dfrac{1}{2}$ gallons per wall**.

> ⚠️ **Watch what's on top!** "Gallons per wall" puts **gallons on top**. "Walls per gallon" would flip it. The unit you say *last* ("per ___") goes on the **bottom**.`,
      },
      {
        id: 'urf3-dropdown',
        type: 'dropdown-select' as const,
        content: `**Set It Up** 🔽

You walk $\\dfrac{3}{4}$ mile in $\\dfrac{1}{3}$ hour and want your speed in **miles per hour**.`,
        exercise: {
          dropdowns: [
            { label: 'What goes on top?', options: ['$\\dfrac{3}{4}$ (miles)', '$\\dfrac{1}{3}$ (hours)', '$1$', '$\\dfrac{4}{3}$'] },
            { label: 'What goes on the bottom?', options: ['$\\dfrac{1}{3}$ (hours)', '$\\dfrac{3}{4}$ (miles)', '$1$', '$3$'] },
            { label: 'Rewrite the division as:', options: ['$\\dfrac{3}{4} \\times \\dfrac{3}{1}$', '$\\dfrac{3}{4} \\times \\dfrac{1}{3}$', '$\\dfrac{4}{3} \\times \\dfrac{3}{1}$', '$\\dfrac{1}{3} \\times \\dfrac{4}{3}$'] },
            { label: 'The unit rate is:', options: ['$\\dfrac{9}{4}$ mph', '$\\dfrac{1}{4}$ mph', '$\\dfrac{3}{12}$ mph', '$\\dfrac{4}{9}$ mph'] },
          ],
          correctAnswers: ['$\\dfrac{3}{4}$ (miles)', '$\\dfrac{1}{3}$ (hours)', '$\\dfrac{3}{4} \\times \\dfrac{3}{1}$', '$\\dfrac{9}{4}$ mph'],
          hint1: 'You want miles **per hour**, so miles go on top and hours on the bottom.',
          hint2: 'Divide: $\\frac{3}{4} \\div \\frac{1}{3}$. Flip the $\\frac{1}{3}$ to $\\frac{3}{1}$.',
          hint3: '$\\frac{3}{4} \\times \\frac{3}{1} = \\frac{9}{4}$, which is $2\\frac{1}{4}$ miles per hour.',
          explanation: 'Miles on top, hours on bottom: $\\frac{3}{4} \\div \\frac{1}{3} = \\frac{3}{4} \\times \\frac{3}{1} = \\frac{9}{4}$ miles per hour.',
        },
      },
      {
        id: 'urf3-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A recipe uses $\\dfrac{2}{3}$ cup of flour for $\\dfrac{1}{4}$ batch. How much flour **per whole batch**?',
              options: ['$\\dfrac{8}{3}$ cups', '$\\dfrac{1}{6}$ cup', '$\\dfrac{2}{12}$ cup', '$\\dfrac{3}{8}$ cup'],
              correctAnswer: 0,
              explanation: 'Flour per batch $= \\frac{2}{3} \\div \\frac{1}{4} = \\frac{2}{3} \\times \\frac{4}{1} = \\frac{8}{3}$ cups (that’s $2\\frac{2}{3}$ cups).',
            },
            {
              question: 'A hose fills $\\dfrac{1}{6}$ of a pool in $\\dfrac{1}{2}$ hour. What fraction of the pool **per hour**?',
              options: ['$\\dfrac{1}{3}$', '$\\dfrac{1}{12}$', '$3$', '$\\dfrac{1}{2}$'],
              correctAnswer: 0,
              explanation: 'Pool per hour $= \\frac{1}{6} \\div \\frac{1}{2} = \\frac{1}{6} \\times \\frac{2}{1} = \\frac{2}{6} = \\frac{1}{3}$ of the pool per hour.',
            },
          ],
        },
      },
      {
        id: 'urf3-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Unit Rate** 🧮

Find each unit rate. Enter a fraction (like \`8/3\`) or a whole number.

**1)** $\\dfrac{1}{3}$ liter in $\\dfrac{1}{6}$ hour $\\;\\Rightarrow\\;$ liters per hour $= \\,?$
**2)** $\\dfrac{2}{5}$ mile in $\\dfrac{1}{10}$ hour $\\;\\Rightarrow\\;$ miles per hour $= \\,?$
**3)** $\\dfrac{3}{8}$ kg for $\\dfrac{3}{4}$ box $\\;\\Rightarrow\\;$ kg per box $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '4', '1/2'],
          hint1: 'Top $\\div$ bottom, then Keep·Change·Flip.',
          hint2: '$\\frac{1}{3} \\times \\frac{6}{1} = \\frac{6}{3} = 2$; $\\frac{2}{5} \\times \\frac{10}{1} = \\frac{20}{5} = 4$.',
          hint3: '$\\frac{3}{8} \\div \\frac{3}{4} = \\frac{3}{8} \\times \\frac{4}{3} = \\frac{12}{24} = \\frac{1}{2}$.',
          explanation: '1) $\\frac{1}{3} \\times \\frac{6}{1} = 2$ L/hr.  2) $\\frac{2}{5} \\times \\frac{10}{1} = 4$ mi/hr.  3) $\\frac{3}{8} \\times \\frac{4}{3} = \\frac{12}{24} = \\frac{1}{2}$ kg/box.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'unit-rates-fractions-grade7',
    sections: [
      {
        id: 'urf4-intro',
        type: 'text' as const,
        content: `# 🏃 Unit Rates with Fractions

**Part 4 of 5 — Real-World Applications**

---

> 🔑 **Why this matters:** Unit rates let you **compare** and **predict**. Which jar of peanut butter is the better deal? Who is reading faster? How long will the trip take? All of these become easy once you find the rate "per one."`,
      },
      {
        id: 'urf4-best-deal',
        type: 'text' as const,
        content: `## Comparing with Unit Rates (Better Buy)

To find the **better deal**, compute the price **per one unit** for each option, then compare.

### Example: which is cheaper per pound?

- **Option A:** $\\$3$ for $\\dfrac{3}{4}$ pound
- **Option B:** $\\$5$ for $\\dfrac{5}{4}$ pound

$$\\text{A: } \\frac{\\$3}{3/4} = 3 \\div \\frac{3}{4} = 3 \\times \\frac{4}{3} = \\frac{12}{3} = \\$4 \\text{ per lb}$$

$$\\text{B: } \\frac{\\$5}{5/4} = 5 \\div \\frac{5}{4} = 5 \\times \\frac{4}{5} = \\frac{20}{5} = \\$4 \\text{ per lb}$$

> 💡 They cost the **same** per pound — $\\$4$ each! A bigger price tag doesn't mean a worse deal until you check the **unit price**.`,
      },
      {
        id: 'urf4-mc',
        type: 'multiple-choice' as const,
        content: `**Better Buy** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Juice A costs $\\$2$ for $\\dfrac{1}{2}$ liter. Juice B costs $\\$3$ for $\\dfrac{1}{1}$ liter (1 L). Which is the better buy (lower price per liter)?',
              options: ['Juice B, at $\\$3$ per liter', 'Juice A, at $\\$4$ per liter', 'They are equal', 'Juice A, at $\\$2$ per liter'],
              correctAnswer: 0,
              explanation: 'A: $2 \\div \\frac{1}{2} = 2 \\times 2 = \\$4$ per liter. B: $3 \\div 1 = \\$3$ per liter. $\\$3 < \\$4$, so **Juice B** is the better buy.',
            },
            {
              question: 'Maria reads $\\dfrac{2}{3}$ page in $\\dfrac{1}{3}$ minute. What is her reading rate in pages per minute?',
              options: ['$2$ pages per minute', '$\\dfrac{2}{9}$ page per minute', '$\\dfrac{1}{2}$ page per minute', '$3$ pages per minute'],
              correctAnswer: 0,
              explanation: '$\\frac{2}{3} \\div \\frac{1}{3} = \\frac{2}{3} \\times \\frac{3}{1} = \\frac{6}{3} = 2$ pages per minute.',
            },
          ],
        },
      },
      {
        id: 'urf4-speed',
        type: 'text' as const,
        content: `## Speed, Work, and Predicting

A unit rate also lets you **scale up** to answer "how much in a full hour / full day / full anything."

### Example: jogging speed

Jordan jogs $\\dfrac{2}{3}$ mile in $\\dfrac{1}{6}$ hour. Find the speed, then the distance in a **full hour**.

$$\\text{speed} = \\frac{2}{3} \\div \\frac{1}{6} = \\frac{2}{3} \\times \\frac{6}{1} = \\frac{12}{3} = 4 \\text{ mph}$$

So in **one full hour** Jordan jogs $4$ miles. (And in $2$ hours, $8$ miles.)

> ✅ **Sanity check:** $\\frac{1}{6}$ hour is $10$ minutes. Going $\\frac{2}{3}$ mile every $10$ minutes is $6 \\times \\frac{2}{3} = 4$ miles in $60$ minutes. ✓`,
      },
      {
        id: 'urf4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Pick the Better Rate** 🔽

A factory robot paints $\\dfrac{3}{5}$ of a car in $\\dfrac{1}{4}$ hour.`,
        exercise: {
          dropdowns: [
            { label: 'Cars per hour as a division:', options: ['$\\dfrac{3}{5} \\div \\dfrac{1}{4}$', '$\\dfrac{1}{4} \\div \\dfrac{3}{5}$', '$\\dfrac{3}{5} \\times \\dfrac{1}{4}$', '$\\dfrac{5}{3} \\div 4$'] },
            { label: 'Keep·Change·Flip gives:', options: ['$\\dfrac{3}{5} \\times \\dfrac{4}{1}$', '$\\dfrac{5}{3} \\times \\dfrac{4}{1}$', '$\\dfrac{3}{5} \\times \\dfrac{1}{4}$', '$\\dfrac{3}{5} \\times \\dfrac{4}{4}$'] },
            { label: 'The unit rate is:', options: ['$\\dfrac{12}{5}$ cars per hour', '$\\dfrac{3}{20}$ car per hour', '$\\dfrac{5}{12}$ car per hour', '$12$ cars per hour'] },
          ],
          correctAnswers: ['$\\dfrac{3}{5} \\div \\dfrac{1}{4}$', '$\\dfrac{3}{5} \\times \\dfrac{4}{1}$', '$\\dfrac{12}{5}$ cars per hour'],
          hint1: 'Cars **per hour**: cars on top ($\\frac{3}{5}$), hours on bottom ($\\frac{1}{4}$).',
          hint2: 'Flip the $\\frac{1}{4}$ (the divisor) to $\\frac{4}{1}$.',
          hint3: '$\\frac{3}{5} \\times \\frac{4}{1} = \\frac{12}{5}$, which is $2\\frac{2}{5}$ cars per hour.',
          explanation: '$\\frac{3}{5} \\div \\frac{1}{4} = \\frac{3}{5} \\times \\frac{4}{1} = \\frac{12}{5}$ cars per hour.',
        },
      },
      {
        id: 'urf4-drill',
        type: 'input-boxes' as const,
        content: `**Apply It** 🧮

**1)** A pipe fills $\\dfrac{1}{4}$ of a tank in $\\dfrac{1}{8}$ hour. Tanks per hour $= \\,?$  *(whole number)*
**2)** Sugar costs $\\$2$ for $\\dfrac{2}{3}$ pound. Dollars **per pound** $= \\,?$  *(whole number)*
**3)** A runner goes $\\dfrac{1}{2}$ mile in $\\dfrac{1}{12}$ hour. Speed in miles per hour $= \\,?$  *(whole number)*`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '3', '6'],
          hint1: 'Each one is top $\\div$ bottom, Keep·Change·Flip.',
          hint2: '$\\frac{1}{4} \\div \\frac{1}{8} = \\frac{1}{4} \\times \\frac{8}{1} = \\frac{8}{4} = 2$.',
          hint3: '$2 \\div \\frac{2}{3} = 2 \\times \\frac{3}{2} = 3$; $\\frac{1}{2} \\div \\frac{1}{12} = \\frac{1}{2} \\times \\frac{12}{1} = 6$.',
          explanation: '1) $\\frac{1}{4} \\times \\frac{8}{1} = 2$ tanks/hr.  2) $2 \\times \\frac{3}{2} = 3$ dollars/lb.  3) $\\frac{1}{2} \\times \\frac{12}{1} = 6$ mph.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'unit-rates-fractions-grade7',
    sections: [
      {
        id: 'urf5-intro',
        type: 'text' as const,
        content: `# 🏃 Unit Rates with Fractions

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) recognize unit rates, (2) divide fractions with Keep·Change·Flip, (3) compute a unit rate from a complex fraction, and (4) use rates to compare and predict. Let's put it all together.`,
      },
      {
        id: 'urf5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find a unit rate | first quantity $\\div$ second quantity |
| Divide by a fraction | Keep·Change·**Flip** (multiply by reciprocal) |
| "$A$ per $B$" | $A$ on **top**, $B$ on the **bottom** |
| Reciprocal of $\\dfrac{c}{d}$ | $\\dfrac{d}{c}$ (whole number $n \\to \\dfrac{1}{n}$) |
| Better buy | smaller **price per unit** wins |

> ⚠️ Two reminders: **flip only the divisor** (the second fraction), and the unit you name after "**per**" always belongs on the **bottom**.`,
      },
      {
        id: 'urf5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A trail mix uses $\\dfrac{3}{4}$ cup of nuts for $\\dfrac{1}{2}$ batch. How many cups of nuts **per batch**?',
              options: ['$\\dfrac{3}{2}$ cups', '$\\dfrac{3}{8}$ cup', '$\\dfrac{2}{3}$ cup', '$\\dfrac{1}{4}$ cup'],
              correctAnswer: 0,
              explanation: '$\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\times \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2}$ cups per batch.',
            },
            {
              question: 'Which is the better buy? A: $\\$6$ for $\\dfrac{3}{4}$ lb. B: $\\$6$ for $\\dfrac{1}{2}$ lb.',
              options: ['A, at $\\$8$ per lb', 'B, at $\\$12$ per lb', 'They cost the same per pound', 'A, at $\\$4.50$ per lb'],
              correctAnswer: 0,
              explanation: 'A: $6 \\div \\frac{3}{4} = 6 \\times \\frac{4}{3} = \\$8$/lb. B: $6 \\div \\frac{1}{2} = 6 \\times 2 = \\$12$/lb. $\\$8 < \\$12$, so **A** is the better buy.',
            },
          ],
        },
      },
      {
        id: 'urf5-drill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

Enter a fraction (like \`5/2\`) or a whole number.

**1)** $\\dfrac{4}{5} \\div \\dfrac{2}{5} = \\,?$
**2)** $\\dfrac{5}{6}$ liter in $\\dfrac{1}{3}$ hour $\\;\\Rightarrow\\;$ liters per hour $= \\,?$
**3)** $\\$4$ for $\\dfrac{2}{3}$ pound $\\;\\Rightarrow\\;$ dollars per pound $= \\,?$`,
        exercise: {
          boxes: 3,
          correctAnswers: ['2', '5/2', '6'],
          hint1: 'Keep·Change·Flip, then simplify.',
          hint2: '$\\frac{4}{5} \\times \\frac{5}{2} = \\frac{20}{10} = 2$; $\\frac{5}{6} \\times \\frac{3}{1} = \\frac{15}{6} = \\frac{5}{2}$.',
          hint3: '$4 \\div \\frac{2}{3} = 4 \\times \\frac{3}{2} = \\frac{12}{2} = 6$.',
          explanation: '1) $\\frac{4}{5} \\times \\frac{5}{2} = \\frac{20}{10} = 2$.  2) $\\frac{5}{6} \\times \\frac{3}{1} = \\frac{15}{6} = \\frac{5}{2}$ L/hr.  3) $4 \\times \\frac{3}{2} = 6$ dollars/lb.',
        },
      },
      {
        id: 'urf5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the reciprocal you multiply by to compute $\\dfrac{2}{7} \\div \\dfrac{3}{5}$?',
              options: ['$\\dfrac{5}{3}$', '$\\dfrac{3}{5}$', '$\\dfrac{7}{2}$', '$\\dfrac{2}{7}$'],
              correctAnswer: 0,
              explanation: 'You flip the **divisor** $\\frac{3}{5}$ to its reciprocal $\\frac{5}{3}$, giving $\\frac{2}{7} \\times \\frac{5}{3}$.',
            },
            {
              question: 'A snail moves $\\dfrac{1}{4}$ meter in $\\dfrac{1}{8}$ hour. What is its speed in meters per hour?',
              options: ['$2$ meters per hour', '$\\dfrac{1}{32}$ meter per hour', '$\\dfrac{1}{2}$ meter per hour', '$8$ meters per hour'],
              correctAnswer: 0,
              explanation: '$\\frac{1}{4} \\div \\frac{1}{8} = \\frac{1}{4} \\times \\frac{8}{1} = \\frac{8}{4} = 2$ meters per hour.',
            },
            {
              question: 'Rice costs $\\$3$ for $\\dfrac{3}{4}$ pound. What is the unit price in dollars per pound?',
              options: ['$\\$4$ per pound', '$\\$2.25$ per pound', '$\\dfrac{1}{4}$ dollar per pound', '$\\$3$ per pound'],
              correctAnswer: 0,
              explanation: '$3 \\div \\frac{3}{4} = 3 \\times \\frac{4}{3} = \\frac{12}{3} = \\$4$ per pound.',
            },
          ],
        },
      },
    ],
  },
]
