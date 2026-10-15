export const macroGdpGrowthPart6Data = {
  topicSlug: 'macro-gdp-growth',
  sections: [
    {
      id: 'macrogdp6-intro',
      type: 'text' as const,
      content: `
# 📈 GDP & Economic Growth

**Part 6 of 7 — Economic Growth & Public Policy**

---

| Section |
|---------|
| 📖 What Economic Growth Means |
| The Sources of Growth and Productivity |
| Growth by the Numbers |
| Public Policy and Long-Run Growth |
| FRQ-Style Practice with a Model Answer |

> 🔑 **Key Concept:** **Economic growth** is a sustained increase in **real GDP per capita**, which happens when the economy's **potential output** rises. It is shown as an **outward shift of the PPC** and a **rightward shift of the long-run aggregate supply (LRAS) curve**. Over long periods, growth in living standards comes mainly from rising **productivity**.
`
    },
    {
      id: 'macrogdp6-meaning',
      type: 'text' as const,
      content: `
## 📖 What Economic Growth Means

### Growth vs. Recovery
Real GDP can rise for two very different reasons.

| | Recovery (short run) | Long-run economic growth |
|---|---|---|
| What changes | The economy uses **idle resources** it already has | The economy's **capacity to produce** expands |
| On the PPC | A movement from a point **inside** the curve toward the curve | The whole curve **shifts outward** |
| On the AD-AS model | Short-run equilibrium output moves toward the LRAS curve | The **LRAS curve shifts right** |
| Can it continue for decades? | No: it stops once the economy reaches full employment | Yes, as long as resources, skills and technology keep improving |

### Picture the Graphs
- **PPC:** Capital goods on one axis and consumer goods on the other. Growth moves the entire bowed-out curve away from the origin, so the economy can produce more of **both** goods.
- **LRAS:** The price level is on the vertical axis and real GDP on the horizontal axis. LRAS is a **vertical line at full-employment output**. Growth shifts it from Y₁ to a larger Y₂, so potential output rises at every price level.

> 🔑 **AP Connection:** On an FRQ, "long-run economic growth" means you should shift the **PPC outward** or the **LRAS curve to the right**. A movement from inside the PPC to the curve, or a rightward shift of AD alone, is not long-run growth.
`
    },
    {
      id: 'macrogdp6-sources',
      type: 'text' as const,
      content: `
## The Sources of Growth and Productivity

Potential output rises when the economy gains **more resources** or uses them **more productively**.

| Source | What it means | Example |
|---|---|---|
| **Physical capital** | More or better machines, buildings, equipment and infrastructure per worker | A trucking firm adds GPS routing systems; a city builds a new port |
| **Human capital** | The knowledge, skills and health of workers | More workers finish high school, college or apprenticeship programs |
| **Technology** | Better methods of combining resources to produce output | A new manufacturing process cuts the labor needed per car |
| **Natural resources** | The quantity and quality of land, minerals and energy available | Discovery of a large natural gas field |
| **Labor force** | The number of people available to work | Population growth or higher labor force participation |

### Productivity: The Key to Living Standards
**Labor productivity** is real output per worker or per hour of work.

**Productivity = real output ÷ number of workers (or hours worked)**

A larger labor force raises **total** real GDP, but it does not by itself raise output **per person**. Sustained growth in real GDP per capita requires each worker to produce more, and productivity rises when workers have:
1. **more physical capital** to work with,
2. **more human capital** (skills and education), and
3. **better technology**.

### Worked Example: Productivity Growth

| Year | Workers | Real output (units) | Output per worker |
|---|---|---|---|
| Year 1 | 200 | 10,000 | 10,000 ÷ 200 = **50** |
| Year 2 | 220 | 12,100 | 12,100 ÷ 220 = **55** |

- Total output grew (12,100 − 10,000) ÷ 10,000 = **21%**.
- The number of workers grew 10%.
- Productivity grew (55 − 50) ÷ 50 = **10%**.

About half of this economy's output growth came from more workers and half from each worker producing more. Only the productivity half raises output per worker.
`
    },
    {
      id: 'macrogdp6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "Which of the following is the best measure of long-run economic growth?",
            options: [
              "A sustained rise in nominal GDP",
              "A sustained rise in real GDP per capita",
              "A one-year rise in real GDP after a recession",
              "A sustained rise in the GDP deflator"
            ],
            correctAnswer: 1,
            explanation: "Growth means each person's real output rises over time, which real GDP per capita measures. Nominal GDP and the deflator rise with inflation, and a single year of recovery can come from re-employing idle resources rather than from expanding capacity."
          },
          {
            question: "An economy moves from a point inside its production possibilities curve to a point on the curve. This movement represents",
            options: [
              "a recovery that puts idle resources to work",
              "long-run growth from an increase in resources",
              "an outward shift of the economy's production frontier",
              "a rise in the economy's potential output over time"
            ],
            correctAnswer: 0,
            explanation: "A point inside the curve means some resources are unemployed, so moving to the curve is a recovery using resources the economy already had. Long-run growth would shift the curve itself outward and raise potential output."
          },
          {
            question: "Labor productivity is defined as",
            options: [
              "total real output divided by the population",
              "the yearly growth rate of real GDP",
              "real output per worker or per hour of work",
              "the number of hours each worker supplies"
            ],
            correctAnswer: 2,
            explanation: "Labor productivity measures how much real output each worker, or each hour of work, produces. Output divided by population is real GDP per capita, the growth rate of real GDP is a different measure, and hours supplied measure labor input rather than output per unit of it."
          },
          {
            question: "Which change increases an economy's human capital?",
            options: [
              "A firm installs robotic welders in its plant",
              "Workers complete a new welding training program",
              "Geologists discover new deposits of copper ore",
              "The number of working-age adults grows larger"
            ],
            correctAnswer: 1,
            explanation: "Human capital is the skill and knowledge workers carry, so training raises it. Robotic welders add physical capital, a copper discovery adds natural resources, and more working-age adults enlarge the labor force without raising each worker's skills."
          }
        ]
      }
    },
    {
      id: 'macrogdp6-math',
      type: 'text' as const,
      content: `
## Growth by the Numbers

### Small Rates Compound into Large Differences
When real GDP per capita grows at a steady rate, each year's growth builds on the last. After n years, output per person is (1 + growth rate) raised to the power n times its starting value.

| Annual growth rate | Multiple after 10 years | Multiple after 35 years |
|---|---|---|
| 1% | 1.105 | 1.417 |
| 2% | 1.219 | 2.000 |
| 3% | 1.344 | 2.814 |
| 5% | 1.629 | 5.516 |

At 2% a year, living standards double in about 35 years. At 1%, they rise only about 42% over the same period. A difference of one percentage point in the growth rate, sustained for a generation, separates a country that doubles its output per person from one that does not.

### Comparing Growth Rates

**Real GDP per capita growth ≈ real GDP growth − population growth**

| Country | Real GDP growth | Population growth | Real GDP per capita growth |
|---|---|---|---|
| A | 4% | 3% | about 1% |
| B | 2.5% | 0.5% | about 2% |

Country A's economy grows faster in total, but **Country B's living standards rise faster**.
`
    },
    {
      id: 'macrogdp6-input',
      type: 'input-boxes' as const,
      content: `
**Measure the Productivity** ✍️

| Year | Real GDP | Hours worked |
|---|---|---|
| Year 1 | \\$800 billion | 20 billion |
| Year 2 | \\$924 billion | 22 billion |

**1)** What is labor productivity in Year 1, in real output per hour? (dollars, enter the number only)

**2)** What is labor productivity in Year 2? (dollars, enter the number only)

**3)** By what percent did labor productivity grow from Year 1 to Year 2? (enter the number only, without the % sign)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '42', '5'],
        hint1: 'Productivity = real GDP ÷ hours worked. \\$800 billion ÷ 20 billion hours.',
        hint2: 'Use the same formula with Year 2 numbers: \\$924 billion ÷ 22 billion hours.',
        hint3: 'Percent change = (new − old) ÷ old × 100.',
        explanation: 'Productivity is \\$800B ÷ 20B = \\$40 per hour in Year 1 and \\$924B ÷ 22B = \\$42 per hour in Year 2, a (\\$42 − \\$40) ÷ \\$40 = 5% rise. Real GDP grew 15.5%, but most of that came from 10% more hours worked; only the 5% productivity gain reflects each hour producing more.'
      }
    },
    {
      id: 'macrogdp6-policy',
      type: 'text' as const,
      content: `
## Public Policy and Long-Run Growth

Governments cannot order productivity to rise, but their policies affect the incentives and resources behind it.

| Policy | How it promotes growth | Main source affected |
|---|---|---|
| **Public education and job training** | Raises workers' skills and productivity | Human capital |
| **Infrastructure** (roads, ports, broadband, power grids) | Lowers the cost of producing and moving goods | Physical capital |
| **Funding for research and development**, patent protection | Encourages new ideas and lets inventors earn a return on them | Technology |
| **Tax incentives to save and invest** (lower taxes on business investment, investment tax credits) | Raises the reward for buying new capital | Physical capital |
| **Lower marginal tax rates on income** | Increases the reward for working, saving and starting businesses | Labor and capital |
| **Secure property rights and contract enforcement** | Lets people keep the returns from their investments | All sources |

### Supply-Side Fiscal Policy
Policies that change incentives to work, save and invest are called **supply-side fiscal policies**. In the short run, a tax cut or new spending program also shifts **AD** to the right. Over time, if it raises the stock of capital, the skill of workers or the pace of innovation, it shifts **LRAS** to the right as well.

### A Policy That Can Slow Growth: Crowding Out
When a government runs a budget deficit, it borrows in the **loanable funds market**. Higher government demand for loanable funds raises the **real interest rate**, which makes borrowing more expensive for firms. Private investment falls, so the economy builds **less physical capital**, and future potential output grows more slowly. This is the **crowding-out effect**.

| Step | What happens |
|---|---|
| 1 | Deficit spending increases the demand for loanable funds |
| 2 | The real interest rate rises |
| 3 | Private investment in capital falls |
| 4 | The capital stock grows more slowly, so LRAS shifts right by less than it otherwise would |

> 🔑 **AP Connection:** Many growth FRQs ask you to connect a policy to the **interest rate → investment → capital stock → long-run growth** chain. Always state the direction of each link.
`
    },
    {
      id: 'macrogdp6-frq',
      type: 'text' as const,
      content: `
## FRQ-Style Practice with a Model Answer

**Prompt.** Country Z is producing at full employment. Its government permanently increases funding for public job-training programs, paid for by cutting other spending so the budget balance does not change.

**(a)** Draw a correctly labeled production possibilities curve for Country Z, with capital goods on the horizontal axis and consumer goods on the vertical axis. Show the effect of the training program in the long run.

**(b)** What happens to Country Z's long-run aggregate supply curve? Explain.

**(c)** What happens to labor productivity in Country Z? Explain.

**(d)** Would the effect on long-run growth be larger or smaller if the program had instead been financed by government borrowing? Explain using the real interest rate.

### Model Answer

**(a)** The PPC is bowed outward from the origin with both axes labeled. A second curve lies entirely outside the first, showing an **outward shift**: better-trained workers can produce more of both goods.

**(b)** **LRAS shifts to the right.** Job training increases human capital, which raises the economy's potential (full-employment) output.

**(c)** **Labor productivity increases.** Workers with more skills produce more output per hour.

**(d)** **Smaller.** Borrowing increases the demand for loanable funds, which raises the real interest rate. A higher real interest rate reduces private investment in physical capital, which offsets part of the growth from the training program.

### What Earns the Points
- Naming the **direction** of every change (shifts right, increases, rises).
- Giving a **cause** for every claim ("because human capital increases").
- In (d), following the full chain: borrowing → real interest rate → investment → capital → growth.
`
    },
    {
      id: 'macrogdp6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A government permanently expands funding for public universities and apprenticeships. In the long run, this policy most likely",
            options: [
              "shifts the LRAS curve to the right",
              "shifts the LRAS curve to the left",
              "shifts the AD curve but not the LRAS curve",
              "moves the economy along a fixed LRAS curve"
            ],
            correctAnswer: 0,
            explanation: "More education and training raise human capital and productivity, which increases potential output and shifts LRAS right. The new spending may also raise AD in the short run, but a shift of AD alone, or a movement along a fixed LRAS curve, would mean capacity had not grown."
          },
          {
            question: "A government finances a large spending increase by borrowing. According to the crowding-out effect, long-run growth may slow because",
            options: [
              "lower real interest rates discourage private saving and lending",
              "higher real interest rates reduce private investment in capital",
              "higher income taxes reduce the incentive for households to work",
              "a larger money supply raises the price of new capital goods"
            ],
            correctAnswer: 1,
            explanation: "Government borrowing raises the demand for loanable funds and the real interest rate, which reduces private investment and slows growth of the capital stock. The scenario involves borrowing, not higher taxes or new money, and crowding out raises the real interest rate rather than lowering it."
          },
          {
            question: "Which policy would most directly increase an economy's stock of physical capital?",
            options: [
              "A larger subsidy for college tuition",
              "A tax credit for new equipment",
              "Higher payments to Social Security recipients",
              "An increase in unemployment benefits"
            ],
            correctAnswer: 1,
            explanation: "A tax credit for new equipment lowers the cost of buying capital goods, so firms invest more. A tuition subsidy builds human capital rather than physical capital, and Social Security and unemployment benefits are transfer payments that do not add to the capital stock."
          }
        ]
      }
    }
  ]
}
