export const microDemandSupplyEquilibriumPart3Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {
      id: 'microdem3-intro',
      type: 'text' as const,
      content: `
# ⚖️ Market Equilibrium & Applications

**Part 3 of 7 — Calculating Consumer and Producer Surplus**

---

| Section |
|---------|
| 📖 Surplus One Buyer and One Seller at a Time |
| Surplus as Triangles on Linear Curves |
| How Surplus Changes When a Curve Shifts |

> 🔑 **Key Concept:** Consumer surplus adds up, unit by unit, the gap between **what buyers would pay** and **what they do pay**. Producer surplus adds up the gap between **what sellers receive** and **the least they would accept**. With straight-line curves, each sum is the area of a triangle: $\\tfrac{1}{2} \\times \\text{base} \\times \\text{height}$.
`
    },
    {
      id: 'microdem3-discrete',
      type: 'text' as const,
      content: `
## 📖 Surplus One Buyer and One Seller at a Time

Four buyers each want one used textbook, and four sellers each have one to sell.

| Buyer | Willingness to pay | | Seller | Lowest acceptable price (cost) |
|---|---|---|---|---|
| Ari | \\$10 | | Wen | \\$2 |
| Bea | \\$8 | | Xia | \\$3 |
| Cal | \\$6 | | Yul | \\$5 |
| Dee | \\$4 | | Zoe | \\$7 |

### Find the Equilibrium
At a price of \\$5: Ari, Bea and Cal will buy (each values a book at \\$5 or more), and Wen, Xia and Yul will sell (each accepts \\$5 or less). Three buyers and three sellers, so **3 books trade at \\$5**. (Any price from \\$5 to \\$6 clears this tiny market; we use \\$5.) Dee (\\$4) and Zoe (\\$7) stay out: Dee values a book less than Zoe's cost, so that trade would destroy value.

### Add Up the Gaps
| Trader | Calculation | Surplus |
|---|---|---|
| Ari | \\$10 − \\$5 | \\$5 |
| Bea | \\$8 − \\$5 | \\$3 |
| Cal | \\$6 − \\$5 | \\$1 |
| **Consumer surplus** | | **\\$9** |
| Wen | \\$5 − \\$2 | \\$3 |
| Xia | \\$5 − \\$3 | \\$2 |
| Yul | \\$5 − \\$5 | \\$0 |
| **Producer surplus** | | **\\$5** |

**Total surplus = \\$14.** That equals the sum of (value − cost) for the three books that trade: (10 − 2) + (8 − 3) + (6 − 5) = 8 + 5 + 1 = 14. The price only decides how the \\$14 is **split** between buyers and sellers.

> 🔑 **AP Connection:** The marginal buyer (Cal) and marginal seller (Yul) get little or no surplus. Surplus goes mostly to the buyers who value the good most and the sellers who can produce it most cheaply.
`
    },
    {
      id: 'microdem3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the textbook market, suppose the price were \\$6 instead of \\$5 and the same three books still traded. How would total surplus change?',
            options: [
              'It stays at \\$14 while \\$3 shifts from buyers to sellers',
              'It rises to \\$17 because sellers earn \\$3 more in total',
              'It falls to \\$11 because buyers pay \\$3 more in total',
              'It rises to \\$15 because the marginal seller now gains'
            ],
            correctAnswer: 0,
            explanation: 'Total surplus depends only on the values and costs of the books that trade, which have not changed. Each of the three buyers pays \\$1 more and each seller receives \\$1 more, so \\$3 moves from consumer surplus to producer surplus.'
          },
          {
            question: 'Why would a trade between Dee, who values a book at \\$4, and Zoe, whose cost is \\$7, reduce total surplus?',
            options: [
              'The book is worth less to Dee than it costs Zoe to supply',
              'Dee would pay more than her own willingness to pay',
              'The trade would push the market price above \\$7',
              'Zoe would earn a surplus that is larger than Dee\'s'
            ],
            correctAnswer: 0,
            explanation: 'Every trade adds value minus cost to total surplus. Here that is \\$4 − \\$7 = −\\$3, so the trade destroys \\$3 of value no matter what price is paid. Efficient markets leave such trades out.'
          }
        ]
      }
    },
    {
      id: 'microdem3-triangles',
      type: 'text' as const,
      content: `
## 📖 Surplus as Triangles on Linear Curves

With many buyers and sellers, the steps in the table smooth into straight lines. Use the T-shirt market from Part 2: $Q_d = 120 - 10P$ and $Q_s = 20P - 60$, with equilibrium at \\$6 and 60 shirts.

### Step 1: Find the Price Intercepts
- **Demand** hits the price axis where $Q_d = 0$: $120 - 10P = 0$, so $P = \\$12$. No one pays \\$12 or more.
- **Supply** hits the price axis where $Q_s = 0$: $20P - 60 = 0$, so $P = \\$3$. No one sells below \\$3.

### Step 2: Consumer Surplus
The triangle under demand and above the price: base = 60 shirts, height = \\$12 − \\$6 = \\$6.

$$CS = \\tfrac{1}{2} \\times 60 \\times 6 = \\$180$$

### Step 3: Producer Surplus
The triangle above supply and below the price: base = 60 shirts, height = \\$6 − \\$3 = \\$3.

$$PS = \\tfrac{1}{2} \\times 60 \\times 3 = \\$90$$

### Step 4: Total Surplus
$$TS = \\$180 + \\$90 = \\$270$$

That is the whole triangle between the demand and supply curves from 0 to 60 shirts: $\\tfrac{1}{2} \\times 60 \\times (12 - 3) = \\$270$ ✓.

> 🔑 **AP Connection:** Watch the units. If quantity is in thousands of shirts, CS is \\$180,000, not \\$180. The AP exam often asks for the answer "in dollars."
`
    },
    {
      id: 'microdem3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate the Surplus** ✍️

A market's demand curve meets the price axis at \\$20 and its supply curve meets the price axis at \\$4. The market clears at a price of \\$12 and a quantity of 50 units.

1) Consumer surplus in dollars?

