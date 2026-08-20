export const lessonData = {
  topicSlug: 'sat-probability-two-way-tables-advanced',
  sections: [
    {
      id: 'prob-adv-p3-intro',
      type: 'text' as const,
      content: `# Probability & Two-Way Tables: Timed Drill

**Part 3 of 3 — Four Items at Test Pace**

About **90 seconds each**. The first, second, and fourth questions use this table — $1{,}000$ residents' responses to a policy question:

| | Approve | Disapprove | No opinion | Total |
|---|---|---|---|---|
| Urban | 168 | 84 | 48 | 300 |
| Suburban | 210 | 150 | 90 | 450 |
| Rural | 112 | 98 | 40 | 250 |
| **Total** | 490 | 332 | 178 | **1,000** |

Before every answer, say the denominator out loud:

1. **Out of whom?** Grand total, a row, a column, or a complement group you had to build?
2. **Rate or count?** If the groups are different sizes, these disagree.
3. **Which way does the conditional run?** "Of the approvers, how many are rural" is not "of the rural residents, how many approve."`
    },
    {
      id: 'prob-adv-p3-q1',
      type: 'quiz' as const,
      question: `Of the $1{,}000$ residents surveyed, $490$ approve of the policy. Of the $250$ rural residents, $112$ approve. Given that a randomly selected resident approves of the policy, what is the probability that the resident lives in a rural area? Round to the nearest thousandth.`,
      options: ['$0.112$', '$0.229$', '$0.250$', '$0.448$'],
      correctAnswer: 1,
      explanation: `The condition is "approves," so the denominator is the $490$ approvers: $\\frac{112}{490} \\approx 0.229$. The traps: $0.448$ is $\\frac{112}{250}$, the reversed conditional — the approval rate AMONG rural residents — which answers a question this stem did not ask; $0.112$ is $\\frac{112}{1000}$, the joint probability; $0.250$ is the overall share of residents who are rural, with the approval condition discarded.`
    },
    {
      id: 'prob-adv-p3-q2',
      type: 'quiz' as const,
      question: `In the same survey, $168$ of the $300$ urban residents approve, $210$ of the $450$ suburban residents approve, and $112$ of the $250$ rural residents approve. Which region has the highest approval rate?`,
      options: [
        'Urban',
        'Suburban',
        'Rural',
        'Urban and suburban have the same approval rate'
      ],
      correctAnswer: 0,
      explanation: `Compute each rate against its own regional total: urban $\\frac{168}{300} = 56\\%$, suburban $\\frac{210}{450} \\approx 46.7\\%$, rural $\\frac{112}{250} = 44.8\\%$. Urban is highest. The trap is suburban, which contributes the most approvals in raw count ($210$ versus urban's $168$) simply because it is the largest region — the count-versus-rate split that this archetype is built on. Rural is lowest on both measures, making it a safe-looking but doubly wrong pick.`
    },
    {
      id: 'prob-adv-p3-q3',
      type: 'quiz' as const,
      question: `A store's inventory contains $500$ shirts. There are $220$ cotton shirts: $55$ small, $96$ medium, and the rest large. In total the store has $160$ large shirts. A shirt is selected at random from among the large shirts. What is the probability that it is cotton? Round to the nearest thousandth.`,
      options: ['$0.138$', '$0.314$', '$0.320$', '$0.431$'],
      correctAnswer: 3,
      explanation: `Recover the missing cell first: cotton large $= 220 - 55 - 96 = 69$. The selection is made from the large shirts, so the denominator is $160$: $\\frac{69}{160} \\approx 0.431$. The traps: $0.314$ is $\\frac{69}{220}$, the reversed conditional — the share of COTTON shirts that are large; $0.138$ is $\\frac{69}{500}$, the joint probability against the whole inventory; $0.320$ is $\\frac{160}{500}$, the share of all shirts that are large, which never uses the recovered cell at all.`
    },
    {
      id: 'prob-adv-p3-q4',
      type: 'quiz' as const,
      question: `Of the $1{,}000$ residents surveyed, $490$ approve of the policy. Among the $450$ suburban residents, $150$ disapprove and $90$ have no opinion. What percent of the residents who do NOT approve of the policy live in suburban areas? Round to the nearest tenth of a percent.`,
      options: ['$24.0\\%$', '$45.0\\%$', '$47.1\\%$', '$53.3\\%$'],
      correctAnswer: 2,
      explanation: `Build the complement group: $1{,}000 - 490 = 510$ residents do not approve, and the suburban members of that group number $150 + 90 = 240$. So $\\frac{240}{510} \\approx 47.1\\%$. The traps: $53.3\\%$ is $\\frac{240}{450}$, dividing by the suburban row total — the reversed conditional, and the most tempting option because $450$ is printed right there; $24.0\\%$ is $\\frac{240}{1000}$, using the grand total; $45.0\\%$ is the overall share of residents who are suburban, ignoring the approval condition entirely.`
    }
  ]
}
