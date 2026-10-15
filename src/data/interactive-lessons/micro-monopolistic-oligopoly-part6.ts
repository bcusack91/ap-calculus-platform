export const microMonopolisticOligopolyPart6Data = {
  topicSlug: 'micro-monopolistic-oligopoly',
  sections: [
    {
      id: 'micromon6-intro',
      type: 'text' as const,
      content: `
# 💰 Monopolistic Competition & Oligopoly

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 Free-Response Practice 1: Monopolistic Competition |
| Free-Response Practice 2: A Game-Theory Matrix |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** Imperfect-competition free-response questions reward **precise labels and stated reasons**. For a graph, every curve and every key point needs a label. For a matrix, every claim about a strategy needs the two payoffs that prove it. Write "because" and the numbers, every time.

The AP Microeconomics exam has 60 multiple-choice questions and 3 free-response questions (one long, two short). Monopolistic competition graphs and payoff matrices have both appeared as free-response questions.
      `
    },
    {
      id: 'micromon6-frq1',
      type: 'text' as const,
      content: `
## 📖 Free-Response Practice 1: Monopolistic Competition

**Prompt.** Sunny Scoops is an ice cream shop in a monopolistically competitive market. It is currently earning a short-run economic profit.

(a) Draw a correctly labeled graph for Sunny Scoops showing its demand, marginal revenue, marginal cost and average total cost curves. Label its profit-maximizing quantity Qf and price Pf, and shade its economic profit.

(b) At Qf, is Sunny Scoops allocatively efficient? Explain.

(c) Explain what happens to the demand for Sunny Scoops' ice cream in the long run.

(d) Assume the market has reached long-run equilibrium. The city then charges every ice cream shop an annual license fee that does not depend on output. What happens to Sunny Scoops' output in the short run? What happens to the number of ice cream shops in the long run?

### Model Answer

**(a)** Axes labeled **Price** (vertical) and **Quantity** (horizontal). A downward-sloping **D**, with **MR** below it. A U-shaped **ATC**, with **MC** crossing it at its minimum. **Qf** is where MR = MC; **Pf** is read up from Qf to the demand curve. Demand lies **above** ATC at Qf, and the profit rectangle runs from ATC up to Pf, across Qf units.

**(b)** No. At Qf, **price is greater than marginal cost**, so buyers value one more scoop more than it costs to make. Output is below the allocatively efficient level.

**(c)** Economic profit and low barriers to entry attract new shops. Each new rival takes customers, so Sunny Scoops' demand **decreases (shifts left)** and becomes more elastic until it is **tangent to ATC** at the profit-maximizing quantity, and economic profit is **zero**.

**(d)** **Short run:** output does not change. The fee is a fixed cost, so it shifts ATC up but leaves MC and MR unchanged, and Qf is still where MR = MC. **Long run:** the fee creates losses, so some shops **exit** and the **number of shops falls**. The survivors' demand shifts right until profit returns to zero.

### Scoring Notes
- A graph earns credit only if MR is **below** demand and the profit area is bounded by **ATC and price** (not MC and price).
- "Not efficient" earns nothing without the reason **P > MC**.
- In (c), "firms enter" is half the answer; the point is the **direction of the shift in this firm's demand**.
- In (d), many students wrongly say output falls in the short run. A fixed cost never changes the MR = MC quantity.
      `
    },
    {
      id: 'micromon6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a correctly drawn long-run equilibrium graph for Sunny Scoops, which relationships hold at the profit-maximizing quantity?',
            options: [
              'P = ATC and P > MC',
              'P = ATC and P = MC',
              'P > ATC and P > MC',
              'P = MC and MC = ATC'
            ],
            correctAnswer: 0,
            explanation: 'Long-run tangency gives P = ATC (zero profit), and the downward-sloping demand curve keeps price above MC. P = MC with MC = ATC describes long-run perfect competition, and P > ATC is the short-run profit case.'
          },
          {
            question: 'In part (d), what happens in the long run after the license fee is imposed?',
            options: [
              'Some shops leave, and survivors\' demand shifts right',
              'Shops enter, and each survivor\'s demand shifts left',
              'Shops exit, and each survivor\'s demand shifts left',
              'Shop numbers and each shop\'s demand stay the same'
            ],
            correctAnswer: 0,
            explanation: 'The fee turns zero profit into a loss, so some shops leave and their customers go to the remaining shops, shifting those shops\' demand right until profit is zero again. Entry would only follow a profit, and an unchanged market would leave the losses in place.'
          }
        ]
      }
    },
    {
      id: 'micromon6-frq2',
      type: 'text' as const,
      content: `
## Free-Response Practice 2: A Game-Theory Matrix

**Prompt.** Two phone makers, Apex and Byte, each decide whether to **Launch** a new model or **Keep** their current model. They choose at the same time, and each knows all the payoffs. The first number in each cell is Apex's profit and the second is Byte's, in millions of dollars.

| | Byte: Launch | Byte: Keep |
|---|---|---|
| **Apex: Launch** | 40, 30 | 65, 20 |
| **Apex: Keep** | 30, 50 | 50, 45 |

(a) Does Apex have a dominant strategy? Explain using numbers from the matrix.

(b) Identify the Nash equilibrium.

(c) Suppose the firms agree that both will Keep. Does Apex have an incentive to break the agreement? Explain using numbers.

(d) The government offers Byte a subsidy of \\$S million whenever Byte chooses Keep. What is the smallest whole-million value of S that would make Keep Byte's dominant strategy? Identify the new Nash equilibrium.

### Model Answer

**(a)** Yes, **Launch**. If Byte launches, Apex earns 40 by launching and 30 by keeping; if Byte keeps, Apex earns 65 by launching and 50 by keeping. Launch is better either way.

**(b)** Byte's dominant strategy is also Launch (30 > 20 and 50 > 45), so the Nash equilibrium is **(Launch, Launch)**, with payoffs **(40, 30)**.

**(c)** Yes. If Byte keeps, Apex earns **65** by launching instead of **50** by keeping, a gain of 15.

**(d)** With the subsidy, Byte's Keep payoffs become 20 + S and 45 + S. Keep must beat Launch in both rows: 20 + S > 30 requires **S > 10**, and 45 + S > 50 requires S > 5. The smallest whole-million value is **\\$11 million**. Apex's payoffs do not change, so Apex still launches, and the new Nash equilibrium is **(Launch, Keep)**.

### Scoring Notes
- "Launch is dominant" earns no credit without the **two comparisons** for that player.
- In (b), naming the cell is enough; the payoffs show you read the matrix correctly.
- In (d), check **both** rows. Using only one row (S > 5) is the most common error.
      `
    },
    {
      id: 'micromon6-input',
      type: 'input-boxes' as const,
      content: `
**Check the Matrix** ✍️

Use the Apex and Byte matrix.

1) What is Apex's profit at the Nash equilibrium? (millions of dollars, number only)

2) Starting from (Keep, Keep), by how many millions would Byte gain if it alone switched to Launch?

3) Without any subsidy, what is the combined profit of the two firms at (Keep, Keep)? (millions of dollars)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '5', '95'],
        hint1: 'Both firms launch in equilibrium. Read the first number in that cell.',
        hint2: 'Compare Byte\'s payoff at (Keep, Keep) with its payoff at (Keep, Launch), where Apex keeps and Byte launches.',
        hint3: 'Add the two numbers in the (Keep, Keep) cell.',
        explanation: '1) At (Launch, Launch), Apex earns \\$40 million. 2) Byte earns 45 at (Keep, Keep) and 50 if it alone launches, a gain of \\$5 million. 3) 50 + 45 = \\$95 million, more than the \\$70 million at the equilibrium, which is why the firms would like to agree to Keep but cannot trust each other to.'
      }
    },
    {
      id: 'micromon6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Exam-Style Practice** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two firms each choose Expand or Wait. Payoffs (A, B): both expand (2, 2); A expands and B waits (8, 3); A waits and B expands (3, 8); both wait (5, 5). How many Nash equilibria does the game have?',
            options: [
              'Two, in the cells where only one firm expands',
              'One, in the cell where both firms expand',
              'One, in the cell where both firms wait',
              'None, as neither firm has a dominant strategy'
            ],
            correctAnswer: 0,
            explanation: 'If the rival expands, a firm prefers to wait (3 > 2); if the rival waits, it prefers to expand (8 > 5). So each cell with exactly one expander has both firms making best responses. A game can have Nash equilibria without any dominant strategy.'
          },
          {
            question: 'Firms in a monopolistically competitive market are earning economic losses. Which describes the long-run adjustment?',
            options: [
              'Firms exit, and survivors\' demand shifts right until P = ATC',
              'Firms enter, and each firm\'s demand shifts left until P = MC',
              'Exit continues until price rises to the minimum of ATC',
              'Each firm cuts output until its MC equals its ATC'
            ],
            correctAnswer: 0,
            explanation: 'Losses cause exit, and the remaining firms gain customers until demand is again tangent to ATC with zero profit. Price stays above MC, and the tangency is left of minimum ATC, so neither of those benchmarks is reached.'
          }
        ]
      }
    }
  ]
}
