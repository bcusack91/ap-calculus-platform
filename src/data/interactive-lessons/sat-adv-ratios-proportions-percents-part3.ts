export const lessonData = {
  topicSlug: 'sat-ratios-proportions-percents-advanced',
  sections: [
    {
      id: 'advrpp3-drill-intro',
      type: 'text' as const,
      content: `# Ratios, Proportions & Percents: Timed Drill

**Part 3 of 3 — Four Questions at Full Difficulty**

Pace yourself at about **90 seconds per question**. Hard ratio and percent items are rarely hard *arithmetic*; they are long chains where the finish line is one link past where the work feels done.

Run the same routine on each:

1. **Fifteen seconds — build the chain.** Write the sequence of conversions with units attached, or the multiplier product ($\\times\\, 1.60$, then $\\times\\, 0.70$), before computing anything.
2. **Fifty seconds — execute in one calculator expression** rather than in separate steps, so no intermediate ever gets mistaken for the answer.
3. **Twenty-five seconds — audit the ask.** Does the stem want a cost or a quantity? A percent or a dollar amount? A total or a difference? A per-day figure or a per-month one?

One extra guard, specific to this topic: **squared scale factors.** Whenever a drawing, map, or model is scaled by a linear factor $k$, its **areas** scale by $k^{2}$. That single fact decides one of the four questions below.`
    },
    {
      id: 'advrpp3-q1',
      type: 'quiz' as const,
      question: 'A freight service charges $1.15$ euros per kilogram. A customer is shipping a pallet that weighs $550$ pounds and will pay in dollars at an exchange rate of $1$ euro $= 1.08$ dollars. Given that $1$ kilogram $= 2.2$ pounds, what is the cost of the shipment, in dollars?',
      options: [
        '$\\$266.20$',
        '$\\$287.50$',
        '$\\$310.50$',
        '$\\$632.50$'
      ],
      correctAnswer: 2,
      explanation: 'Convert mass first: $550 \\div 2.2 = 250$ kilograms. Charge: $250 \\times 1.15 = 287.50$ euros. Convert currency: $287.50 \\times 1.08 = \\$310.50$. The traps: $\\$287.50$ is the charge in EUROS, the intermediate value left in the wrong currency. $\\$632.50$ applies the per-kilogram rate directly to the weight in pounds, $550 \\times 1.15$, skipping the mass conversion. $\\$266.20$ divides by the exchange rate instead of multiplying; since a euro is worth more than a dollar, the dollar figure must be larger than the euro figure, so this option can be eliminated on size alone.'
    },
    {
      id: 'advrpp3-q2',
      type: 'quiz' as const,
      question: 'A retailer sets an item\'s list price by marking up its cost by $60$ percent, then sells the item at $30$ percent off the list price. If the retailer\'s cost for the item is $\\$150$, the retailer\'s profit is what percent of its cost?',
      options: [
        '$18$',
        '$30$',
        '$112$',
        '$12$'
      ],
      correctAnswer: 3,
      explanation: 'List price: $150 \\times 1.60 = \\$240$. Selling price: $240 \\times 0.70 = \\$168$. Profit: $168 - 150 = \\$18$, which as a percent of cost is $\\frac{18}{150} = 0.12$, or $12$ percent. The traps: $18$ is the profit in DOLLARS, the intermediate value wearing a percent sign. $30$ subtracts the two percents, $60 - 30$, which ignores that the discount is taken on the larger list price rather than on the cost. $112$ is the selling price as a percent of cost ($168$ is $112$ percent of $150$) — the whole, not the profit.'
    },
    {
      id: 'advrpp3-q3',
      type: 'quiz' as const,
      question: 'On a floor plan drawn to a scale of $1$ inch $= 5$ feet, a rectangular hall measures $4.5$ inches by $8$ inches. A sealant for the floor costs $\\$2.75$ per square foot. What is the cost of sealing the hall\'s floor?',
      options: [
        '$\\$99$',
        '$\\$495$',
        '$\\$900$',
        '$\\$2{,}475$'
      ],
      correctAnswer: 3,
      explanation: 'Convert each dimension: $4.5 \\times 5 = 22.5$ feet and $8 \\times 5 = 40$ feet. Area: $22.5 \\times 40 = 900$ square feet. Cost: $900 \\times 2.75 = \\$2{,}475$. The traps: $\\$900$ is the AREA in square feet, the intermediate value, not a cost. $\\$495$ scales the drawing\'s area of $36$ square inches by the linear factor $5$ instead of by $5^{2} = 25$, giving $180$ square feet — the squared-scale-factor error this item exists to catch. $\\$99$ prices the drawing\'s area directly, $36 \\times 2.75$, with no scaling at all.'
    },
    {
      id: 'advrpp3-q4',
      type: 'quiz' as const,
      question: 'A bottling line fills $3{,}150$ bottles during a $7$-hour shift. After the line is retooled, its hourly output rate increases by $24$ percent. How many bottles will the retooled line fill during a $10$-hour shift?',
      options: [
        '$3{,}906$',
        '$4{,}500$',
        '$5{,}580$',
        '$4{,}740$'
      ],
      correctAnswer: 2,
      explanation: 'Original rate: $3150 \\div 7 = 450$ bottles per hour. Retooled rate: $450 \\times 1.24 = 558$ bottles per hour. Over $10$ hours: $558 \\times 10 = 5{,}580$ bottles. The traps: $4{,}500$ is the output of a $10$-hour shift at the OLD rate, with the retooling ignored. $3{,}906$ is $3150 \\times 1.24$, which applies the increase but keeps the $7$-hour shift length — the two shift lengths must be reconciled through the hourly rate, not carried over. $4{,}740$ adds $24$ bottles per hour instead of increasing by $24$ percent, computing $(450 + 24) \\times 10$.'
    }
  ]
};
