import type { LessonData } from '../registry'

export const parts: LessonData[] = [
  // ============================================================
  // PART 1 — Concept Introduction
  // ============================================================
  {
    topicSlug: 'percent-applications-grade7',
    sections: [
      {
        id: 'percent-applications-grade7-p1-intro',
        type: 'text' as const,
        content: `
# 🛍️ Percent Applications

**Part 1 of 5 — Concept Introduction**

Every time you see a "30% OFF" sign, add **sales tax** at the register, or leave a **tip** at a restaurant, you are doing percent math in the real world. In this lesson you will learn one core idea and then use it to handle discounts, tax, tips, and percent change like a pro.

## The Big Idea: Percent of a Number

A **percent** is just a fraction out of $100$. The word *percent* literally means "per hundred." So $25\\%$ means $25$ out of $100$, which is the decimal $0.25$.

To find a percent of a number, you multiply:

$$\\text{Part} = \\text{Percent} \\times \\text{Whole}$$

The trick is to first turn the percent into a **decimal** by dividing by $100$ (move the decimal point two places left).

| Percent | Decimal |
|---------|---------|
| $25\\%$ | $0.25$ |
| $8\\%$ | $0.08$ |
| $15\\%$ | $0.15$ |
| $100\\%$ | $1.00$ |
    `
      },
      {
        id: 'percent-applications-grade7-p1-worked',
        type: 'text' as const,
        content: `
## Worked Example: Find a Percent of a Number

**Find $25\\%$ of $80$.**

**Step 1 — Change the percent to a decimal.**
$$25\\% = 0.25$$

**Step 2 — Multiply by the whole.**
$$0.25 \\times 80 = 20$$

So $25\\%$ of $80$ is **$20$**. ✅

That single skill — multiply the decimal by the whole — is the engine behind discounts, tax, and tips. You will reuse it again and again.
    `
      },
      {
        id: 'percent-applications-grade7-p1-change',
        type: 'text' as const,
        content: `
## Percent Change 📈📉

Sometimes a value goes **up** (a price increase, a raise) or **down** (a sale, a price drop). **Percent change** measures how big that change is compared to where you started:

$$\\text{Percent Change} = \\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100\\%$$

- A **positive** answer means an **increase**.
- A **negative** answer means a **decrease**.

**Example:** A plant grows from $10$ cm to $13$ cm.
$$\\frac{13 - 10}{10} \\times 100\\% = \\frac{3}{10} \\times 100\\% = 30\\%$$

The plant grew by **$30\\%$** — a positive number, so it is an increase. 🌱
    `
      },
      {
        id: 'percent-applications-grade7-p1-mcq',
        type: 'multiple-choice' as const,
        content: `
**Concept Check** 🎯

Make sure you can find a percent of a number.
    `,
        exercise: {
          questions: [
            {
              question: 'What is $10\\%$ of $50$?',
              options: [
                '$5$',
                '$10$',
                '$0.5$',
                '$500$'
              ],
              correctAnswer: 0,
              explanation: 'Change $10\\%$ to the decimal $0.10$, then multiply: $0.10 \\times 50 = 5$.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 2 — Worked Examples
  // ============================================================
  {
    topicSlug: 'percent-applications-grade7',
    sections: [
      {
        id: 'percent-applications-grade7-p2-discount',
        type: 'text' as const,
        content: `
# 🧮 Worked Examples

**Part 2 of 5 — Step-by-Step**

## Discounts: Paying Less

A **discount** lowers the price. If something is "$20\\%$ off," you do **not** pay that $20\\%$ — so you keep paying the other $80\\%$. There are two ways to find the final price:

**Method 1 — Subtract the discount:**
$$\\text{Discount} = 0.20 \\times 50 = 10 \\qquad \\text{Final} = 50 - 10 = \\$40$$

**Method 2 — Multiply by what is left (the shortcut):**
$$50 \\times (1 - 0.20) = 50 \\times 0.80 = \\$40$$

Both give **$\\$40$**. The shortcut, *original price* $\\times (1 - \\text{discount rate})$, is faster once you trust it.
    `
      },
      {
        id: 'percent-applications-grade7-p2-tax-tip',
        type: 'text' as const,
        content: `
## Tax and Tips: Paying More

**Sales tax** is an *extra* amount added on top of the price. Because you pay $100\\%$ of the price **plus** the tax, you multiply by $(1 + \\text{tax rate})$.

**Example — $\\$30$ item with $8\\%$ tax:**
$$30 \\times (1 + 0.08) = 30 \\times 1.08 = \\$32.40$$

A **tip** is money you give for good service, usually a percent of the bill. To find the tip *amount* by itself, just multiply:

**Example — $15\\%$ tip on a $\\$40$ bill:**
$$40 \\times 0.15 = \\$6$$

| Situation | What you do | Multiplier |
|-----------|-------------|------------|
| Discount | pay less | $\\times (1 - \\text{rate})$ |
| Tax | pay more | $\\times (1 + \\text{rate})$ |
| Tip (amount) | extra money | $\\times \\text{rate}$ |
    `
      },
      {
        id: 'percent-applications-grade7-p2-input',
        type: 'input-boxes' as const,
        content: `
**Your Turn** ✏️

A jacket costs $\\$60$ and is on sale for $25\\%$ off. Work through it step by step.

- **Box 1:** The discount amount: $0.25 \\times 60 = ?$ (dollars)
- **Box 2:** The sale price: $60 - \\text{discount} = ?$ (dollars)
- **Box 3:** Using the shortcut, $60 \\times 0.75 = ?$ (dollars — it should match Box 2!)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['15', '45', '45'],
          hint1: 'For the discount amount, change $25\\%$ to $0.25$ and multiply: $0.25 \\times 60$.',
          hint2: 'Subtract the discount from $\\$60$ to get the sale price. The shortcut $60 \\times 0.75$ should land on the same sale price.',
          explanation: 'The discount is $0.25 \\times 60 = \\$15$. The sale price is $60 - 15 = \\$45$. The shortcut confirms it: $60 \\times (1 - 0.25) = 60 \\times 0.75 = \\$45$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 3 — Guided Practice
  // ============================================================
  {
    topicSlug: 'percent-applications-grade7',
    sections: [
      {
        id: 'percent-applications-grade7-p3-mcq',
        type: 'multiple-choice' as const,
        content: `
# 🤝 Guided Practice

**Part 3 of 5**

Apply the discount, tax, and tip rules to these two questions.
    `,
        exercise: {
          questions: [
            {
              question: 'A $\\$20$ shirt is marked $30\\%$ off. What is the **sale price**?',
              options: [
                '$\\$14$',
                '$\\$6$',
                '$\\$17$',
                '$\\$26$'
              ],
              correctAnswer: 0,
              explanation: 'You pay $100\\% - 30\\% = 70\\%$ of the price: $20 \\times 0.70 = \\$14$. (The $\\$6$ is just the discount, not the sale price.)'
            },
            {
              question: 'A meal costs $\\$50$ and the sales tax is $6\\%$. What is the **total** you pay?',
              options: [
                '$\\$53$',
                '$\\$56$',
                '$\\$47$',
                '$\\$3$'
              ],
              correctAnswer: 0,
              explanation: 'Tax adds on top, so multiply by $1 + 0.06 = 1.06$: $50 \\times 1.06 = \\$53$.'
            }
          ]
        }
      },
      {
        id: 'percent-applications-grade7-p3-dropdown',
        type: 'dropdown-select' as const,
        content: `
**Choose the Right Multiplier** 🔽

For each situation, pick the calculation that finds the correct answer.
    `,
        exercise: {
          dropdowns: [
            {
              label: 'To find the final price of a $\\$40$ item with $10\\%$ tax, you compute:',
              options: ['$40 \\times 1.10$', '$40 \\times 0.90$', '$40 \\times 0.10$', '$40 \\times 1.01$']
            },
            {
              label: 'To find the final price of a $\\$40$ item that is $10\\%$ off, you compute:',
              options: ['$40 \\times 1.10$', '$40 \\times 0.90$', '$40 \\times 0.10$', '$40 \\times 1.01$']
            }
          ],
          correctAnswers: ['$40 \\times 1.10$', '$40 \\times 0.90$'],
          hint1: 'Tax means you pay more, so multiply by $(1 + \\text{rate})$. A discount means you pay less, so multiply by $(1 - \\text{rate})$.',
          explanation: 'Tax: $40 \\times (1 + 0.10) = 40 \\times 1.10$. Discount: $40 \\times (1 - 0.10) = 40 \\times 0.90$.'
        }
      }
    ]
  },

  // ============================================================
  // PART 4 — Application & Word Problems
  // ============================================================
  {
    topicSlug: 'percent-applications-grade7',
    sections: [
      {
        id: 'percent-applications-grade7-p4-context',
        type: 'text' as const,
        content: `
# 🌎 Application & Word Problems

**Part 4 of 5**

Real receipts often combine several steps. Read carefully and figure out whether each percent makes the price go **up** or **down**.

## Maya's Restaurant Bill

Maya and her friends order food that comes to a **$\\$40$ bill**. Their server is great, so they leave a **$20\\%$ tip**. To find the *total* Maya pays, she needs two pieces:

1. The **tip amount**: $40 \\times 0.20 = \\$8$
2. The **total**: bill + tip $= 40 + 8 = \\$48$

Notice this is the same idea as tax — money added *on top* — so the shortcut $40 \\times 1.20 = \\$48$ also works. 🍽️
    `
      },
      {
        id: 'percent-applications-grade7-p4-input',
        type: 'input-boxes' as const,
        content: `
**Word Problem Practice** ✏️

A video game normally costs $\\$80$. During a sale it is $15\\%$ off, and then $5\\%$ sales tax is added to the **sale price**.

- **Box 1:** The sale price: $80 \\times 0.85 = ?$ (dollars)
- **Box 2:** The tax on the sale price: $0.05 \\times \\text{sale price} = ?$ (dollars)
- **Box 3:** The final total: sale price $+$ tax $= ?$ (dollars)
    `,
        exercise: {
          boxes: 3,
          correctAnswers: ['68', '3.4', '71.4'],
          hint1: 'First take $15\\%$ off the $\\$80$: $80 \\times (1 - 0.15) = 80 \\times 0.85$.',
          hint2: 'Tax is figured on the sale price, not the original price. Find $0.05$ of the sale price, then add it on.',
          explanation: 'Sale price: $80 \\times 0.85 = \\$68$. Tax: $0.05 \\times 68 = \\$3.40$. Final total: $68 + 3.40 = \\$71.40$.'
        }
      },
      {
        id: 'percent-applications-grade7-p4-mcq',
        type: 'multiple-choice' as const,
        content: `
**Percent Change in the Real World** 📊
    `,
        exercise: {
          questions: [
            {
              question: 'A jacket was $\\$40$ last week and is $\\$50$ this week. What is the **percent change** in price?',
              options: [
                '$25\\%$ increase',
                '$20\\%$ increase',
                '$10\\%$ increase',
                '$25\\%$ decrease'
              ],
              correctAnswer: 0,
              explanation: 'Percent change $= \\frac{50 - 40}{40} \\times 100\\% = \\frac{10}{40} \\times 100\\% = 25\\%$. Since it is positive, the price increased.'
            }
          ]
        }
      }
    ]
  },

  // ============================================================
  // PART 5 — Review & Challenge
  // ============================================================
  {
    topicSlug: 'percent-applications-grade7',
    sections: [
      {
        id: 'percent-applications-grade7-p5-summary',
        type: 'text' as const,
        content: `
# 🏆 Review & Challenge

**Part 5 of 5**

You now have a full toolkit for percent applications. Here is everything in one place:

## Summary Table

| Application | Formula | Quick Example |
|-------------|---------|---------------|
| **Percent of a number** | $\\text{Percent} \\times \\text{Whole}$ | $0.25 \\times 80 = 20$ |
| **Discount** | $\\text{Price} \\times (1 - \\text{rate})$ | $50 \\times 0.80 = \\$40$ |
| **Tax** | $\\text{Price} \\times (1 + \\text{rate})$ | $30 \\times 1.08 = \\$32.40$ |
| **Tip (amount)** | $\\text{Bill} \\times \\text{rate}$ | $40 \\times 0.15 = \\$6$ |
| **Percent change** | $\\frac{\\text{New} - \\text{Original}}{\\text{Original}} \\times 100\\%$ | $\\frac{13 - 10}{10} \\times 100\\% = 30\\%$ |

**Remember the direction:** discounts go **down** ($1 - \\text{rate}$), while tax and tips go **up** ($1 + \\text{rate}$). Percent change is **positive** for an increase and **negative** for a decrease. Now show what you know! 💪
    `
      },
      {
        id: 'percent-applications-grade7-p5-mcq',
        type: 'multiple-choice' as const,
        content: `
**Mixed Challenge** 🎯

These questions blend everything together. Take your time.
    `,
        exercise: {
          questions: [
            {
              question: 'A $\\$200$ bike is $40\\%$ off. After the discount, $5\\%$ tax is added. What is the **final total**?',
              options: [
                '$\\$126$',
                '$\\$120$',
                '$\\$130$',
                '$\\$210$'
              ],
              correctAnswer: 0,
              explanation: 'Sale price: $200 \\times (1 - 0.40) = 200 \\times 0.60 = \\$120$. Add tax: $120 \\times 1.05 = \\$126$.'
            },
            {
              question: 'A library had $80$ visitors on Monday and $60$ visitors on Tuesday. What is the **percent change** from Monday to Tuesday?',
              options: [
                '$25\\%$ decrease',
                '$20\\%$ decrease',
                '$25\\%$ increase',
                '$33\\%$ decrease'
              ],
              correctAnswer: 0,
              explanation: 'Percent change $= \\frac{60 - 80}{80} \\times 100\\% = \\frac{-20}{80} \\times 100\\% = -25\\%$. The negative sign means a $25\\%$ decrease.'
            }
          ]
        }
      }
    ]
  }
]
