export const microLaborMarketsPart5Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlab5-intro',
      type: 'text' as const,
      content: `
# 💰 Labor Markets

**Part 5 of 7 — Why Wages Differ**

---

| Section |
|---------|
| 📖 Human Capital as an Investment |
| Compensating Differentials |
| Discrimination |
| Unions and Occupational Licensing |
| Misconceptions to Avoid |

> 🔑 **Key Concept:** If every labor market were identical, everyone would earn the same wage. They are not. Wages differ because workers' **MRP** differs (demand side) and because the number of people **willing and able** to do each job differs (supply side). Every explanation of a wage gap in this part is a statement about one or both curves.
`
    },
    {
      id: 'microlab5-human-capital',
      type: 'text' as const,
      content: `
## 📖 Human Capital as an Investment

**Human capital** is the knowledge and skill a worker gains through education, training and experience. Like a firm buying a machine, a worker pays a cost now to earn a return later.

### The Costs
- **Direct costs:** tuition, books, fees.
- **Forgone earnings:** the wages given up while training. This is often the larger cost.

### The Return
Training raises the worker's **marginal product**, so it raises the worker's **MRP** and the wage an employer is willing to pay.

### A Worked Example
Jordan earns \\$15 an hour at a warehouse. A one-semester welding certificate costs **\\$4,000** in tuition, and Jordan would give up **\\$8,000** in wages while in school.

| Item | Amount |
|---|---|
| Total cost of the certificate | \\$4,000 + \\$8,000 = **\\$12,000** |
| Wage as a certified welder | \\$18 an hour |
| Extra pay per year (2,000 hours) | \\$3 × 2,000 = **\\$6,000** |
| Years to recover the cost (ignoring interest) | \\$12,000 ÷ \\$6,000 = **2 years** |

Over a career of 30 or more years, the certificate pays for itself many times. That is why workers keep investing in training even when it is expensive.

### Both Curves at Work
- **Demand:** skilled workers have a higher MRP, so firms' demand for them is higher.
- **Supply:** training is costly and slow, so fewer people are qualified, and the supply of skilled workers is smaller.

Higher demand and smaller supply together give skilled jobs a **higher equilibrium wage**.
`
    },
    {
      id: 'microlab5-differentials',
      type: 'text' as const,
      content: `
## Compensating Differentials

A **compensating differential** is a wage difference that makes up for a job's nonwage features.

| Job feature | Effect on labor supply | Effect on the wage |
|---|---|---|
| Dangerous (offshore oil rig) | Fewer people willing at each wage: supply **left** | Higher wage |
| Unpleasant hours (overnight shifts) | Supply left | Higher wage (a night-shift premium) |
| Remote or isolated location | Supply left | Higher wage |
| Pleasant, prestigious or flexible | More people willing: supply **right** | Lower wage |

### Example
A hospital pays day-shift nurses \\$40 an hour and overnight nurses \\$44. The two jobs require the same skill, so MRP is about the same. The \\$4 premium exists because fewer nurses will work overnight at \\$40, so the overnight labor market clears at a higher wage.

> 🔑 **AP Connection:** A compensating differential is a **supply-side** explanation. On a graph, show two labor markets with the same demand curve, and draw the supply curve for the unpleasant job to the **left** of the other one.
`
    },
    {
      id: 'microlab5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two jobs require the same skills, but one involves working on high-voltage power lines and pays more. Which explanation fits best?',
            options: [
              'A compensating differential, from a smaller supply of willing workers',
              'Human capital, because line workers have more years of schooling',
              'A higher MRP, because electricity has a higher price than other goods',
              'Discrimination, because employers prefer some line workers'
            ],
            correctAnswer: 0,
            explanation: 'The jobs need the same skills, so human capital and productivity are not the difference. Fewer people are willing to do dangerous work at each wage, so supply is smaller and the wage is higher: a compensating differential.'
          },
          {
            question: 'A worker considering a two-year degree adds up the costs. Which item is usually the largest cost of full-time training?',
            options: [
              'Wages given up during the program',
              'Interest on a loan for the books',
              'Fees for exams and certificates',
              'Tuition for the general courses'
            ],
            correctAnswer: 0,
            explanation: 'Forgone earnings are a real opportunity cost and are often larger than tuition, especially for full-time study. They are easy to forget because no bill arrives.'
          }
        ]
      }
    },
    {
      id: 'microlab5-discrimination',
      type: 'text' as const,
      content: `
## Discrimination

**Labor-market discrimination** means paying or hiring workers differently because of a characteristic unrelated to their productivity, such as race, sex or religion. It is a source of wage gaps that productivity does not explain.

### Two Ways It Shows Up on Graphs

| Channel | What happens | Effect on the group's wage |
|---|---|---|
| **Employer prejudice** | Some employers refuse to hire, or offer less to, workers in a group, so **demand** for that group's labor is lower | Lower wage and lower employment for the group |
| **Occupational crowding** | When a group is shut out of some occupations, its members crowd into the others, raising **supply** in those occupations | Lower wages in the crowded occupations |

### A Cost to the Discriminating Firm
An employer who passes over a qualified worker whose MRP exceeds the wage gives up profit. In a competitive product market, firms that do not discriminate can hire those workers, produce at lower cost, and gain an advantage. That pressure can reduce discrimination over time, but it does not eliminate it, which is one reason governments also use anti-discrimination laws.

## Unions and Occupational Licensing

### Unions Negotiating a Higher Wage
A **labor union** bargains for its members as a group. If it wins a wage **above** the competitive equilibrium, the effect on the graph is the same as a price floor.

Using the packaging market from Part 4 (equilibrium \\$18 and 500 workers), a negotiated wage of **\\$21**:
- Employment falls to **400**: firms move up their MRP curves.
- 600 workers want jobs at \\$21, so 200 are left without one.
- Workers who keep their jobs earn \\$3 more an hour.

### Restricting Supply: Craft Unions and Licensing
Some unions limit the number of people who can enter a trade through long apprenticeships, and governments require **occupational licenses** for many jobs. Both shift labor **supply left**:

| Policy | Supply | Wage | Employment |
|---|---|---|---|
| Union limits apprenticeships | Left | Rises | Falls |
| State requires a license to braid hair | Left | Rises | Falls |

Licensing may protect consumers from unqualified workers, but in supply-and-demand terms it raises wages for license holders and reduces the number of people working in the occupation.
`
    },
    {
      id: 'microlab5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Explanation** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Engineers earn more than cashiers, mainly because of years of costly training. This is ___',
            options: ['human capital', 'a compensating differential', 'occupational crowding', 'a union wage']
          },
          {
            label: 'Crab fishers in the Bering Sea earn high pay for dangerous winter work. This is ___',
            options: ['a compensating differential', 'human capital', 'occupational crowding', 'a union wage']
          },
          {
            label: 'A group barred from several professions floods into the few left open, and wages there fall. This is ___',
            options: ['occupational crowding', 'human capital', 'a compensating differential', 'a union wage']
          },
          {
            label: 'Workers bargain as a group and win pay above equilibrium, and firms hire fewer of them. This is ___',
            options: ['a union wage', 'human capital', 'a compensating differential', 'occupational crowding']
          }
        ],
        correctAnswers: ['human capital', 'a compensating differential', 'occupational crowding', 'a union wage'],
        hint1: 'Training raises productivity and limits who can qualify.',
        hint2: 'The pay makes up for danger, not for extra skill.',
        hint3: 'A group\'s labor is pushed into fewer markets, raising supply there.',
        explanation: 'Costly training that raises MRP is human capital. Extra pay for danger is a compensating differential. Being shut out of some occupations crowds a group into others and lowers wages there. A bargained wage above equilibrium is a union wage, which works like a price floor.'
      }
    },
    {
      id: 'microlab5-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "Hard jobs always pay more." | Jobs pay more when supply is small relative to demand. A hard job that many people can do, or that has low MRP, can pay little. |
| "A higher wage means workers are more productive." | Compensating differentials and licensing raise wages without any change in productivity. |
| "A union wage helps all workers in the industry." | Above equilibrium, it helps those who keep jobs and hurts those who are not hired. |
| "Licensing shifts labor demand." | It changes who **can** work, so it shifts **supply**. |
| "Discrimination is only about lower pay." | It can also lower employment (fewer hires) or crowd workers into other occupations. |

> ⚠️ **Common trap:** On the AP exam, a question about why one group earns more is really asking you to name **which curve** differs. "Higher MRP" is a demand answer; "fewer people willing or able" is a supply answer.
`
    },
    {
      id: 'microlab5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A state begins requiring a license, with 600 hours of training, to work as a home interior designer. In that labor market, what happens?',
            options: [
              'Supply shifts left, so the wage rises and employment falls',
              'Supply shifts right, so the wage falls and employment rises',
              'Supply shifts left, so the wage and employment both fall',
              'Demand shifts left, so the wage falls and employment falls'
            ],
            correctAnswer: 0,
            explanation: 'A licensing requirement reduces the number of people able to do the job at each wage, so supply shifts left. The wage rises and fewer people work as designers. Firms\' MRP is unchanged, so demand does not shift.'
          },
          {
            question: 'In a competitive labor market, a union wins a wage above the equilibrium wage. Compared with the competitive outcome, which result is expected?',
            options: [
              'Fewer workers are hired',
              'More workers are hired, since higher pay attracts applicants',
              'Employment stays the same, since union members keep their jobs',
              'The labor shortage grows as firms try to hire at a higher wage'
            ],
            correctAnswer: 0,
            explanation: 'A wage above equilibrium works like a price floor: firms hire only the quantity demanded at that wage, which is less than before, and the extra applicants form a surplus, not a shortage.'
          },
          {
            question: 'Why might competition in the product market reduce employer discrimination over time?',
            options: [
              'Firms that skip qualified workers have higher costs than rivals',
              'Competitive firms are required by law to pay every worker the same wage',
              'Competition raises every worker\'s MRP so that firms must hire all applicants',
              'Firms in competitive markets cannot change the wage, so they cannot discriminate'
            ],
            correctAnswer: 0,
            explanation: 'A firm that refuses to hire workers whose MRP exceeds the wage gives up profit and has higher costs than rivals that hire them. Competitive pressure punishes that choice, although it does not guarantee that discrimination disappears.'
          }
        ]
      }
    }
  ]
}
