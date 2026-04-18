export const microSupplyDemandPart1Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {id:'microsupd1-intro',type:'text' as const,content:`
# 📈 Supply & Demand

**Part 1 of 7 — The Foundation of Market Economics**

---

| Section |
|---------|
| 📖 Demand: The Law & Determinants |
| Supply: The Law & Determinants |
| Market Equilibrium |
| Shifts vs. Movements |

> 🔑 **Key Concept:** The AP exam tests your ability to distinguish between a **shift** of the curve (caused by determinants changing) and a **movement along** the curve (caused by a change in the good's own price). This is the #1 mistake students make.
`},
    {id:'microsupd1-demand',type:'text' as const,content:`
## 📖 Demand

### Law of Demand
As price ↑, quantity demanded ↓ (inverse relationship) — ceteris paribus (all else equal)

### Why?
- **Substitution effect:** Higher price → consumers switch to cheaper alternatives
- **Income effect:** Higher price → consumers feel "poorer" → buy less
- **Diminishing marginal utility:** Lower willingness to pay for additional units

### Determinants of Demand (Shift the Curve)

| Determinant | Demand Shifts RIGHT (↑D) | Demand Shifts LEFT (↓D) |
|---|---|---|
| **Income (normal goods)** | Income rises | Income falls |
| **Income (inferior goods)** | Income falls | Income rises |
| **Price of substitutes** | Substitute price rises → buy more of this good | Substitute price falls → switch away |
| **Price of complements** | Complement price falls → buy more of both | Complement price rises → buy less of both |
| **Tastes/preferences** | Good becomes more popular | Good becomes less popular |
| **Number of buyers** | Population or market size grows | Population shrinks |
| **Expected future prices** | Expect prices to rise → buy more now | Expect prices to fall → wait to buy |

### Normal vs. Inferior Goods
- **Normal good:** Demand increases when income increases (restaurants, new cars, vacations)
- **Inferior good:** Demand increases when income DECREASES (ramen noodles, used cars, bus rides)

> 🔑 **AP Connection:** A change in the good's OWN price causes a movement ALONG the demand curve (change in quantity demanded). A change in any DETERMINANT causes a SHIFT of the demand curve (change in demand). This distinction is critical.
`},
    {id:'microsupd1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'If the price of coffee (a substitute for tea) increases, what happens to the demand for tea?',options:['The demand curve for tea shifts LEFT because higher coffee prices make all beverages less attractive','The demand curve for tea shifts RIGHT because consumers switch from more expensive coffee to relatively cheaper tea','There is a movement along the tea demand curve because the price of tea has changed','Tea demand is unaffected because coffee and tea are completely unrelated goods'],correctAnswer:1,explanation:'Coffee and tea are substitutes — goods that serve similar purposes. When coffee becomes more expensive, some consumers switch to tea. This is not a change in tea\'s own price (which would cause a movement along the curve) but a change in a determinant (substitute\'s price) — it shifts the entire demand curve for tea to the RIGHT (more tea demanded at every price level).'},
      {question:'Which of the following would cause a movement ALONG the demand curve for smartphones (rather than a SHIFT)?',options:['A decrease in consumer income that makes smartphones less affordable for many buyers','An increase in the price of smartphones due to supply chain disruptions','A new social media trend that makes the latest smartphone model extremely popular among teens','A decrease in the price of phone cases (a complement to smartphones)'],correctAnswer:1,explanation:'A change in the good\'s OWN PRICE causes a movement along the demand curve (change in quantity demanded, not demand). When smartphone prices rise, consumers buy fewer smartphones — moving up along the existing demand curve. Changes in income, preferences, or complement/substitute prices shift the entire curve. This is the most fundamental distinction in supply and demand analysis.'}
    ]}},
    {id:'microsupd1-equilibrium',type:'text' as const,content:`
## 📖 Supply & Market Equilibrium

### Law of Supply
As price ↑, quantity supplied ↑ (positive relationship) — higher prices incentivize more production

### Determinants of Supply (Shift the Curve)

| Determinant | Supply Shifts RIGHT (↑S) | Supply Shifts LEFT (↓S) |
|---|---|---|
| **Input costs** | Costs fall (cheaper raw materials) | Costs rise (wages, energy up) |
| **Technology** | Better technology → more efficient | — |
| **Number of sellers** | More firms enter market | Firms exit market |
| **Taxes** | Subsidies (negative tax) | Higher taxes on production |
| **Expected future prices** | Expect prices to fall → sell more now | Expect prices to rise → hold supply |
| **Government regulation** | Deregulation | More regulation (higher compliance costs) |

### Market Equilibrium
- **Equilibrium price:** Where quantity demanded = quantity supplied
- **Surplus (excess supply):** Price above equilibrium → Qs > Qd → price falls
- **Shortage (excess demand):** Price below equilibrium → Qd > Qs → price rises
- Markets naturally move toward equilibrium through price adjustment

### Shift Analysis

| Change | Effect on P | Effect on Q |
|---|---|---|
| D ↑ (D shifts right) | P ↑ | Q ↑ |
| D ↓ (D shifts left) | P ↓ | Q ↓ |
| S ↑ (S shifts right) | P ↓ | Q ↑ |
| S ↓ (S shifts left) | P ↑ | Q ↓ |

> 🔑 **AP Connection:** When BOTH curves shift simultaneously, you can determine the effect on either P or Q — but NOT both — without knowing the relative magnitudes. This is a classic AP trick question.
`},
    {id:'microsupd1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If demand for a product increases (shifts right) while supply remains unchanged, what happens to equilibrium price and quantity?',options:['Price decreases and quantity increases as more of the product becomes available at lower costs','Price increases and quantity increases — higher demand drives up prices and incentivizes firms to produce more','Price increases but quantity decreases because the higher price discourages buyers from purchasing','Both price and quantity remain unchanged because supply has not shifted to affect the market'],correctAnswer:1,explanation:'When demand shifts right (more consumers want the product at every price), there is a shortage at the original price (Qd > Qs). Competition among buyers drives the price UP. The higher price incentivizes firms to produce more (movement along the supply curve). The new equilibrium has both a higher price and higher quantity. This is the standard result of a demand increase with constant supply.'},
      {question:'A market currently has a surplus (excess supply). What will happen to restore equilibrium?',options:['The government will step in to buy the excess supply and redistribute it to consumers','Producers will lower prices to attract more buyers, and the quantity demanded will increase until Qd = Qs at the new lower equilibrium price','Consumers will voluntarily pay higher prices to ensure all producers can sell their output','Nothing — surpluses persist permanently because markets cannot self-correct'],correctAnswer:1,explanation:'With a surplus, Qs > Qd — producers have unsold inventory. To clear this inventory, sellers lower prices. As price falls: (1) quantity demanded increases (consumers buy more at lower prices — movement along demand curve), and (2) quantity supplied decreases (some producers exit or reduce output — movement along supply curve). This continues until Qd = Qs at the equilibrium price.'}
    ]}}
  ]
};
