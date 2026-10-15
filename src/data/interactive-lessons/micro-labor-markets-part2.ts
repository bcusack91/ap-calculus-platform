export const microLaborMarketsPart2Data = {
  topicSlug: 'micro-labor-markets',
  sections: [
    {
      id: 'microlab2-intro',
      type: 'text' as const,
      content: `
# 💰 Labor Markets

**Part 2 of 7 — Labor Supply in Depth**

---

| Section |
|---------|
| 📖 The Work–Leisure Choice |
| Why Market Labor Supply Slopes Upward |
| What Shifts Labor Supply |
| Elasticity of Labor Supply |

> 🔑 **Key Concept:** Labor supply comes from people deciding how to use their time. Every hour spent not working gives up the wage that hour could have earned, so **the wage is the opportunity cost of leisure**. A higher wage moves workers **along** the supply curve. Anything else that changes people's willingness or ability to do a job **shifts** the curve.
`
    },
    {
      id: 'microlab2-work-leisure',
      type: 'text' as const,
      content: `
## 📖 The Work–Leisure Choice

Economists divide a person's time into two uses: **work**, which earns the wage, and **leisure**, which means every other use of time (rest, family, school, hobbies). Choosing one more hour of leisure means giving up one hour of pay.

### The Opportunity Cost of Leisure
Maya works at a coffee shop for **\\$18 an hour** and can pick up extra shifts.
- Taking a 3-hour afternoon off costs her 3 × \\$18 = **\\$54** of forgone pay.
- If her wage rises to \\$24, the same afternoon off costs **\\$72**.

Leisure has become more expensive, so Maya is likely to give up some of it and **work more hours**. That is why an individual's labor supply usually slopes upward over the range of wages the AP course considers.

> 🔑 **AP Connection:** The AP exam draws the **market** labor supply curve sloping upward. You may read elsewhere that a very high wage can lead some people to choose more leisure; that idea is outside the AP Microeconomics course, so do not draw a backward-bending curve on the exam.

## Why Market Labor Supply Slopes Upward

The market supply of a particular kind of labor rises with its wage for three reasons.

| Reason | What happens as the wage for electricians rises |
|---|---|
| **More hours from current workers** | Electricians already in the trade take on more jobs and overtime |
| **Workers switch from other jobs** | Construction workers and maintenance technicians train for the trade, because it now pays more than their alternatives |
| **New entrants** | People who were not working, or who are deciding on a career, choose electrical work |

| Wage per hour | Electricians willing to work in the region |
|---|---|
| \\$25 | 800 |
| \\$30 | 1,000 |
| \\$35 | 1,150 |

A change in the electricians' wage from \\$25 to \\$30 is a **movement along** this supply schedule: the quantity of labor supplied rises from 800 to 1,000.
`
    },
    {
      id: 'microlab2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A nurse earns \\$45 an hour and is offered a 4-hour extra shift but chooses to spend the time at home. What is the opportunity cost of that leisure?',
            options: [
              '\\$180',
              '\\$45',
              '\\$11.25',
              '\\$0'
            ],
            correctAnswer: 0,
            explanation: 'Each hour of leisure gives up the \\$45 that hour would have earned, so 4 hours cost 4 × \\$45 = \\$180. \\$45 is the cost of only one hour, and leisure is not free just because no money changes hands.'
          },
          {
            question: 'Why does the market supply curve for truck drivers slope upward?',
            options: [
              'A higher wage draws workers from other jobs and from outside the labor force',
              'A higher wage raises the marginal revenue product of each truck driver',
              'Trucking firms hire more drivers when the wage for drivers is higher',
              'Fewer people are willing to drive trucks as the job pays more each year'
            ],
            correctAnswer: 0,
            explanation: 'As the wage rises, current drivers work more and people switch in from other work or join the labor force, so the quantity supplied rises. MRP is about labor demand, and firms hire fewer drivers, not more, at a higher wage.'
          }
        ]
      }
    },
    {
      id: 'microlab2-shifters',
      type: 'text' as const,
      content: `
## What Shifts Labor Supply

The supply of a type of labor **shifts** when something other than that job's own wage changes how many people are willing and able to do it.

| Shifter | Example | Supply shifts | Wage and employment (demand unchanged) |
|---|---|---|---|
| **Size of the labor force** (population, immigration, retirements) | Immigration raises the number of farmworkers | Right | Wage falls, employment rises |
| **Wages in alternative jobs** | Warehouse jobs start paying much more, so fewer people stay in retail | Left (in retail) | Wage rises, employment falls |
| **Nonwage job features** | A hospital adds flexible schedules and safer staffing ratios | Right | Wage falls, employment rises |
| **Required training or licensing** | A state adds 500 training hours to the requirement for a cosmetology license | Left | Wage rises, employment falls |
| **Preferences and social norms** | More people come to see skilled trades as a good career | Right | Wage falls, employment rises |

### Movement or Shift?
- The **wage for this job** changes: **movement along** supply.
- The **wage in another job** changes: **shift** of supply for this job, because it changes the opportunity cost of staying here.

> ⚠️ **Common trap:** "Higher wages in nursing increase the supply of nurses" describes a movement along the supply curve, not a shift. Supply shifts only when something besides the nurse wage changes, such as more nursing-school seats.
`
    },
    {
      id: 'microlab2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Shift or Movement?** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A city offers free coding bootcamps. The supply of entry-level programmers ___',
            options: ['shifts right', 'shifts left', 'does not shift', 'becomes vertical']
          },
          {
            label: 'Construction wages rise sharply. The supply of landscaping workers ___',
            options: ['shifts left', 'shifts right', 'does not shift', 'becomes vertical']
          },
          {
            label: 'The wage for lifeguards rises from \\$15 to \\$17. The supply of lifeguards ___',
            options: ['does not shift', 'shifts right', 'shifts left', 'becomes vertical']
          },
          {
            label: 'A large share of experienced pilots reach mandatory retirement age. The supply of airline pilots ___',
            options: ['shifts left', 'shifts right', 'does not shift', 'becomes vertical']
          }
        ],
        correctAnswers: ['shifts right', 'shifts left', 'does not shift', 'shifts left'],
        hint1: 'Free training makes it easier to qualify for the job.',
        hint2: 'Landscapers could earn more in construction now.',
        hint3: 'This is the job\'s own wage.',
        explanation: 'Free training adds qualified workers, so supply shifts right. Higher construction wages raise the opportunity cost of landscaping, so landscaping supply shifts left. A lifeguard wage change is a movement along the lifeguard supply curve. Retirements shrink the pool of pilots, so supply shifts left.'
      }
    },
    {
      id: 'microlab2-elasticity',
      type: 'text' as const,
      content: `
## Elasticity of Labor Supply

Elasticity of labor supply measures how strongly the quantity of labor supplied responds to the wage, using the same formula as price elasticity of supply:

$$E_{LS} = \\frac{\\%\\Delta \\text{ quantity of labor supplied}}{\\%\\Delta \\text{ wage}}$$

### It Grows with Time
Hospitals in a region raise the wage for physical therapists by **10%**.

| Time after the raise | Rise in physical therapists working | Elasticity | Why |
|---|---|---|---|
| 6 months | 4% | 0.4 (inelastic) | Only current therapists can respond, by adding hours |
| 5 years | 15% | 1.5 (elastic) | New graduates finish training and therapists move in from other regions |

### Specialized vs. General Skills

| Kind of job | Labor supply | Reason |
|---|---|---|
| Brain surgeon, airline pilot | Inelastic | Years of training; few people can switch in quickly |
| Retail clerk, food delivery | Elastic | Little training; many people can start soon |

### Why It Matters
When labor **demand** increases, the elasticity of supply decides how the gain is split:
- **Inelastic supply:** the wage rises a lot and employment rises a little (surgeons).
- **Elastic supply:** employment rises a lot and the wage rises a little (delivery drivers).

> 🔑 **AP Connection:** This is the same reasoning you used for product markets in the Elasticity lesson. A steep (inelastic) supply curve turns a demand shift mostly into a price change, and in the labor market the price is the wage.
`
    },
    {
      id: 'microlab2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which event shifts the supply of home health aides to the left?',
            options: [
              'Hospitals raise the pay of nursing assistants, a similar job',
              'The wage for home health aides falls from \\$17 to \\$16',
              'A state pays the cost of home health aide training courses',
              'Many workers arrive in the region from other countries'
            ],
            correctAnswer: 0,
            explanation: 'Better pay in a similar job raises the opportunity cost of being a home health aide, so fewer people offer that work at each wage. A change in the aides\' own wage is a movement along supply, and free training or immigration shifts supply to the right.'
          },
          {
            question: 'Demand for airline pilots and for food-delivery drivers each rises by the same amount. Pilot supply is inelastic and driver supply is elastic. Which outcome is most likely?',
            options: [
              'Pilot wages rise by more and driver employment rises by more',
              'Pilot employment rises by more and driver wages rise by more',
              'Both wages rise by the same amount, as the demand shifts match',
              'Driver wages rise and pilot wages fall, as the supplies differ'
            ],
            correctAnswer: 0,
            explanation: 'With inelastic supply, few new pilots can enter quickly, so the demand increase mainly raises the wage. With elastic supply, many new drivers respond, so employment rises a lot and the wage rises only a little.'
          },
          {
            question: 'The wage for welders rises 8%, and over the next year the number of welders working rises 2%. The elasticity of welder labor supply over that year is',
            options: [
              '0.25, inelastic',
              '4, elastic',
              '0.25, elastic',
              '4, inelastic'
            ],
            correctAnswer: 0,
            explanation: 'Elasticity = 2% ÷ 8% = 0.25. A value below 1 means the quantity of labor supplied responds less than proportionally to the wage, so supply is inelastic. Dividing the other way gives 4.'
          }
        ]
      }
    }
  ]
}
