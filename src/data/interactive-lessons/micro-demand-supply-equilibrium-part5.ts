export const microDemandSupplyEquilibriumPart5Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {
      id: 'microdem5-intro',
      type: 'text' as const,
      content: `
# ⚖️ Market Equilibrium & Applications

**Part 5 of 7 — Double Shifts with Magnitudes, and Misconceptions**

---

| Section |
|---------|
| 📖 Why One Variable Is Indeterminate |
| Settling It with Numbers |
| Reading "Larger Than" Prompts |
| Misconceptions About Equilibrium |

> 🔑 **Key Concept:** Part 1 showed that when both curves shift, one of price or quantity is **indeterminate**. That word means "it depends on the sizes of the shifts," not "nothing happens." When a question gives you the sizes, the indeterminate variable becomes determinate.
`
    },
    {
      id: 'microdem5-why',
      type: 'text' as const,
      content: `
## 📖 Why One Variable Is Indeterminate

Take demand increasing **and** supply increasing. Analyze each shift alone, then combine.

| Shift alone | Effect on P | Effect on Q |
|---|---|---|
| Demand right | ↑ | ↑ |
| Supply right | ↓ | ↑ |
| **Combined** | **? (opposite pushes)** | **↑ (same push)** |

Quantity rises for sure because both shifts push it up. Price gets pushed **up** by demand and **down** by supply, so the net direction depends on which push is stronger.

### The Rule of Thumb
1. Write the P and Q arrows for each shift separately.
2. The variable whose arrows **agree** is determinate.
3. The variable whose arrows **disagree** is indeterminate **unless** you know relative sizes.

> 🔑 **AP Connection:** On a double-shift graph, draw the shifts so that the indeterminate variable ends up unchanged, or say explicitly that its direction depends on the size of the shifts. Graders accept "indeterminate," "ambiguous," or "cannot be determined" for that variable.
`
    },
    {
      id: 'microdem5-numbers',
      type: 'text' as const,
      content: `
## 📖 Settling It with Numbers

Start with the T-shirt market: $Q_d = 120 - 10P$ and $Q_s = 20P - 60$. Equilibrium is \\$6 and 60 shirts.

### Case 1: Demand +30, Supply +60 (at every price)
- $Q_d = 150 - 10P$, $Q_s = 20P$
- $150 - 10P = 20P$, so $P = 5$ and $Q = 100$.
- **Price fell** from \\$6 to \\$5: the supply increase was strong enough to win.

### Case 2: Demand +30, Supply +30
- $Q_d = 150 - 10P$, $Q_s = 20P - 30$
- $150 - 10P = 20P - 30$, so $P = 6$ and $Q = 90$.
- **Price unchanged.** Equal horizontal shifts cancel out on price.

### Case 3: Demand +60, Supply +30
- $Q_d = 180 - 10P$, $Q_s = 20P - 30$
- $180 - 10P = 20P - 30$, so $P = 7$ and $Q = 110$.
- **Price rose:** the demand increase won.

| Case | Price | Quantity |
|---|---|---|
| D +30, S +60 | ↓ to \\$5 | ↑ to 100 |
| D +30, S +30 | unchanged at \\$6 | ↑ to 90 |
| D +60, S +30 | ↑ to \\$7 | ↑ to 110 |

In every case, quantity rose: that was the determinate variable. Only price depended on the sizes.
`
    },
    {
      id: 'microdem5-input',
      type: 'input-boxes' as const,
      content: `
**Run Your Own Double Shift** ✍️

Start from $Q_d = 120 - 10P$ and $Q_s = 20P - 60$. A fall in incomes (normal good) reduces demand by 30 at every price, and a new factory raises supply by 30 at every price.

1) Write the new equations and solve. What is the new equilibrium price in dollars?

2) What is the new equilibrium quantity?

3) By how many shirts did equilibrium quantity change? (Enter the size of the change as a positive number.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '50', '10'],
        hint1: 'New demand: Qd = 90 − 10P. New supply: Qs = 20P − 30.',
        hint2: '90 − 10P = 20P − 30 gives 120 = 30P.',
        hint3: 'Compare the new quantity with the original 60 shirts.',
        explanation: '1) 90 − 10P = 20P − 30, so 120 = 30P and P = \\$4. 2) Q = 90 − 40 = 50, and supply gives 80 − 30 = 50 ✓. 3) Quantity fell by 10. Both shifts pushed price down, so the price fall was certain; quantity was the indeterminate variable, and with these sizes the demand decrease won.'
      }
    },
    {
      id: 'microdem5-larger',
      type: 'text' as const,
      content: `
## 📖 Reading "Larger Than" Prompts

AP questions often supply the magnitude in words. Translate the words into the arrow that wins.

| Prompt wording | Shifts | Determinate | Settled by the wording |
|---|---|---|---|
| "Demand increases by more than supply increases" | D↑ big, S↑ small | Q ↑ | P ↑ (demand wins) |
| "Supply decreases by more than demand increases" | D↑ small, S↓ big | P ↑ | Q ↓ (supply wins) |
| "Demand falls by more than supply rises" | D↓ big, S↑ small | P ↓ | Q ↓ (demand wins) |
| "Supply rises by more than demand rises" | D↑ small, S↑ big | Q ↑ | P ↓ (supply wins) |

"More than" here means the **horizontal** shift (the change in quantity at each price) is larger, assuming the curves have similar slopes. On the AP exam, a question that wants you to settle the ambiguity will describe the shifts this way.

> 🔑 **AP Connection:** Do not invent a magnitude the question did not give. If the prompt says only "demand increases and supply increases," the correct answer for price is "indeterminate," even if one effect seems bigger in real life.
`
    },
    {
      id: 'microdem5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'In the market for strawberries, a bumper harvest increases supply by more than a health study increases demand. What happens to equilibrium price and quantity?',
            options: [
              'Price falls and quantity rises',
              'Price rises and quantity rises',
              'Quantity rises and price is indeterminate',
              'Quantity is indeterminate and price falls'
            ],
            correctAnswer: 0,
            explanation: 'Both shifts raise quantity. Demand pushes price up and supply pushes it down, and because the supply increase is larger, price falls. The magnitude information settles the variable that would otherwise be indeterminate.'
          },
          {
            question: 'Demand for a good decreases while supply decreases, and the prompt gives no information about the sizes of the shifts. Which conclusion is correct?',
            options: [
              'Quantity falls, and the price change is indeterminate',
              'Price falls, and the quantity change is indeterminate',
              'Both price and quantity fall by the same proportion',
              'Neither price nor quantity can be predicted at all'
            ],
            correctAnswer: 0,
            explanation: 'Both shifts push quantity down, so quantity definitely falls. A demand decrease pushes price down while a supply decrease pushes it up, so without magnitudes the price change is indeterminate.'
          }
        ]
      }
    },
    {
      id: 'microdem5-misconceptions',
      type: 'text' as const,
      content: `
## 📖 Misconceptions About Equilibrium

| Misconception | Correction |
|---|---|
| "A **surplus** at a high price means sellers are doing well." | A surplus of **goods** is unsold inventory. It is different from producer **surplus**, the dollar gain from trade. Check which one a question means. |
| "A **shortage** is the same as **scarcity**." | Scarcity is permanent: wants exceed resources at every price. A shortage is temporary: quantity demanded exceeds quantity supplied **at a particular price**, and a higher price removes it. |
| "Equilibrium is the **fair** price." | Equilibrium is the price where plans match and total surplus is maximized. It says nothing about fairness or how surplus is distributed. |
| "Equilibrium price is where price is **lowest**." | Prices below equilibrium create shortages. Equilibrium balances buyers and sellers; it does not favor either side. |
| "When both curves shift, **both** P and Q are indeterminate." | Only one is indeterminate. The variable whose arrows agree always moves in a known direction. |
| "Markets are **always** at equilibrium." | Markets move **toward** equilibrium. After a shock, a shortage or surplus exists until the price adjusts, and price controls can hold it away indefinitely. |

> 🔑 **AP Connection:** Multiple-choice distractors are often built from these exact misconceptions. If an answer choice says both variables are indeterminate, or calls a shortage "scarcity," it is almost certainly wrong.
`
    },
    {
      id: 'microdem5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Concert tickets are priced at \\$40, and fans line up for hours because quantity demanded exceeds quantity supplied. An economist would call this:',
            options: [
              'a shortage at a price below equilibrium',
              'scarcity that no price change can remove',
              'a surplus at a price above equilibrium',
              'a fall in demand caused by the long line'
            ],
            correctAnswer: 0,
            explanation: 'Excess demand at the posted price is a shortage, and it means \\$40 is below the equilibrium price. Raising the price would ration tickets and remove the line. Scarcity, by contrast, exists at every price.'
          },
          {
            question: 'Which statement about market equilibrium is accurate?',
            options: [
              'It maximizes total surplus but does not decide how that surplus is divided',
              'It gives buyers and sellers equal shares of the total surplus',
              'It is the price at which sellers earn the largest producer surplus',
              'It is the lowest price at which every buyer can get the good'
            ],
            correctAnswer: 0,
            explanation: 'Equilibrium maximizes the sum of consumer and producer surplus, but the split depends on the shapes of the curves. Sellers alone would prefer a higher price, and at lower prices some buyers who want the good cannot get it.'
          }
        ]
      }
    }
  ]
};
