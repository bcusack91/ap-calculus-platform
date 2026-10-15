export const microScarcityMarginalAnalysisPart1Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {id:'microscar1-intro',type:'text' as const,content:`
# 📊 Scarcity & Marginal Analysis

**Part 1 of 7 — Economic Thinking & Decision-Making**

---

| Section |
|---------|
| 📖 Scarcity & Opportunity Cost |
| Marginal Analysis |
| Utility Maximization |
| Sunk Costs |

> 🔑 **Key Concept:** Economics is built on **marginal analysis** — decisions are made by comparing the **marginal benefit** (MB) of an action with its **marginal cost** (MC). The optimal decision is where **MB = MC**.
`},
    {id:'microscar1-marginal',type:'text' as const,content:`
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
- Example: You paid \\$50 for a non-refundable concert ticket but feel sick. The \\$50 is sunk — the rational decision depends only on whether attending provides more benefit than staying home, NOT on the \\$50 already spent

> 🔑 **AP Connection:** The AP exam tests marginal analysis in MANY contexts: consumer decisions, firm production, government policy. The rule **MB = MC** appears throughout the entire course.
`},
    {id:'microscar1-quiz1',type:'multiple-choice' as const,content:`**Concept Check** 🎯`,exercise:{questions:[
      {question:'A firm should continue producing additional units of output as long as:',options:['Total revenue from all units sold is greater than their total cost','Marginal benefit from one more unit is at least as large as its marginal cost','Average total cost keeps falling with each added unit of output','The firm still has unused machines and workers it could put to work'],correctAnswer:1,explanation:'Firms maximize profit by producing where MR = MC (marginal revenue = marginal cost). As long as MR > MC, producing one more unit adds more to revenue than to costs, increasing profit. When MR < MC, producing one more unit costs more than it brings in. The optimal quantity is exactly where MR = MC.'},
      {question:'You paid \\$200 for a non-refundable ski trip but wake up sick on the day of the trip. From an economic perspective, the \\$200 should:',options:['Be counted — going is the only way to avoid wasting the \\$200 already paid','Be ignored — it is a sunk cost, so only the benefit and cost of skiing while sick should matter','Be added to the cost of staying home, since skipping the trip forfeits the money','Be spread across future ski trips so that each trip carries part of the loss'],correctAnswer:1,explanation:'The \\$200 is a sunk cost — it\'s gone whether you go or stay home. Rational decision-making ignores sunk costs and focuses only on marginal analysis: Does the benefit of skiing today (while sick) exceed the cost (feeling worse, risk of injury, miserable experience)? Probably not — so the rational choice is to stay home, despite having paid \\$200. This is counterintuitive but economically correct.'}
    ]}},
    {id:'microscar1-utility',type:'text' as const,content:`
## 📖 Utility Maximization

### Consumer Choice: How to Maximize Satisfaction

**Utility** = satisfaction or happiness from consuming a good

**Marginal Utility** = additional satisfaction from consuming one MORE unit → typically **decreasing** (law of diminishing marginal utility)

### The Utility-Maximizing Rule

To maximize total satisfaction, a consumer should allocate their budget so that:

**$MU_{a}$ / $P_{a}$ = MUᵦ / Pᵦ = MUc / Pc = ...**

(Marginal Utility per dollar spent is EQUAL across all goods)

### Example

| Good | MU of Last Unit | Price | MU/\\$ |
|---|---|---|---|
| Pizza | 20 | \\$5 | 4 |
| Soda | 6 | \\$2 | 3 |
| Fries | 8 | \\$2 | 4 |

- Pizza and Fries give the same MU per dollar (4) ✅
- Soda gives less MU per dollar (3) — the consumer should buy **less soda** (its MU will rise) or more pizza/fries (their MU will fall) until all ratios are equal

### Why This Works
If MU per dollar is higher for one good, you get more satisfaction per dollar from that good → shift spending toward it. As you consume more, diminishing marginal utility reduces MU → MU/\\$ falls. Eventually, all goods provide equal MU per dollar → you can't do better.

> 🔑 **AP Connection:** The utility-maximizing rule (MU/P equal across goods) is tested frequently. If $MU_{a}/P_{a}$ > MUᵦ/Pᵦ, the consumer should buy **more of A** and **less of B**.
`},
    {id:'microscar1-quiz2',type:'multiple-choice' as const,content:`**Check Your Understanding** 🎯`,exercise:{questions:[
      {question:'A consumer finds that the marginal utility per dollar of Good X is 8 and the marginal utility per dollar of Good Y is 5. To maximize utility, the consumer should:',options:['Buy more of both goods until each gives the same total utility','Buy more of Good X and less of Good Y — Good X provides more satisfaction per dollar spent','Buy more of Good Y and less of Good X — the lower ratio indicates better value per dollar','Stop buying both goods because diminishing marginal utility means additional purchases decrease total satisfaction'],correctAnswer:1,explanation:'When MU/P is higher for Good X (8 > 5), each dollar spent on X provides more satisfaction than a dollar spent on Y. The consumer should shift spending toward X. As more X is consumed, its MU falls (diminishing MU) and MU/P decreases. As less Y is consumed, its MU rises and MU/P increases. The consumer reaches an optimum when MU/P is equal for both goods.'},
      {question:'The law of diminishing marginal utility states that:',options:['Total utility decreases with each additional unit consumed, meaning every unit makes the consumer worse off','As a consumer buys more units of a good, the extra satisfaction from each additional unit falls','Consumers always prefer variety over large quantities of any single good in all circumstances','The price of a good must decrease as more units are consumed because each unit is worth less'],correctAnswer:1,explanation:'Diminishing marginal utility means each additional unit provides LESS additional satisfaction than the previous one (though total utility may still be increasing). The 1st slice of pizza might provide 10 units of satisfaction, the 2nd 7 units, the 3rd 3 units. This principle explains why demand curves slope downward — consumers are willing to pay less for additional units because each one provides less additional satisfaction.'}
    ]}}
  ]
};
