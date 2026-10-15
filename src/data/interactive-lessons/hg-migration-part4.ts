export const hgMigrationPart4Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmigrat4-intro',
      type: 'text' as const,
      content: `
# 🌍 Migration Patterns & Processes

**Part 4 of 7 — Reading Migration Data and Flow Maps**

---

| Section |
|---------|
| 📖 Stocks, Flows and Flow Maps |
| Net Migration Rate and Total Growth |
| Remittances: Absolute vs. Relative Data |
| One Statistic at Three Scales |

> 🔑 **Key Concept:** Migration data come in two forms: a **stock** (how many migrants live in a place at one moment) and a **flow** (how many move during a period). Most AP data questions test whether you can turn a flow into a **rate**, compare **absolute** with **relative** numbers, and see how the same statistic changes at different **scales of analysis**.
`
    },
    {
      id: 'hgmigrat4-flows',
      type: 'text' as const,
      content: `
## 📖 Stocks, Flows and Flow Maps

| Measure | What it counts | Example |
|---|---|---|
| **Migrant stock** | People living in a country who were born elsewhere, at one point in time | About 281 million international migrants worldwide in 2020, about 3.6% of the world's people (UN DESA) |
| **Migration flow** | People who move during a period, usually a year | The number of new immigrants arriving in Canada in 2023 |
| **Net migration** | Immigrants minus emigrants over a period | Positive for the US; negative for many Pacific island and Eastern European states |

### Reading a Flow Map

A **flow map** draws arrows from origins to destinations. The **width of each arrow is proportional to the number of migrants**.

**A flow map described in text: labor migration to the Gulf.** Arrows converge on the Arabian Peninsula. The thickest arrows start in **India**, with thinner but still wide arrows from **Bangladesh, Pakistan, Nepal, the Philippines and Egypt**. They end in **Saudi Arabia, the United Arab Emirates, Kuwait and Qatar**. Almost no arrows run the other way.

**What the map tells you:**
- The **dominant corridor**: South Asia to the Gulf, with India to the UAE among the largest corridors in the world.
- The **direction** of the flow: from lower-wage, younger, more populous countries toward oil-rich states that import labor.

**What the map does not tell you:**
- **The route.** Arrows are drawn as smooth curves; they do not show how people actually traveled.
- **Relative impact.** A wide arrow from India represents a tiny share of India's 1.4 billion people, while a narrower arrow from Nepal is a much larger share of Nepal's population.
- **Who the migrants are.** Age, sex and skill level need other data, such as a population pyramid.
- **Return flows** unless they are drawn separately.

> 🔑 **AP Connection:** For a flow-map stimulus, describe the pattern with **direction, magnitude and specific places** ("the largest flows run from India to the UAE and Saudi Arabia"), then name one thing the map cannot show. That second step is often a separate scored part.
`
    },
    {
      id: 'hgmigrat4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'On a flow map of migration to the Gulf, the arrow from India is about three times as wide as the arrow from Nepal. What can you conclude?',
            options: [
              'A larger share of India\'s people has emigrated to the Gulf than Nepal\'s',
              'About three times as many migrants came from India as from Nepal',
              'Indian migrants traveled roughly three times as far to reach the Gulf',
              'Nepali migrants are more likely to return home than Indian migrants'
            ],
            correctAnswer: 1,
            explanation: 'Arrow width shows the number of migrants, so India sent about three times as many. Because India\'s population is far larger, its share of emigrants is actually smaller, and the map says nothing about distance or return rates.'
          },
          {
            question: 'Which figure is a migrant stock rather than a migration flow?',
            options: [
              'The number of people who left Mexico for the US in 2023',
              'The number of foreign-born residents of Canada in 2021',
              'The number of asylum applications filed in Germany in 2016',
              'The number of Ukrainians who crossed into Poland in March 2022'
            ],
            correctAnswer: 1,
            explanation: 'Counting foreign-born residents at one moment, such as a census year, measures a stock. The other three count movements or applications during a period, which are flows.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat4-rates',
      type: 'text' as const,
      content: `
## Net Migration Rate and Total Growth

### The Net Migration Rate

$$\\text{Net migration rate} = \\frac{\\text{immigrants} - \\text{emigrants}}{\\text{population}} \\times 1{,}000$$

The result is migrants **per 1,000 people per year**, the same unit as the crude birth rate and crude death rate, so the three can be combined.

### Worked Example: Country A

Country A has 8,000,000 people. In one year 60,000 immigrants arrive and 20,000 citizens emigrate.

1. Net migration = 60,000 − 20,000 = **+40,000**
2. Divide by population: 40,000 ÷ 8,000,000 = 0.005
3. Multiply by 1,000: 0.005 × 1,000 = **+5 per 1,000**

A **negative** rate means more people left than arrived (net out-migration).

### Total Growth = Natural Increase + Net Migration

Country A's crude birth rate is 9 per 1,000 and its crude death rate is 11 per 1,000.

| Component | Rate per 1,000 |
|---|---|
| Natural increase (9 − 11) | **−2** |
| Net migration | **+5** |
| **Total growth** | **+3** (0.3% per year) |

Without immigration, Country A would be **shrinking**. Immigration more than offsets its natural decrease.

**Real parallel:** Germany has recorded more deaths than births every year since **1972**, yet its population has grown in most years since 2011, because net immigration more than offset the natural decrease. In the US, the Census Bureau's estimates for 2024 showed **net international migration supplying most of the year's population growth**.

> ⚠️ Do not confuse the **rate of natural increase** (births minus deaths) with **population growth**. A country with a negative natural increase can still grow if net migration is large enough, and a country with high natural increase can grow slowly if many people emigrate.

> 🔑 **AP Connection:** Show the setup when you calculate: write the formula, substitute the numbers, and label the unit "per 1,000." Then interpret the result in one sentence ("Country A gains 5 migrants per 1,000 people per year, which offsets its natural decrease").
`
    },
    {
      id: 'hgmigrat4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Country B has 5,000,000 people. In one year 15,000 immigrants arrive and 40,000 people emigrate. What is Country B's net migration rate per 1,000? (Include the sign.)

**2)** Country C has a crude birth rate of 8, a crude death rate of 12 and a net migration rate of +6, all per 1,000. What is its total growth rate per 1,000?

