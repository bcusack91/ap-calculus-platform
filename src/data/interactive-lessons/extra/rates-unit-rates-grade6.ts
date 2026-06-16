import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Rates and Unit Rates (Grade 6 Math).
 * Registry key / DB slug: 'rates-unit-rates-grade6'.
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'rates-unit-rates-grade6',
    sections: [
      {
        id: 'rur1-intro',
        type: 'text' as const,
        content: `# 🏎️ Rates and Unit Rates

**Part 1 of 5 — From Ratios to Rates**

---

### Topics in This Part

| Section |
|---------|
| What Makes a Ratio a *Rate* |
| The Two Numbers and Their Units |
| Reading a Rate Out Loud |

> 🔑 **Key Concept:** A **rate** is a ratio that compares two quantities with **different units** — like miles and hours, or dollars and pounds. Almost every "per" you've ever heard ("miles per hour", "dollars per pound") is a rate.`,
      },
      {
        id: 'rur1-ratio-vs-rate',
        type: 'text' as const,
        content: `## Ratio vs. Rate

A **ratio** compares two amounts. When those two amounts have **different units**, we give the ratio a special name: a **rate**.

| Comparison | Units | Ratio or Rate? |
|------------|-------|----------------|
| 3 cats to 2 dogs | animals to animals (same) | ratio |
| 4 cups flour to 1 cup sugar | cups to cups (same) | ratio |
| 120 miles to 2 hours | miles to **hours** (different) | **rate** |
| \\$6 for 3 pounds | dollars to **pounds** (different) | **rate** |

> 💡 **Tip:** If the two things being compared are measured in *different* units, you've got a rate. The little word **"per"** is your signal: *miles **per** hour*, *dollars **per** pound*, *students **per** teacher*.`,
      },
      {
        id: 'rur1-identify',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which comparison is a **rate** (not just a ratio)?',
              options: [
                '$150$ words typed in $3$ minutes',
                '$5$ red marbles to $4$ blue marbles',
                '$2$ boys for every $3$ girls',
                '$7$ apples to $10$ apples',
              ],
              correctAnswer: 0,
              explanation: 'Words and minutes are **different units**, so "150 words in 3 minutes" is a rate. The others compare the same kind of thing (marbles to marbles, people to people, apples to apples), so they are plain ratios.',
            },
            {
              question: 'The phrase "$60$ miles per hour" is a rate because it compares...',
              options: [
                'miles to hours — two different units',
                'two distances',
                'two amounts of time',
                'a number to itself',
              ],
              correctAnswer: 0,
              explanation: 'A rate compares quantities with different units. Here it is distance (miles) compared to time (hours), so it is a rate.',
            },
          ],
        },
      },
      {
        id: 'rur1-write-rate',
        type: 'text' as const,
        content: `## Writing a Rate

A rate is usually written as a fraction, with each quantity labeled by its unit:

$$\\text{rate} = \\frac{\\text{first quantity}}{\\text{second quantity}}$$

**Example:** A car travels $120$ miles in $2$ hours. As a rate:

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}}$$

We read this as "$120$ miles **per** $2$ hours." The word **per** means "for every" or "divided by."

> 🔑 **Key Idea:** Keep the **labels** (units) attached to the numbers. The labels tell you what the rate *means* and stop you from mixing things up.`,
      },
      {
        id: 'rur1-build-drill',
        type: 'dropdown-select' as const,
        content: `**Build the Rate** 🔽

A printer prints $48$ pages in $6$ minutes. Choose the correct piece for each blank.`,
        exercise: {
          dropdowns: [
            { label: 'Top number (numerator):', options: ['$48$ pages', '$6$ pages', '$48$ minutes', '$6$ minutes'] },
            { label: 'Bottom number (denominator):', options: ['$6$ minutes', '$48$ minutes', '$48$ pages', '$6$ pages'] },
            { label: 'This rate is read as:', options: ['$48$ pages per $6$ minutes', '$6$ pages per $48$ minutes', '$48$ minutes per $6$ pages', '$6$ minutes per $48$ pages'] },
          ],
          correctAnswers: ['$48$ pages', '$6$ minutes', '$48$ pages per $6$ minutes'],
          hint1: 'The thing being produced (pages) goes on top; the time it takes (minutes) goes on the bottom.',
          hint2: 'Keep the units with the numbers: $48$ pages over $6$ minutes.',
          hint3: 'Read top-then-bottom with the word "per" in the middle: "$48$ pages per $6$ minutes."',
          explanation: 'The rate is $\\dfrac{48 \\text{ pages}}{6 \\text{ minutes}}$, read as "$48$ pages per $6$ minutes."',
        },
      },
      {
        id: 'rur1-sort-mc',
        type: 'multiple-choice' as const,
        content: `**One More Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which phrase signals that a comparison is a rate?',
              options: [
                'the word "per"',
                'the word "and"',
                'the word "total"',
                'the word "equal"',
              ],
              correctAnswer: 0,
              explanation: 'The word "per" means "for every" and links two different units, which is exactly what a rate does: miles **per** hour, dollars **per** pound.',
            },
          ],
        },
      },
      {
        id: 'rur1-recap',
        type: 'text' as const,
        content: `## Recap

- A **ratio** compares two amounts.
- A **rate** is a special ratio comparing **different units** (the word **per** is the clue).
- Write a rate as a fraction with the units kept on: $\\dfrac{\\text{quantity 1}}{\\text{quantity 2}}$.

Right now our rates still have *both* numbers ($120$ miles per $2$ hours). In Part 2 we'll simplify every rate down to a single, super-useful number called the **unit rate**.`,
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'rates-unit-rates-grade6',
    sections: [
      {
        id: 'rur2-intro',
        type: 'text' as const,
        content: `# 🏎️ Rates and Unit Rates

**Part 2 of 5 — The Unit Rate**

---

> 🔑 **The Idea:** A **unit rate** tells you "how much for **exactly ONE**" — one hour, one pound, one minute. You find it by making the bottom number equal to $1$.`,
      },
      {
        id: 'rur2-what',
        type: 'text' as const,
        content: `## What Is a Unit Rate?

A **unit rate** is a rate with a denominator of **$1$**. The word *unit* means "one."

To get there, **divide the top number by the bottom number**:

$$\\text{unit rate} = \\frac{\\text{first quantity}}{\\text{second quantity}} \\;=\\; \\text{(first} \\div \\text{second) per } 1$$

### Worked Example: $120$ miles in $2$ hours

Divide miles by hours:

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}} = \\frac{120 \\div 2}{2 \\div 2} = \\frac{60 \\text{ miles}}{1 \\text{ hour}}$$

The unit rate is **$60$ miles per hour** (often written $60$ mph). That means in **one** hour the car goes $60$ miles.

> 💡 Notice we divided **both** the top and the bottom by $2$ so the bottom became $1$. The value of the rate doesn't change — we just renamed it "per one hour."`,
      },
      {
        id: 'rur2-find-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'To find a unit rate from $\\dfrac{\\$15}{3 \\text{ pounds}}$, you should...',
              options: [
                'divide $15$ by $3$',
                'multiply $15$ by $3$',
                'add $15$ and $3$',
                'divide $3$ by $15$',
              ],
              correctAnswer: 0,
              explanation: 'A unit rate has a denominator of $1$, so divide the top by the bottom: $15 \\div 3 = 5$. The unit rate is $\\$5$ per pound.',
            },
            {
              question: 'A unit rate always has a denominator of...',
              options: ['$1$', '$0$', '$10$', 'the bigger number'],
              correctAnswer: 0,
              explanation: '"Unit" means one. A unit rate is written "per **1**" of the second quantity — per $1$ hour, per $1$ pound, per $1$ minute.',
            },
          ],
        },
      },
      {
        id: 'rur2-worked2',
        type: 'text' as const,
        content: `### Worked Example: $\\$6$ for $3$ pounds of apples

Divide dollars by pounds:

$$\\frac{\\$6}{3 \\text{ lb}} = \\frac{6 \\div 3}{3 \\div 3} = \\frac{\\$2}{1 \\text{ lb}}$$

The unit rate is **\\$2 per pound**. This is also called the **unit price** — the cost of exactly one pound.

### Worked Example: $45$ words in $5$ minutes

$$\\frac{45 \\text{ words}}{5 \\text{ min}} = \\frac{45 \\div 5}{5 \\div 5} = \\frac{9 \\text{ words}}{1 \\text{ min}}$$

The unit rate is **$9$ words per minute**.

> 🔑 **Two special names to know:**
> - A unit rate for **price** is called a **unit price** (dollars per item).
> - A unit rate for **speed** is just called **speed** (miles per hour).`,
      },
      {
        id: 'rur2-drill',
        type: 'input-boxes' as const,
        content: `**Find the Unit Rate** 🧮

Divide the top by the bottom. Enter just the number for each unit rate.

**1)** $\\dfrac{84 \\text{ miles}}{4 \\text{ hours}} = \\,?$ miles per hour
**2)** $\\dfrac{\\$20}{5 \\text{ shirts}} = \\$\\,?$ per shirt
**3)** $\\dfrac{144 \\text{ beats}}{2 \\text{ minutes}} = \\,?$ beats per minute`,
        exercise: {
          boxes: 3,
          correctAnswers: ['21', '4', '72'],
          hint1: '$84 \\div 4 = 21$ miles per hour.',
          hint2: '$20 \\div 5 = 4$ dollars per shirt.',
          hint3: '$144 \\div 2 = 72$ beats per minute.',
          explanation: '1) $84 \\div 4 = 21$.  2) $20 \\div 5 = 4$.  3) $144 \\div 2 = 72$. In each, divide the top number by the bottom number.',
        },
      },
      {
        id: 'rur2-name-dropdown',
        type: 'dropdown-select' as const,
        content: `**Name That Unit Rate** 🔽

Match each unit rate to its common name and value.`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{\\$10}{2 \\text{ lb}}$ as a unit price:', options: ['$\\$5$ per pound', '$\\$2$ per pound', '$\\$20$ per pound', '$\\$0.20$ per pound'] },
            { label: '$\\dfrac{150 \\text{ miles}}{3 \\text{ hours}}$ as a speed:', options: ['$50$ miles per hour', '$3$ miles per hour', '$450$ miles per hour', '$0.02$ miles per hour'] },
          ],
          correctAnswers: ['$\\$5$ per pound', '$50$ miles per hour'],
          hint1: 'Divide the dollars by the pounds: $10 \\div 2 = 5$.',
          hint2: 'Divide the miles by the hours: $150 \\div 3 = 50$.',
          hint3: 'A unit price is dollars per one item; a speed is distance per one hour.',
          explanation: '$10 \\div 2 = \\$5$ per pound (a unit price); $150 \\div 3 = 50$ miles per hour (a speed).',
        },
      },
      {
        id: 'rur2-recap',
        type: 'text' as const,
        content: `## Recap

To turn any rate into a **unit rate**:

1. Write it as $\\dfrac{\\text{first}}{\\text{second}}$.
2. **Divide** the top by the bottom.
3. The answer is "per **1**" of the second quantity.

In Part 3 we'll see *why* unit rates are so handy: they let you instantly compare two deals and find the better buy.`,
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'rates-unit-rates-grade6',
    sections: [
      {
        id: 'rur3-intro',
        type: 'text' as const,
        content: `# 🏎️ Rates and Unit Rates

**Part 3 of 5 — Comparing with Unit Rates (Better Buy)**

---

> 🔑 **Why it works:** Two deals are hard to compare when they have different sizes. Boil each down to its **unit price** ("per one") and the comparison becomes obvious — just pick the smaller price per item.`,
      },
      {
        id: 'rur3-betterbuy',
        type: 'text' as const,
        content: `## Finding the Better Buy

When you shop, the **lower unit price** is the better deal (you pay less for each one).

### Worked Example

- **Store A:** $12$ granola bars for $\\$6$
- **Store B:** $8$ granola bars for $\\$4.80$

Find each **unit price** (dollars per bar) by dividing cost by quantity:

$$\\text{Store A: } \\frac{\\$6}{12} = \\$0.50 \\text{ per bar}$$

$$\\text{Store B: } \\frac{\\$4.80}{8} = \\$0.60 \\text{ per bar}$$

Since $\\$0.50 < \\$0.60$, **Store A is the better buy** — each bar costs less.

> 💡 **Golden rule for shopping:** lower dollars-per-item = better deal. (For *speed* or *production*, you usually want the **higher** unit rate instead — more done per unit of time.)`,
      },
      {
        id: 'rur3-betterbuy-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Juice A: $\\$3.00$ for $4$ bottles. Juice B: $\\$5.00$ for $10$ bottles. Which is the better buy?',
              options: [
                'Juice B — $\\$0.50$ per bottle',
                'Juice A — $\\$0.75$ per bottle',
                'They cost the same per bottle',
                'Juice A — $\\$0.50$ per bottle',
              ],
              correctAnswer: 0,
              explanation: 'Juice A: $3.00 \\div 4 = \\$0.75$ per bottle. Juice B: $5.00 \\div 10 = \\$0.50$ per bottle. Juice B is cheaper per bottle, so it is the better buy.',
            },
            {
              question: 'When comparing **unit PRICES**, the better buy is the one with the...',
              options: [
                'lower price per item',
                'higher price per item',
                'bigger total price',
                'more items, no matter the price',
              ],
              correctAnswer: 0,
              explanation: 'A lower price per item means you pay less for each one, so the lower unit price is the better buy.',
            },
          ],
        },
      },
      {
        id: 'rur3-speed',
        type: 'text' as const,
        content: `## Comparing Speeds (Higher Is Faster)

Unit rates also compare **speed**. Here the **bigger** unit rate is faster.

### Worked Example

- **Runner 1:** $300$ meters in $50$ seconds
- **Runner 2:** $400$ meters in $80$ seconds

$$\\text{Runner 1: } \\frac{300}{50} = 6 \\text{ m/s}$$

$$\\text{Runner 2: } \\frac{400}{80} = 5 \\text{ m/s}$$

Runner 1 covers $6$ meters each second vs. $5$ — so **Runner 1 is faster**.

> ⚠️ **Watch the direction!** For *price*, smaller is better. For *speed* or *work done*, larger is better. Always ask: "Do I want this number high or low?"`,
      },
      {
        id: 'rur3-direction-dropdown',
        type: 'dropdown-select' as const,
        content: `**High or Low?** 🔽

Decide whether you want the unit rate to be **bigger** or **smaller** to "win."`,
        exercise: {
          dropdowns: [
            { label: 'Choosing the cheaper cereal (price per ounce):', options: ['want it smaller', 'want it bigger'] },
            { label: 'Choosing the faster runner (meters per second):', options: ['want it bigger', 'want it smaller'] },
            { label: 'Choosing the printer that finishes first (pages per minute):', options: ['want it bigger', 'want it smaller'] },
          ],
          correctAnswers: ['want it smaller', 'want it bigger', 'want it bigger'],
          hint1: 'For price, a smaller number means you pay less per item.',
          hint2: 'For speed, a bigger number means more distance each second — that is faster.',
          hint3: 'More pages per minute means the printer gets done sooner, so bigger is better.',
          explanation: 'Lower is better for **price**; higher is better for **speed** and **work done** (more produced per unit of time).',
        },
      },
      {
        id: 'rur3-drill',
        type: 'input-boxes' as const,
        content: `**Compare the Deals** 🧮

Find each unit price, then answer.

**1)** $6$ pens for $\\$3$. Unit price $= \\$\\,?$ per pen.
**2)** $10$ pens for $\\$4$. Unit price $= \\$\\,?$ per pen *(decimal)*.
**3)** Which pack is the better buy — type **1** or **2**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.5', '0.4', '2'],
          hint1: '$3 \\div 6 = 0.5$, so pack 1 is $\\$0.50$ per pen.',
          hint2: '$4 \\div 10 = 0.4$, so pack 2 is $\\$0.40$ per pen.',
          hint3: 'Lower price per pen wins. $\\$0.40 < \\$0.50$, so pack **2** is the better buy.',
          explanation: '1) $3 \\div 6 = \\$0.50$.  2) $4 \\div 10 = \\$0.40$.  3) Pack **2** is cheaper per pen, so it is the better buy.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'rates-unit-rates-grade6',
    sections: [
      {
        id: 'rur4-intro',
        type: 'text' as const,
        content: `# 🏎️ Rates and Unit Rates

**Part 4 of 5 — Using Unit Rates to Solve Problems**

---

> 🔑 **Big Payoff:** Once you know the unit rate, you can **scale up or down** to any amount — multiply the unit rate to find a total, or divide a total to find an amount of time, distance, or money.`,
      },
      {
        id: 'rur4-scaleup',
        type: 'text' as const,
        content: `## Scaling Up: Multiply by the Unit Rate

If you know "how much for one," multiply to find "how much for many."

$$\\text{total} = \\text{unit rate} \\times \\text{number of units}$$

### Worked Example

Apples cost $\\$2$ per pound. How much for $7$ pounds?

$$\\$2 \\text{ per lb} \\times 7 \\text{ lb} = \\$14$$

### Worked Example

A car drives $60$ miles per hour. How far in $4$ hours?

$$60 \\text{ mph} \\times 4 \\text{ h} = 240 \\text{ miles}$$

> 💡 The unit rate is like a **recipe per one** — repeat it as many times as you need.`,
      },
      {
        id: 'rur4-scaleup-mc',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A printer prints $9$ pages per minute. How many pages in $5$ minutes?',
              options: ['$45$ pages', '$14$ pages', '$1.8$ pages', '$95$ pages'],
              correctAnswer: 0,
              explanation: 'Multiply the unit rate by the time: $9 \\text{ pages/min} \\times 5 \\text{ min} = 45$ pages.',
            },
            {
              question: 'Bananas are $\\$0.60$ per pound. What is the cost of $3$ pounds?',
              options: ['$\\$1.80$', '$\\$0.20$', '$\\$3.60$', '$\\$2.00$'],
              correctAnswer: 0,
              explanation: 'Multiply unit price by pounds: $\\$0.60 \\times 3 = \\$1.80$.',
            },
          ],
        },
      },
      {
        id: 'rur4-scaledown',
        type: 'text' as const,
        content: `## Scaling Down: Divide by the Unit Rate

If you know the unit rate and the **total**, divide to find the missing amount.

$$\\text{number of units} = \\frac{\\text{total}}{\\text{unit rate}}$$

### Worked Example

A car goes $60$ miles per hour. How long to drive $180$ miles?

$$\\frac{180 \\text{ miles}}{60 \\text{ mph}} = 3 \\text{ hours}$$

### Worked Example

Stickers cost $\\$0.25$ each. How many can you buy with $\\$2.00$?

$$\\frac{\\$2.00}{\\$0.25 \\text{ per sticker}} = 8 \\text{ stickers}$$

> ⚠️ **Check your units!** When you *multiply* a unit rate by units, the bottom unit cancels and you get a total. When you *divide* a total by a unit rate, you get back a number of units.`,
      },
      {
        id: 'rur4-dropdown',
        type: 'dropdown-select' as const,
        content: `**Multiply or Divide?** 🔽

For each problem, decide the operation and the answer. Use the unit rate given.`,
        exercise: {
          dropdowns: [
            { label: 'At $5$ km per hour, distance in $3$ hours:', options: ['multiply → $15$ km', 'divide → $15$ km', 'multiply → $8$ km', 'divide → $1.67$ km'] },
            { label: 'At $5$ km per hour, time to go $20$ km:', options: ['divide → $4$ hours', 'multiply → $100$ hours', 'divide → $0.25$ hours', 'multiply → $25$ hours'] },
            { label: 'At $\\$3$ per book, books bought with $\\$21$:', options: ['divide → $7$ books', 'multiply → $63$ books', 'divide → $24$ books', 'multiply → $18$ books'] },
          ],
          correctAnswers: ['multiply → $15$ km', 'divide → $4$ hours', 'divide → $7$ books'],
          hint1: 'Have the rate and the time, want the distance → **multiply**: $5 \\times 3 = 15$ km.',
          hint2: 'Have the rate and the distance, want the time → **divide**: $20 \\div 5 = 4$ hours.',
          hint3: 'Have a unit price and total money, want the count → **divide**: $21 \\div 3 = 7$ books.',
          explanation: 'Multiply the unit rate when you want a total; divide the total by the unit rate when you want the number of units.',
        },
      },
      {
        id: 'rur4-drill',
        type: 'input-boxes' as const,
        content: `**Put It to Work** 🧮

**1)** A faucet fills $4$ liters per minute. How many liters in $9$ minutes? $\\,?$ L
**2)** Oranges cost $\\$3$ per bag. How many bags for $\\$18$? $\\,?$ bags
**3)** A train travels $80$ miles per hour. How long to go $400$ miles? $\\,?$ hours`,
        exercise: {
          boxes: 3,
          correctAnswers: ['36', '6', '5'],
          hint1: 'Multiply: $4 \\text{ L/min} \\times 9 \\text{ min} = 36$ L.',
          hint2: 'Divide the total money by the price per bag: $18 \\div 3 = 6$ bags.',
          hint3: 'Divide the distance by the speed: $400 \\div 80 = 5$ hours.',
          explanation: '1) $4 \\times 9 = 36$ L (multiply).  2) $18 \\div 3 = 6$ bags (divide).  3) $400 \\div 80 = 5$ hours (divide).',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'rates-unit-rates-grade6',
    sections: [
      {
        id: 'rur5-intro',
        type: 'text' as const,
        content: `# 🏎️ Rates and Unit Rates

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell a rate from a ratio, (2) find a unit rate, (3) compare deals and speeds, and (4) use a unit rate to scale up or down. Let's put it all together.`,
      },
      {
        id: 'rur5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Spot a rate | different units → it's a rate (look for **per**) |
| Find a unit rate | divide top $\\div$ bottom → "per $1$" |
| Better buy | compute unit price; pick the **lower** one |
| Faster speed | compute unit rate; pick the **higher** one |
| Find a total | unit rate $\\times$ number of units |
| Find number of units | total $\\div$ unit rate |

> ⚠️ **The classic trap:** lower is better for **price**, but higher is better for **speed/work**. Always ask whether you want the number big or small.`,
      },
      {
        id: 'rur5-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A recipe uses $200$ grams of flour for $8$ cookies. What is the unit rate in grams per cookie?',
              options: ['$25$ grams per cookie', '$8$ grams per cookie', '$1600$ grams per cookie', '$0.04$ grams per cookie'],
              correctAnswer: 0,
              explanation: 'Divide grams by cookies: $200 \\div 8 = 25$ grams per cookie.',
            },
            {
              question: 'A car uses $6$ gallons to drive $192$ miles. What is its gas mileage (miles per gallon)?',
              options: ['$32$ miles per gallon', '$1152$ miles per gallon', '$6$ miles per gallon', '$0.03$ miles per gallon'],
              correctAnswer: 0,
              explanation: 'Divide miles by gallons: $192 \\div 6 = 32$ miles per gallon.',
            },
          ],
        },
      },
      {
        id: 'rur5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**One More Set** 🧮

**1)** $\\$1.50$ for $5$ apples. Unit price $= \\$\\,?$ per apple *(decimal)*.
**2)** At $7$ pages per minute, pages read in $6$ minutes $= \\,?$ pages.
**3)** Pack X: $4$ for $\\$1.00$ ($\\$0.25$ each). Pack Y: $10$ for $\\$2.00$ ($\\$0.20$ each). Which is the better buy — type **X** or **Y**?`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.3', '42', 'Y'],
          hint1: '$1.50 \\div 5 = 0.30$, so $\\$0.30$ per apple.',
          hint2: 'Multiply the unit rate by the time: $7 \\times 6 = 42$ pages.',
          hint3: 'Lower price per item wins: $\\$0.20 < \\$0.25$, so Pack **Y**.',
          explanation: '1) $1.50 \\div 5 = \\$0.30$.  2) $7 \\times 6 = 42$ pages.  3) Pack **Y** at $\\$0.20$ each beats Pack X at $\\$0.25$ each.',
        },
      },
      {
        id: 'rur5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which of these is a **unit rate**?',
              options: [
                '$55$ miles per $1$ hour',
                '$120$ miles per $2$ hours',
                '$3$ cups to $2$ cups',
                '$48$ pages in $6$ minutes',
              ],
              correctAnswer: 0,
              explanation: 'A unit rate has a denominator of $1$. "$55$ miles per $1$ hour" is already per one hour. The others either aren\'t per $1$ or compare the same units.',
            },
            {
              question: 'Granola is $\\$4$ for $5$ pounds. What is the unit price per pound?',
              options: ['$\\$0.80$ per pound', '$\\$1.25$ per pound', '$\\$20$ per pound', '$\\$9$ per pound'],
              correctAnswer: 0,
              explanation: 'Divide dollars by pounds: $4 \\div 5 = \\$0.80$ per pound.',
            },
            {
              question: 'A hose pours $3$ gallons per minute. How many gallons in $12$ minutes?',
              options: ['$36$ gallons', '$15$ gallons', '$4$ gallons', '$9$ gallons'],
              correctAnswer: 0,
              explanation: 'Multiply the unit rate by the time: $3 \\text{ gal/min} \\times 12 \\text{ min} = 36$ gallons.',
            },
          ],
        },
      },
    ],
  },
]
