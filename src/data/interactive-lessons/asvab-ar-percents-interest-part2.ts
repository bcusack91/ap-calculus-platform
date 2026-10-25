export const asvabArPercentsInterestPart2Data = {
  topicSlug: 'asvab-ar-percents-interest',
  sections: [
    {
      id: 'arpi2-intro',
      type: 'text' as const,
      content: `# 🏷️ Percents, Discounts and Interest

**Part 2 of 7 — Percent of a Number and Mental-Math Shortcuts**

### Percent means "per hundred"

$37\\%$ means 37 out of every 100, or $\\frac{37}{100} = 0.37$. To use a percent in arithmetic, turn it into a decimal or a fraction:

- **Percent → decimal:** move the decimal point two places left. $8\\% = 0.08$, $45\\% = 0.45$, $150\\% = 1.5$
- **Decimal → percent:** move it two places right. $0.6 = 60\\%$, $0.035 = 3.5\\%$

### Percents worth knowing as fractions

| Percent | Decimal | Fraction | So to find it, ... |
|:---:|:---:|:---:|:---|
| $50\\%$ | $0.5$ | $\\frac{1}{2}$ | divide by 2 |
| $25\\%$ | $0.25$ | $\\frac{1}{4}$ | divide by 4 |
| $75\\%$ | $0.75$ | $\\frac{3}{4}$ | divide by 4, then times 3 |
| $20\\%$ | $0.2$ | $\\frac{1}{5}$ | divide by 5 |
| $10\\%$ | $0.1$ | $\\frac{1}{10}$ | move the decimal point one place left |
| $12.5\\%$ | $0.125$ | $\\frac{1}{8}$ | divide by 8 |
| $33\\frac{1}{3}\\%$ | about $0.333$ | $\\frac{1}{3}$ | divide by 3 |

> **Key Fact:** "Of" means multiply. 25% **of** 60 is $\\frac{1}{4} \\times 60 = 15$.`
    },
    {
      id: 'arpi2-types',
      type: 'text' as const,
      content: `## The three question types

Every basic percent question fits one sentence: **part = percent × whole**. "Is" means equals and "of" means times, so translate the words directly. The question tells you two of the three pieces; you find the third.

| Type | Sounds like | Set up | Solve |
|:---|:---|:---|:---|
| Find the **part** | "What is 15% of 160?" | $x = 0.15 \\times 160$ | Multiply |
| Find the **percent** | "12 is what percent of 48?" | $12 = p \\times 48$ | Part ÷ whole |
| Find the **whole** | "30 is 20% of what number?" | $30 = 0.20 \\times w$ | Part ÷ percent |

### Worked Example 1 — find the part

> A company of 160 soldiers is asked to volunteer for a blood drive, and 15% sign up. How many sign up?

Estimate: 10% of 160 is 16, so the answer is a bit more than 16.

$$10\\% \\text{ of } 160 = 16, \\qquad 5\\% \\text{ of } 160 = 8, \\qquad 15\\% \\text{ of } 160 = 16 + 8 = 24$$

**24 soldiers** sign up. That is a bit more than 16, as estimated.

### Worked Example 2 — find the percent

> A mechanic has finished 12 of the 48 work orders on the board. What percent has she finished?

The whole is the 48 orders; the part is the 12 finished.

$$\\frac{12}{48} = \\frac{1}{4} = 25\\%$$

Reasonable? 12 is clearly less than half of 48, and 25% is less than half. ✓

### Worked Example 3 — find the whole

> A recruit has saved \\$30, which is 20% of the price of a new phone. How much does the phone cost?

Set up "30 is 20% of what": $30 = 0.20 \\times w$, so $w = 30 \\div 0.20 = 150$. Or think in fractions: 20% is one fifth, so the whole is $5 \\times 30 = 150$. The phone costs **\\$150**.

Check: 20% of 150 is $\\frac{150}{5} = 30$. ✓ And the whole must be **bigger** than the part when the percent is under 100%.`
    },
    {
      id: 'arpi2-shortcuts',
      type: 'text' as const,
      content: `## Mental-math shortcuts (your calculator replacement)

Start from **10%** and build everything else from it.

| To find | Do this | Example with 340 |
|:---|:---|:---|
| 10% | Move the decimal point one place left | $34$ |
| 5% | Half of 10% | $17$ |
| 1% | Move the decimal point two places left | $3.4$ |
| 20% | Double 10% (or divide by 5) | $68$ |
| 15% | 10% + 5% | $34 + 17 = 51$ |
| 30% | Three times 10% | $102$ |
| 25% | Divide by 4 | $85$ |
| 35% | 25% + 10% | $85 + 34 = 119$ |

### The swap trick

$a\\%$ of $b$ is the same as $b\\%$ of $a$, because both are $\\frac{a \\times b}{100}$. Use whichever is easier:

$$8\\% \\text{ of } 50 = 50\\% \\text{ of } 8 = 4 \\qquad 4\\% \\text{ of } 75 = 75\\% \\text{ of } 4 = 3$$

### Worked Example 4 — a 35% problem without a calculator

> A unit's 60-hour training block spends 35% of its hours on land navigation. How many hours is that?

$$25\\% \\text{ of } 60 = 15, \\qquad 10\\% \\text{ of } 60 = 6, \\qquad 35\\% \\text{ of } 60 = 15 + 6 = 21$$

**21 hours.** Estimate check: 35% is a bit more than a third, and a third of 60 is 20. ✓`
    },
    {
      id: 'arpi2-mc',
      type: 'multiple-choice' as const,
      content: '**Check: the three question types.** Set up part = percent × whole each time. 🎯',
      exercise: {
        questions: [
          {
            question: 'A unit\'s training schedule has 120 hours, and 35% of those hours are spent on physical fitness. How many hours are spent on physical fitness?',
            options: ['30', '78', '36', '42'],
            correctAnswer: 3,
            explanation: 'Build 35% from 25% and 10%: 25% of 120 is $120 \\div 4 = 30$ and 10% is 12, so $30 + 12 = 42$ hours. The answer 30 stops at the 25% piece and forgets the 10%. 78 is the other 65% of the schedule, and 36 is 30% of 120, not 35%.'
          },
          {
            question: 'A delivery driver had 90 stops on her route and had completed 27 of them by noon. What percent of her stops had she completed?',
            options: ['30%', '70%', '27%', '3%'],
            correctAnswer: 0,
            explanation: 'Part ÷ whole: $27 \\div 90 = \\frac{3}{10} = 30\\%$. 70% is the share of stops still left to make. 27% just puts a percent sign on the count of stops, and 3% misreads the decimal 0.3 as 3%.'
          },
          {
            question: 'In a survey, 18 people, or 15% of those asked, said they walk to work. How many people were asked?',
            options: ['2.7', '120', '33', '270'],
            correctAnswer: 1,
            explanation: 'This is a "find the whole" question: $18 = 0.15 \\times w$, so $w = 18 \\div 0.15 = 120$. Check: 10% of 120 is 12 and 5% is 6, and $12 + 6 = 18$. The answer 2.7 is 15% of 18, which takes the percent of the part instead of finding the whole. 270 multiplies 18 by 15, and 33 just adds the two numbers.'
          }
        ]
      }
    },
    {
      id: 'arpi2-input',
      type: 'input-boxes' as const,
      content: `**Use the shortcuts.** No calculator. ✍️

**1)** What is 5% of 360? (number only)

**2)** Use the swap trick: what is 8% of 25? (number only)

**3)** 45 is what percent of 180? (number only, in percent)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '2', '25'],
        hint1: '10% of 360 is 36. 5% is half of 10%.',
        hint2: '8% of 25 is the same as 25% of 8, and 25% is one quarter.',
        hint3: 'Part ÷ whole: $\\frac{45}{180}$. Simplify by dividing top and bottom by 45.',
        explanation: '(1) 10% of 360 is 36, so 5% is $36 \\div 2 = 18$. (2) 8% of 25 = 25% of 8 = $8 \\div 4 = 2$. (3) $\\frac{45}{180} = \\frac{1}{4} = 25\\%$.'
      }
    },
    {
      id: 'arpi2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Translate and convert.** 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'The decimal $0.6$ written as a percent is:',
            options: ['6%', '60%', '0.6%', '600%'],
            correctAnswer: 1
          },
          {
            label: 'A quick way to find 20% of a number is to:',
            options: ['divide it by 20', 'multiply it by 5', 'divide it by 5', 'divide it by 2'],
            correctAnswer: 2
          },
          {
            label: 'In "What number is 40% of 75?", the word "of" tells you to:',
            options: ['multiply', 'divide', 'add', 'subtract'],
            correctAnswer: 0
          }
        ],
        correctAnswers: ['60%', 'divide it by 5', 'multiply'],
        hint1: 'Decimal to percent: move the decimal point two places to the right.',
        hint2: '20% is the fraction $\\frac{1}{5}$.',
        hint3: '"Is" means equals; "of" means times.',
        explanation: '$0.6 = 60\\%$ (move the point two places right). 20% is one fifth, so divide by 5; dividing by 20 would give 5%. "Of" means multiply: 40% of 75 is $0.4 \\times 75 = 30$.'
      }
    },
    {
      id: 'arpi2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Percent means **per hundred**: move the decimal point two places to convert
- **Part = percent × whole.** "Is" means equals, "of" means times
- Find the part: multiply. Find the percent: part ÷ whole. Find the whole: part ÷ percent
- Build percents from **10%** (move the point): 5% is half, 20% is double, 15% = 10% + 5%
- 25% = divide by 4, 20% = divide by 5, 50% = divide by 2
- **Swap trick:** 8% of 50 = 50% of 8

> **Up Next:** Part 3 — percent change, discounts, markups and depreciation, and why a 20% discount followed by a 10% discount is not 30% off.`
    }
  ]
};
