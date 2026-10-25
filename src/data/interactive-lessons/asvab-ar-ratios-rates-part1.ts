export const asvabArRatiosRatesPart1Data = {
  topicSlug: 'asvab-ar-ratios-rates',
  sections: [
    {
      id: 'arrr1-intro',
      type: 'text' as const,
      content: `# 🚚 Ratios, Proportions and Rates

**Part 1 of 7 — Ratios and Rates on the AR Subtest**

### Topic Overview

| Part | Topic |
|:---:|:---|
| **1** | **Ratios and rates on the AR subtest** |
| 2 | Ratios and part-to-whole problems |
| 3 | Proportions and scale |
| 4 | Distance, rate and time |
| 5 | Work rates and unit prices |
| 6 | Test strategy and common traps |
| 7 | Mixed mastery set |

### What these questions look like

Ratio and rate problems are some of the most common stories on Arithmetic Reasoning (AR). The official description of the subtest lists **ratio and proportion** by name, and official sample topics include **rate × time** and **proportional rates**. You will see wording like this:

- "for every 3 drivers there are 2 mechanics" (a **ratio**)
- "a machine fills 60 bags in 5 minutes; how many in 20 minutes?" (a **proportion**)
- "a truck averages 50 miles per hour" (a **rate**)
- "working together, how long will it take?" (a **work rate**)
- "which size is the better buy?" (a **unit price**)

Every one of these is really the same idea: **two quantities that change together at a steady rate**. Once you find that rate (how much of one thing per one of the other), the rest is multiplying or dividing.`
    },
    {
      id: 'arrr1-testday',
      type: 'text' as const,
      content: `## The test-day reality

| Fact | What it means for rate problems |
|:---|:---|
| CAT-ASVAB: 15 scored AR questions in 55 minutes | About **3.5 minutes per question**, the most generous pace on the whole test, so there is time to set up a proportion carefully |
| No calculator on any version | The numbers are chosen to divide evenly: rates like 45 mph or \\$1.50 per pound |
| Scratch paper at MEPS (two sheets, two pencils, more if you ask) | Write the rate with its units every time: "12 miles per gallon," not just "12" |
| 4 answer choices, and you cannot go back | The wrong choices are built from real slips: an upside-down ratio, minutes not turned into hours |

The CAT-ASVAB is adaptive: a right answer usually brings a harder question. Harder rate questions add a second step (convert minutes to hours, combine two workers, find an average speed for a round trip). If you take a paper version, the pace is much faster, but the skills are identical.

AR is one of the four subtests in your **AFQT** score (AR + MK + 2 × VE, turned into a percentile from 1 to 99), which decides whether you can enlist. AR also feeds job line scores such as the Army GT score (AR + VE).`
    },
    {
      id: 'arrr1-habits',
      type: 'text' as const,
      content: `## The habits, applied to ratios and rates

1. **Read the last sentence first.** Is it asking for miles or hours? The smaller share or the larger one? Cost per ounce or total cost? Circle the unit it wants.
2. **Translate "per" as "divide."** "Miles per gallon" means miles ÷ gallons. "Price per pound" means price ÷ pounds. The word after "per" goes on the bottom.
3. **Track units at every step.** Put the same unit in the same position on both sides of a proportion, and turn minutes into hours before you use a speed in miles per hour.
4. **Estimate first.** If 4 gallons go 120 miles, then 10 gallons should go a bit more than double that distance. An estimate knocks out the choices that are wildly off.
5. **Check reasonableness.** More time means more distance. Two workers together finish faster than either one alone. A bigger box isn't always the cheaper buy per ounce.

### The one move behind everything: find the rate for ONE

| Story | Rate for one | Then |
|:---|:---|:---|
| 6 cans cost \\$9 | $9 \\div 6 = 1.50$, so \\$1.50 per can | 10 cans cost $10 \\times 1.50 = 15$, so \\$15 |
| 150 miles in 3 hours | $150 \\div 3 = 50$ miles per hour | 7 hours: $7 \\times 50 = 350$ miles |
| 40 boxes in 8 minutes | $40 \\div 8 = 5$ boxes per minute | 30 minutes: $30 \\times 5 = 150$ boxes |`
    },
    {
      id: 'arrr1-worked',
      type: 'text' as const,
      content: `## Worked Example: a delivery route

> A delivery truck covers 168 miles in 4 hours. At the same speed, how far will it travel in 7 hours?
>
> 96 miles  ·  294 miles  ·  672 miles  ·  1,176 miles

**Step 1 — Last sentence.** We want a **distance in miles** for 7 hours.

**Step 2 — Find the rate for one hour.** $168 \\div 4 = 42$ miles per hour.

**Step 3 — Estimate.** 7 hours is a little less than double 4 hours, so the answer should be a little less than $2 \\times 168 = 336$ miles.

**Step 4 — Compute.**

$$7 \\times 42 = 7 \\times 40 + 7 \\times 2 = 280 + 14 = 294$$

The truck travels 294 miles.

**Step 5 — Check.** 294 is a little less than 336, just as the estimate said. Here is where the other choices come from:

| Choice | The mistake behind it |
|:---|:---|
| 96 miles | Set up the proportion upside down: $168 \\times 4 \\div 7 = 96$, which gives *less* distance for *more* time |
| 672 miles | Multiplied 168 by 4 hours instead of dividing to get the speed |
| 1,176 miles | Multiplied 168 by 7 hours, as if the truck covered 168 miles every hour |

> **Key Fact:** A rate problem almost always has an "upside-down" choice. Ask: should my answer be bigger or smaller than the number I started with? More hours must mean more miles.`
    },
    {
      id: 'arrr1-warmup',
      type: 'multiple-choice' as const,
      content: '**Warm-up.** Find the rate for one, then use it. 🔥',
      exercise: {
        questions: [
          {
            question: 'A car travels at a steady 45 miles per hour for 4 hours. How many miles does it travel?',
            options: ['49', '41', '160', '180'],
            correctAnswer: 3,
            explanation: 'Distance = rate × time: $45 \\times 4 = 180$ miles. The answer 49 adds the speed and the time, 41 subtracts them, and 160 is the rough estimate $40 \\times 4$, not the exact distance.'
          },
          {
            question: 'A pack of 6 batteries costs \\$9.00. What is the price per battery?',
            options: ['\\$0.67', '\\$1.50', '\\$3.00', '\\$54.00'],
            correctAnswer: 1,
            explanation: '"Price per battery" means price ÷ batteries: $9.00 \\div 6 = 1.50$, so \\$1.50. \\$0.67 divides the wrong way ($6 \\div 9$), \\$3.00 subtracts 6 from 9, and \\$54.00 multiplies the two numbers.'
          }
        ]
      }
    },
    {
      id: 'arrr1-warmup-input',
      type: 'input-boxes' as const,
      content: `**Warm-up, continued.** ✍️

In a motor pool, the ratio of trucks to cars is 2 to 5. There are 14 trucks.

**1)** How many cars are in the motor pool? (number only, in cars)`,
      exercise: {
        boxes: 1,
        correctAnswers: ['35'],
        hint1: 'The ratio 2 to 5 means every group of 2 trucks goes with 5 cars.',
        hint2: 'How many groups of 2 trucks make 14 trucks?',
        hint3: '$14 \\div 2 = 7$ groups, and each group has 5 cars.',
        explanation: '14 trucks is $14 \\div 2 = 7$ groups of 2. Each group comes with 5 cars, so there are $7 \\times 5 = 35$ cars. Check: $14 : 35$ simplifies to $2 : 5$ when you divide both by 7.'
      }
    },
    {
      id: 'arrr1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Ratio, proportion and rate problems are named in the official AR description and show up often
- On the CAT-ASVAB you have about **3.5 minutes per question**, no calculator, and you can't go back
- The core move: **find the rate for one** (per hour, per can, per minute), then multiply
- "Per" means **divide**, and the word after "per" goes on the bottom
- Always ask whether the answer should be **bigger or smaller** than what you started with; that catches the upside-down choice

> **Up Next:** Part 2 — ratios and part-to-whole problems, including how to split a total in a given ratio.`
    }
  ]
};
