export const microScarcityMarginalAnalysisPart6Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {
      id: 'microsca6-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Marginal Analysis

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Unit 1 Free-Response Questions Are Scored |
| Practice FRQ 1: Comparative Advantage |
| Practice FRQ 2: The PPC in Words |
| Practice FRQ 3: Utility Maximization |
| Practice FRQ 4: A Marginal Decision |

> 🔑 **Key Concept:** Unit 1 free-response questions reward **precise, labeled answers with the calculation shown**. Each part of a question is usually worth one point, and the explanation points go to answers that name the economic reason (opportunity cost, MB and MC, MU per dollar), not just the result.
`
    },
    {
      id: 'microsca6-scoring',
      type: 'text' as const,
      content: `
## 📖 How Unit 1 Free-Response Questions Are Scored

| Task word | What earns the point |
|---|---|
| **Identify** | A correct answer; no explanation needed |
| **Calculate** | The correct number **and** the work that produces it |
| **Explain** | The correct answer plus the economic reason, in a full sentence |
| **Draw a correctly labeled graph** | Labeled axes, a labeled curve, and the specific points or shifts asked for |

General habits:
- **Use the numbers given.** If the table says 120 corn, your answer should use 120, not a rounded or remembered value.
- **Say which good and in what units.** "The opportunity cost of 1 steel is 3 corn," not "the opportunity cost is 3."
- **Keep later parts consistent.** If you make an error in part (b), a correct use of that wrong number in part (c) can still earn credit.

## Practice FRQ 1: Comparative Advantage

The table shows the maximum amount of corn or steel each country can produce in a year using all its resources. Assume constant opportunity costs.

| Country | Corn (tons) | Steel (tons) |
|---|---|---|
| Fredonia | 120 | 40 |
| Glenland | 60 | 30 |

**(a)** Which country has an absolute advantage in steel?
**(b)** Calculate Fredonia's opportunity cost of producing 1 ton of steel.
**(c)** Which country has a comparative advantage in corn? Explain.
**(d)** If the terms of trade are 1 ton of steel for 2.5 tons of corn, will both countries benefit? Explain.

### Model Answer

| Country | Opportunity cost of 1 corn | Opportunity cost of 1 steel |
|---|---|---|
| Fredonia | 40 ÷ 120 = 1/3 steel | 120 ÷ 40 = 3 corn |
| Glenland | 30 ÷ 60 = 1/2 steel | 60 ÷ 30 = 2 corn |

**(a)** Fredonia, because it can produce 40 tons of steel compared with Glenland's 30.
**(b)** 120 ÷ 40 = **3 tons of corn** per ton of steel.
**(c)** Fredonia. Its opportunity cost of 1 ton of corn is 1/3 ton of steel, which is lower than Glenland's 1/2 ton of steel.
**(d)** Yes. Glenland exports steel and receives 2.5 corn for each ton, more than the 2 corn it costs Glenland to make. Fredonia imports steel and pays 2.5 corn, less than the 3 corn it would give up to make steel itself. The terms lie strictly between 2 and 3 corn per steel.

## Practice FRQ 2: The PPC in Words

Using the data for Fredonia above:

**(a)** Draw a correctly labeled PPC for Fredonia with corn on the horizontal axis. Plot point X at 60 corn and 20 steel.
**(b)** Is point X productively efficient? Explain.
**(c)** Show the effect of a new corn seed that raises Fredonia's corn output but does not affect steel.

### Model Answer, Described in Text

**(a)** Horizontal axis labeled "Corn," vertical axis labeled "Steel." A straight line (constant opportunity cost) runs from 40 on the steel axis to 120 on the corn axis, labeled PPC. Point X sits on the line at (60, 20).
**(b)** Yes. Point X lies on the PPC: producing 60 corn uses half of Fredonia's resources, leaving half for 20 of its maximum 40 steel. At X, Fredonia cannot produce more of one good without giving up some of the other.
**(c)** The corn intercept moves to the right of 120, and the steel intercept stays at 40. The new curve, labeled PPC₂, pivots outward along the corn axis.

> 🔑 **AP Connection:** In (b), "it is on the curve" alone is usually not enough for an explain point. Add the reason: all resources are used, so more of one good requires less of the other.
`
    },
    {
      id: 'microsca6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Fredonia\'s opportunity cost of 1 steel is 3 corn, and Glenland\'s is 2 corn. Which terms of trade would benefit both countries?',
            options: [
              '1 steel for 3.5 corn',
              '1 steel for 1.5 corn',
              '1 steel for 2.5 corn',
              '1 steel for 3 corn'
            ],
            correctAnswer: 2,
            explanation: 'The terms must lie strictly between the two opportunity costs, 2 and 3 corn per steel, and 2.5 corn is the only option inside that range. At 3 corn Fredonia gains nothing, and at 3.5 or 1.5 one of the countries would lose.'
          },
          {
            question: 'Glenland\'s maximum steel output rises from 30 to 60 tons while its corn output stays at 60 tons. Fredonia is unchanged at 120 corn or 40 steel. Which country now has the comparative advantage in steel?',
            options: [
              'Glenland, at a cost of 1 corn per steel',
              'Fredonia, at a cost of 3 corn per steel',
              'Glenland, at a cost of 2 corn per steel',
              'Fredonia, at a cost of 1/3 corn per steel'
            ],
            correctAnswer: 0,
            explanation: 'Glenland\'s cost of steel is now 60 ÷ 60 = 1 corn, still below Fredonia\'s 120 ÷ 40 = 3 corn, so Glenland keeps the comparative advantage in steel. Two corn was Glenland\'s cost before the change, and 1/3 is Fredonia\'s cost of corn in steel, not of steel.'
          },
          {
            question: 'On Fredonia\'s straight-line PPC, which runs from 120 corn to 40 steel, the point of 60 corn and 20 steel lies',
            options: [
              'on the curve and productively efficient',
              'inside the curve with idle resources',
              'outside the curve and unattainable',
              'at the allocatively efficient point'
            ],
            correctAnswer: 0,
            explanation: 'Sixty corn uses half of Fredonia\'s resources, and the other half makes 20 of its maximum 40 steel, so the point lies on the PPC and is productively efficient. The PPC alone cannot show which point is allocatively efficient, because that depends on what society values.'
          }
        ]
      }
    },
    {
      id: 'microsca6-frq34',
      type: 'text' as const,
      content: `
## Practice FRQ 3: Utility Maximization

Kai has \\$9 to spend on tacos, which cost \\$2 each, and juice, which costs \\$1 each.

| Unit | MU of tacos | MU/P of tacos | MU of juice | MU/P of juice |
|---|---|---|---|---|
| 1st | 16 | 8 | 6 | 6 |
| 2nd | 12 | 6 | 5 | 5 |
| 3rd | 8 | 4 | 4 | 4 |
| 4th | 6 | 3 | 3 | 3 |
| 5th | 4 | 2 | 2 | 2 |

**(a)** How many tacos and how many juices maximize Kai's utility? Show your work.
**(b)** State the rule that the bundle satisfies.

### Model Answer

**(a)** Buying in order of MU/P: 1st taco (8), 2nd taco and 1st juice (6 each), 2nd juice (5), then 3rd taco and 3rd juice (4 each). Spending: 3 × \\$2 + 3 × \\$1 = \\$9. **Kai buys 3 tacos and 3 juices.**
**(b)** The MU per dollar of the last taco (8 ÷ 2 = 4) equals the MU per dollar of the last juice (4 ÷ 1 = 4), and the full \\$9 is spent.

## Practice FRQ 4: A Marginal Decision

A bakery is deciding how many extra evening hours to stay open. The table shows the marginal benefit (extra revenue) and marginal cost (extra wages and electricity) of each additional hour.

| Extra hour | MB | MC |
|---|---|---|
| 1st | \\$120 | \\$60 |
| 2nd | \\$100 | \\$70 |
| 3rd | \\$85 | \\$80 |
| 4th | \\$60 | \\$90 |

**(a)** How many extra hours should the bakery stay open? Explain.
**(b)** The city charges the bakery a \\$50 annual license fee that does not depend on its hours. How does the fee affect your answer to (a)? Explain.
**(c)** A wage increase raises the marginal cost of every hour by \\$10. How many extra hours should the bakery now stay open?

### Model Answer

**(a)** **3 hours.** The 3rd hour adds \\$85 of benefit for \\$80 of cost, but the 4th adds \\$60 of benefit for \\$90 of cost. The total gain from the 3 hours is \\$60 + \\$30 + \\$5 = \\$95.
**(b)** No change. The fee is a fixed cost; it does not change the marginal cost of any hour, so the comparison of MB and MC for each hour is the same.
**(c)** **2 hours.** The new MCs are \\$70, \\$80, \\$90 and \\$100. The 3rd hour now has MB \\$85 against MC \\$90, so it is no longer worth staying open.
`
    },
    {
      id: 'microsca6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use Practice FRQs 1, 3 and 4.

**1)** What is Glenland's opportunity cost of 1 ton of steel, in tons of corn?

**2)** If Kai's income rises to \\$12 with prices unchanged, how many tacos does he buy?

**3)** After the wage increase in FRQ 4(c), what is the bakery's total gain (MB minus MC, summed over the hours it stays open), in dollars? (Enter a number without the dollar sign.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '70'],
        hint1: 'Output data: other goes over. Divide Glenland\'s corn by its steel.',
        hint2: 'After 3 tacos and 3 juices, the next-best units are the 4th taco and the 4th juice, each with MU/P of 3.',
        hint3: 'With the new MCs of \\$70 and \\$80, add the gains from the 1st and 2nd hours.',
        explanation: '1) 60 ÷ 30 = 2 corn per steel. 2) The extra \\$3 buys the 4th taco (\\$2) and the 4th juice (\\$1), both with MU/P of 3, so Kai buys 4 tacos and 4 juices. 3) (\\$120 − \\$70) + (\\$100 − \\$80) = \\$50 + \\$20 = \\$70, down from \\$95 before the wage increase.'
      }
    },
    {
      id: 'microsca6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If Kai\'s income rises from \\$9 to \\$12 and prices do not change, which bundle maximizes his utility?',
            options: [
              '3 tacos and 6 juices',
              '4 tacos and 4 juices',
              '5 tacos and 2 juices',
              '4 tacos and 3 juices'
            ],
            correctAnswer: 1,
            explanation: 'With \\$3 more, Kai adds the 4th taco and the 4th juice, both with MU/P of 3, and spends exactly \\$12. Four tacos and 3 juices leaves \\$1 unspent, and the other bundles leave MU per dollar unequal.'
          },
          {
            question: 'The bakery\'s annual license fee rises from \\$50 to \\$80. The number of extra hours it should stay open',
            options: [
              'stays at 3 hours',
              'falls to 2 hours',
              'falls to 1 hour',
              'rises to 4 hours'
            ],
            correctAnswer: 0,
            explanation: 'The license fee is a fixed cost that does not depend on hours, so it leaves every marginal cost unchanged. The 3rd hour still adds more benefit (\\$85) than cost (\\$80), and the 4th still does not.'
          },
          {
            question: 'An FRQ asks why Glenland should export steel to Fredonia. Which response earns the explanation point?',
            options: [
              'Glenland can make more steel than Fredonia can',
              'Glenland gives up less corn to make each ton of steel',
              'Glenland has fewer total resources than Fredonia',
              'Glenland produces less corn than Fredonia does'
            ],
            correctAnswer: 1,
            explanation: 'Specialization follows comparative advantage: Glenland gives up only 2 corn per ton of steel against Fredonia\'s 3, so it is the lower-cost steel producer. Glenland actually makes less steel than Fredonia, and the size of a country\'s resources does not decide what it should export.'
          }
        ]
      }
    }
  ]
}