2) Producer surplus in dollars?

3) Total surplus in dollars?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['200', '200', '400'],
        hint1: '½ × 50 × (20 − 12).',
        hint2: '½ × 50 × (12 − 4).',
        hint3: 'Add CS and PS, or use ½ × 50 × (20 − 4).',
        explanation: '1) CS = ½ × 50 × 8 = \\$200. 2) PS = ½ × 50 × 8 = \\$200. 3) TS = \\$400, which matches ½ × 50 × 16.'
      }
    },
    {
      id: 'microdem3-shift',
      type: 'text' as const,
      content: `
## 📖 How Surplus Changes When a Curve Shifts

### Worked Example: Demand Increases
In Part 2, the reunion announcement shifted demand to $Q_d = 150 - 10P$, and the new equilibrium was \\$7 and 80 shirts.

1. New demand price intercept: $150 - 10P = 0$, so $P = \\$15$. Supply's intercept is still \\$3.
2. $CS = \\tfrac{1}{2} \\times 80 \\times (15 - 7) = \\$320$
3. $PS = \\tfrac{1}{2} \\times 80 \\times (7 - 3) = \\$160$
4. $TS = \\$480$, up from \\$270.

### Summary of Directions
| Change | Consumer surplus | Producer surplus |
|---|---|---|
| Demand increases (D right) | Depends on the shift; rises for a parallel shift of straight-line curves | **Rises**: higher price **and** more units |
| Supply increases (S right) | **Rises**: lower price **and** more units | Depends on the shift; rises for a parallel shift of straight-line curves |
| Supply decreases (S left) | **Falls**: higher price **and** fewer units | Depends on the shift; falls for a parallel shift of straight-line curves |
| Demand decreases (D left) | Depends on the shift; falls for a parallel shift of straight-line curves | **Falls**: lower price **and** fewer units |

The **bold** entries hold for any shape of curve, because price and quantity push the same way for that group. Producers gain when demand rises because they get a higher price on more units. Consumers gain when supply rises because they pay a lower price on more units.

> 🔑 **AP Connection:** If a question asks how consumer surplus changes after a supply **increase**, the safe answer is "increases": a lower price and a larger quantity both enlarge the triangle under demand and above price.
`
    },
    {
      id: 'microdem3-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A new technology shifts the supply of solar panels to the right, and demand is unchanged. What definitely happens to consumer surplus in the solar panel market?',
            options: [
              'It increases',
              'It decreases',
              'It is unchanged',
              'It cannot be determined'
            ],
            correctAnswer: 0,
            explanation: 'The supply increase lowers the price and raises the quantity. Buyers pay less on each unit and buy more units, so the triangle under demand and above price grows: consumer surplus increases.'
          },
          {
            question: 'Demand is $Q_d = 80 - 4P$ and the equilibrium price is \\$15. What is consumer surplus?',
            options: [
              '\\$50',
              '\\$100',
              '\\$150',
              '\\$200'
            ],
            correctAnswer: 0,
            explanation: 'At \\$15, Qd = 80 − 60 = 20. Demand meets the price axis at \\$20. CS = ½ × 20 × (20 − 15) = \\$50. Forgetting the ½ gives \\$100, and using the \\$15 price as the height gives \\$150.'
          },
          {
            question: 'Which area on a supply-and-demand graph shows producer surplus at equilibrium?',
            options: [
              'Below the price, above supply, out to the equilibrium quantity',
              'Above the price, below demand, out to the equilibrium quantity',
              'Under the supply curve, from zero out to the equilibrium quantity',
              'Between the two curves, beyond the equilibrium quantity'
            ],
            correctAnswer: 0,
            explanation: 'Producer surplus is what sellers receive minus their minimum acceptable price, so it sits below the price line and above the supply curve. The area above price and below demand is consumer surplus, and the area under supply is the total variable cost of production.'
          }
        ]
      }
    }
  ]
};
