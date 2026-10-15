export const microScarcityMarginalAnalysisPart7Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {
      id: 'microsca7-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Marginal Analysis

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture: One Chain of Ideas |
| Rules and Formulas at a Glance |
| Traps to Avoid |
| Mixed Review |

> 🔑 **Key Concept:** Every idea in this unit grows from **scarcity**. Scarcity forces choices, choices have **opportunity costs**, the PPC graphs those costs, differences in opportunity cost create **gains from trade**, and the best choices are made **at the margin**.
`
    },
    {
      id: 'microsca7-chain',
      type: 'text' as const,
      content: `
## 📖 The Big Picture: One Chain of Ideas

| Step | Idea | The question it answers | Part |
|---|---|---|---|
| 1 | **Scarcity** | Why must we choose at all? | 2 |
| 2 | **Opportunity cost** | What does a choice really cost? | 1, 2 |
| 3 | **Economic systems** | Who decides what, how and for whom? | 2 |
| 4 | **PPC** | What can an economy produce, and what does more of one good cost? | 3 |
| 5 | **Comparative advantage** | Who should produce what? | 4 |
| 6 | **Terms of trade** | At what rate will both sides gain? | 4 |
| 7 | **Explicit and implicit costs** | Is a business truly profitable? | 5 |
| 8 | **Marginal analysis** | How much of an activity is best? | 1, 5 |
| 9 | **Utility maximization** | How should a consumer spend a budget? | 1, 5 |

### How the Steps Connect

- The **slope of a PPC** is an opportunity cost, so a straight-line PPC is a picture of a constant opportunity cost.
- **Comparative advantage** compares those opportunity costs across two producers. Two countries with different PPC slopes always have something to gain from trade.
- **Trade** lets a country consume at a point **outside** its own PPC without any shift in the curve.
- **Marginal analysis** is opportunity-cost thinking applied one unit at a time: the marginal cost of an activity is what the next unit forces you to give up.
- The **utility-maximizing rule** is marginal analysis for consumers: each dollar goes where it adds the most utility, so in the end the last dollar spent on every good adds the same amount.

## Rules and Formulas at a Glance

| Situation | Rule |
|---|---|
| Opportunity cost of a choice | Value of the next-best alternative only |
| PPC table | Opportunity cost = amount of the other good given up ÷ extra units gained |
| Output data | Opportunity cost of a good = other good's output ÷ this good's output |
| Input data | Opportunity cost of a good = this good's input ÷ other good's input |
| Comparative advantage | Lower opportunity cost |
| Mutually beneficial terms of trade | Strictly between the two producers' opportunity costs |
| Accounting profit | Total revenue − explicit costs |
| Economic profit | Total revenue − explicit costs − implicit costs |
| Optimal quantity of an activity | Keep going while MB ≥ MC; stop where MB = MC |
| Consumer optimum | MU/P equal across goods **and** the budget fully spent |

## Traps to Avoid

1. Adding up every forgone option instead of counting only the next-best one.
2. Calling a temporary shortage "scarcity," or scarcity a "shortage."
3. Treating money as capital. Capital means machines, tools and buildings.
4. Shifting the PPC for unemployment. Idle resources put the economy **inside** the curve.
5. Shifting the PPC for a change in preferences or prices. That is a movement **along** the curve.
6. Using the output rule on input data, or the reverse.
7. Choosing specialization by absolute advantage instead of comparative advantage.
8. Accepting terms of trade equal to one country's opportunity cost as "beneficial to both." At that rate, that country gains nothing.
9. Letting fixed or sunk costs change a marginal decision.
10. Comparing MU instead of MU per dollar.
`
    },
    {
      id: 'microsca7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which situation is an example of scarcity rather than a shortage?',
            options: [
              'A city cannot fund every road project it wants',
              'Concert tickets sell out at a price set below equilibrium',
              'Gas stations run dry after a price ceiling is imposed',
              'A store runs out of a toy priced below its market value'
            ],
            correctAnswer: 0,
            explanation: 'A city that cannot afford every project faces limited resources and unlimited wants, which is scarcity and never goes away. The other three describe shortages, where a price held below equilibrium makes quantity demanded exceed quantity supplied.'
          },
          {
            question: 'A country moves from a point inside its PPC to a point on its PPC. This change most likely reflects',
            options: [
              'the employment of previously idle resources',
              'an improvement in the country\'s technology',
              'an increase in the country\'s labor force',
              'a shift of resources toward capital goods'
            ],
            correctAnswer: 0,
            explanation: 'A point inside the PPC means some resources are unemployed, so putting them to work moves the economy out to the curve. Better technology and a larger labor force shift the curve itself, and reallocating toward capital goods is a movement along it.'
          },
          {
            question: 'In one day, Person A can bake 12 pies or knit 4 scarves, and Person B can bake 6 pies or knit 3 scarves. Who should specialize in knitting?',
            options: [
              'Person B, whose cost per scarf is 2 pies',
              'Person A, whose cost per scarf is 3 pies',
              'Person A, who can knit more scarves a day',
              'Person B, whose cost per scarf is 0.5 pie'
            ],
            correctAnswer: 0,
            explanation: 'A scarf costs Person A 12 ÷ 4 = 3 pies and Person B 6 ÷ 3 = 2 pies, so B has the lower opportunity cost and should knit. Knitting more scarves is an absolute advantage, and 0.5 is B\'s cost of a pie in scarves.'
          }
        ]
      }
    },
    {
      id: 'microsca7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Rule Review** 🔍

Choose the word or phrase that completes each rule.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'When resources are specialized, the PPC is ___.',
            options: ['a straight line', 'bowed outward', 'bowed inward', 'a vertical line']
          },
          {
            label: 'With input data, the opportunity cost of a good equals its own input divided by ___.',
            options: ['its own output', 'the total input', 'the other good\'s input', 'the other good\'s output']
          },
          {
            label: 'Keep expanding an activity as long as its marginal benefit is ___ its marginal cost.',
            options: ['at most', 'at least', 'half of', 'unrelated to']
          },
          {
            label: 'A consumer maximizes utility when MU per dollar is equal across goods and ___.',
            options: ['MU equals zero', 'prices are equal', 'the budget is spent', 'MU is at its peak']
          }
        ],
        correctAnswers: ['bowed outward', 'the other good\'s input', 'at least', 'the budget is spent'],
        hint1: 'Specialized resources create increasing opportunity cost.',
        hint2: 'For input data, the own good goes over the other good.',
        hint3: 'Stop only when the next unit would cost more than it adds.',
        explanation: 'Specialized resources give increasing opportunity cost and a bowed-out PPC. With input data, a good\'s cost is its own input over the other good\'s input. An activity should expand while MB is at least MC. The consumer optimum needs equal MU per dollar and a fully spent budget.'
      }
    },
    {
      id: 'microsca7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student skips a party to study for a test. The opportunity cost of studying is',
            options: [
              'the value she places on the party',
              'the grade she earns on the test',
              'the party plus every other option',
              'the cost of her textbooks for class'
            ],
            correctAnswer: 0,
            explanation: 'Opportunity cost is the value of the next-best alternative, which here is the party. The grade is a benefit of studying, not a cost, and adding every other option on top of the party overstates the cost.'
          },
          {
            question: 'Country A\'s opportunity cost of 1 shirt is 4 hats, and Country B\'s is 2 hats. Which pattern of specialization benefits both?',
            options: [
              'A should make shirts and B hats',
              'A should make hats and B shirts',
              'A should make both hats and shirts',
              'Each country should make both goods'
            ],
            correctAnswer: 1,
            explanation: 'B gives up fewer hats per shirt (2 against 4), so B should make shirts. A hat costs A only 1/4 shirt against 1/2 shirt for B, so A should make hats. Making both goods, or having one country make both, gives up the gains from trade.'
          },
          {
            question: 'A firm\'s property tax rises by \\$500 a year, the same amount at every level of output. If the firm keeps operating, its profit-maximizing output',
            options: [
              'does not change',
              'falls by about half',
              'rises to offset the tax',
              'falls to where MC is lowest'
            ],
            correctAnswer: 0,
            explanation: 'A tax that is the same at every output level is a fixed cost, so it raises total cost without changing marginal cost. The output where marginal revenue equals marginal cost stays the same, even though profit falls by \\$500.'
          }
        ]
      }
    }
  ]
}
