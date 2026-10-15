export const macroScarcityOpportunityCostPart5Data = {
  topicSlug: 'macro-scarcity-opportunity-cost',
  sections: [
    {
      id: 'macrosca5-intro',
      type: 'text' as const,
      content: `
# 📊 Scarcity & Opportunity Cost

**Part 5 of 7 — The PPC as a Macro Model & Common Misconceptions**

---

| Section |
|---------|
| 📖 The PPC and the Whole Economy |
| Full Employment Is Not Zero Unemployment |
| Growth, Investment and Human Capital |
| Misconceptions the AP Exam Targets |

> 🔑 **Key Concept:** The PPC is a preview of the big ideas in AP Macroeconomics. A point **on** the curve is full-employment output, a point **inside** is a recession, and an **outward shift** is long-run economic growth. Later units tell the same story with the AD-AS model.
`
    },
    {
      id: 'macrosca5-macro',
      type: 'text' as const,
      content: `
## 📖 The PPC and the Whole Economy

| PPC feature | Macroeconomic meaning | Where you meet it again |
|---|---|---|
| Point **on** the curve | The economy produces its **full-employment (potential) output** | Long-run aggregate supply (LRAS) is drawn at this output |
| Point **inside** the curve | Actual output is below potential; there is **cyclical unemployment** | Recessionary gap in the AD-AS model |
| **Outward shift** | **Economic growth**: potential output has increased | LRAS shifts right |
| **Inward shift** | Productive capacity has fallen (war, disaster, loss of capital) | LRAS shifts left |

## Full Employment Is Not Zero Unemployment

Being on the PPC means the economy has no **cyclical** unemployment. Some unemployment remains:
- **Frictional** unemployment: people between jobs or searching for their first job
- **Structural** unemployment: workers whose skills or locations do not match the available jobs

Together these make up the **natural rate of unemployment**. An economy on its PPC has unemployment equal to the natural rate, not zero.

### Worked Example: Reading a recession on the PPC

An economy's PPC runs from 600 units of consumer goods (vertical axis) to 300 units of capital goods (horizontal axis). Last year it produced 400 consumer goods and 150 capital goods, a point on the curve. This year a fall in spending leaves factories idle, and output drops to 350 consumer goods and 120 capital goods.

1. The new point is **inside** the PPC: less of both goods with the same resources.
2. The gap between the two points reflects **cyclical** unemployment.
3. The PPC itself has not moved, because the idle workers and factories still exist.
4. Policies that raise spending (covered in the fiscal and monetary policy units) aim to move the economy back to the curve, not to shift it.

## Growth, Investment and Human Capital

The PPC shifts outward when the economy gains more or better resources, or better technology:

| Source of growth | Example | Who pays the opportunity cost now |
|---|---|---|
| **Physical capital** | New factories, machines, broadband networks | Households and firms that save and invest instead of consuming |
| **Human capital** | Education, job training, better health | Students who study instead of working; taxpayers funding schools |
| **Technology** | New production methods, better software | Firms and governments that spend on research and development |
| **Labor force growth** | Population growth, immigration, higher participation | (No direct sacrifice of output) |

Each source except labor force growth requires giving up some current consumption to build future capacity. That is the opportunity cost of growth.

> 🔑 **AP Connection:** The PPC shows what an economy can **produce**. Trade can let a country **consume** a combination outside its own PPC, which is the subject of the comparative advantage topic. Trade does not move the PPC itself.
`
    },
    {
      id: 'macrosca5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy is producing at a point on its production possibilities curve. Which statement about its labor market is most accurate?',
            options: [
              "Unemployment is zero, because every person who wants a job has one.",
              "Unemployment is above the natural rate, so output is below potential.",
              "Only structural unemployment exists; frictional unemployment is zero.",
              "Unemployment equals the natural rate, so cyclical unemployment is zero."
            ],
            correctAnswer: 3,
            explanation: 'A point on the PPC is full-employment output, where cyclical unemployment is zero but frictional and structural unemployment remain. Unemployment above the natural rate would place the economy inside the curve.'
          },
          {
            question: 'Which of the following allows an economy to consume a combination of goods that lies outside its own PPC?',
            options: [
              "Specializing and trading with other countries",
              "Reducing unemployment to the natural rate",
              "Printing more money to buy more of both goods",
              "Shifting resources toward the more popular good"
            ],
            correctAnswer: 0,
            explanation: 'By specializing in its comparative advantage and trading, a country can consume more than it could produce alone. Reaching the natural rate only brings it to its PPC, money is not a productive resource, and reallocating resources moves it along the curve.'
          }
        ]
      }
    },
    {
      id: 'macrosca5-misconceptions',
      type: 'text' as const,
      content: `
## 📖 Misconceptions the AP Exam Targets

| Misconception | Correct idea |
|---|---|
| "Opportunity cost is the sum of everything I gave up." | It is the value of the **single next-best** alternative. |
| "Money is capital." | Capital is **physical**: machines, tools, buildings. Money is a medium of exchange. |
| "Higher unemployment shifts the PPC inward." | Idle resources still exist. Unemployment moves the economy to a point **inside** the curve. |
| "A higher price for a good shifts the PPC." | Prices are not resources. Only resources and technology shift the curve. |
| "Points outside the PPC are inefficient." | They are **unattainable** with current resources and technology. Inefficient points are **inside**. |
| "Every point on the PPC is the best point." | Every point on the curve is **productively** efficient; only one is **allocatively** efficient. |
| "If 20 units cost 100 of the other good, the opportunity cost is 100." | That is the **total** cost. The **per-unit** cost is 100 ÷ 20 = 5. |
| "Technology in one industry shifts the whole curve evenly." | It **pivots** the curve: only that good's intercept moves. |

### Worked Example: Fixing a student answer

**FRQ prompt:** "A country's unemployment rate rises from 4% to 9%. Show the effect on the country's PPC."

**Student answer:** "The PPC shifts inward because the country has fewer workers."

**What is wrong:** The unemployed workers are still in the economy; the country has the same labor force, capital and technology. Its capacity has not changed.

**Corrected answer:** "The PPC does not shift. The economy moves from a point on the PPC to a point inside it, because labor resources are now unemployed and output of both goods falls."
`
    },
    {
      id: 'macrosca5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the answer that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An economy at full employment produces at a point ___ its PPC.',
            options: ['on', 'inside', 'outside', 'below the origin of']
          },
          {
            label: 'Full employment means unemployment equals the ___ rate of unemployment.',
            options: ['natural', 'cyclical', 'zero', 'structural']
          },
          {
            label: 'An outward shift of the PPC corresponds to a rightward shift of ___ in the AD-AS model.',
            options: ['long-run aggregate supply', 'aggregate demand', 'the money demand curve', 'the short-run Phillips curve']
          },
          {
            label: 'A point outside the PPC is best described as ___.',
            options: ['unattainable', 'inefficient', 'allocatively efficient', 'productively efficient']
          }
        ],
        correctAnswers: ['on', 'natural', 'long-run aggregate supply', 'unattainable'],
        hint1: 'Full employment means no resources are idle beyond normal job search and mismatch.',
        hint2: 'This rate includes frictional and structural unemployment only.',
        hint3: 'Which curve is drawn at potential (full-employment) output?',
        explanation: 'Full employment is a point on the PPC, where unemployment equals the natural rate. Growth in potential output shifts both the PPC outward and LRAS to the right. Points outside the curve cannot be produced with current resources and technology.'
      }
    },
    {
      id: 'macrosca5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A student writes, "If the price of computers doubles, the PPC shifts outward along the computer axis." What is the error in this reasoning?',
            options: [
              "Price increases shift the PPC inward along the computer axis.",
              "Prices do not change the resources or technology available.",
              "Only the wheat intercept moves when computer prices rise.",
              "A price change pivots the curve around the origin instead."
            ],
            correctAnswer: 1,
            explanation: 'The PPC is set by resources and technology, and a higher price changes neither. A price change can affect which point on the curve society chooses, but it does not move the curve.'
          },
          {
            question: 'Moving from 10 to 20 computers costs an economy 50 tons of wheat. A student concludes that each computer costs 50 tons of wheat. What is the correct per-unit opportunity cost?',
            options: [
              "50 tons of wheat per computer",
              "0.2 tons of wheat per computer",
              "5 tons of wheat per computer",
              "500 tons of wheat per computer"
            ],
            correctAnswer: 2,
            explanation: 'The 50 tons buy 10 extra computers, so each computer costs 50 ÷ 10 = 5 tons. Fifty tons is the total cost of the move, and 0.2 is the reciprocal (computers per ton of wheat).'
          },
          {
            question: 'Which policy is most likely to shift a country\'s PPC outward in the long run?',
            options: [
              "Raising the minimum wage for every worker",
              "Cutting spending on roads to balance the budget",
              "Encouraging households to consume more today",
              "Subsidizing job training that raises workers' skills"
            ],
            correctAnswer: 3,
            explanation: 'Job training builds human capital, so the same workers can produce more and the curve shifts outward. Cutting infrastructure spending reduces future capital, and more consumption today leaves fewer resources for building capacity.'
          }
        ]
      }
    }
  ]
}
