import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Unit Rates (Pre-Algebra).
 * Registry key: 'unit-rates' (matches the DB Topic.slug, no alias needed).
 * 5 parts, gold-standard structure: teach → worked examples → interactive practice
 * (multiple-choice + input-boxes + dropdown) → exit quiz. LaTeX uses doubled
 * backslashes (template-literal strings).
 *
 * CURRENCY CONVENTION: every dollar amount is written math-wrapped as `$\\$N$`
 * (renders `\\$N` inside KaTeX). This is the only form that is safe in BOTH render
 * paths — the markdown/remark-math path used for `text` content AND the
 * renderRichText path used for multiple-choice / dropdown options, questions,
 * hints, and explanations — and it can never collide with neighbouring inline math.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'unit-rates',
    sections: [
      {
        id: 'ur1-intro',
        type: 'text' as const,
        content: `# ⚡ Unit Rates

**Part 1 of 5 — From Ratios to Rates to Unit Rates**

---

### Topics in This Part

| Section |
|---------|
| Ratios vs. Rates |
| What Makes a Rate a *Unit* Rate |
| Saying "per 1" Out Loud |

> 🔑 **Key Concept:** A **unit rate** tells you how much of one quantity goes with **exactly one** of another — like *miles per **1** hour* or *dollars per **1** pound*. Once you can find a unit rate, comparing deals, speeds, and recipes becomes easy.`,
      },
      {
        id: 'ur1-ratios-rates',
        type: 'text' as const,
        content: `## Ratios, Rates, and Units

A **ratio** compares two quantities. A **rate** is a special ratio that compares two quantities **with different units**.

| Comparison | Different units? | It's a… |
|------------|------------------|---------|
| $3$ cups flour to $2$ cups sugar | No (both cups) | ratio |
| $120$ miles to $2$ hours | Yes (miles vs. hours) | rate |
| \\$6 for $3$ pounds | Yes (dollars vs. pounds) | rate |

A rate is usually written as a fraction, keeping the units attached:

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}} \\qquad \\frac{6 \\text{ dollars}}{3 \\text{ pounds}}$$

> 💡 The word **"per"** is your signal. "Miles **per** hour," "dollars **per** pound," and "students **per** teacher" are all rates.`,
      },
      {
        id: 'ur1-recognize',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which comparison is a RATE (not just a ratio)?',
              options: [
                '$5$ red marbles to $3$ blue marbles',
                '$150$ words typed in $5$ minutes',
                '$2$ boys for every $3$ girls',
                '$7$ apples to $4$ apples',
              ],
              correctAnswer: 1,
              explanation: 'A rate compares quantities with DIFFERENT units. "Words" and "minutes" are different units, so $150$ words in $5$ minutes is a rate. The others compare like units (marbles to marbles, people to people, apples to apples).',
            },
            {
              question: 'The phrase "miles per gallon" is a rate that compares:',
              options: [
                'distance to distance',
                'distance to volume of fuel',
                'time to distance',
                'volume to volume',
              ],
              correctAnswer: 1,
              explanation: '"Miles" measures distance and "gallons" measures a volume of fuel. "Per" tells you it is a rate comparing those two different units.',
            },
          ],
        },
      },
      {
        id: 'ur1-what-is-unit-rate',
        type: 'text' as const,
        content: `## What Makes It a *Unit* Rate

A **unit rate** is a rate whose **second quantity is exactly 1**.

$$\\frac{120 \\text{ miles}}{2 \\text{ hours}} \\;\\longrightarrow\\; \\frac{60 \\text{ miles}}{1 \\text{ hour}} = 60 \\text{ miles per hour}$$

To get there, we **divided both the top and bottom by 2** so the bottom became $1$:

$$\\frac{120 \\div 2}{2 \\div 2} = \\frac{60}{1}$$

| Rate | Unit rate | Read it as |
|------|-----------|------------|
| $\\dfrac{120 \\text{ mi}}{2 \\text{ hr}}$ | $\\dfrac{60 \\text{ mi}}{1 \\text{ hr}}$ | $60$ miles per hour |
| $\\dfrac{6 \\text{ dollars}}{3 \\text{ lb}}$ | $\\dfrac{2 \\text{ dollars}}{1 \\text{ lb}}$ | \\$2 per pound |
| $\\dfrac{45 \\text{ words}}{5 \\text{ min}}$ | $\\dfrac{9 \\text{ words}}{1 \\text{ min}}$ | $9$ words per minute |

> 🔑 **Key Idea:** A unit rate always has a **denominator of 1**, so we usually just say the single number and the units — like "$60$ miles per hour."`,
      },
      {
        id: 'ur1-match-dropdown',
        type: 'dropdown-select' as const,
        content: `**Read the Unit Rate** 🔽

For each rate, pick the matching unit rate (denominator $= 1$).`,
        exercise: {
          dropdowns: [
            { label: '$\\dfrac{10 \\text{ dollars}}{2 \\text{ hours}}$ becomes:', options: ['$5$ dollars per hour', '$2$ dollars per hour', '$20$ dollars per hour', '$10$ dollars per hour'] },
            { label: '$\\dfrac{30 \\text{ students}}{2 \\text{ teachers}}$ becomes:', options: ['$15$ students per teacher', '$60$ students per teacher', '$2$ students per teacher', '$30$ students per teacher'] },
            { label: '$\\dfrac{100 \\text{ miles}}{4 \\text{ gallons}}$ becomes:', options: ['$25$ miles per gallon', '$400$ miles per gallon', '$4$ miles per gallon', '$50$ miles per gallon'] },
          ],
          correctAnswers: ['$5$ dollars per hour', '$15$ students per teacher', '$25$ miles per gallon'],
          hint1: 'Divide the top by the bottom so the bottom becomes $1$. $10 \\div 2 = 5$.',
          hint2: 'Students per teacher: $30 \\div 2 = 15$.',
          hint3: 'Miles per gallon: $100 \\div 4 = 25$.',
          explanation: '$10\\div2 = 5$ dollars/hr, $30\\div2 = 15$ students/teacher, $100\\div4 = 25$ miles/gallon. Each unit rate has a denominator of $1$.',
        },
      },
      {
        id: 'ur1-first-drill',
        type: 'input-boxes' as const,
        content: `**Your First Unit Rates** 🧮

Find each unit rate (the "per 1" amount). Enter just the number.

**1)** $\\dfrac{18 \\text{ cookies}}{3 \\text{ kids}}$ → ? cookies per kid
**2)** $\\dfrac{24 \\text{ dollars}}{6 \\text{ tickets}}$ → ? dollars per ticket
**3)** $\\dfrac{250 \\text{ miles}}{5 \\text{ hours}}$ → ? miles per hour`,
        exercise: {
          boxes: 3,
          correctAnswers: ['6', '4', '50'],
          hint1: 'Cookies per kid: $18 \\div 3 = 6$.',
          hint2: 'Dollars per ticket: $24 \\div 6 = 4$.',
          hint3: 'Miles per hour: $250 \\div 5 = 50$.',
          explanation: '1) $18 \\div 3 = 6$ cookies per kid.  2) $24 \\div 6 = 4$ dollars per ticket.  3) $250 \\div 5 = 50$ miles per hour. Each time you divide the top by the bottom.',
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'unit-rates',
    sections: [
      {
        id: 'ur2-intro',
        type: 'text' as const,
        content: `# ⚡ Unit Rates

**Part 2 of 5 — Computing Unit Rates by Division**

---

> 🔑 **The One Rule:** To find a unit rate, **divide the first quantity by the second quantity**. The unit you want "per 1" of always goes on the **bottom** (the divisor).`,
      },
      {
        id: 'ur2-method',
        type: 'text' as const,
        content: `## The Division Method

A unit rate is just a division problem. The trick is putting the right quantity on the bottom.

$$\\text{unit rate} = \\frac{\\text{first quantity}}{\\text{second quantity}}$$

Whatever follows the word **"per"** is the **denominator** (the thing you want one of).

### Worked Example: dollars **per** pound

\\$15 buys $4$ pounds of grapes. Find the price **per pound**. "Per pound" means pounds go on the bottom:

$$\\frac{15 \\text{ dollars}}{4 \\text{ lb}} = 15 \\div 4 = 3.75 \\text{ per pound}$$

That is \\$3.75 per pound.

### Worked Example: miles **per** hour

A car travels $180$ miles in $3$ hours:

$$\\frac{180 \\text{ mi}}{3 \\text{ hr}} = 180 \\div 3 = 60 \\text{ miles per hour}$$

> 💡 Two different unit rates live inside every rate. From "\\$15 for $4$ lb" you can also find **pounds per dollar**: $4 \\div 15 \\approx 0.27$ lb per dollar. Pick whichever the question asks for.`,
      },
      {
        id: 'ur2-which-on-bottom',
        type: 'dropdown-select' as const,
        content: `**Which Goes on the Bottom?** 🔽

The word after "per" is the denominator. Choose the correct division for each.`,
        exercise: {
          dropdowns: [
            { label: '$\\$20$ for $5$ shirts — price PER shirt:', options: ['$20 \\div 5$', '$5 \\div 20$', '$20 \\times 5$', '$20 + 5$'] },
            { label: '$84$ heartbeats in $60$ seconds — beats PER second:', options: ['$84 \\div 60$', '$60 \\div 84$', '$84 \\times 60$', '$60 - 84$'] },
            { label: '$3$ liters of paint for $48$ square feet — square feet PER liter:', options: ['$48 \\div 3$', '$3 \\div 48$', '$48 \\times 3$', '$3 + 48$'] },
          ],
          correctAnswers: ['$20 \\div 5$', '$84 \\div 60$', '$48 \\div 3$'],
          hint1: 'Price per shirt → shirts on the bottom → $20 \\div 5$.',
          hint2: 'Beats per second → seconds on the bottom → $84 \\div 60$.',
          hint3: 'Square feet per liter → liters on the bottom → $48 \\div 3$.',
          explanation: 'Whatever comes after "per" is the divisor (bottom). Per shirt: $20\\div5=4$. Per second: $84\\div60=1.4$. Per liter: $48\\div3=16$.',
        },
      },
      {
        id: 'ur2-divide-drill',
        type: 'input-boxes' as const,
        content: `**Compute the Unit Rate** 🧮

Divide to find each unit rate. Decimals are fine; round to the hundredth if it doesn't come out evenly.

**1)** $312$ miles on $12$ gallons → ? miles per gallon
**2)** \\$5.40 for $6$ apples → ? dollars per apple
**3)** $144$ pages read in $18$ minutes → ? pages per minute`,
        exercise: {
          boxes: 3,
          correctAnswers: ['26', '0.9', '8'],
          hint1: 'Miles per gallon: $312 \\div 12 = 26$.',
          hint2: 'Dollars per apple: $5.40 \\div 6 = 0.90$.',
          hint3: 'Pages per minute: $144 \\div 18 = 8$.',
          explanation: '1) $312 \\div 12 = 26$ mi/gal.  2) $5.40 \\div 6 = 0.90$ dollars/apple.  3) $144 \\div 18 = 8$ pages/min.',
        },
      },
      {
        id: 'ur2-fractions',
        type: 'text' as const,
        content: `## Unit Rates With Fractions

Sometimes a quantity is a fraction. The rule is the same: **divide the top by the bottom**. To divide by a fraction, **multiply by its reciprocal**.

### Worked Example

A snail crawls $\\dfrac{3}{4}$ mile in $\\dfrac{1}{2}$ hour. Find its speed in **miles per hour**. "Per hour" means hours on the bottom:

$$\\frac{3}{4} \\div \\frac{1}{2} = \\frac{3}{4} \\cdot \\frac{2}{1} = \\frac{6}{4} = \\frac{3}{2} = 1.5 \\text{ mph}$$

So the snail travels **$1.5$ miles per hour**.

> ⚠️ **Watch out:** dividing by a number *less than 1* makes the answer **bigger**. Going $\\frac{3}{4}$ mile in *only* half an hour means more than $\\frac{3}{4}$ mile in a full hour — that's why $1.5 > 0.75$.`,
      },
      {
        id: 'ur2-fraction-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A recipe uses $\\frac{1}{2}$ cup of sugar for every $\\frac{1}{4}$ batch. How much sugar per FULL batch?',
              options: ['$2$ cups', '$\\frac{1}{8}$ cup', '$\\frac{3}{4}$ cup', '$\\frac{1}{2}$ cup'],
              correctAnswer: 0,
              explanation: 'Sugar per batch $= \\frac{1}{2} \\div \\frac{1}{4} = \\frac{1}{2} \\cdot \\frac{4}{1} = \\frac{4}{2} = 2$ cups per batch.',
            },
            {
              question: 'A printer makes $\\frac{2}{3}$ of a page in $\\frac{1}{6}$ minute. Pages per minute?',
              options: ['$4$ pages', '$\\frac{1}{9}$ page', '$\\frac{2}{3}$ page', '$\\frac{1}{4}$ page'],
              correctAnswer: 0,
              explanation: 'Pages per minute $= \\frac{2}{3} \\div \\frac{1}{6} = \\frac{2}{3} \\cdot \\frac{6}{1} = \\frac{12}{3} = 4$ pages per minute.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'unit-rates',
    sections: [
      {
        id: 'ur3-intro',
        type: 'text' as const,
        content: `# ⚡ Unit Rates

**Part 3 of 5 — Unit Price & Finding the Best Buy**

---

> 🔑 **Real-Life Power Tool:** A **unit price** is the cost of *one* unit (one ounce, one pound, one item). To find the better deal, compare **unit prices** — the **lower** unit price is the better buy.`,
      },
      {
        id: 'ur3-unit-price',
        type: 'text' as const,
        content: `## Unit Price = Cost ÷ Amount

$$\\text{unit price} = \\frac{\\text{total cost}}{\\text{number of units}}$$

### Worked Example

A $20$-ounce bottle of juice costs \\$3.20. Find the unit price (per ounce):

$$\\frac{3.20 \\text{ dollars}}{20 \\text{ oz}} = 3.20 \\div 20 = 0.16 \\text{ per ounce}$$

That comes to \\$0.16 per ounce, or **$16$ cents per ounce**.

> 💡 Stores often print the unit price on the shelf tag (like "\\$0.16 /oz") precisely so shoppers can compare. You're learning the math behind that tag.`,
      },
      {
        id: 'ur3-unit-price-drill',
        type: 'input-boxes' as const,
        content: `**Find the Unit Price** 🧮

Divide cost by amount. Enter the dollar amount (e.g. type $0.25$ for $25$ cents).

**1)** $12$ oz of cereal for \\$4.80 → ? dollars per ounce
**2)** $8$ rolls of paper towels for \\$10.00 → ? dollars per roll
**3)** $5$ pounds of rice for \\$6.45 → ? dollars per pound`,
        exercise: {
          boxes: 3,
          correctAnswers: ['0.4', '1.25', '1.29'],
          hint1: 'Per ounce: $4.80 \\div 12 = 0.40$.',
          hint2: 'Per roll: $10.00 \\div 8 = 1.25$.',
          hint3: 'Per pound: $6.45 \\div 5 = 1.29$.',
          explanation: '1) $4.80 \\div 12 = \\$0.40$ /oz.  2) $10.00 \\div 8 = \\$1.25$ /roll.  3) $6.45 \\div 5 = \\$1.29$ /lb.',
        },
      },
      {
        id: 'ur3-best-buy',
        type: 'text' as const,
        content: `## Comparing to Find the Best Buy

When two packages are different sizes, you **can't** just compare total prices — you compare **unit prices**.

### Worked Example: Which is the better buy?

| Option | Size | Price | Unit price |
|--------|------|-------|------------|
| **A** | $16$ oz | \\$3.84 | $3.84 \\div 16 = 0.24$, i.e. \\$0.24 /oz |
| **B** | $24$ oz | \\$5.04 | $5.04 \\div 24 = 0.21$, i.e. \\$0.21 /oz |

Option **B** costs **\\$0.21 per ounce** vs. **\\$0.24 per ounce** for A. Since $0.21 < 0.24$, **Option B is the better buy** even though its total price is higher.

> ⚠️ **The bigger package is *usually* cheaper per unit — but not always!** Always compute the unit price. The **lower** unit price wins.`,
      },
      {
        id: 'ur3-best-buy-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Brand X: $6$ granola bars for $\\$3.00$. Brand Y: $10$ bars for $\\$4.50$. Which is the better buy, and what is its unit price?',
              options: [
                'Brand Y at $\\$0.45$ per bar',
                'Brand X at $\\$0.50$ per bar',
                'Brand Y at $\\$0.50$ per bar',
                'They cost the same per bar',
              ],
              correctAnswer: 0,
              explanation: 'Brand X: $3.00 \\div 6 = \\$0.50$ per bar. Brand Y: $4.50 \\div 10 = \\$0.45$ per bar. Since $0.45 < 0.50$, Brand Y is the better buy at $\\$0.45$ per bar.',
            },
            {
              question: 'To compare two differently-sized packages, you should compare their:',
              options: [
                'total prices',
                'unit prices',
                'package sizes',
                'brand names',
              ],
              correctAnswer: 1,
              explanation: 'Total price ignores size. The unit price (cost per single unit) puts both options on equal footing, so the lower unit price is the better deal.',
            },
          ],
        },
      },
      {
        id: 'ur3-best-buy-dropdown',
        type: 'dropdown-select' as const,
        content: `**Best Buy Walkthrough** 🔽

A $32$-oz sports drink costs \\$2.56, and a $20$-oz bottle costs \\$1.80. Work it out.`,
        exercise: {
          dropdowns: [
            { label: 'Unit price of the $32$-oz bottle:', options: ['$\\$0.08$ /oz', '$\\$0.12$ /oz', '$\\$0.16$ /oz', '$\\$0.80$ /oz'] },
            { label: 'Unit price of the $20$-oz bottle:', options: ['$\\$0.09$ /oz', '$\\$0.08$ /oz', '$\\$0.18$ /oz', '$\\$0.90$ /oz'] },
            { label: 'The better buy is the:', options: ['$32$-oz bottle', '$20$-oz bottle', 'They are equal', 'Cannot tell'] },
          ],
          correctAnswers: ['$\\$0.08$ /oz', '$\\$0.09$ /oz', '$32$-oz bottle'],
          hint1: '$32$-oz: $2.56 \\div 32 = 0.08$.',
          hint2: '$20$-oz: $1.80 \\div 20 = 0.09$.',
          hint3: 'Compare $0.08$ vs. $0.09$. The lower unit price is the better buy.',
          explanation: '$32$-oz: $2.56\\div32 = \\$0.08$ /oz. $20$-oz: $1.80\\div20 = \\$0.09$ /oz. Since $0.08 < 0.09$, the $32$-oz bottle is the better buy.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'unit-rates',
    sections: [
      {
        id: 'ur4-intro',
        type: 'text' as const,
        content: `# ⚡ Unit Rates

**Part 4 of 5 — Using Unit Rates to Solve Problems**

---

> 🔑 **The Payoff:** Once you know a unit rate, you can **scale up** to find any amount by **multiplying**, or **scale down** by **dividing**. Speed, cost, and "how long will it take" problems all become one-step calculations.`,
      },
      {
        id: 'ur4-scaling',
        type: 'text' as const,
        content: `## Multiply by the Unit Rate to Scale Up

If you know the cost (or distance, or pay) for **one** unit, **multiply** to find the cost for many.

$$\\text{total} = (\\text{unit rate}) \\times (\\text{number of units})$$

### Worked Example: total cost

Bananas cost \\$0.60 per pound. How much do $7$ pounds cost?

$$0.60 \\times 7 = 4.20$$

So $7$ pounds cost \\$4.20.

### Worked Example: distance from speed

A train moves at $50$ miles per hour. How far in $4$ hours?

$$50 \\text{ mph} \\times 4 \\text{ hr} = 200 \\text{ miles}$$

> 💡 **Units cancel like numbers.** "$\\text{dollars per lb}$" times "$\\text{lb}$" leaves **dollars**. Tracking units this way tells you if you set the problem up correctly.`,
      },
      {
        id: 'ur4-scale-drill',
        type: 'input-boxes' as const,
        content: `**Scale Up With a Unit Rate** 🧮

Multiply the unit rate by the amount. Enter just the number.

**1)** Apples are \\$1.25 per pound. Cost of $6$ pounds? → ? dollars
**2)** A typist does $40$ words per minute. Words in $9$ minutes? → ? words
**3)** A car gets $32$ miles per gallon. Miles on $11$ gallons? → ? miles`,
        exercise: {
          boxes: 3,
          correctAnswers: ['7.5', '360', '352'],
          hint1: 'Cost $= 1.25 \\times 6 = 7.50$ dollars.',
          hint2: 'Words $= 40 \\times 9 = 360$.',
          hint3: 'Miles $= 32 \\times 11 = 352$.',
          explanation: '1) $1.25 \\times 6 = \\$7.50$.  2) $40 \\times 9 = 360$ words.  3) $32 \\times 11 = 352$ miles.',
        },
      },
      {
        id: 'ur4-divide-to-find-units',
        type: 'text' as const,
        content: `## Divide by the Unit Rate to Find "How Many" or "How Long"

If you know the **total** and the **unit rate**, **divide** to find the number of units.

$$\\text{number of units} = \\frac{\\text{total}}{\\text{unit rate}}$$

### Worked Example: how many pounds?

Cherries are \\$4 per pound. How many pounds can you buy with \\$10?

$$10 \\div 4 = 2.5 \\text{ pounds}$$

### Worked Example: how long?

A cyclist rides at $12$ miles per hour. How long to ride $30$ miles?

$$30 \\div 12 = 2.5 \\text{ hours}$$

> ⚠️ **Multiply or divide?** If you're given the **unit rate and want a total**, multiply. If you're given a **total and want the number of units**, divide.`,
      },
      {
        id: 'ur4-multiply-divide-dropdown',
        type: 'dropdown-select' as const,
        content: `**Multiply or Divide?** 🔽

Decide the operation, then give the answer.`,
        exercise: {
          dropdowns: [
            { label: 'Pay is $\\$9$ /hour. Earnings for $6$ hours?', options: ['Multiply: $\\$54$', 'Divide: $\\$1.50$', 'Multiply: $\\$15$', 'Divide: $\\$54$'] },
            { label: 'Gas is $\\$4$ /gallon. Gallons you can buy with $\\$30$?', options: ['Divide: $7.5$ gal', 'Multiply: $120$ gal', 'Divide: $34$ gal', 'Multiply: $7.5$ gal'] },
            { label: 'A runner does $6$ min/mile. Time for $5$ miles?', options: ['Multiply: $30$ min', 'Divide: $1.2$ min', 'Multiply: $11$ min', 'Divide: $30$ min'] },
          ],
          correctAnswers: ['Multiply: $\\$54$', 'Divide: $7.5$ gal', 'Multiply: $30$ min'],
          hint1: 'Have a rate, want a total → multiply: $9 \\times 6 = 54$.',
          hint2: 'Have a total ($\\$30$), want number of units → divide: $30 \\div 4 = 7.5$.',
          hint3: 'Have min-per-mile and number of miles → multiply: $6 \\times 5 = 30$.',
          explanation: 'Earnings: $9 \\times 6 = \\$54$. Gallons: $30 \\div 4 = 7.5$ gal. Time: $6 \\times 5 = 30$ min. Multiply when scaling a rate up to a total; divide when you have the total and want the count.',
        },
      },
      {
        id: 'ur4-mixed-quiz',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Maria earns $\\$45$ for $5$ hours of babysitting. At that rate, how much for $8$ hours?',
              options: ['$\\$72$', '$\\$40$', '$\\$9$', '$\\$360$'],
              correctAnswer: 0,
              explanation: 'Unit rate $= 45 \\div 5 = \\$9$ per hour. Then $9 \\times 8 = \\$72$ for $8$ hours.',
            },
            {
              question: 'A faucet fills $15$ gallons in $3$ minutes. How long to fill $40$ gallons?',
              options: ['$8$ minutes', '$5$ minutes', '$120$ minutes', '$12$ minutes'],
              correctAnswer: 0,
              explanation: 'Unit rate $= 15 \\div 3 = 5$ gallons per minute. Time $= 40 \\div 5 = 8$ minutes.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'unit-rates',
    sections: [
      {
        id: 'ur5-intro',
        type: 'text' as const,
        content: `# ⚡ Unit Rates

**Part 5 of 5 — Mixed Practice & Mastery Check**

---

You can now (1) tell a rate from a ratio, (2) compute a unit rate by dividing, (3) compare unit prices to find the best buy, and (4) multiply or divide by a unit rate to solve real problems. Let's put it all together.`,
      },
      {
        id: 'ur5-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Goal | Key move |
|------|----------|
| Find a unit rate | divide first quantity by second: $\\dfrac{a}{b}$ |
| Decide what's on the bottom | the word **after "per"** is the denominator |
| Find a unit price | $\\dfrac{\\text{total cost}}{\\text{number of units}}$ |
| Pick the best buy | compute both unit prices; **lower** wins |
| Scale a rate up to a total | **multiply** (rate $\\times$ amount) |
| Find how many / how long | **divide** (total $\\div$ rate) |

> ⚠️ Remember: a unit rate always has a **denominator of 1**, and dividing by a fraction less than $1$ makes the answer **larger**.`,
      },
      {
        id: 'ur5-mixed-drill',
        type: 'input-boxes' as const,
        content: `**Mixed Practice** 🧮

Use everything from this lesson. Enter just the number.

**1)** $204$ miles in $4$ hours → ? miles per hour
**2)** $\\frac{3}{4}$ cup flour makes $\\frac{1}{4}$ batch. Cups per FULL batch? → ?
**3)** Pears are \\$1.40 per pound. Cost of $3$ pounds? → ? dollars`,
        exercise: {
          boxes: 3,
          correctAnswers: ['51', '3', '4.2'],
          hint1: 'Speed: $204 \\div 4 = 51$ mph.',
          hint2: 'Cups per batch $= \\frac{3}{4} \\div \\frac{1}{4} = \\frac{3}{4} \\cdot \\frac{4}{1} = 3$.',
          hint3: 'Cost $= 1.40 \\times 3 = 4.20$.',
          explanation: '1) $204 \\div 4 = 51$ mph.  2) $\\frac{3}{4} \\div \\frac{1}{4} = 3$ cups per batch.  3) $1.40 \\times 3 = \\$4.20$.',
        },
      },
      {
        id: 'ur5-best-buy-mixed',
        type: 'dropdown-select' as const,
        content: `**One More Best Buy** 🔽

Bulk almonds: $3$ lb for \\$13.50. Small bag: $1$ lb for \\$4.80. Find the better buy.`,
        exercise: {
          dropdowns: [
            { label: 'Unit price of the bulk bag:', options: ['$\\$4.50$ /lb', '$\\$4.80$ /lb', '$\\$13.50$ /lb', '$\\$3.00$ /lb'] },
            { label: 'Unit price of the small bag:', options: ['$\\$4.80$ /lb', '$\\$4.50$ /lb', '$\\$1.00$ /lb', '$\\$0.48$ /lb'] },
            { label: 'The better buy is the:', options: ['bulk bag', 'small bag', 'they are equal', 'cannot tell'] },
          ],
          correctAnswers: ['$\\$4.50$ /lb', '$\\$4.80$ /lb', 'bulk bag'],
          hint1: 'Bulk: $13.50 \\div 3 = 4.50$.',
          hint2: 'Small bag is already per pound: $\\$4.80$ per lb.',
          hint3: 'Compare $\\$4.50$ vs. $\\$4.80$ — the lower unit price wins.',
          explanation: 'Bulk: $13.50 \\div 3 = \\$4.50$ /lb. Small: $\\$4.80$ /lb. Since $4.50 < 4.80$, the bulk bag is the better buy.',
        },
      },
      {
        id: 'ur5-mixed-mc',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A $5$-pound bag of dog food costs $\\$11.50$, and a $12$-pound bag costs $\\$26.40$. Which is the better buy?',
              options: [
                'The $5$-lb bag at $\\$2.30$ /lb',
                'The $12$-lb bag at $\\$2.20$ /lb',
                'They are equal',
                'The $12$-lb bag at $\\$2.40$ /lb',
              ],
              correctAnswer: 1,
              explanation: '$5$-lb: $11.50 \\div 5 = \\$2.30$ /lb. $12$-lb: $26.40 \\div 12 = \\$2.20$ /lb. Since $2.20 < 2.30$, the $12$-lb bag is the better buy.',
            },
            {
              question: 'A plane flies $1{,}500$ miles in $3$ hours. At that speed, how far in $5$ hours?',
              options: ['$2{,}500$ miles', '$500$ miles', '$4{,}500$ miles', '$900$ miles'],
              correctAnswer: 0,
              explanation: 'Speed $= 1500 \\div 3 = 500$ mph. Distance $= 500 \\times 5 = 2{,}500$ miles.',
            },
          ],
        },
      },
      {
        id: 'ur5-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'What is the unit rate for $96$ heartbeats in $60$ seconds?',
              options: [
                '$1.6$ beats per second',
                '$0.625$ beats per second',
                '$36$ beats per second',
                '$156$ beats per second',
              ],
              correctAnswer: 0,
              explanation: 'Beats per second $= 96 \\div 60 = 1.6$ beats per second.',
            },
            {
              question: 'A $15$-oz box of pasta costs $\\$1.80$. What is the unit price?',
              options: [
                '$\\$0.12$ per ounce',
                '$\\$0.15$ per ounce',
                '$\\$8.33$ per ounce',
                '$\\$1.20$ per ounce',
              ],
              correctAnswer: 0,
              explanation: 'Unit price $= 1.80 \\div 15 = \\$0.12$ per ounce.',
            },
            {
              question: 'Ink covers $\\frac{1}{2}$ page using $\\frac{1}{8}$ of a cartridge. How many pages per FULL cartridge?',
              options: ['$4$ pages', '$\\frac{1}{16}$ page', '$2$ pages', '$8$ pages'],
              correctAnswer: 0,
              explanation: 'Pages per cartridge $= \\frac{1}{2} \\div \\frac{1}{8} = \\frac{1}{2} \\cdot \\frac{8}{1} = \\frac{8}{2} = 4$ pages.',
            },
          ],
        },
      },
    ],
  },
]
