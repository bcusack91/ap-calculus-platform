export const microScarcityMarginalAnalysisPart2Data = {
  topicSlug: 'micro-scarcity-marginal-analysis',
  sections: [
    {
      id: 'microsca2-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Marginal Analysis

**Part 2 of 7 — Scarcity, Choice & Economic Systems**

---

| Section |
|---------|
| 📖 Scarcity and the Factors of Production |
| Opportunity Cost and Trade-offs |
| Positive vs. Normative Statements |
| The Three Economic Questions and Economic Systems |

> 🔑 **Key Concept:** Every economy faces **scarcity**: wants are unlimited, but the resources used to satisfy them are limited. Because of scarcity, every choice has an **opportunity cost**, and every society needs a system for deciding **what** to produce, **how** to produce it and **for whom**.
`
    },
    {
      id: 'microsca2-scarcity',
      type: 'text' as const,
      content: `
## 📖 Scarcity and the Factors of Production

**Scarcity** is the condition in which limited resources cannot satisfy all of society's wants. It is permanent and universal: a billionaire still has only 24 hours in a day, and a rich country still cannot produce unlimited health care, housing and education at once.

> ⚠️ **Scarcity is not a shortage.** A *shortage* is a temporary market condition (quantity demanded exceeds quantity supplied at the current price) that a price increase can eliminate. *Scarcity* never goes away, even when a market is in equilibrium.

### The Four Factors of Production

Economists sort all productive resources into four categories. Each one earns a characteristic payment.

| Factor | What it includes | Payment to its owner |
|---|---|---|
| **Land** | All natural resources: soil, water, minerals, forests, oil | Rent |
| **Labor** | Human effort, physical and mental, used in production | Wages |
| **Capital** | Human-made tools used to produce other goods: machines, factories, delivery trucks, computers | Interest |
| **Entrepreneurship** | Organizing the other three factors, innovating and bearing the risk of a business | Profit |

Two points the AP exam likes to test:
- **Capital means physical capital**, not money. Money is a claim on resources; it does not produce anything itself. A bakery's oven is capital; the cash in its bank account is not.
- **Human capital** is the knowledge and skill workers gain through education and training. It makes labor more productive.
`
    },
    {
      id: 'microsca2-oc',
      type: 'text' as const,
      content: `
## Opportunity Cost and Trade-offs

Because resources are scarce, choosing one option means giving up others. That is a **trade-off**.

**Opportunity cost** is the value of the **next-best alternative** given up when a choice is made. It is a *single* alternative, not the sum of every option you passed over.

### Worked Example: One Saturday

Maya can do only one of these on Saturday:

| Option | Value to Maya |
|---|---|
| Work a shift | \\$120 in wages |
| Attend a concert (free ticket) | She values it at \\$100 |
| Tutor a neighbor | \\$90 in pay |

If Maya works the shift, her opportunity cost is **\\$100**, the value of the concert, because the concert is her next-best option. The tutoring is also given up, but it is not her next-best choice, so it is not counted.

### Explicit and Implicit Opportunity Costs

| Type | Meaning | Example |
|---|---|---|
| **Explicit cost** | An out-of-pocket payment | Tuition, rent on a store, wages paid to workers |
| **Implicit cost** | The value of a resource you already own and use instead of selling or renting it out | The salary you give up to attend school or run your own business |

### Worked Example: A Year of School

Jordan quits a job paying \\$35,000 a year to attend a one-year program. Tuition is \\$15,000 and books cost \\$4,000. Jordan pays \\$9,000 in rent whether or not he enrolls.

| Item | Counted? | Amount |
|---|---|---|
| Tuition | Yes (explicit) | \\$15,000 |
| Books | Yes (explicit) | \\$4,000 |
| Forgone salary | Yes (implicit) | \\$35,000 |
| Rent | No: paid either way | \\$0 |
| **Opportunity cost** | | **\\$54,000** |

> 🔑 **AP Connection:** A cost that would be paid no matter which option is chosen is **not** part of the opportunity cost of the choice. Only costs that differ between the alternatives matter.

## Positive vs. Normative Statements

| Positive statement | Normative statement |
|---|---|
| Describes what **is**, was or will be | Prescribes what **ought** to be |
| Can be tested with evidence (even if it turns out false) | Rests on values; cannot be proven true or false |
| "A higher gasoline tax reduces the quantity of gasoline bought." | "The government should raise the gasoline tax." |

Clue words such as **should**, **ought**, **fair** and **too much** usually signal a normative statement. A positive statement can be wrong and still be positive: "Rent control increases the supply of apartments" is a testable (and false) positive claim.
`
    },
    {
      id: 'microsca2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Maya can work a shift for \\$120, attend a free concert she values at \\$100, or tutor for \\$90. She can do only one. If she works the shift, what is her opportunity cost?',
            options: [
              '\\$190, the sum of the other two options',
              '\\$100, the value of the concert she skips',
              '\\$90, the pay from the tutoring she skips',
              '\\$120, the wage she earns from the shift'
            ],
            correctAnswer: 1,
            explanation: 'Opportunity cost is the value of the single next-best alternative. The concert, worth \\$100, is Maya\'s next-best option, so it is her opportunity cost. Adding both skipped options double-counts, and the wage she earns is a benefit of her choice, not a cost.'
          },
          {
            question: 'Which of the following is a normative statement?',
            options: [
              'Raising the minimum wage reduces teen employment',
              'The minimum wage should be raised to fifteen dollars',
              'A higher minimum wage raises some workers\' income',
              'A wage floor above equilibrium causes a labor surplus'
            ],
            correctAnswer: 1,
            explanation: 'The claim that the minimum wage should be raised is a value judgment about what ought to happen, so it is normative. The other three describe cause-and-effect relationships that can be checked against evidence, so they are positive statements.'
          },
          {
            question: 'Which of the following is an example of capital as a factor of production?',
            options: [
              'A delivery van owned by a bakery',
              'The cash a bakery keeps in its bank account',
              'The flour a bakery buys from a mill each day',
              'The baker who shapes each loaf of bread by hand'
            ],
            correctAnswer: 0,
            explanation: 'Capital is a human-made tool used to produce other goods, such as a delivery van. Money in the bank is financial, not physical, capital. Flour is an input that is used up in the bread, and the baker supplies labor.'
          }
        ]
      }
    },
    {
      id: 'microsca2-systems',
      type: 'text' as const,
      content: `
## The Three Economic Questions and Economic Systems

Scarcity forces every society to answer three questions:

1. **What** goods and services will be produced, and how much of each?
2. **How** will they be produced (which combination of land, labor, capital and technology)?
3. **For whom** will they be produced (who gets the output)?

An **economic system** is a society's method for answering those questions.

| System | Who answers the questions | How resources are allocated | Example features |
|---|---|---|---|
| **Traditional** | Custom and habit | The way it has always been done | Occupations passed down within families |
| **Command (centrally planned)** | Government planners | Production targets and quotas | State-owned factories, set prices |
| **Market (free enterprise)** | Individual buyers and sellers | Prices determined by supply and demand | Private property, voluntary exchange, profit motive |
| **Mixed** | Markets for most goods, government for some | Prices plus regulation, taxes and public provision | Every real-world economy, including the United States |

### How a Market Economy Answers the Questions

- **What:** Firms produce what consumers are willing to pay for. Rising prices signal that buyers want more of a good, and higher profits attract resources into that industry.
- **How:** Competition pushes firms to use the **lowest-cost** method. A firm that wastes resources loses customers to rivals with lower prices.
- **For whom:** Output goes to those willing and able to pay the market price, which depends largely on the income they earn from selling their factors of production.

### The Roles of Prices, Property Rights and Incentives

| Element | Why it matters in a market economy |
|---|---|
| **Prices** | Act as **signals** (a higher price tells sellers to produce more and buyers to economize) and as **incentives** (higher prices reward the producers who respond) |
| **Property rights** | Owners can keep the returns from their land, capital and ideas, so they have a reason to invest, maintain and innovate |
| **Incentives** | Rewards and penalties that change behavior; self-interested choices, coordinated by prices, tend to direct resources to their most valued uses (Adam Smith's "invisible hand") |

In product markets, households buy goods and services from firms. In factor markets, firms buy land, labor, capital and entrepreneurship from the households that own them. Prices in both markets coordinate millions of choices without a central planner.

> 🔑 **AP Connection:** Command economies often struggle with shortages and surpluses because planners lack the information that market prices carry. On the exam, connect any system question back to scarcity: every system is a way of rationing limited resources.
`
    },
    {
      id: 'microsca2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In a ___ economy, a central authority decides what is produced and who receives it.',
            options: ['market', 'command', 'traditional', 'mixed']
          },
          {
            label: 'The payment that the owners of capital receive for its use is called ___.',
            options: ['rent', 'wages', 'interest', 'profit']
          },
          {
            label: '"Rent control should be repealed in large cities" is a ___ statement.',
            options: ['positive', 'normative', 'empirical', 'descriptive']
          },
          {
            label: 'In a market economy, the question of how to produce is answered mainly by ___.',
            options: ['firms seeking low costs', 'planners setting quotas', 'customs handed down', 'voters in elections']
          }
        ],
        correctAnswers: ['command', 'interest', 'normative', 'firms seeking low costs'],
        hint1: 'Which system relies on government planners rather than prices?',
        hint2: 'Land earns rent and labor earns wages. What does capital earn?',
        hint3: 'Look for a value word such as "should".',
        explanation: 'A command economy relies on central planners. Owners of capital earn interest. "Should" marks a value judgment, so the rent-control statement is normative. In a market economy, competition pushes firms to choose the lowest-cost method of production.'
      }
    },
    {
      id: 'microsca2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In a market economy, a sharp rise in the price of lumber is most likely to lead builders to',
            options: [
              'cut back on lumber and switch to substitutes',
              'ask the government to ration lumber',
              'build more homes to spread the cost',
              'hold lumber use fixed until prices fall'
            ],
            correctAnswer: 0,
            explanation: 'A higher price signals that lumber has become scarcer and gives buyers an incentive to use less of it, for example by switching to steel framing. Rationing by government is a command-economy tool, and building more homes would raise lumber use rather than economize on it.'
          },
          {
            question: 'Secure property rights encourage investment in a market economy mainly by ensuring that',
            options: [
              'owners keep the returns their capital earns',
              'owners receive subsidies that cover their losses',
              'owners face a lower opportunity cost of capital',
              'owners can charge prices above the market level'
            ],
            correctAnswer: 0,
            explanation: 'When owners can keep the returns from their capital, land and ideas, they have an incentive to invest and maintain them. Property rights do not guarantee subsidies, change the opportunity cost of capital, or let owners ignore market prices.'
          },
          {
            question: 'Jordan quits a \\$35,000-a-year job to attend a one-year program. Tuition is \\$15,000, books cost \\$4,000, and Jordan pays \\$9,000 in rent whether or not he enrolls. What is the opportunity cost of the year in school?',
            options: [
              '\\$63,000',
              '\\$54,000',
              '\\$19,000',
              '\\$35,000'
            ],
            correctAnswer: 1,
            explanation: 'Opportunity cost includes the explicit costs that school adds (\\$15,000 tuition and \\$4,000 books) plus the implicit cost of the forgone salary (\\$35,000), for \\$54,000. Rent is paid either way, so it is not a cost of choosing school; including it gives \\$63,000.'
          }
        ]
      }
    }
  ]
}
