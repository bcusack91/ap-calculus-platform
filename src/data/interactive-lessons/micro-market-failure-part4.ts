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
| 📖 From Quintile Shares to a Lorenz Curve |
| Reading the Curve |
| The Gini Coefficient |
| Computing a Gini Coefficient from Quintiles |
| Comparing Distributions |

> 🔑 **Key Concept:** A **Lorenz curve** plots the cumulative percentage of income received against the cumulative percentage of households, ranked from poorest to richest. The farther it bows below the 45-degree **line of perfect equality**, the more unequal the distribution. The **Gini coefficient** turns that bow into one number: area A (between the line of equality and the curve) divided by the whole triangle under the line, A + B. It runs from **0 (perfect equality)** to **1 (perfect inequality)**.
      `
    },
    {
      id: 'micromar4-lorenz',
      type: 'text' as const,
      content: `
## 📖 From Quintile Shares to a Lorenz Curve

Rank every household from the lowest income to the highest and split them into five equal groups, called **quintiles**. Each quintile is 20% of households. Then record the share of total income each quintile receives.

### Northland's Income Distribution

| Quintile | Share of income | Cumulative % of households | Cumulative % of income |
|---|---|---|---|
| Poorest 20% | 4% | 20 | **4** |
| Second 20% | 9% | 40 | 4 + 9 = **13** |
| Middle 20% | 15% | 60 | 13 + 15 = **28** |
| Fourth 20% | 23% | 80 | 28 + 23 = **51** |
| Richest 20% | 49% | 100 | 51 + 49 = **100** |

### Drawing It
- **Horizontal axis:** cumulative percentage of households, 0 to 100.
- **Vertical axis:** cumulative percentage of income, 0 to 100.
- Plot (0, 0), (20, 4), (40, 13), (60, 28), (80, 51) and (100, 100), and connect them. That is the **Lorenz curve**.
- Draw the **line of perfect equality**, the 45-degree diagonal from (0, 0) to (100, 100). On it, every 20% of households gets 20% of income.
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

Label two areas on the Lorenz diagram:
- **A:** the area between the line of perfect equality and the Lorenz curve.
- **B:** the area below the Lorenz curve.

$$\\text{Gini} = \\frac{A}{A + B}$$

| Distribution | Area A | Gini |
|---|---|---|
| Perfect equality (curve on the diagonal) | 0 | **0** |
| Perfect inequality (curve along the axes) | All of the triangle (B = 0) | **1** |
| Real economies | In between | Between 0 and 1 |

### Using Areas
A + B is the whole triangle under the diagonal. With both axes running 0 to 100, that triangle is ½ × 100 × 100 = **5,000**. (With axes from 0 to 1, it is 0.5, and the Gini equals 2A.)

**Example:** A = 1,500 and B = 3,500. Gini = 1,500 ÷ 5,000 = **0.30**.

### What the Number Tells You
- A **higher** Gini means a larger area A, a Lorenz curve that bows **farther** from the diagonal, and **more** inequality.
- A **lower** Gini means the curve hugs the diagonal: **more** equality.
- The Gini describes how income is **divided**, not how much there is. A poor country and a rich country can have the same Gini.
      `
    },
    {
      id: 'micromar4-compute',
      type: 'text' as const,
      content: `
## Computing a Gini Coefficient from Quintiles

AP questions usually give you the areas or ask you to compare curves. To see where a Gini comes from, find area B as five trapezoids, one per quintile. Each is 20 wide, and its area is 20 × (height at its left edge + height at its right edge) ÷ 2.

### Northland (cumulative heights 0, 4, 13, 28, 51, 100)

| Quintile | Trapezoid area |
|---|---|
| 0–20 | 20 × (0 + 4) ÷ 2 = 40 |
| 20–40 | 20 × (4 + 13) ÷ 2 = 170 |
| 40–60 | 20 × (13 + 28) ÷ 2 = 410 |
| 60–80 | 20 × (28 + 51) ÷ 2 = 790 |
| 80–100 | 20 × (51 + 100) ÷ 2 = 1,510 |
| **B** | **2,920** |

A = 5,000 − 2,920 = **2,080**, so Gini = 2,080 ÷ 5,000 = **0.416**.

### Southland (shares 8%, 13%, 18%, 24%, 37%)
Cumulative heights: 0, 8, 21, 39, 63, 100. The trapezoids add to B = 80 + 290 + 600 + 1,020 + 1,630 = **3,620**, so A = 1,380 and Gini = 1,380 ÷ 5,000 = **0.276**.

Southland's curve lies closer to the diagonal at every point, and its Gini is lower: income there is **more equally** distributed.
      `
    },
    {
      id: 'micromar4-input',
      type: 'input-boxes' as const,
      content: `
**Build and Measure** ✍️

Eastland's income shares by quintile, poorest to richest, are **5%, 10%, 15%, 25% and 45%**. Its Lorenz diagram uses axes from 0 to 100.

1) What is the cumulative share of income (in percent) of the poorest 60% of households? (number only)

2) Area A is 1,900 and area B is 3,100. What is Eastland's Gini coefficient? (decimal)

3) After a reform, Eastland's Gini falls to 0.30. What is area A now?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '0.38', '1500'],
        hint1: 'Add the shares of the three poorest quintiles.',
        hint2: 'Gini = A ÷ (A + B), and A + B is 5,000 on these axes.',
        hint3: 'Rearrange: A = Gini × 5,000.',
        explanation: '1) 5 + 10 + 15 = 30%. 2) 1,900 ÷ (1,900 + 3,100) = 1,900 ÷ 5,000 = 0.38. 3) 0.30 × 5,000 = 1,500: the area between the curve and the diagonal shrinks as the curve moves toward equality.'
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
            question: 'On a Lorenz diagram with axes from 0 to 100, area A between the line of equality and the curve is 1,750, and area B under the curve is 3,250. What is the Gini coefficient?',
            options: [
              '0.35',
              '0.54',
              '0.65',
              '0.175'
            ],
            correctAnswer: 0,
            explanation: 'Gini = A ÷ (A + B) = 1,750 ÷ 5,000 = 0.35. Dividing A by B gives about 0.54, and 0.65 is B\'s share of the triangle, which measures equality rather than inequality.'
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
            explanation: 'The Gini is area A divided by a fixed triangle, so equal Ginis mean equal areas A. The curves themselves can cross, with one country more unequal at the bottom and the other at the top, and the Gini says nothing about the level of income.'
          }
        ]
      }
    }
  ]
}
