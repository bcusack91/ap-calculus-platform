export const microElasticityPart6Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {
      id: 'microela6-intro',
      type: 'text' as const,
      content: `
# 📏 Elasticity

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Elasticity Is Tested |
| FRQ Practice 1: A Coffee Shop |
| FRQ Practice 2: A Concert Venue |

> 🔑 **Key Concept:** Elasticity appears on the AP Microeconomics exam as quick multiple-choice calculations and as parts of longer free-response questions. Points come from **showing the calculation** and **explaining with the right comparison**, not just naming the answer.
      `
    },
    {
      id: 'microela6-tested',
      type: 'text' as const,
      content: `
## 📖 How Elasticity Is Tested

### Free-Response Task Verbs

| Verb in the prompt | What earns the point | Elasticity example |
|---|---|---|
| **Calculate** | Show the setup with numbers, then the answer | "PED = 6% ÷ 10% = 0.6" |
| **Identify** | Name the answer; no explanation needed | "Inelastic" |
| **Explain** | Give the economic reason that links cause to result | "Quantity fell by a smaller percentage than price rose, so total revenue increased" |
| **Draw** | A correctly labeled graph | Vertical supply curve labeled S at Q = 2,000 |

### The Four Classic Elasticity Tasks

1. **Compute PED** from percent changes (or from prices and quantities) and classify it.
2. **Apply the total revenue test** in either direction: elasticity → revenue, or revenue → elasticity.
3. **Classify goods** with cross-price elasticity (substitutes or complements) and income elasticity (normal or inferior, luxury or necessity).
4. **Use elasticity to predict** how much a price or quantity changes after a shift in supply or demand.

> 🔑 **AP Connection:** When a prompt says "explain," always compare **percentages**. "Demand is inelastic because consumers need it" does not earn the point by itself; "the percentage decrease in quantity demanded is smaller than the percentage increase in price" does.
      `
    },
    {
      id: 'microela6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice 1: A Coffee Shop

**Prompt.** Sunrise Coffee raises the price of a latte from \\$4.00 to \\$4.40. Daily lattes sold fall from 500 to 470.

**(a)** Calculate the price elasticity of demand, using percentage changes from the original values. Show your work.

**(b)** Is demand elastic, inelastic, or unit elastic? Explain using total revenue.

**(c)** The income elasticity of demand for Sunrise lattes is 1.4. Local incomes fall 5 percent. What happens to the demand for lattes, and what kind of good is a latte?

**(d)** The cross-price elasticity of demand for Sunrise muffins with respect to the latte price is −0.5. Using the price change in part (a), calculate the change in muffin sales and identify the relationship.

### Model Answers

**(a)** Price change: (4.40 − 4.00) ÷ 4.00 = **+10%**. Quantity change: (470 − 500) ÷ 500 = **−6%**. PED = 6% ÷ 10% = **0.6**.

**(b)** **Inelastic.** Total revenue rose from \\$4.00 × 500 = **\\$2,000** to \\$4.40 × 470 = **\\$2,068**. Price and total revenue moved in the same direction, because the percentage decrease in quantity (6%) was smaller than the percentage increase in price (10%).

**(c)** Demand falls by 1.4 × 5% = **7%** at every price, so the demand curve **shifts left**. The positive income elasticity above 1 makes a latte a **normal good** and a **luxury**.

**(d)** −0.5 × (+10%) = **−5%**: muffin sales fall 5%. The negative sign means muffins and lattes are **complements**.

### Scoring Notes

- In (a), the setup with both percentages is what earns the calculation point. A bare "0.6" may not.
- In (b), quoting both revenue numbers or comparing the two percentages counts as the explanation. "Coffee is addictive" does not.
- In (c), say "the demand curve shifts left" rather than "quantity demanded falls": income changes shift the curve.
      `
    },
    {
      id: 'microela6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 10 percent increase in the price of a café\'s lattes leads to a 6 percent decrease in quantity demanded. If the café\'s goal is more total revenue, the price increase was',
            options: [
              'a good move, since demand is inelastic',
              'a bad move, since demand is elastic',
              'a good move, since demand is elastic',
              'a bad move, since demand is inelastic'
            ],
            correctAnswer: 0,
            explanation: 'PED is 6 ÷ 10 = 0.6, so demand is inelastic, and with inelastic demand a price increase raises total revenue. Calling demand elastic would predict a revenue loss from the same price increase.'
          },
          {
            question: 'On a free-response question, a student must explain why total revenue rose after a price increase. Which explanation earns the point?',
            options: [
              'Price rose by a larger percent than quantity fell',
              'Quantity dropped by a larger percent than price rose',
              'The demand curve shifted right after the price rose',
              'Buyers kept purchasing the same quantity as before'
            ],
            correctAnswer: 0,
            explanation: 'Revenue rises after a price increase when the percentage drop in quantity is smaller than the percentage rise in price. A larger drop in quantity would lower revenue, a price change does not shift demand, and quantity usually does fall somewhat.'
          },
          {
            question: 'Income elasticity of demand for a café\'s lattes is 1.4. If local incomes fall 5 percent, the demand curve for lattes',
            options: [
              'shifts left by 7 percent at each price',
              'shifts right by 7 percent at each price',
              'moves left by 3.6 percent at each price',
              'stays put while quantity falls 7 percent'
            ],
            correctAnswer: 0,
            explanation: 'Multiply the income elasticity by the income change: 1.4 × −5% = −7%, so buyers want 7 percent fewer lattes at each price and the curve shifts left. The figure 3.6 percent divides instead of multiplying, and an income change shifts the curve rather than moving buyers along it.'
          }
        ]
      }
    },
    {
      id: 'microela6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice 2: A Concert Venue

**Prompt.** A concert hall has exactly 2,000 seats for Friday's show. Demand for tickets is **Qd = 4,000 − 40P**.

**(a)** Identify the price elasticity of supply of seats for Friday's show, and describe the supply curve.

**(b)** Calculate the ticket price that exactly sells out the hall.

**(c)** Is demand elastic, inelastic, or unit elastic at that price? Explain.

**(d)** The promoter instead charges \\$60. Calculate total revenue and compare it with part (b).

**(e)** A surprise guest is announced, and demand for tickets increases. What happens to the equilibrium price and quantity?

### Model Answers

**(a)** PES = **0**. The supply curve is **vertical** at Q = 2,000, because the number of seats cannot change before Friday.

**(b)** Set 2,000 = 4,000 − 40P, so 40P = 2,000 and **P = \\$50**. Total revenue = \\$50 × 2,000 = **\\$100,000**.

**(c)** **Unit elastic.** The demand curve's price intercept is \\$100 and its quantity intercept is 4,000, so its midpoint is (2,000 tickets, \\$50). A straight-line demand curve is unit elastic at its midpoint, which is also where total revenue is at its maximum.

**(d)** At \\$60, Qd = 4,000 − 2,400 = **1,600** tickets. Total revenue = \\$60 × 1,600 = **\\$96,000**, which is \\$4,000 **less** than at \\$50, and 400 seats sit empty. Above the midpoint, demand is elastic, so the price increase lowered revenue.

**(e)** With a vertical supply curve, the rightward shift in demand **raises the price** and leaves **quantity unchanged** at 2,000.

### Scoring Notes

- In (c), naming the midpoint, or showing that revenue is lower at nearby prices, is the explanation.
- In (e), both variables must be addressed: price rises **and** quantity stays the same.
      `
    },
    {
      id: 'microela6-input',
      type: 'input-boxes' as const,
      content: `
**Mixed Calculation Drill** 🧮

**1)** The price of a bus pass rises 12 percent, and quantity demanded falls 3 percent. What is the PED? (absolute value, two decimals)

**2)** A bookstore raises a price from \\$8 to \\$10, and weekly sales fall from 300 to 260. By how many dollars does total revenue change? (include a minus sign if it falls)

**3)** Income rises 6 percent, and the quantity of instant noodles demanded falls 1.5 percent. What is the income elasticity? (include the sign, two decimals)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.25', '200', '-0.25'],
        hint1: 'Quantity on top: 3 ÷ 12.',
        hint2: 'Compare \\$8 × 300 with \\$10 × 260.',
        hint3: 'Divide −1.5 by +6 and keep the sign.',
        explanation: '1) 3 ÷ 12 = 0.25, inelastic. 2) Revenue goes from \\$2,400 to \\$2,600, a rise of \\$200, which fits inelastic demand over this range. 3) −1.5 ÷ 6 = −0.25, so instant noodles are an inferior good.'
      }
    },
    {
      id: 'microela6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A 1,500-seat theater faces the demand curve Qd = 3,000 − 50P. Which ticket price maximizes total revenue?',
            options: [
              '\\$30',
              '\\$60',
              '\\$15',
              '\\$45'
            ],
            correctAnswer: 0,
            explanation: 'The price intercept is \\$60, where 3,000 − 50P = 0, and total revenue peaks at the midpoint, half of that price, or \\$30, where all 1,500 seats sell for \\$45,000. At \\$60 no tickets sell, and at \\$45 only 750 sell, for \\$33,750.'
          },
          {
            question: 'A museum raises admission from \\$20 to \\$25, and daily ticket revenue falls from \\$12,000 to \\$11,000. Over this price range, demand for admission is',
            options: [
              'elastic',
              'inelastic',
              'unit elastic',
              'perfectly inelastic'
            ],
            correctAnswer: 0,
            explanation: 'A price increase that lowers total revenue means quantity fell by a larger percentage than price rose, so demand is elastic. Inelastic demand would have raised revenue, and unit elastic demand would have left it unchanged.'
          },
          {
            question: 'Over the next two years, the city opens a second, larger concert hall. Compared with the market for one show, the long-run supply of concert seats becomes',
            options: [
              'more elastic, so demand increases raise quantity more',
              'less elastic, so demand increases raise price more',
              'perfectly inelastic, so only the price can change',
              'unit elastic, so revenue stays the same everywhere'
            ],
            correctAnswer: 0,
            explanation: 'Time lets sellers add capacity, so long-run supply is more elastic, and an increase in demand then shows up more in quantity and less in price. A fixed number of seats is the short-run, perfectly inelastic case.'
          }
        ]
      }
    }
  ]
}
