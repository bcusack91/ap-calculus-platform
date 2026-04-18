const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src/data/interactive-lessons');

const files = [
{file:'micro-scarcity-marginal-analysis-part1.ts', content:`export const microScarcityMarginalAnalysisPart1Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {id:'microscar1-intro',type:'text' as const,content:\`
# 📊 Scarcity & Marginal Analysis

**Part 1 of 7 — Economic Thinking & Decision-Making**

---

| Section |
|---------|
| 📖 Scarcity & Opportunity Cost |
| Marginal Analysis |
| Utility Maximization |
| The Production Possibilities Curve |

> 🔑 **Key Concept:** Economics is built on **marginal analysis** — decisions are made by comparing the **marginal benefit** (MB) of an action with its **marginal cost** (MC). The optimal decision is where **MB = MC**.
\`},
    {id:'microscar1-marginal',type:'text' as const,content:\`
## 📖 Marginal Analysis

### The Core Principle
Rational economic agents make decisions **at the margin** — they consider the additional (marginal) benefit and additional (marginal) cost of one more unit.

| Concept | Definition |
|---|---|
| **Marginal Benefit (MB)** | The additional satisfaction from consuming one more unit |
| **Marginal Cost (MC)** | The additional cost of producing or consuming one more unit |
| **Optimal quantity** | Where **MB = MC** — any more is not worth the cost; any less leaves benefits on the table |

### Example: Studying for an Exam

| Hours Studied | Marginal Benefit (extra points) | Marginal Cost (fatigue, lost free time) |
|---|---|---|
| 1st hour | +15 points | Low |
| 2nd hour | +10 points | Moderate |
| 3rd hour | +5 points | High |
| 4th hour | +2 points | Very high |

At some point, the extra points from another hour of studying aren't worth the exhaustion → optimal to stop where MB ≈ MC.

### Diminishing Marginal Returns
- As you consume or produce more, marginal benefit typically **decreases**
- First slice of pizza: delicious! Fifth slice: barely appealing
- This is why demand curves slope downward — willingness to pay decreases with additional units

### Sunk Costs
- **Sunk cost:** A cost that has already been incurred and cannot be recovered
- Rational decision-makers should **ignore sunk costs** — only marginal costs and benefits matter for future decisions
- Example: You paid $50 for a non-refundable concert ticket but feel sick. The $50 is sunk — the rational decision depends only on whether attending provides more benefit than staying home, NOT on the $50 already spent

> 🔑 **AP Connection:** The AP exam tests marginal analysis in MANY contexts: consumer decisions, firm production, government policy. The rule **MB = MC** appears throughout the entire course.
\`},
    {id:'microscar1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'A firm should continue producing additional units of output as long as:',options:['Total revenue exceeds total cost by the maximum possible amount','Marginal benefit (revenue from one more unit) is greater than or equal to the marginal cost of producing that unit','Average total cost is decreasing with each additional unit produced','The firm has not yet reached its maximum production capacity'],correctAnswer:1,explanation:'Firms maximize profit by producing where MR = MC (marginal revenue = marginal cost). As long as MR > MC, producing one more unit adds more to revenue than to costs, increasing profit. When MR < MC, producing one more unit costs more than it brings in. The optimal quantity is exactly where MR = MC.'},
      {question:'You paid $200 for a non-refundable ski trip but wake up sick on the day of the trip. From an economic perspective, the $200 should:',options:['Be considered in your decision — you should go because you already paid $200 and would waste the money otherwise','Be ignored in your decision — it is a sunk cost that cannot be recovered, so only the marginal benefit of skiing vs. the marginal cost (discomfort of skiing while sick) should matter','Be recovered by demanding a refund from the ski resort, regardless of the non-refundable policy','Be subtracted from any future purchases to account for the financial loss incurred'],correctAnswer:1,explanation:'The $200 is a sunk cost — it\\'s gone whether you go or stay home. Rational decision-making ignores sunk costs and focuses only on marginal analysis: Does the benefit of skiing today (while sick) exceed the cost (feeling worse, risk of injury, miserable experience)? Probably not — so the rational choice is to stay home, despite having paid $200. This is counterintuitive but economically correct.'}
    ]}},
    {id:'microscar1-utility',type:'text' as const,content:\`
## 📖 Utility Maximization

### Consumer Choice: How to Maximize Satisfaction

**Utility** = satisfaction or happiness from consuming a good

**Marginal Utility** = additional satisfaction from consuming one MORE unit → typically **decreasing** (law of diminishing marginal utility)

### The Utility-Maximizing Rule

To maximize total satisfaction, a consumer should allocate their budget so that:

**MUₐ / Pₐ = MUᵦ / Pᵦ = MUc / Pc = ...**

(Marginal Utility per dollar spent is EQUAL across all goods)

### Example

| Good | MU of Last Unit | Price | MU/$ |
|---|---|---|---|
| Pizza | 20 | $5 | 4 |
| Soda | 6 | $2 | 3 |
| Fries | 8 | $2 | 4 |

- Pizza and Fries give the same MU per dollar (4) ✅
- Soda gives less MU per dollar (3) — the consumer should buy **less soda** (its MU will rise) or more pizza/fries (their MU will fall) until all ratios are equal

### Why This Works
If MU per dollar is higher for one good, you get more satisfaction per dollar from that good → shift spending toward it. As you consume more, diminishing marginal utility reduces MU → MU/$ falls. Eventually, all goods provide equal MU per dollar → you can't do better.

> 🔑 **AP Connection:** The utility-maximizing rule (MU/P equal across goods) is tested frequently. If MUₐ/Pₐ > MUᵦ/Pᵦ, the consumer should buy **more of A** and **less of B**.
\`},
    {id:'microscar1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'A consumer finds that the marginal utility per dollar of Good X is 8 and the marginal utility per dollar of Good Y is 5. To maximize utility, the consumer should:',options:['Buy equal quantities of both goods to maintain balanced consumption','Buy more of Good X and less of Good Y — Good X provides more satisfaction per dollar spent','Buy more of Good Y and less of Good X — the lower ratio indicates better value per dollar','Stop buying both goods because diminishing marginal utility means additional purchases decrease total satisfaction'],correctAnswer:1,explanation:'When MU/P is higher for Good X (8 > 5), each dollar spent on X provides more satisfaction than a dollar spent on Y. The consumer should shift spending toward X. As more X is consumed, its MU falls (diminishing MU) and MU/P decreases. As less Y is consumed, its MU rises and MU/P increases. The consumer reaches an optimum when MU/P is equal for both goods.'},
      {question:'The law of diminishing marginal utility states that:',options:['Total utility decreases with each additional unit consumed, meaning every unit makes the consumer worse off','As a consumer consumes additional units of a good, the marginal (additional) utility from each successive unit tends to decrease','Consumers always prefer variety over large quantities of any single good in all circumstances','The price of a good must decrease as more units are consumed because each unit is worth less'],correctAnswer:1,explanation:'Diminishing marginal utility means each additional unit provides LESS additional satisfaction than the previous one (though total utility may still be increasing). The 1st slice of pizza might provide 10 units of satisfaction, the 2nd 7 units, the 3rd 3 units. This principle explains why demand curves slope downward — consumers are willing to pay less for additional units because each one provides less additional satisfaction.'}
    ]}}
  ]
};\n`},
{file:'micro-supply-demand-part1.ts', content:`export const microSupplyDemandPart1Data = {
  topicSlug: 'micro-supply-demand',
  sections: [
    {id:'microsupd1-intro',type:'text' as const,content:\`
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
\`},
    {id:'microsupd1-demand',type:'text' as const,content:\`
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
\`},
    {id:'microsupd1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'If the price of coffee (a substitute for tea) increases, what happens to the demand for tea?',options:['The demand curve for tea shifts LEFT because higher coffee prices make all beverages less attractive','The demand curve for tea shifts RIGHT because consumers switch from more expensive coffee to relatively cheaper tea','There is a movement along the tea demand curve because the price of tea has changed','Tea demand is unaffected because coffee and tea are completely unrelated goods'],correctAnswer:1,explanation:'Coffee and tea are substitutes — goods that serve similar purposes. When coffee becomes more expensive, some consumers switch to tea. This is not a change in tea\\'s own price (which would cause a movement along the curve) but a change in a determinant (substitute\\'s price) — it shifts the entire demand curve for tea to the RIGHT (more tea demanded at every price level).'},
      {question:'Which of the following would cause a movement ALONG the demand curve for smartphones (rather than a SHIFT)?',options:['A decrease in consumer income that makes smartphones less affordable for many buyers','An increase in the price of smartphones due to supply chain disruptions','A new social media trend that makes the latest smartphone model extremely popular among teens','A decrease in the price of phone cases (a complement to smartphones)'],correctAnswer:1,explanation:'A change in the good\\'s OWN PRICE causes a movement along the demand curve (change in quantity demanded, not demand). When smartphone prices rise, consumers buy fewer smartphones — moving up along the existing demand curve. Changes in income, preferences, or complement/substitute prices shift the entire curve. This is the most fundamental distinction in supply and demand analysis.'}
    ]}},
    {id:'microsupd1-equilibrium',type:'text' as const,content:\`
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
\`},
    {id:'microsupd1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'If demand for a product increases (shifts right) while supply remains unchanged, what happens to equilibrium price and quantity?',options:['Price decreases and quantity increases as more of the product becomes available at lower costs','Price increases and quantity increases — higher demand drives up prices and incentivizes firms to produce more','Price increases but quantity decreases because the higher price discourages buyers from purchasing','Both price and quantity remain unchanged because supply has not shifted to affect the market'],correctAnswer:1,explanation:'When demand shifts right (more consumers want the product at every price), there is a shortage at the original price (Qd > Qs). Competition among buyers drives the price UP. The higher price incentivizes firms to produce more (movement along the supply curve). The new equilibrium has both a higher price and higher quantity. This is the standard result of a demand increase with constant supply.'},
      {question:'A market currently has a surplus (excess supply). What will happen to restore equilibrium?',options:['The government will step in to buy the excess supply and redistribute it to consumers','Producers will lower prices to attract more buyers, and the quantity demanded will increase until Qd = Qs at the new lower equilibrium price','Consumers will voluntarily pay higher prices to ensure all producers can sell their output','Nothing — surpluses persist permanently because markets cannot self-correct'],correctAnswer:1,explanation:'With a surplus, Qs > Qd — producers have unsold inventory. To clear this inventory, sellers lower prices. As price falls: (1) quantity demanded increases (consumers buy more at lower prices — movement along demand curve), and (2) quantity supplied decreases (some producers exit or reduce output — movement along supply curve). This continues until Qd = Qs at the equilibrium price.'}
    ]}}
  ]
};\n`},
{file:'micro-demand-supply-equilibrium-part1.ts', content:`export const microDemandSupplyEquilibriumPart1Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {id:'microdeq1-intro',type:'text' as const,content:\`
# ⚖️ Market Equilibrium & Applications

**Part 1 of 7 — Consumer & Producer Surplus, Double Shifts**

---

| Section |
|---------|
| 📖 Consumer & Producer Surplus |
| Deadweight Loss |
| Double Shifts |
| Allocative Efficiency |

> 🔑 **Key Concept:** At equilibrium, total economic surplus (CS + PS) is **maximized**. Any deviation from equilibrium (price controls, taxes, or market failures) creates **deadweight loss** — a reduction in total surplus.
\`},
    {id:'microdeq1-surplus',type:'text' as const,content:\`
## 📖 Consumer & Producer Surplus

| Concept | Definition | Graphically |
|---|---|---|
| **Consumer Surplus (CS)** | Difference between what consumers are willing to pay and what they actually pay | Area BELOW the demand curve and ABOVE the market price |
| **Producer Surplus (PS)** | Difference between what producers receive and the minimum they would accept | Area ABOVE the supply curve and BELOW the market price |
| **Total Surplus** | CS + PS = total gains from trade | Triangle between D and S curves up to equilibrium quantity |

### Example
- You're willing to pay $50 for a textbook but buy it for $30
- Your consumer surplus = $50 − $30 = **$20**
- The seller's cost is $15 but they sell for $30
- Producer surplus = $30 − $15 = **$15**
- Total surplus from this trade = $20 + $15 = **$35**

### Allocative Efficiency
- Achieved at market equilibrium where **MB = MC** (demand = supply)
- Total surplus (CS + PS) is **maximized**
- Every unit BELOW equilibrium quantity has MB > MC → should be produced
- Every unit ABOVE equilibrium quantity has MC > MB → should NOT be produced

### Deadweight Loss (DWL)
- Lost surplus when the market does NOT operate at equilibrium quantity
- Created by: price controls, taxes, monopoly, externalities
- Represents trades that WOULD have been mutually beneficial but don't occur
- DWL is the cost of market inefficiency

> 🔑 **AP Connection:** You MUST be able to identify CS, PS, and DWL on a graph. CS is always the triangle above price, below demand. PS is always the triangle below price, above supply. DWL is the triangle of lost surplus.
\`},
    {id:'microdeq1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'At the market equilibrium price and quantity, total economic surplus (consumer surplus + producer surplus) is:',options:['Zero — at equilibrium, neither consumers nor producers gain any economic benefit from the transaction','Equal to producer surplus only — consumers do not gain surplus at the equilibrium price','Maximized — every mutually beneficial trade occurs, and no deadweight loss exists','Minimized — equilibrium forces both consumer and producer surplus to their lowest possible levels'],correctAnswer:2,explanation:'At equilibrium (where supply = demand, so MB = MC), every unit where MB > MC is produced, and no unit where MC > MB is produced. This means every mutually beneficial trade occurs and total surplus (CS + PS) is at its maximum. Any deviation from this quantity — whether from price controls, taxes, or monopoly — reduces total surplus by creating deadweight loss.'},
      {question:'What is "deadweight loss"?',options:['The revenue that the government collects from a per-unit tax on a good or service','The reduction in total surplus (CS + PS) that occurs when a market does not operate at the equilibrium quantity — representing mutually beneficial trades that fail to occur','The total cost of production that firms must pay regardless of the quantity they produce','The difference between the price consumers pay and the price producers receive in a perfectly competitive market'],correctAnswer:1,explanation:'Deadweight loss represents lost economic value — trades that would have benefited both buyers and sellers but don\\'t happen due to market distortions (taxes, price controls, monopoly power). Graphically, it\\'s the triangle of lost surplus between the supply and demand curves for units that are NOT produced/traded. DWL is pure loss — it goes to nobody.'}
    ]}},
    {id:'microdeq1-double',type:'text' as const,content:\`
## 📖 Double Shifts & Indeterminate Outcomes

When BOTH demand and supply shift simultaneously, one variable (P or Q) becomes **indeterminate** — you can determine the direction of one but not the other without knowing relative magnitudes.

### Double Shift Outcomes

| D Shift | S Shift | Price | Quantity |
|---|---|---|---|
| D ↑ | S ↑ | **Indeterminate** | ↑ |
| D ↑ | S ↓ | ↑ | **Indeterminate** |
| D ↓ | S ↑ | ↓ | **Indeterminate** |
| D ↓ | S ↓ | **Indeterminate** | ↓ |

### How to Remember
- If both shifts push price in the **same direction**, price change is **determinate** but Q is indeterminate
- If both shifts push quantity in the **same direction**, quantity change is **determinate** but P is indeterminate
- If shifts push both P and Q in different directions, determine which variable has conflicting forces → that variable is indeterminate

### Example
News: (1) A heat wave increases demand for lemonade AND (2) A lemon shortage reduces the supply of lemonade.
- D shifts RIGHT (higher demand) → pushes P ↑ and Q ↑
- S shifts LEFT (lower supply) → pushes P ↑ and Q ↓
- Price: BOTH push P ↑ → **P definitely increases** ✅
- Quantity: D says Q ↑ but S says Q ↓ → **Q is indeterminate** ❓

> 🔑 **AP Connection:** Double shift questions appear frequently on the AP exam. The answer is ALWAYS that one variable changes in a definite direction and the other is "indeterminate" or "ambiguous." If you confidently answer both, you're probably wrong.
\`},
    {id:'microdeq1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'If demand for a product increases simultaneously with an increase in supply, what can we say about equilibrium price and quantity?',options:['Both price and quantity will definitely increase because both shifts are in the "increase" direction','Quantity will definitely increase, but the effect on price is indeterminate — it could rise, fall, or stay the same depending on the relative magnitudes of the shifts','Price will definitely increase, but the effect on quantity is indeterminate and depends on the size of each shift','Both price and quantity are indeterminate — we cannot predict the direction of either change'],correctAnswer:1,explanation:'D ↑ pushes both P ↑ and Q ↑. S ↑ pushes P ↓ and Q ↑. Both shifts push Q in the same direction (UP) → Q definitely increases. But D pushes P up while S pushes P down — conflicting forces → P is indeterminate. The price outcome depends on which shift is larger: if demand increases more, P rises; if supply increases more, P falls; if they\\'re equal, P stays the same.'},
      {question:'A new technology reduces production costs (increasing supply) while consumer preferences shift away from the product (decreasing demand). What happens to price?',options:['Price is indeterminate — we need to know the relative magnitudes of the two shifts','Price definitely increases because new technology makes the product more valuable','Price definitely decreases — both the supply increase and demand decrease push price downward','Price definitely stays the same because the two effects perfectly cancel each other out'],correctAnswer:2,explanation:'S ↑ pushes P ↓ (more supply at every price). D ↓ pushes P ↓ (less demand at every price). Both shifts push price in the same direction (DOWN) → price definitely decreases. However, S ↑ pushes Q ↑ while D ↓ pushes Q ↓ — conflicting forces → quantity is indeterminate. When both shifts reinforce each other on one variable, that variable is determinate; the other is indeterminate.'}
    ]}}
  ]
};\n`},
{file:'micro-elasticity-part1.ts', content:`export const microElasticityPart1Data = {
  topicSlug: 'micro-elasticity',
  sections: [
    {id:'microelas1-intro',type:'text' as const,content:\`
# 📏 Elasticity

**Part 1 of 7 — How Responsive Are Buyers & Sellers?**

---

| Section |
|---------|
| 📖 Price Elasticity of Demand |
| Determinants of Elasticity |
| Elasticity & Total Revenue |
| Cross-Price & Income Elasticity |

> 🔑 **Key Concept:** Elasticity measures **how responsive** quantity demanded/supplied is to changes in price, income, or the price of related goods. The AP exam tests the **total revenue test** and the **determinants** of elasticity extensively.
\`},
    {id:'microelas1-ped',type:'text' as const,content:\`
## 📖 Price Elasticity of Demand (PED)

**PED = % Change in Quantity Demanded ÷ % Change in Price**

| |Ed| Value | Type | Meaning |
|---|---|---|
| |Ed| > 1 | **Elastic** | Quantity changes MORE than price (consumers are responsive) |
| |Ed| < 1 | **Inelastic** | Quantity changes LESS than price (consumers are unresponsive) |
| |Ed| = 1 | **Unit elastic** | Quantity changes by same % as price |
| |Ed| = 0 | **Perfectly inelastic** | Vertical demand curve — quantity doesn't change at all |
| |Ed| = ∞ | **Perfectly elastic** | Horizontal demand curve — consumers buy nothing above a certain price |

### Determinants of Elasticity

| Factor | More Elastic | More Inelastic |
|---|---|---|
| **Substitutes** | Many close substitutes available | Few or no substitutes |
| **Necessity vs. luxury** | Luxury goods | Necessities (medicine, gasoline) |
| **Time horizon** | Long run (more time to adjust) | Short run (stuck with current choices) |
| **Share of income** | Large share of budget | Small share (pens, gum) |
| **Definition of market** | Narrowly defined (Coca-Cola) | Broadly defined (soft drinks) |

### The Total Revenue Test

| Price Change | Elastic Demand | Inelastic Demand |
|---|---|---|
| **Price ↑** | Total revenue **↓** (quantity falls a LOT) | Total revenue **↑** (quantity barely falls) |
| **Price ↓** | Total revenue **↑** (quantity rises a LOT) | Total revenue **↓** (quantity barely rises) |

**Total Revenue = Price × Quantity**

> 🔑 **AP Connection:** The total revenue test is one of the most common AP questions: "If a firm raises its price and total revenue falls, demand must be elastic." Conversely, if revenue rises when price rises, demand is inelastic.
\`},
    {id:'microelas1-quiz1',type:'multiple-choice' as const,content:\`**Concept Check** 🎯\`,exercise:{questions:[
      {question:'A pharmaceutical company raises the price of a life-saving medication by 20%, and quantity demanded falls by only 5%. Demand for this medication is:',options:['Elastic — quantity demanded changed significantly in response to the price increase','Inelastic — quantity demanded changed proportionally less than price (5% < 20%), indicating consumers have few alternatives','Unit elastic — the percentage changes in price and quantity are approximately equal','Perfectly elastic — consumers will switch to generic alternatives immediately at any price increase'],correctAnswer:1,explanation:'PED = %ΔQd ÷ %ΔP = 5% ÷ 20% = 0.25. Since |0.25| < 1, demand is inelastic. This makes sense for a life-saving medication — patients have no close substitutes and must continue buying regardless of price. The determinant at work: necessity (inelastic) with few or no substitutes.'},
      {question:'A clothing retailer reduces prices by 10% and sees total revenue increase. This indicates that demand for their clothing is:',options:['Inelastic — when price falls and revenue rises, quantity must have increased proportionally less than the price decrease','Elastic — when price falls and revenue rises, quantity demanded must have increased proportionally more than the price decrease (more than 10%)','Unit elastic — the price decrease and quantity increase perfectly offset each other','Perfectly inelastic — the quantity demanded does not respond to price changes at all'],correctAnswer:1,explanation:'When price ↓ and total revenue ↑, quantity must have risen by more than 10% (the percentage the price fell). Since %ΔQd > %ΔP, demand is elastic (|PED| > 1). Revenue = P × Q; P fell by 10% but Q rose by more than 10%, so the quantity increase more than offset the price decrease. For elastic demand, lower prices always increase revenue.'}
    ]}},
    {id:'microelas1-cross',type:'text' as const,content:\`
## 📖 Cross-Price Elasticity & Income Elasticity

### Cross-Price Elasticity of Demand (XED)

**XED = % Change in Qd of Good A ÷ % Change in Price of Good B**

| XED | Relationship | Example |
|---|---|---|
| **Positive** | **Substitutes** — when B's price rises, demand for A rises | Coca-Cola & Pepsi |
| **Negative** | **Complements** — when B's price rises, demand for A falls | Hot dogs & hot dog buns |
| **Zero** | **Unrelated goods** | Shoes & toothpaste |

### Income Elasticity of Demand (YED)

**YED = % Change in Qd ÷ % Change in Income**

| YED | Type | Example |
|---|---|---|
| **Positive (> 0)** | **Normal good** — demand rises with income | Restaurant meals, new cars |
| **Negative (< 0)** | **Inferior good** — demand falls as income rises | Instant ramen, bus passes |
| **> 1** | **Luxury** (income elastic) | Vacations, designer clothing |
| **0 < YED < 1** | **Necessity** (income inelastic) | Bread, basic utilities |

> 🔑 **AP Connection:** Cross-price elasticity identifies **substitutes** (positive XED) and **complements** (negative XED). Income elasticity identifies **normal** (positive YED) vs. **inferior** (negative YED) goods. Both are commonly tested with data interpretation.
\`},
    {id:'microelas1-quiz2',type:'multiple-choice' as const,content:\`**Check Your Understanding** 🎯\`,exercise:{questions:[
      {question:'The cross-price elasticity of demand between Good X and Good Y is −0.6. This means X and Y are:',options:['Substitutes — a negative cross-price elasticity always indicates goods that can replace each other','Complements — when the price of Y rises, the quantity demanded of X falls (they are used together)','Inferior goods — the negative sign indicates that demand falls as income rises for both goods','Unrelated goods — any cross-price elasticity less than 1 indicates no meaningful relationship'],correctAnswer:1,explanation:'Negative cross-price elasticity means that when Y\\'s price rises, demand for X FALLS. This happens with complements — goods used together. If gas prices rise, demand for large SUVs falls (gas and SUV driving are complements). The negative sign is the key indicator: negative XED = complements; positive XED = substitutes.'},
      {question:'When household income increases by 15%, demand for a product decreases by 5%. The income elasticity of demand for this product is:',options:['+3.0 — indicating it is a luxury normal good with income-elastic demand','−0.33 — indicating it is an inferior good whose demand falls as income rises','+0.33 — indicating it is a necessity with income-inelastic demand','−3.0 — indicating it is a strongly inferior good that consumers abandon as they get richer'],correctAnswer:1,explanation:'YED = %ΔQd ÷ %ΔIncome = −5% ÷ 15% = **−0.33**. The negative sign means demand DECREASES when income rises — this is an inferior good. As consumers earn more, they switch to better alternatives (e.g., from instant ramen to restaurant meals). Inferior goods have negative YED; normal goods have positive YED.'}
    ]}}
  ]
};\n`}
];

for (const f of files) {
  fs.writeFileSync(path.join(dir, f.file), f.content);
  console.log('✅ Wrote ' + f.file);
}
console.log('\nDone: ' + files.length + ' files written');
