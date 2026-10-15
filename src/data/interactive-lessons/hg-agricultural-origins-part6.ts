export const hgAgriculturalOriginsPart6Data = {
  topicSlug: 'hg-agricultural-origins',
  sections: [
    {
      id: 'hgagricu6-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Origins & Hearths

**Part 6 of 7 — The Green Revolution: Data and AP Practice**

---

| Section |
|---------|
| 📖 How the Green Revolution Worked |
| Stimulus 1: India's Wheat Harvest |
| Stimulus 2: Two Villages, Described in Text |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** The **Green Revolution** was the large increase in grain yields in developing countries from the 1940s to the 1980s, driven by **high-yield varieties** (HYVs) of wheat and rice plus **irrigation**, **fertilizer** and **pesticides**. The CED asks you to explain its **positive and negative** consequences (CED Topic 5.5). Expect data on output and a question about who gained and who lost.
`
    },
    {
      id: 'hgagricu6-how',
      type: 'text' as const,
      content: `
## 📖 How the Green Revolution Worked

| Date | Event |
|---|---|
| **1943** | The Rockefeller Foundation and Mexico's government start a wheat research program; **Norman Borlaug** joins in 1944 |
| **1950s** | Borlaug's **semi-dwarf wheat**, with short, stiff stalks that hold heavy grain heads without falling over, spreads across Mexico; Mexico stops needing wheat imports by the mid-1950s |
| **1960** | The **International Rice Research Institute** (IRRI) opens in the Philippines; its semi-dwarf **IR8** rice is released in **1966** |
| **1966** | After severe droughts, India imports large amounts of Mexican wheat seed for Punjab and other irrigated regions |
| **1968** | A US aid official, William Gaud, calls the change a "Green Revolution" |
| **1970** | Borlaug receives the Nobel Peace Prize |

### Why the Package Mattered
A high-yield seed is not high-yield on its own. The semi-dwarf varieties produced big harvests **only** with:
- **Fertilizer**, especially nitrogen (cheap after Haber-Bosch, Part 5)
- **Reliable water**, usually from canals or tube wells
- **Pesticides and herbicides** to protect dense, uniform fields
- **Credit** to buy all of the above each season

That dependence explains most of the consequences that follow.
`
    },
    {
      id: 'hgagricu6-stimulus1',
      type: 'text' as const,
      content: `
## Stimulus 1: India's Wheat Harvest

Rounded figures from India's Ministry of Agriculture (crop years):

| Crop year | Wheat production (million tonnes) |
|---|---|
| **1964–65** | about **12** |
| **1971–72** | about **26** |
| **1990–91** | about **55** |
| **2020–21** | about **110** |

### Reading the Table Before the Questions
1. **Trend:** output rose about ninefold in about 55 years.
2. **Rate:** the fastest relative jump came first: production **more than doubled** in seven years after the new seeds arrived.
3. **Context:** India's population roughly tripled over the same period, from under 500 million to about 1.4 billion, so output per person rose much less than total output.
4. **Limit:** a national total says nothing about **where** gains happened or **who** could buy the food. Most early gains were concentrated in irrigated Punjab, Haryana and western Uttar Pradesh.
`
    },
    {
      id: 'hgagricu6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes the change in India\'s wheat production from 1964–65 to 1971–72?',
            options: [
              'Output more than doubled',
              'Output rose about ninefold',
              'Output grew by a few percent',
              'Output stayed about level'
            ],
            correctAnswer: 0,
            explanation: 'Production rose from about 12 to about 26 million tonnes, more than double, in seven years. The ninefold rise describes the whole period to 2020–21, not the first seven years.'
          },
          {
            question: 'Which additional data would best show whether the gains in the table reached poor households?',
            options: [
              'Wheat output for each year from 1965 to 2021',
              'Food consumption by income group and district',
              'The total area of India planted in wheat by year',
              'The share of India\'s wheat that came from imports'
            ],
            correctAnswer: 1,
            explanation: 'Consumption broken down by income and district would show who actually ate more, at a finer scale than the national total. More years of output or planted area would still be national production data.'
          },
          {
            question: 'Why does the table overstate the gain in food available to each person in India?',
            options: [
              'Wheat is a minor crop in the Indian diet',
              'India\'s population roughly tripled at the same time',
              'Most of the harvest was exported to other countries',
              'Production was counted in pounds rather than tonnes'
            ],
            correctAnswer: 1,
            explanation: 'Output rose about ninefold while population roughly tripled, so output per person rose only about threefold. Wheat is a major staple in north India, and India did not export most of its harvest.'
          }
        ]
      }
    },
    {
      id: 'hgagricu6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus 2: Two Villages, Described in Text

*A hypothetical case built on patterns documented in Green Revolution research.*

**Village A** lies on a canal in an irrigated plain. Its largest landowner borrows money to sink a tube well, buys HYV wheat seed and fertilizer, and doubles his yields within three seasons. He buys a tractor and rents land from neighbors. Some small tenants lose their plots and take wage work. After twenty years, the village well must be drilled deeper because the water table has dropped.

**Village B** lies in a hilly area with rain-fed fields of sorghum, millet and cassava. No HYVs of these crops are available yet, there is no canal, and the nearest fertilizer dealer is a day's walk away. Yields barely change.

### Reading It in Layers
- **Who gained:** in Village A, farmers with land, water and credit gained first; landless and tenant families gained less or lost access to land.
- **Environmental cost:** heavy pumping lowered the water table, as has happened in Punjab, where India's Central Ground Water Board rates most assessment areas as over-exploited.
- **Uneven diffusion:** Village B shows why the Green Revolution largely bypassed much of **sub-Saharan Africa**: early HYVs were wheat and rice, while many African farmers grow other crops on rain-fed land. Average cereal yields there are still about **1.5 tonnes per hectare**, against a world average of about **4** (World Bank, early 2020s).
`
    },
    {
      id: 'hgagricu6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'Which feature of Village A best explains why its largest landowner gained the most from the new seeds?',
            options: [
              'He farmed on rain-fed hills growing several mixed crops',
              'He could pay for wells, fertilizer and machines',
              'He refused the seeds until prices had fallen',
              'He farmed in a region far from any canal'
            ],
            correctAnswer: 1,
            explanation: 'The high-yield seeds needed water, fertilizer and credit, which wealthier farmers could pay for first. Rain-fed hills and distance from canals describe Village B, where the package did not work.'
          },
          {
            question: 'Which reason best explains why Village B saw little change?',
            options: [
              'Its farmers rejected all new technology',
              'Its crops and rain-fed fields did not fit the early HYVs',
              'Its soils were more fertile than those of Village A',
              'Its government banned all imports of chemical fertilizer'
            ],
            correctAnswer: 1,
            explanation: 'Early high-yield varieties were wheat and rice bred for irrigated land, so a village growing sorghum, millet and cassava without irrigation had little to adopt. Nothing in the case shows a refusal, a ban or better soil.'
          },
          {
            question: 'Which environmental consequence of the Green Revolution does Village A illustrate?',
            options: [
              'Falling water tables',
              'Spreading desert sand',
              'Coastal mangrove loss',
              'Melting mountain ice'
            ],
            correctAnswer: 0,
            explanation: 'The village well had to be drilled deeper because irrigation pumping lowered the water table. The other changes are real environmental problems but are not shown in the case.'
          }
        ]
      }
    },
    {
      id: 'hgagricu6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

**Prompt:** The Green Revolution greatly increased grain production in parts of Asia and Latin America.

**(A) Define the Green Revolution.**
> *Model:* The Green Revolution was the spread, from the 1940s to the 1980s, of high-yield varieties of wheat and rice, together with irrigation, chemical fertilizers and pesticides, which sharply raised grain yields in developing countries such as Mexico and India.

**(B) Explain ONE positive consequence of the Green Revolution.**
> *Model:* By raising wheat yields in irrigated areas, the Green Revolution let India more than double its wheat harvest between the mid-1960s and early 1970s, which reduced dependence on food imports and lowered the risk of famine for a fast-growing population.

**(C) Explain ONE negative environmental consequence.**
> *Model:* High-yield varieties need reliable water, so farmers in Punjab pumped groundwater from tube wells faster than rain could recharge it. Falling water tables now threaten the irrigation that the yields depend on.

**(D) Explain ONE reason the Green Revolution had less effect in sub-Saharan Africa.**
> *Model:* Early high-yield varieties were bred for irrigated wheat and rice, but many sub-Saharan African farmers grow sorghum, millet and cassava on rain-fed land, so the seed package did not fit their crops or water supply.

**(E) Explain ONE limitation of using national production data to judge the success of the Green Revolution.**
> *Model:* National totals hide differences at smaller scales: gains in India were concentrated in irrigated states such as Punjab and among farmers who could afford inputs, so poorer regions and landless families may have gained much less than the national figure suggests.

### Why These Answers Score
- Each answer names **a specific place** and a **mechanism** (seeds need water; water use lowers the table).
- Part (E) uses **scale of analysis**, the most common way AP prompts ask about data limits.
`
    },
    {
      id: 'hgagricu6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** India's wheat output rose from about 12 to about 26 million tonnes. By how many million tonnes did it rise?

**2)** Output rose about ninefold while population rose about threefold. About how many times higher was output per person at the end?

**3)** A farm's wheat yield rose from 1.5 to 4.5 tonnes per hectare. By what percent did it rise?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['14', '3', '200'],
        hint1: 'Subtract 12 from 26.',
        hint2: 'Divide the output growth by the population growth.',
        hint3: 'Find the increase, divide by the starting value, then multiply by 100.',
        explanation: '1) 26 − 12 = 14 million tonnes. 2) 9 ÷ 3 = 3, so output per person was about three times higher. 3) (4.5 − 1.5) ÷ 1.5 = 2, an increase of 200 percent.'
      }
    }
  ]
};