**3)** Country D's population is 2,000,000 and its net migration rate is +3 per 1,000. What is its net migration in number of people? (Enter digits only, with no commas.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['-5', '2', '6000'],
        hint1: 'Net migration = 15,000 − 40,000. Divide by 5,000,000, then multiply by 1,000.',
        hint2: 'Natural increase is 8 − 12. Add the net migration rate.',
        hint3: 'Work backward: 3 per 1,000 means 3 people for every 1,000 residents.',
        explanation: '1) (15,000 − 40,000) ÷ 5,000,000 × 1,000 = −5 per 1,000. 2) (8 − 12) + 6 = +2 per 1,000. 3) 2,000,000 × 3 ÷ 1,000 = 6,000 people.'
      }
    },
    {
      id: 'hgmigrat4-remittances',
      type: 'text' as const,
      content: `
## Remittances: Absolute vs. Relative Data

**Remittances** are money migrants send home. The World Bank estimated that remittances to low- and middle-income countries reached about **\\$656 billion in 2023**, more than those countries received in official development aid.

| Country | Remittances received, 2023 (World Bank, rounded) | Share of GDP |
|---|---|---|
| **India** | About \\$120 billion, the largest of any country | About 3% |
| **Mexico** | More than \\$60 billion | About 4% |
| **Philippines** | About \\$39 billion | About 9% |
| **Honduras** | About \\$9 billion | About one-quarter |
| **Tajikistan** | A few billion dollars | Close to half |

### Worked Example: Turning Dollars into Dependence

Country R receives \\$3 billion in remittances, and its GDP is \\$12 billion.

$$\\text{Remittances as \\% of GDP} = \\frac{3}{12} \\times 100 = 25\\%$$

Country R receives far fewer dollars than India, but a quarter of its economy depends on money from abroad.

**How to read the table:**
- **Absolute** data (dollars) show where the **most money** goes: India and Mexico, which have huge diasporas.
- **Relative** data (share of GDP) show where remittances **matter most**: small economies with large shares of their workers abroad, such as Tajikistan, whose migrants work mainly in Russia.
- High dependence brings **risk**: when Russia's economy or currency weakens, Tajik household incomes fall.

> 🔑 **AP Connection:** If a question asks which country is "most dependent" on remittances, use the **share of GDP**, not the dollar total. Explaining why the two rankings differ (population size, size of the economy) is a common "explain" task.
`
    },
    {
      id: 'hgmigrat4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country X has a natural increase of −3 per 1,000 and a net migration rate of +5 per 1,000. Which statement is correct?',
            options: [
              'The population is shrinking by 8 per 1,000 because deaths and emigration are combined',
              'The population is growing by 2 per 1,000 because arrivals outweigh excess deaths',
              'The population is growing by 8 per 1,000 because both rates are added as positive values',
              'The population is shrinking by 3 per 1,000 because migration is not part of growth rates'
            ],
            correctAnswer: 1,
            explanation: 'Total growth is natural increase plus net migration: −3 + 5 = +2 per 1,000. Treating both values as positive, or leaving migration out, gives the wrong total.'
          },
          {
            question: 'India receives far more remittance dollars than Tajikistan, yet remittances are a much larger share of Tajikistan\'s GDP. What best explains the difference?',
            options: [
              'Indian migrants send home a smaller share of their wages',
              'Tajikistan\'s economy is far smaller than India\'s economy',
              'Remittances to India are mostly counted as foreign aid',
              'Tajikistan\'s migrants mostly work inside Tajikistan'
            ],
            correctAnswer: 1,
            explanation: 'A share of GDP depends on the size of the economy: a few billion dollars is close to half of Tajikistan\'s small GDP but a tiny fraction of India\'s large one. Remittances are not counted as aid, and Tajik migrants work mainly in Russia.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat4-scale',
      type: 'text' as const,
      content: `
## One Statistic at Three Scales

The **share of residents who are foreign-born** changes dramatically with the scale of analysis.

| Place | Scale | Share foreign-born (about, 2020–2023) |
|---|---|---|
| United States | National | About 14% |
| California | State | About 27% |
| West Virginia | State | About 2% |
| New York City | City | About 36% |
| Miami-Dade County, Florida | County | More than half |

**Global comparison:** in Gulf states such as the **United Arab Emirates** and **Qatar**, migrants make up a **large majority** of residents (UN DESA estimates for 2020 put them near 88% and 77%), far above any US state.

### Worked Reading: What Each Scale Shows

- **National (14%)** hides enormous variation. A reader could assume immigrants are spread evenly across the country.
- **State** data show the concentration in **gateway states** (California, New York, Texas, Florida, New Jersey) and very low shares in much of Appalachia and the northern Plains.
- **City or county** data show that immigrants cluster in **metropolitan areas**, especially gateway cities with established communities, which is where chain migration leads.

### Components Can Move in Opposite Directions

US Census Bureau estimates for the early 2020s show that **California and New York lost residents to other states** (negative net domestic migration) while still **gaining immigrants from abroad**. **Florida and Texas** gained on both counts. A single "net migration" figure for California hides two flows moving in opposite directions.

> 🔑 **AP Connection:** When a question gives data at one scale, ask what a different scale would reveal. "At the national scale the US is about 14% foreign-born, but at the local scale Miami-Dade County is more than half foreign-born, which shows that immigrants cluster in gateway cities" is a complete scale-of-analysis answer.
`
    },
    {
      id: 'hgmigrat4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Choose the Right Measure** 🔍

Pick the measure that best answers each question.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Which country depends most on money sent home by its migrants? Use ___',
            options: ['remittances as a share of GDP', 'total remittance dollars', 'migrant stock', 'arrow width on a flow map']
          },
          {
            label: 'How many foreign-born people lived in Canada on census day? This is a ___',
            options: ['migration flow', 'migrant stock', 'net migration rate', 'natural increase']
          },
          {
            label: 'Is Country E growing even though deaths exceed births? Compare natural increase with the ___',
            options: ['net migration rate', 'migrant stock', 'remittance total', 'crude birth rate']
          }
        ],
        correctAnswers: ['remittances as a share of GDP', 'migrant stock', 'net migration rate'],
        hint1: 'Dependence is a relative measure, not an absolute one.',
        hint2: 'Counted at one moment rather than over a period.',
        hint3: 'Total growth = natural increase + one more component.',
        explanation: 'Dependence calls for a relative measure, so remittances as a share of GDP. A count of residents at one moment is a stock. Whether a country grows despite natural decrease depends on its net migration rate.'
      }
    },
    {
      id: 'hgmigrat4-quiz3',
      type: 'multiple-choice' as const,
      content: `
**Apply the Data** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The US is about 14% foreign-born, but Miami-Dade County is more than half foreign-born. What does this comparison best illustrate?',
            options: [
              'National data are less accurate than county data',
              'Immigrants concentrate in particular gateway places',
              'Most immigrants live in rural counties of the South',
              'Immigration to the US is falling at the national scale'
            ],
            correctAnswer: 1,
            explanation: 'A low national share and a very high local share show that immigrants cluster in certain gateway metros. Both figures are accurate; they simply describe different scales.'
          },
          {
            question: 'Census estimates show California losing residents to other states while gaining immigrants from abroad. Which conclusion is best supported?',
            options: [
              'California\'s population must be shrinking quickly',
              'Domestic and international flows can differ in direction',
              'Immigrants to California later all move to other states',
              'Net migration data cannot be calculated for single states'
            ],
            correctAnswer: 1,
            explanation: 'The two components of California\'s migration move in opposite directions, so a single net figure hides them. Whether the population shrinks depends on the sizes of both flows and natural increase.'
          }
        ]
      }
    }
  ]
}
