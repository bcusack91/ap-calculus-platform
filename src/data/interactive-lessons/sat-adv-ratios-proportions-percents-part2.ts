export const lessonData = {
  topicSlug: 'sat-ratios-proportions-percents-advanced',
  sections: [
    {
      id: 'advrpp2-traps',
      type: 'text' as const,
      content: `# Traps & Speed: Ratios, Proportions & Percents

**Part 2 of 3 — Every Distractor Is a Unit or a Direction**

### The Distractor Recipe on Percent/Ratio Items

1. **The intermediate in the wrong units.** Grams when bags were asked. Euros when dollars were asked. Kilograms when the ask was a COST. The number is correct — the units aren't. A quantity masquerading as a price is the hard tier's favorite move.
2. **The wrong direction.** Multiplying by $1.06$ when reversing a tax (should divide); dividing by $1.6$ when the conversion needed multiplying. Sanity-check with size: if a euro is worth MORE than a dollar, the dollar figure must be BIGGER.
3. **Added percents.** $15\\%$ then $8\\%$ is never $23\\%$. Any option built from the summed percent is wrong on principle — you can eliminate it without computing.
4. **The dropped step.** One factor of the chain skipped: the per-day answer on a per-week ask, the full-hectare answer on a half-hectare field.

### Speed Techniques

- **Write the multiplier chain before any arithmetic:** "paid $= P \\times 0.80 \\times 1.06$" turns every forward/backward question into one Desmos division. Type $89.04 / (0.8 \\times 1.06)$ — done.
- **Reverse = divide.** Original $=$ final $\\div$ (product of multipliers). No exceptions, no "add the percent back."
- **Unit-cancel on one line:** $396 \\text{ lb} \\div 2.2 \\rightarrow \\text{kg} \\times 0.85 \\rightarrow \\text{euros} \\times 1.10 \\rightarrow \\text{dollars}$. When the units read as the asked-for units, stop; if an option matches a mid-chain value, that option is the trap, and its presence CONFIRMS your chain.
- **Elimination first:** on reverse-percent items, the original must be BIGGER than the final after a net discount. Cross out every option smaller than the final price before computing.`
    },
    {
      id: 'advrpp2-q1',
      type: 'quiz' as const,
      question: `Fertilizer must be applied at 0.8 kilograms per 100 square meters. A field measures 0.5 hectare (1 hectare = 10,000 square meters). The fertilizer is sold only in 4-kilogram bags. How many bags are needed?`,
      options: ['$10$', '$20$', '$40$', '$80$'],
      correctAnswer: 0,
      explanation: 'Chain with units: $0.5$ ha $= 5{,}000$ m$^{2}$, which is $50$ hundred-m$^{2}$ units, needing $50 \\times 0.8 = 40$ kg, which is $40 \\div 4 = 10$ bags. The traps: $40$ is the KILOGRAMS — right number, wrong units, one step short. $20$ computes bags for the full hectare (dropped the $0.5$). $80$ is the kilograms for the full hectare — two errors deep. Notice how the option set is literally a map of the chain’s intermediate values; seeing your candidate answer among them in the WRONG units confirms you built the right chain.'
    },
    {
      id: 'advrpp2-q2',
      type: 'quiz' as const,
      question: `A jacket's price after a 40% markdown is $\\$57$. To find the original price, a student computes $57 \\times 1.40 = 79.80$ and answers $\\$79.80$. What is wrong with this?`,
      options: [
        'Nothing — $\\$79.80$ is the original price',
        'Reversing a 40% decrease requires dividing by 0.60: the original is $\\$95$ (since $57 \\div 0.60 = 95$), because increasing by 40% is a smaller-sized step once the base has shrunk',
        'The student should have computed 57 × 0.60',
        'The student should have divided by 1.40 instead'
      ],
      correctAnswer: 1,
      explanation: 'A $40\\%$ markdown means the sale price is $0.60$ of the original: $0.60P = 57$, so $P = 57 \\div 0.60 = \\$95$. Check: $95 \\times 0.60 = 57$. Multiplying by $1.40$ fails because the $40\\%$ being restored would be $40\\%$ of the SMALLER sale price ($57$), not of the original — percent steps are not symmetric. $57 \\times 0.60$ discounts an already-discounted price, and dividing by $1.40$ reverses a markUP that never happened. On the SAT, $\\$79.80$ will be sitting in the options, priced exactly for this error.'
    },
    {
      id: 'advrpp2-q3',
      type: 'quiz' as const,
      question: `A trail mix recipe combines peanuts and raisins in a ratio of 5 pounds of peanuts to every 2 pounds of raisins. A batch uses 21 pounds of raisins. Peanuts cost $\\$2.40$ per pound and raisins cost $\\$3.10$ per pound. What is the total cost of the ingredients in the batch?`,
      options: ['$\\$52.50$', '$\\$65.10$', '$\\$126.00$', '$\\$191.10$'],
      correctAnswer: 3,
      explanation: 'Peanuts: $\\frac{5}{2} \\times 21 = 52.5$ pounds. Peanut cost: $52.5 \\times 2.40 = \\$126.00$. Raisin cost: $21 \\times 3.10 = \\$65.10$. Total: $126.00 + 65.10 = \\$191.10$. The option set is pure autopsy material: $\\$52.50$ is the peanut WEIGHT wearing a dollar sign; $\\$126.00$ and $\\$65.10$ are the two single-ingredient costs — each a legitimate stopping point for a simpler question that this one is not. Ratio-to-cost items always ask for the combined total precisely because three partial answers feel finished.'
    }
  ]
};
