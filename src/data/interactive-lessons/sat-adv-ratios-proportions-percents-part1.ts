export const lessonData = {
  topicSlug: 'sat-ratios-proportions-percents-advanced',
  sections: [
    {
      id: 'advrpp1-patterns',
      type: 'text' as const,
      content: `# The 700-800 Patterns: Ratios, Proportions & Percents

**Part 1 of 3 — Multipliers, Chains, and Working Backward**

At this level, percent questions are **multiplier questions**. The instant you translate "$15\\%$ off" into $\\times\\, 0.85$ and "$8\\%$ tax" into $\\times\\, 1.08$, the hard tier collapses into arithmetic.

### Archetype 1: Successive Percent Change (Multipliers Compose)

Changes multiply — they never add. Up $25\\%$ then down $20\\%$ is $1.25 \\times 0.80 = 1.00$: **no net change**. Down $15\\%$ then down $8\\%$ more is $0.85 \\times 0.92 = 0.782$, a $21.8\\%$ total drop — not $23\\%$.

**Worked example.** A price rises $30\\%$, then falls $30\\%$. Net change? $1.30 \\times 0.70 = 0.91$ — down $9\\%$. The "back where it started" instinct is the planted answer.

### Archetype 2: Reverse Percent (Divide by the Multiplier)

Given the FINAL value, recover the original by **dividing** by the full multiplier chain — never by applying the percent "backward."

**Worked example.** Final price $\\$125.12$ after $15\\%$ off then $8\\%$ off: original $= 125.12 \\div (0.85 \\times 0.92) = 125.12 \\div 0.782 = \\$160$. Multiplying $125.12$ by $1.15$ or $1.23$ gives the two standard wrong answers, because a $15\\%$ decrease is NOT undone by a $15\\%$ increase — the base changed.

### Archetype 3: Percent of a Percent

"$60\\%$ of students take a language; $35\\%$ of THOSE take Spanish" chains to $0.60 \\times 0.35 = 0.21$ of the whole school. Given the final count, divide by the combined rate: $189 \\div 0.21 = 900$ students. The one-step divisions ($189 \\div 0.35$, $189 \\div 0.60$) are both planted.

### Archetype 4: Unit-Rate Chains

Hard ratio items chain three or more conversions (mg per kg per dose; kg $\\rightarrow$ cost; km $\\rightarrow$ mi $\\rightarrow$ dollars). Write the chain as one line with units, cancel as you go, and **the units of the answer tell you when to stop**. Every intermediate value in the chain — in its wrong units — appears in the options.`
    },
    {
      id: 'advrpp1-q1',
      type: 'quiz' as const,
      question: `A customer paid $\\$134.82$ for a pair of headphones. The register applied a 30% discount to the list price, then added 7% sales tax on the discounted amount. What was the list price?`,
      options: ['$\\$126.00$', '$\\$175.09$', '$\\$180.00$', '$\\$192.60$'],
      correctAnswer: 2,
      explanation: 'The multiplier chain is $\\times\\, 0.70$ then $\\times\\, 1.07$: paid $= P \\times 0.70 \\times 1.07 = 0.749P$. So $P = 134.82 \\div 0.749 = \\$180.00$. (Check: $180 \\times 0.70 = 126$; $126 \\times 1.07 = 134.82$.) The traps: $\\$126.00$ is the discounted pre-tax price — the intermediate. $\\$192.60$ reverses only the discount ($134.82 \\div 0.70$), forgetting the tax. $\\$175.09$ nets the percents to $23\\%$ off and divides by $0.77$ — percents on different bases never combine by subtraction.'
    },
    {
      id: 'advrpp1-q2',
      type: 'quiz' as const,
      question: `A town's population increased by 20% during one decade and then decreased by 15% during the next decade. Which describes the net change over the two decades?`,
      options: [
        'It decreased by 5 percent',
        'It increased by 2 percent',
        'It increased by 5 percent',
        'It stayed exactly the same'
      ],
      correctAnswer: 1,
      explanation: 'Multipliers compose: $1.20 \\times 0.85 = 1.02$, a net INCREASE of $2\\%$. Adding the percents gives $+5\\%$, the top distractor — but the $15\\%$ decrease acts on the LARGER, already-grown population, so it removes more than $15\\%$ of the original. "Decreased by 5" doubles down on the adding error with a sign slip, and "stayed the same" misremembers the up-then-down pattern (that only nets to zero for specific pairs like $+25\\%$/$-20\\%$, where $1.25 \\times 0.80 = 1.00$).'
    },
    {
      id: 'advrpp1-q3',
      type: 'quiz' as const,
      question: `At a conference, 45% of attendees bought food, and 40% of those food buyers also bought a dessert. Exactly 126 attendees bought a dessert. How many attendees bought food but NOT a dessert?`,
      options: ['$189$', '$315$', '$574$', '$700$'],
      correctAnswer: 0,
      explanation: 'Dessert buyers are $0.45 \\times 0.40 = 0.18$ of all attendees, so attendance is $126 \\div 0.18 = 700$. Food buyers: $0.45 \\times 700 = 315$. Food-but-no-dessert: $315 - 126 = 189$. This item stacks BOTH hard moves: reverse the chained percent, then answer a set-subtraction ask. $315$ (all food buyers) and $700$ (all attendees) are the intermediate values; $574$ is $700 - 126$, subtracting from the wrong group. Read the ask twice: "food but not dessert" is neither of the numbers your division produces.'
    }
  ]
};
