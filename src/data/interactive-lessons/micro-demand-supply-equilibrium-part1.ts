export const microDemandSupplyEquilibriumPart1Data = {
  topicSlug: 'micro-demand-supply-equilibrium',
  sections: [
    {id:'microdeq1-intro',type:'text' as const,content:`
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
`},
    {id:'microdeq1-surplus',type:'text' as const,content:`
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
`},
    {id:'microdeq1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'At the market equilibrium price and quantity, total economic surplus (consumer surplus + producer surplus) is:',options:['Zero — at equilibrium, neither consumers nor producers gain any economic benefit from the transaction','Equal to producer surplus only — consumers do not gain surplus at the equilibrium price','Maximized — every mutually beneficial trade occurs, and no deadweight loss exists','Minimized — equilibrium forces both consumer and producer surplus to their lowest possible levels'],correctAnswer:2,explanation:'At equilibrium (where supply = demand, so MB = MC), every unit where MB > MC is produced, and no unit where MC > MB is produced. This means every mutually beneficial trade occurs and total surplus (CS + PS) is at its maximum. Any deviation from this quantity — whether from price controls, taxes, or monopoly — reduces total surplus by creating deadweight loss.'},
      {question:'What is "deadweight loss"?',options:['The revenue that the government collects from a per-unit tax on a good or service','The reduction in total surplus (CS + PS) that occurs when a market does not operate at the equilibrium quantity — representing mutually beneficial trades that fail to occur','The total cost of production that firms must pay regardless of the quantity they produce','The difference between the price consumers pay and the price producers receive in a perfectly competitive market'],correctAnswer:1,explanation:'Deadweight loss represents lost economic value — trades that would have benefited both buyers and sellers but don\'t happen due to market distortions (taxes, price controls, monopoly power). Graphically, it\'s the triangle of lost surplus between the supply and demand curves for units that are NOT produced/traded. DWL is pure loss — it goes to nobody.'}
    ]}},
    {id:'microdeq1-double',type:'text' as const,content:`
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
`},
    {id:'microdeq1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'If demand for a product increases simultaneously with an increase in supply, what can we say about equilibrium price and quantity?',options:['Both price and quantity will definitely increase because both shifts are in the "increase" direction','Quantity will definitely increase, but the effect on price is indeterminate — it could rise, fall, or stay the same depending on the relative magnitudes of the shifts','Price will definitely increase, but the effect on quantity is indeterminate and depends on the size of each shift','Both price and quantity are indeterminate — we cannot predict the direction of either change'],correctAnswer:1,explanation:'D ↑ pushes both P ↑ and Q ↑. S ↑ pushes P ↓ and Q ↑. Both shifts push Q in the same direction (UP) → Q definitely increases. But D pushes P up while S pushes P down — conflicting forces → P is indeterminate. The price outcome depends on which shift is larger: if demand increases more, P rises; if supply increases more, P falls; if they\'re equal, P stays the same.'},
      {question:'A new technology reduces production costs (increasing supply) while consumer preferences shift away from the product (decreasing demand). What happens to price?',options:['Price is indeterminate — we need to know the relative magnitudes of the two shifts','Price definitely increases because new technology makes the product more valuable','Price definitely decreases — both the supply increase and demand decrease push price downward','Price definitely stays the same because the two effects perfectly cancel each other out'],correctAnswer:2,explanation:'S ↑ pushes P ↓ (more supply at every price). D ↓ pushes P ↓ (less demand at every price). Both shifts push price in the same direction (DOWN) → price definitely decreases. However, S ↑ pushes Q ↑ while D ↓ pushes Q ↓ — conflicting forces → quantity is indeterminate. When both shifts reinforce each other on one variable, that variable is determinate; the other is indeterminate.'}
    ]}}
  ]
};
