export const asvabArRatiosRatesPart2Data = {
  topicSlug: 'asvab-ar-ratios-rates',
  sections: [
    {
      id: 'arrr2-intro',
      type: 'text' as const,
      content: `# 🚚 Ratios, Proportions and Rates

**Part 2 of 7 — Ratios and Part-to-Whole Problems**

### What a ratio says

A **ratio** compares two amounts. "The ratio of teens to adults is 2 to 3" can be written three ways, and they all mean the same thing:

| Words | Colon | Fraction |
|:---:|:---:|:---:|
| 2 to 3 | $2 : 3$ | $\\frac{2}{3}$ |

It means: for every **2 teens** there are **3 adults**. It does *not* say there are exactly 2 teens; there could be 20 teens and 30 adults.

### Order matters

The ratio is written in the **same order as the words**. "Teens to adults" puts teens first. "Adults to teens" is $3 : 2$, a different ratio. Flipping the order is the most common ratio mistake on AR, and the flipped ratio is almost always one of the choices.

### Simplifying a ratio

Divide both numbers by the same thing, just like reducing a fraction.

**Example.** A volunteer group has 16 teens and 24 adults. The ratio of teens to adults is

$$16 : 24 = \\frac{16}{24} = \\frac{2}{3}, \\text{ so } 2 : 3$$

(Divide both by 8.) The ratio of adults to teens is $3 : 2$.`
    },
    {
      id: 'arrr2-parts',
      type: 'text' as const,
      content: `## Part-to-part vs part-to-whole

A ratio like $3 : 5$ compares **one part to another part**. To get a fraction of the **whole**, add the parts to get the total number of shares.

**Example.** A trail mix has peanuts and raisins in the ratio $3 : 5$.

- Total shares: $3 + 5 = 8$
- Peanuts are $\\frac{3}{8}$ of the mix, and raisins are $\\frac{5}{8}$ of the mix
- Peanuts are **not** $\\frac{3}{5}$ of the mix. That fraction compares peanuts to raisins, not peanuts to everything.

In a 40-ounce bag, raisins make up $\\frac{5}{8} \\times 40 = 25$ ounces, and peanuts make up $40 - 25 = 15$ ounces. Check: $15 : 25 = 3 : 5$. ✓

### Splitting a total in a ratio: the parts method

1. **Add the parts** to get the number of shares.
2. **Divide the total** by the number of shares to get the size of **one share**.
3. **Multiply** one share by each part.

**Worked Example.** A \\$360 bonus is split between the day shift and the night shift in the ratio $5 : 3$. How much does the day shift get?

- Shares: $5 + 3 = 8$
- One share: $360 \\div 8 = 45$
- Day shift: $5 \\times 45 = 225$, so \\$225. Night shift: $3 \\times 45 = 135$, so \\$135.

**Check:** $225 + 135 = 360$ ✓, and the day shift (the bigger part) gets more than half of \\$360. ✓

> **Key Fact:** The total divided by the **sum of the parts** gives one share. Dividing by just one of the parts is a classic wrong answer.`
    },
    {
      id: 'arrr2-three',
      type: 'text' as const,
      content: `## Three-part ratios

The parts method works the same way with three parts.

**Worked Example.** A concrete mix uses cement, sand and gravel in the ratio $1 : 2 : 3$. A crew needs 18 cubic feet of mix. How much gravel is in it?

- Shares: $1 + 2 + 3 = 6$
- One share: $18 \\div 6 = 3$ cubic feet
- Gravel: $3 \\times 3 = 9$ cubic feet (cement 3, sand 6)

**Check:** $3 + 6 + 9 = 18$ ✓

## Changing a ratio by adding more

Sometimes a story adds more of one item and asks how many to add to reach a new ratio. Keep the unchanged amount fixed and find what the other amount must become.

**Worked Example.** A lot holds 10 sedans and 6 trucks. How many trucks must be added so the ratio of sedans to trucks is $5 : 4$?

- Sedans stay at 10. Since $10 = 2 \\times 5$, the trucks must be $2 \\times 4 = 8$.
- Trucks to add: $8 - 6 = 2$.

**Check:** $10 : 8 = 5 : 4$ ✓. Notice that 8 (the new total of trucks) would be a trap answer: the question asked how many to **add**.`
    },
    {
      id: 'arrr2-mc',
      type: 'multiple-choice' as const,
      content: '**Check your ratios.** Watch the order of the words. 🎯',
      exercise: {
        questions: [
          {
            question: 'A work crew of 35 people has 20 drivers, and the rest are loaders. What is the ratio of loaders to drivers?',
            options: ['4:3', '3:7', '3:4', '4:7'],
            correctAnswer: 2,
            explanation: 'Loaders: $35 - 20 = 15$. Loaders to drivers is $15 : 20$, and dividing both by 5 gives $3 : 4$. The ratio $4 : 3$ is drivers to loaders (the order flipped), and $3 : 7$ and $4 : 7$ compare a part to the whole crew of 35.'
          },
          {
            question: 'Ana and Ben split a \\$1,200 prize in the ratio 7 to 5. How much does Ana get?',
            options: ['\\$100', '\\$500', '\\$1,680', '\\$700'],
            correctAnswer: 3,
            explanation: 'Shares: $7 + 5 = 12$. One share: $1{,}200 \\div 12 = 100$. Ana: $7 \\times 100 = 700$, so \\$700. \\$500 is Ben\'s share, \\$100 is a single share, and \\$1,680 divides the prize by Ben\'s part (5) instead of by the sum of the parts, which hands Ana more than the whole prize.'
          },
          {
            question: 'At a mess hall, recruits chose eggs, pancakes or oatmeal in the ratio 4 : 3 : 2. If 72 recruits chose, how many chose pancakes?',
            options: ['24', '32', '16', '8'],
            correctAnswer: 0,
            explanation: 'Shares: $4 + 3 + 2 = 9$. One share: $72 \\div 9 = 8$. Pancakes: $3 \\times 8 = 24$. The answer 32 is the eggs group, 16 is the oatmeal group, and 8 is only one share.'
          }
        ]
      }
    },
    {
      id: 'arrr2-input',
      type: 'input-boxes' as const,
      content: `**Split it with the parts method.** ✍️

A painter mixes blue paint and white paint in the ratio 2 to 7 and makes 45 quarts of the mix.

**1)** How many quarts of blue paint are in the mix? (number only, in quarts)

**2)** How many quarts of white paint are in the mix? (number only, in quarts)`,
      exercise: {
        boxes: 2,
        correctAnswers: ['10', '35'],
        hint1: 'Add the parts first: how many equal shares is the mix split into?',
        hint2: '$2 + 7 = 9$ shares, so one share is $45 \\div 9$ quarts.',
        hint3: 'One share is 5 quarts. Blue is 2 shares and white is 7 shares.',
        explanation: 'Shares: $2 + 7 = 9$. One share: $45 \\div 9 = 5$ quarts. Blue: $2 \\times 5 = 10$ quarts. White: $7 \\times 5 = 35$ quarts. Check: $10 + 35 = 45$ quarts, and $10 : 35 = 2 : 7$.'
      }
    },
    {
      id: 'arrr2-dropdown',
      type: 'dropdown-select' as const,
      content: '**Ratio language.** Choose the best completion for each statement. 🔽',
      exercise: {
        dropdowns: [
          {
            label: 'A shelter has 9 cats and 6 dogs. The ratio of dogs to cats is:',
            options: ['3:2', '2:5', '2:3', '3:5'],
            correctAnswer: 2
          },
          {
            label: 'A mortar mix uses sand and cement in the ratio 5 to 1. The fraction of the mix that is cement is:',
            options: ['$\\frac{1}{6}$', '$\\frac{1}{5}$', '$\\frac{5}{6}$', '$\\frac{1}{4}$'],
            correctAnswer: 0
          },
          {
            label: 'To split \\$90 in the ratio 4 to 5, your first step is to find:',
            options: ['90 divided by 4', '90 divided by 5', '90 times 4 over 5', '90 divided by 9'],
            correctAnswer: 3
          }
        ],
        correctAnswers: ['2:3', '$\\frac{1}{6}$', '90 divided by 9'],
        hint1: 'Write the ratio in the same order as the words: dogs first.',
        hint2: 'Sand and cement together make $5 + 1 = 6$ shares.',
        hint3: 'One share is the total divided by the sum of the parts.',
        explanation: 'Dogs to cats is $6 : 9 = 2 : 3$ (the order follows the words). Cement is 1 of $5 + 1 = 6$ shares, so $\\frac{1}{6}$ of the mix; $\\frac{1}{5}$ compares cement to sand, not to the whole. To split \\$90 in the ratio $4 : 5$, divide by $4 + 5 = 9$ to get one share of \\$10, then the parts are \\$40 and \\$50.'
      }
    },
    {
      id: 'arrr2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- A ratio is written in the **same order as the words**; the flipped ratio is a favorite wrong choice
- **Simplify** a ratio by dividing both numbers by the same amount
- **Part-to-whole:** in a ratio $a : b$, the first part is $\\frac{a}{a + b}$ of the total
- **Parts method:** total ÷ (sum of the parts) = one share, then multiply by each part
- Three-part ratios work the same way; check that the pieces add back to the total
- When a ratio changes, keep the unchanged amount fixed and answer exactly what was asked (the number **added**, not the new total)

> **Up Next:** Part 3 — proportions and scale: rates that stay the same, recipes and mixtures, and map and blueprint scales.`
    }
  ]
};
