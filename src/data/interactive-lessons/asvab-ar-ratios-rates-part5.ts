export const asvabArRatiosRatesPart5Data = {
  topicSlug: 'asvab-ar-ratios-rates',
  sections: [
    {
      id: 'arrr5-intro',
      type: 'text' as const,
      content: `# 🚚 Ratios, Proportions and Rates

**Part 5 of 7 — Work Rates and Unit Prices**

### Work rates: think "jobs per hour"

If a pump drains a tank in 4 hours, then in one hour it drains $\\frac{1}{4}$ of the tank. That fraction is its **rate**:

$$\\text{rate} = \\frac{1 \\text{ job}}{\\text{time for the job}}$$

When two workers (or machines) work together, **their rates add**, not their times.

**Worked Example.** One pump drains a tank in 4 hours. A second pump drains it in 12 hours. How long do they take working together?

- Rates: $\\frac{1}{4}$ and $\\frac{1}{12}$ of the tank per hour.
- Combined rate: $\\frac{1}{4} + \\frac{1}{12} = \\frac{3}{12} + \\frac{1}{12} = \\frac{4}{12} = \\frac{1}{3}$ of the tank per hour.
- Time together: $1 \\div \\frac{1}{3} = 3$ hours.

**Shortcut for two workers:** time together $= \\frac{\\text{product}}{\\text{sum}} = \\frac{4 \\times 12}{4 + 12} = \\frac{48}{16} = 3$ hours.

**Reasonableness check:** together they must be **faster than the faster worker alone**. 3 hours is less than 4 hours. ✓ Adding the times (16 hours) or averaging them (8 hours) gives an answer that is slower than one pump alone, which makes no sense.`
    },
    {
      id: 'arrr5-unitprice',
      type: 'text' as const,
      content: `## Unit price and the best buy

To compare packages of different sizes, find the **price per unit** (per ounce, per pound, per item):

$$\\text{unit price} = \\text{price} \\div \\text{quantity}$$

**Worked Example.** A 12-ounce jar of peanut butter costs \\$3.00 and a 20-ounce jar costs \\$4.40. Which is the better buy?

| Jar | Work | Price per ounce |
|:---|:---|:---:|
| 12 oz for \\$3.00 | $3.00 \\div 12 = 0.25$ | 25 cents |
| 20 oz for \\$4.40 | $4.40 \\div 20 = 0.22$ | 22 cents |

The 20-ounce jar is the better buy, even though it costs more in total.

**Mental-math tip:** dividing by 20 is the same as dividing by 2 and then by 10: $4.40 \\div 2 = 2.20$, then $2.20 \\div 10 = 0.22$.

> **Watch out:** The cheapest package is not always the best buy, and neither is the biggest one. Only the price per unit tells you.`
    },
    {
      id: 'arrr5-fuel',
      type: 'text' as const,
      content: `## Fuel economy and rate conversions

### Miles per gallon

"Miles per gallon" (mpg) is a rate: miles ÷ gallons. To find the gallons a trip needs, divide the miles by the mpg.

**Worked Example.** A truck gets 18 miles per gallon. Diesel costs \\$3.50 per gallon. What does the fuel cost for a 252-mile trip?

1. **Gallons:** $252 \\div 18 = 14$ gallons. (Check: $18 \\times 14 = 180 + 72 = 252$.)
2. **Cost:** $14 \\times 3.50 = 42 + 7 = 49$, so \\$49.00.

**Estimate:** about $250 \\div 20 = 12.5$ gallons at about \\$3.50 is roughly \\$44, so \\$49 is in the right range. Stopping at 14 (the gallons) is the trap for this kind of question.

### Converting a rate

**Worked Example.** A hose delivers 8 gallons per minute. How many gallons is that per hour, and how long does it take to fill a 1,200-gallon tank?

- Per hour: $8 \\times 60 = 480$ gallons per hour.
- Time: $1{,}200 \\div 8 = 150$ minutes, which is $150 \\div 60 = 2\\frac{1}{2}$ hours.

> **Key Fact:** When a rate is "per minute" and the question wants hours (or the other way around), convert at the end and read the last sentence again to see which unit it wants.`
    },
    {
      id: 'arrr5-mc',
      type: 'multiple-choice' as const,
      content: '**Work rates and unit prices.** 🎯',
      exercise: {
        questions: [
          {
            question: 'Maria can paint a storage shed in 10 hours. Jo can paint the same shed in 15 hours. How long will it take them to paint it working together?',
            options: ['12.5 hours', '6 hours', '25 hours', '5 hours'],
            correctAnswer: 1,
            explanation: 'Rates: $\\frac{1}{10} + \\frac{1}{15} = \\frac{3}{30} + \\frac{2}{30} = \\frac{5}{30} = \\frac{1}{6}$ of the shed per hour, so together they take 6 hours (shortcut: $\\frac{150}{25} = 6$). The answer 12.5 hours averages the times and 25 hours adds them; both are slower than Maria alone. 5 hours subtracts the two times.'
          },
          {
            question: 'A store sells coffee in four sizes. Which is the best buy?',
            options: ['10 oz for \\$4.50', '24 oz for \\$10.08', '32 oz for \\$14.40', '16 oz for \\$6.40'],
            correctAnswer: 3,
            explanation: 'Price per ounce: $4.50 \\div 10 = 0.45$, $10.08 \\div 24 = 0.42$, $14.40 \\div 32 = 0.45$, and $6.40 \\div 16 = 0.40$. The 16-ounce bag is cheapest at 40 cents an ounce. The 10-ounce bag has the lowest total price, and the 32-ounce bag is the biggest, but neither has the lowest price per ounce.'
          },
          {
            question: 'A van gets 24 miles per gallon. Gas costs \\$3.20 per gallon. How much will gas cost for a 360-mile trip?',
            options: ['\\$48.00', '\\$76.80', '\\$112.50', '\\$15.00'],
            correctAnswer: 0,
            explanation: 'Gallons: $360 \\div 24 = 15$. Cost: $15 \\times 3.20 = 48$, so \\$48.00. \\$15.00 stops at the number of gallons, \\$76.80 multiplies the mpg by the price, and \\$112.50 divides the miles by the price per gallon.'
          }
        ]
      }
    },
    {
      id: 'arrr5-input',
      type: 'input-boxes' as const,
      content: `**Convert a rate.** ✍️

A fire hose pumps water at 12 gallons per minute.

**1)** How many gallons does it pump in one hour? (number only, in gallons)

**2)** How many hours does it take to fill a 2,160-gallon tank? (number only, in hours)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['720', '3'],
        hint1: 'An hour has 60 minutes.',
        hint2: '$12 \\times 60$ gallons per hour.',
        hint3: 'Divide the tank size by the gallons per hour.',
        explanation: '(1) $12 \\times 60 = 720$ gallons per hour. (2) $2{,}160 \\div 720 = 3$ hours. (Or $2{,}160 \\div 12 = 180$ minutes, and $180 \\div 60 = 3$ hours.)'
      }
    },
    {
      id: 'arrr5-dropdown',
      type: 'dropdown-select' as const,
      content: '**Rate rules.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'Working together, two workers finish a job:',
            options: ['between their two times', 'in the sum of their two times', 'sooner than either one alone', 'in the average of their two times'],
            correctAnswer: 2
          },
          {
            label: 'To find the unit price of each package size, compute:',
            options: ['quantity ÷ price', 'price ÷ quantity', 'price × quantity', 'price − quantity'],
            correctAnswer: 1
          }
        ],
        correctAnswers: ['sooner than either one alone', 'price ÷ quantity'],
        hint1: 'With help, does the faster worker finish sooner or later than working alone?',
        hint2: 'You want the price of ONE ounce or ONE item.',
        hint3: '"Per ounce" means divide by the ounces.',
        explanation: 'Help always speeds up a job, so the time together is shorter than the faster worker\'s time alone; adding or averaging the times gives something slower. To compare packages, find price ÷ quantity (price per unit) for each and pick the smaller one.'
      }
    },
    {
      id: 'arrr5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- A worker who takes $T$ hours has a rate of $\\frac{1}{T}$ job per hour; **rates add**, times don't
- Time together $= 1 \\div$ (combined rate), or $\\frac{\\text{product}}{\\text{sum}}$ for two workers
- Together is always **faster than the fastest worker alone**
- **Unit price** = price ÷ quantity; the best buy has the lowest unit price
- Fuel: gallons = miles ÷ mpg, then cost = gallons × price per gallon
- Convert per-minute rates to per-hour by multiplying by 60, and answer in the unit the question asks for

> **Up Next:** Part 6 — test strategy and the traps that rate and ratio choices are built from.`
    }
  ]
};
