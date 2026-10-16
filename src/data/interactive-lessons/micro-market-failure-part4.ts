export const microMarketFailurePart4Data = {
  topicSlug: 'micro-market-failure',
  sections: [
    {
      id: 'micromar4-intro',
      type: 'text' as const,
      content: `
# 💰 Market Failure

**Part 4 of 7 — Measuring Inequality: The Lorenz Curve and the Gini Coefficient**

---

| Section |
|---------|
| 📖 What a Lorenz Curve Shows |
| Reading the Curve |
| The Gini Coefficient |
| Comparing Across Countries, Groups and Time |
| Comparing Distributions |

> 🔑 **Key Concept:** A **Lorenz curve** plots the cumulative percentage of income received against the cumulative percentage of households, ranked from poorest to richest. The farther it bows below the 45-degree **line of perfect equality**, the more unequal the distribution. The **Gini coefficient** turns that bow into one number from **0 (perfect equality)** to **1 (perfect inequality)**. The AP exam asks you to read and compare these measures (CED POL-5.A.2); it does not ask you to draw a Lorenz curve or calculate a Gini coefficient.
      `
    },
    {
      id: 'micromar4-lorenz',
      type: 'text' as const,
      content: `
## 📖 What a Lorenz Curve Shows

Rank every household from the lowest income to the highest and split them into five equal groups, called **quintiles**. Each quintile is 20% of households. A Lorenz diagram shows how much of total income each group receives.

### Northland's Income Distribution

| Quintile | Share of income | Cumulative % of households | Cumulative % of income |
|---|---|---|---|
| Poorest 20% | 4% | 20 | **4** |
| Second 20% | 9% | 40 | 4 + 9 = **13** |
| Middle 20% | 15% | 60 | 13 + 15 = **28** |
| Fourth 20% | 23% | 80 | 28 + 23 = **51** |
| Richest 20% | 49% | 100 | 51 + 49 = **100** |

### The Parts of the Diagram
- **Horizontal axis:** cumulative percentage of households, poorest first, 0 to 100.
- **Vertical axis:** cumulative percentage of income, 0 to 100.
- **Line of perfect equality:** the 45-degree diagonal. On it, every 20% of households gets 20% of income.
- **Lorenz curve:** the actual distribution. Northland's passes through (20, 4), (40, 13), (60, 28) and (80, 51).
- **Perfect inequality** (one household has all the income) runs along the horizontal axis to 100 and then straight up.

Every Lorenz curve starts at (0, 0), ends at (100, 100), and sags **below** the diagonal, because households are ranked from poorest to richest: each added group has at least as much income as the one before.
      `
    },
    {
      id: 'micromar4-reading',
      type: 'text' as const,
      content: `
## Reading the Curve

| Question | How to read it | Northland |
|---|---|---|
| Share of the poorest 40%? | Height of the curve at 40 | **13%** |
| Share of the richest 20%? | 100 minus the height at 80 | 100 − 51 = **49%** |
| Share of the middle quintile alone? | Height at 60 minus height at 40 | 28 − 13 = **15%** |
| Share of the richest 40%? | 100 minus the height at 60 | 100 − 28 = **72%** |
| How many times the poorest quintile's share does the richest quintile get? | 49 ÷ 4 | about **12 times** |

> ⚠️ **Common trap:** The curve's height at 40 is the **cumulative** share of the poorest 40%, not the share of the second quintile alone. To get a single quintile, subtract the height at the start of that quintile from the height at its end.
      `
    },
    {
      id: 'micromar4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Westland\'s income shares by quintile, from poorest to richest, are 6%, 11%, 16%, 22% and 45%. What share of income goes to the poorest 60% of households?',
            options: [
              '33%',
              '16%',
              '55%',
              '45%'
            ],
            correctAnswer: 0,
            explanation: 'Add the three poorest quintiles: 6 + 11 + 16 = 33%. 16% is the middle quintile alone, 55% is the cumulative share of the poorest 80%, and 45% is the richest quintile\'s share.'
          },
          {
            question: 'A Lorenz curve passes through the point (40, 13). What does that point mean?',
            options: [
              'The poorest 40% of households receive 13% of all income',
              'The second-poorest 20% of households receive 13% of income',
              'The richest 40% of households receive 13% of the total income',
              'Households with \\$40,000 of income hold 13% of all wealth'
            ],
            correctAnswer: 0,
            explanation: 'The horizontal axis is the cumulative share of households, poorest first, and the vertical axis is their cumulative share of income. The single second quintile\'s share would be 13 minus the height at 20, and the axes show percentages, not dollar incomes.'
          },
          {
            question: 'Northland\'s cumulative income shares at 20, 40, 60 and 80 percent of households are 4, 13, 28 and 51. What share of income does the richest 20% of households receive?',
            options: [
              '49%',
              '51%',
              '23%',
              '100%'
            ],
            correctAnswer: 0,
            explanation: 'The poorest 80% receive 51%, so the richest 20% receive 100 − 51 = 49%. 51% is the poorest 80% themselves, and 23% is the fourth quintile\'s share (51 − 28).'
          }
        ]
      }
    },
    {
      id: 'micromar4-gini',
      type: 'text' as const,
      content: `
## The Gini Coefficient

The **Gini coefficient** summarizes the whole Lorenz curve in one number: it measures how much of the area under the line of perfect equality lies **between** that line and the Lorenz curve.

| Distribution | Where the curve lies | Gini |
|---|---|---|
| Perfect equality | On the diagonal | **0** |
| Perfect inequality | Along the axes | **1** |
| Real economies | In between | Between 0 and 1 |

### What the Number Tells You
- A **higher** Gini means a Lorenz curve that bows **farther** from the diagonal, and **more** inequality.
- A **lower** Gini means the curve hugs the diagonal: **more** equality.
- The Gini describes how income is **divided**, not how much there is. A poor country and a rich country can have the same Gini.

> ℹ️ Drawing a Lorenz curve and calculating a Gini coefficient are outside the AP course; exam questions give you the curves or the Gini values and ask what they mean.
      `
    },
    {
      id: 'micromar4-groups',
      type: 'text' as const,
      content: `
## Comparing Across Countries, Groups and Time

The CED uses these measures to **compare** distributions (POL-5.A.2), and it stresses that income levels and poverty rates vary greatly both across and **within** groups, such as age groups, and across countries (POL-5.A.1).

### Two Countries on One Diagram
| Cumulative % of households | Westland income % | Southland income % |
|---|---|---|
| 20 | 6 | 8 |
| 40 | 17 | 21 |
| 60 | 33 | 39 |
| 80 | 55 | 63 |

Southland's curve lies **above** Westland's at every point, so it is closer to the line of equality everywhere: Southland's distribution is more equal and its Gini is **lower**.

### Over Time
If a country's Gini rises from 0.38 to 0.42 over a decade, its Lorenz curve has moved **away** from the line of equality: the distribution became **more unequal**, whether or not average income rose.

### Within Groups
Inequality can be measured inside any group. Income usually rises with age through the working years, so a group of 25-year-olds and a group of 55-year-olds can have very different average incomes and different Lorenz curves even in the same country.

> ⚠️ **Common trap:** A curve that lies closer to the diagonal says nothing about which country is **richer**. Lorenz curves and Gini coefficients compare shares, not levels.
      `
    },
    {
      id: 'micromar4-input',
      type: 'input-boxes' as const,
      content: `
**Read the Distribution** ✍️

Eastland's income shares by quintile, poorest to richest, are **5%, 10%, 15%, 25% and 45%**. Its Lorenz diagram uses axes from 0 to 100.

1) What is the cumulative share of income (in percent) of the poorest 60% of households? (number only)

2) What share of income (in percent) do Eastland's richest 40% of households receive? (number only)

3) After a reform, Eastland's Lorenz curve moves toward the line of equality. Does its Gini coefficient rise or fall? (one word)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '70', 'fall'],
        hint1: 'Add the shares of the three poorest quintiles.',
        hint2: 'Add the two richest quintiles, or subtract the poorest 60% from 100.',
        hint3: 'A curve closer to the diagonal means a smaller gap between them.',
        explanation: '1) 5 + 10 + 15 = 30%. 2) 25 + 45 = 70%, which is also 100 − 30. 3) The Gini falls: a curve closer to the line of equality means a more equal distribution.'
      }
    },
    {
      id: 'micromar4-compare',
      type: 'text' as const,
      content: `
## Comparing Distributions

### Before and After Taxes and Transfers
Economists often draw two Lorenz curves for the same country: one for **market income** (wages, interest, profits) and one for **disposable income** (after taxes are paid and transfers such as cash assistance are received).

| Quintile | Market income share | Disposable income share |
|---|---|---|
| Poorest 20% | 3% | 6% |
| Second 20% | 8% | 11% |
| Middle 20% | 14% | 16% |
| Fourth 20% | 23% | 23% |
| Richest 20% | 52% | 44% |
| **Gini** | **0.452** | **0.352** |

Taxes that take a larger share from high incomes, and transfers aimed at low incomes, move the Lorenz curve **toward** the line of equality, so the Gini **falls**. Part 5 looks at which taxes do this.

### Income Versus Wealth
**Income** is a flow (earnings per year). **Wealth** is a stock (the value of what a household owns, minus its debts). Wealth is usually distributed **more unequally** than income, because savings and inheritances build up over time and many households have little or no net wealth. A wealth Lorenz curve therefore bows farther from the diagonal and has a higher Gini.

### Limits of a Single Number
- Two different Lorenz curves can cross and still have the **same** Gini, so one number can hide where the inequality is.
- The Gini says nothing about the **level** of income or about poverty on its own.

> 🔑 **AP Connection:** Expect to identify the line of equality, read shares off a curve, explain why a curve farther from the diagonal means a higher Gini, and predict how a policy shifts the curve. An outward shift (away from the diagonal) means **more** inequality and a **higher** Gini.
      `
    },
    {
      id: 'micromar4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country P\'s poorest 20% of households receive 3% of income and its richest 20% receive 55%. Country R\'s figures are 8% and 38%. Which conclusion is best supported?',
            options: [
              'R\'s Lorenz curve lies closer to the line of equality',
              'P\'s Lorenz curve lies closer to the line of equality',
              'Average household income is higher in R than in P',
              'P and R must have equal Gini coefficients'
            ],
            correctAnswer: 0,
            explanation: 'R\'s poor get a larger share and its rich a smaller share, so R\'s curve hugs the diagonal more closely and its income is more evenly divided. Shares say nothing about average income levels, and these very different shares give no reason to expect equal Gini coefficients.'
          },
          {
            question: 'Country X has a Gini coefficient of 0.28 and Country Y has a Gini coefficient of 0.46. Which conclusion is valid?',
            options: [
              'Income is more equally divided in X',
              'Average income is higher in X than in Y',
              'Y\'s Lorenz curve lies closer to the diagonal',
              'More households in Y live in poverty'
            ],
            correctAnswer: 0,
            explanation: 'A lower Gini means a smaller area between the Lorenz curve and the line of equality, so X\'s income is more evenly divided and Y\'s curve bows farther from the diagonal. The Gini measures distribution only, so it cannot tell you which country is richer or has more poverty.'
          },
          {
            question: 'Two countries have exactly the same Gini coefficient. Which statement must be true?',
            options: [
              'The areas between their Lorenz curves and the line of equality are equal',
              'Their Lorenz curves lie on top of each other at every point',
              'Their poorest 20% of households get the same share of income',
              'Their households have the same average income per year'
            ],
            correctAnswer: 0,
            explanation: 'The Gini measures the area between the Lorenz curve and the line of equality as a share of the area under that line, so equal Ginis mean equal gaps. The curves themselves can cross, with one country more unequal at the bottom and the other at the top, and the Gini says nothing about the level of income.'
          }
        ]
      }
    }
  ]
}
